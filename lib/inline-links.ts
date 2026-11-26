// lib/inline-links.ts
// Server-side entry points for contextual (in-text) internal links. Rules and matching live in
// lib/inline-links-core.ts; this file supplies the list of live solution pages and walks page content.
//
//   withInlineLinks(content)        content-driven solution pages (components/solutions/SolutionPage.tsx)
//   withPlatformLinks(slug, list)   /platforms/<slug> sections (app/platforms/[slug]/page.tsx)
//   solutionLivePaths(prefix?)      live solution paths, for client pages using components/solutions/InlineLinks.tsx

import type { RelatedSolution } from '@/content/type';
import { allSolutionPaths } from '@/content/Solutions/pages';
import { TOPICS, SEGMENTS, PLATFORMS } from '@/lib/link-graph';
import { createLinker, emphasizeKeyword } from '@/lib/inline-links-core';

/** Minimal shape the linker needs (one page stores section bodies as string arrays). */
type LinkableContent = {
  url?: string;
  sections?: Record<string, string | string[]>;
  relatedSolutions?: RelatedSolution[];
  features?: { description?: string }[];
  processSteps?: { description?: string }[];
};

let live: Set<string> | undefined;
const livePaths = () => (live ??= new Set(allSolutionPaths().map((p) => `/solutions/${p}`)));

/** Every live /solutions path, optionally only those under a prefix (keeps client payloads small). */
export const solutionLivePaths = (prefix = '/solutions/') => [...livePaths()].filter((p) => p.startsWith(prefix));

const linkItems = <T extends { description?: string }>(items: T[] | undefined, link: (s: string) => string) =>
  items?.map((it) => (typeof it?.description === 'string' ? { ...it, description: link(it.description) } : it));

/** Add contextual links to a solution page's copy. Pure and deterministic. */
export function withInlineLinks<T extends LinkableContent>(content: T): T {
  if (!content?.url || !content.sections) return content;
  const self = content.url.replace(/\/$/, '');
  const { link } = createLinker(self, livePaths());
  const linkBody = (b: string | string[]) => (typeof b === 'string' ? link(b) : Array.isArray(b) ? b.map(link) : b);

  // 1. Highlight the page's primary keyword at its first natural mention, following the rendered section order.
  const blockOrder = ((content as { page?: { blocks?: { section?: string }[] } }).page?.blocks ?? [])
    .map((b) => b.section)
    .filter((s): s is string => Boolean(s) && s! in content.sections!);
  const order = [...new Set([...blockOrder, ...Object.keys(content.sections)])];
  const flat = order.flatMap((k) => {
    const b = content.sections![k];
    return (Array.isArray(b) ? b : [b]).map((text, i) => ({ k, i, text }));
  });
  const keyword = (content as { primaryKeyword?: string }).primaryKeyword;
  const emphasized = emphasizeKeyword(
    flat.map((f) => f.text),
    keyword,
  );
  // The hero subheading (opening copy, first ~150 words) gets its own highlight.
  const heroSubheading = (content as { heroSubheading?: string }).heroSubheading;
  const heroHighlighted = heroSubheading ? emphasizeKeyword([heroSubheading], keyword)[0] : undefined;
  const source: Record<string, string | string[]> = {};
  flat.forEach((f, n) => {
    const orig = content.sections![f.k];
    if (Array.isArray(orig)) ((source[f.k] as string[] | undefined) ?? (source[f.k] = []) as string[]).push(emphasized[n]);
    else source[f.k] = emphasized[n];
  });

  // 2. Contextual links (bold and highlighted text is never linked).
  const sections: Record<string, string | string[]> = {};
  for (const [title, body] of Object.entries(source)) sections[title] = linkBody(body);
  const features = linkItems(content.features, link);
  const processSteps = linkItems(content.processSteps, link);

  // "Explore other solutions": point at the same-industry / same-platform version of each topic.
  const [, , topic, child = ''] = self.split('/');
  const relatedSolutions = (content.relatedSolutions ?? []).map((r) => {
    const base = r.slug.split('/')[0];
    const variant = child && base !== topic ? `${base}/${child}` : undefined;
    if (variant && livePaths().has(`/solutions/${variant}`)) {
      const segName = child.startsWith('for-') ? SEGMENTS[child.slice(4)]?.name : PLATFORMS[child.slice(5)]?.name;
      return {
        ...r,
        slug: variant,
        title: `${TOPICS[base]?.title ?? r.title} ${child.startsWith('for-') ? 'for' : 'with'} ${segName ?? ''}`.trim(),
      };
    }
    return r;
  });

  return {
    ...content,
    sections,
    relatedSolutions,
    ...(heroHighlighted && { heroSubheading: heroHighlighted }),
    ...(features && { features }),
    ...(processSteps && { processSteps }),
  };
}

type PlatformSection = {
  type: string;
  content?: string | string[];
  items?: { description?: string }[];
};

/** Section types whose body copy gets links (hero, CTA, reviews and case-study cards stay as written). */
const PLATFORM_LINKABLE = new Set(['text', 'features', 'grid', 'steps', 'painpoint', 'industries', 'faq']);

/** Add contextual links to a /platforms/<slug> page's sections, in render order. */
export function withPlatformLinks<S extends PlatformSection>(slug: string, sections: S[]): S[] {
  const { link } = createLinker(`/platforms/${slug}`, livePaths());
  return sections.map((s) => {
    if (!PLATFORM_LINKABLE.has(s.type)) return s;
    const out: Record<string, unknown> = { ...s };
    if (typeof s.content === 'string') out.content = link(s.content);
    else if (Array.isArray(s.content)) out.content = s.content.map((p) => (typeof p === 'string' ? link(p) : p));
    if (Array.isArray(s.items)) out.items = linkItems(s.items, link);
    // TextSec side cards: { title, desc }
    const cards = (s as { cards?: unknown }).cards;
    if (Array.isArray(cards)) out.cards = cards.map((c) => (typeof c?.desc === 'string' ? { ...c, desc: link(c.desc) } : c));
    return out as S;
  });
}

/** Heading for the related-solutions section, specific to the page. */
export function relatedHeading(content: LinkableContent) {
  const [, , , child = ''] = (content.url ?? '').split('/');
  if (child.startsWith('for-')) {
    const name = SEGMENTS[child.slice(4)]?.name;
    if (name) return { title: `More AI Automation for ${name}`, subtitle: `Other ${name.toLowerCase()} workflows we automate` };
  }
  if (child.startsWith('with-')) {
    const name = PLATFORMS[child.slice(5)]?.name;
    if (name) return { title: `More ${name} Automation Solutions`, subtitle: `Other solutions we build on ${name}` };
  }
  return { title: 'Related AI Automation Solutions', subtitle: 'Solutions that work alongside this one' };
}

// Pages each platform page links to besides its own /solutions/<topic>/with-<platform> pages.
// Platforms with few or no "with-" pages get the solution hubs their copy covers.
const PLATFORM_EXTRA_LINKS: Record<string, { href: string; label: string }[]> = {
  zapier: [{ href: '/blog/n8n-vs-zapier-vs-make', label: 'n8n vs Zapier vs Make' }],
  make: [
    { href: '/solutions/ai-workflow-automation', label: 'AI Workflow Automation' },
    { href: '/solutions/business-process-automation', label: 'Business Process Automation' },
    { href: '/blog/n8n-vs-zapier-vs-make', label: 'n8n vs Zapier vs Make' },
  ],
  n8n: [
    { href: '/solutions/ai-agents', label: 'AI Agents' },
    { href: '/blog/n8n-vs-zapier-vs-make', label: 'n8n vs Zapier vs Make' },
  ],
  hubspot: [],
  gohighlevel: [
    { href: '/solutions/crm-automation', label: 'CRM Automation' },
    { href: '/solutions/lead-generation-automation', label: 'Lead Generation Automation' },
    { href: '/solutions/appointment-booking-automation', label: 'Appointment Booking Automation' },
    { href: '/industries/ai-automation-for-marketing-agencies', label: 'AI Automation for Marketing Agencies' },
  ],
  airtable: [{ href: '/solutions/business-process-automation', label: 'Business Process Automation' }],
};

/** Related links for /platforms/<slug>: its live "with-<platform>" solution pages, then curated extras. */
export function platformRelatedLinks(slug: string): { href: string; label: string }[] {
  const entry = Object.entries(PLATFORMS).find(([, p]) => p.page === slug);
  if (!entry) return [];
  const [key, platform] = entry;
  const own = allSolutionPaths()
    .filter((p) => p.endsWith(`/with-${key}`))
    .map((p) => {
      const topic = p.split('/')[0];
      return { href: `/solutions/${p}`, label: `${TOPICS[topic]?.title ?? topic} with ${platform.name}` };
    });
  return [...own, ...(PLATFORM_EXTRA_LINKS[key] ?? [])].slice(0, 6);
}
