# Binghalib brand guidelines for AI agents

Base URL: https://sbinghalib.github.io/binghalib/  ·  Updated: 2026-10-19  ·  Human version: https://sbinghalib.github.io/binghalib/

This file holds the rules that apply to **every** task. Load a topic file only when the task needs it: `GET /agents/<topic>.md` returns plain Markdown. Asset paths below are relative to the base URL. An index for LLM tools is at `/llms.txt`.
Status: prototype hub. Items marked TBC are not confirmed by the brand owner. Don't present them as fact.
Not available yet: a generators API, an MCP server and a DESIGN.md token file. [placeholder]

## Topics
| Load | When |
|---|---|
| `/agents/naming.md` | Writing the group or any company name, in English or Arabic; URLs and file names. |
| `/agents/logo.md` | Placing the Binghalib Group logo or emblem in any design; choosing a logo file. |
| `/agents/colour.md` | Choosing any colour for design, slides, documents, charts or UI. |
| `/agents/typography.md` | Setting any text: fonts, weights, sizes, line heights. Why Bauhaus is never live text. |
| `/agents/tokens.md` | Writing CSS, components, chart themes or any code that needs brand values. |
| `/agents/sub-brands.md` | Anything for a specific company: its logo file, its own palette, how the group endorses it. |
| `/agents/arabic.md` | Anything with Arabic text or bilingual Arabic/English layouts. |
| `/agents/imagery.md` | Choosing photos or drawing icons. |
| `/agents/voice.md` | Writing or editing English copy: proposals, tenders, web, social, email. |
| `/agents/templates.md` | Slides, letterheads, business cards, email signatures. |
| `/agents/assets.md` | You need the exact URL or file name of a downloadable file. |

## Who we are
Binghalib Group of Companies (also written "Bin Ghalib Group of Companies"; Arabic مجموعة شركات بن غالب). Founded in 1982 in Sharjah, UAE, by Mohammed Binghalib, starting with LV switchgear. Today it is 16 independent companies in four domains: Manufacturing, Engineering, Trading and Services. Offices in Sharjah (HQ), Dubai, Abu Dhabi and Doha. Tagline: "Tomorrow's Technology Today". Voice: engineered, proven, forward.

## Always apply
### Names
- Group: **Binghalib Group of Companies** on first use, then "Binghalib Group". "Bin Ghalib" also appears in the market. The preferred spelling is TBC.
- The lowercase "bin ghalib" appears only in the logo artwork. In running text write "Binghalib".
- Company names exactly as listed in `/agents/sub-brands.md` (TAMCO and SYSCOM in capitals; AlphaTech; VBG Intech; MEM / Majid Electro Mechanical; Time Cargo Logistics).
- Never invent company names, products, projects, figures, people or certifications.

### Group master brand (visual essentials)
- Colours: Binghalib Indigo #312783 (primary: logo, headlines, dark surfaces) and Binghalib Red #E30613 (accent only, never a large background). Neutrals: Ink #1D1D1B, Steel #706F6F, white. Balance about 60% white/neutral, 30% Indigo, 10% Red plus signals. CMYK and Pantone TBC.
- Domain signal colours, for wayfinding only: Manufacturing #F2A33B, Engineering #038D66, Trading #0072B0, Services #BEAE92.
- Type: **Outfit** for all text (headlines, UI, body). **Bauhaus is the logo typeface only.** It ships as artwork. Never set text in Bauhaus or imitate the wordmark. Fallback: Poppins (existing print templates). Arabic: Tajawal as a stand-in (TBC).
- Logo: use the supplied files only (`/assets/logos/binghalib-group.svg`, `-noshadow.svg` below 200 px, `-reversed.svg` on dark, `binghalib-emblem.svg` for small or square spaces). Never stretch, recolour, rotate, retype or place it on busy photos. Clear space is the height of the "b" bowl. Minimum width 140 px on screen / 30 mm in print (proposed).
- Dark mode: Indigo 95 #16113F surfaces with white text, using the reversed lockup.
- Company colours belong to their company only. Don't use them in group-level material. See `/agents/sub-brands.md`.

### Voice essentials
- Lead with specifications people can check (for example 13,000 A, Form 4b, IP54, 4,000 valves a year). Name real accreditations only as listed in this hub.
- Back every "forward" claim with an example. No hype, and no superlatives that can't be verified.
- British English.

### Sub-brands
- Family-name companies (Binghalib Engineering Enterprises, Binghalib Engineering Qatar, Binghalib Trading, Binghalib Technology) use the bilingual Binghalib lockup in group Indigo and Red.
- Endorsed companies keep their own mark and palette, with the endorsement line "A member of Binghalib Group of Companies" (proposed).
- Company logos always sit on a white panel, as in the Group Profile.

## Core tokens
```
--bg-indigo: #312783   --bg-indigo-95: #16113F   --bg-indigo-05: #F3F2FA
--bg-red: #E30613      --ink: #1D1D1B            --steel-70: #706F6F
--div-manufacturing: #F2A33B  --div-engineering: #038D66  --div-trading: #0072B0  --div-services: #BEAE92
--font-text: "Outfit", "Poppins", system-ui, sans-serif
--font-logo: Bauhaus (artwork only, never live text)
--radius-sm: 8px  --radius-md: 12px  --radius-lg: 16px  --radius-xl: 24px
Full set: /assets/css/tokens.css · /agents/tokens.md
```

## When unsure
Use fewer elements and more white space, with Indigo text on white. Ask the brand owner before you invent names, colours, logos, claims or Arabic terms. Brand contact: [placeholder, brand owner email TBC]. General enquiries: info@binghalib.com.
