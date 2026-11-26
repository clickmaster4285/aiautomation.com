// components/landingPage/Nav.tsx
// UI ONLY — markup and styling. All logic/data comes from useNav.tsx.
//
// SEO notes:
// - Every dropdown panel is rendered in the server HTML and only hidden with CSS
//   (visibility/opacity) until opened. Crawlers do not hover, so menus that mount
//   on hover expose none of their links. Keep panels always mounted.
// - Each top-level label is a real link to its hub page (/services, /products, ...);
//   the chevron button next to it opens the menu.
// - Menus follow the site hierarchy: hub → category/group → page. Deeper pages
//   (e.g. /solutions/<type>/for-<industry>) are linked from their hub page, not here.
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X, ArrowRight, BrainCircuit, Layers } from 'lucide-react';
import { platformCategories, industryCategories } from '@/content/services/index';
import {
  useNav,
  solutionGroups,
  serviceGroups,
  caseStudiesData,
  extraSectorLinks,
  productCategories,
  PRODUCTS_PATH,
} from './useNav';

const allPlatforms = platformCategories.flatMap((c) =>
  c.platforms.map((p) => ({ ...p, name: c.title }))
);
const allIndustries = industryCategories.flatMap((c) => c.industries);
const productCount = productCategories.reduce((n, c) => n + c.products.length, 0);
const solutionCount = solutionGroups.reduce((n, g) => n + g.items.length, 0);
const serviceCount = serviceGroups.reduce((n, g) => n + g.services.length, 0);

/** Renders a Link only when the target page exists; otherwise the same element without navigation. */
function MaybeLink({
  live,
  href,
  className,
  children,
  onClick,
  onMouseEnter,
  onFocus,
}: {
  live: boolean;
  href: string;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onFocus?: () => void;
}) {
  if (live) {
    return (
      <Link href={href} className={className} onClick={onClick} onMouseEnter={onMouseEnter} onFocus={onFocus}>
        {children}
      </Link>
    );
  }
  return (
    <div className={className} onMouseEnter={onMouseEnter} onFocus={onFocus} tabIndex={0} aria-disabled="true">
      {children}
    </div>
  );
}

const SoonBadge = () => (
  <span className="ml-1.5 inline-block align-middle text-[9px] font-semibold uppercase tracking-wider text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full">
    Soon
  </span>
);

/** Dropdown panel: always in the DOM, shown/hidden with CSS. */
function Panel({
  id,
  open,
  className,
  style,
  label,
  children,
}: {
  id: string;
  open: boolean;
  className: string;
  style?: React.CSSProperties;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      role="region"
      aria-label={label}
      style={style}
      className={`${className} transition-[opacity,translate,visibility] duration-200 ease-out ${
        open ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
}

/** Top-level menu item: hub link + chevron toggle. */
function TopItem({
  label,
  href,
  menuId,
  open,
  setOpen,
  onMouseEnter,
  onMouseLeave,
  onNavigate,
  relative = true,
  children,
}: {
  label: string;
  href: string;
  menuId: string;
  open: boolean;
  setOpen: (v: boolean) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onNavigate: () => void;
  relative?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li className={relative ? 'relative' : ''} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors">
        <Link href={href} onClick={onNavigate}>
          {label}
        </Link>
        <button
          type="button"
          aria-label={`Show ${label} menu`}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen(!open)}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180 text-brand' : ''}`}
          />
        </button>
      </div>
      {children}
    </li>
  );
}

function PanelHeader({ title, count }: { title: string; count?: number }) {
  return (
    <div className="flex items-center gap-2 px-3 pb-3 border-b border-gray-100">
      <BrainCircuit className="h-4 w-4 text-brand" />
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.12em]">{title}</p>
      {count !== undefined && (
        <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full ml-auto">
          {count}
        </span>
      )}
    </div>
  );
}

function PanelFooter({
  hubHref,
  hubLabel,
  ctaLabel = 'Talk to us',
  onNavigate,
}: {
  hubHref: string;
  hubLabel: string;
  ctaLabel?: string;
  onNavigate: () => void;
}) {
  return (
    <div className="px-3 pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
      <Link
        href={hubHref}
        className="text-xs font-semibold text-gray-700 hover:text-brand flex items-center gap-1"
        onClick={onNavigate}
      >
        {hubLabel} <ArrowRight className="h-3 w-3" />
      </Link>
      <Link
        href="/contact"
        className="text-xs font-semibold text-brand hover:underline flex items-center gap-1"
        onClick={onNavigate}
      >
        {ctaLabel} <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  );
}

/** Column heading inside a menu. A <p>, not <h*>, so menus don't pollute each page's heading outline. */
const GroupHeading = ({ children }: { children: React.ReactNode }) => (
  <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">{children}</p>
);

/** Icon + title + description row, used by Platforms / Industries / Case Studies. */
function RowLink({
  href,
  icon,
  title,
  description,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description?: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl hover:bg-brand/10 transition-all duration-200 group"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand">
          {icon}
        </div>
        <div className="min-w-0">
          <span className="text-sm font-medium text-gray-800 group-hover:text-brand transition-colors">{title}</span>
          {description && (
            <p className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors line-clamp-1">
              {description}
            </p>
          )}
        </div>
      </div>
      <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-300 group-hover:text-brand transition-colors" />
    </Link>
  );
}

/** Mobile accordion section. */
function MobileSection({
  label,
  open,
  setOpen,
  children,
}: {
  label: string;
  open: boolean;
  setOpen: (v: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium">{label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="mt-2 pl-4 space-y-1 border-l border-gray-200">{children}</div>}
    </div>
  );
}

export default function Nav() {
  const {
    closeAllDropdowns,
    isServicesOpen,
    setIsServicesOpen,
    isSolutionsOpen,
    setIsSolutionsOpen,
    isPlatformsOpen,
    setIsPlatformsOpen,
    isIndustriesOpen,
    setIsIndustriesOpen,
    isCaseStudiesOpen,
    setIsCaseStudiesOpen,
    isProductsOpen,
    setIsProductsOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isMobileServicesOpen,
    setIsMobileServicesOpen,
    isMobileSolutionsOpen,
    setIsMobileSolutionsOpen,
    isMobilePlatformsOpen,
    setIsMobilePlatformsOpen,
    isMobileIndustriesOpen,
    setIsMobileIndustriesOpen,
    isMobileCaseStudiesOpen,
    setIsMobileCaseStudiesOpen,
    isMobileProductsOpen,
    setIsMobileProductsOpen,
    mobileProductCategory,
    setMobileProductCategory,
    activeProductCategory,
    setActiveProductCategory,
    scrolled,
    handleServicesMouseEnter,
    handleServicesMouseLeave,
    handleSolutionsMouseEnter,
    handleSolutionsMouseLeave,
    handlePlatformsMouseEnter,
    handlePlatformsMouseLeave,
    handleIndustriesMouseEnter,
    handleIndustriesMouseLeave,
    handleCaseStudiesMouseEnter,
    handleCaseStudiesMouseLeave,
    handleProductsMouseEnter,
    handleProductsMouseLeave,
    getServiceIcon,
    getPlatformIcon,
    getIndustryIcon,
    getProductCategoryIcon,
  } = useNav();

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-black/5'
          : 'bg-white/80 backdrop-blur-md border-b border-gray-200/30'
      }`}
    >
      <div className="relative mx-auto max-w-[84vw] px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center py-2 md:py-3" aria-label="ClickMasters AI automation agency home">
          <Image
            src="/images/clickmasters-logo.png"
            alt="ClickMasters AI Automation"
            width={180}
            height={24}
            className="h-4 w-auto md:h-5"
            priority
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block text-sm">
          <ul className="flex items-center gap-8">
            {/* ── SERVICES: grouped by service category ── */}
            <TopItem
              label="Services"
              href="/services"
              menuId="nav-services"
              open={isServicesOpen}
              setOpen={setIsServicesOpen}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              onNavigate={closeAllDropdowns}
            >
              <Panel
                id="nav-services"
                label="AI automation services"
                open={isServicesOpen}
                className="absolute left-0 top-full mt-3 w-[860px] max-w-[94vw] rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/10 overflow-hidden"
              >
                <div className="p-4 max-h-[80vh] overflow-y-auto">
                  <PanelHeader title="AI Automation Services" count={serviceCount} />
                  <div className="grid grid-cols-3 gap-3 pt-3">
                    {serviceGroups.map((group) => (
                      <div key={group.slug}>
                        <GroupHeading>{group.title}</GroupHeading>
                        <ul>
                          {group.services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/services/${service.slug}`}
                                className="group flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all duration-200"
                                onClick={closeAllDropdowns}
                              >
                                <div className="mt-0.5 w-5 h-5 flex items-center justify-center flex-shrink-0">
                                  {getServiceIcon(service.title)}
                                </div>
                                <div className="min-w-0">
                                  <span className="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors block leading-tight">
                                    {service.title}
                                  </span>
                                  {service.description && (
                                    <p className="text-xs text-gray-400 mt-0.5 leading-snug line-clamp-2">
                                      {service.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <PanelFooter hubHref="/services" hubLabel="View all AI automation services" onNavigate={closeAllDropdowns} />
                </div>
              </Panel>
            </TopItem>

            {/* ── PRODUCTS: category sidebar → products. All categories are in the DOM; inactive ones are display:none. ── */}
            <TopItem
              label="Products"
              href={PRODUCTS_PATH}
              menuId="nav-products"
              open={isProductsOpen}
              setOpen={setIsProductsOpen}
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
              onNavigate={closeAllDropdowns}
              relative={false}
            >
              <Panel
                id="nav-products"
                label="AI automation products"
                open={isProductsOpen}
                style={{ width: 'min(960px, 94vw)', top: 'calc(50% + 22px)' }}
                className="absolute left-1/2 -translate-x-1/2 rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/10 overflow-hidden"
              >
                <div className="p-4">
                  <PanelHeader title="AI Products" count={productCount} />
                  <div className="flex gap-4 pt-3" style={{ height: 'min(420px, calc(100vh - 230px))' }}>
                    <ul className="w-72 flex-shrink-0 rounded-xl bg-gray-50 p-2 space-y-1 overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:#d1d5db_transparent]">
                      {productCategories.map((category, idx) => {
                        const isActive = idx === activeProductCategory;
                        return (
                          <li key={category.slug}>
                            <MaybeLink
                              live={category.live}
                              href={category.path}
                              onMouseEnter={() => setActiveProductCategory(idx)}
                              onFocus={() => setActiveProductCategory(idx)}
                              onClick={closeAllDropdowns}
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                                isActive ? 'bg-white shadow-sm ring-1 ring-gray-200' : 'hover:bg-brand/10'
                              }`}
                            >
                              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand">
                                {getProductCategoryIcon(category.slug)}
                              </div>
                              <span
                                className={`flex-1 text-sm font-medium leading-tight transition-colors ${
                                  isActive ? 'text-brand' : 'text-gray-800 group-hover:text-brand'
                                }`}
                              >
                                {category.title}
                              </span>
                              <ArrowRight
                                className={`h-4 w-4 flex-shrink-0 transition-colors ${
                                  isActive ? 'text-brand' : 'text-gray-300 group-hover:text-brand'
                                }`}
                              />
                            </MaybeLink>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="flex-1 min-w-0 overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:#d1d5db_transparent]">
                      {productCategories.map((category, idx) => (
                        <div key={category.slug} className={idx === activeProductCategory ? '' : 'hidden'}>
                          <div className="flex items-start justify-between gap-4 px-3 pt-1 pb-3">
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-gray-800">{category.title}</p>
                              <p className="text-xs text-gray-400 mt-0.5 leading-snug">{category.description}</p>
                            </div>
                            {category.live ? (
                              <Link
                                href={category.path}
                                onClick={closeAllDropdowns}
                                className="text-xs font-semibold text-brand hover:underline flex items-center gap-1 whitespace-nowrap mt-0.5"
                              >
                                All {category.title} <ArrowRight className="h-3 w-3" />
                              </Link>
                            ) : (
                              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full whitespace-nowrap mt-0.5">
                                Coming soon
                              </span>
                            )}
                          </div>
                          <ul className="grid grid-cols-2 gap-2">
                            {category.products.map((product) => (
                              <li key={product.slug}>
                                <MaybeLink
                                  live={product.live}
                                  href={product.path}
                                  className={`group flex items-start gap-3 p-3 rounded-xl border border-transparent transition-all duration-200 ${
                                    product.live ? 'hover:border-gray-200 hover:bg-gray-50' : 'cursor-default opacity-70'
                                  }`}
                                  onClick={closeAllDropdowns}
                                >
                                  <div className="min-w-0">
                                    <span
                                      className={`text-sm font-medium text-gray-700 transition-colors block leading-tight ${
                                        product.live ? 'group-hover:text-brand' : ''
                                      }`}
                                    >
                                      {product.title}
                                      {!product.live && <SoonBadge />}
                                    </span>
                                    <p className="text-xs text-gray-400 mt-0.5 leading-snug line-clamp-2">
                                      {product.description}
                                    </p>
                                  </div>
                                </MaybeLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <PanelFooter hubHref={PRODUCTS_PATH} hubLabel="View all AI products" onNavigate={closeAllDropdowns} />
                </div>
              </Panel>
            </TopItem>

            {/* ── SOLUTIONS: grouped by business function. Each hub links to its /for-<industry> and /with-<platform> pages. ── */}
            <TopItem
              label="Solutions"
              href="/solutions"
              menuId="nav-solutions"
              open={isSolutionsOpen}
              setOpen={setIsSolutionsOpen}
              onMouseEnter={handleSolutionsMouseEnter}
              onMouseLeave={handleSolutionsMouseLeave}
              onNavigate={closeAllDropdowns}
              relative={false}
            >
              <Panel
                id="nav-solutions"
                label="AI automation solutions"
                open={isSolutionsOpen}
                style={{ width: 'min(960px, 94vw)', top: 'calc(50% + 22px)' }}
                className="absolute left-1/2 -translate-x-1/2 rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/10 overflow-hidden"
              >
                <div className="p-4 max-h-[80vh] overflow-y-auto">
                  <PanelHeader title="AI Automation Solutions" count={solutionCount} />
                  <div className="grid grid-cols-3 gap-3 pt-3">
                    {solutionGroups.map((group) => (
                      <div key={group.key}>
                        <GroupHeading>{group.title}</GroupHeading>
                        <ul>
                          {group.items.map((solution) => {
                            const Icon = solution.icon || BrainCircuit;
                            return (
                              <li key={solution.slug}>
                                <Link
                                  href={`/solutions/${solution.slug}`}
                                  className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-brand/10 transition-all duration-200 group"
                                  onClick={closeAllDropdowns}
                                >
                                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand mt-0.5">
                                    <Icon className="h-4 w-4" />
                                  </div>
                                  <div className="min-w-0">
                                    <span className="text-sm font-medium text-gray-800 group-hover:text-brand transition-colors block leading-tight">
                                      {solution.title}
                                    </span>
                                    <p className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors leading-snug mt-0.5 line-clamp-2">
                                      {solution.description}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <PanelFooter
                    hubHref="/solutions"
                    hubLabel="View all AI automation solutions"
                    ctaLabel="Need a custom solution?"
                    onNavigate={closeAllDropdowns}
                  />
                </div>
              </Panel>
            </TopItem>

            {/* ── PLATFORMS ── */}
            <TopItem
              label="Platforms"
              href="/platforms"
              menuId="nav-platforms"
              open={isPlatformsOpen}
              setOpen={setIsPlatformsOpen}
              onMouseEnter={handlePlatformsMouseEnter}
              onMouseLeave={handlePlatformsMouseLeave}
              onNavigate={closeAllDropdowns}
            >
              <Panel
                id="nav-platforms"
                label="Automation platforms"
                open={isPlatformsOpen}
                className="absolute left-0 top-full mt-2 w-[420px] rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 overflow-hidden"
              >
                <div className="p-3">
                  <ul>
                    {allPlatforms.map((platform) => (
                      <li key={platform.path}>
                        <RowLink
                          href={platform.path}
                          icon={getPlatformIcon(platform.name)}
                          title={`${platform.name} Automation Services`}
                          description={platform.description}
                          onClick={closeAllDropdowns}
                        />
                      </li>
                    ))}
                  </ul>
                  <PanelFooter hubHref="/platforms" hubLabel="All automation platforms" onNavigate={closeAllDropdowns} />
                </div>
              </Panel>
            </TopItem>

            {/* ── INDUSTRIES ── */}
            <TopItem
              label="Industries"
              href="/industries"
              menuId="nav-industries"
              open={isIndustriesOpen}
              setOpen={setIsIndustriesOpen}
              onMouseEnter={handleIndustriesMouseEnter}
              onMouseLeave={handleIndustriesMouseLeave}
              onNavigate={closeAllDropdowns}
            >
              <Panel
                id="nav-industries"
                label="Industries we automate"
                open={isIndustriesOpen}
                className="absolute left-0 top-full mt-2 w-[460px] rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 overflow-hidden"
              >
                <div className="p-3 max-h-[80vh] overflow-y-auto">
                  <ul>
                    {allIndustries.map((industry) => (
                      <li key={industry.path}>
                        <RowLink
                          href={industry.path}
                          icon={getIndustryIcon(industry.title)}
                          title={`AI Automation for ${industry.title}`}
                          description={industry.description}
                          onClick={closeAllDropdowns}
                        />
                      </li>
                    ))}
                  </ul>
                  {extraSectorLinks.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <GroupHeading>More sectors</GroupHeading>
                      <ul>
                        {extraSectorLinks.map((p) => (
                          <li key={p.path}>
                            <RowLink
                              href={p.path}
                              icon={getIndustryIcon(p.title)}
                              title={p.title}
                              description={p.description}
                              onClick={closeAllDropdowns}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <PanelFooter hubHref="/industries" hubLabel="All industries" onNavigate={closeAllDropdowns} />
                </div>
              </Panel>
            </TopItem>

            {/* ── CASE STUDIES ── */}
            <TopItem
              label="Case Studies"
              href="/case-studies"
              menuId="nav-case-studies"
              open={isCaseStudiesOpen}
              setOpen={setIsCaseStudiesOpen}
              onMouseEnter={handleCaseStudiesMouseEnter}
              onMouseLeave={handleCaseStudiesMouseLeave}
              onNavigate={closeAllDropdowns}
            >
              <Panel
                id="nav-case-studies"
                label="Case studies"
                open={isCaseStudiesOpen}
                className="absolute right-0 top-full mt-3 w-[460px] rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/10 overflow-hidden"
              >
                <div className="p-4">
                  <PanelHeader title="Case Studies" count={caseStudiesData.length} />
                  <ul className="pt-2">
                    {caseStudiesData.map((study) => {
                      const Icon = study.icon || BrainCircuit;
                      return (
                        <li key={study.slug}>
                          <RowLink
                            href={`/case-studies/${study.slug}`}
                            icon={<Icon className="h-4 w-4" />}
                            title={study.title}
                            description={study.description}
                            onClick={closeAllDropdowns}
                          />
                        </li>
                      );
                    })}
                  </ul>
                  <PanelFooter
                    hubHref="/case-studies"
                    hubLabel="View all case studies"
                    ctaLabel="Discuss your project"
                    onNavigate={closeAllDropdowns}
                  />
                </div>
              </Panel>
            </TopItem>

            <li>
              <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          href="/free-automation-audit"
          data-cta-position="header"
          className="hidden md:inline-block bg-black hover:bg-gray-800 text-white text-sm px-5 py-2 transition-colors rounded-none font-medium"
        >
          Book a Call
        </Link>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="nav-mobile"
          className="md:hidden text-gray-700 hover:text-black transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ── Mobile Menu (the desktop <nav> above stays in the DOM, so crawlers see every link either way) ── */}
      {isMobileMenuOpen && (
        <nav
          id="nav-mobile"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <div className="px-6 py-4 space-y-4">
            <MobileSection label="Services" open={isMobileServicesOpen} setOpen={setIsMobileServicesOpen}>
              <Link
                href="/services"
                className="flex items-center gap-3 py-2 text-sm font-medium text-gray-800 hover:text-brand"
                onClick={closeMobile}
              >
                <Layers className="h-4 w-4 text-brand flex-shrink-0" />
                <span>All AI automation services</span>
              </Link>
              {serviceGroups.map((group) => (
                <div key={group.slug} className="pt-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{group.title}</p>
                  {group.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-brand"
                      onClick={closeMobile}
                    >
                      {getServiceIcon(service.title)}
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </MobileSection>

            <MobileSection label="Products" open={isMobileProductsOpen} setOpen={setIsMobileProductsOpen}>
              <Link
                href={PRODUCTS_PATH}
                className="flex items-center gap-3 py-2 text-sm font-medium text-gray-800 hover:text-brand"
                onClick={closeMobile}
              >
                <Layers className="h-4 w-4 text-brand flex-shrink-0" />
                <span>All AI products</span>
              </Link>
              {productCategories.map((category, idx) => {
                const isOpen = mobileProductCategory === idx;
                return (
                  <div key={category.slug}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      className="flex items-center gap-3 w-full py-2 px-3 rounded-lg text-left hover:bg-brand/10 transition-colors"
                      onClick={() => setMobileProductCategory(isOpen ? null : idx)}
                    >
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand">
                        {getProductCategoryIcon(category.slug, 'h-3.5 w-3.5')}
                      </div>
                      <span className="flex-1 text-sm font-medium text-gray-700">{category.title}</span>
                      <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="ml-10 mb-2 space-y-1 pl-3 border-l border-gray-200">
                        {category.live && (
                          <Link
                            href={category.path}
                            className="flex items-center gap-1 py-1.5 text-sm font-semibold text-brand hover:underline"
                            onClick={closeMobile}
                          >
                            All {category.title} <ArrowRight className="h-3 w-3" />
                          </Link>
                        )}
                        {category.products.map((product) =>
                          product.live ? (
                            <Link
                              key={product.slug}
                              href={product.path}
                              className="block py-1.5 text-sm text-gray-600 hover:text-brand"
                              onClick={closeMobile}
                            >
                              {product.title}
                            </Link>
                          ) : (
                            <span key={product.slug} className="block py-1.5 text-sm text-gray-400" aria-disabled="true">
                              {product.title}
                              <SoonBadge />
                            </span>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </MobileSection>

            <MobileSection label="Solutions" open={isMobileSolutionsOpen} setOpen={setIsMobileSolutionsOpen}>
              <Link
                href="/solutions"
                className="flex items-center gap-3 py-2 text-sm font-medium text-gray-800 hover:text-brand"
                onClick={closeMobile}
              >
                <Layers className="h-4 w-4 text-brand flex-shrink-0" />
                <span>All AI automation solutions</span>
              </Link>
              {solutionGroups.map((group) => (
                <div key={group.key} className="pt-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{group.title}</p>
                  {group.items.map((solution) => {
                    const Icon = solution.icon || BrainCircuit;
                    return (
                      <Link
                        key={solution.slug}
                        href={`/solutions/${solution.slug}`}
                        className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-brand"
                        onClick={closeMobile}
                      >
                        <Icon className="h-4 w-4 text-brand flex-shrink-0" />
                        <span>{solution.title}</span>
                      </Link>
                    );
                  })}
                </div>
              ))}
            </MobileSection>

            <MobileSection label="Platforms" open={isMobilePlatformsOpen} setOpen={setIsMobilePlatformsOpen}>
              <Link href="/platforms" className="block py-2 text-sm font-medium text-gray-800 hover:text-brand" onClick={closeMobile}>
                All automation platforms
              </Link>
              {allPlatforms.map((platform) => (
                <Link
                  key={platform.path}
                  href={platform.path}
                  className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-brand"
                  onClick={closeMobile}
                >
                  {getPlatformIcon(platform.name)}
                  <span>{platform.name} Automation Services</span>
                </Link>
              ))}
            </MobileSection>

            <MobileSection label="Industries" open={isMobileIndustriesOpen} setOpen={setIsMobileIndustriesOpen}>
              <Link href="/industries" className="block py-2 text-sm font-medium text-gray-800 hover:text-brand" onClick={closeMobile}>
                All industries
              </Link>
              {[...allIndustries.map((i) => ({ path: i.path, title: i.title, label: `AI Automation for ${i.title}` })),
                ...extraSectorLinks.map((p) => ({ path: p.path, title: p.title, label: p.title }))].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-brand"
                  onClick={closeMobile}
                >
                  {getIndustryIcon(item.title)}
                  <span>{item.label}</span>
                </Link>
              ))}
            </MobileSection>

            <MobileSection label="Case Studies" open={isMobileCaseStudiesOpen} setOpen={setIsMobileCaseStudiesOpen}>
              <Link href="/case-studies" className="block py-2 text-sm font-medium text-gray-800 hover:text-brand" onClick={closeMobile}>
                All case studies
              </Link>
              {caseStudiesData.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="block py-2 text-sm text-gray-600 hover:text-brand"
                  onClick={closeMobile}
                >
                  {study.title}
                </Link>
              ))}
            </MobileSection>

            <Link href="/about" className="block text-gray-700 hover:text-black transition-colors" onClick={closeMobile}>
              About
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-black transition-colors" onClick={closeMobile}>
              Contact
            </Link>
            <Link
              href="/free-automation-audit"
              data-cta-position="header"
              className="block w-full text-center bg-black hover:bg-gray-800 text-white text-sm px-5 py-3 transition-colors rounded-none font-medium"
              onClick={closeMobile}
            >
              Book a Call
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
