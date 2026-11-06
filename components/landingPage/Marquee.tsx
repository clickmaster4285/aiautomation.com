type StatItem = { label: string; value: string };

const fallbackItems = [
  "Workflow automation",
  "AI agents",
  "Chatbots and voice",
  "Systems you own",
];

export default function Marquee({ stats = [] }: { stats?: StatItem[] }) {
  const items = stats
    .map((stat) => {
      const value = (stat.value || "").trim();
      const match = value.match(/\d+(?:\.\d+)?/);
      if (!value || (match && Number(match[0]) <= 0) || /^[+%.\s]*$/.test(value)) return "";
      return `${value} ${stat.label}`.trim();
    })
    .filter(Boolean);
  const rowSource = items.length ? items : fallbackItems;
  const row = [...rowSource, ...rowSource, ...rowSource];

  return (
    <div className="bg-ink text-white py-6 overflow-hidden">
      <style>{`
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
        .marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>

      <div className="flex marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="eyebrow mx-8 inline-flex items-center gap-8">
            <span className="text-brand">•</span>{t}
          </span>
        ))}
      </div>

      <div className="flex marquee-reverse whitespace-nowrap pt-6">
        {row.map((t, i) => (
          <span key={i} className="eyebrow mx-8 inline-flex items-center gap-8">
            <span className="text-brand">•</span>{t}
          </span>
        ))}
      </div>
    </div>
  );
}