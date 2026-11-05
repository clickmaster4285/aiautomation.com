import { getServices } from '../sitemap_utils';
import { canonicalUrl } from '@/lib/canonical';

export async function GET() {
  const lastModified = new Date().toISOString();
  
  // Get all services and their sub-pages from the app directory
  const services = getServices();

  // Debug: Log what we found (only in development)
  if (process.env.NODE_ENV === 'development') {
    console.log('Generating services sitemap with:', services);
    console.log('Total services:', services.length);
    console.log('Total sub-pages:', services.reduce((acc, s) => acc + s.subPages.length, 0));
  }

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // If no services found, add a comment
  if (services.length === 0) {
    sitemap += `
  <!-- No service pages found -->`;
  }

  // Add all services and their sub-pages
  for (const service of services) {
    // Add the main service page
    sitemap += `
  <url>
    <loc>${canonicalUrl(service.path)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    
    // Add sub-pages if they exist
    if (service.subPages && service.subPages.length > 0) {
      for (const subPage of service.subPages) {
        const cleanSubPage = subPage.replace(/\/index$/, '').replace(/\/page$/, '');
        sitemap += `
  <url>
    <loc>${canonicalUrl(cleanSubPage)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
      }
    }
  }

  sitemap += `
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}