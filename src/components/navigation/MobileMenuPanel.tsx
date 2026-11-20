"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { MobileNavList } from "./MobileNavList";

type MobileMenuPanelProps = {
  open: boolean;
  onClose: () => void;
  cta: ReactNode;
};

/**
 * Menu content, matched to the Figma mobile-menu frames: close bar,
 * "Navigate the portfolio", six destinations, Hire Me, languages.
 */
export function MobileMenuPanel({ open, onClose, cta }: MobileMenuPanelProps) {
  return (
    <div className="flex flex-col gap-3 p-6">
      <button
        type="button"
        onClick={onClose}
        className="flex min-h-touch items-center gap-1.5 rounded-control bg-surface px-3 text-body font-semibold text-foreground transition-colors duration-150 hover:bg-tint"
      >
        Close menu
        <X aria-hidden="true" className="size-4" strokeWidth={2.5} />
      </button>

      <h2 className="pt-3 text-title font-semibold text-foreground">
        Navigate the portfolio
      </h2>

      <MobileNavList open={open} onNavigate={onClose} />

      <div className="pt-1">{cta}</div>
      <p className="text-caption text-muted">English &amp; French</p>
    </div>
  );
}
