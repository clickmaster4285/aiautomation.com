import Image from "next/image";

type CmsBentoItem = {
  title: string;
  description?: string;
  span?: string;
  image?: string;
};

const spanClasses: Record<string, string> = {
  "2x2": "md:col-span-2 md:row-span-2",
  "2x1": "md:col-span-2",
  "1x2": "md:row-span-2",
};

export default function CmsBentoSection({
  data,
}: {
  data: { heading?: string; items: CmsBentoItem[] };
}) {
  return (
    <section className="bg-paper py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] px-4 md:max-w-[84vw] md:px-6">
        {data.heading && (
          <h2 className="display mb-8 text-4xl sm:text-5xl md:mb-12 md:text-6xl">
            {data.heading}
          </h2>
        )}
        <div className="grid auto-rows-[minmax(14rem,auto)] grid-cols-1 gap-4 md:grid-cols-4">
          {data.items.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className={`relative isolate flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-ink p-6 text-white md:p-8 ${spanClasses[item.span ?? ""] ?? ""}`}
            >
              {item.image && (
                <>
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    unoptimized
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="absolute inset-0 -z-20 object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </>
              )}
              <h3 className="display text-2xl md:text-3xl">{item.title}</h3>
              {item.description && (
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-white/75">
                  {item.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
