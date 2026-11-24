// components/sections/RelatedSolutions.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/solutions/layout/Section';

interface RelatedSolution {
  title: string;
  slug: string;
  description: string;
}

interface RelatedSolutionsProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  solutions: RelatedSolution[];
}

export function RelatedSolutions({
  title,
  subtitle,
  eyebrow = 'Explore more',
  solutions,
}: RelatedSolutionsProps) {
  return (
    <Section bg="muted" pattern="grid">
      <SectionHeading title={title} subtitle={subtitle} eyebrow={eyebrow} />

      <motion.div
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            {/* The title is the link (descriptive anchor text); an ::after overlay keeps the whole card clickable. */}
            <div className="group relative block p-6 h-full bg-paper rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-brand/40 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-brand/0 group-hover:bg-brand/10 transition-colors duration-500" />
              <h3 className="font-serif text-lg font-bold text-ink group-hover:text-brand transition-colors mb-2">
                <Link href={`/solutions/${solution.slug}`} className="after:absolute after:inset-0 after:z-10 after:content-['']">
                  {solution.title}
                </Link>
              </h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed">
                {solution.description}
              </p>
              <span aria-hidden="true" className="relative inline-flex items-center gap-2 mt-4 text-brand font-medium text-sm">
                Learn more
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}