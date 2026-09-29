import Image from "next/image";

type CmsLogo = { image?: string; name?: string; url?: string };

// "Trusted by" strip (CMS "logos"): logo images, or the name as text.
export default function CmsLogosSection({ data }: { data: { heading?: string; items: CmsLogo[] } }) {
  return (
    <section className="bg-paper py-10 md:py-16 border-y border-gray-200">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        {data.heading && (
          <p className="eyebrow text-muted-foreground text-xs md:text-sm text-center mb-8">{data.heading}</p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {data.items.map((logo, i) => {
            const mark = logo.image ? (
              <div className="relative h-10 w-32 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition">
                <Image src={logo.image} alt={logo.name ?? ""} fill unoptimized sizes="128px" className="object-contain" />
              </div>
            ) : (
              <span className="display text-xl text-ink/60">{logo.name}</span>
            );
            return logo.url ? (
              <a key={i} href={logo.url} target="_blank" rel="noopener noreferrer">{mark}</a>
            ) : (
              <div key={i}>{mark}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
