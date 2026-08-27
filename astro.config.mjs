import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: set to the production URL before launch
  site: 'https://diya-sharma-portfolio.pages.dev',
  output: 'static',
  build: {
    format: 'file',
  },
  integrations: [sitemap()],
});
