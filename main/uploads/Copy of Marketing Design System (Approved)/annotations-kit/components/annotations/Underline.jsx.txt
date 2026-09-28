// figma node: 12985:1740 Underline (6 variants) — digital redraw: constant stroke width
const __uSt = (w) => ({ fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round" });
const __uWrap = (props, w, h, paths) => (
  <div className={props.className} style={{ width: w, height: h, position: "relative", color: "var(--green-0, #62E774)", ...props.style }}>
    <svg width={w} height={h} viewBox={"0 0 " + w + " " + h} style={{ position: "absolute", left: 0, top: 0 }}>
      {paths.map((d, i) => <path key={i} d={d} {...__uSt(props.strokeWidth)} />)}
    </svg>
  </div>
);
export function Underline(_p = {}) {
  const props = { ..._p, type: _p.type ?? "01", strokeWidth: _p.strokeWidth ?? 3 };
  if (props.style && props.style.color) {
    console.warn('Underline: annotations are always Freed Focus green (#62E774) — the color override was ignored.');
    props.style = { ...props.style }; delete props.style.color;
  }
  const __impls = {
    "type=01": () => __uWrap(props, 215, 18, ["M2 5.5 C 70 2, 150 2, 213 4.5", "M3 14 C 62 9, 155 9, 212 11.8"]),
    "type=02": () => __uWrap(props, 230, 15, ["M3 4.5 C 80 2, 160 2, 227 3.5", "M8 11.8 C 90 9.5, 170 9.5, 222 11"]),
    "type=03": () => __uWrap(props, 105, 11, ["M2 7 C 6 3.2, 12 3.2, 17 7 S 28 10.8, 33 7 S 44 3.2, 49 7 S 60 10.8, 65 7 S 76 3.2, 81 7 S 92 10.8, 97 7 L 103 5.8"]),
    "type=04": () => __uWrap(props, 183, 13, ["M3 10 L 20 3.5 L 37 10 L 54 3.5 L 71 10 L 88 3.5 L 105 10 L 122 3.5 L 139 10 L 156 3.5 L 173 10 L 180 7"]),
    "type=05": () => __uWrap(props, 199, 9, ["M2 6.5 C 60 2.5, 145 2.5, 197 5.2"]),
    "type=06": () => __uWrap(props, 132, 8, ["M2 5.5 C 38 2.5, 96 2.5, 130 5"]),
  };
  return (__impls["type=" + props.type] ?? __impls["type=01"])();
}
export default Underline;
