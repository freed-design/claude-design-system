/**
 * Phosphor glyph inside an on-brand Freed container (tile or circle).
 */
export interface IconProps {
  /** Phosphor (regular) glyph name, e.g. "stethoscope", "microphone", "pulse". */
  name?: string;
  /** Container treatment. */
  treatment?: 'flat-white' | 'flat-tonal' | 'glass-white' | 'glass-tonal';
  /** Container shape: rounded tile (30% radius) or circle. */
  shape?: 'tile' | 'circle';
  /** Color family. */
  color?: 'primary' | 'green' | 'saline' | 'xray' | 'pepto' | 'error' | 'neutral';
  /** Container edge length in px; the glyph is 56% of it. A numeric string ("48") is coerced. */
  size?: number | string;
}
export function Icon(props: IconProps): JSX.Element;
