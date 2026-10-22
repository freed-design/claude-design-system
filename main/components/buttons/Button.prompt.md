Use `Button` for calls to action — the Figma `Buttons` component. Sentence case, verb first, short: "Start for free", "Book a demo", "See pricing".

```jsx
<Button label="Start for free" />
<Button label="Book a demo" variant="secondary" trailingIcon="arrow-right" />
<Button label="Try for free" size="xsmall" icon="microphone" />
<Button label="See pricing" href="/pricing" size="large" />
```

- **Two variants** (Figma "Type"): `primary` — `buttons-bg-primary` (purple-600) with white `buttons-text-primary`; **hover darkens** to `buttons-bg-primary-hover` (purple-800). `secondary` — transparent fill, purple label and a 1px `buttons-bg-secondary-border`; on hover the border fades to 50% (`buttons-bg-secondary-border-hover`). Use one primary per view; pair it with a secondary for the alternative.
- **Four sizes**: `xsmall` (38px tall, `buttons-xsmall` 14px), `small` (56px, 18px), `primary` (70px, 20px, the default), `large` (74px, 20px, larger glyphs). Padding is `button-padding-*`, radius `border-radius-small`, glyph gap `spacing-xxsmall`.
- **Glyphs** are optional Phosphor regular icons — `icon` leads, `trailingIcon` trails (use it for direction). They take the label colour.
- White on purple-600 is 6.32:1; the purple label on white is 6.32:1 — both pass AA. In the dark theme the primary button turns white with a purple label.
- Focus shows a 2px `border-color-focus` ring. `disabled` lowers opacity; it never introduces a new grey.
- `href` renders a link with the same look; otherwise it is a `<button type="button">` (pass `type="submit"` in forms).
- `state="hover"` forces the Figma hover state for documentation only.
