import { THEME_INIT_SCRIPT } from "@/lib/theme/script";

/**
 * Inline script for <head>: applies the saved theme before first paint.
 * Pattern from the Next.js guide "Preventing flash before hydration".
 * Allowed by the CSP (`script-src 'unsafe-inline'`, src/config/security).
 */
export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />;
}
