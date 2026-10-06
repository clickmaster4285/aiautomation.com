// app/solutions/sales-automation/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Mail,
  Send,
  RefreshCw,
  BarChart3,
  FileText,
  Database,
  Link2,
  Users,
  ChevronDown,
  Shield,
  Zap,
  TrendingUp,
  ClipboardList,
} from 'lucide-react';
import { PageWrapper } from '@/components/solutions/layout/PageWrapper';
import { HeroSection } from '@/components/solutions/sections/Hero';

// ─── Floating Background Orbs ──────────────────────────
function FloatingOrbs({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -80, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl ${
          variant === 'dark' ? 'bg-brand/10' : 'bg-brand/5'
        }`}
      />
      <motion.div
        animate={{ x: [0, -120, 0], y: [0, 100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className={`absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl ${
          variant === 'dark' ? 'bg-brand/5' : 'bg-brand/[0.03]'
        }`}
      />
    </div>
  );
}

// ─── Section Eyebrow ───────────────────────────────────
function Eyebrow({ children, variant = 'dark' }: { children: React.ReactNode; variant?: 'dark' | 'light' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-3 mb-6"
    >
      <span className="w-8 h-px bg-brand/60" />
      <span
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] ${
          variant === 'dark'
            ? 'bg-brand/10 text-brand border border-brand/20'
            : 'bg-brand/10 text-brand border border-brand/30'
        }`}
      >
        <Sparkles className="h-3 w-3" />
        {children}
      </span>
      <span className="w-8 h-px bg-brand/60" />
    </motion.div>
  );
}

// ─── CTA Button ────────────────────────────────────────
function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Link
        href={href}
        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand text-black font-semibold rounded-full hover:bg-brand/90 transition-all duration-300 shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30"
      >
        <span>{children}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

export default function SalesAutomationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── HERO ──────────────────────────────────────────────
  const heroData = {
    badge: 'AI Sales Automation',
    heading: 'Sales Automation Solutions for Faster Follow-Ups and Pipeline Growth',
    subheading:
      'Sales automation from Clickmasters connects lead capture, qualification, routing, outreach, follow-ups, pipeline updates, and proposal workflows. It gives sales teams more time for prospects by reducing repetitive CRM and administrative work. Our sales automation software workflows support the sales process without replacing the human conversations and decisions that close deals.',
    primaryCta: {
      text: 'Talk to an Automation Expert',
      href: '/free-automation-audit',
    },
    image: '/images/sale.png',
    imageWidth: 600,
    imageHeight: 500,
    textSize: 'xlarge' as const,
  };

  // ── SECTION 1: Sales Process Automation ───────────────
  const workflowSteps = [
    {
      id: 'capture',
      title: 'Lead Capture, Qualification & Sales Routing',
      description:
        'Capture new prospects, apply lead qualification rules and route opportunities to the right salesperson, territory, or team.',
      icon: Target,
    },
    {
      id: 'outreach',
      title: 'Prospect Research, Outreach & Automated Follow-Ups',
      description:
        'Use approved sales outreach, outreach automation and automated follow-ups to reduce repetitive prospecting administration.',
      icon: Send,
    },
    {
      id: 'pipeline',
      title: 'Sales Pipeline Automation & Deal Tracking',
      description:
        'Update deal stages, tasks, and alerts through sales pipeline automation so CRM information reflects real sales activity.',
      icon: RefreshCw,
    },
    {
      id: 'proposal',
      title: 'Sales Proposal, Quote & Order Automation',
      description:
        'Use sales proposal automation, sales quote automation and sales order automation to streamline downstream sales documents and approvals.',
      icon: FileText,
    },
  ];

  // ── SECTION 2: AI Sales Automation ────────────────────
  const aiCapabilities = [
    'AI-assisted lead classification and prospect research',
    'Sales call, email, and CRM note summaries',
    'Follow-up and next-action recommendations',
    'AI sales assistant support for routine research and drafting',
  ];

  // ── SECTION 3: Integrations ───────────────────────────
  const integrations = [
    {
      label: 'CRM Systems',
      description: 'HubSpot, Salesforce, Zoho, and GoHighLevel',
      icon: Database,
    },
    {
      label: 'Communication',
      description: 'Email, calendars, and communication platforms',
      icon: Mail,
    },
    {
      label: 'Sales Documents',
      description: 'Proposal, quote, and sales-document tools',
      icon: FileText,
    },
    {
      label: 'Downstream Systems',
      description: 'ERP systems, databases, and APIs',
      icon: Link2,
    },
  ];

  // ── SECTION 4: Problems ───────────────────────────────
  const problems = [
    'Reduce repetitive CRM entry and pipeline updates',
    'Prevent missed follow-ups and slow lead assignment',
    'Improve qualification and sales handoff consistency',
    'Reduce manual proposal, quote, and reporting work',
  ];

  // ── SECTION 5: Benefits ───────────────────────────────
  const benefits = [
    'Faster response and follow-up for new opportunities',
    'Less repetitive sales administration',
    'More accurate CRM and pipeline visibility',
    'Easier scaling across larger sales teams and lead volumes',
  ];

  // ── SECTION 6: Build Steps ────────────────────────────
  const buildSteps = [
    'Audit lead sources, CRM use, and repetitive sales tasks',
    'Map qualification, routing, outreach, and proposal stages',
    'Build integrations, workflow logic, and useful AI support',
    'Test real sales scenarios, launch, and optimize performance',
  ];

  // ── SECTION 7: Why Choose ─────────────────────────────
  const whyChoose = [
    'Custom sales and CRM workflow design',
    'AI support for research, summaries, and recommendations',
    'Proposal, quote, and order automation options',
    'CRM, email, calendar, ERP and API integrations',
  ];

  // ── FAQS ──────────────────────────────────────────────
  const faqs = [
    {
      question: 'What is sales automation?',
      answer:
        'Sales automation uses software workflows to automate repetitive sales tasks such as lead routing, follow-ups, CRM updates, and reporting.',
    },
    {
      question: 'What is sales force automation?',
      answer:
        'Sales force automation uses software to streamline recurring sales and CRM processes across the sales cycle.',
    },
    {
      question: 'Can sales outreach be automated?',
      answer:
        'Yes. Parts of outbound sales automation can include research, task creation, and approved communication workflows.',
    },
    {
      question: 'Can AI support sales teams?',
      answer:
        'Yes. AI sales automation can support research, summaries, classification, and next-action recommendations.',
    },
    {
      question: 'Can proposals and quotes be automated?',
      answer:
        'Yes. Sales proposal automation and sales quote automation can use CRM data, templates, and approval workflows.',
    },
    {
      question: 'What affects sales automation cost?',
      answer:
        'Cost depends on CRM requirements, workflow complexity, number of integrations, AI features, and ongoing support.',
    },
  ];

  // ── ANIMATION VARIANTS ────────────────────────────────
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <PageWrapper>
      {/* ── HERO ────────────────────────────────────────── */}
      <HeroSection
        {...heroData}
        imageWidth={heroData.imageWidth}
        imageHeight={heroData.imageHeight}
        textSize={heroData.textSize}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Sales Automation', href: '/solutions/sales-automation' },
        ]}
      />

      {/* ══════════════════════════════════════════════════
          SECTION 1 — DARK: Sales Process Automation
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-black py-24 overflow-hidden">
        <FloatingOrbs variant="dark" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <Eyebrow variant="dark">Sales Process Automation</Eyebrow>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Sales Process Automation From Lead Capture to Conversion
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Sales process automation connects repetitive tasks across the sales cycle, so prospects keep moving
              without constant manual updates. Salesforce automation is most valuable when CRM, email, calendars, and
              pipeline actions work together.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 leading-relaxed mt-4"
            >
              Clickmasters designs workflows around your actual sales stages and team responsibilities.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl bg-brand/10" />
                  <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-brand/5 border border-white/10 group-hover:border-brand/40 transition-all duration-300 backdrop-blur-sm">
                    <div className="absolute top-6 right-6 text-6xl font-bold text-white/5 font-serif">
                      0{idx + 1}
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-brand" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 font-serif relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed relative z-10">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center mt-14">
            <CTAButton href="/free-automation-audit">Book a Free Automation Audit</CTAButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — LIGHT: AI Sales Automation
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
        <FloatingOrbs variant="light" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Eyebrow variant="light">AI Sales Automation</Eyebrow>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6"
              >
                AI Sales Automation for Prospect Research and Sales Assistance
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                AI sales automation can reduce preparation and administrative work by helping teams understand lead
                information, summarize interactions, and recommend next steps.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-500 leading-relaxed mt-4"
              >
                Clickmasters combines AI with CRM rules and sales workflow logic for practical use cases.
              </motion.p>
            </div>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4 max-w-2xl mx-auto"
            >
              {aiCapabilities.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={listItemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200/60 hover:border-brand/40 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 leading-relaxed font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="text-center mt-14">
              <CTAButton href="/free-automation-audit">Explore AI Automation for Your Workflow</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — DARK: Integrations
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-black py-24 overflow-hidden">
        <FloatingOrbs variant="dark" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Eyebrow variant="dark">Integrations</Eyebrow>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6"
              >
                Sales Automation CRM and Business Tool Integrations
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                CRM sales automation reduces repeated updates and helps pipeline information stay current.
                Clickmasters can connect supported CRMs, communication tools, and downstream business platforms
                through available integrations and APIs.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {integrations.map((integration) => {
                const Icon = integration.icon;
                return (
                  <motion.div
                    key={integration.label}
                    variants={cardVariants}
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative group h-full"
                  >
                    <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl bg-brand/10" />
                    <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-brand/5 border border-white/10 group-hover:border-brand/40 transition-all duration-300 backdrop-blur-sm">
                      <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand/20 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-brand" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 font-serif">{integration.label}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{integration.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="text-center mt-14">
              <CTAButton href="/free-automation-audit">Connect Your Existing Business Tools</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — LIGHT: Problems Solved
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 overflow-hidden">
        <FloatingOrbs variant="light" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Eyebrow variant="light">Problems Solved</Eyebrow>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6"
              >
                Problems Solved by B2B Sales Automation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Manual sales administration slows lead response and makes follow-up inconsistent. B2B sales automation
                turns predictable sales tasks into repeatable workflows while leaving important conversations with
                salespeople.
              </motion.p>
            </div>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4"
            >
              {problems.map((problem, idx) => (
                <motion.li
                  key={idx}
                  variants={listItemVariants}
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200/60 hover:border-brand/40 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 leading-relaxed text-base font-medium">{problem}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="text-center mt-14">
              <CTAButton href="/free-automation-audit">Identify Tasks You Can Automate</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — DARK: Business Benefits
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-black py-24 overflow-hidden">
        <FloatingOrbs variant="dark" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Eyebrow variant="dark">Benefits</Eyebrow>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6"
              >
                Business Benefits of Sales Automation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Sales automation tools help sales teams manage more activity without adding the same amount of
                administration. They also give managers better visibility because pipeline actions are recorded more
                consistently.
              </motion.p>
            </div>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4"
            >
              {benefits.map((benefit, idx) => (
                <motion.li
                  key={idx}
                  variants={listItemVariants}
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 hover:border-brand/40 transition-all duration-300 backdrop-blur-sm"
                >
                  <Sparkles className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 leading-relaxed text-base">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="text-center mt-14">
              <CTAButton href="/free-automation-audit">See Where Automation Can Save Time</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — LIGHT: How Clickmasters Builds
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
        <FloatingOrbs variant="light" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Eyebrow variant="light">Our Process</Eyebrow>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6"
              >
                How Clickmasters Builds Sales Workflow Automation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Effective sales workflow automation begins with the sales process, not the automation tool.
                Clickmasters reviews lead sources, CRM stages, follow-up rules, and handoffs before building the
                workflow.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid md:grid-cols-2 gap-8"
            >
              {buildSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl bg-brand/10" />
                  <div className="relative h-full p-8 rounded-2xl bg-white border border-gray-200/60 group-hover:border-brand/40 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                        <span className="text-brand font-bold text-lg">{idx + 1}</span>
                      </div>
                      <p className="text-gray-800 leading-relaxed pt-2.5 text-base font-medium">{step}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-14">
              <CTAButton href="/free-automation-audit">Book a Free Automation Audit</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7 — DARK: Why Choose Clickmasters
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-black py-24 overflow-hidden">
        <FloatingOrbs variant="dark" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Eyebrow variant="dark">Why Clickmasters</Eyebrow>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6"
              >
                Why Choose Clickmasters for Sales Automation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Businesses need sales automation solutions that reduce administration without making customer
                communication feel robotic. Clickmasters builds custom workflows that keep salespeople in control of
                relationships and closing decisions.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid md:grid-cols-2 gap-6"
            >
              {whyChoose.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className="group relative p-7 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-brand/5 border border-white/10 hover:border-brand/40 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                      <Shield className="h-6 w-6 text-brand" />
                    </div>
                    <p className="text-gray-200 leading-relaxed pt-2.5 font-medium">{item}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-14">
              <CTAButton href="/free-automation-audit">Discuss Your Automation Project</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FAQs — LIGHT
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
        <FloatingOrbs variant="light" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Eyebrow variant="light">FAQs</Eyebrow>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-brand/5 border-brand/40 shadow-lg shadow-brand/10'
                      : 'bg-white border-gray-200/60 hover:border-brand/30 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? 'bg-brand text-black'
                          : 'bg-gray-100 text-gray-500 group-hover:bg-brand/20 group-hover:text-brand'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent mb-4" />
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <CTAButton href="/free-automation-audit">Talk to an Expert About Sales Automation</CTAButton>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}