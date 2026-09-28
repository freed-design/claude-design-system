import * as React from 'react';
export interface ArrowProps {
  className?: string;
  /** Position/size only — annotations are always Freed Focus green (#62E774); color overrides are ignored. */
  style?: React.CSSProperties;
  /** Stroke weight in px. Default 3 — scale up/down so it feels proportional to the asset. */
  strokeWidth?: number;
  type?: "01" | "02" | "03" | "04" | "05";
}
export declare const Arrow: React.FC<ArrowProps>;
export default Arrow;
