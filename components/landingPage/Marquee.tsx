const defaultItems = [
  "Workflow automation",
  "AI agents",
  "Chatbots and voice",
  "Systems you own",
];

// One readable copy of the phrases. The other copies only exist to make the
// loop seamless, so they are hidden from assistive technology.
// The animation stops for visitors who prefer reduced motion.
export default function Marquee({ items = defaultItems }: { items?: string[] }) {
  const renderRow = (hidden: boolean) => (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? "true" : undefined}
    >
      {items.map((t) => (
        <li key={t} className="eyebrow mx-8 md:mx-12 inline-flex items-center gap-8 md:gap-12 whitespace-nowrap text-sm md:text-lg">
          <span className="text-brand" aria-hidden="true">•</span>
          {t}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-ink text-white py-7 md:py-9 overflow-hidden">
      <div className="flex w-max marquee motion-reduce:animate-none">
        {/* Two identical halves (the animation moves by -50%), wide enough to fill large screens */}
        {renderRow(false)}
        {renderRow(true)}
        {renderRow(true)}
        {renderRow(true)}
      </div>
    </div>
  );
}
