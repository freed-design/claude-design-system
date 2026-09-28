# Annotations kit — import into another design system

Everything needed to re-teach a design system Freed's **annotations**: the four vector
components, their types, the usage rules, and a specimen card.

## 0. Strip the `.txt` suffixes

Every source file ships as `<name>.txt` so it doesn't get compiled as a duplicate inside this
project. On import, rename each one back:

```
Underline.jsx.txt  →  Underline.jsx        Underline.d.ts.txt  →  Underline.d.ts
Arrow.jsx.txt      →  Arrow.jsx            Arrow.d.ts.txt      →  Arrow.d.ts
Shape.jsx.txt      →  Shape.jsx            Shape.d.ts.txt      →  Shape.d.ts
Sparkle.jsx.txt    →  Sparkle.jsx          Sparkle.d.ts.txt    →  Sparkle.d.ts
annotations.card.html.txt  →  annotations.card.html
```

## 1. Drop the folder in

Copy `components/annotations/` into the target project's components directory, keeping the
folder intact. The compiler picks up each `<Name>.d.ts` + `<Name>.jsx` pair automatically. No
dependencies beyond React — the SVG paths are inline and the green is hardcoded with a token
fallback (`var(--green-0, #62E774)`), so they render correctly even if the target has no
`--green-0`.

## 2. Add the token (optional but preferred)

If the target's palette doesn't already define it:

```css
:root { --green-0: #62E774; }
```

## 3. Fix two references in the card

`annotations.card.html` was written for a project where the design system lives two levels up:

- `<link rel="stylesheet" href="../../styles.css">` and `<script src="../../_ds_bundle.js">`
  — adjust the `../../` depth if the folder sits at a different level.
- `const { Underline, Arrow, Shape, Sparkle } = window.FreedDesignSystem_e5ae95;` — replace the
  namespace with the target's own (run its design-system check to get the exact name).

The card's `@dsCard` group is `09 Annotations`; rename it to fit the target's grouping scheme.

## 4. Carry the rules over

`Annotations.prompt.md` is the authoritative usage doc — keep it in the folder. Also paste this
section into the target's `readme.md` so the rules survive independently of the folder:

---

## Annotations

Hand-drawn marks inspired by handwritten doctor's notes — a human touch that feels natural and
personal. Four families, extracted verbatim from the brand file as inline SVG: `Underline`
(6 types), `Arrow` (5), `Shape` (4), `Sparkle` (3), each taking `type="01"…`.

- **Always Freed Focus green `#62E774`** (`--green-0`) — never any other color. The components
  enforce this: `style.color` overrides are ignored with a console warning.
- **Solid, consistent stroke width with rounded endpoints.** Digital, not calligraphic — never
  tapered, dashed, or square-capped. Default weight 3px; pass `strokeWidth` to scale
  proportionally on much smaller or larger assets.
- **Intentionally imperfect and organic** — a quick mark made in the moment, not a deliberate
  illustration. Don't straighten, tidy, or geometrically align them.
- **Emphasize, don't distract. Less is more.** One annotation per area; never a doodle pad.
- Weight may vary with context but stays consistent within a given area.
- Typical jobs: circle a word in a headline, underline a phrase, point at a screenshot detail.
- Decorative, so exempt from AA contrast — but never let one carry meaning alone.
- Keep them near their natural size; scale with `transform: scale()` rather than stretching.

---

## API

```jsx
<Underline type="02" />                       // types 01–06
<Arrow type="03" strokeWidth={4} />           // types 01–05
<Shape type="01" />                           // types 01–04
<Sparkle type="02" style={{opacity:.9}} />    // types 01–03
```

All four take `type`, `strokeWidth` (default 3), `className`, `style`. `style.color` is
rejected by design.

Positioning example — underline a word inside a headline:

```jsx
<span style={{position:'relative', display:'inline-block'}}>
  clinician
  <span style={{position:'absolute', left:'2%', bottom:-10, width:'100%'}}>
    <Underline type="02" style={{width:'100%'}} />
  </span>
</span>
```
