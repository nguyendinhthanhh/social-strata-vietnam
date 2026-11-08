import { NextResponse } from "next/server";
import { joinGameRoom, getSanitizedGameState } from "@/lib/game/gameEngine";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { roomCode, nickname, reconnectToken } = body;

    if (!roomCode) {
      return NextResponse.json(
        { success: false, message: "Vui lòng nhập mã phòng." },
        { status: 400 }
      );
    }

    const result = joinGameRoom(roomCode, nickname || "", reconnectToken);
    if (!result.success || !result.player || !result.roomCode) {
      return NextResponse.json(
        { success: false, message: result.message || "Không thể tham gia phòng." },
        { status: 400 }
      );
    }

    const gameState = getSanitizedGameState(
      result.roomCode,
      result.player.reconnectToken,
      false
    );

    return NextResponse.json({
      success: true,
      roomCode: result.roomCode,
      player: {
        id: result.player.id,
        nickname: result.player.nickname,
        reconnectToken: result.player.reconnectToken,
      },
      gameState,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi tham gia phòng." },
      { status: 500 }
    );
  }
}

