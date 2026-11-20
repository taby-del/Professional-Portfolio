/** Shared theme constants, used by the inline script and the client store. */
export const THEMES = ["light", "dark"] as const;
export type Theme = (typeof THEMES)[number];

/** localStorage key holding the visitor's explicit choice. */
export const THEME_STORAGE_KEY = "theme";

/** Attribute on <html> that forces a theme (see src/styles/tokens.css). */
export const THEME_ATTRIBUTE = "data-theme";

/** Class added to <html> during a switch (src/styles/theme-transition.css). */
export const THEME_TRANSITION_CLASS = "theme-transition";

/** Handoff: colours update together over 180 ms. */
export const THEME_TRANSITION_MS = 180;

/** Type guard: only these exact values are ever written to the DOM. */
export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}
