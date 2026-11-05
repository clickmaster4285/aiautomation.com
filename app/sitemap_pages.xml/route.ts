import { getStaticPages } from '../sitemap_utils';
import { canonicalUrl } from '@/lib/canonical';

export async function GET() {
  const lastModified = new Date().toISOString();
  
  // Get all static pages from the app directory
  const pages = getStaticPages();

  // Debug: Log what we found
  if (process.env.NODE_ENV === 'development') {
    console.log('Generating pages sitemap with:', pages);
  }

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add all pages
  for (const page of pages) {
    const url = canonicalUrl(page === '' ? '/' : page);
    let priority = page === '' ? '1.0' : '0.8';
    let changefreq = page === '' ? 'yearly' : 'monthly';
    
    sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
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