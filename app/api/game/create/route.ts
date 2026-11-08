import { NextResponse } from "next/server";
import { createGameRoom, getSanitizedGameState } from "@/lib/game/gameEngine";

export async function POST(req: Request) {
  try {
    let customCode: string | undefined;
    let settings: any | undefined;
    try {
      const body = await req.json();
      if (body?.customCode) {
        customCode = String(body.customCode).trim();
      }
      if (body?.settings) {
        settings = body.settings;
      }
    } catch {
      // Body is optional
    }

    const { roomCode, hostToken } = createGameRoom(customCode, settings);
    const gameState = getSanitizedGameState(roomCode, undefined, true);

    return NextResponse.json({
      success: true,
      roomCode,
      hostToken,
      gameState,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Không thể khởi tạo phòng đấu." },
      { status: 500 }
    );
  }
}

