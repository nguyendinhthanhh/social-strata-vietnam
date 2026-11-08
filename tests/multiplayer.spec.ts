import { test, expect } from "@playwright/test";

test.describe("Real-Time Multiplayer Classroom Game — ĐẤU TRƯỜNG TRI THỨC", () => {
  test("Host creates room, 3 independent mobile players join, answer questions, test reconnect, and reach final podium", async ({
    browser,
  }) => {
    // 1. HOST BROWSER CONTEXT (Desktop 1440x900)
    const hostContext = await browser.newContext({
      viewport: { width: 1440, height: 900 },
    });
    const hostPage = await hostContext.newPage();
    await hostPage.goto("/#scene-06", { waitUntil: "networkidle" });

    // Switch to Live Challenge Tab
    const liveTabBtn = hostPage
      .locator("button:has-text('Đấu trường Tri thức'), button:has-text('LIVE')")
      .first();
    await expect(liveTabBtn).toBeVisible({ timeout: 6000 });
    await liveTabBtn.click();

    // Click "Khởi tạo Phòng Host"
    const createHostBtn = hostPage.locator("button:has-text('KHỞI TẠO PHÒNG HOST')");
    await expect(createHostBtn).toBeVisible();
    await createHostBtn.click();

    // Wait for Host Deck to load and extract Room Code
    const roomCodeElement = hostPage.locator(
      "span.font-mono.font-black.text-citron.tracking-widest"
    );
    await expect(roomCodeElement).toBeVisible({ timeout: 6000 });
    const roomCode = (await roomCodeElement.innerText()).trim();
    expect(roomCode.length).toBeGreaterThanOrEqual(4);
    console.log(`[Host] Created Game Room: ${roomCode}`);

    // Verify QR Code and Lobby
    await expect(
      hostPage.locator("svg[shape-rendering='crispEdges']")
    ).toBeVisible();
    await expect(
      hostPage.locator("text=Danh sách Sinh viên tham gia")
    ).toBeVisible();

    // Configure Host settings: Set to 6 questions (Quick Championship mode) for full completion
    const questionCountSelect = hostPage.locator("select").nth(1);
    if (await questionCountSelect.isVisible()) {
      await questionCountSelect.selectOption("6");
      console.log("[Host] Configured room to 6 questions (Quick Championship)");
    }

    // 2. PLAYER 1 (Minh Triết) — Mobile 390x844 (iPhone 12/13/14)
    const player1Context = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });
    const player1Page = await player1Context.newPage();
    await player1Page.goto(`/?joinRoom=${roomCode}#scene-06`, {
      waitUntil: "networkidle",
    });

    const p1NicknameInput = player1Page.locator(
      "input[placeholder*='Minh Triết']"
    );
    await expect(p1NicknameInput).toBeVisible();
    await p1NicknameInput.fill("Minh Triết");
    await player1Page.locator("button:has-text('VÀO PHÒNG ĐẤU')").click();
    await expect(
      player1Page.locator("text=Đã Tham Gia Phòng Đấu!")
    ).toBeVisible({ timeout: 6000 });
    console.log("[Player 1] Joined room as Minh Triết (390px)");

    // 3. PLAYER 2 (Thu Hà) — Mobile 320x568 (iPhone SE)
    const player2Context = await browser.newContext({
      viewport: { width: 320, height: 568 },
    });
    const player2Page = await player2Context.newPage();
    await player2Page.goto(`/?joinRoom=${roomCode}#scene-06`, {
      waitUntil: "networkidle",
    });

    const p2NicknameInput = player2Page.locator(
      "input[placeholder*='Minh Triết']"
    );
    await expect(p2NicknameInput).toBeVisible();
    await p2NicknameInput.fill("Thu Hà");
    await player2Page.locator("button:has-text('VÀO PHÒNG ĐẤU')").click();
    await expect(
      player2Page.locator("text=Đã Tham Gia Phòng Đấu!")
    ).toBeVisible({ timeout: 6000 });
    console.log("[Player 2] Joined room as Thu Hà (320px)");

    // 4. PLAYER 3 (Quốc Anh) — Mobile 430x932 (iPhone Pro Max)
    const player3Context = await browser.newContext({
      viewport: { width: 430, height: 932 },
    });
    const player3Page = await player3Context.newPage();
    await player3Page.goto(`/?joinRoom=${roomCode}#scene-06`, {
      waitUntil: "networkidle",
    });

    const p3NicknameInput = player3Page.locator(
      "input[placeholder*='Minh Triết']"
    );
    await expect(p3NicknameInput).toBeVisible();
    await p3NicknameInput.fill("Quốc Anh");
    await player3Page.locator("button:has-text('VÀO PHÒNG ĐẤU')").click();
    await expect(
      player3Page.locator("text=Đã Tham Gia Phòng Đấu!")
    ).toBeVisible({ timeout: 6000 });
    console.log("[Player 3] Joined room as Quốc Anh (430px)");

    // 5. HOST VERIFIES ALL 3 PARTICIPANTS IN LOBBY
    await hostPage.waitForTimeout(1000);
    await expect(hostPage.locator("text=Minh Triết").first()).toBeVisible();
    await expect(hostPage.locator("text=Thu Hà").first()).toBeVisible();
    await expect(hostPage.locator("text=Quốc Anh").first()).toBeVisible();

    // Capture Lobby Screenshot
    await hostPage.screenshot({
      path: "tests/screenshots/game-lobby.png",
      fullPage: false,
    });
    console.log("[Host] Captured Lobby Screenshot: tests/screenshots/game-lobby.png");

    // 6. HOST STARTS THE GAME
    const startBtn = hostPage.locator("button:has-text('BẮT ĐẦU ĐẤU TRƯỜNG')");
    await expect(startBtn).toBeEnabled();
    await startBtn.click();
    console.log("[Host] Started Game");

    // 7. SYNCHRONIZED QUESTION 1 (Round 1: Phản Xạ Tri Thức)
    await expect(player1Page.locator("button:has-text('Cơ cấu xã hội – giai cấp')")).toBeVisible({
      timeout: 6000,
    });
    await expect(player2Page.locator("button:has-text('Cơ cấu xã hội – giai cấp')")).toBeVisible({
      timeout: 6000,
    });
    await expect(player3Page.locator("button:has-text('Cơ cấu xã hội – giai cấp')")).toBeVisible({
      timeout: 6000,
    });

    // Capture Question Screen on Host and Player
    await hostPage.screenshot({
      path: "tests/screenshots/game-question-host.png",
      fullPage: false,
    });
    await player1Page.screenshot({
      path: "tests/screenshots/game-question-player.png",
      fullPage: false,
    });
    console.log("[Screenshots] Captured Question Screens on Host and Player");

    // 8. ALL PLAYERS SUBMIT ANSWERS
    // Player 1 submits Option B (Correct) immediately
    const p1OptionB = player1Page.locator("button:has-text('Cơ cấu xã hội – giai cấp')");
    await p1OptionB.click();
    console.log("[Player 1] Submitted Option B (Correct, fast)");

    // Duplicate submission attempt: verify buttons are disabled
    await expect(player1Page.locator("text=ĐÃ GỬI BÀI!")).toBeVisible();

    // Player 2 submits Option B (Correct) slightly later
    await hostPage.waitForTimeout(400);
    const p2OptionB = player2Page.locator("button:has-text('Cơ cấu xã hội – giai cấp')");
    await p2OptionB.click();
    console.log("[Player 2] Submitted Option B (Correct, slightly slower)");

    // Player 3 submits Option A (Incorrect)
    const p3OptionA = player3Page.locator("button:has-text('Cơ cấu xã hội – dân số và nhân khẩu học')");
    await p3OptionA.click();
    console.log("[Player 3] Submitted Option A (Incorrect)");

    // 9. SERVER AUTO-REVEALS (all 3 submitted)
    // Verify Player 1 feedback: Correct!
    await expect(player1Page.locator("text=CHÍNH XÁC XUẤT SẮC!")).toBeVisible({ timeout: 6000 });
    // Verify Player 3 feedback: Incorrect!
    await expect(player3Page.locator("text=RẤT TIẾC, CHƯA ĐÚNG!")).toBeVisible({ timeout: 6000 });

    // Host shows explanation and source citation
    await expect(hostPage.locator("text=LUẬN CỨ HỌC THUẬT")).toBeVisible({ timeout: 6000 });
    await expect(hostPage.locator("text=C-18-03").first()).toBeVisible();

    // Capture Leaderboard / Reveal on Host
    await hostPage.screenshot({
      path: "tests/screenshots/game-leaderboard.png",
      fullPage: false,
    });
    console.log("[Host] Captured Leaderboard Screenshot: tests/screenshots/game-leaderboard.png");

    // 10. RECONNECTION TEST: Player 1 reloads browser page
    console.log("[Player 1] Testing reconnect by reloading page...");
    await player1Page.reload({ waitUntil: "networkidle" });
    await expect(player1Page.locator("text=Minh Triết").first()).toBeVisible({ timeout: 6000 });
    const p1Score = await player1Page.locator('[data-testid="player-score"]').innerText();
    expect(p1Score).toContain("đ");
    console.log(`[Player 1] Reconnected successfully with score: ${p1Score}`);

    // 11. END GAME TO VERIFY FINAL PODIUM & CELEBRATION
    const endMatchBtn = hostPage.locator("button:has-text('Kết Thúc Trận')");
    await expect(endMatchBtn).toBeVisible({ timeout: 6000 });
    await endMatchBtn.click();
    console.log("[Host] Ended Match to View Final Podium");

    // 12. VERIFY FINAL PODIUM & WINNERS
    const podium = hostPage.locator("[data-testid='host-podium']");
    await expect(podium).toBeVisible({ timeout: 8000 });
    await expect(hostPage.locator("text=QUÁN QUÂN • VÀNG")).toBeVisible();
    await expect(hostPage.locator("text=HẠNG 2 • BẠC")).toBeVisible();
    await expect(hostPage.locator("text=HẠNG 3 • ĐỒNG")).toBeVisible();

    // Verify Player 1 screen also updates to finished state
    await expect(player1Page.locator("text=HOÀN THÀNH ĐẠI HỘI TRI THỨC")).toBeVisible({ timeout: 6000 });

    // Capture Final Podium Screenshot
    await hostPage.screenshot({
      path: "tests/screenshots/game-podium.png",
      fullPage: false,
    });
    console.log("[Host] Captured Final Podium Screenshot: tests/screenshots/game-podium.png");

    // Cleanup all browser contexts
    await player1Context.close();
    await player2Context.close();
    await player3Context.close();
    await hostContext.close();
  });
});
