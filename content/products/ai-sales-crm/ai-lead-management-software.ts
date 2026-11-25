// content/products/ai-sales-crm/ai-lead-management-software.ts
// Copy + SEO for /products/ai-sales-crm/ai-lead-management-software.
//
// Accuracy rules for this page (keep them when editing):
// - Only capabilities already stated elsewhere on the site. No invented integrations or channels.
// - No statistics, prices, testimonials, or guarantees.
// - Clickmasters builds this inside the client's CRM. It is not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_LEAD_MANAGEMENT_SOFTWARE_PATH = '/products/ai-sales-crm/ai-lead-management-software';

export const aiLeadManagementSoftwareSeo: HubSeo = {
  name: 'AI Lead Management Software',
  path: AI_LEAD_MANAGEMENT_SOFTWARE_PATH,
  title: 'AI Lead Management Software for Sales Teams | Clickmasters',
  description:
    'AI lead management software built inside your CRM: score leads against your ICP, route them by rule and give each one an owner. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Sales CRM', path: '/products/ai-sales-crm' },
    { name: 'AI Lead Management Software', path: AI_LEAD_MANAGEMENT_SOFTWARE_PATH },
  ],
};

export const aiLeadManagementSoftwareKeywords = [
  'AI lead management software',
  'lead management system',
  'AI lead scoring',
  'lead routing software',
  'lead distribution',
  'lead tracking',
  'speed to lead',
  'lead assignment rules',
  'lead nurturing workflow',
  'lead lifecycle management',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI Sales CRM', href: '/products/ai-sales-crm', section: 'What It Is' },
  { anchor: 'tools that bring new prospects in', href: '/products/ai-sales-crm/ai-lead-generation-tools', section: 'Explainer' },
  { anchor: 'an AI assistant that supports reps', href: '/products/ai-sales-crm/ai-sales-assistant', section: 'AI & People' },
  { anchor: 'marketing automation for long-term nurture', href: '/products/ai-marketing-automation', section: 'Lead Nurturing (extras)' },
  { anchor: 'GoHighLevel automation services', href: '/platforms/gohighlevel-automation-services', section: 'Integrations' },
] as const;

export const aiLeadManagementSoftware: ProductPageContent = {
  hero: {
    badge: 'AI Lead Management',
    heading: 'AI Lead Management Software That Gives Every Lead an Owner',
    accentWords: 5,
    subheading:
      'Clickmasters builds AI lead management software inside the CRM you already use. It scores each new lead against your ideal customer profile, assigns it by your rules and follows up until the lead is ready for a sales conversation.',
    primaryCta: { text: 'Book a Free Lead Management Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-lead-management-software-ai-assisted-lead-handling.webp',
    imageAlt:
      'Robotic hand and human hands typing on a laptop with glowing data overlays, illustrating AI-assisted lead handling in a CRM',
    imageWidth: 768,
    imageHeight: 512,
    marquee: ['ICP lead scoring', 'Rule-based routing', 'Priority lead alerts', 'Duplicate handling', 'Lead status tracking'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Does AI Lead Management Software Actually Do?',
    paragraphs: [
      'AI lead management software takes over once a lead exists in your CRM. It decides how good the lead is, who should own it, what should happen next and when a person needs to step in.',
      'Most teams already capture plenty of inquiries. The trouble starts afterwards, when records pile up without a score, sit unassigned or get contacted twice by different reps. This page covers that post-capture layer of our wider [AI Sales CRM](/products/ai-sales-crm), built with your fields, stages and team structure.',
      'Rather than replacing your CRM, we add workflows and AI steps to it. Every lead ends up with a priority, an owner, a status and a dated next action you can see.',
    ],
    problems: [
      'Fresh leads wait unassigned while reps assume someone else has taken them.',
      'Hot prospects and poor-fit inquiries land in the same queue with no ranking.',
      'The same person appears as two or three records with different owners.',
      'Nobody can say how many leads from each source are new, worked or stalled.',
    ],
  },

  explainer: {
    eyebrow: 'The Lead Lifecycle',
    heading: 'Lead Management Starts Where Lead Capture Ends',
    paragraphs: [
      'Generating inquiries and managing them are two separate jobs. The [tools that bring new prospects in](/products/ai-sales-crm/ai-lead-generation-tools) fill the top of the funnel; lead lifecycle management decides what happens to each record from that moment on.',
      'A well-run lead management system answers four questions for every record without anyone chasing it: is this lead a fit, who owns it, what is the next step, and what is its current status?',
    ],
    points: [
      { title: 'Fit', description: 'Every record gets a score based on your ICP and the approved data attached to it.' },
      { title: 'Ownership', description: 'Assignment rules name one rep or team, rather than leaving it to whoever grabs the lead first.' },
      { title: 'Next Step', description: 'A call, email, meeting or nurture sequence, each with a date on the record.' },
      { title: 'Status', description: 'Each lead sits in a clear stage, so it never drifts between new and forgotten.' },
    ],
  },

  features: {
    eyebrow: 'Core Features',
    heading: 'Core Features of Our AI Lead Management Software',
    intro:
      'We configure each capability around how your team already qualifies and hands off leads. Rules come from you; automation applies them consistently.',
    items: [
      {
        title: 'AI Lead Scoring Against Your ICP',
        description:
          'The system ranks leads using your ideal customer profile and enriched details such as company, role and size, so reps start with the strongest fits.',
      },
      {
        title: 'Conversational Qualification',
        description:
          'Where it suits your process, an AI agent asks about need, fit, budget signals and timeline by chat or voice before a rep gets involved.',
      },
      {
        title: 'Lead Assignment Rules',
        description:
          'Your rules route records by territory, service, location or team, so every lead gets an owner the moment it receives a score.',
      },
      {
        title: 'High-Priority Alerts',
        description:
          'When a top-scoring lead arrives, the assigned rep gets a notification in email, Slack or Microsoft Teams with the qualification notes attached.',
      },
      {
        title: 'Duplicate and Gap Detection',
        description:
          'The system flags possible duplicates and incomplete records before they split ownership or confuse reporting.',
      },
      {
        title: 'Follow-Up and Nurture Workflows',
        description:
          'Personalized email sequences adapt to replies, and leads that are not ready yet move into longer nurture instead of being dropped.',
      },
      {
        title: 'Sales Hand-Off With Context',
        description:
          'Once a lead qualifies, the rep receives the source, score, conversation summary and suggested next action in one record.',
      },
      {
        title: 'Lead Tracking by Source',
        description:
          'Automated reporting shows lead status and conversion by source, owner and stage, without a manual spreadsheet.',
      },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How a Lead Moves Through the System',
    intro:
      'Each step runs as a workflow in your CRM. Whenever a lead falls outside the rules you set, it goes to a person instead of guessing.',
    steps: [
      { title: 'Check & Merge', description: 'The workflow compares each new record with existing contacts and flags likely duplicates for review.' },
      { title: 'Enrich & Score', description: 'Enrichment adds approved firmographic data, then scoring ranks the lead against your ICP.' },
      { title: 'Qualify', description: 'An optional AI conversation collects need, fit, budget signals and timeline.' },
      { title: 'Assign & Alert', description: 'Assignment rules pick the owner, and priority leads trigger an immediate notification.' },
      { title: 'Follow Up or Nurture', description: 'Ready leads get a next step and a booking link; the rest enter a nurture sequence.' },
      { title: 'Hand Off & Track', description: 'Qualified leads pass to sales with full context, and reporting shows their status by source.' },
    ],
  },

  benefits: {
    eyebrow: 'Business Benefits',
    heading: 'Why Structured Lead Handling Pays Off',
    intro: 'The gains come from consistency: the same rules applied to every inquiry, every time.',
    items: [
      { title: 'Better Speed to Lead', description: 'Scoring, assignment and alerts happen as the lead arrives, not at the next inbox check.' },
      { title: 'Clear Accountability', description: 'Every record has a single owner, so follow-up is never left to chance.' },
      { title: 'Reps Focus on Fit', description: 'Ranked queues point sales time at prospects who match your profile.' },
      { title: 'Fewer Lost Leads', description: 'Not-ready prospects stay in nurture instead of disappearing from view.' },
      { title: 'Cleaner Records', description: 'Duplicate checks keep one contact, one owner and one history.' },
      { title: 'Honest Source Data', description: 'Status reporting by source shows which channels produce qualified opportunities.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI & People',
    heading: 'Where AI Fits in Lead Management, and Where It Stops',
    paragraphs: [
      'AI works well on scoring, sorting, summarizing and drafting. However, it does not sell, and any vendor claiming AI closes deals on its own is overselling. Your rules decide the edges, and exceptions go to a human.',
      'After assignment, reps can lean on [an AI assistant that supports reps](/products/ai-sales-crm/ai-sales-assistant) with summaries and next-action suggestions while they work their queue.',
    ],
    aiDoes: [
      'Ranks every lead by fit with your ideal customer profile',
      'Runs first-pass qualification by chat or voice',
      'Applies assignment rules and raises priority alerts',
      'Flags likely duplicates and missing fields',
      'Summarizes the lead history for the hand-off',
    ],
    peopleDo: [
      'Review leads that fall outside the rules',
      'Decide on merges the system is unsure about',
      'Approve scoring criteria and nurture messaging',
      'Hold discovery calls and close the deal',
    ],
  },

  spotlight: {
    eyebrow: 'Lead Routing & Distribution',
    heading: 'Lead Routing Software Built on Your Own Rules',
    paragraphs: [
      'Routing is where many lead management setups break down. Round-robin alone ignores territory and specialism, while manual assignment slows everything until a manager is free.',
      'We map your lead distribution logic during the audit and turn it into explicit rules. When no rule matches, or two rules conflict, the lead is sent to a named person rather than left in limbo.',
    ],
    points: [
      { title: 'Territory & Location', description: 'Leads go to the rep or office covering that region.' },
      { title: 'Service or Product Line', description: 'Inquiries reach the team that sells what the prospect asked about.' },
      { title: 'Team Rules', description: 'Assignment follows your team structure, such as inbound, partner or key-account groups.' },
      { title: 'Exception Queue', description: 'Unmatched leads land with a person who decides, so nothing goes unowned.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Lead Nurturing',
      heading: 'A Lead Nurturing Workflow for Leads That Are Not Ready Yet',
      accentWords: 3,
      paragraphs: [
        'Plenty of good-fit leads simply have the wrong timing. Instead of closing them out, the system moves them into a follow-up path and returns them to sales when they reply or re-engage.',
        'For longer programs across campaigns and content, our [marketing automation for long-term nurture](/products/ai-marketing-automation) picks up where short sales sequences end.',
      ],
      points: [
        { title: 'Reply-Aware Sequences', description: 'Follow-up emails adjust or pause when the prospect responds.' },
        { title: 'Return to Sales', description: 'Re-engaged leads are re-scored and routed back to their owner.' },
        { title: 'Visible Status', description: 'Nurtured leads keep a clear stage, so they are counted, not lost.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It’s For',
    heading: 'Teams That Need Better Lead Handling',
    items: [
      { title: 'Small Businesses', description: 'Owners who answer inquiries between other work and need each one tracked.' },
      { title: 'Multi-Location Companies', description: 'Firms that must send leads to the right branch or region.' },
      { title: 'B2B Sales Teams', description: 'Teams that rank prospects by company fit before investing rep time.' },
      { title: 'Service Providers', description: 'Businesses that route inquiries by service type or specialist.' },
      { title: 'RevOps Leaders', description: 'People responsible for clean data, fair distribution and source reporting.' },
      { title: 'Agencies & Partners', description: 'Teams handing qualified leads between groups with context intact.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Connecting AI Lead Management Software to Your Stack',
    paragraphs: [
      'We work in HubSpot, Salesforce, GoHighLevel, Zoho, Pipedrive and Microsoft Dynamics, linked through native integrations, n8n, Make, Zapier or APIs. On GoHighLevel, qualified leads can create or update opportunities in your pipelines; our [GoHighLevel automation services](/platforms/gohighlevel-automation-services) explain that setup further.',
      'What can be connected depends on each CRM and tool and the APIs it offers. If a system has no API, we assess alternatives during the audit.',
    ],
    groups: [
      { label: 'CRM Platforms', items: ['HubSpot', 'Salesforce', 'GoHighLevel', 'Zoho', 'Pipedrive', 'Microsoft Dynamics'] },
      { label: 'Lead Sources', items: ['Website forms', 'Landing pages', 'Ads', 'Chat', 'Inbound email'] },
      { label: 'Alerts & Messaging', items: ['Gmail', 'Outlook', 'Slack', 'Microsoft Teams', 'Calendars'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Work With Clickmasters on Lead Management',
    intro:
      'Clickmasters is an AI automation agency that builds the agents, workflows and integrations behind well-run sales operations.',
    items: [
      { title: 'Your Rules, Written Down', description: 'We agree scoring and assignment logic with you and document it before it runs.' },
      { title: 'Inside Your CRM', description: 'Your team keeps its records, views and habits.' },
      { title: 'People Handle Exceptions', description: 'Uncertain merges and unmatched leads go to a person by design.' },
      { title: 'Built for Production', description: 'Each step includes error handling, monitoring and alerting.' },
      { title: 'Staged Rollout', description: 'New routing goes live in stages, so problems surface early.' },
      { title: 'Full Hand-Over', description: 'At delivery, we hand over the workflows, accounts and documentation.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'Getting Started With Automated Lead Handling',
    intro: 'The process runs in six stages, and building starts only after you sign off the lead plan.',
    steps: [
      { title: 'Free Audit', description: 'We review how your team scores, assigns and follows up on leads today.' },
      { title: 'Strategy & Mapping', description: 'Together we map ICP criteria, routing rules, statuses and exceptions, and you sign them off.' },
      { title: 'Build', description: 'Scoring, routing, alerts and nurture workflows are built in your CRM.' },
      { title: 'Testing', description: 'We test edge cases such as duplicates and unmatched territories before go-live.' },
      { title: 'Staged Deployment', description: 'Rules switch on gradually, with documentation for your team.' },
      { title: 'Review', description: 'We review results after launch; your quote sets out the support terms.' },
    ],
    note: 'The written quote that follows the audit lists the scoring, routing and nurture work in scope, platform and usage costs, support terms and a timeline.',
  },

  cta: {
    bandHeading: 'Find out where your leads stall',
    heading: 'Give Every Lead a Clear Path to Sales',
    description:
      'Book a free, no-obligation audit. We will look at how your team scores, assigns and follows up on leads today and show which steps are worth automating first.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Lead Management Questions, Answered',
  faqSideText: 'Want answers for your own lead flow? Book a free audit and we will walk through it with you.',
  faqs: [
    {
      question: 'What is AI lead management software?',
      answer:
        'It is a set of workflows and AI steps in your CRM that score, assign, follow up and track leads once they arrive. Clickmasters builds it on the CRM you already use rather than selling a separate app.',
    },
    {
      question: 'How is lead management different from lead generation?',
      answer:
        'Lead generation brings inquiries in. Lead management decides what happens next: how each lead is ranked, who owns it, what the next step is and how its status is tracked.',
    },
    {
      question: 'How does AI lead scoring work?',
      answer:
        'The system compares each lead with your ideal customer profile, using the details on the record plus approved enrichment such as company, role and size. You agree the criteria, and the score sets priority and routing.',
    },
    {
      question: 'Can leads be routed by territory or service?',
      answer:
        'Yes. Assignment rules can use territory, service, location or team. Any lead that matches no rule, or several conflicting ones, is sent to a person to decide.',
    },
    {
      question: 'How are duplicate leads handled?',
      answer:
        'The workflow checks new records against existing contacts and flags likely duplicates or incomplete records. Where a match is uncertain, a person reviews it before any merge happens.',
    },
    {
      question: 'What happens to leads that are not ready to buy?',
      answer:
        'They move into a nurture sequence instead of being closed out. If they reply or re-engage, they are re-scored and routed back to sales with their history attached.',
    },
    {
      question: 'Is this suitable for a small business?',
      answer:
        'Yes. A small team can start with simple scoring, one assignment rule and a follow-up sequence, then add more as volume grows. The audit helps decide what is worth automating first.',
    },
    {
      question: 'Can AI replace my sales reps?',
      answer:
        'No. AI handles ranking, sorting, summaries and drafts, but it does not sell. Exceptions go to people, and discovery calls, negotiation and closing stay with your team.',
    },
    {
      question: 'Which CRMs does this work with?',
      answer:
        'We work with HubSpot, Salesforce, GoHighLevel, Zoho, Pipedrive and Microsoft Dynamics. What can be connected depends on each platform and its APIs, and we assess alternatives during the audit if a tool has none.',
    },
    {
      question: 'How is AI lead management software priced, and how do we start?',
      answer:
        'Start with the free audit. Afterwards you receive a written quote listing scope, deliverables, platform and usage costs, support terms and a timeline, and nothing is built until you approve it.',
    },
  ],
};
