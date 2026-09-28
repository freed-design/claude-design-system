import React from 'react';

/* Tag — a pill with a glyph and a label. Geometry transcribed from the supplied
   tag.svg: 36px tall, fully rounded (18px radius), 14px side padding, 8px gap,
   15px glyph, 14px Inter label. The glyph may lead, trail, or be omitted. */

/* Any brand hue works. Two accessible families:
   • subtle — pale fill, dark same-family text (the default; works for every hue)
   • strong — dark fill, white text
   The label is 14px, so it needs the full 4.5:1 AA ratio: a mid step like
   saline-400 with white text only reaches ~2:1 and is not offered. Pass `bg`/`fg`
   to override, but check the pairing first. */
const TONES = {
  purple:   { bg: 'var(--lavender-50)',  fg: 'var(--lavender-700)' },
  saline:   { bg: 'var(--saline-100)',   fg: 'var(--saline-800)' },
  pepto:    { bg: 'var(--pepto-100)',    fg: 'var(--pepto-800)' },
  xray:     { bg: 'var(--xray-100)',     fg: 'var(--xray-900)' },
  green:    { bg: 'var(--green-100)',    fg: 'var(--green-800)' },
  yellow:   { bg: 'var(--yellow-100)',   fg: 'var(--yellow-900)' },
  red:      { bg: 'var(--red-50)',       fg: 'var(--red-700)' },
  coral:    { bg: '#ffe7de',             fg: '#8f2c00' },
  neutral:  { bg: 'var(--neutral-50)',   fg: 'var(--neutral-700)' },

  'purple-strong': { bg: 'var(--lavender-600)', fg: '#fff' },
  'saline-strong': { bg: 'var(--saline-700)',   fg: '#fff' },
  'pepto-strong':  { bg: 'var(--pepto-800)',    fg: '#fff' },
  'xray-strong':   { bg: 'var(--xray-800)',     fg: '#fff' },
  'green-strong':  { bg: 'var(--green-800)',    fg: '#fff' },
  'red-strong':    { bg: 'var(--red-700)',      fg: '#fff' },
  'ink-strong':    { bg: 'var(--ink)',          fg: '#fff' },
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

export function Tag({ label = 'Tag', icon = null, iconPosition = 'leading', color = 'purple', bg, fg, style }) {
  const t = TONES[color] || TONES.purple;
  if (!TONES[color]) {
    console.warn('Tag: unknown color "' + color + '". Available: ' + Object.keys(TONES).join(', ') + ' — or pass bg/fg directly.');
  }
  const [svg, setSvg] = React.useState(null);
  React.useEffect(() => {
    let live = true;
    if (icon) fetchGlyph(icon).then(s => { if (live) setSvg(s || ''); });
    return () => { live = false; };
  }, [icon]);

  const glyph = icon ? (
    <span
      aria-hidden="true"
      style={{ width: 15, height: 15, display: 'block', flexShrink: 0, color: 'inherit' }}
      dangerouslySetInnerHTML={{ __html: (svg || '').replace(/<svg /, '<svg width="15" height="15" ').replace(/fill="#[0-9a-fA-F]+"/g, 'fill="currentColor"') }}
    />
  ) : null;

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: icon ? 8 : 0,
      height: 36, padding: '0 14px', borderRadius: 18,
      background: bg || t.bg, color: fg || t.fg,
      fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 400, lineHeight: 1,
      whiteSpace: 'nowrap', boxSizing: 'border-box', ...style,
    }}>
      {iconPosition === 'leading' ? glyph : null}
      {label}
      {iconPosition === 'trailing' ? glyph : null}
    </span>
  );
}

Tag.tones = TONES;
