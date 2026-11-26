// app/blog/[slug]/page.tsx
// Code-owned articles (content/blog). Any other /blog/<slug> falls through to Nexus CMS, as before.
// Server-rendered: the full article text is in the initial HTML.
import Link from 'next/link';
import type { Metadata } from 'next';
import CmsRoute, { cmsRouteMetadata } from '@/components/cms/CmsRoute';
import HeroBreadcrumb from '@/components/shared/HeroBreadcrumb';
import CtaBand from '@/components/landingPage/CtaBand';
import { RelatedLinks } from '@/components/seo/RelatedLinks';
import { RichText } from '@/components/solutions/sections/variants/RichText';
import { blogArticleBySlug, blogArticles, headingId } from '@/content/blog';
import type { ArticleBlock } from '@/content/blog/types';
import { canonicalUrl } from '@/lib/canonical';
import { withSocialDefaults, DEFAULT_SHARE_IMAGE } from '@/lib/seo';
import { ORGANIZATION_ID, WEBSITE_ID } from '@/lib/organization';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticleBySlug[slug];
  if (!article) return cmsRouteMetadata(`/blog/${slug}`);
  return withSocialDefaults({
    title: { absolute: article.title },
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: canonicalUrl(`/blog/${slug}`) },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.metaDescription,
      url: canonicalUrl(`/blog/${slug}`),
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
    },
  });
}

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'p':
      return (
        <p className="mb-5 text-base leading-relaxed text-ink/85 md:text-lg">
          <RichText text={block.text} />
        </p>
      );
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag className={`mb-6 space-y-3 pl-6 text-base leading-relaxed text-ink/85 md:text-lg ${block.ordered ? 'list-decimal' : 'list-disc'} marker:text-brand`}>
          {block.items.map((item, i) => (
            <li key={i} className="pl-1">
              <RichText text={item} />
            </li>
          ))}
        </Tag>
      );
    }
    case 'table':
      return (
        <div className="mb-6 overflow-x-auto border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm md:text-base">
            {block.caption && <caption className="eyebrow border-b border-border p-3 text-left text-xs text-muted-foreground">{block.caption}</caption>}
            <thead className="bg-secondary">
              <tr>
                {block.head.map((h, i) => (
                  <th key={i} scope="col" className="border-b border-border p-3 font-semibold text-ink">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-b border-border last:border-b-0">
                  {row.map((cell, c) =>
                    c === 0 ? (
                      <th key={c} scope="row" className="p-3 align-top font-semibold text-ink">
                        {cell}
                      </th>
                    ) : (
                      <td key={c} className="p-3 align-top text-ink/80">
                        <RichText text={cell} />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'callout':
      return (
        <aside className="mb-6 border-l-2 border-brand bg-brand/5 p-5 md:p-6">
          {block.title && <p className="eyebrow mb-2 text-xs text-brand">{block.title}</p>}
          <p className="text-base leading-relaxed text-ink/85 md:text-lg">
            <RichText text={block.text} />
          </p>
        </aside>
      );
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = blogArticleBySlug[slug];
  if (!article) return <CmsRoute path={`/blog/${slug}`} />;

  const url = canonicalUrl(`/blog/${slug}`);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: article.h1,
        description: article.metaDescription,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        author: { '@id': ORGANIZATION_ID },
        publisher: { '@id': ORGANIZATION_ID },
        isPartOf: { '@id': WEBSITE_ID },
        mainEntityOfPage: url,
        image: canonicalUrl(DEFAULT_SHARE_IMAGE.url),
        articleSection: article.category,
        ...(article.keywords ? { keywords: article.keywords } : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: canonicalUrl('/blog') },
          { '@type': 'ListItem', position: 3, name: article.h1, item: url },
        ],
      },
    ],
  };

  return (
    <div className="bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header className="relative isolate overflow-hidden border-b border-border bg-paper py-12 md:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />
          <div className="relative mx-auto w-full max-w-[84vw] px-6">
            <HeroBreadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: article.category, href: `/blog/${slug}` },
              ]}
            />
            <p className="eyebrow mb-5 inline-flex border border-brand px-3 py-1 text-xs text-brand md:text-sm">{article.category}</p>
            <h1 className="display mb-6 max-w-5xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">{article.h1}</h1>
            <p className="eyebrow text-xs text-muted-foreground">
              By the Clickmasters automation team · Updated <time dateTime={article.dateModified}>{formatDate(article.dateModified)}</time> ·{' '}
              {article.readMinutes} min read
            </p>
          </div>
        </header>

        <div className="mx-auto grid w-full max-w-[84vw] gap-10 px-6 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
          <div className="min-w-0 max-w-3xl">
            {article.intro.map((p, i) => (
              <p key={i} className="mb-5 text-lg leading-relaxed text-ink/85 md:text-xl">
                <RichText text={p} />
              </p>
            ))}

            {article.keyTakeaways && (
              <aside className="my-8 border border-border bg-secondary p-6 md:p-8">
                <p className="eyebrow mb-4 text-xs text-brand">Key takeaways</p>
                <ul className="list-disc space-y-3 pl-6 text-base leading-relaxed text-ink/85 marker:text-brand md:text-lg">
                  {article.keyTakeaways.map((t, i) => (
                    <li key={i}>
                      <RichText text={t} />
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            {article.sections.map((s) => (
              <section key={s.heading} id={headingId(s.heading)} className="scroll-mt-24">
                <h2 className="display mb-5 mt-12 text-3xl md:text-4xl">{s.heading}</h2>
                {s.blocks.map((b, i) => (
                  <Block key={i} block={b} />
                ))}
                {s.subsections?.map((sub) => (
                  <div key={sub.heading}>
                    <h3 className="display mb-3 mt-8 text-2xl">{sub.heading}</h3>
                    {sub.blocks.map((b, i) => (
                      <Block key={i} block={b} />
                    ))}
                  </div>
                ))}
              </section>
            ))}

            {article.faqs && article.faqs.length > 0 && (
              <section id="faq" className="scroll-mt-24">
                <h2 className="display mb-5 mt-12 text-3xl md:text-4xl">Frequently asked questions</h2>
                <div className="divide-y divide-border border-y border-border">
                  {article.faqs.map((f) => (
                    <details key={f.question} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold text-ink">
                        {f.question}
                        <span aria-hidden="true" className="text-brand transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-base leading-relaxed text-ink/80 md:text-lg">
                        <RichText text={f.answer} />
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {article.sources && article.sources.length > 0 && (
              <section className="mt-12 border-t border-border pt-8">
                <h2 className="eyebrow mb-4 text-sm text-muted-foreground">Sources</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {article.sources.map((src) => (
                    <li key={src.url}>
                      <a href={src.url} target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 hover:text-brand">
                        {src.label}
                      </a>{' '}
                      (checked {formatDate(src.checked)})
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-24 border-l border-border pl-5">
              <p className="eyebrow mb-4 text-xs text-muted-foreground">On this page</p>
              <ul className="space-y-3 text-sm">
                {article.sections.map((s) => (
                  <li key={s.heading}>
                    <a href={`#${headingId(s.heading)}`} className="text-ink/70 transition-colors hover:text-brand">
                      {s.heading}
                    </a>
                  </li>
                ))}
                {article.faqs && article.faqs.length > 0 && (
                  <li>
                    <a href="#faq" className="text-ink/70 transition-colors hover:text-brand">
                      FAQ
                    </a>
                  </li>
                )}
              </ul>
              <Link
                href="/free-automation-audit"
                className="mt-8 inline-flex bg-ink px-4 py-3 text-sm text-white transition-colors hover:bg-brand"
              >
                Book a free audit
              </Link>
            </nav>
          </aside>
        </div>
      </article>

      <RelatedLinks title="Put this into practice" eyebrow="Related services" links={article.related} />
      <CtaBand
        data={{
          heading: 'Not sure which approach fits your process?',
          subheading: 'Book a free automation audit. We map one workflow and recommend the platform and build.',
          cta: { text: 'Book Your Free Automation Audit', link: '/free-automation-audit' },
        }}
        ctaPosition="page-end"
      />
    </div>
  );
}
