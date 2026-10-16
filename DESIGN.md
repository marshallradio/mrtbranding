---
version: alpha
name: Marshall Radio Telemetry
description: "Premium GPS and radio telemetry tracking and recovery equipment for falconers, parrot free fliers, sporting-dog hunters and competitors (North Salt Lake, Utah). M Blue and M Red with Khaki Grey, Light Grey and Black, Matter Regular and Matter Bold type, the logo arcs as the single graphic device."
colors:
 primary: "#1B3A6A"
 secondary: "#8A2F1D"
 tertiary: "#C6C7BB"
 neutral: "#F1F1F1"
 surface: "#FFFFFF"
 on-surface: "#1B3A6A"
 on-surface-variant: "#171D1A"
 caption: "#454A48"
 link: "#1B3A6A"
 action: "#1B3A6A"
 action-hover: "#496188"
 on-action: "#FFFFFF"
 accent: "#8A2F1D"
 border: "#D1D2D1"
 focus: "#8A2F1D"
 inverse: "#171D1A"
 panel: "#F1F1F1"
 dark-canvas: "#171D1A"
 dark-heading: "#F1F1F1"
 dark-body: "#F1F1F1"
 dark-accent: "#D0ACA5"
 blue: "#1B3A6A"
 red: "#8A2F1D"
 khaki: "#C6C7BB"
 light-grey: "#F1F1F1"
 black: "#171D1A"
 white: "#FFFFFF"
 blue-80: "#496188"
 blue-60: "#7689A6"
 blue-40: "#A4B0C3"
 blue-20: "#D1D8E1"
 red-80: "#A1594A"
 red-60: "#B98277"
 red-40: "#D0ACA5"
 red-20: "#E8D5D2"
 black-80: "#454A48"
 black-60: "#747776"
 black-40: "#A2A5A3"
 black-20: "#D1D2D1"
typography:
 display:
 fontFamily: "Matter, Helvetica Neue, Helvetica, Arial, sans-serif"
 fontSize: "65px"
 fontWeight: 700
 lineHeight: 1.05
 h1:
 fontFamily: "Matter, Helvetica Neue, Helvetica, Arial, sans-serif"
 fontSize: "42px"
 fontWeight: 700
 lineHeight: 1.15
 h2:
 fontFamily: "Matter, Helvetica Neue, Helvetica, Arial, sans-serif"
 fontSize: "30px"
 fontWeight: 700
 lineHeight: 1.2
 h3:
 fontFamily: "Matter, Helvetica Neue, Helvetica, Arial, sans-serif"
 fontSize: "22px"
 fontWeight: 700
 lineHeight: 1.3
 label:
 fontFamily: "Matter, Helvetica Neue, Helvetica, Arial, sans-serif"
 fontSize: "18px"
 fontWeight: 700
 lineHeight: 1.3
 body:
 fontFamily: "Matter, Helvetica Neue, Helvetica, Arial, sans-serif"
 fontSize: "16px"
 fontWeight: 400
 lineHeight: 1.6
 small:
 fontFamily: "Matter, Helvetica Neue, Helvetica, Arial, sans-serif"
 fontSize: "14px"
 fontWeight: 400
 lineHeight: 1.5
 caption:
 fontFamily: "Matter, Helvetica Neue, Helvetica, Arial, sans-serif"
 fontSize: "13px"
 fontWeight: 400
 lineHeight: 1.4
rounded:
 sm: "4px"
 md: "8px"
 lg: "12px"
spacing:
 "1": "4px"
 "2": "8px"
 "3": "12px"
 "4": "16px"
 "6": "24px"
 "8": "32px"
 "12": "48px"
 "16": "64px"
 "24": "96px"
components:
 button-primary:
 backgroundColor: "{colors.blue}"
 textColor: "{colors.white}"
 typography: "{typography.label}"
 rounded: "{rounded.sm}"
 padding: "12px 24px"
 button-primary-hover:
 backgroundColor: "{colors.blue-80}"
 section-heading:
 textColor: "{colors.red}"
 typography: "{typography.h1}"
 page-title-bar:
 backgroundColor: "{colors.blue}"
 textColor: "{colors.white}"
 typography: "{typography.display}"
 feature-band:
 backgroundColor: "{colors.black}"
 textColor: "{colors.white}"
 panel:
 backgroundColor: "{colors.light-grey}"
 rounded: "{rounded.md}"
 padding: "15px 25px"
---

# Marshall Radio Telemetry

## Overview
Marshall Radio Telemetry builds tracking and recovery equipment: GPS systems, VHF and UHF transmitters, direction-finding receivers, dog tracking collars and mounting hardware. The identity should feel like well-made field equipment: sturdy, exact and quiet, with a falconer's warmth. White space, M Blue headlines, real field photography and one large, faint set of logo arcs.

## Colors.
- **M Blue (#1B3A6A)**, RGB 27 58 106, CMYK 100 85 30 20: primary. Wordmark, arcs, headings, buttons.
- **M Red (#8A2F1D)**, RGB 138 47 29, CMYK 30 90 100 30: accent. Logo ring, RADIO TELEMETRY, section headings.
- **Khaki Grey (#C6C7BB)**, RGB 198 199 187, CMYK 23 16 25 0, PMS 129U: secondary backgrounds; text on Blue.
- **Light Grey (#F1F1F1)** and **Black (#171D1A)** replace true white and true black wherever possible.
- Tints only in 20% steps (Blue/Red/Black 80, 60, 40, 20), for effects and hover states, never as primary colors.
- No other colors. Don't pair Blue with Red or Black for text; keep text contrast ≥ 4.5:1.

## Typography
: **Matter** (Displaay Type Foundry), for headings, body and UI. Matter Regular (400) and Matter Bold (700). Headings in Bold 700 (page titles 65px, section headings 42px), body in Regular 400. Fallback: Helvetica Neue, Helvetica, Arial, sans-serif. Matter is a commercial typeface by Displaay Type Foundry (displaay.net). Its embedded license forbids storing the font files on publicly accessible servers, modifying or redistributing them, so this public site does not host them: browsers use an installed copy of Matter if present, otherwise the fallback stack. Web embedding needs a Displaay web license (https://displaay.net/about/licenses/). The logo's italic lettering is artwork and is never set in a font.

## Layout
Centred content up to about 1170px (Bootstrap container), generous vertical padding (the site uses 90px for product sections), product lines shown as a row of photo tiles with short labels.

## Elevation & Depth
Flat. Use panels (Light Grey, 8px radius) instead of shadows. Depth comes from photography and the faint arcs.

## Shapes
Small radii: 4px controls, 8px panels. The arcs are the only curved graphic.

## Components
Primary button: M Blue fill, white Matter label. Section heading: M Red. Page title bar: M Blue with white display type. Feature band: Black with a single photo at one edge.

## Do's and Don'ts
- Do use the vector logo files in /assets/logos/ (primary on light, light or white versions on dark); keep clear space equal to the icon height on all sides; minimum 50px (2cm) high.
- Do use the one-color versions on photographs; never the two-color version on photos.
- Don't stretch, recolor, add effects, change opacity or rearrange the logo.
- Do use real Marshall field photography.
- Don't invent claims, statistics, certifications or testimonials.
