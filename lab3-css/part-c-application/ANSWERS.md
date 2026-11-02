# Lab 4 Part C: Application Answers

## (a) Why mobile-first?
Designing mobile-first makes you focus on the most important content first without cluttering the screen on smaller devices. On the technical side, the mobile layout becomes your default CSS, and you only add media queries to tweak or expand the layout for larger screens (`min-width`). This keeps the CSS cleaner and easier to manage compared to starting with desktop and trying to undo or shrink layout styles for mobile.

## (b) Why `em` rather than `px` in media queries?
`em` units scale dynamically with the browser's default font size and user zoom settings. If someone increases their default text size for readability, `em`-based breakpoints trigger earlier (at a larger pixel size) so the layout adjusts and prevents text from overflowing or looking broken.

## (c) What happens on a phone without the viewport `<meta>`?
Without `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, a mobile browser acts like it's displaying a full desktop page (usually around 980px wide) and zooms way out to fit it on the phone screen. This makes text and buttons look tiny and hard to tap, and media queries won't properly detect the actual screen size.

## (d) Where are your two breakpoints, and what changes at each?
- **First Breakpoint (`40em` / 640px):**
  - **Header:** Switches from stacked elements to a single row with the company name on the left and the search form on the right.
  - **Form:** Changes from a vertical stack to a CSS Grid with labels on the left, inputs/controls on the right, and the action buttons placed side-by-side on the right.
- **Second Breakpoint (`64em` / 1024px):**
  - **Page Layout:** Uses `grid-template-areas` to set up a 2-column desktop layout. The header title and banner span the full width at the top, while the video section sits next to availability, and the form section sits next to the FAQ section.

## (e) Your Lighthouse score
- **Lighthouse Accessibility Score:** 100