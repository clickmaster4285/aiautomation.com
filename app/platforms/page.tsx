'use client';

import Link from 'next/link';
import { HubJsonLd } from '@/components/seo/HubJsonLd';
import HeroBreadcrumb from '@/components/shared/HeroBreadcrumb';
import HeroCta from '@/components/shared/HeroCta';
import Marquee from '@/components/landingPage/Marquee';
import CtaBand from '@/components/landingPage/CtaBand';
import { SectionLabel } from '@/components/landingPage/Shared';
import ProductLeadForm from '@/components/products/ProductLeadForm';
import { hubSeo } from '@/lib/hub-seo';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Workflow, GitBranch, Mail, Rocket, Database, Cloud, Server, Shield, Users, Settings, Code } from 'lucide-react';

const platforms = [
  {
    icon: Zap,
    title: 'Zapier',
    slug: 'zapier',
    description:
      'Connect your apps and automate workflows with Zapier\'s no-code platform. We build complex automations that sync data across your entire stack.',
    capabilities: ['No-code automation', '5000+ app integrations', 'Multi-step workflows'],
    color: 'from-blue-50 to-transparent',
    badge: 'Most Popular',
  },
  {
    icon: Workflow,
    title: 'Make (Integromat)',
    slug: 'make',
    description:
      'Visual automation builder for complex data transformations. Perfect for handling intricate business logic and multi-step processes.',
    capabilities: ['Visual automation builder', 'Complex data mapping', 'Real-time processing'],
    color: 'from-purple-50 to-transparent',
    badge: 'Powerful',
  },
  {
    icon: GitBranch,
    title: 'n8n',
    slug: 'n8n',
    description:
      'Open-source workflow automation with full control. Self-hosted or cloud, n8n gives you complete flexibility for your automations.',
    capabilities: ['Open-source', 'Self-hosted option', 'Fair-code license'],
    color: 'from-green-50 to-transparent',
    badge: 'Open Source',
  },
  {
    icon: Mail,
    title: 'HubSpot',
    slug: 'hubspot',
    description:
      'Automate your sales, marketing, and service processes with HubSpot\'s powerful automation tools and CRM integration.',
    capabilities: ['Sales automation', 'Marketing workflows', 'Service ticketing'],
    color: 'from-orange-50 to-transparent',
    badge: 'Enterprise',
  },
  {
    icon: Rocket,
    title: 'GoHighLevel',
    slug: 'gohighlevel',
    description:
      'All-in-one marketing automation platform for agencies. Automate lead generation, follow-ups, and client management.',
    capabilities: ['Marketing automation', 'Lead generation', 'Agency tools'],
    color: 'from-red-50 to-transparent',
    badge: 'Agency Choice',
  },
  {
    icon: Database,
    title: 'Airtable',
    slug: 'airtable',
    description:
      'Custom operational systems with AI connections. Build powerful databases that connect to your automation workflows.',
    capabilities: ['Custom databases', 'AI connections', 'Real-time sync'],
    color: 'from-teal-50 to-transparent',
    badge: 'Flexible',
  },
  {
    icon: Cloud,
    title: 'Salesforce',
    slug: 'salesforce',
    description:
      'Enterprise-grade CRM automation. Streamline sales processes, service operations, and marketing campaigns with Salesforce automation.',
    capabilities: ['Enterprise CRM', 'Sales automation', 'Service cloud'],
    color: 'from-cyan-50 to-transparent',
    badge: 'Enterprise',
  },
  {
    icon: Code,
    title: 'Custom API Integration',
    slug: 'custom-api',
    description:
      'Custom API integrations for platforms without native automation. We build secure, reliable connections to any API.',
    capabilities: ['Custom API connections', 'Secure data transfer', 'Enterprise-grade'],
    color: 'from-gray-50 to-transparent',
    badge: 'Custom',
  },
];


const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'All automations built with enterprise-grade security, encryption, and compliance standards.',
  },
  {
    icon: Server,
    title: 'Monitored uptime',
    desc: 'Reliable automation infrastructure with monitoring, error handling, and automatic retries.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Automation workflows designed for team collaboration with version control and approval flows.',
  },
  {
    icon: Settings,
    title: 'Easy Maintenance',
    desc: 'Well-documented automations with monitoring dashboards and easy maintenance processes.',
  },
];

const testimonials = [
  {
    quote: "The automation built on Make has saved our team 20+ hours per week. The visual workflow builder made it easy to understand and maintain.",
    author: "Sarah Johnson",
    role: "Operations Director",
    company: "TechFlow Solutions",
    platform: "Make",
  },
  {
    quote: "Zapier automations have transformed how we handle customer data. Our sales team now spends 40% less time on data entry.",
    author: "Michael Chen",
    role: "VP of Sales",
    company: "GrowthStack Inc.",
    platform: "Zapier",
  },
];

// ── Animations ──

// Hero text slides in without starting invisible (keeps LCP fast).
const heroIn: Variants = {
  hidden: { y: 24 },
  visible: { y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};



const platformPaths: Record<string, string> = {
  zapier: '/platforms/zapier-automation-services',
  make: '/platforms/make-automation-services',
  n8n: '/platforms/n8n-automation-services',
  hubspot: '/platforms/hubspot-automation-services',
  gohighlevel: '/platforms/gohighlevel-automation-services',
  airtable: '/platforms/airtable-automation-services',
};

export default function PlatformsClient() {
  return (
    <div className="overflow-x-clip bg-white text-gray-900">
      <HubJsonLd hub={hubSeo.platforms} />
      {/* ── HERO: same layout as the other hubs; hero + marquee fill the first screen ── */}
      <div className="flex min-h-[calc(100svh-4rem)] flex-col">
        <section className="relative isolate flex flex-1 items-center overflow-hidden bg-paper py-12 md:py-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />
          <div className="relative mx-auto w-full max-w-[84vw] px-6">
            <HeroBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Platforms', href: '/platforms' }]} />
            <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-[1.15fr_1fr] lg:gap-16">
              <motion.div initial="hidden" animate="visible" variants={heroStagger}>
                <motion.div
                  variants={heroIn}
                  className="eyebrow mb-5 inline-flex items-center gap-2 border border-brand px-3 py-1 text-xs text-brand md:mb-7 md:text-sm"
                >
                  <span>Platforms</span>
                </motion.div>
                <motion.h1
                  variants={heroIn}
                  className="display mb-5 max-w-4xl text-4xl leading-[1.05] sm:text-5xl md:mb-7 md:text-6xl lg:text-7xl"
                >
                  AI Automation on <span className="display-italic text-brand">Your Existing Platforms</span>
                </motion.h1>
                <motion.p
                  variants={heroIn}
                  className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
                >
                  We build and maintain automations on Zapier, Make, n8n, HubSpot, GoHighLevel and Airtable, and connect
                  them to Salesforce or any tool with an API. No rip-and-replace: your workflows run on the stack your
                  team already knows.
                </motion.p>
                <motion.div variants={heroIn}>
                  <HeroCta />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="flex md:justify-end"
              >
                <ProductLeadForm product="AI automation platforms" variant="hero" id="get-started" />
              </motion.div>
            </div>
          </div>
        </section>
        <Marquee items={platforms.map((p) => p.title)} />
      </div>

      {/* ── 01 PLATFORMS (homepage bordered-grid layout) ── */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label="Platforms we implement" marker="01" />
          <div className="mb-8 flex flex-col gap-6 md:mb-10 md:grid md:grid-cols-2 md:gap-8">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">
              We speak your <span className="display-italic text-brand">platform&apos;s language</span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:self-end md:text-right md:text-lg">
              Hands-on delivery on the automation and CRM platforms most teams already run, plus custom API work
              for everything else.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              const href = platformPaths[platform.slug] ?? '/free-automation-audit';
              const linkText = platformPaths[platform.slug] ? `View ${platform.title.split(' (')[0]} automation` : 'Discuss your setup';
              return (
                <Link
                  key={platform.slug}
                  href={href}
                  className="group flex h-full flex-col bg-paper p-6 transition-colors duration-300 hover:bg-ink hover:text-white md:p-8"
                >
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center border border-brand/30 bg-brand/10 transition-colors duration-300 group-hover:border-brand group-hover:bg-brand">
                      <Icon className="h-5 w-5 text-brand transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
                    </span>
                    <span className="eyebrow text-right text-[11px] text-muted-foreground transition-colors duration-300 group-hover:text-white/50">
                      {platform.badge}
                    </span>
                  </div>
                  <h3 className="display mb-3 text-2xl">{platform.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/70">
                    {platform.description}
                  </p>
                  <ul className="mt-auto divide-y divide-border border-t border-border transition-colors duration-300 group-hover:divide-white/10 group-hover:border-white/10">
                    {platform.capabilities.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 py-2.5 text-sm text-ink transition-colors duration-300 group-hover:text-white/80">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <span className="eyebrow mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors duration-300 group-hover:text-brand">
                    {linkText}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 02 BUILT FOR PRODUCTION (homepage dark section) ── */}
      <section className="bg-ink py-16 text-white md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label="Why Clickmasters" marker="02" dark />
          <div className="mb-8 flex flex-col gap-6 md:mb-10 md:grid md:grid-cols-2 md:gap-8">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">
              Built for <span className="display-italic text-brand">production</span>
            </h2>
            <p className="text-base leading-relaxed text-white/70 md:self-end md:text-right md:text-lg">
              Every automation we build is designed for real-world reliability, scale and easy maintenance.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex h-full flex-col bg-ink p-6 md:p-8">
                  <div className="mb-6 flex items-start justify-between">
                    <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                    <span className="eyebrow text-xs text-white/40">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="display mb-3 text-2xl">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 03 TESTIMONIALS ── */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[84vw] px-6">
          <SectionLabel label="Testimonials" marker="03" />
          <h2 className="display mb-8 text-4xl sm:text-5xl md:mb-10 md:text-6xl">
            Trusted by teams <span className="display-italic text-brand">like yours</span>
          </h2>
          <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.author} className="flex h-full flex-col bg-paper p-6 md:p-10">
                <span className="eyebrow mb-6 text-xs text-brand">{t.platform}</span>
                <blockquote className="display-italic mb-8 text-2xl leading-snug md:text-3xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto border-t border-border pt-5">
                  <p className="font-medium text-ink">{t.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        data={{
          heading: "Let's build your automation stack.",
          subheading:
            "We'll map your current platforms, find the integration opportunities and design a workflow that runs itself.",
          cta: { text: 'Book Your Free Automation Audit', link: '/free-automation-audit' },
        }}
        ctaPosition="page-end"
      />
    </div>
  );
}