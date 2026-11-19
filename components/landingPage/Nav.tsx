// components/landingPage/Nav.tsx
// UI ONLY — markup and styling. All logic/data comes from useNav.tsx.
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Workflow,
  RefreshCw,
  Bot,
  MessageSquare,
  PhoneCall,
  Brain,
  TrendingUp,
  Users,
  Headphones,
  Database,
  GitMerge,
  Zap,
  Layers,
  Settings,
  FileText,
  Plug,
  GitBranch,
  Mail,
  Rocket,
  DollarSign,
  Heart,
  Scale,
  ShoppingBag,
  Cloud,
  Briefcase,
  BarChart3,
  Lightbulb,
  Target,
  Sparkles,
  BookOpen,
  Rocket as RocketIcon,
  CheckCircle,
  Calendar,
  Receipt,
  Briefcase as BriefcaseIcon,
} from 'lucide-react';
import {
  serviceCategories,
  platformCategories,
  industryCategories,
  PlatformCategory,
  PlatformItem,
  IndustryCategory,
  IndustryItem,
} from '@/content/services/index';
import { useNav, solutionsData, caseStudiesData, servicesList, productCategories, PRODUCTS_PATH } from './useNav';

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

export default function Nav() {
  const {
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
    scrolled,
    handleServicesMouseEnter,
    handleServicesMouseLeave,
    handleServicesDropdownMouseEnter,
    handleServicesDropdownMouseLeave,
    handleSolutionsMouseEnter,
    handleSolutionsMouseLeave,
    handleSolutionsDropdownMouseEnter,
    handleSolutionsDropdownMouseLeave,
    handlePlatformsMouseEnter,
    handlePlatformsMouseLeave,
    handlePlatformsDropdownMouseEnter,
    handlePlatformsDropdownMouseLeave,
    handleIndustriesMouseEnter,
    handleIndustriesMouseLeave,
    handleIndustriesDropdownMouseEnter,
    handleIndustriesDropdownMouseLeave,
    handleCaseStudiesMouseEnter,
    handleCaseStudiesMouseLeave,
    handleCaseStudiesDropdownMouseEnter,
    handleCaseStudiesDropdownMouseLeave,
    dropdownVariants,
    serviceItemVariants,
    getServiceIcon,
    getPlatformIcon,
    getIndustryIcon,
    isProductsOpen,
    setIsProductsOpen,
    activeProductCategory,
    setActiveProductCategory,
    activeProductCategoryData,
    isMobileProductsOpen,
    setIsMobileProductsOpen,
    mobileProductCategory,
    setMobileProductCategory,
    handleProductsMouseEnter,
    handleProductsMouseLeave,
    handleProductsDropdownMouseEnter,
    handleProductsDropdownMouseLeave,
    getProductCategoryIcon,
  } = useNav();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-black/5'
          : 'bg-white/80 backdrop-blur-md border-b border-gray-200/30'
      }`}
    >
      <div className="relative mx-auto max-w-[84vw] px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center py-2 md:py-3">
          <Image
            src="/images/clickmasters-logo.png"
            alt="ClickMasters"
            width={180}
            height={24}
            className="h-4 w-auto md:h-5"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {/* ── SERVICES DROPDOWN ── */}
          <div
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isServicesOpen ? 'rotate-180 text-brand' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 top-full mt-3 w-[780px] rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/10 overflow-hidden"
                  onMouseEnter={handleServicesDropdownMouseEnter}
                  onMouseLeave={handleServicesDropdownMouseLeave}
                >
                  <div className="p-4 max-h-[80vh] overflow-y-auto">
                    {/* Header */}
                    <div className="flex items-center gap-2 px-3 pb-3 border-b border-gray-100">
                      <Sparkles className="h-4 w-4 text-brand" />
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.12em]">
                        Our Services
                      </p>
                      <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full ml-auto">
                        {servicesList.length}
                      </span>
                    </div>

                    {/* All services — subpages shown directly (no category list) */}
                    <div className="grid grid-cols-2 gap-2 pt-3">
                        {servicesList.map((service, idx) => (
                          <motion.div
                            key={service.slug}
                            custom={idx}
                            variants={serviceItemVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <Link
                              href={`/services/${service.slug}`}
                              className="group flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all duration-200"
                              onClick={() => setIsServicesOpen(false)}
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
                              <ArrowRight className="ml-auto h-3.5 w-3.5 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-brand flex-shrink-0 mt-0.5 transition-all" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                    <div className="px-3 pt-3 mt-1 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href="/services"
                        className="text-xs font-semibold text-gray-700 hover:text-brand flex items-center gap-1"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        View all services <ArrowRight className="h-3 w-3" />
                      </Link>
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-brand hover:underline flex items-center gap-1"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Talk to us <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── PRODUCTS DROPDOWN (sidebar mega menu, same look as the other dropdowns) ── */}
          {/* Wrapper is NOT relative: the panel is positioned against the header container so it can be wide + centered. */}
          <div
            onMouseEnter={handleProductsMouseEnter}
            onMouseLeave={handleProductsMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              Products
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isProductsOpen ? 'rotate-180 text-brand' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ x: '-50%', width: 'min(960px, 94vw)', top: 'calc(50% + 22px)' }}
                  className="absolute left-1/2 rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/10 overflow-hidden"
                  onMouseEnter={handleProductsDropdownMouseEnter}
                  onMouseLeave={handleProductsDropdownMouseLeave}
                >
                  <div className="p-4">
                    {/* Header — same as Services / Solutions */}
                    <div className="flex items-center gap-2 px-3 pb-3 border-b border-gray-100">
                      <Sparkles className="h-4 w-4 text-brand" />
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.12em]">
                        AI Products
                      </p>
                      <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full ml-auto">
                        {productCategories.reduce((n, c) => n + c.products.length, 0)}
                      </span>
                    </div>

                    <div className="flex gap-4 pt-3" style={{ height: 'min(420px, calc(100vh - 230px))' }}>
                      {/* Sidebar: categories (rows styled like Platforms / Industries) */}
                      <div className="w-72 flex-shrink-0 rounded-xl bg-gray-50 p-2 space-y-1 overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:#d1d5db_transparent]">
                        {productCategories.map((category, idx) => {
                          const isActive = idx === activeProductCategory;
                          return (
                            <MaybeLink
                              key={category.slug}
                              live={category.live}
                              href={category.path}
                              onMouseEnter={() => setActiveProductCategory(idx)}
                              onFocus={() => setActiveProductCategory(idx)}
                              onClick={() => setIsProductsOpen(false)}
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
                          );
                        })}
                      </div>

                      {/* Content: products of the active category (items styled like Services) */}
                      <div className="flex-1 min-w-0 overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:#d1d5db_transparent]">
                        <div className="flex items-start justify-between gap-4 px-3 pt-1 pb-3">
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-800">{activeProductCategoryData.title}</p>
                            <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                              {activeProductCategoryData.description}
                            </p>
                          </div>
                          {activeProductCategoryData.live ? (
                            <Link
                              href={activeProductCategoryData.path}
                              onClick={() => setIsProductsOpen(false)}
                              className="text-xs font-semibold text-brand hover:underline flex items-center gap-1 whitespace-nowrap mt-0.5"
                            >
                              View all <ArrowRight className="h-3 w-3" />
                            </Link>
                          ) : (
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full whitespace-nowrap mt-0.5">
                              Coming soon
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {activeProductCategoryData.products.map((product, idx) => (
                            <motion.div
                              key={activeProductCategoryData.slug + product.slug}
                              custom={idx}
                              variants={serviceItemVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              <MaybeLink
                                live={product.live}
                                href={product.path}
                                className={`group flex items-start gap-3 p-3 rounded-xl border border-transparent transition-all duration-200 ${
                                  product.live ? 'hover:border-gray-200 hover:bg-gray-50' : 'cursor-default opacity-70'
                                }`}
                                onClick={() => setIsProductsOpen(false)}
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
                                <ArrowRight className="ml-auto h-3.5 w-3.5 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-brand flex-shrink-0 mt-0.5 transition-all" />
                              </MaybeLink>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer — same as Services */}
                    <div className="px-3 pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href={PRODUCTS_PATH}
                        className="text-xs font-semibold text-gray-700 hover:text-brand flex items-center gap-1"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        View all products <ArrowRight className="h-3 w-3" />
                      </Link>
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-brand hover:underline flex items-center gap-1"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        Talk to us <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── SOLUTIONS DROPDOWN ── */}
          <div
            className="relative"
            onMouseEnter={handleSolutionsMouseEnter}
            onMouseLeave={handleSolutionsMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            >
              Solutions
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isSolutionsOpen ? 'rotate-180 text-brand' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 top-full mt-3 w-[780px] rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/10 overflow-hidden"
                  onMouseEnter={handleSolutionsDropdownMouseEnter}
                  onMouseLeave={handleSolutionsDropdownMouseLeave}
                >
                  <div className="p-4 max-h-[80vh] overflow-y-auto">
                    <div className="flex items-center gap-2 px-3 pb-3 border-b border-gray-100">
                      <Sparkles className="h-4 w-4 text-brand" />
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.12em]">
                        AI Automation Solutions
                      </p>
                      <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full ml-auto">
                        {solutionsData.length}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-3">
                      {solutionsData.map((solution, idx) => {
                        const Icon = solution.icon || Sparkles;
                        return (
                          <Link
                            key={idx}
                            href={`/solutions/${solution.slug}`}
                            className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-brand/10 transition-all duration-200 group"
                            onClick={() => setIsSolutionsOpen(false)}
                          >
                            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand text-sm mt-0.5">
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
                        );
                      })}
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100 px-3 flex items-center justify-between">
                      <p className="text-xs text-gray-400">Need a custom solution?</p>
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-brand hover:underline flex items-center gap-1"
                        onClick={() => setIsSolutionsOpen(false)}
                      >
                        Contact us <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Platforms Dropdown ── */}
          <div
            className="relative"
            onMouseEnter={handlePlatformsMouseEnter}
            onMouseLeave={handlePlatformsMouseLeave}
          >
            <div className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors">
              <Link href="/platforms">Platforms</Link>
              <button
                type="button"
                aria-label="Open platforms menu"
                onClick={() => setIsPlatformsOpen(!isPlatformsOpen)}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isPlatformsOpen ? 'rotate-180 text-brand' : ''
                  }`}
                />
              </button>
            </div>

            <AnimatePresence>
              {isPlatformsOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 top-full mt-2 w-[420px] rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 overflow-hidden"
                  onMouseEnter={handlePlatformsDropdownMouseEnter}
                  onMouseLeave={handlePlatformsDropdownMouseLeave}
                >
                  <div className="p-3">
                    {platformCategories.length > 0 ? (
                      <>
                        {platformCategories.map((category: PlatformCategory, idx: number) => (
                          <Link
                            key={idx}
                            href={category.platforms[0]?.path || '#'}
                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-brand/10 transition-all duration-200 group"
                            onClick={() => setIsPlatformsOpen(false)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand font-bold text-sm">
                                {getPlatformIcon(category.title)}
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-800 group-hover:text-brand transition-colors">
                                  {category.title}
                                </span>
                                {category.platforms[0]?.description && (
                                  <p className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors">
                                    {category.platforms[0].description}
                                  </p>
                                )}
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-brand transition-colors" />
                          </Link>
                        ))}

                        <div className="mt-2 pt-2 border-t border-gray-100">
                          <Link
                            href="/platforms/airtable-automation-services"
                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-brand/10 transition-all duration-200 group"
                            onClick={() => setIsPlatformsOpen(false)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand font-bold text-sm">
                                {getPlatformIcon('Airtable')}
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-800 group-hover:text-brand transition-colors">
                                  Airtable
                                </span>
                                <p className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors">
                                  Custom operational systems and AI-connected bases
                                </p>
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-brand transition-colors" />
                          </Link>
                        </div>
                      </>
                    ) : (
                      <div className="px-4 py-6 text-center">
                        <p className="text-sm text-gray-400">No platforms available yet.</p>
                        <Link
                          href="/contact"
                          className="text-xs font-semibold text-brand hover:underline mt-2 inline-flex items-center gap-1"
                          onClick={() => setIsPlatformsOpen(false)}
                        >
                          Contact us <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Industries Dropdown ── */}
          <div
            className="relative"
            onMouseEnter={handleIndustriesMouseEnter}
            onMouseLeave={handleIndustriesMouseLeave}
          >
            <div className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors">
              <Link href="/industries">Industries</Link>
              <button
                type="button"
                aria-label="Open industries menu"
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isIndustriesOpen ? 'rotate-180 text-brand' : ''
                  }`}
                />
              </button>
            </div>

            <AnimatePresence>
              {isIndustriesOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 top-full mt-2 w-[420px] rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 overflow-hidden"
                  onMouseEnter={handleIndustriesDropdownMouseEnter}
                  onMouseLeave={handleIndustriesDropdownMouseLeave}
                >
                  <div className="p-3">
                    {industryCategories.map((category: IndustryCategory, idx: number) => (
                      <div key={idx}>
                        {category.industries.map((industry: IndustryItem, i: number) => (
                          <Link
                            key={i}
                            href={industry.path}
                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-brand/10 transition-all duration-200 group"
                            onClick={() => setIsIndustriesOpen(false)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand font-bold text-sm">
                                {getIndustryIcon(industry.title)}
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-800 group-hover:text-brand transition-colors">
                                  {industry.title}
                                </span>
                                {industry.description && (
                                  <p className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors">
                                    {industry.description}
                                  </p>
                                )}
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-brand transition-colors" />
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>



          {/* ── Case Studies Dropdown ── */}
          <div
            className="relative"
            onMouseEnter={handleCaseStudiesMouseEnter}
            onMouseLeave={handleCaseStudiesMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsCaseStudiesOpen(!isCaseStudiesOpen)}
            >
              Case Studies
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isCaseStudiesOpen ? 'rotate-180 text-brand' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isCaseStudiesOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 top-full mt-3 w-[560px] rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/10 overflow-hidden"
                  onMouseEnter={handleCaseStudiesDropdownMouseEnter}
                  onMouseLeave={handleCaseStudiesDropdownMouseLeave}
                >
                  <div className="p-4 max-h-[80vh] overflow-y-auto">
                    <div className="flex items-center gap-2 px-3 pb-3 border-b border-gray-100">
                      <Sparkles className="h-4 w-4 text-brand" />
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.12em]">
                        Case Studies
                      </p>
                      <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full ml-auto">
                        {caseStudiesData.length}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-3">
                      {caseStudiesData.map((study, idx) => {
                        const Icon = study.icon || Sparkles;
                        return (
                          <motion.div
                            key={study.slug}
                            custom={idx}
                            variants={serviceItemVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <Link
                              href={`/case-studies/${study.slug}`}
                              className="group flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all duration-200"
                              onClick={() => setIsCaseStudiesOpen(false)}
                            >
                              <div className="mt-0.5 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand">
                                <Icon className="h-4 w-4" />
                              </div>
                              <div className="min-w-0">
                                <span className="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors block leading-tight">
                                  {study.title}
                                </span>
                                <p className="text-xs text-gray-400 mt-0.5 leading-snug line-clamp-2">
                                  {study.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="px-3 pt-3 mt-1 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href="/case-studies"
                        className="text-xs font-semibold text-gray-700 hover:text-brand flex items-center gap-1"
                        onClick={() => setIsCaseStudiesOpen(false)}
                      >
                        View all case studies <ArrowRight className="h-3 w-3" />
                      </Link>
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-brand hover:underline flex items-center gap-1"
                        onClick={() => setIsCaseStudiesOpen(false)}
                      >
                        Discuss your project <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>



          {/* ── About & Contact Links ── */}
          <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
            About
          </Link>
          
          <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
            Contact
          </Link>
        </nav>

        <Link
          href="/free-automation-audit"
          data-cta-position="header"
          className="hidden md:inline-block bg-black hover:bg-gray-800 text-white text-sm px-5 py-2 transition-colors rounded-none font-medium"
        >
          Book a Call
        </Link>

        <button
          className="md:hidden text-gray-700 hover:text-black transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Services */}
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                <span className="font-medium">Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="mt-2 pl-4 space-y-1 border-l-2 border-brand/30">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Services
                  </p>
                  <Link
                    href="/services"
                    className="flex items-center gap-3 py-2 text-sm font-medium text-gray-800 hover:text-brand transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                  >
                    <Layers className="h-4 w-4 text-brand flex-shrink-0" />
                    <span>View all services</span>
                  </Link>
                  {servicesList.map((service, idx) => (
                    <Link
                      key={idx}
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-brand transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {getServiceIcon(service.title)}
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Products */}
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              >
                <span className="font-medium">Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileProductsOpen && (
                <div className="mt-2 pl-4 space-y-1 border-l border-gray-200">
                  <Link
                    href={PRODUCTS_PATH}
                    className="flex items-center gap-3 py-2 text-sm font-medium text-gray-800 hover:text-brand transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileProductsOpen(false);
                    }}
                  >
                    <Layers className="h-4 w-4 text-brand flex-shrink-0" />
                    <span>View all products</span>
                  </Link>
                  {productCategories.map((category, idx) => {
                    const isOpen = mobileProductCategory === idx;
                    return (
                      <div key={category.slug}>
                        <button
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
                          <div className="ml-13 mb-2 space-y-1 pl-3 border-l border-gray-200">
                            {category.products.map((product) =>
                              product.live ? (
                                <Link
                                  key={product.slug}
                                  href={product.path}
                                  className="block py-1.5 text-sm text-gray-600 hover:text-brand transition-colors"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsMobileProductsOpen(false);
                                  }}
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
                </div>
              )}
            </div>

            {/* Mobile Solutions */}
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
              >
                <span className="font-medium">Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileSolutionsOpen && (
                <div className="mt-2 pl-4 space-y-2 border-l border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="h-4 w-4 text-brand" />
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      AI Automation Solutions
                    </p>
                  </div>
                  {solutionsData.map((solution, idx) => {
                    const Icon = solution.icon || Sparkles;
                    return (
                      <Link
                        key={idx}
                        href={`/solutions/${solution.slug}`}
                        className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-brand/10 transition-colors"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileSolutionsOpen(false);
                        }}
                      >
                        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand text-xs mt-0.5">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-700">{solution.title}</p>
                          <p className="text-xs text-gray-400">{solution.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Platforms */}
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobilePlatformsOpen(!isMobilePlatformsOpen)}
              >
                <span className="font-medium">Platforms</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobilePlatformsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobilePlatformsOpen && (
                <div className="mt-2 pl-4 space-y-3 border-l border-gray-200">
                  {platformCategories.length > 0 ? (
                    <>
                      {platformCategories.map((category: PlatformCategory, idx: number) => (
                        <Link
                          key={idx}
                          href={category.platforms[0]?.path || '#'}
                          className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-brand/10 transition-colors"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobilePlatformsOpen(false);
                          }}
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand font-bold text-xs">
                            {getPlatformIcon(category.title)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">{category.title}</p>
                            {category.platforms[0]?.description && (
                              <p className="text-xs text-gray-400">
                                {category.platforms[0].description}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}

                      <Link
                        href="/platforms/airtable-automation-services"
                        className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-brand/10 transition-colors"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobilePlatformsOpen(false);
                        }}
                      >
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand font-bold text-xs">
                          {getPlatformIcon('Airtable')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Airtable</p>
                          <p className="text-xs text-gray-400">Custom operational systems and AI-connected bases</p>
                        </div>
                      </Link>
                    </>
                  ) : (
                    <div className="py-3 px-3">
                      <p className="text-sm text-gray-400">No platforms available yet.</p>
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-brand hover:underline mt-1 inline-flex items-center gap-1"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobilePlatformsOpen(false);
                        }}
                      >
                        Contact us <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Industries */}
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
              >
                <span className="font-medium">Industries</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileIndustriesOpen && (
                <div className="mt-2 pl-4 space-y-3 border-l border-gray-200">
                  {industryCategories.map((category: IndustryCategory, idx: number) => (
                    <div key={idx}>
                      {category.industries.map((industry: IndustryItem, i: number) => (
                        <Link
                          key={i}
                          href={industry.path}
                          className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-brand/10 transition-colors"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileIndustriesOpen(false);
                          }}
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand font-bold text-xs">
                            {getIndustryIcon(industry.title)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">{industry.title}</p>
                            {industry.description && (
                              <p className="text-xs text-gray-400">{industry.description}</p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Case Studies */}
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobileCaseStudiesOpen(!isMobileCaseStudiesOpen)}
              >
                <span className="font-medium">Case Studies</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileCaseStudiesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileCaseStudiesOpen && (
                <div className="mt-2 pl-4 space-y-2 border-l border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="h-4 w-4 text-brand" />
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Case Studies
                    </p>
                  </div>
                  {caseStudiesData.map((study, idx) => {
                    const Icon = study.icon || Sparkles;
                    return (
                      <Link
                        key={idx}
                        href={`/case-studies/${study.slug}`}
                        className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-brand/10 transition-colors"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileCaseStudiesOpen(false);
                        }}
                      >
                        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand text-xs mt-0.5">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-700">{study.title}</p>
                          <p className="text-xs text-gray-400">{study.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile About & Contact */}
            <Link 
              href="/about" 
              className="block text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <Link 
              href="/contact" 
              className="block text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/free-automation-audit"
              data-cta-position="header"
              className="block w-full text-center bg-black hover:bg-gray-800 text-white text-sm px-5 py-3 transition-colors rounded-none font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}