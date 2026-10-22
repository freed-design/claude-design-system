/**
 * Phosphor glyph inside an on-brand Freed container — the Figma "icon/container" component.
 */
export interface IconProps {
  /** Phosphor (regular) glyph name, e.g. "stethoscope", "microphone", "pulse". */
  name?: string;
  /** Container colour (Figma "Icon/bg/*"). `secondary` is a white container with a purple glyph; all others carry a white glyph. */
  color?: 'primary' | 'secondary' | 'alternate-01' | 'alternate-02' | 'alternate-03' | 'success' | 'error';
  /** `flat` solid fill, or `glass` (Glass Cards tint, 4px backdrop blur, icon/glass effect). Glass needs a backdrop. */
  effect?: 'flat' | 'glass';
  /** Tile (border-radius-small; xsmall at the small size) or circle. */
  shape?: 'tile' | 'circle';
  /** `primary` = 50px container / 26px glyph; `small` = 20px / 12px; or a number of px. */
  size?: 'primary' | 'small' | number | string;
  /** @deprecated Use `effect`. Mapped: flat-* → flat, glass-* → glass. */
  treatment?: string;
}
export function Icon(props: IconProps): JSX.Element;
