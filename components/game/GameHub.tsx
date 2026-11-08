"use client";

import React, { useState, useEffect } from "react";
import { GameHostView } from "./GameHostView";
import { GamePlayerView } from "./GamePlayerView";
import { SanitizedGameState } from "@/lib/game/types";
import { Users, Presentation, Smartphone, ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";

interface GameHubProps {
  onBackToSolo: () => void;
  onOpenSourceModal?: (sourceId?: string) => void;
}

export const GameHub: React.FC<GameHubProps> = ({
  onBackToSolo,
  onOpenSourceModal,
}) => {
  const [mode, setMode] = useState<"CHOICE" | "HOST" | "PLAYER">("CHOICE");
  const [hostData, setHostData] = useState<{
    roomCode: string;
    hostToken: string;
    gameState: SanitizedGameState;
  } | null>(null);
  const [initialRoomCode, setInitialRoomCode] = useState("");
  const [isCreatingRoom, setIsCreatingRoom] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Check query params for joinRoom=XYZ or existing stored player session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const joinParam = urlParams.get("joinRoom");
      if (joinParam) {
        setInitialRoomCode(joinParam.toUpperCase());
        setMode("PLAYER");
      } else {
        const storedPlayer = sessionStorage.getItem("vndt_game_player");
        if (storedPlayer) {
          setMode("PLAYER");
        }
      }
    }
  }, []);

  const handleCreateHostRoom = async () => {
    setIsCreatingRoom(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/game/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const data = await res.json();
      if (data.success && data.roomCode && data.hostToken && data.gameState) {
        setHostData({
          roomCode: data.roomCode,
          hostToken: data.hostToken,
          gameState: data.gameState,
        });
        setMode("HOST");
      } else {
        setErrorMsg(data.message || "Không thể khởi tạo phòng đấu.");
      }
    } catch {
      setErrorMsg("Lỗi kết nối máy chủ khi tạo phòng.");
    } finally {
      setIsCreatingRoom(false);
    }
  };

  // Host Mode Active
  if (mode === "HOST" && hostData) {
    return (
      <GameHostView
        roomCode={hostData.roomCode}
        hostToken={hostData.hostToken}
        initialState={hostData.gameState}
        onExit={() => {
          setHostData(null);
          setMode("CHOICE");
        }}
        onOpenSourceModal={onOpenSourceModal}
      />
    );
  }

  // Player Mode Active
  if (mode === "PLAYER") {
    return (
      <GamePlayerView
        initialRoomCode={initialRoomCode}
        onExit={() => setMode("CHOICE")}
      />
    );
  }

  // CHOICE SCREEN: Host vs Player
  return (
    <div className="bg-carbon text-chalk rounded-md border border-charcoal-deep shadow-2xl p-6 sm:p-8 md:p-10 space-y-8">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-citron/20 text-citron font-mono text-xs font-bold uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-citron animate-pulse" />
          Đấu Trường Trực Tiếp • Real-time Classroom Arena
        </div>
        <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
          ĐẤU TRƯỜNG TRI THỨC — MLN131 LIVE
        </h3>
        <p className="text-sm sm:text-base font-body text-stone-300 leading-relaxed">
          Không gian tranh tài trắc nghiệm thời gian thực dành cho giảng đường và nhóm học tập. 
          Bộ 15 câu hỏi học thuật chuẩn môn học (tùy chọn linh hoạt 10–15 câu) chia làm 3 vòng thi (Vòng 1: Phản xạ tri thức; Vòng 2: Ai giữ vai trò gì?; Vòng 3: Giải mã xã hội &amp; liên minh, nhân điểm x1.5). 
          Tính điểm chuẩn xác theo mili-giây phản xạ và chuỗi đúng với bảng vàng vinh danh trực tiếp.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3 bg-red-950/70 border border-red-500 rounded text-center text-xs text-red-200 max-w-md mx-auto">
          {errorMsg}
        </div>
      )}

      {/* 2 Launch Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Option 1: Host Room (For Teachers / Presenters) */}
        <div className="bg-charcoal-deep rounded-md p-6 sm:p-7 border border-white/10 hover:border-citron/50 transition-all flex flex-col justify-between space-y-6 group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded bg-citron/15 text-citron flex items-center justify-center font-mono group-hover:scale-105 transition-transform">
              <Presentation className="w-6 h-6 text-citron" />
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-citron font-bold">
                Dành cho Giảng viên / Trưởng nhóm
              </span>
              <h4 className="font-display font-bold text-xl text-white">
                Tạo Phòng Đấu Mới (Host Deck)
              </h4>
              <p className="text-xs sm:text-sm font-body text-stone-300 leading-relaxed">
                Chiếu màn hình lớn trên máy chiếu. Tự động sinh mã phòng và mã QR. Toàn quyền điều khiển nhịp độ vòng thi và phân tích đáp án.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCreateHostRoom}
            disabled={isCreatingRoom}
            className="w-full py-3.5 bg-citron hover:bg-citron/90 text-carbon font-mono font-bold text-sm tracking-wide rounded-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
          >
            {isCreatingRoom ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Đang khởi tạo phòng...</span>
              </>
            ) : (
              <>
                <span>KHỞI TẠO PHÒNG HOST</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Option 2: Join as Player (For Students) */}
        <div className="bg-charcoal-deep rounded-md p-6 sm:p-7 border border-white/10 hover:border-vermilion/50 transition-all flex flex-col justify-between space-y-6 group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded bg-vermilion/20 text-vermilion flex items-center justify-center font-mono group-hover:scale-105 transition-transform">
              <Smartphone className="w-6 h-6 text-vermilion" />
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-vermilion font-bold">
                Dành cho Sinh viên tham gia
              </span>
              <h4 className="font-display font-bold text-xl text-white">
                Vào Thi Đấu Bằng Điện Thoại
              </h4>
              <p className="text-xs sm:text-sm font-body text-stone-300 leading-relaxed">
                Nhập mã phòng 5 ký tự và biệt danh. Bấm 4 nút cảm ứng màu sắc siêu nhạy. Tự động lưu tiến trình và tính điểm theo thời gian thực.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMode("PLAYER")}
            className="w-full py-3.5 bg-vermilion hover:bg-vermilion/90 text-white font-mono font-bold text-sm tracking-wide rounded-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
          >
            <span>THAM GIA PHÒNG ĐẤU</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Back to Solo Practice button */}
      <div className="text-center pt-2">
        <button
          type="button"
          onClick={onBackToSolo}
          className="text-xs font-mono text-stone-400 hover:text-white transition-colors underline underline-offset-4"
        >
          ← Trở về Chế độ Ôn tập Trắc nghiệm Độc lập (Cá nhân)
        </button>
      </div>
    </div>
  );
};
