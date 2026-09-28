Use `AuroraFullBleed` for the one on-brand background moment in a view — a page or section background, a hero behind a headline, or the backdrop to a cluster of cards.

```jsx
<AuroraFullBleed composition="orb" colorway="purple" style={{minHeight: 640}}>
  <h1 className="heading-style-h1 heading-white">Focus on people, not paperwork</h1>
</AuroraFullBleed>
```

- **One aurora per view.** They are a signature, not a texture — never two on the same screen, never one per section.
- Available pairs: `orb` × all ten colorways · `wave` × `purple` · `funnel` × `purple`, `purple-peach`, `moss-aqua`. An unavailable pair warns and falls back to that composition's first colorway. More compositions and colorways are being added to the library.
- Default to a **purple** colorway; the others are for variety, not for signalling meaning.
- **Text on top:** large display text only. On a **light** colorway (`purple-soft`, `xray`, `xray-aqua`, `pepto-yellow`, `coral`, `purple-peach`, `moss-aqua`) use `--ink`; on a **dark, saturated** one (`orb/purple`, `orb/saline`, `wave/purple`) use `.heading-white`. The remaining mid-tones — `purple-yellow`, `saline-aqua`, `pepto`, `funnel/purple` — carry neither reliably, so put the copy on a `Card`. `AuroraFullBleed.textSafe` and `.whiteTextSafe` expose both lists.
- Composition rule from the source library: aim the shape mass **left or right rather than centred**, so a large UI screenshot on top doesn't reduce it to a plain gradient. Use `position` for this.
- Busy scenes suit large UI screens; keep quieter colorways behind dense interfaces.
- The scenes are opaque 1920×1080 bitmaps, so they need no backdrop of their own and will cover whatever is behind them.
