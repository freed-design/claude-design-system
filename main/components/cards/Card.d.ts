/**
 * A Freed surface: frosted glass, bubble, or glow-bordered card.
 */
export interface CardProps {
  /** Surface treatment. `glass` is the default Freed card. */
  effect?: 'glass' | 'bubble' | 'glow' | 'petri';
  /** Tint family. Glass uses it as a translucent wash; petri as its `-100` fill.
   *  Ignored by bubble/glow. Any of the seven works;
   *  `neutral` is the white/clear glass (white at 60%, vs 70% for the tints). */
  color?: 'primary' | 'neutral' | 'green' | 'saline' | 'xray' | 'pepto' | 'error';
  /** Drop-shadow step. One layer only — never stack elevation. */
  elevation?: 'none' | 'small' | 'medium' | 'large';
  /** Glow gradient stops (>=2 hex values); only used when effect="glow". */
  glow?: string[];
  /** Use white text — for glass cards sitting on a dark panel. */
  inverted?: boolean;
  /** Bold title line. */
  title?: string;
  /** Supporting body line. */
  body?: string;
  /** Corner radius override in px (defaults: glass/petri 16, bubble/glow 18). A numeric string is coerced; any other CSS length passes through. */
  radius?: number | string;
  style?: React.CSSProperties;
  /** Content of a `petri` dish — product imagery only, never text.
   *  Ignored by the other effects, which use `title` / `body`. */
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
