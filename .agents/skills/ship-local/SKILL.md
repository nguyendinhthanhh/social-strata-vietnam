---
name: ship-local
description: Run an evidence-based final technical and content gate and hand off runnable source without publishing it.
---

# Steps
1. Ensure academic review, source IDs and asset licensing states are resolved.
2. Run lint, tsc --noEmit, build and Playwright; preserve logs and exit codes.
3. Confirm screenshot visual checks have actually been viewed.
4. Write docs/RELEASE.md with exact run commands and limitations.
5. Do not deploy or buy paid services without explicit consent.
