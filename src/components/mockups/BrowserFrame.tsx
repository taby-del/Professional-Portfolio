import type { ReactNode } from "react";
import { COVER_LABELS } from "@/data/projects";

/**
 * Illustrative browser window: "• • • ILLUSTRATIVE PREVIEW" title bar and
 * a white body. Fills its parent, which sets position and size.
 */
export function BrowserFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-card bg-background shadow-[0_18px_40px_-28px_rgb(8_13_22/0.35)]">
      <div className="flex items-center gap-4 border-b border-border/60 bg-surface/60 px-3 py-2">
        <span className="flex gap-1">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="size-1 rounded-full bg-muted" />
          ))}
        </span>
        <span className="font-mono text-eyebrow text-muted uppercase">
          {COVER_LABELS.preview}
        </span>
      </div>
      <div className="flex min-h-0 flex-1">{children}</div>
    </div>
  );
}
