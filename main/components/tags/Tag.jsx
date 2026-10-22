import React from 'react';

/* Tag — a pill with a label and optional leading/trailing glyphs, aligned with the Figma "icon/tag"
   component (2026-10-21): 36px tall, fully rounded, 8px × 12px padding, 4px gap, 20px glyphs, and a
   body/xsmall (14px Inter) label. Colours come from the Theme tokens Tags/bg/* and Tags/text/*.
   Note: Figma's secondary (white on saline-500, 2.30:1) and alternate-01 (white on pepto-400, 2.33:1)
   fail WCAG AA for a 14px label. They are kept exactly as Figma defines them until fixed in Figma. */
const TONES = {
  primary:        { bg: 'var(--tags-bg-primary)',      fg: 'var(--tags-text-primary)' },
  secondary:      { bg: 'var(--tags-bg-secondary)',    fg: 'var(--tags-text-secondary)' },
  'alternate-01': { bg: 'var(--tags-bg-alternate-01)', fg: 'var(--tags-text-secondary)' },
};
const LEGACY = { purple: 'primary', 'purple-strong': 'primary', saline: 'secondary', 'saline-strong': 'secondary', pepto: 'alternate-01', 'pepto-strong': 'alternate-01' };

const __svgCache = new Map();
function fetchGlyph(name) {
  if (__svgCache.has(name)) return __svgCache.get(name);
  const res = (typeof window !== 'undefined' && window.__resources || {})['icon_' + name];
  const url = res || ('https://cdn.jsdelivr.net/npm/@phosphor-icons/core@2.1.1/assets/regular/' + name + '.svg');
  const p = fetch(url).then(r => (r.ok ? r.text() : '')).catch(() => '');
  __svgCache.set(name, p);
  return p;
}

function Glyph({ name }) {
  const [svg, setSvg] = React.useState(null);
  React.useEffect(() => {
    let live = true;
    if (name) fetchGlyph(name).then(s => { if (live) setSvg(s || ''); });
    return () => { live = false; };
  }, [name]);
  return (
    <span
      aria-hidden="true"
      style={{ width: 20, height: 20, display: 'block', flexShrink: 0, color: 'inherit' }}
      dangerouslySetInnerHTML={{ __html: (svg || '').replace(/<svg /, '<svg width="20" height="20" style="display:block" ').replace(/fill="#[0-9a-fA-F]+"/g, 'fill="currentColor"') }}
    />
  );
}

export function Tag({ label = 'Tag', icon = null, iconPosition = 'leading', trailingIcon = null, color = 'primary', bg, fg, style }) {
  let c = color;
  if (!TONES[c]) {
    if (LEGACY[c]) { console.warn('Tag: color "' + c + '" was renamed to "' + LEGACY[c] + '" to match Figma.'); c = LEGACY[c]; }
    else { console.warn('Tag: unknown color "' + c + '". Available: ' + Object.keys(TONES).join(', ') + ' — or pass bg/fg directly.'); c = 'primary'; }
  }
  const t = TONES[c];
  const lead = icon && iconPosition !== 'trailing' ? icon : null;
  const trail = trailingIcon || (icon && iconPosition === 'trailing' ? icon : null);
  return (
    <span className="body-xsmall" style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-xxxsmall)',
      height: 36, padding: 'var(--spacing-xxsmall) var(--spacing-xsmaller)', borderRadius: 'var(--border-radius-full)',
      background: bg || t.bg, color: fg || t.fg,
      whiteSpace: 'nowrap', boxSizing: 'border-box', ...style,
    }}>
      {lead ? <Glyph name={lead} /> : null}
      {label}
      {trail ? <Glyph name={trail} /> : null}
    </span>
  );
}

Tag.tones = TONES;
