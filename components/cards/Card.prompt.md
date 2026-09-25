Use `Card` for any Freed content surface — feature tiles, product callouts, pricing blocks, in-app panels.

```jsx
<Card title="Specialty-specific templates" body="Match your workflow, patients, and visit types." elevation="medium" />
<Card effect="glass" color="neutral" title="Clear glass" body="White at 60% — lets the backdrop through." />
<Card effect="bubble" title="Note ready" body="Reviewed and pushed to the EHR." />
<Card effect="glow" title="New" body="Coding assistant is live." />
<Card effect="petri"><img src="assets/product-note.png" alt="" style={{width:'100%',display:'block'}} /></Card>
```

- `petri` is a **dent in the surface, not a tile** — a shallow concave well. The near
  (top/left) wall shades the interior, the far (bottom) wall catches light, and a crisp 1px
  lip rides the outer bottom edge. Opaque, so it needs no backdrop.
- **A petri dish holds product imagery only — never text.** Pass the shot as `children`;
  `title`/`body` are ignored. Use bubble or glass for copy.

- Glass takes **any** of the seven tint families: `primary` (default), `neutral`, `green`,
  `saline`, `xray`, `pepto`, `error`. `neutral` is the white/clear glass — white at 60%
  opacity rather than 70% — and is the right pick when the backdrop imagery should read
  through unchanged. Match the tint to meaning (green = done, error = attention), or use
  `primary`/`neutral` when it is just a surface.

- `glass` (default) is frosted and semi-transparent: it needs a photo, gradient, or `--lavender-600` panel behind it to read correctly. On a purple or dark panel add `inverted`.
- `bubble` is the dimensional white card — safe anywhere. Its thickness comes from a top-lit
  surface gradient plus a bright inner top edge, a 1px inner bottom edge, and an inner floor
  shade; keep all four when restyling, or it flattens to plain paper.
- `glow` is reserved for one hero moment per screen; don't repeat it in a grid.
- The glow halo paints on the **negative layer** (`z-index: -1`), so it always sits behind
  neighboring content rather than bleeding over it. Its nearest ancestor with a background
  must therefore be transparent, or the halo will be hidden behind that fill.
- Elevation is one layer only: an elevated card must not contain elevated children.
- Titles are always `--ink` (text black) — on glass, bubble, and glow alike; only `inverted` makes them white. Glass subcopy steps darker (`--neutral-700`) than bubble/glow subcopy (`--neutral-600`) because it sits on a tint.
