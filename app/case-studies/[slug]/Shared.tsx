'use client';

export function Marker({ n }: { n: string }) {
  return (
    <span className="eyebrow text-brand whitespace-nowrap">
      {n} —
    </span>
  );
}

export function Dot({ className = '' }: { className?: string }) {
  return (
    <span className={`size-2 rounded-full bg-brand ${className}`} />
  );
}

/**
 * Splits a heading like "Results: how fast and how accurate"
 * into { head: "Results", tail: "how fast and how accurate" }.
 * Pass a wordIndex to control where the split happens.
 */
export function splitHeading(heading: string, wordIndex?: number) {
  const parts = heading.split(' ');
  const at = wordIndex ?? Math.ceil(parts.length / 2);
  return {
    head: parts.slice(0, at).join(' '),
    tail: parts.slice(at).join(' '),
  };
}