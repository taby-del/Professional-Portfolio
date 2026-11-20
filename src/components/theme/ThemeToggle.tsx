"use client";

import { Contrast } from "lucide-react";
import { ICON_CONTROL } from "@/components/ui/icon-control";
import { useTheme } from "@/hooks/useTheme";

/**
 * Switches the whole site between Light and Dark. The choice is saved and
 * shared across routes and tabs (src/lib/theme). Until hydration the theme
 * is unknown, so the button stays disabled to avoid a mismatch.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={theme === null}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={ICON_CONTROL}
    >
      <Contrast aria-hidden="true" className="size-[1.125rem]" strokeWidth={1.75} />
    </button>
  );
}
