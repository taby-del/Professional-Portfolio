import { buildCsp } from "./csp";

type Header = { key: string; value: string };

/**
 * HTTP security headers sent with every response.
 * Each line documents the attack it mitigates.
 */
export const SECURITY_HEADERS: readonly Header[] = [
  // Restricts where scripts/styles/etc. may load from (XSS, injection).
  { key: "Content-Security-Policy", value: buildCsp() },
  // Forces HTTPS for 2 years, including subdomains (protocol downgrade).
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Disallows embedding the site in frames (clickjacking). Legacy
  // fallback for CSP frame-ancestors.
  { key: "X-Frame-Options", value: "DENY" },
  // Stops browsers guessing MIME types (content-type confusion).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Sends only the origin to other sites (URL data leakage).
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disables browser features the portfolio never uses.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];
