// app/solutions/marketing-automation/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Mail,
  Target,
  Users,
  Send,
  RefreshCw,
  BarChart3,
  ShoppingBag,
  Database,
  Link2,
  MessageSquare,
  ChevronDown,
  TrendingUp,
  Zap,
  Layers,
  Shield,
  Workflow,
  Globe,
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

export default function MarketingAutomationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── HERO ──────────────────────────────────────────────
  const heroData = {
    badge: 'AI Marketing Automation',
    heading: 'Marketing Automation Services for Lead Nurturing and Customer Journeys',
    subheading:
      'Marketing automation from Clickmasters connects lead capture, segmentation, email campaigns, nurturing, lead scoring, and sales handoffs into one customer journey. Our marketing automation services are built around your CRM, audience data, and sales process, so campaigns move leads toward the next meaningful action.',
    primaryCta: {
      text: 'Talk to an Automation Expert',
      href: '/free-automation-audit',
    },
    image: '/images/marketings.png',
    imageWidth: 600,
    imageHeight: 500,
    textSize: 'xlarge' as const,
  };

  // ── SECTION 1: Workflow Steps ─────────────────────────
  const workflowSteps = [
    {
      id: 'capture',
      title: 'Lead Capture, Customer Segmentation & Lead Scoring',
      description:
        'Capture leads from forms and campaigns, apply customer segmentation, and use lead scoring rules to decide which journey each contact should enter.',
      icon: Target,
    },
    {
      id: 'email',
      title: 'Email Marketing Automation & Lead Nurturing',
      description:
        'Use email marketing automation and structured lead nurturing sequences to follow up based on customer actions, stages, or interests.',
      icon: Send,
    },
    {
      id: 'personalization',
      title: 'Personalization, Follow-Up & Re-Engagement',
      description:
        'Trigger personalized communication, follow-up campaigns, and re-engagement workflows using CRM data and customer behavior.',
      icon: RefreshCw,
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce Marketing Automation & Reporting',
      description:
        'Use ecommerce marketing automation for cart, purchase, and lifecycle events while automating campaign and customer journey reporting.',
      icon: BarChart3,
    },
  ];

  // ── SECTION 2: AI Marketing Automation ────────────────
  const aiCapabilities = [
    'AI-assisted lead classification and segmentation',
    'Personalized message and content recommendations',
    'Campaign summaries and performance analysis support',
    'Customer journey and next-action recommendations',
  ];

  // ── SECTION 3: Integrations ───────────────────────────
  const integrations = [
    {
      label: 'CRM Systems',
      description: 'HubSpot, Salesforce, and Zoho CRM systems',
      icon: Database,
    },
    {
      label: 'Marketing Platforms',
      description: 'ActiveCampaign, Marketo, and Mailchimp',
      icon: Mail,
    },
    {
      label: 'Channels',
      description: 'Forms, websites, email, and advertising platforms',
      icon: Globe,
    },
    {
      label: 'Custom Systems',
      description: 'APIs, databases, and custom business applications',
      icon: Link2,
    },
  ];

  // ── SECTION 4: Problems ───────────────────────────────
  const problems = [
    'Reduce manual campaign setup and list management',
    'Improve consistency of lead nurturing and follow-up',
    'Connect marketing activity with CRM and sales data',
    'Prevent inactive or qualified leads from being overlooked',
  ];

  // ── SECTION 5: Benefits ───────────────────────────────
  const benefits = [
    'More consistent lead nurturing and customer journeys',
    'Less repetitive campaign administration',
    'Better alignment between marketing and sales',
    'Easier scaling across larger audiences and more campaigns',
  ];

  // ── SECTION 6: Build Steps ────────────────────────────
  const buildSteps = [
    'Audit lead sources, campaigns, CRM data and manual tasks',
    'Map segments, triggers, journeys and sales handoffs',
    'Build integrations, campaign logic and useful AI support',
    'Test journeys, launch and optimize campaign workflows',
  ];

  // ── SECTION 7: Why Choose ─────────────────────────────
  const whyChoose = [
    'Custom campaign and customer journey workflows',
    'CRM, email and sales-system integrations',
    'AI only where it improves useful marketing tasks',
    'Ongoing testing and workflow optimization',
  ];

  // ── FAQS ──────────────────────────────────────────────
  const faqs = [
    {
      question: 'What is marketing automation?',
      answer:
        'Marketing automation uses software workflows to automate repetitive marketing activities such as email campaigns, segmentation, nurturing and reporting.',
    },
    {
      question: 'What is email marketing automation?',
      answer:
        'Email marketing automation triggers relevant emails based on customer actions, lifecycle stages, dates or business rules.',
    },
    {
      question: 'What is B2B marketing automation?',
      answer:
        'B2B marketing automation helps manage longer lead journeys, qualification and marketing-to-sales handoffs automatically.',
    },
    {
      question: 'Can marketing automation integrate with CRM?',
      answer:
        'Yes. CRM marketing automation connects campaign activity with customer, lead and sales data.',
    },
    {
      question: 'Can AI be used in marketing automation?',
      answer:
        'Yes. AI marketing automation can support segmentation, personalization, analysis and recommendations where appropriate.',
    },
    {
      question: 'What affects marketing automation cost?',
      answer:
        'Cost depends on platforms, campaign complexity, integrations, data requirements, AI features and ongoing support.',
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
          { label: 'AI Marketing Automation', href: '/solutions/marketing-automation' },
        ]}
      />

      {/* ══════════════════════════════════════════════════
          SECTION 1 — DARK: Marketing Automation Workflows
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-black py-24 overflow-hidden">
        <FloatingOrbs variant="dark" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <Eyebrow variant="dark">Marketing Automation Workflows</Eyebrow>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Marketing Automation Workflows From Lead Capture to Sales Handoff
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Marketing automation workflows connect customer actions with the next relevant campaign step. Digital
              marketing automation helps leads move through nurturing.
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
            <CTAButton href="/free-automation-audit">Automate Your Marketing Workflow</CTAButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — LIGHT: AI Marketing Automation
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
        <FloatingOrbs variant="light" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Eyebrow variant="light">AI Marketing Automation</Eyebrow>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6"
              >
                AI Marketing Automation for Personalization and Campaign Decisions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                AI marketing automation can support segmentation, personalization, and campaign analysis when standard
                rules do not provide enough context. AI marketing automation tools should assist marketers rather than
                replace campaign strategy.
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
          SECTION 3 — DARK: CRM Marketing Automation & Integrations
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
                CRM Marketing Automation and Platform Integrations
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                CRM marketing automation works best when customer data, campaigns, and sales activity remain
                connected. Integrations prevent leads from being trapped in separate systems and make
                marketing-to-sales handoffs more reliable.
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
                Problems Solved by B2B Marketing Automation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Manual campaign work creates inconsistent follow-up, disconnected customer data, and weak sales
                handoffs. B2B marketing automation creates repeatable journeys so leads are not dependent on someone
                remembering the next action.
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
                Business Benefits of Automated Marketing
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Automated marketing helps teams manage more customer journeys with less repetitive administration. It
                also creates clearer visibility into where leads are in the nurturing process and when sales should
                become involved.
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
              <CTAButton href="/free-automation-audit">Explore Marketing Automation for Your Business</CTAButton>
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
                How Clickmasters Builds a Marketing Automation Strategy
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                A useful marketing automation strategy starts with customer journey mapping before tools are
                connected. Clickmasters reviews lead sources, CRM stages, audience data and campaign triggers to
                identify the workflows worth automating.
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
                Why Choose Clickmasters as Your Marketing Automation Agency
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                A marketing automation agency should understand how campaigns connect with CRM and revenue operations,
                not just how to configure email sequences. Clickmasters builds automation around the full customer
                journey.
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
            <CTAButton href="/free-automation-audit">Talk to an Expert About Marketing Automation</CTAButton>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}