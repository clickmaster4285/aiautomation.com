// app/sitemap_blogs.xml/route.ts
import { getBlogPosts } from '../sitemap_utils';
import { canonicalUrl } from '@/lib/canonical';

export async function GET() {
  const lastModified = new Date().toISOString();
  const blogPosts = getBlogPosts(); // This now returns only the main blog page data

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // The main blog page will be the only entry
  for (const post of blogPosts) {
    // The URL will be siteUrl/blog because the slug is an empty string
    const loc = canonicalUrl(post.slug ? `/blog/${post.slug}` : '/blog');
    sitemap += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${post.date || lastModified}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
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