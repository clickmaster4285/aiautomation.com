'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PHONES, SALES_EMAIL } from '@/lib/site-contact';
import {
  ArrowRight,
  Mail,
  Phone,
  Calendar,
  BrainCircuit,
  Clock,
  CheckCircle,
  Rocket,
  Cpu,
  Zap,
  Bot,
  TrendingUp,
} from 'lucide-react';

type ContactPageProps = {
  /** H1: plain lead words, then the accented words. Defaults to the /contact heading. */
  heading?: { lead: string; accent: string };
  intro?: string;
};

export default function ContactPage({
  heading = { lead: "Let's talk", accent: 'automation.' },
  intro = "Whether you're ready to automate something specific or just want to know if it's worth it we're easy to reach and we'll give you a straight answer either way.",
}: ContactPageProps) {
  // State for the main (middle) form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate required fields
      if (!formData.name.trim()) {
        alert('❌ Please enter your name.');
        setIsSubmitting(false);
        return;
      }
      if (!formData.email.trim()) {
        alert('❌ Please enter your email address.');
        setIsSubmitting(false);
        return;
      }
      if (!formData.phone.trim()) {
        alert('❌ Please enter your phone number.');
        setIsSubmitting(false);
        return;
      }
      if (!formData.message.trim()) {
        alert('❌ Please enter your message.');
        setIsSubmitting(false);
        return;
      }

      const formDataObj = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        website: 'clickmastersaiautomation.com',
        service: 'Automation', // Changed from 'AI Automation' to match API expectations
        landingPage: window.location.href,
        referrer: document.referrer || '',
        utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
        utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || '',
        utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
        utm_term: new URLSearchParams(window.location.search).get('utm_term') || '',
        utm_content: new URLSearchParams(window.location.search).get('utm_content') || '',
      };

      console.log('📤 Sending to CRM:', formDataObj);

      const res = await fetch('https://crm.clickmasters.pk/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDataObj),
      });

      // Get response text first
      const responseText = await res.text();
      console.log('📥 Raw Response:', responseText);

      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch (e) {
        console.error('Failed to parse response:', e);
        throw new Error('Invalid response from server');
      }

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', phone: '', message: '' });
        alert('✅ Thank you! We will contact you shortly.');
      } else {
        // Handle validation errors properly
        if (responseData.details) {
          let errorMessage = '❌ Validation failed:\n';
          
          // Check if details is an object with field errors
          if (typeof responseData.details === 'object') {
            // Loop through each field and its errors
            for (const [field, errors] of Object.entries(responseData.details)) {
              if (Array.isArray(errors)) {
                errorMessage += `\n${field}: ${errors.join(', ')}`;
              } else if (typeof errors === 'string') {
                errorMessage += `\n${field}: ${errors}`;
              } else if (typeof errors === 'object') {
                // If errors is an object with message property
                errorMessage += `\n${field}: ${JSON.stringify(errors)}`;
              }
            }
          } else if (typeof responseData.details === 'string') {
            errorMessage += `\n${responseData.details}`;
          } else {
            errorMessage += `\n${JSON.stringify(responseData.details)}`;
          }
          
          alert(errorMessage);
        } else if (responseData.error) {
          alert(`❌ Error: ${responseData.error}`);
        } else if (responseData.message) {
          alert(`❌ Error: ${responseData.message}`);
        } else {
          alert('❌ Submission failed. Please try again.');
        }
      }
    } catch (err) {
      console.error('Lead submission failed:', err);
      alert('❌ Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-paper text-ink overflow-hidden">
      {/* ====== HERO – BLACK with ANIMATED GRAPHICS ====== */}
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-paper py-12 md:py-16">
        {/* Background decorations */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />

        <div className="relative mx-auto w-full max-w-[84vw] px-6">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex max-w-3xl flex-col justify-center"
            >
              <motion.div
                variants={fadeInUp}
                className="eyebrow mb-5 inline-flex items-center gap-2 self-start border border-brand px-3 py-1 text-xs text-brand md:mb-7 md:text-sm"
              >
                <BrainCircuit className="h-3 w-3 md:h-4 md:w-4" />
                <span>Get in touch</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="display mb-5 text-4xl leading-[1.05] sm:text-5xl md:mb-7 md:text-6xl lg:text-7xl"
              >
                {heading.lead}{' '}
                <span className="display-italic text-brand">{heading.accent}</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
              >
                {intro}
              </motion.p>
              
              {/* Added CRM notice */}
              <motion.div
                variants={fadeInUp}
                className="mt-6 border-l-2 border-brand py-1 pl-4"
              >
                <p className="text-sm text-muted-foreground">
                  Every enquiry is saved straight to our CRM, so nothing gets lost.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Animated Graphical Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-[4/3] w-full max-h-[500px] items-center justify-center"
            >
              <Image
                src="/images/hero.jpg"
                alt="Humanoid AI robot representing Clickmasters automation services"
                width={800}
                height={800}
                preload
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={60}
                className="relative z-10 h-full w-full object-contain"
              />
              {/* Central glowing orb */}
              <motion.div
                className="hidden"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Floating icons container */}
              <div className="hidden">
                {/* Icon 1 - Rocket (top) */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="p-4 bg-brand/10 backdrop-blur-sm rounded-2xl border border-brand/30 shadow-lg shadow-brand/20">
                    <Rocket className="w-10 h-10 md:w-14 md:h-14 text-brand" />
                  </div>
                </motion.div>

                {/* Icon 2 - Cpu (right) */}
                <motion.div
                  className="absolute top-1/4 right-0"
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                >
                  <div className="p-4 bg-brand/10 backdrop-blur-sm rounded-2xl border border-brand/30 shadow-lg shadow-brand/20">
                    <Cpu className="w-10 h-10 md:w-14 md:h-14 text-brand" />
                  </div>
                </motion.div>

                {/* Icon 3 - Bot (bottom right) */}
                <motion.div
                  className="absolute bottom-1/4 right-1/4"
                  animate={{
                    x: [0, -15, 0],
                    y: [0, 15, 0],
                    rotate: [0, -8, 8, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                >
                  <div className="p-4 bg-brand/10 backdrop-blur-sm rounded-2xl border border-brand/30 shadow-lg shadow-brand/20">
                    <Bot className="w-10 h-10 md:w-14 md:h-14 text-brand" />
                  </div>
                </motion.div>

                {/* Icon 4 - Zap (left) */}
                <motion.div
                  className="absolute top-1/3 left-0"
                  animate={{
                    x: [0, 15, 0],
                    y: [0, -15, 0],
                    rotate: [0, -12, 12, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.3,
                  }}
                >
                  <div className="p-4 bg-brand/10 backdrop-blur-sm rounded-2xl border border-brand/30 shadow-lg shadow-brand/20">
                    <Zap className="w-10 h-10 md:w-14 md:h-14 text-brand" />
                  </div>
                </motion.div>

                {/* Icon 5 - TrendingUp (bottom left) */}
                <motion.div
                  className="absolute bottom-0 left-1/4"
                  animate={{
                    x: [0, -10, 0],
                    y: [0, -20, 0],
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.8,
                  }}
                >
                  <div className="p-4 bg-brand/10 backdrop-blur-sm rounded-2xl border border-brand/30 shadow-lg shadow-brand/20">
                    <TrendingUp className="w-10 h-10 md:w-14 md:h-14 text-brand" />
                  </div>
                </motion.div>

                {/* Orbiting particle rings */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand/40 blur-sm" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand/40 blur-sm" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand/40 blur-sm" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand/40 blur-sm" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
                    <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand/30 blur-[1px]" />
                    <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand/30 blur-[1px]" />
                    <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand/30 blur-[1px]" />
                    <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand/30 blur-[1px]" />
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-brand/20 blur-[1px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-brand/20 blur-[1px]" />
                    <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-brand/20 blur-[1px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-brand/20 blur-[1px]" />
                  </div>
                </motion.div>

                {/* Central pulse ring */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full border-2 border-brand/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border border-brand/10"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== MIDDLE SECTION – WHITE ====== */}
      <section className="relative bg-paper py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[84vw] px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-20">

            {/* LEFT – Audit Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="space-y-6 md:space-y-8"
            >
              <motion.div
                variants={fadeInUp}
                className="relative border border-border bg-paper p-6 transition-colors duration-300 hover:border-brand sm:p-8"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand/5 blur-2xl rounded-full" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center border border-brand/20 bg-brand/10 sm:h-10 sm:w-10">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-brand" />
                    </div>
                    <span className="eyebrow text-xs text-brand">Fastest Way</span>
                  </div>
                  <h2 className="display mb-3 text-2xl sm:text-3xl">Book a free audit</h2>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    In 30 minutes we&apos;ll map your processes and tell you the highest-ROI place to start no obligation, no sales pitch.
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                    {['30 minutes', 'No obligation', 'Honest advice'].map((tag) => (
                      <span key={tag} className="flex items-center gap-1.5 border border-border px-2.5 py-1.5 text-xs text-muted-foreground sm:px-3">
                        <CheckCircle className="h-3 w-3 text-green-600" /> {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="block sm:inline-block">
                    <Button
                      size="lg"
                      className="h-auto w-full rounded-none bg-ink px-6 py-4 text-sm text-white shadow-none hover:bg-brand sm:w-auto sm:px-8 sm:py-5 sm:text-base"
                    >
                      Book Your Free Audit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <h3 className="eyebrow text-muted-foreground">Other ways to reach us</h3>
                {[
                  { icon: Mail, label: 'Email', value: SALES_EMAIL },
                  ...PHONES.map((phone) => ({
                    icon: Phone,
                    label: phone.label,
                    value: phone.display,
                  })),
                  { icon: Clock, label: 'Response time', value: 'Within a few hours' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 border-b border-border py-4 transition-colors duration-300 hover:border-brand"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-brand/20 bg-brand/10 sm:h-10 sm:w-10">
                      <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand" />
                    </div>
                    <div>
                      <p className="eyebrow mb-0.5 text-[10px] text-muted-foreground">{item.label}</p>
                      <p className="break-all text-sm font-medium text-ink sm:text-base">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="border-l-2 border-brand bg-muted p-5 sm:p-6"
              >
                <h3 className="display mb-2 text-base">What to expect</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  A fast, honest reply and a straight answer on whether automation fits your situation. If we&apos;re not the right fit, we&apos;ll say so.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT – Full Contact Form - Simple HTML-style form with React */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="border border-border bg-paper p-6 sm:p-8 md:p-10"
              >
                <h2 className="display mb-2 text-2xl sm:text-3xl">Send us a message</h2>
                <p className="mb-6 text-sm text-muted-foreground sm:mb-8">
                  We&apos;ll get back to you within a few hours. Every enquiry is saved straight to our CRM.
                </p>

                <form id="leadForm" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    required
                    className="w-full border border-border bg-paper px-4 py-3 text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand sm:py-3.5 text-sm transition-colors"
                  />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    required
                    className="w-full border border-border bg-paper px-4 py-3 text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand sm:py-3.5 text-sm transition-colors"
                  />

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number"
                    required
                    className="w-full border border-border bg-paper px-4 py-3 text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand sm:py-3.5 text-sm transition-colors"
                  />

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full resize-none border border-border bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted-foreground transition-colors focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand sm:py-3.5"
                  />

                  {/* Hidden fields for CRM */}
                  <input type="hidden" id="website" name="website" value="clickmastersaiautomation.com" />
                  <input type="hidden" id="service" name="service" value="Artificial Intelligence" />

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="h-auto w-full rounded-none bg-ink py-4 text-sm text-white shadow-none transition-colors hover:bg-brand sm:py-5 sm:text-base"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                          Sending...
                        </span>
                      ) : submitted ? (
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" /> Message Sent!
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message <ArrowRight className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-center text-xs text-muted-foreground">
                    We never share your data. Your details are used only to respond to your enquiry.
                  </p>
                  
                  <div className="mt-2 flex items-center justify-center gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Synced to CRM
                    </span>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== BOTTOM CTA ====== */}
      <section className="border-t border-white/10 bg-ink py-16 text-white md:py-24">
        <div className="mx-auto max-w-[84vw] px-6 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="mx-auto max-w-4xl"
          >
            <motion.p variants={fadeInUp} className="eyebrow mb-5 text-brand">Ready when you are</motion.p>
            <motion.h2
              variants={fadeInUp}
              className="display text-4xl sm:text-5xl md:text-6xl"
            >
              Have a process in mind?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
            >
              Tell us what is slowing your team down. We will give you an honest view of what is worth automating.
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href="#leadForm"
              whileHover={{ x: 4 }}
              className="mt-8 inline-flex items-center gap-2 bg-brand px-7 py-4 text-sm text-white transition-colors hover:bg-white hover:text-ink sm:text-base"
            >
              Send us a message
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}