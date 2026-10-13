'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Phone, MessageCircle } from 'lucide-react';
import { Section } from '@/content/type';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';

interface FAQSecProps {
  section: Section;
}

export default function FAQSec({ section }: FAQSecProps) {
  const faqItems = section.items || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 border-t border-border bg-background">
      <div className="mx-auto max-w-[92vw] sm:max-w-[84vw] px-4 sm:px-6">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-14 lg:gap-20 items-start">

          {/* ── LEFT: Sticky heading + mascot + CTA ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="md:sticky md:top-28 w-full"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-brand" />
              <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase">
                FAQ
              </span>
            </div>

            {section.heading && (
              <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                {section.heading}
              </h2>
            )}

            <p className="mt-5 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-sm">
              Still curious? Book a free discovery call and we&apos;ll answer
              everything specific to your business.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-foreground hover:bg-brand text-background font-medium px-6 py-3 rounded-lg transition-all duration-200 text-sm"
              >
                <Phone className="w-4 h-4" />
                Book a Call
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border hover:border-brand/40 text-foreground font-medium px-6 py-3 rounded-lg transition-all duration-200 text-sm"
              >
                <MessageCircle className="w-4 h-4 text-brand" />
                Chat with us
              </a>
            </div>

            <Image
              src="/images/robot-mascot2.png"
              alt=""
              width={640}
              height={640}
              className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 mt-8 md:mt-10 float-y select-none"
              priority={false}
            />
          </motion.div>

          {/* ── RIGHT: FAQ List ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-3 sm:space-y-4 w-full"
          >
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`group rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-brand/40'
                      : 'border-border hover:border-brand/30'
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none"
                  >
                    <span
                      className={`font-semibold text-sm sm:text-base transition-colors leading-snug ${
                        isOpen
                          ? 'text-brand'
                          : 'text-foreground group-hover:text-brand'
                      }`}
                    >
                      {item.title}
                    </span>

                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-brand text-white'
                          : 'bg-muted text-muted-foreground group-hover:bg-brand/10 group-hover:text-brand'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}