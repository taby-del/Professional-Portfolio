/** A destination in the main navigation. */
export type NavItem = {
  href: string;
  label: string;
};

/**
 * The six site destinations (docs/design-handoff.md). Shared by the
 * header, mobile menu and footer so they can never disagree.
 */
export const NAV_ITEMS: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

/** True when `href` is the page being viewed (Home matches only "/"). */
export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
