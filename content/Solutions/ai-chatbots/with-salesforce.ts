// content/Solutions/ai-chatbots/with-salesforce.ts
import { SolutionData } from '@/content/type';

export const aiChatbotsWithSalesforce: SolutionData = {
  slug: 'ai-chatbots/with-salesforce',
  url: '/solutions/ai-chatbots/with-salesforce',
  platform: 'Salesforce',
  category: 'ai-chatbots',
  title: 'AI Chatbots with Salesforce', // ✅ Added missing title
  primaryKeyword: 'salesforce chatbot',
  titleTag: 'Salesforce Chatbot Development | Clickmasters',
  metaDescription: 'A Salesforce chatbot that answers questions, qualifies leads, and books meetings, logging every chat to the right record. Book a free automation audit.',
  keywordEvidence: '12 matching keywords, ~1,450 bucketed volume',
  schema: 'Service, FAQPage, BreadcrumbList',
  internalLinks: [
    'AI Chatbots service page',
    'Salesforce platform page',
    'AI Automation Agency pillar',
  ],
  heroHeading: 'Salesforce Chatbots Built on Your CRM',
  heroSubheading: 'A Salesforce chatbot that answers, qualifies, and books automatically, running on the world\'s leading CRM platform.',
  heroBadge: 'AI Chatbots × Salesforce',
  description: 'Clickmasters builds chatbot on Salesforce. Salesforce is the enterprise CRM standard, with enormous capability that most orgs use a fraction of and it\'s an excellent fit for organizations with Salesforce at the core of revenue operations. Combined with chatbot, which holds real conversations and takes real action answering from your own content, booking appointments, qualifying leads, and handing off to humans cleanly. Modern AI chatbots understand natural language and ground their answers in your actual documentation, which makes them nothing like the scripted bots everyone learned to dread, the result is automation that runs on a platform matched to the job.',
  sections: {
    'Why Salesforce for AI Chatbots': 'Salesforce is the enterprise CRM standard, with enormous capability that most orgs use a fraction of. Automation and ai extend what admins can build natively. For chatbot specifically, that means your automation gets the platform strengths while we handle the design, build, and reliability engineering that separates a production system from a fragile prototype.\n\nWe\'re platform-honest: if your volume, data requirements, or complexity actually point to a different platform, we\'ll say so. Salesforce is the right home for this work when it matches organizations with Salesforce at the core of revenue operations and when it does, this combination is hard to beat.\n\nBecause the chatbot writes straight into Salesforce, it slots into the rest of your revenue workflow automation. Qualified conversations can feed the lead scoring and CRM automation rules you already run, and the same records drive the pipeline reporting your managers rely on.',
    'What a Production Build Includes': 'The gap between a prototype and a system you can rely on is everything that happens when things go wrong. Every chatbot build we ship on Salesforce includes error handling on every step (failures caught and retried or escalated, never silent), monitoring and alerting (you know the system is running without checking), documentation (your team can understand and modify the build), and staged rollout (the automation proves itself on real cases with human oversight before it runs unattended).\n\nThis is the difference between automation that saves hours and automation that quietly breaks and costs trust. Most of the rescue projects we take on are builds that skipped these steps.',
    'Typical Workflows on Salesforce': 'The chatbot workflows we most often build on Salesforce follow a consistent pattern: an event triggers (a form fill, an inbound message, a record change, a schedule), the workflow gathers context from your systems, AI handles the judgment step where one is needed classification, extraction, drafting and the result is executed and logged. Salesforce\'s strengths make it particularly suited to organizations with Salesforce at the core of revenue operations, and the platform\'s ecosystem means your existing tools almost certainly connect without custom code.',
  },
  features: [
    {
      icon: 'Brain',
      title: 'Grounded Q&A (RAG)',
      description: 'Answers drawn from your real content, so responses are accurate and on-brand built on Salesforce.',
    },
    {
      icon: 'Users',
      title: 'Lead Qualification',
      description: 'Visitors engaged, qualified, and captured naturally in conversation built on Salesforce.',
    },
    {
      icon: 'Calendar',
      title: 'Booking & Scheduling',
      description: 'Appointments checked and booked directly in chat built on Salesforce.',
    },
    {
      icon: 'GitBranch',
      title: 'Action-Taking',
      description: 'Lookups, updates, and processes executed, not just described built on Salesforce.',
    },
    {
      icon: 'Shield',
      title: 'Clean Human Handoff',
      description: 'Complex cases escalated with full context attached built on Salesforce.',
    },
    {
      icon: 'Database',
      title: 'CRM Integration',
      description: 'Seamless integration with Salesforce records, workflows, and data built on Salesforce.',
    },
  ],
  processSteps: [
    {
      number: '01',
      title: 'Free Audit',
      description: 'We map your workflow and confirm Salesforce is genuinely the right platform for your chatbot needs.',
    },
    {
      number: '02',
      title: 'Build in Sprints',
      description: 'Constructed against your real tools and data, with error handling and monitoring built in.',
    },
    {
      number: '03',
      title: 'Documented Hand-off',
      description: 'You own the build; nothing is a black box. Your team can understand and modify it.',
    },
    {
      number: '04',
      title: 'Optimize',
      description: 'We monitor, refine, and expand as the system proves itself on real conversations.',
    },
  ],
  stats: [
    { value: '25+', label: 'Chatbots Built' },
    { value: '< 2s', label: 'Avg. Response Time' },
    { value: '80%+', label: 'Lead Qualification' },
    { value: '100%', label: 'Ownership Guaranteed' },
  ],
  bestFor: [
    'Organizations with Salesforce at the core of revenue ops',
    'Enterprise-grade security and compliance needs',
    'Complex business logic and workflows',
    'Native CRM integration',
  ],
  considerAlternatives: [
    'Smaller teams without Salesforce expertise',
    'Straightforward workflows that don\'t need enterprise features',
    'Teams wanting self-serve simple changes',
    'Budget-conscious projects',
  ],
  relatedSolutions: [
    {
      title: 'AI Chatbots with Zapier',
      slug: 'ai-chatbots/with-zapier',
      description: 'Accessible chatbots built on Zapier.',
    },
    {
      title: 'CRM Automation with Salesforce',
      slug: 'crm-automation/with-salesforce',
      description: 'Keep your Salesforce CRM accurate without manual entry.',
    },
    {
      title: 'Sales Automation with Salesforce',
      slug: 'sales-automation/with-salesforce',
      description: 'AI-powered sales automation on Salesforce.',
    },
  ],
  faqQuestions: [
    {
      question: 'Can Salesforce handle chatbot?',
      answer: 'Yes Salesforce is the enterprise CRM standard, with enormous capability that most orgs use a fraction of, and it\'s well suited to organizations with Salesforce at the core of revenue operations. The build quality determines reliability, which is where an experienced partner matters.',
    },
    {
      question: 'What does this cost to run?',
      answer: 'Automation and ai extend what admins can build natively. We design builds to be efficient on the platform\'s pricing model, and we\'ll tell you honestly if your volume points to a cheaper platform.',
    },
    {
      question: 'Do we own the build?',
      answer: 'Completely. Everything is documented and transparent, in your own accounts, with no dependency on us for changes.',
    },
    {
      question: 'An AI chatbot uses a language model to understand and respond in natural language and taking actions like booking or routing is that what this does?',
      answer: 'An AI chatbot uses a language model to understand and respond in natural language, answering from a business\'s own content and taking actions like booking or routing far beyond old script-based bots. Built on Salesforce, it runs with the platform\'s strengths: organizations with Salesforce at the core of revenue operations.',
    },
  ],
  cta: 'Want chatbot running on Salesforce?',
  bookingLink: '/free-automation-audit',

  // Page layout for app/solutions/[service]/[slug]: section order, titles and page-specific props.
  page: {
    schema: { name: 'AI Chatbots with Salesforce', serviceType: 'AI Chatbot Development' },
    blocks: [
      {
        type: 'HeroSection',
        props: {
          primaryCta: { text: 'Book a Free Audit', href: '/free-automation-audit' },
          secondaryCta: { text: 'Learn More', href: '#why-salesforce' },
          visual: { $element: 'ChatbotHeroMockup', props: { platform: 'salesforce' } },
          stats: {
            $ref: 'stats',
            slice: [0, 3],
          },
          breadcrumb: [
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'AI Chatbots', href: '/solutions/ai-chatbots' },
            { label: 'With Salesforce', href: '/solutions/ai-chatbots/with-salesforce' },
          ],
        },
      },
      {
        type: 'ContentSection',
        section: 'Why Salesforce for AI Chatbots',
        props: {
          id: 'why-salesforce',
          title: 'Why Salesforce for AI Chatbots',
          image: '/images/salesforce-platform.png',
          imageAlt: 'Salesforce platform',
          imageRight: true,
          stats: [
            { label: 'Enterprise Grade', value: '✓' },
            { label: 'Native CRM Integration', value: '✓' },
            { label: 'Scalable', value: '✓' },
          ],
        },
      },
      { type: 'FeatureGrid', props: {
  title: 'What We Build',
  subtitle: 'Comprehensive chatbot solutions on Salesforce',
  columns: 3,
  background: 'paper',
} },
      {
        type: 'ContentSection',
        section: 'What a Production Build Includes',
        props: {
          id: 'production-build',
          title: 'What a Production Build Includes',
          image: '/images/production-build.png',
          imageAlt: 'Production build process',
          cta: { text: 'See Our Process', href: '#how-we-work' },
          background: 'paper',
        },
      },
      {
        type: 'ContentSection',
        section: 'Typical Workflows on Salesforce',
        props: {
          id: 'workflows',
          title: 'Typical Workflows on Salesforce',
          image: '/images/salesforce-workflow.png',
          imageAlt: 'Salesforce workflow pattern',
          imageRight: true,
        },
      },
      { type: 'ProcessSteps', props: {
  title: 'How We Work',
  subtitle: 'Our proven methodology for building chatbots on Salesforce',
  background: 'muted',
} },
      { type: 'PlatformComparison', props: { title: 'Is Salesforce Right for You?', subtitle: 'We\'ll tell you honestly if Salesforce is the right platform for your chatbot needs.' } },
      { type: 'StatsSection', props: { title: 'Why Choose Clickmasters for Salesforce Chatbots' } },
      { type: 'FAQSection', props: { title: 'Salesforce Chatbot FAQs', subtitle: 'Common questions about chatbots on Salesforce' } },
      { type: 'RelatedSolutions' },
      {
        type: 'CTASection',
        props: {
          subtitle: 'Book a free automation audit we\'ll scope the build and confirm the platform fit honestly.',
          primaryCta: { text: 'Book a Free Automation Audit', href: { $ref: 'bookingLink' } },
          secondaryCta: { text: 'View All Solutions', href: '/solutions' },
          background: 'gradient',
        },
      },
    ],
  },
};

export default aiChatbotsWithSalesforce;