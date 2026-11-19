// app/products/[service]/page.tsx
// One route for every product service page, e.g. /products/ai-customer-support.
// Server: resolves content + metadata from the registry; the client ProductPage renders it.
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ProductPage from '@/components/products/ProductPage';
import { productMetadata } from '@/lib/product-metadata';
import { getServicePage, serviceParams } from '@/content/products/registry';

type Props = { params: Promise<{ service: string }> };

// Only the services listed in content/products/routes.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const page = getServicePage(service);
  return page ? productMetadata(page.seo, page.keywords, page.content) : {};
}

export default async function ServiceProductPage({ params }: Props) {
  const { service } = await params;
  const page = getServicePage(service);
  if (!page) notFound();
  return <ProductPage content={page.content} seo={page.seo} />;
}
