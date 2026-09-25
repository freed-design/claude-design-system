import React from 'react';

/* Floats — two single Auroras overlapped into one amorphous form, exported from
   Figma as a self-contained transparent PNG. Use over white or over a photo. */

const FLOATS = {
  doubleboom: ['purple-fuchsia'],
  drift: ['purple-lilac'],
  ember: ['coral-yellow'],
  clover: ['pepto', 'sky'],
  curl: ['purple'],
  swirl: ['purple-sky'],
};

/* width may arrive as a number, a numeric string from markup, or a CSS length
   ('60%', '40rem'). Coerce numeric values to px; pass real CSS lengths through. */
function cssLen(v, fallback) {
  const raw = v == null || v === '' ? fallback : v;
  const n = Number(raw);
  return Number.isFinite(n) ? n + 'px' : String(raw);
}
export function AuroraFloat({ float = 'doubleboom', colorway = 'purple-fuchsia', width = 720, drift = false, assetBase, style }) {
  const ways = FLOATS[float];
  let name = float, way = colorway;
  if (!ways) {
    console.warn('AuroraFloat: unknown float "' + float + '". Available: ' + Object.keys(FLOATS).join(', ') + '. Falling back to doubleboom.');
    name = 'doubleboom'; way = FLOATS.doubleboom[0];
  } else if (ways.indexOf(colorway) === -1) {
    console.warn('AuroraFloat: "' + float + '" has no "' + colorway + '" colorway yet (available: ' + ways.join(', ') + ').');
    way = ways[0];
  }
  const base = assetBase || (typeof window !== 'undefined' && window.__auroraAssetBase) || 'assets/auroras/';
  return (
    <img
      src={base + 'float-' + name + '-' + way + '.png'} alt="" aria-hidden="true"
      style={{
        width: cssLen(width, 720), height: 'auto', display: 'block', pointerEvents: 'none', maxWidth: '100%',
        ...(drift ? { animation: 'aurora-drift 42s ease-in-out infinite alternate' } : null),
        ...style,
      }}
    />
  );
}

AuroraFloat.floats = FLOATS;
