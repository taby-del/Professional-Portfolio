/**
 * Entrance animations start hidden (inline `opacity:0` written by the
 * server) and are revealed by JavaScript. If JavaScript is disabled or
 * fails to load, this <noscript> style shows all content immediately,
 * so the page is never blank. Placed in <head>; allowed by the CSP
 * (`style-src 'unsafe-inline'`).
 */
const CSS =
  '[style*="opacity:0"]{opacity:1!important;transform:none!important;filter:none!important}';

export function NoScriptReveal() {
  return (
    <noscript>
      <style>{CSS}</style>
    </noscript>
  );
}
