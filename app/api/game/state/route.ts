import { NextResponse } from "next/server";
import { getSanitizedGameState } from "@/lib/game/gameEngine";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const roomCode = searchParams.get("code");
    const playerToken = searchParams.get("token") || undefined;
    const isHost = searchParams.get("isHost") === "true";

    if (!roomCode) {
      return NextResponse.json(
        { success: false, message: "Thiếu mã phòng." },
        { status: 400 }
      );
    }

    const gameState = getSanitizedGameState(roomCode, playerToken, isHost);
    if (!gameState) {
      return NextResponse.json(
        { success: false, message: "Phòng không tồn tại." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      gameState,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi lấy trạng thái phòng." },
      { status: 500 }
    );
  }
}

