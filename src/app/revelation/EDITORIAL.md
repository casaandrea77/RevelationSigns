# Simple explanations for RevelationSigns

User direction: explanations throughout the website should be easy for a child or a first-time Bible reader to follow, while treating the reader respectfully.

For each new Revelation chapter:
- Keep Bible chapter order.
- Include the shared story map with the correct chapter number and a chapter-specific time-setting explanation.
- Explain any look back or glimpse ahead; do not imply all chapter numbers are consecutive dates.
- Use short sentences and familiar words. Explain terms like symbol, prophecy, judgment and millennium before relying on them.
- Put the Bible passage beside a symbol's explanation. Distinguish direct biblical explanations, comparisons with other passages, and historicist interpretation.
- Keep the three reading steps: see the picture, read the explanation, read around it.
- Show a clear current location and next step. Do not link an unfinished study as though it is finished.

Current implementation: all 22 chapter studies are available. Chapter 1 has its original custom layout; chapters 2–22 share a static study template with chapter-specific content in studies.json. Every verse belongs to a scene range, and each study includes three symbol explanations, two Scripture connections, three review questions, an interpretation note, reflection and prayer. The shared lecture playlist is a whole-series resource, not a chapter-specific lecture assignment.

Scripture: complete King James Version Revelation text, sourced from https://github.com/thiagobodruk/bible/blob/master/json/en_kjv.json (English text in the final book). The KJV text is public domain in the United States; rights in the UK are administered by the Crown. Scripture is kept separate from original editorial summaries. Verse counts and contiguous scene coverage are checked by scripts/check-revelation.mjs.

Interpretive background links appear alongside the relevant notes. Historical identifications are labelled interpretation; do not add dates, contemporary identities or detailed scenarios without supporting sources. Existing art is labelled as thematic rather than an exact rendering of each vision.

Sources for the introductory guide: Revelation 1:20; 12:9; 17:15; Daniel 7:17,23 (KJV). Historicist repetition background: https://adventistbiblicalresearch.org/articles/recapitulation-in-revelation-4-11
