# Concurrent File Ownership — Antigravity Multi-Agent

| Agent | Exclusive writable files | Read-only dependencies |
|---|---|---|
| research-auditor | `docs/SOURCE_LEDGER.md`, `docs/ACADEMIC_AUDIT.md` | `references/`, `content/` |
| content-editor | `content/STORY_FINAL.md`, `content/QUIZ_FINAL.json`, `content/SOURCE_MAP.json` | slides, source ledger |
| art-director | `docs/ART_DIRECTION.md`, `docs/DESIGN_TOKENS.md`, `docs/VISUAL_REVIEW.md` | specs, story, screenshots |
| frontend-engineer | `app/`, `src/`, `components/`, `public/`, `styles/`, `package*.json`, `tsconfig.json`, `next.config.*`, `postcss.config.*`, etc. | validated content/design |
| accessibility-qa | `tests/`, `playwright.config.ts`, `docs/TECH_QA.md`, `docs/VISUAL_QA.md` | source tree |
| release-engineer | `docs/RELEASE.md`, `docs/FINAL_HANDOFF.md` | source/test/reports |
| Main Orchestrator | `spec/TASK_BOARD.md`, `docs/DECISION_LOG.md`, `README.md`, approved integrations | all files |

## Rules
- Never permit simultaneous writes to the same file. For separate streams prefer independent worktrees if available; otherwise sequential delegation with exclusive ownership.
- QA may request a frontend fix but does not directly modify `src/`. Release similarly escalates script changes.
- In absence of promised agent capabilities, main agent may perform the missing step sequentially and must record this deviation.
- All handoffs report paths touched, actual commands/tests, source evidence, blockers and next dependency.
