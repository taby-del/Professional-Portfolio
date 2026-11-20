"use client";

import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { MenuButton } from "./MenuButton";
import { MobileMenuPanel } from "./MobileMenuPanel";

const MENU_ID = "mobile-menu";

/**
 * Compact-navigation menu (below 1280 px). Built on the native <dialog>
 * element, which gives the handoff's requirements for free: focus is
 * trapped inside, Escape closes, focus returns to the trigger, and the
 * page behind is inert. `cta` is the server-rendered Hire Me button.
 */
export function MobileMenu({ cta }: { cta: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const show = () => {
    dialog.current?.showModal();
    setOpen(true);
  };
  const close = () => dialog.current?.close();

  // Close after navigating to another page.
  useEffect(() => {
    dialog.current?.close();
  }, [pathname]);

  return (
    <>
      <MenuButton expanded={open} controls={MENU_ID} onClick={show} />
      <dialog
        ref={dialog}
        id={MENU_ID}
        aria-label="Site menu"
        onClose={() => setOpen(false)}
        onClick={(event) => event.target === dialog.current && close()}
        className="mobile-menu"
      >
        <MobileMenuPanel open={open} onClose={close} cta={cta} />
      </dialog>
    </>
  );
}
