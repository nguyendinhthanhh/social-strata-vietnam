"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SanitizedGameState, HostActionType } from "@/lib/game/types";
import { QRCodeDisplay } from "./QRCodeDisplay";
import {
  Users,
  Play,
  SkipForward,
  Pause,
  Award,
  RefreshCw,
  Clock,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  ShieldAlert,
  BookOpen,
  Wifi,
  Globe,
  Laptop,
} from "lucide-react";

interface GameHostViewProps {
  roomCode: string;
  hostToken: string;
  initialState: SanitizedGameState;
  onExit: () => void;
  onOpenSourceModal?: (sourceId?: string) => void;
}

export const GameHostView: React.FC<GameHostViewProps> = ({
  roomCode,
  hostToken,
  initialState,
  onExit,
  onOpenSourceModal,
}) => {
  const [gameState, setGameState] = useState<SanitizedGameState>(initialState);
  const [copied, setCopied] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(
    initialState.timeLimitSeconds
  );
  const [detectedLanIp, setDetectedLanIp] = useState<string>("");
  const [hostType, setHostType] = useState<"WIFI" | "LOCALHOST" | "CUSTOM">("WIFI");
  const [customOrigin, setCustomOrigin] = useState<string>("");

  // Detect Host LAN IP on mount
  useEffect(() => {
    const fetchNetworkInfo = async () => {
      try {
        const res = await fetch("/api/game/network-info");
        const data = await res.json();
        if (data.success && data.primaryIp && data.primaryIp !== "localhost") {
          setDetectedLanIp(data.primaryIp);
        }
      } catch {
        // Fallback gracefully
      }
    };
    fetchNetworkInfo();
  }, []);

  // Poll synchronized room state every 1000ms
  const fetchState = useCallback(async () => {
    try {
      const res = await fetch(
        `/api/game/state?code=${roomCode}&isHost=true&t=${Date.now()}`
      );
      const data = await res.json();
      if (data.success && data.gameState) {
        setGameState(data.gameState);
      }
    } catch {
      // Ignore transient network errors
    }
  }, [roomCode]);

  useEffect(() => {
    const interval = setInterval(fetchState, 1000);
    return () => clearInterval(interval);
  }, [fetchState]);

  // Client countdown timer sync
  useEffect(() => {
    if (gameState.status !== "QUESTION_ACTIVE" || gameState.isPaused) return;

    const updateTimer = () => {
      const now = Date.now();
      const leftMs = Math.max(0, gameState.questionDeadline - now);
      setRemainingSeconds(Math.ceil(leftMs / 1000));
    };

    updateTimer();
    const timer = setInterval(updateTimer, 200);
    return () => clearInterval(timer);
  }, [gameState.status, gameState.isPaused, gameState.questionDeadline]);

  // Execute Host Action
  const handleHostAction = async (action: HostActionType, payload?: any) => {
    try {
      const res = await fetch("/api/game/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomCode, hostToken, action, payload }),
      });
      const data = await res.json();
      if (data.success && data.gameState) {
        setGameState(data.gameState);
      }
    } catch {
      // Network error handling
    }
  };

  const computeJoinUrl = () => {
    if (typeof window === "undefined") {
      return `http://localhost:3000?joinRoom=${roomCode}#scene-06`;
    }

    const isLocal =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    const port = window.location.port ? `:${window.location.port}` : "";

    if (!isLocal) {
      return `${window.location.origin}?joinRoom=${roomCode}#scene-06`;
    }

    if (hostType === "CUSTOM" && customOrigin.trim()) {
      const cleanCustom = customOrigin.trim().replace(/\/$/, "");
      return `${cleanCustom}?joinRoom=${roomCode}#scene-06`;
    }

    if (hostType === "LOCALHOST") {
      return `${window.location.origin}?joinRoom=${roomCode}#scene-06`;
    }

    // Default: use detected LAN IP if available for phones
    if (detectedLanIp) {
      return `http://${detectedLanIp}${port}?joinRoom=${roomCode}#scene-06`;
    }

    return `${window.location.origin}?joinRoom=${roomCode}#scene-06`;
  };

  const joinUrl = computeJoinUrl();

  const copyJoinLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(joinUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const optionLetters = ["A", "B", "C", "D"];
  const optionColors = [
    "border-vermilion/40 bg-vermilion/5 text-vermilion",
    "border-blue-500/40 bg-blue-500/5 text-blue-600 dark:text-blue-400",
    "border-citron/50 bg-citron/10 text-citron dark:text-citron",
    "border-amber-500/40 bg-amber-500/5 text-amber-600 dark:text-amber-400",
  ];

  return (
    <div className="bg-carbon text-chalk rounded-md border border-charcoal-deep shadow-2xl p-4 sm:p-6 md:p-8 space-y-6">
      {/* Host Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm bg-vermilion text-chalk flex items-center justify-center font-serif font-black text-base shadow-sm">
            Host
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-citron font-bold">
                Bảng Điều Khiển Giảng Viên
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-stone-300 font-mono">
                Authoritative Server
              </span>
            </div>
            <h2 className="font-display font-black text-xl sm:text-2xl text-white">
              ĐẠI HỘI TRI THỨC — MLN131 LIVE CHALLENGE
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs font-mono text-stone-400 block">Mã Phòng Đấu:</span>
            <span className="font-mono text-2xl sm:text-3xl font-black text-citron tracking-widest">
              {roomCode}
            </span>
          </div>
          <button
            type="button"
            onClick={onExit}
            className="px-3 py-1.5 text-xs font-mono rounded-sm border border-white/20 text-stone-300 hover:bg-white/10 transition-colors"
          >
            Đóng Phòng
          </button>
        </div>
      </div>

      {/* STATE 1: LOBBY */}
      {gameState.status === "LOBBY" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
          {/* Left: Join Information & QR Code */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-sm bg-citron/20 text-citron font-mono text-xs font-bold uppercase tracking-wider">
                Phòng chờ mở • Quét QR hoặc Nhập mã
              </span>
              <h3 className="font-display text-3xl font-bold text-white">
                Sẵn sàng tranh tài
              </h3>
              <p className="text-sm text-stone-300 font-body leading-relaxed">
                Sinh viên quét mã QR bằng điện thoại hoặc truy cập web, nhập mã phòng{" "}
                <strong className="text-citron font-mono text-base">{roomCode}</strong> và biệt danh để vào trận.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <QRCodeDisplay url={joinUrl} size={160} />
              <div className="space-y-2 text-left w-full sm:w-auto">
                <div className="bg-charcoal-deep p-3 rounded-sm border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-stone-400 block">Đường dẫn tham gia:</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={joinUrl}
                      className="bg-black/40 text-xs font-mono text-stone-300 px-2 py-1 rounded border border-white/10 w-full sm:w-56"
                    />
                    <button
                      type="button"
                      onClick={copyJoinLink}
                      className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-chalk text-xs font-mono flex items-center gap-1 flex-shrink-0"
                      title="Sao chép liên kết tham gia"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? "Đã chép" : "Chép"}</span>
                    </button>
                  </div>
                </div>

                <div className="text-xs font-mono text-stone-400 flex items-center gap-2">
                  <Users className="w-4 h-4 text-citron" />
                  <span>
                    Tổng số sinh viên trong phòng:{" "}
                    <strong className="text-white text-sm">{gameState.totalParticipants}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Host Network Mode Switcher */}
            <div className="bg-charcoal-deep/90 p-3.5 rounded-sm border border-white/10 space-y-2.5 text-left">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Wifi className="w-3.5 h-3.5 text-citron" />
                  Mạng phát phòng cho điện thoại
                </span>
                <span className="text-[10px] font-mono text-citron font-semibold">
                  {hostType === "WIFI" && (detectedLanIp ? `Wi-Fi: ${detectedLanIp}` : "Tự động")}
                  {hostType === "LOCALHOST" && "Localhost"}
                  {hostType === "CUSTOM" && "Tùy chỉnh"}
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-black/40 rounded border border-white/10 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setHostType("WIFI")}
                  className={`py-1.5 px-2 rounded text-center transition-all flex items-center justify-center gap-1 ${
                    hostType === "WIFI"
                      ? "bg-citron text-carbon font-bold shadow-xs"
                      : "text-stone-400 hover:text-white"
                  }`}
                  title="Khuyên dùng cho điện thoại trong cùng lớp học / phòng Wi-Fi"
                >
                  <Wifi className="w-3 h-3" />
                  <span>Wi-Fi LAN</span>
                </button>
                <button
                  type="button"
                  onClick={() => setHostType("LOCALHOST")}
                  className={`py-1.5 px-2 rounded text-center transition-all flex items-center justify-center gap-1 ${
                    hostType === "LOCALHOST"
                      ? "bg-citron text-carbon font-bold shadow-xs"
                      : "text-stone-400 hover:text-white"
                  }`}
                  title="Chỉ mở trên máy tính này để thử nghiệm"
                >
                  <Laptop className="w-3 h-3" />
                  <span>Máy này</span>
                </button>
                <button
                  type="button"
                  onClick={() => setHostType("CUSTOM")}
                  className={`py-1.5 px-2 rounded text-center transition-all flex items-center justify-center gap-1 ${
                    hostType === "CUSTOM"
                      ? "bg-citron text-carbon font-bold shadow-xs"
                      : "text-stone-400 hover:text-white"
                  }`}
                  title="Nhập domain / Ngrok / Cloudflare Tunnel cho sinh viên dùng 4G"
                >
                  <Globe className="w-3 h-3" />
                  <span>Tùy chỉnh</span>
                </button>
              </div>

              {/* Custom URL Input if selected */}
              {hostType === "CUSTOM" && (
                <div className="space-y-1 pt-1">
                  <label className="text-[10px] font-mono text-stone-400 block">
                    Nhập địa chỉ Domain / Tunnel (ví dụ: https://abcd.ngrok-free.app):
                  </label>
                  <input
                    type="text"
                    value={customOrigin}
                    onChange={(e) => setCustomOrigin(e.target.value)}
                    placeholder="https://trienlam-mln131.vn"
                    className="w-full bg-black/60 text-xs font-mono text-citron px-2.5 py-1.5 rounded border border-white/20 focus:outline-none focus:border-citron"
                  />
                </div>
              )}

              {/* Wi-Fi Guidance Alert */}
              <div className="p-2.5 rounded bg-white/5 border border-citron/20 text-[11px] font-sans text-stone-300 leading-normal space-y-1">
                <p>
                  📱 <strong>Để điện thoại quét mã vào được:</strong> Điện thoại của sinh viên cần kết nối <strong>cùng mạng Wi-Fi</strong> với máy tính này (hoặc máy tính bật Mobile Hotspot cho điện thoại bắt).
                </p>
                {detectedLanIp && (
                  <p className="text-citron font-mono text-[10px]">
                    📍 Địa chỉ mạng Wi-Fi của máy bạn: <strong>http://{detectedLanIp}:3000</strong>
                  </p>
                )}
              </div>
            </div>

            {/* Host Game Settings Panel */}
            <div className="bg-charcoal-deep p-3.5 rounded-sm border border-white/10 space-y-2.5 text-left">
              <span className="text-[11px] font-mono text-citron font-bold uppercase tracking-wider block">
                ⚙ Cấu hình Trận Đấu Giảng Viên
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <label className="text-stone-400 block mb-1 text-[11px]">Thời gian mỗi câu:</label>
                  <select
                    value={gameState.settings?.timeLimitSeconds || 20}
                    onChange={(e) =>
                      handleHostAction("UPDATE_SETTINGS", {
                        ...gameState.settings,
                        timeLimitSeconds: Number(e.target.value),
                      })
                    }
                    className="w-full bg-black/50 text-stone-200 border border-white/20 rounded p-1.5 text-xs focus:ring-1 focus:ring-citron"
                  >
                    <option value={15}>15 giây (Nhanh)</option>
                    <option value={20}>20 giây (Chuẩn MLN131)</option>
                    <option value={30}>30 giây (Thư thả)</option>
                  </select>
                </div>
                <div>
                  <label className="text-stone-400 block mb-1 text-[11px]">Quy mô gói câu:</label>
                  <select
                    value={gameState.settings?.questionCount || 15}
                    onChange={(e) =>
                      handleHostAction("UPDATE_SETTINGS", {
                        ...gameState.settings,
                        questionCount: Number(e.target.value),
                      })
                    }
                    className="w-full bg-black/50 text-stone-200 border border-white/20 rounded p-1.5 text-xs focus:ring-1 focus:ring-citron"
                  >
                    <option value={15}>15 câu (Đại hội 3 vòng trọn vẹn)</option>
                    <option value={12}>12 câu (Chuẩn thi đấu MLN131)</option>
                    <option value={10}>10 câu (Gói tốc chiến 10 câu)</option>
                    <option value={6}>6 câu (Khảo sát nhanh)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Connected Participants Grid */}
          <div className="lg:col-span-7 bg-charcoal-deep rounded-md p-5 border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono text-xs text-stone-300 uppercase tracking-widest font-semibold flex items-center gap-2">
                <Users className="w-4 h-4 text-citron" />
                Danh sách Sinh viên tham gia ({gameState.totalParticipants})
              </span>
              <span className="text-xs font-mono text-stone-400">
                Tối thiểu 1 người để bắt đầu
              </span>
            </div>

            {gameState.totalParticipants === 0 ? (
              <div className="py-12 text-center text-stone-400 font-body italic space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center text-stone-500">
                  <Users className="w-6 h-6 animate-pulse" />
                </div>
                <p>Chưa có người chơi nào tham gia...</p>
                <p className="text-xs font-mono text-stone-500">
                  Hãy mời sinh viên quét mã QR hoặc nhập mã {roomCode}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-60 overflow-y-auto p-1">
                {gameState.leaderboard.map((p) => (
                  <motion.div
                    key={p.playerId}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-2 px-3 py-2 rounded bg-black/40 border border-white/10 text-xs font-mono"
                  >
                    <span className="w-2 h-2 rounded-full bg-citron animate-pulse flex-shrink-0" />
                    <span className="truncate text-white font-medium">{p.nickname}</span>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="pt-3 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => handleHostAction("START_GAME")}
                disabled={gameState.totalParticipants === 0}
                className="px-6 py-3 rounded-sm bg-citron hover:bg-citron/90 text-carbon font-mono font-bold text-sm tracking-wide shadow-md disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 transition-transform active:scale-95"
              >
                <Play className="w-4 h-4 fill-carbon" />
                BẮT ĐẦU ĐẤU TRƯỜNG ({gameState.totalParticipants} NGƯỜI)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STATE 2: QUESTION ACTIVE & QUESTION REVEAL */}
      {(gameState.status === "QUESTION_ACTIVE" ||
        gameState.status === "QUESTION_REVEAL") &&
        gameState.question && (
          <div className="space-y-6">
            {/* Question Top Info Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-charcoal-deep p-4 rounded-sm border border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-vermilion text-white font-mono text-xs font-bold rounded-sm uppercase tracking-wider">
                  {gameState.roundTitle}
                </span>
                {gameState.roundMultiplier > 1.0 && (
                  <span className="px-2 py-0.5 bg-amber-500 text-carbon font-mono text-[11px] font-black rounded-sm animate-pulse">
                    ⚡ ĐIỂM x1.5
                  </span>
                )}
                <span className="text-xs font-mono text-stone-300">
                  Câu hỏi {gameState.currentQuestionIndex + 1} / {gameState.totalQuestions}
                </span>
                {gameState.totalParticipants > 0 && (
                  <span className="text-xs font-mono text-stone-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    Đã nộp: <strong className="text-citron">{Object.values(gameState.answerStats || {}).reduce((a, b) => a + b, 0)}</strong>/{gameState.totalParticipants}
                  </span>
                )}
              </div>

              {/* Countdown & Action Buttons */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 font-mono text-sm">
                  <Clock className="w-4 h-4 text-citron" />
                  <span className="text-stone-400">Thời gian:</span>
                  <span
                    className={`font-black text-xl ${
                      remainingSeconds <= 5
                        ? "text-red-400 animate-bounce"
                        : "text-citron"
                    }`}
                  >
                    {remainingSeconds}s
                  </span>
                </div>

                {gameState.status === "QUESTION_ACTIVE" ? (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        handleHostAction(
                          gameState.isPaused ? "RESUME_TIMER" : "PAUSE_TIMER"
                        )
                      }
                      className="px-3 py-1.5 rounded-sm bg-white/10 hover:bg-white/20 text-xs font-mono text-stone-200 flex items-center gap-1.5"
                    >
                      <Pause className="w-3.5 h-3.5" />
                      <span>{gameState.isPaused ? "Tiếp tục" : "Tạm dừng"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHostAction("REVEAL_ANSWER")}
                      className="px-4 py-1.5 rounded-sm bg-citron text-carbon hover:bg-citron/90 font-mono font-bold text-xs flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Mở Đáp Án Ngay</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleHostAction("END_GAME")}
                      className="px-3.5 py-2 rounded-sm bg-white/10 hover:bg-white/20 text-stone-300 font-mono text-xs font-semibold transition-colors"
                      title="Kết thúc trận đấu và công bố bảng vàng vinh danh chung cuộc"
                    >
                      Kết Thúc Trận
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHostAction("NEXT_QUESTION")}
                      className="px-5 py-2 rounded-sm bg-citron hover:bg-citron/90 text-carbon font-mono font-bold text-sm flex items-center gap-2 shadow-md"
                    >
                      <span>Tiếp Tục</span>
                      <SkipForward className="w-4 h-4 fill-carbon" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Countdown Progress Line */}
            {gameState.status === "QUESTION_ACTIVE" && (
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-citron transition-all duration-300 ease-linear"
                  style={{
                    width: `${Math.max(
                      0,
                      Math.min(100, (remainingSeconds / gameState.timeLimitSeconds) * 100)
                    )}%`,
                  }}
                />
              </div>
            )}

            {/* Question Text Prompt */}
            <div className="p-6 bg-charcoal-deep rounded-md border border-white/10 space-y-4">
              <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block">
                NỘI DUNG CÂU HỎI {gameState.currentQuestionIndex + 1}
              </span>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed">
                {gameState.question.prompt}
              </h3>
            </div>

            {/* 4 Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gameState.question.options.map((opt, idx) => {
                const isCorrect =
                  gameState.status === "QUESTION_REVEAL" &&
                  gameState.question?.correctIndex === idx;
                const isWrongHighlight =
                  gameState.status === "QUESTION_REVEAL" &&
                  gameState.question?.correctIndex !== idx;
                const count = gameState.answerStats?.[idx] || 0;

                return (
                  <div
                    key={idx}
                    className={`relative p-4 sm:p-5 rounded-md border transition-all duration-300 ${
                      isCorrect
                        ? "border-citron bg-citron/15 ring-2 ring-citron shadow-lg"
                        : isWrongHighlight
                        ? "border-white/5 bg-charcoal-deep/50 opacity-60"
                        : "border-white/10 bg-charcoal-deep"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span
                          className={`w-8 h-8 rounded flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 ${
                            isCorrect
                              ? "bg-citron text-carbon font-black"
                              : optionColors[idx]
                          }`}
                        >
                          {optionLetters[idx]}
                        </span>
                        <span className="font-sans text-sm sm:text-base font-medium text-chalk leading-snug">
                          {opt}
                        </span>
                      </div>

                      {/* Answer stats distribution */}
                      {gameState.status === "QUESTION_REVEAL" && (
                        <div className="text-right flex-shrink-0">
                          <span
                            className={`font-mono text-xs font-bold px-2 py-1 rounded ${
                              isCorrect
                                ? "bg-citron text-carbon"
                                : "bg-white/10 text-stone-300"
                            }`}
                          >
                            {count} lượt chọn
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Academic Explanation Panel (Shown when revealed) */}
            {gameState.status === "QUESTION_REVEAL" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 rounded-md bg-stone-900 border border-citron/40 space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-citron font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-citron" />
                    LUẬN CỨ HỌC THUẬT &amp; CĂN CỨ GIẢNG DẠY
                  </span>
                  {gameState.question.sourceId && onOpenSourceModal && (
                    <button
                      type="button"
                      onClick={() => onOpenSourceModal(gameState.question?.sourceId)}
                      className="text-citron hover:underline flex items-center gap-1"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>[{gameState.question.sourceId}] Tra cứu thư mục</span>
                    </button>
                  )}
                </div>
                <p className="text-sm font-body italic text-stone-200 leading-relaxed">
                  {gameState.question.explanation}
                </p>
                {gameState.question.sourceLabel && (
                  <div className="text-xs font-mono text-stone-400">
                    Căn cứ: <span className="text-stone-300">{gameState.question.sourceLabel}</span>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        )}

      {/* STATE 3: ROUND SUMMARY OR FINISHED PODIUM */}
      {(gameState.status === "ROUND_SUMMARY" ||
        gameState.status === "FINISHED") && (
        <div className="space-y-6 py-4">
          <div className="text-center space-y-2">
            <span className="inline-block px-3 py-1 rounded-sm bg-citron/20 text-citron font-mono text-xs font-bold uppercase tracking-widest">
              {gameState.status === "FINISHED" ? "KẾT QUẢ CHUNG CUỘC" : "TỔNG KẾT VÒNG THI"}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-black text-white">
              BẢNG VÀNG ĐẠI HỘI TRI THỨC
            </h3>
            <p className="text-sm font-body text-stone-300">
              Vinh danh các sinh viên có điểm số lý luận và tốc độ phản xạ xuất sắc nhất
            </p>
          </div>

          {/* Top 3 Podium Cards */}
          <div
            data-testid="host-podium"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6"
          >
            {/* Rank 2 (Silver) */}
            {gameState.leaderboard[1] && (
              <div className="order-2 sm:order-1 bg-charcoal-deep rounded-md p-5 border border-stone-400/40 text-center space-y-2">
                <span className="inline-block px-2 py-0.5 rounded-full bg-stone-400/20 text-stone-300 font-mono text-xs font-bold">
                  HẠNG 2 • BẠC
                </span>
                <h4 className="font-display font-bold text-lg text-white truncate">
                  {gameState.leaderboard[1].nickname}
                </h4>
                <div className="font-mono text-2xl font-black text-stone-300">
                  {gameState.leaderboard[1].score.toLocaleString()} đ
                </div>
              </div>
            )}

            {/* Rank 1 (Gold) */}
            {gameState.leaderboard[0] && (
              <div className="order-1 sm:order-2 bg-gradient-to-b from-stone-800 to-charcoal-deep rounded-md p-6 border-2 border-citron text-center space-y-2 shadow-xl sm:-translate-y-4">
                <div className="w-10 h-10 mx-auto rounded-full bg-citron/20 text-citron flex items-center justify-center">
                  <Award className="w-6 h-6 text-citron" />
                </div>
                <span className="inline-block px-3 py-0.5 rounded-full bg-citron text-carbon font-mono text-xs font-black">
                  QUÁN QUÂN • VÀNG
                </span>
                <h4 className="font-display font-black text-xl text-white truncate">
                  {gameState.leaderboard[0].nickname}
                </h4>
                <div className="font-mono text-3xl font-black text-citron">
                  {gameState.leaderboard[0].score.toLocaleString()} đ
                </div>
                {gameState.leaderboard[0].streak > 1 && (
                  <span className="text-[11px] font-mono text-amber-400 block">
                    Chuỗi đúng: {gameState.leaderboard[0].streak} câu 🔥
                  </span>
                )}
              </div>
            )}

            {/* Rank 3 (Bronze) */}
            {gameState.leaderboard[2] && (
              <div className="order-3 bg-charcoal-deep rounded-md p-5 border border-amber-700/40 text-center space-y-2">
                <span className="inline-block px-2 py-0.5 rounded-full bg-amber-700/20 text-amber-500 font-mono text-xs font-bold">
                  HẠNG 3 • ĐỒNG
                </span>
                <h4 className="font-display font-bold text-lg text-white truncate">
                  {gameState.leaderboard[2].nickname}
                </h4>
                <div className="font-mono text-2xl font-black text-amber-400">
                  {gameState.leaderboard[2].score.toLocaleString()} đ
                </div>
              </div>
            )}
          </div>

          {/* Full Top 10 Table */}
          <div className="max-w-2xl mx-auto bg-charcoal-deep rounded-md p-4 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block pb-2 border-b border-white/10">
              Top 10 Bảng Điểm Toàn Phòng
            </span>
            <div className="space-y-1.5 max-h-48 overflow-y-auto">
              {gameState.leaderboard.map((player) => (
                <div
                  key={player.playerId}
                  className="flex items-center justify-between p-2 rounded bg-black/30 text-xs font-mono"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 text-center font-bold text-stone-400">
                      #{player.rank}
                    </span>
                    <span className="text-white font-medium">{player.nickname}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {player.streak > 1 && (
                      <span className="text-[10px] text-amber-400">🔥 {player.streak}</span>
                    )}
                    <span className="font-bold text-citron">
                      {player.score.toLocaleString()} đ
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Host Controls */}
          <div className="flex justify-center gap-3 pt-4">
            {gameState.status === "ROUND_SUMMARY" ? (
              <button
                type="button"
                onClick={() => handleHostAction("NEXT_QUESTION")}
                className="px-6 py-2.5 rounded-sm bg-citron hover:bg-citron/90 text-carbon font-mono font-bold text-sm flex items-center gap-2"
              >
                <span>BƯỚC VÀO VÒNG TIẾP THEO</span>
                <SkipForward className="w-4 h-4 fill-carbon" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleHostAction("RESET_LOBBY")}
                className="px-6 py-2.5 rounded-sm bg-white/10 hover:bg-white/20 text-white font-mono font-semibold text-sm flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Bắt Đầu Trận Mới</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

