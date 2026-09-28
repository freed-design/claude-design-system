import React from 'react';

/* Phosphor glyph in an on-brand container.
   Four treatments x two shapes; only the glyph swaps.
   Glyphs load from the Phosphor CDN unless the host page pre-registers them on
   window.__resources['icon_<name>']. */

const FAM = {
  primary: { solid: 'var(--icon-bg-primary)', tonalBg: 'var(--icon-tonalbg-primary)', glass: 'var(--icon-glass-primary)', glassTonal: 'var(--icon-glass-tonalbg-primary)', tonal: 'var(--icon-tonal-primary)' },
  green:   { solid: 'var(--icon-bg-green)',   tonalBg: 'var(--icon-tonalbg-green)',   glass: 'var(--icon-glass-green)',   glassTonal: 'var(--icon-glass-tonalbg-green)',   tonal: 'var(--icon-tonal-green)' },
  saline:  { solid: 'var(--icon-bg-saline)',  tonalBg: 'var(--icon-tonalbg-saline)',  glass: 'var(--icon-glass-saline)',  glassTonal: 'var(--icon-glass-tonalbg-saline)',  tonal: 'var(--icon-tonal-saline)' },
  xray:    { solid: 'var(--icon-bg-xray)',    tonalBg: 'var(--icon-tonalbg-xray)',    glass: 'var(--icon-glass-xray)',    glassTonal: 'var(--icon-glass-tonalbg-xray)',    tonal: 'var(--icon-tonal-xray)' },
  pepto:   { solid: 'var(--icon-bg-pepto)',   tonalBg: 'var(--icon-tonalbg-pepto)',   glass: 'var(--icon-glass-pepto)',   glassTonal: 'var(--icon-glass-tonalbg-pepto)',   tonal: 'var(--icon-tonal-pepto)' },
  error:   { solid: 'var(--icon-bg-error)',   tonalBg: 'var(--icon-bg-error)',        glass: 'var(--icon-glass-error)',   glassTonal: 'var(--icon-glass-tonalbg-error)',   tonal: 'var(--icon-tonal-error)' },
  neutral: { solid: 'var(--icon-bg-neutral)', tonalBg: 'var(--icon-tonalbg-neutral)', glass: 'var(--icon-glass-neutral)', glassTonal: 'var(--icon-glass-tonalbg-neutral)', tonal: 'var(--icon-tonal-neutral)' },
};

const __svgCache = new Map();
function fetchGlyph(name) {
  if (__svgCache.has(name)) return __svgCache.get(name);
  const res = (typeof window !== 'undefined' && window.__resources || {})['icon_' + name];
  const url = res || ('https://cdn.jsdelivr.net/npm/@phosphor-icons/core@2.1.1/assets/regular/' + name + '.svg');
  const p = fetch(url).then(r => (r.ok ? r.text() : '')).catch(() => '');
  __svgCache.set(name, p);
  return p;
}

function resolve(treatment, family) {
  const f = FAM[family] || FAM.primary;
  switch (treatment) {
    case 'flat-tonal': return { bg: f.tonalBg, fg: f.tonal, glass: false };
    case 'glass-white': return { bg: f.glass, fg: 'var(--icon-glyph-white)', glass: true };
    case 'glass-tonal': return { bg: f.glassTonal, fg: f.tonal, glass: true };
    default: return { bg: f.solid, fg: 'var(--icon-glyph-white)', glass: false };
  }
}

function sizeSvg(svg, px) {
  return svg
    .replace(/<svg /, '<svg width="' + px + '" height="' + px + '" ')
    .replace(/fill="#[0-9a-fA-F]+"/g, 'fill="currentColor"');
}

/* Numeric props may arrive as strings (markup attributes, x-import, JSON data),
   so coerce on entry and always emit an explicit unit — React only auto-appends
   px to real numbers. */
export function Icon({ name = 'heart', treatment = 'flat-white', shape = 'tile', color = 'primary', size = 48 }) {
  const px = Number(size) || 48;
  const [svg, setSvg] = React.useState(null);
  React.useEffect(() => {
    let live = true;
    fetchGlyph(name).then(t => { if (live) setSvg(t || ''); });
    return () => { live = false; };
  }, [name]);

  const r = resolve(treatment, color);
  const radius = shape === 'circle' ? '50%' : Math.round(px * 0.3) + 'px';
  const glyph = Math.round(px * 0.56);
  const container = {
    width: px + 'px', height: px + 'px', borderRadius: radius, background: r.bg, color: r.fg,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxSizing: 'border-box',
    ...(color === 'neutral' && treatment === 'flat-tonal' ? { border: '1px solid var(--neutral-200)' } : null),
    ...(r.glass ? {
      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      border: '1px solid rgba(255,255,255,0.45)', boxShadow: 'inset 0 1px 1.5px rgba(255,255,255,.55)',
    } : null),
  };
  return (
    <span role="img" aria-label={name} style={container}>
      {svg
        ? <span style={{ width: glyph + 'px', height: glyph + 'px', display: 'block', color: 'inherit' }} dangerouslySetInnerHTML={{ __html: sizeSvg(svg, glyph) }} />
        : <span style={{ width: glyph + 'px', height: glyph + 'px', opacity: 0 }} />}
    </span>
  );
}
