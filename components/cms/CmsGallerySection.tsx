import Image from "next/image";

import CmsSectionHeading from "./CmsSectionHeading";

type CmsGalleryImage = { image: string; caption?: string };

// Image grid (CMS "gallery").
export default function CmsGallerySection({ data }: { data: { heading?: string; description?: string; items: CmsGalleryImage[] } }) {
  return (
    <section className="bg-paper py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <CmsSectionHeading heading={data.heading} description={data.description} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {data.items.map((g, i) => (
            <figure key={i}>
              <div className="relative aspect-[9/7] overflow-hidden border border-border">
                <Image
                  src={g.image}
                  alt={g.caption ?? ""}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              {g.caption && <figcaption className="text-sm text-muted-foreground mt-2">{g.caption}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
