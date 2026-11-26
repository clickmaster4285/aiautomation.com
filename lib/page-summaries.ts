// lib/page-summaries.ts (server only: reads page content)
// One-line descriptions for internal-link cards (components/seo/RelatedLinks.tsx), looked up by href.
import { SOLUTION_HUBS, SOLUTION_DETAILS } from '@/content/Solutions/pages';
import { getServiceBySlug } from '@/content/services';
import { hubSeo } from '@/lib/hub-seo';
import { industryContent } from '@/content/Industries';
import { platformContent } from '@/content/Platforms';
import { blogArticleBySlug } from '@/content/blog';

/** First sentence, so meta descriptions read as a short card line. */
const firstSentence = (s?: string) => s?.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? s;

const hubDescriptions = new Map<string, string>(
  Object.values(hubSeo).map((h) => [h.path, h.description] as [string, string]),
);

export function pageSummary(href: string): string | undefined {
  const path = href.replace(/[?#].*$/, '').replace(/\/$/, '');
  const [, area, a, b] = path.split('/');
  if (area === 'solutions' && a) {
    const content = (b ? SOLUTION_DETAILS[`${a}/${b}`] : SOLUTION_HUBS[a]) as { heroSubheading?: string; metaDescription?: string } | undefined;
    if (content) return content.heroSubheading || firstSentence(content.metaDescription);
  }
  if (area === 'services' && a) {
    const service = getServiceBySlug(a) as { metaDescription?: string } | undefined;
    if (service?.metaDescription) return firstSentence(service.metaDescription);
  }
  if (area === 'industries' && a) {
    const industry = industryContent[a];
    if (industry) return firstSentence(industry.metaDescription);
  }
  if (area === 'platforms' && a) {
    const platform = platformContent[a];
    if (platform) return firstSentence(platform.metaDescription);
  }
  if (area === 'blog' && a) {
    const article = blogArticleBySlug[a];
    if (article) return article.excerpt;
  }
  return firstSentence(hubDescriptions.get(path));
}
