export const Dot = ({ className = "" }: { className?: string }) => (
  <span className={`inline-block size-2 rounded-full bg-brand ${className}`} />
);

export const Marker = ({ n }: { n: string }) => (
  <span className="eyebrow italic  text-brand tabular-nums">{n}</span>
);

/**
 * Section label row: optional sequential marker, a rule, and the eyebrow label.
 * Markers are passed in from the page so they stay in order.
 */
export const SectionLabel = ({
  label,
  marker,
  dark = false,
}: {
  label: string;
  marker?: string;
  dark?: boolean;
}) => (
  <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
    {marker && <Marker n={marker} />}
    <div className={`flex-1 h-px ${dark ? "bg-white/10" : "bg-black/10"}`} />
    <p
      className={`eyebrow whitespace-nowrap text-xs md:text-sm ${
        dark ? "text-white/60" : "text-muted-foreground"
      }`}
    >
      {label}
    </p>
  </div>
);

/**
 * Splits a heading into a "head" part and an italic-accent "tail" part
 * (the last `tailWords` words) so headings follow the landing design
 * pattern: normal display text + display-italic text-brand tail.
 */
export function splitHeading(heading: string, tailWords = 2) {
  const words = heading.split(/\s+/).filter(Boolean);
  if (words.length <= tailWords) {
    return { head: "", tail: words.join(" ") };
  }
  return {
    head: words.slice(0, words.length - tailWords).join(" "),
    tail: words.slice(words.length - tailWords).join(" "),
  };
}