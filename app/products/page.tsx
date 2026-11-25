// app/products/page.tsx
// "All products" index. Lists every category and product from the navbar data;
// only products with a built page (LIVE_PRODUCT_PATHS) are linked.
import type { Metadata } from 'next';
import Link from 'next/link';

import { SectionLabel } from '@/components/landingPage/Shared';
import { canonicalUrl } from '@/lib/canonical';
import { withSocialDefaults } from '@/lib/seo';
import { productCategories, PRODUCTS_PATH } from '@/content/products';

const title = 'AI Automation Products for Every Team | Clickmasters';
const description =
  'AI automation products for sales, support, marketing, HR, finance, e-commerce, documents and AI agents, built inside the tools your team already uses.';

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
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <nav aria-label="Breadcrumb" className="mb-6 eyebrow text-xs text-muted-foreground">
            <Link href="/" className="hover:text-brand">Home</Link> <span aria-hidden="true">/</span>{' '}
            <span className="text-ink" aria-current="page">Products</span>
          </nav>
          <span className="eyebrow text-brand border border-brand inline-block px-3 py-1 mb-6 text-xs md:text-sm">Products</span>
          <h1 className="display text-5xl sm:text-6xl md:text-7xl leading-[1.05] max-w-4xl">
            AI Automation Products <span className="display-italic text-brand">for Every Team</span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Each product is an AI system we build inside the tools you already run, from your CRM to your help desk and
            marketing platform. Pick the area that costs your team the most time.
          </p>
        </div>
      </section>

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
