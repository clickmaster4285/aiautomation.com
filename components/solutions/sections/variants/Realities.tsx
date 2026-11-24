// components/solutions/sections/variants/RealitiesSection.tsx
'use client';

import { motion } from 'framer-motion';
import { toLines } from './parseCopy';
import { RichText } from './RichText';

import { Shield, Database, Users, Lock, CheckCircle2, ArrowRight, BrainCircuit } from 'lucide-react';

interface RealitiesSectionProps {
  title: string;
  content: string[];
}

export function RealitiesSection({ title, content }: RealitiesSectionProps) {
  const paragraphs = toLines(content).filter(
    (line): line is string => typeof line === 'string' && line.trim().length > 0
  );

  const features = [
    { icon: Shield, label: 'Security First', desc: 'Data handled with strict access controls' },
    { icon: Database, label: 'Integrated', desc: 'Connects to your existing tools' },
    { icon: Users, label: 'Human in Control', desc: 'Judgment stays with your people' },
    { icon: Lock, label: 'Compliant', desc: 'Built for industry regulations' },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-orange-50/90 via-white/80 to-gray-50/95">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-300/20 via-orange-200/10 to-transparent" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-orange-400/15 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gray-300/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        {/* Orange glow orbs */}
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-orange-400/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-orange-200/20" />
      </div>

      <div className="mx-auto max-w-[84vw] px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <span className="w-8 h-px bg-brand" />
              Built for Reality
            </div>
            
            <h2 className="display text-3xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-[1.05]">
              {title}
            </h2>

            <div className="space-y-4">
              {paragraphs.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-base md:text-lg text-gray-700 leading-relaxed"
                >
                  <RichText text={paragraph} />
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-3 group-hover:bg-brand/20 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-brand" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">{feature.label}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default RealitiesSection;