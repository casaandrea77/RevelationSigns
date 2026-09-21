# Daniel & Revelation imagery checkpoint

Successful production baseline verified on 21 September 2026:

- Commit: `8ef40c7e9e2a8cc28b97c5b24611adf36d7798d0`
- Preserved Git tag: `baseline-live-2026-09-21` (also saved on origin)
- Vercel deployment: `dpl_HhN7ehcj9b3uBFPDisX2gGQ3W5X7`, state READY
- Baseline URL: https://revelation-signs-hwg5gv5pl-great-controversy.vercel.app

The imagery change is limited to the Daniel & Revelation route, its new artwork,
and these implementation notes. Existing site content remains in this baseline.
The top timelines retain their section order, item order, grid breakpoints,
horizontal scrolling and titles. Images are inserted inside the existing cards.

Historical scenes are AI-generated artistic reconstructions, not photographs or
historical evidence. Future scenes illustrate the study's biblical interpretation.
Symbol images use the existing Daniel 2 statue artwork; the final three symbols
use labelled educational diagrams. The medieval papal identification is explicitly
labelled as a historicist interpretation beside the image and in the explanation.

Historical visual references:
- Persepolis terraces and Apadana: https://whc.unesco.org/en/list/114
- Old vs current Saint Peter's: https://www.basilicasanpietro.va/en/faq/when-was-st-peters-basilica-built

The columns are independent reading guides, not an assertion that each Daniel row
matches the adjacent Revelation row. Gabriel is named only where the biblical text
names him; no claim is made that Revelation's messenger is the same angel.

## Validation before publishing

- Production build: passed (Next.js 15.5.22, TypeScript/lint, 58 generated pages).
- Browser checks: 1600 × 1000 desktop and 390 × 844 phone.
- All 38 rendered image elements decoded successfully; no broken images.
- No browser JavaScript errors or framework error overlay.
- Phone document width equals viewport width (390px); timeline scroll is contained.
- Original prophecy, Messiah, Daniel and Revelation arrays matched the baseline.
- Both top timeline grid class definitions matched the baseline.
- Total Onslaught, Questions, Starfall, Bible Studies and Documentaries returned HTTP 200.
- No existing tracked file outside the Daniel & Revelation route was modified.
- Twenty new 960px WebP illustrations total 2,741,384 bytes (about 2.74 MB).
- Built-in image generation prompts are recorded in `daniel-revelation-art-prompts.json`.
