# Marshall Radio Telemetry brand guidelines for AI agents

Base URL: https://marshallradio.github.io/mrtbranding (all paths below are relative) · Human version: `/` (one page per topic, e.g. `/brand-components/logo/`; full list in `/llms.txt` and `brand.json` `humanPages`) · Company website: https://www.marshallradio.com

This file holds the rules that apply to every task. Load a topic file only when the task needs it: `GET /agents/<topic>.md` returns plain Markdown. Asset paths are relative to the base URL.
Machine-readable tokens in the DESIGN.md format (google-labs-code/design.md): `GET /DESIGN.md`. The same values as JSON: `GET /brand.json`; as CSS custom properties: `GET /assets/tokens/mrt-tokens.css`.


## Topics

| Load | When |
| --- | --- |
| `/agents/naming.md` | Writing the company name, any product or product-line name, URLs or file names. |
| `/agents/facts.md` | Stating anything factual about the company: address, phones, warranty, mission, history, people. Use only what is listed. |
| `/agents/logo.md` | Placing the logo or the icon in any design; choosing a logo file. |
| `/agents/color.md` | Choosing any color for web, print, slides, documents or charts. |
| `/agents/typography.md` | Setting any text: fonts, sizes, weights, line heights. |
| `/agents/tokens.md` | Writing CSS, components, Tailwind config or any code that needs brand values. |
| `/agents/imagery.md` | Choosing photos, backgrounds or the arcs graphic device. |
| `/agents/voice.md` | Writing or editing any English copy: web, product pages, email, social, support. |
| `/agents/regions.md` | Regional sites (USA/Worldwide, Europe, United Kingdom, Gulf, China) and non-English content. |
| `/agents/assets.md` | You need the exact path of a logo, image or token file. |

## Who we are

Marshall Radio Telemetry designs and supplies premium GPS long-range tracking and recovery equipment to hunters, parrot free fliers, rocketry, and competitors around the world (marshallradio.com/ww). Headquarters: 845 W. Center Street, North Salt Lake, Utah 84054, USA. Product lines: Falconry (GPS Systems, Transmitters, Receivers, Accessories), Parrot Products, Sporting Dogs, Apparel, Favorite Reads, Services. Published tagline (site title): "The most carefully engineered and reliable tracking system available." Quality, in the company's own words, means three things: reliability, range, and ease of use.

## Always apply

### Names

- Company: **Marshall Radio Telemetry** on first mention and in formal contexts. **Marshall Radio** or **Marshall** after that (both used on the site).
- Abbreviation **MRT** appears only in a logo file name on the site (`MRT-logo.jpg`); don't use it in customer copy.
- Keep product names exactly as the catalog writes them: Marshall GPS System, Marshall GPS Pro System, Turbo GPS Transmitter, PocketLink, Field Marshall Digital Tracking Receiver UHF, Field Marshall 4000 Digital Tracking Receiver VHF, RT XP Transmitter (VHF/UHF), Micro Transmitter, Scout Transmitter, TrackPack. Details: `/agents/naming.md`.
- URLs and file names: lowercase, hyphenated (`turbo-gps-transmitter`, `mrt-logo-light.svg`).

### Visual essentials

- Colors: M Blue `#1B3A6A` (primary: wordmark, arcs, headings, buttons), M Red `#8A2F1D` (accent: logo ring, "RADIO TELEMETRY", section headings), Khaki Grey `#C6C7BB` (secondary backgrounds, text on Blue), Light Grey `#F1F1F1` and Black `#171D1A` (use instead of true white and black). Tints only in 20% steps. No other colors.
- Don't set text in Blue on Red, Blue with Black, or Khaki/Light Grey on white; keep text contrast ≥ 4.5:1. On dark (Black or M Blue) use Light Grey text.
- `#337AB7` (a Bootstrap default blue) is not a brand color; don't use it.
- Type: **Matter** (Displaay Type Foundry) for headings, body and UI: Matter Regular (400) and Matter Bold (700); headings Bold 700, body Regular 400. Fallback: `"Helvetica Neue", Helvetica, Arial, sans-serif`. On this V2 preview branch the font files are hosted for visual review; confirm your Displaay license before public production use. The italic logo lettering is artwork, not a typeface: never retype it.
- Tracking (optional for crispness): Display/large headings ≥ 42px: -0.03em to -0.04em; H2/H3: -0.015em to -0.02em; body: 0. See `/brand-components/typography/`.
- Logo: vector files in `/assets/logos/`: `mrt-logo.svg` on light backgrounds, `mrt-logo-light.svg` on solid Blue or Black, `mrt-logo-white.svg` on dark photos, `mrt-logo-mono.svg` on light photos; icon `mrt-mark.svg`. Clear space = icon height on all four sides; minimum 50px (2cm) high. Never stretch, recolor, add effects, reduce opacity or rearrange it; never the two-color version on photographs.
- The arcs mark (the swept curves of the logo, also the favicon) is the graphic device. Use it large and faint (white at low opacity over photos, or light grey on white) as on the site hero and footer. One per layout.
- Imagery: real field photography of birds, dogs and the people who fly and hunt with them, ideally with Marshall equipment visible. Never stock-looking studio shots, never AI-generated animals or equipment.

### Voice essentials

- Speak as falconers and field people to falconers and field people ("as falconers ourselves"). Plain, confident, practical, warm.
- Lead with the outcome that matters: getting the bird or dog back. Then reliability, range, ease of use.
- Be specific: product names, frequencies (VHF/UHF), warranty terms as published. Don't invent statistics, ranges, battery lives, certifications, awards, customer names or quotes.
- Superlatives ("most carefully engineered", "world leader") only verbatim from published Marshall copy; never create new ones.
- American English (color, favorite, center). Sentence case for headings in new layouts.

## Core tokens

```
--mrt-color-blue: #1B3A6A --mrt-color-red: #8A2F1D --mrt-color-khaki: #C6C7BB
--mrt-color-light-grey: #F1F1F1 --mrt-color-black: #171D1A tints: --mrt-color-{blue,red,black}-{80,60,40,20}
--mrt-color-light-grey: #F1F1F1 --mrt-color-white: #FFFFFF
--mrt-font-heading: "Matter", "Helvetica Neue", Helvetica, Arial, sans-serif
--mrt-font-body: "Matter", "Helvetica Neue", Helvetica, Arial, sans-serif
--mrt-space-*: 4px steps (1=4, 2=8, 4=16, 6=24, 8=32, 12=48, 16=64, 24=96)
--mrt-radius-sm: 4px --mrt-radius-md: 8px (8px is used on the site's warranty form panel)
Full set: /assets/tokens/mrt-tokens.css · /agents/tokens.md · /brand.json
```

## When unsure

Prefer fewer elements, more white space, M Blue headings and Black body text on white. Use only facts from `/agents/facts.md` or marshallradio.com. Ask Marshall Radio Telemetry (+1 (801) 936-9000, or the contact form at marshallradio.com/ww/contact-us/) before inventing names, colors, logos, claims or translations.
