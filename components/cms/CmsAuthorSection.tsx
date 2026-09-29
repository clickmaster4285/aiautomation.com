import Image from "next/image";

import CmsRichText from "./CmsRichText";

type CmsAuthorData = {
  label?: string;
  name: string;
  role?: string;
  image?: string;
  bioHtml?: string;
};

// Author bio card shown under an article.
export default function CmsAuthorSection({ data }: { data: CmsAuthorData }) {
  const initials = data.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <section className="bg-paper py-10 md:py-14">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <div className="max-w-3xl mx-auto border border-border bg-secondary/40 p-6 md:p-8 flex flex-col sm:flex-row gap-6">
          <div className="shrink-0">
            {data.image ? (
              <div className="relative size-20 overflow-hidden rounded-full border border-border">
                <Image src={data.image} alt={data.name} fill unoptimized sizes="80px" className="object-cover" />
              </div>
            ) : (
              <div className="size-20 rounded-full bg-ink text-white flex items-center justify-center display text-2xl">
                {initials}
              </div>
            )}
          </div>
          <div>
            {data.label && (
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-brand" />
                <span className="text-brand text-xs font-semibold tracking-widest uppercase font-sans">
                  {data.label}
                </span>
              </div>
            )}
            <h3 className="display text-2xl md:text-3xl">{data.name}</h3>
            {data.role && <p className="eyebrow text-muted-foreground mt-1 text-xs md:text-sm">{data.role}</p>}
            {data.bioHtml && <CmsRichText html={data.bioHtml} className="mt-4" />}
          </div>
        </div>
      </div>
    </section>
  );
}
