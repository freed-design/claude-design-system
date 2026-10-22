/**
 * A pill holding a label and optional glyphs — the Figma "icon/tag" component (36px tall, fully rounded).
 */
export interface TagProps {
  /** Label text (body/xsmall, 14px). Sentence case, one or two words. */
  label?: string;
  /** Phosphor (regular) glyph name for the leading glyph (20px). */
  icon?: string | null;
  /** Put `icon` after the label instead. */
  iconPosition?: 'leading' | 'trailing';
  /** A second glyph after the label. */
  trailingIcon?: string | null;
  /** Figma "Tags/bg/*". primary = purple-100 with purple text (passes AA). secondary (saline-500) and
   *  alternate-01 (pepto-400) carry white text and FAIL AA at 14px — flagged, kept as Figma defines them. */
  color?: 'primary' | 'secondary' | 'alternate-01';
  /** Escape hatch for the fill — check the contrast yourself. */
  bg?: string;
  /** Escape hatch for the text colour. */
  fg?: string;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
