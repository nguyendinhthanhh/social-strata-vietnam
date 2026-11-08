# Project decision log

- 2026-11-07: User uses **Google Antigravity App**, not Gemini CLI; ship Antigravity `.agents/agents/`, `AGENTS.md`, and `.agents/skills/` with read/write boundaries.
- 2026-11-07: Delivery is a starter configuration **not** an implemented website.
- 2026-11-07: Quality gates include academic sources, real visual browser review on mobile and desktop, real build/lint/tests.
- 2026-11-07: User explicitly rejected generic AI visual style, bland minimalism, and fake responsive wireframes.
- 2026-11-07: [ORCHESTRATOR] Workspace audit completed:
  1. Files extracted from subfolder `MLN131_Antigravity_MultiAgent_FINAL_v1` directly to workspace root `d:\viet-nam-da-tang`. `python tools/validate_kit.py` passed with 6 agents and 5 skills.
  2. Subagent discovery verified: direct invocation of static agent name `research-auditor` is blocked by Antigravity App tool allowlist (`subagent not found or not allowed`), but subagents registered dynamically via `define_subagent` (e.g., `sub-research-auditor`) or `self` with custom roles/prompts execute and communicate via `send_message` with full IPC functionality.
  3. Runtime verified: Node v22.21.1, npm 10.9.4, Python 3.11.9 (with `python-pptx`), Playwright CLI 1.65.0, Google Chrome & Microsoft Edge present.
  4. Course slides audited: 3 PPTX verified (Tiết 18: 15 slides, Tiết 19: 12 slides, Tiết 20: 19 slides). Clear distinction established between theoretical classes (Công nhân, Nông dân, Trí thức, Doanh nhân) and cross-cutting demographic groups (Phụ nữ, Thanh niên). Textbook 2021 recognized as cited in slides but absent from repo. Rice chain recognized as an illustrative pedagogical scenario.
- 2026-11-07: [MILESTONE 01 - research-auditor] Academic audit completed. Created `docs/SOURCE_LEDGER.md` with 45 validated source IDs ([BAI_GIANG], [VAN_KIEN], [DU_LIEU], [MINH_HOA]) and `docs/ACADEMIC_AUDIT.md` (258 lines of rigorous theoretical analysis, slide references, redline corrections for copy seed, 5 quiz stems verified).
- 2026-11-07: [MILESTONE 03 - art-director] Art direction completed. Route A (Contemporary Editorial Documentary / Curatorial Exhibition) selected over Route B (Brutalist Archival). Created `docs/ART_DIRECTION.md` (scene-by-scene 1440/390/320 layouts, credit badge system, motion guidelines), `docs/DESIGN_TOKENS.md` (WCAG AAA/AA contrast table, fluid clamp scales, Vietnamese font stacks with diacritic safety, CSS :root tokens), `docs/VISUAL_REVIEW.md` (rubric and checklist).
- 2026-11-07: [MILESTONE 02 - content-editor] Final editorial content completed. Created `content/STORY_FINAL.md` (54.8 KB across all 6 scenes, adhering to MLN131 academic standards and Route A editorial pacing), `content/QUIZ_FINAL.json` (5 validated questions with in-depth academic explanations, options A-D, source IDs), and `content/SOURCE_MAP.json` (complete claim-to-source mapping for UI popovers). Giai cấp vs Nhóm nhân khẩu học giao thoa explicitly articulated. Land-use rights accurately distinguished from whole-people ownership. Rice chain established as pedagogical illustration aligned with 2030 vision of 1490/QĐ-TTg.
- 2026-11-07: [MILESTONE 04 - frontend-engineer] Next.js 14 App Router application successfully implemented. Full TypeScript strict adherence, Tailwind Route A tokens, Google fonts (Playfair Display, Be Vietnam Pro, JetBrains Mono). Built 6 interactive scenes: Hero, Interactive Triad Diagram (with land-use rights modal), Scrollytelling Laws Stepper, 6 Social Force Profiles with category overlap notes, Interactive Rice Value Chain Map, 5-question Quiz Engine with instant feedback and academic explanations, and 33-entry Source Catalog Modal. `npx tsc --noEmit` exit 0, `npm run build` exit 0. Ready for QA.
- 2026-11-07: [MILESTONE 05 & 06 - accessibility-qa & frontend-engineer] Comprehensive QA completed. Configured Chromium Playwright suite (`tests/smoke.spec.ts`, `tests/interactions.spec.ts`, `tests/screenshots.spec.ts`). All 16 tests executed and passed (100% pass rate). Captured and manually inspected real screenshots at 320x568, 390x844, 768x1024, and 1440x900 px. Confirmed 0 physical horizontal overflow (`scrollWidth === clientWidth`), touch targets >= 48px, WCAG AAA text contrast (16.8:1), and zero diacritic truncation. Created `docs/TECH_QA.md` and `docs/VISUAL_QA.md`.
- 2026-11-07: [MILESTONE 07 - release-engineer] Release gate verified. `npx tsc --noEmit` (exit 0), `npm run lint` (exit 0), `npm run build` (exit 0), `npx playwright test` (16 passed, exit 0). Security scan confirmed 0 secrets, 0 API tokens, 0 extraneous binary assets. Created `docs/RELEASE.md` (21KB) and `docs/FINAL_HANDOFF.md` (15KB). All Gates G0-G5 marked PASS. Website is fully runnable locally and ready for exhibition. Public deployment safely held pending user command.
- 2026-11-07: [MILESTONE 08 - UI REFINEMENT & ART-DIRECTED INTERACTION] Upgraded website with curatorial exhibition interactive layer:
  1. Installed `framer-motion` for physics-based layout transitions, spring physics, and restrained scrollytelling.
  2. Redesigned Header (`components/Navbar.tsx`) as an **Exhibition Control Bar**:
     - Left: Distinctive brand identity block with logo glyph, "VIỆT NAM ĐA TẦNG", and "MLN131 / CHỦ ĐỀ 07 / CHƯƠNG 5".
     - Center: Story-progress navigation for 6 scenes with animated sliding pill indicator (`layoutId`) and scroll-aware active state.
     - Right: Grouped controls dock: 33 Academic Sources pill, Text Size stepper (`A-`, `A`, `A+`), and Motion toggle pill (`Bật / Tắt`). Sticky header shrinks elegantly upon scrolling past 50px.
  3. Built two signature interactive sections:
     - **Scene 02 (Tam giác Quan hệ Cơ cấu xã hội - Giai cấp):** Custom SVG interactive triangle featuring 3 clickable vertices (Sở hữu TLSX, Tổ chức & Quản lý, Địa vị & Phân phối), central hub, animated state transitions, and pedagogical legal grounding for Land Law 2024 & Constitution 2013 (toàn dân sở hữu, nhà nước đại diện chủ sở hữu, người dân có quyền sử dụng đất).
     - **Scene 05 (Hạt gạo Liên minh & Mạng lưới Giá trị):** Dual-mode interactive visualization featuring a 4-stage agricultural value chain and a 6-force social linkage network connecting Workers, Farmers, Intellectuals, Entrepreneurs, Women, and Youth, complemented by the Decision 1490/QĐ-TTg policy alert with a pedagogical caution regarding 2030 targets.
  4. Enhanced interactive components:
     - **Scene 01 Hero:** Staggered cinematic text reveal variants, subtle grid line animation, interactive station cards, and high-visibility scroll cue.
     - **Scene 03 Three Laws:** Interactive 3-step scrollytelling stepper with theoretical caution note.
     - **Scene 04 Profiles:** Portrait-led 6-actor cards with category filters, full 3-pillar breakdown (Vị trí, Vai trò, Đóng góp (Contribution)), and an explicit demographic intersection callout for Women & Youth.
     - **Scene 06 Takeaway & Quiz:** Interactive 5-question pedagogical quiz with step indicators, instant visual feedback (correct/incorrect), animated slide-down academic explanations, score tallying, and test reset.
  5. Accessibility & Quality:
     - Full support for `prefers-reduced-motion` with user override toggle.
     - Zero horizontal overflow on mobile viewports (tested at 320px, 390px).
     - Clean production build with 0 ESLint warnings and 0 TypeScript errors.
     - 100% test pass rate in Playwright (16/16 tests ok). Real screenshots verified at 390px and 1440px.
- 2026-11-07: [MILESTONE 09 - IMMERSIVE VISUAL & INTERACTION OVERHAUL] Executed full 12-phase visual and interaction overhaul:
  1. Phase 1: Invoked Art Director and Accessibility QA subagents for thorough visual audit (`docs/VISUAL_AUDIT.md`, `docs/VISUAL_REVIEW.md`). Identified visual gap (0 `<img>` elements in initial DOM).
  2. Phase 2: Built authentic photography system. Standardized 18 optimized photographic assets (from Wikimedia Commons CC and official FPT MLN131 PPTX slides 18, 19, 20). Created `docs/IMAGE_CREDITS.md`, `content/IMAGE_REGISTRY.json`, and `lib/imageRegistry.ts`.
  3. Phase 3: Rebuilt Scene 01 Hero with 3-layer documentary photographic collage (urban skyline, factory workers, rice harvest), staggered reveal, and large Vietnamese display typography.
  4. Phase 4: Enriched Scene 02 interactive triangle with an active documentary photo panel (Hoa Binh Dam for whole-people ownership TLSX, workers for management, course slide for status/distribution).
  5. Phase 5: Transformed Scene 03 into scrollytelling narrative with transition photographs (worker sewist, entrepreneurs, alliance slide) and large chapter markers.
  6. Phase 6: Overhauled Scene 04 into a portrait-led documentary gallery using authentic slide photos, asymmetric magazine spread, and expandable storytelling details.
  7. Phase 7: Upgraded Scene 05 rice value chain with 4-stage photo journey, actor roles, animated connections, and Decision 1490/QĐ-TTg policy alert.
  8. Phase 8: Enhanced Scene 06 with national unity slide photos, 5-question interactive quiz with animated feedback, explanations, and score breakdown.
  9. Phase 9 & 10: Created reusable motion primitives in `components/motion/MotionPrimitives.tsx` with strict hierarchy and reduced motion support.
  10. Phase 11 & 12: Real browser validation with Playwright across 6 viewports (320, 390, 430, 768, 1024, 1440px). 20/20 test suites PASS (100%). DOM image asset audit confirmed 15 active `<img>` elements. `npm run lint` 0 warnings, `npm run build` exit 0. Documented in `docs/VISUAL_UPGRADE_REPORT.md`.
- 2026-11-07: [MILESTONE 10 - DUAL THEME: LIGHT & DARK EXHIBITION MODES] Implemented complete Light and Dark modes ("Ban ngày" & "Phòng Trưng bày Ban đêm"):
  1. Palette Architecture:
     - Light Mode: Verified curatorial paper aesthetic (paper chalk `#F7F6F2`, card white `#FFFFFF`, subtle stone borders `#D5D2C7`, carbon text `#121416`).
     - Dark Mode (`html.dark`): Immersive night exhibition (deep carbon `#0E1012` canvas, charcoal card surfaces `#171A1E` / `#1E2227`, borders `#2A2F35`, chalk text `#F7F6F2`, vermilion `#E24A3D` & citron `#C8D668` accents).
  2. Integrated Controls:
     - Desktop Control Dock: Sun / Moon toggle button with tooltip and accessible ARIA labels.
     - Mobile Navigation Drawer: 3-button quick controls grid (`[Sáng / Tối]`, `[Động / Tĩnh]`, `[A / A+ / A-]`) for instant touch access.
  3. Persistence & System Sync:
     - Stored in `localStorage("vndt-theme")` with fallback to `prefers-color-scheme: dark`.
  4. Testing & Evidence:
     - `tests/interactions.spec.ts`: Added test `09. Dual Theme: Light and Dark Mode toggle and persistence`.
     - `tests/screenshots.spec.ts`: Captured both `desktop-1440-dark.png` and `mobile-390-dark.png`.
     - Playwright regression: 22/22 tests PASS (100% pass rate).
     - Verified zero layout overflow (`scrollWidth === clientWidth`) in both light and dark themes across all 6 viewports.
     - Rebuilt production app (`npm run build`, exit 0) and validated live server.

- 2026-11-07: [MILESTONE 11 - HEADER REPAIR & SMOOTH SCROLL NAVIGATION] Fixed user-reported header wrapping, ellipsis truncation, and missing smooth scroll:
  1. Root Cause Analysis:
     - Brand block (`VĐ VIỆT NAM ĐA TẦNG`) lacked `flex-shrink-0` and `whitespace-nowrap`, causing flex-shrink on screens <= 1366px to wrap text into awkward vertical lines.
     - Navigation items used hardcoded `max-w-[105px] truncate`, artificially cutting off Vietnamese labels with ellipsis ("02 Tọa độ & Khái niệ...").
     - Standard `<a href="#scene-0X">` was hindered by `overflow-x: hidden` on root `html`/`body` and had no smooth scroll animation behavior.
     - Desktop utility controls overflowed the screen on mobile (320px–430px), pushing the mobile menu button out of bounds.
  2. Architectural Fixes:
     - Refactored `components/Navbar.tsx`: Added `flex-shrink-0 whitespace-nowrap` to brand block, emblem, and subtitle.
     - Streamlined nav titles (`Bức tranh`, `Tọa độ`, `Biến chuyển`, `6 Lực lượng`, `Hạt gạo`, `Quiz`) with full titles in tooltips; removed truncate and ellipsis completely.
     - Implemented programmatic smooth scroll `scrollToSection(id)` using `window.scrollTo({ top: offset, behavior: 'smooth' })` with accurate 64px header offset and hash update.
     - Replaced `overflow-x: hidden` with `overflow-x: clip` in `app/globals.css` to enable smooth browser window scrolling while preventing horizontal overflow.
     - Added compact mobile theme toggle next to hamburger button; tucked utility dock to `hidden sm:flex` to prevent mobile header overflow.
  3. Verification & Evidence:
     - Playwright test suite expanded to 23 tests including new test `10. Desktop Navigation: Smooth scrolling down to target scenes on click without text wrapping`.
     - All 23 tests PASS (100%).
     - Visual screenshots re-captured and verified at 1440px (light/dark) and 390px (light/dark). Brand name and all 6 navigation labels display in full without truncation or line-breaks.

- 2026-11-07: [MILESTONE 12 - HEADER SIMPLIFICATION & ENHANCED TYPOGRAPHY SCALE] Executed user instruction to remove cluttering buttons and enlarge text:
  1. Header Clutter Removal:
     - Removed `[Nguồn 33]` (Academic source modal button), `[A]` (Text size stepper), and `[Động]` (Reduced motion toggle) from the desktop header.
     - Kept a single, clean, elegant Theme Toggle button (`[Giao diện Sáng]` / `[Giao diện Tối]`) on the right.
     - Academic sources remain fully accessible via the prominent footer button ("Tra cứu 33 mã nguồn trích dẫn"), in-text citation badges, and the mobile drawer.
  2. Typographic Scale Expansion:
     - Increased root font size on `html` from 16px to 17.5px (~+9.4% proportional scaling across all headings, body text, cards, and diagrams).
     - Expanded fluid font-size clamp scale in `globals.css` (`--font-size-body: clamp(1.05rem, 1.0rem + 0.2vw, 1.22rem)`, `--font-size-display-hero: clamp(2.75rem, 2.0rem + 3.5vw, 5.25rem)`).
     - Enlarged Header Navigation items: `text-sm sm:text-[15px]` (was `text-xs`), bold numbers `text-xs sm:text-sm`, and increased padding (`px-3.5 py-1.5`).
     - Enlarged Header Brand Identity: `text-base sm:text-lg lg:text-xl` font size for "VIỆT NAM ĐA TẦNG" and emblem glyph to `w-9 h-9 sm:w-10 sm:h-10`.
  3. Testing & Evidence:
     - `npm run lint`: 0 warnings, 0 errors.
     - `npx tsc --noEmit`: 0 TypeScript errors.
     - `npm run build`: Production build PASS (exit 0).
     - Playwright regression: 23/23 tests PASS (100% pass rate).
     - Captured and validated updated screenshots at 1440px and 390px (Light & Dark).

- 2026-11-07: [MILESTONE 13 - VISUAL REDESIGN, BUG FIXES & REAL-TIME CLASSROOM GAME]
  1. Priority 0 Bug Fixes & Stacking Context Resolution:
     - Fixed active navigation item becoming a black empty box: Framer Motion's `layoutId="exhibition-active-pill"` created a composite stacking context that eclipsed sibling text elements. Added `z-0 pointer-events-none` to the pill and `relative z-10 font-sans text-sm sm:text-[15px]` to the label text.
     - Fixed Vietnamese diacritics clumping and font FOUT by migrating from external CSS `@import` to `next/font/google` (`Playfair_Display`, `Be_Vietnam_Pro`, `JetBrains_Mono`) with `subsets: ["vietnamese", "latin"]`.
     - Built `lib/textUtils.ts` with `Intl.Segmenter` for safe grapheme/word segmentation, replacing raw string slicing with `WordReveal` and `LineReveal` in `MotionPrimitives.tsx`.
  2. Priority 3 Real-Time Classroom Multiplayer Game ("ĐẠI HỘI TRI THỨC"):
     - Created `content/GAME_QUESTION_BANK.json`: 9 academically verified questions structured across 3 rounds (Concepts, Social Forces, Applications) strictly citing PPTX Tiết 18, 19, 20.
     - Built server-authoritative in-memory game engine (`lib/game/gameEngine.ts`) with anti-cheat answer masking, duplicate nickname disambiguation, server-enforced countdown deadlines, speed bonus scoring (up to 500ms precision), and auto-reveal when all connected players submit.
     - Created 5 API route handlers under `/api/game/*` (`create`, `join`, `state`, `submit`, `action`).
     - Built Host Projection Deck (`GameHostView.tsx`) with pure SVG QR code generation (`QRCodeDisplay.tsx`), live player lobby grid, timer bar, answer distribution chart, academic reveal panel with source citations, and top 3 podium.
     - Built Mobile Player Deck (`GamePlayerView.tsx`) with touch-friendly geometric pads (▲, ■, ●, ◆), instant visual feedback, streak bonus, and `sessionStorage` reload reconnection.
     - Provided Supabase cloud migration `supabase/migrations/001_game_schema.sql` and `.env.example`.
  3. Quality Gates & Verification Evidence:
     - Multi-client Playwright E2E test `tests/multiplayer.spec.ts` (1 Host + 2 Players): PASS.
     - Full automated test suite (`tests/*.spec.ts`): 24/24 PASS (100%).
     - Zero TypeScript errors (`npx tsc --noEmit`), zero ESLint errors (`npm run lint`), successful production build (`npm run build`).
     - Fresh full-page screenshots captured across 6 viewports (320, 360, 390, 430, 768, 1024, 1440) in both Light & Dark modes.
     - Detailed audit documented in `docs/VISUAL_AND_GAME_AUDIT.md`.

- 2026-11-08: [MILESTONE 14 - FULL PRODUCTION MULTIPLAYER GAME: ĐẤU TRƯỜNG TRI THỨC]
  1. Complete Academic 12-Question Bank (`content/GAME_QUESTION_BANK.json`):
     - Formatted across 3 rounds strictly verified against MLN131 PPTX Tiết 18, 19, 20 and QĐ 1490/QĐ-TTg.
     - Round 1 (Phản xạ tri thức): 5 single-answer fundamental questions on social-class structure, core ownership relations, and 3 transformation patterns.
     - Round 2 (Ai giữ vai trò gì?): 4 questions on distinct positions/roles of Workers, Farmers, Intellectuals, and Entrepreneurs.
     - Round 3 (Giải mã xã hội): 3 application questions on demographic intersections (Women & Youth), Rice value chain alliance, and core economic foundation with 1.5x score multiplier.
  2. Deterministic Scoring & Server Authority (`lib/game/gameEngine.ts`):
     - Base score: 500 to 1,000 pts based on server-measured millisecond response time.
     - Final round 1.5x multiplier applied deterministically (750 to 1,500 pts).
     - Deterministic tie-breaking: Score DESC -> CorrectCount DESC -> TotalTimeMs ASC.
     - Host controls: Time per question (15s/20s/30s), Question count (6/12), Start, Pause, Resume, Reveal, End Game.
     - Auto-purging of stale rooms older than 2 hours.
  3. UI Polish & Prominent Entry:
     - Renamed live challenge to "ĐẤU TRƯỜNG TRI THỨC" across all Host and Player views.
     - Prominent tab switcher in Scene 06 with badge `LIVE 12 CÂU`.
     - Mobile pads (▲, ■, ●, ◆) with vibration feedback and responsive layout for 320px–430px.
     - Live response counter on Host deck (`X / Y sinh viên đã nộp bài`).
     - Top 3 Podium with gold, silver, bronze medals and complete leaderboard table.
  4. Database & Documentation:
     - Updated `supabase/migrations/001_game_schema.sql` with `correct_count`, `total_time_ms`, `settings`, indexes, cleanup function, and RLS policies.
     - Created `docs/MULTIPLAYER_SETUP.md` with complete architecture, scoring rules, and run commands.
  5. Playwright Verification (1 Host + 3 Independent Players):
     - Simulated 1 Host (1440x900) + 3 independent mobile clients (Minh Triết @ 390px, Thu Hà @ 320px, Quốc Anh @ 430px).
     - Verified synchronized question display, speed bonus, duplicate submission blocking, server auto-reveal, reload reconnection via `sessionStorage`, and final podium display.
     - Captured 5 dedicated game screenshots: `game-lobby.png`, `game-question-host.png`, `game-question-player.png`, `game-leaderboard.png`, `game-podium.png`.
     - Full test suite: 24/24 PASS (100%). Zero ESLint warnings, zero TypeScript errors.
