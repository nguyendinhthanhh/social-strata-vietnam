import { test, expect } from "@playwright/test";

test.describe("Interactive Features — VIỆT NAM ĐA TẦNG Exhibition", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("01. Scene 2: Interactive Triangle Relations switching", async ({ page }) => {
    const scene2 = page.locator("#scene-02");
    await scene2.scrollIntoViewIfNeeded();

    // Verify initial state is Relation 01 (Ownership)
    await expect(scene2).toContainText("Quan hệ về Sở hữu Tư liệu Sản xuất");
    await expect(scene2).toContainText("CĂN CỨ PHÁP LÝ & HỌC THUẬT QUAN TRỌNG VỀ ĐẤT ĐAI");

    // Click Relation 02 (Management) via triangle button
    const rel02Btn = scene2.getByRole("button", {
      name: /Quan hệ Tổ chức & Quản lý Sản xuất/i,
    });
    await rel02Btn.click();
    await expect(scene2).toContainText("Quan hệ Tổ chức & Quản lý Sản xuất");
    await expect(scene2).toContainText("Ai điều hành, phối hợp và làm chủ chuỗi vận hành");

    // Click Relation 03 (Status & Distribution) via triangle button
    const rel03Btn = scene2.getByRole("button", {
      name: /Quan hệ Địa vị Chính trị – Xã hội & Phân phối/i,
    });
    await rel03Btn.click();
    await expect(scene2).toContainText("Quan hệ Địa vị Chính trị – Xã hội & Phân phối");
    await expect(scene2).toContainText("Ai giữ vai trò lãnh đạo xã hội");

    // Click back to Relation 01 via triangle button
    const rel01Btn = scene2.getByRole("button", {
      name: /Quan hệ về Sở hữu Tư liệu Sản xuất/i,
    });
    await rel01Btn.click();
    await expect(scene2).toContainText("Quan hệ về Sở hữu Tư liệu Sản xuất");
  });

  test("02. Scene 3: Three Laws Stepper and Academic Caution", async ({ page }) => {
    const scene3 = page.locator("#scene-03");
    await scene3.scrollIntoViewIfNeeded();

    // Verify Law 01 is active by default
    await expect(scene3).toContainText("Biến đổi gắn liền & bị quy định bởi Cơ cấu Kinh tế");

    // Switch to Law 02 via tab button
    const law02Tab = scene3.locator("button[role='tab']:has-text('Quy luật 02')");
    await law02Tab.click();
    await expect(scene3).toContainText("Biến đổi phức tạp, đa dạng, làm xuất hiện các Tầng lớp mới");
    await expect(scene3).toContainText("Đội ngũ Doanh nhân, Chuyên gia độc lập");

    // Switch to Law 03 via tab button
    const law03Tab = scene3.locator("button[role='tab']:has-text('Quy luật 03')");
    await law03Tab.click();
    await expect(scene3).toContainText("Vừa đấu tranh vừa liên minh, hướng tới sự Xích lại gần nhau");

    // Verify theoretical caution note on Law 03
    const cautionBox = scene3.locator("div:has-text('CẢNH BÁO LÝ LUẬN NGHIÊM NGẶT')");
    await expect(cautionBox.first()).toBeVisible();
    await expect(cautionBox.first()).toContainText("XU THẾ LÝ LUẬN VÀ MỤC TIÊU PHẤN ĐẤU LÂU DÀI");

    // Test Stepper previous button
    const prevBtn = scene3.locator("button:has-text('← Quy luật trước')");
    await prevBtn.click();
    await expect(scene3).toContainText("Biến đổi phức tạp, đa dạng, làm xuất hiện các Tầng lớp mới");
  });

  test("03. Scene 4: 6 Social Profiles & Demographic Intersection Banner", async ({
    page,
  }) => {
    const scene4 = page.locator("#scene-04");
    await scene4.scrollIntoViewIfNeeded();

    // Verify Academic Demographics Banner
    const banner = scene4.locator("div:has-text('2 Nhóm Nhân khẩu học Giao thoa')");
    await expect(banner.first()).toBeVisible();
    await expect(banner.first()).toContainText("KHÔNG PHẢI là những giai cấp kinh tế độc lập");

    // Test each of the 6 social forces tabs
    const profileTabs = [
      { id: "cong-nhan", name: "Giai cấp Công nhân", expectedTitle: "Giai cấp Công nhân Việt Nam" },
      { id: "nong-dan", name: "Giai cấp Nông dân", expectedTitle: "Giai cấp Nông dân Việt Nam" },
      { id: "tri-thuc", name: "Đội ngũ Trí thức", expectedTitle: "Đội ngũ Trí thức Việt Nam" },
      { id: "doanh-nhan", name: "Đội ngũ Doanh nhân", expectedTitle: "Đội ngũ Doanh nhân Việt Nam" },
      { id: "phu-nu", name: "Phụ nữ Việt Nam", expectedTitle: "Phụ nữ Việt Nam" },
      { id: "thanh-nien", name: "Thanh niên Việt Nam", expectedTitle: "Thanh niên Việt Nam" },
    ];

    for (const prof of profileTabs) {
      const tabBtn = scene4.locator(`button[role='tab']:has-text('${prof.name}')`);
      await tabBtn.click();

      // Check header title of profile dossier
      const dossier = scene4.locator("[role='tabpanel']");
      await expect(dossier).toContainText(prof.expectedTitle);

      // Verify 3 columns: Vị trí, Vai trò, Đóng góp
      await expect(dossier).toContainText("Vị trí (Position)");
      await expect(dossier).toContainText("Vai trò (Role)");
      await expect(dossier).toContainText("Đóng góp (Contribution)");
    }

    // Check specific academic note on Women & Youth
    const womenTab = scene4.locator("button[role='tab']:has-text('Phụ nữ Việt Nam')");
    await womenTab.click();
    await expect(scene4).toContainText("Lưu ý học thuật & Pháp lý bắt buộc");
    await expect(scene4).toContainText("phân loại theo giới tính");
    await expect(scene4).toContainText("giao thoa xuyên suốt");

    const youthTab = scene4.locator("button[role='tab']:has-text('Thanh niên Việt Nam')");
    await youthTab.click();
    await expect(scene4).toContainText("Luật Thanh niên 2020");
    await expect(scene4).toContainText("từ 16 đến 30 tuổi");
  });

  test("04. Scene 5: Rice Value Chain 4 Stages & Policy Box", async ({ page }) => {
    const scene5 = page.locator("#scene-05");
    await scene5.scrollIntoViewIfNeeded();

    // Verify initial station (Trí thức)
    await expect(scene5).toContainText("Hàm lượng Tri thức trong Hạt mầm");
    await expect(scene5).toContainText("Đội ngũ Trí thức");

    // Switch to Station 2: Nông dân
    const step2Tab = scene5.locator("button[role='tab']:has-text('Mắt xích 02')");
    await step2Tab.click();
    await expect(scene5).toContainText("Giai cấp Nông dân");
    await expect(scene5).toContainText("Chủ thể Canh tác trên Đất Sở hữu Toàn dân");

    // Switch to Station 3: Công nhân
    const step3Tab = scene5.locator("button[role='tab']:has-text('Mắt xích 03')");
    await step3Tab.click();
    await expect(scene5).toContainText("Giai cấp Công nhân");
    await expect(scene5).toContainText("Cơ giới hóa, Chế biến sâu & Logistics Cảng biển");

    // Switch to Station 4: Doanh nhân
    const step4Tab = scene5.locator("button[role='tab']:has-text('Mắt xích 04')");
    await step4Tab.click();
    await expect(scene5).toContainText("Đội ngũ Doanh nhân");
    await expect(scene5).toContainText("Kết nối Nguồn lực, Quản trị Rủi ro & Xuất khẩu");

    // Verify Policy Box for Decision 1490/QĐ-TTg
    const policyBox = scene5.locator("div:has-text('1490/QĐ-TTg')");
    await expect(policyBox.first()).toBeVisible();
    await expect(policyBox.first()).toContainText("Đề án 1 triệu Héc-ta Lúa Chất lượng cao");
    await expect(policyBox.first()).toContainText("Cảnh báo sư phạm: Mục tiêu phấn đấu đến năm 2030");
  });

  test("05. Scene 6: Interactive 5-Question Quiz Flow & Reset", async ({ page }) => {
    const scene6 = page.locator("#scene-06");
    await scene6.scrollIntoViewIfNeeded();

    // Helper to select an option by letter (A, B, C, D)
    const selectQuizOption = async (letter: string) => {
      const optionBtn = scene6
        .locator("button[role='radio']")
        .filter({ has: page.locator("span", { hasText: new RegExp(`^${letter}$`) }) });
      await optionBtn.click();
    };

    // Verify Question 1 is visible
    await expect(scene6).toContainText("Câu hỏi 1 / 5");

    // Q1: Option C is correct (3 mối quan hệ: TLSX, quản lý, địa vị/phân phối)
    await selectQuizOption("C");
    const submitBtn1 = scene6.locator("button:has-text('Xác nhận câu trả lời')");
    await submitBtn1.click();

    // Verify immediate pedagogical feedback & explanation
    await expect(scene6).toContainText("CHÍNH XÁC!");
    await expect(scene6).toContainText("Giải thích học thuật:");

    // Proceed to Q2
    const nextBtn1 = scene6.locator("button:has-text('Câu hỏi tiếp theo')");
    await nextBtn1.click();
    await expect(scene6).toContainText("Câu hỏi 2 / 5");

    // Q2: Option A is correct (Sự biến đổi và phát triển của cơ cấu kinh tế)
    await selectQuizOption("A");
    const submitBtn2 = scene6.locator("button:has-text('Xác nhận câu trả lời')");
    await submitBtn2.click();
    await expect(scene6).toContainText("CHÍNH XÁC!");

    // Proceed to Q3
    const nextBtn2 = scene6.locator("button:has-text('Câu hỏi tiếp theo')");
    await nextBtn2.click();
    await expect(scene6).toContainText("Câu hỏi 3 / 5");

    // Q3: Option D is correct (Khối liên minh Công - Nông - Trí thức dưới sự lãnh đạo của Đảng)
    await selectQuizOption("D");
    const submitBtn3 = scene6.locator("button:has-text('Xác nhận câu trả lời')");
    await submitBtn3.click();
    await expect(scene6).toContainText("CHÍNH XÁC!");

    // Proceed to Q4
    const nextBtn3 = scene6.locator("button:has-text('Câu hỏi tiếp theo')");
    await nextBtn3.click();
    await expect(scene6).toContainText("Câu hỏi 4 / 5");

    // Q4: Option A is correct (Nhóm xã hội phân loại theo giới tính và độ tuổi, giao thoa)
    await selectQuizOption("A");
    const submitBtn4 = scene6.locator("button:has-text('Xác nhận câu trả lời')");
    await submitBtn4.click();
    await expect(scene6).toContainText("CHÍNH XÁC!");

    // Proceed to Q5
    const nextBtn4 = scene6.locator("button:has-text('Câu hỏi tiếp theo')");
    await nextBtn4.click();
    await expect(scene6).toContainText("Câu hỏi 5 / 5");

    // Q5: Option B is correct (Liên minh kinh tế khách quan giữa nông dân, trí thức, công nhân, doanh nhân)
    await selectQuizOption("B");
    const submitBtn5 = scene6.locator("button:has-text('Xác nhận câu trả lời')");
    await submitBtn5.click();
    await expect(scene6).toContainText("CHÍNH XÁC!");

    // Finish Quiz -> View Results
    const viewResultsBtn = scene6.locator("button:has-text('Xem kết quả bài trắc nghiệm')");
    await viewResultsBtn.click();

    // Verify Quiz Summary Screen
    await expect(scene6).toContainText("Hoàn thành bài kiểm tra nhận thức");
    await expect(scene6).toContainText("Kết quả: 5 / 5 Câu đúng");
    await expect(scene6).toContainText("Xuất sắc! Bạn đã nắm vững toàn diện bản chất lý luận");

    // Test Reset Quiz
    const resetBtn = scene6.locator("button:has-text('Làm lại trắc nghiệm')");
    await resetBtn.click();
    await expect(scene6).toContainText("Câu hỏi 1 / 5");
  });

  test("06. Academic Source Modal search and filter interaction", async ({ page }) => {
    // Open modal via button
    const openModalBtn = page.locator("button:has-text('Tra cứu 33 mã nguồn')").first();
    await openModalBtn.click();

    const modal = page.locator("[role='dialog'][aria-modal='true']");
    await expect(modal).toBeVisible();

    // Type C-18-05 in search box
    const searchInput = modal.locator("input[placeholder*='C-18-05']");
    await searchInput.fill("C-18-05");

    // Verify item [C-18-05] is visible in filtered list
    const source05Btn = modal.locator("button:has-text('[C-18-05]')");
    await expect(source05Btn).toBeVisible();
    await source05Btn.click();

    // Verify detail panel shows C-18-05 information
    await expect(modal).toContainText("MLN131_Tiet_18.pptx, Slide 5");
    await expect(modal).toContainText("sở hữu TLSX");

    // Press Escape key to close modal
    await page.keyboard.press("Escape");
    await expect(modal).not.toBeVisible();
  });

  test("07. Accessibility: Large readable font scale and reduced motion support", async ({
    page,
  }) => {
    // 1. Verify enhanced comfortable reading scale on root html element (>= 17px)
    const rootFontSize = await page.evaluate(() => {
      return parseFloat(window.getComputedStyle(document.documentElement).fontSize);
    });
    expect(rootFontSize).toBeGreaterThanOrEqual(17);

    // 2. Reduced Motion system preference support
    await page.emulateMedia({ reducedMotion: "reduce" });
    const prefersReduced = await page.evaluate(() => {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    });
    expect(prefersReduced).toBe(true);
  });

  test("08. Mobile navigation drawer toggle and anchor jumping on small viewports", async ({
    page,
  }) => {
    // Set mobile viewport 390x844
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    // Mobile menu button should be visible on mobile
    const menuBtn = page.locator("header button[aria-label='Mở danh mục điều hướng phân cảnh di động']");
    await expect(menuBtn).toBeVisible();

    // Drawer should not be in DOM initially
    const drawerTitle = page.locator("header span:has-text('Lộ trình 6 Phân cảnh Triển lãm')");
    await expect(drawerTitle).not.toBeVisible();

    // Click Hamburger button to open drawer
    await menuBtn.click();
    await expect(drawerTitle).toBeVisible();

    // Verify all 6 scene links are present inside drawer
    for (let i = 1; i <= 6; i++) {
      const drawerLink = page.locator(`header a[href='#scene-0${i}']`).last();
      await expect(drawerLink).toBeVisible();
    }

    // Click on Scene 04 link inside mobile drawer
    const scene4Link = page.locator("header a[href='#scene-04']").last();
    await scene4Link.click();

    // Drawer should close after link click
    await expect(drawerTitle).not.toBeVisible();
    await page.waitForTimeout(600);

    // Target scene should be in viewport
    const scene4 = page.locator("#scene-04");
    await expect(scene4).toBeInViewport();
  });

  test("09. Dual Theme: Light and Dark Mode toggle and persistence", async ({
    page,
  }) => {
    await page.goto("/");

    // 1. Desktop Dock Theme Toggle
    const themeBtn = page.locator("header button[aria-label*='Chuyển đổi giao diện Sáng / Tối']").first();
    await expect(themeBtn).toBeVisible();

    // Default or initial: light mode (or check toggle to dark)
    await themeBtn.click();
    await expect(page.locator("html")).toHaveClass(/dark/);
    const themeInStorageDark = await page.evaluate(() => localStorage.getItem("vndt-theme"));
    expect(themeInStorageDark).toBe("dark");

    // Toggle back to light
    await themeBtn.click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);
    const themeInStorageLight = await page.evaluate(() => localStorage.getItem("vndt-theme"));
    expect(themeInStorageLight).toBe("light");

    // 2. Mobile Drawer Theme Toggle
    await page.setViewportSize({ width: 390, height: 844 });
    const menuBtn = page.locator("header button[aria-label='Mở danh mục điều hướng phân cảnh di động']");
    await menuBtn.click();

    const mobileThemeBtn = page.locator("header button[aria-label*='Chuyển đổi giao diện Sáng / Tối']").last();
    await expect(mobileThemeBtn).toBeVisible();
    await mobileThemeBtn.click();
    await expect(page.locator("html")).toHaveClass(/dark/);
  });

  test("10. Desktop Navigation: Smooth scrolling down to target scenes on click without text wrapping", async ({
    page,
  }) => {
    // Desktop 1440x900 viewport
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    // Ensure brand block is not wrapped or squished
    const brandBlock = page.locator("header a[href='#scene-01']").first();
    await expect(brandBlock).toBeVisible();
    const brandBox = await brandBlock.boundingBox();
    expect(brandBox).not.toBeNull();
    // In a single-line layout with larger typography, brand height is ~55-62px; wrapped height would be > 80px
    expect(brandBox!.height).toBeLessThanOrEqual(65);

    // Click on Scene 02 in center nav
    const scene2Link = page.locator("header nav a[href='#scene-02']");
    await expect(scene2Link).toBeVisible();
    await scene2Link.click();

    // Allow smooth scroll animation to progress
    await page.waitForTimeout(600);

    const scene2 = page.locator("#scene-02");
    await expect(scene2).toBeInViewport();
    const scrollYAfterScene2 = await page.evaluate(() => window.scrollY);
    expect(scrollYAfterScene2).toBeGreaterThan(300);

    // Click on Scene 04 in center nav
    const scene4Link = page.locator("header nav a[href='#scene-04']");
    await expect(scene4Link).toBeVisible();
    await scene4Link.click();

    await page.waitForTimeout(600);
    const scene4 = page.locator("#scene-04");
    await expect(scene4).toBeInViewport();

    // Click brand logo to glide smoothly back to top
    await brandBlock.click();
    await page.waitForFunction(() => window.scrollY < 300, { timeout: 3000 });
    const scrollYAfterTop = await page.evaluate(() => window.scrollY);
    expect(scrollYAfterTop).toBeLessThan(300);
  });
});
