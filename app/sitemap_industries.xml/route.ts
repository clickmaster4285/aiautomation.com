import { getIndustries } from '../sitemap_utils';

const siteUrl = "https://clickmastersaiautomation.com";

export async function GET() {
  const lastModified = new Date().toISOString();
  
  // Get all industries and their sub-pages from the app directory
  const industries = getIndustries();

  // Define industries to exclude
  const excludeIndustries = [
    'logistics-supply-chain',
    'education'
  ];

  // Filter out excluded industries
  const filteredIndustries = industries.filter(
    industry => !excludeIndustries.includes(industry.slug)
  );

  // Debug: Log what we found
  console.log('Generating industries sitemap with:', filteredIndustries);

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add all industries and their sub-pages (filtered)
  for (const industry of filteredIndustries) {
    // Add the main industry page
    sitemap += `
  <url>
    <loc>${siteUrl}/industries/${industry.slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    
    // Add sub-pages if they exist
    if (industry.subPages && industry.subPages.length > 0) {
      for (const subPage of industry.subPages) {
        const cleanSubPage = subPage.replace(/\/index$/, '').replace(/\/page$/, '');
        sitemap += `
  <url>
    <loc>${siteUrl}${cleanSubPage}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
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