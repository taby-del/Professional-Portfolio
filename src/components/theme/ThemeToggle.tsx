"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

/**
 * Switches the whole site between Light and Dark. The choice is saved and
 * shared across routes and tabs (src/lib/theme). Until hydration the theme
 * is unknown, so the button renders without an icon to avoid a mismatch.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={theme === null}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="inline-flex size-touch items-center justify-center rounded-control border border-border text-foreground transition-colors duration-150 hover:bg-tint hover:text-accent-readable"
    >
      {theme && <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />}
    </button>
  );
}
