// content/Solutions/document-automation/with-n8n.ts
import { SolutionData } from '@/content/type';

export const documentAutomationWithN8n: SolutionData = {
  slug: 'document-automation/with-n8n',
  url: '/solutions/document-automation/with-n8n',
  platform: 'n8n',
  category: 'document-automation',
  title: 'Document & Data Automation with n8n',
  primaryKeyword: 'n8n document automation',
  titleTag: 'Document & Data Automation Built on n8n | Clickmasters',
  metaDescription: 'Teams running n8n use Clickmasters document automation to extract, check, and route data from invoices, forms, and files. Book a free audit. Ask the team.',
  keywordEvidence: '1 matching keywords, ~500 bucketed volume',
  schema: 'Service, FAQPage, BreadcrumbList',
  internalLinks: [
    'Document & Data Automation service page',
    'n8n platform page',
    'AI Automation Agency pillar',
  ],
  heroHeading: 'Document & Data Automation Built on n8n',
  heroSubheading: 'Open-source, self-hostable document automation with no per-task fees and deep AI/LLM support.',
  heroBadge: 'Document Automation × n8n',
  description: 'Clickmasters builds document automation on n8n. n8n is an open-source, self-hostable automation platform with no per-task fees and the deepest AI/LLM support of the mainstream tools and it\'s an excellent fit for high-volume, data-sensitive, or AI-heavy production workflows. Combined with document automation, which reads documents and moves data so nobody keys it by hand AI extraction that understands invoices, forms, and PDFs across varied layouts, validation that catches what doesn\'t look right, and routing that puts clean data into your systems automatically. The manual entry disappears; the exceptions get exactly the human attention they need, the result is automation that runs on a platform matched to the job.',
  sections: {
    'Why n8n for Document & Data Automation': 'n8n is an open-source, self-hostable automation platform with no per-task fees and the deepest AI/LLM support of the mainstream tools. Self-hosting gives full data control your information never leaves your environment. For document automation specifically, that means your automation gets the platform strengths while we handle the design, build, and reliability engineering that separates a production system from a fragile prototype.\n\nWe\'re platform-honest: if your volume, data requirements, or complexity actually point to a different platform, we\'ll say so. n8n is the right home for this work when it matches high-volume, data-sensitive, or AI-heavy production workflows and when it does, this combination is hard to beat.',
    'What a Production Build Includes': 'The gap between a prototype and a system you can rely on is everything that happens when things go wrong. Every document automation build we ship on n8n includes error handling on every step (failures caught and retried or escalated, never silent), monitoring and alerting (you know the system is running without checking), documentation (your team can understand and modify the build), and staged rollout (the automation proves itself on real cases with human oversight before it runs unattended).\n\nThis is the difference between automation that saves hours and automation that quietly breaks and costs trust. Most of the rescue projects we take on are builds that skipped these steps.',
    'Typical Workflows on n8n': 'The document automation workflows we most often build on n8n follow a consistent pattern: an event triggers (a form fill, an inbound message, a record change, a schedule), the workflow gathers context from your systems, AI handles the judgment step where one is needed classification, extraction, drafting and the result is executed and logged. n8n\'s strengths make it particularly suited to high-volume, data-sensitive, or AI-heavy production workflows, and the platform\'s ecosystem means your existing tools almost certainly connect without custom code.',
  },
  features: [
    {
      icon: 'FileText',
      title: 'AI Document Extraction',
      description: 'Structured data pulled from PDFs, forms, and images built on n8n.',
    },
    {
      icon: 'Shield',
      title: 'Validation & Exception Flagging',
      description: 'Errors caught before they enter your systems built on n8n.',
    },
    {
      icon: 'Database',
      title: 'Data Entry Elimination',
      description: 'Information moved between systems without re-keying built on n8n.',
    },
    {
      icon: 'GitMerge',
      title: 'Document Workflows',
      description: 'Routing, approval, and filing automated built on n8n.',
    },
    {
      icon: 'Workflow',
      title: 'Processing Pipelines',
      description: 'Data cleaned and transformed at scale built on n8n.',
    },
    {
      icon: 'BrainCircuit',
      title: 'Production-Ready',
      description: 'Staged rollout, documentation, and reliability engineering built for scale on n8n.',
    },
  ],
  processSteps: [
    {
      number: '01',
      title: 'Free Audit',
      description: 'We map your workflow and confirm n8n is genuinely the right platform for your document automation needs.',
    },
    {
      number: '02',
      title: 'Build in Sprints',
      description: 'Constructed against your real documents and data, with error handling and monitoring built in.',
    },
    {
      number: '03',
      title: 'Documented Hand-off',
      description: 'You own the build; nothing is a black box. Your team can understand and modify it.',
    },
    {
      number: '04',
      title: 'Optimize',
      description: 'We monitor, refine, and expand as the system proves itself on real documents.',
    },
  ],
  stats: [
    { value: '50+', label: 'Document Systems Built' },
    { value: '95%+', label: 'Extraction Accuracy' },
    { value: '15x', label: 'Faster Processing' },
    { value: '100%', label: 'Ownership Guaranteed' },
  ],
  bestFor: [
    'High-volume document processing workflows',
    'Data-sensitive operations requiring self-hosting',
    'AI-heavy document extraction with LLM support',
    'Teams wanting no per-task fees',
  ],
  considerAlternatives: [
    'Small-scale document processing',
    'Teams wanting self-serve simple changes without technical expertise',
    'Organizations preferring managed cloud solutions',
    'Budget-conscious teams with low volume',
  ],
  relatedSolutions: [
    {
      title: 'Document Automation with Airtable',
      slug: 'document-automation/with-airtable',
      description: 'Document automation on Airtable with flexibility.',
    },
    {
      title: 'Document Automation with Salesforce',
      slug: 'document-automation/with-salesforce',
      description: 'Enterprise-grade document automation on Salesforce.',
    },
    {
      title: 'AI Workflow Automation with n8n',
      slug: 'ai-workflow-automation/with-n8n',
      description: 'Workflow automation built on n8n.',
    },
  ],
  faqQuestions: [
    {
      question: 'Can n8n handle document automation?',
      answer: 'Yes n8n is an open-source, self-hostable automation platform with no per-task fees and the deepest AI/LLM support of the mainstream tools, and it\'s well suited to high-volume, data-sensitive, or AI-heavy production workflows. The build quality determines reliability, which is where an experienced partner matters.',
    },
    {
      question: 'What does this cost to run?',
      answer: 'Self-hosting gives full data control your information never leaves your environment. We design builds to be efficient on the platform\'s pricing model, and we\'ll tell you honestly if your volume points to a cheaper platform.',
    },
    {
      question: 'Do we own the build?',
      answer: 'Completely. Everything is documented and transparent, in your own accounts, with no dependency on us for changes.',
    },
    {
      question: 'Uses OCR and AI to read documents route it into business systems automatically is that what this does?',
      answer: 'Document and data automation uses OCR and AI to read documents, extract and validate structured data, and route it into business systems automatically replacing manual reading and data entry. Built on n8n, it runs with the platform\'s strengths: high-volume, data-sensitive, or AI-heavy production workflows.',
    },
  ],
  cta: 'Want document automation running on n8n?',
  bookingLink: '/free-automation-audit',

  // Page layout for app/solutions/[service]/[slug]: section order, titles and page-specific props.
  page: {
    schema: { name: 'Document & Data Automation with n8n', serviceType: 'Document Automation' },
    blocks: [
      {
        type: 'HeroSection',
        props: {
          primaryCta: { text: 'Book a Free Audit', href: '/free-automation-audit' },
          secondaryCta: { text: 'Learn More', href: '#why-n8n' },
          visual: { $element: 'ChatbotHeroMockup', props: { platform: 'n8n' } },
          stats: {
            $ref: 'stats',
            slice: [0, 3],
          },
          breadcrumb: [
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Document Automation', href: '/solutions/document-automation' },
            { label: 'With n8n', href: '/solutions/document-automation/with-n8n' },
          ],
        },
      },
      {
        type: 'ContentSection',
        section: 'Why n8n for Document & Data Automation',
        props: {
          id: 'why-n8n',
          title: 'Why n8n for Document & Data Automation',
          stats: [
            { label: 'Self-Hosted', value: '✓' },
            { label: 'No Per-Task Fees', value: '✓' },
            { label: 'Deep AI/LLM Support', value: '✓' },
          ],
          cta: { text: 'See Our Process', href: '#how-we-work' },
          background: 'muted',
        },
      },
      { type: 'FeatureGrid', props: {
  title: 'What We Build',
  subtitle: 'Comprehensive document automation solutions on n8n',
  eyebrow: 'Capabilities',
  columns: 3,
  background: 'dark',
} },
      {
        type: 'ContentSection',
        section: 'What a Production Build Includes',
        props: {
          id: 'production-build',
          title: 'What a Production Build Includes',
          cta: { text: 'See Our Process', href: '#how-we-work' },
          background: 'muted',
        },
      },
      {
        type: 'ContentSection',
        section: 'Typical Workflows on n8n',
        props: { id: 'workflows', title: 'Typical Workflows on n8n' },
      },
      { type: 'ProcessSteps', props: {
  title: 'How We Work',
  subtitle: 'Our proven methodology for building document automation on n8n',
  background: 'muted',
} },
      { type: 'PlatformComparison', props: { title: 'Is n8n Right for You?', subtitle: 'We\'ll tell you honestly if n8n is the right platform for your document automation needs.' } },
      { type: 'StatsSection', props: { title: 'Why Choose Clickmasters for n8n Document Automation' } },
      { type: 'FAQSection', props: {
  title: 'Frequently Asked Questions',
  subtitle: 'Common questions about document automation on n8n',
  eyebrow: 'FAQ',
} },
      { type: 'RelatedSolutions' },
      {
        type: 'CTASection',
        props: {
          subtitle: 'Book a free automation audit. We\'ll scope the build and confirm the platform fit honestly.',
          primaryCta: { text: 'Book a Free Automation Audit', href: { $ref: 'bookingLink' } },
          secondaryCta: { text: 'View All Solutions', href: '/solutions' },
          background: 'gradient',
        },
      },
    ],
  },
};

export default documentAutomationWithN8n;