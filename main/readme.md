# Freed — Design System

Freed is an AI software company. Its products help small, independent clinics work more
efficiently and provide better care to their communities. The flagship is an **ambient AI
scribe** that listens to a visit and produces a finished clinical note; around it sit a
**clinician assistant** (visit prep, decision support), a **coding assistant** (ICD‑10 / CPT
/ E‑M), **EHR push**, and **Front Desk** (an AI receptionist and shared clinic inbox).

The audience is clinicians and small-practice staff — not enterprise health systems.
"You might not recognize the clinics we work with — that's on purpose."

## Sources

This system was **imported from a finished Freed design system** the user had already
authored elsewhere: `uploads/Freed Design System.html` — a self-contained bundle of the
"Freed — Design System Overview" page. Everything here (token values, type utilities, logo
PNGs, Phosphor glyph copies, Nunito/Inter webfont subsets, and the `Icon` / `Card`
components) was unpacked from that file, not re-invented. The page itself is restored at
`guidelines/overview.html` (same markup and demos, with the stylesheet and assets pointing
at this project's files).

No Figma file, repository, or product codebase was attached. Public brand copy quoted in
the Content Fundamentals section below comes from getfreed.ai (July 2026).

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
- Known traps in this palette: white text fails on `lavender-300/400/500`, on every
  `-50`…`-400` step of Saline, Pepto, Focus Green, X-ray, and on Yellow at any step. White
  text is safe from `lavender-600` down (that is why `--lavender-600` is the standard white-text
  backdrop). **`--neutral-600` `#737373` (4.66:1 on white) is the lightest permissible body
  grey.** `--fg-muted` resolves to `neutral-500` `#999` = **2.85:1 on white — it fails AA for
  body text**; use it only for large text on white, or on a tinted surface where it passes.
  `neutral-400` and lighter are decorative only.
- Yellow (`--yellow-500 #f6e600`) never carries white text; pair it with `--ink`.
- Never signal state by color alone; pair it with an icon, label, or shape.
- Body copy is never below 14px, and hit targets are never below 44px.

If a chosen color cannot meet the ratio, **change the color, not the requirement** — step
down the ramp until it passes.

## Visual foundations

**Color.** One hero color: **Freed purple / lavender-600 `#6A3CDF`**, backed by a full
11‑step lavender ramp. Support ramps — Saline (blue), Pepto (pink), Focus Green, X‑ray
(teal) — are used *strategically*, mostly as icon families and small accents, never as
large competing fields. Yellow and Red are 5‑step semantic-only ramps (caution, error).
Neutrals are true greys (`#f7f7f7` → `#000`); `--ink #212121` is the workhorse text color.
`--lavender-600` is the standard backdrop for white text, the white logo, and inverted
glass cards; `--lavender-950 #15004b` is the deepest panel color, for when you truly want it. Legacy `--navy` now resolves to
`--ink`: **headings are black by default**, with `.heading-purple` / `.heading-white` as the
only other two options. FreedNavy is retired. There are no bluish-purple hero gradients;
where gradients appear they are soft, multi-hue aurora washes behind glass.

**Type.** Two families. Display/headings use **KitRounded**, a proprietary rounded
geometric face — **substituted here with Nunito** (see Caveats). Body and all product UI
use **Inter** (exact). Mono is the system stack. Marketing headings run big and tight
(96 / 55 / 46 / 36px, weight 400, letter-spacing −0.02em → −0.005em); h4–h6 step up to
weight 500. Body sizes are 22 / 20 / 18 / 16 / 14 at line-height 1.4, with `-bold` (600),
`-underline`, and `-uppercase` (+0.04em) modifiers. The eyebrow is 12–13px, 600,
uppercase, +0.08em, in lavender-600. Note the **logo wordmark is a serif** — it is an
asset, never set in type.

**Spacing & layout.** 4pt base scale, `--space-1` (4px) → `--space-24` (96px). Content is
centered in a ~1100px measure with generous 48–80px vertical section rhythm; body copy is
capped around 620px. `text-wrap: pretty` on paragraphs.

**Corners.** `--radius-xs 6` · `sm 8` · `md 14` · `lg 20` · `xl 30` (cards and large
surfaces) · `pill 999`. Icon tiles use a 30%-of-size radius, so they scale with the glyph.

**Cards.** Three treatments, in order of how often they should appear:
1. **Glass** (default) — `rgba(family, .7)` fill, `blur(16px)`, 1px `rgba(255,255,255,.38)`
   border, 16px radius, elevation plus an `inset 0 1px 0 rgba(255,255,255,.45)` top
   highlight. **Any of the seven tint families works** — Lavender (default), neutral,
   Focus Green, Saline, X-ray, Pepto, or error red; `neutral` is the white/clear glass at
   60% opacity, for when the backdrop should read through unchanged. It is transparent, so it
   *requires* a backdrop: a photo, an aurora gradient, or a `--lavender-600` panel (then
   `inverted` for white text).
2. **Bubble** — the dimensional white card: a top-lit surface gradient
   (`#fff` → `#f4f4f8`), a bright 1.5px inner top edge, a 1px inner bottom edge, and a soft
   inner floor shade, over a `--neutral-150` hairline and 18px radius. Those four layers are
   what give it rounded thickness — a flat white fill with one white inset reads as paper,
   not a bubble. The safe card anywhere.
3. **Glow** — white card with a 1.5px gradient border and an 18px-blurred gradient halo at
   55% opacity (pink → lavender → purple → teal), painted on the negative layer so it always
   sits *behind* adjacent content. One hero moment per screen, never in a grid.
4. **Petri dish** — a shallow **recess in the surface**, not a raised tile: the family's
   `-100` tint, a top-down darkening wash, a strong inner shade off the near (top/left) wall,
   a lit far (bottom) wall with a crisp 1px white lip on the outer bottom edge, a fine
   fractal-noise grain in `rgba(134,98,229,.3)`, and a 1px angular white rim sweep (conic,
   peaking at 25.5%). **It exists to hold product imagery and never carries text.**

**Shadows.** Two parallel systems: `--elevation-small/medium/large` (neutral
`rgba(18,18,28,…)`, the one used by components) and `--shadow-xs…lg` (cooler
`rgba(16,24,40,…)`). Rule: **a surface carries one layer, two maximum — never stack
elevation** (no elevated icon inside an elevated card).

**Transparency & blur.** Blur is the brand's signature effect and appears in exactly two
places: glass cards (16px) and glass icon containers (8px). Both add a white hairline and
an inset highlight so the edge catches light. Blur is never used for scrims or overlays on
text; protection comes from a solid deep-purple panel instead of a gradient scrim.

**Imagery.** Product UI is shown as clean, cropped, floating screenshot chips (a note, a
message, an alert) layered over aurora washes, not full browser frames. Photography is warm,
natural-light, real people — the founder-and-wife photo is the archetype — never blue-tinted
stock clinicalism, never grain filters. Clinic customer logos are flat greyscale marks.

**Motion.** Restrained. Fades and short upward slides on scroll, gentle continuous marquee
for the customer logo row, autoplaying muted hero video. No bounce, no spring, no
parallax; ~150–250ms ease-out for UI state, longer and slower for ambient background
motion. Prefer opacity/transform only.

**States.** Hover lightens purple (`--primary` → `--primary-hover` = lavender‑500);
press darkens (`--primary-press` = lavender‑700). Tinted/quiet controls hover to
`--primary-tint` (lavender‑100). Nothing scales or shrinks on press; focus is a
lavender ring. Disabled = reduced opacity on a neutral fill, never a new grey token.

**Borders.** 1px hairlines only: `--border` (neutral‑200) on light surfaces,
`rgba(255,255,255,.38)` on glass, `--neutral-150` on bubbles. Dashed borders
(1.5px, lavender‑400) appear only in documentation/specimen contexts.

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

- **`--ink` on light colorways**: `purple-soft`, `xray`, `xray-aqua`, `pepto-yellow`, `coral`,
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

## Iconography

- **Phosphor Icons, `regular` weight**, is the icon system — no other set, no custom
  glyphs, no emoji, no unicode-as-icon. Eight glyphs used in the source system are copied
  into `assets/icons/` (`stethoscope`, `heart`, `calendar-blank`, `chat-circle`,
  `microphone`, `pulse`, `first-aid-kit`, `gear`); the rest of the set is loaded from the
  Phosphor CDN (`cdn.jsdelivr.net/npm/@phosphor-icons/core@2.1.1/assets/regular/<name>.svg`)
  by the `Icon` component. Glyphs are recolored via `fill="currentColor"`.
- Glyphs almost always sit **inside a container**, not bare: a tile (30% radius) or a
  circle, in one of four treatments × seven color families. See `Icon`.
- **Icons are decorative graphics, not text — they are exempt from the AA contrast rule.**
  Containers are deliberately light and consistent: white-glyph containers use each family's
  **400** step (`lavender-400`, `green-400`, `saline-400`, `xray-400`, `pepto-400`, plus
  `red-200` / `neutral-400` for the short ramps); tonal-glyph containers use the **300**
  step. Glass treatments reuse the same steps and add blur. Text inside or beside an icon
  still has to pass AA.
- Glyph is 56% of the container edge; standard container sizes are 40–56px.
- There is no icon font and no sprite sheet — individual SVGs only.
- The logo mark (the wing/bird glyph) is part of the logo asset and is never used as an icon.

## Assets

`assets/logo-freed-purple.png`, `-black.png`, `-white.png` — the wordmark-plus-mark
lockup in the **only three approved colors**. White is for dark backgrounds — normally Freed purple 600.
`assets/mark-freed-*.png` are the same three colors of the **mark alone**, cropped from those
lockups (no redrawing) for favicons, avatars, and tight spaces.
There is no SVG logo in the imported source; these transparent PNGs (2572×528) are the
originals. No brand illustrations, marketing photography, or background images were
included in the imported bundle.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Entry stylesheet — `@import`s only. Consumers link this one file. |
| `tokens/fonts.css` | `@font-face` rules for the local Inter + Nunito woff2 subsets. |
| `tokens/colors.css` | All ramps, icon-treatment vars, elevation, semantic colors. |
| `tokens/typography.css` | Families, fluid marketing scale, `.heading-style-*` / `.text-size-*` utilities. |
| `tokens/spacing.css` | Radii, `--shadow-*`, 4pt spacing scale. |
| `fonts/` | 19 woff2 subsets (Inter normal + italic, Nunito normal). |
| `assets/` | Logo lockups (3 colors) + 8 Phosphor glyph SVGs in `assets/icons/`. |
| `components/icons/` | `Icon` (+ `.d.ts`, `.prompt.md`, specimen card). |
| `components/cards/` | `Card` (+ `.d.ts`, `.prompt.md`, specimen card). |
| `components/tags/` | `Tag` (+ `.d.ts`, `.prompt.md`, specimen card). |
| `components/auroras/` | `AuroraFullBleed`, `AuroraFloat`, `Aurora` (+ `.d.ts`, `.prompt.md`, card). |
| `tokens/fig/fig-tokens.css` | All 1037 Figma Variables from `Library Auroras.fig`. |
| `tokens/motion.css` | The `aurora-drift` keyframes + reduced-motion guard. |
| `assets/auroras/` | 14 full-bleed scene PNGs, 3 float PNGs, 10 single-shape PNGs. || `guidelines/*.card.html` | Foundation specimens shown in the Design System tab. |
| `guidelines/overview.html` | The uploaded "Design System Overview" page itself, restored — logo tiles, ramps, type rows, the full icon matrix, and every card effect. |
| `SKILL.md` | Agent-skill entry point for use outside this project. |

### Components

- **Icon** — `components/icons/Icon.jsx` — Phosphor glyph in an on-brand tile or circle;
  four treatments (`flat-white`, `flat-tonal`, `glass-white`, `glass-tonal`) × seven color
  families.
- **Tag** — `components/tags/Tag.jsx` — pill label with a leading glyph; subtle purple
  default plus solid colour fills. Geometry from the supplied `tag.svg`.
- **Card** — `components/cards/Card.jsx` — Freed surface: `glass` (default), `bubble`, `glow`,
  `petri`, with `elevation`, `inverted`, and glass tint families.
- **AuroraFullBleed** — `components/auroras/AuroraFullBleed.jsx` — full-bleed Aurora
  background scene (`orb` / `wave` / `funnel` × colorway), wrapping the content on top.
- **AuroraFloat** — `components/auroras/AuroraFloat.jsx` — a Float: two singles merged into
  one amorphous shape on transparency, for use over white or photography.
- **Aurora** — `components/auroras/Aurora.jsx` — a single Aurora shape on transparency;
  shape × vibe × blur.
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
left in the file. The following is **intentionally skipped**, confirmed with the design owner:

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

All four Figma variable collections **are** imported (`tokens/fig/fig-tokens.css`, 1037
variables). The Aurora palette proper is the `purple` / `lavender` / `aqua` / `coral` /
`pepto` / `saline` / `x-ray` / `moss` / `yellow` / `bone` families within it; the remaining
`Ungrouped` variables are the product system's semantic tokens, present for completeness
rather than for brand work.

## Caveats

- **KitRounded (display face) is substituted with Nunito.** The imported system already made
  this substitution and flagged it. Real KitRounded woff2 files would drop into `fonts/` and
  need one edit to `--font-display` in `tokens/typography.css`.
- **No UI kits.** The imported bundle contained brand foundations only — no product screens,
  no marketing page recreations, and no slide template — so none were reconstructed. Building
  those requires the Freed app codebase or a Figma file.
- **Logo is PNG-only** at 2572×528; an SVG lockup would be better for large display use.
