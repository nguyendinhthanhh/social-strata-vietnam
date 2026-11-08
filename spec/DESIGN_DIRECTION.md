# Design direction — VIỆT NAM ĐA TẦNG

The user explicitly rejects pale, generic wireframes, repeated card grids, easy AI-looking neon gradients, and UX that only shrinks desktop into mobile. Aim for a memorable **contemporary documentary editorial experience**, a designed visual essay rather than institutional LMS, vintage sepia poster or shiny SaaS landing page.

## Initial palette (provisional; validate actual pairs)
- Carbon: `#151719`; Chalk: `#F1F0EA` (15.74:1 text contrast Carbon/Chalk).
- Vermilion: `#D73732` (4.10:1 over Chalk: use for large display/decorative accents only, not small normal text).
- Dark red: `#A62E2D` (6.03:1 over Chalk for body-size accent links).
- Citron: `#C6D56B` (11.24:1 over Carbon), only small highlight passages, diagrams.
- Typography: expressive large headline serif or sturdy editorial display with verified Vietnamese glyphs; paired with highly legible sans e.g. Be Vietnam Pro. Test `ă â ê ô ơ ư đ` in uppercase and lowercase.

## Visual story, not six cards
1. Hero full-bleed documentary photo/collage with strong statement + section index.
2. Concept as editorial essay using typographic relationships and one meaningful interactive diagram.
3. Economic change as three connected narrative moments, not trivial timeline widgets.
4. Six social portraits as varied chapter spreads; represent workers, farmers, intellectuals, entrepreneurs, women and youth thoughtfully. Women/youth are cross-cutting groups; do not depict them as separate exclusive classes.
5. Rice value chain as an interactive relationship map with illustrative labels.
6. Closing conclusions, accessible quiz, sources and credits.

## Mobile FIRST design, 320–430 px
- Deliberate portrait image crop, type sizes via `clamp`, line heights for Vietnamese, editorial layout of 1 column or offset compositions without overflow.
- Choose mobile interaction pattern for relationship map (vertical stepper), accessible nav, one quiz question per view.
- No sticky 100vh pins that break on mobile browser chrome; use `dvh` and fallbacks sensibly.
- Motion must explain the story. Reduced-motion version preserves all information.
- Max-width reading measure around 60–75ch on desktop; body 16–18px; adapt generous spacing without blank voids.

## Assets
Use only images licensed and credited for the intended use, explicitly approved user assets, or nondeceptive illustration; no invented "real" archival images, arbitrary image URLs or hidden third-party hotlinks. Always include alt/caption and evidence in `docs/ASSET_LEDGER.md`.

## References are about design logic, not copying protected work
- https://www.siena.film/
- https://www.nordiskamuseet.se/
- https://www.najbrt.cz/en/work/sin-expo-2025
- https://pudding.cool/
Do not clone layout, copyrighted media, logos or branded CSS wholesale.
