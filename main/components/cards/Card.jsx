import React from 'react';

/* Freed card surfaces, aligned with the Figma file "01_Semantic - General" (2026-10-21):
   glass (default), bubble, glow and petri dish. Every colour, radius, padding and shadow comes from
   the generated tokens (tokens/theme.css, spacing.css, effects.css), so dark mode follows
   [data-theme="dark"] automatically. */

/* Glass tint families — Figma "Glass Cards/bg/*". primary is the clear neutral glass, secondary is purple. */
const GLASS_COLORS = ['primary', 'secondary', 'alternate-01', 'alternate-02', 'alternate-03', 'success', 'error'];
/* Glow variants — Figma "glow-card/*" effect + "glow-card-border/*" stroke. */
const GLOW_COLORS = ['primary', 'secondary', 'alternate-01', 'alternate-02', 'alternate-03'];
const ELEVATIONS = ['none', 'small', 'primary'];

/* Names used before the Figma alignment, mapped to the Figma ones (with a console warning). */
const LEGACY_COLOR = { neutral: 'primary', green: 'success', saline: 'alternate-01', xray: 'alternate-02', pepto: 'alternate-03' };
const LEGACY_ELEVATION = { medium: 'small', large: 'primary' };

/* Glow borders: Figma stacks gradient strokes; CSS paints the same layers in a border-box background (top layer first). */
const GLOW_BORDER = {
  primary: [
    'linear-gradient(138deg, var(--glow-cards-primary-gradient-01-stop-01) 15.4%, var(--glow-cards-primary-gradient-01-stop-02) 100%)',
    'linear-gradient(var(--glow-cards-primary-primary), var(--glow-cards-primary-primary))',
    'linear-gradient(217deg, var(--glow-cards-primary-gradient-02-stop-01) 0%, var(--glow-cards-primary-gradient-02-stop-02) 100%)',
  ],
  secondary: ['linear-gradient(157deg, var(--glow-cards-secondary-gradient-stop-01) 0%, var(--glow-cards-secondary-gradient-stop-02) 100%)'],
  'alternate-01': ['linear-gradient(322deg, var(--glow-cards-alternate-01-gradient-stop-01) 0%, var(--glow-cards-alternate-01-gradient-stop-02) 100%)'],
  'alternate-02': ['linear-gradient(157deg, var(--glow-cards-alternate-02-gradient-stop-01) 0%, var(--glow-cards-alternate-02-gradient-stop-02) 100%)'],
  'alternate-03': ['linear-gradient(157deg, var(--glow-cards-alternate-03-gradient-stop-01) 0%, var(--glow-cards-alternate-03-gradient-stop-02) 100%)'],
};

/* Fractal-noise grain for the petri dish (Figma "petri-card/inner" Noise layer). */
const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='luminanceToAlpha'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")";

const EFFECTS = ['glass', 'bubble', 'glow', 'petri'];

function pick(value, allowed, legacy, fallback, what) {
  if (allowed.indexOf(value) > -1) return value;
  if (legacy && legacy[value] && allowed.indexOf(legacy[value]) > -1) {
    console.warn('Card: ' + what + ' "' + value + '" was renamed to "' + legacy[value] + '" to match Figma.');
    return legacy[value];
  }
  console.warn('Card: unknown ' + what + ' "' + value + '" — using "' + fallback + '". Use one of: ' + allowed.join(', '));
  return fallback;
}

/* radius may arrive as a string from markup, an x-import attribute or JSON data. */
function cssLen(v, fallback) {
  if (v == null || v === '') return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? n + 'px' : v;
}

export function Card({ effect = 'glass', color = 'primary', elevation = 'none', inverted = false, title, body, radius, style, children }) {
  if (EFFECTS.indexOf(effect) === -1) {
    console.warn('Card: unknown effect "' + effect + '" — rendering glass. Use one of: ' + EFFECTS.join(', '));
    effect = 'glass';
  } else if (effect === 'petri' && (title || body)) {
    console.warn('Card: a petri dish holds product imagery only — pass it as children; title/body are ignored.');
  } else if (effect !== 'petri' && children) {
    console.warn('Card: children are only rendered by effect="petri"; use title/body for ' + effect + '.');
  }
  const elev = effect === 'glass' || effect === 'bubble' ? pick(elevation, ELEVATIONS, LEGACY_ELEVATION, 'none', 'elevation') : null;
  const fg = inverted ? 'var(--neutral-50)' : 'var(--text-color-primary)';
  const content = (
    <React.Fragment>
      {title && <div className="body-medium-bold" style={{ color: fg }}>{title}</div>}
      {body && <div className="body-primary" style={{ color: fg }}>{body}</div>}
    </React.Fragment>
  );
  const column = { display: 'flex', flexDirection: 'column', boxSizing: 'border-box' };

  if (effect === 'glow') {
    const c = pick(color, GLOW_COLORS, LEGACY_COLOR, 'primary', 'glow color');
    return (
      <div style={{
        ...column, gap: 12,
        padding: 'var(--card-padding-primary)',
        borderRadius: cssLen(radius, 'var(--border-radius-large)'),
        border: 'var(--border-width-xlarge) solid transparent',
        background: 'linear-gradient(var(--background-primary), var(--background-primary)) padding-box, ' + GLOW_BORDER[c].map(l => l + ' border-box').join(', '),
        boxShadow: 'var(--effect-glow-card-' + c + ')',
        ...style,
      }}>{content}</div>
    );
  }

  if (effect === 'bubble') {
    return (
      <div style={{
        ...column, gap: 'var(--spacing-small)',
        padding: 'var(--card-padding-large)',
        borderRadius: cssLen(radius, 'var(--border-radius-large)'),
        background: 'var(--bubble-cards-bg-primary)',
        boxShadow: 'var(--effect-bubble-card-elevation-' + elev + ')',
        ...style,
      }}>{content}</div>
    );
  }

  if (effect === 'petri') {
    /* Figma: an outer frame with a 1.75px angular white rim (petri-card-border/primary) and the
       petri-card/outer shadows, around an inner well filled with petri-cards-background and the
       petri-card/inner shadow + noise grain. Holds product imagery only — never text. */
    const rc = cssLen(radius, 'var(--border-radius-primary)');
    /* The rim is a real 1.75px border painted with the angular gradient (outer padding), so no masking is needed. */
    return (
      <div style={{
        position: 'relative', isolation: 'isolate', borderRadius: rc,
        padding: 'var(--border-width-medium)',
        background: 'conic-gradient(from 157deg, var(--petri-cards-border-gradient-stop-01) 0%, var(--petri-cards-border-gradient-stop-02) 25.5%, var(--petri-cards-border-gradient-stop-01) 100%)',
        boxShadow: 'var(--effect-petri-card-outer)', ...style,
      }}>
        <div style={{
          position: 'relative', overflow: 'hidden', borderRadius: 'calc(' + rc + ' - var(--border-width-medium))',
          background: 'var(--petri-cards-background)',
          boxShadow: 'var(--effect-petri-card-inner)',
          padding: 'var(--card-padding-primary)',
        }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'var(--petri-cards-noise)', maskImage: GRAIN, WebkitMaskImage: GRAIN, maskSize: '140px 140px', WebkitMaskSize: '140px 140px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>{children}</div>
        </div>
      </div>
    );
  }

  const c = pick(color, GLASS_COLORS, LEGACY_COLOR, 'primary', 'glass color');
  return (
    <div style={{
      ...column, gap: 'var(--spacing-xxxsmall)',
      padding: 'var(--card-padding-small)',
      borderRadius: cssLen(radius, 'var(--border-radius-primary)'),
      background: 'var(--glass-cards-bg-' + c + ')',
      backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
      boxShadow: 'var(--effect-glass-card-elevation-' + elev + ')',
      ...style,
    }}>{content}</div>
  );
}

Card.glassColors = GLASS_COLORS;
Card.glowColors = GLOW_COLORS;
Card.elevations = ELEVATIONS;
