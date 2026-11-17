import { isTheme, THEME_STORAGE_KEY, type Theme } from "./constants";
import { applyTheme, getResolvedTheme, persistTheme } from "./dom";

/**
 * External store for useSyncExternalStore. One global theme for all routes,
 * synced across tabs (storage event). Light is the default; the OS
 * setting is deliberately not followed (owner request).
 */
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());

function onStorage(event: StorageEvent): void {
  if (event.key !== THEME_STORAGE_KEY) return;
  applyTheme(isTheme(event.newValue) ? event.newValue : null);
  notify();
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  if (listeners.size === 1) {
    window.addEventListener("storage", onStorage);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.removeEventListener("storage", onStorage);
    }
  };
}

export const getSnapshot = (): Theme => getResolvedTheme();

/** Unknown on the server: the toggle renders neutrally until hydrated. */
export const getServerSnapshot = (): Theme | null => null;

export function setTheme(theme: Theme): void {
  applyTheme(theme);
  persistTheme(theme);
  notify();
}
