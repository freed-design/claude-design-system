Use `Icon` whenever a glyph needs a container — feature grids, list leading icons, empty states, marketing bullets. It matches the Figma `icon/container` component. Never draw your own glyphs; Freed uses the Phosphor **regular** set.

```jsx
<Icon name="stethoscope" />
<Icon name="pulse" color="alternate-02" shape="circle" />
<Icon name="heart" color="secondary" effect="glass" size="small" />
```

- `color` (Figma `Icon/bg/*`): `primary` (purple-600), `secondary` (white container, purple glyph), `alternate-01` (saline-500), `alternate-02` (x-ray-400), `alternate-03` (pepto-400), `success` (green-600), `error` (red-400). Every container except `secondary` carries a white glyph (`icon-icon-color-primary`).
- `effect`: `flat` (solid fill) or `glass` (the Glass Cards tint, 4px backdrop blur and the `effect-icon-glass` shadow). Glass needs something behind it — an aurora, photo or `purple-600` panel — never flat white.
- `shape`: `tile` (`border-radius-small`, or `xsmall` at the small size) or `circle` (`border-radius-full`).
- `size`: `primary` = 50px container with a 26px glyph; `small` = 20px with a 12px glyph; or a number of px.
- Icons are decorative graphics, exempt from AA contrast — but text next to them is not.
- Local copies of eight common glyphs live in `assets/icons/`; register them on `window.__resources['icon_<name>']` to work offline.
- Renamed props from before the Figma alignment still work with a console warning: `treatment` → `effect` (flat-* → flat, glass-* → glass); color `green` → `success`, `saline` → `alternate-01`, `xray` → `alternate-02`, `pepto` → `alternate-03`, `neutral` → `secondary`. The old tonal treatments no longer exist in Figma.
