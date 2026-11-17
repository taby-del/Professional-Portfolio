import {
  isTheme,
  THEME_ATTRIBUTE,
  THEME_STORAGE_KEY,
  THEME_TRANSITION_CLASS,
  THEME_TRANSITION_MS,
  type Theme,
} from "./constants";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
let transitionTimer: ReturnType<typeof setTimeout> | undefined;

/** The theme currently shown: the visitor's choice, else light (default). */
export function getResolvedTheme(): Theme {
  const forced = document.documentElement.getAttribute(THEME_ATTRIBUTE);
  if (isTheme(forced)) return forced;
  return "light";
}

/** Sets the theme on <html>, cross-fading colours unless motion is reduced. */
export function applyTheme(theme: Theme | null): void {
  const root = document.documentElement;
  const animate = !window.matchMedia(REDUCED_MOTION_QUERY).matches;

  if (animate) {
    clearTimeout(transitionTimer);
    root.classList.add(THEME_TRANSITION_CLASS);
    transitionTimer = setTimeout(
      () => root.classList.remove(THEME_TRANSITION_CLASS),
      THEME_TRANSITION_MS,
    );
  }

  if (theme) root.setAttribute(THEME_ATTRIBUTE, theme);
  else root.removeAttribute(THEME_ATTRIBUTE);
}

/** Saves the choice; storage can be unavailable (private mode, blocked). */
export function persistTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // The choice still applies for this page view.
  }
}
