// content/products/general-ai-automation/ai-powered-business-software.ts
// Copy + SEO for /products/general-ai-automation/ai-powered-business-software.
//
// Accuracy rules for this page (keep them when editing):
// - Owns the primary keyword "AI-powered business software": adding AI features (summaries, drafting, answers from
//   documents, classification and routing, small internal tools) to the CRM, helpdesk and internal tools a team
//   already uses, and the buy-new vs embed decision. Do not target "AI CRM software" (/products/ai-sales-crm/...),
//   "AI knowledge assistants" or "AI chatbots" (/services/...); link to them instead.
// - Clickmasters is an agency, not a SaaS vendor, and has no AI product of its own to sell. Say so.
// - AI output is reviewed by a person before it is saved or sent; low-confidence items go to a person. Integrations
//   are conditional on an API or integration, confirmed during discovery. Use cases are examples, scoped per project.
// - The client owns the automations, accounts and documentation and pays platform and AI usage costs directly.
// - No statistics, percentages, prices, testimonials, client names, certifications or guarantees.
//
// Inline links use [anchor text](/path). This page contains EXACTLY SEVEN contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_POWERED_BUSINESS_SOFTWARE_PATH = '/products/general-ai-automation/ai-powered-business-software';

export const aiPoweredBusinessSoftwareSeo: HubSeo = {
  name: 'AI-Powered Business Software',
  path: AI_POWERED_BUSINESS_SOFTWARE_PATH,
  title: 'AI-Powered Business Software for Your Team | Clickmasters',
  description:
    'AI-powered business software built into the CRM, helpdesk and internal tools you already use, with people approving the output. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'General AI Automation', path: '/products/general-ai-automation' },
    { name: 'AI-Powered Business Software', path: AI_POWERED_BUSINESS_SOFTWARE_PATH },
  ],
};

export const aiPoweredBusinessSoftwareKeywords = [
  'AI-powered business software',
  'AI business applications',
  'add AI to existing software',
  'AI features in business software',
  'AI internal tools',
  'AI copilot for business apps',
  'embed LLM in business software',
  'AI-enhanced CRM',
  'AI assistant inside business tools',
  'AI software for business operations',
  'AI-powered internal portal',
  'should I buy new AI software or add AI to my current tools',
  'how to add ChatGPT-style features to internal software',
  'AI summaries inside CRM records',
  'AI reply drafting inside a helpdesk',
  'internal AI tool for a small team',
  'AI classification of incoming forms',
];

// The seven contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'our general AI automation guide', href: '/products/general-ai-automation', section: 'What AI-Powered Business Software Means Here (intro)' },
  { anchor: 'AI features designed for CRM workflows', href: '/products/ai-sales-crm/ai-crm-software', section: 'AI Features We Add to Existing Business Software (features)' },
  { anchor: 'an AI knowledge assistant', href: '/services/ai-knowledge-assistants', section: 'Answers From Your Own Documents (spotlight)' },
  { anchor: 'customer-facing AI chatbots', href: '/services/ai-chatbots', section: 'Answers From Your Own Documents (spotlight)' },
  { anchor: 'custom AI development', href: '/services/custom-ai-development', section: 'Small Internal AI Tools (extras)' },
  { anchor: 'how admissions and enrollment teams apply this', href: '/products/industry-specific-ai-automation/ai-education-automation', section: 'Example Use Cases (extras)' },
  { anchor: 'connecting AI models to your systems', href: '/products/general-ai-automation/ai-integration-services', section: 'Technologies and Integrations (integrations)' },
] as const;

export const aiPoweredBusinessSoftware: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI-Powered Business Software',
    heading: 'AI-Powered Business Software for the Systems You Already Use',
    accentWords: 4,
    subheading:
      'Most teams do not need another app. They need the CRM, helpdesk and shared drive they already use to do a little more of the reading, sorting and drafting for them. We add AI features to the systems your team already works in, and a person approves anything that matters.',
    primaryCta: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt:
      'Illustration of connected business apps with AI steps in the workflow, representing AI features added to the software a team already uses',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Record summaries', 'Drafting in place', 'Answers from your documents', 'Classification and routing', 'Small internal tools', 'Human approval'],
  },

  intro: {
    eyebrow: 'AI Where the Work Happens',
    heading: 'What AI-Powered Business Software Means Here',
    paragraphs: [
      'Clickmasters builds AI-powered business software by adding AI features to the systems your team already works in: a summary on a CRM record, a suggested reply in a support ticket, an assistant that answers from your own documents. People stay in their usual screens, and a person approves anything that matters.',
      'AI-powered business software is the software your team already uses, extended with AI features that read, summarize, classify or draft inside the normal workflow. Instead of exporting data to a separate AI tool, the AI works on live records through the system’s API, and a team member reviews the output before it is saved or sent. This page covers one specific route within [our general AI automation guide](/products/general-ai-automation): putting AI where the work already happens, rather than moving the work somewhere new.',
      'Why is another AI subscription often the wrong answer? Someone finds a promising AI product and the team signs up. For a while, people copy text out of the CRM, paste it into the new tool, then paste the result back. Before long, usage often drops because the extra step is slower than doing the task by hand. Adding AI to existing tools avoids most of the common problems, because the feature appears on the screen where the person was already going to look.',
    ],
    problems: [
      'Context lives somewhere else. The AI tool cannot see the deal history, the ticket thread or the policy document, so its answers are generic.',
      'Another login, another place to check. Staff already juggle several systems. A new one competes for attention and usually loses.',
      'Data gets copied around. Customer details end up pasted into tools nobody reviewed for data handling.',
      'Nobody owns it. A standalone tool bought by one department rarely connects to anyone else’s work.',
    ],
  },

  explainer: {
    eyebrow: 'Buy or Embed',
    heading: 'Buy New AI Software or Embed AI in Your Current Tools?',
    paragraphs: [
      'Both routes can be right. The points below compare buying a new AI SaaS product with embedding AI in the tools you already run.',
      'If a purpose-built product already solves your problem well, we will say so during the audit. Embedding makes the most sense when the information and the people are already in one system and the gap is simply the reading and writing in between.',
    ],
    points: [
      { title: 'Where Does the Team Work?', description: 'Buy: in a new interface. Embed: in the CRM, helpdesk or portal they already use.' },
      { title: 'Access to Your Data', description: 'Buy: usually through imports or copy and paste. Embed: through the system’s API, on live records.' },
      { title: 'Fit to Your Process', description: 'Buy: built for the vendor’s typical customer. Embed: built around your fields, stages and approval points.' },
      { title: 'Who Owns the Setup', description: 'Buy: the vendor controls the product. Embed: you own the automations, accounts and documentation.' },
      { title: 'When It Makes Sense', description: 'Buy: the problem is new and no current tool touches it. Embed: the work already happens in a system you rely on.' },
    ],
  },

  features: {
    eyebrow: 'AI Features',
    heading: 'AI Features We Add to Existing Business Software',
    intro:
      'Each feature follows the same shape: trigger, context, draft, human review, log. Record summaries are one of the most common requests, and our page on [AI features designed for CRM workflows](/products/ai-sales-crm/ai-crm-software) goes deeper on the sales side.',
    items: [
      { title: 'Record Summaries', description: 'Long histories on contacts, deals, cases or projects are condensed into a few lines at the top of the record.' },
      { title: 'Drafting Inside Your Tools', description: 'Suggested replies in Zendesk, Intercom or Freshdesk tickets, first drafts of follow-ups in Gmail or Outlook, and proposal sections from your templates. The person edits and sends.' },
      { title: 'Answers From Your Own Documents', description: 'Staff ask a question in Slack, Microsoft Teams or an internal portal and get an answer drawn from your policies, product documentation or SOPs, with the source shown.' },
      { title: 'Classification and Routing', description: 'Forms, emails and tickets are read as they arrive, tagged by type, urgency or topic, and routed to the right queue or owner. Low-confidence items go to a person.' },
      { title: 'Small Internal AI Tools', description: 'A simple internal screen, such as a page where staff paste a document and get structured fields back, or a dashboard view with a plain-language summary.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How an Embedded AI Feature Works: A CRM Example',
    intro:
      'Here is a typical build, an account summary inside a CRM such as HubSpot or Salesforce. The same shape (trigger, context, draft, human review, log) applies to most features on this page.',
    steps: [
      { title: 'Trigger', description: 'A sales rep opens a deal before a call, or the deal moves to a new stage.' },
      { title: 'Gather Context', description: 'An automation pulls the recent emails, call notes, open tickets and deal fields through the CRM’s API.' },
      { title: 'Draft', description: 'An AI model, such as GPT, Claude or Gemini, writes a short summary of where the deal stands and suggests a next step, following instructions written for your sales process.' },
      { title: 'Show It in Place', description: 'The draft appears in a CRM note or a custom field, clearly marked as AI-generated.' },
      { title: 'Person Approves', description: 'The rep reads it, corrects anything that is off and saves it. Nothing goes to the customer from this step.' },
      { title: 'Log', description: 'The run is recorded so you can see what the AI produced and what the rep changed, which helps tune the instructions over time.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Changes for Your Team',
    intro: 'The practical changes are modest by design, and that is what makes them stick.',
    items: [
      { title: 'Less Reading', description: 'Less time reading long threads before acting on them.' },
      { title: 'Fewer Blank Pages', description: 'A first version of the draft is already there.' },
      { title: 'More Consistent Records', description: 'Summaries and tags follow the same instructions every time.' },
      { title: 'No New System to Learn', description: 'The features appear inside current screens.' },
      { title: 'Clear Accountability', description: 'A named person approves what gets saved or sent.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI and People',
    heading: 'What the AI Drafts and What Your Team Approves',
    paragraphs: [
      'The AI does the reading and writing in between: it summarizes, drafts, answers and tags inside the tools your team already uses. A person reviews the output before it is saved or sent, so mistakes are caught at that step.',
      'Items the AI is unsure about are passed to a person instead of being guessed. Decisions that need judgment are better left with people, with AI preparing the information.',
    ],
    aiDoes: [
      'Summarizes long record histories',
      'Drafts replies, follow-ups and proposal sections',
      'Answers staff questions from your documents with sources',
      'Classifies and routes incoming forms, emails and tickets',
      'Returns structured fields from pasted documents',
      'Passes low-confidence items to a person',
    ],
    peopleDo: [
      'Review and correct drafts before saving or sending',
      'Sort items the AI is unsure about',
      'Make decisions that need judgment',
      'Approve the plan before anything is built',
    ],
  },

  spotlight: {
    eyebrow: 'Document Answers',
    heading: 'Answers From Your Own Documents',
    paragraphs: [
      'Staff ask a question in Slack, Microsoft Teams or an internal portal and get an answer drawn from your policies, product documentation or SOPs, with the source shown. For internal use this is usually [an AI knowledge assistant](/services/ai-knowledge-assistants).',
      'If the same knowledge should answer customers on your website, that is closer to [customer-facing AI chatbots](/services/ai-chatbots), which come with their own handoff rules.',
    ],
    points: [
      { title: 'Ask Where You Already Work', description: 'Questions are asked in Slack, Microsoft Teams or an internal portal.' },
      { title: 'Drawn From Your Documents', description: 'Answers come from your policies, product documentation or SOPs.' },
      { title: 'Source Shown', description: 'Each answer shows where it came from, so staff can check it.' },
      { title: 'Internal or Customer-Facing', description: 'Internal answers suit a knowledge assistant; answering customers is closer to a chatbot with its own handoff rules.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Internal Tools',
      heading: 'Small Internal AI Tools',
      accentWords: 2,
      paragraphs: [
        'Sometimes the right answer is a simple internal screen: a page where staff paste a document and get structured fields back, or a dashboard view with a plain-language summary.',
        'When no existing system can host the feature, we build a small tool through [custom AI development](/services/custom-ai-development), kept in your accounts.',
      ],
      points: [
        { title: 'Document to Fields', description: 'Staff paste a document and get structured fields back.' },
        { title: 'Plain-Language Dashboard', description: 'A dashboard view with a plain-language summary.' },
        { title: 'Kept in Your Accounts', description: 'The tool lives in your accounts, like every other feature we build.' },
      ],
    },
    {
      eyebrow: 'Use Cases',
      heading: 'Example Use Cases, Scoped per Project',
      accentWords: 3,
      paragraphs: [
        'These are examples, not packaged products. Each is scoped per project during discovery.',
        'In education administration, enquiry replies can be drafted inside the student CRM, which you can read about in [how admissions and enrollment teams apply this](/products/industry-specific-ai-automation/ai-education-automation).',
      ],
      points: [
        { title: 'Sales', description: 'A pre-call brief on each deal, and drafted follow-ups after a meeting based on the rep’s notes.' },
        { title: 'Support', description: 'Suggested replies that cite the relevant help article, plus a summary when a ticket is escalated.' },
        { title: 'Operations', description: 'Incoming requests classified and routed, with missing information flagged before work starts.' },
        { title: 'HR and Onboarding', description: 'New-hire questions answered from the handbook inside Teams or Slack.' },
        { title: 'Education Administration', description: 'Enquiry replies drafted inside the student CRM.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI-Powered Business Software Is For',
    items: [
      { title: 'Sales Teams', description: 'Reps who want deal summaries and follow-up drafts inside the CRM.' },
      { title: 'Support Teams', description: 'Agents who want suggested replies and escalation summaries in the helpdesk.' },
      { title: 'Operations Teams', description: 'Teams sorting incoming forms, emails and requests by hand.' },
      { title: 'HR and People Teams', description: 'Teams answering the same new-hire questions from the handbook.' },
      { title: 'Education Administrators', description: 'Admissions and enrollment staff replying to enquiries from the student CRM.' },
      { title: 'Teams Tired of Copy and Paste', description: 'Anyone moving text between their systems and a separate AI tool.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Technologies and Integrations',
    paragraphs: [
      'We work with the systems already in your stack, where the system offers an API or integration, confirmed during discovery. Frameworks and cloud hosting on AWS, Azure or GCP are used where needed.',
      'The connection work itself, including authentication, data mapping and error handling, is covered in more detail on our page about [connecting AI models to your systems](/products/general-ai-automation/ai-integration-services).',
    ],
    groups: [
      { label: 'AI Models', items: ['OpenAI (GPT)', 'Anthropic Claude', 'Google Gemini', 'Open-source models'] },
      { label: 'CRMs', items: ['HubSpot', 'Salesforce', 'Zoho', 'Pipedrive', 'GoHighLevel'] },
      { label: 'Support Desks', items: ['Zendesk', 'Intercom', 'Freshdesk'] },
      { label: 'Communication', items: ['Slack', 'Microsoft Teams', 'Gmail', 'Outlook'] },
      { label: 'Data', items: ['Airtable', 'SQL databases', 'Cloud data platforms', 'Custom APIs'] },
      { label: 'Automation Platforms', items: ['Zapier', 'Make', 'n8n (self-hostable)'] },
      { label: 'Frameworks and Connections', items: ['LangChain', 'LlamaIndex', 'REST APIs', 'Webhooks', 'MCP connectors'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Teams Work With Clickmasters on This',
    intro: 'We put AI inside the tools you already pay for, and we have no product of our own to push.',
    items: [
      { title: 'We Build Inside Your Tools and Accounts', description: 'You own the automations, accounts and documentation, and you pay platform and AI usage costs directly.' },
      { title: 'People Stay in the Loop', description: 'Wherever a decision needs judgment, a person approves it. Exceptions go to a person with context.' },
      { title: 'We Are Not Selling a Platform', description: 'Clickmasters is an agency, so we have no reason to push you toward a product of our own.' },
      { title: 'We Start With a Free Audit', description: 'It tells you which features are worth building first and which are not, with no obligation to proceed.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Deliver It',
    intro: 'Every project follows our published process, and you approve the plan before anything is built.',
    steps: [
      { title: 'Discovery', description: 'We look at the tools you use, the tasks people repeat and where information gets stuck.' },
      { title: 'Strategy and Mapping', description: 'We define the trigger, the data the AI needs, what it produces, where it appears and who approves it. You approve the plan before anything is built.' },
      { title: 'Development', description: 'We build the feature in your systems and write the AI instructions around your process.' },
      { title: 'Testing', description: 'We test with real examples, including edge cases and failure scenarios such as empty records or unclear requests.' },
      { title: 'Deployment', description: 'The feature goes live in your environment, with documentation and access handed over.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'Not sure which feature would help first? The free audit reviews your current tools and says where AI would earn its place, and where it would not.',
  },

  cta: {
    bandHeading: 'Start with the tools you already pay for',
    heading: 'Start With the Tools You Already Pay For',
    description:
      'You probably have most of what you need already: a CRM, a helpdesk, shared documents and a team that knows the work. The missing piece is usually a few well-placed AI features with a person checking the output. Book a free automation audit and we will show you where those features fit in your current systems.',
    primary: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI-Powered Business Software: Common Questions',
  faqSideText: 'Not sure which feature would help first? Book a free audit and we will say where AI would earn its place.',
  faqs: [
    {
      question: 'Should I buy new AI software or add AI to my current tools?',
      answer:
        'Add AI to your current tools when the work and the data already live there, because the feature shows up where people already look. Buy a new product when the problem is genuinely new and nothing you use today touches it. The free audit is a good place to make that call with someone who has no product to sell you.',
    },
    {
      question: 'How do you add ChatGPT-style features to internal software?',
      answer:
        'We connect an AI model, such as GPT, Claude or Gemini, to your system through its API or an automation platform. The model receives the relevant record or document, follows instructions written for your process, and returns a draft into a field, note or message. A person reviews the result before it is used.',
    },
    {
      question: 'Can AI summarize records inside our CRM?',
      answer:
        'Yes, where the CRM offers an API that exposes the records, notes and activity you want summarized, which we confirm during discovery. The summary is written back into the record as a note or field and marked as AI-generated. The rep reviews it before relying on it.',
    },
    {
      question: 'What AI features are worth adding first?',
      answer:
        'Start with a task people do many times a week that involves reading or writing, such as summarizing a history, drafting a reply or sorting incoming requests. These are easy to review and show quickly whether the feature helps. Decisions that need judgment are better left with people, with AI preparing the information.',
    },
    {
      question: 'Will AI features change how my team works in the software?',
      answer:
        'Only slightly, which is the point. The features appear inside the screens your team already uses, so there is no new system to learn. What changes is that a draft, summary or tag is already there when they open a record.',
    },
    {
      question: 'Who owns the AI features you build?',
      answer:
        'You do. The automations, accounts and documentation belong to you, and you pay platform and AI usage costs directly. Everything is handed over at deployment.',
    },
    {
      question: 'What happens when the AI gets something wrong?',
      answer:
        'A person reviews the output before it is saved or sent, so mistakes are caught at that step. Items the AI is unsure about are passed to a person instead of being guessed. Each run is logged, which helps us adjust the instructions when a pattern of errors shows up.',
    },
  ],
};
