import { NextResponse } from "next/server";
import { executeHostAction, getSanitizedGameState } from "@/lib/game/gameEngine";
import { HostActionType } from "@/lib/game/types";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { roomCode, hostToken, action, payload } = body;

    if (!roomCode || !hostToken || !action) {
      return NextResponse.json(
        { success: false, message: "Thiếu thông tin quyền điều khiển." },
        { status: 400 }
      );
    }

    const result = executeHostAction(roomCode, hostToken, action as HostActionType, payload);
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 400 }
      );
    }

    const gameState = getSanitizedGameState(roomCode, undefined, true);

    return NextResponse.json({
      success: true,
      gameState,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi thực thi lệnh Host." },
      { status: 500 }
    );
  }
}

