type PagePlaceholderProps = {
  title: string;
  step: number;
};

/**
 * Temporary content for routes whose design is built in a later step
 * (see README > Build roadmap). Keeps navigation fully testable now.
 */
export function PagePlaceholder({ title, step }: PagePlaceholderProps) {
  return (
    <section className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center gap-3 px-gutter py-section">
      <p className="font-mono text-caption text-accent-readable">
        Step {step} · coming soon
      </p>
      <h1 className="text-heading font-semibold text-foreground">{title}</h1>
      <p className="max-w-xl text-body text-muted">
        This page is being built from the approved design.
      </p>
    </section>
  );
}
