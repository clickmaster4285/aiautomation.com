import Image from "next/image";

import { splitHeading } from "@/components/landingPage/Shared";
import CmsRichText from "./CmsRichText";

type CmsImageTextData = {
  eyebrow?: string;
  heading?: string;
  bodyHtml?: string;
  image?: string;
  alt?: string;
  caption?: string;
  cta?: { text: string; link: string };
};

// CMS "imageText" (text beside an image) and "image" (image only).
export default function CmsImageTextSection({ data }: { data: CmsImageTextData }) {
  const { head, tail } = splitHeading(data.heading ?? "");
  const hasText = !!(data.heading || data.bodyHtml || data.eyebrow);

  const figure = data.image && (
    <figure>
      <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
        <Image
          src={data.image}
          alt={data.alt || data.heading || ""}
          fill
          unoptimized
          sizes={hasText ? "(min-width: 768px) 42vw, 90vw" : "84vw"}
          className="object-cover"
        />
      </div>
      {data.caption && <figcaption className="text-sm text-muted-foreground mt-3">{data.caption}</figcaption>}
    </figure>
  );

  return (
    <section className="bg-paper py-12 md:py-20">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        {hasText ? (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              {data.eyebrow && (
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-12 bg-brand" />
                  <span className="text-brand text-sm font-semibold tracking-widest uppercase font-sans">
                    {data.eyebrow}
                  </span>
                </div>
              )}
              {data.heading && (
                <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                  {head}
                  {head && " "}
                  <span className="display-italic text-brand">{tail}</span>
                </h2>
              )}
              {data.bodyHtml && <CmsRichText html={data.bodyHtml} />}
              {data.cta && (
                <a
                  href={data.cta.link}
                  className="inline-flex mt-8 bg-ink text-white text-sm px-5 py-3 hover:bg-brand transition-colors items-center gap-2"
                >
                  {data.cta.text} <span>›</span>
                </a>
              )}
            </div>
            {figure}
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">{figure}</div>
        )}
      </div>
    </section>
  );
}
