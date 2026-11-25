// Breadcrumb shown at the top of every main-page hero ("⌂ HOME / SERVICES").
// Same markup and spacing as components/solutions/sections/Hero.tsx so all hubs line up.
import Link from 'next/link';
import { Home } from 'lucide-react';

export type Crumb = { label: string; href: string };

export default function HeroBreadcrumb({
  items,
  dark = false,
  className = 'mb-4 md:mb-6',
}: {
  items: Crumb[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`eyebrow flex flex-wrap items-center gap-2 text-xs ${dark ? 'text-white/60' : 'text-muted-foreground'} ${className}`}
    >
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <div key={item.href} className="flex items-center">
            {last ? (
              <span className={dark ? 'text-white' : 'text-ink'} aria-current="page">
                {item.label}
              </span>
            ) : (
              <>
                <Link href={item.href} className="flex items-center gap-1 transition-colors hover:text-brand hover:no-underline">
                  {i === 0 && <Home className="h-3.5 w-3.5 md:h-4 md:w-4" aria-hidden="true" />}
                  <span>{item.label}</span>
                </Link>
                <span className={`ml-2 ${dark ? 'text-white/30' : 'text-border'}`} aria-hidden="true">
                  /
                </span>
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
}
