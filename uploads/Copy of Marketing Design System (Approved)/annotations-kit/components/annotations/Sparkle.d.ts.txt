import * as React from 'react';
export interface SparkleProps {
  className?: string;
  /** Position/size only — annotations are always Freed Focus green (#62E774); color overrides are ignored. */
  style?: React.CSSProperties;
  /** Stroke weight in px. Default 3 — scale up/down so it feels proportional to the asset. */
  strokeWidth?: number;
  type?: "01" | "02" | "03";
}
export declare const Sparkle: React.FC<SparkleProps>;
export default Sparkle;
