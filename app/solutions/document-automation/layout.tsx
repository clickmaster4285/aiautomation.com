import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/canonical';
import { hubSeo } from '@/lib/hub-seo';

const hub = hubSeo.document;

export const metadata: Metadata = {
  title: hub.title,
  description: hub.description,
  alternates: {
    canonical: canonicalUrl(hub.path),
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
