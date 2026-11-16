# Portfolio implementation handoff

> **Source:** Figma file "My-Portfolio" section, handoff supplied by the owner on 2026-11-16.
> This is the authoritative specification for content, layout, tokens and interactions. Colour values sampled from the exported designs are listed in the [README design system](../README.md#design-system).

## Scope and status

The eight approved Home layouts and visual direction are preserved. Owner-supplied name and monogram placeholders have been personalized; the homepage has not been redesigned. About, Skills, Projects, Experience and Contact are refined in place at 1440, 1280, 768 and 390 px in both Light and Dark: 40 refined layouts. These are editable designs and a native navigation prototype, not a deployed website. No PDF download or email delivery is active until the required assets and endpoint are supplied.

## Professional identity — authoritative content

- Primary: Frontend Developer | UI/UX Designer.
- Secondary: AI-Assisted Full-Stack Developer.
- Strongest areas: frontend engineering and UI/UX design. Backend is complementary, covering system logic, technical analysis, architecture and AI-assisted implementation. Do not introduce senior-backend, DevOps or cloud-architect positioning.
- Technical Developer — Yiino Corporation / Yiino Corp Cameroon, starting September 2025. No additional employers, awards or certifications are implied.
- Institut Universitaire de la Côte (IUC), Cameroon — Computer Science and Engineering. Qualification/completion status has not been supplied. Do not label this as an awarded diploma or completed degree.
- Full name: Taby Takoundjou Jeff Obrile.
- Languages: English and French. Email, LinkedIn and GitHub URL placeholders still require owner-supplied values.

## Implementation architecture

Use Next.js, React, TypeScript, Tailwind CSS, Lucide React and Motion only where useful. Keep the existing six navigation destinations: Home, About, Skills, Projects, Experience and Contact. Do not add project subpages, authentication, a CV dashboard, messaging dashboard or a database. Use shared page layout, Header, Footer, PrimaryButton, SecondaryButton, SkillTile, TechnologyTag, ProjectCover, ProjectDetails and ContactField components. SkillTile exposes Comfortable, Compact Tile and Compact Row densities. On mobile use paired Compact Tiles for technologies and full-width Compact Rows for long workflow labels; retain all 24 skill labels and category descriptions. TechnologyTag wraps naturally and presents a relevant toolkit, not an unverified project-stack claim. Keep component structure shallow.

## Responsive rules

| Width | Layout behavior | Content gutter |
|---|---|---|
| 1440 | Two-column About/Contact; paired skill categories; wide project compositions | 96 px |
| 1280 | Same hierarchy with reduced available width; content wraps naturally | 96 px |
| 768 | Compact navigation; stacked About/Contact and capability categories; wide project cover composition | 40 px |
| 390 | Compact navigation; portrait first; two-column compact technology tiles with full-width workflow rows; compact project cover composition | 24 px |

Use content-driven heights, min-width: 0, responsive grids and wrapping. Do not scale down the desktop page. Browser/device artwork can scale within its designated cover; essential descriptions, project features and contributions remain live text outside the preview. Keep touch targets at least 44 px. The portrait remains 4:5. No horizontal overflow.

## Themes and design tokens

Reuse the existing Portfolio Semantic themes and Geometry collections. Page roots explicitly select Light or Dark. New controls inherit the selected mode. Added action/on-primary is white in both themes; existing on-accent was not changed because the approved homepage depends on its established semantics. Brand primary is #08A3FB and gradient end is #1078BC. Text/accent-readable provides a darker blue on light surfaces. Status/error and status/success adapt to theme.

All primary portfolio buttons use the approved 135-degree #08A3FB → #1078BC gradient, semibold white text, pill corners and consistent 48 px target height. Secondary buttons keep transparent default fill, 1 px #08A3FB outline and #08A3FB label; hover introduces a subtle blue tint. Do not replace primary gradients with solid blue. Branded secondary blue is an explicit design requirement; assess small-label contrast during production accessibility review rather than silently changing the brand. Inter and JetBrains Mono are preserved. Readable paragraph styles are 14/22, 16/26 and 18/28.

Store one global theme preference shared across all routes. Initialize from saved preference or prefers-color-scheme before paint, avoid theme flash, and update background, foreground and border colors together over 180 ms. Do not use transition: all or animate layout. Prefer CSS variables; honor prefers-reduced-motion with immediate state/theme changes.

## Asset registry — supplied and pending

The owner-supplied profile photograph is placed in all eight About portrait areas. Keep its natural appearance and the current 4:5 crop in both themes. Alt text: Portrait of Taby Takoundjou Jeff Obrile.

The three project-cover patterns are visually developed illustrative UI placeholders, NOT real product screenshots and not evidence that the depicted interfaces are implemented. Yiino uses ride-booking and partner phone compositions plus service operations; InnoFrit uses a freight dashboard with shipment tracking; Yiino Business uses employee/program management with a voucher panel. Generic labels such as Shipment ID and Employee name are replacement cues, not actual project data. Keep the visible illustrative-placeholder labels until approved screenshots replace the named asset regions. No fictional portrait, random stock photo, invented client, metric or professional achievement has been introduced.

| Layer | Required real asset |
|---|---|
| `PROFILE_PORTRAIT` | Supplied photograph, placed across all eight responsive/theme variants; 4:5 crop |
| `YIINO_MOBILE_PREVIEW` | Yiino user mobile experience |
| `YIINO_DRIVER_MOBILE_PREVIEW` | Optional driver/partner experience |
| `YIINO_DASHBOARD_PREVIEW` | Yiino operational/admin dashboard |
| `INNOFRIT_DASHBOARD_PREVIEW` | Logistics dashboard / shipment management |
| `INNOFRIT_SHIPMENT_PREVIEW` | Shipment tracking, load posting or mobile interface |
| `YIINO_BUSINESS_DASHBOARD_PREVIEW` | Corporate mobility dashboard |
| `YIINO_BUSINESS_VOUCHER_PREVIEW` | Employee or voucher-management interface |

Use optimized responsive images, stable aspect ratios and descriptive alt text. Prefer object-fit: contain for UI screenshots so meaningful product content is not cropped. Confirm permission to publish screenshots and redact confidential data. Technology tags are a relevant toolkit, not verified per-project stack claims; confirm the actual stack before publication.

## Download CV — direct PDF download

The asset placeholder is `Taby_Takoundjou_Jeff_Obrile_Frontend_Developer_CV.pdf`. The actual professional PDF is still required; no fictional CV has been authored. Claude should place the supplied PDF in `public/documents/Taby_Takoundjou_Jeff_Obrile_Frontend_Developer_CV.pdf` and connect every Download CV action to `/documents/Taby_Takoundjou_Jeff_Obrile_Frontend_Developer_CV.pdf` with the download attribute. Use the same filename for the downloaded PDF and keep it same-origin. Do not redirect to another page or open an intermediate management screen. No database, API or backend is required.

Preserve the approved homepage button and visual layout. Its eventual website behavior should use the same shared asset as navigation, About and the mobile menu. Do not publish a broken download: verify the asset returns a real PDF, the download filename is correct and keyboard activation works.

## Interaction contract

| Interaction | Intended behavior | Timing |
|---|---|---|
| Navigation hover | Readable blue label / subtle tint; active destination remains distinct | 150 ms |
| Primary/secondary button | Default, Hover, Pressed and Disabled variants; disabled does not trigger actions | 150 / 100 ms |
| Project cover hover | Subtle 2 px upward translation and restrained shadow, pointer devices only; no zoom that hides UI | 180 ms |
| View Project | Expand/collapse details inside the same project; no extra route | 220 ms |
| Mobile menu | Open overlay, navigate to the matching breakpoint/theme, close control and Escape | 150 ms |
| Theme | Toggle the same route between coordinated Light and Dark colors | 180 ms |
| Language | EN/FR selector; translate full content dictionary, update html lang and accessible labels, preserve route/theme | 150 ms |

Native prototype connections are present for refined desktop navigation, theme twins, mobile menu overlays and project disclosures. Buttons and navigation links have reusable state variants. Language switching in this design demonstrates only the EN/FR control state: the content has not been fully localized. French production copy requires translation/review; do not imply that changing the control alone localizes a page. Homepage interactions are intentionally not modified.

For project details use a real button, aria-expanded and aria-controls; retain keyboard focus when collapsing. Page examples show expanded content for review; production may start collapsed but must make all product areas and contributions available. Native prototype duration is an illustration; in implementation use CSS grid/height disclosure with transform/opacity where appropriate and no layout-thrashing reads. Under reduced motion, do not translate covers and reveal/hide content immediately.

## Contact form behavior

Full Name, Email Address, Subject and Message are required. Use explicit visible labels, appropriate name/email autocomplete, email input type and a real textarea. Default, Focus, Error, Success and Disabled field references are included. Pair errors with helpful text, aria-invalid and aria-describedby. Move focus to the first invalid field on submission and announce delivery status through an aria-live region. Focus indicators must be visible in both themes.

Connect the form to a suitable email service or serverless endpoint during implementation. Keep keys on the server. No account, inbox dashboard or database is necessary. On submit, validate first, then disable the action and show Sending… while pending. Show Message sent only after the endpoint confirms success; clear or retain fields deliberately. On delivery failure retain entered content and offer retry. Prevent duplicate sends and add lightweight spam protection. These design fields do not accept typed input or send messages in Figma.

## Publication checklist

- Replace remaining email/social placeholders and every project screenshot; supply the actual CV PDF. The full name and portrait are supplied and already placed.
- Confirm project-specific tools and permission to display work.
- Review English and French copy without inventing qualifications or outcomes.
- Test all six routes, menu keyboard trap/return focus, disclosure, theme persistence and language preservation.
- Test CV direct download and form success/failure with the real endpoint.
- Inspect 1440/1280/768/390, long text, keyboard navigation, contrast and reduced-motion behavior.
- Preserve the approved homepage.
