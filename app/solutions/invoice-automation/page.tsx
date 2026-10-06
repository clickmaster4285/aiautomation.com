// app/solutions/invoice-automation/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Receipt,
  GitBranch,
  Database,
  DollarSign,
  FileText,
  Link2,
  Users,
  ChevronDown,
  ScanLine,
  Shield,
  BarChart3,
  Cloud,
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

export default function InvoiceAutomationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── HERO ──────────────────────────────────────────────
  const heroData = {
    badge: 'Invoice & Finance Automation',
    heading: 'Invoice Automation Solutions for Faster Accounts Payable Processing',
    subheading:
      'Invoice automation from Clickmasters connects invoice capture, data extraction, validation, matching, approvals, and ERP posting into one controlled accounts payable workflow. Our automated invoice processing workflows can support supplier invoices, PO matching, three-way matching, reconciliation, and downstream accounting updates.',
    primaryCta: {
      text: 'Talk to an Automation Expert',
      href: '/free-automation-audit',
    },
    image: '/images/invoice.png',
    imageWidth: 600,
    imageHeight: 500,
    textSize: 'xlarge' as const,
  };

  // ── SECTION 1: Workflow Steps ─────────────────────────
  const workflowSteps = [
    {
      id: 'capture',
      title: 'Invoice Capture, Vendor Recognition & AI Extraction',
      description:
        'Capture invoices from email, uploads, or storage and use AI invoice processing or OCR to extract vendor, date, invoice number, totals and line items.',
      icon: ScanLine,
    },
    {
      id: 'validation',
      title: 'Invoice Validation, Duplicate Detection & PO Matching',
      description:
        'Check required fields, identify potential duplicates, and perform purchase order matching against available procurement data.',
      icon: Shield,
    },
    {
      id: 'three-way',
      title: 'Three-Way Matching & Invoice Approval Automation',
      description:
        'Use three-way matching where receipt data is available, then route invoices through invoice approval automation based on amount, department, or other rules.',
      icon: GitBranch,
    },
    {
      id: 'posting',
      title: 'AP Processing, ERP Posting & Reconciliation',
      description:
        'Move approved invoice data into accounts payable workflow automation, ERP posting, and reconciliation steps without repeated manual entry.',
      icon: Database,
    },
  ];

  // ── SECTION 2: AI Invoice Automation ──────────────────
  const aiCapabilities = [
    'AI invoice field and line-item extraction',
    'Vendor and document recognition support',
    'Exception identification and validation assistance',
    'Invoice summarization and intelligent routing',
  ];

  // ── SECTION 3: Integrations ───────────────────────────
  const integrations = [
    {
      label: 'Accounting Software',
      description: 'QuickBooks and Xero accounting workflows',
      icon: DollarSign,
    },
    {
      label: 'ERP Systems',
      description: 'NetSuite, SAP, Oracle, and Microsoft Dynamics',
      icon: Database,
    },
    {
      label: 'Email & Cloud Storage',
      description: 'Procurement data sources and file shares',
      icon: Cloud,
    },
    {
      label: 'Custom Systems',
      description: 'Finance systems, databases, and APIs',
      icon: Link2,
    },
  ];

  // ── SECTION 4: Problems ───────────────────────────────
  const problems = [
    'Reduce manual invoice entry and repeated finance administration',
    'Prevent invoices from being lost in inboxes or approval chains',
    'Speed up matching, approval routing, and status visibility',
    'Reduce duplicate processing and inconsistent ERP updates',
  ];

  // ── SECTION 5: Benefits ───────────────────────────────
  const benefits = [
    'Faster invoice processing and approval cycles',
    'Less repetitive AP administration',
    'Improved consistency across invoice and ERP records',
    'Easier scaling as supplier and invoice volumes grow',
  ];

  // ── SECTION 6: Why Choose ─────────────────────────────
  const whyChoose = [
    'Custom AP and invoice workflow design',
    'AI/OCR extraction and invoice validation support',
    'PO matching, approval routing and exception handling',
    'Accounting, ERP, email and API integrations',
  ];

  // ── FAQS ──────────────────────────────────────────────
  const faqs = [
    {
      question: 'What is invoice automation?',
      answer:
        'Invoice automation uses software workflows to capture, extract, validate, approve and process supplier invoice information.',
    },
    {
      question: 'What is automated invoice processing?',
      answer:
        'Automated invoice processing reduces manual work by handling repetitive invoice extraction, validation, matching and routing tasks.',
    },
    {
      question: 'Can accounts payable be automated?',
      answer:
        'Yes. Automated accounts payable can support invoice capture, matching, approval and ERP updates while keeping people in controls where required.',
    },
    {
      question: 'Can AI extract invoice data?',
      answer:
        'Yes. AI invoice processing can extract fields from many invoice formats, depending on document quality and workflow requirements.',
    },
    {
      question: 'Can invoice automation perform PO matching?',
      answer:
        'Yes, when the required invoice, purchase order and receiving data are available to the workflow.',
    },
    {
      question: 'What affects invoice automation cost?',
      answer:
        'Cost depends on invoice complexity, volume, integrations, matching rules, AI requirements and approval logic.',
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
          { label: 'Invoice & Finance Automation', href: '/solutions/invoice-automation' },
        ]}
      />

      {/* ══════════════════════════════════════════════════
          SECTION 1 — DARK: Automated Invoice Processing
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-black py-24 overflow-hidden">
        <FloatingOrbs variant="dark" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <Eyebrow variant="dark">Automated Invoice Processing</Eyebrow>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Automated Invoice Processing From Capture to ERP Posting
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Clickmasters builds the workflow around your existing AP controls, vendor data and accounting systems.
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
            <CTAButton href="/free-automation-audit">Automate Your Invoice Workflow</CTAButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — LIGHT: AI Invoice Automation
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
        <FloatingOrbs variant="light" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Eyebrow variant="light">AI Invoice Automation</Eyebrow>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6"
              >
                AI Invoice Automation for Data Extraction and Exceptions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                AI invoice automation is useful when suppliers send invoices in different layouts or formats. AI can
                support extraction and classification before standard AP rules determine the next action. Clickmasters
                keeps finance approvals and sensitive decisions under human control while automating repeatable
                processing work.
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
          SECTION 3 — DARK: AP Software & ERP Integrations
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
                AP Software and ERP Integrations for Invoice Processing
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Effective AP software automation should connect invoice processing with the systems finance teams
                already use. Automated AP software workflows reduce duplicate entry by passing approved invoice
                information directly into accounting processes. Clickmasters can connect supported finance tools using
                available integrations and APIs.
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
                Problems Solved by Accounts Payable Automation Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Manual AP work creates slow approvals, repeated entry, and limited visibility into invoice status.
                Accounts payable automation solutions create a clearer process for routine invoices and exceptions.
                The strongest automation opportunities are repetitive checks and routing steps that follow predictable
                finance rules.
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
                Business Benefits of AP Automation Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                AP automation solutions help finance teams handle growing invoice volumes without repeating the same
                administrative work for every document. They also make invoice status easier to track across
                departments.
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
          SECTION 6 — LIGHT: Why Choose Clickmasters
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
        <FloatingOrbs variant="light" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Eyebrow variant="light">Why Clickmasters</Eyebrow>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6"
              >
                Why Choose Clickmasters for Invoice Automation?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Businesses need invoice automation solutions that fit real AP controls and existing accounting
                systems. Clickmasters combines document processing, finance workflow logic and integration into one
                practical implementation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-500 leading-relaxed mt-4"
              >
                Automation remains focused on reducing workload while keeping finance teams responsible for approvals
                and exceptions.
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
                  className="group relative p-7 rounded-2xl bg-white border border-gray-200/60 hover:border-brand/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-brand/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                      <Shield className="h-6 w-6 text-brand" />
                    </div>
                    <p className="text-gray-800 leading-relaxed pt-2.5 font-medium">{item}</p>
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
          FAQs — DARK
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-black py-24 overflow-hidden">
        <FloatingOrbs variant="dark" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Eyebrow variant="dark">FAQs</Eyebrow>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white"
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
                      ? 'bg-brand/5 border-brand/40'
                      : 'bg-white/5 border-white/10 hover:border-brand/30 hover:bg-white/[0.07]'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? 'bg-brand text-black'
                          : 'bg-white/10 text-gray-400 group-hover:bg-brand/20 group-hover:text-brand'
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
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <CTAButton href="/free-automation-audit">Talk to an Expert About Invoice Automation</CTAButton>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}