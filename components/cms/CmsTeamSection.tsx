import Image from "next/image";

import CmsSectionHeading from "./CmsSectionHeading";

type CmsMember = { name: string; role?: string; image?: string; bio?: string };

export default function CmsTeamSection({ data }: { data: { heading?: string; description?: string; items: CmsMember[] } }) {
  return (
    <section className="bg-paper py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <CmsSectionHeading heading={data.heading} description={data.description} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.items.map((m, i) => (
            <div key={i} className="border border-border">
              <div className="relative aspect-[4/5] bg-secondary flex items-center justify-center overflow-hidden">
                {m.image ? (
                  <Image src={m.image} alt={m.name} fill unoptimized sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw" className="object-cover" />
                ) : (
                  <span className="display text-6xl text-ink/15">
                    {m.name.split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("")}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="display text-2xl">{m.name}</h3>
                {m.role && <p className="eyebrow text-brand text-xs mt-1">{m.role}</p>}
                {m.bio && <p className="text-sm text-muted-foreground leading-relaxed mt-3">{m.bio}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
