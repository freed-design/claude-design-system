`Tag` is the pill: a rounded container holding a label, optionally with a glyph. Use it for short metadata — specialty, visit type, status, category, filter — anywhere a word needs to read as an object rather than as running text.

```jsx
<Tag label="Telehealth" icon="chat-circle" />
<Tag label="3 codes" icon="caret-right" iconPosition="trailing" color="saline" />
<Tag label="Recording" icon="microphone" color="pepto-strong" />
<Tag label="Draft" />
```

- Geometry is fixed by the source SVG: 36px tall, 18px radius (fully rounded), 14px side padding, 8px gap, 15px glyph, 14px Inter label. Don't resize it.
- The glyph is **optional** and can **lead or trail** — leading for a category or type, trailing for something actionable or directional, none when the label speaks for itself.
- **Any brand hue works**, in one of two families: the plain name is subtle (pale fill, dark same-family text), and `-strong` is a dark fill with white text. `purple` is the default.
- The label is 14px, which is body-size text, so it needs the full **4.5:1** ratio. That rules out white text on a mid step — white on `saline-400` is about 2:1. The `-strong` variants use the 600–800 steps for that reason. `bg`/`fg` are available as an escape hatch, but check the pairing yourself.
- Keep labels to one or two words in sentence case.
