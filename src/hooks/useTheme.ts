"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { Theme } from "@/lib/theme/constants";
import {
  getServerSnapshot,
  getSnapshot,
  setTheme,
  subscribe,
} from "@/lib/theme/store";

type UseTheme = {
  /** The theme shown now; null during server render / before hydration. */
  theme: Theme | null;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

/** Reads and changes the global site theme. */
export function useTheme(): UseTheme {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    setTheme(getSnapshot() === "dark" ? "light" : "dark");
  }, []);

  return { theme, setTheme, toggleTheme };
}
