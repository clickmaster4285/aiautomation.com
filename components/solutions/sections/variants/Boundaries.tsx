// components/solutions/sections/variants/BoundariesSection.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { splitBoundaries } from './parseCopy';

interface BoundariesSectionProps {
  title: string;
  content: string[];
}

export function BoundariesSection({ title, content }: BoundariesSectionProps) {
  const paragraphs = (content || []).filter(
    (line): line is string => typeof line === 'string' && line.trim().length > 0
  );
  
  const split = splitBoundaries(paragraphs);
  const whatIsItems = split.is.length > 0 ? split.is : paragraphs.slice(0, 1);
  const whatIsNotItems = split.isNot;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
    hover: {
      y: -6,
      scale: 1.01,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 20,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-400/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="mx-auto max-w-[84vw] px-6 relative">
        {/* Header - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            <span className="w-8 h-px bg-brand" />
            Clear Boundaries
          </div>
          <h2 className="display text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]">
            {title}
          </h2>
        </motion.div>

        {/* Cards Grid - Full width with equal cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-8 w-full"
        >
          {/* What It Is - Left card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="relative p-8 rounded-2xl bg-gradient-to-br from-brand/10 to-brand/5 border border-brand/20 hover:border-brand/40 transition-all duration-300 w-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-white">What It Is</h3>
            </div>
            
            <motion.ul 
              variants={containerVariants}
              className="space-y-4"
            >
              {whatIsItems.map((item, idx) => {
                const cleanItem = item.replace(/\*\*/g, '').trim();
                return (
                  <motion.li
                    key={idx}
                    custom={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center group-hover:bg-brand/30 transition-colors duration-300">
                        <CheckCircle2 className="h-3 w-3 text-brand" />
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {cleanItem}
                    </p>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>

          {/* What It Isn't - Right card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-gray-500 transition-all duration-300 w-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                <XCircle className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-white">What It Is Not</h3>
            </div>
            
            <motion.ul 
              variants={containerVariants}
              className="space-y-4"
            >
              {whatIsNotItems.map((item, idx) => {
                const cleanItem = item.replace(/\*\*/g, '').trim();
                return (
                  <motion.li
                    key={idx}
                    custom={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300">
                        <XCircle className="h-3 w-3 text-gray-400" />
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {cleanItem}
                    </p>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent"
        />
      </div>
    </section>
  );
}

export default BoundariesSection;