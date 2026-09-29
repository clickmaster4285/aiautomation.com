import { splitHeading } from "@/components/landingPage/Shared";

type CmsStatsData = {
  heading?: string;
  description?: string;
  items: { value: string; label: string }[];
};

// Row of headline numbers, using the landing hero's stat treatment.
export default function CmsStatsSection({ data }: { data: CmsStatsData }) {
  const { head, tail } = splitHeading(data.heading ?? "");

  return (
    <section className="bg-paper py-12 md:py-20 border-t border-gray-200">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        {data.heading && (
          <h2 className="display text-4xl sm:text-5xl md:text-6xl mb-4">
            {head}
            {head && " "}
            <span className="display-italic text-brand">{tail}</span>
          </h2>
        )}
        {data.description && (
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 md:mb-12">{data.description}</p>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {data.items.map((s, i) => (
            <div key={i} className="bg-paper p-6 md:p-8">
              <div className="display text-3xl md:text-5xl">{s.value}</div>
              <div className="eyebrow text-muted-foreground mt-2 text-xs md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
