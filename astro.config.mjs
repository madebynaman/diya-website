import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production origin. Override with SITE_URL when deploying to a custom domain.
const site = process.env.SITE_URL ?? 'https://diya-sharma-portfolio.pages.dev';

export default defineConfig({
  site,
  output: 'static',
  build: {
    format: 'file',
  },
  integrations: [sitemap()],
});
