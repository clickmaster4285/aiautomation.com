import { getStaticPages, getServices, getSolutions, getIndustries, getBlogPosts, getPlatforms } from '../sitemap_utils';

const siteUrl = "https://clickmastersaiautomation.com";

// Generated once at build time: the URL list only changes with a deploy, so lastmod is the build time
// (not the request time, which told crawlers every URL changed on every fetch).
export const dynamic = 'force-static';

export async function GET() {
  const lastModified = new Date().toISOString();
  
  // Get all dynamic data
  const services = getServices();
  const solutions = getSolutions();
  const industries = getIndustries();
  const blogs = getBlogPosts();
  const platforms = getPlatforms();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Always include pages sitemap
  sitemap += `
  <sitemap>
    <loc>${siteUrl}/sitemap_pages.xml</loc>
    <lastmod>${lastModified}</lastmod>
  </sitemap>`;

  if (services.length > 0) {
    sitemap += `
  <sitemap>
    <loc>${siteUrl}/sitemap_services.xml</loc>
    <lastmod>${lastModified}</lastmod>
  </sitemap>`;
  }

  if (solutions.length > 0) {
    sitemap += `
  <sitemap>
    <loc>${siteUrl}/sitemap_solutions.xml</loc>
    <lastmod>${lastModified}</lastmod>
  </sitemap>`;
  }

  if (industries.length > 0) {
    sitemap += `
  <sitemap>
    <loc>${siteUrl}/sitemap_industries.xml</loc>
    <lastmod>${lastModified}</lastmod>
  </sitemap>`;
  }

  if (blogs.length > 0) {
    sitemap += `
  <sitemap>
    <loc>${siteUrl}/sitemap_blogs.xml</loc>
    <lastmod>${lastModified}</lastmod>
  </sitemap>`;
  }

  if (platforms.length > 0) {
    sitemap += `
  <sitemap>
    <loc>${siteUrl}/sitemap_platforms.xml</loc>
    <lastmod>${lastModified}</lastmod>
  </sitemap>`;
  }

  sitemap += `
</sitemapindex>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}