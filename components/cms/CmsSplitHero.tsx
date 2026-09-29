import Image from "next/image";

import { Dot, splitHeading } from "@/components/landingPage/Shared";

type HeroCta = { text: string; link: string };

type CmsSplitHeroData = {
  eyebrow?: string;
  heading: string;
  description?: string;
  meta?: string;
  image?: string;
  cta?: HeroCta;
  secondaryCta?: HeroCta;
};

// Text + image hero (CMS layout "split"), e.g. a blog article header.
// Same type scale, badge and buttons as landingPage/Hero, but with the
// CMS-provided image instead of the landing page's robot artwork.
export default function CmsSplitHero({ data }: { data: CmsSplitHeroData }) {
  const { head, tail } = splitHeading(data.heading);

  return (
    <section className="relative pt-8 pb-12 md:pt-16 md:pb-20 overflow-hidden bg-paper isolate">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mt-6 md:mt-10">
          <div>
            {data.eyebrow && (
              <span className="eyebrow text-brand border border-brand inline-block px-3 py-1 mb-6 text-xs md:text-sm">
                {data.eyebrow}
              </span>
            )}
            <h1 className="display text-5xl sm:text-6xl md:text-[4.2vw] leading-[1.08]">
              {head}
              {head && " "}
              <span className="display-italic font-normal text-brand">{tail}</span>
            </h1>
            {data.description && (
              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                {data.description}
              </p>
            )}
            {data.meta && (
              <p className="eyebrow text-muted-foreground mt-6 text-xs md:text-sm">{data.meta}</p>
            )}
            {(data.cta || data.secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full sm:w-auto">
                {data.cta && (
                  <a
                    href={data.cta.link}
                    className="bg-ink text-white text-sm px-5 py-3 hover:bg-brand transition-colors inline-flex items-center justify-center gap-2 text-center"
                  >
                    {data.cta.text} <span>›</span>
                  </a>
                )}
                {data.secondaryCta && (
                  <a
                    href={data.secondaryCta.link}
                    className="border border-ink text-ink text-sm px-5 py-3 font-medium hover:bg-ink hover:text-white transition-colors text-center"
                  >
                    {data.secondaryCta.text}
                  </a>
                )}
              </div>
            )}
          </div>

          {data.image && (
            <div className="relative aspect-[14/9] w-full overflow-hidden border border-border">
              <Image
                src={data.image}
                alt={data.heading}
                fill
                unoptimized
                loading="eager"
                sizes="(min-width: 768px) 42vw, 90vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>

      <Dot className="absolute top-[30%] left-[48%]" />
      <Dot className="absolute top-[70%] left-[6%]" />
    </section>
  );
}
