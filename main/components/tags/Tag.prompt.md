`Tag` is the pill: a rounded container holding a label, optionally with glyphs. It matches the Figma `icon/tag` component. Use it for short metadata — specialty, visit type, status, category, filter — anywhere a word needs to read as an object rather than running text.

```jsx
<Tag label="Telehealth" icon="chat-circle" />
<Tag label="Follow-up" icon="calendar-blank" color="secondary" />
<Tag label="Recording" icon="microphone" trailingIcon="pulse" />
<Tag label="Draft" />
```

- Geometry from Figma: 36px tall, `border-radius-full`, `spacing-xxsmall` × `spacing-xsmaller` padding (8 × 12px), `spacing-xxxsmall` (4px) gap, 20px glyphs, `body-xsmall` (14px Inter) label. Don't resize it.
- Three colours (Figma `Tags/bg/*` and `Tags/text/*`): `primary` — purple-100 fill with purple-600 text (5.38:1, passes); `secondary` — saline-500 with white text; `alternate-01` — pepto-400 with white text.
- **Accessibility flag:** `secondary` (2.30:1) and `alternate-01` (2.33:1) fail WCAG AA for a 14px label. They are kept exactly as Figma defines them until the pairs are fixed in Figma; prefer `primary` for anything a reader must rely on.
- Glyphs are optional: leading for a category or type, trailing for something actionable or directional (`iconPosition="trailing"` or `trailingIcon`), none when the label speaks for itself.
- Keep labels to one or two words in sentence case.
- Old colour names still work with a console warning: `purple` → `primary`, `saline` → `secondary`, `pepto` → `alternate-01`. The other hues and the `-strong` set are gone, as Figma defines only these three.
