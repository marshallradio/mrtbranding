# Website design guideline

This is the visual system used on the Marshall Radio storefront (`stg.marshallradio.com`, and the same theme on the Worldwide shop). Use it when designing or building a new page, section, or email that should look like the site.

The shared source is `packages/design/`. The Tailwind preset there is what both the Liquid theme and the Next.js app compile. English type is then overridden by `assets/mr-en-type.css`. Change the preset when both frontends should move together.

Root type is `1rem = 10px` on normal screens. Pixel sizes below are that conversion. Above 2000px wide the root can grow; do not design for that case.

## Color

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Blue | `primary` | `#487FFF` | Primary buttons, links that are actions, the one brand accent |
| Blue hover | — | `#6D99FF` | Primary button hover, desktop only |
| Ink | `primary.black` / `black` | `#161A1E` | Text, dark fills, outline buttons on light backgrounds |
| Ink deep | `black.800` | `#070A10` | Near-black panels |
| Ink raised | `black.300` | `#1B1F23` | Slightly lifted dark surfaces |
| White | `primary.white` | `#FFFFFF` | Page ground and type on dark or photographic backgrounds |
| Mist | `secondary` / `gray.400` | `#F3F3F5` | Quiet fills, secondary surfaces |
| Line | `gray` | `#E9EAED` | Hairline borders |
| Line strong | `gray.300` | `#E6E8EC` | White-button hover, slightly stronger rules |

Ink and white also have alpha steps at 80, 60, 40, 20, 10, and 5 percent (`black-alpha-*`, `white-alpha-*`). Use those for type and scrims on photography. Do not invent a second accent. Blue is the only chromatic color in the system.

Disabled controls drop to 20 percent opacity, or to a 20 percent border and label on outline buttons.

## Type

### Faces

English (`lang="en"`) is the public default.

- Titles (`h1`–`h6`, `.h1`–`.h6`, and bold labels such as `.mr-mega-label`) are **Helvetica LT Pro Bold**, weight 700. Loaded from Adobe Fonts kit `ytg2dik` as the family `mr-helvetica`.
- Body, buttons, and anything at weight 400–600 are **Source Sans Pro** on that same family. The Regular file is optically bumped by half a point (`size-adjust: 104.1667%`). Bold files are not.
- Do not synthesize a missing weight. A semibold label stays Source Sans. It does not snap to Helvetica Bold.

Other Latin locales (German, French, Spanish, Italian, Dutch, and the rest) stay on **Matter** (Light 300, Regular 400, Medium 500, SemiBold 600).

Arabic uses **Noto Sans Arabic** for Arabic letters and the Latin face above for Latin letters, digits, and spaces. Chinese, Japanese, Korean, Thai, and Cyrillic pages keep the system face for those scripts and use the same Latin pairing for Latin characters inside them.

Icons are a separate Matter icon font. Classes are `icon` and `icon-*` (for example `icon-ArrowLeft`, `icon-Cart`). Do not restyle those with the text family.

There is no italic in the marketing scale. Do not set headings in all caps. Button labels are capitalized by the component (`text-transform: capitalize`).

### Scale

Sizes come from `packages/design/tailwind-preset.js`. English only changes weight, tracking, and line-height, via `assets/mr-en-type.css`.

| Style | Desktop | Mobile (≤750px) | English weight | English tracking | English line-height |
| --- | --- | --- | --- | --- | --- |
| `h1` / `.h1` | 60px | 36px | 700 | −0.03em | 1.05 |
| `h2` / `.h2` | 50px | 30px | 700 | −0.02em | 1.05 |
| `h3` / `.h3` | 40px | 24px | 700 | −0.02em | 1.08 |
| `h4` / `.h4` | 30px | 30px | 700 | −0.015em | 1.1 |
| `h5` / `.h5` | 24px | 20px | 700 | −0.01em | 1.16 |
| `h6` / `.h6` | 22px | 18px | 700 | −0.01em | 1.15 |
| `.p1` | 18px | 16px | 400 | 0 | 1.15 |
| `p` / `.p` | 18px from 1280px, 16px below | 16px | 400 | 0 | 1.45 |
| `.small` | 14px | 14px | 400 | 0.004em | 1.45 |
| `.breadcrumbs` | 14px | 14px | 400 | 0.004em | 1.45 |
| `.b1` | 16px | 16px | 400 | 0 | 1.15 |

`.h-plus` (44px desktop, 32px mobile, weight 700) is the display style that points at `--font-mermaid`. Nothing in the theme sets that variable, so new work should use `h1` instead.

On Matter locales, headings are weight 500 (h1 is 400) and most line-heights are 1. h5 is 1.1 so wrapped card titles do not collide. Those values are what you get outside English. Match the English column when the page is English.

Body copy does not shrink below 16px. The old 14px mobile step is retired.

### Arabic

Arabic is right to left. Letter-spacing is 0 on every element. Line-height on headings, paragraphs, lists, and breadcrumbs is 1.4 so Noto does not crash into the next line. Breadcrumb chevrons flip to point left. Buttons keep line-height 1 so the pill does not grow.

## Layout

### Breakpoints

| Name | Min width | What changes |
| --- | --- | --- |
| `xs` | 360px | Small phones |
| `sm` | 641px | Large phones |
| `md` | 750px | Tablet. Type steps and `secPad-x` move here |
| `md-lg` | 991px | Between tablet and desktop |
| `lg` | 1025px | Desktop |
| `xl` | 1281px | Wide desktop. Section padding reaches its largest step. Button hover starts at 1280px |
| `2xl` | 1441px | Large desktop |
| `3xl` | 1921px | Ultra-wide |

Design mobile at 390px and desktop at 1440px. The type step is 750px. The button-hover step is 1280px. Those two are not the same.

### Page margins

Marketing sections use `.secPad-x`:

| Width | Horizontal padding |
| --- | --- |
| Under 750px | 20px |
| From 750px | 40px |
| From 1281px | 60px |

Dawn pages (legal text, account, and other `.page-width` templates) use a centered column of **1200px**, with 15px side padding on small screens and 50px from 750px. `.page-width--narrow` caps at **726px** from 990px. A privacy policy or other long text page belongs in that narrow column, with the legal-page title treatment (`page.privacy-policy` and the other policy templates).

### Radius

| Token | Value | Typical use |
| --- | --- | --- |
| `rounded-3xl` | 16px | Small panels |
| `rounded-4xl` | 20px | Cards, FAQ rows |
| `rounded-5xl` | 25px | Larger media frames |
| `rounded-6xl` | 30px | Large panels |
| `rounded-pill` | 99px | Nav chips |
| Button radius | 60px | Every `.btn-*` pill |

Corners are large. Do not use a 4px or 8px radius on a marketing card.

## Buttons

Every button is a pill: Matter or Source Sans, weight 600 in the component file and weight 400 once the English sheet loads, 16px type (14px under 768px), line-height 1, tracking 0, label capitalized. Hover exists only from 1280px up. Primary and secondary have a 120px minimum width so a short label does not collapse next to a longer one. A longer label still grows the pill.

| Class | Fill | Label | Hover (desktop) |
| --- | --- | --- | --- |
| `.btn-primary` | `#487FFF` | White | `#6D99FF` |
| `.btn-white` | White | `#161A1E` | `#E6E8EC` |
| `.btn-secondary.btn-secondary--black` | Transparent, 1px `#161A1E` border | `#161A1E` | Fills `#487FFF`, white label |
| `.btn-secondary.btn-secondary--white` | Transparent, 1px white border | White | Fills white, ink label |
| `.btn-secondary.btn-secondary--blue` | Transparent, 1px `#487FFF` border | `#487FFF` | Fills `#487FFF`, white label |
| `.btn-glass-dark` | `rgba(22, 26, 30, 0.2)`, blur 61px | White | 40 percent ink |
| `.btn-glass-light` | `rgba(255, 255, 255, 0.1)`, blur 72px, 58px tall | White | 20 percent white |

Put the solid blue button on the main action. Pair it with `--black` on a light ground, `--white` on a photo or dark ground, and `--blue` only when the hero is light and the design already shows a blue outline beside the primary. Glass pills sit on photography and video. Outline buttons are not frosted.

`.btn-primary--sm` is the mega-menu drill-in only (tighter padding, 14px type). Do not use it as a general small button.

## Photography and surfaces

Heroes are full-bleed photography or video with white type. Two scrims exist:

- `.hero-gradient` darkens the whole frame by 30 percent, then adds a top-and-bottom vignette.
- `.twl-gradient` darkens the left edge and the top and bottom, and shifts to a stronger left scrim under 640px.

On a light page the ground is white and the type is `#161A1E`. On a dark band the ground is `#161A1E` or `#070A10` and the type is white. Do not put gray body text on a photograph. Use white or `white-alpha-800`.

Cards on white are flat: ink text, a light border or `#F3F3F5` fill, and a 20px radius. They do not float on a drop shadow.

## Motion

| Use | Duration | Curve |
| --- | --- | --- |
| Button hover | 200ms | ease |
| Header color | 300ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Header hide / show | 500ms in, 300ms out | `cubic-bezier(0.33, 1, 0.68, 1)` |
| Section reveal | 1000–1300ms | `cubic-bezier(0.16, 1, 0.3, 1)` |

The named curves on the preset are `in-cubic`, `out-cubic`, `in-out-cubic`, `in-expo`, `out-expo`, `in-out-expo`, `out-back`, and `in-out-back`. Reveals are `animate-fadeIn` and `animate-slideUpAndFade` (the latter starts 50px lower). Do not add bounce to UI controls. Carousels use Embla, with a grab cursor, and arrows are the 40px pill pair (`.embla__prev` / `.embla__next`) with `icon-ArrowLeft` and `icon-ArrowRight`.

## Rules for new work

- Take color, type, and spacing from this system. A one-off hex or font size will not match the other page.
- English titles are Helvetica Bold. Setting `font-weight: 500` on an English heading does not produce the site’s title face.
- Keep tracking at the values in the scale. Arabic tracking stays 0.
- One primary action per view, in `.btn-primary`. A second action is an outline or a white pill, not a second blue.
- Hover is a desktop behavior. Do not depend on it for mobile.
- Long text uses the narrow 726px column. Marketing sections use `.secPad-x`, not the Dawn page padding.
- Icons come from the `icon-*` set. Do not mix in another icon family on the same screen.
