import localFont from "next/font/local";

/**
 * Self-hosted variable fonts from Fontsource (no Google Fonts request at
 * build or run time). next/font preloads them and generates size-matched
 * fallbacks to prevent layout shift while they load. Paths must be string
 * literals (next/font requirement).
 *
 * Inter "latin" covers English and French accents (é, à, ç, ...). The
 * "latin-ext" file, for rarer characters such as œ, is listed second in
 * the font stack and only downloads if a page actually uses them.
 */
export const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter-latin",
  weight: "100 900",
  display: "swap",
});

export const interExtended = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2",
  variable: "--font-inter-ext",
  weight: "100 900",
  display: "swap",
  preload: false,
});

export const jetbrainsMono = localFont({
  src: "../../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
  preload: false,
});

/** Class names that expose all three font CSS variables on <html>. */
export const fontVariables = [inter, interExtended, jetbrainsMono]
  .map((font) => font.variable)
  .join(" ");
