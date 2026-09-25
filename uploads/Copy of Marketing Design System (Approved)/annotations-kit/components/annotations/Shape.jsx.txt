// figma node: 12985:1828 Shape (4 variants) — constant-width stroke, path from brand Shape.svg
const __sPath = "M105.414 34.2C90.0568 37.1942 50.593 42.6913 30.1974 38.6913C7.63454 34.2663 1.50006 28.246 1.5 21.9123C1.49995 16.2811 13.1175 1.49997 51.2549 1.5C78.0337 1.50002 110.276 10.6154 119.666 21.9123C129.809 34.1147 96.7909 47.0423 47.4691 36.7717";
const __sWrap = (props, w, h) => (
  <div className={props.className} style={{ width: w, height: h, position: "relative", color: "var(--green-0, #62E774)", ...props.style }}>
    <svg width={w} height={h} viewBox="0 0 123 42" preserveAspectRatio="none" style={{ position: "absolute", left: 0, top: 0 }}>
      <path d={__sPath} fill="none" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  </div>
);
export function Shape(_p = {}) {
  const props = { ..._p, type: _p.type ?? "01", strokeWidth: _p.strokeWidth ?? 3 };
  if (props.style && props.style.color) {
    console.warn('Shape: annotations are always Freed Focus green (#62E774) — the color override was ignored.');
    props.style = { ...props.style }; delete props.style.color;
  }
  const __impls = {
    "type=01": () => __sWrap(props, 123, 42),
    "type=02": () => __sWrap(props, 156, 57.4),
    "type=03": () => __sWrap(props, 124, 53),
    "type=04": () => __sWrap(props, 156, 45),
  };
  return (__impls["type=" + props.type] ?? __impls["type=01"])();
}
export default Shape;
