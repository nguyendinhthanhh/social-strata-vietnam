/**
 * Authoritative Server Game Engine
 * Product: "ĐẤU TRƯỜNG TRI THỨC — MLN131 LIVE CHALLENGE"
 *
 * Implements server-side state machine, score calculations, deadline enforcement,
 * anti-cheat answer sanitization, and reconnect session management.
 */

import {
  GameRoom,
  GamePlayer,
  PlayerAnswer,
  SanitizedGameState,
  HostActionType,
  GameQuestion,
  RoomSettings,
} from "./types";
import rawQuestionData from "@/content/GAME_QUESTION_BANK.json";

const QUESTIONS: GameQuestion[] = rawQuestionData.questions;
const ROUNDS = rawQuestionData.rounds;

// In-memory server-authoritative room store (preserved across Next.js hot reload / route invocations)
declare global {
  // eslint-disable-next-line no-var
  var __mln131_game_rooms: Map<string, GameRoom> | undefined;
}

if (!globalThis.__mln131_game_rooms) {
  globalThis.__mln131_game_rooms = new Map<string, GameRoom>();
}

const rooms = globalThis.__mln131_game_rooms;

/**
 * Periodically purge stale rooms older than 2 hours
 */
function cleanStaleRooms(): void {
  const now = Date.now();
  const TWO_HOURS_MS = 2 * 60 * 60 * 1000;
  for (const [code, room] of rooms.entries()) {
    if (now - room.createdAt > TWO_HOURS_MS) {
      rooms.delete(code);
    }
  }
}

/**
 * Generate unique 5-character room code (e.g. "JER47" or "MLN07")
 */
function generateRoomCode(): string {
  const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
  let code = "";
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function generateSecureToken(): string {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

/**
 * Get active question set based on room settings (15 vs 12 vs 10 vs 6)
 */
function getRoomQuestions(room: GameRoom): GameQuestion[] {
  const count = room.settings.questionCount || 15;
  if (count === 15) {
    return QUESTIONS;
  }
  if (count === 12) {
    // 4 questions per round (Total: 12)
    return QUESTIONS.filter((_, idx) => [0, 1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 14].includes(idx));
  }
  if (count === 10) {
    // 3 questions in R1, 4 questions in R2, 3 questions in R3 (Total: 10)
    return QUESTIONS.filter((_, idx) => [0, 1, 2, 5, 6, 7, 8, 11, 12, 14].includes(idx));
  }
  if (count === 6) {
    // 2 questions per round (Total: 6)
    return QUESTIONS.filter((_, idx) => [0, 1, 5, 6, 11, 14].includes(idx));
  }
  return QUESTIONS.slice(0, count);
}

/**
 * Check if the active question has expired and auto-transition to QUESTION_REVEAL
 */
function updateRoomStatusIfExpired(room: GameRoom): void {
  if (room.status === "QUESTION_ACTIVE" && !room.isPaused) {
    const now = Date.now();
    if (now >= room.questionDeadline) {
      room.status = "QUESTION_REVEAL";
    }
  }
}

/**
 * Host: Create a new game room
 */
export function createGameRoom(
  customCode?: string,
  initialSettings?: Partial<RoomSettings>
): {
  roomCode: string;
  hostToken: string;
} {
  cleanStaleRooms();

  let code = (customCode || generateRoomCode()).toUpperCase();
  while (rooms.has(code) && !customCode) {
    code = generateRoomCode();
  }

  const defaultSettings: RoomSettings = {
    timeLimitSeconds: initialSettings?.timeLimitSeconds || 20,
    questionCount: initialSettings?.questionCount || 15,
    mode: initialSettings?.mode || "INDIVIDUAL",
  };

  const hostToken = generateSecureToken();
  const newRoom: GameRoom = {
    code,
    hostToken,
    createdAt: Date.now(),
    status: "LOBBY",
    currentQuestionIndex: 0,
    currentRound: 1,
    questionStartedAt: 0,
    questionDeadline: 0,
    timeLimitSeconds: defaultSettings.timeLimitSeconds,
    isPaused: false,
    pausedRemainingMs: 0,
    settings: defaultSettings,
    players: {},
    answers: {},
  };

  rooms.set(code, newRoom);
  return { roomCode: code, hostToken };
}

/**
 * Player: Join an existing room
 */
export function joinGameRoom(
  code: string,
  rawNickname: string,
  reconnectToken?: string
): {
  success: boolean;
  message?: string;
  player?: GamePlayer;
  roomCode?: string;
} {
  const normalizedCode = code.trim().toUpperCase();
  const room = rooms.get(normalizedCode);

  if (!room) {
    return { success: false, message: "Không tìm thấy phòng chơi với mã này." };
  }

  const now = Date.now();

  // 1. Reconnection Check
  if (reconnectToken) {
    const existingPlayer = Object.values(room.players).find(
      (p) => p.reconnectToken === reconnectToken
    );
    if (existingPlayer) {
      existingPlayer.connected = true;
      existingPlayer.lastActiveAt = now;
      return { success: true, player: existingPlayer, roomCode: normalizedCode };
    }
  }

  // 2. Nickname Sanitization & Deduplication
  let nickname = rawNickname.trim().replace(/[<>]/g, "");
  if (!nickname || nickname.length < 2) {
    nickname = `Người chơi ${Math.floor(100 + Math.random() * 900)}`;
  }
  if (nickname.length > 18) {
    nickname = nickname.substring(0, 18);
  }

  // Handle duplicate nickname in room
  let finalNickname = nickname;
  let counter = 2;
  const existingNames = new Set(
    Object.values(room.players).map((p) => p.nickname.toLowerCase())
  );
  while (existingNames.has(finalNickname.toLowerCase())) {
    finalNickname = `${nickname} (${counter})`;
    counter++;
  }

  // 3. Register Player
  const playerId = `p-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const newReconnectToken = generateSecureToken();

  const newPlayer: GamePlayer = {
    id: playerId,
    nickname: finalNickname,
    reconnectToken: newReconnectToken,
    score: 0,
    streak: 0,
    correctCount: 0,
    totalTimeMs: 0,
    connected: true,
    joinedAt: now,
    lastActiveAt: now,
  };

  room.players[playerId] = newPlayer;
  return { success: true, player: newPlayer, roomCode: normalizedCode };
}

/**
 * Player: Submit answer for current question
 */
export function submitPlayerAnswer(
  code: string,
  playerId: string,
  reconnectToken: string,
  optionIndex: number
): {
  success: boolean;
  message?: string;
  scoreAwarded?: number;
} {
  const normalizedCode = code.trim().toUpperCase();
  const room = rooms.get(normalizedCode);
  if (!room) {
    return { success: false, message: "Phòng không tồn tại." };
  }

  updateRoomStatusIfExpired(room);

  if (room.status !== "QUESTION_ACTIVE") {
    return { success: false, message: "Câu hỏi hiện không mở để trả lời." };
  }

  const player = room.players[playerId];
  if (!player || player.reconnectToken !== reconnectToken) {
    return { success: false, message: "Xác thực người chơi không hợp lệ." };
  }

  const qIndex = room.currentQuestionIndex;
  if (!room.answers[qIndex]) {
    room.answers[qIndex] = {};
  }

  // Prevent duplicate submission
  if (room.answers[qIndex][playerId]) {
    return { success: false, message: "Bạn đã nộp câu trả lời cho câu này rồi." };
  }

  const roomQuestions = getRoomQuestions(room);
  const currentQ = roomQuestions[qIndex];
  if (!currentQ) {
    return { success: false, message: "Không tìm thấy dữ liệu câu hỏi." };
  }

  const now = Date.now();
  const timeTakenMs = Math.max(0, now - room.questionStartedAt);
  const timeLimitMs = room.timeLimitSeconds * 1000;

  // Verify within deadline (+ 1s grace period for network jitter)
  if (now > room.questionDeadline + 1000) {
    return { success: false, message: "Hết thời gian trả lời câu hỏi này." };
  }

  const isCorrect = optionIndex === currentQ.correctIndex;

  // Deterministic Scoring Specification:
  // - Correct: between 500 and 1,000 points based on response time
  // - Final Round (Round 3): 1.5x Multiplier (between 750 and 1,500 points)
  // - Streak Bonus: up to 200 pts (+50 pts per streak step)
  // - Wrong or missed: 0 points
  let scoreAwarded = 0;
  if (isCorrect) {
    const speedRatio = Math.max(0, Math.min(1, 1 - timeTakenMs / timeLimitMs));
    const baseScore = Math.round(500 + 500 * speedRatio);
    const streakBonus = Math.min(200, player.streak * 50);
    const roundMultiplier = currentQ.round === 3 ? 1.5 : 1.0;

    scoreAwarded = Math.round((baseScore + streakBonus) * roundMultiplier);

    player.score += scoreAwarded;
    player.streak += 1;
    player.correctCount += 1;
    player.totalTimeMs += timeTakenMs;
  } else {
    player.streak = 0;
    player.totalTimeMs += timeTakenMs;
  }

  player.lastActiveAt = now;

  const playerAnswer: PlayerAnswer = {
    optionIndex,
    submittedAt: now,
    timeTakenMs,
    scoreAwarded,
    isCorrect,
  };

  room.answers[qIndex][playerId] = playerAnswer;

  // Auto-reveal if ALL connected players have submitted
  const activePlayers = Object.values(room.players).filter((p) => p.connected);
  const submissionsCount = Object.keys(room.answers[qIndex]).length;
  if (activePlayers.length > 0 && submissionsCount >= activePlayers.length) {
    room.status = "QUESTION_REVEAL";
  }

  return { success: true, scoreAwarded };
}

/**
 * Host: Execute game control action
 */
export function executeHostAction(
  code: string,
  hostToken: string,
  action: HostActionType,
  payload?: any
): {
  success: boolean;
  message?: string;
} {
  const normalizedCode = code.trim().toUpperCase();
  const room = rooms.get(normalizedCode);
  if (!room) {
    return { success: false, message: "Phòng không tồn tại." };
  }

  if (room.hostToken !== hostToken) {
    return { success: false, message: "Bạn không có quyền Host phòng này." };
  }

  const now = Date.now();
  const roomQuestions = getRoomQuestions(room);

  switch (action) {
    case "UPDATE_SETTINGS": {
      if (room.status !== "LOBBY") {
        return { success: false, message: "Chỉ có thể đổi cài đặt khi ở phòng chờ (Lobby)." };
      }
      if (payload) {
        if (payload.timeLimitSeconds) room.settings.timeLimitSeconds = Number(payload.timeLimitSeconds);
        if (payload.questionCount) room.settings.questionCount = Number(payload.questionCount);
        if (payload.mode) room.settings.mode = payload.mode;
        room.timeLimitSeconds = room.settings.timeLimitSeconds;
      }
      return { success: true };
    }

    case "START_GAME": {
      room.currentQuestionIndex = 0;
      room.currentRound = 1;
      const q = roomQuestions[0];
      room.timeLimitSeconds = room.settings.timeLimitSeconds || q?.timeLimitSeconds || 20;
      room.questionStartedAt = now;
      room.questionDeadline = now + room.timeLimitSeconds * 1000;
      room.status = "QUESTION_ACTIVE";
      room.isPaused = false;
      return { success: true };
    }

    case "NEXT_QUESTION": {
      const nextIndex = room.currentQuestionIndex + 1;
      if (nextIndex >= roomQuestions.length) {
        room.status = "FINISHED";
        return { success: true };
      }

      // Check if transitioning to new round
      const nextQ = roomQuestions[nextIndex];
      const prevQ = roomQuestions[room.currentQuestionIndex];
      if (nextQ.round !== prevQ.round && room.status !== "ROUND_SUMMARY") {
        room.status = "ROUND_SUMMARY";
        return { success: true };
      }

      room.currentQuestionIndex = nextIndex;
      room.currentRound = nextQ.round;
      room.timeLimitSeconds = room.settings.timeLimitSeconds || nextQ.timeLimitSeconds || 20;
      room.questionStartedAt = now;
      room.questionDeadline = now + room.timeLimitSeconds * 1000;
      room.status = "QUESTION_ACTIVE";
      room.isPaused = false;
      return { success: true };
    }

    case "REVEAL_ANSWER": {
      room.status = "QUESTION_REVEAL";
      return { success: true };
    }

    case "SHOW_ROUND_SUMMARY": {
      room.status = "ROUND_SUMMARY";
      return { success: true };
    }

    case "PAUSE_TIMER": {
      if (room.status === "QUESTION_ACTIVE" && !room.isPaused) {
        room.isPaused = true;
        room.pausedRemainingMs = Math.max(0, room.questionDeadline - now);
      }
      return { success: true };
    }

    case "RESUME_TIMER": {
      if (room.status === "QUESTION_ACTIVE" && room.isPaused) {
        room.isPaused = false;
        room.questionDeadline = now + room.pausedRemainingMs;
      }
      return { success: true };
    }

    case "END_GAME": {
      room.status = "FINISHED";
      return { success: true };
    }

    case "RESET_LOBBY": {
      room.status = "LOBBY";
      room.currentQuestionIndex = 0;
      room.currentRound = 1;
      room.answers = {};
      Object.values(room.players).forEach((p) => {
        p.score = 0;
        p.streak = 0;
        p.correctCount = 0;
        p.totalTimeMs = 0;
      });
      return { success: true };
    }

    default:
      return { success: false, message: "Thao tác không được hỗ trợ." };
  }
}

/**
 * Client Sanitizer: Returns secure view for player or host
 */
export function getSanitizedGameState(
  code: string,
  playerToken?: string,
  isHost: boolean = false
): SanitizedGameState | null {
  const normalizedCode = code.trim().toUpperCase();
  const room = rooms.get(normalizedCode);
  if (!room) return null;

  updateRoomStatusIfExpired(room);

  const now = Date.now();
  const roomQuestions = getRoomQuestions(room);
  const qIndex = room.currentQuestionIndex;
  const currentQ = roomQuestions[qIndex];
  const roundInfo = ROUNDS.find((r) => r.roundNumber === room.currentRound) || {
    title: `Vòng ${room.currentRound}`,
    description: "",
    scoreMultiplier: 1.0,
  };

  // Build Leaderboard (Deterministic sorting: Score DESC -> CorrectCount DESC -> TotalTimeMs ASC)
  const allPlayers = Object.values(room.players);
  const sortedPlayers = [...allPlayers].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.correctCount !== a.correctCount) return b.correctCount - a.correctCount;
    return a.totalTimeMs - b.totalTimeMs;
  });

  const leaderboard = sortedPlayers.slice(0, 10).map((p, idx) => ({
    playerId: p.id,
    nickname: p.nickname,
    score: p.score,
    streak: p.streak,
    correctCount: p.correctCount,
    rank: idx + 1,
  }));

  // Identify Current Player
  let playerStatus: SanitizedGameState["playerStatus"] | undefined = undefined;
  if (playerToken) {
    const p = allPlayers.find((player) => player.reconnectToken === playerToken);
    if (p) {
      const pRank = sortedPlayers.findIndex((item) => item.id === p.id) + 1;
      const pAnswer = room.answers[qIndex]?.[p.id];

      playerStatus = {
        playerId: p.id,
        nickname: p.nickname,
        score: p.score,
        streak: p.streak,
        correctCount: p.correctCount,
        rank: pRank || 1,
        hasSubmitted: Boolean(pAnswer),
        selectedOptionIndex: pAnswer?.optionIndex,
        isCorrect:
          room.status === "QUESTION_REVEAL" || room.status === "FINISHED"
            ? pAnswer?.isCorrect
            : undefined,
        scoreAwarded:
          room.status === "QUESTION_REVEAL" || room.status === "FINISHED"
            ? pAnswer?.scoreAwarded
            : undefined,
      };
    }
  }

  // Answer distribution statistics
  let answerStats: Record<number, number> | undefined = undefined;
  if (room.status === "QUESTION_REVEAL" || room.status === "ROUND_SUMMARY" || room.status === "FINISHED" || isHost) {
    const qAnswers = room.answers[qIndex] || {};
    const stats: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
    Object.values(qAnswers).forEach((ans) => {
      if (stats[ans.optionIndex] !== undefined) {
        stats[ans.optionIndex]++;
      }
    });
    answerStats = stats;
  }

  // Sanitize Question: NEVER expose correctIndex or explanation when question is active!
  let sanitizedQuestion: SanitizedGameState["question"] = null;
  if (currentQ && room.status !== "LOBBY") {
    const isRevealed =
      room.status === "QUESTION_REVEAL" ||
      room.status === "ROUND_SUMMARY" ||
      room.status === "FINISHED";

    sanitizedQuestion = {
      id: currentQ.id,
      round: currentQ.round,
      prompt: currentQ.prompt,
      options: currentQ.options,
      sourceLabel: isRevealed ? currentQ.sourceLabel : undefined,
      sourceId: isRevealed ? currentQ.sourceId : undefined,
      correctIndex: isRevealed ? currentQ.correctIndex : undefined,
      explanation: isRevealed ? currentQ.explanation : undefined,
    };
  }

  return {
    roomCode: room.code,
    status: room.status,
    currentQuestionIndex: room.currentQuestionIndex,
    totalQuestions: roomQuestions.length,
    currentRound: room.currentRound,
    totalRounds: ROUNDS.length,
    roundTitle: roundInfo.title,
    roundDescription: roundInfo.description,
    roundMultiplier: currentQ?.round === 3 ? 1.5 : 1.0,
    timeLimitSeconds: room.timeLimitSeconds,
    questionDeadline: room.questionDeadline,
    serverTime: now,
    isPaused: room.isPaused,
    totalParticipants: allPlayers.length,
    settings: room.settings,
    question: sanitizedQuestion,
    answerStats,
    leaderboard,
    playerStatus,
  };
}
