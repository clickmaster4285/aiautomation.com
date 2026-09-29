import CmsSectionHeading from "./CmsSectionHeading";

type CmsPlan = {
  name: string;
  price?: string;
  period?: string;
  description?: string;
  features: string[];
  cta?: { text: string; link: string };
  featured?: boolean;
};

export default function CmsPricingSection({ data }: { data: { heading?: string; description?: string; items: CmsPlan[] } }) {
  return (
    <section className="bg-paper py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <CmsSectionHeading heading={data.heading} description={data.description} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {data.items.map((plan, i) => (
            <div
              key={i}
              className={`flex flex-col p-6 md:p-8 border ${plan.featured ? "bg-ink text-white border-ink" : "bg-paper border-border"}`}
            >
              <h3 className="eyebrow text-brand text-sm">{plan.name}</h3>
              {plan.price && (
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="display text-5xl">{plan.price}</span>
                  {plan.period && <span className={plan.featured ? "text-white/60" : "text-muted-foreground"}>{plan.period}</span>}
                </div>
              )}
              {plan.description && (
                <p className={`text-sm mt-3 ${plan.featured ? "text-white/70" : "text-muted-foreground"}`}>{plan.description}</p>
              )}
              {plan.features.length > 0 && (
                <ul className="mt-6 space-y-2 text-sm flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-brand" aria-hidden>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
              {plan.cta && (
                <a
                  href={plan.cta.link}
                  className={`mt-8 text-sm px-5 py-3 text-center transition-colors ${
                    plan.featured ? "bg-brand text-white hover:bg-white hover:text-ink" : "bg-ink text-white hover:bg-brand"
                  }`}
                >
                  {plan.cta.text} <span>›</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
