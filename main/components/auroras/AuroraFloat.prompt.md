Use `AuroraFloat` when you want one self-contained aurora shape rather than a full background — floating beside a headline, behind a product shot, or anchoring a section on white.

```jsx
<div style={{position:'relative'}}>
  <AuroraFloat width={760} style={{position:'absolute', left:-80, top:40, zIndex:0}} />
  <h1 className="heading-style-h1" style={{position:'relative'}}>The AI scribe built for mental health</h1>
</div>
```

- A float is **two singles merged into one amorphous form**, exported fully contained on a transparent background — so it composes over white or over a photo, unlike the opaque full-bleeds.
- It's still an aurora: **one per view**, and it doesn't combine with an `AuroraFullBleed` on the same screen.
- Position it so the mass sits **left or right of centre**, not directly behind the middle of a UI screenshot.
- Six floats exist in the library today. Names are ours; the source file only names `Float/DoubleBoom`.
  - `doubleboom` (purple + fuchsia) — the densest.
  - `drift` (purple + lilac) — a pale cloud with one saturated lobe.
  - `ember` (coral + yellow) — the warmest and lightest.
  - `clover` — a three-lobed form with one deep lobe low-right; `pepto` and `sky` colorways.
  - `curl` (purple) — a single comma-shaped mass, dark at the top-left shoulder.
  - `swirl` (purple-sky) — two forms interleaved through a pale channel; the most complex, so give it room.
- Large display text belongs **over** a float, not beside it — that's the point of the shape. Set the copy against the pale part of the form and let the saturated lobe sit clear of it: `--ink` over the pale areas of `drift` and `ember`, `.heading-white` over the dense purple of `doubleboom`. Never run a line straight through a saturated lobe.
