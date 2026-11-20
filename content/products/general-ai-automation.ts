// content/products/general-ai-automation.ts
// Copy + SEO for /products/general-ai-automation (category parent).
//
// Accuracy rules for this page (keep them when editing):
// - Primary keyword is "AI automation for business". Do NOT target "AI automation for small business" (owned by the
//   ai-automation-solutions child), "AI automation tools" (ai-automation-tools-for-businesses), "custom AI
//   automation software", "enterprise AI automation", "AI-powered business software", "intelligent business
//   automation", "AI integration services", "end-to-end AI automation" or "AI process optimization" as primary;
//   each belongs to its child page. This page routes readers by situation.
// - Only capabilities stated elsewhere on the site: rules move data between systems, AI reads, sorts and drafts,
//   people approve anything that needs judgment; exceptions passed to a person with context; the published
//   six-step process; the free automation audit (no obligation).
// - Platforms named are only the ones on the site: Zapier, Make, n8n; HubSpot, Salesforce, Zoho, Pipedrive,
//   GoHighLevel; OpenAI (GPT), Anthropic Claude, Google Gemini, open-source models; REST APIs, webhooks, MCP
//   connectors; Airtable, SQL databases, cloud data platforms on AWS, Azure or GCP. Other systems only "where they
//   offer an API or integration, confirmed during discovery".
// - Starting points are examples, scoped per project. No statistics, percentages, time saved, prices,
//   testimonials, client names, "leading/best" claims, certifications, guarantees or ongoing-support promises
//   beyond "monitoring and improvement after launch is part of our process; scope and terms are agreed per project".
// - Clickmasters is an agency, not a software vendor. The client owns the automations, accounts and documentation
//   and pays platform and AI usage costs directly.
//
// Inline links use [anchor text](/path). This page contains EXACTLY TWELVE contextual internal links, including
// one to each of the nine child pages. A `related` grid also lists all nine children.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const GENERAL_AI_AUTOMATION_PATH = '/products/general-ai-automation';

export const generalAiAutomationSeo: HubSeo = {
  name: 'General AI Automation',
  path: GENERAL_AI_AUTOMATION_PATH,
  title: 'AI Automation for Business, Planned and Built | Clickmasters',
  description:
    'AI automation for business, from one repetitive workflow to company-wide systems. Find the right starting point for your team and book a free automation audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'General AI Automation', path: GENERAL_AI_AUTOMATION_PATH },
  ],
};

export const generalAiAutomationKeywords = [
  'AI automation for business',
  'business AI automation',
  'AI automation for companies',
  'how to automate a business with AI',
  'types of AI automation',
  'AI automation examples for business',
  'AI automation partner',
  'AI automation implementation',
  'cross-functional AI automation',
  'AI automation consulting and build',
  'where to start with AI automation',
  'how to start AI automation in a business',
  'which business processes to automate with AI',
  'AI automation for small teams vs enterprises',
  'off-the-shelf vs custom AI automation',
];

// The twelve contextual internal links used in the copy below (nine are child pages).
export const internalLinks = [
  { anchor: 'Clickmasters, an AI automation agency', href: '/', section: 'What AI Automation for Business Means (intro)' },
  { anchor: 'AI automation solutions for small and growing businesses', href: '/products/general-ai-automation/ai-automation-solutions', section: 'Find the Right Starting Point (spotlight)' },
  { anchor: 'guide to AI automation tools', href: '/products/general-ai-automation/ai-automation-tools-for-businesses', section: 'Find the Right Starting Point (spotlight)' },
  { anchor: 'custom AI automation software', href: '/products/general-ai-automation/custom-ai-automation-software', section: 'Find the Right Starting Point (spotlight)' },
  { anchor: 'enterprise AI automation with governance', href: '/products/general-ai-automation/enterprise-ai-automation-solutions', section: 'Find the Right Starting Point (spotlight)' },
  { anchor: 'AI-powered business software', href: '/products/general-ai-automation/ai-powered-business-software', section: 'Find the Right Starting Point (spotlight)' },
  { anchor: 'Intelligent business automation', href: '/products/general-ai-automation/intelligent-business-automation', section: 'More Starting Points (extras)' },
  { anchor: 'AI integration services', href: '/products/general-ai-automation/ai-integration-services', section: 'More Starting Points (extras)' },
  { anchor: 'end-to-end AI automation', href: '/products/general-ai-automation/end-to-end-ai-automation', section: 'More Starting Points (extras)' },
  { anchor: 'AI process optimization', href: '/products/general-ai-automation/ai-process-optimization', section: 'More Starting Points (extras)' },
  { anchor: 'full list of our services', href: '/services', section: 'Technologies We Work With' },
  { anchor: 'industry-specific AI solutions', href: '/products/industry-specific-ai-automation', section: 'Working in a Specific Industry? (extras)' },
] as const;

export const generalAiAutomation: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 3 },

  hero: {
    badge: 'General AI Automation',
    heading: 'AI Automation for Business: From the First Workflow to Company-Wide Systems',
    accentWords: 3,
    subheading:
      'Most companies do not need a grand AI plan to get started. They need one repetitive task taken off someone’s desk, built properly and handed over with documentation. AI automation for business covers that first workflow and everything that can follow: connected systems, AI steps that read and draft, and cross-department processes with clear approval points.',
    primaryCta: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt:
      'Illustration of a multi-step automated workflow across connected business apps with AI steps, representing AI automation for business from a first workflow to connected systems',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Lead follow-up', 'CRM updates', 'Support tickets', 'Appointment scheduling', 'Document processing', 'Reporting'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What AI Automation for Business Means',
    paragraphs: [
      'AI automation for business is the use of software workflows combined with AI models to handle repetitive, rule-following work such as data entry, follow-ups, document handling and reporting. Rules move data between systems, AI reads, sorts and drafts where language is involved, and people approve anything that needs judgment.',
      'This page helps you find the right starting point for your situation. At [Clickmasters, an AI automation agency](/), we design, build and maintain these systems inside the tools and accounts you already use.',
      'The pressure that leads businesses here shows up in familiar places, and hiring more people rarely fixes the underlying process.',
    ],
    problems: [
      'Leads wait for a reply because nobody is free.',
      'Staff copy the same details between a form, a spreadsheet and a CRM.',
      'Weekly reports take hours to assemble.',
      'Approvals stall in someone’s inbox.',
      'Hiring more people rarely fixes the underlying process.',
    ],
  },

  explainer: {
    eyebrow: 'Know the Difference',
    heading: 'Automation vs AI Automation',
    paragraphs: [
      'Traditional automation follows fixed rules: when a form arrives, copy the fields into the CRM. AI automation adds steps that understand text, so the workflow can also read a free-form email, decide what it is about and prepare a reply for review.',
      'Most useful systems combine both.',
    ],
    points: [
      { title: 'What Each Handles', description: 'Rule-based automation handles structured data and fixed steps. AI automation handles emails, documents, notes and messages.' },
      { title: 'How Each Decides', description: 'Rule-based automation decides by if-then rules you define. AI automation decides by reading and classifying content.' },
      { title: 'What Each Is Good For', description: 'Rules suit syncing records, routing and reminders. AI suits summaries, drafts, triage and extraction.' },
      { title: 'The Human Role', description: 'With rules, people set the rules. With AI steps, people review drafts and handle exceptions.' },
    ],
  },

  features: {
    eyebrow: 'Starting Points',
    heading: 'What Businesses Usually Automate First',
    intro:
      'A useful rule of thumb: if a task is repetitive and follows rules, it is usually a good candidate. These are common starting points, and every example is scoped per project.',
    items: [
      { title: 'Lead Capture and Follow-Up', description: 'Lead capture, qualification and follow-up sequences.' },
      { title: 'CRM and Database Updates', description: 'Records kept current across your CRM and databases.' },
      { title: 'Customer Enquiries', description: 'Customer enquiries and support tickets read, sorted and routed.' },
      { title: 'Appointment Scheduling', description: 'Appointment scheduling and reminders.' },
      { title: 'Data Entry and Validation', description: 'Details entered once and checked, instead of retyped.' },
      { title: 'Document and Invoice Processing', description: 'Documents and invoices read and their details moved into the right system.' },
      { title: 'Reporting and Dashboards', description: 'Reports and dashboards assembled on a schedule.' },
      { title: 'Internal Approvals and Onboarding', description: 'Approvals and onboarding steps routed to the right person.' },
      { title: 'Proposal and Content Drafts', description: 'Proposals and content drafted for a person to review.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'One Workflow, Start to Finish',
    intro:
      'Here is a simple example of an inbound enquiry workflow. If anything looks unusual, such as an unclear request or a missing field, the workflow passes it to a person with the context attached.',
    steps: [
      { title: 'Form Submitted', description: 'A prospect fills in the contact form on your website.' },
      { title: 'CRM Updated', description: 'The automation creates or updates the contact in your CRM and checks for duplicates.' },
      { title: 'AI Reads the Message', description: 'An AI step reads the message, tags the service requested and flags urgency.' },
      { title: 'Reply Drafted', description: 'The AI drafts a reply using your approved wording and offers a booking link.' },
      { title: 'Team Member Approves', description: 'A team member reviews the draft in Slack or email and approves or edits it.' },
      { title: 'Reply Sent and Logged', description: 'The reply goes out, the CRM is updated and a follow-up reminder is set.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What AI Automation Changes for Your Team',
    intro:
      'The aim is to take the repetitive part of the work off people’s desks, while a person still approves wherever a decision needs judgment.',
    items: [
      { title: 'Leads Answered Sooner', description: 'Enquiries get a drafted reply and a booking link without waiting for someone to be free.' },
      { title: 'Less Retyping', description: 'Details move between forms, spreadsheets and the CRM without being copied by hand.' },
      { title: 'Reports Without the Assembly', description: 'Regular reports are compiled on a schedule instead of pieced together by hand.' },
      { title: 'Approvals That Move', description: 'Approval requests are routed to the right person with the context they need.' },
      { title: 'Exceptions Handled by People', description: 'Unusual cases are passed to a team member with the context attached.' },
      { title: 'Room to Build On', description: 'One working workflow can be followed by connected systems and cross-department processes.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'People in Control',
    heading: 'Where Rules, AI and People Each Fit',
    paragraphs: [
      'Rules move data between systems, AI reads, sorts and drafts where language is involved, and people approve anything that needs judgment. The workflow passes exceptions to a team member with the relevant context.',
      'Approval points are agreed during strategy and mapping, before anything is built, and you approve the plan before development starts.',
    ],
    aiDoes: [
      'Reads free-form emails, documents and messages',
      'Tags requests and flags urgency',
      'Drafts replies using your approved wording',
      'Summarizes, triages and extracts details',
      'Passes unusual cases to a person with context',
    ],
    peopleDo: [
      'Set the rules and approval points',
      'Review and approve drafts',
      'Handle exceptions',
      'Make decisions that need judgment',
    ],
  },

  spotlight: {
    eyebrow: 'Find Your Starting Point',
    heading: 'Find the Right Starting Point for Your Situation',
    paragraphs: [
      'Each page in this range covers a different situation, so pick the one that sounds most like yours. When the owner is the bottleneck and every hour counts, the goal is one high-value workflow that clearly frees up time, such as lead follow-up or booking: read about [AI automation solutions for small and growing businesses](/products/general-ai-automation/ai-automation-solutions). If you are weighing Zapier, Make, n8n and CRM workflows, our vendor-neutral [guide to AI automation tools](/products/general-ai-automation/ai-automation-tools-for-businesses) explains how they differ and how to combine them.',
      'When a process has no ready-made integration, depends on an older system or needs logic that no-code tools handle poorly, see how we approach [custom AI automation software](/products/general-ai-automation/custom-ai-automation-software). At scale, the work shifts to choosing which automations to fund, controlling access, logging activity and passing security reviews: learn about [enterprise AI automation with governance](/products/general-ai-automation/enterprise-ai-automation-solutions). And instead of buying another subscription, you can add summaries, drafting and search to your existing CRM, helpdesk or internal portal with [AI-powered business software](/products/general-ai-automation/ai-powered-business-software).',
    ],
    points: [
      { title: 'You Run a Small or Growing Team', description: 'One high-value workflow that clearly frees up time, such as lead follow-up or booking.' },
      { title: 'You Are Choosing Between Automation Tools', description: 'Zapier, Make, n8n and CRM workflows each suit different volumes, budgets and data rules.' },
      { title: 'Off-the-Shelf Tools Are Falling Short', description: 'No ready-made integration, an older system or logic that no-code tools handle poorly.' },
      { title: 'You Run a Large or Multi-Department Organization', description: 'Funding decisions, access control, activity logging and security reviews.' },
      { title: 'You Want AI Inside the Apps You Already Use', description: 'Summaries, drafting and search added to your existing CRM, helpdesk or internal portal.' },
    ],
  },

  extras: [
    {
      eyebrow: 'More Starting Points',
      heading: 'When the Work Is Messy, Connected or Still Unclear',
      accentWords: 2,
      paragraphs: [
        'Some processes mix predictable steps with reading, interpretation and exceptions. [Intelligent business automation](/products/general-ai-automation/intelligent-business-automation) splits that work between rules, AI and people, with escalation built in. Connecting GPT, Claude or Gemini to your CRM, ERP, databases and documents takes careful plumbing: authentication, data mapping, error handling and cost control. That is the focus of our [AI integration services](/products/general-ai-automation/ai-integration-services).',
        'If you would rather not coordinate a strategist, a freelancer and your IT team separately, [end-to-end AI automation](/products/general-ai-automation/end-to-end-ai-automation) covers every stage from audit to launch with one team. And because automating a broken process only makes the problems run faster, [AI process optimization](/products/general-ai-automation/ai-process-optimization) maps the current process, removes unnecessary steps and defines approval points before anything is built.',
      ],
      points: [
        { title: 'Your Work Is Messy and Needs Judgment', description: 'Rules, AI and people each take the part they suit, with escalation built in.' },
        { title: 'You Need AI Connected to Your Systems', description: 'Authentication, data mapping, error handling and cost control for models connected to your systems.' },
        { title: 'You Want One Partner for the Whole Project', description: 'Every stage from audit to launch with one team.' },
        { title: 'You Are Not Sure the Process Is Right Yet', description: 'The current process mapped and simplified, with approval points defined, before anything is built.' },
      ],
    },
    {
      eyebrow: 'Industries',
      heading: 'Working in a Specific Industry?',
      accentWords: 2,
      paragraphs: [
        'If your sector has its own rules, approvals and systems, as in healthcare, real estate, logistics, education or legal work, see our [industry-specific AI solutions](/products/industry-specific-ai-automation).',
        'Industry workflows follow the same approach: rules for the predictable steps, AI for reading and drafting, and people approving decisions. Each use case is scoped per project.',
      ],
      points: [
        { title: 'Sector Rules', description: 'Approval points set around the rules and responsibilities of your sector.' },
        { title: 'Sector Systems', description: 'Industry systems connected where they offer an API or integration, confirmed during discovery.' },
        { title: 'Decisions Stay With People', description: 'Automation handles administration and preparation; qualified people make the decisions.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI Automation for Business Is For',
    items: [
      { title: 'Business Owners', description: 'Owners who are the bottleneck and want one repetitive task taken off their desk.' },
      { title: 'Operations Leaders', description: 'Leaders whose teams copy details between systems and chase approvals.' },
      { title: 'Sales Teams', description: 'Teams where leads wait for a reply because nobody is free.' },
      { title: 'Support Teams', description: 'Teams handling customer enquiries and support tickets that need reading and routing.' },
      { title: 'Finance and Back-Office Teams', description: 'Teams processing documents and invoices and assembling regular reports.' },
      { title: 'Multi-Department Organizations', description: 'Larger companies that need access control, logging and cross-department processes.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Technologies We Work With',
    paragraphs: [
      'We build on automation platforms such as Zapier, Make and n8n, and on CRMs including HubSpot, Salesforce, Zoho, Pipedrive and GoHighLevel. AI steps can use OpenAI (GPT), Anthropic Claude, Google Gemini or open-source models. Connections run through REST APIs, webhooks and MCP connectors, with data in Airtable, SQL databases or cloud data platforms on AWS, Azure or GCP.',
      'Other systems are connected where they offer an API or integration, confirmed during discovery. For the full range of work, including chatbots, voice agents and reporting, see our [full list of our services](/services).',
    ],
    groups: [
      { label: 'Automation Platforms', items: ['Zapier', 'Make', 'n8n'] },
      { label: 'CRMs', items: ['HubSpot', 'Salesforce', 'Zoho', 'Pipedrive', 'GoHighLevel'] },
      { label: 'AI Models', items: ['OpenAI (GPT)', 'Anthropic Claude', 'Google Gemini', 'Open-source models'] },
      { label: 'Connections', items: ['REST APIs', 'Webhooks', 'MCP connectors'] },
      { label: 'Data and Cloud', items: ['Airtable', 'SQL databases', 'AWS', 'Azure', 'GCP'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Work With Clickmasters',
    intro: 'We design, build and maintain AI automation inside the tools and accounts you already use.',
    items: [
      { title: 'You Own What We Build', description: 'The automations, accounts and documentation belong to you, and you pay platform and AI usage costs directly.' },
      { title: 'People Stay in Control', description: 'A person approves wherever a decision needs judgment, and exceptions are handed over with context.' },
      { title: 'We Build in Your Tools', description: 'We are an agency, not a software vendor, so there is no new platform for your team to adopt.' },
      { title: 'We Start With an Honest Audit', description: 'The free audit tells you which tasks are worth automating and which are better left alone, with no obligation to proceed.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How Implementation Works',
    intro:
      'Every project follows the same six published steps. You approve the plan before anything is built.',
    steps: [
      { title: 'Discovery', description: 'We review your processes, tools and pain points.' },
      { title: 'Strategy and Mapping', description: 'We map triggers, decision points, actions, integrations and approval points. You approve the plan before anything is built.' },
      { title: 'Development', description: 'We build the workflows, AI steps and connections.' },
      { title: 'Testing', description: 'We test with real scenarios, including edge cases and failure scenarios.' },
      { title: 'Deployment', description: 'The system goes live in your environment, with documentation and access handed over.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'Not sure which starting point fits? The free automation audit reviews your processes and tells you what is worth automating first, and what is not.',
  },

  cta: {
    bandHeading: 'Find the workflow worth building first',
    heading: 'Start With a Free Automation Audit',
    description:
      'Your first workflow is hiding in how work moves through your business today. Request your free audit to see where automation fits, where it does not, and what to build first.',
    primary: { text: 'Request Your Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  related: {
    eyebrow: 'Explore the Range',
    heading: 'General AI Automation Pages',
    intro: 'Each page covers a different situation. Pick the one that sounds most like yours.',
    items: [
      { title: 'AI Automation Solutions', description: 'For small and growing teams: one high-value workflow that clearly frees up time.', href: '/products/general-ai-automation/ai-automation-solutions' },
      { title: 'AI Automation Tools for Businesses', description: 'A vendor-neutral guide to Zapier, Make, n8n and CRM workflows.', href: '/products/general-ai-automation/ai-automation-tools-for-businesses' },
      { title: 'Custom AI Automation Software', description: 'Tailored builds when off-the-shelf tools fall short.', href: '/products/general-ai-automation/custom-ai-automation-software' },
      { title: 'Enterprise AI Automation Solutions', description: 'Governance, access control and logging for larger organizations.', href: '/products/general-ai-automation/enterprise-ai-automation-solutions' },
      { title: 'AI-Powered Business Software', description: 'Summaries, drafting and search added to the apps you already use.', href: '/products/general-ai-automation/ai-powered-business-software' },
      { title: 'Intelligent Business Automation', description: 'Rules, AI and people splitting messy work, with escalation built in.', href: '/products/general-ai-automation/intelligent-business-automation' },
      { title: 'AI Integration Services', description: 'Connecting AI models to your CRM, ERP, databases and documents.', href: '/products/general-ai-automation/ai-integration-services' },
      { title: 'End-to-End AI Automation', description: 'One team for every stage from audit to launch.', href: '/products/general-ai-automation/end-to-end-ai-automation' },
      { title: 'AI Process Optimization', description: 'Mapping and simplifying a process before anything is built.', href: '/products/general-ai-automation/ai-process-optimization' },
    ],
  },

  faqHeading: 'AI Automation for Business: Common Questions',
  faqSideText: 'Not sure which starting point fits your business? Book a free automation audit and we will work it out with you.',
  faqs: [
    {
      question: 'What is AI automation for business?',
      answer:
        'It combines software workflows with AI models to handle repetitive work such as data entry, follow-ups, document handling and reporting. Rules move data between systems, AI reads and drafts, and people approve decisions that need judgment.',
    },
    {
      question: 'What should a business automate first?',
      answer:
        'Start with a task that is repetitive, follows clear rules and happens often, such as lead follow-up, data entry or appointment reminders. The free automation audit identifies which workflow is worth doing first and which ones are not worth automating.',
    },
    {
      question: 'What is the difference between automation and AI automation?',
      answer:
        'Automation follows fixed if-then rules on structured data. AI automation adds steps that can read and interpret text, such as emails and documents, so the workflow can classify, summarize or draft. Most practical systems use both.',
    },
    {
      question: 'Do I need custom software or off-the-shelf tools?',
      answer:
        'Most businesses start with off-the-shelf platforms such as Zapier, Make, n8n or their CRM’s built-in workflows. Custom components make sense when a system has no integration, the logic is too complex for no-code tools, or data must stay in your own environment.',
    },
    {
      question: 'Who owns the automations you build?',
      answer:
        'You do. The automations, accounts and documentation belong to your business, and you pay platform and AI usage costs directly to the providers.',
    },
    {
      question: 'Does a person stay in control of AI decisions?',
      answer:
        'Yes. A person approves wherever a decision needs judgment, and the workflow passes exceptions to a team member with the relevant context. Approval points are agreed during strategy and mapping, before anything is built.',
    },
  ],
};
