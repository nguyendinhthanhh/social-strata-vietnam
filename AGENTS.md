# VIỆT NAM ĐA TẦNG — ANTIGRAVITY PROJECT CONTRACT

This root `AGENTS.md` is an **always-active workspace rule** for Google Antigravity App. The project is an FPT University MLN131 (Scientific Socialism) Topic 7, Chapter 5 educational storytelling website in Vietnamese. The user expects a **fully working, beautiful, mobile-first website** delivered with actual code, not slides, a mockup, agent roleplay, or plans alone.

## Project briefing and authoritative inputs
- Before work, read `spec/PROJECT_BRIEF.md`, `spec/CONTENT_REQUIREMENTS.md`, `spec/DESIGN_DIRECTION.md`, `spec/QUALITY_GATES.md`, `spec/FILE_OWNERSHIP.md` and `spec/TASK_BOARD.md`.
- **Lecturer PPTX** in `references/course/` are the authoritative course framing; the *_text.txt extractions are aids only and omit images/figures. Cite slide numbers only after inspecting PPTX or the corresponding extracted slide carefully. The 2021 textbook is *mentioned in slides but not included*. NEVER claim to have read it.
- Preserve source attribution categories: `[BAI_GIANG]`, `[VAN_KIEN]`, `[DU_LIEU]`, `[MINH_HOA]`. Policy viewpoints are attributed to sources; anecdotes and examples are not empirical statistics.
- Core academic content: social structure; class structure; its relations (ownership of means of production, production management, political/social position); three patterns of change; six highlighted social forces and the distinct **position / role / contribution** of each. Women and youth intersect social classes, not separate economic classes.
- Treat `content/COPY_SEED.md` as a provisional draft to audit, refine and adapt to interaction; never treat it as an unreviewable final source.

## Orchestrator duties
- This main agent should **actually delegate** to available subagents under `.agents/agents/` using supported Antigravity mechanisms (`invoke_subagent` when available). Do not describe them as executing unless invocation actually happened. If invocation is unavailable, do sequential work and report that fact.
- Research and art direction may happen concurrently only with nonoverlapping files. Content depends on research. Implementation depends on audited content and design tokens. QA checks code; release follows fixing tested issues.
- Respect `spec/FILE_OWNERSHIP.md`. For concurrent code writes prefer isolated Git worktrees (`branch`) or exclusive file ownership if supported. Never have two agents edit the same file simultaneously.
- At each milestone update `spec/TASK_BOARD.md`, `docs/DECISION_LOG.md`, and produce tangible artifacts.

## Non-negotiable quality
- Product: distinctive **Experimental Documentary Editorial / Interactive Digital Exhibition**, NOT generic SaaS cards, meaningless neon gradients, or blank white wireframes. Images must have rights/credits; no unlicensed hotlinks, no fake archival photos.
- Deliberately designed mobile layouts at 320/360/390/430px. Test also 768/1024/1440px. Content must remain readable and accessible with reduced motion.
- Prioritize information architecture and restrained motion; use Next.js App Router, TypeScript strict, Tailwind, semantic HTML; avoid unnecessary backend and commercial services.
- Mandatory: actual browser screenshots inspected at 390px and 1440px, Playwright smoke and interactions, keyboard/a11y checks, `npm run lint`, `npx tsc --noEmit`, `npm run build` (report exact results). Never falsely say PASS.
- Keep build/dev commands documented, avoid secrets and unsafe commands. Do not deploy publicly, make purchases, change global settings, delete unknown files or collect private user data without approval.
- Source proof beats confident language. If a source, image right, browser or command is unavailable, mark the gate BLOCKED, not PASS.

## Finish definition
A real runnable source repository with all six scenes, six complete actor profiles, explanations for five quiz items, references and image credits; `docs/ACADEMIC_AUDIT.md`, `docs/VISUAL_QA.md`, `docs/TECH_QA.md`, `docs/RELEASE.md`, populated task board and honest known limitations. Only mark complete after gates pass.
