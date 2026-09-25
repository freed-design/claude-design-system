import React from 'react';

/* A single Aurora — one organic shape, on transparency.
   Shape × Vibe (soft | intense) × Blur (low | high), from the Figma exports. */

const SHAPES = {
  willytheworm: { soft: true, w: 1770, h: 800 },
  pangolin: { soft: true, w: 1690, h: 1570 },
  slinky: { soft: false, w: 1780, h: 1030 },
};

/* Approved but not yet exported — listed so the warning can be specific. */
const PENDING = ['amoeba', 'boomerang', 'bounce', 'doggy', 'sloth', 'stanley', 'wave'];

/* width may arrive as a number, a numeric string from markup, or a CSS length
   ('60%', '40rem'). Coerce numeric values to px; pass real CSS lengths through. */
function cssLen(v, fallback) {
  const raw = v == null || v === '' ? fallback : v;
  const n = Number(raw);
  return Number.isFinite(n) ? n + 'px' : String(raw);
}
export function Aurora({ shape = 'willytheworm', vibe = 'intense', blur = 'low', width = 640, drift = false, assetBase, style }) {
  let s = shape, v = vibe;
  const def = SHAPES[s];
  if (!def) {
    const why = PENDING.indexOf(s) > -1
      ? 'Aurora: "' + s + '" is an approved shape but has not been exported yet. Available: '
      : 'Aurora: unknown shape "' + s + '". Available: ';
    console.warn(why + Object.keys(SHAPES).join(', ') + '. Falling back to willytheworm.');
    s = 'willytheworm';
  }
  if (v === 'soft' && !SHAPES[s].soft) {
    console.warn('Aurora: "' + s + '" has no soft variant exported yet — using intense.');
    v = 'intense';
  }
  const base = assetBase || (typeof window !== 'undefined' && window.__auroraAssetBase) || 'assets/auroras/';
  return (
    <img
      src={base + 'single-' + s + '-' + v + '-' + blur + '.png'} alt="" aria-hidden="true"
      style={{
        width: cssLen(width, 640), height: 'auto', display: 'block', maxWidth: '100%', pointerEvents: 'none',
        ...(drift ? { animation: 'aurora-drift 42s ease-in-out infinite alternate' } : null),
        ...style,
      }}
    />
  );
}

Aurora.shapes = SHAPES;
Aurora.pending = PENDING;
