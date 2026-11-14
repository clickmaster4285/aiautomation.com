// components/sections/FAQSection.tsx
'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MessageCircle, ArrowRight, Clock, Mail } from 'lucide-react';
import { Section, SectionHeading } from '@/components/solutions/layout/Section';
import { SALES_EMAIL } from '@/lib/site-contact';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  faqs: FAQ[];
}

export function FAQSection({ title, subtitle, eyebrow = 'FAQ', faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start center', 'end center'],
  });
  const railProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section bg="muted" pattern="blob">
      <SectionHeading title={title} subtitle={subtitle} eyebrow={eyebrow} />

      {/* soft edge glows so the widened layout doesn't feel empty at the far sides */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-72 bg-[radial-gradient(circle_at_left,theme(colors.brand/8%),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-72 bg-[radial-gradient(circle_at_right,theme(colors.brand/8%),transparent_70%)]" />

      <div ref={wrapRef} className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[180px_minmax(0,48rem)_300px] gap-8 xl:gap-12 items-start">
        {/* ── Left railscroll progress indicator ── */}
        <div className="hidden lg:flex flex-col items-center sticky top-32 self-start h-[440px]">
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6 whitespace-nowrap"
            style={{ writingMode: 'vertical-rl' }}
          >
            Frequently asked
          </span>
          <div className="relative w-px flex-1 bg-border">
            <motion.div
              className="absolute inset-x-0 top-0 w-px origin-top bg-brand"
              style={{ scaleY: railProgress, height: '100%' }}
            />
            <motion.div
              className="absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-brand shadow-[0_0_0_4px_theme(colors.brand/15%)]"
              style={{ top: useTransform(railProgress, (v) => `${v * 100}%`) }}
            />
          </div>
          <span className="mt-6 text-[11px] font-medium text-muted-foreground tabular-nums">
            {String(faqs.length).padStart(2, '0')} topics
          </span>
        </div>

        {/* ── FAQ list ── */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className={`rounded-2xl border overflow-hidden shadow-sm transition-colors duration-300 ${
                  isOpen ? 'bg-paper border-brand/40' : 'bg-paper border-border'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="flex items-center gap-3 text-ink font-medium">
                    <span className={`eyebrow transition-colors ${isOpen ? 'text-brand' : 'text-muted-foreground'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pl-[3.25rem] text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── Right railstill-need-help contact card (WIDTH INCREASED) ── */}
        <div className="hidden lg:block sticky top-32 self-start">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-paper shadow-sm"
          >
            {/* ✅ Increased horizontal padding from p-6 to px-6 py-8 */}
            <div className="px-6 py-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 mb-4">
                <MessageCircle className="h-5 w-5 text-brand" />
              </div>

              <h4 className="font-semibold text-ink mb-1.5">Still have questions?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Can&apos;t find what you&apos;re looking for. Our team is happy to walk you through it.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="mt-6 pt-5 border-t border-border space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>Avg. response time under 2 hours</span>
                </div>
                {/* ✅ Email with proper wrapping and no overflow */}
                <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                  <Mail className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                  <span className="break-all leading-relaxed">{SALES_EMAIL}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}