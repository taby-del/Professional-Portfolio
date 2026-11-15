# Professional Portfolio

Personal professional portfolio showcasing frontend development, UI/UX design and AI-assisted software development.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4
- [Lucide React](https://lucide.dev) for icons
- [Motion](https://motion.dev) for animations
- ESLint (`eslint-config-next`)

## Getting started

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the development server        |
| `npm run build` | Create a production build           |
| `npm run start` | Serve the production build          |
| `npm run lint`  | Run ESLint                          |

## Project structure

```
public/
  images/
    profile/            Profile photos
    projects/           Project screenshots (yiino, innofrit, yiino-business)
  icons/                Static icons and logos
  documents/            Downloadable files (e.g. CV)
src/
  app/                  App Router: layout, pages, global styles
  components/
    layout/             Page shells: header, footer, containers
    navigation/         Navbar, menus, links
    sections/           Page sections (hero, about, projects, ...)
    ui/                 Reusable primitives (buttons, cards, badges, ...)
    theme/              Theme provider and light/dark toggle
  hooks/                Custom React hooks
  lib/                  Framework-agnostic helpers and utilities
  data/                 Typed static content (projects, experience, skills)
  types/                Shared TypeScript types
  constants/            App-wide constants (site metadata, brand values)
```

Imports use the `@/*` alias for `src/*`, for example `import { SITE } from "@/constants/site"`.

## Design system

Design tokens live in [`src/app/globals.css`](src/app/globals.css) as CSS variables and are exposed to Tailwind through `@theme`.

| Token                     | Value                                             |
| ------------------------- | ------------------------------------------------- |
| Primary blue              | `#08A3FB` (`bg-primary`, `text-primary`)          |
| Primary deep blue         | `#1078BC` (`bg-primary-deep`)                     |
| Primary button gradient   | `linear-gradient(135deg, #08A3FB 0%, #1078BC 100%)` (`bg-brand-gradient`) |
| Secondary button          | Transparent background, `#08A3FB` border and text (`border-primary text-primary`) |

Semantic colors (`background`, `foreground`, `surface`, `surface-elevated`, `muted`, `border`, `ring`) switch automatically between light and dark mode.

**Theming:** the site follows the OS color scheme by default. Setting `data-theme="light"` or `data-theme="dark"` on `<html>` forces a theme, and Tailwind's `dark:` variant targets that attribute.

**Also defined:** a fluid type scale (`text-display`, `text-heading`, `text-subheading`), layout spacing (`py-section`, `px-gutter`, `max-w-content`), radii (`rounded-button`, `rounded-card`) and an extra `xs` breakpoint (30rem) alongside Tailwind's defaults.
