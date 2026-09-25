/**
 * A full-bleed Aurora background scene, wrapping the content that sits on it.
 */
export interface AuroraFullBleedProps {
  /** Which composition. More are being added to the library. */
  composition?: 'orb' | 'wave' | 'funnel';
  /** Colorway. Availability differs per composition — `orb` has all ten,
   *  `wave` only `purple`, `funnel` has `purple` / `purple-peach` / `moss-aqua`. */
  colorway?: 'purple' | 'purple-soft' | 'purple-yellow' | 'purple-peach' | 'saline' | 'saline-aqua' | 'xray' | 'xray-aqua' | 'pepto' | 'pepto-yellow' | 'coral' | 'moss-aqua';
  /** Slow ambient drift. Respects prefers-reduced-motion. */
  drift?: boolean;
  /** object-position for the scene, e.g. "left center" to push the shapes off-centre. */
  position?: string;
  /** Content rendered above the aurora. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function AuroraFullBleed(props: AuroraFullBleedProps): JSX.Element;
