# Namanga Hope Center — Website

Static site for [Namanga Hope Center](https://www.facebook.com/NamangaHopeCenter), Namanga, Kenya.

- `public/index.html` — main site (no build step, no framework)
- `public/building-campaign.html` — building campaign page
- `public/images/` — photos and assets
- `wrangler.jsonc` — Cloudflare Worker config (static assets from `public/`)

## Deploy

Hosted on a Cloudflare Worker (`namanga`) serving static assets. Connected to
this repository via Workers Builds: every push to `main` runs
`npx wrangler deploy`. Clean URLs (`/about`, `/give`, …) are handled by the
`single-page-application` not-found fallback in `wrangler.jsonc`.
