/** Illustrative row of three stat cards with a short blue bar. */
export function MockStats({ labels }: { labels: readonly string[] }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {labels.map((label) => (
        <span
          key={label}
          className="flex flex-col gap-3 rounded-control bg-surface px-3 py-2.5 text-eyebrow text-muted"
        >
          {label}
          <span className="h-0.5 w-6 rounded-full bg-primary" />
        </span>
      ))}
    </div>
  );
}
