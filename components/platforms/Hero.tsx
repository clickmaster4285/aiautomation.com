'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import type { Section } from '@/content/type';

interface HeroProps {
  section: Section;
  form?: {
    fields: Array<{ name: string; type: string; placeholder: string; required?: boolean }>;
    submitText?: string;
    onSubmit?: (data: any) => void;
  };
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero({ section, form }: HeroProps) {
  const heading = section.heading || '';
  const subheading = section.subheading || '';
  const stats = section.stats || [];
  const ctas = section.ctas || [];
  const primaryCta = ctas.find((c) => c.primary) || ctas[0];
  const secondaryCtas = ctas.filter((c) => !c.primary);
  const words = heading.split(' ');

  // ── Form state ──────────────────────────────────────────────────────────────
  const defaultFields = [
    { name: 'name',    type: 'text',     placeholder: 'Your full name',          required: true },
    { name: 'email',   type: 'email',    placeholder: 'your@email.com',          required: true },
    { name: 'message', type: 'textarea', placeholder: 'What do you want to automate?', required: true },
  ];

  const activeFields = form?.fields ?? defaultFields;
  const initialState = Object.fromEntries(activeFields.map((f) => [f.name, '']));
  const [formData, setFormData]       = useState<Record<string, string>>(initialState);
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  const handleSubmit = () => {
    if (form?.onSubmit) form.onSubmit(formData);
    setHeroSubmitted(true);
    setTimeout(() => {
      setHeroSubmitted(false);
      setFormData(initialState);
    }, 3000);
  };

  // Optional line-break before "for"
  const forIndex = words.findIndex((w) => w.toLowerCase() === 'for');

  return (
    <section className="relative min-h-[50vh] flex items-center py-4 md:py-8 bg-black">
      {/* ── Background decorations ── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-[84vw] px-6 pt-12 pb-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">

          {/* ── LEFT: Text ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div
              variants={wordVariants}
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm text-brand backdrop-blur-sm mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span>AI Automation</span>
              <span className="h-1 w-1 rounded-full bg-brand" />
              <span className="text-brand/70 animate-pulse">INDUSTRIES</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={wordVariants}
              className="display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white"
            >
              {words.map((word, i) => {
                const isLower   = word[0] === word[0].toLowerCase() && /[a-z]/.test(word[0]);
                const isAccent  =
                  word.toLowerCase().includes('automation') ||
                  word.toLowerCase().includes('ai') ||
                  word.toLowerCase().includes('future');

                if (i === forIndex) {
                  return (
                    <span key={`group-${i}`}>
                      <span className={isLower ? 'display-italic font-normal' : `font-black ${isAccent ? 'text-brand' : 'text-white'}`}>
                        {word}
                      </span>
                      <br />
                    </span>
                  );
                }

                return (
                  <span
                    key={i}
                    className={isLower ? 'display-italic font-normal' : `font-black ${isAccent ? 'text-brand' : 'text-white'}`}
                  >
                    {word}{' '}
                  </span>
                );
              })}
            </motion.h1>

            {/* Subheading */}
            {subheading && (
              <motion.p
                variants={wordVariants}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl text-justify"
              >
                {subheading}
              </motion.p>
            )}

            {/* Stats + CTAs */}
            <motion.div
              variants={wordVariants}
              className="flex flex-wrap items-center gap-6 mt-8"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <span className="text-2xl md:text-3xl font-black text-white leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[9px] tracking-widest uppercase text-gray-400 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}

              {primaryCta && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-brand hover:bg-brand-dark text-white px-6 py-5 text-sm rounded-xl font-medium shadow-lg shadow-brand/30 transition-all"
                  >
                    {primaryCta.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}

              {secondaryCtas.map((cta, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-1.5 text-white font-semibold text-base hover:text-brand transition-colors"
                >
                  {cta.text}
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Form (no white borders) ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full relative"
          >
            {/* Brand glow */}
            <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-3xl opacity-70" />
            <div className="absolute -inset-2 bg-brand/10 blur-2xl rounded-3xl" />

            {/* Container: border-brand/10 instead of white */}
            <div className="relative p-6 md:p-8 rounded-2xl border border-brand/10 bg-transparent backdrop-blur-sm shadow-xl">
              <p className="text-2xl font-bold text-white mb-1">Quick Message</p>
              <p className="text-gray-300 text-sm mb-6">We'll reply within a few hours.</p>

              <div className="space-y-4">
                {activeFields.map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-sm text-gray-200 mb-1 font-medium">
                      {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        value={formData[field.name] ?? ''}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        placeholder={field.placeholder}
                        required={field.required}
                        rows={3}
                        className="w-full bg-white/10 border border-brand/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition-all duration-200 resize-none text-sm"
                      />
                    ) : (
                      <input
                        type={field.type}
                        value={formData[field.name] ?? ''}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full bg-white/10 border border-brand/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition-all duration-200 text-sm"
                      />
                    )}
                  </div>
                ))}

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative group">
                  <div className="absolute inset-0 bg-brand/20 blur-xl rounded-xl group-hover:blur-2xl transition-all" />
                  <Button
                    size="lg"
                    onClick={handleSubmit}
                    className="relative w-full bg-brand hover:bg-brand-dark text-white py-6 text-base rounded-xl font-medium shadow-lg shadow-brand/30 transition-all"
                  >
                    {heroSubmitted ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" /> Sent!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </motion.div>

                <p className="text-xs text-gray-400 text-center">
                  We never share your data. Your details are used only to respond to your enquiry.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}