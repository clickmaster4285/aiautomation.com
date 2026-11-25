// content/products/industry-specific-ai-automation/ai-legal-automation.ts
// Copy + SEO for /products/industry-specific-ai-automation/ai-legal-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Primary keyword is "legal workflow automation" ("AI legal automation" is secondary). The broader sector
//   overview belongs to /industries/ai-automation-for-law-firms; contract review/clause extraction belongs to the
//   AI Contract Analysis page. This page goes step by step through the matter lifecycle.
// - Automation does NOT give legal advice, decide whether to take a matter, clear conflicts, decide terms or scope,
//   calculate deadlines/docketing, or sign anything. Lawyers review all legal output and make every legal decision;
//   the person responsible for conflicts makes the conflicts call; the billing partner approves every invoice.
// - Confidentiality phrasing (do not change): "We design with confidentiality in mind; your professional
//   obligations on client confidentiality and data handling are a shared responsibility that depends on your
//   specific setup and is confirmed for your project." No compliance or certification claims.
// - Practice management, document management, conflicts and e-signature connections only "where the system offers
//   an API or integration, confirmed during discovery". Never name a practice-management system as a standard
//   integration.
// - Use cases are examples, scoped per project. No statistics, percentages, prices, testimonials, client names,
//   "leading/best" claims, guarantees or ongoing-support promises beyond "monitoring and improvement after launch
//   is part of our process; scope and terms are agreed per project".
// - The client owns the automations, accounts and documentation and pays platform and AI usage costs directly.
//
// Inline links use [anchor text](/path). This page contains EXACTLY EIGHT contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_LEGAL_AUTOMATION_PATH = '/products/industry-specific-ai-automation/ai-legal-automation';

export const aiLegalAutomationSeo: HubSeo = {
  name: 'AI Legal Automation',
  path: AI_LEGAL_AUTOMATION_PATH,
  title: 'Legal Workflow Automation for Law Firms | Clickmasters',
  description:
    'Legal workflow automation for law firms and in-house teams: intake, conflict prep, engagement letters and billing, with lawyers approving each step.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'Industry-Specific AI Automation', path: '/products/industry-specific-ai-automation' },
    { name: 'AI Legal Automation', path: AI_LEGAL_AUTOMATION_PATH },
  ],
};

export const aiLegalAutomationKeywords = [
  'legal workflow automation',
  'AI legal automation',
  'law firm intake automation',
  'legal document automation',
  'matter onboarding automation',
  'conflict check preparation',
  'engagement letter automation',
  'legal billing automation',
  'client update automation for law firms',
  'practice management integration',
  'legal admin automation',
  'deadline reminder workflows',
  'what legal work can be automated with AI',
  'how to automate client intake at a law firm',
  'can AI draft engagement letters',
  'does AI legal automation replace lawyers',
  'automate matter opening checklist',
  'legal request intake for in-house teams',
  'pre-bill review workflow automation',
];

// The eight contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'industry-specific AI automation', href: '/products/industry-specific-ai-automation', section: 'What Is Legal Workflow Automation? (intro)' },
  { anchor: 'AI automation for law firms', href: '/industries/ai-automation-for-law-firms', section: 'What Is Legal Workflow Automation? (intro)' },
  { anchor: 'knowledge assistant that draws on your firm’s precedents and procedures', href: '/services/ai-knowledge-assistants', section: 'Key Capabilities (features intro)' },
  { anchor: 'legal intake chatbot', href: '/solutions/ai-chatbots/for-law-firms', section: 'The Matter Lifecycle (spotlight)' },
  { anchor: 'CRM automation built for law firms', href: '/solutions/crm-automation/for-law-firms', section: 'The Matter Lifecycle (spotlight)' },
  { anchor: 'document automation for law firms', href: '/solutions/document-automation/for-law-firms', section: 'The Matter Lifecycle (spotlight)' },
  { anchor: 'AI contract analysis', href: '/products/ai-document-data-intelligence/ai-contract-analysis', section: 'Practical Use Cases (extras)' },
  { anchor: 'process optimization before automation', href: '/products/general-ai-automation/ai-process-optimization', section: 'How We Implement Legal Workflow Automation' },
] as const;

export const aiLegalAutomation: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Legal Automation',
    heading: 'Legal Workflow Automation for Law Firms and In-House Teams',
    accentWords: 3,
    subheading:
      'Every matter carries a layer of administration before, around and after the legal work itself: intake forms, conflict searches, engagement letters, matter opening, status updates and billing. Legal workflow automation handles those repeatable steps so lawyers and staff spend their time on clients and legal judgment. Clickmasters builds these workflows in the tools your firm or department already uses, and lawyers review and approve all legal output.',
    primaryCta: { text: 'Book a Free Legal Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/datas.png',
    imageAlt:
      'Generic illustration of business data flowing between connected systems, representing intake, matter and billing records moving through a legal workflow',
    imageWidth: 2370,
    imageHeight: 1264,
    marquee: ['Client intake', 'Conflict check preparation', 'Engagement letters', 'Matter opening', 'Client updates', 'Billing admin'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is Legal Workflow Automation?',
    paragraphs: [
      'Legal workflow automation is the use of workflow tools and AI models to run the administrative steps of legal matters: capturing enquiries, organizing intake, preparing conflict searches, drafting documents from approved templates, sending client updates and preparing billing. Lawyers review every legal document and make every legal decision; the automation prepares the work.',
      'This page belongs to our [industry-specific AI automation](/products/industry-specific-ai-automation) range and goes step by step through the matter lifecycle. For a broader sector overview, see [AI automation for law firms](/industries/ai-automation-for-law-firms).',
    ],
    problems: [
      'Enquiries come by phone, web form and email, and each fee earner collects slightly different details, so files start incomplete.',
      'Party names have to be gathered, formatted and searched before anyone can confirm a new matter.',
      'Staff copy names, scope and fee terms from intake notes into an engagement letter template, then check it again.',
      'Folders, numbers, tasks and contacts are set up across several systems when a matter opens.',
      'Partners and associates field status calls that could have been answered by a short, approved message.',
      'Chasing time entries, preparing pre-bills and sending reminders all compete with billable work.',
      'Reminders sit in personal calendars and spreadsheets rather than one dependable workflow.',
    ],
  },

  explainer: {
    eyebrow: 'Where the Line Sits',
    heading: 'Automation Prepares the Work, Lawyers Decide',
    paragraphs: [
      'Automation does not give legal advice, decide whether to take a matter, clear conflicts or sign anything. It gathers information, fills templates, routes tasks and drafts messages. A lawyer or authorized staff member reviews and approves anything with legal effect.',
      'Client information is sensitive, so each automation sees only the data it needs, runs in your accounts where possible, and logs what it did. We confirm AI provider data settings during discovery. We design with confidentiality in mind; your professional obligations on client confidentiality and data handling are a shared responsibility that depends on your specific setup and is confirmed for your project.',
    ],
    points: [
      { title: 'What Automation Does', description: 'Gathers information, fills templates, routes tasks and drafts messages.' },
      { title: 'What It Never Does', description: 'Gives legal advice, decides whether to take a matter, clears conflicts or signs anything.' },
      { title: 'Limited Data Access', description: 'Each automation sees only the data it needs and runs in your accounts where possible.' },
      { title: 'A Record of Every Step', description: 'Each automation logs what it did, and AI provider data settings are confirmed during discovery.' },
    ],
  },

  features: {
    eyebrow: 'Key Capabilities',
    heading: 'What Legal Workflow Automation Covers',
    intro:
      'Each capability prepares work for a lawyer or staff member to review. For internal questions, a [knowledge assistant that draws on your firm’s precedents and procedures](/services/ai-knowledge-assistants) answers staff from your own documents, with sources.',
    items: [
      { title: 'Law Firm Intake Automation', description: 'Structured forms, AI summaries and routing to the right practice group.' },
      { title: 'Conflict Check Preparation', description: 'Gathering and formatting names so the search is ready to run.' },
      { title: 'Engagement Letter Automation', description: 'Drafts built from your templates and intake data, held for lawyer review.' },
      { title: 'Matter Onboarding Automation', description: 'Folders, numbers, tasks and contacts created in one pass.' },
      { title: 'Legal Document Automation', description: 'First drafts of standard documents assembled from your clause library.' },
      { title: 'Client Update Automation', description: 'Milestone messages drafted for lawyer approval.' },
      { title: 'Deadline Reminder Workflows', description: 'Reminders based on dates your team enters, sent to the right people. Docketing and deadline calculation stay with your team.' },
      { title: 'Billing Admin', description: 'Time entry reminders, pre-bill drafts and payment reminders on schedule, with invoices approved by the billing partner.' },
      { title: 'Internal Knowledge', description: 'Answers to staff questions drawn from your firm’s own precedents and procedures, with sources.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'The Matter Lifecycle, Step by Step',
    intro: 'Here is an example matter workflow, scoped per project.',
    steps: [
      { title: 'Enquiry', description: 'A chatbot answers general questions about practice areas and office details, collects contact information and books a consultation. It does not comment on the person’s legal situation.' },
      { title: 'Intake', description: 'A structured intake form is summarized by AI into a short matter overview and the record is created where an API exists. A lawyer decides whether to proceed.' },
      { title: 'Conflict Check Preparation', description: 'Names of parties, related entities and opposing counsel are gathered, formatted and prepared for search. The person responsible for conflicts makes the call.' },
      { title: 'Engagement', description: 'Once the lawyer approves the matter, the letter is drafted from your approved template. The lawyer reviews, edits and sends it, or approves it for e-signature.' },
      { title: 'Matter Opening and Document Assembly', description: 'On signature, folders, a matter number, tasks and contacts are set up, and first drafts of standard documents go to a lawyer for review.' },
      { title: 'Client Updates', description: 'At agreed milestones, a short update is drafted. The responsible lawyer approves it before it is sent.' },
      { title: 'Billing Admin', description: 'Fee earners are reminded about missing time entries, pre-bills are drafted and payment reminders go out. The billing partner approves every invoice.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Benefits for Law Firms and Legal Departments',
    intro: 'The administration around each matter runs on schedule, and lawyers spend their time on review and judgment.',
    items: [
      { title: 'Complete New Matters', description: 'New matters start with complete, consistent information.' },
      { title: 'Review, Not Rebuild', description: 'Lawyers review drafts instead of building them from scratch.' },
      { title: 'Regular Client Updates', description: 'Clients receive regular updates without partners writing each one.' },
      { title: 'Billing on Schedule', description: 'Billing admin happens on schedule rather than at month-end in a rush.' },
      { title: 'A Clear Record', description: 'Every automated step leaves a record of what happened and who approved it.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Lawyers Stay in Control',
    heading: 'What the Automation Prepares and What Lawyers Approve',
    paragraphs: [
      'The automation handles administration and preparation, such as gathering information, filling templates and routing tasks. Lawyers review all legal output, give all advice and make every legal decision.',
      'Intake staff follow up on enquiries, the person responsible for conflicts clears or declines, the responsible lawyer approves client messages before sending, and the billing partner approves invoices.',
    ],
    aiDoes: [
      'Answers general questions and books consultations',
      'Structures and summarizes intake forms',
      'Gathers and formats party names for conflict searches',
      'Drafts engagement letters from approved templates',
      'Fills standard templates and clauses',
      'Drafts milestone updates and chases time entries',
    ],
    peopleDo: [
      'Decide whether to take the matter',
      'Clear or decline conflicts',
      'Review every draft and send engagement letters',
      'Approve client updates before sending',
      'Approve every invoice',
    ],
  },

  spotlight: {
    eyebrow: 'Approval Points',
    heading: 'Who Approves What Across the Matter Lifecycle',
    paragraphs: [
      'At the front door, a [legal intake chatbot](/solutions/ai-chatbots/for-law-firms) can answer general questions about practice areas and office details, collect contact information and book a consultation. Intake records are created in your CRM or practice management system where an API exists; see [CRM automation built for law firms](/solutions/crm-automation/for-law-firms) for how contacts and pipelines are kept current.',
      'When the matter opens, legal document automation assembles first drafts of standard documents from your templates and clause library. Our page on [document automation for law firms](/solutions/document-automation/for-law-firms) covers this in more detail. Every draft goes to a lawyer for review.',
    ],
    points: [
      { title: 'Enquiries', description: 'Answers general questions, captures details, books consultations. Intake staff follow up; lawyers handle anything legal.' },
      { title: 'Intake', description: 'Structures the form and summarizes it. A lawyer decides whether to take the matter.' },
      { title: 'Conflict Check Preparation', description: 'Gathers and formats party names, prepares the search. The person responsible for conflicts clears or declines.' },
      { title: 'Engagement Letters', description: 'Drafts from the approved template. A lawyer reviews and sends.' },
      { title: 'Document Assembly', description: 'Fills standard templates and clauses. A lawyer reviews every draft.' },
      { title: 'Client Updates', description: 'Drafts milestone messages. The responsible lawyer approves before sending.' },
      { title: 'Billing Admin', description: 'Chases time entries, prepares pre-bills, sends reminders. The billing partner approves invoices.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Use Cases',
      heading: 'Practical Use Cases for Legal Teams',
      accentWords: 2,
      paragraphs: [
        'Each example below is scoped per project once discovery is complete. Legal admin automation usually starts at the front door: consistent intake, faster consultation booking and engagement letters that no longer take an afternoon to prepare.',
        'Legal departments can route requests from the business through a single intake form, sort them by type and urgency, and send standard requests such as NDAs to the right workflow. When the work involves reviewing contracts, our [AI contract analysis](/products/ai-document-data-intelligence/ai-contract-analysis) page explains how clause extraction and risk flags are prepared for lawyer review.',
      ],
      points: [
        { title: 'Small and Mid-Sized Law Firms', description: 'Consistent intake, faster consultation booking and engagement letters that no longer take an afternoon to prepare.' },
        { title: 'Practice Groups With High Matter Volume', description: 'Matter opening, standard document assembly, client updates and legal billing automation, so fee earners spend more of the day on substantive work.' },
        { title: 'In-House Legal Teams', description: 'Business requests routed through a single intake form, sorted by type and urgency, with standard requests such as NDAs sent to the right workflow.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Legal Workflow Automation Is For',
    items: [
      { title: 'Managing Partners', description: 'Partners who want matters to start complete and billing admin to run on schedule.' },
      { title: 'Practice Managers', description: 'Managers coordinating intake, matter opening and templates across fee earners.' },
      { title: 'Legal Operations Leads', description: 'Leads looking to automate administrative steps without handing legal judgment to software.' },
      { title: 'High-Volume Practice Groups', description: 'Teams handling many similar matters with repeatable documents and updates.' },
      { title: 'In-House Legal Teams', description: 'Departments receiving requests from across the business that need sorting and routing.' },
      { title: 'General Counsel', description: 'Heads of legal who want a clear record of what was automated and who approved it.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Technologies and Integrations',
    paragraphs: [
      'We build inside your firm’s existing tools and accounts: Zapier, Make or n8n (which can be self-hosted for tighter data control); OpenAI (GPT), Anthropic Claude, Google Gemini or open-source models, chosen with your data requirements in mind; Outlook, Gmail, Microsoft Teams and Slack, plus Twilio for SMS; HubSpot, Salesforce, Airtable and SQL databases. Connections use REST APIs, webhooks and MCP connectors, depending on what each system supports.',
      'Practice management integration, document management and e-signature connections are built only where the system offers an API or integration, confirmed during discovery. If a connection is not practical, we tell you and suggest an alternative such as working from exports or email notifications.',
    ],
    groups: [
      { label: 'Automation Platforms', items: ['Zapier', 'Make', 'n8n'] },
      { label: 'AI Models', items: ['OpenAI (GPT)', 'Anthropic Claude', 'Google Gemini', 'Open-source models'] },
      { label: 'Communication', items: ['Outlook', 'Gmail', 'Microsoft Teams', 'Slack', 'Twilio'] },
      { label: 'CRMs and Data', items: ['HubSpot', 'Salesforce', 'Airtable', 'SQL databases'] },
      { label: 'Connections', items: ['REST APIs', 'Webhooks', 'MCP connectors'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Legal Teams Work With Clickmasters',
    intro: 'We build the administration around your matters in the tools your team already works in, with lawyers approving every legal step.',
    items: [
      { title: 'Your Tools, Your Accounts', description: 'We build where your team already works, not on a separate platform.' },
      { title: 'You Own It', description: 'You own the automations, accounts and documentation, and you pay platform and AI usage costs directly.' },
      { title: 'Lawyers Stay in Control', description: 'Every legal document, decision and client message with legal content is reviewed by a lawyer.' },
      { title: 'A Free Starting Point', description: 'The audit shows which steps to automate first, with no obligation.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Implement Legal Workflow Automation',
    intro:
      'We follow the same six published steps on every project, adapted to how your firm runs matters, and nothing is built until you have approved the plan. Where a process has unnecessary handoffs, we look at [process optimization before automation](/products/general-ai-automation/ai-process-optimization) so you are not automating a workaround.',
    steps: [
      { title: 'Discovery', description: 'We walk through your matter lifecycle with partners, staff and operations, looking at systems, templates and where work waits.' },
      { title: 'Strategy and Mapping', description: 'We map triggers, decision points, actions, integrations and approval points for each step.' },
      { title: 'Development', description: 'We build the workflows, templates and connections in your accounts.' },
      { title: 'Testing', description: 'We test with sample matters, including edge cases and failure scenarios such as incomplete intake, unusual party names and unavailable systems.' },
      { title: 'Deployment', description: 'We deploy into your live environment and hand over documentation and access so your team can run it.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'Most firms already know which step causes the most chasing. The free audit tells you which tasks are worth automating first and which are not, with no obligation to go ahead.',
  },

  cta: {
    bandHeading: 'See where your matter workflow stalls',
    heading: 'Take the Admin Out of Every Matter',
    description:
      'Pick the step in your matter lifecycle that causes the most chasing, and we will show you what automating it involves and exactly where lawyers approve.',
    primary: { text: 'Book a Free Legal Automation Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Legal Workflow Automation: Common Questions',
  faqSideText: 'Not sure which step of your matter lifecycle to automate first? Book a free audit and we will review it with you.',
  faqs: [
    {
      question: 'What legal work can be automated with AI?',
      answer:
        'The administrative work around legal matters can be automated, including intake, conflict check preparation, engagement letter drafts, matter opening, standard document assembly, client updates and billing admin. Legal analysis, advice and decisions stay with lawyers. The automation prepares drafts and information for their review.',
    },
    {
      question: 'How do you automate client intake at a law firm?',
      answer:
        'Client intake is automated with a structured online form or intake chatbot that collects consistent details, an AI summary of each submission, and routing to the right lawyer or practice group. The record is created in your CRM or practice management system where an API exists. A lawyer reviews the summary and decides whether to take the matter.',
    },
    {
      question: 'Can AI draft engagement letters?',
      answer:
        'Yes, AI can draft engagement letters from your firm’s approved templates, filling in client details, scope and agreed terms from intake. The draft is held for lawyer review, and the lawyer edits, approves and sends it. The automation does not decide terms or scope.',
    },
    {
      question: 'Does AI legal automation replace lawyers?',
      answer:
        'No. AI legal automation handles administration and preparation, such as gathering information, filling templates and routing tasks. Lawyers review all legal output, give all advice and make every legal decision.',
    },
    {
      question: 'Can automation run conflict checks?',
      answer:
        'Automation can prepare conflict checks by gathering and formatting party names and running the search in your conflicts system where an API or integration exists. The results go to the person responsible for conflicts, who decides whether the matter can proceed.',
    },
    {
      question: 'Will it integrate with our practice management system?',
      answer:
        'It can, where your practice management system offers an API or integration, which we confirm during discovery. If it does not, we look at alternatives such as exports, email notifications or working through your CRM, and we tell you if a connection is not practical.',
    },
    {
      question: 'How is client confidentiality handled?',
      answer:
        'Each automation is designed to access only the data it needs, run in your accounts where possible and keep a log of its actions, and AI provider data settings are confirmed in discovery. We design with confidentiality in mind; your professional obligations are a shared responsibility that depends on your setup and is confirmed for your project.',
    },
  ],
};
