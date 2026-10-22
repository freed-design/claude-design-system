/**
 * A Freed button — the Figma "Buttons" component: primary or secondary, in four sizes, with optional glyphs.
 */
export interface ButtonProps {
  /** Button text (sentence case, a verb first: "Start for free"). `children` may be used instead. */
  label?: string;
  children?: React.ReactNode;
  /** Figma "Type". primary = solid purple-600 that darkens to purple-800 on hover; secondary = transparent with a purple 1px border that fades to 50% on hover. */
  variant?: 'primary' | 'secondary';
  /** Figma "Size": xsmall 38px tall (14px text), small 56px (18px), primary 70px (20px), large 74px (20px, larger glyphs). */
  size?: 'xsmall' | 'small' | 'primary' | 'large';
  /** Phosphor (regular) glyph before the label. */
  icon?: string | null;
  /** Phosphor (regular) glyph after the label — for direction ("caret-right", "arrow-right"). */
  trailingIcon?: string | null;
  /** Render as a link. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  /** Reduced opacity, no hover. */
  disabled?: boolean;
  /** Force a Figma state for documentation; omit in product use so hover follows the pointer. */
  state?: 'default' | 'hover';
  /** The HTML button type. */
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
