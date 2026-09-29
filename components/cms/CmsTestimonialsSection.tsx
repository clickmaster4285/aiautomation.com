import Image from "next/image";

import CmsSectionHeading from "./CmsSectionHeading";

type CmsTestimonial = { quote: string; name?: string; role?: string; image?: string };

// Client quotes. Only photos supplied by the CMS are shown — no stock portraits.
export default function CmsTestimonialsSection({ data }: { data: { heading?: string; items: CmsTestimonial[] } }) {
  return (
    <section className="bg-secondary py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <CmsSectionHeading heading={data.heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.items.map((t, i) => (
            <figure key={i} className="bg-paper border border-border p-6 md:p-8 flex flex-col">
              <span className="display-italic text-5xl text-brand leading-none" aria-hidden>“</span>
              <blockquote className="text-base md:text-lg leading-relaxed mt-2 flex-1">{t.quote}</blockquote>
              {(t.name || t.role) && (
                <figcaption className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                  {t.image && (
                    <div className="relative size-11 overflow-hidden rounded-full shrink-0">
                      <Image src={t.image} alt={t.name ?? ""} fill unoptimized sizes="44px" className="object-cover" />
                    </div>
                  )}
                  <div>
                    {t.name && <div className="font-semibold text-sm">{t.name}</div>}
                    {t.role && <div className="eyebrow text-muted-foreground text-xs mt-0.5">{t.role}</div>}
                  </div>
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
