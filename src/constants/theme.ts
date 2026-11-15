/**
 * Brand values for use in TypeScript (e.g. Motion animations, canvas, meta
 * theme-color). Keep in sync with the CSS tokens in src/app/globals.css,
 * which remain the source of truth for styling.
 */
export const BRAND_COLORS = {
  primary: "#08A3FB",
  primaryDeep: "#1078BC",
} as const;

export const BRAND_GRADIENT = `linear-gradient(135deg, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.primaryDeep} 100%)`;

export const THEMES = ["light", "dark", "system"] as const;
export type Theme = (typeof THEMES)[number];
