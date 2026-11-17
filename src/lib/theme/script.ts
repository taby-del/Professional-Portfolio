import { THEME_ATTRIBUTE, THEME_STORAGE_KEY } from "./constants";

/**
 * Runs synchronously in <head>, before the first paint (no theme flash).
 * Applies a saved choice only if it is exactly "light" or "dark", so a
 * tampered localStorage value can never inject anything into the page.
 * With no saved choice the page stays light (`color-scheme: light`).
 */
const key = JSON.stringify(THEME_STORAGE_KEY);
const attribute = JSON.stringify(THEME_ATTRIBUTE);

export const THEME_INIT_SCRIPT = [
  "(function(){try{",
  `var t=localStorage.getItem(${key});`,
  `if(t==="light"||t==="dark")document.documentElement.setAttribute(${attribute},t);`,
  "}catch(e){}})();",
].join("");
