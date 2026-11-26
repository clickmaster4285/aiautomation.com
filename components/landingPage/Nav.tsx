// components/landingPage/Nav.tsx
// Markup only. Menu content: navConfig.ts. Behaviour: useNav.tsx.
//
// SEO and accessibility notes:
// - Desktop panels are always in the server HTML and hidden with CSS (`invisible`), so crawlers see every
//   link while keyboard and screen-reader users only reach the links of an open panel.
// - Each top-level label is a real link to its hub page; the chevron button beside it opens the panel
//   (disclosure pattern: aria-expanded + aria-controls). Escape closes and returns focus to the button.
// - Group headings are <p>, not <h*>, so the menu doesn't add headings to every page's outline.
// - The mobile menu renders only when opened, so links aren't duplicated in the HTML.
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Menu, X, ClipboardCheck } from 'lucide-react';
import { NAV_CTA, NAV_MENUS, type NavLink, type NavMenu } from './navConfig';
import { useNav } from './useNav';

const PANEL_WIDTH: Record<NavMenu['size'], string> = {
  xl: 'w-[min(1120px,calc(100vw-3rem))]',
  lg: 'w-[min(900px,calc(100vw-3rem))]',
  md: 'w-[min(600px,calc(100vw-3rem))]',
  sm: 'w-[min(380px,calc(100vw-3rem))]',
};
const GRID_COLS: Record<NavMenu['columns'], string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

/** Path match for aria-current. Fragment links (/about#…) never count as the current page. */
const isCurrent = (pathname: string, href: string) => !href.includes('#') && pathname === href;
const inSection = (pathname: string, menu: NavMenu) =>
  pathname === menu.href ||
  (menu.href !== '/' && pathname.startsWith(`${menu.href}/`)) ||
  menu.groups.some((g) => g.links.some((l) => isCurrent(pathname, l.href)));

function MenuLink({ link, pathname, onNavigate }: { link: NavLink; pathname: string; onNavigate: () => void }) {
  const Icon = link.icon;
  const current = isCurrent(pathname, link.href);
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      aria-current={current ? 'page' : undefined}
      className="group flex items-start gap-3 border border-transparent p-2.5 transition-colors duration-150 hover:border-border hover:bg-secondary focus-visible:border-brand focus-visible:outline-none"
    >
      {Icon && (
        <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center border border-brand/25 bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      )}
      <span className="min-w-0">
        <span className={`block text-sm font-medium leading-snug transition-colors group-hover:text-brand ${current ? 'text-brand' : 'text-ink'}`}>
          {link.label}
        </span>
        {link.description && <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{link.description}</span>}
      </span>
    </Link>
  );
}

function ConsultCard({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex h-full flex-col justify-between bg-ink p-6 text-white">
      <div>
        <ClipboardCheck className="mb-4 h-6 w-6 text-brand" aria-hidden="true" />
        <p className="display mb-2 text-2xl leading-tight">
          Not sure where to <span className="display-italic text-brand">start?</span>
        </p>
        <p className="text-sm leading-relaxed text-white/70">
          We map one workflow with you and show what is worth automating first. Free, with no obligation.
        </p>
      </div>
      <Link
        href={NAV_CTA.href}
        onClick={onNavigate}
        data-cta-position="nav-menu"
        className="group mt-6 inline-flex items-center justify-between gap-2 whitespace-nowrap bg-brand px-3.5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-white hover:text-ink"
      >
        {NAV_CTA.label}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </div>
  );
}

function DesktopPanel({ menu, open, pathname, onNavigate }: { menu: NavMenu; open: boolean; pathname: string; onNavigate: () => void }) {
  // Wide panels centre under the header; narrow ones open under their own label.
  const wide = menu.size === 'xl' || menu.size === 'lg';
  const alignRight = menu.id === 'about' || menu.id === 'resources' || menu.id === 'case-studies';
  const position = wide ? 'left-1/2 -translate-x-1/2' : alignRight ? 'right-0' : 'left-0';
  // Don't repeat the hub link in the footer when the panel already lists it (e.g. About ClickMasters).
  const hubListed = menu.groups.some((g) => g.links.some((l) => l.href === menu.href));

  return (
    <div
      id={`nav-panel-${menu.id}`}
      className={`absolute top-full z-50 ${position} ${PANEL_WIDTH[menu.size]} transition-[opacity,visibility,translate] duration-200 ease-out ${
        open ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-1 opacity-0'
      }`}
    >
      <div className="border border-border bg-paper shadow-2xl shadow-black/10">
        <div className="flex items-center justify-between gap-6 border-b border-border px-5 py-3">
          <p className="text-xs text-muted-foreground">
            <span className="eyebrow mr-2 text-brand">{menu.label}</span>
            {menu.intro}
          </p>
        </div>

        <div className={`grid gap-0 ${menu.feature ? 'grid-cols-[1fr_300px]' : 'grid-cols-1'}`}>
          <div className={`grid ${GRID_COLS[menu.columns]} gap-x-2 gap-y-4 p-4`}>
            {menu.groups.map((group) => {
              const headingId = `nav-${menu.id}-${group.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
              return (
                <div key={group.heading} className="min-w-0">
                  <p id={headingId} className="eyebrow mb-1 px-2.5 text-[11px] text-muted-foreground">
                    {group.heading}
                  </p>
                  <ul aria-labelledby={headingId}>
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <MenuLink link={link} pathname={pathname} onNavigate={onNavigate} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          {menu.feature && <ConsultCard onNavigate={onNavigate} />}
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border bg-secondary px-5 py-3 text-xs font-semibold">
          {!hubListed && (
            <Link href={menu.href} onClick={onNavigate} className="group inline-flex items-center gap-1 text-ink hover:text-brand">
              {menu.hubLabel}
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          )}
          {menu.footerLinks?.map((l) => (
            <Link key={l.href} href={l.href} onClick={onNavigate} className="group inline-flex items-center gap-1 text-ink hover:text-brand">
              {l.label}
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ))}
          {!menu.feature && (
            <Link href={NAV_CTA.href} onClick={onNavigate} data-cta-position="nav-menu" className="ml-auto inline-flex items-center gap-1 text-brand hover:underline">
              {NAV_CTA.label}
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  const { pathname, navRef, openMenu, hoverOpen, hoverClose, toggle, closeAll, mobileOpen, setMobileOpen, mobileSection, setMobileSection, scrolled } =
    useNav();

  return (
    <header
      ref={navRef}
      className={`fixed left-0 right-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? 'border-b border-border bg-white/95 shadow-lg shadow-black/5 backdrop-blur-xl' : 'border-b border-border/60 bg-white/85 backdrop-blur-md'
      }`}
    >
      <div className="relative mx-auto flex h-20 w-full max-w-[84vw] items-center justify-between gap-6 px-6 xl:max-w-[max(84vw,1264px)] xl:gap-4 xl:px-4 2xl:gap-6 2xl:px-6">
        <Link href="/" className="flex flex-shrink-0 items-center py-2" aria-label="ClickMasters AI automation agency home" onClick={closeAll}>
          <Image src="/images/clickmasters-logo.png" alt="ClickMasters AI Automation" width={180} height={24} className="h-4 w-auto md:h-5 xl:h-4 2xl:h-5" priority />
        </Link>

        {/* ── Desktop ── */}
        <nav aria-label="Main navigation" className="hidden h-full xl:block">
          <ul className="flex h-full items-center gap-3 text-[13px] 2xl:gap-6 2xl:text-sm">
            {NAV_MENUS.map((menu) => {
              const open = openMenu === menu.id;
              const active = inSection(pathname, menu);
              const wide = menu.size === 'xl' || menu.size === 'lg';
              return (
                <li
                  key={menu.id}
                  className={`flex h-full items-center ${wide ? '' : 'relative'}`}
                  onMouseEnter={() => hoverOpen(menu.id)}
                  onMouseLeave={hoverClose}
                >
                  <div className={`flex items-center gap-0.5 whitespace-nowrap transition-colors ${open || active ? 'text-ink' : 'text-ink/70 hover:text-ink'}`}>
                    <Link
                      href={menu.href}
                      onClick={closeAll}
                      aria-current={pathname === menu.href ? 'page' : undefined}
                      className={`relative py-2 font-medium after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-brand after:transition-transform after:duration-200 ${
                        active || open ? 'after:scale-x-100' : 'after:scale-x-0'
                      }`}
                    >
                      {menu.label}
                    </Link>
                    <button
                      type="button"
                      id={`nav-toggle-${menu.id}`}
                      aria-label={`${open ? 'Hide' : 'Show'} ${menu.label} menu`}
                      aria-expanded={open}
                      aria-controls={`nav-panel-${menu.id}`}
                      onClick={() => toggle(menu.id)}
                      className="flex h-6 w-4 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
                    >
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180 text-brand' : ''}`} aria-hidden="true" />
                    </button>
                  </div>
                  <DesktopPanel menu={menu} open={open} pathname={pathname} onNavigate={closeAll} />
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href={NAV_CTA.href}
          data-cta-position="header"
          onClick={closeAll}
          className="group hidden flex-shrink-0 items-center gap-2 whitespace-nowrap bg-ink px-3.5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-brand xl:inline-flex 2xl:px-5 2xl:text-sm"
        >
          {NAV_CTA.label}
          <ArrowRight className="hidden h-4 w-4 transition-transform group-hover:translate-x-0.5 2xl:block" aria-hidden="true" />
        </Link>

        {/* ── Mobile and tablet toggle ── */}
        <button
          type="button"
          id="nav-mobile-toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="nav-mobile"
          className="-mr-2 flex h-11 w-11 items-center justify-center text-ink xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {/* ── Mobile and tablet menu ── */}
      {mobileOpen && (
        <nav id="nav-mobile" aria-label="Mobile navigation" className="flex max-h-[calc(100dvh-5rem)] flex-col border-t border-border bg-paper xl:hidden">
          <ul className="flex-1 divide-y divide-border overflow-y-auto overscroll-contain px-6">
            {NAV_MENUS.map((menu) => {
              const open = mobileSection === menu.id;
              return (
                <li key={menu.id}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`nav-mobile-${menu.id}`}
                    onClick={() => setMobileSection(open ? null : menu.id)}
                    className="flex min-h-[52px] w-full items-center justify-between py-3 text-left text-base font-medium text-ink"
                  >
                    {menu.label}
                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180 text-brand' : 'text-muted-foreground'}`} aria-hidden="true" />
                  </button>
                  <div id={`nav-mobile-${menu.id}`} hidden={!open} className="pb-4">
                    <Link
                      href={menu.href}
                      onClick={() => setMobileOpen(false)}
                      className="mb-2 flex min-h-[44px] items-center gap-2 text-sm font-semibold text-brand"
                    >
                      {menu.hubLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    {menu.groups.map((group) => (
                      <div key={group.heading} className="mb-3">
                        <p className="eyebrow mb-1 text-[11px] text-muted-foreground">{group.heading}</p>
                        <ul className="border-l border-border">
                          {group.links.map((link) => {
                            const Icon = link.icon;
                            const current = isCurrent(pathname, link.href);
                            return (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  aria-current={current ? 'page' : undefined}
                                  className={`flex min-h-[44px] items-center gap-3 pl-4 text-sm ${current ? 'text-brand' : 'text-ink/80'} hover:text-brand`}
                                >
                                  {Icon && <Icon className="h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />}
                                  {link.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                    {menu.footerLinks?.map((l) => (
                      <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="flex min-h-[44px] items-center gap-2 text-sm font-semibold text-ink">
                        {l.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="border-t border-border bg-paper p-4">
            <Link
              href={NAV_CTA.href}
              data-cta-position="header"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[48px] w-full items-center justify-center gap-2 bg-ink px-5 text-sm font-medium text-white transition-colors hover:bg-brand"
            >
              {NAV_CTA.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
