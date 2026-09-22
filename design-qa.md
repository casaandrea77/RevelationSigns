# Daniel & Revelation — approved mockup implementation

final result: passed

Reference: user-supplied `ChatGPT Image 21 Sept 2026, 12_54_23.png` (1024 × 1536).
Evidence: `../output/daniel-revelation/mockup-comparison.png`, `mockup-implementation.png`, `timeline-comparison.png`. Reference and implementation compared together at 1024 CSS pixels, with production browser captures stitched at their measured scroll offsets. Full-page browser capture was unsuitable; viewport captures were used instead.

## Visual review

- Preserved the selected composition: panoramic navy/gold hero, continuous eleven-stage kingdom strip, cream nine-stage Messiah strip, angelic messenger band, blue Daniel and purple Revelation tables, landscape video banner and footer.
- Every Daniel row pairs a symbol/illustration with a historical or prophetic scene. Nine rows align at 76px on desktop, including Reformation. All artwork is raster imagery, replacing the previous SVG symbol diagrams.
- Matching small-cap serif headings, condensed body font, thin cyan/purple table borders and cream timeline headings. Supplied mockup spelling errors corrected.
- Fixed row height mismatch and joined Bible-reference links found during QA. Increased mobile hero height to prevent its final line crowding the next section.
- Intentional content differences: Revelation 13's composite beast is explained accurately; papal identification is labelled historicist interpretation; unnamed Revelation angel is not asserted to be Gabriel; Reformation is labelled a historical marker; video remains Coming Soon.
- Intentional height difference: implementation is about 1891px rather than 1536px at 1024px width, allowing paired images, accurate text and explanatory notes. The section order and continuous timeline structure match the reference.
- Remaining P3: regenerated illustrations are stylistic equivalents rather than pixel-identical mockup crops. On narrow screens strips scroll horizontally and tables stack; this preserves legible text.

## Verification

Production build passed, including type and lint checks and prerendering. Desktop: no horizontal document overflow, nine aligned rows in each table, all route images loaded, no browser console errors. Mobile at 390px: no horizontal document overflow; menu opens with existing site destinations; continuous strips scroll within their regions. Start Exploring and Babylon timeline links navigate to their intended anchors. Video is explicitly disabled pending a real video.

Baseline retained: original live tag `baseline-live-2026-09-21`, and `baseline-imagery-before-mockup` at a85b57d. Source changes confined to `src/app/daniel-revelation`; no Total Onslaught, FAQ, Starfall, Bible-study or shared site content removed.

## Follow-up: more breathing room

User requested a substantially taller hero and less crowded information, using the 15:15:39 image as spacing guidance. Removed compact desktop overrides. Hero now follows its 3:1 artwork ratio (minimum 340px on desktop, 400px on phones); mobile contains the entire panorama below the text. Enlarged timeline images to 160px, increased card padding and label spacing, and added horizontal-scroll guidance. Table rows increased to 132px with 14px type; tables stack below 1100px. Section and footer spacing expanded. Browser review confirmed aligned rows and no document overflow on desktop and mobile. This supersedes the earlier compact-density assessment; section content and order remain intact.

## Follow-up: centered section widths

Timelines, angelic line and comparison now share a centered 90% width capped at 1440px, with 16px side margins on phones and extra vertical separation. Hero remains full width. Production build passed. Browser checked at 1309px (1178px sections, 65px margins) and 322px (290px sections, 16px margins), with no document overflow. Existing internal timeline/table scrolling is retained to keep the larger artwork and text readable.

## Follow-up: headings above hero artwork

Moved the full hero title block into normal flow above a separate 3:1 panorama. The navy title band no longer overlaps the Daniel 2 statue. Preserved the complete image and existing section margins. Production build passed; desktop and mobile browser measurements confirmed the title band's bottom meets the artwork's top without overlap or document overflow. Desktop screenshot visually confirmed the unobstructed statue.

## Follow-up: introduce the timeline

Added “Discover History in Advance” before the kingdom timeline, with the requested Daniel-to-Revelation / Babylon-to-our-days wording and a short left-to-right reading guide. “And beyond” explains the timeline's future stages. Existing interpretation qualification retained. Production build passed; browser confirmed correct placement, readable mobile wrapping and no document overflow.

## Follow-up: all three timelines in one desktop view

At desktop widths of 1000px and above, removed track minimum widths and reduced timeline image height, label padding and inter-section gaps. All 11 kingdom stages and 9 Messiah stages remain visible. Mobile retains scrolling and larger labels. Hero and comparison unchanged. Production build passed. Chrome at 1470 × 802 confirmed the three complete timelines occupy 620px together, with no horizontal overflow in either track and no browser console errors. Screenshot verified all three simultaneously after Start Exploring.

## 22 September — complete timeline images
- Removed vertical gaps between the three timelines and the extra bottom padding on the first two.
- Restored the artwork's 3:2 aspect ratio and contain sizing in all three timelines, including mobile, so faces and figures are not cropped.
- Production build passed (58 pages). Browser review at 1470px showed all three timelines together in approximately 757px, with complete images and zero inter-section margins.
