// app/not-found.tsx
// Shown for unknown URLs and notFound() calls. The response is a 404 and Next.js adds
// <meta name="robots" content="noindex">, so this page never competes in search. Links point
// visitors (and crawlers following a stale link) back into the main sections.
import Link from 'next/link';

const SECTIONS = [
  { href: '/services', label: 'AI automation services' },
  { href: '/solutions', label: 'Solutions by workflow' },
  { href: '/products', label: 'AI products' },
  { href: '/industries', label: 'Industries' },
  { href: '/platforms', label: 'Automation platforms' },
  { href: '/case-studies', label: 'Case studies' },
];

export default function NotFound() {
  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto max-w-[84vw] px-6 py-24 md:py-32">
        <p className="eyebrow text-xs text-muted-foreground mb-4">Error 404</p>
        <h1 className="display text-4xl sm:text-5xl md:text-6xl mb-6">
          This page could not be <span className="display-italic text-brand">found.</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10">
          The link may be out of date, or the page may have moved. These sections cover everything we do.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border mb-10">
          {SECTIONS.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="block h-full bg-paper p-6 hover:bg-ink hover:text-white transition-colors duration-300">
                {s.label} <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/" className="underline underline-offset-4 hover:text-brand">Back to the homepage</Link>
          <Link href="/contact" className="underline underline-offset-4 hover:text-brand">Contact the team</Link>
        </div>
      </div>
    </div>
  );
}
