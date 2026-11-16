"use client";

import { m } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath, NAV_ITEMS } from "@/data/navigation";
import { STAGGER } from "@/lib/motion/tokens";
import { menuItem } from "@/lib/motion/menu-variants";
import { staggerGroup } from "@/lib/motion/variants";

type MobileNavListProps = {
  open: boolean;
  onNavigate: () => void;
};

/** Menu destinations; they rise in one after another when the menu opens. */
export function MobileNavList({ open, onNavigate }: MobileNavListProps) {
  const pathname = usePathname();

  return (
    <m.ul
      className="flex flex-col gap-3"
      variants={staggerGroup(STAGGER.tight, 0.05)}
      initial="hidden"
      animate={open ? "visible" : "hidden"}
    >
      {NAV_ITEMS.map(({ href, label }) => {
        const active = isActivePath(pathname, href);
        return (
          <m.li key={href} variants={menuItem}>
            <Link
              href={href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-touch items-center rounded-control bg-surface px-3 text-body transition-colors duration-150 hover:bg-tint hover:text-accent-readable ${
                active ? "font-semibold text-primary" : "text-foreground"
              }`}
            >
              {label}
            </Link>
          </m.li>
        );
      })}
    </m.ul>
  );
}
