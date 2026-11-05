import { getPlatforms } from '../sitemap_utils';
import { canonicalUrl } from '@/lib/canonical';

export async function GET() {
  const lastModified = new Date().toISOString();
  
  // Get all platforms from the app directory
  const platforms = getPlatforms();

  // Debug: Log what we found (only in development)
  if (process.env.NODE_ENV === 'development') {
    console.log('Generating platforms sitemap with:', platforms);
    console.log('Total platforms found:', platforms.length);
  }

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // If no platforms found, add a comment
  if (platforms.length === 0) {
    sitemap += `
  <!-- No platform pages found -->`;
  }

  // Add all platforms
  for (const platform of platforms) {
    sitemap += `
  <url>
    <loc>${canonicalUrl(`/platforms/${platform}`)}</loc>
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