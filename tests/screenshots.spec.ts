import { test, expect } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

test.describe("Real Multi-Viewport Screenshots & Layout Capture (6 Viewports)", () => {
  const screenshotDir = path.join(process.cwd(), "tests", "screenshots");

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }
  });

  const viewports = [
    { name: "mobile-320", width: 320, height: 568, deviceDesc: "Mobile S (320px) — Minimum breakpoint" },
    { name: "mobile-390", width: 390, height: 844, deviceDesc: "Mobile M (390px) — iPhone 12/13/14 standard" },
    { name: "mobile-430", width: 430, height: 932, deviceDesc: "Mobile L (430px) — iPhone Pro Max / Plus" },
    { name: "tablet-768", width: 768, height: 1024, deviceDesc: "Tablet Portrait (768px) — iPad Mini / Air" },
    { name: "tablet-1024", width: 1024, height: 768, deviceDesc: "Tablet Landscape (1024px) — iPad Pro / Small Laptop" },
    { name: "desktop-1440", width: 1440, height: 900, deviceDesc: "Desktop Large (1440px) — Standard Monitor" },
  ];

  for (const vp of viewports) {
    test(`Capture screenshot and audit overflow at ${vp.name} (${vp.width}x${vp.height})`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/", { waitUntil: "networkidle" });

      // Verify no horizontal overflow in documentElement and body
      const overflowDetails = await page.evaluate(() => {
        const clientWidth = document.documentElement.clientWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const bodyScrollWidth = document.body.scrollWidth;

        // Find elements that actually cause layout overflow (not hidden by overflow-hidden)
        const overflowingElements: string[] = [];
        const allElements = Array.from(document.querySelectorAll("body *"));

        for (const el of allElements) {
          // If element or an ancestor has overflow: hidden or clip, it doesn't cause page scroll
          let parent: Element | null = el as Element;
          let isClipped = false;
          while (parent && parent !== document.body) {
            const style = window.getComputedStyle(parent);
            if (
              style.overflow === "hidden" ||
              style.overflowX === "hidden" ||
              style.overflow === "clip" ||
              style.overflowX === "clip"
            ) {
              isClipped = true;
              break;
            }
            parent = parent.parentElement;
          }

          if (!isClipped) {
            const rect = el.getBoundingClientRect();
            // allow 1px subpixel tolerance
            if (rect.right > clientWidth + 1.5) {
              const classStr =
                typeof el.className === "string"
                  ? el.className
                  : el.getAttribute("class") || "";
              overflowingElements.push(
                `${el.tagName.toLowerCase()}${el.id ? "#" + el.id : ""}${classStr ? "." + classStr.split(" ").slice(0, 2).join(".") : ""} (right: ${rect.right.toFixed(1)}px > ${clientWidth}px)`
              );
            }
          }
        }

        return {
          clientWidth,
          scrollWidth,
          bodyScrollWidth,
          hasDocOverflow: scrollWidth > clientWidth,
          hasBodyOverflow: bodyScrollWidth > clientWidth,
          overflowingElements: overflowingElements.slice(0, 5),
        };
      });

      expect(
        overflowDetails.hasDocOverflow,
        `Viewport ${vp.name} documentElement scrollWidth (${overflowDetails.scrollWidth}) > clientWidth (${overflowDetails.clientWidth})`
      ).toBe(false);

      expect(
        overflowDetails.hasBodyOverflow,
        `Viewport ${vp.name} body scrollWidth (${overflowDetails.bodyScrollWidth}) > clientWidth (${overflowDetails.clientWidth})`
      ).toBe(false);

      expect(
        overflowDetails.overflowingElements,
        `Viewport ${vp.name} unclipped overflowing elements: ${overflowDetails.overflowingElements.join(", ")}`
      ).toEqual([]);

      // Scroll through page to ensure all images and dynamic sections are hydrated
      await page.evaluate(async () => {
        await new Promise<void>((resolve) => {
          let totalHeight = 0;
          const distance = 400;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              window.scrollTo(0, 0);
              resolve();
            }
          }, 40);
        });
      });
      await page.waitForTimeout(300);

      // Save full page screenshot
      const fullPagePath = path.join(screenshotDir, `${vp.name}.png`);
      await page.screenshot({ path: fullPagePath, fullPage: true });

      expect(fs.existsSync(fullPagePath)).toBeTruthy();
      const stats = fs.statSync(fullPagePath);
      expect(stats.size).toBeGreaterThan(1000); // Image has real bytes
    });
  }

  test("Capture Dark Mode Exhibition screenshots (Desktop 1440 & Mobile 390)", async ({
    page,
  }) => {
    // 1. Desktop 1440 Dark
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });
    const themeBtn = page.locator("header button[aria-label*='Chuyển đổi giao diện Sáng / Tối']").first();
    await themeBtn.click();
    await expect(page.locator("html")).toHaveClass(/dark/);

    // Scroll through page to hydrate images in dark mode
    await page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        let totalHeight = 0;
        const distance = 400;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 40);
      });
    });
    await page.waitForTimeout(300);

    const desktopDarkPath = path.join(screenshotDir, "desktop-1440-dark.png");
    await page.screenshot({ path: desktopDarkPath, fullPage: true });
    expect(fs.existsSync(desktopDarkPath)).toBeTruthy();

    // 2. Mobile 390 Dark
    await page.setViewportSize({ width: 390, height: 844 });
    const mobileDarkPath = path.join(screenshotDir, "mobile-390-dark.png");
    await page.screenshot({ path: mobileDarkPath, fullPage: true });
    expect(fs.existsSync(mobileDarkPath)).toBeTruthy();
  });

  test("Audit image status in DOM (current visual asset inventory)", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    const imgAudit = await page.evaluate(() => {
      const imgElements = Array.from(document.querySelectorAll("img"));
      const svgElements = Array.from(document.querySelectorAll("svg"));
      const bgElements = Array.from(document.querySelectorAll("*")).filter((el) => {
        const bg = window.getComputedStyle(el).backgroundImage;
        return bg && bg !== "none" && !bg.includes("gradient");
      });

      return {
        imgCount: imgElements.length,
        imgList: imgElements.map((img) => ({
          src: img.src,
          alt: img.alt,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
          complete: img.complete,
        })),
        svgCount: svgElements.length,
        bgImgCount: bgElements.length,
      };
    });

    console.log("=== Image Audit Results ===");
    console.log("IMG elements count:", imgAudit.imgCount);
    console.log("SVG elements count (icons/decorations):", imgAudit.svgCount);
    console.log("CSS background-image elements count:", imgAudit.bgImgCount);

    // Verify rich photographic asset inventory in DOM (at least 10 active img elements rendered)
    expect(imgAudit.imgCount).toBeGreaterThanOrEqual(10);
  });
});
