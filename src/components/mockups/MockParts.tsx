import type { ReactNode } from "react";

/** Small gradient call-to-action inside a phone mockup. */
export function MockButton({ children }: { children: ReactNode }) {
  return (
    <span className="mt-auto flex h-8 items-center justify-center rounded-full bg-brand-gradient text-caption font-semibold text-on-primary">
      {children}
    </span>
  );
}

/** Soft rounded block with a blue dot and a label (list rows, inputs). */
export function MockRow({ children, dot = "primary" }: { children: ReactNode; dot?: "primary" | "muted" }) {
  return (
    <span className="flex items-center gap-2 rounded-control bg-surface px-3 py-2 text-caption text-foreground">
      <span className={`size-1.5 rounded-full ${dot === "primary" ? "bg-primary" : "bg-muted"}`} />
      {children}
    </span>
  );
}

/** Small blue pill used for statuses and chips. */
export function MockChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-tint px-3 py-1 text-eyebrow font-semibold text-accent-readable">
      {children}
    </span>
  );
}
