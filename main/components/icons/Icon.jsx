import React from 'react';

/* Phosphor glyph in an on-brand container, aligned with the Figma "icon/container" component
   (2026-10-21): Color × Size × Shape × Effect. Every value comes from the generated tokens, so dark
   mode follows [data-theme="dark"]. Glyphs load from the Phosphor CDN unless the host page
   pre-registers them on window.__resources['icon_<name>']. */

const COLORS = ['primary', 'secondary', 'alternate-01', 'alternate-02', 'alternate-03', 'success', 'error'];
/* Glass containers reuse the Glass Cards tints; Figma pairs primary (purple) with glass "secondary"
   and secondary (white) with glass "primary". */
const GLASS_BG = {
  primary: 'secondary', secondary: 'primary', 'alternate-01': 'alternate-01', 'alternate-02': 'alternate-02',
  'alternate-03': 'alternate-03', success: 'success', error: 'error',
};
const SIZES = { primary: { box: 50, glyph: 26, radius: 'var(--border-radius-small)' }, small: { box: 20, glyph: 12, radius: 'var(--border-radius-xsmall)' } };

/* Props used before the Figma alignment, mapped with a console warning. */
const LEGACY_COLOR = { green: 'success', saline: 'alternate-01', xray: 'alternate-02', pepto: 'alternate-03', neutral: 'secondary' };

const __svgCache = new Map();
function fetchGlyph(name) {
  if (__svgCache.has(name)) return __svgCache.get(name);
  const res = (typeof window !== 'undefined' && window.__resources || {})['icon_' + name];
  const url = res || ('https://cdn.jsdelivr.net/npm/@phosphor-icons/core@2.1.1/assets/regular/' + name + '.svg');
  const p = fetch(url).then(r => (r.ok ? r.text() : '')).catch(() => '');
  __svgCache.set(name, p);
  return p;
}

function sizeSvg(svg, px) {
  return svg
    .replace(/<svg /, '<svg width="' + px + '" height="' + px + '" style="display:block" ')
    .replace(/fill="#[0-9a-fA-F]+"/g, 'fill="currentColor"');
}

/* Numeric props may arrive as strings (markup attributes, x-import, JSON data). */
export function Icon({ name = 'heart', color = 'primary', effect, shape = 'tile', size = 'primary', treatment }) {
  let c = color;
  if (COLORS.indexOf(c) === -1) {
    if (LEGACY_COLOR[c]) { console.warn('Icon: color "' + c + '" was renamed to "' + LEGACY_COLOR[c] + '" to match Figma.'); c = LEGACY_COLOR[c]; }
    else { console.warn('Icon: unknown color "' + c + '". Use one of: ' + COLORS.join(', ')); c = 'primary'; }
  }
  let fx = effect;
  if (!fx && treatment) {
    console.warn('Icon: "treatment" was replaced by effect="flat" | "glass" to match Figma.');
    fx = String(treatment).indexOf('glass') === 0 ? 'glass' : 'flat';
  }
  fx = fx === 'glass' ? 'glass' : 'flat';

  const preset = SIZES[size];
  const px = preset ? preset.box : (Number(size) || 50);
  const glyph = preset ? preset.glyph : Math.round(px * 0.52);
  const tileRadius = preset ? preset.radius : (px >= 32 ? 'var(--border-radius-small)' : 'var(--border-radius-xsmall)');

  const [svg, setSvg] = React.useState(null);
  React.useEffect(() => {
    let live = true;
    fetchGlyph(name).then(t => { if (live) setSvg(t || ''); });
    return () => { live = false; };
  }, [name]);

  const glyphColor = c === 'secondary'
    ? (fx === 'glass' ? 'var(--icon-icon-color-secondary-glass)' : 'var(--icon-icon-color-secondary)')
    : 'var(--icon-icon-color-primary)';
  const container = {
    width: px + 'px', height: px + 'px', borderRadius: shape === 'circle' ? 'var(--border-radius-full)' : tileRadius,
    background: fx === 'glass' ? 'var(--glass-cards-bg-' + GLASS_BG[c] + ')' : 'var(--icon-bg-' + c + ')',
    color: glyphColor,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxSizing: 'border-box',
    ...(fx === 'glass' ? { backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', boxShadow: 'var(--effect-icon-glass)' } : null),
  };
  return (
    <span role="img" aria-label={name} style={container}>
      {svg
        ? <span style={{ width: glyph + 'px', height: glyph + 'px', display: 'block', color: 'inherit' }} dangerouslySetInnerHTML={{ __html: sizeSvg(svg, glyph) }} />
        : <span style={{ width: glyph + 'px', height: glyph + 'px', opacity: 0 }} />}
    </span>
  );
}

Icon.colors = COLORS;
