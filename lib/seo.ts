// lib/seo.ts
// Shared Open Graph / Twitter defaults for every route.
//
// Next.js merges metadata shallowly: a page that sets `openGraph` replaces the parent's whole
// `openGraph` object, so a default image set only in app/layout.tsx is lost on any page that sets
// its own Open Graph title. Each route therefore passes its metadata through withSocialDefaults(),
// which fills only the fields the page left empty, from the page's own title, description and canonical.
import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site-contact';

/** Site-wide share image, used when a page has no image of its own. 1200x628 (about 1.91:1). */
export const DEFAULT_SHARE_IMAGE = {
  url: '/images/business.jpg',
  width: 1200,
  height: 628,
  alt: 'Hands working with a holographic network of connected gears, representing business automation',
};

const titleText = (title: Metadata['title']): string | undefined => {
  if (!title) return undefined;
  if (typeof title === 'string') return title;
  if ('absolute' in title && title.absolute) return title.absolute;
  if ('default' in title && title.default) return title.default;
  return undefined;
};

const asString = (v: unknown): string | undefined => (typeof v === 'string' ? v : v instanceof URL ? v.toString() : undefined);

/**
 * Fill Open Graph and Twitter card fields a page did not set. Page-specific values always win.
 * Pages that are not meant to be shared (noindex) still get tags: they are harmless and keep previews tidy.
 */
export function withSocialDefaults(metadata: Metadata): Metadata {
  const title = titleText(metadata.title);
  const description = metadata.description ?? undefined;
  const canonical = asString(metadata.alternates?.canonical);
  const og = (metadata.openGraph ?? {}) as NonNullable<Metadata['openGraph']> & Record<string, unknown>;
  const ogImages = og.images && (!Array.isArray(og.images) || og.images.length > 0) ? og.images : [DEFAULT_SHARE_IMAGE];
  const tw = (metadata.twitter ?? {}) as NonNullable<Metadata['twitter']> & Record<string, unknown>;
  const ogTitle = (og.title as string | undefined) ?? title;
  const ogDescription = (og.description as string | undefined) ?? description;

  // Twitter falls back to the Open Graph image, as a URL list.
  const firstImage = Array.isArray(ogImages) ? ogImages[0] : ogImages;
  const imageUrl = typeof firstImage === 'string' || firstImage instanceof URL ? String(firstImage) : (firstImage as { url: string | URL }).url.toString();

  return {
    ...metadata,
    openGraph: {
      siteName: SITE_NAME,
      locale: 'en_US',
      ...og,
      type: (og as { type?: string }).type ?? 'website',
      ...(ogTitle && { title: ogTitle }),
      ...(ogDescription && { description: ogDescription }),
      ...((og.url ?? canonical) && { url: og.url ?? canonical }),
      images: ogImages,
    } as Metadata['openGraph'],
    twitter: {
      ...tw,
      card: (tw as { card?: string }).card ?? 'summary_large_image',
      ...((tw.title ?? ogTitle) && { title: (tw.title as string | undefined) ?? ogTitle }),
      ...((tw.description ?? ogDescription) && { description: (tw.description as string | undefined) ?? ogDescription }),
      images: tw.images ?? [imageUrl],
    } as Metadata['twitter'],
  };
}
