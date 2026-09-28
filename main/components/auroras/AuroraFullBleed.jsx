import React from 'react';

/* Full-bleed Aurora background scenes.
   These are the real Figma exports at 1920×1080, referenced verbatim — not CSS
   recreations. Use ONE aurora per view. */

const SCENES = {
  orb: ['purple', 'purple-soft', 'purple-yellow', 'saline', 'saline-aqua', 'xray', 'xray-aqua', 'pepto', 'pepto-yellow', 'coral'],
  wave: ['purple'],
  funnel: ['purple', 'purple-peach', 'moss-aqua'],
};

/* Colorways light enough that --ink display text clears AA on top of them.
   The saturated ones take WHITE display text instead. Mid-tones take neither
   and need the copy on a Card. */
const TEXT_SAFE = {
  orb: ['purple-soft', 'xray', 'xray-aqua', 'pepto-yellow', 'coral'],
  wave: [],
  funnel: ['purple-peach', 'moss-aqua'],
};

/* Colorways dark/saturated enough for WHITE display text. */
const WHITE_TEXT = {
  orb: ['purple', 'saline'],
  wave: ['purple'],
  funnel: [],
};

export function AuroraFullBleed({ composition = 'orb', colorway = 'purple', drift = false, position = 'center', assetBase, children, style }) {
  const ways = SCENES[composition];
  let scene = composition, way = colorway;
  if (!ways) {
    console.warn('AuroraFullBleed: unknown composition "' + composition + '". Use one of: ' + Object.keys(SCENES).join(', ') + '. Falling back to orb/purple.');
    scene = 'orb'; way = 'purple';
  } else if (ways.indexOf(colorway) === -1) {
    console.warn('AuroraFullBleed: "' + composition + '" has no "' + colorway + '" colorway yet (available: ' + ways.join(', ') + '). Falling back to ' + composition + '/' + ways[0] + '.');
    way = ways[0];
  }
  const base = assetBase || (typeof window !== 'undefined' && window.__auroraAssetBase) || 'assets/auroras/';
  const src = base + 'fullbleed-' + scene + '-' + way + '.png';
  return (
    <div style={{ position: 'relative', isolation: 'isolate', overflow: 'hidden', ...style }}>
      <img
        src={src} alt="" aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: position, zIndex: 0, pointerEvents: 'none',
          ...(drift ? { animation: 'aurora-drift 42s ease-in-out infinite alternate', transformOrigin: 'center' } : null),
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

AuroraFullBleed.compositions = SCENES;
AuroraFullBleed.textSafe = TEXT_SAFE;
AuroraFullBleed.whiteTextSafe = WHITE_TEXT;
