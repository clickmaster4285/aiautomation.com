// app/solutions/customer-support-automation/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Ticket,
  Bot,
  GitBranch,
  MessageSquare,
  Link2,
  Users,
  ChevronDown,
  Headphones,
  BookOpen,
  BarChart3,
  Cloud,
  Shield,
  Clock,
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

export default function CustomerSupportAutomationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── HERO ──────────────────────────────────────────────
const heroData = {
  badge: 'Customer Support Automation',

  heading:
    'Customer Support Automation for Faster, More Consistent Service',

  subheading:
    'Our customer service automation workflows connect help desks, CRM systems, knowledge bases, email, chat, and internal support teams into one clearer service process.',

  features: [
    'Automate ticket capture, classification, and ticket routing',
    'Use customer support AI for suitable routine questions.',
    'Escalate complex or sensitive cases to human agents',
    'Connect support workflows with CRM, help desk, and knowledge systems',
  ],

  primaryCta: {
    text: 'Book a Free Automation Audit',
    href: '/free-automation-audit',
  },

  image: '/images/customer-support.png',
  imageWidth: 600,
  imageHeight: 500,
  textSize: 'xlarge' as const,
};



  // ── SECTION 1: Workflow Steps ─────────────────────────
  const workflowSteps = [
    {
      id: 'capture',
      title: 'Ticket Capture, Triage & Priority Assignment',
      description:
        'Use ticket automation to capture requests from connected channels, classify the issue and apply priority rules before a human agent reviews it.',
      icon: Ticket,
    },
    {
      id: 'ai-responses',
      title: 'AI Responses & Knowledge Base Automation',
      description:
        'Use AI customer service and approved knowledge content to answer suitable common questions or suggest responses for support agents.',
      icon: Bot,
    },
    {
      id: 'routing',
      title: 'Ticket Routing, Agent Assistance & Escalation',
      description:
        'Apply intelligent routing to assign requests to the right team, provide agent context, and trigger human escalation for complex cases.',
      icon: GitBranch,
    },
    {
      id: 'followups',
      title: 'Customer Follow-Ups, Feedback & Support Reporting',
      description:
        'Automate status updates, post-resolution follow-ups, feedback collection, and customer service workflow automation reporting.',
      icon: BarChart3,
    },
  ];

  // ── SECTION 2: AI Customer Service ────────────────────
  const aiCapabilities = [
    'AI ticket classification and conversation summaries',
    'Knowledge base search and answer suggestions',
    'Urgency or intent signals for intelligent routing',
    'Agent assistance and draft response support',
  ];

  // ── SECTION 3: Integrations ───────────────────────────
  const integrations = [
    {
      label: 'CRM Systems',
      description: 'Customer account systems',
      icon: Users,
    },
    {
      label: 'Help Desk',
      description: 'Ticketing platforms',
      icon: Headphones,
    },
    {
      label: 'Knowledge & Channels',
      description: 'Knowledge bases, website chat and email',
      icon: BookOpen,
    },
    {
      label: 'Communication',
      description: 'Slack, Microsoft Teams, APIs and AI platforms',
      icon: MessageSquare,
    },
  ];

  // ── SECTION 4: Problems ───────────────────────────────
  const problems = [
    'Reduce manual sorting and repetitive ticket handling',
    'Route requests to the correct team more consistently',
    'Give customers faster responses to suitable common questions',
    'Make urgent issues and escalations easier to identify',
  ];

  // ── SECTION 5: Benefits ───────────────────────────────
  const benefits = [
    'Faster handling of routine customer requests',
    'Less repetitive work for support agents',
    'More consistent routing, escalation, and follow-up',
    'Better visibility across customer service workflows',
  ];

  // ── SECTION 6: Build Steps ────────────────────────────
  const buildSteps = [
    'Audit channels, ticket types and repetitive support work',
    'Map classification, priorities, routing and escalation rules',
    'Build AI/rule workflows and connect support systems',
    'Test customer scenarios, launch and improve performance',
  ];

  // ── SECTION 7: Why Choose ─────────────────────────────
  const whyChoose = [
    'Custom support workflow design',
    'AI assistance where it genuinely improves service',
    'Human escalation and agent control',
    'CRM, help desk, knowledge base and API integrations',
  ];

  // ── FAQS ──────────────────────────────────────────────
  const faqs = [
    {
      question: 'What is customer support automation?',
      answer:
        'Customer support automation uses software, workflow rules and AI to handle repetitive support tasks such as ticket classification, routing and follow-up.',
    },
    {
      question: 'What customer service tasks can be automated?',
      answer:
        'Ticket capture, triage, routing, priority assignment, common responses, follow-ups, feedback and reporting can all be automated.',
    },
    {
      question: 'Can AI answer customer questions?',
      answer:
        'Yes. Customer support AI can answer suitable questions using approved information, while complex cases can be escalated to people.',
    },
    {
      question: 'Can support automation work with our CRM?',
      answer:
        'Yes, if the CRM and help desk support the required integration or API connection.',
    },
    {
      question: 'Can customers always reach a human agent?',
      answer:
        'Yes. Human escalation can be built into the workflow for specific topics, confidence levels or priority conditions.',
    },
    {
      question: 'What affects customer support automation cost?',
      answer:
        'Cost depends on channels, ticket complexity, AI requirements, integrations, knowledge sources and workflow scope.',
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
          { label: 'Customer Support Automation', href: '/solutions/customer-support-automation' },
        ]}
      />

      {/* ══════════════════════════════════════════════════
          SECTION 1 — DARK: Automated Customer Service
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-black py-24 overflow-hidden">
        <FloatingOrbs variant="dark" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <Eyebrow variant="dark">Automated Customer Service</Eyebrow>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Automated Customer Service From Ticket Capture to Resolution
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Clickmasters designs support automation around real ticket types, escalation rules, and customer
              communication channels.
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
            <CTAButton href="/free-automation-audit">Automate Your Customer Support Workflow</CTAButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — LIGHT: AI Customer Service Solutions
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
        <FloatingOrbs variant="light" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Eyebrow variant="light">AI Customer Service</Eyebrow>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6"
              >
                AI Customer Service Solutions for Triage and Agent Support
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                AI customer service solutions can support ticket understanding, summaries, knowledge retrieval, and
                suggested responses. AI-powered customer support is most useful when it speeds up routine work while
                keeping judgment-heavy cases with people.
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
          SECTION 3 — DARK: Platform Integrations
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
                Customer Service Automation Platform Integrations
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                A customer service automation platform creates more value when it connects with the systems holding
                customer context and support knowledge. CRM support integration helps agents see relevant information
                without switching between disconnected tools.
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
                Problems Solved by Customer Care Automation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Manual support processes create long queues, misrouted tickets, and repeated answers. Customer care
                automation helps standardize routine support while making escalation rules clearer.
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
                Business Benefits of Automated Customer Support
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Automated customer support helps teams handle routine service volume more efficiently while improving
                visibility into ticket flow. It also gives agents more time for issues that need explanation, empathy,
                or specialist knowledge.
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
                How Clickmasters Builds Customer Service Automation Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Successful customer service automation solutions start with your support channels, ticket categories
                and escalation requirements. Clickmasters identifies which steps are safe to automate and where human
                agents should remain involved.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-500 leading-relaxed mt-4"
              >
                The workflow is then tested with common questions, ambiguous requests and high-priority cases.
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
                Why Choose Clickmasters for AI Customer Service Automation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Businesses need AI customer service automation that improves support rather than adding another
                frustrating layer between customers and agents. Clickmasters builds workflows with clear escalation,
                context and control.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-400 leading-relaxed mt-4"
              >
                The approach combines automation efficiency with practical human support.
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
            <CTAButton href="/free-automation-audit">Talk to an Expert About Customer Support Automation</CTAButton>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}