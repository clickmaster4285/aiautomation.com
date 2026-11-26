// components/solutions/SolutionPage.tsx
// The single template behind every data-driven solution page:
//   /solutions/<service>          (app/solutions/[service]/page.tsx)
//   /solutions/<service>/<slug>   (app/solutions/[service]/[slug]/page.tsx)
// Styled with the homepage ("/") design system (components/solutions/home, like components/products/ProductPage).
//
// A page's copy AND layout live in its content file (content/Solutions/...):
//   page.schema  → Service JSON-LD name / serviceType
//   page.blocks  → the sections in render order, each { type, section?, props? }
// Props that bind to the content object (FAQs, stats, steps, features…) are filled in here (BLOCK_DATA),
// so content files only hold what actually differs per page.
// Value references inside props: { $ref: 'field', slice?: [a, b] } → content[field],
// { $related: 'title' | 'subtitle' } → related-solutions heading. ({ $element } hero visuals are ignored:
// the hero shows the lead form, as on product pages.)
//
// Backgrounds and section markers ("01", "02"…) are assigned here per page, so any block order alternates
// light / dark like the homepage.
import { Fragment, type ComponentType, type ReactNode } from 'react';
import type { Metadata } from 'next';

import {
  HeroSection,
  WhySection,
  ProblemsSection,
  AutomationSection,
  StartSection,
  ExampleSection,
  BoundariesSection,
  RealitiesSection,
  ReturnSection,
  WhyUsSection,
  ContentSection,
  FeatureGrid,
  ProcessSteps,
  PlatformComparison,
  StatsSection,
  FAQSection,
  CTASection,
} from '@/components/solutions/home/sections';
import type { Tone } from '@/components/solutions/home/kit';
import { RelatedSolutions } from '@/components/solutions/sections/RelatedSolutions';
import { stripMarkup } from '@/components/solutions/sections/variants/RichText';
import { withInlineLinks, relatedHeading } from '@/lib/inline-links';
import { solutionBreadcrumbs, TOPICS, SEGMENTS, PLATFORMS } from '@/lib/link-graph';
import { RelatedCards } from '@/components/seo/RelatedCards';
import { SOLUTION_DETAILS } from '@/content/Solutions/pages';
import { canonicalUrl } from '@/lib/canonical';
import { isIndexableSolutionPath } from '@/lib/solution-indexing';
import { withSocialDefaults } from '@/lib/seo';
import { productCards } from '@/lib/product-cards';
import type { SolutionBlock, SolutionPageContent } from '@/content/type';

type AnyProps = Record<string, unknown>;
const asComponent = (c: unknown) => c as ComponentType<AnyProps>;

/** Section components a content file may use in page.blocks. */
const BLOCKS: Record<string, ComponentType<AnyProps>> = {
  HeroSection: asComponent(HeroSection),
  WhySection: asComponent(WhySection),
  ProblemsSection: asComponent(ProblemsSection),
  AutomationSection: asComponent(AutomationSection),
  StartSection: asComponent(StartSection),
  ExampleSection: asComponent(ExampleSection),
  BoundariesSection: asComponent(BoundariesSection),
  RealitiesSection: asComponent(RealitiesSection),
  ReturnSection: asComponent(ReturnSection),
  WhyUsSection: asComponent(WhyUsSection),
  ContentSection: asComponent(ContentSection),
  FeatureGrid: asComponent(FeatureGrid),
  ProcessSteps: asComponent(ProcessSteps),
  PlatformComparison: asComponent(PlatformComparison),
  StatsSection: asComponent(StatsSection),
  FAQSection: asComponent(FAQSection),
  RelatedSolutions: asComponent(RelatedSolutions),
  CTASection: asComponent(CTASection),
};

/** Props every block of a type takes from the content object. */
const BLOCK_DATA: Record<string, AnyProps> = {
  HeroSection: { badge: { $ref: 'heroBadge' }, heading: { $ref: 'heroHeading' }, subheading: { $ref: 'heroSubheading' } },
  ReturnSection: { stats: { $ref: 'stats' } },
  FAQSection: { faqs: { $ref: 'faqQuestions' } },
  RelatedSolutions: { title: { $related: 'title' }, subtitle: { $related: 'subtitle' }, solutions: { $ref: 'relatedSolutions' } },
  CTASection: { title: { $ref: 'cta' } },
  FeatureGrid: { features: { $ref: 'features' } },
  ProcessSteps: { steps: { $ref: 'processSteps' } },
  PlatformComparison: { bestFor: { $ref: 'bestFor' }, considerAlternatives: { $ref: 'considerAlternatives' } },
  StatsSection: { stats: { $ref: 'stats' } },
};

/** Blocks with their own homepage styling (no tone / marker). */
const SELF_STYLED = new Set(['HeroSection', 'FAQSection', 'RelatedSolutions', 'CTASection']);
/** Blocks that read best on the dark (ink) background, as on the homepage. */
const PREFERS_DARK = new Set(['ProblemsSection', 'ExampleSection', 'ProcessSteps', 'ReturnSection', 'StatsSection', 'PlatformComparison']);

/** Background per block: dark where preferred, light ones alternate paper / secondary, never two alike in a row. */
function assignTones(blocks: SolutionBlock[]): (Tone | undefined)[] {
  let prev: Tone | undefined;
  let light: Tone = 'secondary';
  return blocks.map((b) => {
    if (SELF_STYLED.has(b.type)) {
      prev = undefined;
      return undefined;
    }
    let tone: Tone;
    if (PREFERS_DARK.has(b.type) && prev !== 'ink') tone = 'ink';
    else {
      light = light === 'paper' ? 'secondary' : 'paper';
      if (light === prev) light = light === 'paper' ? 'secondary' : 'paper';
      tone = light;
    }
    prev = tone;
    return tone;
  });
}

type Ctx = { content: SolutionPageContent; related: { title: string; subtitle: string } };

function resolve(value: unknown, ctx: Ctx): unknown {
  if (Array.isArray(value)) return value.map((v) => resolve(v, ctx));
  if (!value || typeof value !== 'object') return value;
  const v = value as AnyProps;
  if (typeof v.$ref === 'string') {
    const data = (ctx.content as unknown as AnyProps)[v.$ref];
    const slice = v.slice as [number, number] | undefined;
    return slice && Array.isArray(data) ? data.slice(slice[0], slice[1]) : data;
  }
  if (typeof v.$related === 'string') return ctx.related[v.$related as 'title' | 'subtitle'];
  if (typeof v.$element === 'string') return undefined;
  return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, resolve(x, ctx)]));
}

function renderBlock(block: SolutionBlock, index: number, ctx: Ctx, tone: Tone | undefined, marker: string | undefined): ReactNode {
  const Block = BLOCKS[block.type];
  if (!Block) throw new Error(`Unknown block "${block.type}" in ${ctx.content.url}`);
  const props = resolve({ ...BLOCK_DATA[block.type], ...block.props }, ctx) as AnyProps;
  if (block.section !== undefined) {
    const body = ctx.content.sections[block.section];
    if (body === undefined) throw new Error(`Missing section "${block.section}" in ${ctx.content.url}`);
    props.content = Array.isArray(body) ? body : [body];
  }
  if (block.type === 'HeroSection') {
    // Breadcrumb from the site hierarchy (matches the BreadcrumbList JSON-LD); lead name for the hero form.
    props.breadcrumb = solutionBreadcrumbs(ctx.content.url).map((c) => ({ label: c.name, href: c.path }));
    props.leadName = ctx.content.page.schema.name;
    // "Learn More" anchors were hand-written and some don't match a section title
    // ("#why-retail-need-…" vs "Why Retail Businesses Need…"): fall back to the first section.
    const cta = props.secondaryCta as { text?: string; href?: unknown } | undefined;
    if (cta && typeof cta.href === 'string' && cta.href.startsWith('#')) {
      const anchors = ctx.content.page.blocks
        .filter((b) => b.type !== 'HeroSection' && typeof b.props?.title === 'string')
        .map((b) => anchorId(b.props!.title as string));
      if (anchors.length && !anchors.includes(cta.href.slice(1))) {
        props.secondaryCta = { ...cta, href: `#${anchors[0]}` };
      }
    }
  }
  if (tone) props.tone = tone;
  if (marker) props.marker = marker;
  // In-page anchors: content links such as "#why-insurance-agencies-need-crm-automation" (hero
  // "Learn More") point at the slug of a section's title, so each titled section gets that id.
  const anchor = block.type !== 'HeroSection' && typeof props.title === 'string' ? anchorId(props.title) : '';
  if (!anchor) return <Block key={index} {...props} />;
  return (
    <div key={index} id={anchor} className="scroll-mt-24">
      <Block {...props} />
    </div>
  );
}

function anchorId(title: string): string {
  return title
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * On a hub (/solutions/<topic>): cards for every live /solutions/<topic>/for-* and with-* page,
 * generated from the route registry so new detail pages are linked from their hub automatically.
 */
function ChildPages({ url }: { url: string }) {
  const [, , topic, child] = url.split('/');
  if (!topic || child) return null;
  // Cards show just the industry / platform name: the section heading already says "<Topic> for Your Industry",
  // and repeating the full keyword on every card would over-optimise the hub (keyword density).
  const card = (key: string) => {
    const child = key.split('/')[1];
    const name = child.startsWith('for-') ? SEGMENTS[child.slice(4)]?.name : PLATFORMS[child.slice(5)]?.name;
    return { title: name ?? child, href: `/solutions/${key}` };
  };
  const keys = Object.keys(SOLUTION_DETAILS).filter((k) => k.startsWith(`${topic}/`));
  const industries = keys.filter((k) => k.split('/')[1].startsWith('for-')).map(card);
  const platforms = keys.filter((k) => k.split('/')[1].startsWith('with-')).map(card);
  const name = TOPICS[topic]?.title ?? 'Automation';
  return (
    <>
      {industries.length > 0 && (
        <RelatedCards eyebrow="By industry" heading={`${name} for Your Industry`} intro={`${name} built around how each industry actually works.`} items={industries} />
      )}
      {platforms.length > 0 && (
        <RelatedCards eyebrow="By platform" heading={`${name} on Your Stack`} intro={`${name} built on the platforms your team already uses.`} items={platforms} tone="secondary" />
      )}
    </>
  );
}

/**
 * Product pages for the software behind this solution (TOPICS[topic].products). On a
 * /solutions/<topic>/for-<segment> page the segment's own product page (e.g. AI Healthcare Automation)
 * comes first. Hubs list every related product; detail pages the three most relevant.
 */
function RelatedProducts({ url }: { url: string }) {
  const [, , topic, child = ''] = url.split('/');
  const segment = child.startsWith('for-') ? SEGMENTS[child.slice(4)] : undefined;
  const segmentProducts = (segment?.products ?? []).filter((p) => p.split('/').length === 4);
  const items = productCards([...segmentProducts, ...(TOPICS[topic]?.products ?? [])], child ? 3 : 6);
  if (items.length === 0) return null;
  return (
    <RelatedCards
      eyebrow="Products"
      heading="Related AI Products"
      intro="Product pages for the software this solution is built on."
      items={items}
      tone="secondary"
    />
  );
}

export function solutionMetadata(content: SolutionPageContent): Metadata {
  return withSocialDefaults({
    title: content.titleTag,
    description: content.metaDescription,
    alternates: { canonical: canonicalUrl(content.url) },
    openGraph: {
      title: content.titleTag,
      description: content.metaDescription,
      url: canonicalUrl(content.url),
      type: 'website',
    },
    keywords: content.primaryKeyword,
    // Template-generated for-<industry> pages stay out of the index (lib/solution-indexing.ts).
    ...(isIndexableSolutionPath(content.url) ? {} : { robots: { index: false, follow: true } }),
  });
}

export function SolutionPage({ content: source }: { content: SolutionPageContent }) {
  const content = withInlineLinks(source);
  const ctx: Ctx = { content, related: relatedHeading(content) };
  const { schema, blocks } = content.page;
  const tones = assignTones(blocks);
  let n = 0;
  const markers = tones.map((t) => (t ? String(++n).padStart(2, '0') : undefined));
  const faqs = (content as unknown as { faqQuestions?: { question: string; answer: string }[] }).faqQuestions ?? [];

  return (
    // Root layout renders the single <main>; this page uses a <div> like the homepage.
    <div className="bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: schema.name,
            description: content.metaDescription,
            provider: { '@id': 'https://clickmastersaiautomation.com/#organization' },
            serviceType: schema.serviceType,
            areaServed: 'Global',
          }),
        }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: stripMarkup(f.question),
                acceptedAnswer: { '@type': 'Answer', text: stripMarkup(f.answer) },
              })),
            }),
          }}
        />
      )}
      {blocks.map((block, i) => (
        <Fragment key={i}>
          {block.type === 'FAQSection' && (
            <>
              <ChildPages url={content.url} />
              <RelatedProducts url={content.url} />
            </>
          )}
          {renderBlock(block, i, ctx, tones[i], markers[i])}
        </Fragment>
      ))}
    </div>
  );
}
