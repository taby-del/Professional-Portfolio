# Professional Portfolio

Personal professional portfolio showcasing frontend development, UI/UX design and AI-assisted software development.

> **Status:** Step 1 of 9 complete (design foundation). The pages are built step by step from the approved Figma design. The full specification is in [docs/design-handoff.md](docs/design-handoff.md).

## Contents

1. [Getting started](#getting-started)
2. [Scripts](#scripts)
3. [Tech stack and why each package is used](#tech-stack-and-why-each-package-is-used)
4. [Tooling and configuration files](#tooling-and-configuration-files)
5. [Project structure](#project-structure)
6. [Coding standards](#coding-standards)
7. [Design system](#design-system)
8. [Theme system](#theme-system)
9. [Animation system](#animation-system)
10. [Security](#security)
11. [Git workflow](#git-workflow)
12. [Build roadmap](#build-roadmap)
13. [Development log](#development-log)

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
| `@fontsource-variable/inter` | 5.3.0 | The Inter typeface (all text), required by the design | Self-hosts the font files from npm. No request to Google Fonts at build or run time, which is faster, more private and works offline (Google Fonts downloads previously broke `npm run dev` on a slow network). The variable version gives every weight in one file. |
| `@fontsource-variable/jetbrains-mono` | 5.3.0 | The JetBrains Mono typeface (labels, technical details), required by the design | Same reasons as Inter. |

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
- **No theme library (`next-themes`):** the theme system is about 100 lines of our own code across four small files (`src/lib/theme`). It does exactly what the handoff requires, and it is one less dependency to keep up to date.
- **No second animation library (GSAP, AOS, Lottie):** one library keeps the animation style consistent and the upgrade path simple. CSS handles simple hover and colour transitions.

### Tools used to build and maintain the project

| Tool                         | Purpose                                                    |
| ---------------------------- | ---------------------------------------------------------- |
| Node.js 22 and npm 10        | Runs the toolchain and manages packages (`package-lock.json` pins exact versions) |
| `create-next-app` 16.4.6     | Official Next.js project generator, used once to scaffold the project |
| Git and GitHub               | Version control and remote repository                      |
| Claude Code                  | AI-assisted development (setup, configuration, documentation) |
| Figma                        | Source of the approved portfolio design (exported as PNGs, with a written handoff) |
| GitHub Dependabot            | Opens weekly pull requests against `Dev` when a package has an update or a security fix |

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
| `.github/dependabot.yml`      | Weekly dependency updates, grouped (Next/React, Motion/icons, tooling), targeting `Dev`             |
| `docs/design-handoff.md`      | The designer's handoff: content rules, responsive rules, tokens, interactions, assets               |

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
├── .github/
│   └── dependabot.yml         Weekly dependency update pull requests
├── docs/
│   └── design-handoff.md      Designer's specification (source of truth)
├── scripts/
│   └── check-file-length.mjs  50-line rule checker
└── src/
    ├── app/                   App Router: routes, root layout, global stylesheet
    │   ├── layout.tsx         Root HTML shell: fonts, theme script, Motion provider
    │   ├── page.tsx           Home route (placeholder until Step 4)
    │   ├── globals.css        Stylesheet entry point (imports src/styles)
    │   └── favicon.ico
    ├── components/
    │   ├── layout/            Page shells: header, footer, containers
    │   ├── navigation/        Navbar, menus, links
    │   ├── providers/
    │   │   └── MotionProvider.tsx  Lightweight Motion setup + reduced-motion support
    │   ├── sections/          Page sections (hero, about, projects, ...)
    │   ├── theme/
    │   │   ├── ThemeScript.tsx     Applies the saved theme before first paint
    │   │   └── ThemeToggle.tsx     Light/Dark switch button
    │   └── ui/                Reusable primitives (buttons, cards, badges, ...)
    ├── config/
    │   └── security/
    │       ├── csp.ts         Content-Security-Policy rules and builder
    │       └── headers.ts     HTTP security headers
    ├── constants/
    │   ├── site.ts            Site title and description
    │   └── theme.ts           Brand colours for TypeScript
    ├── data/                  Typed static content (projects, experience, skills)
    ├── hooks/
    │   └── useTheme.ts        Reads and changes the site theme
    ├── lib/
    │   ├── fonts.ts           Self-hosted Inter and JetBrains Mono
    │   ├── motion/
    │   │   ├── tokens.ts      Animation durations, easings, stagger, distances
    │   │   └── variants.ts    Reusable animation presets (fadeUp, blurReveal, ...)
    │   └── theme/
    │       ├── constants.ts   Theme names, storage key, timings
    │       ├── script.ts      The inline pre-paint script
    │       ├── dom.ts         Reads and applies the theme on <html>
    │       └── store.ts       Global theme store (routes, tabs, OS changes)
    ├── styles/                Design system, one concern per file
    │   ├── tokens.css         Colour tokens (light and dark)
    │   ├── theme.css          Maps tokens and fonts to Tailwind utilities
    │   ├── scales.css         Typography, spacing, radii, breakpoints
    │   ├── base.css           Base element styles and page gutters
    │   ├── utilities.css      Custom utilities (brand gradient)
    │   └── theme-transition.css  180 ms colour cross-fade on theme switch
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

The design system lives in `src/styles`. Every value comes from the approved Figma design: colours were sampled from the exported screens, and rules come from [docs/design-handoff.md](docs/design-handoff.md). Each value is a CSS variable, exposed to Tailwind as a utility class.

### Brand

| Token                   | Value                                                    | Tailwind class                     |
| ----------------------- | -------------------------------------------------------- | ---------------------------------- |
| Primary blue            | `#08A3FB`                                                | `bg-primary`, `text-primary`       |
| Primary deep blue       | `#1078BC`                                                | `bg-primary-deep`                  |
| Primary button gradient | `linear-gradient(135deg, #08A3FB 0%, #1078BC 100%)`      | `bg-brand-gradient`                |
| Text on primary         | `#FFFFFF` in both themes                                 | `text-on-primary`                  |

### Semantic colours (switch automatically with the theme)

| Token             | Light     | Dark      | Used for                                     | Tailwind class |
| ----------------- | --------- | --------- | -------------------------------------------- | -------------- |
| `background`      | `#FFFFFF` | `#080D16` | Page background                              | `bg-background` |
| `surface`         | `#F7F9FC` | `#101827` | Cards, panels, menu items                    | `bg-surface` |
| `tint`            | `#EAF4FF` | `#142B45` | Hover backgrounds (nav, secondary button)    | `bg-tint` |
| `foreground`      | `#111827` | `#F8FAFC` | Main text                                    | `text-foreground` |
| `muted`           | `#64748B` | `#A3B1C6` | Secondary text                               | `text-muted` |
| `accent-readable` | `#1078BC` | `#08A3FB` | Blue text that stays readable on its surface | `text-accent-readable` |
| `border`          | `#E5EAF1` | `#1E293B` | Field and card outlines                      | `border-border` |
| `error`           | `#B92339` | `#FF8796` | Form errors                                  | `text-error`, `border-error` |
| `success`         | `#187746` | `#65D69A` | Form success                                 | `text-success`, `border-success` |

Each colour is defined once, with the CSS `light-dark()` function, in `src/styles/tokens.css`.

### Typography

| Style       | Size / line height | Class          |
| ----------- | ------------------ | -------------- |
| Body small  | 14 / 22 px         | `text-body-sm` |
| Body        | 16 / 26 px         | `text-body`    |
| Body large  | 18 / 28 px         | `text-body-lg` |
| Title       | 20 / 28 px         | `text-title`   |
| Heading     | 28 to 40 px, fluid | `text-heading` |
| Display     | 36 to 64 px, fluid | `text-display` |

**Fonts:** Inter for all text (`font-sans`) and JetBrains Mono for labels and technical details (`font-mono`). Both are self-hosted (see `src/lib/fonts.ts`).

### Geometry and layout

| Token          | Value                                      | Class                          |
| -------------- | ------------------------------------------ | ------------------------------ |
| Page gutter    | 24 px (mobile), 40 px (768+), 96 px (1280+) | `px-gutter`                   |
| Control height | 48 px (buttons)                            | `h-control`                    |
| Touch target   | 44 px minimum                              | `size-touch`, `min-h-touch`    |
| Page width     | 1440 px                                    | `max-w-page`                   |
| Radii          | 8 px controls, 12 px cards, 16 px panels   | `rounded-control`, `rounded-card`, `rounded-panel` |
| Breakpoints    | 768, 1280 and 1440 px                      | `tablet:`, `laptop:`, `desktop:` |

**Spacing scale:** 4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 px. These are Tailwind's default spacing steps: `1`, `2`, `3`, `4`, `6`, `8`, `10`, `12`, `16`, `20`, `24`.

---

## Theme system

Built to the handoff rule: *"one global theme preference shared across all routes, initialised before paint, no flash, colours update together over 180 ms"*.

| Requirement | How it works |
| --- | --- |
| No flash on load | `ThemeScript` runs a tiny inline script in `<head>` that applies the saved choice before anything is painted (the Next.js "preventing flash" pattern). Pages stay statically pre-rendered. |
| First visit | No saved choice, so the site follows the operating system (`prefers-color-scheme`) and updates live if the OS setting changes. |
| One choice for every route | The choice is saved in `localStorage` and applied to `<html data-theme>`, which persists across page navigations. |
| Synced across tabs | Changing the theme in one tab updates every other open tab instantly (`storage` event). |
| 180 ms cross-fade | During a switch only, `<html>` gets the `theme-transition` class, which fades background, text and border colours. It never uses `transition: all`. |
| Reduced motion | When the OS asks for reduced motion, the switch is instant. |
| Security | The script only accepts the exact values `light` or `dark`, so a tampered saved value cannot inject anything. |

**Code:** `src/lib/theme/*` (logic), `src/hooks/useTheme.ts` (React hook), `src/components/theme/*` (script and toggle).

---

## Animation system

The design calls for professional, refined animation, and for animations that won't break as libraries evolve. The approach:

1. **One library: Motion** (`motion/react`), the maintained successor to Framer Motion, built for React 19.
2. **One place for all timings:** `src/lib/motion/tokens.ts` holds durations, easings, stagger gaps and distances. Components never hard-code animation values, so the style stays consistent and a library upgrade only touches `src/lib/motion`.
3. **Reusable presets:** `src/lib/motion/variants.ts` has `fadeUp`, `blurReveal`, `fade` and `staggerGroup`.
4. **Lightweight loading:** `MotionProvider` uses `LazyMotion` with the `domAnimation` feature set, about a third of Motion's full size. Its `strict` mode prevents accidental use of the heavy `motion.*` components, so always use `m.*`.
5. **Smooth by design:** only transform, opacity and blur are animated, so animations never trigger layout work.
6. **Accessible:** `MotionConfig reducedMotion="user"` removes movement for visitors who ask their OS for reduced motion.
7. **Plain CSS where enough:** hover states and the theme cross-fade use CSS transitions, which have no dependency to go out of date.
8. **Kept current:** Dependabot opens grouped update pull requests every week, and `npm run check` plus `npm run build` must pass before merging.

| Interaction (from the handoff) | Duration | Token |
| --- | --- | --- |
| Button pressed | 100 ms | `DURATION.press` |
| Hover, navigation, mobile menu, language | 150 ms | `DURATION.fast` |
| Theme cross-fade, project cover hover | 180 ms | `DURATION.theme` |
| View Project expand/collapse | 220 ms | `DURATION.disclosure` |
| Section and card entrance | 600 ms | `DURATION.reveal` |
| Headline entrance (blur to sharp) | 900 ms | `DURATION.hero` |

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

## Build roadmap

The site is built one step at a time. Each step is checked against the design, then committed on `Jeff` and pushed to `Dev`.

| Step | Scope | Status |
| --- | --- | --- |
| 1 | Design foundation: tokens, fonts, theme system, animation system | ✅ Done |
| 2 | Buttons: `PrimaryButton`, `SecondaryButton`, all states | Next |
| 3 | Header, compact header, mobile menu, footer, six routes | Planned |
| 4 | Home (approved design, preserved as-is) | Planned |
| 5 | About | Planned |
| 6 | Skills | Planned |
| 7 | Projects | Planned |
| 8 | Experience | Planned |
| 9 | Contact (form and email delivery) | Planned |

**Waiting on the owner:**
- The CV PDF.
- Email, LinkedIn and GitHub links.
- Real project screenshots (optional; the illustrated placeholders stay until then).
- French copy for the EN/FR switch.
- A choice of email service for the contact form.

---

## Development log

Every step taken on the project, newest first. **Add an entry for every change.**

### 2026-11-16: Step 1, design foundation

- Saved the designer's handoff as `docs/design-handoff.md`, the source of truth for content, layout and interactions.
- **Colour tokens:** replaced the placeholder colours with exact values sampled from the exported Figma screens:
  - surfaces, tint, text, readable accent and border;
  - error and success, with separate light and dark values.
- **Typography and geometry:**
  - Inter and JetBrains Mono, self-hosted (new packages `@fontsource-variable/inter` and `@fontsource-variable/jetbrains-mono`).
  - The handoff's paragraph styles (14/22, 16/26, 18/28).
  - Page gutters 24/40/96 px, 48 px controls, 44 px touch targets, radii, and breakpoints at 768/1280/1440.
- **Theme system** (`src/lib/theme`, `useTheme`, `ThemeScript`, `ThemeToggle`):
  - The saved choice is applied before first paint, so there's no flash.
  - It follows the OS on the first visit and syncs across tabs.
  - Colours cross-fade over 180 ms, and the switch is instant under reduced motion.
- **Animation system:**
  - Central timing tokens and reusable presets in `src/lib/motion`.
  - `MotionProvider` (LazyMotion + reduced-motion support) wraps the app.
- Added Dependabot (`.github/dependabot.yml`) for weekly grouped updates targeting `Dev`.
- Browser UI colour (`theme-color`) now follows light and dark.
- The placeholder home page now shows the new fonts and tokens, and includes the working theme toggle.

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
