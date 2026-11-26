// lib/solution-indexing.ts
// Which /solutions pages are offered to search engines.
//
// The /solutions/<service>/for-<industry> pages are generated from shared industry copy: pages for the
// same industry share about 80% of their text (measured 2026-11-26, see SEO_COMPETITOR_REPORT_2026-11-26.md
// §F.4). They stay live for visitors and internal links ("noindex, follow") and are left out of the
// sitemap, so Google judges the site on its unique pages. Hubs and with-<platform> pages are unaffected.
//
// To put a for-<industry> page back in the index, first rewrite it so its copy is specific to that
// service and industry, then add its path (without /solutions/) here.
export const REINDEXED_FOR_INDUSTRY_PAGES = new Set<string>([
  // e.g. 'crm-automation/for-real-estate',
]);

/** `path` is relative to /solutions, e.g. "crm-automation/for-healthcare" or "ai-agents". */
export function isIndexableSolutionPath(path: string): boolean {
  const clean = path.replace(/^\/?(solutions\/)?/, '').replace(/\/$/, '');
  const child = clean.split('/')[1];
  if (!child?.startsWith('for-')) return true;
  return REINDEXED_FOR_INDUSTRY_PAGES.has(clean);
}
