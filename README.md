# Professional Portfolio

Personal professional portfolio showcasing frontend development, UI/UX design and AI-assisted software development.

> **Status:** project foundation only. The portfolio interface will be built from the approved Figma design.

## Contents

1. [Getting started](#getting-started)
2. [Scripts](#scripts)
3. [Tech stack and why each package is used](#tech-stack-and-why-each-package-is-used)
4. [Tooling and configuration files](#tooling-and-configuration-files)
5. [Project structure](#project-structure)
6. [Coding standards](#coding-standards)
7. [Design system](#design-system)
8. [Security](#security)
9. [Git workflow](#git-workflow)
10. [Development log](#development-log)

---

## Getting started

**Requirements:** Node.js 20.9 or later, npm, Git.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command               | What it does                                                    |
| --------------------- | --------------------------------------------------------------- |
| `npm run dev`         | Starts the development server with hot reload                   |
| `npm run build`       | Creates an optimized production build                           |
| `npm run start`       | Serves the production build (run `build` first)                 |
| `npm run lint`        | Runs ESLint (code quality, accessibility, 50-line rule)         |
| `npm run typecheck`   | Generates Next.js route types, then type-checks with TypeScript |
| `npm run check:lines` | Fails if any source file (TS, JS or CSS) exceeds 50 lines       |
| `npm run check`       | Runs `lint`, `typecheck` and `check:lines` together             |

Run `npm run check` before every commit.

---

## Tech stack and why each package is used

Every package added to the project is listed here with its purpose and the reason it was chosen. **Update this section whenever a package is added, upgraded or removed.**

### Runtime dependencies (shipped to the browser)

| Package        | Version | What it is used for                          | Why it was chosen                                                                                                                                       |
| -------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `next`         | 16.4.6  | The application framework: routing, rendering, builds, image and font optimization | Industry standard for production React sites. Pages are pre-rendered as static HTML, which makes the portfolio fast and SEO-friendly. Includes the App Router and Turbopack. |
| `react`        | 19.3.0  | The UI library: components and state         | Required by Next.js. Component-based model fits a portfolio built from reusable sections.                                                              |
| `react-dom`    | 19.3.0  | Renders React components into the page       | Required by React for the web.                                                                                                                          |
| `lucide-react` | 1.73.0  | Icons (menu, arrows, social links, skill icons) | Large, consistent, open-source icon set. Each icon is a separate React component, so only the icons actually used end up in the bundle (tree-shaking). |
| `motion`       | 14.14.0 | Animations (section reveals, hover effects, page transitions) | The maintained successor of Framer Motion. Declarative React API, GPU-friendly animations and built-in support for users who prefer reduced motion. |

### Development dependencies (used only while building, never shipped)

| Package                  | Version  | What it is used for                                         | Why it was chosen                                                                                       |
| ------------------------ | -------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `typescript`             | 5.9.3    | Static type checking                                        | Catches bugs before the code runs and documents the shape of data. Runs in `strict` mode.              |
| `tailwindcss`            | 4.3.3    | Utility-first CSS framework                                 | Fast, consistent styling directly from design tokens. Only the classes actually used are generated, so the CSS stays small. |
| `@tailwindcss/turbopack` | 4.3.3    | Processes Tailwind CSS inside Next.js's Turbopack bundler    | Official Tailwind v4 integration for Turbopack, installed by `create-next-app`. Replaces the older PostCSS setup. |
| `eslint`                 | 9.39.5   | Linter: finds bugs and enforces code rules                  | Industry standard. Enforces the project's 50-line rule and coding conventions automatically.          |
| `eslint-config-next`     | 16.4.6   | Next.js lint rules: React, hooks, accessibility, Core Web Vitals, TypeScript | Official rule set maintained by the Next.js team.                                         |
| `@types/node`            | 20.19.43 | TypeScript types for Node.js APIs                           | Needed to type-check config files and scripts that use Node.js.                                        |
| `@types/react`           | 19.3.0   | TypeScript types for React                                  | Needed for type-safe components.                                                                        |
| `@types/react-dom`       | 19.3.0   | TypeScript types for React DOM                              | Needed for type-safe components.                                                                        |

### Deliberately not installed

- **No backend, database or authentication packages:** the first version of the portfolio is a static site and has no server-side data.
- **No CSS-in-JS or UI component library:** Tailwind and our own components in `src/components/ui` keep the bundle small and the design faithful to Figma.
- **No class-merging helpers (`clsx`, `tailwind-merge`) yet:** they will be added, and documented here, only when a component actually needs them.

### Tools used to build and maintain the project

| Tool                         | Purpose                                                    |
| ---------------------------- | ---------------------------------------------------------- |
| Node.js 22 and npm 10        | Runs the toolchain and manages packages (`package-lock.json` pins exact versions) |
| `create-next-app` 16.4.6     | Official Next.js project generator, used once to scaffold the project |
| Git and GitHub               | Version control and remote repository                      |
| Claude Code                  | AI-assisted development (setup, configuration, documentation) |
| Figma                        | Source of the approved portfolio design                    |

---

## Tooling and configuration files

| File                          | Purpose                                                                                             |
| ----------------------------- | --------------------------------------------------------------------------------------------------- |
| `package.json`                | Project metadata, scripts, dependencies, required Node.js version (`engines`)                       |
| `package-lock.json`           | Exact installed versions, so every machine installs the same packages                               |
| `next.config.ts`              | Next.js settings: security headers, hides the `X-Powered-By` header, Tailwind/Turbopack loader      |
| `tsconfig.json`               | TypeScript settings: `strict`, `noUncheckedIndexedAccess`, `@/*` import alias                       |
| `eslint.config.mjs`           | Lint rules: Next.js presets, 50-line limit, `eqeqeq`, type-only imports, no `any`                   |
| `scripts/check-file-length.mjs` | Enforces the 50-line rule for every file type, including CSS                                      |
| `.editorconfig`               | Same indentation, charset and line endings in every editor                                          |
| `.gitattributes`              | Stores text files with LF line endings in Git and marks images and fonts as binary                  |
| `.gitignore`                  | Keeps `node_modules`, build output (`.next`, `out`, `build`) and secrets (`.env*`, `*.pem`) out of Git |
| `AGENTS.md`                   | Generated by Next.js 16: tells AI coding assistants to read the bundled Next.js docs                |

---

## Project structure

```
professional-portfolio/
├── public/                    Static files served as-is from the site root
│   ├── images/
│   │   ├── profile/           Profile photos
│   │   └── projects/          Project screenshots
│   │       ├── yiino/
│   │       ├── innofrit/
│   │       └── yiino-business/
│   ├── icons/                 Static icons and logos
│   └── documents/             Downloadable files (e.g. CV)
├── scripts/
│   └── check-file-length.mjs  50-line rule checker
└── src/
    ├── app/                   App Router: routes, root layout, global stylesheet
    │   ├── layout.tsx         Root HTML shell and site metadata
    │   ├── page.tsx           Home route (placeholder until the design is built)
    │   ├── globals.css        Stylesheet entry point (imports src/styles)
    │   └── favicon.ico
    ├── components/
    │   ├── layout/            Page shells: header, footer, containers
    │   ├── navigation/        Navbar, menus, links
    │   ├── sections/          Page sections (hero, about, projects, ...)
    │   ├── ui/                Reusable primitives (buttons, cards, badges, ...)
    │   └── theme/             Theme provider and light/dark toggle
    ├── config/
    │   └── security/
    │       ├── csp.ts         Content-Security-Policy rules and builder
    │       └── headers.ts     HTTP security headers
    ├── constants/
    │   ├── site.ts            Site title and description
    │   └── theme.ts           Brand colours and theme names for TypeScript
    ├── data/                  Typed static content (projects, experience, skills)
    ├── hooks/                 Custom React hooks
    ├── lib/                   Framework-agnostic helpers
    ├── styles/                Design system, one concern per file
    │   ├── tokens.css         Colour tokens (light and dark)
    │   ├── theme.css          Maps tokens to Tailwind utilities
    │   ├── scales.css         Typography, spacing, radii, motion, breakpoints
    │   ├── base.css           Base element styles
    │   └── utilities.css      Custom utilities (brand gradient)
    └── types/                 Shared TypeScript types
```

Empty folders contain a `.gitkeep` file so Git keeps them until real files are added.

**Import alias:** `@/` points to `src/`, for example `import { SITE } from "@/constants/site"`.

---

## Coding standards

1. **50 lines per file, maximum.** This applies to every source file: TypeScript, JavaScript and CSS. When a file grows past 50 lines, split it into smaller components, hooks, helpers or style files. ESLint (`max-lines`) and `npm run check:lines` enforce this automatically.
2. **One responsibility per file.** A component renders one thing. Data goes in `src/data`, types in `src/types`, constants in `src/constants`, logic in `src/hooks` or `src/lib`.
3. **Server Components by default.** Add `"use client"` only to components that need interactivity (state, effects, browser APIs, Motion animations), and keep those components as small as possible.
4. **Type everything.** No `any`. Shared types live in `src/types`. Use `import type` for type-only imports.
5. **Style with design tokens.** Use semantic classes (`bg-background`, `text-primary`, `rounded-card`) instead of hard-coded colours or sizes.
6. **Accessibility.** Use semantic HTML, alt text for every image, visible focus states, keyboard navigation, and respect `prefers-reduced-motion`.
7. **Naming.** Component files and components in `PascalCase` (`ProjectCard.tsx`), hooks as `useSomething.ts`, other files in `kebab-case`.
8. **Document as you go.** Every new package goes in the [tech stack tables](#tech-stack-and-why-each-package-is-used), and every change gets an entry in the [development log](#development-log).

---

## Design system

The design system lives in `src/styles`. Each value is a CSS variable, exposed to Tailwind as a utility class.

### Brand

| Token                   | Value                                                    | Tailwind class                     |
| ----------------------- | -------------------------------------------------------- | ---------------------------------- |
| Primary blue            | `#08A3FB`                                                | `bg-primary`, `text-primary`       |
| Primary deep blue       | `#1078BC`                                                | `bg-primary-deep`                  |
| Primary button gradient | `linear-gradient(135deg, #08A3FB 0%, #1078BC 100%)`      | `bg-brand-gradient`                |
| Secondary button        | Transparent background, `#08A3FB` border and text        | `border border-primary text-primary` |

### Semantic colours

`background`, `foreground`, `surface`, `surface-elevated`, `muted`, `border`, `primary-foreground` and `ring` switch automatically between light and dark mode. They are defined once each with the CSS `light-dark()` function.

### Light and dark mode

- **Default:** follows the visitor's operating system setting.
- **Forced:** `<html data-theme="light">` or `<html data-theme="dark">` overrides it. This is used by the future theme toggle.
- **Tailwind:** the `dark:` variant targets `data-theme="dark"`. Semantic tokens already adapt, so it is rarely needed.

### Scales

| Group      | Classes                                                        |
| ---------- | -------------------------------------------------------------- |
| Typography | `text-display`, `text-heading`, `text-subheading` (fluid sizes that scale with the screen) |
| Spacing    | `py-section`, `px-gutter`                                      |
| Layout     | `max-w-content` (72rem)                                        |
| Radii      | `rounded-button`, `rounded-card`                               |
| Motion     | `ease-out-smooth`                                              |
| Breakpoints | `xs` (30rem) plus Tailwind's defaults `sm` 40rem, `md` 48rem, `lg` 64rem, `xl` 80rem, `2xl` 96rem |

**Font:** system font stack for now. The Figma typeface will be added with `next/font/local`. Local fonts are self-hosted, so the site never depends on Google Fonts at runtime.

---

## Security

The site sends these HTTP security headers on every response. They are configured in `src/config/security`.

| Header                      | Protects against                                                       |
| --------------------------- | ---------------------------------------------------------------------- |
| `Content-Security-Policy`   | Cross-site scripting: only same-origin scripts, styles, images and fonts; no plugins, no framing, forms post only to this site |
| `Strict-Transport-Security` | Protocol downgrade: browsers always use HTTPS                          |
| `X-Frame-Options: DENY`     | Clickjacking: the site cannot be embedded in frames                     |
| `X-Content-Type-Options`    | MIME-type sniffing attacks                                             |
| `Referrer-Policy`           | Leaking full URLs to other sites                                       |
| `Permissions-Policy`        | Use of camera, microphone, geolocation and ad-tracking APIs            |

The `X-Powered-By` header is also removed, so the site doesn't advertise its framework.

**Content-Security-Policy trade-off:** the policy uses the Next.js "without nonces" approach (`'unsafe-inline'` for scripts and styles). Pages stay statically rendered and fast. A stricter nonce-based policy would force every page to render on each request. The site has no logins, user input or third-party scripts, so this is the recommended balance.

**Other rules**
- Never commit secrets. `.env*` files are ignored by Git.
- Values the browser must see go in `NEXT_PUBLIC_*` variables; everything else stays server-only.
- Every third-party domain (analytics, a form service, and so on) must be added to the CSP explicitly, and documented here.

---

## Git workflow

| Branch | Role                                                   |
| ------ | ------------------------------------------------------ |
| `Jeff` | Daily development branch (local work happens here)     |
| `Dev`  | Integration branch: `Jeff` is pushed here              |
| `main` | Production branch: updated from `Dev` when it is ready for release |

- The local `Jeff` branch tracks `origin/Dev`, so `git push` from `Jeff` updates `Dev`.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org): `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`.
- Never force-push. Run `npm run check` and `npm run build` before pushing.

---

## Development log

Every step taken on the project, newest first. **Add an entry for every change.**

### 2026-11-15: Code-quality, security and documentation standards

- Split the 150-line `globals.css` into five focused files in `src/styles` (tokens, theme, scales, base, utilities). Each colour is now defined once with `light-dark()` instead of being duplicated per theme.
- Added HTTP security headers (`src/config/security`) and turned off the `X-Powered-By` header.
- Introduced the 50-lines-per-file rule: ESLint `max-lines` plus `scripts/check-file-length.mjs`, which also covers CSS.
- Stricter checks:
  - ESLint: `eqeqeq`, `no-console`, `consistent-type-imports`, `no-explicit-any`.
  - TypeScript: `noUncheckedIndexedAccess`, `noFallthroughCasesInSwitch`, `forceConsistentCasingInFileNames`.
- Added the `typecheck`, `check:lines` and `check` scripts, plus `engines` (Node.js 20.9 or later) in `package.json`.
- Added `.editorconfig` and `.gitattributes` for consistent formatting and LF line endings.
- Set up the branch workflow: develop on `Jeff`, push to `Dev`.
- Rewrote this README with a reason for every package, tool, configuration file and step.

### 2026-11-15: Project initialization

- Cloned `github.com/taby-del/Professional-Portfolio` (it already had a one-line README, plus `main`, `Dev` and `Jeff` branches).
- Scaffolded Next.js 16.4.6 with `create-next-app`: TypeScript, ESLint, Tailwind CSS, App Router, `src/` folder, `@/*` alias, npm.
- Installed `lucide-react` (icons) and `motion` (animations).
- Created the folder structure for components, data, hooks, lib, types, constants and public assets.
- Prepared the design tokens: brand blue `#08A3FB`, button gradient, light and dark mode.
- Replaced the starter page with a placeholder and removed the unused starter SVGs.
- Replaced the Geist font from Google Fonts with the system font stack, because the font download timed out on the local network and broke `npm run dev`.
- Verified `npm run lint`, `npm run build` and `npm run dev`.
- Commit: `chore: initialize professional portfolio project`.
