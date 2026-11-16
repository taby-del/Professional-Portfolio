/**
 * "● Open to opportunities". The dot gently pulses to signal availability
 * (CSS only; still for visitors who prefer reduced motion).
 */
export function StatusBadge({ label }: { label: string }) {
  return (
    <p className="flex items-center gap-2 font-mono text-micro text-muted">
      <span aria-hidden="true" className="relative flex size-1.5">
        <span className="absolute inset-0 rounded-full bg-primary opacity-60 motion-safe:animate-ping" />
        <span className="relative size-1.5 rounded-full bg-primary" />
      </span>
      {label}
    </p>
  );
}
