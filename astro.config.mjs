import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rafifriyanto.com',
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
