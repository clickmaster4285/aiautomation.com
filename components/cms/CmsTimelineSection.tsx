import CmsSectionHeading from "./CmsSectionHeading";

type CmsMilestone = { date?: string; title: string; description?: string };

export default function CmsTimelineSection({ data }: { data: { heading?: string; description?: string; items: CmsMilestone[] } }) {
  return (
    <section className="bg-paper py-12 md:py-24 border-t border-gray-200">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <CmsSectionHeading heading={data.heading} description={data.description} />
        <ol className="border-l border-border ml-2 max-w-3xl">
          {data.items.map((m, i) => (
            <li key={i} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-brand" aria-hidden />
              {m.date && <p className="eyebrow text-brand text-xs md:text-sm">{m.date}</p>}
              <h3 className="display text-2xl md:text-3xl mt-1">{m.title}</h3>
              {m.description && <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-2">{m.description}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
