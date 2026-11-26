// components/solutions/sections/RelatedSolutions.tsx
// "Explore other solutions" block on solution pages; renders the site-wide related-cards design.
import { RelatedCards } from '@/components/seo/RelatedCards';

interface RelatedSolution {
  title: string;
  slug: string;
  description: string;
}

interface RelatedSolutionsProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  solutions: RelatedSolution[];
}

export function RelatedSolutions({ title, subtitle, eyebrow = 'Explore more', solutions }: RelatedSolutionsProps) {
  return (
    <RelatedCards
      eyebrow={eyebrow}
      heading={title}
      intro={subtitle}
      tone="secondary"
      items={(solutions ?? []).map((s) => ({ title: s.title, description: s.description, href: `/solutions/${s.slug}` }))}
    />
  );
}
