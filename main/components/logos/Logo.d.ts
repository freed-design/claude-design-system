/**
 * Freed logos and trust badges — the Figma "Logos/*" components, as inline vector art.
 */
export interface LogoProps {
  /** Which mark: the Freed logo, or a badge — HIPAA, SOC 2, the combined certification lockup, or "Loved by 26k+ clinicians". */
  name?: 'freed' | 'hipaa' | 'soc2' | 'certification' | 'loved-by';
  /** Freed only: `full` lockup (mark + wordmark), `icon` (the mark alone) or `text` (the wordmark alone). */
  type?: 'full' | 'icon' | 'text';
  /** `primary` = logo-color-primary (black; white in the dark theme), `secondary` = logo-color-secondary (purple-600; purple-300 in the dark theme), `white`, or any CSS colour. */
  color?: 'primary' | 'secondary' | 'white' | string;
  /** Height in px; width follows the artwork. Defaults to the Figma size (Freed 20–21px, HIPAA 41, SOC 2 78, certification 67, loved-by 71). */
  height?: number | string;
  /** Accessible name override. */
  title?: string;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
