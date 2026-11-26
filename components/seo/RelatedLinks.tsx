// components/seo/RelatedLinks.tsx (server component)
// Curated related-page links (industries, services, CMS/blog pages) rendered with the site-wide card design.
// Card text comes from each target page's own content (lib/page-summaries.ts).
import { RelatedCards } from '@/components/seo/RelatedCards';
import { pageSummary } from '@/lib/page-summaries';

export function RelatedLinks({
  title,
  links,
  eyebrow = 'Explore more',
  intro,
}: {
  title: string;
  links: { href: string; label: string }[];
  eyebrow?: string;
  intro?: string;
}) {
  return (
    <RelatedCards
      eyebrow={eyebrow}
      heading={title}
      intro={intro}
      items={links.map((l) => ({ title: l.label, href: l.href, description: pageSummary(l.href) }))}
    />
  );
}
