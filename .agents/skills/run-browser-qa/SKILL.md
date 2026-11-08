---
name: run-browser-qa
description: Coordinate browser screenshots and Playwright verification for responsive MLN131 story, interaction and accessible navigation.
---

# Steps
1. Check dev server and actual site URL.
2. Use Antigravity `/browser` if available, via main user prompt; otherwise run Playwright directly from terminal when installed.
3. Capture at least 390x844 and 1440x900, plus 320px overflow and 430px nav tests.
4. Verify all scene anchors, actor profiles, quiz interactions, references, focus, reduced motion and console/network.
5. Log reproducible failures in QA reports, route them back to frontend, retest. Never fake measurements.
