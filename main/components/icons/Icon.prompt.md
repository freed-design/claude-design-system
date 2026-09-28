Use `Icon` whenever a glyph needs a container — feature grids, list leading icons, empty states, marketing bullets. Never draw your own glyphs; Freed uses the Phosphor **regular** set.

```jsx
<Icon name="stethoscope" treatment="flat-white" color="primary" size={48} />
<Icon name="pulse" treatment="glass-tonal" shape="circle" color="xray" size={56} />
```

- `treatment`: `flat-white` (light family tint + white glyph) · `flat-tonal` (lighter tint + dark same-family glyph) · `glass-white` / `glass-tonal` (the same tints with blur and a white hairline).
- Containers are intentionally light and consistent: **400** step for white glyphs, **300** step for tonal glyphs, across every family. Icons are decorative graphics, so they are exempt from AA contrast — but any text next to them is not.
- Glass treatments need something behind them — put them on a photo, gradient, or `--lavender-600` panel, never on flat white.
- `color="neutral"` with `flat-tonal` gets a `--neutral-200` hairline so the white container reads on white.
- Local copies of eight common glyphs live in `assets/icons/`; register them on
  `window.__resources['icon_<name>']` to work offline.
