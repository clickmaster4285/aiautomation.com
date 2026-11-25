// app/products/page.tsx
// "All products" index. Lists every category and product from the navbar data;
// only products with a built page (LIVE_PRODUCT_PATHS) are linked.
import type { Metadata } from 'next';
import Link from 'next/link';

import { SectionLabel } from '@/components/landingPage/Shared';
import ProductLeadForm from '@/components/products/ProductLeadForm';
import { canonicalUrl } from '@/lib/canonical';
import { withSocialDefaults } from '@/lib/seo';
import { productCategories, PRODUCTS_PATH } from '@/content/products';
import HeroBreadcrumb from '@/components/shared/HeroBreadcrumb';
import HeroCta from '@/components/shared/HeroCta';
import Marquee from '@/components/landingPage/Marquee';

const title = 'AI Automation Products for Business Teams | Clickmasters';
const description =
  'Explore AI automation products for sales, support, marketing, HR, finance, e-commerce and AI agents—built around your existing tools and workflows.';
const heroDescription =
  'Find AI automation products for sales, customer support, marketing, HR, finance, e-commerce, document processing, and AI agents. Built around your existing software, these solutions reduce repetitive work, improve response times, and help your team scale.';

export const metadata: Metadata = withSocialDefaults({
  title,
  description,
  alternates: { canonical: canonicalUrl(PRODUCTS_PATH) },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(PRODUCTS_PATH), type: 'website', siteName: 'Clickmasters AI Automation' },
});

export default function ProductsPage() {
  const live = productCategories.filter((c) => c.live || c.products.some((p) => p.live));
  const upcoming = productCategories.filter((c) => !live.includes(c));

  return (
    <div className="bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'Products', item: canonicalUrl(PRODUCTS_PATH) },
            ],
          }),
        }}
      />

      {/* Hero */}
      <div className="flex min-h-[calc(100svh-4rem)] flex-col">
        <section className="relative isolate flex-1 overflow-hidden bg-paper py-12 md:flex md:items-center md:py-10">
          <div className="mx-auto w-full max-w-[84vw] px-6">
            <HeroBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }]} />
            <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr] lg:gap-16">
              <div>
                <span className="eyebrow mb-5 inline-block border border-brand px-3 py-1 text-xs text-brand md:mb-7 md:text-sm">
                  Products
                </span>
                <h1 className="display mb-5 max-w-4xl text-4xl leading-[1.05] sm:text-5xl md:mb-7 md:text-6xl lg:text-7xl">
                  AI Automation Products <span className="display-italic text-brand">for Business Teams</span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {heroDescription}
                </p>
                <HeroCta />
              </div>
              <div className="flex md:justify-end">
                <ProductLeadForm product="AI automation products" variant="hero" id="get-started" />
              </div>
            </div>
          </div>
        </section>
        <Marquee items={live.map((c) => c.title)} />
      </div>

      {/* Live categories */}
      {live.map((cat, ci) => (
        <section key={cat.slug} className={`py-14 md:py-20 ${ci % 2 === 0 ? 'bg-secondary' : 'bg-paper'}`}>
          <div className="mx-auto max-w-[84vw] px-6">
            <SectionLabel label={cat.title} marker={String(ci + 1).padStart(2, '0')} />
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
              <h2 className="display text-3xl sm:text-4xl md:text-5xl">{cat.title}</h2>
              <div className="md:self-end md:text-right">
                <p className="text-muted-foreground">{cat.description}</p>
                {cat.live && (
                  <Link href={cat.path} className="inline-block mt-4 bg-ink text-white text-sm px-6 py-3 hover:bg-brand transition-colors">
                    Explore {cat.title} <span aria-hidden="true">›</span>
                  </Link>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
              {cat.products.map((p) =>
                p.live ? (
                  <Link key={p.slug} href={p.path} className="block bg-paper p-6 md:p-8 group hover:bg-ink hover:text-white transition-colors duration-500">
                    <h3 className="display text-xl md:text-2xl mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed">{p.description}</p>
                    <span className="mt-4 inline-block eyebrow text-xs text-muted-foreground group-hover:text-brand">
                      Explore <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ) : (
                  <div key={p.slug} className="bg-paper p-6 md:p-8">
                    <h3 className="display text-xl md:text-2xl mb-2 text-ink/70">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                    <span className="mt-4 inline-block eyebrow text-xs text-muted-foreground">Coming soon</span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Upcoming categories (no pages yet — listed without links) */}
      {upcoming.length > 0 && (
        <section className="bg-ink text-white py-14 md:py-20">
          <div className="mx-auto max-w-[84vw] px-6">
            <SectionLabel label="Coming soon" dark />
            <h2 className="display text-3xl sm:text-4xl md:text-5xl mb-8">
              More products <span className="display-italic text-brand">on the way</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {upcoming.map((cat) => (
                <div key={cat.slug} className="bg-ink p-6 md:p-8">
                  <h3 className="display text-xl md:text-2xl mb-2">{cat.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="display text-4xl md:text-6xl">
            Not sure where to <span className="display-italic text-brand">start?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Book a free, no-obligation audit and we will show you which product would save your team the most time.
          </p>
          <Link href="/free-automation-audit" className="inline-block mt-8 bg-ink text-white text-sm px-8 py-4 hover:bg-brand transition-colors">
            Book a Free Audit <span aria-hidden="true">›</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
