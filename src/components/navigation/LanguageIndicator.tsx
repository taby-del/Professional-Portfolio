/**
 * Shows the site language ("EN") in the header's 40 px control style.
 *
 * Not a toggle yet: the handoff says changing the control alone must not
 * imply the page is localised, and French copy has not been supplied.
 * When the French dictionary exists, this becomes the EN/FR switcher.
 */
export function LanguageIndicator() {
  return (
    <span
      title="French version coming soon"
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-control border border-border bg-surface text-caption font-bold text-foreground"
    >
      <span aria-hidden="true">EN</span>
      <span className="sr-only">Site language: English</span>
    </span>
  );
}
