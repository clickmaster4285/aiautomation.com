'use client';

import Link from 'next/link';
import { HubJsonLd } from '@/components/seo/HubJsonLd';
import { hubSeo } from '@/lib/hub-seo';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, Building2, Banknote, Heart, Scale, ShoppingBag, Cloud, Briefcase, BarChart3, Users, Shield, Truck, Building, GraduationCap, Home, Utensils, Plane, Factory, Gavel, Stethoscope } from 'lucide-react';
import ProductLeadForm from '@/components/products/ProductLeadForm';
import Marquee from '@/components/landingPage/Marquee';
import HeroBreadcrumb from '@/components/shared/HeroBreadcrumb';
import HeroCta from '@/components/shared/HeroCta';

const heroDescription =
  "Explore AI automation solutions for healthcare, finance and accounting, law firms, e-commerce, SaaS, real estate, and professional services. Automate intake, scheduling, documents, customer support, reporting, and routine workflows with systems designed around your industry's tools, processes, and compliance needs.";

const industries = [
  {
    icon: Banknote,
    title: 'Finance & Accounting',
    slug: 'ai-automation-for-finance-accounting',
    description:
      'Automate invoice processing, expense approvals, financial reporting, and reconciliation across your accounting stack with AI-powered accuracy.',
    outcomes: ['Auto invoice capture & processing', 'Expense approval flows', 'Financial reporting automation'],
    color: 'from-green-50 to-transparent',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    slug: 'ai-automation-for-healthcare',
    description:
      'Streamline patient scheduling, medical records management, insurance claims processing, and HIPAA-compliant communication workflows.',
    outcomes: ['Patient appointment automation', 'Medical records sync', 'Insurance claims processing'],
    color: 'from-red-50 to-transparent',
  },
  {
    icon: Scale,
    title: 'Law Firms',
    slug: 'ai-automation-for-law-firms',
    description:
      'Automate document review, case management, client intake, billing, and legal research workflows while maintaining strict confidentiality.',
    outcomes: ['Document automation', 'Case management workflows', 'Client intake automation'],
    color: 'from-purple-50 to-transparent',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    slug: 'ai-automation-for-ecommerce',
    description:
      'Streamline order management, inventory sync, customer support, returns processing, and supplier communication across your e-commerce ecosystem.',
    outcomes: ['Order processing automation', 'Inventory sync', 'Returns management'],
    color: 'from-orange-50 to-transparent',
  },
  {
    icon: Cloud,
    title: 'SaaS',
    slug: 'ai-automation-for-saas',
    description:
      'Automate customer onboarding, subscription management, support ticket routing, product analytics, and customer success workflows.',
    outcomes: ['Customer onboarding automation', 'Subscription management', 'Support ticket routing'],
    color: 'from-blue-50 to-transparent',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    slug: 'ai-automation-for-professional-services',
    description:
      'Automate project management, resource allocation, client reporting, time tracking, and billing across consulting and professional service firms.',
    outcomes: ['Project management automation', 'Resource allocation', 'Client reporting'],
    color: 'from-teal-50 to-transparent',
  },
  // {
  //   icon: Truck,
  //   title: 'Logistics & Supply Chain',
  //   slug: 'ai-automation-for-logistics-supply-chain',
  //   description:
  //     'Streamline shipment tracking, inventory management, supplier communication, and fulfillment processes with AI-powered automation.',
  //   outcomes: ['Shipment tracking automation', 'Inventory management', 'Supplier communication'],
  //   color: 'from-amber-50 to-transparent',
  // },
  {
    icon: Building,
    title: 'Real Estate',
    slug: 'ai-automation-for-real-estate',
    description:
      'Automate lead qualification, property listings, appointment scheduling, document processing, and client communication for real estate professionals.',
    outcomes: ['Lead qualification automation', 'Property listing sync', 'Appointment scheduling'],
    color: 'from-yellow-50 to-transparent',
  },
  // {
  //   icon: GraduationCap,
  //   title: 'Education',
  //   slug: 'ai-automation-for-education',
  //   description:
  //     'Automate student enrollment, course management, communication workflows, grading, and reporting for educational institutions and edtech platforms.',
  //   outcomes: ['Student enrollment automation', 'Course management', 'Grading workflows'],
  //   color: 'from-indigo-50 to-transparent',
  // },
];


const howItWorks = [
  {
    title: 'Industry discovery',
    desc: 'We start by understanding your specific industry challenges, compliance requirements, and unique workflows that make your business different.',
  },
  {
    title: 'Process mapping',
    desc: 'We document every step of your key business processes—from lead intake to service delivery—identifying every manual touchpoint that can be automated.',
  },
  {
    title: 'Build & deploy',
    desc: 'We build tailored automation solutions using your existing tools and systems. No rip-and-replace. Just smart, integrated workflows.',
  },
  {
    title: 'Monitor & optimize',
    desc: 'We track performance, gather feedback, and continuously optimize your automation to ensure maximum efficiency and ROI.',
  },
];

// ── Animations ──
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function IndustriesClient() {
  return (
    <div className="overflow-x-clip bg-paper text-ink">
      <HubJsonLd hub={hubSeo.industries} />
      {/* ── HERO: hero + marquee fill the first screen, marquee on its bottom edge (as on /) ── */}
      <div className="flex min-h-[calc(100svh-4rem)] flex-col">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="relative isolate flex flex-1 items-center overflow-hidden bg-paper py-12 md:py-10"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />

        <div className="relative mx-auto w-full max-w-[84vw] px-6">
          <HeroBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }]} />
          <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-[1.15fr_1fr] lg:gap-16">
            {/* ── LEFT COLUMN: Text ── */}
            <div>
              <div className="eyebrow mb-5 inline-flex items-center gap-2 border border-brand px-3 py-1 text-xs text-brand md:mb-7 md:text-sm">
                <span>Industries</span>
              </div>

              <h1 className="display mb-5 max-w-4xl text-4xl leading-[1.05] sm:text-5xl md:mb-7 md:text-6xl lg:text-7xl">
                AI Automation for <span className="display-italic text-brand">Every Industry</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:mt-7 md:text-xl lg:text-2xl">
                {heroDescription}
              </p>
              <HeroCta />
            </div>

            {/* ── RIGHT COLUMN: Audit CTA ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex md:justify-end"
            >
              <ProductLeadForm product="AI automation by industry" variant="hero" id="get-started" />
            </motion.div>
          </div>
        </div>
      </motion.section>

        <Marquee items={industries.map((i) => i.title)} />
      </div>

      {/* ── INDUSTRIES GRID ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="bg-paper py-16 md:py-24"
      >
        <div className="max-w-[84vw] px-6 mx-auto">
          <motion.div variants={fadeUp} className="mb-8 flex flex-col gap-6 md:mb-10 md:grid md:grid-cols-2 md:gap-8">
            <div>
              <p className="eyebrow mb-3 text-xs text-brand md:text-sm">By industry</p>
              <h2 className="display text-4xl sm:text-5xl md:text-6xl">
                Choose your <span className="display-italic text-brand">industry</span>
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground md:self-end md:text-right md:text-lg">
              AI automation built around how your industry actually operates, from compliance rules to the
              workflows that make your business different.
            </p>
          </motion.div>

          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.slug} variants={cardVariants} className="h-full">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group flex h-full flex-col bg-paper p-6 transition-colors duration-300 hover:bg-ink hover:text-white md:p-8"
                  >
                    <div className="mb-6 flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center border border-brand/30 bg-brand/10 transition-colors duration-300 group-hover:border-brand group-hover:bg-brand">
                        <Icon className="h-5 w-5 text-brand transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
                      </span>
                      <span className="eyebrow text-xs text-muted-foreground transition-colors duration-300 group-hover:text-white/50">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="display mb-3 text-2xl md:text-3xl">{ind.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/70 md:text-base">
                      {ind.description}
                    </p>

                    <ul className="mt-auto divide-y divide-border border-t border-border transition-colors duration-300 group-hover:divide-white/10 group-hover:border-white/10">
                      {ind.outcomes.map((o) => (
                        <li key={o} className="flex items-center gap-2.5 py-2.5 text-sm text-ink transition-colors duration-300 group-hover:text-white/80">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                          {o}
                        </li>
                      ))}
                    </ul>

                    <span className="eyebrow mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors duration-300 group-hover:text-brand md:text-sm">
                      Explore {ind.title}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── HOW IT WORKS / THE PROCESS ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="relative overflow-hidden bg-ink py-16 text-white md:py-24"
      >
        <div className="relative max-w-[84vw] px-6 mx-auto">
          <motion.div variants={fadeUp} className="mb-10 md:mb-14">
            <p className="eyebrow mb-3 text-brand">Our Process</p>
            <h2 className="display text-4xl text-white md:text-5xl">
              From industry challenges<br />
              <span className="display-italic text-brand">to automated solutions.</span>
            </h2>
          </motion.div>

          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="group flex cursor-default flex-col gap-4 bg-ink p-6 transition-colors duration-200 hover:bg-white/5 md:p-8"
              >
                <span className="display text-4xl text-brand/70 transition-colors duration-200 group-hover:text-brand md:text-5xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="display text-xl text-white transition-colors duration-200 group-hover:text-brand">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60 transition-colors duration-200 group-hover:text-white/80">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="relative overflow-hidden bg-secondary py-16 md:py-24"
      >
        <div className="relative max-w-[84vw] px-6 mx-auto">
          <div className="border border-border bg-paper px-6 py-12 text-center sm:px-8 md:px-16 md:py-16">
            <div className="relative">
              <p className="eyebrow mb-4 flex items-center justify-center gap-3 text-brand">
                <span className="inline-block h-2 w-2 bg-brand" />
                READY TO TRANSFORM YOUR INDUSTRY?
                <span className="inline-block h-2 w-2 bg-brand" />
              </p>

              <h2 className="display mb-6 text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
                <span className="text-ink">Free industry audit.</span>
                <br />
                <span className="display-italic text-brand">
                  Custom to your business.
                </span>
              </h2>

              <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:mb-10 sm:text-lg">
                In 30 minutes we&apos;ll map your biggest industry-specific bottlenecks and show you what automation would look like for your business.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm text-white transition-colors hover:bg-brand sm:px-10 sm:text-base"
              >
                <span>Book your free audit</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}