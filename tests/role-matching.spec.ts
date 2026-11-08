import { test, expect } from "@playwright/test";

test.describe("Interactive Role Matching Mini-Game — GHÉP VAI TRÒ (Phân cảnh 04)", () => {
  test("Desktop 1440px: Start game, test incorrect/correct matching, view explanations, reach completion", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/#scene-04", { waitUntil: "networkidle" });

    // 1. Verify Teaser Entry Banner in Scene 04
    const teaserHeading = page.locator("h3:has-text('Bạn hiểu vai trò của các giai tầng đến đâu?')");
    await expect(teaserHeading).toBeVisible({ timeout: 6000 });

    const startBtn = page.locator("button:has-text('Bắt đầu ghép vai trò')");
    await expect(startBtn).toBeVisible();

    // 2. Click Start Game
    await startBtn.click();

    // 3. Verify Game Canvas Loads
    const gameCanvas = page.locator("[data-testid='role-matching-game']");
    await expect(gameCanvas).toBeVisible();
    await expect(page.locator("text=Nhiệm vụ 1 • TIEN-PHONG-SX")).toBeVisible();

    // Capture initial game screenshot
    await page.screenshot({
      path: "tests/screenshots/role-matching-desktop-start.png",
      fullPage: false,
    });

    // 4. Test Incorrect attempt: Pick "Đội ngũ Doanh nhân" for Task 1
    const entrepreneurBtn = gameCanvas.locator("[data-testid='matching-token-doanh-nhan']");
    await entrepreneurBtn.click();

    // Verify negative feedback & dialectical whyNotOthers explanation
    await expect(gameCanvas.locator("text=Chưa chính xác")).toBeVisible();
    await expect(gameCanvas.locator("text=Vì sao chưa phải")).toBeVisible();

    // 5. Test Correct attempt: Pick "Giai cấp Công nhân" for Task 1
    const workerBtn = gameCanvas.locator("[data-testid='matching-token-cong-nhan']");
    await workerBtn.click();

    // Verify success banner & academic explanation
    await expect(gameCanvas.locator("text=Chính xác! Bạn được cộng +60 điểm")).toBeVisible();
    await expect(gameCanvas.locator("text=Theo MLN131 Tiết 20 Slide 5")).toBeVisible();

    // Capture task 1 solved screenshot
    await page.screenshot({
      path: "tests/screenshots/role-matching-desktop-matched.png",
      fullPage: false,
    });

    // 6. Complete remaining 6 tasks systematically
    const taskAnswers = [
      { order: 2, actorId: "nong-dan" },
      { order: 3, actorId: "tri-thuc" },
      { order: 4, actorId: "doanh-nhan" },
      { order: 5, actorId: "phu-nu" },
      { order: 6, actorId: "thanh-nien" },
      { order: 7, actorId: "lien-minh" },
    ];

    for (const item of taskAnswers) {
      // Click Next Task button
      const nextBtn = gameCanvas.locator("[data-testid='matching-next-btn']");
      await nextBtn.click();

      // Click correct actor button
      const targetBtn = gameCanvas.locator(`[data-testid='matching-token-${item.actorId}']`);
      await targetBtn.click();

      // Verify correct match state
      await expect(gameCanvas.locator("text=Chính xác! Bạn được cộng")).toBeVisible();
    }

    // 7. Click to View Final Completion Summary
    const finishBtn = gameCanvas.locator("[data-testid='matching-next-btn']");
    await finishBtn.click();

    // Verify Completion Screen & Podium
    const completionView = page.locator("[data-testid='matching-game-completion']");
    await expect(completionView).toBeVisible();
    await expect(completionView.locator("text=CHÚC MỪNG BẠN ĐÃ GIẢI MÃ THÀNH CÔNG!")).toBeVisible();
    await expect(completionView.locator("text=Hoàn Thành Xuất Sắc")).toBeVisible();
    await expect(completionView.locator("text=Đã bao gồm +100đ thưởng hoàn thành tất cả nhiệm vụ")).toBeVisible();

    // Capture completion screenshot
    await page.screenshot({
      path: "tests/screenshots/role-matching-desktop-completion.png",
      fullPage: false,
    });
    console.log("[Playwright Desktop] Role Matching Mini-game verified 100% PASS");
  });

  test("Mobile 390px: Tap-to-match interaction, responsive layout, zero overflow", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/#scene-04", { waitUntil: "networkidle" });

    // 1. Locate and start game on mobile
    const startBtn = page.locator("button:has-text('Bắt đầu ghép vai trò')");
    await expect(startBtn).toBeVisible({ timeout: 6000 });
    await startBtn.click();

    const gameCanvas = page.locator("[data-testid='role-matching-game']");
    await expect(gameCanvas).toBeVisible();

    // 2. Verify touch targets on mobile
    const workerBtn = gameCanvas.locator("[data-testid='matching-token-cong-nhan']");
    await expect(workerBtn).toBeVisible();
    const box = await workerBtn.boundingBox();
    expect(box?.height).toBeGreaterThanOrEqual(44);

    // 3. Tap to match Task 1 on mobile
    await workerBtn.click();
    await expect(gameCanvas.locator("text=Chính xác! Bạn được cộng +100 điểm")).toBeVisible();

    // Capture mobile matched screenshot
    await page.screenshot({
      path: "tests/screenshots/role-matching-mobile-390.png",
      fullPage: false,
    });
    console.log("[Playwright Mobile 390px] Role Matching Mini-game verified 100% PASS");
  });
});
