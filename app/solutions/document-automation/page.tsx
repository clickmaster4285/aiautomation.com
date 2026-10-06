// app/solutions/document-automation/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  FileText,
  GitBranch,
  Database,
  Cloud,
  ScanLine,
  ClipboardCheck,
  FolderOpen,
  Link2,
  Users,
  ChevronDown,
  Target,
  Workflow,
  Zap,
  TrendingUp,
  Clock,
  Layers,
  Shield,
  Lightbulb,
  Rocket,
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

export default function DocumentAutomationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── HERO ──────────────────────────────────────────────
const heroData = {
  badge: 'Document & Data Automation',
  heading: 'Document Automation Solutions for Faster Document Processing',
  subheading:
    'Document automation from Clickmasters turns repetitive document handling into a structured digital workflow. Our document automation software workflows are designed for contracts, forms, PDFs, reports, employee documents, customer files, and other document-heavy business processes.',
  features: [
    'Automate document capture and OCR data extraction',
    'Use document workflow automation for routing and approvals',
    'Reduce repetitive document entry and filing',
    'Connect documents with CRM, ERP, databases, and cloud storage',
  ],
  primaryCta: {
    text: 'Book a Free Automation Audit',
    href: '/free-automation-audit',
  },
  image: '/images/datas.png',
  imageWidth: 600,
  imageHeight: 500,
  textSize: 'xlarge' as const,
};

  // ── HERO BULLETS ──────────────────────────────────────
  const heroBullets = [
    'Automate document capture and OCR data extraction',
    'Use document workflow automation for routing and approvals.',
    'Reduce repetitive document entry and filing',
    'Connect documents with CRM, ERP, databases, and cloud storage',
  ];

  // ── SECTION 1: Workflow Steps ─────────────────────────
  const workflowSteps = [
    {
      id: 'capture',
      title: 'Document Capture & Automated Document Processing',
      description:
        'Collect files from email, forms, uploads, or cloud folders, and start automated document processing as soon as a new document arrives.',
      icon: ScanLine,
    },
    {
      id: 'ocr',
      title: 'OCR, AI Document Processing & Data Extraction',
      description:
        'Use OCR automation, AI document processing, and document data extraction to capture relevant fields from supported files.',
      icon: FileText,
    },
    {
      id: 'classification',
      title: 'Document Classification, Validation & Routing',
      description:
        'Apply intelligent document processing to identify document types, validate extracted information and route files to the right workflow.',
      icon: GitBranch,
    },
    {
      id: 'approval',
      title: 'Approval, Filing & Data Synchronization',
      description:
        'Use automated document workflow rules for approvals, storage, document updates and synchronization with connected business systems.',
      icon: FolderOpen,
    },
  ];

  // ── SECTION 2: AI Document Automation ─────────────────
  const aiCapabilities = [
    'AI document data extraction and field recognition',
    'Document classification and unstructured data processing',
    'Summarization and validation support',
    'Intelligent routing and exception identification',
  ];

  // ── SECTION 3: Integrations ───────────────────────────
  const integrations = [
    {
      label: 'CRM Systems',
      description: 'Customer and lead records',
      icon: Users,
    },
    {
      label: 'ERP & Accounting',
      description: 'Operational and finance data',
      icon: Database,
    },
    {
      label: 'Email & Cloud Storage',
      description: 'Document libraries and file shares',
      icon: Cloud,
    },
    {
      label: 'Databases & APIs',
      description: 'Custom business applications',
      icon: Link2,
    },
  ];

  // ── SECTION 4: Problems ───────────────────────────────
  const problems = [
    'Reduce manual reading, copying, and rekeying of document data',
    'Prevent files from being lost or routed to the wrong team',
    'Speed up approval and document review workflows',
    'Keep approved document data consistent across connected systems',
  ];

  // ── SECTION 5: Benefits ───────────────────────────────
  const benefits = [
    'Faster document processing and approvals',
    'Less manual data entry and filing work',
    'Better data consistency across systems',
    'Easier scaling for growing document volumes',
  ];

  // ── SECTION 6: Build Steps ────────────────────────────
  const buildSteps = [
    'Audit document sources, types, and manual processing steps',
    'Map extraction fields, validation rules, approvals, and destinations',
    'Build OCR/AI processing, workflow logic, and integrations',
    'Test document variations, launch, and optimize exceptions',
  ];

  // ── SECTION 7: Why Choose ─────────────────────────────
  const whyChoose = [
    'Custom document workflows for your actual file types',
    'OCR, AI extraction and classification where useful',
    'Human approval and exception handling',
    'CRM, ERP, cloud storage and API integrations',
  ];

  // ── FAQS ──────────────────────────────────────────────
  const faqs = [
    {
      question: 'What is document automation?',
      answer:
        'Document automation uses workflows, software, OCR and AI to capture, process, route, approve, generate or store business documents.',
    },
    {
      question: 'What is document workflow automation?',
      answer:
        'Document workflow automation moves documents through defined processing, validation, approval and storage stages automatically.',
    },
    {
      question: 'What is intelligent document automation?',
      answer:
        'Intelligent document automation uses AI or machine learning to understand, classify or extract information from documents before workflow rules continue.',
    },
    {
      question: 'Can AI process PDFs and scanned documents?',
      answer:
        'Yes, supported PDFs and scans can use OCR and AI document processing, although extraction quality depends on document quality and structure.',
    },
    {
      question: 'Can document data update our CRM or ERP?',
      answer:
        'Yes, if the required integrations or APIs are available, approved data can update connected business systems.',
    },
    {
      question: 'What affects document automation cost?',
      answer:
        'Cost depends on document types, volume, extraction complexity, integrations, AI requirements and approval logic.',
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
          { label: 'Document & Data Automation', href: '/solutions/document-automation' },
        ]}
      />

      {/* ══════════════════════════════════════════════════
          SECTION 1 — DARK: Document Workflow Automation
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-black py-24 overflow-hidden">
        <FloatingOrbs variant="dark" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <Eyebrow variant="dark">Document Workflow Automation</Eyebrow>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Document Workflow Automation From Capture to System Update
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              With business document automation, a document can trigger classification, validation, routing,
              approval, and storage based on its content and business rules.
            </motion.p>
          </div>

          {/* Hero bullets */}
        

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
            <CTAButton href="/free-automation-audit">Automate Your Document Workflow</CTAButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — LIGHT: AI Document Automation
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
        <FloatingOrbs variant="light" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Eyebrow variant="light">AI Document Automation</Eyebrow>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6"
              >
                AI Document Automation for Extraction and Classification
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                AI document automation helps when documents contain different layouts, unstructured text or
                information that is difficult to process with simple field rules. It can support understanding before
                standard workflow logic takes over. Clickmasters uses AI where it improves accuracy, classification
                or extraction while keeping human review available for important exceptions.
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
          SECTION 3 — DARK: Document Management Integrations
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
                Document Management and Workflow Automation Integrations
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Document management and workflow automation create more value when processed information reaches the
                system where teams actually use it. Integrations prevent employees from retyping approved document
                data into several platforms. Clickmasters connects supported document workflows with business
                applications through available integrations and APIs.
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
                Problems Solved by Intelligent Document Automation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Manual document handling creates slow approvals, repeated data entry, and inconsistent filing.
                Intelligent document automation helps create a predictable process from intake to storage.
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
                Business Benefits of Document Process Automation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Document process automation software helps teams process higher document volumes without adding the
                same amount of repetitive administration. It also improves visibility because each document follows
                a defined path.
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
                How Clickmasters Builds Document Automation Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                A reliable document automation solution starts with understanding document types, required fields,
                exceptions, and approval rules. Clickmasters maps the complete process before selecting OCR, AI, or
                integration tools.
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
                Why Choose Clickmasters for AI Document Automation?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Businesses need AI document automation that can work with existing processes and keep human review
                where needed. Clickmasters combines extraction, workflow design, and system integration into one
                practical solution.
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
            <CTAButton href="/free-automation-audit">Talk to an Expert About Document Automation</CTAButton>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}