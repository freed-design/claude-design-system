Use `Card` for any Freed content surface — feature tiles, product callouts, pricing blocks, in-app panels. It matches the Figma card styles (glass-card, bubble-card, glow-card, petri-card).

```jsx
<Card title="Specialty-specific templates" body="Match your workflow, patients, and visit types." />
<Card effect="glass" color="secondary" elevation="small" title="Purple glass" body="On an aurora or photo." />
<Card effect="bubble" elevation="small" title="Note ready" body="Reviewed and pushed to the EHR." />
<Card effect="glow" color="alternate-01" title="New" body="Coding assistant is live." />
<Card effect="petri"><img src="assets/product-note.png" alt="" style={{width:'100%',display:'block'}} /></Card>
```

- **Glass** (default): `glass-cards-bg-*` tint, 4px backdrop blur, `border-radius-primary` (16px), `card-padding-small` (16px), shadow `effect-glass-card-elevation-none | small | primary`. Tints: `primary` is the clear neutral glass, `secondary` is purple, plus `alternate-01` (saline), `alternate-02` (x-ray), `alternate-03` (pepto), `success` and `error`. Glass is translucent, so it **needs a backdrop** — an aurora, a photo or a `purple-600` panel.
- **Bubble**: the dimensional white card, safe anywhere. `bubble-cards-bg-primary`, `border-radius-large` (32px), `card-padding-large` (48px), shadow `effect-bubble-card-elevation-none | small | primary`.
- **Glow**: white card with a 3px gradient border and a two-sided coloured halo (`effect-glow-card-*`). Five variants: `primary`, `secondary`, `alternate-01`, `alternate-02`, `alternate-03`. `border-radius-large`, `card-padding-primary` (32px). **One hero moment per screen** — never in a grid of glows.
- **Petri dish**: a recess that **holds product imagery only, never text**. Pass the shot as `children`; `title`/`body` are ignored. `petri-cards-background` well with an angular white rim (1.75px), inner shade and purple noise grain.
- Title is `body-medium-bold`, body is `body-primary`, both `text-color-primary`. `inverted` forces white text for a dark ground; in the dark theme (`data-theme="dark"`) colours switch automatically.
- Elevation is one layer only: an elevated card never contains elevated children.
- Renamed props from before the Figma alignment still work with a console warning: color `neutral` → `primary`, `green` → `success`, `saline` → `alternate-01`, `xray` → `alternate-02`, `pepto` → `alternate-03`; elevation `medium` → `small`, `large` → `primary`. The old custom `glow` stop list is gone — pick a glow variant.
