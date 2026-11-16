"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath, NAV_ITEMS } from "@/data/navigation";

/**
 * Desktop navigation (1280 px and up). Hover: readable blue label on a
 * subtle tint, 150 ms. Active page: brand blue, semibold, and announced
 * to screen readers with aria-current="page".
 */
export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1.5">
      {NAV_ITEMS.map(({ href, label }) => {
        const active = isActivePath(pathname, href);
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={`inline-flex min-h-touch items-center rounded-control px-2 text-label transition-colors duration-150 hover:bg-tint hover:text-accent-readable ${
                active ? "font-semibold text-primary" : "text-muted"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
