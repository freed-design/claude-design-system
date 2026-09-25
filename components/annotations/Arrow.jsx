// figma node: 12985:1805 Arrow (5 variants) — digital redraw: constant stroke width
const __aSt = (w) => ({ fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round" });
const __aWrap = (props, w, h, paths) => (
  <div className={props.className} style={{ width: w, height: h, position: "relative", color: "var(--green-0, #62E774)", ...props.style }}>
    <svg width={w} height={h} viewBox={"0 0 " + w + " " + h} style={{ position: "absolute", left: 0, top: 0 }}>
      {paths.map((d, i) => <path key={i} d={d} {...__aSt(props.strokeWidth)} />)}
    </svg>
  </div>
);
export function Arrow(_p = {}) {
  const props = { ..._p, type: _p.type ?? "01", strokeWidth: _p.strokeWidth ?? 3 };
  if (props.style && props.style.color) {
    console.warn('Arrow: annotations are always Freed Focus green (#62E774) — the color override was ignored.');
    props.style = { ...props.style }; delete props.style.color;
  }
  const __impls = {
    "type=01": () => __aWrap(props, 70, 55, ["M4 50 C 18 31, 38 15, 62 8", "M51 4.5 L 63.5 7.5 L 56 19"]),
    "type=02": () => __aWrap(props, 61, 47, ["M4 5 C 24 9, 42 22, 54 39", "M55 26.5 L 56 41.5 L 42 39.5"]),
    "type=03": () => __aWrap(props, 68, 84, ["M60 4 C 24 16, 15 48, 33 78", "M21 68.5 L 34.5 80 L 43 66"]),
    "type=04": () => __aWrap(props, 43, 20, ["M3 13 C 14 10, 25 9, 37 9.5", "M30 3.5 L 38.5 9.3 L 31 15.5"]),
    "type=05": () => __aWrap(props, 80, 25, ["M3 19 C 24 13, 52 10, 74 10", "M65 4 L 75.5 9.8 L 66 16.5"]),
  };
  return (__impls["type=" + props.type] ?? __impls["type=01"])();
}
export default Arrow;
