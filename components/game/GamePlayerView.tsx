"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SanitizedGameState } from "@/lib/game/types";
import {
  Smartphone,
  CheckCircle2,
  XCircle,
  Clock,
  Award,
  Flame,
  ArrowRight,
  RefreshCw,
  LogOut,
  Sparkles,
} from "lucide-react";

interface GamePlayerViewProps {
  initialRoomCode?: string;
  onExit: () => void;
}

interface StoredPlayerSession {
  roomCode: string;
  playerId: string;
  reconnectToken: string;
  nickname: string;
}

export const GamePlayerView: React.FC<GamePlayerViewProps> = ({
  initialRoomCode = "",
  onExit,
}) => {
  const [roomCodeInput, setRoomCodeInput] = useState(initialRoomCode.toUpperCase());
  const [nicknameInput, setNicknameInput] = useState("");
  const [session, setSession] = useState<StoredPlayerSession | null>(null);
  const [gameState, setGameState] = useState<SanitizedGameState | null>(null);
  const [isJoining, setIsJoining] = useState(false);
  const [joinError, setJoinError] = useState("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(20);

  // Restore session from sessionStorage on mount
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("vndt_game_player");
      if (stored) {
        const parsed: StoredPlayerSession = JSON.parse(stored);
        if (parsed.roomCode && parsed.reconnectToken) {
          setSession(parsed);
          setRoomCodeInput(parsed.roomCode);
          setNicknameInput(parsed.nickname);
        }
      }
    } catch {
      // Ignore sessionStorage parsing errors
    }
  }, []);

  // Poll room state every 1000ms if session exists
  const fetchPlayerState = useCallback(async () => {
    if (!session) return;
    try {
      const res = await fetch(
        `/api/game/state?code=${session.roomCode}&token=${session.reconnectToken}&t=${Date.now()}`
      );
      const data = await res.json();
      if (data.success && data.gameState) {
        setGameState(data.gameState);
      } else if (res.status === 404) {
        // Room was closed
        sessionStorage.removeItem("vndt_game_player");
        setSession(null);
        setGameState(null);
        setJoinError("Phòng chơi đã kết thúc hoặc không tồn tại.");
      }
    } catch {
      // Ignore transient network errors
    }
  }, [session]);

  useEffect(() => {
    if (!session) return;
    fetchPlayerState();
    const interval = setInterval(fetchPlayerState, 1000);
    return () => clearInterval(interval);
  }, [session, fetchPlayerState]);

  // Sync client countdown timer
  useEffect(() => {
    if (!gameState || gameState.status !== "QUESTION_ACTIVE" || gameState.isPaused) return;

    const updateTimer = () => {
      const now = Date.now();
      const leftMs = Math.max(0, gameState.questionDeadline - now);
      setRemainingSeconds(Math.ceil(leftMs / 1000));
    };

    updateTimer();
    const timer = setInterval(updateTimer, 200);
    return () => clearInterval(timer);
  }, [gameState]);

  // Reset selected option when question changes
  useEffect(() => {
    if (gameState?.playerStatus?.selectedOptionIndex !== undefined) {
      setSelectedOption(gameState.playerStatus.selectedOptionIndex);
    } else {
      setSelectedOption(null);
    }
  }, [gameState?.currentQuestionIndex, gameState?.playerStatus?.selectedOptionIndex]);

  // Join Room handler
  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomCodeInput.trim()) {
      setJoinError("Vui lòng nhập mã phòng.");
      return;
    }
    if (!nicknameInput.trim()) {
      setJoinError("Vui lòng nhập biệt danh của bạn.");
      return;
    }

    setIsJoining(true);
    setJoinError("");

    try {
      const res = await fetch("/api/game/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomCode: roomCodeInput.trim().toUpperCase(),
          nickname: nicknameInput.trim(),
          reconnectToken: session?.reconnectToken,
        }),
      });

      const data = await res.json();
      if (data.success && data.player && data.roomCode) {
        const newSession: StoredPlayerSession = {
          roomCode: data.roomCode,
          playerId: data.player.id,
          reconnectToken: data.player.reconnectToken,
          nickname: data.player.nickname,
        };
        sessionStorage.setItem("vndt_game_player", JSON.stringify(newSession));
        setSession(newSession);
        setGameState(data.gameState);
      } else {
        setJoinError(data.message || "Không thể vào phòng.");
      }
    } catch (err: any) {
      setJoinError("Lỗi kết nối máy chủ. Vui lòng thử lại.");
    } finally {
      setIsJoining(false);
    }
  };

  // Submit Answer handler
  const handleSubmitAnswer = async (optionIdx: number) => {
    if (!session || !gameState || gameState.status !== "QUESTION_ACTIVE") return;
    if (gameState.playerStatus?.hasSubmitted || selectedOption !== null) return;

    setSelectedOption(optionIdx);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/game/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomCode: session.roomCode,
          playerId: session.playerId,
          reconnectToken: session.reconnectToken,
          optionIndex: optionIdx,
        }),
      });
      const data = await res.json();
      if (data.success && data.gameState) {
        setGameState(data.gameState);
      }
    } catch {
      // Network error handling
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLeaveRoom = () => {
    sessionStorage.removeItem("vndt_game_player");
    setSession(null);
    setGameState(null);
    setSelectedOption(null);
  };

  const optionLetters = ["A", "B", "C", "D"];
  const optionThemes = [
    {
      bg: "bg-vermilion hover:bg-vermilion/90",
      border: "border-vermilion",
      shape: "▲",
      label: "Tam giác Đỏ",
    },
    {
      bg: "bg-blue-600 hover:bg-blue-500",
      border: "border-blue-600",
      shape: "■",
      label: "Vuông Xanh",
    },
    {
      bg: "bg-amber-600 hover:bg-amber-500",
      border: "border-amber-600",
      shape: "●",
      label: "Tròn Vàng",
    },
    {
      bg: "bg-emerald-600 hover:bg-emerald-500",
      border: "border-emerald-600",
      shape: "◆",
      label: "Thoi Lục",
    },
  ];

  // 1. JOIN FORM SCREEN
  if (!session || !gameState) {
    return (
      <div className="max-w-md mx-auto bg-carbon text-chalk rounded-md border border-charcoal-deep shadow-2xl p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-sm bg-citron text-carbon flex items-center justify-center font-mono font-black text-xl shadow-sm">
            <Smartphone className="w-6 h-6 text-carbon" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-citron font-bold block">
            Đấu Trường Trực Tiếp • Smartphone Mode
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
            Vào Trận Đấu
          </h3>
          <p className="text-xs sm:text-sm font-body text-stone-300">
            Nhập mã phòng từ màn hình giảng viên để cùng cả lớp tranh tài trực tiếp
          </p>
        </div>

        <form onSubmit={handleJoin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-stone-300 uppercase tracking-wider block">
              Mã Phòng Đấu (5 Ký Tự):
            </label>
            <input
              type="text"
              value={roomCodeInput}
              onChange={(e) => setRoomCodeInput(e.target.value.toUpperCase())}
              placeholder="VD: 84291 hoặc MLN07"
              maxLength={8}
              className="w-full px-4 py-3 bg-charcoal-deep rounded-sm border border-white/20 text-center font-mono text-xl sm:text-2xl font-black text-citron tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-citron"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-stone-300 uppercase tracking-wider block">
              Biệt Danh Thi Đấu Của Bạn:
            </label>
            <input
              type="text"
              value={nicknameInput}
              onChange={(e) => setNicknameInput(e.target.value)}
              placeholder="VD: Minh Triết, Thu Hà..."
              maxLength={18}
              className="w-full px-4 py-3 bg-charcoal-deep rounded-sm border border-white/20 text-center font-sans text-base font-semibold text-white focus:outline-none focus:ring-2 focus:ring-citron"
              required
            />
          </div>

          {joinError && (
            <div className="p-3 bg-red-950/60 border border-red-500/40 rounded-sm text-xs text-red-200 text-center">
              {joinError}
            </div>
          )}

          <button
            type="submit"
            disabled={isJoining}
            className="w-full py-3.5 bg-citron hover:bg-citron/90 text-carbon font-mono font-bold text-sm tracking-wider rounded-sm shadow-md transition-all active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isJoining ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Đang kết nối phòng...</span>
              </>
            ) : (
              <>
                <span>VÀO PHÒNG ĐẤU</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="pt-2 border-t border-white/10 text-center">
          <button
            type="button"
            onClick={onExit}
            className="text-xs font-mono text-stone-400 hover:text-white transition-colors"
          >
            ← Quay lại Luyện tập Cá nhân
          </button>
        </div>
      </div>
    );
  }

  // 2. PLAYER ACTIVE EXPERIENCE
  const pStatus = gameState.playerStatus;
  const isQuestionActive = gameState.status === "QUESTION_ACTIVE";
  const isRevealed =
    gameState.status === "QUESTION_REVEAL" ||
    gameState.status === "ROUND_SUMMARY" ||
    gameState.status === "FINISHED";

  return (
    <div className="max-w-xl mx-auto bg-carbon text-chalk rounded-md border border-charcoal-deep shadow-2xl p-4 sm:p-6 space-y-4">
      {/* Player Mini Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-citron animate-pulse" />
          <span className="font-sans font-bold text-sm sm:text-base text-white">
            {pStatus?.nickname || session.nickname}
          </span>
          <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-stone-300">
            #{session.roomCode}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-[10px] font-mono text-stone-400 block">Điểm số</span>
            <span
              data-testid="player-score"
              className="font-mono text-sm sm:text-base font-black text-citron"
            >
              {(pStatus?.score || 0).toLocaleString()} đ
            </span>
          </div>
          <button
            type="button"
            onClick={handleLeaveRoom}
            className="p-1.5 text-stone-400 hover:text-red-400 transition-colors"
            title="Rời phòng đấu"
            aria-label="Rời phòng đấu"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* LOBBY WAITING SCREEN */}
      {gameState.status === "LOBBY" && (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-citron/15 border border-citron/30 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-citron animate-pulse" />
          </div>
          <div className="space-y-1">
            <h4 className="font-display font-bold text-xl text-white">
              Đã Tham Gia Phòng Đấu!
            </h4>
            <p className="text-sm font-body text-stone-300">
              Xin chào <strong className="text-citron">{session.nickname}</strong>! Vui lòng nhìn lên màn hình lớn và đợi giảng viên khởi động trận đấu...
            </p>
          </div>
          <div className="inline-block px-3 py-1.5 rounded-full bg-charcoal-deep border border-white/10 text-xs font-mono text-stone-400">
            Hiện có <strong>{gameState.totalParticipants}</strong> sinh viên trong phòng
          </div>
        </div>
      )}

      {/* QUESTION ACTIVE SCREEN */}
      {isQuestionActive && gameState.question && (
        <div className="space-y-4">
          {/* Question Meta & Timer */}
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="text-vermilion font-bold uppercase tracking-wider">
                {gameState.roundTitle} • Câu {gameState.currentQuestionIndex + 1}/{gameState.totalQuestions}
              </span>
              {gameState.roundMultiplier > 1.0 && (
                <span className="px-1.5 py-0.5 rounded bg-amber-500 text-carbon font-mono text-[10px] font-black animate-pulse">
                  ⚡ x1.5 ĐIỂM
                </span>
              )}
            </div>
            <span
              className={`font-black text-base ${
                remainingSeconds <= 5 ? "text-red-400 animate-bounce" : "text-citron"
              }`}
            >
              ⏱ {remainingSeconds}s
            </span>
          </div>

          {/* Timer Progress Bar */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-citron transition-all duration-200 ease-linear"
              style={{
                width: `${Math.max(
                  0,
                  Math.min(100, (remainingSeconds / gameState.timeLimitSeconds) * 100)
                )}%`,
              }}
            />
          </div>

          {/* Prompt */}
          <div className="p-3.5 bg-charcoal-deep rounded-sm border border-white/10">
            <h4 className="font-display text-base sm:text-lg font-bold text-white leading-snug">
              {gameState.question.prompt}
            </h4>
          </div>

          {/* 4 Touch Pads (A, B, C, D) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {gameState.question.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const hasSubmitted = Boolean(pStatus?.hasSubmitted || isSubmitting);

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSubmitAnswer(idx)}
                  disabled={hasSubmitted}
                  className={`p-3.5 sm:p-4 rounded-md border text-left transition-all duration-150 flex items-start gap-3 active:scale-95 ${
                    isSelected
                      ? "ring-2 ring-citron border-citron bg-citron/20 shadow-md"
                      : "border-white/10 bg-charcoal-deep hover:bg-stone-800"
                  } ${hasSubmitted && !isSelected ? "opacity-40" : ""}`}
                >
                  <span
                    className={`w-8 h-8 rounded flex items-center justify-center font-mono font-black text-sm text-white flex-shrink-0 shadow-sm ${
                      optionThemes[idx].bg
                    }`}
                  >
                    {optionLetters[idx]}
                  </span>
                  <span className="font-sans text-xs sm:text-sm font-medium text-chalk leading-snug">
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Submission Feedback */}
          {pStatus?.hasSubmitted && (
            <div className="p-3 bg-citron/15 border border-citron/40 rounded-sm text-center font-mono text-xs text-citron font-bold animate-pulse">
              ✓ ĐÃ GỬI BÀI! Đang chờ hết giờ để xem điểm số & giải thích...
            </div>
          )}
        </div>
      )}

      {/* QUESTION REVEAL SCREEN */}
      {isRevealed && gameState.question && (
        <div className="space-y-4 py-2">
          {/* Result Banner */}
          {pStatus?.isCorrect ? (
            <div className="p-4 rounded-md bg-emerald-950/80 border border-emerald-500 text-center space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-mono font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>CHÍNH XÁC XUẤT SẮC!</span>
              </div>
              <div className="font-mono text-2xl font-black text-citron">
                +{(pStatus?.scoreAwarded || 0).toLocaleString()} ĐIỂM
              </div>
              {pStatus?.streak > 1 && (
                <div className="text-xs font-mono text-amber-400 flex items-center justify-center gap-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Chuỗi liên tiếp: {pStatus.streak} câu đúng!</span>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 rounded-md bg-red-950/80 border border-red-500 text-center space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-red-400 font-mono font-bold text-sm">
                <XCircle className="w-5 h-5 text-red-400" />
                <span>RẤT TIẾC, CHƯA ĐÚNG!</span>
              </div>
              <p className="text-xs font-body text-stone-300">
                Đáp án chính xác là{" "}
                <strong className="text-citron">
                  {optionLetters[gameState.question.correctIndex ?? 0]}
                </strong>
                . Hãy đọc kỹ phần giải thích học thuật dưới đây!
              </p>
            </div>
          )}

          {/* Academic Explanation */}
          <div className="p-4 rounded-sm bg-charcoal-deep border border-white/10 space-y-2">
            <span className="text-[11px] font-mono text-citron font-bold uppercase tracking-wider block">
              LUẬN CỨ HỌC THUẬT:
            </span>
            <p className="text-xs sm:text-sm font-body italic text-stone-200 leading-relaxed">
              {gameState.question.explanation}
            </p>
            {gameState.question.sourceLabel && (
              <span className="text-[10px] font-mono text-stone-400 block pt-1 border-t border-white/5">
                Căn cứ: {gameState.question.sourceLabel}
              </span>
            )}
          </div>

          {/* Current Rank Badge */}
          <div className="p-3 bg-black/40 rounded-sm border border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-stone-400">Vị trí hiện tại:</span>
            <span className="font-bold text-white">
              Hạng #{pStatus?.rank || 1} / {gameState.totalParticipants}
            </span>
          </div>
        </div>
      )}

      {/* GAME FINISHED SCREEN */}
      {gameState.status === "FINISHED" && (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-citron/20 border-2 border-citron flex items-center justify-center">
            <Award className="w-8 h-8 text-citron" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-citron font-bold uppercase tracking-widest block">
              HOÀN THÀNH ĐẠI HỘI TRI THỨC
            </span>
            <h3 className="font-display font-black text-2xl text-white">
              CHÚC MỪNG {session.nickname.toUpperCase()}!
            </h3>
            <p className="text-sm font-body text-stone-300">
              Bạn đã hoàn thành trọn vẹn {gameState.totalQuestions} thử thách học thuật MLN131
            </p>
          </div>

          <div className="p-4 bg-charcoal-deep rounded-md border border-white/10 max-w-xs mx-auto space-y-1">
            <span className="text-xs font-mono text-stone-400">Tổng điểm đạt được:</span>
            <div className="font-mono text-3xl font-black text-citron">
              {(pStatus?.score || 0).toLocaleString()} đ
            </div>
            <div className="text-xs font-mono text-stone-300">
              Xếp hạng chung cuộc: <strong>#{pStatus?.rank || 1}</strong>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLeaveRoom}
            className="px-6 py-2.5 rounded-sm bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold transition-colors"
          >
            Tham Gia Trận Mới
          </button>
        </div>
      )}
    </div>
  );
};
