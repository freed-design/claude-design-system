/**
 * A single Aurora shape on transparency — the smallest aurora unit.
 */
export interface AuroraProps {
  /** Which organic shape. Only these three are exported so far; the other seven
   *  approved shapes (amoeba, boomerang, bounce, doggy, sloth, stanley, wave) warn
   *  and fall back until their PNGs land. */
  shape?: 'willytheworm' | 'pangolin' | 'slinky';
  /** Colour intensity. `slinky` has no soft export yet and falls back to intense. */
  vibe?: 'soft' | 'intense';
  /** Edge softness. */
  blur?: 'low' | 'high';
  /** Rendered width in px (or any CSS length). Height follows the aspect ratio. */
  width?: number | string;
  /** Slow ambient drift. Respects prefers-reduced-motion. */
  drift?: boolean;
  /** Override the asset directory (defaults to `assets/auroras/`). */
  assetBase?: string;
  style?: React.CSSProperties;
}
export function Aurora(props: AuroraProps): JSX.Element;
