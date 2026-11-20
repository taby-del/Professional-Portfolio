import Link from "next/link";
import { NAV_ITEMS } from "@/data/navigation";

/** Secondary navigation in the footer: small, muted, wraps on phones. */
export function FooterNav() {
  return (
    <nav aria-label="Footer">
      <ul className="flex flex-wrap items-center gap-x-1 gap-y-1">
        {NAV_ITEMS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="inline-flex min-h-touch items-center rounded-control px-2 text-caption text-muted transition-colors duration-150 hover:text-accent-readable"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
