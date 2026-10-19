# Design tokens

Binghalib brand guidelines for AI agents · https://sbinghalib.github.io/binghalib/agents/tokens.md · Updated 2026-10-19
Use when: Writing CSS, components, chart themes or any code that needs brand values.
Rules that always apply: https://sbinghalib.github.io/binghalib/AGENTS.md

Source file: `/assets/css/tokens.css`. Load it before your own CSS. Fonts are declared in the same file.

```css
/* Typography: Outfit (OFL) for headings, UI and body. Bauhaus is the logo typeface only and ships as artwork, not a webfont. Poppins (OFL) is kept as fallback / comparison. */
/* Binghalib design tokens — colours sampled from the April 2025 Group Profile (PDF). CMYK/Pantone not supplied: TO CONFIRM with brand owner. */
:root{
  --bg-indigo:#312783; --bg-indigo-90:#231C63; --bg-indigo-95:#16113F; --bg-indigo-70:#4A41A0; --bg-indigo-50:#7A73C0; --bg-indigo-30:#B3AEDC; --bg-indigo-10:#E6E4F4; --bg-indigo-05:#F3F2FA;
  --bg-red:#E30613; --bg-red-80:#B5050F; --bg-red-10:#FDE3E5;
  --div-manufacturing:#F2A33B; --div-engineering:#038D66; --div-trading:#0072B0; --div-services:#BEAE92;
  --steel-70:#706F6F; --steel-30:#D4D5D1; --steel-10:#E7E7E7; --snow:#FAFAFA; --white:#FFFFFF; --ink:#1D1D1B;
  --font-display:"Outfit","Poppins",system-ui,sans-serif; --font-text:"Outfit","Poppins",system-ui,sans-serif; --font-logo:"ITC Bauhaus","Bauhaus" /* logo artwork only, never live text */; --font-arabic:"Tajawal","Noto Kufi Arabic",Tahoma,sans-serif;
  --radius-sm:8px; --radius-md:12px; --radius-lg:16px; --radius-xl:24px;
  --shadow-1:0 1px 2px rgba(22,17,63,.06),0 1px 1px rgba(22,17,63,.04);
  --shadow-2:0 4px 12px rgba(22,17,63,.08),0 1px 3px rgba(22,17,63,.06);
  --shadow-3:0 12px 32px rgba(22,17,63,.14),0 2px 6px rgba(22,17,63,.06);
  --ease:cubic-bezier(.2,0,0,1);
  --page:#FFFFFF; --surface:#F3F2FA; --surface-2:#FFFFFF; --line:#E3E2EE; --text:#16113F; --muted:#5B5878;
}
[data-theme="dark"]{ --page:#0F0B2E; --surface:#1A1548; --surface-2:#211B57; --line:#2F2870; --text:#F3F2FA; --muted:#B3AEDC; }
```

Sub-brand accents (use them only on that company's material):

```css
/* Binghalib Engineering */ --brand-binghalib-engineering: #312783;
/* Binghalib Qatar */ --brand-binghalib-engineering-qatar: #312783;
/* Binghalib Trading */ --brand-binghalib-trading: #312783;
/* Binghalib Technology */ --brand-binghalib-technology: #312783;
/* TAMCO */ --brand-tamco: #E30613;
/* Rolli */ --brand-rolli: #009FE3;
/* VBG Intech */ --brand-vbg-intech: #EA5B0B;
/* Intech */ --brand-intech: #E4183C;
/* SYSCOM */ --brand-syscom: #302F82;
/* BMS */ --brand-bms-btech: #E30613;
/* Marshall */ --brand-marshall-radio-telemetry: #242454;
/* Marshall Intech */ --brand-marshall-intech: #242454;
/* MEM */ --brand-majid-mem: #312783;
/* AlphaTech */ --brand-alphatech: #00A99C;
/* AlphaTech Calibration */ --brand-alphatech-calibration: #E30613;
/* Time Cargo */ --brand-time-cargo: #EF7D00;
```
