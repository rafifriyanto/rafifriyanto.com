import { defineConfig } from 'astro/config';

// GitHub Pages serves a project repo under /<repo>/, so both values are
// environment-driven: the Pages workflow sets them, and any other host
// (Cloudflare Pages, Netlify) gets the domain-root defaults.
const site = process.env.SITE_URL ?? 'https://rafifriyanto.com';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
