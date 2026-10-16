# Design tokens

Marshall Radio Telemetry brand guidelines for AI agents · `/agents/tokens.md`
Use when: Writing CSS, components, Tailwind config or any code that needs brand values.
Rules that always apply: `/AGENTS.md`

Files: `/assets/tokens/mrt-tokens.css` (CSS custom properties) · `/brand.json` (JSON) · `/DESIGN.md` (DESIGN.md format). Prefix: `--mrt-`.

## Color
| Token | Value | Name |
|---|---|---|
| `--mrt-color-blue` | `#1B3A6A` | M Blue |
| `--mrt-color-red` | `#8A2F1D` | M Red |
| `--mrt-color-khaki` | `#C6C7BB` | Khaki Grey |
| `--mrt-color-light-grey` | `#F1F1F1` | Light Grey |
| `--mrt-color-black` | `#171D1A` | Black |
| `--mrt-color-white` | `#FFFFFF` | True white, use sparingly |
| `--mrt-color-blue-80` | `#496188` | 20% tint step (blue-80) |
| `--mrt-color-blue-60` | `#7689A6` | 20% tint step (blue-60) |
| `--mrt-color-blue-40` | `#A4B0C3` | 20% tint step (blue-40) |
| `--mrt-color-blue-20` | `#D1D8E1` | 20% tint step (blue-20) |
| `--mrt-color-red-80` | `#A1594A` | 20% tint step (red-80) |
| `--mrt-color-red-60` | `#B98277` | 20% tint step (red-60) |
| `--mrt-color-red-40` | `#D0ACA5` | 20% tint step (red-40) |
| `--mrt-color-red-20` | `#E8D5D2` | 20% tint step (red-20) |
| `--mrt-color-black-80` | `#454A48` | 20% tint step (black-80) |
| `--mrt-color-black-60` | `#747776` | 20% tint step (black-60) |
| `--mrt-color-black-40` | `#A2A5A3` | 20% tint step (black-40) |
| `--mrt-color-black-20` | `#D1D2D1` | 20% tint step (black-20) |

## Semantic roles
| Token | Maps to |
|---|---|
| `--mrt-bg-canvas` | `--mrt-color-white` |
| `--mrt-bg-panel` | `--mrt-color-light-grey` |
| `--mrt-bg-inverse` | `--mrt-color-black` |
| `--mrt-text-heading` | `--mrt-color-blue` |
| `--mrt-text-body` | `--mrt-color-black` |
| `--mrt-text-caption` | `--mrt-color-black-80` |
| `--mrt-text-accent` | `--mrt-color-red` |
| `--mrt-link` | `--mrt-color-blue` |
| `--mrt-link-hover` | `--mrt-color-blue-80` |
| `--mrt-action` | `--mrt-color-blue` |
| `--mrt-action-hover` | `--mrt-color-blue-80` |
| `--mrt-on-action` | `--mrt-color-white` |
| `--mrt-border` | `--mrt-color-black-20` |
| `--mrt-focus` | `--mrt-color-red` |
| `--mrt-dark-text-heading` | `--mrt-color-white` |
| `--mrt-dark-text-body` | `--mrt-color-light-grey` |
| `--mrt-dark-accent` | `--mrt-color-red-40` |

## Type
| Token | Value |
|---|---|
| `--mrt-type-display` | 700 65px/1.05 heading |
| `--mrt-type-h1` | 700 42px/1.15 heading |
| `--mrt-type-h2` | 700 30px/1.2 heading |
| `--mrt-type-h3` | 700 22px/1.3 heading |
| `--mrt-type-label` | 700 18px/1.3 heading |
| `--mrt-type-body` | 400 16px/1.6 body |
| `--mrt-type-small` | 400 14px/1.5 body |
| `--mrt-type-caption` | 400 13px/1.4 body |

## Space and radius
4px scale: `--mrt-space-1` 4px, `--mrt-space-2` 8px, `--mrt-space-3` 12px, `--mrt-space-4` 16px, `--mrt-space-6` 24px, `--mrt-space-8` 32px, `--mrt-space-12` 48px, `--mrt-space-16` 64px, `--mrt-space-24` 96px.
Radius: `--mrt-radius-sm` 4px, `--mrt-radius-md` 8px, `--mrt-radius-lg` 12px (8px matches the site's warranty form panel).

## Tailwind (v3 `theme.extend`)
```js
colors: { mrt: { blue: '#1B3A6A', red: '#8A2F1D', khaki: '#C6C7BB', 'light-grey': '#F1F1F1', black: '#171D1A' } },
fontFamily: { heading: ['Matter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'], body: ['Matter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'] },
```
