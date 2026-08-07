# Design QA — Mobile Hope Section

## Reference

- Samsung Galaxy mobile screenshot supplied by the site owner.
- Problem: text printed inside the background artwork overlapped the live heading and made the section unreadable.

## Fix

- Mobile now anchors the Hope artwork to the left edge, keeping Jesus visible while moving the artwork's printed verse outside the viewport.
- Tablet and desktop retain the existing centered crop.

## Verification

- Tested at a 412 × 915 mobile viewport.
- Heading, description, and call-to-action remain readable.
- Embedded artwork text is no longer visible or overlapping.
- Header, footer, and navigation remain intact.

## Issues

- P0: None.
- P1: None.
- P2: None.

Result: Passed.
