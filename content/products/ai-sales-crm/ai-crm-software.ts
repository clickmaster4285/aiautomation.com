// content/products/ai-sales-crm/ai-crm-software.ts
// Copy + SEO for /products/ai-sales-crm/ai-crm-software.
//
// Accuracy rules for this page (keep them when editing):
// - Only capabilities already stated elsewhere on the site. No invented integrations or data providers.
// - No statistics, prices, testimonials, or guarantees.
// - Clickmasters builds this inside the client's existing CRM — it is not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_CRM_SOFTWARE_PATH = '/products/ai-sales-crm/ai-crm-software';

export const aiCrmSoftwareSeo: HubSeo = {
  name: 'AI CRM Software',
  path: AI_CRM_SOFTWARE_PATH,
  title: 'AI CRM Software for Clean, Self-Updating Data | Clickmasters',
  description:
    'AI CRM software built into the CRM you already use: enriched, de-duplicated records, call summaries and next-step suggestions. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Sales CRM', path: '/products/ai-sales-crm' },
    { name: 'AI CRM Software', path: AI_CRM_SOFTWARE_PATH },
  ],
};

export const aiCrmSoftwareKeywords = [
  'AI CRM software',
  'AI-powered CRM',
  'intelligent CRM',
  'CRM with AI',
  'AI CRM for small business',
  'CRM data enrichment',
  'CRM data hygiene',
  'AI CRM integration',
  'add AI to HubSpot',
  'add AI to Salesforce',
  'CRM automation software',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI Sales CRM', href: '/products/ai-sales-crm', section: 'What Makes a CRM Intelligent?' },
  { anchor: 'capturing, scoring and assigning new leads', href: '/products/ai-sales-crm/ai-lead-management-software', section: 'Why CRM Data Quality Comes First' },
  { anchor: 'automating outreach and follow-up sequences', href: '/products/ai-sales-crm/ai-sales-automation-software', section: 'Where AI Helps' },
  { anchor: 'rules-based CRM automation', href: '/solutions/crm-automation', section: 'Records That Update Themselves' },
  { anchor: 'HubSpot automation work', href: '/platforms/hubspot-automation-services', section: 'Integrations' },
] as const;

export const aiCrmSoftware: ProductPageContent = {
  hero: {
    badge: 'AI CRM Software',
    heading: 'AI CRM Software That Keeps Your Customer Data Clean and Current',
    accentWords: 5,
    subheading:
      'Our AI CRM software adds an intelligence layer to the platform you already run. It enriches records, catches duplicates and summarizes activity on the contact, so your reports finally rest on data your team believes.',
    primaryCta: { text: 'Book a Free CRM Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-crm-software-intelligent-crm-system.webp',
    imageAlt: 'Dark blue digital graphic with a shield and gear emblem around the word CRM, representing secure, intelligent CRM data',
    imageWidth: 1200,
    imageHeight: 675,
    marquee: ['Clean CRM data', 'Duplicate detection', 'Record enrichment', 'Activity summaries', 'Trusted reporting'],
  },

  intro: {
    eyebrow: 'The Basics',
    heading: 'What Makes a CRM Intelligent?',
    paragraphs: [
      'AI CRM software is a set of AI components and workflows that sit inside your existing CRM and look after the data in it. Instead of waiting for reps to type, it fills gaps, merges duplicates, logs activity and writes short summaries where people will actually read them.',
      'A CRM only becomes intelligent when the records underneath it are reliable. So we start with data quality and add summaries, suggestions and reporting on top, inside the CRM you already pay for. This page covers that data and record layer; the wider [AI Sales CRM](/products/ai-sales-crm) explains how it fits into lead handling and pipeline work.',
    ],
    problems: [
      'The same company appears three different ways, each with half the details.',
      'Key fields such as role, company size or source are blank on many records.',
      'Notes from calls and email threads never make it onto the contact.',
      'Managers export to spreadsheets because nobody trusts the CRM reports.',
    ],
  },

  explainer: {
    eyebrow: 'System of Record',
    heading: 'Why CRM Data Quality Comes First in AI CRM Software',
    paragraphs: [
      'Every AI feature in a CRM reads from the records you already have. If a contact is duplicated or out of date, a summary built on it will be confidently wrong, so clean data is the foundation.',
      'We treat the CRM as the single system of record. Workflows write information from forms, inboxes and calendars back to one contact, company and deal. The work of [capturing, scoring and assigning new leads](/products/ai-sales-crm/ai-lead-management-software) then starts from records that are already in good shape.',
    ],
    points: [
      { title: 'One Record per Contact', description: 'The system detects likely duplicates and flags or merges them under rules you approve, keeping history in one place.' },
      { title: 'Complete Where It Matters', description: 'Workflows flag records that lack the fields your process depends on, and approved data fills the gaps where possible.' },
      { title: 'Consistent Formatting', description: 'Standard formats for company names, job titles and sources let filters and reports group them correctly.' },
      { title: 'Ongoing, Not One-Off', description: 'Cleaning, de-duplication and enrichment run continuously in the background instead of as an annual clean-up project.' },
    ],
  },

  features: {
    eyebrow: 'Core Capabilities',
    heading: 'What Our AI-Powered CRM Layer Includes',
    intro:
      'We configure each capability around your fields, objects and team structure, turning a passive database into a CRM that maintains itself.',
    items: [
      {
        title: 'CRM Data Enrichment',
        description:
          'Approved company, role, size and firmographic details fill out new and existing records.',
        icon: 'database',
      },
      {
        title: 'Duplicate Detection and Merging',
        description:
          'The system merges clear matches automatically and queues the rest for a person to confirm.',
        icon: 'layers',
      },
      {
        title: 'Incomplete-Record Flags',
        description:
          'Records missing required details appear in a review list while gaps are still easy to fix.',
        icon: 'alert',
      },
      {
        title: 'Self-Updating Records',
        description:
          'Meetings, replies and proposals write their outcome back to the right contact and deal, without anyone copying details across.',
        icon: 'refresh',
      },
      {
        title: 'Summaries on the Record',
        description:
          'AI condenses calls, email threads and CRM notes into a short summary on the contact or deal.',
        icon: 'history',
      },
      {
        title: 'Next-Action Suggestions',
        description:
          'The record shows a suggested next step that a rep can accept, adjust or ignore.',
        icon: 'target',
      },
      {
        title: 'Reporting You Can Trust',
        description:
          'Pipeline, forecast and activity reports draw on cleaned data, so the numbers match the records.',
        icon: 'chart',
      },
      {
        title: 'Alerts for the Right People',
        description:
          'When a high-priority record changes, its owner gets a notification in email, Slack or Microsoft Teams.',
        icon: 'mail',
      },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How AI CRM Software Works Inside Your Existing Platform',
    intro:
      'The system is a set of workflows connected to your CRM. Rules govern each automatic change, and anything uncertain goes to a person.',
    steps: [
      { title: 'Connect', description: 'We link your CRM to the forms, inboxes, calendars and messaging tools that create or change customer information.' },
      { title: 'Assess', description: 'We check existing records for duplicates and gaps, then agree the clean-up rules with you.' },
      { title: 'Clean & Enrich', description: 'Workflows merge or queue duplicates, fill gaps with approved data and standardize formatting.' },
      { title: 'Capture Activity', description: 'As calls, emails and meetings happen, the system logs and summarizes them on the correct contact and deal.' },
      { title: 'Suggest & Alert', description: 'Each record shows a recommended next action, and owners hear about important changes straight away.' },
      { title: 'Report', description: 'Dashboards and scheduled reports draw on the cleaned data, giving managers a view they can act on.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Changes When Your CRM Data Can Be Trusted',
    intro:
      'Most of the value comes from removing doubt: when people trust the records, they stop keeping private spreadsheets.',
    items: [
      { title: 'Fewer Wasted Conversations', description: 'Reps see full context before they call, including who else is already in touch.' },
      { title: 'Less Data Entry', description: 'Activity logging, field updates and routine record maintenance happen in the background.' },
      { title: 'Reliable Segmentation', description: 'Consistent fields mean lists, filters and campaigns reach the people they are meant to.' },
      { title: 'Quicker Hand-Overs', description: 'A summary on the record lets a new owner pick up an account without reading every email.' },
      { title: 'Reports Leaders Use', description: 'Forecast and activity numbers line up with the underlying records.' },
      { title: 'A CRM That Scales', description: 'Hygiene rules keep running as volume grows and new sources are added.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Where AI Helps',
    heading: 'What AI Handles in Your CRM and What Stays With Your Team',
    paragraphs: [
      'AI is good at reading, matching and condensing large amounts of text and data. That makes it well suited to record upkeep, summaries and suggestions, while judgement calls remain with people. It will not sell for you, and a vendor claiming otherwise is overselling.',
      'This page is about the CRM and its data. If your priority is [automating outreach and follow-up sequences](/products/ai-sales-crm/ai-sales-automation-software), that is covered separately and builds on the same clean records.',
    ],
    aiDoes: [
      'Spots likely duplicate contacts and companies',
      'Flags records with missing or inconsistent fields',
      'Adds approved enrichment data to records',
      'Summarizes calls, email threads and notes onto the record',
      'Suggests a next action based on recent activity',
      'Keeps reports in step with the underlying data',
    ],
    peopleDo: [
      'Confirm merges the rules are unsure about',
      'Decide which data sources and fields are approved',
      'Choose whether to act on a suggested next step',
      'Own customer relationships, negotiation and closing',
    ],
  },

  spotlight: {
    eyebrow: 'Self-Maintaining Records',
    heading: 'Records That Update Themselves After Every Interaction',
    paragraphs: [
      'In most CRMs, a record is only as current as the last time a rep remembered to edit it. Here, events do the updating: a booked meeting, a reply or a sent proposal changes the relevant fields, logs the activity and refreshes the summary.',
      'Underneath, we use [rules-based CRM automation](/solutions/crm-automation) for the predictable steps and reserve AI for the parts that involve reading or writing text. Consequently, you can trace every change back to its trigger.',
    ],
    points: [
      { title: 'Event-Driven Updates', description: 'Fields and stages change when something real happens, not when someone finds time.' },
      { title: 'Activity Logged Automatically', description: 'Workflows attach emails, meetings and calls to the correct contact and deal.' },
      { title: 'Living Summaries', description: 'New activity refreshes the record summary, so it reflects the latest conversation.' },
      { title: 'Traceable Changes', description: 'Each automated edit links to the workflow that made it, keeping audits simple.' },
    ],
  },

  audience: {
    eyebrow: 'Who It’s For',
    heading: 'Who Needs an Intelligent CRM?',
    items: [
      { title: 'Small Businesses', description: 'An AI CRM for small business teams that cannot spare someone to tidy records every week.' },
      { title: 'RevOps and Sales Ops', description: 'Teams responsible for CRM health who want hygiene rules that run on their own.' },
      { title: 'Sales Leaders', description: 'Managers who need forecast and activity reports they can present without caveats.' },
      { title: 'Founders', description: 'Owners who want a single, accurate view of customers before hiring more salespeople.' },
      { title: 'Account Teams', description: 'People inheriting accounts who need a quick summary of history and open next steps.' },
      { title: 'Multi-Tool Businesses', description: 'Companies whose customer data is spread across inboxes, calendars, forms and messaging apps.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'AI CRM Integration With HubSpot, Salesforce and More',
    paragraphs: [
      'You do not need to migrate to get a CRM with AI. We add the intelligence layer to HubSpot, Salesforce, GoHighLevel, Zoho, Pipedrive and Microsoft Dynamics through native connections, n8n, Make, Zapier or direct APIs. Teams on HubSpot can read more about our [HubSpot automation work](/platforms/hubspot-automation-services).',
      'Exactly what can be connected depends on each CRM and the APIs its surrounding tools expose. Where a system offers no API, we look at the alternatives during the audit instead of promising a link in advance.',
    ],
    groups: [
      { label: 'CRM Platforms', items: ['HubSpot', 'Salesforce', 'GoHighLevel', 'Zoho', 'Pipedrive', 'Microsoft Dynamics'] },
      { label: 'Data Sources', items: ['Website forms', 'Landing pages', 'Ads', 'Chat', 'Inbound email'] },
      { label: 'Communication', items: ['Gmail', 'Outlook', 'Slack', 'Microsoft Teams', 'Calendars'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Teams Choose Clickmasters for CRM Intelligence',
    intro:
      'We design, build and maintain AI agents, workflow automations and system integrations for sales, support and operations teams. In CRM projects, the aim is data your people can rely on.',
    items: [
      { title: 'Keep Your Current CRM', description: 'No migration and no new interface to learn.' },
      { title: 'Data Quality Before Features', description: 'We fix the foundation first, so summaries and suggestions are built on accurate records.' },
      { title: 'Rules You Approve', description: 'You agree the merge logic, approved data sources and required fields before anything runs.' },
      { title: 'People Stay in Control', description: 'Uncertain changes go to a person, and suggestions remain suggestions until someone acts on them.' },
      { title: 'Built for Production', description: 'Every step includes error handling, monitoring and alerting, plus documentation of how it works.' },
      { title: 'Yours to Keep', description: 'At the end of the project, we hand the workflows, accounts and documentation over to you.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'Getting Started With AI CRM Software',
    intro:
      'Every project begins with a look at your current CRM and the tools feeding it. You review and approve the plan before any build work starts.',
    steps: [
      { title: 'Free Audit', description: 'A no-obligation review of your CRM data, connected tools and the record problems costing you the most.' },
      { title: 'Strategy & Mapping', description: 'We document the objects, fields, merge rules, data sources and exceptions for your sign-off.' },
      { title: 'Build', description: 'Hygiene workflows, enrichment, summaries and alerts are built inside your CRM.' },
      { title: 'Testing', description: 'We test merge logic and updates on sample records before touching live data.' },
      { title: 'Staged Deployment', description: 'Changes go live in stages, with documentation for the people who own the CRM.' },
      { title: 'Review', description: 'Results are reviewed after launch, and ongoing support terms are set out in your written quote.' },
    ],
    note: 'After the audit, we send a written quote for your CRM project: scope, deliverables, platform and usage costs, support terms and a timeline.',
  },

  cta: {
    bandHeading: 'Find out what your CRM data is missing',
    heading: 'Make the CRM You Already Have Intelligent',
    description:
      'Book a free, no-obligation audit. We will look at the state of your records and connected tools, explain where AI would genuinely help, and say plainly where it would not.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI CRM Software: Common Questions',
  faqSideText: 'Wondering how this would work with your own CRM and data? Book a free audit and we will look at it with you.',
  faqs: [
    {
      question: 'What is AI CRM software?',
      answer:
        'It is an intelligence layer that keeps CRM records clean, enriched and current, summarizes activity and suggests next steps. Clickmasters builds it inside your existing CRM rather than selling a separate app.',
    },
    {
      question: 'Can I add AI to HubSpot or Salesforce without switching CRMs?',
      answer:
        'Yes. We work inside HubSpot, Salesforce, GoHighLevel, Zoho, Pipedrive and Microsoft Dynamics. Your data and team habits stay in place while the new workflows run alongside them.',
    },
    {
      question: 'How does AI improve CRM data hygiene?',
      answer:
        'It detects likely duplicates, flags records with missing or inconsistent fields and standardizes values such as company names and sources. These checks run continuously, so the database does not drift back into disorder.',
    },
    {
      question: 'Where does enrichment data come from?',
      answer:
        'Enrichment uses data sources that you approve during the strategy stage. We agree which fields may be filled automatically and which must be confirmed by a person.',
    },
    {
      question: 'Will the AI merge records without asking?',
      answer:
        'Only where the match is clear under rules you have approved. Uncertain matches go to a review queue so someone on your team can confirm or reject them.',
    },
    {
      question: 'What do summaries and next-action suggestions look like?',
      answer:
        'A short summary of recent calls, emails and notes appears on the contact or deal, along with a suggested next step. Reps decide whether to act on it, change it or ignore it.',
    },
    {
      question: 'Is an AI-powered CRM suitable for a small business?',
      answer:
        'Yes. Smaller teams rarely have time for data clean-ups, so automated hygiene and activity logging help quickly. A project can begin with one or two problems and expand later.',
    },
    {
      question: 'What can AI not do in a CRM?',
      answer:
        'It cannot build relationships, negotiate or close deals, and it does not replace salespeople. Its output is also limited by the data it can see, which is why we fix record quality before adding suggestions.',
    },
    {
      question: 'What if one of our tools has no API?',
      answer:
        'Connections depend on what each CRM and tool makes available. If a system has no API, we assess alternative approaches during the audit and tell you honestly what is feasible.',
    },
    {
      question: 'What does AI CRM software cost to implement?',
      answer:
        'Cost depends on your CRM, the number of connected tools, the volume of records and the AI components involved. You start with a free audit, after which you receive a written quote listing scope, deliverables, platform and usage costs, support terms and a timeline.',
    },
  ],
};
