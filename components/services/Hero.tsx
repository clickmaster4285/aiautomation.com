'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Send } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { Section } from '@/content/type';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';
import Link from 'next/link';

interface HeroProps {
  section: Section;
}

export default function Hero({ section }: HeroProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const heading = section.heading || 'AI Automation Agency';
  const subheading = section.subheading || '';
  const stats = section.stats || [];
  const ctas = section.ctas || [];

  const words = heading.split(' ');
  const primaryCta = ctas.find(c => c.primary) || ctas[0];
  const secondaryCtas = ctas.filter(c => !c.primary);

  const isChecklistStats = stats.some(
    s => typeof s.value === 'string' && s.value.length > 24
  );

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const highlightWords = ['Automation'];

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormState({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className="relative bg-black">
      <div className="mx-auto max-w-[92vw] sm:max-w-[84vw] px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* ==================== LEFT CONTENT ==================== */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 relative z-10 flex flex-col"
          >
            {/* Eyebrow */}
           

            {/* Heading */}
            <motion.h1 className="display mb-5 text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-white leading-[1.08]">
              {words.map((word, index) => {
                const isHighlighted = highlightWords.some(hw =>
                  word.toLowerCase().includes(hw.toLowerCase())
                );
                return (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block mr-[0.25em] ${
                      isHighlighted ? 'text-brand display-italic' : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </motion.h1>

            {/* Subheading */}
            {subheading && (
              <motion.p
                variants={fadeInUp}
                className="mb-8 text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed font-light"
              >
                {subheading}
              </motion.p>
            )}

            {/* Checklist */}
            {isChecklistStats && (
              <motion.ul
                variants={fadeInUp}
                className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-2xl"
              >
                {stats.map((stat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span className="text-sm text-gray-300 leading-snug">
                      {stat.value}
                    </span>
                  </li>
                ))}
              </motion.ul>
            )}

            {/* Inline stats + CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5 flex-wrap"
            >
              {!isChecklistStats &&
                stats.map((stat, idx) => (
                  <div key={idx} className="flex items-baseline gap-2">
                    <span className="text-xl md:text-2xl font-bold text-brand">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-gray-500 tracking-widest uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}

              {/* Primary CTA */}
              {primaryCta && (
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link href={primaryCta.link || '/contact'}>
                    <Button
                      size="lg"
                      className="bg-brand hover:bg-brand/90 text-white px-6 py-5 text-sm sm:text-base rounded-none transition-all font-medium group h-auto"
                    >
                      {primaryCta.text}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              )}

              {/* Secondary CTAs */}
              {secondaryCtas.map((cta, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href={cta.link || '#'}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="font-medium rounded-none transition-all duration-300 bg-transparent text-white border border-white/20 hover:bg-white hover:text-black hover:border-white h-auto px-6 py-5 text-sm sm:text-base"
                    >
                      {cta.text}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust badge */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex items-center gap-3 text-xs text-gray-500"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-[10px] font-medium text-gray-400"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-gray-500">Trusted by 500+ companies</span>
            </motion.div>
          </motion.div>

          {/* ==================== RIGHT — CONTACT FORM ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full flex"
          >
            <div className="w-full flex flex-col border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Get a Free Consultation
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-2">
                  Tell us about your project. We will respond within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-1 flex-col items-center justify-center py-16 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand mb-4">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Message Sent
                  </h4>
                  <p className="text-sm text-gray-400">
                    We will be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleFormSubmit}
                  className="flex flex-1 flex-col space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="hero-name"
                        className="block text-[10px] font-semibold text-gray-400 mb-2 uppercase tracking-wider"
                      >
                        Name
                      </label>
                      <input
                        id="hero-name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleFormChange}
                        placeholder="John Doe"
                        className="w-full border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand/40 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hero-email"
                        className="block text-[10px] font-semibold text-gray-400 mb-2 uppercase tracking-wider"
                      >
                        Email
                      </label>
                      <input
                        id="hero-email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleFormChange}
                        placeholder="john@company.com"
                        className="w-full border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand/40 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="hero-company"
                      className="block text-[10px] font-semibold text-gray-400 mb-2 uppercase tracking-wider"
                    >
                      Company
                    </label>
                    <input
                      id="hero-company"
                      name="company"
                      type="text"
                      value={formState.company}
                      onChange={handleFormChange}
                      placeholder="Acme Inc."
                      className="w-full border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand/40 transition-all"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label
                      htmlFor="hero-message"
                      className="block text-[10px] font-semibold text-gray-400 mb-2 uppercase tracking-wider"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="hero-message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleFormChange}
                      placeholder="Tell us what you're looking to build..."
                      className="w-full flex-1 min-h-[120px] border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand/40 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand/90 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm px-6 py-3.5 transition-all duration-300 font-medium group"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-3.5 w-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-gray-500">
                    By submitting, you agree to our{' '}
                    <Link href="/privacy" className="text-brand hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}