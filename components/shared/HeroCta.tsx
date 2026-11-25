// Primary hero button ("Book a Free Audit →"): same style as components/solutions/sections/Hero.tsx.
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroCta({
  href = '/free-automation-audit',
  text = 'Book a Free Audit',
  className = 'mt-8 md:mt-10',
}: {
  href?: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Link
        href={href}
        data-cta-position="hero"
        className="group inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm text-white transition-colors hover:bg-brand md:px-7 md:py-4 md:text-base"
      >
        {text}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </div>
  );
}
