# Product UI Principles

These rules apply to any interface that carries the Marshall Radio Telemetry brand (storefront, product configurators, support tools, internal apps).

## Foundations

- Light is default. Dark is available for high-focus or photographic contexts.
- Use semantic tokens. Do not hard-code hex values in components.
- One primary action per view.
- Touch targets ≥ 44×44 px.
- Focus rings always visible (2–3 px Primary Blue or Ink, 2 px offset).

## Buttons

- Primary: solid Primary Blue, white text, 40–48 px height, 20–60 px radius (pills preferred on marketing).
- Secondary: outline or ghost, Ink or Primary Blue stroke.
- Destructive: Signal Red only for irreversible actions.
- Hover: 200 ms ease, desktop only.

## Forms & inputs

- Labels above fields in Source Sans Pro.
- 16 px minimum body text.
- Clear error states (text + icon, never color alone).
- Generous padding inside inputs.

## Tables

- Source Sans Pro.
- Sticky header optional.
- Alternating row backgrounds only if needed for scanning.
- Numeric data right-aligned with tabular figures.

## Feedback & loading

- Use existing toast or banner patterns.
- Skeletons preferred over spinners for content areas.
- Loading states should not shift layout.

## Navigation

- Clear hierarchy.
- Mobile: collapsible or bottom navigation where appropriate.
- Current page indicated by weight or a simple underline, not color alone.

## Responsive

- Content max width 1280 px.
- Reading width ≤ 68 characters for long text.
- Stack columns on small screens.
- Hover interactions desktop-only (≥ 1280 px).
