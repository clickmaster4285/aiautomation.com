// Industry FAQ: the homepage FAQ layout. Answers are in the HTML (native <details>), so they are
// readable without JavaScript and visible to search engines.
import type { Section } from '@/content/type';
import FAQ from '@/components/landingPage/FAQ';

type Item = { title?: string; description?: string };

export default function FAQSec({ section }: { section: Section; bg?: string }) {
  const items = ((section.items || []) as Item[])
    .filter((i) => i.title && i.description)
    .map((i) => ({ question: i.title as string, answer: i.description as string }));
  if (!items.length) return null;
  return <FAQ data={{ heading: section.heading || 'Frequently asked questions', items }} ctaPosition="faq" />;
}
