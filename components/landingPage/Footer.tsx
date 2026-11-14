'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Gb, Us, Pk } from 'react-flag-icons';
import { SALES_EMAIL } from '@/lib/site-contact';

export default function Footer() {
  return (
    <footer className="bg-muted text-gray-600 border-t border-muted-foreground/10 py-12 md:py-20">
      <div className="mx-auto max-w-[84vw] px-6">
        {/* ── Flex layout: equal visual gaps between column content, not just equal tracks ── */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-between lg:items-start lg:gap-x-8 lg:gap-y-10">
          
          {/* Brand - Column 1 */}
          <div className="space-y-4 lg:max-w-[220px] lg:flex-shrink-0">
            <Link href="/" className="inline-block">
              <Image
                src="/images/clickmasters-logo.png"
                alt="ClickMasters"
                width={180}
                height={24}
                className="h-6 w-auto md:h-7"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI automation that businesses actually use and own built for production, not presentations.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Clickmasters AI Automation is part of{' '}
              <a
                href="https://clickmasters.pk/"
                className="text-foreground underline underline-offset-2 hover:text-brand transition-colors"
              >
                Clickmasters
              </a>
              .
            </p>
          </div>

          {/* Services - Column 2 */}
          <div className="lg:flex-shrink-0">
            <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-5">Services</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 min-w-[340px]">
              <li className="sm:col-span-2">
                <Link href="/services" className="text-sm font-semibold text-foreground hover:text-brand transition-colors duration-200">
                  View All Services
                </Link>
              </li>
              <li>
                <Link href="/services/ai-workflow-automation" className="text-sm hover:text-brand transition-colors duration-200">
                  AI Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services/business-process-automation" className="text-sm hover:text-brand transition-colors duration-200">
                  Business Process Automation
                </Link>
              </li>
              <li>
                <Link href="/services/robotic-process-automation" className="text-sm hover:text-brand transition-colors duration-200">
                  Robotic Process Automation
                </Link>
              </li>
              <li>
                <Link href="/services/ai-reporting-automation" className="text-sm hover:text-brand transition-colors duration-200">
                  AI Reporting Automation
                </Link>
              </li>
              <li>
                <Link href="/services/ai-agent-development" className="text-sm hover:text-brand transition-colors duration-200">
                  AI Agent Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-chatbots" className="text-sm hover:text-brand transition-colors duration-200">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link href="/services/ai-voice-agents" className="text-sm hover:text-brand transition-colors duration-200">
                  AI Voice Agents
                </Link>
              </li>
              <li>
                <Link href="/services/ai-lead-generation" className="text-sm hover:text-brand transition-colors duration-200">
                  AI Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/services/ai-knowledge-assistants" className="text-sm hover:text-brand transition-colors duration-200">
                  AI Knowledge Assistants
                </Link>
              </li>
              <li>
                <Link href="/services/ai-strategy-advisory" className="text-sm hover:text-brand transition-colors duration-200">
                  AI Strategy &amp; Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/custom-ai-development" className="text-sm hover:text-brand transition-colors duration-200">
                  Custom AI Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company - Column 3 */}
          <div className="lg:flex-shrink-0">
            <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-5">Company</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm hover:text-brand transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/platforms" className="text-sm hover:text-brand transition-colors duration-200">
                  Platforms
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm hover:text-brand transition-colors duration-200">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm hover:text-brand transition-colors duration-200">
                  Case studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-brand transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Platforms and industries stay in the initial HTML. Nav dropdowns open on hover. */}
          <div className="lg:flex-shrink-0">
            <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-5">Platforms</h2>
            <ul className="space-y-3">
              {[
                ['Zapier', '/platforms/zapier-automation-services'],
                ['Make', '/platforms/make-automation-services'],
                ['n8n', '/platforms/n8n-automation-services'],
                ['HubSpot', '/platforms/hubspot-automation-services'],
                ['Airtable', '/platforms/airtable-automation-services'],
                ['GoHighLevel', '/platforms/gohighlevel-automation-services'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-brand transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:flex-shrink-0">
            <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-5">Industries</h2>
            <ul className="space-y-3">
              {[
                ['Finance & Accounting', '/industries/ai-automation-for-finance-accounting'],
                ['Healthcare', '/industries/ai-automation-for-healthcare'],
                ['Law Firms', '/industries/ai-automation-for-law-firms'],
                ['E-commerce', '/industries/ai-automation-for-ecommerce'],
                ['SaaS', '/industries/ai-automation-for-saas'],
                ['Professional Services', '/industries/ai-automation-for-professional-services'],
                ['Real Estate', '/industries/ai-automation-for-real-estate'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-brand transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Column 4 */}
          <div className="lg:flex-shrink-0">
            <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-5">Contact</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" />
                <a 
                  href={`mailto:${SALES_EMAIL}`} 
                  className="hover:text-brand transition-colors"
                >
                  <span className="break-all">{SALES_EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" />
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-500 min-w-[28px]">UK</span>
                    <Gb className="w-5 h-4 flex-shrink-0" />
                    <a href="tel:+447988576086" className="hover:text-brand transition-colors whitespace-nowrap">+44 7988 576086</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-500 min-w-[28px]">US</span>
                    <Us className="w-5 h-4 flex-shrink-0" />
                    <a href="tel:+13252024074" className="hover:text-brand transition-colors whitespace-nowrap">+1 325 202 4074</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-500 min-w-[28px]">PK</span>
                    <Pk className="w-5 h-4 flex-shrink-0" />
                    <a href="tel:+923325394285" className="hover:text-brand transition-colors whitespace-nowrap">+92 332 5394285</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Get in Touch - Column 5 */}
          <div className="flex flex-col gap-4 lg:items-end lg:flex-shrink-0">
            <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider w-full lg:text-right">
              Get in Touch
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-medium px-6 py-3 rounded-none transition-all shadow-lg shadow-brand/25 hover:shadow-brand/40 group"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-xs text-muted-foreground w-full lg:text-right">
              We reply within a few hours.
            </p>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 pt-6 border-t border-muted-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Clickmasters AI Automation. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/privacy-policy" 
              className="hover:text-brand transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-conditions" 
              className="hover:text-brand transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}