// content/Industries/law-firms.ts
import { ServiceContent } from '../type';

export const lawFirms: ServiceContent = {
  slug: 'law-firms',
  title: 'AI Automation for Law Firms | Clickmasters',
  metaDescription:
    'AI automation for law firms: client intake, document generation, deadline tracking and follow-up, so attorneys spend time on cases, not admin.',
  keywords: 'ai automation for law firms, legal automation',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'AI Automation for Law Firms',
      subheading:
        'Automate client intake, document generation, deadline tracking, and follow-up so attorneys spend time on cases, not admin.',
      content: [
        'Clickmasters builds AI automation for law firms, targeting the heavy administrative overhead that surrounds legal work client intake, document generation, deadline tracking, and client communication. We automate the repetitive parts so attorneys and staff spend their time on legal work and client relationships, while every matter of legal judgment stays firmly with the lawyers. Automation handles the busywork; it does not practice law.',
        'This page explains where law firms lose time to administration, what we automate, and how we keep the boundary between automation and legal judgment clear.',
      ],
      stats: [
        { label: 'INTAKE TIME SAVED', value: '60%+' },
        { label: 'DOCUMENT DRAFT TIME', value: '70%+' },
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false },
      ],
      image: {
        src: '/images/law-firms-hero.png',
        alt: 'AI Law Firm Automation',
        width: 1200,
        height: 1000,
        fadeEdges: true,
      },
    },

    // ========== TEXT: The Administrative Overhead in Legal Work ==========
    {
      type: 'text',
      heading: 'The Administrative Overhead in Legal Work',
      content: [
        'Legal work is wrapped in administration. New clients need intake and onboarding. Documents need drafting, often from templates and repeated information. Deadlines and matter statuses need tracking, with serious consequences if something is missed. Clients need updates and follow-up. Much of this is repetitive and time-consuming, and because attorney time is expensive, every hour spent on administration rather than billable legal work is costly twice over.',
        'The stakes also make consistency essential. A missed deadline, a dropped follow-up, an intake that fell through the cracks these are not just inefficiencies in a law firm; they carry real risk. Automation brings consistency to exactly these areas: intake that always happens, deadlines that are always tracked and flagged, follow-up that never slips. It removes both the time cost and the risk of human inconsistency from the administrative layer, while leaving the legal substance to the professionals.',
      ],
    },

    // ========== FEATURES: What We Automate for Law Firms ==========
    {
      type: 'features',
      heading: 'What We Automate for Law Firms',
      items: [
        {
          title: 'Client intake automation',
          description:
            'Automated intake, qualification, and onboarding, so prospective clients are captured and processed consistently.',
          icon: 'Users',
        },
        {
          title: 'Document generation',
          description:
            'AI-drafted documents assembled from intake data and templates, for attorney review turning hours of drafting into minutes of editing.',
          icon: 'FileText',
        },
        {
          title: 'Deadline and matter tracking',
          description:
            'Automated reminders and status tracking so critical dates and matter progress are never missed.',
          icon: 'Calendar',
        },
        {
          title: 'Client communication',
          description:
            'Automated updates and follow-up that keep clients informed without manual effort.',
          icon: 'MessageSquare',
        },
        {
          title: 'Knowledge assistant',
          description:
            'An internal AI assistant that answers from your firm\'s own documents and precedents, helping staff find information fast.',
          icon: 'Brain',
        },
         {
      title: 'Document search & retrieval',
      description:
        'AI‑powered search that finds relevant case files, precedents, and clauses across your document management system – in seconds, not hours.',
      icon: 'Search',
    },
      ],
    },

    // ========== TEXT: The Boundary: Automation vs. Legal Judgment ==========
    {
      type: 'text',
      heading: 'The Boundary: Automation vs. Legal Judgment',
      content: [
        'This boundary matters more in law than almost anywhere, so we are explicit about it. Automation in a law firm handles administration and drafting support it gathers intake information, assembles draft documents from templates and data, tracks deadlines, and manages routine client communication. What it does not do is exercise legal judgment. Every document it drafts is for attorney review before it is used. Every legal decision remains with the lawyers.',
        'AI document drafting, in particular, should be understood correctly: it accelerates the production of routine documents by assembling them from your templates and the matter\'s information, saving substantial time. But it produces drafts, not final legal work, and an attorney reviews and takes responsibility for what goes out. Used this way as a drafting accelerator with professional review it is a genuine efficiency gain. Treated as a replacement for legal judgment, it would be a serious mistake, and we build the workflow to keep that line clear.',
      ],
    },

    // ========== GRID: Worked Example ==========
    {
      type: 'grid',
      heading: 'A Worked Example: Intake to Drafted Document',
      subheading:
        'Consider a firm handling a high volume of similar matters. Automation turns hours of drafting into minutes of review.',
      items: [
        {
          title: 'Structured intake',
          description:
            'Intake is captured through a structured, automated process that collects and organizes necessary information consistently.',
          icon: 'Clipboard',
        },
        {
          title: 'Document generation',
          description:
            'AI assembles the initial drafts from the firm\'s templates, populated with the matter\'s details.',
          icon: 'FileText',
        },
        {
          title: 'Attorney review',
          description:
            'The attorney receives a draft to review and refine rather than a blank page cutting routine production time dramatically.',
          icon: 'Shield',
        },
        {
          title: 'More matters handled',
          description:
            'The firm handles more matters with the same staff, and attorneys spend their time on legal substance rather than assembly.',
          icon: 'TrendingUp',
        },
        {
      title: 'Data quality assurance',
      description:
        'Automated validation checks ensure all required fields are complete and consistent before document generation begins.',
      icon: 'CheckCircle',
    },
    // ── NEW CARD 2 ──
    {
      title: 'Final sign-off workflow',
      description:
        'Attorneys review and approve final versions with a single click – maintaining full control while eliminating manual administrative steps.',
      icon: 'FileCheck',
    },
      ],
    },

    // ========== FEATURES: Why Clickmasters ==========
    {
      type: 'features',
      heading: 'Why Clickmasters for Law Firms',
      items: [
        {
          title: 'Mapped to your industry\'s workflows',
          description:
            'We automate legal administration and drafting support, not legal judgment.',
          icon: 'Target',
        },
        {
          title: 'Human-in-the-loop where it matters',
          description:
            'Every drafted document is for attorney review; legal decisions stay with lawyers.',
          icon: 'Users',
        },
        {
          title: 'Integrated, not rip-and-replace',
          description:
            'We integrate with your practice-management and document systems.',
          icon: 'Link2',
        },
        {
          title: 'You own it',
          description:
            'Documented, transparent, confidentiality-conscious automation you control.',
          icon: 'Award',
        },
         {
      title: 'Confidentiality-first design',
      description:
        'Built with access controls and secure handling – client confidentiality is designed in, not an afterthought.',
      icon: 'Shield',
    },
    // ── NEW CARD 2 ──
    {
      title: 'Scalable automation',
      description:
        'Grows with your firm – handle more matters without proportional headcount increases.',
      icon: 'TrendingUp',
    },
      ],
    },

    // ========== TEXT: Where to Start in a Law Firm ==========
    {
      type: 'text',
      heading: 'Where to Start in a Law Firm',
      content: [
        'For most firms, client intake automation is a strong starting point, because it captures prospective clients consistently, improves the experience, and feeds clean information into everything downstream. For firms handling volumes of similar matters, document generation is often the highest-return automation, turning repetitive drafting into review-and-refine.',
        'Firms with repeatable matter types areas of practice where the documents and processes are similar case to case benefit most, because the automation has a consistent pattern to work with. The audit identifies where your attorneys are spending the most time on administration that could be automated away.',
      ],
    },

    // ========== TEXT: The Return for Law Firms ==========
    {
      type: 'text',
      heading: 'The Return for Law Firms',
      content: [
        'The return is measured in attorney and staff hours redirected from administration to billable legal work and client relationships which, given the cost of legal time, is a substantial and easily quantified saving. There is also a risk dimension: consistent automated deadline tracking and intake reduce the chance of the missed dates and dropped matters that carry real consequences in legal practice. Automation here saves money and reduces risk simultaneously, while leaving all legal judgment with the attorneys.',
      ],
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Law firm automation questions',
      items: [
        {
          title: 'How can law firms use AI automation?',
          description:
            'Law firms use AI automation for client intake, document drafting support, deadline tracking, and client communication automating administrative work while attorneys retain all legal judgment and review all output.',
        },
        {
          title: 'Is AI document drafting safe for legal work?',
          description:
            'Used correctly, yes: AI assembles draft documents from templates and intake data to save time, but every draft is reviewed by an attorney who takes responsibility for the final work. It is a drafting accelerator, not a substitute for legal judgment.',
        },
        {
          title: 'Does AI make legal decisions?',
          description:
            'No. Automation handles administration and drafting support; all legal decisions and final documents remain with the firm\'s attorneys. We build the workflow specifically to keep that boundary clear.',
        },
        {
          title: 'Is client confidentiality protected?',
          description:
            'We build with confidentiality in mind access controls, secure handling, and where appropriate infrastructure that keeps data in your environment. As with any tool, confidentiality obligations are the firm\'s responsibility, and we design to support them.',
        },
      ],
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Give your attorneys their time back.',
      subheading:
        'Book a free automation audit tailored to your firm.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true,
      },
    },
  ],
};