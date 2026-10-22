# Freed — Design System

Freed is an AI software company. Its products help small, independent clinics work more
efficiently and provide better care to their communities. The flagship is an **ambient AI
scribe** that listens to a visit and produces a finished clinical note; around it sit a
**clinician assistant** (visit prep, decision support), a **coding assistant** (ICD‑10 / CPT
/ E‑M), **EHR push**, and **Front Desk** (an AI receptionist and shared clinic inbox).

The audience is clinicians and small-practice staff — not enterprise health systems.
"You might not recognize the clinics we work with — that's on purpose."

## Sources

**Token source of truth (since 2026-10-21): the Figma file "01_Semantic - General"**, kept at
`figma-references/semantic-general-10-21-26.fig`. Every file in `tokens/` except `motion.css`,
`fonts.css` and `aurora-palette.css` is generated from its variable collections (Base, Theme,
Typography, Layout), its text styles and its effect styles, and uses Figma's own names. To change
a colour, size or shadow, change it in Figma and run `scripts/figma-sync/sync.sh` — don't hand-edit the token files.

The rest of the system was first **imported from a finished Freed design system** the user had
already authored elsewhere: `uploads/Freed Design System.html`. Its page is kept at
`guidelines/overview.html`, now marked as a legacy page. Public brand copy quoted in the Content
Fundamentals section below comes from getfreed.ai (July 2026).

## Content fundamentals

**Voice: warm, plain, and on the clinician's side.** Freed writes like a colleague who
knows charting is the worst part of the day, not like a vendor.

- **Second person, always.** "Turn every visit into a finished note, so work doesn't follow
  you home." "Calls answered and tasks organized, so your team can have a lunch break."
  The company speaks as "we" only when talking about itself ("We're not made for massive
  healthcare systems").
- **Sentence case everywhere** — headlines, buttons, nav. Not Title Case. Product names are
  lowercase-after-the-first-word too: "AI scribe", "Front Desk", "Coding assistant".
- **Benefit before mechanism.** The headline is the outcome ("Focus on people, not
  paperwork"); the subhead names the product ("The AI scribe and Front Desk giving time
  back to independent clinics").
- **Short. Concrete. Verbs.** "Get a complete note in minutes." "Set up in 30 minutes."
  "Adapts to your clinic in minutes, not months." Numbers are specific and countable —
  98% recall, 30+ specialties, 26k+ clinicians, $39/month.
- **Time is the currency.** Nearly every claim converts to hours, evenings, weekends,
  lunch breaks. "5.9 million hours returned to our clinicians each year."
- **Dry, gentle humor, used once.** The footer line is "Warning: Freed may cause
  happiness." Humor never lands in a clinical or compliance context.
- **Compliance is stated flatly, never scarily:** "Our technology is HIPAA-compliant, uses
  industry best practices, and doesn't store patient recordings."
- **No emoji.** Not in product, not in marketing. Icons carry that job.
- **Em dashes and en dashes are used freely** for asides; exclamation points are rare and
  reserved for quoted clinicians.
- Avoid: "revolutionary", "unlock", "supercharge", "seamlessly" (except literally about EHR
  push), AI hype, and anything that positions the tool as extracting more work from
  doctors — the founding story is explicitly the opposite.

## Accessibility (non-negotiable)

**Every design made with this system must meet WCAG 2.1 AA, and must be checked before
it ships — not assumed.**

- **Text contrast ≥ 4.5:1** against its actual background. Large text (24px+, or 19px+ at
  weight 600 and above) may drop to **3:1**, and no lower.
- **Icons, glyphs and decorative graphics are exempt** — they are held to brand consistency,
  not contrast. Focus rings and interactive borders still need **3:1**.
- Check the *rendered* pairing, not the token name. Glass surfaces are semi-transparent, so
  test text against the composite result over its real backdrop, not against the tint.
- Known traps in this palette:
  - White text fails on `purple-300`, `-400` and `-500` (`purple-500` is 3.77:1), on every step from 50 to 400 of
    Saline, Pepto, Focus Green and X-ray, and on Yellow at any step. White text is safe from `purple-600` down
    (6.32:1) — that is why `purple-600` (`purple-0`) is the standard white-text backdrop.
  - `text-color-secondary` / `text-color-footnote` (`neutral-700` `#6E6E6E`, 5.10:1 on white) is the lightest grey
    allowed for text. `neutral-600` (`#999`, 2.85:1) and lighter are decorative only.
  - **Two Figma tag pairs fail AA and are flagged, not re-tinted:** `tags-text-secondary` (white) on
    `tags-bg-secondary` (`saline-500`, 2.30:1) and on `tags-bg-alternate-01` (`pepto-400`, 2.33:1). Fix them in Figma;
    until then prefer the `primary` tag for anything a reader must rely on.
  - In the dark theme, text tokens switch (for example `text-color-primary` becomes white on `purple-950`); check the
    rendered pair in both themes.
- `yellow-400` (`#F6E600`) never carries white text; pair it with `text-color-primary`.
- Never signal state by color alone; pair it with an icon, label, or shape.
- Body copy is never below 14px, and hit targets are never below 44px.

If a chosen color cannot meet the ratio, **change the color, not the requirement** — step
down the ramp until it passes.

## Visual foundations

**Color.** One hero color: **Freed purple, `purple-600` `#6A3CDF`** (the starred base step, also
`purple-0`), backed by an 11-step `purple-*` ramp. Every ramp marks its base step with `*` in Figma:
purple 600, saline 500, pepto 400, green 500, x-ray 400, neutral 900, yellow 400, red 400, orange 400.
- **Three layers, use the highest that fits:** primitive ramps (`purple-50` … `purple-950`), **Base**
  relative steps (`purple-l6` … `purple-0` … `purple-d4`, where `-0` is the base step, `-l` lighter and `-d`
  darker) with opacity variants (`purple-0-50` = base purple at 50%), and **Theme** semantic tokens
  (`background-*`, `text-color-*`, `border-color-*`, `buttons-*`, `icon-*`, `tags-*`, `glass-cards-*`,
  `bubble-cards-*`, `glow-cards-*`, `petri-cards-*`, `link-color-*`, `logo-color-*`, `elevation-*`).
  **Reach for Theme tokens first** — they are the only layer that switches with dark mode.
  `tokens/figma-variables.json` holds all four Figma collections (Base, Theme, Typography, Layout) in Figma's
  own group structure and order, with each variable's CSS name, values per mode and alias.
- Support ramps — Saline, Pepto, Focus Green, X-ray — are used *strategically*, mostly as icon, tag and
  card accents, never as large competing fields. Yellow (caution), Red (error) and Orange (warning) are
  5-step ramps used only for meaning.
- Neutrals are true greys from `neutral-50` (white) to `neutral-950` (black). `neutral-900` `#212121` is
  `text-color-primary`; `neutral-700` `#6E6E6E` is `text-color-secondary`.
- Backgrounds: `background-primary` (white), `background-secondary` (`#FAFAFA`), `background-alternate-01`
  (`purple-50`) and `background-alternate-02` (`purple-300`).
- Borders are saline-tinted, not grey: `border-color-primary` (`saline-900` at 10%) and
  `border-color-secondary` (30%); `border-color-focus` is `purple-600`.
- **Dark mode** is Figma's second Theme mode: set `data-theme="dark"` on a container (or `<html>`).
  Grounds become deep purple (`background-primary` = `purple-950`), text becomes white.
- **Headings are black (`text-color-primary`) by default**, with `.heading-purple` (`text-color-focus`)
  and `.heading-white` as the only other two options.
- The `aurora-palette.css` colours (`aqua-*`, `coral-*`, `moss-*`, `bone-*`, `lavender-*` …) are for aurora
  art direction only — never for UI fills or text. There are no bluish-purple hero gradients; where
  gradients appear they are soft, multi-hue aurora washes behind glass.

**Type.** Two families: headings use **KitRounded** (`font-family-heading`), a proprietary rounded
geometric face — **rendered with Nunito until the KitRounded webfont files are added** (see Caveats).
Body, product UI and buttons use **Inter** (`font-family-body`, `-product`, `-button`). Use the Figma text
styles, which ship as classes named after them:
- **Headlines** — `.headlines-h1-large` 96px Light 300, `.headlines-h1` 55, `.headlines-h2` 46, `.headlines-h3`
  36 (all Regular), `.headlines-h4` 24 Medium, `.headlines-h6` 18 Medium — all KitRounded with **no letter-spacing**,
  line-height 1.2–1.4. `.headlines-h5` (20 Medium) is **Inter**.
- **Body** (Inter, line-height 1.4) — `.body-x-large` 24, `.body-large` 22, `.body-medium` 20, `.body-primary` 18,
  `.body-small` 16, `.body-xsmall` 14, `.body-tiny` 12, with `-bold` (700), `-medium`, `-underline` and
  `-uppercase` (+10% tracking) variants where Figma defines them.
- **Body copy never goes below 14px (`body-xsmall`).** `body-tiny` (12px) is only for captions, legal
  footnotes and labels — never running text.
- **Eyebrows** — `.eyebrows-primary` 18, `.eyebrows-small` 16, `.eyebrows-tiny` 14: Inter Medium, uppercase,
  4px tracking.
- **Buttons** — `.buttons-large` / `.buttons-primary` 20, `.buttons-small` 18, `.buttons-xsmall` 14: Inter
  SemiBold, line-height 1.
- `text-wrap: pretty` on paragraphs. The **logo wordmark is a serif** — it is an asset, never set in type.

**Spacing & layout.** Use the Figma Layout tokens: `spacing-none` 0, `spacing-tiny` 2, `spacing-xxxsmall` 4,
`spacing-xxsmall` 8, `spacing-xsmaller` 12, `spacing-smaller` 16, `spacing-small` 20, `spacing-medium` 32,
`spacing-large` 48, `spacing-xlarge` 64, `spacing-xxlarge` 80, `spacing-huge` 96, `spacing-xhuge` 128,
`spacing-xxhuge` 192. Card padding is `card-padding-small` 16 / `-primary` 32 / `-large` 48 / `-xlarge` 64;
button padding is `button-padding-*`. Content widths are `container-tiny` 484, `-xsmall` 742, `-small` 1000,
`-medium` 1248, `-primary` 1520 and `-large` 1620. Body copy stays around 620px wide.

**Corners.** `border-radius-xsmall` 4 · `small` 8 · `primary` 16 (glass cards, petri dish) · `large` 32
(bubble and glow cards) · `full` 999 (pills, circles). Strokes use `border-width-xsmall` 0.5 … `xlarge` 3.

**Cards.** Four treatments (`Card`), in order of how often they should appear:
1. **Glass** (default) — a `glass-cards-bg-*` tint (60–70% alpha), a 4px backdrop blur and the
   `effect-glass-card-elevation-*` shadow with its inner highlights. Seven tints: `primary` (clear neutral),
   `secondary` (purple), `alternate-01/02/03` (saline, x-ray, pepto), `success`, `error`. It is translucent, so it
   *requires* a backdrop: a photo, an aurora or a `purple-600` panel.
2. **Bubble** — the dimensional white card, safe anywhere: `bubble-cards-bg-primary` with the
   `effect-bubble-card-elevation-*` inner shading that gives it rounded thickness.
3. **Glow** — white card with a 3px gradient border and a two-sided coloured halo, in five variants
   (`effect-glow-card-*`). One hero moment per screen, never in a grid.
4. **Petri dish** — a shallow **recess in the surface** (`petri-cards-*`), with an angular white rim and a
   purple noise grain. **It exists to hold product imagery and never carries text.**

**Shadows.** Use the Figma effect styles: `effect-elevation-tiny`, `-small` and `-primary` (black at 10%, from
`elevation-primary`), plus the card effects above and `effect-icon-glass`. Rule: **a surface carries one
layer, two maximum — never stack elevation** (no elevated icon inside an elevated card).

**Transparency & blur.** Blur is the brand's signature effect and appears on glass cards and glass icon
containers only: Figma's Glass effect with a 4px frost (CSS `backdrop-filter: blur(4px)`; Figma's refraction
and specular edge have no CSS equivalent). Blur is never used for scrims over text; protection comes from a
solid deep-purple panel instead of a gradient scrim.

**Imagery.** Product UI is shown as clean, cropped, floating screenshot chips (a note, a
message, an alert) layered over aurora washes, not full browser frames. Photography is warm,
natural-light, real people — the founder-and-wife photo is the archetype — never blue-tinted
stock clinicalism, never grain filters. Clinic customer logos are flat greyscale marks.

**Motion.** Restrained. Fades and short upward slides on scroll, gentle continuous marquee
for the customer logo row, autoplaying muted hero video. No bounce, no spring, no
parallax; ~150–250ms ease-out for UI state, longer and slower for ambient background
motion. Prefer opacity/transform only.

**States.** **Hover darkens** primary buttons: `buttons-bg-primary` (`purple-600`) → `buttons-bg-primary-hover`
(`purple-800`); secondary buttons keep a transparent fill and fade their border to 50%
(`buttons-bg-secondary-border-hover`). Nothing scales or shrinks on press. Focus is `border-color-focus`
(`purple-600`). Disabled = reduced opacity, never a new grey token.

**Borders.** Hairlines in `border-color-primary` (saline-900 at 10%) or `border-color-secondary` (30%), at
`border-width-primary` (1px). Dashed borders (1.5px, `purple-400`) appear only in documentation/specimen contexts.

## Auroras

**Auroras are the brand's background pattern** — soft, organic, blurred colour fields that
make any surface feel like Freed. They come from `Library Auroras.fig`.

**Use them sparingly: one aurora per view.** A user should never see two at once, and a
float never shares a screen with a full-bleed. They are a signature moment, not a texture.

Three tiers, two of them built:

- **Full-bleed** — whole-page or whole-section scenes, 1920×1080, opaque. `AuroraFullBleed`.
  Available: `orb` × ten colorways, `wave` × purple, `funnel` × purple / purple-peach /
  moss-aqua. More compositions and colorways are still being designed.
- **Floats** — **exactly two** singles overlapped *closely* into one amorphous form you can't
  decompose; shapes that merely touch read as two separate blobs. The saturated part of the
  upper shape should land on the **pale** part of the lower one — that contact is what makes a
  float interesting. Always **fully contained** — every soft edge fades out inside the frame,
  never cut off by a container edge — and exported on transparency so it composes over white
  or a photo. `AuroraFloat`. Three exist today:
  `doubleboom` (purple+fuchsia), `drift` (purple+lilac) and `ember` (coral+yellow). Only
  DoubleBoom is named in the source file; the other two names are ours.
- **Singles** — one organic shape on transparency, with Vibe (Soft / Intense) and Blur
  (Low / High) axes. `Aurora`. Exported so far: **WillyTheWorm** (long horizontal S),
  **Pangolin** (crescent) and **Slinky** (wiggle, intense only). The other seven approved
  shapes — Amoeba, Boomerang, Bounce, Doggy, Sloth, Stanley, Wave — warn and fall back until
  their PNGs land. Purple only for now.

All aurora art is the **approved Figma PNG exports**, referenced verbatim — never recreated in
CSS, SVG or any other form, and never assembled from singles in code. A new composition or
colorway comes from the design owner exporting it: an aurora is art-directed, and generated
assemblies don't hold up. If a design needs an aurora that doesn't exist yet, ask for the
export rather than building one.

**Colour.** Default to a **purple** variation — that is the house aurora.

**An individual shape reads best in one colour, or two adjacent ones.** Keep a single within
its own family (x-ray into aqua, pepto into pale pink, coral into yellow); purple into a warm
cream is the one established cross-family pair, because the library's own scenes use it.
Reaching across the wheel — saline into a peachy tone, for instance — looks wrong. This is
about the gradient *inside* one shape; a composition can still carry two different shapes in
two related hues.

The library's composition rule for pairing shapes: pick the brand colour closest to your
desired hue (purple over violet, X-ray over aqua), and pair a brand colour with its own
adjacent hues. Approved pairs: Purple+Lavender, Purple+Violet, Purple+X-ray,
Saline+Raspberry, Saline+Sky, Green+X-ray, Pepto+Yellow. Acceptable: X-ray+Aqua,
X-ray+Yellow, Coral+Yelloq. **Never:** Aqua+Yellow, Fuchsia+Yelloq, Green+Aqua,
Sky+Raspberry, Violet+X-ray. Hues with no adjacent brand colour (oranges, greens, yellow)
may be combined harmoniously.

**Shapes** must read organic — rounded, balanced curves, no pointy corners, not too complex.
`.Bird` is the counter-example the source file calls out; Waterbear-class complex shapes are
still in testing (use them behind other assets, or alongside simpler shapes).

**Composition.** Aim the shape mass **left or right rather than centred**, so a large UI
screenshot on top doesn't reduce the aurora to a plain gradient. Quieter scenes go behind
dense interfaces; busier ones suit large, simple screens.

**Placement.** Page or section background, hero behind a headline, or behind a cluster of
cards. Never inside small components.

**Text on an aurora** — on full-bleeds *and* floats — is for **large display text only**, and
the colour follows the field underneath:

- **`text-color-primary` on light colorways**: `purple-soft`, `xray`, `xray-aqua`, `pepto-yellow`, `coral`,
  `purple-peach`, `moss-aqua`, and the pale areas of the `drift` and `ember` floats.
- **`.heading-white` on dark, saturated ones**: `orb/purple`, `orb/saline`, `wave/purple`, and
  the dense purple of the `doubleboom` float.
- **Neither on mid-tones** — `purple-yellow`, `saline-aqua`, `pepto`, `funnel/purple` fail
  against both black and white, so put the copy on a `Card` (glass or bubble) instead.

Over a float, set the text against the pale part of the form and keep the saturated lobe
clear of the line — never run type straight through it. `AuroraFullBleed.textSafe` and
`AuroraFullBleed.whiteTextSafe` expose the machine-readable lists.

**Motion.** Static by default. `drift` opts into a very slow 42s scale-and-translate,
disabled under `prefers-reduced-motion`. No bounce, no parallax.

## Annotations

Hand-drawn marks inspired by handwritten doctor's notes — a human touch that feels natural and
personal. Four families, extracted verbatim from the brand file as inline SVG: `Underline`
(6 types), `Arrow` (5), `Shape` (4), `Sparkle` (3), each taking `type="01"…`.

- **Always Freed Focus green `#62E774`** (`text-annotations-primary`, i.e. `green-0`) — never any other color. The components
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

## Iconography

- **Phosphor Icons, `regular` weight**, is the icon system — no other set, no custom
  glyphs, no emoji, no unicode-as-icon. Eight glyphs used in the source system are copied
  into `assets/icons/` (`stethoscope`, `heart`, `calendar-blank`, `chat-circle`,
  `microphone`, `pulse`, `first-aid-kit`, `gear`); the rest of the set is loaded from the
  Phosphor CDN (`cdn.jsdelivr.net/npm/@phosphor-icons/core@2.1.1/assets/regular/<name>.svg`)
  by the `Icon` component. Glyphs are recolored via `fill="currentColor"`.
- Glyphs almost always sit **inside a container**, not bare — the Figma `icon/container`: a tile or a
  circle, flat or glass, in seven colours. See `Icon`.
- **Icons are decorative graphics, not text — they are exempt from the AA contrast rule.**
  Containers use the Theme `icon-bg-*` tokens: `primary` `purple-600`, `secondary` white (purple glyph),
  `alternate-01` `saline-500`, `alternate-02` `xray-400`, `alternate-03` `pepto-400`, `success` `green-600`,
  `error` `red-400`, with a white glyph (`icon-icon-color-primary`) on all but `secondary`. Glass containers use
  the Glass Cards tints. Text inside or beside an icon still has to pass AA.
- Two sizes: `primary` — 50px container, 26px glyph, `border-radius-small`; `small` — 20px, 12px glyph,
  `border-radius-xsmall`.
- There is no icon font and no sprite sheet — individual SVGs only.
- The logo mark (the wing/bird glyph) is part of the logo asset and is never used as an icon.

## Assets

`assets/logo-freed-purple.png`, `-black.png`, `-white.png` — the wordmark-plus-mark
lockup in the **only three approved colors**. White is for dark backgrounds — normally Freed purple 600.
`assets/mark-freed-*.png` are the same three colors of the **mark alone**, cropped from those
lockups (no redrawing) for favicons, avatars, and tight spaces.
Vector versions exported from the Figma `Logos/Freed` component are in `assets/logos/` (full,
icon and **text — the wordmark alone**) together with the HIPAA, SOC 2, combined certification and
"Loved by clinicians" badges; prefer them, or the `Logo` component, over the 2572×528 PNGs. No brand illustrations, marketing photography, or background images were
included in the imported bundle.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Entry stylesheet — `@import`s only. Consumers link this one file. |
| `figma-references/semantic-general-10-21-26.fig` | The Figma file the tokens are generated from — the source of truth. |
| `scripts/figma-sync/` | Regenerates the token CSS and specimen cards from the Figma file (`sync.sh`) and rebuilds the bundle (`build-bundle.sh`). |
| `tokens/colors.css` | Primitive ramps plus the Base relative steps and opacity variants (generated). |
| `tokens/theme.css` | Theme semantic tokens: Default (light) on `:root`, Dark mode on `[data-theme="dark"]` (generated). |
| `tokens/typography.css` | Font families, weights, size variables and the Figma text styles as classes (generated). |
| `tokens/spacing.css` | Layout: border radius, border width, spacing, button and card padding, containers (generated). |
| `tokens/effects.css` | Figma effect styles as `--effect-*` box-shadow values (generated). |
| `tokens/aurora-palette.css` | Aurora art colours from `Library Auroras.fig`, updated for the new primitives. Not for UI. |
| `tokens/fonts.css` | `@font-face` rules for the local Inter + Nunito woff2 subsets. |
| `tokens/motion.css` | The `aurora-drift` keyframes + reduced-motion guard. |
| `tokens/fig/fig-tokens.css` | Legacy: the 1037 variables of the older `Library Auroras.fig`. No longer imported. |
| `fonts/` | 19 woff2 subsets (Inter normal + italic, Nunito normal). |
| `assets/` | Logo lockups (3 colors, PNG), 8 Phosphor glyph SVGs, aurora PNGs, the tag reference SVG. |
| `assets/logos/` | SVG logos and badges exported from Figma: Freed full/icon/text in purple, black and white; HIPAA, SOC 2, certification and Loved-by in black and white. |
| `components/` | `Button`, `Card`, `Icon`, `Logo`, `Tag`, the aurora components and the annotations (+ `.d.ts`, `.prompt.md`, specimen cards). |
| `components/examples/` | Page-level examples built only from the components, tokens and text styles: a landing hero, a feature grid and a closing call to action (specimen cards, group "10 Examples"). The copy is placeholder. |
| `_ds_bundle.js` | All components as one script assigning `window.FreedDesignSystem_e5ae95`. |
| `guidelines/*.card.html` | Foundation specimens shown in the Design System tab, generated from the tokens. |
| `guidelines/overview.html` | Legacy: the original "Design System Overview" page from before the Figma alignment. |
| `SKILL.md` | Agent-skill entry point for use outside this project. |

### Components

- **Icon** — `components/icons/Icon.jsx` — Phosphor glyph in an on-brand tile or circle (Figma
  `icon/container`): seven colours × flat/glass × two sizes.
- **Tag** — `components/tags/Tag.jsx` — pill label with optional leading/trailing glyphs (Figma
  `icon/tag`): primary, secondary, alternate-01.
- **Card** — `components/cards/Card.jsx` — Freed surface (Figma card styles): `glass` (default, seven
  tints), `bubble`, `glow` (five variants), `petri`, with `elevation` none/small/primary.
- **AuroraFullBleed** — `components/auroras/AuroraFullBleed.jsx` — full-bleed Aurora
  background scene (`orb` / `wave` / `funnel` × colorway), wrapping the content on top.
- **AuroraFloat** — `components/auroras/AuroraFloat.jsx` — a Float: two singles merged into
  one amorphous shape on transparency, for use over white or photography.
- **Aurora** — `components/auroras/Aurora.jsx` — a single Aurora shape on transparency;
  shape × vibe × blur.
- **Button** — `components/buttons/Button.jsx` — call-to-action button (Figma `Buttons`): primary or
  secondary × xsmall/small/primary/large, hover darkens, optional leading/trailing glyphs.
- **Logo** — `components/logos/Logo.jsx` — the Freed logo (full, icon, text) and the HIPAA, SOC 2,
  certification and Loved-by badges (Figma `Logos/*`), as inline vectors in the approved colours.
- **Underline** — `components/annotations/Underline.jsx` — hand-drawn underline mark, 6 types.
- **Arrow** — `components/annotations/Arrow.jsx` — hand-drawn pointer, 5 types.
- **Shape** — `components/annotations/Shape.jsx` — hand-drawn circle/ring around a word, 4 types.
- **Sparkle** — `components/annotations/Sparkle.jsx` — hand-drawn burst accent, 3 types.

## Intentional additions

Three built components have no one-to-one component set in `Library Auroras.fig`, by design:

- **`AuroraFullBleed`**, **`AuroraFloat`** and **`Aurora`** — the Figma file expresses these
  as ~950 individual variants (`Aurora-Full/Orb_1`, `Float/DoubleBoom`, `SingleAurora/*` …).
  Shipping one component per variant would be unusable, so each *tier* is one component with
  shape/composition/colorway props. The art is the file's own exports, unmodified.
- **`Card`** — comes from the earlier Freed design-system import (glass / bubble / glow /
  petri surfaces), not from the Aurora library.
- **`Tag`** — built from a `tag.svg` the design owner supplied directly (kept at
  `assets/reference/tag-system.svg`), not from the Aurora library.
- **`Underline`**, **`Arrow`**, **`Shape`**, **`Sparkle`** — the annotations set, restored from
  the design owner's annotations kit (Brand Guide 2.0 §06). Not part of the Aurora library.

## Out of scope (deliberately not built)

`Library Auroras.fig` contains far more than the Aurora system, because unrelated work was
left in the file. The following is **intentionally skipped**, confirmed with the design owner.
(The marketing `Button` from "01_Semantic - General" *is* built — the product-UI buttons below are not.)

- **~170 product-UI component families** — Button, Button Icon, Badge (Pill/Square), Menu
  and menu items, Primary Nav / Note Nav / VisitList, Checkbox, Selector, Search input,
  Status Tag, Lozenge, Avatar, Cursor, the ~70-glyph icon set, AI Chat, Visit Card,
  note-header, ICD-10 cards, Documentation table, pagination and similar. These belong to
  Freed's **product** design system; building them here would fork that system.
- **Legacy and alternate shape sets** — `.Beam`, `.Bird`, `.Fidget`, `.Leaf`, `.Moon`,
  `.Snake`, `.Boomerang-legacy`, `.31Aurora`, `.32 Aurora`, `Full Bleed Auroras` v1–19,
  `Legacy_Full Bleed Auroras`, `Single Shape Auroras`, `/20_MidnightAuroras`,
  `/21_ArcticNightAuroras`.
- **The `backlog` and `Creative Drops (not components)` pages** in their entirety.
- **`.Bird` and Waterbear-class shapes**, per the source file's own design notes.
- **Deprecated sets** — `.[DEPRECATED] Button`, `.[DEPRECATED] Button Icon`.

The older `Library Auroras.fig` variables are no longer imported (`tokens/fig/fig-tokens.css` is kept for
reference only). Its aurora colour families live on in `tokens/aurora-palette.css`; all other brand tokens
now come from "01_Semantic - General".

## Caveats

- **KitRounded (display face) is substituted with Nunito.** The imported system already made
  this substitution and flagged it. Real KitRounded woff2 files would drop into `fonts/` and
  need `@font-face` rules in `tokens/fonts.css`; `--font-family-heading` already lists KitRounded first.
- **No UI kits.** The imported bundle contained brand foundations only — no product screens,
  no marketing page recreations, and no slide template — so none were reconstructed. Building
  those requires the Freed app codebase or a Figma file.
