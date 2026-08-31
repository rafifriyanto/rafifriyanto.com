import type { APIRoute } from 'astro';

/**
 * Generated rather than static: the URLs have to follow wherever the site is
 * actually deployed. A hand-written sitemap pointed at a domain we do not own
 * yet, which is worse than having none.
 */
export const GET: APIRoute = ({ site }) => {
  const root = new URL(import.meta.env.BASE_URL, site).href.replace(/\/$/, '') + '/';
  const pages = [
    { loc: root, priority: '1.0' },
    { loc: root + 'en/', priority: '0.9' },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (p) => `  <url>
    <loc>${p.loc}</loc>
    <xhtml:link rel="alternate" hreflang="id" href="${root}" />
    <xhtml:link rel="alternate" hreflang="en" href="${root}en/" />
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
