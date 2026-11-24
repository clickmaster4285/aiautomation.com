// components/solutions/SolutionPage.tsx
// The single template behind every data-driven solution page:
//   /solutions/<service>          (app/solutions/[service]/page.tsx)
//   /solutions/<service>/<slug>   (app/solutions/[service]/[slug]/page.tsx)
//
// A page's copy AND layout live in its content file (content/Solutions/...):
//   page.schema  → Service JSON-LD name / serviceType
//   page.blocks  → the sections in render order, each { type, section?, props? }
// Props that bind to the content object (FAQs, stats, steps, features…) are filled in here (BLOCK_DATA),
// so content files only hold what actually differs per page.
// Value references inside props: { $ref: 'field', slice?: [a, b] } → content[field],
// { $related: 'title' | 'subtitle' } → related-solutions heading, { $element: 'Name', props } → hero visual.
import type { ComponentType, ReactNode } from 'react';
import type { Metadata } from 'next';

import { PageWrapper } from '@/components/solutions/layout/PageWrapper';
import { HeroSection } from '@/components/solutions/sections/Hero';
import {
  WhySection,
  ProblemsSection,
  AutomationSection,
  StartSection,
  ExampleSection,
  BoundariesSection,
  RealitiesSection,
  ReturnSection,
  WhyUsSection,
} from '@/components/solutions/sections/variants';
import { ContentSection } from '@/components/solutions/sections/Content';
import { FeatureGrid } from '@/components/solutions/sections/FeatureGrid';
import { ProcessSteps } from '@/components/solutions/sections/ProcessSteps';
import { PlatformComparison } from '@/components/solutions/sections/PlatformComparison';
import { StatsSection } from '@/components/solutions/sections/Stats';
import { FAQSection } from '@/components/solutions/sections/FAQ';
import { RelatedSolutions } from '@/components/solutions/sections/RelatedSolutions';
import { CTASection } from '@/components/solutions/sections/CTA';
import { AutomationHeroMockup } from '@/components/solutions/sections/IndustryHeroMockup';
import { ChatbotHeroMockup } from '@/components/solutions/sections/ChatbotHeroMockup';
import { withInlineLinks, relatedHeading } from '@/lib/inline-links';
import { canonicalUrl } from '@/lib/canonical';
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

/** Hero visuals a content file may reference with { $element }. */
const VISUALS: Record<string, ComponentType<AnyProps>> = {
  AutomationHeroMockup: asComponent(AutomationHeroMockup),
  ChatbotHeroMockup: asComponent(ChatbotHeroMockup),
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

type Ctx = { content: SolutionPageContent; related: { title: string; subtitle: string } };

function resolve(value: unknown, ctx: Ctx, key?: string): unknown {
  if (Array.isArray(value)) return value.map((v, i) => resolve(v, ctx, String(i)));
  if (!value || typeof value !== 'object') return value;
  const v = value as AnyProps;
  if (typeof v.$ref === 'string') {
    const data = (ctx.content as unknown as AnyProps)[v.$ref];
    const slice = v.slice as [number, number] | undefined;
    return slice && Array.isArray(data) ? data.slice(slice[0], slice[1]) : data;
  }
  if (typeof v.$related === 'string') return ctx.related[v.$related as 'title' | 'subtitle'];
  if (typeof v.$element === 'string') {
    const Visual = VISUALS[v.$element];
    if (!Visual) throw new Error(`Unknown hero visual "${v.$element}" in ${ctx.content.url}`);
    return <Visual key={key} {...(resolve(v.props ?? {}, ctx) as AnyProps)} />;
  }
  return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, resolve(x, ctx, k)]));
}

function renderBlock(block: SolutionBlock, index: number, ctx: Ctx): ReactNode {
  const Block = BLOCKS[block.type];
  if (!Block) throw new Error(`Unknown block "${block.type}" in ${ctx.content.url}`);
  const props = resolve({ ...BLOCK_DATA[block.type], ...block.props }, ctx) as AnyProps;
  if (block.section !== undefined) {
    const body = ctx.content.sections[block.section];
    if (body === undefined) throw new Error(`Missing section "${block.section}" in ${ctx.content.url}`);
    props.content = Array.isArray(body) ? body : [body];
  }
  return <Block key={index} {...props} />;
}

export function solutionMetadata(content: SolutionPageContent): Metadata {
  return {
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
  };
}

export function SolutionPage({ content: source }: { content: SolutionPageContent }) {
  const content = withInlineLinks(source);
  const ctx: Ctx = { content, related: relatedHeading(content) };
  const { schema, blocks } = content.page;

  return (
    <PageWrapper>
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
      {blocks.map((block, i) => renderBlock(block, i, ctx))}
    </PageWrapper>
  );
}
