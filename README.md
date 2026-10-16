# Marshall Radio Telemetry Identity (static site)

- `index.html`: human brand hub 
- `agents/index.html`: AI agent guidelines (rendered `AGENTS.md`), plus `agents/<topic>.md` (raw) and `agents/<topic>.html` (rendered)
- `AGENTS.md`, `DESIGN.md`, `brand.json`, `llms.txt`: machine-readable guidance at the site root
- `assets/`: vector logos and images, tokens (`mrt-tokens.css`), brand kit zip
- `screens/`: full-page screenshots (1440px wide)

Serve the folder from the web root (for example identity.marshallradio.com) so root-relative paths in the Markdown resolve. Colors and logo rules:. Typography: — Matter by Displaay Type Foundry: Matter Regular (400) and Matter Bold (700). Matter is a commercial typeface by Displaay Type Foundry (displaay.net). Its embedded license forbids storing the font files on publicly accessible servers, modifying or redistributing them, so this public site does not host them: browsers use an installed copy of Matter if present, otherwise the fallback stack. Web embedding needs a Displaay web license (https://displaay.net/about/licenses/).
