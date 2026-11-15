/**
 * Content-Security-Policy (CSP): tells the browser which sources it may load
 * scripts, styles, images, etc. from. Blocks injected third-party code (XSS).
 *
 * Static ("without nonces") policy from the Next.js CSP guide: keeps pages
 * statically rendered. 'unsafe-eval' is added in development only, where
 * React needs it for debugging.
 */
type Directives = Record<string, readonly string[]>;

const isDev = process.env.NODE_ENV === "development";

const DIRECTIVES: Directives = {
  "default-src": ["'self'"],
  "script-src": ["'self'", "'unsafe-inline'", ...(isDev ? ["'unsafe-eval'"] : [])],
  "style-src": ["'self'", "'unsafe-inline'"],
  "img-src": ["'self'", "blob:", "data:"],
  "font-src": ["'self'"],
  "connect-src": ["'self'", ...(isDev ? ["ws:"] : [])],
  "object-src": ["'none'"],
  "base-uri": ["'self'"],
  "form-action": ["'self'"],
  "frame-ancestors": ["'none'"],
  // Production only: the local dev server runs over plain HTTP.
  ...(isDev ? {} : { "upgrade-insecure-requests": [] }),
};

/** Serializes directives into a header value: "name a b; name2 c; ...". */
export function buildCsp(directives: Directives = DIRECTIVES): string {
  return Object.entries(directives)
    .map(([name, sources]) => [name, ...sources].join(" "))
    .join("; ");
}
