# Professional Portfolio

Personal professional portfolio showcasing frontend development, UI/UX design and AI-assisted software development.

> **Status:** all 9 build steps complete. Every page (Home, About, Skills, Projects, Experience, Contact) is built from the approved design, with light/dark themes and animations. Remaining items need owner content: see [Build roadmap](#build-roadmap). The pages are built step by step from the approved Figma design. The full specification is in [docs/design-handoff.md](docs/design-handoff.md).

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
12. [Troubleshooting](#troubleshooting)
13. [Build roadmap](#build-roadmap)
14. [Development log](#development-log)

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
| `npm run dev:clean`   | Clears the dev cache (`.next/dev`), then starts the dev server (see [Troubleshooting](#troubleshooting)) |
| `npm run build`       | Creates an optimized production build                           |
| `npm run start`       | Serves the production build (run `build` first)                 |
| `npm run lint`        | Runs ESLint (code quality, accessibility, 50-line rule)         |
| `npm run typecheck`   | Generates Next.js route types, then type-checks with TypeScript |
| `npm run check:lines` | Fails if any source file (TS, JS or CSS) exceeds 50 lines       |
| `npm run check`       | Runs `lint`, `typecheck` and `check:lines` together             |
| `npm run icons`       | Rebuilds the favicon and app icons from the brand logo (see [Favicon and icons](#favicon-and-icons)) |

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
- **No icon-library package for brand logos (`simple-icons`):**
  - The Skills page needs 9 brand logos (React, Next.js, Vite, HTML5, Node.js, MongoDB, PostgreSQL, Git, GitHub). Their SVG paths were copied once from [Simple Icons](https://simpleicons.org) v16.38.0 into `src/components/icons/brand-paths.ts`. Simple Icons is CC0 (public domain), so copying is allowed without attribution.
  - The package itself is 16 MB and would add nothing else.
  - The classic CSS3 shield (no longer in Simple Icons) and the multi-colour Figma mark are drawn as small inline SVG components.
  - To add a logo, copy its path from simpleicons.org into `brand-paths.ts`.
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
| `.env.example`                | Documents the contact form's email settings (no secrets); copy to `.env.local` |
| `.github/dependabot.yml`      | Weekly dependency updates, grouped (Next/React, Motion/icons, tooling), targeting `Dev`             |
| `docs/design-handoff.md`      | The designer's handoff: content rules, responsive rules, tokens, interactions, assets               |

---

## Project structure

```
professional-portfolio/
├── public/                    Static files served as-is from the site root
│   ├── images/
│   │   ├── brand/
│   │   │   └── taby-jeff-logo.webp   The "TJ / Taby Jeff" logo (header, footer)
│   │   ├── profile/
│   │   │   └── taby-takoundjou-jeff-obrile.jpg  Owner portrait (About, 4:5 crop)
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
├── supabase/
│   └── schema.sql             contact_messages table + Row Level Security
├── scripts/
│   ├── check-file-length.mjs  50-line rule checker
│   ├── clean-dev-cache.mjs    Clears .next/dev (npm run dev:clean)
│   └── generate-icons.mjs     Builds favicon/icon/apple-icon from the logo (npm run icons)
└── src/
    ├── app/                   App Router: routes, root layout, global stylesheet
    │   ├── layout.tsx         Root shell: fonts, theme script, skip link, header, footer
    │   ├── page.tsx           Home (/)
    │   ├── about/ skills/ projects/ experience/ contact/
    │   │   └── page.tsx       One route each (metadata + page section)
    │   ├── contact/actions.ts Server action: spam checks, validation, sending
    │   ├── globals.css        Stylesheet entry point (imports src/styles)
    │   ├── favicon.ico        Browser-tab icon, 16/32/48 px (generated from the logo)
    │   ├── icon.png           512 px app icon (generated)
    │   └── apple-icon.png     180 px iOS home-screen icon (generated)
    ├── components/
    │   ├── icons/
    │   │   ├── BrandLogo.tsx       Draws a brand logo (brand colour or brand blue)
    │   │   ├── brand-paths.ts      9 logo paths from Simple Icons (CC0)
    │   │   ├── Css3Logo.tsx        Classic CSS3 shield (inline SVG)
    │   │   ├── FigmaLogo.tsx       Figma brand mark (inline SVG)
    │   │   └── SkillGlyph.tsx      Draws a skill icon: Lucide, brand or monogram
    │   ├── layout/
    │   │   ├── Header.tsx          Site header (full and compact)
    │   │   ├── Footer.tsx          Site footer
    │   │   └── SkipLink.tsx        "Skip to content" for keyboard users
    │   ├── navigation/
    │   │   ├── BrandLink.tsx       Logo + name, links to Home
    │   │   ├── NavLinks.tsx        Desktop links with active state
    │   │   ├── LanguageIndicator.tsx  "EN" control (becomes EN/FR later)
    │   │   ├── MenuButton.tsx      Opens the mobile menu
    │   │   ├── MobileMenu.tsx      Native <dialog> menu
    │   │   ├── MobileMenuPanel.tsx Menu content
    │   │   ├── MobileNavList.tsx   Menu links with staggered entrance
    │   │   ├── FooterNav.tsx       Footer links
    │   │   └── SocialLinks.tsx     LinkedIn / GitHub / Email
    │   ├── mockups/           Illustrative UI artwork for project covers
    │   │   ├── ScaleToFit.tsx      Draws artwork at design size, scales to fit
    │   │   ├── Placed.tsx          Positions a device; reveal + scroll parallax
    │   │   ├── PhoneFrame.tsx      Phone outline with app label
    │   │   ├── BrowserFrame.tsx    Browser window, "Illustrative preview"
    │   │   ├── MockParts.tsx       Small button, list row, chip
    │   │   ├── MockSidebar.tsx     Dashboard navigation
    │   │   ├── MockStats.tsx       Three stat cards
    │   │   └── MockTable.tsx       Data table with generic cues
    │   ├── motion/
    │   │   ├── RevealGroup.tsx     Reveals its children in sequence (on load or on scroll)
    │   │   ├── RevealItem.tsx      A child that rises/fades in on the group's cue
    │   │   └── NoScriptReveal.tsx  Shows all content if JavaScript is off
    │   ├── providers/
    │   │   └── MotionProvider.tsx  Lightweight Motion setup + reduced-motion support
    │   ├── sections/          Page sections, one folder per page
    │   │   ├── about/
    │   │   │   ├── AboutPage.tsx       Layout: portrait column + intro, then sections
    │   │   │   ├── Portrait.tsx        Owner photo, 4:5, framed as in the design
    │   │   │   ├── RoleCard.tsx        Roles, location, languages
    │   │   │   ├── AboutIntro.tsx      "About Me", paragraphs, CV
    │   │   │   ├── FocusGrid.tsx       "Professional Focus" tiles
    │   │   │   ├── ApproachSection.tsx "My Approach" three steps
    │   │   │   └── AboutDetails.tsx    Education + Professional Interests
    │   │   ├── contact/
    │   │   │   ├── ContactPage.tsx     Two columns: intro + channels | form
    │   │   │   ├── ContactIntro.tsx    Title, invitation, channels, closing
    │   │   │   ├── ContactChannel.tsx  Email / LinkedIn / GitHub card
    │   │   │   ├── ContactForm.tsx     "Start a conversation." form card
    │   │   │   ├── ContactField.tsx    Labelled field with all states
    │   │   │   └── FormStatus.tsx      aria-live delivery status
    │   │   ├── experience/
    │   │   │   ├── ExperiencePage.tsx  Intro, meta column + role card, education
    │   │   │   ├── RoleCard.tsx        Technical Developer role card
    │   │   │   ├── RoleArea.tsx        One focus area (Engineering, Design, Quality)
    │   │   │   └── EducationBanner.tsx IUC, Computer Science and Engineering
    │   │   ├── projects/
    │   │   │   ├── ProjectsPage.tsx    Intro, notice, three projects
    │   │   │   ├── ProjectArticle.tsx  Cover + info + details for one project
    │   │   │   ├── ProjectCover.tsx    Labelled illustrative cover (hover lift)
    │   │   │   ├── CoverArt.tsx        Wide (768+) or compact (phone) artwork
    │   │   │   ├── ProjectInfo.tsx     Title, description, tagline, toolkit
    │   │   │   ├── ProjectDetails.tsx  "View Project" disclosure (220 ms)
    │   │   │   ├── DetailsColumns.tsx  Product areas + My contributions
    │   │   │   └── covers/             Per-project compositions + registry
    │   │   ├── skills/
    │   │   │   ├── SkillsPage.tsx      Intro, 2 × 2 category panels, note
    │   │   │   └── SkillPanel.tsx      One category: header + skill tiles
    │   │   └── home/
    │   │       ├── HomeHero.tsx       Layout: intro + card, then tech strip
    │   │       ├── HeroIntro.tsx      Status, name, roles, headline, intro, actions
    │   │       ├── StatusBadge.tsx    "● Open to opportunities" (pulsing dot)
    │   │       ├── HeroHeadline.tsx   Word-by-word blur-to-sharp headline
    │   │       ├── HeroActions.tsx    View My Projects, Download CV, Contact link
    │   │       ├── CraftCard.tsx      "Digital craft / Workspace" card
    │   │       ├── CraftStepItem.tsx  One step: Understand / Design / Build
    │   │       └── TechStrip.tsx      "Design × Engineering" toolkit tags
    │   ├── theme/
    │   │   ├── ThemeScript.tsx     Applies the saved theme before first paint
    │   │   └── ThemeToggle.tsx     Light/Dark switch button
    │   └── ui/                Reusable primitives
    │       ├── button/
    │       │   ├── variants.ts       Shared button styles and states
    │       │   ├── types.ts          Button-or-link prop types
    │       │   ├── ButtonBase.tsx    Picks <button>, <Link> or <a>
    │       │   ├── PrimaryButton.tsx
    │       │   └── SecondaryButton.tsx
    │       ├── DownloadCvButton.tsx  The one shared "Download CV" action
    │       ├── Eyebrow.tsx           Small uppercase label ("PRIMARY PRACTICE")
    │       ├── SkillTile.tsx         Skill/focus tile (comfortable, compact, row)
    │       └── icon-control.ts       Shared 40 px square control style
    ├── config/
    │   └── security/
    │       ├── csp.ts         Content-Security-Policy rules and builder
    │       └── headers.ts     HTTP security headers
    ├── constants/
    │   ├── assets.ts          CV file name and URL
    │   ├── site.ts            Name, title, logo, social links (pending)
    │   └── theme.ts           Brand colours for TypeScript
    ├── data/
    │   ├── about.ts           About page copy (intro, focus, approach, details)
    │   ├── contact.ts         Contact copy and channels
    │   ├── experience.ts      Role, focus areas, toolkit, education
    │   ├── home.ts            Home page copy (hero, craft card, toolkit tags)
    │   ├── projects/          One file per project + intro/labels (index.ts)
    │   ├── skills.ts          All 24 skills in four categories, Skills copy
    │   └── navigation.ts      The six destinations + active-page helper
    ├── hooks/
    │   ├── useContactForm.ts  Contact form state machine
    │   └── useTheme.ts        Reads and changes the site theme
    ├── lib/
    │   ├── assets/
    │   │   └── cv.ts          Build-time check that the CV PDF exists
    │   ├── contact/
    │   │   ├── schema.ts      Fields + validation (browser and server)
    │   │   ├── form-dom.ts    Read values, focus first invalid field
    │   │   ├── rate-limit.ts  3 messages / 10 min per visitor
    │   │   ├── deliver.ts     Email notification + database storage
    │   │   ├── send-email.ts  Owner notification via Resend (server-only)
    │   │   └── store-message.ts  Saves to Supabase via REST (server-only)
    │   ├── fonts.ts           Self-hosted Inter and JetBrains Mono
    │   ├── motion/
    │   │   ├── tokens.ts      Animation durations, easings, stagger, distances
    │   │   ├── variants.ts    Reusable animation presets (fadeUp, blurReveal, ...)
    │   │   └── menu-variants.ts  Quick menu-item entrance
    │   └── theme/
    │       ├── constants.ts   Theme names, storage key, timings
    │       ├── script.ts      The inline pre-paint script
    │       ├── dom.ts         Reads and applies the theme on <html>
    │       └── store.ts       Global theme store (routes, tabs, OS changes)
    ├── styles/                Design system, one concern per file
    │   ├── tokens.css         Colour tokens (light and dark)
    │   ├── states.css         Pressed, glow and disabled tokens
    │   ├── theme.css          Maps tokens and fonts to Tailwind utilities
    │   ├── typography.css     Type scale: UI and body text (10–18 px)
    │   ├── typography-headings.css  Type scale: titles and headings (17–72 px)
    │   ├── scales.css         Spacing, radii, breakpoints
    │   ├── base.css           Base element styles and page gutters
    │   ├── interaction.css    Hand cursor on controls, visible focus ring
    │   ├── utilities.css      Custom utilities (brand gradient)
    │   ├── theme-transition.css  180 ms colour cross-fade on theme switch
    │   ├── mobile-menu.css       Menu dialog look and 150 ms entrance
    │   └── mobile-menu-responsive.css  Tablet panel, scroll lock, reduced motion
    └── types/
        ├── project.ts         Project and cover types
        └── skill.ts           Skill, category, icon and tile density types
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
| Primary button gradient | `linear-gradient(180deg, #08A3FB 0%, #1078BC 100%)`: light blue top, deep blue bottom (owner request, replaces the design's 135°) | `bg-brand-gradient` |
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
| Eyebrow     | 10 / 14 px, mono, uppercase | `text-eyebrow` ("DIGITAL CRAFT / WORKSPACE") |
| Micro       | 11 / 16 px, mono   | `text-micro` (status, step details, tags, copyright) |
| Caption     | 12 / 18 px         | `text-caption` (footer links, EN, meta) |
| Label       | 13 / 20 px         | `text-label` (buttons, desktop navigation) |
| Body small  | 14 / 22 px         | `text-body-sm` |
| Body        | 16 / 26 px         | `text-body`    |
| Body large  | 18 / 28 px         | `text-body-lg` |
| Card title  | 17 / 24 px, −0.02em | `text-card-title` ("Education", "Understand the workflow") |
| Title       | 20 / 28 px         | `text-title` (menu heading) |
| Subheading  | 22 to 26 px, fluid, −0.02em | `text-subheading` (Skills category titles) |
| Heading     | 26 to 32 px, fluid, −0.015em | `text-heading` ("My Approach", cover headlines) |
| Project title | 28 to 36 px, fluid, −0.02em | `text-project-title` ("YIINO FREIGHT / INNOFRIT") |
| Page title  | 36 to 44 px, fluid, −0.035em | `text-page-title` ("About Me") |
| Hero        | 40 to 72 px, fluid, semibold, −0.045em tracking, 1.04 leading | `text-hero` (Home headline) |

**Fonts:** Inter for all text (`font-sans`) and JetBrains Mono for labels and technical details (`font-mono`). Both are self-hosted (see `src/lib/fonts.ts`).

### Geometry and layout

| Token          | Value                                      | Class                          |
| -------------- | ------------------------------------------ | ------------------------------ |
| Page gutter    | 24 px (mobile), 40 px (768+), 96 px (1280+) | `px-gutter`                   |
| Control height | 40 px (buttons; 48 px in the design, reduced at owner request) | `h-control` |
| Touch target   | 44 px minimum                              | `size-touch`, `min-h-touch`    |
| Page width     | 1440 px                                    | `max-w-page`                   |
| Radii          | 8 px controls, 12 px cards, 16 px panels   | `rounded-control`, `rounded-card`, `rounded-panel` |
| Breakpoints    | 768, 1280 and 1440 px                      | `tablet:`, `laptop:`, `desktop:` |

**Spacing scale:** 4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 px. These are Tailwind's default spacing steps: `1`, `2`, `3`, `4`, `6`, `8`, `10`, `12`, `16`, `20`, `24`.

### Components: buttons

Matched to the Figma "Interaction states" sheet and the page headers. Both buttons are 40 px tall (reduced from the design’s 48 px at owner request, 2026-11-20), with 8 px corners and a 13 px semibold Inter label.

**Sizes:** `size="default"` has 24 px side padding and is used in the header, About and Contact (Download CV is 134 px wide, as in the design). `size="compact"` has 18 px padding and is used in the approved Home hero (Download CV is 122 px).

| State | `PrimaryButton` | `SecondaryButton` |
| --- | --- | --- |
| Default | Vertical gradient, `#08A3FB` top → `#1078BC` bottom, white label | Transparent, 1 px `#08A3FB` outline and label |
| Cursor | Hand cursor on every clickable control (`base.css`); "not-allowed" when disabled | Same |
| Hover (150 ms) | Soft brand glow underneath | Blue tint fill (`#EAF4FF` / `#142B45`) |
| Pressed (100 ms) | Gradient lightens (light theme) or darkens (dark theme); slight 98% press-in | Outline and label shift to `#2CB0FB` / `#098EDB`, tint fill; slight press-in |
| Disabled | 45% opacity, not clickable | 45% opacity with tint fill, not clickable |
| Keyboard focus | 2 px brand outline | 2 px brand outline |

**Usage:** pass `href` to get a link styled as a button, or leave it out to get a real `<button>`:

```tsx
<PrimaryButton href="/contact">Let's talk</PrimaryButton>        // internal link (Next.js <Link>)
<SecondaryButton href="https://github.com/…" target="_blank">GitHub</SecondaryButton>  // external, safe rel added
<PrimaryButton onClick={send} disabled={sending}>Send</PrimaryButton>  // real button
```

- **Primary hover:** the design's hover frame is pixel-identical to its default. A soft glow was added so hovering gives visible feedback. Remove the `hover:shadow` line in `variants.ts` to match Figma exactly.
- **Press-in:** the 98% press-in is skipped for visitors who prefer reduced motion.

**`DownloadCvButton`** is the one "Download CV" action used everywhere. It links directly to `/documents/Taby_Takoundjou_Jeff_Obrile_Frontend_Developer_CV.pdf` with the `download` attribute, same-origin and with the real file name. At build time it checks that the PDF exists in `public/documents/`. Until it does, the button renders **disabled** ("CV coming soon"), so the site never publishes a broken download, as the handoff requires.

### Components: header, mobile menu, footer

Measured from the Figma header, footer and mobile-menu exports.

| Width | Header behaviour |
| --- | --- |
| 1280 px and up | Logo and name, six centred links (13 px, 22 px apart), EN, theme toggle, Download CV. 88 px bar with a 1 px border. |
| 768–1279 px | Compact: links move into the menu. Name, EN, theme, Download CV and the menu button stay. |
| Under 768 px | Logo only (the name doesn't fit), EN, theme and the menu button. Download CV moves into the menu. |

- **Active page:** brand blue and semibold, announced with `aria-current="page"`. Hover is a readable blue label on a subtle tint (150 ms).
- **Mobile menu:** built on the native `<dialog>` element, so it gets what the handoff asks for with no extra code:
  - Focus stays inside while it's open.
  - **Escape** closes it, and focus returns to the menu button.
  - The page behind can't be clicked or scrolled.
  - It also closes on link tap, backdrop tap or page change.
  - It slides in over 150 ms and its links cascade in. Under reduced motion it opens instantly.
  - Layout: a full-width sheet on phones, a 390 px panel from 768 px up.
- **EN control:** a language indicator, not a toggle yet. The handoff says the control alone must not imply a page is translated, and French copy hasn't been supplied. It becomes the EN/FR switch once French content exists.
- **Footer:** logo and name, small links, the copyright line in JetBrains Mono, and LinkedIn / GitHub / Email. A social label turns into a link only once its real URL is set in `src/constants/site.ts`, so there are never dead links.
- **Skip link:** the first Tab press on any page shows "Skip to content", which jumps past the header.
- **Homepage header:** Home's approved design shows an older header variant (no EN, moon icon, underline under the active link). The site uses **one shared header on every route**, the refined version, so navigation stays consistent between pages.

### Pages: Home

Built from the approved Home 1440 export. Every position was measured from the export and checked in the browser.

| Part | Details |
| --- | --- |
| Intro (left) | Pulsing "Open to opportunities" status, name (18 px), roles (13 px brand blue), headline (72 px), intro (16/26), View My Projects + Download CV (compact), "Let's connect / Contact ↗" |
| Digital Craft card (right) | 386 px card, `#F7F9FC` surface; three steps (Understand, Design highlighted with tint and brand border, Build); the human + AI note |
| Technology strip | Divider, "DESIGN × ENGINEERING" eyebrow, five mono tags |
| 1440 / 1280 | Two columns, vertically centred. At 1280 the headline wraps to four lines (handoff: "content wraps naturally"). |
| 768 / 390 | The card stacks under the intro at full width. The headline scales down to 40 px, and nothing overflows sideways. |

**Measured against the design at 1440:**
- Status, name, roles, buttons, the strip divider (y 776), the eyebrow (x 96–216) and the page height (888 px) all land within 0–3 px.
- The headline keeps the design's line breaks: "Designing and Building / Digital Experiences That / Matter."

**Deviations, with reasons:**
- **Column gap:** 72 px instead of the design's 88 px. Without it, a 15 px Windows scrollbar would push "That" onto the third line.
- **Small blue text:** the brand `#08A3FB` is kept for small blue text, as the design specifies. The handoff asks for its contrast to be reviewed in the accessibility pass, not changed silently.

### Pages: About

Built from the approved About 1440 export, measured and checked in the browser.

| Part | Details |
| --- | --- |
| Portrait column (424 px) | Owner photo in a 4:5 frame with a 1 px border, then the blue-tinted role card (roles, Cameroon, English & French) |
| Intro column | "About Me" (44 px), lead paragraph (18/28), body paragraph (16/26), "Professional Focus" with four compact skill tiles, Download CV + caption |
| My Approach | 32 px heading, summary, three numbered cards (Understand → Structure → Build) |
| Details | Education and Professional Interests cards |
| 768 to 1279 | The About Me text sits beside the portrait (owner request) in a 2:3 split with a 32 px gap. Professional Focus tiles go two per row once each tile has 240 px, otherwise one per row. |
| 390 | Everything stacks, portrait first (handoff). The portrait stays 4:5, up to 424 px wide. |

- **Portrait framing:** the photo is drawn at 140% of the frame width and offset, so the crop matches the design exactly (head near the top, cut at the stool seat). Plain `object-cover` showed the whole figure, which is too loose. Percentages keep the same framing at every size.
- **Skill tiles:** `SkillTile` is the shared tile from the handoff, and the Skills page reuses it. About uses the `compact` density. Icons are Lucide icons, inline brand logos (Figma) or short blue monograms ("API", "{ }").
- **Education:** worded exactly as the handoff allows. No degree or completion status is claimed.
- **CV caption:** shows "PDF · Professional CV" once the PDF is added, and "… coming soon" until then. The design's "supplied during development" was a note for the developer, not copy for visitors.
- **Measured against the design:** at 1440, every block lands within 0–3 px (portrait 168–698, role card 714–832, approach cards 994–1157).
- **Approach card padding:** 22 px instead of 24 px. With a 15 px Windows scrollbar, the third card's text would otherwise wrap onto a third line, 1 px short.

### Pages: Skills

Built from the approved Skills 1440 export, measured and checked in the browser.

| Part | Details |
| --- | --- |
| Intro | "A connected set of capabilities." (44 px), 18 px description |
| Category panels | 2 × 2 grid of 612 px panels, 24 px apart. Each has an eyebrow, a 26 px title, a 14 px description and 80 px skill tiles (two columns, 12 px across, 20 px down). Row 2 panels keep their own heights, as designed. |
| Skills | All **24** labels from the handoff: Frontend (7), UI/UX (7), Backend (5, presented as complementary, as the handoff requires), Tools & Workflow (5) |
| Icons | HTML5, CSS3 and Figma in brand colours. React, Next.js, Vite, Node.js, MongoDB, PostgreSQL, Git and GitHub in brand blue. JS, TS, UX, API and { } as readable-blue monograms. |
| Note | "Technical judgment comes first." on a soft surface |
| 768 px and up | Panels stack below 1280 px; comfortable tiles in two columns |
| 390 | Handoff rule: technology skills as **paired compact tiles** (64 px), the 7 long workflow labels as **full-width rows**, no horizontal overflow |

**SkillTile densities** (handoff names in brackets): `comfortable` (Comfortable, 80 px), `compact` (About's focus tiles) and `adaptive` (Skills: Compact Tile / Compact Row on phones, Comfortable from 768 px).

**Measured against the design at 1440:** panels 334–894 and 934–1416 (design 332–894 and 936–1418), the note at 1456–1592 (design 1459–1592), and the page end at 1704 (design ~1705).

**Vite logo:** shows Vite's current official logo. The design used the older "V" mark.

### Pages: Projects

Built from the approved Projects export (supplied at 806 px wide and scaled to 1440 for measuring), and checked in the browser.

| Part | Details |
| --- | --- |
| Intro | "Interfaces for real-world complexity.", description, and the placeholder notice |
| Three projects | **Yiino**, **Yiino Freight / InnoFrit** and **Yiino for Business**, 64 px apart. Each has a cover, live info and a "View Project" disclosure. |
| Cover | Labelled "Illustrative UI placeholder · Not a real product screenshot" (handoff). Blue tint (Yiino, Business) or grey surface (Freight). Project tag, headline, three chips, the device composition, and the "Replace named preview regions…" caption. |
| Compositions | Built in HTML/CSS, not images, so they're sharp and follow light/dark mode. Yiino: rider phone, partner phone and operations panel. Freight: shipment dashboard and tracking phone. Business: mobility dashboard and voucher panel. Generic cues ("Shipment ID", "Employee name") as the handoff specifies. |
| Info | Eyebrow, 36 px title and description on the left; tagline, "Relevant toolkit" pills and "Project-specific stack to confirm." on the right |
| Details | "View Project +/–" opens **Product areas** and **My contributions** in place |
| 768 and up | The wide composition, scaled to fit the cover (handoff: artwork may scale; facts stay live text) |
| 390 | A compact composition: one device per project (rider phone, tracking phone, voucher panel) |

**Interactions (handoff contract):**
- **Cover hover** (mouse only): a 2 px lift and restrained shadow, 180 ms, never a zoom. There's no lift under reduced motion.
- **View Project:** a real `<button>` with `aria-expanded` and `aria-controls`. It expands over 220 ms with a CSS grid-row transition (no layout measuring) and keeps focus on the button. The collapsed content is `inert`, so keyboard and screen-reader users skip it. It's instant under reduced motion.
- **Covers start collapsed**, as the handoff allows ("production may start collapsed"). Every product area and contribution is one click away and is always in the page's HTML.

**Replacing a placeholder with a real screenshot:** put the approved image in `public/images/projects/<project>/`. Then replace that project's composition in `src/components/sections/projects/covers/` with a `next/image` using `object-fit: contain` (handoff), and remove the placeholder labels for that cover.

### Pages: Experience

Built from the approved Experience 1440 export, measured and checked in the browser.

| Part | Details |
| --- | --- |
| Intro | "Building in collaboration.", description |
| Meta column (256 px) | "PROFESSIONAL EXPERIENCE", "Since September 2025", "Yiino Corp Cameroon" |
| Role card | "Technical Developer" (32 px), "Yiino Corporation / Yiino Corp Cameroon" in blue, summary. Then three white focus areas (01 Engineering, 02 Experience design, 03 Quality & collaboration) and the relevant toolkit. |
| Education banner | Tinted: Computer Science and Engineering, Institut Universitaire de la Côte (IUC), Cameroon |
| Below 1280 | The meta column sits above the card; everything stacks, with no overflow at 390 |

- **Facts:** exactly as the handoff states. One employer since September 2025, no extra employers or awards, and education without a degree or completion claim.
- **Measured against the design at 1440:** role card 342–1282 (design 339–1285), focus areas within 2–5 px, education banner 1330–1495 (design 1334–1497).
- **Animation:** the intro and meta column rise in on load. The role card's title, company, summary and the three focus areas cascade in as they scroll into view, then the education banner follows.

### Pages: Contact

Built from the approved Contact 1440 export, measured and checked in the browser.

| Part | Details |
| --- | --- |
| Left column | "Let's Build Something Together.", the invitation, three channel cards, the closing lines |
| Channel cards | **Email** (`tabytakoundjou@gmail.com`, opens the mail app), **LinkedIn** (`linkedin.com/in/jeff-obrile-06a1a9450`, new tab) and **GitHub** (`github.com/taby-del`, new tab). |
| Form card | "Start a conversation.": Full Name, Email Address, Subject, Message, Send Message, and the status line |
| Below 1280 | The columns stack (handoff: stacked Contact at 768 and 390), with no overflow at 390 |

**Form behaviour** (handoff > Contact form behavior):

| Requirement | Implementation |
| --- | --- |
| Visible labels, autocomplete, email input type, real textarea | `ContactField`: `<label for>`, `autocomplete="name"` / `"email"`, `type="email"`, `<textarea>` |
| Errors paired with helpful text | `aria-invalid` and `aria-describedby` point to the message below the field |
| Focus the first invalid field on submit | `focusFirstInvalid` |
| Announce delivery status | `FormStatus` is an `aria-live="polite"` region |
| Default / Focus / Error / Success / Disabled states | Matched to the interaction sheet, including "Email format accepted. Not a delivery confirmation." |
| Validate first, then disable and show "Sending…" | The whole fieldset is disabled while sending; the button reads "Sending…" |
| "Message sent" only after confirmed delivery | The success message appears only when the email API responds OK; the fields are then cleared |
| Keep text on failure and offer a retry | The fields are untouched and the status asks to try again |
| Prevent duplicate sends | Ignored while a send is in progress |
| Lightweight spam protection | Hidden honeypot field, a 3-second minimum fill time, and a per-visitor limit of 3 messages per 10 minutes |
| Keys on the server | `SUPABASE_SECRET_KEY` and `RESEND_API_KEY` are read only in `server-only` modules |

### Contact backend: storage + email notification

Every submission is **saved in a database** and the owner gets an **email notification**. There's no separate server to run: the backend is a Next.js Server Action deployed with the site.

```
Visitor submits form
  → Server Action (src/app/contact/actions.ts)
      1. honeypot + minimum fill time      (spam)
      2. validate all fields again         (never trust the browser)
      3. rate limit: 3 messages / 10 min   (abuse)
      4. deliverContactMessage (src/lib/contact/deliver.ts)
           a. email owner via Resend:  "New collaboration request from <name>"
           b. save row in Supabase:    contact_messages (notified = true/false)
  → "Message sent" only if (a) or (b) succeeded; otherwise "try again", text kept
```

- **No message is lost silently.** If the email fails, the message is still in the database with `notified = false`. If the database fails, the owner still has the email.
- **Privacy:** the table has **Row Level Security switched on, with no public rules**. The public key can neither read nor write it; only the server's secret key can insert. Visitors can't see each other's messages.
- **No extra packages:** Supabase and Resend are called with plain `fetch` through their REST APIs.
- **Tested** against a local mock of Supabase's API:
  - The exact request was verified: `POST /rest/v1/contact_messages`, the `apikey` header, and a body matching the table.
  - A success shows "Message sent" and clears the form.
  - A server error shows "try again" and keeps the text.

**Setup (one time, about 10 minutes):**
1. **Supabase:** create a free account and project at [supabase.com](https://supabase.com).
   - Go to **SQL Editor → New query**, paste [`supabase/schema.sql`](supabase/schema.sql) and click **Run**.
   - Copy the **Project URL** (Project Settings → Data API) and the **secret key** (Project Settings → API Keys).
2. **Resend:** create a free account at [resend.com](https://resend.com) and an **API key**.
   - Resend's test sender delivers only to the email the Resend account was created with, so sign up with `tabytakoundjou@gmail.com`, or verify a domain and set `CONTACT_FROM_EMAIL`.
3. **Local:** copy `.env.example` to `.env.local`, fill in `SUPABASE_URL`, `SUPABASE_SECRET_KEY` and `RESEND_API_KEY`, then restart `npm run dev`.
4. **Vercel:** add the same variables under **Project → Settings → Environment Variables**, then redeploy.
5. **Reading messages:** open Supabase **Table Editor → contact_messages**. The newest messages come first, and each one shows whether you were notified by email.

Until these are set, the form says "Online sending isn't set up yet" and shows the email address, so a message is never silently lost.

---

## Theme system

Built to the handoff rule: *"one global theme preference shared across all routes, initialised before paint, no flash, colours update together over 180 ms"*.

| Requirement | How it works |
| --- | --- |
| No flash on load | `ThemeScript` runs a tiny inline script in `<head>` that applies the saved choice before anything is painted (the Next.js "preventing flash" pattern). Pages stay statically pre-rendered. |
| First visit | **Light by default** (owner request, 2026-11-17), even when the device is set to dark. The visitor can switch to dark with the toggle, and that choice is remembered. |
| One choice for every route | The choice is saved in `localStorage` and applied to `<html data-theme>`, which persists across page navigations. |
| Synced across tabs | Changing the theme in one tab updates every other open tab instantly (`storage` event). |
| 180 ms cross-fade | During a switch only, `<html>` gets the `theme-transition` class, which fades background, text and border colours. It never uses `transition: all`. |
| Reduced motion | When the OS asks for reduced motion, the switch is instant. |
| Security | The script only accepts the exact values `light` or `dark`, so a tampered saved value cannot inject anything. |

**Code:** `src/lib/theme/*` (logic), `src/hooks/useTheme.ts` (React hook), `src/components/theme/*` (script and toggle).

### Favicon and icons

The browser-tab icon, app icon and iOS home-screen icon are all made from the brand logo (`public/images/brand/taby-jeff-logo.webp`). They use the Next.js metadata file conventions, so Next adds the `<link>` tags itself.

| File | Size | Used for |
| --- | --- | --- |
| `src/app/favicon.ico` | 16, 32, 48 px | Browser tabs and bookmarks |
| `src/app/icon.png` | 512 px | Modern browsers and search results |
| `src/app/apple-icon.png` | 180 px | iOS "Add to Home Screen" |

They are generated by `npm run icons` (`scripts/generate-icons.mjs`) with **sharp**, which Next.js already installs, so no new package is needed. Re-run it whenever the logo changes. The ICO holds RGBA PNG images, because Next.js rejects any other kind. The larger PNGs use a 256-colour palette to keep them small.

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

**Reveal components:** `RevealGroup` reveals its `RevealItem` children one after another, either on page load (`trigger="mount"`, above the fold) or when scrolled into view (`trigger="view"`). Every page uses them, so every page shares the same motion language.

**Home choreography:**
1. **0 s:** the intro lines rise in turn, and the headline words sharpen from blur one by one.
2. **0.35 s:** the Digital Craft card enters, and its three steps cascade in.
3. **0.6 s:** the toolkit tags appear.

The status dot pulses gently, and the contact arrow nudges on hover. All of this uses transform, opacity and blur only, and movement is removed under reduced motion.

**About choreography:** the portrait fades in while the intro lines rise in turn, then the focus tiles cascade, then Download CV appears. My Approach and the detail cards reveal as they scroll into view.

**Projects choreography:**
- Each project's cover, info and details rise in as it scrolls into view, then the cover's devices arrive one after another.
- While scrolling, the layered devices (partner phone, operations panel, tracking phone, voucher panel) drift gently at different speeds, up to 28 px. This scroll parallax gives the covers depth.
- Under reduced motion the parallax is off entirely; the handoff says "do not translate covers".
- The parallax starts at 0 on the server and in the browser, so the HTML always matches (this fixed a hydration warning found during testing).

**No-JavaScript safety net:** animated content starts hidden, and JavaScript reveals it. `NoScriptReveal` adds a `<noscript>` style that shows everything immediately if JavaScript is disabled or fails to load, so a page is never blank.

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

**Contact form security**
- The form posts to a Next.js **Server Action** on the same site, so it's allowed by the CSP's `form-action 'self'`.
- Every field is validated again on the server, never trusting the browser.
- The email key stays on the server.
- Spam is limited by a honeypot, a minimum fill time and a per-visitor rate limit.
- External channel links open with `rel="noopener noreferrer"`.

**Other rules**
- Never commit secrets. `.env*` files are ignored by Git; only the empty template `.env.example` is committed.
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

## Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| Styles missing or out of date in `npm run dev`, but correct in `npm run build` | Turbopack's persistent dev cache (`.next/dev`) kept output from a failed compile | Stop the dev server and run `npm run dev:clean` |
| "Module not found" for a package right after adding it | The page compiled before `npm install` finished | Wait for the install to finish (check `package.json`), then save any file or restart `npm run dev` |
| Animations look minimal (fades only, no movement) | The operating system's "reduce motion" setting is on, and the site respects it (handoff requirement). Motion logs "You have Reduced Motion enabled on your device" in the console. | Expected behaviour. To preview full motion on Windows, go to Settings → Accessibility → Visual effects → **Animation effects: On**. |

---

## Build roadmap

The site is built one step at a time. Each step is checked against the design, then committed on `Jeff` and pushed to `Dev`.

| Step | Scope | Status |
| --- | --- | --- |
| 1 | Design foundation: tokens, fonts, theme system, animation system | ✅ Done |
| 2 | Buttons: `PrimaryButton`, `SecondaryButton`, all states | ✅ Done |
| 3 | Header, compact header, mobile menu, footer, six routes | ✅ Done |
| 4 | Home (approved design, preserved as-is) | ✅ Done |
| 5 | About | ✅ Done |
| 6 | Skills | ✅ Done |
| 7 | Projects | ✅ Done |
| 8 | Experience | ✅ Done |
| 9 | Contact (form and email delivery) | ✅ Done |

**Waiting on the owner** (each item already has a safe fallback in place):

| Item | Where it goes | Until then |
| --- | --- | --- |
| CV PDF | `public/documents/Taby_Takoundjou_Jeff_Obrile_Frontend_Developer_CV.pdf` | Download CV buttons are disabled ("CV coming soon") |
| Supabase + Resend values **in Vercel** | Vercel → Project → Settings → Environment Variables (same names as `.env.local`) | Done locally (2026-11-17); the live site needs them too |
| Hosting | Vercel (recommended for Next.js): import the GitHub repo, production branch `main` | Runs locally only |
| Real project screenshots (with permission) | `public/images/projects/<project>/` | Labelled illustrative covers |
| French copy | A French content dictionary | The EN indicator; no fake translation |

---

## Development log

Every step taken on the project, newest first. **Add an entry for every change.**

### 2026-11-20: Smaller header controls and buttons, no numbered labels

- **Owner request:** the header controls and buttons looked too big, and the numbered labels ("02 / ABOUT" to "06 / CONTACT") didn’t look professional.
- **Sizes:** EN, the theme toggle and the menu button are now 40 px squares (were 44 px) with 18 px icons (were 20 px). Every button (Download CV, View My Projects, Send Message…) is 40 px tall (was 48 px), with 20 px side padding (16 px in the Home hero). Tokens: `--spacing-control` and `BUTTON_SIZES`. 40 px still clears the WCAG 2.2 AA target size (24 px).
- **Labels:** removed the page labels on About, Skills, Projects, Experience and Contact, and the "01 /" numbering from the Skills panels, project cards and Experience role areas. Their wording stays ("Primary practice", "Mobility & on-demand services platform").
- **Verified** in the browser at 1440 and 1024 px: controls measure 40 × 40, buttons 40 px tall, and no page shows a numbered label.

### 2026-11-20: Download CV restored with the real CV

- **Owner request:** the CV is now exported from Figma, so the Hire Me change of 2026-11-19 is undone and the **Download CV** button is back everywhere (header, mobile menu, Home hero, About), done with `git revert`.
- **CV file:** `public/documents/Taby_Takoundjou_Jeff_Obrile_Frontend_Developer_CV.pdf` (one page, 1.4 MB, Figma export, no encryption or scripts). Renamed from the owner’s `Jeff-CV.pdf` so visitors get a descriptive file name.
- **Enabled automatically:** `isCvAvailable()` finds the PDF at build time, so the buttons are active and the About caption reads "PDF · Professional CV".
- **Verified** in the browser: the PDF is served (200, application/pdf) and every Download CV link points to it with the `download` attribute.

### 2026-11-19: "Hire Me" replaces "Download CV"

- **Owner request:** every "Download CV" button became an enabled **Hire Me** button opening the Contact page, because no CV PDF had been supplied yet. Undone on 2026-11-20 (see above).

### 2026-11-19: About Me beside the portrait at every width from 768

- **Owner request:** the About Me content must sit beside the profile image, as in the design. Before, the two columns only appeared from 1280 px, so on most laptops (for example 1366 px screens at 125% scaling, about 1093 px wide) the text dropped under the photo.
- **Change:** `AboutPage` uses a 2:3 grid from 768 px and keeps the fixed 424 px portrait column from 1280 px. Phones (below 768) still stack, portrait first.
- **Focus tiles:** `FocusGrid` now picks one or two columns from the space available (each tile at least 240 px), so the tiles never get squeezed in the narrower column.
- **Contact check:** a test submission on localhost was stored in Supabase with `notified = true`, so the local backend works. Resend's test sender often lands in Gmail spam.
- **Verified** in the browser at 390, 768, 1024 and 1440 px: side by side from 768, matches the 1440 design, no sideways overflow.

### 2026-11-17: Logo favicon and light theme by default

- **Favicon:** the default Next.js icon was replaced with the brand logo. `scripts/generate-icons.mjs` (`npm run icons`) creates `favicon.ico` (16/32/48), `icon.png` (512) and `apple-icon.png` (180) with sharp (already installed by Next.js).
  - The first ICO used RGB PNGs, and Next.js refused it ("The PNG is not in RGBA format", a 500 error in dev). Fixed by adding an alpha channel.
- **Light by default** (owner request): `:root` now uses `color-scheme: light`, and the OS dark setting is no longer followed. Dark applies only after the visitor picks it with the toggle, which is saved and synced across tabs as before. `theme-color` is now the light background.
- **Verified** in the browser with the device set to dark: the site opens white, the toggle switches to dark, dark persists after a reload, and all three icons are served (200).

### 2026-11-17: LinkedIn profile linked

- The owner supplied the profile URL `https://www.linkedin.com/in/jeff-obrile-06a1a9450/`, now set in `SOCIAL_LINKS` (`src/constants/site.ts`).
- The footer and Contact card now link to it (new tab, `rel="noopener noreferrer"`). The card shows `linkedin.com/in/jeff-obrile-06a1a9450`.
- **Verified** in the browser on desktop and at 375 px: the correct href, no clipping and no horizontal scroll.

### 2026-11-17: Real Supabase and Resend connected

- The owner created a Supabase project (ran `supabase/schema.sql`) and a Resend account, then put the keys in `.env.local` (git-ignored; values never shown in chat or logs).
- `store-message.ts` now builds the endpoint from the URL **origin** only, so a pasted `https://<project>.supabase.co/rest/v1/` URL also works.
- **Verified end to end** on the dev server: a real form submission showed "Message sent", the row appeared in `contact_messages` with `notified = true`, and Resend accepted the email.

### 2026-11-17: Contact backend, storage in Supabase + email notification

- The owner chose **Supabase** for storing contact submissions.
- Added `supabase/schema.sql`: a `contact_messages` table with length checks and a newest-first index. **Row Level Security is on with no public policies**, so only the server can write.
- Added `store-message.ts`, which saves to Supabase over REST with `fetch`, server-only, supporting both new `sb_secret_` and legacy `service_role` keys.
- Added `deliver.ts`, which emails the owner and then saves the row with `notified`. "Message sent" is reported only if at least one succeeded.
- The notification email now has the subject "New collaboration request from <name>" and lists the name, email, subject, time and message. Replying answers the visitor.
- Added the Supabase variables to `.env.example`. Moved the cursor and focus rules from `base.css` into a new `interaction.css`, so both files stay under 50 lines.
- **Verified** against a local mock Supabase API with the production build: the correct request and body were received, a success shows "Message sent" and clears the form, and a 500 error shows "try again" with the text kept.

### 2026-11-17: Owner refinements, button gradient and cursor

- **Gradient:** primary buttons now use a vertical gradient, light blue `#08A3FB` at the top to deep blue `#1078BC` at the bottom (owner request; previously 135°). Changed once in `--brand-gradient` (`tokens.css`) and `BRAND_GRADIENT`, so every primary button updates.
- **Cursor:** every clickable control now shows the hand cursor (`base.css`). Tailwind v4 resets buttons to the default arrow. Disabled controls show "not-allowed".
- **Verified in the browser:** the computed gradient is `#08A3FB → #1078BC` top to bottom, and buttons use `cursor: pointer`.

### 2026-11-17: Step 9, Contact page and form (all steps complete)

- Measured the Contact export: two 600 px columns, channel cards, the form card, 56 px fields, a 160 px message box, the button and the note.
- Added `src/data/contact.ts` and built `ContactPage`, `ContactIntro`, `ContactChannel`, `ContactForm`, `ContactField` and `FormStatus`, plus the `--field-border` token.
- **Form logic:**
  - `src/lib/contact/schema.ts`: validation shared by the browser and the server.
  - `form-dom.ts`, `useContactForm` (state machine) and the `sendContactMessage` server action.
  - Spam protection: honeypot, a 3-second minimum and a rate limit.
  - Delivery through the Resend API (`send-email.ts`, server-only, no SDK).
  - Added `.env.example`, with a `.gitignore` exception so only the template is committed.
- **Honest outcomes:** a submission that's too fast returns "please try again" instead of a silent fake success. Only the hidden honeypot, which people never fill in, silently drops a submission.
- Removed `PagePlaceholder`, which is no longer used.
- **Verified in the browser:**
  - Layout within 0–7 px of the design at 1440.
  - Empty submit: all four fields `aria-invalid` with messages, and focus on Full Name.
  - Email field: the invalid → error and valid → success states.
  - Full submit without an API key: an honest "not set up yet" message with a mailto link, and the text kept.
  - No overflow at 390; all checks pass.

### 2026-11-17: Step 8, Experience page

- Measured the Experience export: header, the 256 px meta column, the role card (32 px padding), the three focus sub-cards (24 px apart), the toolkit line and the education banner.
- Added `src/data/experience.ts` (role, focus areas, toolkit, education) and built `ExperiencePage`, `RoleCard`, `RoleArea` and `EducationBanner`.
- Tuned the inner spacing after measuring in the browser, so the card and focus areas land within 2–5 px of the design.
- **Verified:** light at 1440, no overflow at 390, all checks pass.

### 2026-11-17: Step 7, Projects page

- **Social links:** GitHub (`github.com/taby-del`) and email (`tabytakoundjou@gmail.com`, from the Contact design) are now live links in the footer.
  - LinkedIn stays plain text for now. The supplied `linkedin.com/feed/` opens each visitor's own feed, not this profile, so it needs the `linkedin.com/in/…` profile URL.
- **Design export:** converted the WebP Projects export with sharp, which Next.js already includes, and measured it, scaling 806 → 1440 px.
- **Data:** added the `Project` type and one data file per project (`src/data/projects/`), with all product areas and contributions from the design.
- **Cover artwork:** built the reusable mockup kit (`ScaleToFit`, `Placed`, `PhoneFrame`, `BrowserFrame`, `MockParts`, `MockSidebar`, `MockStats`, `MockTable`) and the three cover compositions, each with a compact phone variant.
- **Page sections:** built `ProjectsPage`, `ProjectArticle`, `ProjectCover` (hover lift), `CoverArt`, `ProjectInfo`, `ProjectDetails` (accessible 220 ms disclosure) and `DetailsColumns`. Added `text-project-title` (36 px).
- **Fixed a hydration mismatch:** the scroll-parallax layer rendered a different offset on the server than in a browser with reduced motion. Parallax now starts at 0 everywhere.
- **Verified in the browser:**
  - At 1440: geometry matches the design (columns 256 + 865 px / 789 + 412 px). Spacing was tuned so the notice and covers line up, and there's no overflow.
  - The disclosure (aria-expanded, inert when closed, 0.22 s, focus kept).
  - Dark mode at 390, with the compact rider-phone cover.
  - No console errors on a fresh load; all checks pass.

### 2026-11-16: Step 6, Skills page

- **Measured the Skills export:**
  - The intro, the 2 × 2 panel grid, panel padding, the 26 px titles, the 276 × 80 px tiles with 48 px icon boxes, and the callout.
  - Icon colours: brand colours for HTML5, CSS3 and Figma; brand blue for the rest; `#1078BC` monograms.
- **Type scale:** split into `typography.css` (UI and body) and `typography-headings.css` (titles), so each file stays under 50 lines. Added `text-subheading` (26 px).
- **Data:** added all 24 skills in `src/data/skills.ts`. Long workflow labels are marked `wide`, so they take a full row on phones.
- **Components:**
  - `SkillTile` gained the `adaptive` density (compact on phones, comfortable from 768 px), with the monogram colour per density.
  - `SkillGlyph` now draws brand logos through the new `BrandLogo`, `brand-paths.ts` and `Css3Logo`.
  - Built `SkillsPage` and `SkillPanel`.
- **Incident, fixed:**
  - The brand-logo code was written while `npm install simple-icons` was still downloading on the slow network. The dev site briefly failed to compile ("Module not found: simple-icons"), which also broke About.
  - **Fix:** the 9 needed logo paths were copied into the project (CC0), the unfinished install was stopped and its partial folder removed. `package.json` was never changed, so the project has no new dependency.
  - The dev server's cache then still served stale CSS (missing heading sizes). It was cleared, and `npm run dev:clean` plus a Troubleshooting section were added so this is a one-command fix in future.
- **Verified in the browser:**
  - Light at 1440 (blocks within 0–7 px of the design) and the phone layout at 390 (paired tiles, 7 full-width rows, no overflow).
  - All 24 tiles and 11 logos render.
  - About re-checked after the fix.
  - No dev server errors; all checks pass and the production build succeeds.

### 2026-11-16: Step 5, About page

- **Measured the About export:**
  - Text rhythm, portrait (424 × 530, 4:5) and role card.
  - The 2×2 focus tiles (382 × 64), the three approach cards (24 px gaps) and the two detail cards.
- **Type scale:** replaced the unused `text-display` with the measured `text-page-title` (44 px). Retuned `text-heading` to 32 px and added `text-card-title` (17 px).
- **Shared components for the remaining pages:**
  - `Eyebrow` ("02 / ABOUT").
  - `SkillTile` with the handoff's three densities.
  - `SkillGlyph` (Lucide icon, brand logo or monogram) and an inline `FigmaLogo`.
  - A `SkillIcon` type.
- **Built the About sections:** `AboutPage`, `Portrait`, `RoleCard`, `AboutIntro`, `FocusGrid`, `ApproachSection` and `AboutDetails`. The content lives in `src/data/about.ts`.
- **Portrait:** matched the design's tighter framing by measuring the cuff positions in the design against the original photo (scale ≈ 0.446). The photo is now 140% of the frame width, offset −10.5% / −5.75%.
- **Added `NoScriptReveal`:** if JavaScript is off, animated content would otherwise stay invisible.
- **Verified in the browser:**
  - Light and dark at 1440, 768 and 390, with blocks within 0–3 px of the design at 1440.
  - Portrait exactly 4:5 at every width, and no horizontal overflow.
  - All checks pass (85 files) and the production build succeeds.

### 2026-11-16: Step 4, Home page

- Received the desktop (1440, light) designs for all six pages. They're kept in a local `design/` folder (not committed) as the reference for each step.
- **Measured the Home export:**
  - The position of every text line, plus the card, steps, divider and tags.
  - Text colours (`#08A3FB` and `#64748B`).
  - Headline settings, matched in the browser: 72 px, semibold, −0.045em, 1.04 leading.
- **New type tokens** in a new `src/styles/typography.css`, so `scales.css` stays under 50 lines: `text-eyebrow` (10 px), `text-micro` (11 px) and `text-hero` (40–72 px, fluid). Also added a tag radius.
- **New button sizes:** `size="default"` (24 px padding) and `size="compact"` (18 px, Home). This replaces class overrides, which can't work reliably without a class-merging library.
- **Built the reusable `RevealGroup` and `RevealItem`,** and the Home sections:
  - `HomeHero`, `HeroIntro`, `StatusBadge` and `HeroHeadline` (word-by-word reveal).
  - `HeroActions`, `CraftCard`, `CraftStepItem` and `TechStrip`.
  - The content lives in `src/data/home.ts`.
- **Fixed a line-wrapping bug:** each animated headline word carried its trailing space inside its own box, which made the headline wrap early. The spaces now sit between the words, so wrapping matches plain text.
- **Verified in the browser:**
  - Light and dark at 1440, 1280, 768 and 390.
  - Positions within 0–3 px of the design at 1440, and the design's headline line breaks.
  - No horizontal overflow at 390.
  - All checks pass (71 files) and the production build succeeds.

### 2026-11-16: Step 3, header, mobile menu, footer and routes

- Added the owner's logo (`public/images/brand/taby-jeff-logo.webp`) and portrait (`public/images/profile/taby-takoundjou-jeff-obrile.jpg`, for the About page). Next.js serves both resized and compressed.
- **Measured the Home and refined-page headers and the footer from the Figma exports.** The comparison showed buttons use a **13 px** label (not 14), so the buttons were corrected and `text-label` (13 px) and `text-caption` (12 px) were added to the type scale.
- **Built the shared navigation:**
  - `NAV_ITEMS` data and the header (full, compact and phone layouts).
  - Desktop `NavLinks` with an active state.
  - `LanguageIndicator` (EN) and a contrast-icon `ThemeToggle`.
  - The mobile menu on the native `<dialog>`: focus trap, Escape, focus return, scroll lock, a 150 ms entrance and staggered links.
  - The footer, with social links that stay plain text until real URLs are supplied.
- Added the five routes `/about`, `/skills`, `/projects`, `/experience` and `/contact` with page titles (placeholders until their steps), plus a "Skip to content" link on every page.
- Shared the 44 px square control style (`icon-control.ts`), split the mobile-menu CSS into two files, and moved the menu animation into `menu-variants.ts`, so every file stays under 50 lines.
- **Verified in the browser:**
  - At 1440, header geometry matches the design: 88 px bar, 96 px gutters, 44 px logo and controls, nav centred with 22 px gaps, 134 px Download CV.
  - At 1280, 768 and 390: the right layout for each width, no horizontal overflow, and the menu button on the 24 px gutter at 390.
  - The menu opens as a modal, closes with a real Escape key press with focus returned, and navigates and closes on link tap.
  - All six routes return 200; unknown URLs return 404.
  - The security headers block framing even from the same site, as intended.

### 2026-11-16: Step 2, buttons

- Measured every button state from the Figma "Interaction states" export in light and dark mode: size, corner radius, gradient, and pressed and disabled colours.
- Added state tokens (`src/styles/states.css`):
  - Pressed blue: `#2CB0FB` light, `#098EDB` dark.
  - Pressed overlay on the gradient.
  - Hover glow.
  - 45% disabled opacity.
- Built `PrimaryButton` and `SecondaryButton` on one shared `ButtonBase` and `variants.ts`, so the two can never drift apart.
  - Each renders a Next.js `<Link>` for internal pages, a plain `<a>` for external links and downloads (adding `rel="noopener noreferrer"` to new-tab links), or a real `<button>`.
  - All states are covered: default, hover (150 ms), pressed (100 ms), disabled and keyboard focus.
- Added `DownloadCvButton` and the shared CV path in `src/constants/assets.ts`. A build-time check (`src/lib/assets/cv.ts`, server-only) keeps the button disabled until the real PDF is added, so there's never a broken download.
- Verified in the browser:
  - Sizes: 48 px tall, 8 px corners, 14 px semibold Inter.
  - Every state colour matches the sampled design values in both themes.
  - Hover tint and disabled behaviour.
- The placeholder home page now previews all button states.

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
