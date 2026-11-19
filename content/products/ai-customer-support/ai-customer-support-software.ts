// content/products/ai-customer-support/ai-customer-support-software.ts
// Copy + SEO for /products/ai-customer-support/ai-customer-support-software.
//
// Accuracy rules for this page (keep them when editing):
// - Only capabilities already stated elsewhere on the site. No SMS, social DMs, multilingual
//   support, sentiment analysis or self-training claims.
// - No statistics, prices, testimonials, guarantees, or ongoing-support promises.
// - Clickmasters builds this inside the client's existing help desk and channels — it is not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_CUSTOMER_SUPPORT_SOFTWARE_PATH = '/products/ai-customer-support/ai-customer-support-software';

export const aiCustomerSupportSoftwareSeo: HubSeo = {
  name: 'AI Customer Support Software',
  path: AI_CUSTOMER_SUPPORT_SOFTWARE_PATH,
  title: 'AI Customer Support Software for Your Team | Clickmasters',
  description:
    'AI customer support software built into your help desk: multi-channel intake, triage, answers from your docs and agent-approved drafts. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Customer Support', path: '/products/ai-customer-support' },
    { name: 'AI Customer Support Software', path: AI_CUSTOMER_SUPPORT_SOFTWARE_PATH },
  ],
};

export const aiCustomerSupportSoftwareKeywords = [
  'AI customer support software',
  'AI customer service software',
  'customer support automation software',
  'AI support platform',
  'intelligent customer support system',
  'AI-powered support software',
  'customer service management software',
  'help desk AI',
  'AI ticket triage software',
  'AI support software for Zendesk',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'wider AI customer support offering', href: '/products/ai-customer-support', section: 'What Is AI Customer Support Software?' },
  { anchor: 'grounding method behind our AI knowledge assistants', href: '/services/ai-knowledge-assistants', section: 'Inside the System (explainer)' },
  { anchor: 'customer-facing chat channel', href: '/products/ai-customer-support/ai-chatbot-software', section: 'Core Capabilities' },
  { anchor: 'automating the service processes', href: '/products/ai-customer-support/ai-customer-service-automation', section: 'AI-Powered Support Workflows (extras)' },
  { anchor: 'customer support automation solutions', href: '/solutions/customer-support-automation', section: 'Implementation' },
] as const;

export const aiCustomerSupportSoftware: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 4 },

  hero: {
    badge: 'AI Customer Support Software',
    heading: 'AI Customer Support Software That Runs Your Whole Support Operation',
    accentWords: 4,
    subheading:
      'Clickmasters builds AI customer support software around the help desk your team already uses. It gathers inquiries from every channel, sorts them by urgency and prepares answers, so agents focus on the conversations that need them.',
    primaryCta: { text: 'Book a Free Support Software Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-customer-support-software-human-and-ai-collaboration.webp',
    imageAlt: 'A human finger and a robotic finger touching a glowing data chart screen on a teal background, showing people and AI working together',
    imageWidth: 1000,
    imageHeight: 600,
    marquee: ['Unified inquiry intake', 'Priority triage', 'Grounded answers', 'Agent-approved drafts', 'Support reporting'],
  },

  intro: {
    eyebrow: 'The Complete System',
    heading: 'What Is AI Customer Support Software?',
    paragraphs: [
      'AI customer support software is the system around your help desk that does the groundwork of service. It takes in each request, works out its topic and urgency, finds the answer in your own content and passes a prepared case to the right person.',
      'Think of it as an operating layer, not a single bot. Intake, triage, answers, drafts, history and reporting work together, and our [wider AI customer support offering](/products/ai-customer-support) shows how each part fits your service stack.',
      'Clickmasters does not sell another app to log into; we build the system inside the tools you already run.',
    ],
    problems: [
      'Requests arrive in several places and nobody sees the full picture.',
      'Agents lose the first minutes of every ticket working out what the customer wants.',
      'Answers vary between agents because the help content is hard to search.',
      'Managers cannot tell which questions keep returning or where the docs fall short.',
    ],
  },

  explainer: {
    eyebrow: 'Inside the System',
    heading: 'The Building Blocks of an Intelligent Customer Support System',
    paragraphs: [
      'At its core, the system pairs a language model with search across your help articles, policies and product documentation. Because the AI answers from what it retrieves, replies stay consistent with the rules your team follows. This is retrieval-augmented generation (RAG).',
      'We apply the same [grounding method behind our AI knowledge assistants](/services/ai-knowledge-assistants) and add support-specific controls. When your documentation has no answer, the AI admits it and passes the case on instead of improvising.',
    ],
    points: [
      { title: 'Knowledge Retrieval', description: 'The AI searches your approved help content first and builds each answer from it.' },
      { title: 'Intent and Urgency Reading', description: 'Each message gets a topic and a priority that decide whether the AI answers, drafts or escalates.' },
      { title: 'Live Data Where Connected', description: 'Where your tools allow it, the AI checks real records, such as order tracking, before replying.' },
      { title: 'Controls You Define', description: 'Your guardrails set what the AI may say and which subjects always belong to a person.' },
    ],
  },

  features: {
    eyebrow: 'Core Capabilities',
    heading: 'Core Capabilities of AI Customer Support Software',
    intro:
      'Each capability feeds the next, so a question that starts in chat ends as a logged, reported case. Website conversations run through a [customer-facing chat channel](/products/ai-customer-support/ai-chatbot-software) that follows the same triage and handoff rules as email.',
    items: [
      { title: 'Multi-Channel Intake', description: 'Web chat, email, WhatsApp and Messenger requests land in one queue, with calls handled by AI voice agents.' },
      { title: 'Automatic Classification', description: 'Each inquiry gets a topic and urgency label on arrival, then goes to the right queue.' },
      { title: 'Grounded Answers', description: 'Routine questions get replies drawn from your own policies and help articles.' },
      { title: 'Drafted Replies', description: 'For cases that need an agent, the AI prepares a response to approve or edit in one click.' },
      { title: 'Conversation Summaries', description: 'Long threads come with a short summary, so the next person understands the case at a glance.' },
      { title: 'Handoff With History', description: 'Escalations carry the full thread and a summary, so customers never explain twice.' },
      { title: 'Follow-Ups and Feedback', description: 'Status updates, post-resolution check-ins and feedback requests go out without manual typing.' },
      { title: 'Operational Reporting', description: 'Reports show ticket volume, response time, AI-handled cases and gaps in the docs.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How AI Customer Support Software Moves Each Request Forward',
    intro:
      'Every request follows one path through your help desk. At each stage, your rules decide whether the AI acts alone or prepares the work for a person.',
    steps: [
      { title: 'Capture', description: 'A message arrives by chat, email, messaging app or voice line, and the system opens or updates a ticket.' },
      { title: 'Classify', description: 'The AI tags intent and urgency, then checks the request against your escalation rules.' },
      { title: 'Look Up', description: 'It searches your documentation and, where integrated, your store or CRM for live details.' },
      { title: 'Resolve or Prepare', description: 'Simple questions get a direct reply; anything else gets a draft waiting for an agent.' },
      { title: 'Hand Over', description: 'Complex, sensitive or uncertain cases move to the right person with a summary attached.' },
      { title: 'Log and Report', description: 'The system records the outcome, sends any follow-up and adds the case to your reporting.' },
    ],
  },

  spotlight: {
    eyebrow: 'Customer Inquiry Management',
    heading: 'Managing Every Customer Inquiry From First Message to Close',
    paragraphs: [
      'Without proper inquiry management, agents copy details between inboxes, guess at priority and lose track of promises. With it, each request becomes one structured ticket showing channel, topic, urgency and owner.',
      'Because the AI sorts on arrival, a delivery complaint no longer waits behind a password question. Your team opens the queue and sees urgent work first, already labelled and partly answered.',
    ],
    points: [
      { title: 'One Queue for All Channels', description: 'Chat, email and messaging requests become tickets in the help desk your agents know.' },
      { title: 'Priority on Arrival', description: 'Urgency detection lifts time-sensitive issues to the top before anyone reads them.' },
      { title: 'Clear Ownership', description: 'Routing rules send each topic to the team or person responsible for it.' },
    ],
  },

  extras: [
    {
      eyebrow: 'AI-Powered Support Workflows',
      heading: 'Support Workflows That Keep Cases Moving',
      accentWords: 2,
      paragraphs: [
        'Much of support work happens around the conversation: creating tickets, updating statuses and following up once a problem is fixed. The software runs these steps through an automation layer such as n8n, Make or Zapier.',
        'If your priority is [automating the service processes](/products/ai-customer-support/ai-customer-service-automation) themselves, that page goes deeper. Here, the workflows serve one goal: no case stalls for lack of admin.',
      ],
      points: [
        { title: 'Ticket Creation and Updates', description: 'Incoming messages open tickets, and statuses change as work progresses.' },
        { title: 'Post-Resolution Follow-Ups', description: 'A check-in and feedback request go out once a case closes.' },
        { title: 'Review and Survey Responses', description: 'The AI drafts replies to reviews and survey feedback for your approval.' },
        { title: 'After-Hours Coverage', description: 'Nights and weekends still get grounded answers, while complex cases wait, prepared, for morning.' },
      ],
    },
    {
      eyebrow: 'Customer Interaction Management',
      heading: 'A Complete Record of Every Customer Interaction',
      accentWords: 3,
      paragraphs: [
        'Good service depends on memory. The software logs each conversation against the customer record, so agents see past questions and open issues before replying. During escalation, that history means the conversation continues rather than restarting.',
      ],
      points: [
        { title: 'Logged Where You Work', description: 'Interactions land in your help desk or CRM, such as HubSpot, Salesforce or Zoho.' },
        { title: 'Context Across Channels', description: 'A customer who emails after a chat reaches an agent who can see both conversations.' },      ],
    },
  ],

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Help Desk AI Changes for Your Support Team',
    intro: 'The gains show up in daily operations: cleaner queues, quicker first replies and agents focused on real problems.',
    items: [
      { title: 'Quicker First Replies', description: 'Routine questions get an accurate answer right away, even outside office hours.' },
      { title: 'Calmer Queues', description: 'Sorted, prioritized tickets replace the mixed inbox agents once triaged by hand.' },
      { title: 'One Source of Truth', description: 'Every answer draws on the same approved content, whichever channel handles it.' },
      { title: 'Better Management Insight', description: 'Reports reveal recurring topics, response times and weak spots in your help content.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Human Team Collaboration',
    heading: 'How the Software and Your Agents Share the Work',
    paragraphs: [
      'AI-powered support software should make agents faster, not invisible. It cannot replace a support team, and a vendor who claims otherwise is overselling. The AI suits routine, well-documented work, while judgment calls stay with people.',
      'During rollout, the software suggests replies instead of sending them. Agents approve, edit or reject each draft, and the AI takes on more only once its answers prove dependable.',
    ],
    aiDoes: [
      'Collects requests from every connected channel',
      'Tags intent and urgency, then routes each ticket',
      'Answers routine questions from your documentation',
      'Checks order status and tracking, where integrated',
      'Prepares draft replies and thread summaries',
    ],
    peopleDo: [
      'Approve or edit drafts before customers see them',
      'Take over sensitive, emotional or complex conversations',
      'Decide on refunds, exceptions and policy edge cases',
      'Set the rules, tone and guardrails the AI follows',
    ],
  },

  audience: {
    eyebrow: 'Industry Applications',
    heading: 'Which Teams Benefit From AI Customer Service Software?',
    items: [
      { title: 'E-commerce Brands', description: 'Order tracking, returns, sizing and product questions answered from store data, with payment problems passed to staff.' },
      { title: 'SaaS Businesses', description: 'Onboarding questions answered in the product and technical issues triaged for the right team.' },
      { title: 'Healthcare Practices', description: 'Appointment scheduling, reminders and intake calls through AI voice agents, with clinical questions left to staff.' },
      { title: 'Logistics Companies', description: 'Delivery status questions answered from connected systems, freeing dispatch teams.' },
      { title: 'Hospitality Operators', description: 'Booking confirmations and reservation changes handled promptly, with special requests routed to the team.' },
      { title: 'Financial Services Firms', description: 'Account enquiries and payment reminders managed consistently, with advisory questions kept with a person.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations & Scalability',
    heading: 'Integrations and Room to Scale',
    paragraphs: [
      'The system plugs into help desks such as Zendesk, Intercom, Freshdesk, Gorgias and Help Scout, and draws on Shopify or WooCommerce store data. Slack or Microsoft Teams can carry internal alerts.',
      'Connections depend on each tool’s integration options and APIs; if a system has no API, we assess alternatives during the audit. Once the first workflows prove reliable, you can add channels, topics and automations stage by stage.',
    ],
    groups: [
      { label: 'Help Desks', items: ['Zendesk', 'Intercom', 'Freshdesk', 'Gorgias', 'Help Scout'] },
      { label: 'Customer Channels', items: ['Web chat', 'Email', 'WhatsApp', 'Messenger', 'Phone (AI voice agents)'] },
      { label: 'CRM & Commerce', items: ['HubSpot', 'Salesforce', 'Zoho', 'Shopify', 'WooCommerce'] },
      { label: 'Automation & Alerts', items: ['n8n', 'Make', 'Zapier', 'Slack', 'Microsoft Teams'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Teams Choose Clickmasters for Customer Support Automation Software',
    intro:
      'Clickmasters is an AI automation agency that designs agents, workflows and integrations for support, sales and operations teams.',
    items: [
      { title: 'Built Into Your Stack', description: 'You keep your help desk and channels; we add the intelligence around them.' },
      { title: 'Honest About Limits', description: 'We tell you which questions suit automation and which should stay with agents.' },
      { title: 'Careful Rollout', description: 'Suggested replies come before automatic ones, and scope widens only when results hold.' },
      { title: 'Full Hand-Over', description: 'Workflows, accounts and documentation transfer to your team at delivery.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Implementation',
    heading: 'How We Implement AI Customer Support Software',
    intro:
      'Our build process mirrors the approach behind our [customer support automation solutions](/solutions/customer-support-automation). You approve the plan before we build anything in your help desk.',
    steps: [
      { title: 'Free Audit', description: 'We review your channels, help desk and ticket mix at no cost and identify safe starting points.' },
      { title: 'Knowledge, Rules and Plan', description: 'We gather help content, agree guardrails and escalation rules, and you sign off the plan.' },
      { title: 'Build', description: 'Our team connects channels and the help desk, then configures answering, triage and workflows.' },
      { title: 'Testing', description: 'We run common, ambiguous and high-priority cases through the system before customers see it.' },
      { title: 'Staged Launch', description: 'Low-risk questions go live first, and drafts stay in suggestion mode until they earn trust.' },
      { title: 'Review', description: 'Together we check results and agree next steps under the support terms in your quote.' },
    ],
    note: 'After the audit, you receive a written quote covering scope, deliverables, platform and usage costs, support terms and a timeline, so you can judge the project before committing.',
  },

  cta: {
    bandHeading: 'See what your support system could handle',
    heading: 'Give Your Support Team a System That Does the Groundwork',
    description:
      'Book a free, no-obligation audit. We will map your channels and ticket types, point out which requests AI can answer safely and explain which belong with your people.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Questions About AI Customer Support Software',
  faqSideText: 'Weighing up support software for your team? A free audit answers your questions using your own queue.',
  faqs: [
    {
      question: 'How does AI support software differ from a standard help desk?',
      answer:
        'A help desk stores tickets, while the AI layer reads them. It classifies requests, answers routine ones from your documentation and drafts replies for the rest.',
    },
    {
      question: 'Do we need to replace our current help desk to use it?',
      answer:
        'No. We build on top of tools such as Zendesk, Intercom, Freshdesk, Gorgias or Help Scout, and agents keep working in the interface they know.',
    },
    {
      question: 'Is this a subscription app we sign up for?',
      answer:
        'No. Clickmasters builds the system inside your existing tools and hands over the workflows, accounts and documentation. You pay for the build plus the platform and usage costs listed in your quote.',
    },
    {
      question: 'Which customer channels can the software bring together?',
      answer:
        'Web chat, email, WhatsApp and Messenger can feed one queue, and AI voice agents can cover phone support. Slack and Microsoft Teams serve internal alerts only.',
    },
    {
      question: 'How does the system decide which tickets are urgent?',
      answer:
        'The AI reads each message for intent and urgency, then applies the priority and routing rules agreed during setup. Topics you mark as sensitive always go to a person.',
    },
    {
      question: 'What happens when the AI cannot find an answer in our documentation?',
      answer:
        'It says so and hands the case to your team with the conversation and a summary. Reporting then flags the question as a documentation gap.',
    },
    {
      question: 'Can agents check AI replies before customers receive them?',
      answer:
        'Yes, and every rollout starts that way. The AI drafts, an agent approves or edits in one click, and automatic sending applies only to question types that have proved reliable.',
    },
    {
      question: 'Which support cases should AI not handle on its own?',
      answer:
        'Sensitive, emotional and judgment-heavy cases, such as out-of-policy refunds and complaints, should stay with people. AI suits routine, documented questions, and no honest build removes your support team.',
    },
    {
      question: 'Does a small support team get value from this kind of system?',
      answer:
        'Often, yes. A small team gains after-hours answers and a sorted queue without hiring, and the first phase can cover one channel and a short list of frequent questions.',
    },
    {
      question: 'How do we get a price for support software built around our help desk?',
      answer:
        'Start with the free audit, because cost depends on channels, integrations, knowledge sources and workflow scope. We then send a written quote setting out scope, deliverables, platform and usage costs, support terms and a timeline.',
    },
  ],
};
