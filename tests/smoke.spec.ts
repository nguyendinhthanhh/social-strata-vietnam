import { test, expect } from "@playwright/test";

test.describe("Smoke Tests — VIỆT NAM ĐA TẦNG Exhibition", () => {
  test("01. Should return HTTP 200 and load homepage with correct title and meta", async ({
    page,
  }) => {
    const response = await page.goto("/");
    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);

    // Verify Title
    await expect(page).toHaveTitle(/VIỆT NAM ĐA TẦNG/i);

    // Verify Skip Link
    const skipLink = page.locator("a.skip-link");
    await expect(skipLink).toBeAttached();
    await expect(skipLink).toHaveAttribute("href", "#main-content");

    // Verify Main Container
    const mainContent = page.locator("#main-content");
    await expect(mainContent).toBeVisible();
  });

  test("02. Should display Header Navbar with all essential elements", async ({
    page,
  }) => {
    await page.goto("/");

    // Brand logo & title (first anchor with href='#scene-01')
    const brand = page.locator("header a[href='#scene-01']").first();
    await expect(brand).toBeVisible();
    await expect(brand).toContainText("VIỆT NAM ĐA TẦNG");
    await expect(brand).toContainText("MLN131");

    // Reading progress bar
    const progressBar = page.locator("header [role='progressbar']");
    await expect(progressBar).toBeVisible();
    await expect(progressBar).toHaveAttribute("aria-label", "Tiến độ đọc bài triển lãm");

    // Exhibition Theme toggle button
    const themeBtn = page.locator("header button[aria-label*='Chuyển đổi giao diện Sáng / Tối']").first();
    await expect(themeBtn).toBeVisible();
  });

  test("03. Should render all 6 Exhibition Scenes sequentially", async ({
    page,
  }) => {
    await page.goto("/");

    // Scene 01: Bức tranh Xã hội Việt Nam
    const scene1 = page.locator("#scene-01");
    await expect(scene1).toBeVisible();
    await expect(scene1.locator("h1")).toContainText("VIỆT NAM");
    await expect(scene1.locator("h1")).toContainText("ĐA TẦNG");

    // Scene 02: Giải mã Tọa độ Xã hội
    const scene2 = page.locator("#scene-02");
    await expect(scene2).toBeAttached();
    await expect(scene2.locator("h2")).toContainText("Giải mã Tọa độ Xã hội");

    // Scene 03: Dòng chảy Biến chuyển
    const scene3 = page.locator("#scene-03");
    await expect(scene3).toBeAttached();
    await expect(scene3.locator("h2")).toContainText("Dòng chảy Biến chuyển");

    // Scene 04: Lát cắt Đương đại
    const scene4 = page.locator("#scene-04");
    await expect(scene4).toBeAttached();
    await expect(scene4.locator("h2")).toContainText("Lát cắt Đương đại");

    // Scene 05: Hạt gạo Liên minh
    const scene5 = page.locator("#scene-05");
    await expect(scene5).toBeAttached();
    await expect(scene5.locator("h2")).toContainText("Hạt gạo Liên minh");

    // Scene 06: Đúc kết Nhận thức & Thử thách
    const scene6 = page.locator("#scene-06");
    await expect(scene6).toBeAttached();
    await expect(scene6.locator("h2")).toContainText("Đúc kết Nhận thức & Thử thách");
  });

  test("04. Should display Exhibition Footer with academic integrity and navigation", async ({
    page,
  }) => {
    await page.goto("/");

    const footer = page.locator("footer");
    await expect(footer).toBeAttached();

    // Academic information
    await expect(footer).toContainText("VIỆT NAM ĐA TẦNG");
    await expect(footer).toContainText("Chủ nghĩa xã hội khoa học (MLN131)");
    await expect(footer).toContainText("FPT University");

    // 6 scenes links in footer
    for (let i = 1; i <= 6; i++) {
      const link = footer.locator(`a[href='#scene-0${i}']`);
      await expect(link).toBeAttached();
    }

    // Back to top button
    const backToTopBtn = footer.locator("button[aria-label='Cuộn về đầu trang']");
    await expect(backToTopBtn).toBeAttached();
  });

  test("05. Should open and close Academic Source Modal", async ({
    page,
  }) => {
    await page.goto("/");

    // Modal should initially not be visible
    const modal = page.locator("[role='dialog'][aria-modal='true']");
    await expect(modal).not.toBeVisible();

    // Click Open Source Catalog button
    const openBtn = page.locator("button:has-text('Tra cứu 33 mã nguồn')").first();
    await openBtn.click();

    // Modal should now be visible
    await expect(modal).toBeVisible();
    const modalTitle = page.locator("#source-modal-title");
    await expect(modalTitle).toContainText("Từ điển Nguồn Học thuật & Minh họa");

    // Check search input is present and focused
    const searchInput = modal.locator("input[type='text']");
    await expect(searchInput).toBeVisible();

    // Close modal via close button
    const closeBtn = modal.locator("button[aria-label='Đóng cửa sổ tra cứu']");
    await closeBtn.click();
    await expect(modal).not.toBeVisible();
  });
});
