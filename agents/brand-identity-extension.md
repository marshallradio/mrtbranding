# Marshall Radio Telemetry — Brand Identity Extension

This document extends the existing Marshall Radio brand guidelines by comparing them with the structure and depth of identity.north.ae and filling the most relevant gaps for a telemetry, falconry, and outdoor equipment brand.

## Current coverage (what we already have)

- Introduction / brand overview, mission, personality, product lines
- Naming system and product naming rules
- Logo (construction, clear space, minimum size, do’s and don’ts)
- Color palette (M Blue, M Red, Khaki, Light Grey, Black) with tints and pairings
- Typography (recently updated to Helvetica LT Pro Bold for titles, Source Sans Pro for body)
- The arcs graphic device
- Photography guidelines
- Voice, tone, editorial rules, approved facts
- Regions and languages (including Arabic)
- Design tokens and brand kit
- Web UI patterns (outline-first buttons, tables, forms, Gantt, prompts)
- Website design guideline (storefront visual system, pills, buttons, motion)
- Summit component samples
- Catalog translation agent and Layla Marsh persona

## Gaps identified against identity.north.ae (adapted for Marshall Radio)

North’s brand hub is broader and deeper in these areas that are relevant to us:

1. **Light and dark modes** — explicit rules for both surfaces
2. **Accessibility** — contrast, focus, touch targets, reading width
3. **Layout system** — grid, spacing scale, section patterns, bento-style layouts
4. **Motion** — more complete token set and usage rules
5. **Iconography** — grid, style, and usage beyond the existing icon font
6. **Data visualization** — charts and telemetry-specific data display
7. **Diagrams and product visuals** — how to show transmitters, receivers, range, mounts
8. **Gradients and surface treatments** — controlled use beyond the arcs
9. **Templates** — presentations, social, email, stationery
10. **Deeper product UI** — forms, feedback, loading, overlays, responsive patterns
11. **Brand architecture clarity** — product lines, accessories, apparel (KÜHL) relationship

## Extended guidelines

### Light and dark modes

- Light is the default for marketing and product pages: white or Warm White (#F7F7F5) ground, Ink (#161A1E) text, Primary Blue (#487FFF) for actions.
- Dark is used for high-contrast panels, heroes on photography, and product UI that needs focus: Ink (#161A1E) or Ink Deep (#070A10) ground, white or white-alpha-800 text.
- Never use pure black (#000) or pure white in large fields unless it is photographic.
- Every component (buttons, cards, tables, forms) must have a defined light and dark treatment.
- Text contrast: body ≥ 4.5:1, large text and UI graphics ≥ 3:1.

### Accessibility

- Touch targets minimum 44×44 px.
- Focus rings: 2–3 px outline in Primary Blue or Ink, 2 px offset. Never remove focus styles.
- Reading width: keep body text ≤ 68 characters where practical; long legal text uses the 726 px narrow column.
- Do not rely on color alone to convey status (pair with icons or text).
- Arabic and RTL layouts must mirror with logical properties (margin-inline, padding-inline, text-align start/end).

### Layout and spacing

- Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96 px.
- Inside components: 8–16 px. Between components: 24–48 px. Between sections: 64–96 px.
- Marketing sections use `.secPad-x` (20 / 40 / 60 px horizontal).
- One primary action per view.
- Hero: full-bleed photography or video with white type and a controlled scrim. One hero per page.
- Feature grids: 3–6 items, icon or photo + short title + one sentence.
- Cards: 20 px radius, flat (no drop shadows), ink text, light border or Mist fill.

### Motion

| Use | Duration | Curve |
| --- | --- | --- |
| Instant / color | 80–120 ms | ease |
| Button hover | 200 ms | ease |
| Menus, tabs, accordions | 220–300 ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Panels, drawers | 360–500 ms | cubic-bezier(0.33, 1, 0.68, 1) |
| Section reveals | 1000–1300 ms | cubic-bezier(0.16, 1, 0.3, 1) |

- No bounce on UI controls.
- Hover is desktop-only (≥ 1280 px).
- Carousels use Embla with grab cursor and 40 px pill arrows.

### Iconography

- Use the existing Matter icon font (`icon-*` classes) for UI.
- Icons sit on a 24 px grid.
- Stroke weight consistent; no fills unless the icon is a status badge.
- Do not mix icon families on the same screen.
- For product diagrams, prefer clean line drawings in Primary Blue or Ink.

### Data visualization (telemetry-specific)

- Primary series: Primary Blue (#487FFF).
- Secondary series: Ink or a muted blue.
- Alert / out-of-range: Signal Red only.
- Axis labels and legends in Source Sans Pro, 12–14 px.
- Charts must work in both light and dark.
- Never use more than four series in one chart.
- Range and frequency data should always show units (miles, MHz) and never convert units silently.

### Diagrams and product visuals

- Prefer clean line or simple isometric views of transmitters, receivers, and mounts.
- Use Primary Blue for primary strokes, Ink for secondary outlines.
- Light grey backgrounds. No gradients or heavy drop shadows.
- Labels in Source Sans Pro or Helvetica Bold at 13–16 px.
- The arcs may appear large and faint as a background element only (4–8 % opacity).

### Gradients and surfaces

- Blue is the only chromatic accent. Do not invent second accents.
- Scrims on photography: `.hero-gradient` (30 % darken + vignette) or `.twl-gradient` (left-edge emphasis).
- Glass pills only on photography or video.
- Cards on white are flat.

### Templates (recommended next assets)

- Presentation deck (light and dark title + content slides)
- Social media kit (post and story sizes)
- Email signature generator
- Letterhead and business card templates
- Product one-pagers for Turbo GPS, Field Marshall, PocketLink

### Brand architecture reminders

- Company: Marshall Radio or Marshall Radio Telemetry.
- Product names stay in Latin script, exact casing (GPS Pro, Turbo GPS, Field Marshall, PocketLink, TrackPack, etc.).
- KÜHL apparel is a separate licensed line; do not apply falconry product naming rules to it.
- Accessories (Desert Case, EZ Twist, Power Tower) are supporting, not hero products.

## Implementation notes

- The storefront visual system is documented in `agents/website-design-guideline.md`.
- Component samples live at `/brand-components/website/` and `/brand-components/summit/`.
- Fonts load from Adobe Fonts kit `ytg2dik` (`helvetica-lt-pro` for titles, `source-sans-pro` for body).
- All new work should follow the light/dark, accessibility, and spacing rules above.

This extension keeps the existing identity intact while bringing the depth and structure of a modern brand hub to Marshall Radio.
