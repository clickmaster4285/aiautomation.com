// app/sitemap_industries.xml/route.ts
import { industryContent } from '@/content/Industries';

const siteUrl = 'https://clickmastersaiautomation.com';

export async function GET() {
  const lastModified = new Date().toISOString();
  const seen = new Set<string>();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const addUrl = (loc: string, priority: string) => {
    if (seen.has(loc)) return;
    seen.add(loc);
    sitemap += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  };

  // 👇 Iterate entries, use the KEY as the slug — this is what the route uses.
  for (const [slug, industry] of Object.entries(industryContent)) {
    addUrl(`${siteUrl}/industries/${slug}`, '0.8');

    const subPages = (industry as any).subPages as (string | { path: string })[] | undefined;
    if (!Array.isArray(subPages)) continue;

    for (const subPage of subPages) {
      const raw = typeof subPage === 'string' ? subPage : subPage?.path;
      if (!raw) continue;
      let cleaned = raw.replace(/\/index$/, '').replace(/\/page$/, '').trim();
      if (!cleaned || cleaned.includes('[') || cleaned.includes(']')) continue;
      if (cleaned.startsWith('/')) {
        // absolute — only allow if already under /industries/<slug>
        if (!cleaned.startsWith(`/industries/${slug}`)) continue;
        if (cleaned === `/industries/${slug}`) continue;
      } else {
        cleaned = `/industries/${slug}/${cleaned.replace(/^\/+|\/+$/g, '')}`;
      }
      addUrl(`${siteUrl}${cleaned}`, '0.7');
    }
  }

  sitemap += `
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=3600' },
  });
}