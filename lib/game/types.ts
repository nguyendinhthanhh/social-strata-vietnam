/**
 * Multiplayer Classroom Game Types & State Contracts
 * Product: "ĐẤU TRƯỜNG TRI THỨC — MLN131 LIVE CHALLENGE"
 */

export type RoomStatus =
  | "LOBBY"
  | "QUESTION_ACTIVE"
  | "QUESTION_REVEAL"
  | "ROUND_SUMMARY"
  | "FINISHED";

export interface GameQuestion {
  id: string;
  round: number;
  prompt: string;
  options: string[];
  correctIndex: number;
  timeLimitSeconds: number;
  sourceId: string;
  sourceLabel: string;
  explanation: string;
}

export interface PlayerAnswer {
  optionIndex: number;
  submittedAt: number;
  timeTakenMs: number;
  scoreAwarded: number;
  isCorrect: boolean;
}

export interface GamePlayer {
  id: string;
  nickname: string;
  reconnectToken: string;
  score: number;
  streak: number;
  correctCount: number;
  totalTimeMs: number;
  connected: boolean;
  joinedAt: number;
  lastActiveAt: number;
}

export interface RoomSettings {
  timeLimitSeconds: number; // default 20s (options: 15, 20, 30)
  questionCount: number; // default 15 (options: 15, 12, 10, 6)
  mode: "INDIVIDUAL" | "TEAM";
}

export interface GameRoom {
  code: string;
  hostToken: string;
  createdAt: number;
  status: RoomStatus;
  currentQuestionIndex: number; // 0 to 11
  currentRound: number; // 1, 2, or 3
  questionStartedAt: number;
  questionDeadline: number;
  timeLimitSeconds: number;
  isPaused: boolean;
  pausedRemainingMs: number;
  settings: RoomSettings;
  players: Record<string, GamePlayer>;
  answers: Record<number, Record<string, PlayerAnswer>>; // questionIndex -> playerId -> answer
}

/**
 * Sanitized client state returned to players and hosts
 * Guarantees server authority: correct answers are NOT revealed while question is active.
 */
export interface SanitizedGameState {
  roomCode: string;
  status: RoomStatus;
  currentQuestionIndex: number;
  totalQuestions: number;
  currentRound: number;
  totalRounds: number;
  roundTitle: string;
  roundDescription: string;
  roundMultiplier: number;
  timeLimitSeconds: number;
  questionDeadline: number;
  serverTime: number;
  isPaused: boolean;
  totalParticipants: number;
  settings: RoomSettings;
  
  // Active Question Info (sanitized: no correctIndex or explanation when active)
  question: {
    id: string;
    round: number;
    prompt: string;
    options: string[];
    sourceLabel?: string;
    correctIndex?: number; // ONLY present during QUESTION_REVEAL, ROUND_SUMMARY, or FINISHED
    explanation?: string; // ONLY present during QUESTION_REVEAL, ROUND_SUMMARY, or FINISHED
    sourceId?: string;
  } | null;

  // Answer distribution counts (e.g. { 0: 5, 1: 18, 2: 2, 3: 0 }) - revealed after question closes
  answerStats?: Record<number, number>;

  // Leaderboard: Top players sorted deterministically by score, correctCount, totalTimeMs
  leaderboard: Array<{
    playerId: string;
    nickname: string;
    score: number;
    streak: number;
    correctCount: number;
    rank: number;
  }>;

  // Current Player personal status (if player session provided)
  playerStatus?: {
    playerId: string;
    nickname: string;
    score: number;
    streak: number;
    correctCount: number;
    rank: number;
    hasSubmitted: boolean;
    selectedOptionIndex?: number;
    isCorrect?: boolean;
    scoreAwarded?: number;
  };
}

export type HostActionType =
  | "START_GAME"
  | "NEXT_QUESTION"
  | "REVEAL_ANSWER"
  | "SHOW_ROUND_SUMMARY"
  | "PAUSE_TIMER"
  | "RESUME_TIMER"
  | "END_GAME"
  | "RESET_LOBBY"
  | "UPDATE_SETTINGS";
