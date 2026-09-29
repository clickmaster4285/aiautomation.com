import { splitHeading } from "@/components/landingPage/Shared";

type CmsTextData = {
  eyebrow?: string;
  heading?: string;
  body?: string;
};

// Plain-text section in the landing-page style. Body is rendered as text
// (never as HTML); blank lines split it into paragraphs.
export default function CmsTextSection({ data }: { data: CmsTextData }) {
  const { head, tail } = splitHeading(data.heading ?? "");
  const paragraphs = (data.body ?? "").split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <section className="bg-paper py-16 md:py-24 border-t border-gray-200">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <div className="max-w-3xl">
          {data.eyebrow && (
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-brand" />
              <span className="text-brand text-sm font-semibold tracking-widest uppercase font-sans">
                {data.eyebrow}
              </span>
            </div>
          )}
          {data.heading && (
            <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 md:mb-8">
              {head}
              {head && <br />}
              <span className="display-italic text-brand">{tail}</span>
            </h2>
          )}
          {paragraphs.map((p, i) => (
            <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line mt-4 first:mt-0">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
