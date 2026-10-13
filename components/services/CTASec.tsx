'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '@/content/type';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';

export default function CTASec({ section }: { section: Section }) {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 border-t border-border bg-black">
      <div className="mx-auto max-w-[92vw] sm:max-w-[84vw] px-4 sm:px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {section.heading && (
            <motion.h2
              variants={fadeInUp}
              className="display text-3xl sm:text-4xl font-bold md:text-5xl text-white"
            >
              {section.heading}
            </motion.h2>
          )}

          {section.subheading && (
            <motion.p
              variants={fadeInUp}
              className="mt-6 mb-8 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              {section.subheading}
            </motion.p>
          )}

     {section.cta && (
  <motion.div variants={fadeInUp} className="inline-block">
    <Button
      size="lg"
      className="bg-brand hover:bg-brand-dark text-white px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-medium rounded-none transition-colors"
    >
      {section.cta.text}
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </motion.div>
)}
        </motion.div>
      </div>
    </section>
  );
}