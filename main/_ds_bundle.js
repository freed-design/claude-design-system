/* @ds-bundle: {"format":4,"namespace":"FreedDesignSystem_e5ae95","components":[{"name":"Arrow","sourcePath":"components/annotations/Arrow.jsx"},{"name":"Shape","sourcePath":"components/annotations/Shape.jsx"},{"name":"Sparkle","sourcePath":"components/annotations/Sparkle.jsx"},{"name":"Underline","sourcePath":"components/annotations/Underline.jsx"},{"name":"Aurora","sourcePath":"components/auroras/Aurora.jsx"},{"name":"AuroraFloat","sourcePath":"components/auroras/AuroraFloat.jsx"},{"name":"AuroraFullBleed","sourcePath":"components/auroras/AuroraFullBleed.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Tag","sourcePath":"components/tags/Tag.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Logo","sourcePath":"components/logos/Logo.jsx"}],"sourceHashes":{"components/annotations/Arrow.jsx":"4de37329027a","components/annotations/Shape.jsx":"4a558937a6d1","components/annotations/Sparkle.jsx":"768d9882e63e","components/annotations/Underline.jsx":"75300dcb8334","components/auroras/Aurora.jsx":"100778ba519d","components/auroras/AuroraFloat.jsx":"d228172528f4","components/auroras/AuroraFullBleed.jsx":"db6d20745261","components/cards/Card.jsx":"99d0cc57403d","components/icons/Icon.jsx":"0628c674d77d","components/tags/Tag.jsx":"ac17cb1ddfa7"},"inlinedExternals":[],"unexposedExports":[]} */

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
    color: "var(--text-annotations-primary, #62E774)",
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
    color: "var(--text-annotations-primary, #62E774)",
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
    color: "var(--text-annotations-primary, #62E774)",
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
    color: "var(--text-annotations-primary, #62E774)",
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

/* Colorways light enough that --text-color-primary display text clears AA on top of them.
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
const GLASS_COLORS = ["primary", "secondary", "alternate-01", "alternate-02", "alternate-03", "success", "error"];
const GLOW_COLORS = ["primary", "secondary", "alternate-01", "alternate-02", "alternate-03"];
const ELEVATIONS = ["none", "small", "primary"];
const LEGACY_COLOR = { neutral: "primary", green: "success", saline: "alternate-01", xray: "alternate-02", pepto: "alternate-03" };
const LEGACY_ELEVATION = { medium: "small", large: "primary" };
const GLOW_BORDER = {
  primary: [
    "linear-gradient(138deg, var(--glow-cards-primary-gradient-01-stop-01) 15.4%, var(--glow-cards-primary-gradient-01-stop-02) 100%)",
    "linear-gradient(var(--glow-cards-primary-primary), var(--glow-cards-primary-primary))",
    "linear-gradient(217deg, var(--glow-cards-primary-gradient-02-stop-01) 0%, var(--glow-cards-primary-gradient-02-stop-02) 100%)"
  ],
  secondary: ["linear-gradient(157deg, var(--glow-cards-secondary-gradient-stop-01) 0%, var(--glow-cards-secondary-gradient-stop-02) 100%)"],
  "alternate-01": ["linear-gradient(322deg, var(--glow-cards-alternate-01-gradient-stop-01) 0%, var(--glow-cards-alternate-01-gradient-stop-02) 100%)"],
  "alternate-02": ["linear-gradient(157deg, var(--glow-cards-alternate-02-gradient-stop-01) 0%, var(--glow-cards-alternate-02-gradient-stop-02) 100%)"],
  "alternate-03": ["linear-gradient(157deg, var(--glow-cards-alternate-03-gradient-stop-01) 0%, var(--glow-cards-alternate-03-gradient-stop-02) 100%)"]
};
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='luminanceToAlpha'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E")`;
const EFFECTS = ["glass", "bubble", "glow", "petri"];
function pick(value, allowed, legacy, fallback, what) {
  if (allowed.indexOf(value) > -1) return value;
  if (legacy && legacy[value] && allowed.indexOf(legacy[value]) > -1) {
    console.warn("Card: " + what + ' "' + value + '" was renamed to "' + legacy[value] + '" to match Figma.');
    return legacy[value];
  }
  console.warn("Card: unknown " + what + ' "' + value + '" \u2014 using "' + fallback + '". Use one of: ' + allowed.join(", "));
  return fallback;
}
function cssLen(v, fallback) {
  if (v == null || v === "") return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? n + "px" : v;
}
function Card({ effect = "glass", color = "primary", elevation = "none", inverted = false, title, body, radius, style, children }) {
  if (EFFECTS.indexOf(effect) === -1) {
    console.warn('Card: unknown effect "' + effect + '" \u2014 rendering glass. Use one of: ' + EFFECTS.join(", "));
    effect = "glass";
  } else if (effect === "petri" && (title || body)) {
    console.warn("Card: a petri dish holds product imagery only \u2014 pass it as children; title/body are ignored.");
  } else if (effect !== "petri" && children) {
    console.warn('Card: children are only rendered by effect="petri"; use title/body for ' + effect + ".");
  }
  const elev = effect === "glass" || effect === "bubble" ? pick(elevation, ELEVATIONS, LEGACY_ELEVATION, "none", "elevation") : null;
  const fg = inverted ? "var(--neutral-50)" : "var(--text-color-primary)";
  const content = /* @__PURE__ */ React.createElement(React.Fragment, null, title && /* @__PURE__ */ React.createElement("div", { className: "body-medium-bold", style: { color: fg } }, title), body && /* @__PURE__ */ React.createElement("div", { className: "body-primary", style: { color: fg } }, body));
  const column = { display: "flex", flexDirection: "column", boxSizing: "border-box" };
  if (effect === "glow") {
    const c2 = pick(color, GLOW_COLORS, LEGACY_COLOR, "primary", "glow color");
    return /* @__PURE__ */ React.createElement("div", { style: {
      ...column,
      gap: 12,
      padding: "var(--card-padding-primary)",
      borderRadius: cssLen(radius, "var(--border-radius-large)"),
      border: "var(--border-width-xlarge) solid transparent",
      background: "linear-gradient(var(--background-primary), var(--background-primary)) padding-box, " + GLOW_BORDER[c2].map((l) => l + " border-box").join(", "),
      boxShadow: "var(--effect-glow-card-" + c2 + ")",
      ...style
    } }, content);
  }
  if (effect === "bubble") {
    return /* @__PURE__ */ React.createElement("div", { style: {
      ...column,
      gap: "var(--spacing-small)",
      padding: "var(--card-padding-large)",
      borderRadius: cssLen(radius, "var(--border-radius-large)"),
      background: "var(--bubble-cards-bg-primary)",
      boxShadow: "var(--effect-bubble-card-elevation-" + elev + ")",
      ...style
    } }, content);
  }
  if (effect === "petri") {
    const rc = cssLen(radius, "var(--border-radius-primary)");
    return /* @__PURE__ */ React.createElement("div", { style: {
      position: "relative",
      isolation: "isolate",
      borderRadius: rc,
      padding: "var(--border-width-medium)",
      background: "conic-gradient(from 157deg, var(--petri-cards-border-gradient-stop-01) 0%, var(--petri-cards-border-gradient-stop-02) 25.5%, var(--petri-cards-border-gradient-stop-01) 100%)",
      boxShadow: "var(--effect-petri-card-outer)",
      ...style
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "calc(" + rc + " - var(--border-width-medium))",
      background: "var(--petri-cards-background)",
      boxShadow: "var(--effect-petri-card-inner)",
      padding: "var(--card-padding-primary)"
    } }, /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: { position: "absolute", inset: 0, background: "var(--petri-cards-noise)", maskImage: GRAIN, WebkitMaskImage: GRAIN, maskSize: "140px 140px", WebkitMaskSize: "140px 140px", pointerEvents: "none" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, children)));
  }
  const c = pick(color, GLASS_COLORS, LEGACY_COLOR, "primary", "glass color");
  return /* @__PURE__ */ React.createElement("div", { style: {
    ...column,
    gap: "var(--spacing-xxxsmall)",
    padding: "var(--card-padding-small)",
    borderRadius: cssLen(radius, "var(--border-radius-primary)"),
    background: "var(--glass-cards-bg-" + c + ")",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    boxShadow: "var(--effect-glass-card-elevation-" + elev + ")",
    ...style
  } }, content);
}
Card.glassColors = GLASS_COLORS;
Card.glowColors = GLOW_COLORS;
Card.elevations = ELEVATIONS;

Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
const COLORS = ["primary", "secondary", "alternate-01", "alternate-02", "alternate-03", "success", "error"];
const GLASS_BG = {
  primary: "secondary",
  secondary: "primary",
  "alternate-01": "alternate-01",
  "alternate-02": "alternate-02",
  "alternate-03": "alternate-03",
  success: "success",
  error: "error"
};
const WEIGHTS = ["thin", "light", "regular", "bold", "fill", "duotone"];
const SIZES = { primary: { box: 50, glyph: 26, radius: "var(--border-radius-small)" }, small: { box: 20, glyph: 12, radius: "var(--border-radius-xsmall)" } };
const LEGACY_COLOR = { green: "success", saline: "alternate-01", xray: "alternate-02", pepto: "alternate-03", neutral: "secondary" };
const __svgCache = /* @__PURE__ */ new Map();
function fetchGlyph(name, weight) {
  const file = weight === "regular" ? name : name + "-" + weight;
  if (__svgCache.has(file)) return __svgCache.get(file);
  const res = (typeof window !== "undefined" && window.__resources || {})["icon_" + file];
  if (typeof res === "string" && res.trim().indexOf("<svg") === 0) {
    const inline = Promise.resolve(res);
    __svgCache.set(file, inline);
    return inline;
  }
  const url = res || "https://cdn.jsdelivr.net/npm/@phosphor-icons/core@2.1.1/assets/" + weight + "/" + file + ".svg";
  const p = fetch(url).then((r) => r.ok ? r.text() : "").catch(() => "");
  __svgCache.set(file, p);
  return p;
}
function sizeSvg(svg, px) {
  return svg.replace(/<svg /, '<svg width="' + px + '" height="' + px + '" style="display:block" ').replace(/fill="#[0-9a-fA-F]+"/g, 'fill="currentColor"');
}
function Icon({ name = "heart", color = "primary", effect, shape = "tile", size = "primary", weight = "light", treatment }) {
  let c = color;
  if (COLORS.indexOf(c) === -1) {
    if (LEGACY_COLOR[c]) {
      console.warn('Icon: color "' + c + '" was renamed to "' + LEGACY_COLOR[c] + '" to match Figma.');
      c = LEGACY_COLOR[c];
    } else {
      console.warn('Icon: unknown color "' + c + '". Use one of: ' + COLORS.join(", "));
      c = "primary";
    }
  }
  let fx = effect;
  if (!fx && treatment) {
    console.warn('Icon: "treatment" was replaced by effect="flat" | "glass" to match Figma.');
    fx = String(treatment).indexOf("glass") === 0 ? "glass" : "flat";
  }
  fx = fx === "glass" ? "glass" : "flat";
  let w = String(weight).toLowerCase();
  if (WEIGHTS.indexOf(w) === -1) {
    console.warn('Icon: unknown weight "' + weight + '". Use one of: ' + WEIGHTS.join(", "));
    w = "light";
  }
  const preset = SIZES[size];
  const px = preset ? preset.box : Number(size) || 50;
  const glyph = preset ? preset.glyph : Math.round(px * 0.52);
  const tileRadius = preset ? preset.radius : px >= 32 ? "var(--border-radius-small)" : "var(--border-radius-xsmall)";
  const [svg, setSvg] = React.useState(null);
  React.useEffect(() => {
    let live = true;
    fetchGlyph(name, w).then((t) => {
      if (live) setSvg(t || "");
    });
    return () => {
      live = false;
    };
  }, [name, w]);
  const glyphColor = c === "secondary" ? fx === "glass" ? "var(--icon-icon-color-secondary-glass)" : "var(--icon-icon-color-secondary)" : "var(--icon-icon-color-primary)";
  const container = {
    width: px + "px",
    height: px + "px",
    borderRadius: shape === "circle" ? "var(--border-radius-full)" : tileRadius,
    background: fx === "glass" ? "var(--glass-cards-bg-" + GLASS_BG[c] + ")" : "var(--icon-bg-" + c + ")",
    color: glyphColor,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxSizing: "border-box",
    ...fx === "glass" ? { backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)", boxShadow: "var(--effect-icon-glass)" } : null
  };
  return /* @__PURE__ */ React.createElement("span", { role: "img", "aria-label": name, style: container }, svg ? /* @__PURE__ */ React.createElement("span", { style: { width: glyph + "px", height: glyph + "px", display: "block", color: "inherit" }, dangerouslySetInnerHTML: { __html: sizeSvg(svg, glyph) } }) : /* @__PURE__ */ React.createElement("span", { style: { width: glyph + "px", height: glyph + "px", opacity: 0 } }));
}
Icon.colors = COLORS;
Icon.weights = WEIGHTS;

Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/tags/Tag.jsx
try { (() => {
const TONES = {
  primary: { bg: "var(--tags-bg-primary)", fg: "var(--tags-text-primary)" },
  secondary: { bg: "var(--tags-bg-secondary)", fg: "var(--tags-text-secondary)" },
  "alternate-01": { bg: "var(--tags-bg-alternate-01)", fg: "var(--tags-text-secondary)" }
};
const LEGACY = { purple: "primary", "purple-strong": "primary", saline: "secondary", "saline-strong": "secondary", pepto: "alternate-01", "pepto-strong": "alternate-01" };
const __svgCache = /* @__PURE__ */ new Map();
function fetchGlyph(name) {
  if (__svgCache.has(name)) return __svgCache.get(name);
  const res = (typeof window !== "undefined" && window.__resources || {})["icon_" + name];
  const url = res || "https://cdn.jsdelivr.net/npm/@phosphor-icons/core@2.1.1/assets/regular/" + name + ".svg";
  const p = fetch(url).then((r) => r.ok ? r.text() : "").catch(() => "");
  __svgCache.set(name, p);
  return p;
}
function Glyph({ name }) {
  const [svg, setSvg] = React.useState(null);
  React.useEffect(() => {
    let live = true;
    if (name) fetchGlyph(name).then((s) => {
      if (live) setSvg(s || "");
    });
    return () => {
      live = false;
    };
  }, [name]);
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      "aria-hidden": "true",
      style: { width: 20, height: 20, display: "block", flexShrink: 0, color: "inherit" },
      dangerouslySetInnerHTML: { __html: (svg || "").replace(/<svg /, '<svg width="20" height="20" style="display:block" ').replace(/fill="#[0-9a-fA-F]+"/g, 'fill="currentColor"') }
    }
  );
}
function Tag({ label = "Tag", icon = null, iconPosition = "leading", trailingIcon = null, color = "primary", bg, fg, style }) {
  let c = color;
  if (!TONES[c]) {
    if (LEGACY[c]) {
      console.warn('Tag: color "' + c + '" was renamed to "' + LEGACY[c] + '" to match Figma.');
      c = LEGACY[c];
    } else {
      console.warn('Tag: unknown color "' + c + '". Available: ' + Object.keys(TONES).join(", ") + " \u2014 or pass bg/fg directly.");
      c = "primary";
    }
  }
  const t = TONES[c];
  const lead = icon && iconPosition !== "trailing" ? icon : null;
  const trail = trailingIcon || (icon && iconPosition === "trailing" ? icon : null);
  return /* @__PURE__ */ React.createElement("span", { className: "body-xsmall", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--spacing-xxxsmall)",
    height: 36,
    padding: "var(--spacing-xxsmall) var(--spacing-xsmaller)",
    borderRadius: "var(--border-radius-full)",
    background: bg || t.bg,
    color: fg || t.fg,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...style
  } }, lead ? /* @__PURE__ */ React.createElement(Glyph, { name: lead }) : null, label, trail ? /* @__PURE__ */ React.createElement(Glyph, { name: trail }) : null);
}
Tag.tones = TONES;

Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tags/Tag.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
const VARIANTS = ["primary", "secondary"];
const SIZES = {
  xsmall: { py: "var(--button-padding-y-xsmall)", px: "var(--button-padding-x-xsmall)", text: "buttons-xsmall", glyph: 18 },
  small: { py: "var(--button-padding-y-small)", px: "var(--button-padding-x-small)", text: "buttons-small", glyph: 18 },
  primary: { py: "var(--button-padding-y-primary)", px: "var(--button-padding-x-primary)", text: "buttons-primary", glyph: 18 },
  large: { py: "var(--button-padding-y-large)", px: "var(--button-padding-x-large)", text: "buttons-large", glyph: 22 }
};
const COLORS = {
  primary: { bg: "var(--buttons-bg-primary)", bgHover: "var(--buttons-bg-primary-hover)", fg: "var(--buttons-text-primary)", fgHover: "var(--buttons-text-primary-hover)", line: "var(--buttons-bg-primary)", lineHover: "var(--buttons-bg-primary-hover)" },
  secondary: { bg: "var(--buttons-bg-secondary)", bgHover: "var(--buttons-bg-secondary-hover)", fg: "var(--buttons-text-secondary)", fgHover: "var(--buttons-text-secondary-hover)", line: "var(--buttons-bg-secondary-border)", lineHover: "var(--buttons-bg-secondary-border-hover)" }
};
const __svgCache = /* @__PURE__ */ new Map();
function fetchGlyph(name) {
  if (__svgCache.has(name)) return __svgCache.get(name);
  const res = (typeof window !== "undefined" && window.__resources || {})["icon_" + name];
  const url = res || "https://cdn.jsdelivr.net/npm/@phosphor-icons/core@2.1.1/assets/regular/" + name + ".svg";
  const p = fetch(url).then((r) => r.ok ? r.text() : "").catch(() => "");
  __svgCache.set(name, p);
  return p;
}
function Glyph({ name, px }) {
  const [svg, setSvg] = React.useState(null);
  React.useEffect(() => {
    let live = true;
    fetchGlyph(name).then((s) => {
      if (live) setSvg(s || "");
    });
    return () => {
      live = false;
    };
  }, [name]);
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      "aria-hidden": "true",
      style: { width: px, height: px, display: "block", flexShrink: 0, color: "inherit" },
      dangerouslySetInnerHTML: { __html: (svg || "").replace(/<svg /, '<svg width="' + px + '" height="' + px + '" style="display:block" ').replace(/fill="#[0-9a-fA-F]+"/g, 'fill="currentColor"') }
    }
  );
}
function Button({ label, children, variant = "primary", size = "primary", icon = null, trailingIcon = null, href, onClick, disabled = false, state, type = "button", style }) {
  let v = variant, s = size;
  if (VARIANTS.indexOf(v) === -1) {
    console.warn('Button: unknown variant "' + v + '". Use one of: ' + VARIANTS.join(", "));
    v = "primary";
  }
  if (!SIZES[s]) {
    console.warn('Button: unknown size "' + s + '". Use one of: ' + Object.keys(SIZES).join(", "));
    s = "primary";
  }
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const on = state ? state === "hover" : hover && !disabled;
  const z = SIZES[s], c = COLORS[v];
  const css = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--spacing-xxsmall)",
    padding: z.py + " " + z.px,
    borderRadius: "var(--border-radius-small)",
    border: 0,
    margin: 0,
    background: on ? c.bgHover : c.bg,
    color: on ? c.fgHover : c.fg,
    /* Figma strokes sit inside the frame, so the 1px line is an inset shadow rather than a border. */
    boxShadow: "inset 0 0 0 var(--border-width-primary) " + (on ? c.lineHover : c.line) + (focus ? ", 0 0 0 2px var(--background-primary), 0 0 0 4px var(--border-color-focus)" : ""),
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.4 : 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    outline: "none",
    transition: "background-color 150ms ease-out, box-shadow 150ms ease-out, color 150ms ease-out",
    ...style
  };
  const content = /* @__PURE__ */ React.createElement(React.Fragment, null, icon ? /* @__PURE__ */ React.createElement(Glyph, { name: icon, px: z.glyph }) : null, /* @__PURE__ */ React.createElement("span", { className: z.text, style: { color: "inherit" } }, children != null ? children : label), trailingIcon ? /* @__PURE__ */ React.createElement(Glyph, { name: trailingIcon, px: z.glyph }) : null);
  const events = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: (e) => setFocus(!e.target.matches || e.target.matches(":focus-visible")),
    onBlur: () => setFocus(false)
  };
  if (href && !disabled) return /* @__PURE__ */ React.createElement("a", { href, onClick, style: css, ...events }, content);
  return /* @__PURE__ */ React.createElement("button", { type, onClick, disabled, style: css, ...events }, content);
}
Button.variants = VARIANTS;
Button.sizes = Object.keys(SIZES);

Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/logos/Logo.jsx
try { (() => {
const ART = { "freed-full": { "viewBox": "-1 0 103 21", "paths": '<path d="M100.991 19.567C100.806 19.174 100.194 17.751 100.234 15.848L100.234 0.164C100.234 0.076 100.165 0 100.078 0L97.244 0C97.164 0 97.129 0.111 97.198 0.158C97.493 0.369 97.7 0.627 97.827 0.949C97.96 1.277 97.995 1.927 98.001 2.583L98.001 9.329C97.192 7.631 95.461 6.682 93.746 6.624C92.552 6.583 91.322 7.051 90.393 7.836C88.788 9.189 88.153 11.092 88.165 13.201C88.188 17.675 91.005 19.836 94.012 19.818C96.298 19.807 97.441 18.249 98.006 17.294L98.006 19.52C98.006 19.608 98.076 19.684 98.162 19.684L100.916 19.684C100.979 19.684 101.019 19.619 100.991 19.561L100.991 19.567ZM94.139 18.36C91.79 18.372 90.474 16.269 90.456 13.253C90.439 10.237 91.738 8.117 94.087 8.105C96.436 8.094 98.07 10.144 98.087 13.189C98.104 16.234 96.488 18.348 94.139 18.36Z"/><path d="M61.174 6.975C61.059 7.321 60.51 8.773 59.194 8.785C58.409 8.785 57.959 8.562 57.168 8.562C55.858 8.562 54.259 10.149 54.271 11.988L54.271 15.936C54.276 17.142 54.351 18.589 54.986 19.555C55.021 19.613 54.986 19.69 54.917 19.69L51.384 19.69C51.321 19.69 51.275 19.613 51.315 19.555C51.869 18.682 51.968 17.441 51.979 16.328L51.979 10.706C51.979 9.827 51.996 8.422 51.783 7.889C51.65 7.561 51.454 7.291 51.154 7.08C51.084 7.034 51.119 6.922 51.2 6.922L54.121 6.922C54.207 6.922 54.282 6.993 54.282 7.086L54.271 9.669C54.767 7.842 55.754 6.741 57.382 6.735C58.403 6.735 58.825 7.215 59.743 7.209C60.585 7.209 60.885 6.993 61.134 6.922C61.163 6.911 61.191 6.94 61.18 6.975L61.174 6.975Z"/><path d="M50.051 2.173L50.051 3.924C50.051 4 49.953 4.041 49.901 3.982C49.543 3.584 49.306 3.432 49.052 3.303C48.602 3.075 47.863 3.075 47.165 3.075L42.853 3.092C42.767 3.092 42.703 3.162 42.703 3.25L42.732 9.786C42.732 9.874 42.801 9.938 42.888 9.938L49.052 9.909C49.139 9.909 49.208 9.979 49.208 10.061L49.208 10.823C49.208 10.911 49.145 10.981 49.058 10.981L42.894 11.01C42.807 11.01 42.744 11.08 42.744 11.168L42.767 15.924C42.772 17.124 42.83 18.577 43.465 19.549C43.5 19.608 43.465 19.684 43.396 19.684L39.626 19.684C39.563 19.684 39.523 19.608 39.557 19.549C40.1 18.7 40.204 17.499 40.221 16.404L40.221 5.786C40.221 5.599 40.221 5.382 40.221 5.159C40.221 4.345 40.209 3.391 40.042 2.969C39.909 2.647 39.713 2.401 39.413 2.19C39.344 2.143 39.378 2.015 39.459 2.015L49.913 2.015C49.999 2.015 50.063 2.085 50.063 2.167L50.051 2.173Z"/><path d="M60.983 13.37C61.001 17.318 63.541 20.017 67.454 20C68.967 19.994 70.404 19.654 71.685 18.834C71.749 18.793 71.783 18.723 71.783 18.653L71.772 16.498C71.772 16.369 71.604 16.322 71.541 16.433C71.062 17.23 69.815 18.864 67.604 18.87C65.191 18.881 63.593 16.773 63.506 13.599C63.506 13.528 63.564 13.464 63.633 13.464L72.309 13.423C72.372 13.423 72.424 13.376 72.43 13.312C72.47 13.054 72.488 12.726 72.488 12.398C72.47 9.095 70.513 6.688 66.998 6.706C63.079 6.723 60.966 9.423 60.989 13.37L60.983 13.37ZM63.656 12.386C63.587 12.386 63.529 12.328 63.529 12.258C63.564 9.769 64.961 7.842 66.998 7.836C68.915 7.824 70.254 9.458 70.254 12.228C70.254 12.299 70.196 12.357 70.127 12.357L63.65 12.386L63.656 12.386Z"/><path d="M74.496 13.306C74.514 17.253 77.053 19.953 80.967 19.936C82.479 19.93 83.916 19.59 85.198 18.77C85.261 18.729 85.296 18.659 85.296 18.589L85.284 16.433C85.284 16.305 85.117 16.258 85.054 16.369C84.574 17.165 83.328 18.799 81.117 18.805C78.704 18.817 77.105 16.709 77.019 13.534C77.019 13.464 77.076 13.4 77.146 13.4L85.821 13.359C85.885 13.359 85.937 13.312 85.942 13.247C85.983 12.99 86 12.662 86 12.334C85.983 9.031 84.026 6.624 80.511 6.641C76.591 6.659 74.479 9.359 74.502 13.306L74.496 13.306ZM77.169 12.322C77.099 12.322 77.042 12.264 77.042 12.193C77.076 9.704 78.473 7.778 80.511 7.772C82.427 7.76 83.766 9.394 83.766 12.164C83.766 12.234 83.709 12.293 83.639 12.293L77.163 12.322L77.169 12.322Z"/><path d="M21.883 11.192C22.269 10.231 22.858 9.359 23.672 8.72C24.457 8.111 25.415 7.695 26.391 7.526C27.176 7.391 27.955 7.303 28.723 7.08C29.716 6.793 30.789 6.319 31.361 5.4C31.384 5.359 31.361 5.312 31.297 5.312L26.529 5.312C25.727 5.312 24.636 5.282 24.094 5.405C23.482 5.546 22.916 5.856 22.431 6.26C21.461 7.069 20.786 8.287 20.659 9.558C20.659 9.616 20.648 9.669 20.648 9.728C20.561 11.139 20.567 11.795 20.544 13.206C20.538 13.581 20.532 13.774 20.532 14.249C20.532 14.296 20.463 14.302 20.457 14.249C20.33 13.528 20.186 12.878 20.053 12.375C19.707 11.045 18.829 9.183 17.623 8.123C15.251 6.038 12.099 5.294 9.449 5.312L0.047 5.329C0.047 5.329 -0.005 5.353 0 5.382C0.093 6.506 1.022 7.28 1.94 7.707C3.123 8.258 4.428 8.427 5.715 8.504C7.949 8.638 10.061 8.269 12.266 8.785C15.337 9.499 18.137 11.76 19.597 14.6C19.77 14.94 19.926 15.285 20.065 15.637C20.14 15.836 20.197 15.971 20.29 16.258C20.324 16.357 20.365 16.474 20.417 16.568C20.469 16.668 20.515 16.709 20.572 16.709C20.705 16.709 20.746 15.947 20.815 15.526C20.977 14.565 20.994 14.501 21.213 13.552C21.306 13.165 21.404 12.773 21.513 12.392C21.606 11.988 21.733 11.584 21.889 11.192L21.883 11.192Z"/>' }, "freed-icon": { "viewBox": "-1 0 33 21", "paths": '<path d="M21.626 6.915C22.007 5.981 22.588 5.129 23.396 4.511C24.171 3.919 25.12 3.511 26.08 3.346C26.855 3.214 27.629 3.13 28.386 2.914C29.368 2.635 30.428 2.173 30.991 1.278C31.016 1.241 30.986 1.192 30.928 1.192L26.216 1.192C25.422 1.192 24.345 1.166 23.808 1.284C23.201 1.419 22.643 1.724 22.165 2.117C21.209 2.904 20.543 4.088 20.414 5.325C20.408 5.379 20.404 5.434 20.4 5.488C20.314 6.861 20.321 7.501 20.295 8.875C20.288 9.238 20.286 9.43 20.282 9.888C20.282 9.934 20.214 9.939 20.207 9.894C20.079 9.193 19.936 8.56 19.806 8.069C19.464 6.774 18.598 4.96 17.408 3.928C15.063 1.897 11.952 1.175 9.336 1.192L0.047 1.207C0.021 1.207 -0.002 1.231 0 1.258C0.09 2.352 1.009 3.107 1.919 3.524C3.092 4.062 4.378 4.224 5.65 4.299C7.858 4.43 9.945 4.069 12.123 4.569C15.155 5.267 17.925 7.466 19.367 10.23C19.538 10.558 19.694 10.896 19.831 11.242C19.908 11.433 19.961 11.565 20.051 11.845C20.083 11.945 20.126 12.055 20.175 12.148C20.226 12.245 20.271 12.283 20.329 12.283C20.461 12.283 20.502 11.54 20.568 11.133C20.726 10.199 20.744 10.133 20.96 9.21C21.049 8.832 21.148 8.454 21.259 8.08C21.351 7.684 21.474 7.291 21.63 6.913L21.626 6.915Z"/>' }, "freed-text": { "viewBox": "-1 -1 61 21", "paths": '<path d="M59.688 18.677C59.509 18.301 58.914 16.947 58.958 15.125L58.958 0.153C58.958 0.069 58.889 -0.004 58.805 0L56.059 0C55.979 0 55.946 0.106 56.012 0.15C56.3 0.354 56.497 0.599 56.622 0.905C56.749 1.219 56.782 1.836 56.793 2.464L56.793 8.904C56.008 7.28 54.332 6.374 52.671 6.323C51.51 6.287 50.324 6.732 49.426 7.48C47.874 8.773 47.257 10.591 47.265 12.602C47.287 16.874 50.017 18.937 52.927 18.922C55.143 18.911 56.245 17.421 56.797 16.512L56.797 18.637C56.797 18.721 56.862 18.79 56.95 18.79L59.619 18.79C59.681 18.79 59.717 18.728 59.692 18.674L59.688 18.677ZM53.055 17.524C50.777 17.535 49.503 15.527 49.492 12.646C49.477 9.766 50.729 7.743 53.011 7.732C55.289 7.721 56.87 9.678 56.884 12.584C56.899 15.49 55.336 17.513 53.058 17.524L53.055 17.524Z"/><path d="M21.133 6.655C21.023 6.984 20.49 8.371 19.216 8.379C18.457 8.379 18.019 8.167 17.252 8.17C15.981 8.17 14.437 9.685 14.445 11.442L14.445 15.209C14.452 16.359 14.525 17.739 15.138 18.666C15.175 18.721 15.138 18.794 15.069 18.794L11.648 18.794C11.582 18.794 11.542 18.721 11.579 18.666C12.119 17.834 12.21 16.647 12.218 15.585L12.218 10.219C12.214 9.382 12.232 8.039 12.024 7.528C11.896 7.218 11.703 6.958 11.414 6.758C11.349 6.71 11.382 6.608 11.462 6.608L14.288 6.608C14.372 6.608 14.445 6.677 14.445 6.761L14.434 9.225C14.915 7.484 15.872 6.433 17.449 6.425C18.438 6.425 18.847 6.882 19.734 6.878C20.549 6.874 20.844 6.67 21.082 6.604C21.111 6.593 21.14 6.623 21.129 6.655L21.133 6.655Z"/><path d="M10.356 2.074L10.356 3.746C10.356 3.822 10.261 3.855 10.21 3.8C9.863 3.421 9.633 3.275 9.388 3.151C8.954 2.932 8.235 2.932 7.563 2.935L3.383 2.954C3.302 2.954 3.233 3.023 3.233 3.103L3.262 9.342C3.262 9.426 3.332 9.492 3.412 9.492L9.381 9.463C9.465 9.463 9.531 9.529 9.531 9.612L9.531 10.343C9.534 10.423 9.469 10.492 9.385 10.492L3.416 10.522C3.335 10.522 3.266 10.587 3.266 10.671L3.288 15.209C3.295 16.355 3.354 17.743 3.963 18.67C4 18.725 3.963 18.798 3.894 18.798L0.243 18.798C0.181 18.798 0.141 18.725 0.174 18.67C0.699 17.859 0.802 16.71 0.816 15.669L0.816 5.531C0.816 5.348 0.816 5.148 0.816 4.932C0.816 4.155 0.802 3.242 0.641 2.84C0.513 2.53 0.32 2.3 0.035 2.099C-0.031 2.052 0.002 1.931 0.082 1.928L10.206 1.928C10.286 1.928 10.356 1.993 10.356 2.077L10.356 2.074Z"/><path d="M20.943 12.759C20.961 16.531 23.418 19.104 27.208 19.086C28.671 19.079 30.062 18.758 31.307 17.973C31.366 17.936 31.402 17.867 31.402 17.797L31.391 15.742C31.391 15.618 31.231 15.574 31.169 15.68C30.705 16.439 29.497 17.998 27.354 18.009C25.017 18.02 23.466 16.009 23.385 12.978C23.385 12.909 23.44 12.851 23.506 12.851L31.91 12.811C31.968 12.811 32.019 12.767 32.03 12.705C32.07 12.46 32.085 12.146 32.085 11.832C32.07 8.678 30.176 6.382 26.766 6.396C22.969 6.414 20.925 8.988 20.943 12.759ZM23.531 11.821C23.462 11.821 23.407 11.766 23.407 11.697C23.44 9.32 24.794 7.484 26.769 7.473C28.624 7.466 29.92 9.025 29.924 11.668C29.924 11.734 29.869 11.792 29.803 11.792L23.531 11.821Z"/><path d="M34.034 12.697C34.053 16.469 36.51 19.042 40.299 19.024C41.763 19.017 43.154 18.695 44.399 17.911C44.457 17.874 44.494 17.805 44.494 17.735L44.483 15.68C44.483 15.556 44.322 15.512 44.26 15.618C43.796 16.377 42.588 17.936 40.445 17.947C38.109 17.958 36.557 15.946 36.477 12.916C36.477 12.847 36.532 12.789 36.597 12.789L45.001 12.748C45.06 12.748 45.111 12.705 45.122 12.643C45.162 12.398 45.176 12.084 45.176 11.77C45.162 8.616 43.267 6.319 39.857 6.334C36.061 6.352 34.016 8.926 34.034 12.697ZM36.623 11.759C36.553 11.759 36.499 11.704 36.499 11.635C36.531 9.258 37.886 7.422 39.861 7.411C41.716 7.404 43.012 8.963 43.015 11.606C43.015 11.671 42.96 11.73 42.895 11.73L36.623 11.759Z"/>' }, "hipaa": { "viewBox": "0 0 111 41", "paths": '<path d="M18.252 37.719C18.298 37.739 18.347 37.751 18.397 37.757L18.397 40.215C18.387 40.275 18.355 40.33 18.309 40.369C18.263 40.408 18.204 40.43 18.143 40.43C18.082 40.43 18.024 40.408 17.977 40.369C17.931 40.33 17.9 40.275 17.889 40.215L17.889 37.803L18.125 37.673C18.166 37.691 18.209 37.707 18.252 37.719Z"/><path d="M18.765 34.133C19.085 34.371 19.345 34.682 19.523 35.041C19.603 35.282 19.606 35.543 19.533 35.786C19.459 36.029 19.313 36.243 19.114 36.399C18.633 36.784 18.182 37.206 17.765 37.659C17.603 37.848 17.489 38.075 17.433 38.318C17.378 38.562 17.382 38.815 17.447 39.057C17.439 39.064 17.295 38.972 17.205 38.683C17.158 38.466 17.159 38.242 17.208 38.025C17.256 37.809 17.351 37.606 17.485 37.431C17.901 36.522 20.083 35.598 18.318 34.567C18.363 34.541 18.449 34.467 18.543 34.381L18.765 34.133Z"/><path d="M18.527 37.16C18.588 37.246 18.644 37.335 18.694 37.428C18.829 37.603 18.925 37.805 18.975 38.021C19.025 38.238 19.027 38.463 18.982 38.68C18.893 38.963 18.738 39.05 18.732 39.054C18.802 38.811 18.808 38.553 18.75 38.307C18.691 38.06 18.57 37.833 18.398 37.648L18.247 37.48C18.368 37.358 18.413 37.282 18.527 37.16Z"/><path d="M19.283 31.209C19.456 31.285 19.613 31.396 19.744 31.535C19.874 31.674 19.975 31.839 20.041 32.019C20.105 32.207 20.114 32.41 20.067 32.604C20.02 32.797 19.918 32.972 19.775 33.109C19.595 33.317 19.394 33.507 19.176 33.675C18.775 33.995 18.374 34.24 18.018 34.499C16.773 35.155 17.125 35.881 17.82 36.49L17.763 36.434L17.741 35.197C17.862 35.106 17.968 34.999 18.082 34.899L18.301 34.899L18.301 36.487C18.164 36.459 18.02 36.483 17.9 36.556L17.869 36.532C17.885 36.547 17.902 36.561 17.919 36.575C17.851 36.728 17.617 36.865 17.616 36.941C17.479 36.819 17.222 36.529 17.063 36.399C16.857 36.25 16.705 36.035 16.632 35.789C16.56 35.543 16.57 35.28 16.662 35.041C16.878 34.601 17.201 34.222 17.601 33.941C17.934 33.651 18.359 33.293 18.692 33.079C19.025 32.865 19.358 32.361 19.283 32.315C19.014 32.113 18.73 31.932 18.434 31.773C18.666 31.646 18.893 31.509 19.112 31.36L19.283 31.209Z"/><path d="M21.301 22.39C21.471 22.528 21.617 22.693 21.733 22.878C21.819 23.027 21.872 23.192 21.89 23.363C21.908 23.534 21.891 23.707 21.839 23.87C21.74 24.115 21.587 24.334 21.392 24.512C20.835 24.943 20.203 25.266 19.529 25.466C18.9 25.68 18.294 25.817 17.71 25.985C17.415 26.062 17.127 26.146 16.839 26.237C16.707 26.271 16.577 26.316 16.453 26.374C16.483 26.416 16.519 26.455 16.559 26.489C16.743 26.65 16.953 26.777 17.18 26.863L17.761 27.138L17.733 26.29C17.945 26.229 18.158 26.175 18.37 26.106L18.37 27.18C18.597 27.075 18.824 26.971 19.045 26.864C19.274 26.776 19.484 26.647 19.667 26.482C19.707 26.453 19.744 26.417 19.773 26.376C19.648 26.319 19.519 26.273 19.386 26.238L18.667 26.024C19.043 25.847 19.788 25.528 20.16 25.38L20.356 25.2C20.536 25.298 20.689 25.442 20.797 25.617C20.906 25.792 20.968 25.993 20.976 26.199C20.984 26.405 20.939 26.61 20.845 26.794C20.751 26.977 20.611 27.133 20.44 27.246C20.158 27.487 19.838 27.678 19.493 27.811C18.924 28.101 18.371 28.33 17.833 28.574C17.371 28.758 16.942 29.016 16.561 29.338C16.41 29.277 16.712 29.765 17.167 30.04C17.351 30.173 17.553 30.287 17.756 30.405L17.756 28.971L18.105 28.864C18.161 28.923 18.228 28.97 18.302 29.002L18.264 29.032L18.325 29.032L18.325 30.466C18.552 30.333 18.779 30.2 19 30.066C19.454 29.792 19.749 29.326 19.606 29.363C19.246 29.07 18.842 28.835 18.409 28.669C18.602 28.581 18.909 28.425 19.167 28.29L19.621 28.065C19.964 28.262 20.257 28.537 20.477 28.867C20.6 29.087 20.647 29.341 20.613 29.591C20.579 29.84 20.464 30.071 20.288 30.249C20.071 30.505 19.815 30.725 19.53 30.898C19.007 31.234 18.499 31.455 18.014 31.715C17.63 31.885 17.26 32.087 16.909 32.318C16.84 32.318 17.174 32.852 17.507 33.081L17.764 33.271L17.764 32.165L18.083 32.059L18.264 32.059L18.264 33.325L18.181 33.325C18.051 33.365 17.925 33.422 17.809 33.493L17.809 33.481L17.25 33.822L17.022 33.646C16.804 33.479 16.603 33.289 16.423 33.081C16.28 32.95 16.177 32.781 16.125 32.594C16.072 32.406 16.074 32.207 16.128 32.021C16.462 31.143 17.144 31.15 17.606 30.883C17.83 30.753 18.056 30.621 18.283 30.489C18.179 30.506 18.076 30.531 17.976 30.566C17.935 30.525 17.887 30.493 17.835 30.468C17.536 30.669 17.201 30.784 16.91 31.018L16.636 30.85C16.353 30.673 16.098 30.454 15.879 30.2C15.705 30.021 15.592 29.789 15.559 29.54C15.526 29.291 15.574 29.037 15.697 28.818C16.288 28.009 16.849 27.88 17.394 27.628C17.676 27.498 17.964 27.367 18.251 27.235C18.12 27.273 17.989 27.316 17.862 27.366C17.866 27.346 17.866 27.325 17.862 27.305C17.856 27.295 17.849 27.287 17.843 27.278L17.824 27.291C17.392 27.474 16.945 27.634 16.513 27.825C16.237 27.706 15.981 27.543 15.755 27.344C15.516 27.182 15.343 26.938 15.266 26.658C15.19 26.378 15.216 26.08 15.339 25.817C15.695 25.146 16.142 25.161 16.453 25.054C16.763 24.947 17.059 24.855 17.362 24.764C17.968 24.573 18.558 24.428 19.096 24.229C19.597 24.069 20.068 23.827 20.491 23.512C20.374 23.419 20.247 23.339 20.112 23.275C19.754 23.109 19.378 22.988 18.991 22.916C19.296 22.849 20.511 22.608 21.069 22.451L21.301 22.39Z"/><path d="M20.418 18.841C20.743 18.952 21.059 19.084 21.366 19.237C21.601 19.336 23.069 20.1 22.85 21.031C22.783 21.278 22.656 21.504 22.48 21.688C22.304 21.872 22.084 22.008 21.842 22.085C21.565 22.194 21.282 22.288 20.995 22.367C20.436 22.51 19.869 22.62 19.297 22.695C18.211 22.749 17.139 22.966 16.116 23.337C15.981 23.401 15.854 23.48 15.737 23.573C16.158 23.89 16.629 24.133 17.13 24.291L17.585 24.444L17.009 24.681L16.805 24.719C16.476 24.874 16.133 24.999 15.782 25.093C15.453 24.939 15.146 24.744 14.866 24.513C14.671 24.335 14.518 24.116 14.418 23.871C14.366 23.708 14.349 23.535 14.367 23.364C14.385 23.193 14.439 23.028 14.525 22.879C14.764 22.517 15.1 22.231 15.494 22.055C16.204 21.748 16.945 21.521 17.702 21.379L17.702 20.255L17.838 20.201L18.058 20.201C18.171 20.202 18.283 20.186 18.391 20.155L18.391 21.275C18.614 21.249 18.837 21.227 19.062 21.215C19.585 21.123 20.1 21.024 20.578 20.895C20.722 20.849 20.873 20.802 21.009 20.749L20.721 20.604C20.328 20.431 19.926 20.278 19.517 20.146C19.131 20.009 18.775 19.879 18.434 19.741C19.117 19.491 19.78 19.19 20.418 18.841Z"/><path d="M18.416 24.399C18.192 24.408 17.972 24.453 17.764 24.536L17.749 23.147C17.972 23.15 18.196 23.129 18.416 23.086L18.416 24.399Z"/><path d="M19.806 12.678C20.079 12.487 20.889 12.692 21.2 12.738C21.596 12.761 21.984 12.86 22.343 13.028L22.496 13.098C23.266 13.422 23.898 14.012 24.276 14.762C24.386 15.055 24.421 15.371 24.375 15.681C24.33 15.991 24.207 16.284 24.018 16.532C23.324 17.252 22.485 17.812 21.556 18.174C21.124 18.365 20.2 18.769 18.905 19.296C18.261 19.555 17.518 19.853 16.677 20.15C16.268 20.282 15.866 20.435 15.472 20.608L15.185 20.754C15.321 20.807 15.473 20.853 15.617 20.898C15.95 20.99 16.329 21.067 16.708 21.144C16.104 21.378 15.541 21.707 15.041 22.12C15.002 22.149 14.967 22.183 14.935 22.22L14.389 22.036C14.146 21.959 13.927 21.821 13.75 21.636C13.574 21.45 13.447 21.223 13.381 20.976C13.109 20.067 14.586 19.357 14.829 19.242C15.263 19.037 15.708 18.856 16.162 18.7C16.957 18.41 17.684 18.105 18.321 17.846C19.586 17.311 20.488 16.907 20.905 16.716C21.509 16.466 22.089 16.162 22.639 15.808C23.215 15.411 22.503 15.005 22.222 14.906C21.429 14.683 20.686 14.307 20.034 13.8C19.806 13.586 19.534 12.869 19.806 12.678Z"/><path d="M14.609 12.932C14.919 12.871 15.639 12.603 16.01 12.87C16.382 13.137 16.018 13.779 15.784 13.993C15.128 14.497 14.382 14.867 13.586 15.084C13.324 15.213 12.688 15.543 13.078 15.911L13.169 16C13.723 16.353 14.307 16.658 14.913 16.909C15.299 17.093 16.132 17.459 17.291 17.947C16.668 18.283 16.028 18.586 15.375 18.855L14.26 18.367C13.328 18.009 12.485 17.448 11.791 16.726C11.603 16.478 11.481 16.186 11.436 15.878C11.391 15.569 11.425 15.254 11.534 14.962C11.917 14.213 12.549 13.623 13.321 13.298C13.718 13.082 14.158 12.957 14.609 12.932Z"/><path d="M17.751 5.114C17.986 5.114 18.168 5.191 18.168 5.526L18.123 17.664L18.047 17.664C17.976 17.674 17.907 17.695 17.842 17.726L17.418 17.954L17.35 5.488C17.35 5.195 17.495 5.099 17.683 5.08L17.751 5.114Z"/><path d="M21.357 3.19C21.722 3.145 22.093 3.178 22.444 3.287C22.707 3.369 22.955 3.493 23.179 3.652L23.395 3.855C24.064 4.316 24.777 4.707 25.524 5.023C28.191 6.107 32.221 7.855 35.1 8.13C34.768 8.568 34.354 8.936 33.88 9.213C33.407 9.489 32.885 9.668 32.342 9.74C32.403 10.259 31.433 10.802 31.024 10.939C30.469 11.117 29.867 11.074 29.342 10.817C29.18 11.062 28.97 11.27 28.726 11.431C28.482 11.591 28.208 11.701 27.92 11.752C27.633 11.803 27.338 11.796 27.054 11.729C26.77 11.663 26.502 11.54 26.266 11.367C26.212 11.84 25.373 12.1 25.001 12.184C24.423 12.262 23.834 12.183 23.296 11.954C22.903 11.863 22.728 12.122 22.296 12.222C21.85 12.349 21.371 12.294 20.963 12.069C20.759 11.962 20.751 11.901 20.623 11.916C20.494 11.931 20.297 12.107 20.145 12.107C19.955 12.111 19.767 12.061 19.603 11.964C19.439 11.867 19.304 11.727 19.213 11.558C18.923 11.1 18.692 10.607 18.524 10.092L18.524 7.886C19.134 7.958 19.753 7.919 20.35 7.771C21.077 7.405 20.426 6.885 20.161 6.412C19.821 5.859 19.659 5.214 19.698 4.565C19.818 4.203 20.038 3.881 20.332 3.638C20.625 3.395 20.98 3.239 21.357 3.19Z"/><path d="M14.083 3.19C14.461 3.241 14.817 3.396 15.111 3.639C15.405 3.881 15.626 4.203 15.75 4.565C15.782 5.215 15.619 5.859 15.28 6.412C15.031 6.856 14.416 7.34 14.965 7.701L15.121 7.779C15.742 7.934 16.388 7.97 17.023 7.886L17.023 9.939C16.839 10.506 16.584 11.047 16.265 11.55C16.03 11.847 15.75 12.161 15.326 12.1C15.174 12.077 15.06 11.924 14.848 11.909C14.636 11.894 14.712 11.955 14.507 12.062C14.1 12.286 13.621 12.341 13.174 12.214C12.743 12.115 12.576 11.856 12.174 11.947C11.637 12.176 11.047 12.255 10.469 12.176C10.098 12.122 9.266 11.832 9.205 11.359C8.969 11.532 8.701 11.656 8.417 11.722C8.132 11.788 7.837 11.795 7.55 11.744C7.263 11.693 6.989 11.583 6.745 11.423C6.5 11.262 6.291 11.054 6.128 10.81C5.593 11.067 4.978 11.102 4.417 10.908C4.015 10.771 3.045 10.229 3.098 9.71C2.556 9.638 2.033 9.458 1.56 9.182C1.087 8.905 0.672 8.538 0.34 8.1C3.219 7.825 7.25 6.076 9.917 4.992C10.664 4.678 11.378 4.286 12.045 3.824C12.321 3.579 12.645 3.396 12.997 3.287C13.348 3.178 13.719 3.145 14.083 3.19Z"/><path d="M18.474 4.295C18.51 4.305 18.544 4.322 18.573 4.347C18.601 4.371 18.624 4.402 18.64 4.437C18.656 4.471 18.665 4.508 18.665 4.546C18.665 4.584 18.656 4.621 18.64 4.655C18.624 4.689 18.601 4.72 18.573 4.744C18.544 4.769 18.51 4.786 18.474 4.796C18.438 4.806 18.4 4.808 18.363 4.802L17.121 4.802C17.084 4.808 17.045 4.806 17.009 4.796C16.973 4.786 16.939 4.768 16.911 4.744C16.882 4.72 16.859 4.689 16.843 4.655C16.827 4.621 16.819 4.584 16.819 4.546C16.819 4.508 16.828 4.471 16.843 4.437C16.859 4.402 16.882 4.371 16.911 4.347C16.939 4.322 16.973 4.305 17.009 4.295C17.045 4.285 17.084 4.284 17.121 4.29L18.363 4.29C18.4 4.284 18.438 4.285 18.474 4.295Z"/><path d="M17.762 0.251C18.258 0.253 18.733 0.452 19.083 0.806C19.434 1.159 19.631 1.637 19.633 2.137C19.633 2.51 19.523 2.875 19.318 3.185C19.112 3.494 18.82 3.736 18.478 3.879C18.136 4.021 17.76 4.059 17.397 3.986C17.034 3.914 16.701 3.733 16.439 3.47C16.177 3.206 16 2.87 15.927 2.504C15.855 2.138 15.892 1.759 16.034 1.415C16.175 1.07 16.415 0.776 16.723 0.568C17.031 0.361 17.392 0.251 17.762 0.251Z"/><path d="M42.504 20.146L42.504 4.471L45.344 4.471L45.344 11.107L52.607 11.107L52.607 4.471L55.455 4.471L55.455 20.146L52.607 20.146L52.607 13.487L45.344 13.487L45.344 20.146L42.504 20.146ZM62.084 4.471L62.084 20.146L59.244 20.146L59.244 4.471L62.084 4.471ZM65.861 20.146L65.861 4.471L71.739 4.471C72.943 4.471 73.953 4.696 74.77 5.145C75.591 5.594 76.211 6.211 76.63 6.997C77.053 7.778 77.265 8.665 77.265 9.66C77.265 10.666 77.053 11.559 76.63 12.339C76.206 13.12 75.581 13.735 74.755 14.184C73.928 14.628 72.91 14.85 71.701 14.85L67.805 14.85L67.805 12.515L71.318 12.515C72.022 12.515 72.599 12.393 73.048 12.148C73.497 11.903 73.828 11.566 74.043 11.138C74.262 10.709 74.372 10.217 74.372 9.66C74.372 9.104 74.262 8.614 74.043 8.191C73.828 7.767 73.494 7.438 73.04 7.204C72.591 6.964 72.012 6.844 71.303 6.844L68.7 6.844L68.7 20.146L65.861 20.146ZM80.699 20.146L77.668 20.146L83.187 4.471L86.692 4.471L92.218 20.146L89.187 20.146L85.001 7.686L84.878 7.686L80.699 20.146ZM80.798 14L89.065 14L89.065 16.281L80.798 16.281L80.798 14ZM96.997 20.146L93.966 20.146L99.485 4.471L102.991 4.471L108.516 20.146L105.485 20.146L101.299 7.686L101.176 7.686L96.997 20.146ZM97.097 14L105.363 14L105.363 16.281L97.097 16.281L97.097 14Z"/><path d="M50.491 29.126L49.186 29.126C49.109 28.751 48.974 28.421 48.781 28.137C48.591 27.853 48.36 27.614 48.086 27.421C47.816 27.225 47.516 27.077 47.186 26.979C46.857 26.881 46.513 26.832 46.155 26.832C45.502 26.832 44.911 26.997 44.382 27.326C43.855 27.656 43.436 28.142 43.124 28.784C42.815 29.426 42.661 30.214 42.661 31.147C42.661 32.08 42.815 32.867 43.124 33.509C43.436 34.151 43.855 34.637 44.382 34.967C44.911 35.297 45.502 35.462 46.155 35.462C46.513 35.462 46.857 35.413 47.186 35.314C47.516 35.216 47.816 35.071 48.086 34.878C48.36 34.681 48.591 34.441 48.781 34.157C48.974 33.869 49.109 33.539 49.186 33.167L50.491 33.167C50.393 33.718 50.214 34.211 49.954 34.646C49.695 35.081 49.372 35.451 48.986 35.756C48.6 36.058 48.167 36.288 47.686 36.446C47.209 36.604 46.699 36.683 46.155 36.683C45.236 36.683 44.418 36.458 43.703 36.009C42.987 35.56 42.424 34.921 42.014 34.094C41.603 33.266 41.398 32.283 41.398 31.147C41.398 30.01 41.603 29.028 42.014 28.2C42.424 27.372 42.987 26.734 43.703 26.285C44.418 25.836 45.236 25.611 46.155 25.611C46.699 25.611 47.209 25.69 47.686 25.848C48.167 26.006 48.6 26.237 48.986 26.542C49.372 26.844 49.695 27.212 49.954 27.647C50.214 28.079 50.393 28.572 50.491 29.126ZM55.715 36.704C54.985 36.704 54.345 36.53 53.794 36.183C53.247 35.835 52.819 35.349 52.51 34.725C52.205 34.101 52.053 33.371 52.053 32.536C52.053 31.694 52.205 30.959 52.51 30.331C52.819 29.703 53.247 29.216 53.794 28.868C54.345 28.521 54.985 28.347 55.715 28.347C56.445 28.347 57.083 28.521 57.63 28.868C58.181 29.216 58.609 29.703 58.914 30.331C59.223 30.959 59.377 31.694 59.377 32.536C59.377 33.371 59.223 34.101 58.914 34.725C58.609 35.349 58.181 35.835 57.63 36.183C57.083 36.53 56.445 36.704 55.715 36.704ZM55.715 35.588C56.269 35.588 56.725 35.446 57.083 35.162C57.441 34.878 57.706 34.504 57.878 34.041C58.05 33.578 58.136 33.076 58.136 32.536C58.136 31.996 58.05 31.492 57.878 31.026C57.706 30.559 57.441 30.182 57.083 29.894C56.725 29.607 56.269 29.463 55.715 29.463C55.161 29.463 54.705 29.607 54.347 29.894C53.989 30.182 53.724 30.559 53.552 31.026C53.38 31.492 53.294 31.996 53.294 32.536C53.294 33.076 53.38 33.578 53.552 34.041C53.724 34.504 53.989 34.878 54.347 35.162C54.705 35.446 55.161 35.588 55.715 35.588ZM61.273 36.535L61.273 28.453L62.473 28.453L62.473 29.715L62.578 29.715C62.747 29.284 63.018 28.949 63.394 28.71C63.769 28.468 64.22 28.347 64.746 28.347C65.279 28.347 65.723 28.468 66.077 28.71C66.435 28.949 66.714 29.284 66.914 29.715L66.998 29.715C67.205 29.298 67.516 28.966 67.93 28.721C68.344 28.472 68.84 28.347 69.419 28.347C70.142 28.347 70.733 28.574 71.192 29.026C71.652 29.475 71.882 30.175 71.882 31.126L71.882 36.535L70.64 36.535L70.64 31.126C70.64 30.529 70.477 30.103 70.15 29.847C69.824 29.591 69.44 29.463 68.998 29.463C68.43 29.463 67.989 29.635 67.677 29.979C67.365 30.319 67.209 30.75 67.209 31.273L67.209 36.535L65.946 36.535L65.946 30.999C65.946 30.54 65.797 30.17 65.499 29.889C65.2 29.605 64.816 29.463 64.346 29.463C64.023 29.463 63.722 29.549 63.441 29.721C63.164 29.893 62.939 30.131 62.768 30.436C62.599 30.738 62.515 31.087 62.515 31.484L62.515 36.535L61.273 36.535ZM74.152 39.566L74.152 28.453L75.352 28.453L75.352 29.737L75.499 29.737C75.591 29.596 75.717 29.417 75.878 29.2C76.043 28.979 76.278 28.782 76.583 28.61C76.892 28.435 77.31 28.347 77.836 28.347C78.516 28.347 79.116 28.517 79.635 28.858C80.155 29.198 80.56 29.68 80.851 30.305C81.142 30.929 81.288 31.666 81.288 32.515C81.288 33.371 81.142 34.113 80.851 34.741C80.56 35.365 80.156 35.849 79.641 36.193C79.125 36.533 78.53 36.704 77.857 36.704C77.338 36.704 76.922 36.618 76.61 36.446C76.297 36.27 76.057 36.072 75.889 35.851C75.72 35.627 75.591 35.441 75.499 35.293L75.394 35.293L75.394 39.566L74.152 39.566ZM75.373 32.494C75.373 33.104 75.462 33.643 75.641 34.109C75.82 34.572 76.082 34.936 76.425 35.199C76.769 35.458 77.19 35.588 77.688 35.588C78.208 35.588 78.641 35.451 78.988 35.178C79.339 34.9 79.602 34.529 79.777 34.062C79.956 33.592 80.046 33.069 80.046 32.494C80.046 31.926 79.958 31.413 79.783 30.957C79.611 30.498 79.349 30.135 78.999 29.868C78.651 29.598 78.215 29.463 77.688 29.463C77.183 29.463 76.759 29.591 76.415 29.847C76.071 30.1 75.812 30.454 75.636 30.91C75.461 31.363 75.373 31.89 75.373 32.494ZM84.424 25.758L84.424 36.535L83.182 36.535L83.182 25.758L84.424 25.758ZM86.698 36.535L86.698 28.453L87.94 28.453L87.94 36.535L86.698 36.535ZM87.33 27.105C87.088 27.105 86.879 27.023 86.704 26.858C86.532 26.693 86.446 26.495 86.446 26.264C86.446 26.032 86.532 25.834 86.704 25.669C86.879 25.504 87.088 25.422 87.33 25.422C87.572 25.422 87.779 25.504 87.951 25.669C88.126 25.834 88.214 26.032 88.214 26.264C88.214 26.495 88.126 26.693 87.951 26.858C87.779 27.023 87.572 27.105 87.33 27.105ZM92.593 36.725C92.081 36.725 91.616 36.628 91.199 36.435C90.781 36.239 90.45 35.956 90.204 35.588C89.959 35.216 89.836 34.767 89.836 34.241C89.836 33.778 89.927 33.402 90.11 33.115C90.292 32.824 90.536 32.596 90.841 32.431C91.146 32.266 91.483 32.143 91.851 32.062C92.223 31.978 92.597 31.912 92.972 31.862C93.463 31.799 93.862 31.752 94.167 31.72C94.475 31.685 94.7 31.627 94.84 31.547C94.984 31.466 95.056 31.326 95.056 31.126L95.056 31.084C95.056 30.564 94.914 30.161 94.63 29.873C94.349 29.586 93.923 29.442 93.351 29.442C92.758 29.442 92.293 29.572 91.957 29.831C91.62 30.091 91.383 30.368 91.246 30.663L90.068 30.242C90.278 29.751 90.559 29.368 90.91 29.095C91.264 28.817 91.65 28.624 92.067 28.516C92.488 28.403 92.902 28.347 93.309 28.347C93.569 28.347 93.867 28.379 94.204 28.442C94.544 28.502 94.872 28.626 95.188 28.816C95.507 29.005 95.772 29.291 95.982 29.673C96.193 30.056 96.298 30.568 96.298 31.21L96.298 36.535L95.056 36.535L95.056 35.441L94.993 35.441C94.909 35.616 94.768 35.804 94.572 36.004C94.376 36.204 94.114 36.374 93.788 36.514C93.462 36.654 93.063 36.725 92.593 36.725ZM92.783 35.609C93.274 35.609 93.688 35.513 94.025 35.32C94.365 35.127 94.621 34.878 94.793 34.572C94.968 34.267 95.056 33.946 95.056 33.609L95.056 32.473C95.003 32.536 94.888 32.594 94.709 32.646C94.533 32.696 94.33 32.739 94.098 32.778C93.87 32.813 93.648 32.845 93.43 32.873C93.216 32.897 93.042 32.918 92.909 32.936C92.586 32.978 92.285 33.046 92.004 33.141C91.727 33.232 91.502 33.371 91.33 33.557C91.162 33.739 91.078 33.988 91.078 34.304C91.078 34.736 91.238 35.062 91.557 35.283C91.88 35.5 92.288 35.609 92.783 35.609ZM99.806 31.673L99.806 36.535L98.565 36.535L98.565 28.453L99.764 28.453L99.764 29.715L99.87 29.715C100.059 29.305 100.347 28.975 100.733 28.726C101.119 28.474 101.617 28.347 102.227 28.347C102.774 28.347 103.253 28.46 103.664 28.684C104.074 28.905 104.393 29.242 104.621 29.694C104.849 30.143 104.963 30.712 104.963 31.399L104.963 36.535L103.722 36.535L103.722 31.484C103.722 30.849 103.557 30.354 103.227 30C102.897 29.642 102.445 29.463 101.869 29.463C101.473 29.463 101.119 29.549 100.806 29.721C100.498 29.893 100.254 30.143 100.075 30.473C99.896 30.803 99.806 31.203 99.806 31.673ZM110.747 28.453L110.747 29.505L106.559 29.505L106.559 28.453L110.747 28.453ZM107.78 26.516L109.021 26.516L109.021 34.22C109.021 34.571 109.072 34.834 109.174 35.009C109.279 35.181 109.413 35.297 109.574 35.356C109.739 35.413 109.913 35.441 110.095 35.441C110.232 35.441 110.344 35.434 110.432 35.42C110.519 35.402 110.59 35.388 110.642 35.378L110.895 36.493C110.811 36.525 110.693 36.556 110.542 36.588C110.391 36.623 110.2 36.64 109.969 36.64C109.618 36.64 109.274 36.565 108.937 36.414C108.604 36.263 108.327 36.034 108.106 35.725C107.888 35.416 107.78 35.027 107.78 34.557L107.78 26.516Z"/>' }, "soc2": { "viewBox": "-1 -1 78 78", "paths": '<path d="M18.926 49.645C18.925 49.688 18.845 52.929 18.926 54.578C24.074 57.274 29.385 59.925 34.45 62.584C35.21 62.983 35.981 63.372 36.695 63.845C37.885 64.632 39.018 64.735 40.314 64.017C45.386 61.207 50.493 58.458 55.578 55.671C56.138 55.364 56.64 54.954 57.318 54.488L57.318 49.645L61.446 49.645L61.446 57.103C54.03 61.136 46.437 65.214 38.678 69.434C30.889 65.331 23.111 61.233 15.27 57.103L15.27 49.645L18.926 49.645Z"/><path d="M38.541 34.411C39.729 31.727 42.614 30.029 45.695 30.215C48.9 30.409 51.194 32.199 51.997 35.146C52.05 35.341 52.003 35.562 52.003 35.936L48.909 35.936C48.733 35.627 48.523 35.181 48.243 34.784C46.645 32.518 43.327 32.658 41.985 35.106C40.888 37.107 40.946 39.254 41.693 41.354C42.228 42.856 43.422 43.589 45.006 43.671C46.878 43.768 48.192 42.982 48.819 41.137L52.058 41.137C51.772 43.395 50.589 44.858 48.836 45.84C44.513 48.26 39.022 45.811 38.019 40.959C37.567 38.773 37.6 36.534 38.541 34.411Z"/><path d="M10.653 31.221C13.16 29.851 15.732 29.822 18.244 31.227C19.588 31.979 19.942 32.692 20.204 34.705C19.752 34.785 19.294 34.894 18.831 34.938C18.407 34.977 17.976 34.946 17.623 34.946C16.054 33.219 14.538 32.67 13.082 33.286C12.057 33.719 11.73 34.496 12.208 35.948C12.932 36.235 13.884 36.653 14.864 36.988C15.808 37.31 16.822 37.452 17.735 37.84C19.699 38.674 20.733 40.308 20.639 42.196C20.544 44.071 19.341 45.659 17.337 46.271C15.232 46.913 13.085 46.902 11.012 46.089C9.086 45.333 8.232 43.938 8.231 41.503C9.04 41.466 9.865 41.428 10.861 41.382C11.278 42.058 11.612 42.6 11.902 43.07C15.009 44.663 17.098 43.886 17.037 40.927C16.11 40.562 15.082 40.124 14.031 39.754C13.021 39.398 11.95 39.198 10.972 38.777C9.504 38.144 8.527 37.118 8.475 35.352C8.421 33.519 9.059 32.092 10.653 31.221Z"/><path d="M29.164 30.213C33.587 30.266 36.586 33.62 36.585 38.515C36.584 43.477 33.683 46.617 29.094 46.624C24.818 46.8 21.603 43.659 21.539 38.547C21.478 33.613 24.667 30.16 29.164 30.213ZM28.961 33.181C27.211 33.218 26.019 34.154 25.358 36.004C24.73 37.762 24.791 39.53 25.447 41.243C26.033 42.773 27.248 43.688 28.87 43.757C30.266 43.817 31.635 43.381 32.284 41.998C32.785 40.93 33.018 39.737 33.315 38.779C33.089 37.6 33.032 36.656 32.719 35.806C32.057 34.009 30.722 33.144 28.961 33.181Z"/><path d="M59.991 30.909C62.131 29.853 64.316 29.991 66.385 31.12C68.557 32.305 69.327 35.076 67.965 37.279C67.15 38.596 65.973 39.697 64.909 40.849C64.11 41.714 63.232 42.506 62.389 43.329C62.453 43.492 62.518 43.655 62.583 43.818L68.771 43.818L68.771 46.401L57.507 46.401L57.507 44.066C59.255 42.416 61.082 40.708 62.889 38.98C63.51 38.387 64.136 37.786 64.666 37.114C65.558 35.983 65.636 34.878 65 33.94C64.343 32.971 63.168 32.698 61.74 33.2C61.542 33.269 61.373 33.416 61.089 33.588C60.839 34.067 60.546 34.628 60.219 35.255L57.358 35.255C57.364 33.18 58.27 31.759 59.991 30.909Z"/><path d="M61.446 19.899L61.446 27.357L57.79 27.357C57.791 27.324 57.871 24.076 57.79 22.424C52.643 19.728 47.331 17.077 42.266 14.418C41.506 14.019 40.735 13.63 40.021 13.157C38.831 12.37 37.698 12.266 36.402 12.984C31.33 15.794 26.223 18.542 21.138 21.33C20.579 21.637 20.076 22.048 19.398 22.514L19.398 27.357L15.27 27.357L15.27 19.899C22.686 15.865 30.279 11.788 38.038 7.568C45.827 11.671 53.606 15.769 61.446 19.899Z"/><path d="M38.5 0C59.763 0 77 17.238 77 38.5C77 59.763 59.763 77 38.5 77C17.238 77 0 59.763 0 38.5C0 17.238 17.238 0 38.5 0ZM38.5 2.238C18.474 2.238 2.238 18.474 2.238 38.5C2.238 58.527 18.474 74.762 38.5 74.762C58.527 74.762 74.762 58.527 74.762 38.5C74.762 18.474 58.527 2.238 38.5 2.238Z"/>' }, "loved-by": { "viewBox": "0 0 81 71", "paths": '<path d="M1.438 15.545L1.438 2.455L3.413 2.455L3.413 13.845L9.345 13.845L9.345 15.545L1.438 15.545Z"/><path d="M15.381 15.744Q14 15.744 12.971 15.111Q11.942 14.478 11.373 13.34Q10.804 12.202 10.804 10.681Q10.804 9.153 11.373 8.009Q11.942 6.865 12.971 6.232Q14 5.599 15.381 5.599Q16.761 5.599 17.79 6.232Q18.82 6.865 19.388 8.009Q19.957 9.153 19.957 10.681Q19.957 12.202 19.388 13.34Q18.82 14.478 17.79 15.111Q16.761 15.744 15.381 15.744ZM15.387 14.139Q16.282 14.139 16.87 13.666Q17.458 13.193 17.739 12.407Q18.027 11.621 18.027 10.675Q18.027 9.735 17.739 8.949Q17.458 8.156 16.87 7.677Q16.282 7.197 15.387 7.197Q14.486 7.197 13.891 7.677Q13.303 8.156 13.016 8.949Q12.734 9.735 12.734 10.675Q12.734 11.621 13.016 12.407Q13.303 13.193 13.891 13.666Q14.486 14.139 15.387 14.139Z"/><path d="M29.956 5.727L26.395 15.545L24.35 15.545L20.783 5.727L22.835 5.727L25.322 13.283L25.424 13.283L27.904 5.727L29.956 5.727Z"/><path d="M35.45 15.744Q33.999 15.744 32.95 15.124Q31.908 14.497 31.339 13.366Q30.777 12.228 30.777 10.7Q30.777 9.192 31.339 8.041Q31.908 6.891 32.925 6.245Q33.947 5.599 35.315 5.599Q36.146 5.599 36.926 5.874Q37.706 6.149 38.326 6.737Q38.946 7.325 39.304 8.265Q39.662 9.198 39.662 10.534L39.662 11.212L31.857 11.212L31.857 9.78L37.789 9.78Q37.789 9.026 37.482 8.444Q37.175 7.856 36.619 7.517Q36.07 7.178 35.328 7.178Q34.523 7.178 33.922 7.575Q33.327 7.964 33.001 8.597Q32.682 9.224 32.682 9.959L32.682 11.077Q32.682 12.062 33.027 12.752Q33.379 13.442 34.005 13.807Q34.631 14.165 35.469 14.165Q36.012 14.165 36.459 14.011Q36.907 13.852 37.233 13.538Q37.559 13.225 37.731 12.765L39.54 13.091Q39.323 13.89 38.761 14.491Q38.205 15.085 37.361 15.418Q36.523 15.744 35.45 15.744Z"/><path d="M45.258 15.737Q44.069 15.737 43.136 15.13Q42.209 14.516 41.678 13.385Q41.154 12.247 41.154 10.656Q41.154 9.064 41.685 7.933Q42.222 6.801 43.155 6.2Q44.088 5.599 45.271 5.599Q46.185 5.599 46.741 5.906Q47.303 6.207 47.61 6.609Q47.923 7.012 48.096 7.319L48.211 7.319L48.211 2.455L50.122 2.455L50.122 15.545L48.256 15.545L48.256 14.018L48.096 14.018Q47.923 14.331 47.597 14.734Q47.278 15.136 46.715 15.437Q46.153 15.737 45.258 15.737ZM45.68 14.107Q46.504 14.107 47.073 13.673Q47.649 13.232 47.943 12.452Q48.243 11.672 48.243 10.636Q48.243 9.614 47.949 8.847Q47.655 8.08 47.086 7.651Q46.517 7.223 45.68 7.223Q44.817 7.223 44.242 7.67Q43.666 8.118 43.372 8.891Q43.085 9.665 43.085 10.636Q43.085 11.621 43.379 12.407Q43.673 13.193 44.248 13.653Q44.83 14.107 45.68 14.107Z"/><path d=""/><path d="M57.367 15.545L57.367 2.455L59.278 2.455L59.278 7.319L59.393 7.319Q59.56 7.012 59.873 6.609Q60.186 6.207 60.742 5.906Q61.298 5.599 62.212 5.599Q63.401 5.599 64.334 6.2Q65.268 6.801 65.798 7.933Q66.335 9.064 66.335 10.656Q66.335 12.247 65.805 13.385Q65.274 14.516 64.347 15.13Q63.42 15.737 62.231 15.737Q61.337 15.737 60.768 15.437Q60.205 15.136 59.886 14.734Q59.566 14.331 59.393 14.018L59.234 14.018L59.234 15.545L57.367 15.545ZM59.24 10.636Q59.24 11.672 59.54 12.452Q59.841 13.232 60.41 13.673Q60.979 14.107 61.803 14.107Q62.66 14.107 63.235 13.653Q63.81 13.193 64.104 12.407Q64.405 11.621 64.405 10.636Q64.405 9.665 64.111 8.891Q63.823 8.118 63.241 7.67Q62.666 7.223 61.803 7.223Q60.972 7.223 60.397 7.651Q59.828 8.08 59.534 8.847Q59.24 9.614 59.24 10.636Z"/><path d="M69.155 19.227Q68.727 19.227 68.376 19.157Q68.024 19.093 67.851 19.016L68.312 17.45Q68.836 17.591 69.245 17.572Q69.654 17.553 69.967 17.265Q70.287 16.977 70.53 16.325L70.766 15.673L67.174 5.727L69.219 5.727L71.706 13.347L71.808 13.347L74.295 5.727L76.346 5.727L72.3 16.856Q72.019 17.623 71.584 18.153Q71.15 18.69 70.549 18.959Q69.948 19.227 69.155 19.227Z"/><path d="M1.449 48.227L1.449 45.443L10.062 36.519Q11.441 35.065 12.336 33.971Q13.244 32.865 13.691 31.871Q14.138 30.876 14.138 29.758Q14.138 28.49 13.542 27.57Q12.945 26.638 11.914 26.141Q10.882 25.631 9.589 25.631Q8.222 25.631 7.203 26.191Q6.184 26.75 5.637 27.769Q5.09 28.788 5.09 30.156L1.424 30.156Q1.424 27.831 2.493 26.091Q3.561 24.351 5.426 23.394Q7.29 22.425 9.664 22.425Q12.063 22.425 13.89 23.382Q15.729 24.326 16.761 25.967Q17.793 27.595 17.793 29.646Q17.793 31.063 17.258 32.418Q16.736 33.772 15.431 35.438Q14.126 37.091 11.802 39.452L6.743 44.747L6.743 44.934L18.203 44.934L18.203 48.227L1.449 48.227Z"/><path d="M31.6 48.575Q29.897 48.55 28.244 47.954Q26.604 47.357 25.261 45.965Q23.919 44.573 23.111 42.224Q22.316 39.875 22.316 36.358Q22.316 33.027 22.974 30.441Q23.646 27.856 24.901 26.079Q26.156 24.289 27.934 23.357Q29.711 22.425 31.923 22.425Q34.198 22.425 35.963 23.32Q37.728 24.214 38.821 25.793Q39.927 27.371 40.226 29.385L36.435 29.385Q36.05 27.794 34.906 26.787Q33.763 25.781 31.923 25.781Q29.127 25.781 27.561 28.217Q26.007 30.653 25.995 34.99L26.181 34.99Q26.84 33.909 27.797 33.151Q28.766 32.38 29.959 31.97Q31.165 31.548 32.495 31.548Q34.707 31.548 36.497 32.629Q38.299 33.698 39.368 35.587Q40.437 37.476 40.437 39.912Q40.437 42.348 39.331 44.325Q38.237 46.301 36.249 47.457Q34.26 48.6 31.6 48.575ZM31.588 45.344Q33.054 45.344 34.21 44.623Q35.366 43.902 36.037 42.684Q36.708 41.466 36.708 39.962Q36.708 38.495 36.05 37.29Q35.403 36.084 34.26 35.376Q33.129 34.667 31.675 34.667Q30.568 34.667 29.624 35.09Q28.692 35.512 27.983 36.258Q27.275 37.004 26.865 37.973Q26.467 38.93 26.467 39.999Q26.467 41.429 27.126 42.647Q27.797 43.865 28.953 44.61Q30.121 45.344 31.588 45.344Z"/><path d="M48.232 41.752L48.207 37.215L48.853 37.215L56.46 29.136L60.91 29.136L52.234 38.334L51.65 38.334L48.232 41.752ZM44.814 48.227L44.814 22.773L48.53 22.773L48.53 48.227L44.814 48.227ZM56.87 48.227L50.034 39.154L52.595 36.556L61.432 48.227L56.87 48.227Z"/><path d="M70.28 46.612L70.28 29.808L73.623 29.808L73.623 46.612L70.28 46.612ZM63.556 39.875L63.556 36.532L80.36 36.532L80.36 39.875L63.556 39.875Z"/><path d="M12.311 59.712L10.317 59.712Q10.202 59.072 9.888 58.587Q9.575 58.101 9.121 57.762Q8.668 57.423 8.105 57.251Q7.549 57.078 6.923 57.078Q5.791 57.078 4.896 57.647Q4.008 58.216 3.49 59.315Q2.979 60.415 2.979 62Q2.979 63.598 3.49 64.697Q4.008 65.797 4.903 66.359Q5.798 66.922 6.916 66.922Q7.536 66.922 8.092 66.756Q8.655 66.583 9.109 66.251Q9.562 65.918 9.876 65.439Q10.195 64.953 10.317 64.327L12.311 64.333Q12.151 65.298 11.691 66.11Q11.237 66.915 10.521 67.504Q9.812 68.085 8.898 68.405Q7.984 68.724 6.903 68.724Q5.203 68.724 3.874 67.919Q2.544 67.107 1.777 65.599Q1.016 64.09 1.016 62Q1.016 59.903 1.783 58.401Q2.55 56.893 3.88 56.087Q5.21 55.276 6.903 55.276Q7.945 55.276 8.847 55.576Q9.754 55.87 10.477 56.445Q11.199 57.014 11.672 57.839Q12.145 58.657 12.311 59.712Z"/><path d="M16.232 55.455L16.232 68.545L14.321 68.545L14.321 55.455L16.232 55.455Z"/><path d="M18.604 68.545L18.604 58.727L20.515 58.727L20.515 68.545L18.604 68.545ZM19.569 57.212Q19.07 57.212 18.712 56.88Q18.361 56.541 18.361 56.075Q18.361 55.602 18.712 55.269Q19.07 54.93 19.569 54.93Q20.067 54.93 20.419 55.269Q20.777 55.602 20.777 56.075Q20.777 56.541 20.419 56.88Q20.067 57.212 19.569 57.212Z"/><path d="M24.797 62.716L24.797 68.545L22.886 68.545L22.886 58.727L24.72 58.727L24.72 60.325L24.842 60.325Q25.181 59.545 25.903 59.072Q26.632 58.599 27.738 58.599Q28.741 58.599 29.495 59.021Q30.25 59.437 30.665 60.261Q31.081 61.086 31.081 62.3L31.081 68.545L29.169 68.545L29.169 62.531Q29.169 61.463 28.613 60.862Q28.057 60.255 27.086 60.255Q26.421 60.255 25.903 60.543Q25.392 60.83 25.091 61.386Q24.797 61.936 24.797 62.716Z"/><path d="M33.444 68.545L33.444 58.727L35.355 58.727L35.355 68.545L33.444 68.545ZM34.409 57.212Q33.91 57.212 33.552 56.88Q33.201 56.541 33.201 56.075Q33.201 55.602 33.552 55.269Q33.91 54.93 34.409 54.93Q34.908 54.93 35.259 55.269Q35.617 55.602 35.617 56.075Q35.617 56.541 35.259 56.88Q34.908 57.212 34.409 57.212Z"/><path d="M41.862 68.744Q40.436 68.744 39.407 68.098Q38.385 67.446 37.835 66.302Q37.285 65.158 37.285 63.681Q37.285 62.185 37.848 61.041Q38.41 59.891 39.433 59.245Q40.456 58.599 41.843 58.599Q42.961 58.599 43.837 59.015Q44.713 59.424 45.25 60.165Q45.793 60.907 45.895 61.898L44.035 61.898Q43.882 61.207 43.332 60.709Q42.789 60.21 41.875 60.21Q41.076 60.21 40.475 60.632Q39.88 61.048 39.548 61.821Q39.216 62.588 39.216 63.636Q39.216 64.71 39.542 65.49Q39.868 66.27 40.462 66.698Q41.063 67.126 41.875 67.126Q42.418 67.126 42.859 66.928Q43.306 66.724 43.607 66.347Q43.914 65.969 44.035 65.439L45.895 65.439Q45.793 66.391 45.275 67.139Q44.757 67.887 43.888 68.315Q43.025 68.744 41.862 68.744Z"/><path d="M47.739 68.545L47.739 58.727L49.65 58.727L49.65 68.545L47.739 68.545ZM48.704 57.212Q48.206 57.212 47.848 56.88Q47.496 56.541 47.496 56.075Q47.496 55.602 47.848 55.269Q48.206 54.93 48.704 54.93Q49.203 54.93 49.554 55.269Q49.912 55.602 49.912 56.075Q49.912 56.541 49.554 56.88Q49.203 57.212 48.704 57.212Z"/><path d="M54.879 68.763Q53.946 68.763 53.191 68.418Q52.437 68.066 51.996 67.401Q51.561 66.737 51.561 65.771Q51.561 64.94 51.881 64.403Q52.2 63.866 52.744 63.553Q53.287 63.24 53.958 63.08Q54.629 62.92 55.326 62.837Q56.208 62.735 56.758 62.671Q57.308 62.601 57.557 62.447Q57.806 62.294 57.806 61.949L57.806 61.904Q57.806 61.067 57.333 60.607Q56.867 60.146 55.94 60.146Q54.975 60.146 54.419 60.575Q53.869 60.996 53.658 61.514L51.862 61.105Q52.181 60.21 52.795 59.661Q53.415 59.104 54.22 58.855Q55.026 58.599 55.914 58.599Q56.502 58.599 57.161 58.74Q57.825 58.874 58.401 59.239Q58.982 59.603 59.353 60.281Q59.724 60.952 59.724 62.026L59.724 68.545L57.857 68.545L57.857 67.203L57.781 67.203Q57.595 67.574 57.225 67.932Q56.854 68.29 56.272 68.526Q55.691 68.763 54.879 68.763ZM55.294 67.229Q56.087 67.229 56.649 66.915Q57.218 66.602 57.512 66.097Q57.813 65.586 57.813 65.004L57.813 63.739Q57.71 63.841 57.416 63.93Q57.129 64.013 56.758 64.077Q56.387 64.135 56.036 64.186Q55.684 64.231 55.448 64.263Q54.892 64.333 54.431 64.499Q53.977 64.665 53.703 64.979Q53.434 65.286 53.434 65.797Q53.434 66.506 53.958 66.871Q54.482 67.229 55.294 67.229Z"/><path d="M63.981 62.716L63.981 68.545L62.07 68.545L62.07 58.727L63.904 58.727L63.904 60.325L64.026 60.325Q64.364 59.545 65.087 59.072Q65.815 58.599 66.921 58.599Q67.925 58.599 68.679 59.021Q69.433 59.437 69.849 60.261Q70.264 61.086 70.264 62.3L70.264 68.545L68.353 68.545L68.353 62.531Q68.353 61.463 67.797 60.862Q67.241 60.255 66.269 60.255Q65.604 60.255 65.087 60.543Q64.575 60.83 64.275 61.386Q63.981 61.936 63.981 62.716Z"/><path d="M79.985 61.124L78.252 61.431Q78.144 61.099 77.907 60.798Q77.677 60.498 77.281 60.306Q76.884 60.114 76.29 60.114Q75.478 60.114 74.935 60.479Q74.392 60.837 74.392 61.406Q74.392 61.898 74.756 62.198Q75.12 62.499 75.932 62.69L77.492 63.048Q78.847 63.362 79.512 64.013Q80.176 64.665 80.176 65.707Q80.176 66.589 79.665 67.28Q79.16 67.964 78.252 68.354Q77.351 68.744 76.162 68.744Q74.513 68.744 73.471 68.04Q72.429 67.331 72.193 66.027L74.04 65.746Q74.213 66.468 74.75 66.839Q75.286 67.203 76.149 67.203Q77.089 67.203 77.652 66.813Q78.214 66.417 78.214 65.848Q78.214 65.388 77.869 65.075Q77.53 64.761 76.827 64.602L75.165 64.237Q73.791 63.924 73.132 63.24Q72.48 62.556 72.48 61.508Q72.48 60.638 72.966 59.987Q73.452 59.335 74.308 58.97Q75.165 58.599 76.271 58.599Q77.862 58.599 78.777 59.29Q79.691 59.974 79.985 61.124Z"/>' }, "certification": { "viewBox": "-1 -1 230 67", "paths": '<path d="M20.535 51.495C20.406 51.633 20.355 51.72 20.218 51.858L20.389 52.047C20.583 52.256 20.72 52.512 20.786 52.79C20.852 53.068 20.845 53.359 20.766 53.634C20.766 53.634 20.945 53.539 21.048 53.211C21.099 52.966 21.096 52.712 21.04 52.468C20.984 52.224 20.876 51.995 20.723 51.797C20.666 51.693 20.603 51.592 20.535 51.495Z"/><path d="M21.44 44.771C21.117 45.005 20.78 45.218 20.43 45.409C20.765 45.588 21.085 45.793 21.389 46.021C21.474 46.073 21.098 46.642 20.721 46.883C20.345 47.125 19.866 47.53 19.489 47.858C19.037 48.175 18.672 48.602 18.428 49.099C18.325 49.369 18.313 49.667 18.395 49.944C18.477 50.222 18.648 50.464 18.882 50.634C19.061 50.78 19.352 51.108 19.506 51.246C19.506 51.159 19.771 51.004 19.848 50.832C18.993 50.125 18.488 49.263 19.96 48.487C20.362 48.194 20.815 47.918 21.269 47.556C21.515 47.367 21.741 47.153 21.945 46.918C22.107 46.763 22.221 46.564 22.274 46.346C22.327 46.127 22.317 45.898 22.244 45.685C22.17 45.482 22.056 45.297 21.909 45.14C21.762 44.983 21.585 44.858 21.389 44.771"/><path d="M22.634 38.098C22.574 38.098 21.265 38.65 20.7 38.917L21.513 39.159C21.662 39.198 21.808 39.25 21.949 39.314C21.916 39.36 21.876 39.401 21.829 39.434C21.624 39.62 21.386 39.766 21.128 39.866C20.52 40.159 19.879 40.443 19.263 40.728C18.647 41.012 18.013 41.159 17.346 42.072C17.208 42.32 17.153 42.606 17.19 42.887C17.227 43.169 17.354 43.43 17.551 43.633C17.798 43.92 18.087 44.167 18.407 44.366L18.715 44.555C19.049 44.288 19.434 44.159 19.776 43.926C19.511 43.771 19.246 43.624 19.006 43.452C18.493 43.141 18.15 42.59 18.321 42.659C18.751 42.295 19.237 42.004 19.759 41.797C20.366 41.521 20.991 41.262 21.633 40.935C22.022 40.784 22.384 40.569 22.702 40.297C22.896 40.169 23.054 39.993 23.16 39.786C23.266 39.579 23.317 39.347 23.307 39.114C23.298 38.881 23.228 38.655 23.106 38.457C22.983 38.259 22.811 38.097 22.608 37.986"/><path d="M23.737 31.253C23.391 31.079 23.034 30.93 22.668 30.805C21.947 31.199 21.197 31.539 20.426 31.822C20.811 31.977 21.213 32.124 21.649 32.279C22.111 32.427 22.566 32.6 23.01 32.796L23.335 32.96C23.181 33.02 23.01 33.072 22.847 33.124C22.308 33.27 21.726 33.382 21.136 33.486C19.748 33.561 18.384 33.882 17.106 34.434C16.661 34.633 16.281 34.956 16.011 35.365C15.915 35.533 15.854 35.72 15.833 35.913C15.813 36.106 15.833 36.301 15.892 36.486C16.004 36.762 16.177 37.01 16.396 37.21C16.713 37.471 17.061 37.691 17.432 37.865C17.828 37.759 18.215 37.618 18.587 37.443L18.818 37.4L19.468 37.132L18.954 36.96C18.388 36.781 17.856 36.507 17.38 36.15C17.512 36.044 17.656 35.955 17.808 35.882C18.964 35.463 20.175 35.219 21.401 35.158C22.047 35.073 22.687 34.949 23.318 34.787C23.643 34.698 23.962 34.592 24.276 34.469C24.549 34.382 24.797 34.228 24.996 34.02C25.195 33.812 25.338 33.557 25.414 33.279C25.662 32.227 24.002 31.365 23.737 31.253Z"/><path d="M20.878 48.065C20.69 48.228 20.408 48.504 20.305 48.565C22.299 49.729 19.835 50.772 19.364 51.798C19.213 51.996 19.106 52.225 19.051 52.469C18.996 52.714 18.995 52.967 19.047 53.212C19.15 53.539 19.313 53.643 19.321 53.634C19.248 53.361 19.243 53.075 19.306 52.8C19.368 52.525 19.497 52.27 19.68 52.056C20.152 51.544 20.661 51.068 21.203 50.634C21.429 50.458 21.594 50.215 21.677 49.94C21.759 49.666 21.755 49.372 21.665 49.099C21.464 48.694 21.171 48.343 20.81 48.073"/><path d="M21.792 41.193C21.792 41.193 20.842 41.701 20.406 41.9C20.895 42.088 21.351 42.352 21.758 42.684C21.92 42.641 21.587 43.167 21.073 43.477C20.56 43.788 20.021 44.098 19.499 44.4C18.977 44.702 18.207 44.693 17.831 45.684C17.769 45.895 17.768 46.12 17.827 46.332C17.886 46.544 18.003 46.735 18.165 46.883C18.368 47.118 18.594 47.331 18.84 47.521L19.097 47.719L19.876 47.245L19.388 46.883C19.012 46.624 18.635 46.021 18.712 46.021C19.109 45.759 19.527 45.532 19.961 45.339C20.509 45.046 21.082 44.796 21.672 44.417C21.995 44.221 22.283 43.973 22.528 43.684C22.728 43.483 22.857 43.222 22.896 42.94C22.934 42.659 22.88 42.372 22.742 42.124C22.494 41.75 22.163 41.44 21.775 41.219"/><path d="M23.632 34.814C23.196 34.978 21.459 35.323 21.065 35.409C21.503 35.49 21.928 35.626 22.332 35.814C22.484 35.886 22.627 35.976 22.759 36.081C22.283 36.437 21.751 36.711 21.185 36.892C20.578 37.116 19.91 37.28 19.226 37.495C18.884 37.599 18.55 37.702 18.199 37.823C17.848 37.943 17.344 37.926 16.942 38.685C16.802 38.981 16.773 39.318 16.859 39.635C16.946 39.951 17.142 40.226 17.412 40.409C17.667 40.634 17.956 40.817 18.268 40.952C18.755 40.737 19.26 40.556 19.748 40.349L19.876 40.271L19.021 39.866C18.764 39.768 18.526 39.625 18.319 39.443C18.274 39.405 18.234 39.362 18.199 39.314C18.34 39.249 18.486 39.197 18.636 39.159C18.961 39.055 19.286 38.961 19.62 38.874C20.278 38.685 20.963 38.53 21.673 38.288C22.434 38.062 23.148 37.697 23.778 37.211C23.997 37.01 24.17 36.763 24.282 36.486C24.341 36.301 24.361 36.106 24.34 35.913C24.32 35.72 24.259 35.534 24.163 35.366C24.031 35.156 23.866 34.97 23.675 34.814"/><path d="M25.02 24.322C24.567 24.079 24.068 23.938 23.557 23.908C23.206 23.856 22.29 23.623 21.982 23.839C21.674 24.055 21.982 24.865 22.239 25.106C22.976 25.679 23.815 26.104 24.712 26.356C25.028 26.468 25.832 26.925 25.182 27.374C24.561 27.774 23.905 28.118 23.223 28.4C22.752 28.615 21.734 29.072 20.305 29.676C19.587 29.969 18.765 30.313 17.867 30.641C17.354 30.817 16.852 31.021 16.361 31.253C16.087 31.382 14.419 32.184 14.727 33.21C14.802 33.49 14.945 33.747 15.144 33.956C15.343 34.166 15.591 34.321 15.865 34.408L16.481 34.615C16.517 34.574 16.557 34.536 16.601 34.503C17.166 34.037 17.801 33.664 18.483 33.4C18.055 33.314 17.627 33.227 17.251 33.124C17.088 33.072 16.917 33.02 16.763 32.96L17.088 32.796C17.533 32.6 17.987 32.428 18.449 32.279C19.399 31.943 20.237 31.607 20.964 31.313C22.427 30.719 23.471 30.262 23.959 30.046C25.007 29.638 25.956 29.005 26.739 28.193C26.953 27.912 27.092 27.581 27.142 27.231C27.193 26.881 27.155 26.523 27.03 26.193C26.603 25.345 25.89 24.679 25.02 24.313"/><path d="M19.676 9.812C19.258 9.812 18.85 9.937 18.502 10.171C18.155 10.405 17.884 10.738 17.724 11.127C17.564 11.516 17.522 11.944 17.604 12.357C17.685 12.77 17.886 13.149 18.182 13.447C18.478 13.745 18.854 13.948 19.264 14.03C19.674 14.112 20.099 14.07 20.485 13.909C20.871 13.748 21.201 13.475 21.433 13.125C21.666 12.774 21.79 12.363 21.79 11.941C21.787 11.377 21.564 10.837 21.168 10.438C20.772 10.039 20.236 9.814 19.676 9.812Z"/><path d="M20.351 14.372L18.948 14.372C18.906 14.365 18.864 14.367 18.823 14.378C18.782 14.389 18.744 14.409 18.711 14.437C18.679 14.464 18.653 14.499 18.635 14.538C18.617 14.576 18.608 14.618 18.608 14.661C18.608 14.704 18.617 14.746 18.635 14.785C18.653 14.824 18.679 14.858 18.711 14.885C18.744 14.913 18.782 14.933 18.823 14.944C18.864 14.955 18.906 14.957 18.948 14.95L20.351 14.95C20.393 14.957 20.436 14.955 20.477 14.944C20.518 14.933 20.556 14.913 20.588 14.885C20.621 14.858 20.647 14.824 20.665 14.785C20.683 14.746 20.692 14.704 20.692 14.661C20.692 14.618 20.683 14.576 20.665 14.538C20.647 14.499 20.621 14.464 20.588 14.437C20.556 14.409 20.518 14.389 20.477 14.378C20.436 14.367 20.393 14.365 20.351 14.372Z"/><path d="M19.678 15.261C19.422 15.261 19.208 15.347 19.208 15.726L19.285 29.804L19.764 29.546C19.837 29.511 19.915 29.488 19.995 29.477L20.081 29.477L20.132 15.769C20.132 15.39 19.927 15.304 19.661 15.304"/><path d="M20.095 52.055L19.812 52.219L19.812 54.943C19.824 55.011 19.859 55.073 19.912 55.118C19.964 55.162 20.03 55.186 20.099 55.186C20.168 55.186 20.234 55.162 20.286 55.118C20.339 55.073 20.374 55.011 20.386 54.943L20.386 52.167C20.33 52.161 20.275 52.147 20.223 52.124C20.173 52.111 20.125 52.094 20.078 52.072"/><path d="M19.678 37.236C19.912 37.143 20.161 37.09 20.413 37.081L20.413 35.598C20.165 35.647 19.913 35.67 19.66 35.667L19.678 37.236Z"/><path d="M20.131 45.668C19.976 45.728 19.831 45.797 19.677 45.849L19.677 47.254L19.728 47.305L19.728 47.349C19.86 47.268 20.001 47.204 20.148 47.159L20.242 47.159L20.242 45.728L20.148 45.728L20.036 45.728"/><path d="M19.678 49.245L19.678 50.676L19.763 50.762L19.832 50.814C19.968 50.732 20.13 50.704 20.285 50.737L20.285 48.943L20.037 48.943C19.909 49.055 19.789 49.176 19.652 49.28"/><path d="M20.289 42.28C20.205 42.243 20.13 42.19 20.067 42.124L19.673 42.245L19.673 43.9C19.767 43.927 19.852 43.977 19.921 44.047C20.049 44.002 20.181 43.97 20.315 43.952L20.315 42.314L20.246 42.314L20.289 42.28Z"/><path d="M19.677 40.228C19.721 40.267 19.759 40.314 19.788 40.366C19.793 40.388 19.793 40.412 19.788 40.434C19.951 40.371 20.116 40.316 20.284 40.271L20.361 40.271L20.361 39.012C20.122 39.09 19.882 39.15 19.643 39.219L19.677 40.228Z"/><path d="M20.003 32.339L19.755 32.339L19.601 32.4L19.601 33.753C19.815 33.693 20.029 33.641 20.234 33.572C20.282 33.564 20.332 33.564 20.38 33.572L20.38 32.288C20.257 32.323 20.131 32.34 20.003 32.339Z"/><path d="M16.657 18.304C15.801 17.89 16.571 17.304 16.87 16.769C17.253 16.144 17.438 15.417 17.401 14.683C17.261 14.274 17.011 13.911 16.679 13.637C16.346 13.363 15.945 13.188 15.519 13.131C15.107 13.08 14.688 13.117 14.292 13.24C13.895 13.363 13.529 13.57 13.217 13.847C12.463 14.369 11.657 14.811 10.813 15.166C7.801 16.39 3.25 18.364 -0.001 18.675C0.373 19.17 0.841 19.585 1.376 19.897C1.91 20.209 2.5 20.412 3.113 20.494C3.053 21.08 4.148 21.692 4.602 21.847C5.236 22.066 5.93 22.025 6.535 21.735C6.719 22.011 6.955 22.246 7.231 22.428C7.507 22.609 7.816 22.733 8.141 22.791C8.465 22.849 8.798 22.84 9.119 22.765C9.44 22.69 9.743 22.551 10.009 22.356C10.077 22.89 11.018 23.218 11.438 23.278C12.091 23.367 12.756 23.278 13.363 23.02C13.816 22.916 14.004 23.209 14.492 23.321C14.997 23.465 15.538 23.403 15.998 23.149C16.229 23.028 16.143 22.959 16.383 22.976C16.622 22.994 16.751 23.166 16.922 23.192C17.401 23.261 17.717 22.907 17.983 22.571C18.343 22.004 18.63 21.393 18.838 20.752L18.838 18.433C18.121 18.529 17.393 18.488 16.691 18.312"/><path d="M26.033 13.847C25.721 13.57 25.355 13.363 24.958 13.24C24.561 13.117 24.143 13.08 23.731 13.131C23.306 13.187 22.904 13.361 22.573 13.636C22.242 13.91 21.994 14.273 21.857 14.683C21.813 15.416 21.995 16.145 22.379 16.769C22.679 17.304 23.415 17.89 22.593 18.304C21.919 18.471 21.221 18.514 20.531 18.433L20.531 20.925C20.721 21.507 20.982 22.063 21.31 22.58C21.412 22.771 21.564 22.929 21.75 23.039C21.935 23.149 22.147 23.204 22.362 23.201C22.533 23.201 22.756 23.002 22.901 22.985C23.047 22.968 23.055 23.037 23.286 23.158C23.746 23.412 24.287 23.474 24.792 23.33C25.28 23.218 25.476 22.925 25.921 23.028C26.529 23.286 27.193 23.376 27.846 23.287C28.266 23.192 29.215 22.899 29.275 22.364C29.541 22.56 29.844 22.699 30.165 22.774C30.486 22.849 30.819 22.857 31.143 22.799C31.467 22.741 31.777 22.618 32.053 22.437C32.329 22.255 32.566 22.02 32.749 21.744C33.341 22.033 34.021 22.083 34.648 21.882C35.11 21.726 36.205 21.114 36.137 20.528C36.749 20.447 37.34 20.244 37.874 19.932C38.409 19.62 38.877 19.204 39.251 18.709C36 18.399 31.448 16.424 28.437 15.2C27.593 14.843 26.788 14.401 26.033 13.881"/><path d="M14.487 27.58C13.846 27.132 14.641 26.718 14.958 26.563C15.856 26.318 16.699 25.899 17.439 25.33C17.704 25.089 18.115 24.365 17.696 24.063C17.277 23.761 16.464 24.063 16.113 24.132C15.604 24.16 15.107 24.302 14.659 24.546C13.787 24.913 13.072 25.579 12.639 26.425C12.516 26.755 12.479 27.11 12.53 27.459C12.58 27.807 12.718 28.137 12.93 28.416C13.714 29.233 14.666 29.865 15.719 30.27L16.977 30.822C17.716 30.517 18.438 30.175 19.142 29.796C17.833 29.244 16.892 28.83 16.455 28.623C15.771 28.339 15.113 27.996 14.487 27.597"/><path d="M50.555 33.986L50.555 14.5L54.675 14.5L54.675 22.54L63.038 22.54L63.038 14.5L67.148 14.5L67.148 33.986L63.038 33.986L63.038 25.937L54.675 25.937L54.675 33.986L50.555 33.986Z"/><path d="M74.665 14.5L74.665 33.986L70.545 33.986L70.545 14.5L74.665 14.5Z"/><path d="M78.055 33.986L78.055 14.5L85.743 14.5Q87.96 14.5 89.52 15.347Q91.08 16.184 91.899 17.678Q92.726 19.162 92.726 21.103Q92.726 23.044 91.889 24.529Q91.052 26.013 89.463 26.841Q87.883 27.668 85.638 27.668L80.738 27.668L80.738 24.367L84.972 24.367Q86.161 24.367 86.932 23.958Q87.712 23.539 88.093 22.806Q88.483 22.064 88.483 21.103Q88.483 20.133 88.093 19.41Q87.712 18.677 86.932 18.277Q86.152 17.868 84.953 17.868L82.175 17.868L82.175 33.986L78.055 33.986Z"/><path d="M96.511 33.986L92.096 33.986L98.823 14.5L104.132 14.5L110.85 33.986L106.435 33.986L101.554 18.953L101.401 18.953L96.511 33.986ZM96.235 26.327L106.663 26.327L106.663 29.543L96.235 29.543L96.235 26.327Z"/><path d="M116.554 33.986L112.139 33.986L118.866 14.5L124.175 14.5L130.892 33.986L126.478 33.986L121.596 18.953L121.444 18.953L116.554 33.986ZM116.278 26.327L126.706 26.327L126.706 29.543L116.278 29.543L116.278 26.327Z"/><path d="M60.442 42.364L58.944 42.364Q58.812 41.718 58.48 41.229Q58.154 40.74 57.683 40.408Q57.218 40.07 56.65 39.901Q56.083 39.732 55.467 39.732Q54.344 39.732 53.433 40.299Q52.527 40.866 51.99 41.971Q51.459 43.076 51.459 44.682Q51.459 46.288 51.99 47.392Q52.527 48.497 53.433 49.065Q54.344 49.632 55.467 49.632Q56.083 49.632 56.65 49.463Q57.218 49.294 57.683 48.962Q58.154 48.624 58.48 48.135Q58.812 47.64 58.944 47L60.442 47Q60.273 47.948 59.826 48.696Q59.379 49.445 58.715 49.97Q58.051 50.489 57.224 50.761Q56.403 51.033 55.467 51.033Q53.886 51.033 52.654 50.26Q51.422 49.487 50.716 48.063Q50.01 46.638 50.01 44.682Q50.01 42.726 50.716 41.301Q51.422 39.876 52.654 39.104Q53.886 38.331 55.467 38.331Q56.403 38.331 57.224 38.603Q58.051 38.874 58.715 39.4Q59.379 39.919 59.826 40.667Q60.273 41.41 60.442 42.364Z"/><path d="M66.435 51.057Q65.179 51.057 64.231 50.459Q63.29 49.862 62.758 48.787Q62.233 47.712 62.233 46.276Q62.233 44.827 62.758 43.746Q63.29 42.665 64.231 42.068Q65.179 41.47 66.435 41.47Q67.69 41.47 68.632 42.068Q69.58 42.665 70.105 43.746Q70.636 44.827 70.636 46.276Q70.636 47.712 70.105 48.787Q69.58 49.862 68.632 50.459Q67.69 51.057 66.435 51.057ZM66.435 49.777Q67.389 49.777 68.004 49.288Q68.62 48.799 68.916 48.002Q69.212 47.205 69.212 46.276Q69.212 45.346 68.916 44.543Q68.62 43.74 68.004 43.245Q67.389 42.75 66.435 42.75Q65.481 42.75 64.865 43.245Q64.249 43.74 63.954 44.543Q63.658 45.346 63.658 46.276Q63.658 47.205 63.954 48.002Q64.249 48.799 64.865 49.288Q65.481 49.777 66.435 49.777Z"/><path d="M72.811 50.864L72.811 41.591L74.188 41.591L74.188 43.04L74.308 43.04Q74.598 42.297 75.244 41.887Q75.89 41.47 76.796 41.47Q77.713 41.47 78.323 41.887Q78.939 42.297 79.283 43.04L79.379 43.04Q79.736 42.321 80.448 41.899Q81.16 41.47 82.156 41.47Q83.4 41.47 84.191 42.249Q84.982 43.022 84.982 44.658L84.982 50.864L83.557 50.864L83.557 44.658Q83.557 43.631 82.996 43.191Q82.434 42.75 81.673 42.75Q80.696 42.75 80.158 43.342Q79.621 43.927 79.621 44.827L79.621 50.864L78.172 50.864L78.172 44.513Q78.172 43.722 77.659 43.239Q77.146 42.75 76.337 42.75Q75.781 42.75 75.298 43.046Q74.822 43.342 74.526 43.867Q74.236 44.386 74.236 45.068L74.236 50.864L72.811 50.864Z"/><path d="M87.587 54.341L87.587 41.591L88.963 41.591L88.963 43.064L89.132 43.064Q89.289 42.822 89.567 42.448Q89.851 42.068 90.376 41.772Q90.907 41.47 91.813 41.47Q92.984 41.47 93.877 42.056Q94.771 42.641 95.272 43.716Q95.773 44.79 95.773 46.251Q95.773 47.724 95.272 48.805Q94.771 49.88 93.883 50.471Q92.996 51.057 91.837 51.057Q90.943 51.057 90.406 50.761Q89.869 50.459 89.579 50.079Q89.289 49.692 89.132 49.439L89.011 49.439L89.011 54.341L87.587 54.341ZM88.987 46.227Q88.987 47.278 89.295 48.081Q89.603 48.877 90.195 49.33Q90.786 49.777 91.643 49.777Q92.537 49.777 93.135 49.306Q93.738 48.829 94.04 48.026Q94.348 47.217 94.348 46.227Q94.348 45.249 94.046 44.464Q93.75 43.674 93.147 43.215Q92.549 42.75 91.643 42.75Q90.774 42.75 90.183 43.191Q89.591 43.625 89.289 44.41Q88.987 45.189 88.987 46.227Z"/><path d="M99.371 38.5L99.371 50.864L97.946 50.864L97.946 38.5L99.371 38.5Z"/><path d="M101.98 50.864L101.98 41.591L103.405 41.591L103.405 50.864L101.98 50.864ZM102.705 40.045Q102.288 40.045 101.986 39.762Q101.69 39.478 101.69 39.08Q101.69 38.681 101.986 38.397Q102.288 38.114 102.705 38.114Q103.121 38.114 103.417 38.397Q103.719 38.681 103.719 39.08Q103.719 39.478 103.417 39.762Q103.121 40.045 102.705 40.045Z"/><path d="M108.743 51.081Q107.862 51.081 107.143 50.749Q106.425 50.411 106.002 49.777Q105.58 49.137 105.58 48.232Q105.58 47.435 105.894 46.94Q106.208 46.439 106.733 46.155Q107.258 45.871 107.892 45.732Q108.532 45.587 109.178 45.503Q110.023 45.394 110.548 45.34Q111.079 45.279 111.321 45.141Q111.568 45.002 111.568 44.658L111.568 44.609Q111.568 43.716 111.079 43.221Q110.596 42.726 109.612 42.726Q108.592 42.726 108.013 43.173Q107.433 43.619 107.198 44.126L105.845 43.643Q106.208 42.798 106.811 42.327Q107.421 41.85 108.139 41.663Q108.864 41.47 109.564 41.47Q110.011 41.47 110.59 41.579Q111.176 41.681 111.719 42.007Q112.269 42.333 112.631 42.991Q112.993 43.65 112.993 44.754L112.993 50.864L111.568 50.864L111.568 49.608L111.496 49.608Q111.351 49.91 111.013 50.254Q110.675 50.598 110.113 50.839Q109.552 51.081 108.743 51.081ZM108.96 49.801Q109.806 49.801 110.385 49.469Q110.971 49.137 111.267 48.612Q111.568 48.087 111.568 47.507L111.568 46.203Q111.478 46.312 111.17 46.402Q110.868 46.487 110.47 46.553Q110.077 46.614 109.703 46.662Q109.335 46.704 109.105 46.734Q108.55 46.807 108.067 46.97Q107.59 47.127 107.294 47.447Q107.004 47.761 107.004 48.304Q107.004 49.047 107.554 49.427Q108.109 49.801 108.96 49.801Z"/><path d="M117.018 45.286L117.018 50.864L115.594 50.864L115.594 41.591L116.97 41.591L116.97 43.04L117.091 43.04Q117.417 42.333 118.081 41.905Q118.745 41.47 119.795 41.47Q120.737 41.47 121.443 41.857Q122.15 42.237 122.542 43.016Q122.934 43.788 122.934 44.972L122.934 50.864L121.51 50.864L121.51 45.068Q121.51 43.975 120.942 43.366Q120.375 42.75 119.385 42.75Q118.703 42.75 118.165 43.046Q117.634 43.342 117.326 43.909Q117.018 44.477 117.018 45.286Z"/><path d="M129.571 41.591L129.571 42.798L124.765 42.798L124.765 41.591L129.571 41.591ZM126.166 39.369L127.59 39.369L127.59 48.207Q127.59 48.811 127.765 49.113Q127.947 49.409 128.224 49.511Q128.508 49.608 128.822 49.608Q129.057 49.608 129.208 49.584Q129.359 49.554 129.45 49.536L129.74 50.815Q129.595 50.87 129.335 50.924Q129.075 50.984 128.677 50.984Q128.073 50.984 127.494 50.725Q126.92 50.465 126.54 49.934Q126.166 49.403 126.166 48.594L126.166 39.369Z"/><path d="M227.967 32.5L227.017 32.5C227.017 49.517 213.221 63.313 196.204 63.313L196.204 64.264L196.204 65.215C214.271 65.215 228.918 50.568 228.918 32.5L227.967 32.5ZM196.204 64.264L196.204 63.313C179.186 63.313 165.391 49.517 165.391 32.5L164.44 32.5L163.489 32.5C163.489 50.568 178.136 65.215 196.204 65.215L196.204 64.264ZM164.44 32.5L165.391 32.5C165.391 15.482 179.186 1.687 196.204 1.687L196.204 0.736L196.204 -0.215C178.136 -0.215 163.489 14.432 163.489 32.5L164.44 32.5ZM196.204 0.736L196.204 1.687C213.221 1.687 227.017 15.482 227.017 32.5L227.967 32.5L228.918 32.5C228.918 14.432 214.271 -0.215 196.204 -0.215L196.204 0.736Z"/><path d="M215.699 16.693L215.699 23.031L212.593 23.031C212.593 23.031 212.662 20.25 212.593 18.839C208.219 16.548 203.706 14.295 199.401 12.036C198.755 11.697 198.1 11.366 197.494 10.964C196.483 10.295 195.52 10.208 194.419 10.818C190.109 13.206 185.769 15.541 181.448 17.909C180.973 18.17 180.546 18.52 179.97 18.915L179.97 23.031L176.462 23.031L176.462 16.694C182.764 13.266 189.216 9.802 195.809 6.215C202.428 9.702 209.037 13.184 215.699 16.693Z"/><path d="M176.462 48.306L176.462 41.969L179.569 41.969C179.569 41.969 179.5 44.75 179.569 46.161C183.943 48.451 188.456 50.704 192.76 52.964C193.406 53.303 194.061 53.634 194.668 54.035C195.679 54.704 196.641 54.792 197.742 54.182C202.053 51.794 206.392 49.459 210.713 47.09C211.189 46.83 211.615 46.48 212.192 46.084L212.192 41.969L215.699 41.969L215.699 48.306C209.398 51.734 202.946 55.198 196.352 58.785C189.734 55.298 183.125 51.816 176.462 48.306Z"/><path d="M188.206 39.403C184.572 39.552 181.84 36.883 181.786 32.539C181.734 28.346 184.443 25.412 188.264 25.457C192.023 25.502 194.572 28.352 194.571 32.512C194.57 36.728 192.105 39.396 188.206 39.403ZM191.792 32.736C191.6 31.735 191.551 30.932 191.285 30.21C190.723 28.683 189.588 27.947 188.092 27.979C186.605 28.011 185.592 28.806 185.03 30.378C184.497 31.872 184.549 33.374 185.106 34.83C185.604 36.13 186.637 36.907 188.015 36.966C189.201 37.017 190.364 36.647 190.916 35.472C191.341 34.564 191.54 33.551 191.792 32.736Z"/><path d="M172.716 34.949C173.07 35.524 173.353 35.983 173.6 36.383C176.24 37.736 178.015 37.076 177.963 34.562C177.175 34.252 176.302 33.88 175.408 33.565C174.551 33.263 173.641 33.093 172.81 32.735C171.563 32.197 170.733 31.326 170.688 29.825C170.642 28.267 171.184 27.054 172.538 26.314C174.668 25.15 176.855 25.126 178.989 26.319C180.131 26.958 180.431 27.564 180.654 29.275C180.27 29.343 179.881 29.436 179.488 29.473C179.127 29.507 178.761 29.48 178.461 29.48C177.128 28.012 175.84 27.545 174.603 28.069C173.731 28.437 173.454 29.097 173.86 30.331C174.475 30.575 175.284 30.93 176.116 31.214C176.919 31.488 177.78 31.609 178.556 31.938C180.225 32.647 181.104 34.036 181.023 35.64C180.943 37.234 179.921 38.582 178.219 39.102C176.43 39.649 174.605 39.639 172.844 38.948C171.207 38.306 170.481 37.121 170.481 35.052C171.168 35.02 171.869 34.988 172.716 34.949Z"/><path d="M204.971 34.74L207.723 34.74C207.48 36.659 206.475 37.902 204.985 38.736C201.312 40.793 196.646 38.711 195.794 34.588C195.41 32.73 195.438 30.828 196.237 29.024C197.247 26.743 199.699 25.3 202.317 25.459C205.04 25.623 206.989 27.144 207.671 29.649C207.716 29.814 207.677 30.002 207.677 30.32L205.048 30.32C204.898 30.058 204.719 29.678 204.481 29.341C203.123 27.415 200.304 27.534 199.164 29.615C198.231 31.315 198.281 33.14 198.916 34.924C199.371 36.2 200.385 36.823 201.731 36.892C203.322 36.975 204.438 36.308 204.971 34.74Z"/><path d="M215.394 28.326C215.182 28.733 214.933 29.21 214.655 29.742L212.224 29.742C212.229 27.978 212.999 26.771 214.461 26.049C216.28 25.152 218.136 25.269 219.894 26.228C221.74 27.235 222.395 29.59 221.237 31.461C220.545 32.581 219.545 33.516 218.64 34.495C217.962 35.23 217.215 35.903 216.499 36.603C216.553 36.741 216.608 36.88 216.663 37.018L221.922 37.018L221.922 39.213L212.351 39.213L212.351 37.229C213.837 35.827 215.388 34.375 216.924 32.907C217.451 32.403 217.984 31.892 218.434 31.321C219.192 30.36 219.258 29.421 218.718 28.624C218.16 27.801 217.161 27.569 215.947 27.995C215.78 28.054 215.635 28.179 215.394 28.326Z"/>' } };
const NAMES = ["freed", "hipaa", "soc2", "certification", "loved-by"];
const TYPES = ["full", "icon", "text"];
const COLORS = { primary: "var(--logo-color-primary)", secondary: "var(--logo-color-secondary)", white: "var(--neutral-50)" };
const LABELS = { freed: "Freed", hipaa: "HIPAA compliant", soc2: "SOC 2", certification: "HIPAA compliant and SOC 2", "loved-by": "Loved by clinicians" };
function Logo({ name = "freed", type = "full", color = "primary", height, title, style }) {
  if (NAMES.indexOf(name) === -1) {
    console.warn('Logo: unknown name "' + name + '". Use one of: ' + NAMES.join(", "));
    name = "freed";
  }
  if (name === "freed" && TYPES.indexOf(type) === -1) {
    console.warn('Logo: unknown type "' + type + '". Use one of: ' + TYPES.join(", "));
    type = "full";
  }
  const key = name === "freed" ? "freed-" + type : name;
  const a = ART[key];
  const vb = a.viewBox.split(" ").map(Number);
  const h = Number(height) || vb[3];
  const w = Math.round(h * vb[2] / vb[3] * 100) / 100;
  const fill = COLORS[color] || color;
  const label = title || LABELS[name] + (name === "freed" && type === "icon" ? " mark" : "");
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      role: "img",
      "aria-label": label,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: a.viewBox,
      width: w,
      height: h,
      style: { display: "inline-block", flexShrink: 0, fill, color: fill, ...style },
      dangerouslySetInnerHTML: { __html: "<title>" + label + "</title>" + a.paths }
    }
  );
}
Logo.names = NAMES;
Logo.types = TYPES;

Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/logos/Logo.jsx", error: String((e && e.message) || e) }); }

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

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Logo = __ds_scope.Logo;

})();
