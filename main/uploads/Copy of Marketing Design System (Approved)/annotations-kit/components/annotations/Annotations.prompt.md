# Annotations (Underline · Arrow · Shape · Sparkle)

Freed's **annotations** — hand-drawn marks inspired by handwritten doctor's notes, a human
touch that feels natural and personal. Extracted verbatim from the brand file as inline SVG:
`Underline` (6 types), `Arrow` (5), `Shape` (4), `Sparkle` (3), each taking `type="01"…`.

Rules (Brand Guide 2.0, §06):

- **Always Freed Focus green `#62E774`** (`--green-0`) — never any other color. The
  components enforce this: `style.color` overrides are ignored with a warning.
- **Lines are solid width with rounded endpoints** — baked into the vectors; never redraw
  them with tapered, dashed, or square-capped strokes. Default weight is 3px; pass
  `strokeWidth` to scale it proportionally on much smaller or larger assets.
- **Intentionally imperfect and organic** — a quick mark made in the moment, not a
  deliberate illustration. Don't straighten, tidy, or geometrically align them.
- **Emphasize, don't distract. Less is more.** Use sparingly: **one annotation per area**;
  the interface should never feel cluttered or like a doodle pad.
- Weight and thickness may vary with context, but stay **consistent within a given area**.
- Typical jobs: circle a word in a headline, underline a phrase, point at a screenshot
  detail. Decorative, so exempt from AA contrast — but never let one carry meaning alone.
- Keep them near their natural size; scale with `transform: scale()` rather than stretching.
