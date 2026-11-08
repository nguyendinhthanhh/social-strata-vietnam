# Kiểm tra tương thích Antigravity App

## Cấu trúc đúng
- Agents: `.agents/agents/<name>.md` (6 agents); do not use Gemini CLI `.gemini/agents/` for this App kit.
- Rules: root `AGENTS.md` always on; optional `.agents/rules/*.md` with valid `trigger` frontmatter.
- Skills: `.agents/skills/<name>/SKILL.md` with `name`/`description` frontmatter.
- No generic `.agent/workflows/` necessary; Antigravity documentation is moving from workflows to skills.

## Tool allowlist caution
- Agent tool names used here are documented: `view_file`, `grep_search`, `find_by_name`, `write_to_file`, `replace_file_content`, `multi_replace_file_content`, `run_command`, `search_web`, `read_url_content`. Official subagent docs warn unmapped tool names can hang a subagent.
- Subagents default to `model: inherit` to avoid hard-coding a paid tier; available models and agent features still depend on your Antigravity plan and local permissions.
- Sandbox permissions may ask approval for file changes, terminal commands and browser actions. Don't preapprove unsafe commands.

## If 6 agents are not detected
1. Ensure workspace root is the directory containing `.agents/`.
2. Confirm hidden `.agents` directory survived unzipping (Windows GUI extraction may hide it).
3. Reopen Customizations/Agents or restart active conversation if needed; check for duplicate global agent names.
4. Validate YAML with `python tools/validate_kit.py`.
5. Ask the main agent to report which agents it actually can invoke; if invocation unavailable, do not falsely claim real parallel multi-agent.

## Browser
- Browser Agent `/browser` is a built-in specialized subagent. Use through the App once `npm run dev` is running; local Chrome permissions/remote-debugging setup can vary by release. See https://antigravity.google/docs/commands/browser.
- Browser actual inspection is mandatory for visual acceptance; Playwright provides separate automated tests.

## Optional native Teamwork
- `/teamwork` according to current docs is plan-gated. It has a separate dynamic orchestration with its own worker/auditor roles; it is NOT identical to six custom subagents. Use optional prompt only if feature exists and user prefers it.
