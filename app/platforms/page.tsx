'use client';

import Link from 'next/link';
import { HubJsonLd } from '@/components/seo/HubJsonLd';
import { hubSeo } from '@/lib/hub-seo';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Workflow, GitBranch, Mail, Rocket, Database, Cloud, Sparkles, Cpu, Layers, GitMerge, Server, Globe, Shield, BarChart3, Users, Settings, Code, RefreshCw } from 'lucide-react';

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

const stats = [
  { value: '8', label: 'Platforms supported' },
  { value: '500+', label: 'Integrations built' },
  { value: '10K+', label: 'Automations deployed' },
  { value: '99.9%', label: 'Uptime achieved' },
];

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'All automations built with enterprise-grade security, encryption, and compliance standards.',
  },
  {
    icon: Server,
    title: '99.9% Uptime',
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
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <HubJsonLd hub={hubSeo.platforms} />
      {/* ── HERO ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(249,115,22,0.15),transparent_70%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(249,115,22,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>

        <div className="relative max-w-[84vw] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* ── LEFT COLUMN: Text ── */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-orange-800/60 bg-orange-950/30 backdrop-blur-sm"
              >
                <motion.span 
                  className="w-1.5 h-1.5 rounded-full bg-brand"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="eyebrow text-brand text-[11px]">Platforms</span>
              </motion.div>

              <motion.h1 
                className="display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[0.95]"
                variants={fadeUp}
              >
                Connect your<br />
                <span className="text-brand">
                  entire stack.
                </span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10"
                variants={fadeUp}
              >
                We build automations across your existing platforms—no rip and replace. Connect your favorite tools and watch your workflows run themselves.
              </motion.p>
              <motion.div 
                className="flex flex-wrap items-center gap-4"
                variants={fadeUp}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 bg-brand hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-lg shadow-brand/30 hover:shadow-orange-500/50 hover:scale-[1.02]"
                >
                  <span>Connect your stack</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <motion.span 
                    className="absolute inset-0 rounded-full bg-white/10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN: Animated Grid ── */}
            <motion.div
              variants={fadeUp}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {platforms.slice(0, 4).map((platform, i) => {
                  const Icon = platform.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      whileHover={{ 
                        y: -8,
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:border-brand/40 group cursor-default"
                    >
                      <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-brand" />
                      </div>
                      <p className="text-xs font-semibold text-white">{platform.title}</p>
                    </motion.div>
                  );
                })}
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
        className="border-y border-gray-100 bg-gradient-to-r from-gray-50 to-white"
      >
        <div className="max-w-[84vw] px-6 mx-auto py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                custom={i} 
                className="flex flex-col items-center gap-1 relative"
                whileHover={{ y: -4 }}
              >
                <motion.span 
                  className="text-4xl font-bold text-brand font-sans"
                  whileHover={{ scale: 1.1 }}
                >
                  {s.value}
                </motion.span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── PLATFORMS GRID ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="py-24 bg-white relative"
      >
        <div className="max-w-[84vw] px-6 mx-auto">
          <motion.div variants={fadeUp} className="mb-14 text-center">
            <motion.p 
              className="eyebrow text-brand text-[11px] mb-3"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Our Platform Expertise
            </motion.p>
            <h2 className="display text-4xl md:text-5xl text-gray-900">
              We speak your <br className="md:hidden" />
              <span className="text-brand">platform&apos;s language.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
              Deep expertise across the most powerful automation and CRM platforms in the market.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, i) => {
              const Icon = platform.icon;
              return (
                <motion.div 
                  key={i} 
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative flex flex-col p-8 border border-gray-200 rounded-2xl hover:border-brand/40 hover:shadow-xl hover:shadow-orange-50/50 transition-all duration-300 bg-white overflow-hidden h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Badge */}
                    {platform.badge && (
                      <motion.div 
                        className="absolute top-4 right-4 z-10"
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 12 }}
                      >
                        <span className="text-[10px] font-bold bg-brand text-white px-3 py-1 rounded-full">
                          {platform.badge}
                        </span>
                      </motion.div>
                    )}

                    <div className="relative">
                      <motion.div 
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand/20 to-brand/10 border border-brand/20 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:border-brand transition-all duration-300"
                        whileHover={{ rotate: -8, scale: 1.1 }}
                      >
                        <Icon className="h-7 w-7 text-brand group-hover:text-white transition-colors" />
                      </motion.div>

                      <motion.h3 
                        className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        {platform.title}
                      </motion.h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                        {platform.description}
                      </p>

                      <ul className="space-y-2">
                        {platform.capabilities.map((cap, j) => (
                          <motion.li 
                            key={j} 
                            className="flex items-center gap-2 text-xs text-gray-600"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + j * 0.1 }}
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-brand flex-shrink-0" />
                            {cap}
                          </motion.li>
                        ))}
                      </ul>
                      {platformPaths[platform.slug] ? (
                        <Link
                          href={platformPaths[platform.slug]}
                          className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand"
                        >
                          View {platform.title} automation
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── FEATURES ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(249,115,22,0.03),transparent)]" />
        <div className="relative max-w-[84vw] px-6 mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="eyebrow text-brand text-[11px] mb-3">Why Choose Us</p>
            <h2 className="display text-4xl md:text-5xl text-gray-900">
              Built for <span className="text-brand">production</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
              Every automation we build is designed for real-world reliability, scale, and easy maintenance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-brand/40 hover:shadow-xl hover:shadow-orange-50/30 transition-all duration-300"
                >
                  <motion.div 
                    className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-brand/20 to-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: 8 }}
                  >
                    <Icon className="h-6 w-6 text-brand group-hover:text-white transition-colors" />
                  </motion.div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── TESTIMONIALS ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="py-24 bg-white relative"
      >
        <div className="max-w-[84vw] px-6 mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="eyebrow text-brand text-[11px] mb-3">Testimonials</p>
            <h2 className="display text-4xl md:text-5xl text-gray-900">
              Trusted by <span className="text-brand">teams</span> like yours
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ 
                  y: -4,
                  boxShadow: '0 20px 60px rgba(249,115,22,0.1)',
                  transition: { duration: 0.2 }
                }}
                className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:border-brand/30 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-xs font-medium text-brand bg-brand/10 px-3 py-1 rounded-full">
                    {testimonial.platform}
                  </span>
                </div>
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl text-brand/20 font-serif mb-3"
                  >
                    &quot;
                  </motion.div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
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
        className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(249,115,22,0.08),transparent)]" />
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30`} />

        <div className="relative max-w-[84vw] px-6 mx-auto">
          <motion.div 
            className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center"
            whileHover={{ borderColor: 'rgba(249,115,22,0.3)' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-brand/20 text-6xl mb-4"
              >
                <Cpu className="h-16 w-16 mx-auto" />
              </motion.div>

              <motion.p 
                className="text-sm font-mono text-brand/70 uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-3"
                animate={{ letterSpacing: ['0.2em', '0.3em', '0.2em'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse" />
                READY TO CONNECT YOUR STACK?
                <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse delay-75" />
              </motion.p>

              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white"
                variants={fadeUp}
              >
                Let&apos;s build your <br />
                <span className="text-brand">
                  automation stack.
                </span>
              </motion.h2>

              <motion.p 
                className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed mb-10"
                variants={fadeUp}
              >
                We&apos;ll map your current platforms, identify integration opportunities, and design a workflow that runs itself.
              </motion.p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 bg-brand hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold text-base transition-all shadow-lg shadow-brand/30 hover:shadow-brand/50"
                >
                  <span>Start your integration</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <motion.span 
                    className="absolute inset-0 rounded-full bg-white/10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}