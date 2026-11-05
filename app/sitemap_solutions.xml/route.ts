import { getSolutions } from '../sitemap_utils';
import { canonicalUrl } from '@/lib/canonical';

export async function GET() {
  const lastModified = new Date().toISOString();
  
  // Get all solutions from the app directory
  const solutions = getSolutions();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add all solutions
  for (const solution of solutions) {
    sitemap += `
  <url>
    <loc>${canonicalUrl(`/solutions/${solution}`)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }

  sitemap += `
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}