/**
 * A Freed surface — glass, bubble, glow or petri dish — matching the Figma card styles.
 */
export interface CardProps {
  /** Surface treatment. `glass` is the default Freed card. */
  effect?: 'glass' | 'bubble' | 'glow' | 'petri';
  /** Glass tint (Figma "Glass Cards/bg/*") or glow variant (Figma "glow-card/*").
   *  Glass: `primary` is the clear neutral glass, `secondary` is purple; plus alternate-01 (saline),
   *  alternate-02 (x-ray), alternate-03 (pepto), success and error.
   *  Glow: primary, secondary, alternate-01, alternate-02, alternate-03. Ignored by bubble and petri. */
  color?: 'primary' | 'secondary' | 'alternate-01' | 'alternate-02' | 'alternate-03' | 'success' | 'error';
  /** Glass and bubble elevation (Figma "glass-card/elevation-*", "bubble-card/elevation-*"). One layer only — never stack elevation. */
  elevation?: 'none' | 'small' | 'primary';
  /** White text — for a card on a dark ground. In the dark theme text already switches. */
  inverted?: boolean;
  /** Title line (body/medium-bold). */
  title?: string;
  /** Supporting line (body/primary). */
  body?: string;
  /** Corner radius override (defaults: glass/petri border-radius-primary 16px, bubble/glow border-radius-large 32px). */
  radius?: number | string;
  style?: React.CSSProperties;
  /** Content of a `petri` dish — product imagery only, never text. */
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
