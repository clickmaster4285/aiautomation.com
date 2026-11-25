'use client';

import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Send, BrainCircuit } from 'lucide-react';
import type { Section } from '@/content/type';
import { splitHeading } from '@/components/landingPage/Shared';

interface HeroProps {
  section: Section;
  bg?: string;
  form?: {
    fields: Array<{ name: string; type: string; placeholder: string; required?: boolean }>;
    submitText?: string;
    onSubmit?: (data: any) => void;
  };
}

const wordVariants: Variants = {
  // Hero-only variants. No opacity: 0 start, so the H1 and intro (the likely LCP element) paint
  // before hydration instead of after it.
  hidden: { y: 60 },
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

export default function Hero({ section, form, bg = 'bg-paper' }: HeroProps) {
  const heading = section.heading || '';
  const subheading = section.subheading || '';
  const ctas = section.ctas || [];
  const primaryCta = ctas.find((c) => c.primary) || ctas[0];
  const secondaryCtas = ctas.filter((c) => !c.primary);
  const { head, tail } = splitHeading(heading, 2);
  const isBlack = bg === 'bg-ink';

  const defaultForm = {
    fields: [
      { name: 'name', type: 'text', placeholder: 'Your full name', required: true },
      { name: 'email', type: 'email', placeholder: 'your@email.com', required: true },
      { name: 'message', type: 'textarea', placeholder: 'What do you want to automate?', required: true },
    ],
    submitText: 'Send Message',
    onSubmit: (data: any) => console.log('Form submitted:', data),
  };

  const activeForm = form || defaultForm;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (activeForm.onSubmit) {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      activeForm.onSubmit(data);
    }
  };

  return (
    <section className={`relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-12 md:py-16 ${bg}`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />

      <div className="relative mx-auto w-full max-w-[84vw] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          
          {/* LEFT: Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="flex flex-col justify-center"
          >
            <motion.div
              variants={wordVariants}
              className="eyebrow mb-5 inline-flex items-center gap-2 border border-brand px-3 py-1 text-xs text-brand md:mb-7 md:text-sm"
            >
              <BrainCircuit className="h-4 w-4" aria-hidden="true" />
              <span>Industry solutions</span>
            </motion.div>

            <motion.h1
              variants={wordVariants}
              className="display mb-5 text-4xl leading-[1.05] sm:text-5xl md:mb-7 md:text-6xl lg:text-7xl"
            >
              {head}{head && ' '}
              <span className="display-italic font-normal text-brand">{tail}</span>
            </motion.h1>

            {subheading && (
              <motion.p
                variants={wordVariants}
                className={`max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl ${isBlack ? 'text-white/70' : 'text-muted-foreground'}`}
              >
                {subheading}
              </motion.p>
            )}

            <motion.div
              variants={wordVariants}
              className="flex flex-wrap items-center gap-6 mt-8"
            >
              {primaryCta && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="h-auto max-w-full whitespace-normal text-center sm:whitespace-nowrap bg-brand hover:bg-brand-dark text-white px-6 py-5 text-sm rounded-xl font-medium shadow-lg shadow-brand/30 transition-all"
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

          {/* RIGHT: Form – no white borders, brand accent */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full relative"
          >
            <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-3xl opacity-70" />
            <div className="absolute -inset-2 bg-brand/10 blur-2xl rounded-3xl" />

            {/* Container: border-brand/10 instead of white */}
            <div className="relative p-6 md:p-8 rounded-2xl border border-brand/10 bg-transparent backdrop-blur-sm shadow-xl">
              <p className="text-2xl font-bold text-white mb-1">Quick Message</p>
              <p className="text-gray-300 text-sm mb-6">We'll reply within a few hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {activeForm.fields.map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-sm text-gray-200 mb-1 font-medium">
                      {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        rows={3}
                        className="w-full bg-white/10 border border-brand/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition-all duration-200 text-sm resize-none"
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
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
                    type="submit"
                    size="lg"
                    className="relative w-full bg-brand hover:bg-brand-dark text-white py-6 text-base rounded-xl font-medium shadow-lg shadow-brand/30 transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      {activeForm.submitText || 'Send Message'}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Button>
                </motion.div>

                <p className="text-xs text-gray-400 text-center">
                  We never share your data. Your details are used only to respond to your enquiry.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}