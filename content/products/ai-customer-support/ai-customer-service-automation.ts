// content/products/ai-customer-support/ai-customer-service-automation.ts
// Copy + SEO for /products/ai-customer-support/ai-customer-service-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Only capabilities already stated elsewhere on the site. Channels: web chat, email, WhatsApp,
//   Messenger, phone (voice agents); Slack / Microsoft Teams for internal alerts only.
// - No statistics, prices, testimonials, guarantees, timelines or ongoing-support promises.
// - Clickmasters builds these workflows inside the client's help desk and tools — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_CUSTOMER_SERVICE_AUTOMATION_PATH = '/products/ai-customer-support/ai-customer-service-automation';

export const aiCustomerServiceAutomationSeo: HubSeo = {
  name: 'AI Customer Service Automation',
  path: AI_CUSTOMER_SERVICE_AUTOMATION_PATH,
  title: 'AI Customer Service Automation Workflows | Clickmasters',
  description:
    'AI customer service automation that classifies, routes, updates and escalates requests inside your help desk, with your team in control. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Customer Support', path: '/products/ai-customer-support' },
    { name: 'AI Customer Service Automation', path: AI_CUSTOMER_SERVICE_AUTOMATION_PATH },
  ],
};

export const aiCustomerServiceAutomationKeywords = [
  'AI customer service automation',
  'customer service automation software',
  'automated customer service',
  'customer support workflow automation',
  'AI support automation',
  'automated customer service solutions',
  'customer service process automation',
  'intelligent customer service',
  'ticket automation',
  'automated ticket routing and escalation',
  'help desk workflow automation for e-commerce',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'wider AI support system we build', href: '/products/ai-customer-support', section: 'What Is AI Customer Service Automation? (intro)' },
  { anchor: 'customer-facing support software', href: '/products/ai-customer-support/ai-customer-support-software', section: 'Triggers, Rules and Actions (explainer)' },
  { anchor: 'AI workflow automation service', href: '/services/ai-workflow-automation', section: 'AI Customer Service Automation Features' },
  { anchor: 'automation for online stores', href: '/industries/ai-automation-for-ecommerce', section: 'Ticket and Request Management (spotlight)' },
  { anchor: 'AI voice agent', href: '/products/ai-customer-support/ai-voice-agent', section: 'Routing and Escalation (extras)' },
] as const;

export const aiCustomerServiceAutomation: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 4 },

  hero: {
    badge: 'Customer Service Process Automation',
    heading: 'AI Customer Service Automation From First Request to Follow-Up',
    accentWords: 5,
    subheading:
      'AI customer service automation from Clickmasters runs the work around every conversation: intake, classification, routing, status updates, escalation and follow-up. We build it inside your current help desk, so agents spend their day on cases rather than admin.',
    primaryCta: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-customer-service-automation-workflow-gears.webp',
    imageAlt: 'Glowing interlocking gears on a dark purple and blue circuit board, representing automated support workflows',
    imageWidth: 1200,
    imageHeight: 633,
    marquee: ['Request intake', 'Smart routing', 'Status notifications', 'Escalation summaries', 'Feedback requests'],
  },

  intro: {
    eyebrow: 'Defining It',
    heading: 'What Is AI Customer Service Automation?',
    paragraphs: [
      'AI customer service automation applies AI and workflow rules to the whole service process, not only to the chat window. It reads each incoming request, decides what it concerns and how urgent it is, then moves it to the right place and keeps the customer informed until the case closes.',
      'Most support teams already answer questions well. The slow part sits between the answers: copying details, tagging tickets, chasing status, writing the same update twice. This page covers that operational layer, which forms one part of the [wider AI support system we build](/products/ai-customer-support) for service teams.',
      'Because every step follows rules you agree in advance, the process stays predictable. Your team still owns refunds, exceptions and difficult conversations.',
    ],
    problems: [
      'Agents tag, sort and forward tickets by hand before anyone replies.',
      'Customers chase updates because nobody tells them what happened next.',
      'Order exceptions sit in a shared inbox until someone notices them.',
      'Closed tickets never trigger a follow-up or a feedback request.',
    ],
  },

  explainer: {
    eyebrow: 'Under the Hood',
    heading: 'Triggers, Rules and Actions Behind Automated Customer Service',
    paragraphs: [
      'Each workflow starts with a trigger, such as a new email, a chat message, a form submission or a change in order status. An AI step then reads the content, identifies the intent and urgency, and passes the result to rules that decide the next action.',
      'Those actions might create a ticket, assign a queue, send a notification or draft a reply for review. The answering itself relies on your own help content, the same grounding we use in [customer-facing support software](/products/ai-customer-support/ai-customer-support-software), so the process never invents policy.',
    ],
    points: [
      { title: 'Event Triggers', description: 'New messages, form entries and status changes start the right workflow.' },
      { title: 'AI Classification', description: 'A language model labels each request by topic, intent and priority.' },
      { title: 'Business Rules', description: 'Your agreed conditions decide where a request goes and what the customer hears.' },
      { title: 'Actions in Your Tools', description: 'The workflow updates tickets, records and notifications in systems your team already uses.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'AI Customer Service Automation Features',
    intro:
      'We assemble each workflow on n8n, Make, Zapier or direct APIs, using the same methods as our [AI workflow automation service](/services/ai-workflow-automation), and tune it to your queues and policies.',
    items: [
      { title: 'Inquiry Intake', description: 'Requests from web chat, email, WhatsApp and Messenger land as structured tickets.' },
      { title: 'Classification & Priority', description: 'AI tags topic and urgency, so critical issues rise to the top of the queue.' },
      { title: 'Queue & Owner Routing', description: 'Rules send billing, technical, order and account requests to the right queue or person.' },
      { title: 'Status Notifications', description: 'Customers hear about progress when a ticket changes state, instead of writing in to ask.' },
      { title: 'Account & Order Lookups', description: 'Where your store or billing system is connected, live details appear in the ticket.' },
      { title: 'Escalation With Summary', description: 'Cases that need judgment reach a person with the history and a short AI summary.' },
      { title: 'Follow-Ups & Feedback', description: 'Resolved tickets trigger a check-in and feedback request; AI drafts review responses for approval.' },
      { title: 'Reporting & Gap Insights', description: 'Reports cover volume, response times, automated work and gaps in your documentation.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'The Automated Support Process, Step by Step',
    intro:
      'Every stage below runs as a connected workflow. You decide in advance which steps act automatically and which ones wait for an agent.',
    steps: [
      { title: 'Capture', description: 'The workflow collects each new request from chat, email, messaging or phone and opens a ticket.' },
      { title: 'Classify', description: 'AI identifies the topic, intent and urgency and attaches those labels to the ticket.' },
      { title: 'Route', description: 'Your rules assign an owner, and urgent cases trigger an alert in Slack or Microsoft Teams.' },
      { title: 'Enrich & Draft', description: 'Where integrated, order or account details join the ticket, and AI prepares a grounded reply.' },
      { title: 'Update & Escalate', description: 'Customers get automatic progress updates, while complex cases move to a person with a summary.' },
      { title: 'Close the Loop', description: 'After resolution, a follow-up and feedback request go out and the outcome feeds your reporting.' },
    ],
  },

  benefits: {
    eyebrow: 'Why It Pays Off',
    heading: 'Benefits of Customer Service Process Automation',
    intro:
      'These gains come from removing manual handling between steps, not from replacing the people who solve problems.',
    items: [
      { title: 'Less Manual Triage', description: 'Tickets arrive with labels, priority and an owner, so sorting no longer eats the morning.' },
      { title: 'Fewer "Any Update?" Messages', description: 'Proactive notifications answer the most common follow-up question before customers ask it.' },
      { title: 'Faster Exception Handling', description: 'Order and payment problems go straight to the responsible person.' },
      { title: 'Cleaner Handoffs', description: 'Summaries travel with every escalation, so nobody rereads a long thread.' },
      { title: 'Consistent Process', description: 'The same rules apply to every request, whichever agent is on shift.' },
      { title: 'Better Insight', description: 'Volume and gap reporting shows where to improve help content and automate next.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Automation With Judgment',
    heading: 'What to Automate, and What Your Team Should Keep',
    paragraphs: [
      'Intelligent customer service depends on drawing the line in the right place. Repetitive, rule-based steps suit automation well, while decisions about money, exceptions or upset customers belong with your team.',
      'During rollout, AI suggests replies rather than sending them. Once your agents trust the drafts for a given topic, you can let that topic run automatically.',
    ],
    aiDoes: [
      'Opens and labels tickets from every connected channel',
      'Assigns requests to queues and owners using your rules',
      'Sends status updates when a ticket changes state',
      'Pulls order or account details where integrated',
      'Writes escalation summaries and reply drafts',
      'Triggers follow-ups, feedback requests and review-response drafts',
    ],
    peopleDo: [
      'Approve refunds, credits and policy exceptions',
      'Handle complaints and emotionally charged conversations',
      'Review AI drafts before you switch on automatic sending',
      'Decide which rules and topics change over time',
    ],
  },

  spotlight: {
    eyebrow: 'Ticket & Request Management',
    heading: 'Ticket and Request Management Without Manual Sorting',
    paragraphs: [
      'Ticket automation starts the moment a request arrives. The workflow checks for an existing conversation, merges duplicates where your help desk allows it, adds labels and sets a priority, so the queue reflects reality rather than arrival order.',
      'Online retail shows the value clearly. When a payment fails, an address will not validate or an item runs out of stock, the workflow can flag the order and route it to the person who fixes it. You can read more about our [automation for online stores](/industries/ai-automation-for-ecommerce) on the industry page.',
    ],
    points: [
      { title: 'Structured Intake', description: 'Every request becomes a ticket with customer, channel, topic and urgency recorded.' },
      { title: 'Exception Queues', description: 'Payment, address and stock problems get their own queues.' },
      { title: 'Automated Customer Communication', description: 'Acknowledgements, progress notes and resolution messages go out at the right moments.' },
      { title: 'Logged Outcomes', description: 'Each action lands in your help desk or CRM as part of the case history.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Routing & Escalation',
      heading: 'Routing and Escalation That Keep Context Intact',
      accentWords: 3,
      paragraphs: [
        'Good routing depends on clear rules. We agree with you which topics, priority levels and confidence thresholds send a request to a specific team, and which ones always go straight to a person.',
        'Phone requests can join the same flow. An [AI voice agent](/products/ai-customer-support/ai-voice-agent) can take a call, collect the details, create the ticket and hand the case over with a summary, so callers and writers follow one process.',
      ],
      points: [
        { title: 'Topic-Based Routing', description: 'Billing, technical, shipping and account requests reach their own owners.' },
        { title: 'Priority Rules', description: 'Urgent issues trigger internal alerts for the team.' },
        { title: 'Confidence Thresholds', description: 'When the AI is unsure, it passes the case to a person.' },
        { title: 'Protected Topics', description: 'Sensitive subjects you name always stay with your team.' },
      ],
    },
    {
      eyebrow: 'Production Practices',
      heading: 'Built for Production, Not for a Demo',
      accentWords: 3,
      paragraphs: [
        'A workflow that breaks quietly does more harm than no workflow at all. For that reason, we design error handling into every automation, so a failed lookup or a timed-out integration routes the ticket to a person instead of dropping it.',
        'During the build, we also set up failure alerts and document each trigger, rule and connection in plain language. Then we launch in stages, starting with low-risk request types.',
      ],
      points: [
        { title: 'Error Handling', description: 'Each step has a fallback path that sends work to people.' },
        { title: 'Failure Alerts', description: 'Slack or Microsoft Teams alerts flag any workflow that stops running.' },
        { title: 'Clear Documentation', description: 'Written notes cover every workflow, account and rule.' },
        { title: 'Staged Rollout', description: 'Low-risk request types go live first; others follow once proven.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'AI Customer Service Automation Use Cases by Industry',
    items: [
      { title: 'E-commerce', description: 'Order status, returns and stock questions handled automatically, with failed payments and address problems routed to staff.' },
      { title: 'SaaS', description: 'Bug reports, how-to questions and Stripe billing events triaged into the correct queue where connected.' },
      { title: 'Healthcare & Appointments', description: 'Booking, reminder and intake requests organized, while clinical questions go to staff.' },
      { title: 'Logistics', description: 'Delivery status answered from connected systems, with exceptions passed to operations.' },
      { title: 'Hospitality', description: 'Booking confirmations and reservation changes processed consistently, special requests escalated.' },
      { title: 'Financial Services', description: 'Account enquiries and payment reminders handled within strict rules; advice stays with your staff.' },
    ],
  },

  integrations: {
    eyebrow: 'Integration & Scale',
    heading: 'Integration and Staged Expansion',
    paragraphs: [
      'Your automation connects to help desks such as Zendesk, Intercom, Freshdesk, Gorgias and Help Scout, to stores on Shopify or WooCommerce, and to CRMs including HubSpot, Salesforce and Zoho. The exact connections depend on each tool’s integration options and APIs, and we assess alternatives during the audit if a system has no API.',
      'Scaling happens in steps. After the first workflows run reliably, you can add channels, request types and lookups one at a time, keeping each change small enough to test properly.',
    ],
    groups: [
      { label: 'Help Desks', items: ['Zendesk', 'Intercom', 'Freshdesk', 'Gorgias', 'Help Scout'] },
      { label: 'Channels', items: ['Web chat', 'Email', 'WhatsApp', 'Messenger', 'Phone (voice agents)'] },
      { label: 'Stores, CRM & Billing', items: ['Shopify', 'WooCommerce', 'HubSpot', 'Salesforce', 'Zoho', 'Stripe'] },
      { label: 'Automation & Alerts', items: ['n8n', 'Make', 'Zapier', 'APIs', 'Slack', 'Microsoft Teams'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Clickmasters for Support Process Automation',
    intro:
      'Our agency builds AI agents and connected workflows for service, sales and operations teams. On this kind of project, the goal is a ticket process that runs reliably inside the tools you own.',
    items: [
      { title: 'Process First', description: 'We map how requests move today before choosing what to automate.' },
      { title: 'No New Platform to Learn', description: 'Workflows run inside your help desk, so agents keep familiar screens.' },
      { title: 'Rules You Approve', description: 'You sign off routing, escalation and guardrails before we build.' },
      { title: 'Failure-Aware Design', description: 'Fallback paths and alerts keep a broken step from losing work.' },
      { title: 'Honest Scope', description: 'We say plainly which steps should stay manual.' },
      { title: 'You Own the Result', description: 'Workflows, accounts and documentation pass to you at handover.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How to Start With AI Customer Service Automation',
    intro:
      'Every project begins with a look at your real tickets and ends with workflows your team understands. Nothing gets built until you have signed off the written plan.',
    steps: [
      { title: 'Free Audit', description: 'We review your channels, ticket types and process, and spot the steps that waste agent time.' },
      { title: 'Rules & Plan', description: 'Together we agree labels, routing, escalation rules and the help content the AI will use.' },
      { title: 'Build', description: 'We connect your tools and build the workflows with error handling and alerts.' },
      { title: 'Testing', description: 'Common, ambiguous and high-priority requests run through each workflow before customers see it.' },
      { title: 'Staged Launch', description: 'Low-risk request types go first, with AI suggestions before automatic replies.' },
      { title: 'Review', description: 'We check results against the plan; support terms are laid out in your quote.' },
    ],
    note: 'Following the audit, you receive a written quote that details the scope, deliverables, platform and usage costs, support terms and a timeline for the work.',
  },

  cta: {
    bandHeading: 'Find the steps worth automating',
    heading: 'Put AI Customer Service Automation to Work in Your Help Desk',
    description:
      'Book a free, no-obligation audit. We will walk through your ticket flow, identify the manual steps that slow your team down and recommend where automation should start.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Customer Service Automation: Your Questions Answered',
  faqSideText: 'Curious which parts of your support process could run on their own? A free audit will map them out for your team.',
  faqs: [
    {
      question: 'How does AI customer service automation differ from a support chatbot?',
      answer:
        'A chatbot handles the conversation itself. Process automation handles everything around it: ticket creation, routing, status updates, escalations, follow-ups and reporting. We can connect both into one workflow.',
    },
    {
      question: 'Which customer service tasks are easiest to automate first?',
      answer:
        'Ticket intake, labelling, routing and status notifications usually come first because they follow clear rules and carry little risk. Drafted and automatic replies follow once those rules prove reliable.',
    },
    {
      question: 'Can automation route tickets to specific people or teams?',
      answer:
        'Yes. Routing rules can use topic, priority, customer type or channel to assign a queue or a named owner, and urgent cases can trigger an internal alert.',
    },
    {
      question: 'What happens when an automated workflow fails?',
      answer:
        'Each workflow has a fallback path, so a failed step sends the ticket to a person rather than dropping it. Alerts configured during the build tell your team when something stops.',
    },
    {
      question: 'Can the automation pull order or account details into a ticket?',
      answer:
        'It can when your store, billing or account system offers an integration or API. The workflow then adds details such as order status or tracking, so agents skip the lookup.',
    },
    {
      question: 'Does process automation work for a small support team?',
      answer:
        'It often helps small teams most, because the same few people sort, reply and chase. We can start with one channel and a handful of request types, then extend from there.',
    },
    {
      question: 'Where are the limits of automating customer service with AI?',
      answer:
        'AI works best on repetitive, rule-based steps. Refunds, complaints, policy exceptions and judgment calls should stay with people, and we will tell you if a step belongs in that group.',
    },
    {
      question: 'Do we need to change our help desk?',
      answer:
        'No. We build into the help desk you already use, such as Zendesk, Intercom, Freshdesk, Gorgias or Help Scout. If a tool lacks an API, we look at alternatives during the audit.',
    },
    {
      question: 'Who maintains the workflows once the project ends?',
      answer:
        'You own them. We hand over the workflows, accounts and written documentation, and any support arrangement after launch appears in the terms of your quote.',
    },
    {
      question: 'How is the price of a customer service automation project worked out?',
      answer:
        'Cost depends on the channels, workflows, integrations and request types in scope. After the free audit, a written quote breaks down deliverables, platform and usage costs, support terms and the timeline.',
    },
  ],
};
