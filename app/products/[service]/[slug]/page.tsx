// app/products/[service]/[slug]/page.tsx
// One route for every child product page, e.g. /products/ai-customer-support/ai-voice-agent.
// Server: resolves content + metadata from the registry; the client ProductPage renders it.
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ProductPage from '@/components/products/ProductPage';
import { productMetadata } from '@/lib/product-metadata';
import { getChildPage, childParams } from '@/content/products/registry';
import { getRelatedProducts } from '@/content/products';
import { serviceCardsForProduct } from '@/lib/product-cards';

type Props = { params: Promise<{ service: string; slug: string }> };

// Only the service/slug pairs listed in content/products/routes.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return childParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service, slug } = await params;
  const page = getChildPage(service, slug);
  return page ? productMetadata(page.seo, page.keywords, page.content) : {};
}

export default async function ChildProductPage({ params }: Props) {
  const { service, slug } = await params;
  const page = getChildPage(service, slug);
  if (!page) notFound();
  return (
    <ProductPage
      content={page.content}
      seo={page.seo}
      relatedProducts={getRelatedProducts(service, slug)}
      relatedServices={await serviceCardsForProduct(`/products/${service}/${slug}`)}
    />
  );
}
