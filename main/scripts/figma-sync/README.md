# figma-sync

Regenerates the Freed token CSS from the Figma file, which is the source of truth for every brand token.

```sh
scripts/figma-sync/sync.sh                      # newest .fig in figma-references/
scripts/figma-sync/sync.sh figma-references/semantic-general-10-21-26.fig
```

Needs `python3` and the `zstd` command (`brew install zstd`). Intermediate files go to a temp folder and are deleted afterwards.

## What it writes

| File | From Figma |
| --- | --- |
| `tokens/colors.css` | Primitive ramps (from the primitives library snapshot in the file) and the **Base** collection: relative steps (`purple-l6` … `purple-0` … `purple-d4`) and opacity variants |
| `tokens/theme.css` | The **Theme** collection: Default on `:root`, Dark mode on `[data-theme="dark"]` |
| `tokens/typography.css` | Font families, weights and the **Typography** collection, plus the local text styles as classes (`headlines/h1` → `.headlines-h1`) |
| `tokens/spacing.css` | The **Layout** collection: border radius and width, spacing, button and card padding, containers |
| `tokens/effects.css` | The local effect styles as `--effect-*` box-shadow lists |
| `guidelines/*.card.html` | The specimen cards, regenerated from the above |
| `assets/logos/*.svg` and the path data in `components/logos/Logo.jsx` | The `Logos/*` components (Freed full/icon/text, HIPAA, SOC 2, certification, Loved by), exported from their vector data in the approved colours |

It does not touch `tokens/fonts.css`, `motion.css` or `aurora-palette.css`, which are maintained by hand.

## Steps

1. `figkiwi.py` unzips the `.fig` and decodes its kiwi-encoded `canvas.fig` into `msg.json`.
2. `1_collect.py` resolves variable aliases and `COMPOSE_COLOR` opacity expressions per mode. Collections are found by name (Base, Theme, Typography, Layout), so the file can be re-exported freely. Where a library variable appears in two versions, the newest wins.
3. `2_…` to `6_…` write the files listed above.

## Decisions built into the scripts

These were made on 2026-10-21. Change them in the scripts if they change:

- **h6** uses KitRounded, following its text style; the `h6-font-family` variable says Inter. See `3_type_layout.py`.
- **Line-height variables are left out.** They are 0 placeholders in Figma, and the text styles carry the real line heights.
- **KitRounded falls back to Nunito.** `--font-family-heading` lists KitRounded first, so adding its font files to `tokens/fonts.css` is enough.
- **Name clash:** Figma uses `Elevation/primary` for both a colour variable and an effect style. Effect styles are therefore prefixed `--effect-`.

## Components

After component code changes, run `scripts/figma-sync/build-bundle.sh`. It re-transpiles Card, Icon, Tag, Button and Logo into `_ds_bundle.js` (adding any that are new) using esbuild, which is installed into a temp folder and never into this repository. To include another component, add it to the list in `build_bundle.mjs`.

After a sync, re-sync the Claude design system from this folder.
