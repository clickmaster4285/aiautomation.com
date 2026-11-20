// content/products/general-ai-automation/ai-integration-services.ts
// Copy + SEO for /products/general-ai-automation/ai-integration-services.
//
// Accuracy rules for this page (keep them when editing):
// - Owns the primary keyword "AI integration services": the plumbing that connects AI models (GPT, Claude, Gemini,
//   open-source) to CRMs, ERPs, helpdesks, databases and documents: authentication, data mapping and structured
//   output, retrieval, error handling, logging and cost control. AI features inside existing apps belong to the
//   AI-Powered Business Software sibling; staff Q&A over documents to AI Knowledge Assistants.
// - Data-training caveat: whether data sent to a model is used for training depends on the AI provider and the
//   plan or settings used. It is confirmed per provider in discovery; never promise it on the provider's behalf.
// - Privacy: "we design with privacy in mind"; formal compliance such as HIPAA is a shared responsibility that
//   depends on the specific setup and is confirmed per project. No certifications or compliance claims.
// - Integrations are conditional: where the system offers an API or integration, confirmed during discovery.
//   Systems without an API are discussed in discovery; never promise a connection before checking.
// - No statistics, percentages, prices, testimonials, case results, customer names, "leading/best" claims,
//   guarantees or SLAs. Monitoring and improvement after launch is part of the process; scope and terms are
//   agreed per project.
// - The client owns the integrations, accounts and documentation and pays platform and AI usage costs directly.
//
// Inline links use [anchor text](/path). This page contains EXACTLY EIGHT contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_INTEGRATION_SERVICES_PATH = '/products/general-ai-automation/ai-integration-services';

export const aiIntegrationServicesSeo: HubSeo = {
  name: 'AI Integration Services',
  path: AI_INTEGRATION_SERVICES_PATH,
  title: 'AI Integration Services for Your Systems | Clickmasters',
  description:
    'AI integration services that connect GPT, Claude or Gemini to your CRM, ERP, helpdesk and data through APIs, with logging and cost control. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'General AI Automation', path: '/products/general-ai-automation' },
    { name: 'AI Integration Services', path: AI_INTEGRATION_SERVICES_PATH },
  ],
};

export const aiIntegrationServicesKeywords = [
  'AI integration services',
  'AI integration for business',
  'integrate AI into existing systems',
  'LLM integration services',
  'OpenAI API integration',
  'CRM AI integration',
  'ERP AI integration',
  'AI API integration',
  'RAG integration with company data',
  'connect AI to business data',
  'AI system integration partner',
  'MCP integration',
  'how to connect ChatGPT to a CRM',
  'connecting Claude or Gemini to business systems',
  'retrieval from company documents for AI',
  'AI integration with webhooks and APIs',
  'controlling AI API usage costs',
  'logging and error handling for AI integrations',
];

// The eight contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'broader AI automation for business', href: '/products/general-ai-automation', section: 'What AI Integration Covers (intro)' },
  { anchor: 'AI features that appear inside your existing apps', href: '/products/general-ai-automation/ai-powered-business-software', section: 'What AI Integration Covers (intro)' },
  { anchor: 'an internal knowledge assistant', href: '/services/ai-knowledge-assistants', section: 'What a Solid AI Integration Includes (features)' },
  { anchor: 'CRM automation solutions', href: '/solutions/crm-automation', section: 'Common Integration Projects (extras)' },
  { anchor: 'HubSpot workflow and integration builds', href: '/platforms/hubspot-automation-services', section: 'Common Integration Projects (extras)' },
  { anchor: 'AI integration for clinics and medical offices', href: '/products/industry-specific-ai-automation/ai-healthcare-automation', section: 'Data Handling and Privacy (spotlight)' },
  { anchor: 'n8n workflow builds', href: '/platforms/n8n-automation-services', section: 'Systems, Models and Connection Methods (integrations)' },
  { anchor: 'custom AI development work', href: '/services/custom-ai-development', section: 'Systems, Models and Connection Methods (integrations)' },
] as const;

export const aiIntegrationServices: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Integration Services',
    heading: 'AI Integration Services That Connect AI Models to Your Business Systems',
    accentWords: 3,
    subheading:
      'An AI model on its own knows nothing about your customers, orders or policies. We connect models such as GPT, Claude and Gemini to your CRM, ERP, helpdesk, databases and documents, with the access controls, error handling and logging a live business system needs.',
    primaryCta: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/datas.png',
    imageAlt:
      'Illustration of business data flowing between connected systems, representing AI models integrated with a CRM, ERP, helpdesk and company documents',
    imageWidth: 2370,
    imageHeight: 1264,
    marquee: ['GPT, Claude and Gemini', 'CRM and ERP connections', 'Retrieval from your documents', 'Structured, validated output', 'Error handling and fallbacks', 'Logging and cost control'],
  },

  intro: {
    eyebrow: 'What AI Integration Covers',
    heading: 'What Are AI Integration Services?',
    paragraphs: [
      'An AI model becomes useful when it can read the right data from your systems and write results back in a form those systems accept. AI integration services connect AI models to the business systems a company already runs, so the model can read relevant data, follow your instructions and return results into those systems. The work covers authentication, data mapping, retrieval from company content, error handling, logging and cost control, built through APIs, webhooks or MCP connectors.',
      'This page is about the plumbing. It fits within [broader AI automation for business](/products/general-ai-automation), and it is what makes [AI features that appear inside your existing apps](/products/general-ai-automation/ai-powered-business-software) possible. If you already know which feature you want, this is the part that makes it work reliably.',
    ],
    problems: [
      'The AI demo worked, but the model has never seen a real customer record.',
      'The AI returns a paragraph when the CRM needs a picklist value, a date and a number.',
      'One timeout or missing field and the whole workflow stops.',
      'Nobody can see what the AI received, returned or got wrong.',
      'AI usage grows without anyone watching what it costs.',
    ],
  },

  explainer: {
    eyebrow: 'Why Pilots Stall',
    heading: 'Why AI Pilots Stall at the Integration Step',
    paragraphs: [
      'Many AI experiments work well in a demo and then stall. The reasons are usually practical, not about the model.',
      'Each of these is an integration problem, and each has a design answer: controlled access to live data, structured output that is validated before it is saved, planned failure handling, logs and visible usage.',
    ],
    points: [
      { title: 'The Model Cannot See Real Data', description: 'Someone pastes examples into a chat window, and nobody has worked out how to give the model live records safely.' },
      { title: 'Output Does Not Fit the System', description: 'The AI returns a paragraph when the CRM needs a picklist value, a date and a number.' },
      { title: 'No Plan for Failure', description: 'An API times out, a record is missing a field, or the model returns something unexpected, and the whole workflow stops.' },
      { title: 'Nobody Can See What Happened', description: 'There is no log of inputs, outputs or errors, so problems are found by customers.' },
      { title: 'Costs Are a Surprise', description: 'Every call sends more text than needed, and usage grows without anyone watching.' },
    ],
  },

  features: {
    eyebrow: 'What It Includes',
    heading: 'What a Solid AI Integration Includes',
    intro:
      'These are the parts we build into every integration. Retrieval answers questions from your own policies, manuals and past work; when the main goal is staff asking questions of your documents, that is usually [an internal knowledge assistant](/services/ai-knowledge-assistants).',
    items: [
      { title: 'Authentication and Access', description: 'We connect using the access methods your systems support, such as OAuth or API keys, held in your accounts. Each integration gets only the permissions it needs, so a workflow that reads tickets cannot edit invoices.' },
      { title: 'Data Mapping and Structured Output', description: 'We decide exactly which fields go to the model and what comes back. Structured output is validated before anything is written, and invalid results are held back rather than saved.' },
      { title: 'Retrieval From Your Own Content', description: 'For questions that depend on your policies, manuals or past work, we set up retrieval from your documents (often called RAG), so the model answers from your material and shows its sources.' },
      { title: 'Error Handling and Fallbacks', description: 'Retries for temporary failures, alerts when something keeps failing, and a fallback to a person when the AI cannot complete a task. A failed run should never disappear silently.' },
      { title: 'Logging and Cost Control', description: 'Each run records inputs, outputs, errors and usage. We keep the data sent to the model to what the task needs, choose a model that suits the job and make usage visible.' },
      { title: 'Usage You Pay Directly', description: 'You pay AI usage costs directly to the provider, so you can see where AI spend goes in your own account.' },
    ],
  },

  howItWorks: {
    eyebrow: 'Worked Example',
    heading: 'Example: AI Connected to a Helpdesk, CRM and Knowledge Base',
    intro: 'Here is how one integration runs from a new support ticket to a reply the customer actually receives.',
    steps: [
      { title: 'Trigger', description: 'A new ticket in Zendesk, Intercom or Freshdesk fires a webhook.' },
      { title: 'Look Up Context', description: 'The integration fetches the customer’s record from the CRM and recent order details from your database, through their APIs.' },
      { title: 'Retrieve Guidance', description: 'It finds the relevant passages in your help articles and internal policies.' },
      { title: 'Call the Model', description: 'Only the needed fields and passages go to the model, with instructions for tone, policy and format.' },
      { title: 'Validate', description: 'The response comes back as a suggested reply plus structured tags (topic, urgency, product). Tags are checked against your allowed values.' },
      { title: 'Write Back', description: 'The suggested reply is posted as an internal note, and tags are applied to the ticket.' },
      { title: 'Agent Approves', description: 'A support agent reviews the draft, edits it if needed and sends it. Nothing reaches the customer without that step.' },
      { title: 'Log', description: 'The run, any errors and the usage are recorded.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What a Well-Built Integration Gives You',
    intro:
      'Want to know which of your systems can be connected? A free audit reviews your stack and says what is realistic.',
    items: [
      { title: 'Live Records', description: 'AI that works with live records instead of copied examples.' },
      { title: 'Output Systems Accept', description: 'Output your systems can accept without someone retyping it.' },
      { title: 'Recoverable Failures', description: 'Failures that are visible and recoverable.' },
      { title: 'A Clear Record', description: 'A record of what the AI did and why.' },
      { title: 'Manageable Usage', description: 'Usage you can see and manage.' },
      { title: 'Integrations You Own', description: 'Integrations you own, documented, in your accounts.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI and People',
    heading: 'What the AI Does and What Your People Do',
    paragraphs: [
      'An integration gives the model access to the data a task needs and a defined place to put its results. It does not hand over decisions. Wherever a decision needs judgment, a person signs off, and exceptions go to a person with context.',
      'In the helpdesk example, the AI drafts and tags, but nothing reaches the customer until a support agent has reviewed it. The same pattern applies to CRM notes, ERP queries and database questions.',
    ],
    aiDoes: [
      'Reads the fields and passages a task needs',
      'Drafts replies, summaries and notes',
      'Returns structured tags and values',
      'Answers from your documents with sources',
      'Hands off to a person when it cannot complete a task',
    ],
    peopleDo: [
      'Decide what the model can access',
      'Review and send customer-facing replies',
      'Review query results before they are shared',
      'Approve the plan, model choice and approval points',
    ],
  },

  spotlight: {
    eyebrow: 'Data Handling and Privacy',
    heading: 'Data Handling and Privacy',
    paragraphs: [
      'We design with privacy in mind. That means sending the model only the data a task needs, keeping credentials in your accounts and logging access.',
      'Whether data you send is used to train AI models depends on the AI provider and the plan or settings you use. We confirm this for your specific providers during discovery, and we do not promise it on the provider’s behalf. Formal compliance, such as HIPAA, is a shared responsibility that depends on your specific setup and is confirmed for your project. For regulated settings, see how this applies to [AI integration for clinics and medical offices](/products/industry-specific-ai-automation/ai-healthcare-automation).',
    ],
    points: [
      { title: 'Minimum Necessary Data', description: 'Only the fields and passages a task needs are sent to the model.' },
      { title: 'Credentials in Your Accounts', description: 'OAuth connections and API keys are held in your accounts, with only the permissions each integration needs.' },
      { title: 'Logged Access', description: 'Each run records inputs, outputs, errors and usage.' },
      { title: 'Training Use Confirmed per Provider', description: 'Whether data is used for training depends on the provider and your plan or settings, and is confirmed during discovery.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Use Cases',
      heading: 'Common Integration Projects, Scoped per Project',
      accentWords: 3,
      paragraphs: [
        'These are examples. Each is scoped per project during discovery.',
        'In a CRM, AI can write summaries, lead scoring notes and enrichment into contact and deal records. [CRM automation solutions](/solutions/crm-automation) show the broader workflows these feed into, and teams on HubSpot can read about our [HubSpot workflow and integration builds](/platforms/hubspot-automation-services).',
      ],
      points: [
        { title: 'CRM', description: 'Summaries, lead scoring notes and enrichment written into contact and deal records.' },
        { title: 'ERP', description: 'Supplier or order queries answered from ERP data such as SAP, NetSuite or Oracle, where an API is available.' },
        { title: 'Helpdesk', description: 'Reply drafts, classification and escalation summaries.' },
        { title: 'Databases and Data Platforms', description: 'Plain-language questions turned into checked queries, with results reviewed before they are shared.' },
        { title: 'Internal Tools via MCP', description: 'AI assistants given controlled access to selected systems through MCP connectors.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI Integration Services Are For',
    items: [
      { title: 'Teams With a Stalled AI Pilot', description: 'Teams whose AI experiment worked in a demo but never reached live data.' },
      { title: 'Sales and CRM Teams', description: 'Teams that want summaries, notes and enrichment written into contact and deal records.' },
      { title: 'Support Teams', description: 'Helpdesk teams that want reply drafts, classification and escalation summaries.' },
      { title: 'Operations and Finance', description: 'Teams answering supplier or order queries from ERP data.' },
      { title: 'Data and Reporting Teams', description: 'People who want plain-language questions turned into checked queries over their databases.' },
      { title: 'IT and Technology Leads', description: 'People who need access, logging, error handling and costs under control before AI touches live systems.' },
    ],
  },

  integrations: {
    eyebrow: 'Systems and Models',
    heading: 'Systems, Models and Connection Methods',
    paragraphs: [
      'We connect where the system offers an API or integration, confirmed during discovery. For most projects the integration layer is an automation platform. n8n is a frequent choice because it can be self-hosted, which you can read about on our [n8n workflow builds](/platforms/n8n-automation-services) page. Make and Zapier suit simpler flows.',
      'Where logic is too complex for a platform, we write code as part of [custom AI development work](/services/custom-ai-development). If a system has no API at all, we discuss alternatives in discovery.',
    ],
    groups: [
      { label: 'AI Models', items: ['OpenAI GPT', 'Anthropic Claude', 'Google Gemini', 'Open-source models'] },
      { label: 'CRMs', items: ['HubSpot', 'Salesforce', 'Zoho', 'Pipedrive', 'GoHighLevel'] },
      { label: 'ERPs', items: ['SAP', 'NetSuite', 'Oracle'] },
      { label: 'Support and Communication', items: ['Zendesk', 'Intercom', 'Freshdesk', 'Slack', 'Microsoft Teams', 'Gmail', 'Outlook', 'Twilio'] },
      { label: 'Data', items: ['SQL databases', 'Airtable', 'Cloud data platforms', 'Custom APIs'] },
      { label: 'Connection Methods', items: ['REST APIs', 'Webhooks', 'MCP connectors'] },
      { label: 'Frameworks and Clouds', items: ['LangChain', 'LlamaIndex', 'AWS', 'Azure', 'GCP'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Clickmasters for AI Integration',
    intro: 'We build the connection around your systems and your controls, not around a product we need to sell.',
    items: [
      { title: 'Your Accounts, Your Ownership', description: 'You own the integrations, accounts and documentation, and you pay platform and AI usage costs directly.' },
      { title: 'No Platform to Sell', description: 'We are an agency, so we pick the model and tools that suit the job.' },
      { title: 'People Approve What Matters', description: 'Wherever a decision needs judgment, a person signs off, and exceptions go to a person with context.' },
      { title: 'Free Audit to Start', description: 'It covers which integrations are worth building first and which are not.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Our Process',
    heading: 'Our Integration Process',
    intro:
      'Every integration follows our published six-step process, and you approve the plan before anything is built.',
    steps: [
      { title: 'Discovery', description: 'We list the systems involved, check what APIs and access exist, and review data sensitivity.' },
      { title: 'Strategy and Mapping', description: 'We define triggers, data flows, field mappings, model choice, approval points and failure handling.' },
      { title: 'Development', description: 'We build the connections, instructions, validation and logging.' },
      { title: 'Testing', description: 'We test with realistic data, including edge cases and failure scenarios such as missing fields, timeouts and unexpected model output.' },
      { title: 'Deployment', description: 'The integration goes live in your environment, with documentation and access handed over.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'You approve the plan before anything is built, and the free audit carries no obligation to proceed.',
  },

  cta: {
    bandHeading: 'Connect AI to the systems you rely on',
    heading: 'Connect AI to the Systems You Rely On',
    description:
      'The value of AI in a business shows up when it works with your real data, inside your real systems, under rules you can see. Book a free automation audit and we will review your stack and identify the integrations worth building first.',
    primary: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Integration Services: Common Questions',
  faqSideText: 'Want to know which of your systems can be connected? Book a free audit of your systems and we will say what is realistic.',
  faqs: [
    {
      question: 'How do you integrate AI into existing business systems?',
      answer:
        'We connect an AI model to your systems through their APIs, webhooks or MCP connectors, usually with an automation platform such as n8n in the middle. The integration fetches the data a task needs, sends it to the model with clear instructions and writes validated results back. A person reviews output wherever judgment is involved.',
    },
    {
      question: 'Can you connect ChatGPT to our CRM?',
      answer:
        'Yes, where your CRM offers an API, which we confirm during discovery. We connect OpenAI’s models, or Claude or Gemini if they suit the task better, so they can read records and write summaries, notes or tags back. You keep control of what the model can access.',
    },
    {
      question: 'Is our data used to train AI models?',
      answer:
        'That depends on the AI provider and the plan or settings you use, so we confirm it for your providers during discovery rather than promising it. We also limit the data sent to the model to what each task needs. If this matters for your business, raise it early so it shapes the design.',
    },
    {
      question: 'What does an AI integration project involve?',
      answer:
        'It follows our six-step process: discovery, strategy and mapping, development, testing, deployment, and monitoring and improvement. Most of the design effort goes into data mapping, failure handling and approval points. You approve the plan before anything is built.',
    },
    {
      question: 'What if our system has no API?',
      answer:
        'We look at alternatives during discovery, such as exports, database access or screen-based automation for specific tasks. Some systems cannot be connected in a reliable way, and we will tell you when that is the case. We do not promise a connection before checking.',
    },
    {
      question: 'Which AI model should we use?',
      answer:
        'It depends on the task, the data involved and your preferences on providers and cost. We work with GPT, Claude, Gemini and open-source models, and we recommend one during mapping. The integration can be designed so the model can be changed later.',
    },
    {
      question: 'How do you control AI usage costs?',
      answer:
        'We send the model only the data each task needs, choose a model that fits the job and log usage for each workflow. You pay the AI provider directly, so the spend is visible in your own account. Usage patterns are reviewed after launch as part of monitoring.',
    },
  ],
};
