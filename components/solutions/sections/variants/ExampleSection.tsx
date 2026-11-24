// components/solutions/sections/variants/ExampleSection.tsx
'use client';

import { motion } from 'framer-motion';
import { toLines } from './parseCopy';
import { RichText } from './RichText';

import { Play, Clock, CheckCircle2, BrainCircuit, Zap } from 'lucide-react';

interface ExampleSectionProps {
  title: string;
  content: string[];
}

export function ExampleSection({ title, content }: ExampleSectionProps) {
  const paragraphs = toLines(content).filter(
    (line): line is string => typeof line === 'string' && line.trim().length > 0
  );

  const steps = [
    { icon: Play, label: 'Trigger', desc: 'Client uploads documents', time: '0s', color: 'from-brand/20 to-orange-400/20' },
    { icon: Clock, label: 'Process', desc: 'Extract & categorize data', time: '2s', color: 'from-brand/20 to-orange-400/20' },
    { icon: CheckCircle2, label: 'Complete', desc: 'Update status & notify', time: '4s', color: 'from-brand/20 to-orange-400/20' },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gray-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-orange-400/5 to-transparent" />
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
              See It In Action
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
                  className="text-base md:text-lg text-gray-600 leading-relaxed"
                >
                  <RichText text={paragraph} />
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right Visual - Professional Workflow Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-medium text-gray-400 ml-2">workflow-example.ts</span>
                <div className="ml-auto flex items-center gap-1">
                  <BrainCircuit className="h-3 w-3 text-brand" />
                  <span className="text-xs font-medium text-brand">AI Powered</span>
                </div>
              </div>

              <div className="space-y-3">
                {steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.3 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-4 w-4 text-brand" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{step.label}</div>
                      <div className="text-xs text-gray-500">{step.desc}</div>
                    </div>
                    <div className="text-xs font-mono text-gray-400">{step.time}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-brand" />
                  <span className="text-xs font-medium text-gray-600">Completed in 4.2s</span>
                </div>
                <span className="text-xs text-emerald-500 font-medium">✓ Success</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ExampleSection;