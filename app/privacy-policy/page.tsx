'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Shield, Lock, Eye, CheckCircle } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* ── HERO ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="relative pt-32 pb-16 overflow-hidden bg-black"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_50%,rgba(249,115,22,0.08),transparent)]" />

        <div className="relative max-w-[84vw] px-6 mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-orange-800/60 bg-orange-950/30"
            >
              <Shield className="h-4 w-4 text-brand" />
              <span className="eyebrow text-brand text-[11px]">Privacy Policy</span>
            </motion.div>

            <motion.h1 
              className="display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]"
              variants={fadeUp}
            >
              Your Privacy <br />
              <span className="text-brand">
                Matters to Us
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              variants={fadeUp}
            >
              We are committed to protecting your personal information and being transparent about how we handle your data.
            </motion.p>
            <motion.p 
              className="text-sm text-gray-500 mt-4"
              variants={fadeUp}
            >
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* ── CONTENT ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="py-16 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed">
                We collect information that you voluntarily provide to us when you:
              </p>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Contact us through our forms or email</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Subscribe to our newsletter</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Request a consultation or quote</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Use our services or interact with our website</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Provide, maintain, and improve our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Communicate with you about your inquiries and requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Send you marketing communications (with your consent)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Monitor and analyze usage patterns to improve user experience</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">With service providers who assist us in operating our website</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">When required by law or to protect our rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">With your explicit consent</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include:
              </p>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">SSL encryption for data transmission</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Regular security assessments and monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Access controls to limit data exposure</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to:
              </p>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Access the personal information we hold about you</span>
                </li>
                <li className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Request correction of inaccurate data</span>
                </li>
                <li className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Request deletion of your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Opt-out of marketing communications</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-gray-700">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:sales@clickmastersaiautomation.com" className="text-brand hover:underline">
                    sales@clickmastersaiautomation.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="py-16 bg-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(249,115,22,0.04),transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have Questions About Your Privacy?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We're here to help. Contact us for any questions about how we handle your data.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-[1.02]"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}