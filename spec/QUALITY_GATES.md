# Quality Gates / Evidence-driven definition of DONE

- **G0 Source readiness**: three original PPTX readable; per-slide extraction checked; ledger created; unknowns noted. The 2021 textbook was NOT supplied; do not imply otherwise.
- **G1 Content audit**: scene copy complete; 3 patterns accurate; each of 6 profiles has position/role/contribution, and class-vs-cross-cutting distinctions; facts link to ledger ID; quiz answer key audited. No speculative metrics.
- **G2 Art direction**: 2 distinct directions considered; one chosen; font legibility with Vietnamese signs, accessible palette pairs tested, desktop 1440x900 and mobile 390x844 layouts specified; photos licensed/credited or transparently labeled placeholders.
- **G3 Working product**: all scenes functional, navigation/progress, responsive interactions and 5-question quiz. No empty placeholder sections presented as finished.
- **G4 Browser/mobile**: REAL screenshot at 390x844 and 1440x900 viewed and critiqued; 320,360,390,430,768,1024,1440px layout checks; no critical horizontal overflow, broken hit targets, hover-only content or unreadable copy. Keyboard and reduced-motion paths tested. Playwright smoke and quiz tests actually executed.
- **G5 Release**: `npm run lint`, `npx tsc --noEmit`, `npm run build`, Playwright tests run with recorded exit status; docs include run/build commands, source ledger, asset rights, limitations. No public deploy without user approval.

Every gate must show `PASS`, `FAIL` or `BLOCKED` with filenames, evidence and commands. A screenshot file existing is not the same as an inspected screenshot. A test file existing is not the same as a passing test.
