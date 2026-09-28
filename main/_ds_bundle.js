/* @ds-bundle: {"format":4,"namespace":"FreedDesignSystem_e5ae95","components":[{"name":"Arrow","sourcePath":"components/annotations/Arrow.jsx"},{"name":"Shape","sourcePath":"components/annotations/Shape.jsx"},{"name":"Sparkle","sourcePath":"components/annotations/Sparkle.jsx"},{"name":"Underline","sourcePath":"components/annotations/Underline.jsx"},{"name":"Aurora","sourcePath":"components/auroras/Aurora.jsx"},{"name":"AuroraFloat","sourcePath":"components/auroras/AuroraFloat.jsx"},{"name":"AuroraFullBleed","sourcePath":"components/auroras/AuroraFullBleed.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Tag","sourcePath":"components/tags/Tag.jsx"}],"sourceHashes":{"components/annotations/Arrow.jsx":"4de37329027a","components/annotations/Shape.jsx":"4a558937a6d1","components/annotations/Sparkle.jsx":"768d9882e63e","components/annotations/Underline.jsx":"75300dcb8334","components/auroras/Aurora.jsx":"100778ba519d","components/auroras/AuroraFloat.jsx":"d228172528f4","components/auroras/AuroraFullBleed.jsx":"db6d20745261","components/cards/Card.jsx":"99d0cc57403d","components/icons/Icon.jsx":"0628c674d77d","components/tags/Tag.jsx":"ac17cb1ddfa7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FreedDesignSystem_e5ae95 = window.FreedDesignSystem_e5ae95 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/annotations/Arrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// figma node: 12985:1805 Arrow (5 variants) — digital redraw: constant stroke width
const __aSt = w => ({
  fill: "none",
  stroke: "currentColor",
  strokeWidth: w,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});
const __aWrap = (props, w, h, paths) => /*#__PURE__*/React.createElement("div", {
  className: props.className,
  style: {
    width: w,
    height: h,
    position: "relative",
    color: "var(--green-0, #62E774)",
    ...props.style
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: w,
  height: h,
  viewBox: "0 0 " + w + " " + h,
  style: {
    position: "absolute",
    left: 0,
    top: 0
  }
}, paths.map((d, i) => /*#__PURE__*/React.createElement("path", _extends({
  key: i,
  d: d
}, __aSt(props.strokeWidth))))));
function Arrow(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "01",
    strokeWidth: _p.strokeWidth ?? 3
  };
  if (props.style && props.style.color) {
    console.warn('Arrow: annotations are always Freed Focus green (#62E774) — the color override was ignored.');
    props.style = {
      ...props.style
    };
    delete props.style.color;
  }
  const __impls = {
    "type=01": () => __aWrap(props, 70, 55, ["M4 50 C 18 31, 38 15, 62 8", "M51 4.5 L 63.5 7.5 L 56 19"]),
    "type=02": () => __aWrap(props, 61, 47, ["M4 5 C 24 9, 42 22, 54 39", "M55 26.5 L 56 41.5 L 42 39.5"]),
    "type=03": () => __aWrap(props, 68, 84, ["M60 4 C 24 16, 15 48, 33 78", "M21 68.5 L 34.5 80 L 43 66"]),
    "type=04": () => __aWrap(props, 43, 20, ["M3 13 C 14 10, 25 9, 37 9.5", "M30 3.5 L 38.5 9.3 L 31 15.5"]),
    "type=05": () => __aWrap(props, 80, 25, ["M3 19 C 24 13, 52 10, 74 10", "M65 4 L 75.5 9.8 L 66 16.5"])
  };
  return (__impls["type=" + props.type] ?? __impls["type=01"])();
}
Object.assign(__ds_scope, { Arrow, __ds_default_components_annotations_Arrow_1a7l7qa: Arrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/annotations/Arrow.jsx", error: String((e && e.message) || e) }); }

// components/annotations/Shape.jsx
try { (() => {
// figma node: 12985:1828 Shape (4 variants) — constant-width stroke, path from brand Shape.svg
const __sPath = "M105.414 34.2C90.0568 37.1942 50.593 42.6913 30.1974 38.6913C7.63454 34.2663 1.50006 28.246 1.5 21.9123C1.49995 16.2811 13.1175 1.49997 51.2549 1.5C78.0337 1.50002 110.276 10.6154 119.666 21.9123C129.809 34.1147 96.7909 47.0423 47.4691 36.7717";
const __sWrap = (props, w, h) => /*#__PURE__*/React.createElement("div", {
  className: props.className,
  style: {
    width: w,
    height: h,
    position: "relative",
    color: "var(--green-0, #62E774)",
    ...props.style
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: w,
  height: h,
  viewBox: "0 0 123 42",
  preserveAspectRatio: "none",
  style: {
    position: "absolute",
    left: 0,
    top: 0
  }
}, /*#__PURE__*/React.createElement("path", {
  d: __sPath,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: props.strokeWidth,
  strokeLinecap: "round",
  vectorEffect: "non-scaling-stroke"
})));
function Shape(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "01",
    strokeWidth: _p.strokeWidth ?? 3
  };
  if (props.style && props.style.color) {
    console.warn('Shape: annotations are always Freed Focus green (#62E774) — the color override was ignored.');
    props.style = {
      ...props.style
    };
    delete props.style.color;
  }
  const __impls = {
    "type=01": () => __sWrap(props, 123, 42),
    "type=02": () => __sWrap(props, 156, 57.4),
    "type=03": () => __sWrap(props, 124, 53),
    "type=04": () => __sWrap(props, 156, 45)
  };
  return (__impls["type=" + props.type] ?? __impls["type=01"])();
}
Object.assign(__ds_scope, { Shape, __ds_default_components_annotations_Shape_1ak2nag: Shape });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/annotations/Shape.jsx", error: String((e && e.message) || e) }); }

// components/annotations/Sparkle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// figma node: 12985:1851 Sparkle (3 variants) — digital redraw: constant stroke width
const __kSt = w => ({
  fill: "none",
  stroke: "currentColor",
  strokeWidth: w,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});
const __kWrap = (props, w, h, paths) => /*#__PURE__*/React.createElement("div", {
  className: props.className,
  style: {
    width: w,
    height: h,
    position: "relative",
    color: "var(--green-0, #62E774)",
    ...props.style
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: w,
  height: h,
  viewBox: "0 0 " + w + " " + h,
  style: {
    position: "absolute",
    left: 0,
    top: 0
  }
}, paths.map((d, i) => /*#__PURE__*/React.createElement("path", _extends({
  key: i,
  d: d
}, __kSt(props.strokeWidth))))));
function Sparkle(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "01",
    strokeWidth: _p.strokeWidth ?? 3
  };
  if (props.style && props.style.color) {
    console.warn('Sparkle: annotations are always Freed Focus green (#62E774) — the color override was ignored.');
    props.style = {
      ...props.style
    };
    delete props.style.color;
  }
  const __impls = {
    // three strokes fanning up-and-right from a common origin, like a burst
    "type=01": () => __kWrap(props, 46, 47, ["M6.5 21 L 10 7", "M17.5 27 L 29 14.5", "M27 40 L 42 36"]),
    "type=02": () => __kWrap(props, 40, 39, ["M6 17.5 L 9 6", "M15 22.5 L 25 12", "M23 33.5 L 36 30"])
  };
  return (__impls["type=" + props.type] ?? __impls["type=01"])();
}
Object.assign(__ds_scope, { Sparkle, __ds_default_components_annotations_Sparkle_1pd7mdl: Sparkle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/annotations/Sparkle.jsx", error: String((e && e.message) || e) }); }

// components/annotations/Underline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// figma node: 12985:1740 Underline (6 variants) — digital redraw: constant stroke width
const __uSt = w => ({
  fill: "none",
  stroke: "currentColor",
  strokeWidth: w,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});
const __uWrap = (props, w, h, paths) => /*#__PURE__*/React.createElement("div", {
  className: props.className,
  style: {
    width: w,
    height: h,
    position: "relative",
    color: "var(--green-0, #62E774)",
    ...props.style
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: w,
  height: h,
  viewBox: "0 0 " + w + " " + h,
  style: {
    position: "absolute",
    left: 0,
    top: 0
  }
}, paths.map((d, i) => /*#__PURE__*/React.createElement("path", _extends({
  key: i,
  d: d
}, __uSt(props.strokeWidth))))));
function Underline(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "01",
    strokeWidth: _p.strokeWidth ?? 3
  };
  if (props.style && props.style.color) {
    console.warn('Underline: annotations are always Freed Focus green (#62E774) — the color override was ignored.');
    props.style = {
      ...props.style
    };
    delete props.style.color;
  }
  const __impls = {
    "type=01": () => __uWrap(props, 215, 18, ["M2 5.5 C 70 2, 150 2, 213 4.5", "M3 14 C 62 9, 155 9, 212 11.8"]),
    "type=02": () => __uWrap(props, 230, 15, ["M3 4.5 C 80 2, 160 2, 227 3.5", "M8 11.8 C 90 9.5, 170 9.5, 222 11"]),
    "type=03": () => __uWrap(props, 105, 11, ["M2 7 C 6 3.2, 12 3.2, 17 7 S 28 10.8, 33 7 S 44 3.2, 49 7 S 60 10.8, 65 7 S 76 3.2, 81 7 S 92 10.8, 97 7 L 103 5.8"]),
    "type=04": () => __uWrap(props, 183, 13, ["M3 10 L 20 3.5 L 37 10 L 54 3.5 L 71 10 L 88 3.5 L 105 10 L 122 3.5 L 139 10 L 156 3.5 L 173 10 L 180 7"]),
    "type=05": () => __uWrap(props, 199, 9, ["M2 6.5 C 60 2.5, 145 2.5, 197 5.2"]),
    "type=06": () => __uWrap(props, 132, 8, ["M2 5.5 C 38 2.5, 96 2.5, 130 5"])
  };
  return (__impls["type=" + props.type] ?? __impls["type=01"])();
}
Object.assign(__ds_scope, { Underline, __ds_default_components_annotations_Underline_1cxpyv1: Underline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/annotations/Underline.jsx", error: String((e && e.message) || e) }); }

// components/auroras/Aurora.jsx
try { (() => {
/* A single Aurora — one organic shape, on transparency.
   Shape × Vibe (soft | intense) × Blur (low | high), from the Figma exports. */

const SHAPES = {
  willytheworm: {
    soft: true,
    w: 1770,
    h: 800
  },
  pangolin: {
    soft: true,
    w: 1690,
    h: 1570
  },
  slinky: {
    soft: false,
    w: 1780,
    h: 1030
  }
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
function Aurora({
  shape = 'willytheworm',
  vibe = 'intense',
  blur = 'low',
  width = 640,
  drift = false,
  assetBase,
  style
}) {
  let s = shape,
    v = vibe;
  const def = SHAPES[s];
  if (!def) {
    const why = PENDING.indexOf(s) > -1 ? 'Aurora: "' + s + '" is an approved shape but has not been exported yet. Available: ' : 'Aurora: unknown shape "' + s + '". Available: ';
    console.warn(why + Object.keys(SHAPES).join(', ') + '. Falling back to willytheworm.');
    s = 'willytheworm';
  }
  if (v === 'soft' && !SHAPES[s].soft) {
    console.warn('Aurora: "' + s + '" has no soft variant exported yet — using intense.');
    v = 'intense';
  }
  const base = assetBase || typeof window !== 'undefined' && window.__auroraAssetBase || 'assets/auroras/';
  return /*#__PURE__*/React.createElement("img", {
    src: base + 'single-' + s + '-' + v + '-' + blur + '.png',
    alt: "",
    "aria-hidden": "true",
    style: {
      width: cssLen(width, 640),
      height: 'auto',
      display: 'block',
      maxWidth: '100%',
      pointerEvents: 'none',
      ...(drift ? {
        animation: 'aurora-drift 42s ease-in-out infinite alternate'
      } : null),
      ...style
    }
  });
}
Aurora.shapes = SHAPES;
Aurora.pending = PENDING;
Object.assign(__ds_scope, { Aurora });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/auroras/Aurora.jsx", error: String((e && e.message) || e) }); }

// components/auroras/AuroraFloat.jsx
try { (() => {
/* Floats — two single Auroras overlapped into one amorphous form, exported from
   Figma as a self-contained transparent PNG. Use over white or over a photo. */

const FLOATS = {
  doubleboom: ['purple-fuchsia'],
  drift: ['purple-lilac'],
  ember: ['coral-yellow'],
  clover: ['pepto', 'sky'],
  curl: ['purple'],
  swirl: ['purple-sky']
};

/* width may arrive as a number, a numeric string from markup, or a CSS length
   ('60%', '40rem'). Coerce numeric values to px; pass real CSS lengths through. */
function cssLen(v, fallback) {
  const raw = v == null || v === '' ? fallback : v;
  const n = Number(raw);
  return Number.isFinite(n) ? n + 'px' : String(raw);
}
function AuroraFloat({
  float = 'doubleboom',
  colorway = 'purple-fuchsia',
  width = 720,
  drift = false,
  assetBase,
  style
}) {
  const ways = FLOATS[float];
  let name = float,
    way = colorway;
  if (!ways) {
    console.warn('AuroraFloat: unknown float "' + float + '". Available: ' + Object.keys(FLOATS).join(', ') + '. Falling back to doubleboom.');
    name = 'doubleboom';
    way = FLOATS.doubleboom[0];
  } else if (ways.indexOf(colorway) === -1) {
    console.warn('AuroraFloat: "' + float + '" has no "' + colorway + '" colorway yet (available: ' + ways.join(', ') + ').');
    way = ways[0];
  }
  const base = assetBase || typeof window !== 'undefined' && window.__auroraAssetBase || 'assets/auroras/';
  return /*#__PURE__*/React.createElement("img", {
    src: base + 'float-' + name + '-' + way + '.png',
    alt: "",
    "aria-hidden": "true",
    style: {
      width: cssLen(width, 720),
      height: 'auto',
      display: 'block',
      pointerEvents: 'none',
      maxWidth: '100%',
      ...(drift ? {
        animation: 'aurora-drift 42s ease-in-out infinite alternate'
      } : null),
      ...style
    }
  });
}
AuroraFloat.floats = FLOATS;
Object.assign(__ds_scope, { AuroraFloat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/auroras/AuroraFloat.jsx", error: String((e && e.message) || e) }); }

// components/auroras/AuroraFullBleed.jsx
try { (() => {
/* Full-bleed Aurora background scenes.
   These are the real Figma exports at 1920×1080, referenced verbatim — not CSS
   recreations. Use ONE aurora per view. */

const SCENES = {
  orb: ['purple', 'purple-soft', 'purple-yellow', 'saline', 'saline-aqua', 'xray', 'xray-aqua', 'pepto', 'pepto-yellow', 'coral'],
  wave: ['purple'],
  funnel: ['purple', 'purple-peach', 'moss-aqua']
};

/* Colorways light enough that --ink display text clears AA on top of them.
   The saturated ones take WHITE display text instead. Mid-tones take neither
   and need the copy on a Card. */
const TEXT_SAFE = {
  orb: ['purple-soft', 'xray', 'xray-aqua', 'pepto-yellow', 'coral'],
  wave: [],
  funnel: ['purple-peach', 'moss-aqua']
};

/* Colorways dark/saturated enough for WHITE display text. */
const WHITE_TEXT = {
  orb: ['purple', 'saline'],
  wave: ['purple'],
  funnel: []
};
function AuroraFullBleed({
  composition = 'orb',
  colorway = 'purple',
  drift = false,
  position = 'center',
  assetBase,
  children,
  style
}) {
  const ways = SCENES[composition];
  let scene = composition,
    way = colorway;
  if (!ways) {
    console.warn('AuroraFullBleed: unknown composition "' + composition + '". Use one of: ' + Object.keys(SCENES).join(', ') + '. Falling back to orb/purple.');
    scene = 'orb';
    way = 'purple';
  } else if (ways.indexOf(colorway) === -1) {
    console.warn('AuroraFullBleed: "' + composition + '" has no "' + colorway + '" colorway yet (available: ' + ways.join(', ') + '). Falling back to ' + composition + '/' + ways[0] + '.');
    way = ways[0];
  }
  const base = assetBase || typeof window !== 'undefined' && window.__auroraAssetBase || 'assets/auroras/';
  const src = base + 'fullbleed-' + scene + '-' + way + '.png';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      zIndex: 0,
      pointerEvents: 'none',
      ...(drift ? {
        animation: 'aurora-drift 42s ease-in-out infinite alternate',
        transformOrigin: 'center'
      } : null)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}
AuroraFullBleed.compositions = SCENES;
AuroraFullBleed.textSafe = TEXT_SAFE;
AuroraFullBleed.whiteTextSafe = WHITE_TEXT;
Object.assign(__ds_scope, { AuroraFullBleed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/auroras/AuroraFullBleed.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
/* Freed surface treatments: frosted glass (default), bubble, glow, and petri dish. */

const PETRI_TINT = {
  primary: 'var(--lavender-100)',
  neutral: 'var(--neutral-50)',
  green: 'var(--green-100)',
  saline: 'var(--saline-100)',
  xray: 'var(--xray-100)',
  pepto: 'var(--pepto-100)',
  error: 'var(--red-50)'
};
/* Fractal-noise grain, lifted from the source SVG's feTurbulence. */
const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='luminanceToAlpha'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")";
const GLASS = {
  primary: '192,168,255',
  neutral: '255,255,255',
  green: '98,231,116',
  saline: '155,181,254',
  xray: '82,226,218',
  pepto: '251,140,195',
  error: '248,61,36'
};
const GLASS_ALPHA = {
  neutral: 0.6
};
const ELEV = {
  small: 'var(--elevation-small)',
  medium: 'var(--elevation-medium)',
  large: 'var(--elevation-large)'
};
const EFFECTS = ['glass', 'bubble', 'glow', 'petri'];

/* radius may arrive as a string from markup, an x-import attribute or JSON data.
   Coerce once so arithmetic and unit emission are both safe; a non-numeric value
   (e.g. '1rem') passes through untouched. */
function radiusPx(v, fallback) {
  if (v == null || v === '') return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? n : v;
}
function Card({
  effect = 'glass',
  color = 'primary',
  elevation = 'none',
  glow,
  inverted = false,
  title,
  body,
  radius,
  style,
  children
}) {
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
  const fgBody = inverted ? 'rgba(255,255,255,0.82)' : effect === 'glass' ? 'var(--neutral-700)' : 'var(--neutral-600)';
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
    className: "text-size-regular-bold",
    style: {
      color: fg,
      marginBottom: 6
    }
  }, title), body && /*#__PURE__*/React.createElement("div", {
    className: "text-size-small",
    style: {
      color: fgBody
    }
  }, body));
  if (effect === 'glow') {
    const g = glow && glow.length >= 2 ? glow : ['#f06ba8', '#9166ff', '#6a3cdf', '#5ad6cf'];
    const r = radiusPx(radius, 18);
    const num = typeof r === 'number';
    /* The halo paints on the negative layer so it always sits UNDER neighbouring
       content instead of bleeding over it. The card itself stays in normal flow. */
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        borderRadius: num ? r + 'px' : r,
        display: 'inline-block',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": true,
      style: {
        position: 'absolute',
        inset: '-6px',
        borderRadius: num ? r + 8 + 'px' : 'calc(' + r + ' + 8px)',
        background: 'linear-gradient(135deg, ' + g.join(', ') + ')',
        filter: 'blur(18px)',
        opacity: 0.55,
        zIndex: -1
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: num ? r + 'px' : r,
        padding: '1.5px',
        background: 'linear-gradient(160deg, ' + g[g.length - 1] + ', ' + g[1] + ')'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        borderRadius: num ? r - 1.5 + 'px' : 'calc(' + r + ' - 1.5px)',
        padding: pad
      }
    }, content)));
  }
  if (effect === 'bubble') {
    const r = radiusPx(radius, 18);
    const base = elevation !== 'none' ? ELEV[elevation] : 'var(--elevation-medium)';
    /* Thickness comes from four stacked layers: a top-lit surface gradient, a bright
       inner top edge, a 1px inner bottom edge, and a soft inner floor shade. */
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'linear-gradient(180deg, #ffffff 0%, #fcfcfd 58%, #f4f4f8 100%)',
        borderRadius: typeof r === 'number' ? r + 'px' : r,
        border: '1px solid var(--neutral-150)',
        boxShadow: base + ', inset 0 1.5px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(18,18,28,0.07), inset 0 -18px 28px -20px rgba(18,18,28,0.16)',
        padding: pad,
        ...style
      }
    }, content);
  }
  if (effect === 'petri') {
    /* A dent in the surface, not a tile: the near (top/left) wall shades the well,
       the far (bottom) wall catches the light, and a crisp 1px lip rides the outer
       bottom edge. Holds product imagery only — never text. */
    const r = radiusPx(radius, 16);
    const rc = typeof r === 'number' ? r + 'px' : r;
    const tint = PETRI_TINT[color] || PETRI_TINT.primary;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(20,10,45,0.07) 0%, rgba(20,10,45,0) 46%), ' + tint,
        borderRadius: rc,
        boxShadow: ['0 1px 0 rgba(255,255,255,0.95)', '-0.5px -0.5px 1px 1px rgba(106,60,223,0.12)', '0.2px 0.5px 2px rgba(106,60,223,0.18)', 'inset 0 1.5px 1px rgba(20,10,45,0.18)', 'inset 1px 0 0 rgba(20,10,45,0.06)', 'inset 0 11px 16px -8px rgba(20,10,45,0.34)', 'inset 8px 0 16px -10px rgba(20,10,45,0.16)', 'inset 5px 6px 8px rgba(132,122,196,0.13)', 'inset 0 -1.5px 0 rgba(255,255,255,0.95)', 'inset 0 -14px 18px -14px rgba(255,255,255,0.9)'].join(', '),
        padding: '18px',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": true,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(134,98,229,0.3)',
        maskImage: GRAIN,
        WebkitMaskImage: GRAIN,
        maskSize: '140px 140px',
        WebkitMaskSize: '140px 140px',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": true,
      style: {
        position: 'absolute',
        inset: 0,
        borderRadius: rc,
        padding: '1px',
        background: 'conic-gradient(from -135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25.5%, rgba(255,255,255,0) 100%)',
        opacity: 0.55,
        maskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
        WebkitMaskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
        maskComposite: 'exclude',
        WebkitMaskComposite: 'xor',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, children));
  }
  const rgb = GLASS[color] || GLASS.primary;
  const a = GLASS_ALPHA[color] != null ? GLASS_ALPHA[color] : 0.7;
  const r = radiusPx(radius, 16);
  const lift = elevation !== 'none' ? ELEV[elevation] : '0 1px 2px rgba(16,18,28,0.05)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(' + rgb + ',' + a + ')',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.38)',
      borderRadius: typeof r === 'number' ? r + 'px' : r,
      boxShadow: lift + ', inset 0 1px 0 rgba(255,255,255,0.45)',
      padding: pad,
      ...style
    }
  }, content);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
/* Phosphor glyph in an on-brand container.
   Four treatments x two shapes; only the glyph swaps.
   Glyphs load from the Phosphor CDN unless the host page pre-registers them on
   window.__resources['icon_<name>']. */

const FAM = {
  primary: {
    solid: 'var(--icon-bg-primary)',
    tonalBg: 'var(--icon-tonalbg-primary)',
    glass: 'var(--icon-glass-primary)',
    glassTonal: 'var(--icon-glass-tonalbg-primary)',
    tonal: 'var(--icon-tonal-primary)'
  },
  green: {
    solid: 'var(--icon-bg-green)',
    tonalBg: 'var(--icon-tonalbg-green)',
    glass: 'var(--icon-glass-green)',
    glassTonal: 'var(--icon-glass-tonalbg-green)',
    tonal: 'var(--icon-tonal-green)'
  },
  saline: {
    solid: 'var(--icon-bg-saline)',
    tonalBg: 'var(--icon-tonalbg-saline)',
    glass: 'var(--icon-glass-saline)',
    glassTonal: 'var(--icon-glass-tonalbg-saline)',
    tonal: 'var(--icon-tonal-saline)'
  },
  xray: {
    solid: 'var(--icon-bg-xray)',
    tonalBg: 'var(--icon-tonalbg-xray)',
    glass: 'var(--icon-glass-xray)',
    glassTonal: 'var(--icon-glass-tonalbg-xray)',
    tonal: 'var(--icon-tonal-xray)'
  },
  pepto: {
    solid: 'var(--icon-bg-pepto)',
    tonalBg: 'var(--icon-tonalbg-pepto)',
    glass: 'var(--icon-glass-pepto)',
    glassTonal: 'var(--icon-glass-tonalbg-pepto)',
    tonal: 'var(--icon-tonal-pepto)'
  },
  error: {
    solid: 'var(--icon-bg-error)',
    tonalBg: 'var(--icon-bg-error)',
    glass: 'var(--icon-glass-error)',
    glassTonal: 'var(--icon-glass-tonalbg-error)',
    tonal: 'var(--icon-tonal-error)'
  },
  neutral: {
    solid: 'var(--icon-bg-neutral)',
    tonalBg: 'var(--icon-tonalbg-neutral)',
    glass: 'var(--icon-glass-neutral)',
    glassTonal: 'var(--icon-glass-tonalbg-neutral)',
    tonal: 'var(--icon-tonal-neutral)'
  }
};
const __svgCache = new Map();
function fetchGlyph(name) {
  if (__svgCache.has(name)) return __svgCache.get(name);
  const res = (typeof window !== 'undefined' && window.__resources || {})['icon_' + name];
  const url = res || 'https://cdn.jsdelivr.net/npm/@phosphor-icons/core@2.1.1/assets/regular/' + name + '.svg';
  const p = fetch(url).then(r => r.ok ? r.text() : '').catch(() => '');
  __svgCache.set(name, p);
  return p;
}
function resolve(treatment, family) {
  const f = FAM[family] || FAM.primary;
  switch (treatment) {
    case 'flat-tonal':
      return {
        bg: f.tonalBg,
        fg: f.tonal,
        glass: false
      };
    case 'glass-white':
      return {
        bg: f.glass,
        fg: 'var(--icon-glyph-white)',
        glass: true
      };
    case 'glass-tonal':
      return {
        bg: f.glassTonal,
        fg: f.tonal,
        glass: true
      };
    default:
      return {
        bg: f.solid,
        fg: 'var(--icon-glyph-white)',
        glass: false
      };
  }
}
function sizeSvg(svg, px) {
  return svg.replace(/<svg /, '<svg width="' + px + '" height="' + px + '" ').replace(/fill="#[0-9a-fA-F]+"/g, 'fill="currentColor"');
}

/* Numeric props may arrive as strings (markup attributes, x-import, JSON data),
   so coerce on entry and always emit an explicit unit — React only auto-appends
   px to real numbers. */
function Icon({
  name = 'heart',
  treatment = 'flat-white',
  shape = 'tile',
  color = 'primary',
  size = 48
}) {
  const px = Number(size) || 48;
  const [svg, setSvg] = React.useState(null);
  React.useEffect(() => {
    let live = true;
    fetchGlyph(name).then(t => {
      if (live) setSvg(t || '');
    });
    return () => {
      live = false;
    };
  }, [name]);
  const r = resolve(treatment, color);
  const radius = shape === 'circle' ? '50%' : Math.round(px * 0.3) + 'px';
  const glyph = Math.round(px * 0.56);
  const container = {
    width: px + 'px',
    height: px + 'px',
    borderRadius: radius,
    background: r.bg,
    color: r.fg,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxSizing: 'border-box',
    ...(color === 'neutral' && treatment === 'flat-tonal' ? {
      border: '1px solid var(--neutral-200)'
    } : null),
    ...(r.glass ? {
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      border: '1px solid rgba(255,255,255,0.45)',
      boxShadow: 'inset 0 1px 1.5px rgba(255,255,255,.55)'
    } : null)
  };
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": name,
    style: container
  }, svg ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: glyph + 'px',
      height: glyph + 'px',
      display: 'block',
      color: 'inherit'
    },
    dangerouslySetInnerHTML: {
      __html: sizeSvg(svg, glyph)
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: glyph + 'px',
      height: glyph + 'px',
      opacity: 0
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/tags/Tag.jsx
try { (() => {
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
  purple: {
    bg: 'var(--lavender-50)',
    fg: 'var(--lavender-700)'
  },
  saline: {
    bg: 'var(--saline-100)',
    fg: 'var(--saline-800)'
  },
  pepto: {
    bg: 'var(--pepto-100)',
    fg: 'var(--pepto-800)'
  },
  xray: {
    bg: 'var(--xray-100)',
    fg: 'var(--xray-900)'
  },
  green: {
    bg: 'var(--green-100)',
    fg: 'var(--green-800)'
  },
  yellow: {
    bg: 'var(--yellow-100)',
    fg: 'var(--yellow-900)'
  },
  red: {
    bg: 'var(--red-50)',
    fg: 'var(--red-700)'
  },
  coral: {
    bg: '#ffe7de',
    fg: '#8f2c00'
  },
  neutral: {
    bg: 'var(--neutral-50)',
    fg: 'var(--neutral-700)'
  },
  'purple-strong': {
    bg: 'var(--lavender-600)',
    fg: '#fff'
  },
  'saline-strong': {
    bg: 'var(--saline-700)',
    fg: '#fff'
  },
  'pepto-strong': {
    bg: 'var(--pepto-800)',
    fg: '#fff'
  },
  'xray-strong': {
    bg: 'var(--xray-800)',
    fg: '#fff'
  },
  'green-strong': {
    bg: 'var(--green-800)',
    fg: '#fff'
  },
  'red-strong': {
    bg: 'var(--red-700)',
    fg: '#fff'
  },
  'ink-strong': {
    bg: 'var(--ink)',
    fg: '#fff'
  }
};
const __svgCache = new Map();
function fetchGlyph(name) {
  if (__svgCache.has(name)) return __svgCache.get(name);
  const res = (typeof window !== 'undefined' && window.__resources || {})['icon_' + name];
  const url = res || 'https://cdn.jsdelivr.net/npm/@phosphor-icons/core@2.1.1/assets/regular/' + name + '.svg';
  const p = fetch(url).then(r => r.ok ? r.text() : '').catch(() => '');
  __svgCache.set(name, p);
  return p;
}
function Tag({
  label = 'Tag',
  icon = null,
  iconPosition = 'leading',
  color = 'purple',
  bg,
  fg,
  style
}) {
  const t = TONES[color] || TONES.purple;
  if (!TONES[color]) {
    console.warn('Tag: unknown color "' + color + '". Available: ' + Object.keys(TONES).join(', ') + ' — or pass bg/fg directly.');
  }
  const [svg, setSvg] = React.useState(null);
  React.useEffect(() => {
    let live = true;
    if (icon) fetchGlyph(icon).then(s => {
      if (live) setSvg(s || '');
    });
    return () => {
      live = false;
    };
  }, [icon]);
  const glyph = icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 15,
      height: 15,
      display: 'block',
      flexShrink: 0,
      color: 'inherit'
    },
    dangerouslySetInnerHTML: {
      __html: (svg || '').replace(/<svg /, '<svg width="15" height="15" ').replace(/fill="#[0-9a-fA-F]+"/g, 'fill="currentColor"')
    }
  }) : null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: icon ? 8 : 0,
      height: 36,
      padding: '0 14px',
      borderRadius: 18,
      background: bg || t.bg,
      color: fg || t.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...style
    }
  }, iconPosition === 'leading' ? glyph : null, label, iconPosition === 'trailing' ? glyph : null);
}
Tag.tones = TONES;
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tags/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Arrow = __ds_scope.Arrow;

__ds_ns.Shape = __ds_scope.Shape;

__ds_ns.Sparkle = __ds_scope.Sparkle;

__ds_ns.Underline = __ds_scope.Underline;

__ds_ns.Aurora = __ds_scope.Aurora;

__ds_ns.AuroraFloat = __ds_scope.AuroraFloat;

__ds_ns.AuroraFullBleed = __ds_scope.AuroraFullBleed;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tag = __ds_scope.Tag;

})();
