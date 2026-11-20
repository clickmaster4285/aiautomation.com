// components/solutions/sections/variants/WhySection.tsx
'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Zap, Shield, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';

interface WhySectionProps {
  title: string;
  content: string[];
  stats?: Array<{ label: string; value: string }>;
}

export function WhySection({ title, content, stats }: WhySectionProps) {
  const paragraphs = (content || []).filter(
    (line): line is string => typeof line === 'string' && line.trim().length > 0
  );

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-orange-50/90 via-white/80 to-gray-50/95">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-300/20 via-orange-200/10 to-transparent" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-orange-400/15 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gray-300/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-[84vw] px-6 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <span className="w-8 h-px bg-brand" />
              Why This Matters
            </div>

            {/* Same heading style as ProblemsSection */}
            <h2 className="display text-3xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-[1.05]">
              {title}
            </h2>

            {/* Same text sizes as ProblemsSection intro text */}
            <div className="space-y-4">
              {paragraphs.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {stats && (
              <div className="mt-8 grid grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-brand mb-1">{stat.value}</div>
                    <div className="text-sm font-semibold text-gray-900">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Bot, label: 'AI Agents', color: 'from-brand/20 to-orange-400/20' },
                { icon: Zap, label: 'Automation', color: 'from-brand/20 to-orange-400/20' },
                { icon: Shield, label: 'Security', color: 'from-brand/20 to-orange-400/20' },
                { icon: BrainCircuit, label: 'Innovation', color: 'from-brand/20 to-orange-400/20' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-6 w-6 text-brand" />
                    </div>
                    {/* Same card title size as ProblemsSection */}
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900">{item.label}</h4>
                    {/* Same card description size as ProblemsSection */}
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed mt-1">AI-powered automation</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-gray-100 shadow-sm">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-gray-600">AI Agent Active</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhySection;