import { test, expect } from "@playwright/test";

test("Verify Scene 4 Doanh Nhan Typography & Diacritics", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000/#scene-04");
  await page.waitForLoadState("networkidle");

  // Click on the 4th tab "Doanh nhân"
  const doanhNhanTab = page.locator("button:has-text('Doanh nhân')").first();
  await expect(doanhNhanTab).toBeVisible();
  await doanhNhanTab.click();

  // Wait for profile container to display
  const profileContainer = page.locator("#scene-04");
  await expect(profileContainer).toContainText("Đội ngũ Doanh nhân Việt Nam");

  // Verify the subtitle text content
  const subtitle = profileContainer.locator("p:has-text('Tầng lớp tổ chức sản xuất kinh doanh')");
  await expect(subtitle).toBeVisible();

  // Scroll subtitle into view
  await subtitle.scrollIntoViewIfNeeded();

  // Capture screenshot of the Doanh Nhan profile card area in Light Mode
  await page.screenshot({
    path: "tests/screenshots/verified-doanh-nhan-typography.png",
    fullPage: false,
  });

  // Switch to Dark Mode
  const themeBtn = page.locator("button[aria-label*='Chuyển đổi giao diện']").first();
  await themeBtn.click();
  await page.waitForTimeout(300);

  // Capture screenshot in Dark Mode
  await page.screenshot({
    path: "tests/screenshots/verified-doanh-nhan-typography-dark.png",
    fullPage: false,
  });

  console.log("Verified Doanh Nhan typography screenshot saved.");
});
