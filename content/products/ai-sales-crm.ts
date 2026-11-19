// content/products/ai-sales-crm.ts
// Copy + SEO for /products/ai-sales-crm.
//
// Accuracy rules for this page (keep them when editing):
// - Only capabilities already stated elsewhere on the site (sales automation, lead generation,
//   CRM automation, HubSpot / GoHighLevel / Salesforce pages). No invented integrations.
// - No statistics, prices, testimonials, or guarantees.
// - It is a system Clickmasters builds on top of the client's CRM — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). The page renders them with next/link.
// This page must contain EXACTLY FIVE contextual internal links (see `internalLinks` below).

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from './types';

export const AI_SALES_CRM_PATH = '/products/ai-sales-crm';

export const aiSalesCrmSeo: HubSeo = {
  name: 'AI Sales CRM',
  path: AI_SALES_CRM_PATH,
  title: 'AI Sales CRM for Lead & Pipeline Automation | Clickmasters',
  description:
    'AI Sales CRM built on the CRM you already use: AI lead qualification, routing, automated follow-ups, and live pipeline updates. Book a free audit today.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Sales CRM', path: AI_SALES_CRM_PATH },
  ],
};

export const aiSalesCrmKeywords = [
  'AI Sales CRM',
  'sales CRM software',
  'AI sales management software',
  'sales pipeline management software',
  'CRM automation software',
  'lead management CRM',
  'AI sales platform',
  'AI sales CRM for small business',
  'CRM for small businesses',
  'intelligent CRM system',
  'automated sales follow-up',
];

// The five contextual internal links used in the copy below (verified to resolve).
export const internalLinks = [
  { anchor: 'CRM automation', href: '/solutions/crm-automation', section: 'What Is an AI Sales CRM?' },
  { anchor: 'AI lead generation', href: '/services/ai-lead-generation', section: 'Core Features' },
  { anchor: 'sales automation solutions', href: '/solutions/sales-automation', section: 'AI-Powered Sales Automation' },
  { anchor: 'HubSpot automation services', href: '/platforms/hubspot-automation-services', section: 'Integrations' },
  { anchor: 'AI workflow automation', href: '/services/ai-workflow-automation', section: 'Getting Started' },
] as const;

export const aiSalesCrm: ProductPageContent = {
  hero: {
    badge: 'AI Sales CRM',
    heading: 'AI Sales CRM That Captures, Qualifies and Follows Up on Every Lead',
    subheading:
      'Clickmasters AI Sales CRM adds AI lead qualification, routing, automated follow-up and live pipeline updates to the CRM your team already uses, so every inquiry is recorded, scored and moved forward while your salespeople focus on conversations that close.',
    primaryCta: { text: 'Book a Free Sales Process Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-sales-crm-ai-sales-representative.webp',
    imageAlt: 'AI sales assistant representing the Clickmasters AI Sales CRM for lead qualification and follow-up',
    imageWidth: 578,
    imageHeight: 431,
    accentWords: 5,
    marquee: ['AI lead qualification', 'Lead routing', 'Automated follow-up', 'Pipeline tracking', 'Sales reporting'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is an AI Sales CRM?',
    paragraphs: [
      'An AI Sales CRM is a sales CRM with an intelligence layer on top. The CRM stays your system of record for contacts, companies and deals. The AI layer does the work that usually falls between the cracks: reading new inquiries, enriching them, scoring them against your ideal customer profile, assigning them to the right person and starting the follow-up.',
      'Clickmasters does not ask you to move to a new platform. We build the AI Sales CRM inside the CRM you already run, using the same [CRM automation](/solutions/crm-automation) approach we apply to lead capture, routing and pipeline updates, and add AI only at the steps where it makes a practical difference.',
      'The result is one connected sales process: leads arrive from your website, forms, ads, chat and inbound email, land in the CRM with context, and move through your pipeline with tasks, alerts and follow-ups created for you instead of by hand.',
    ],
    problems: [
      'New leads sit in an inbox or form tool before anyone enters them into the CRM.',
      'Reps qualify by gut feel, so high-intent prospects wait behind low-fit ones.',
      'Follow-ups depend on someone remembering to send them.',
      'Deal stages, notes and next steps go stale, so the pipeline view cannot be trusted.',
    ],
  },

  features: {
    eyebrow: 'Core Features',
    heading: 'Core Features Built Around Your Sales Process',
    intro:
      'Each capability below runs inside your CRM, and we configure it around your sales process, fields and team structure. The lead capture and qualification layer draws on our [AI lead generation](/services/ai-lead-generation) work, so your team handles new prospects consistently from the first touch.',
    items: [
      {
        title: 'Lead Capture From Every Inbound Channel',
        description:
          'Inquiries from forms, landing pages, ads, chat and inbound email become CRM records automatically, with their source recorded, so no lead depends on manual entry.',
        icon: 'inbox',
      },
      {
        title: 'Lead Enrichment',
        description:
          'The workflow adds approved data such as company, role, size and other firmographic details to the record, so reps see who they are talking to before the first reply.',
        icon: 'database',
      },
      {
        title: 'AI-Assisted Lead Qualification',
        description:
          'The system scores each lead against your ideal customer profile. A conversational AI agent can also ask about need, fit, budget signals and timeline before a rep steps in.',
        icon: 'target',
      },
      {
        title: 'Lead Routing With Context',
        description:
          'Territory, service, location or team rules assign each qualified lead, and reps get an alert when a high-priority lead arrives, with the qualification notes attached.',
        icon: 'route',
      },
      {
        title: 'Automated Sales Follow-Up',
        description:
          'Personalized email follow-up sequences start on the right trigger and adapt to replies, while longer-term nurture keeps not-yet-ready leads warm.',
        icon: 'mail',
      },
      {
        title: 'Sales Pipeline Tracking',
        description:
          'Meetings, proposals and deal activity update CRM stages, create tasks and raise alerts, so opportunity data stays current without a weekly clean-up.',
        icon: 'pipeline',
      },
      {
        title: 'Customer Interaction History & Summaries',
        description:
          'The AI can summarize sales calls, email threads and CRM notes into the record with suggested next actions, giving every rep the full context of the relationship.',
        icon: 'history',
      },
      {
        title: 'Sales Reporting & Data Quality',
        description:
          'Pipeline, forecast and activity reports assemble automatically, and duplicate detection plus incomplete-record checks keep the data behind them reliable.',
        icon: 'chart',
      },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How the AI Sales CRM Works, From First Inquiry to Closed Deal',
    intro:
      'Every step below is a workflow inside your CRM. Rules decide what happens automatically, and a person handles anything outside those rules.',
    steps: [
      {
        title: 'Capture',
        description: 'A prospect submits a form, replies to a campaign, starts a chat or sends an email. The workflow creates or updates a CRM record, with its source.',
      },
      {
        title: 'Enrich & Qualify',
        description: 'The workflow enriches the record with approved firmographic data and scores it against your ideal customer profile. Optional AI qualification gathers need, fit and timeline.',
      },
      {
        title: 'Route & Alert',
        description: 'Routing rules assign the lead to the right rep or team, and high-priority leads trigger an alert with the context already attached.',
      },
      {
        title: 'Follow Up & Book',
        description: 'A tailored follow-up sequence starts, and the workflow writes booked meetings back to the CRM so the deal moves to the next stage.',
      },
      {
        title: 'Progress the Pipeline',
        description: 'Meetings, proposals and replies update the deal stage, create tasks and summarize activity. Reps can review AI-drafted proposals and quotes before sending.',
      },
      {
        title: 'Report & Improve',
        description: 'Pipeline and activity reporting updates automatically, so managers see where deals stall and which sources produce qualified opportunities.',
      },
    ],
  },

  benefits: {
    eyebrow: 'Business Benefits',
    heading: 'Business Benefits for Sales Teams and Managers',
    intro:
      'The value of an intelligent CRM system is practical: fewer dropped leads, less administration and a pipeline your managers can act on.',
    items: [
      { title: 'Better Sales Visibility', description: 'Deal stages, tasks and activity update as work happens, so the pipeline reflects reality instead of last week’s memory.' },
      { title: 'Organized Lead Management', description: 'Every lead has a source, a score, an owner and a next step, in one place.' },
      { title: 'Less Manual Admin', description: 'Workflows handle data entry, record updates and routine follow-ups, leaving reps more time for conversations.' },
      { title: 'Faster Lead Response', description: 'The system captures, routes and follows up new inquiries as soon as they arrive, rather than when someone next checks the inbox.' },
      { title: 'Smoother Sales Coordination', description: 'Hand-offs between marketing, sales and delivery carry the full context, so nobody asks the prospect the same question twice.' },
      { title: 'More Informed Decisions', description: 'Consistent, de-duplicated data makes pipeline and source reporting something leaders can rely on.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI-Powered Sales Automation',
    heading: 'Where AI Helps in the Sales Process — and Where People Stay in Charge',
    paragraphs: [
      'AI in a sales CRM is most useful for the reading, sorting and writing work that slows reps down. It is not a replacement for your salespeople: closing stays human, and anyone promising AI that closes deals on its own is overselling.',
      'This page focuses on the CRM itself. If you also want automation beyond the CRM, such as enrichment across tools, quote generation or order hand-off, our [sales automation solutions](/solutions/sales-automation) cover the wider revenue process.',
    ],
    aiDoes: [
      'Scores and qualifies new leads against your ideal customer profile',
      'Holds a first qualification conversation by chat or voice',
      'Summarizes sales calls, email threads and CRM notes',
      'Suggests next actions on a deal',
      'Drafts proposals and quotes for a rep to review',
      'Flags duplicates and incomplete records',
    ],
    peopleDo: [
      'Decide on leads that fall outside the qualification rules',
      'Approve proposals, pricing and anything sent on their behalf',
      'Run discovery calls, negotiations and closing',
      'Own the relationship after the hand-off',
    ],
  },

  spotlight: {
    eyebrow: 'Sales Pipeline Management',
    heading: 'Sales Pipeline Management That Keeps Itself Current',
    paragraphs: [
      'Pipeline management software only helps if the data is right. The system ties stage changes to real events, such as a booked meeting, a sent proposal or a reply, so opportunities move forward when the work happens rather than when someone updates them.',
      'Each opportunity carries its tasks, its interaction history and a short summary of where it stands. Managers can review deal progress, spot opportunities with no next step and see conversions by source and stage in automatically updated reports.',
    ],
    points: [
      { title: 'Organize Opportunities', description: 'Qualified leads become deals with owner, value fields and source already filled in.' },
      { title: 'Monitor Deal Progress', description: 'Meetings, proposals and replies trigger stage updates, tasks and alerts.' },
      { title: 'Manage Sales Activities', description: 'Workflows schedule follow-ups, reminders and next steps automatically and log them on the record.' },
      { title: 'Track Conversions', description: 'Pipeline, forecast and activity reporting shows where deals convert and where they stall.' },
    ],
  },

  audience: {
    eyebrow: 'Who It’s For',
    heading: 'Who It Helps, From Small Teams to Enterprise Sales',
    items: [
      { title: 'Small Businesses', description: 'A CRM for small businesses that captures and follows up on every inquiry without hiring someone to manage the inbox.' },
      { title: 'Growing Companies', description: 'Consistent qualification and routing rules so lead volume can grow without leads slipping through.' },
      { title: 'B2B Sales Teams', description: 'Enrichment, ICP scoring and context-rich routing for longer, multi-contact sales cycles.' },
      { title: 'Service-Based Businesses', description: 'Inquiry-to-booking flows that move a prospect from form to meeting to proposal with fewer manual steps.' },
      { title: 'Sales Departments', description: 'Cleaner pipeline data, automatic activity logging and reporting managers can trust.' },
      { title: 'Enterprise Organizations', description: 'Governed workflows with error handling, monitoring, documentation and staged rollout for larger CRM environments.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Integration and Connectivity',
    paragraphs: [
      'We build on the CRM you already use and work with HubSpot, Salesforce, GoHighLevel, Zoho, Pipedrive and Microsoft Dynamics, connecting them through native integrations, automation platforms or APIs. If your team runs on HubSpot, our [HubSpot automation services](/platforms/hubspot-automation-services) page explains that platform in more detail.',
      'What can be connected depends on the CRM and the APIs available for each tool. If a system has no API, we assess the alternatives during the audit rather than promising an integration up front.',
    ],
    groups: [
      { label: 'CRM Platforms', items: ['HubSpot', 'Salesforce', 'GoHighLevel', 'Zoho', 'Pipedrive', 'Microsoft Dynamics'] },
      { label: 'Lead Sources', items: ['Website forms', 'Landing pages', 'Ads', 'Chat', 'Inbound email'] },
      { label: 'Communication', items: ['Gmail', 'Outlook', 'Slack', 'Microsoft Teams', 'Calendars'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Sales Teams Choose Clickmasters',
    intro:
      'Clickmasters designs, builds and maintains AI agents, workflow automations and system integrations for sales, support and operations teams. This product applies that work to one goal: a CRM that keeps up with your leads.',
    items: [
      { title: 'Built Around Your Sales Process', description: 'We map qualification rules, routing, stages and follow-ups to how your team sells, not to a generic template.' },
      { title: 'No Platform Switch', description: 'Your team keeps its data and its habits, because the work happens inside the CRM you already use.' },
      { title: 'AI Where It Earns Its Place', description: 'We add AI only at the steps where it creates practical value, with rules and people handling the rest.' },
      { title: 'Human-in-the-Loop by Design', description: 'Approval points and hand-offs keep your team in control of customer conversations and anything sent on its behalf.' },
      { title: 'Production-Ready Builds', description: 'Error handling, monitoring, alerting and documentation are part of the build, not an afterthought.' },
      { title: 'Documented Hand-Over', description: 'We hand the workflows, accounts and documentation over to you when we deliver the project.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'Getting Started With Your AI Sales CRM',
    intro:
      'Implementation follows the same structured process we use for all [AI workflow automation](/services/ai-workflow-automation) projects. You approve the plan before anything is built.',
    steps: [
      { title: 'Free Audit', description: 'A no-obligation review of your current sales process and tools, and which steps are worth automating first.' },
      { title: 'Strategy & Mapping', description: 'We map lead sources, qualification rules, fields, hand-offs and exceptions, and agree them with you.' },
      { title: 'Build', description: 'Integrations, workflows and AI components are built inside your CRM.' },
      { title: 'Testing', description: 'We test edge cases, routing rules and follow-up logic before anything touches live leads.' },
      { title: 'Deployment', description: 'The system goes live with a staged rollout and documentation for your team.' },
      { title: 'Monitoring & Improvement', description: 'We review performance after launch, and your written quote sets out the support terms.' },
    ],
    note: 'After the free audit you receive a written quote listing the scope, deliverables, platform and usage costs, support terms and a timeline for each stage.',
  },

  cta: {
    bandHeading: 'See what your CRM could automate',
    heading: 'Make Your CRM Work as Hard as Your Reps',
    description:
      'Book a free, no-obligation audit. We will review your current lead flow and CRM, show you which steps are worth automating first, and tell you plainly which are not.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  related: {
    eyebrow: 'The AI Sales CRM Suite',
    heading: 'Explore the Five Products in the Suite',
    intro:
      'You can implement each product on its own or as part of the full system. Start with the stage of your sales process that loses the most time.',
    items: [
      {
        title: 'AI Sales Automation Software',
        description: 'Automate the repetitive work of selling, from follow-up sequences to meeting booking, proposal drafts and stage updates.',
        href: '/products/ai-sales-crm/ai-sales-automation-software',
      },
      {
        title: 'AI CRM Software',
        description: 'Add AI to the CRM you already run: enriched, de-duplicated records that stay current and reporting you can trust.',
        href: '/products/ai-sales-crm/ai-crm-software',
      },
      {
        title: 'AI Lead Generation Tools',
        description: 'Capture every inbound inquiry, enrich it and qualify it against your ideal customer profile before it reaches sales.',
        href: '/products/ai-sales-crm/ai-lead-generation-tools',
      },
      {
        title: 'AI Lead Management Software',
        description: 'Score, route and track every lead so each one has an owner, a priority and a next step.',
        href: '/products/ai-sales-crm/ai-lead-management-software',
      },
      {
        title: 'AI Sales Assistant',
        description: 'Give every rep an assistant that summarizes calls, suggests next actions and drafts emails and proposals for review.',
        href: '/products/ai-sales-crm/ai-sales-assistant',
      },
    ],
  },

  faqHeading: 'AI Sales CRM: Frequently Asked Questions',
  faqSideText: 'Have a question about your own CRM? Book a free audit and we will answer it for your sales process.',
  faqs: [
    {
      question: 'What is an AI Sales CRM?',
      answer:
        'An AI Sales CRM is a sales CRM with an AI layer that captures, enriches, scores and routes leads, starts follow-ups and keeps the pipeline updated. Clickmasters builds this layer inside the CRM you already use.',
    },
    {
      question: 'How does the Clickmasters AI Sales CRM work?',
      answer:
        'New inquiries from forms, ads, chat and email become CRM records automatically. The system then enriches each lead, scores it against your ideal customer profile, routes it to the right rep and enrolls it in a follow-up sequence. Meetings, proposals and replies then update deal stages and tasks.',
    },
    {
      question: 'How is an AI Sales CRM different from a traditional CRM?',
      answer:
        'A traditional CRM stores what people type into it. An AI Sales CRM also does part of the work: it qualifies and routes leads, summarizes calls and emails, suggests next actions and flags duplicate or incomplete records, so the data stays current with less manual effort.',
    },
    {
      question: 'Do I need to switch to a new CRM?',
      answer:
        'No. We build on the CRM you already run. We work with HubSpot, Salesforce, GoHighLevel, Zoho, Pipedrive and Microsoft Dynamics, and what can be connected depends on each platform’s APIs.',
    },
    {
      question: 'Can it help us manage leads?',
      answer:
        'Yes. Lead management is the core of it: every lead is captured with its source, enriched, scored, assigned to an owner and given a next step, with alerts for high-priority leads.',
    },
    {
      question: 'Can it automate sales follow-ups?',
      answer:
        'Yes. Personalized email follow-up sequences start on the triggers you choose and adapt to replies, and longer nurture sequences keep less-ready leads engaged. Your team approves the messaging before launch.',
    },
    {
      question: 'Will AI replace my sales team?',
      answer:
        'No. AI handles qualification, summaries, drafting and data upkeep. Leads outside your rules go to a person, a rep reviews every proposal, and closing stays with your salespeople.',
    },
    {
      question: 'Is an AI Sales CRM suitable for small businesses?',
      answer:
        'Yes. Small businesses often benefit the most, because automatic capture and follow-up means fewer inquiries are lost when nobody has time to check the inbox. The scope can start with a single lead source and grow.',
    },
    {
      question: 'How does AI-assisted pipeline management work?',
      answer:
        'Deal stages are tied to real events, such as a booked meeting, a sent proposal or a reply. Those events update the stage, create tasks and log activity, and reporting shows progress and conversions by source and stage.',
    },
    {
      question: 'What should businesses consider when choosing CRM software?',
      answer:
        'Look at how leads reach you, how your team qualifies and hands them off, which tools must connect and whether those tools have usable APIs. It also matters who will maintain the workflows. The free audit covers these questions for your process.',
    },
    {
      question: 'How much does an AI Sales CRM cost and how long does it take?',
      answer:
        'It depends on the number of lead sources, integrations, AI components and support needs. After the free audit you receive a written quote with scope, deliverables, platform and usage costs, support terms and a timeline for each stage.',
    },
  ],
};
