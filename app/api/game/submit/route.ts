import { NextResponse } from "next/server";
import { submitPlayerAnswer, getSanitizedGameState } from "@/lib/game/gameEngine";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { roomCode, playerId, reconnectToken, optionIndex } = body;

    if (!roomCode || !playerId || !reconnectToken || optionIndex === undefined) {
      return NextResponse.json(
        { success: false, message: "Thiếu thông tin nộp bài." },
        { status: 400 }
      );
    }

    const result = submitPlayerAnswer(
      roomCode,
      playerId,
      reconnectToken,
      Number(optionIndex)
    );

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 400 }
      );
    }

    const gameState = getSanitizedGameState(roomCode, reconnectToken, false);

    return NextResponse.json({
      success: true,
      scoreAwarded: result.scoreAwarded,
      gameState,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi nộp bài." },
      { status: 500 }
    );
  }
}

