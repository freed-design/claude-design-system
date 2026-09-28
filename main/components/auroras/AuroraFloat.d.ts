/**
 * A Float — two single Auroras merged into one amorphous shape, on transparency.
 */
export interface AuroraFloatProps {
  /** Which float composition. Six exist in the library so far. */
  float?: 'doubleboom' | 'drift' | 'ember' | 'clover' | 'curl' | 'swirl';
  /** Colorway of that float — valid values depend on the float. */
  colorway?: 'purple-fuchsia' | 'purple-lilac' | 'coral-yellow' | 'pepto' | 'sky' | 'purple' | 'purple-sky';
  /** Rendered width in px (or any CSS length). Height follows the aspect ratio. */
  width?: number | string;
  /** Slow ambient drift. Respects prefers-reduced-motion. */
  drift?: boolean;
  /** Override the asset directory (defaults to `assets/auroras/`). */
  assetBase?: string;
  style?: React.CSSProperties;
}
export function AuroraFloat(props: AuroraFloatProps): JSX.Element;
