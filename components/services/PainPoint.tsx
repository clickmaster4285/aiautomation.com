'use client';

import { motion } from 'framer-motion';
import { Section, SectionItem } from '@/content/type';
import { Clock, DollarSign, TrendingDown } from 'lucide-react';

interface PainPointSecProps {
  section: Section;
}

export default function PainPointSec({ section }: PainPointSecProps) {
  const items = section?.items || [];

  const stats = items
    .filter((item): item is SectionItem & { value: string } => typeof item.value === 'string' && item.value.trim().length > 0)
    .slice(0, 2)
    .map((item) => ({
      label: item.title || '',
      value: item.value,
      icon: item.icon === 'Clock' ? Clock : DollarSign,
    }))
    .filter((item) => {
      const match = item.value.match(/\d+(?:\.\d+)?/);
      return !match || Number(match[0]) > 0;
    });

  const problems = items.slice(2).map((item) => item.title).filter((title): title is string => Boolean(title));
  const displayProblems = problems.length > 0 ? problems : ['Manual Tasks', 'Slow Operations'];

  const data = {
    title: section?.heading || 'Stop doing work that AI can do.',
    description: section?.subheading || 'Every hour your team spends on manual, repetitive tasks is an hour not spent on strategy, relationships, and growth.',
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-[92vw] sm:max-w-[84vw] px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Content - Animates on load */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight text-left"
            >
              {data.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 text-left"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-8"
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 tracking-wider uppercase">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              {displayProblems.map((problem: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 sm:px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-300 bg-white/5"
                >
                  {problem}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {stats[0] && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-800/50 p-8 md:p-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-2xl" />
              <div className="relative">
                {stats[0] && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-brand mb-2"
                  >
                    {stats[0].value}
                  </motion.div>
                )}

                {stats[0].label && (
                  <p className="text-lg text-gray-400">{stats[0].label}</p>
                )}

                {stats[1] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-6 flex items-center gap-2 text-sm text-gray-500"
                  >
                    <TrendingDown className="h-4 w-4 text-brand" />
                    {stats[1].label ? <span>{stats[1].label}</span> : null}
                    <span className="text-white font-medium">{stats[1].value}</span>
                  </motion.div>
                )}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-3 right-3 sm:-bottom-4 sm:-right-4 bg-white rounded-xl shadow-2xl px-3 sm:px-4 py-3 border border-gray-200 flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
              <span className="text-sm font-medium text-black">Inefficiency Alert</span>
            </motion.div>
          </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}