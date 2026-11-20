// lib/product-metadata.ts
// Builds route metadata for product pages from their content file, so every product page
// gets the same canonical / Open Graph / Twitter / robots treatment.
import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/canonical';
import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export function productMetadata(seo: HubSeo, keywords: string[], content: ProductPageContent): Metadata {
  const url = canonicalUrl(seo.path);
  const { image, imageAlt, imageWidth, imageHeight } = content.hero;
  return {
    title: seo.title,
    description: seo.description,
    keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      type: 'website',
      siteName: 'Clickmasters AI Automation',
      images: [{ url: image, alt: imageAlt, width: imageWidth, height: imageHeight }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [image],
    },
  };
}
