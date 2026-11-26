// content/products/general-ai-automation/intelligent-business-automation.ts
// Copy + SEO for /products/general-ai-automation/intelligent-business-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Owns the primary keyword "intelligent business automation": a design approach that splits a process between
//   rules, AI and people, with confidence thresholds, escalation with context, approval points and audit logs.
//   It is a design approach, not a product. Do not target "intelligent process automation" (the AI + RPA stack
//   belongs to the IPA page under AI Workflow & Business Process Automation) or "AI process optimization".
// - Financial, legal, clinical and safety decisions always stay with people. Healthcare use is administrative only.
// - Use cases are examples, scoped per project. Integrations are conditional: where the system offers an API or
//   integration, confirmed during discovery.
// - No statistics, percentages, prices, testimonials, case results, customer names, "leading/best" claims,
//   certifications, compliance claims, guarantees or SLAs. Monitoring and improvement after launch is part of the
//   process; scope and terms are agreed per project.
// - The client owns the automations and documentation and pays platform and AI usage costs directly.
//
// Inline links use [anchor text](/path). This page contains EXACTLY SEVEN contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const INTELLIGENT_BUSINESS_AUTOMATION_PATH = '/products/general-ai-automation/intelligent-business-automation';

export const intelligentBusinessAutomationSeo: HubSeo = {
  name: 'Intelligent Business Automation',
  path: INTELLIGENT_BUSINESS_AUTOMATION_PATH,
  title: 'Intelligent Business Automation Services | Clickmasters',
  description:
    'Intelligent business automation that splits work between rules, AI and people, with escalation and approvals for judgment calls. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'General AI Automation', path: '/products/general-ai-automation' },
    { name: 'Intelligent Business Automation', path: INTELLIGENT_BUSINESS_AUTOMATION_PATH },
  ],
};

export const intelligentBusinessAutomationKeywords = [
  'intelligent business automation',
  'intelligent automation for business',
  'AI decision automation',
  'exception handling automation',
  'human-in-the-loop automation',
  'cognitive automation',
  'automating unstructured work',
  'rules plus AI automation',
  'adaptive workflow automation',
  'AI triage and routing',
  'automation with approvals',
  'how to automate work that needs judgment',
  'splitting a process between rules, AI and people',
  'confidence thresholds in AI automation',
  'escalation rules for automated workflows',
  'audit log for AI decisions',
  'automating customer requests that arrive in free text',
];

// The seven contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'the wider set of AI automation approaches', href: '/products/general-ai-automation', section: 'A Working Definition (intro)' },
  { anchor: 'Rule-based business process automation', href: '/services/business-process-automation', section: 'Where Plain Automation Breaks Down (explainer)' },
  { anchor: 'Robotic process automation for screen-based tasks', href: '/services/robotic-process-automation', section: 'Where Plain Automation Breaks Down (explainer)' },
  { anchor: 'our intelligent process automation page', href: '/products/ai-workflow-business-process-automation/intelligent-process-automation', section: 'The Three-Way Split (spotlight)' },
  { anchor: 'intelligent document processing', href: '/products/ai-document-data-intelligence/intelligent-document-processing', section: 'Use Cases, Scoped per Project (extras)' },
  { anchor: 'administrative automation for medical practices', href: '/products/industry-specific-ai-automation/ai-healthcare-automation', section: 'Use Cases, Scoped per Project (extras)' },
  { anchor: 'clean up the process first', href: '/products/general-ai-automation/ai-process-optimization', section: 'How a Project Runs (getting started)' },
] as const;

export const intelligentBusinessAutomation: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 4 },

  hero: {
    badge: 'Intelligent Business Automation',
    heading: 'Intelligent Business Automation for Work That Needs Judgment',
    accentWords: 4,
    subheading:
      'Some work is easy to automate: the same input, the same steps, the same output. Most of the work that eats a team’s day is not like that. Intelligent business automation is how Clickmasters handles that kind of work: rules take the predictable steps, AI reads and drafts, and people make the calls that need judgment.',
    primaryCta: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt:
      'Illustration of an automated workflow across connected apps with AI steps, representing a process split between rules, AI and people',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Rules for predictable steps', 'AI for messy input', 'People for judgment', 'Confidence thresholds', 'Escalation with context', 'Audit logs'],
  },

  intro: {
    eyebrow: 'A Working Definition',
    heading: 'What Is Intelligent Business Automation?',
    paragraphs: [
      'Intelligent business automation is a way of designing automated processes where fixed rules, AI models and people each handle the part of the work they are suited to. Rules run predictable steps, AI reads, classifies and drafts from unstructured input, and people approve decisions and resolve exceptions, with every step logged.',
      'It is a design approach rather than a product. It sits alongside [the wider set of AI automation approaches](/products/general-ai-automation) we use, and it matters most when a process mixes routine handling with cases that need a human look.',
    ],
    problems: [
      'Emails arrive in free text, not in the format a rule expects.',
      'Requests are half complete, or contradict what is in the system.',
      'A steady share of cases are exceptions that pull people back in.',
      'Rigid automations error out, or confidently do the wrong thing.',
      'Only the easy cases get automated, so the inbox never really shrinks.',
    ],
  },

  explainer: {
    eyebrow: 'The Limits of Rules',
    heading: 'Where Plain Automation Breaks Down',
    paragraphs: [
      'Traditional automation is excellent at structured, predictable work. [Rule-based business process automation](/services/business-process-automation) moves data between systems on clear conditions. [Robotic process automation for screen-based tasks](/services/robotic-process-automation) clicks through applications that have no API. Both are reliable as long as the input looks the way the rules expect.',
      'Problems start when it does not. Adding AI to read and interpret the input fixes part of this. Adding clear human checkpoints fixes the rest.',
    ],
    points: [
      { title: 'Free-Text Input', description: 'A customer writes “can you move my delivery and change the size on the second item” in one email. A rule cannot parse that.' },
      { title: 'Missing or Conflicting Details', description: 'The order number is wrong, or the request contradicts what is in the system.' },
      { title: 'Silent Failures', description: 'A rigid automation either errors out or, worse, does the wrong thing confidently.' },
      { title: 'All-or-Nothing Design', description: 'Teams end up automating only the easy cases and handling everything else by hand, so the inbox never really shrinks.' },
    ],
  },

  features: {
    eyebrow: 'Design Controls',
    heading: 'The Design Controls That Keep It Safe',
    intro:
      'Four controls decide when the automation continues on its own, when it stops for a person and how every decision can be reviewed later.',
    items: [
      { title: 'Confidence Thresholds', description: 'The workflow decides how sure the AI needs to be before a case can continue without a person. Below that line, the case goes to a human. Thresholds start cautious and are adjusted with you as real cases show how the AI performs.' },
      { title: 'Escalation With Context', description: 'When a case is escalated, the person receives the original input, what the AI understood, what the rules found and a suggested next step. They do not have to start from scratch.' },
      { title: 'Approval Points', description: 'Some steps always need a person, regardless of confidence. You decide where those are. Financial, legal, clinical and safety decisions always stay with people.' },
      { title: 'Audit Logs', description: 'Each run records what came in, what the AI produced, which rules fired and who approved what, so a decision can be reviewed later and patterns spotted.' },
    ],
  },

  howItWorks: {
    eyebrow: 'Worked Example',
    heading: 'Example: Handling a Customer Change Request',
    intro: 'A typical build for an operations or customer service team.',
    steps: [
      { title: 'Request Arrives', description: 'A customer emails the shared inbox asking to change an order.' },
      { title: 'AI Reads It', description: 'The model identifies the request type, the order reference and the change requested, and notes anything missing.' },
      { title: 'Rules Check It', description: 'The automation looks up the order in your system and checks your policy: has it shipped, is the change allowed, does it affect the price?' },
      { title: 'Confidence Check', description: 'If the AI’s reading is clear and the rules say the change is routine, the workflow prepares the update. If anything is uncertain, the case goes straight to a person.' },
      { title: 'Person Approves Where Needed', description: 'Changes inside your agreed limits can be applied automatically. Anything outside them, such as a credit or a policy exception, waits for a named team member to approve.' },
      { title: 'Reply Drafted', description: 'The AI drafts a confirmation in your tone. It sends automatically for routine cases or waits for review, depending on what you choose.' },
      { title: 'Logged', description: 'Every step, from the original email to the final action and who approved it, is recorded.' },
    ],
  },

  benefits: {
    eyebrow: 'What You Gain',
    heading: 'What Intelligent Business Automation Gives Your Team',
    intro:
      'Have a process where exceptions keep pulling people back in? Splitting it between rules, AI and people changes what the automation can take on.',
    items: [
      { title: 'More of the Inbox Handled', description: 'The automation no longer stops at the first case that does not fit a rule.' },
      { title: 'Fewer Confident Mistakes', description: 'Uncertain cases go to people instead of being guessed.' },
      { title: 'Faster Exception Handling', description: 'Escalations arrive with the context already gathered.' },
      { title: 'Clear Accountability', description: 'Named approvers and a log of who decided what.' },
      { title: 'Room to Grow', description: 'Thresholds and rules are adjusted based on real cases.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI and People',
    heading: 'What the AI Does and What Your People Do',
    paragraphs: [
      'The aim is not to remove people from the process. It is to stop using people for the parts a rule or a model can do, so their attention goes to the cases that need it.',
      'AI is good at reading, classifying, extracting and drafting from messy input. People bring judgment, accountability and care for anything with real consequences. A person approves wherever a decision needs judgment, and exceptions go to a person with context.',
    ],
    aiDoes: [
      'Works out what an email is asking for',
      'Pulls key details from free text',
      'Notes anything missing from a request',
      'Drafts replies in your tone',
      'Summarizes cases for escalation',
    ],
    peopleDo: [
      'Approve refunds or exceptions',
      'Handle unhappy customers',
      'Decide unclear cases',
      'Sign off outputs',
      'Own financial, legal, clinical and safety decisions',
    ],
  },

  spotlight: {
    eyebrow: 'The Core of the Approach',
    heading: 'The Three-Way Split: Rules, AI and People',
    paragraphs: [
      'The core of the approach is deciding, step by step, who or what should do each part of a process. The split is agreed with you during mapping, step by step.',
      'If you want the technical view of how AI and RPA are combined underneath, [our intelligent process automation page](/products/ai-workflow-business-process-automation/intelligent-process-automation) covers the stack.',
    ],
    points: [
      { title: 'Rules', description: 'Good at fixed, predictable logic that must behave the same way every time: look up a record, check a status, apply a policy limit, send a notification, update a field.' },
      { title: 'AI', description: 'Good at reading, classifying, extracting and drafting from messy input: work out what an email is asking for, pull key details from text, draft a reply, summarize a case.' },
      { title: 'People', description: 'Good at judgment, accountability and anything with real consequences: approve refunds or exceptions, handle unhappy customers, decide unclear cases, sign off outputs.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Use Cases',
      heading: 'Use Cases, Scoped per Project',
      accentWords: 3,
      paragraphs: [
        'These are examples. Each one is scoped per project. In back-office work, information can be pulled from forms and attachments using [intelligent document processing](/products/ai-document-data-intelligence/intelligent-document-processing), then checked by rules and people.',
        'In a healthcare front office, referral and intake paperwork can be sorted and prepared for staff, as described in [administrative automation for medical practices](/products/industry-specific-ai-automation/ai-healthcare-automation). Clinical decisions stay with clinicians.',
      ],
      points: [
        { title: 'Customer Service', description: 'Free-text requests triaged, routine changes processed, complex cases routed with a summary.' },
        { title: 'Finance Operations', description: 'Supplier queries matched to the right invoice and owner, with payment decisions left to the finance team.' },
        { title: 'Sales Operations', description: 'Inbound enquiries classified and routed, with unclear leads reviewed before assignment.' },
        { title: 'Back-Office Documents', description: 'Information pulled from forms and attachments, then checked by rules and people.' },
        { title: 'Healthcare Front Office', description: 'Referral and intake paperwork sorted and prepared for staff. Clinical decisions stay with clinicians.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Intelligent Business Automation Suits',
    items: [
      { title: 'Customer Service Teams', description: 'Teams working a shared inbox full of free-text requests and a steady share of exceptions.' },
      { title: 'Operations Teams', description: 'People handling change requests that need a policy check and, sometimes, a human decision.' },
      { title: 'Finance Operations', description: 'Teams fielding supplier queries where payment decisions must stay with people.' },
      { title: 'Sales Operations', description: 'Teams routing inbound enquiries where unclear leads need a review before assignment.' },
      { title: 'Back-Office Teams', description: 'Teams processing document-heavy work from forms and attachments.' },
      { title: 'Medical Practice Front Offices', description: 'Staff preparing referral and intake paperwork, with clinical decisions left to clinicians.' },
    ],
  },

  integrations: {
    eyebrow: 'Technologies and Integrations',
    heading: 'Built on the Tools You Already Use',
    paragraphs: [
      'We build on the tools you already use, where the system offers an API or integration, confirmed during discovery. Automation platforms include n8n (which can be self-hosted), Make and Zapier, working with AI models from OpenAI (GPT), Anthropic Claude, Google Gemini and open-source models.',
      'Agent frameworks such as LangChain and LlamaIndex are used where a multi-step agent is the right fit. Connections use REST APIs, webhooks and MCP connectors.',
    ],
    groups: [
      { label: 'Automation Platforms', items: ['n8n', 'Make', 'Zapier'] },
      { label: 'AI Models', items: ['OpenAI GPT', 'Anthropic Claude', 'Google Gemini', 'Open-source models'] },
      { label: 'CRMs', items: ['HubSpot', 'Salesforce', 'Zoho', 'Pipedrive'] },
      { label: 'Support Desks', items: ['Zendesk', 'Intercom', 'Freshdesk'] },
      { label: 'ERPs', items: ['SAP', 'NetSuite', 'Oracle'] },
      { label: 'Communication', items: ['Gmail', 'Outlook', 'Slack', 'Microsoft Teams', 'Twilio'] },
      { label: 'Data and Connections', items: ['Airtable', 'SQL databases', 'REST APIs', 'Webhooks', 'MCP connectors'] },
      { label: 'Agent Frameworks', items: ['LangChain', 'LlamaIndex'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Clickmasters for Intelligent Business Automation',
    intro: 'We design for the messy cases from the start, and we keep people in charge of the decisions that matter.',
    items: [
      { title: 'Human in the Loop by Design', description: 'A person approves wherever a decision needs judgment, and exceptions go to a person with context.' },
      { title: 'Built in Your Tools', description: 'The automations run in your accounts. You own them and the documentation, and you pay platform and AI usage costs directly.' },
      { title: 'Honest Scoping', description: 'If a step should stay manual, we say so.' },
      { title: 'A Free Audit First', description: 'It tells you which tasks are worth automating first and which are not, with no obligation.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'How a Project Runs',
    heading: 'How an Intelligent Business Automation Project Runs',
    intro:
      'We follow our published six-step process, and you approve the plan before anything is built. If the process itself has unnecessary steps, it can make sense to [clean up the process first](/products/general-ai-automation/ai-process-optimization).',
    steps: [
      { title: 'Discovery', description: 'We review the process, the systems involved and real examples of the messy cases.' },
      { title: 'Strategy and Mapping', description: 'We map triggers, decision points, actions, integrations and approval points, and agree the rules, AI and people split.' },
      { title: 'Development', description: 'We build the workflow, the AI instructions and the escalation paths.' },
      { title: 'Testing', description: 'We test with real cases, including edge cases and failure scenarios such as ambiguous requests and system errors.' },
      { title: 'Deployment', description: 'The automation goes live in your environment, with documentation and access handed over.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'You approve the plan before anything is built, and the free audit carries no obligation to proceed.',
  },

  cta: {
    bandHeading: 'Put judgment where it belongs',
    heading: 'Put Judgment Where It Belongs',
    description:
      'The aim is not to remove people from the process. Book a free automation audit and we will map how one of your processes could be split between rules, AI and your team.',
    primary: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Intelligent Business Automation: Common Questions',
  faqSideText: 'Have a process where exceptions keep pulling people back in? Book a free audit and we will show you how it could be split.',
  faqs: [
    {
      question: 'What is intelligent business automation?',
      answer:
        'It is automation designed so that rules, AI and people each handle the part of a process they are suited to. Rules run predictable steps, AI reads and drafts from messy input, and people make the judgment calls. Every step is logged.',
    },
    {
      question: 'How is intelligent automation different from RPA?',
      answer:
        'RPA follows fixed steps on screens and works well when input is predictable. Intelligent automation adds AI to interpret unstructured input and adds human checkpoints for uncertain or important cases. RPA can still be one part of an intelligent automation build.',
    },
    {
      question: 'What happens when the automation hits an exception?',
      answer:
        'The case is passed to a person with the original input, what the AI understood and a suggested next step. The workflow does not guess. Exceptions are reviewed over time to see whether a rule or instruction should change.',
    },
    {
      question: 'How do you keep humans in control of AI decisions?',
      answer:
        'You decide where approval points sit, and those steps always wait for a named person. Financial, legal, clinical and safety decisions stay with people. Audit logs show what the AI produced and who approved each action.',
    },
    {
      question: 'What is a confidence threshold?',
      answer:
        'It is the line the workflow uses to decide whether the AI’s reading is clear enough to continue without a person. Cases below the line go to a human. We start cautious and adjust the line with you based on real results.',
    },
    {
      question: 'Which processes suit intelligent automation?',
      answer:
        'Processes with a high volume of similar requests that arrive in varied, free-text form, plus a share of exceptions, suit it well. Examples include shared inboxes, request intake and document-heavy back-office work. Fully predictable processes may only need rules.',
    },
    {
      question: 'Can we see why the AI made a choice?',
      answer:
        'Yes, each run is logged with the input, the AI’s output and the rules that applied. That lets your team review any decision later. It also helps us improve the instructions when the same mistake repeats.',
    },
  ],
};
