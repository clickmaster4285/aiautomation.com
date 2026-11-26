// app/blog/page.tsx
// Blog hub: lists the code-owned articles in content/blog. Server-rendered, so every article link is
// in the initial HTML. Hero follows the other hubs (/industries, /platforms).
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeroBreadcrumb from '@/components/shared/HeroBreadcrumb';
import CtaBand from '@/components/landingPage/CtaBand';
import { SectionLabel } from '@/components/landingPage/Shared';
import { blogArticles } from '@/content/blog';
import { BLOG_RESOURCE_LINKS } from '@/lib/internal-links';
import { canonicalUrl } from '@/lib/canonical';
import { ORGANIZATION_ID } from '@/lib/organization';

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${canonicalUrl('/blog')}#blog`,
        name: 'Clickmasters AI Automation Blog',
        url: canonicalUrl('/blog'),
        publisher: { '@id': ORGANIZATION_ID },
        blogPost: blogArticles.map((a) => ({
          '@type': 'BlogPosting',
          headline: a.h1,
          url: canonicalUrl(`/blog/${a.slug}`),
          datePublished: a.datePublished,
          dateModified: a.dateModified,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: canonicalUrl('/blog') },
        ],
      },
    ],
  };

  return (
    <div className="bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate overflow-hidden border-b border-border bg-paper py-12 md:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="relative mx-auto w-full max-w-[84vw] px-6">
          <HeroBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }]} />
          <p className="eyebrow mb-5 inline-flex border border-brand px-3 py-1 text-xs text-brand md:mb-7 md:text-sm">Guides</p>
          <h1 className="display mb-5 max-w-4xl text-4xl leading-[1.05] sm:text-5xl md:mb-7 md:text-6xl lg:text-7xl">
            AI Automation Guides <span className="display-italic text-brand">and Comparisons</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Practical guides from the team that builds and maintains automations: choosing platforms, deciding when an
            AI agent is worth it, and running workflows reliably in production.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label="Latest articles" />
          <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
            {blogArticles.map((a) => (
              <article key={a.slug} className="bg-paper">
                <Link href={`/blog/${a.slug}`} className="group flex h-full flex-col p-6 md:p-8">
                  <p className="eyebrow mb-4 text-xs text-brand">{a.category}</p>
                  <h2 className="display mb-4 text-2xl transition-colors group-hover:text-brand md:text-3xl">{a.h1}</h2>
                  <p className="mb-6 text-base leading-relaxed text-muted-foreground">{a.excerpt}</p>
                  <p className="eyebrow mt-auto flex items-center gap-2 text-xs text-muted-foreground">
                    <time dateTime={a.dateModified}>{formatDate(a.dateModified)}</time> · {a.readMinutes} min read
                    <ArrowRight className="ml-auto h-4 w-4 text-brand transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label="What we build" />
          <h2 className="display mb-8 text-3xl md:text-4xl">
            Services these guides <span className="display-italic text-brand">support</span>
          </h2>
          <ul className="flex flex-wrap gap-3">
            {BLOG_RESOURCE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-block border border-border bg-paper px-4 py-2 text-sm text-ink transition-colors hover:border-brand hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        data={{
          heading: 'Have a process you want automated?',
          subheading: 'Book a free automation audit and we will map it with you.',
          cta: { text: 'Book Your Free Automation Audit', link: '/free-automation-audit' },
        }}
        ctaPosition="page-end"
      />
    </div>
  );
}
