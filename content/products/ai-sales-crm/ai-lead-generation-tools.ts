// content/products/ai-sales-crm/ai-lead-generation-tools.ts
// Copy + SEO for /products/ai-sales-crm/ai-lead-generation-tools.
//
// Accuracy rules for this page (keep them when editing):
// - Inbound and owned channels only (forms, landing pages, ads, chat, inbound email, missed calls).
//   No cold outbound databases, scraping or named data vendors.
// - No statistics, prices, testimonials, or guarantees.
// - Built by Clickmasters inside the client's existing CRM and tools — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_LEAD_GENERATION_TOOLS_PATH = '/products/ai-sales-crm/ai-lead-generation-tools';

export const aiLeadGenerationToolsSeo: HubSeo = {
  name: 'AI Lead Generation Tools',
  path: AI_LEAD_GENERATION_TOOLS_PATH,
  title: 'AI Lead Generation Tools for Inbound Leads | Clickmasters',
  description:
    'AI lead generation tools that capture every inbound inquiry, enrich it, qualify it against your ICP and book the meeting in your CRM. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Sales CRM', path: '/products/ai-sales-crm' },
    { name: 'AI Lead Generation Tools', path: AI_LEAD_GENERATION_TOOLS_PATH },
  ],
};

export const aiLeadGenerationToolsKeywords: string[] = [
  'AI lead generation tools',
  'AI lead generation software',
  'automated lead generation',
  'B2B lead generation automation',
  'inbound lead capture',
  'lead enrichment',
  'AI lead qualification',
  'conversational lead qualification',
  'lead generation for small business',
  'ideal customer profile scoring',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI Sales CRM', href: '/products/ai-sales-crm', section: 'What Are AI Lead Generation Tools?' },
  { anchor: 'lead generation automation solutions', href: '/solutions/lead-generation-automation', section: 'Why Our AI Lead Generation Tools Focus on Inbound Demand' },
  { anchor: 'our AI lead generation service', href: '/services/ai-lead-generation', section: 'Core Capabilities' },
  { anchor: 'AI lead management software', href: '/products/ai-sales-crm/ai-lead-management-software', section: 'AI and People' },
  { anchor: 'the CRM layer that stores each enriched record', href: '/products/ai-sales-crm/ai-crm-software', section: 'Integrations' },
] as const;

export const aiLeadGenerationTools: ProductPageContent = {
  hero: {
    badge: 'AI Lead Generation Tools',
    heading: 'AI Lead Generation Tools That Turn Every Inquiry Into a Booked Meeting',
    accentWords: 4,
    subheading:
      'Clickmasters builds AI lead generation tools that catch each inbound inquiry the moment it arrives, whether it comes through a form, an ad, a chat window, an email or a missed call. The system then enriches every lead, checks it against your ideal customer profile and offers a meeting slot, all inside the CRM you already use.',
    primaryCta: { text: 'Book a Free Lead Generation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-lead-generation-tools-prospect-discovery.webp',
    imageAlt:
      'Robotic hand operating a glowing analytics panel with charts, illustrating AI lead generation tools capturing and scoring inbound leads',
    imageWidth: 1200,
    imageHeight: 686,
    marquee: ['Inbound lead capture', 'Lead enrichment', 'ICP scoring', 'Conversational qualification', 'Meeting booking'],
  },

  intro: {
    eyebrow: 'What They Are',
    heading: 'What Are AI Lead Generation Tools?',
    paragraphs: [
      'AI lead generation tools are workflows and AI agents that collect inquiries from the channels you own, add context to them and decide which ones deserve a rep’s time. They do not invent prospects. Instead, they make sure your team records, understands and acts on the demand you already attract, quickly.',
      'At Clickmasters, this capability forms the front end of our [AI Sales CRM](/products/ai-sales-crm). We connect your forms, landing pages, ad lead forms, website chat, shared inboxes and phone line so that each new contact becomes a complete CRM record with a source, a score and a next step.',
      'Because the system lives inside your existing tools, there is no new app for your team to learn. As a result, reps start their day with qualified leads and booked calls rather than a pile of unread notifications.',
    ],
    problems: [
      'Form submissions and ad leads wait in separate tools until someone copies them across.',
      'Calls that go unanswered never become a lead record at all.',
      'Reps spend their first conversation asking questions a short qualification step could have covered.',
      'Strong-fit prospects get the same slow reply as people who were never a match.',
    ],
  },

  explainer: {
    eyebrow: 'Inbound First',
    heading: 'Why Our AI Lead Generation Tools Focus on Inbound Demand',
    paragraphs: [
      'Many products sold under this label are really contact databases for cold outreach. Ours work differently. They start from the people who have already raised a hand, through your website, campaigns or phone, and make sure none of that interest goes to waste.',
      'That focus keeps the data clean and consented, since every record comes from a channel you control. It also means quality improves as your marketing improves, because the system scores, routes and follows up on whatever volume your campaigns produce.',
      'If you want to see how these workflows fit into a wider programme of capture, nurture and reporting, our [lead generation automation solutions](/solutions/lead-generation-automation) describe the full picture.',
    ],
    points: [
      { title: 'Owned Channels Only', description: 'Leads come from your forms, landing pages, ads, chat, inbox and phone line, never from scraped lists.' },
      { title: 'Context Before Contact', description: 'Enrichment and scoring happen before a rep reaches out, so the first reply is relevant.' },
      { title: 'Speed Without Shortcuts', description: 'Fast responses come with clear rules about which leads need a human decision.' },
    ],
  },

  features: {
    eyebrow: 'Core Capabilities',
    heading: 'Core Capabilities of Clickmasters AI Lead Generation Software',
    intro:
      'We configure each capability around your offer, your qualification criteria and your sales team’s calendar. Where you would prefer us to run the wider programme for you, [our AI lead generation service](/services/ai-lead-generation) covers that engagement in detail.',
    items: [
      {
        title: 'Inbound Lead Capture',
        description:
          'Website forms, landing pages, ad lead forms, chat conversations and inbound emails create or update a CRM contact automatically, tagged with the channel they came from.',
        icon: 'inbox',
      },
      {
        title: 'Missed-Call Recovery',
        description:
          'An unanswered call can open a lead record and trigger a prompt follow-up, so phone inquiries are not lost after hours.',
        icon: 'phone',
      },
      {
        title: 'Lead Enrichment',
        description:
          'Approved data sources fill in company, job role, company size and firmographic details, giving each record enough context to score.',
        icon: 'database',
      },
      {
        title: 'Ideal Customer Profile Scoring',
        description:
          'Rules built from your best customers rate each lead on fit, so high-value prospects rise to the top of the queue.',
        icon: 'target',
      },
      {
        title: 'Conversational Lead Qualification',
        description:
          'An AI agent can talk with a new lead over chat or voice, asking about need, fit, budget signals and timeline, then write the answers to the CRM.',
        icon: 'chat',
      },
      {
        title: 'Meeting Booking',
        description:
          'Qualified leads receive a follow-up email with a calendar link, and confirmed meetings appear on the right rep’s calendar and the CRM record.',
        icon: 'calendar',
      },
      {
        title: 'Priority Alerts and Routing',
        description:
          'Routing rules assign leads by territory, service, location or team, and reps get an alert when a high-priority prospect comes in.',
        icon: 'route',
      },
      {
        title: 'Duplicate and Gap Checks',
        description:
          'Each new record is checked against existing contacts so the CRM avoids duplicates, and the system flags incomplete entries for review.',
        icon: 'check',
      },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How Automated Lead Generation Works, Step by Step',
    intro:
      'The journey below runs as connected workflows in your CRM and automation platform. When something does not match your rules, the workflow hands it to a person instead of guessing.',
    steps: [
      {
        title: 'Inquiry Arrives',
        description: 'Someone fills in a form, clicks an ad, opens a chat, emails your team or calls without reaching anyone.',
      },
      {
        title: 'Record Is Created',
        description: 'The workflow then writes the details to the CRM as a new or updated contact, with the originating channel attached.',
      },
      {
        title: 'Context Is Added',
        description: 'Approved enrichment adds firmographic data, and duplicate checks keep the database tidy.',
      },
      {
        title: 'Lead Is Qualified',
        description: 'ICP scoring rates fit, and an optional AI conversation gathers need, budget signals and timeline.',
      },
      {
        title: 'Meeting Is Offered',
        description: 'Good-fit leads get a follow-up email and a booking link, while others enter nurture or go to a person.',
      },
      {
        title: 'Sales Takes Over',
        description: 'The assigned rep receives the booked call, the qualification notes and an alert, ready for the first conversation.',
      },
    ],
  },

  benefits: {
    eyebrow: 'Business Benefits',
    heading: 'What Better Lead Generation Automation Changes',
    intro:
      'The gains come from consistency, because every inquiry follows the same process. For example, a lead that arrives late in the evening gets the same fast, informed treatment as one that arrives at noon.',
    items: [
      { title: 'No Silent Drop-Offs', description: 'Inquiries from every owned channel become records, including calls nobody picked up.' },
      { title: 'Quicker First Response', description: 'Follow-up starts when the lead arrives, not when someone next checks a notification.' },
      { title: 'Better-Prepared Reps', description: 'Sales conversations open with enrichment data and qualification answers already on file.' },
      { title: 'Focused Sales Time', description: 'Scoring separates strong-fit prospects from casual browsers, so effort goes where it counts.' },
      { title: 'Fuller Calendars', description: 'Qualified leads can book a slot themselves instead of waiting for a back-and-forth email thread.' },
      { title: 'Trustworthy Source Data', description: 'Every record carries its channel, so marketing can see which campaigns produce real opportunities.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI and People',
    heading: 'What AI Handles in Lead Generation, and What Your Team Keeps',
    paragraphs: [
      'AI is good at the repetitive front-line work: reading inquiries, asking the same qualifying questions consistently and keeping records complete. Judgement, relationships and closing belong to your salespeople. Automation will not sell for you, and AI does not replace a good rep.',
      'Once a lead is captured and qualified, the next job is tracking ownership, status and follow-up over time. That stage is handled by [AI lead management software](/products/ai-sales-crm/ai-lead-management-software), which picks up where this page leaves off.',
    ],
    aiDoes: [
      'Creates CRM records from every inbound channel',
      'Adds approved firmographic data to new contacts',
      'Rates each new inquiry against your ideal customer profile',
      'Asks qualifying questions over chat or voice',
      'Sends follow-up emails with a booking link',
      'Flags duplicates and incomplete entries',
    ],
    peopleDo: [
      'Define the ICP and qualification rules',
      'Review leads that fall outside those rules',
      'Approve messaging before it goes live',
      'Lead discovery calls and close the deal',
    ],
  },

  spotlight: {
    eyebrow: 'Conversational Qualification',
    heading: 'Conversational Lead Qualification That Feels Like a Helpful First Call',
    paragraphs: [
      'Static forms can only ask so much before people abandon them, so a different approach helps. A conversational AI agent gathers the same information through a short, natural exchange, over website chat or voice, and adapts its next question to the previous answer.',
      'The agent covers what your reps would ask first: what the prospect needs, whether they fit your offer, any budget signals and when they hope to start. After that, the agent saves the answers to the CRM, the system scores the lead, and a good fit receives a meeting offer straight away.',
    ],
    points: [
      { title: 'Need', description: 'Understands the problem the prospect wants solved and which service it relates to.' },
      { title: 'Fit', description: 'Checks company type, size and role against your ideal customer profile.' },
      { title: 'Budget Signals', description: 'Notes indications of budget or buying authority without pressing for a figure.' },
      { title: 'Timeline', description: 'Records when the prospect plans to act, so your team can prioritise urgent leads.' },
    ],
  },

  audience: {
    eyebrow: 'Who It’s For',
    heading: 'Who Uses These Lead Generation Tools?',
    items: [
      { title: 'Small Businesses', description: 'Lead generation for small business owners who cannot watch every inbox and phone line all day.' },
      { title: 'B2B Companies', description: 'B2B lead generation automation with firmographic enrichment and fit scoring for considered purchases.' },
      { title: 'Service Providers', description: 'Agencies, consultancies and local services that rely on inquiries turning into booked appointments.' },
      { title: 'Marketing Teams', description: 'Teams that want proof of which campaigns and channels bring in qualified prospects.' },
      { title: 'Sales Leaders', description: 'Managers who need reps spending time on fit prospects rather than sorting raw inquiries.' },
      { title: 'RevOps Teams', description: 'Operations leads who want consistent, documented rules from first touch to sales hand-off.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Connecting Lead Sources to Your CRM',
    paragraphs: [
      'These workflows plug into HubSpot, Salesforce, GoHighLevel, Zoho, Pipedrive or Microsoft Dynamics, linked through native connectors, n8n, Make, Zapier or direct APIs. Each enriched contact then sits in [the CRM layer that stores each enriched record](/products/ai-sales-crm/ai-crm-software), ready for your team.',
      'Connection options vary by tool and by the APIs each one exposes. Where a system offers no API, we look at the alternatives during the audit and tell you honestly what is feasible.',
    ],
    groups: [
      { label: 'CRM Platforms', items: ['HubSpot', 'Salesforce', 'GoHighLevel', 'Zoho', 'Pipedrive', 'Microsoft Dynamics'] },
      { label: 'Lead Channels', items: ['Website forms', 'Landing pages', 'Ad lead forms', 'Website chat', 'Inbound email', 'Missed calls'] },
      { label: 'Communication', items: ['Gmail', 'Outlook', 'Slack', 'Microsoft Teams', 'Calendars'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Work With Clickmasters on Lead Generation',
    intro:
      'Our team builds AI agents, workflow automations and integrations for revenue teams every day. Here, we focus that experience on one outcome: no inquiry left behind.',
    items: [
      { title: 'Your Rules, Not a Template', description: 'Scoring criteria, qualifying questions and routing reflect how your business actually wins customers.' },
      { title: 'Inside Your Current Stack', description: 'Everything runs in the CRM and tools you already pay for, with no extra platform to adopt.' },
      { title: 'Honest About Scope', description: 'We work with inbound and owned channels and say clearly what the system will not do.' },
      { title: 'People Stay in Control', description: 'Edge cases, approvals and closing remain with your team by design.' },
      { title: 'Built for Production', description: 'Each step includes error handling, monitoring and alerting, plus written documentation.' },
      { title: 'Yours to Keep', description: 'At the end of the project, you receive the workflows, accounts and documentation.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'Getting Started With AI Lead Generation Tools',
    intro:
      'First, every project starts with a clear view of your current lead flow. Nothing is built until you have approved the plan.',
    steps: [
      { title: 'Free Audit', description: 'We review where your leads come from today, where they stall and which steps are worth automating.' },
      { title: 'Strategy & Mapping', description: 'We document channels, ICP criteria, qualifying questions, routing and exceptions for your sign-off.' },
      { title: 'Build', description: 'Capture workflows, enrichment, scoring and any AI agent are set up inside your tools.' },
      { title: 'Testing', description: 'Sample inquiries run through every path to confirm records, scores and bookings behave as expected.' },
      { title: 'Staged Deployment', description: 'Channels go live in stages, with documentation so your team knows how each part works.' },
      { title: 'Review', description: 'After launch, we review the results together, and your written quote sets out the ongoing support terms.' },
    ],
    note: 'Your written quote, sent after the free audit, covers the capture channels in scope, deliverables, platform and usage costs, support terms and a timeline.',
  },

  cta: {
    bandHeading: 'Find the leads you are already missing',
    heading: 'Put Every Inbound Inquiry to Work',
    description:
      'Book a free, no-obligation audit. We will trace how leads reach you now, show where they slip away and recommend which capture and qualification steps to automate first.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Lead Generation Tools: Frequently Asked Questions',
  faqSideText: 'Wondering how this would work with your own channels? Book a free audit and we will map it out with you.',
  faqs: [
    {
      question: 'What do AI lead generation tools actually do?',
      answer:
        'They capture inquiries from your owned channels, enrich each contact, score it against your ideal customer profile and help book a meeting. The aim is to make sure no existing demand is lost or left waiting.',
    },
    {
      question: 'Do these tools find new prospects through cold outreach?',
      answer:
        'No. Our builds focus on inbound and owned channels such as forms, ads, chat, email and phone. We do not scrape websites or sell contact lists, which keeps your data consented and relevant.',
    },
    {
      question: 'Which lead sources can be connected?',
      answer:
        'Typical sources include website forms, landing pages, ad lead forms, website chat, inbound email and missed calls. What is possible depends on each tool and its APIs, which we confirm during the audit.',
    },
    {
      question: 'How does lead enrichment work?',
      answer:
        'When a new contact arrives, approved data sources add details such as company, role, company size and other firmographics. That context feeds the fit score and helps reps prepare for the first conversation.',
    },
    {
      question: 'What is ideal customer profile scoring?',
      answer:
        'It rates each lead against the traits of the customers you most want to win, such as industry, size or role. As a result, higher-scoring leads move to the front of the queue and reach a rep faster, while weaker matches go to nurture or review.',
    },
    {
      question: 'How does conversational lead qualification work?',
      answer:
        'An AI agent talks with the lead over chat or voice and asks about need, fit, budget signals and timeline. The agent then saves the answers to the CRM, and qualified leads receive a meeting offer.',
    },
    {
      question: 'Is automated lead generation a good fit for small businesses?',
      answer:
        'Often, yes. Smaller teams rarely have someone watching every channel, so automatic capture and follow-up stops inquiries from going cold. A project can start with one or two channels and expand later.',
    },
    {
      question: 'What are the limits of AI in lead generation?',
      answer:
        'AI can capture, sort and ask consistent questions, but it cannot create demand that is not there or close a deal by itself. Unclear cases go to a person, and anyone claiming AI closes sales on its own is overselling.',
    },
    {
      question: 'Do I need a new CRM or software subscription from you?',
      answer:
        'No. We build inside the CRM and tools you already use, including HubSpot, Salesforce, GoHighLevel, Zoho, Pipedrive and Microsoft Dynamics. When the project is delivered, you keep the workflows, accounts and documentation.',
    },
    {
      question: 'What do AI lead generation tools cost, and where do we begin?',
      answer:
        'Cost depends on the number of channels, integrations and AI components involved. After a free audit, you receive a written quote covering scope, deliverables, platform and usage costs, support terms and a timeline.',
    },
  ],
};
