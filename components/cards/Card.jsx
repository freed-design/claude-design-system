import React from 'react';

/* Freed surface treatments: frosted glass (default), bubble, glow, and petri dish. */

const PETRI_TINT = {
  primary: 'var(--lavender-100)',
  neutral: 'var(--neutral-50)',
  green:   'var(--green-100)',
  saline:  'var(--saline-100)',
  xray:    'var(--xray-100)',
  pepto:   'var(--pepto-100)',
  error:   'var(--red-50)',
};
/* Fractal-noise grain, lifted from the source SVG's feTurbulence. */
const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='luminanceToAlpha'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")";

const GLASS = {
  primary: '192,168,255',
  neutral: '255,255,255',
  green:   '98,231,116',
  saline:  '155,181,254',
  xray:    '82,226,218',
  pepto:   '251,140,195',
  error:   '248,61,36',
};
const GLASS_ALPHA = { neutral: 0.6 };
const ELEV = { small: 'var(--elevation-small)', medium: 'var(--elevation-medium)', large: 'var(--elevation-large)' };

const EFFECTS = ['glass', 'bubble', 'glow', 'petri'];

/* radius may arrive as a string from markup, an x-import attribute or JSON data.
   Coerce once so arithmetic and unit emission are both safe; a non-numeric value
   (e.g. '1rem') passes through untouched. */
function radiusPx(v, fallback) {
  if (v == null || v === '') return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? n : v;
}

export function Card({ effect = 'glass', color = 'primary', elevation = 'none', glow, inverted = false, title, body, radius, style, children }) {
  if (EFFECTS.indexOf(effect) === -1) {
    console.warn('Card: unknown effect "' + effect + '" — rendering glass. Use one of: ' + EFFECTS.join(', '));
  } else if (effect === 'petri' && (title || body)) {
    console.warn('Card: a petri dish holds product imagery only — pass it as children; title/body are ignored.');
  } else if (effect !== 'petri' && children) {
    console.warn('Card: children are only rendered by effect="petri"; use title/body for ' + effect + '.');
  }
  const pad = '22px 24px';
  const fg = inverted ? '#fff' : 'var(--ink)';
  /* Glass sits on a tinted, semi-transparent surface, so the subcopy steps one
     shade darker than on an opaque card to clear AA. */
  const fgBody = inverted ? 'rgba(255,255,255,0.82)' : (effect === 'glass' ? 'var(--neutral-700)' : 'var(--neutral-600)');
  const content = (
    <React.Fragment>
      {title && <div className="text-size-regular-bold" style={{ color: fg, marginBottom: 6 }}>{title}</div>}
      {body && <div className="text-size-small" style={{ color: fgBody }}>{body}</div>}
    </React.Fragment>
  );

  if (effect === 'glow') {
    const g = glow && glow.length >= 2 ? glow : ['#f06ba8', '#9166ff', '#6a3cdf', '#5ad6cf'];
    const r = radiusPx(radius, 18);
    const num = typeof r === 'number';
    /* The halo paints on the negative layer so it always sits UNDER neighbouring
       content instead of bleeding over it. The card itself stays in normal flow. */
    return (
      <div style={{ position: 'relative', borderRadius: num ? r + 'px' : r, display: 'inline-block', ...style }}>
        <div aria-hidden style={{ position: 'absolute', inset: '-6px', borderRadius: num ? r + 8 + 'px' : 'calc(' + r + ' + 8px)', background: 'linear-gradient(135deg, ' + g.join(', ') + ')', filter: 'blur(18px)', opacity: 0.55, zIndex: -1 }} />
        <div style={{ borderRadius: num ? r + 'px' : r, padding: '1.5px', background: 'linear-gradient(160deg, ' + g[g.length - 1] + ', ' + g[1] + ')' }}>
          <div style={{ background: '#fff', borderRadius: num ? r - 1.5 + 'px' : 'calc(' + r + ' - 1.5px)', padding: pad }}>{content}</div>
        </div>
      </div>
    );
  }

  if (effect === 'bubble') {
    const r = radiusPx(radius, 18);
    const base = elevation !== 'none' ? ELEV[elevation] : 'var(--elevation-medium)';
    /* Thickness comes from four stacked layers: a top-lit surface gradient, a bright
       inner top edge, a 1px inner bottom edge, and a soft inner floor shade. */
    return (
      <div style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #fcfcfd 58%, #f4f4f8 100%)',
        borderRadius: typeof r === 'number' ? r + 'px' : r,
        border: '1px solid var(--neutral-150)',
        boxShadow: base + ', inset 0 1.5px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(18,18,28,0.07), inset 0 -18px 28px -20px rgba(18,18,28,0.16)',
        padding: pad, ...style,
      }}>{content}</div>
    );
  }

  if (effect === 'petri') {
    /* A dent in the surface, not a tile: the near (top/left) wall shades the well,
       the far (bottom) wall catches the light, and a crisp 1px lip rides the outer
       bottom edge. Holds product imagery only — never text. */
    const r = radiusPx(radius, 16);
    const rc = typeof r === 'number' ? r + 'px' : r;
    const tint = PETRI_TINT[color] || PETRI_TINT.primary;
    return (
      <div style={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(20,10,45,0.07) 0%, rgba(20,10,45,0) 46%), ' + tint,
        borderRadius: rc,
        boxShadow: [
          '0 1px 0 rgba(255,255,255,0.95)',
          '-0.5px -0.5px 1px 1px rgba(106,60,223,0.12)',
          '0.2px 0.5px 2px rgba(106,60,223,0.18)',
          'inset 0 1.5px 1px rgba(20,10,45,0.18)',
          'inset 1px 0 0 rgba(20,10,45,0.06)',
          'inset 0 11px 16px -8px rgba(20,10,45,0.34)',
          'inset 8px 0 16px -10px rgba(20,10,45,0.16)',
          'inset 5px 6px 8px rgba(132,122,196,0.13)',
          'inset 0 -1.5px 0 rgba(255,255,255,0.95)',
          'inset 0 -14px 18px -14px rgba(255,255,255,0.9)',
        ].join(', '),
        padding: '18px', ...style,
      }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(134,98,229,0.3)', maskImage: GRAIN, WebkitMaskImage: GRAIN, maskSize: '140px 140px', WebkitMaskSize: '140px 140px', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', inset: 0, borderRadius: rc, padding: '1px', background: 'conic-gradient(from -135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25.5%, rgba(255,255,255,0) 100%)', opacity: 0.55, maskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)', WebkitMaskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>{children}</div>
      </div>
    );
  }

  const rgb = GLASS[color] || GLASS.primary;
  const a = GLASS_ALPHA[color] != null ? GLASS_ALPHA[color] : 0.7;
  const r = radiusPx(radius, 16);
  const lift = elevation !== 'none' ? ELEV[elevation] : '0 1px 2px rgba(16,18,28,0.05)';
  return (
    <div style={{ background: 'rgba(' + rgb + ',' + a + ')', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.38)', borderRadius: typeof r === 'number' ? r + 'px' : r, boxShadow: lift + ', inset 0 1px 0 rgba(255,255,255,0.45)', padding: pad, ...style }}>{content}</div>
  );
}
