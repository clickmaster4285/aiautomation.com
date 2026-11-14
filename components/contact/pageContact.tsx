'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';
import { Button } from '@/components/ui/button';
import { PHONES, SALES_EMAIL } from '@/lib/site-contact';
import {
  ArrowRight,
  Mail,
  Phone,
  Calendar,
  Sparkles,
  Clock,
  CheckCircle,
  Rocket,
  Cpu,
  Zap,
  Bot,
  TrendingUp,
} from 'lucide-react';

export default function ContactPage() {
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
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* ====== HERO – BLACK with ANIMATED GRAPHICS ====== */}
      <section className="relative min-h-[50vh] flex items-center py-8 md:py-12 lg:py-16 bg-black">
        {/* Background decorations */}
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
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.05),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative mx-auto max-w-[84vw] px-6 pt-12 pb-8 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col justify-center"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-brand backdrop-blur-sm mb-4 md:mb-6"
              >
                <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                <span>Get In Touch</span>
                <span className="h-1 w-1 rounded-full bg-brand" />
                <span className="text-brand/70 animate-pulse">WE REPLY FAST</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4 md:mb-6 text-white"
              >
                Let's talk{' '}
                <span className="display-italic text-brand">automation.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl text-justify"
              >
                Whether you're ready to automate something specific or just want to know if it's worth it we're easy to reach and we'll give you a straight answer either way.
              </motion.p>
              
              {/* Added CRM notice */}
              <motion.div
                variants={fadeInUp}
                className="mt-6 p-4 rounded-xl border border-brand/20 bg-brand/5 backdrop-blur-sm"
              >
                <p className="text-xs text-gray-400">
                  🔄 Every enquiry is saved straight to our CRM, so nothing gets lost.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Animated Graphical Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center"
            >
              {/* Central glowing orb */}
              <motion.div
                className="absolute w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-brand/20 blur-3xl"
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
              <div className="relative w-full h-full">
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
      <section className="relative py-12 md:py-16 lg:py-20 bg-white">
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
                className="relative p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand/5 blur-2xl rounded-full" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-brand" />
                    </div>
                    <span className="text-xs text-brand font-medium tracking-widest uppercase">Fastest Way</span>
                  </div>
                  <h2 className="display text-xl sm:text-2xl font-bold text-gray-900 mb-3">Book a free audit</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-justify text-sm sm:text-base">
                    In 30 minutes we'll map your processes and tell you the highest-ROI place to start no obligation, no sales pitch.
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                    {['30 minutes', 'No obligation', 'Honest advice'].map((tag) => (
                      <span key={tag} className="flex items-center gap-1.5 text-xs text-green-700 bg-green-50 border border-green-200 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full">
                        <CheckCircle className="h-3 w-3 text-green-600" /> {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative group/btn block sm:inline-block">
                    <div className="absolute inset-0 bg-brand/20 blur-xl rounded-full group-hover/btn:blur-2xl transition-all" />
                    <Button
                      size="lg"
                      className="relative bg-brand hover:bg-brand-dark text-white w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 rounded-full font-medium shadow-lg shadow-brand/25 text-sm sm:text-base"
                    >
                      Book Your Free Audit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <h3 className="display text-lg font-semibold text-gray-700">Other ways to reach us</h3>
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
                    className="flex items-center gap-4 p-3 sm:p-4 rounded-xl border border-gray-200 bg-gray-50/80 hover:border-brand transition-all duration-300"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-gray-800 font-medium text-sm sm:text-base break-all">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-gray-50/50"
              >
                <h3 className="display text-base font-semibold mb-2 text-gray-800">What to expect</h3>
                <p className="text-gray-600 leading-relaxed text-sm text-justify">
                  A fast, honest reply and a straight answer on whether automation fits your situation. If we're not the right fit, we'll say so.
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
                className="relative p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="display text-xl sm:text-2xl font-bold mb-1 text-gray-900">Send us a message</h2>
                <p className="text-gray-500 mb-6 sm:mb-8 text-sm text-justify">
                  We'll get back to you within a few hours. Every enquiry is saved straight to our CRM.
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
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 sm:py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-200 text-sm shadow-sm"
                  />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    required
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 sm:py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-200 text-sm shadow-sm"
                  />

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number"
                    required
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 sm:py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-200 text-sm shadow-sm"
                  />

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 sm:py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-200 resize-none text-sm shadow-sm"
                  />

                  {/* Hidden fields for CRM */}
                  <input type="hidden" id="website" name="website" value="clickmastersaiautomation.com" />
                  <input type="hidden" id="service" name="service" value="Artificial Intelligence" />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative group">
                    <div className="absolute inset-0 bg-brand/20 blur-xl rounded-xl group-hover:blur-2xl transition-all" />
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="relative w-full bg-brand hover:bg-brand-dark text-white py-5 sm:py-6 text-sm sm:text-base rounded-xl font-medium shadow-lg shadow-brand/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
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

                  <p className="text-xs text-gray-500 text-center">
                    We never share your data. Your details are used only to respond to your enquiry.
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-400 border-t border-gray-100 pt-4 mt-2">
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

      {/* ====== BOTTOM STATS + CTA – BLACK ====== */}
      <section className="py-12 md:py-16 lg:py-20 border-t border-gray-800 bg-black">
        <div className="mx-auto max-w-[84vw] px-6 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              # WORK.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-3 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center mx-auto"
            >
              Build intelligent AI systems that eliminate repetitive work,
              <br className="hidden sm:block" />
              supercharge your team, and scale without headcount.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-8 lg:gap-x-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-brand hover:bg-brand-dark text-white px-6 py-4 sm:px-8 sm:py-5 md:px-8 md:py-6 text-sm sm:text-base md:text-lg rounded-full shadow-lg shadow-brand/25 transition-all"
              >
                Start Automating
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>

            <span className="hidden sm:inline-block w-px h-8 bg-gray-700" />

            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-1.5 text-white font-semibold text-sm sm:text-base md:text-lg hover:text-brand transition-colors"
            >
              View Work
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}