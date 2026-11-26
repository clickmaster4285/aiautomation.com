// content/products/general-ai-automation/custom-ai-automation-software.ts
// Copy + SEO for /products/general-ai-automation/custom-ai-automation-software.
//
// Accuracy rules for this page (keep them when editing):
// - Owns the primary keyword "custom AI automation software": build vs buy, the custom components (code, API
//   connectors, self-hosted workflows, admin dashboards, agents with defined tools) and when a tailored build is
//   justified. Do not target "AI automation tools for business" (sibling tool comparison), "AI integration services"
//   (sibling) or "custom AI development" (/services/custom-ai-development, AI features inside products).
// - "Custom" rarely means writing everything from scratch; standard platforms still handle routine steps. Say so.
// - Legacy-system access is conditional: API, database access, file exchange or RPA, confirmed during discovery.
//   No timelines or prices; "Is custom more expensive?" stays a balanced, non-numeric answer.
// - Clickmasters is an agency. The client owns the code, workflows, accounts and documentation and pays platform and
//   AI usage costs directly. Use cases are examples, scoped per project.
// - No statistics, percentages, prices, testimonials, client names, certifications or guarantees.
//
// Inline links use [anchor text](/path). This page contains EXACTLY EIGHT contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const CUSTOM_AI_AUTOMATION_SOFTWARE_PATH = '/products/general-ai-automation/custom-ai-automation-software';

export const customAiAutomationSoftwareSeo: HubSeo = {
  name: 'Custom AI Automation Software',
  path: CUSTOM_AI_AUTOMATION_SOFTWARE_PATH,
  title: 'Custom AI Automation Software Built for You | Clickmasters',
  description:
    'Custom AI automation software for processes off-the-shelf tools can’t handle: API connectors, self-hosted workflows and admin tools you own.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'General AI Automation', path: '/products/general-ai-automation' },
    { name: 'Custom AI Automation Software', path: CUSTOM_AI_AUTOMATION_SOFTWARE_PATH },
  ],
};

export const customAiAutomationSoftwareKeywords = [
  'custom AI automation software',
  'bespoke automation software',
  'custom workflow automation software',
  'build vs buy automation software',
  'custom automation solutions',
  'tailored AI automation',
  'custom AI tools for business',
  'automation for legacy systems',
  'custom automation dashboard',
  'custom AI automation development',
  'private AI automation',
  'when to build custom automation instead of using Zapier',
  'custom API connector for a system without integrations',
  'self-hosted AI automation for sensitive data',
  'internal admin tool for automation exceptions',
];

// The eight contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'general AI automation options', href: '/products/general-ai-automation', section: 'What Custom AI Automation Software Means (intro)' },
  { anchor: 'compare off-the-shelf automation tools', href: '/products/general-ai-automation/ai-automation-tools-for-businesses', section: 'Build vs Buy: How to Decide (explainer)' },
  { anchor: 'logistics teams with older TMS platforms', href: '/products/industry-specific-ai-automation/ai-logistics-automation', section: 'Use Cases (features)' },
  { anchor: 'robotic process automation', href: '/services/robotic-process-automation', section: 'What “Custom” Looks Like in Practice (spotlight)' },
  { anchor: 'connecting AI models to your business systems', href: '/products/general-ai-automation/ai-integration-services', section: 'What “Custom” Looks Like in Practice (spotlight)' },
  { anchor: 'n8n automation services', href: '/platforms/n8n-automation-services', section: 'What “Custom” Looks Like in Practice (spotlight)' },
  { anchor: 'AI agent development', href: '/products/ai-agents-platforms/ai-agent-development', section: 'What “Custom” Looks Like in Practice (spotlight)' },
  { anchor: 'custom AI development service', href: '/services/custom-ai-development', section: 'Technologies and Integrations (integrations)' },
] as const;

export const customAiAutomationSoftware: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'Custom AI Automation Software',
    heading: 'Custom AI Automation Software Built Around Your Process',
    accentWords: 3,
    subheading:
      'Off-the-shelf automation tools cover a lot of ground, until they meet a system with no connector, logic too tangled for a visual builder, or data that cannot leave your environment. Custom AI automation software fills those gaps, and you own the result, including the code, accounts and documentation.',
    primaryCta: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/datas.png',
    imageAlt:
      'Illustration of business data flowing between systems, representing custom AI automation software that connects tools off-the-shelf platforms cannot reach',
    imageWidth: 2370,
    imageHeight: 1264,
    marquee: ['Custom code components', 'API connectors', 'Self-hosted workflows', 'Admin dashboards', 'AI agents with defined tools', 'Code you own'],
  },

  intro: {
    eyebrow: 'Beyond Off-the-Shelf',
    heading: 'What Custom AI Automation Software Means',
    paragraphs: [
      'Custom AI automation software is automation built specifically for one organization’s process, combining custom code, API connectors, AI models and standard workflow platforms where they fit. It is used when ready-made tools cannot connect the systems, handle the logic or keep data where it needs to stay.',
      '“Custom” rarely means writing everything from scratch. In most projects it means a standard platform handles the routine steps and a few purpose-built components handle the parts no product covers. If you are still comparing approaches, our page on [general AI automation options](/products/general-ai-automation) covers the wider landscape.',
      'These are the signs that off-the-shelf tools are no longer enough.',
    ],
    problems: [
      'A key system has no integration. An older ERP, an industry portal or an in-house database has no connector in Zapier or Make.',
      'Workarounds are piling up. Spreadsheets, copy-paste steps and manual exports fill the gaps between tools.',
      'Logic is outgrowing the builder. Dozens of branches, loops and retries make the visual workflow hard to read and harder to fix.',
      'Usage costs are climbing. A high-volume workflow on a per-task plan costs more each month as you grow.',
      'Data must stay in-house. Sensitive records cannot pass through a third-party cloud.',
      'Staff need a place to review work. There is no screen where someone can see what the automation did and correct it.',
    ],
  },

  explainer: {
    eyebrow: 'Build vs Buy',
    heading: 'Build vs Buy: How to Decide',
    paragraphs: [
      'Each factor below shows when buying an off-the-shelf platform fits and when building custom components makes more sense.',
      'If most of your answers sit on the buy side, a well-configured platform is usually the right call, and you can [compare off-the-shelf automation tools](/products/general-ai-automation/ai-automation-tools-for-businesses) first. Many projects end up as a hybrid of both.',
    ],
    points: [
      { title: 'Integrations', description: 'Buy: ready-made connectors exist for your apps. Build: systems lack connectors or need deeper access.' },
      { title: 'Logic', description: 'Buy: linear or moderately branched. Build: complex rules, loops, state or retries.' },
      { title: 'Volume', description: 'Buy: low to moderate. Build: high, where usage pricing becomes a burden.' },
      { title: 'Data Location', description: 'Buy: a third-party cloud is acceptable. Build: data must stay in your environment.' },
      { title: 'Interface', description: 'Buy: notifications are enough. Build: staff need a review or admin screen.' },
      { title: 'Maintenance', description: 'Buy: your team adjusts workflows in a visual builder. Build: a developer or partner maintains code with documentation.' },
    ],
  },

  features: {
    eyebrow: 'Use Cases',
    heading: 'Where Custom AI Automation Software Fits',
    intro:
      'Examples below are scoped per project. Collecting status updates or documents from portals without APIs, for instance, is a common need for [logistics teams with older TMS platforms](/products/industry-specific-ai-automation/ai-logistics-automation).',
    items: [
      { title: 'Legacy System Bridges', description: 'Moving data between a modern CRM and an older internal system that only accepts file imports.' },
      { title: 'Industry Portals', description: 'Collecting status updates or documents from portals without APIs.' },
      { title: 'Private AI Processing', description: 'Summarizing or classifying sensitive records with models accessed through your own cloud or AI accounts.' },
      { title: 'Exception Dashboards', description: 'Giving a team one screen to clear items the automation could not handle.' },
      { title: 'High-Volume Pipelines', description: 'Processing large batches of records on infrastructure you control, rather than per-task pricing.' },
      { title: 'Custom Reporting', description: 'Pulling data from several systems into a single report or dashboard that off-the-shelf connectors cannot assemble.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How It Works: An Example Custom Build',
    intro:
      'Consider an operations team that receives order documents by email and must enter them into an older ERP with no modern API. Every component is documented, and the code, workflows and accounts sit in your environment.',
    steps: [
      { title: 'Intake', description: 'A self-hosted n8n workflow watches the shared inbox and saves attachments.' },
      { title: 'Extraction', description: 'An AI model reads each document and returns structured fields such as customer, items, quantities and dates.' },
      { title: 'Validation', description: 'Custom code checks the fields against business rules and existing records in your database.' },
      { title: 'Human Review', description: 'Anything that fails validation, or where the AI was unsure, appears in an internal dashboard. A team member corrects or approves it.' },
      { title: 'System Entry', description: 'Approved orders are written to the ERP through a custom connector, or through RPA where no other access exists.' },
      { title: 'Confirmation and Logging', description: 'The customer receives a confirmation, and every step is logged so the team can trace what happened.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Benefits of a Tailored Build',
    intro: 'A custom build should be a deliberate choice. When it is the right one, this is what it gives you.',
    items: [
      { title: 'It Fits the Process', description: 'Instead of forcing the process to fit a tool.' },
      { title: 'It Reaches Your Systems', description: 'Including the ones without ready-made integrations.' },
      { title: 'It Keeps Data Where You Need It', description: 'With self-hosted and private options.' },
      { title: 'It Gives Staff Visibility', description: 'Through review screens and logs.' },
      { title: 'It Stays Yours', description: 'With code, accounts and documentation owned by your business.' },
      { title: 'It Avoids Over-Building', description: 'Because standard platforms still handle the routine steps.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI and People',
    heading: 'What the AI Handles and What Your Team Reviews',
    paragraphs: [
      'In a custom build, AI models do the reading and extraction, and custom code checks their output against your business rules. Anything that fails validation, or where the AI was unsure, goes to a person rather than straight into your systems.',
      'A simple review screen is often the piece that makes automation trustworthy for the people who rely on it. Review points are designed in from the start, and exceptions go to a person with context.',
    ],
    aiDoes: [
      'Reads incoming documents and emails',
      'Returns structured fields from each document',
      'Summarizes or classifies sensitive records',
      'Looks up records and drafts responses within set limits',
      'Flags items it is unsure about',
    ],
    peopleDo: [
      'Review flagged items in the dashboard',
      'Correct extracted data and approve AI drafts',
      'Decide which steps the automation may take',
      'Approve the plan before development starts',
    ],
  },

  spotlight: {
    eyebrow: 'In Practice',
    heading: 'What “Custom” Looks Like in Practice',
    paragraphs: [
      'When a system has an API but no ready connector, we build one. When it has no API at all, options include database access, file exchange or [robotic process automation](/services/robotic-process-automation) that works through the user interface. Wider work on [connecting AI models to your business systems](/products/general-ai-automation/ai-integration-services) covers authentication, data mapping and retrieval in more depth.',
      'n8n can run on your own servers or cloud, so workflows and data stay under your control; our [n8n automation services](/platforms/n8n-automation-services) cover setup, hosting choices and workflow builds. For multi-step tasks, our [AI agent development](/products/ai-agents-platforms/ai-agent-development) page explains how agents are scoped and controlled.',
    ],
    points: [
      { title: 'Custom Code Components', description: 'Small, focused pieces of code for steps a platform cannot do well: complex calculations, data cleaning, file conversions or calling an AI model with structured prompts and validation.' },
      { title: 'API Connectors for Systems Without Integrations', description: 'A connector built for a system with an API but no ready connector, or database access, file exchange or RPA where there is no API.' },
      { title: 'Self-Hosted Workflows', description: 'n8n running on your own servers or cloud, so workflows and data stay under your control.' },
      { title: 'Internal Tools and Admin Dashboards', description: 'A simple web interface where staff review flagged items, approve AI drafts, correct extracted data or see what ran today.' },
      { title: 'AI Agents With Defined Tools', description: 'An AI agent that can look up records, draft responses and update systems within limits you set.' },
    ],
  },

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Custom AI Automation Software Is For',
    items: [
      { title: 'Teams With Legacy Systems', description: 'Businesses relying on an older ERP or in-house database with no connector in standard tools.' },
      { title: 'Operations Teams Drowning in Workarounds', description: 'Teams filling gaps between tools with spreadsheets, copy-paste steps and manual exports.' },
      { title: 'Data-Sensitive Organizations', description: 'Businesses whose records cannot pass through a third-party cloud.' },
      { title: 'High-Volume Workflows', description: 'Teams where per-task pricing grows with every batch processed.' },
      { title: 'Teams Outgrowing Visual Builders', description: 'Workflows with so many branches, loops and retries they are hard to read and fix.' },
      { title: 'Staff Who Need a Review Screen', description: 'Teams that need one place to see what the automation did and correct it.' },
    ],
  },

  integrations: {
    eyebrow: 'Technologies',
    heading: 'Technologies and Integrations',
    paragraphs: [
      'Custom builds draw on the same tools as the rest of our work, plus code where needed. ERPs such as SAP, NetSuite or Oracle, and CRMs such as Salesforce or HubSpot, are connected where the system offers an API or integration, confirmed during discovery.',
      'For broader AI builds beyond automation, such as AI features inside your products, see our [custom AI development service](/services/custom-ai-development).',
    ],
    groups: [
      { label: 'Orchestration', items: ['n8n', 'Make', 'Zapier'] },
      { label: 'AI Models', items: ['OpenAI (GPT)', 'Anthropic Claude', 'Google Gemini', 'Open-source models'] },
      { label: 'Agents and Retrieval', items: ['LangChain', 'LlamaIndex'] },
      { label: 'System Access', items: ['REST APIs', 'Webhooks', 'MCP connectors'] },
      { label: 'Storage', items: ['SQL databases', 'Airtable', 'Cloud data platforms'] },
      { label: 'Hosting', items: ['AWS', 'Azure', 'GCP'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Clickmasters for Custom Builds',
    intro: 'A custom build should be a deliberate choice, not a default, and we treat it that way.',
    items: [
      { title: 'We Only Build What Needs Building', description: 'If a standard platform will do the job, we will say so.' },
      { title: 'You Own Everything', description: 'The automations, code, accounts and documentation belong to you, and you pay platform and AI usage costs directly.' },
      { title: 'People Approve the Important Steps', description: 'Review points are designed in from the start, and exceptions go to a person with context.' },
      { title: 'We Build in Your Environment', description: 'Your cloud, your accounts, your access controls.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Build It',
    intro: 'We decide which parts are standard and which are custom before anything is built, and you approve that plan.',
    steps: [
      { title: 'Discovery', description: 'We learn the process, the systems involved and the constraints, including data location and access.' },
      { title: 'Strategy and Mapping', description: 'We map triggers, decision points, actions, integrations and approval points, and decide which parts are standard and which are custom. You approve the plan before development starts.' },
      { title: 'Development', description: 'We build the connectors, code components, workflows and any review interface.' },
      { title: 'Testing', description: 'We test with real data, including edge cases, malformed inputs and failure scenarios such as an unavailable system.' },
      { title: 'Deployment', description: 'The solution goes live in your environment, and documentation, access and code are handed over.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'The free audit tells you which parts need custom work, which can run on standard tools, and which are not worth automating.',
  },

  cta: {
    bandHeading: 'Have a process that tools can’t handle?',
    heading: 'Talk to Us About Your Process',
    description:
      'A custom build should be a deliberate choice, not a default. Request a free audit of your process and we will review your systems and workflows, then tell you plainly which parts need custom work, which can run on standard tools, and which are not worth automating.',
    primary: { text: 'Request a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Custom AI Automation Software: Common Questions',
  faqSideText: 'Not sure whether you need a custom build? Book a free audit and we will tell you whether a standard platform will do.',
  faqs: [
    {
      question: 'When should I build custom automation software instead of using Zapier?',
      answer:
        'Build custom components when a system has no connector, the logic is too complex for a visual builder, volume makes per-task pricing expensive, or data must stay in your environment. If none of those apply, a standard platform such as Zapier is usually the simpler choice.',
    },
    {
      question: 'How long does custom automation take to build?',
      answer:
        'It depends on the number of systems, the complexity of the logic and how much custom code is needed. We map the scope during discovery and strategy, so you see the plan before development begins.',
    },
    {
      question: 'Who owns custom automation software?',
      answer:
        'You do. The code, workflows, accounts and documentation belong to your business, and you pay platform and AI usage costs directly to the providers.',
    },
    {
      question: 'Can custom automation work with legacy systems?',
      answer:
        'Often, yes. If the system has an API, we connect through it; if not, options include database access, file exchange or robotic process automation through the user interface. What is possible is confirmed during discovery.',
    },
    {
      question: 'Is custom always more expensive than off-the-shelf?',
      answer:
        'Not necessarily over time. A custom component has a build cost, but for high-volume workflows it can reduce reliance on usage-based platform fees, while hosting and maintenance carry their own costs. The free audit helps you weigh both options for your situation.',
    },
    {
      question: 'Can custom automation keep data in our own environment?',
      answer:
        'Yes. Workflows can run on self-hosted n8n or your own cloud account, open-source models can run on infrastructure you control, and hosted models are accessed through your own accounts. Data handling for your specific setup is confirmed during discovery.',
    },
  ],
};
