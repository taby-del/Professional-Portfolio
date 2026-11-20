import type { ReactNode } from "react";

/**
 * Page eyebrow above a title: "02 / ABOUT", "05 / EXPERIENCE".
 * 11 px JetBrains Mono, uppercase, brand blue.
 */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-micro text-primary uppercase">{children}</p>
  );
}
