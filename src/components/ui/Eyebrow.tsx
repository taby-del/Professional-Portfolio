import type { ReactNode } from "react";

/**
 * Small label above a title: "PRIMARY PRACTICE", "EDUCATION".
 * 11 px JetBrains Mono, uppercase, brand blue.
 */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-micro text-primary uppercase">{children}</p>
  );
}
