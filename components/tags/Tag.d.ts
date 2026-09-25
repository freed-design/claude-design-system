/**
 * A pill holding a label and, optionally, a glyph — 36px tall, fully rounded.
 */
export interface TagProps {
  /** Label text. Sentence case, short. */
  label?: string;
  /** Phosphor (regular) glyph name. Omit for a label-only pill. */
  icon?: string | null;
  /** Which side the glyph sits on. */
  iconPosition?: 'leading' | 'trailing';
  /** Any brand hue, in a subtle (pale fill, dark text) or `-strong`
   *  (dark fill, white text) family. Both pass AA at 14px. */
  color?: 'purple' | 'saline' | 'pepto' | 'xray' | 'green' | 'yellow' | 'red' | 'coral' | 'neutral'
    | 'purple-strong' | 'saline-strong' | 'pepto-strong' | 'xray-strong' | 'green-strong' | 'red-strong' | 'ink-strong';
  /** Escape hatch for a fill outside the named set — check the contrast yourself. */
  bg?: string;
  /** Escape hatch for the text colour. */
  fg?: string;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
