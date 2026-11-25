// lib/product-cards.ts
// Card data for links to product pages, from the product catalogue (content/products/index.ts),
// so card titles and one-line descriptions always match the product's own navigation entry.
import { allProducts, isLiveProductPath } from '@/content/products';
import type { RelatedCardItem } from '@/components/seo/RelatedCards';

const byPath = new Map(allProducts.map((p) => [p.path, p]));

/** Cards for the given product paths, in order. Unknown or unpublished paths and duplicates are skipped. */
export function productCards(paths: string[], limit = 6): RelatedCardItem[] {
  const seen = new Set<string>();
  const out: RelatedCardItem[] = [];
  for (const path of paths) {
    const product = byPath.get(path);
    if (!product || !isLiveProductPath(path) || seen.has(path)) continue;
    seen.add(path);
    out.push({ title: product.title, description: product.description, href: path });
    if (out.length >= limit) break;
  }
  return out;
}

/**
 * Service pages that deliver a product (the reverse of SERVICE_PRODUCT_LINKS), as cards. Links a
 * product page up to the service that sells it, so "<topic> services" queries point at the service page.
 * Server only: card text comes from each service's own metadata.
 */
export async function serviceCardsForProduct(productPath: string): Promise<RelatedCardItem[]> {
  const { SERVICE_PRODUCT_LINKS } = await import('@/lib/internal-links');
  const { allServices } = await import('@/content/services');
  const { pageSummary } = await import('@/lib/page-summaries');
  return Object.entries(SERVICE_PRODUCT_LINKS)
    .filter(([, products]) => products.includes(productPath))
    .map(([slug]) => {
      const href = `/services/${slug}`;
      const title = allServices.find((s) => s.slug === slug)?.title ?? slug;
      return { title: `${title} Service`, description: pageSummary(href), href };
    })
    .slice(0, 2);
}
