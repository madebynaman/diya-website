# Diya Sharma — interaction design portfolio

A static Astro portfolio built around Diya’s practice across field research, systems thinking, interaction design, and material craft.

## Run locally

```bash
npm install
npm run dev
```

The dev server normally runs at `http://localhost:4321`.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` runs `astro check` before generating the static site in `dist/`.

## Structure

- `src/pages/index.astro` — portfolio home
- `src/pages/about.astro` and `src/pages/contact.astro` — standalone profile and enquiry pages
- `src/pages/projects/[slug].astro` — four statically generated case-study routes
- `src/components/ProjectCard.astro` — responsive project chapter layout
- `src/data/caseStudies.ts` — sourced case-study narratives and media metadata
- `src/styles/global.css` and `src/styles/pages.css` — design system, motion, and responsive styling
- `public/images/` — locally optimized responsive WebP assets
- `public/fonts/` — self-hosted variable and utility fonts

Project cards now link to the local case-study pages.

## Deployment

For Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 20 or later

The included `wrangler.jsonc` also supports Workers Static Assets deployment:

```bash
npm run build
npx wrangler deploy
```
