Use `Logo` for the Freed logo and the trust badges — the Figma `Logos/Freed`, `Logos/HIPAA`, `Logos/SOC2`, `Logos/CERTIFICATION-Combined` and `Logos/Loved By` components, rendered from their vector data.

```jsx
<Logo />                                   {/* Freed lockup, logo-color-primary */}
<Logo type="icon" color="secondary" height={32} />
<Logo type="text" color="white" />
<Logo name="certification" height={48} />
<Logo name="loved-by" />
```

- **Freed** comes in three types: `full` (the mark plus the serif wordmark), `icon` (the mark alone — favicons, avatars, tight spaces) and `text` (the wordmark alone). The wordmark is a drawing: never set "Freed" in type to imitate it.
- **Colours**: only the approved ones. `primary` is `logo-color-primary` (black, white in the dark theme), `secondary` is `logo-color-secondary` (purple-600, purple-300 in the dark theme), and `white` is for purple-600 or darker grounds. Never use the support ramps, gradients or auroras on a logo.
- **Badges** — `hipaa`, `soc2`, `certification` (the two side by side) and `loved-by` — are single-colour; keep them `primary` on light grounds and `white` on dark ones. They sit in footers, pricing and trust rows, never as decoration.
- `loved-by` carries a figure ("26k+"); it is artwork from Figma, so update it there when the number changes.
- Clear space: at least the mark's height on every side of the full lockup. Don't stretch — set `height` and the width follows.
- Static SVG files of every combination are in the Logos asset group (`freed-full-purple.svg`, `soc2-white.svg` …).
