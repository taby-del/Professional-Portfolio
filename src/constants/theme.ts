/**
 * Brand values for use in TypeScript (e.g. Motion animations, canvas, meta
 * theme-color). Keep in sync with src/styles/tokens.css, which remains the
 * source of truth for styling. Theme names live in src/lib/theme.
 */
export const BRAND_COLORS = {
  primary: "#08A3FB",
  primaryDeep: "#1078BC",
  backgroundLight: "#FFFFFF",
  backgroundDark: "#080D16",
} as const;

export const BRAND_GRADIENT = `linear-gradient(135deg, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.primaryDeep} 100%)`;
