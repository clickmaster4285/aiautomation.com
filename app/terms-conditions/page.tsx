'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Scale, CheckCircle, AlertCircle, Lock, Eye } from 'lucide-react';

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

export default function TermsConditionsPage() {
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
              <Scale className="h-4 w-4 text-brand" />
              <span className="eyebrow text-brand text-[11px]">Terms & Conditions</span>
            </motion.div>

            <motion.h1 
              className="display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]"
              variants={fadeUp}
            >
              Terms and <br />
              <span className="text-brand">
                Conditions
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              variants={fadeUp}
            >
              Please read these terms carefully before using our services or website.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using ClickMasters AI Automation's website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-600 leading-relaxed">
                ClickMasters AI Automation provides AI automation, chatbot development, and business process automation services. We reserve the right to modify, suspend, or discontinue any service at any time without notice.
              </p>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">AI Workflow Automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">AI Chatbot Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Business Process Automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Consulting and Strategy Services</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content, materials, and intellectual property on this website are owned by ClickMasters AI Automation. You may not reproduce, distribute, or create derivative works without our explicit permission.
              </p>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">All code, designs, and content are protected by copyright</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Trademarks and logos are the property of ClickMasters</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Unauthorized use may result in legal action</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Obligations</h2>
              <p className="text-gray-600 leading-relaxed">
                By using our services, you agree to:
              </p>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Provide accurate and complete information</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Use services for lawful purposes only</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Not interfere with or disrupt the services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Respect the intellectual property rights of others</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                ClickMasters AI Automation provides services "as is" without warranties of any kind. We are not liable for any damages arising from the use of our services, including but not limited to:
              </p>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Loss of data or business interruption</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Indirect or consequential damages</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Any unauthorized access to your data</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any reason, including breach of these Terms and Conditions.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms are governed by and construed in accordance with the laws of the United Kingdom, and you submit to the exclusive jurisdiction of the courts located in the UK.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms and Conditions, please contact us at:
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
            Have Questions About Our Terms?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We're here to help. Contact us for any questions about our terms and conditions.
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