/**
 * First focusable element on every page: lets keyboard and screen-reader
 * users jump past the header straight to the page content. Hidden until
 * it receives keyboard focus.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only rounded-control bg-background px-4 py-3 text-label font-semibold text-accent-readable focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
    >
      Skip to content
    </a>
  );
}
