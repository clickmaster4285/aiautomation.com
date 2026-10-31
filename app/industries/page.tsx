'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, Building2, Banknote, Heart, Scale, ShoppingBag, Cloud, Briefcase, BarChart3, Users, Shield, Truck, Building, GraduationCap, Home, Utensils, Plane, Factory, Gavel, Stethoscope } from 'lucide-react';

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

const stats = [
  { value: '9', label: 'Industries covered' },
  { value: '45%', label: 'Avg. operational cost saved' },
  { value: '3 weeks', label: 'Avg. time to first automation live' },
  { value: '300+', label: 'Industry-specific workflows' },
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
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* ── HERO ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="relative pt-32 pb-24 overflow-hidden bg-black"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_50%,rgba(249,115,22,0.12),transparent)]" />

        <div className="relative max-w-[84vw] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* ── LEFT COLUMN: Text ── */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-orange-800/60 bg-orange-950/30">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span className="eyebrow text-brand text-[11px]">Industries</span>
              </div>

              <h1 className="display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[0.95]">
                Industry-specific<br />
                <span className="display-italic text-brand">AI automation.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
                Every industry has its own unique challenges, workflows, and compliance requirements. We build tailored automation solutions designed specifically for how your industry actually operates—so you can work smarter, not harder.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand hover:bg-black text-white px-8 py-4 rounded-full font-semibold text-sm transition-colors shadow-lg shadow-brand/30 hover:shadow-black/30"
                >
                  Explore your industry <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Image ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-5xl">
                <div className="absolute -inset-8 rounded-3xl blur-3xl opacity-70"
                  style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%)' }} />
                <div className="absolute -inset-4 rounded-2xl blur-2xl opacity-50"
                  style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)' }} />

                <motion.img
                  src="/images/mini.png"
                  alt="Industries illustration"
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-brand/10 object-cover"
                  style={{
                    maskImage: 'linear-gradient(to left, transparent 0%, black 25%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 25%, black 100%)',
                  }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full aspect-[4/3] flex items-center justify-center text-5xl font-black text-brand/30';
                      fallback.textContent = '🏭';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── STATS ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="border-y border-gray-100 bg-gray-50"
      >
        <div className="max-w-[84vw] px-6 mx-auto py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                custom={i} 
                className="flex flex-col items-center gap-1"
              >
                <span className="text-4xl font-bold text-brand font-sans">{s.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── INDUSTRIES GRID ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="py-24 bg-white"
      >
        <div className="max-w-[84vw] px-6 mx-auto">
          <motion.div variants={fadeUp} className="mb-14">
            <p className="eyebrow text-brand text-[11px] mb-3">By Industry</p>
            <h2 className="display text-4xl md:text-5xl text-gray-900">
              Choose your industry
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mt-4">
              We build AI automation tailored to how your industry actually operates—from compliance to unique workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={i} variants={cardVariants}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group relative flex flex-col p-7 border border-gray-200 rounded-2xl hover:border-brand/40 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300 bg-white overflow-hidden h-full"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className="relative">
                      <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:border-brand transition-colors">
                        <Icon className="h-5 w-5 text-brand group-hover:text-white transition-colors" />
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                        {ind.description}
                      </p>

                      <ul className="space-y-1.5">
                        {ind.outcomes.map((o, j) => (
                          <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle2 className="h-3.5 w-3.5 text-brand flex-shrink-0" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
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
        className="py-24 bg-gray-950 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_0%_50%,rgba(249,115,22,0.08),transparent)]" />
        <div className="relative max-w-[84vw] px-6 mx-auto">
          <motion.div variants={fadeUp} className="mb-14">
            <p className="eyebrow text-brand text-[11px] mb-3">Our Process</p>
            <h2 className="display text-4xl md:text-5xl text-white">
              From industry challenges<br />
              <span className="display-italic text-brand">to automated solutions.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-800 border border-gray-800 rounded-2xl overflow-hidden">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: 'rgba(249,115,22,0.10)',
                  borderColor: 'var(--brand)',
                  transition: { duration: 0.2, ease: 'easeInOut' },
                }}
                className="bg-gray-950 p-10 flex flex-col gap-4 border border-transparent rounded-lg transition-all duration-200 cursor-default"
              >
                <motion.span
                  whileHover={{
                    color: 'var(--brand)',
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="text-5xl font-bold text-gray-700 font-sans transition-colors duration-200"
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.span>
                <h3 className="text-xl font-semibold text-white group-hover:text-brand transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
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
        className="py-24 relative overflow-hidden bg-gray-100"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(249,115,22,0.04),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative max-w-[84vw] px-6 mx-auto">
          <div className="relative bg-white shadow-xl shadow-gray-200/60 border border-gray-200/60 rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

            <div className="relative">
              <p className="text-sm font-mono text-brand/70 uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse" />
                READY TO TRANSFORM YOUR INDUSTRY?
                <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse delay-75" />
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                <span className="text-gray-900">Free industry audit.</span>
                <br />
                <span className="text-brand relative inline-block">
                  Custom to your business.
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
                </span>
              </h2>

              <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed mb-10">
                In 30 minutes we'll map your biggest industry-specific bottlenecks and show you what automation would look like for your business.
              </p>

              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-brand hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold text-base transition-all shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-[1.02]"
              >
                <span>Book your free audit</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}