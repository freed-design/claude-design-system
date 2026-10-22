import React from 'react';

/* Button — the Figma "Buttons" component (01_Semantic - General, 2026-10-21):
   Type (primary | secondary) × Size (xsmall | small | primary | large) × State (default | hover).
   Every colour, padding, radius and text style comes from the generated tokens, so dark mode follows
   [data-theme="dark"]. Optional Phosphor glyphs lead and/or trail the label. */

const VARIANTS = ['primary', 'secondary'];
/* Figma sizes: padding y/x tokens, text style, glyph box (the icon-clip frame). */
const SIZES = {
  xsmall:  { py: 'var(--button-padding-y-xsmall)',  px: 'var(--button-padding-x-xsmall)',  text: 'buttons-xsmall',  glyph: 18 },
  small:   { py: 'var(--button-padding-y-small)',   px: 'var(--button-padding-x-small)',   text: 'buttons-small',   glyph: 18 },
  primary: { py: 'var(--button-padding-y-primary)', px: 'var(--button-padding-x-primary)', text: 'buttons-primary', glyph: 18 },
  large:   { py: 'var(--button-padding-y-large)',   px: 'var(--button-padding-x-large)',   text: 'buttons-large',   glyph: 22 },
};
const COLORS = {
  primary:   { bg: 'var(--buttons-bg-primary)',   bgHover: 'var(--buttons-bg-primary-hover)',   fg: 'var(--buttons-text-primary)',   fgHover: 'var(--buttons-text-primary-hover)',   line: 'var(--buttons-bg-primary)',          lineHover: 'var(--buttons-bg-primary-hover)' },
  secondary: { bg: 'var(--buttons-bg-secondary)', bgHover: 'var(--buttons-bg-secondary-hover)', fg: 'var(--buttons-text-secondary)', fgHover: 'var(--buttons-text-secondary-hover)', line: 'var(--buttons-bg-secondary-border)', lineHover: 'var(--buttons-bg-secondary-border-hover)' },
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

function Glyph({ name, px }) {
  const [svg, setSvg] = React.useState(null);
  React.useEffect(() => {
    let live = true;
    fetchGlyph(name).then(s => { if (live) setSvg(s || ''); });
    return () => { live = false; };
  }, [name]);
  return (
    <span aria-hidden="true" style={{ width: px, height: px, display: 'block', flexShrink: 0, color: 'inherit' }}
      dangerouslySetInnerHTML={{ __html: (svg || '').replace(/<svg /, '<svg width="' + px + '" height="' + px + '" style="display:block" ').replace(/fill="#[0-9a-fA-F]+"/g, 'fill="currentColor"') }} />
  );
}

export function Button({ label, children, variant = 'primary', size = 'primary', icon = null, trailingIcon = null, href, onClick, disabled = false, state, type = 'button', style }) {
  let v = variant, s = size;
  if (VARIANTS.indexOf(v) === -1) { console.warn('Button: unknown variant "' + v + '". Use one of: ' + VARIANTS.join(', ')); v = 'primary'; }
  if (!SIZES[s]) { console.warn('Button: unknown size "' + s + '". Use one of: ' + Object.keys(SIZES).join(', ')); s = 'primary'; }
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const on = state ? state === 'hover' : (hover && !disabled);
  const z = SIZES[s], c = COLORS[v];
  const css = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-xxsmall)',
    padding: z.py + ' ' + z.px, borderRadius: 'var(--border-radius-small)', border: 0, margin: 0,
    background: on ? c.bgHover : c.bg, color: on ? c.fgHover : c.fg,
    /* Figma strokes sit inside the frame, so the 1px line is an inset shadow rather than a border. */
    boxShadow: 'inset 0 0 0 var(--border-width-primary) ' + (on ? c.lineHover : c.line)
      + (focus ? ', 0 0 0 2px var(--background-primary), 0 0 0 4px var(--border-color-focus)' : ''),
    cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.4 : 1,
    textDecoration: 'none', whiteSpace: 'nowrap', boxSizing: 'border-box', outline: 'none',
    transition: 'background-color 150ms ease-out, box-shadow 150ms ease-out, color 150ms ease-out',
    ...style,
  };
  const content = (
    <React.Fragment>
      {icon ? <Glyph name={icon} px={z.glyph} /> : null}
      <span className={z.text} style={{ color: 'inherit' }}>{children != null ? children : label}</span>
      {trailingIcon ? <Glyph name={trailingIcon} px={z.glyph} /> : null}
    </React.Fragment>
  );
  const events = {
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    onFocus: e => setFocus(!e.target.matches || e.target.matches(':focus-visible')), onBlur: () => setFocus(false),
  };
  if (href && !disabled) return <a href={href} onClick={onClick} style={css} {...events}>{content}</a>;
  return <button type={type} onClick={onClick} disabled={disabled} style={css} {...events}>{content}</button>;
}

Button.variants = VARIANTS;
Button.sizes = Object.keys(SIZES);
