// content/products/ai-customer-support.ts
// Copy + SEO for /products/ai-customer-support.
//
// Accuracy rules for this page (keep them when editing):
// - Only capabilities already stated elsewhere on the site (customer support automation,
//   AI chatbots, AI voice agents, AI knowledge assistants, e-commerce / SaaS support pages).
// - Channels named on the site: web chat, email, WhatsApp, Messenger, phone (voice agents).
//   Do NOT add SMS, social DMs, multilingual support or sentiment analysis — not stated.
// - No statistics, prices, testimonials, guarantees, or ongoing-support promises.
// - It is a system Clickmasters builds on the client's help desk and channels — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page must contain EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from './types';

export const AI_CUSTOMER_SUPPORT_PATH = '/products/ai-customer-support';

export const aiCustomerSupportSeo: HubSeo = {
  name: 'AI Customer Support',
  path: AI_CUSTOMER_SUPPORT_PATH,
  title: 'AI Customer Support for Help Desks | Clickmasters',
  description:
    'AI customer support that answers from your own docs, triages tickets, drafts replies, and hands complex cases to your team with context. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Customer Support', path: AI_CUSTOMER_SUPPORT_PATH },
  ],
};

export const aiCustomerSupportKeywords = [
  'AI customer support',
  'AI customer support automation',
  'automated customer support',
  'AI support system',
  'AI customer service platform',
  'AI-powered customer service',
];

// The five contextual internal links used in the copy below (verified to resolve).
export const internalLinks = [
  { anchor: 'customer support automation', href: '/solutions/customer-support-automation', section: 'What Is AI Customer Support?' },
  { anchor: 'AI knowledge assistants', href: '/services/ai-knowledge-assistants', section: 'The Technology Behind AI Customer Support (explainer)' },
  { anchor: 'AI chatbot development', href: '/services/ai-chatbots', section: 'Core Features' },
  { anchor: 'AI Sales CRM', href: '/products/ai-sales-crm', section: 'Customer Communication & Query Management' },
  { anchor: 'AI workflow automation', href: '/services/ai-workflow-automation', section: 'Getting Started' },
] as const;

export const aiCustomerSupport: ProductPageContent = {
  hero: {
    badge: 'AI Customer Support',
    heading: 'AI Customer Support That Answers, Triages and Escalates With Context',
    accentWords: 4,
    subheading:
      'Clickmasters AI Customer Support answers routine questions from your own documentation, sorts and prioritizes every ticket, drafts replies for your agents and hands complex cases to a person with the full conversation attached, inside the help desk and channels you already use.',
    primaryCta: { text: 'Book a Free Support Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-customer-support-chatbot-answering-on-phone.webp',
    imageAlt: 'AI customer support chatbot answering customer messages on a smartphone',
    imageWidth: 561,
    imageHeight: 444,
    marquee: ['Answers from your docs', 'Ticket triage', 'Drafted replies', 'Human handoff', 'After-hours coverage'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is AI Customer Support?',
    paragraphs: [
      'AI customer support is the use of AI to handle the repetitive layer of customer service: answering common questions, working out what each request is about, deciding how urgent it is and preparing the response. Your team keeps the conversations that need judgment, empathy or a decision.',
      'Clickmasters builds this layer into the support stack you already run. It extends our [customer support automation](/solutions/customer-support-automation) work with AI that reads, classifies and drafts, so tickets arrive at the right agent already sorted and half-answered.',
      'The aim is not to hide your team behind a bot. It is to make sure customers get a fast, accurate first response at any hour, and that the questions which genuinely need a person reach one quickly, with nothing lost in the hand-off.',
    ],
    problems: [
      'The same handful of questions fill the queue every day.',
      'Urgent tickets wait behind routine ones because nothing sorts them on arrival.',
      'Customers who write in at night or at the weekend wait until Monday.',
      'Escalated customers have to repeat themselves to a second agent.',
    ],
  },

  explainer: {
    eyebrow: 'The Technology',
    heading: 'The Technology Behind the Answers',
    paragraphs: [
      'Modern AI customer service software combines a language model with retrieval from your own knowledge. Instead of answering from general training data, the AI searches your help articles, policies and product documentation, then responds using what it finds. This approach is known as retrieval-augmented generation (RAG).',
      'The same grounding technique powers our [AI knowledge assistants](/services/ai-knowledge-assistants) for internal teams. In customer support, we pair it with guardrails: where your documentation does not cover a question, the AI says so and escalates rather than guessing.',
    ],
    points: [
      { title: 'Grounded in Your Knowledge', description: 'Answers come from your help center, policies and product documentation, not from the model’s general knowledge.' },
      { title: 'Intent & Urgency Detection', description: 'The AI classifies each message by topic and priority, so it can answer, route or escalate it correctly.' },
      { title: 'Connected to Your Systems', description: 'Where an integration exists, the AI can look up real data, such as an order’s actual status, instead of giving a generic reply.' },
      { title: 'Guardrails & Escalation Rules', description: 'You decide which topics, confidence levels and priorities always go to a person.' },
    ],
  },

  features: {
    eyebrow: 'Core Features',
    heading: 'Core Features Built Around Your Help Desk',
    intro:
      'We configure every capability below around your help desk, policies and escalation rules. The customer-facing chat experience is built with the same approach as our [AI chatbot development](/services/ai-chatbots) service, and connected to the rest of your support operation.',
    items: [
      { title: 'Automated Inquiry Handling', description: 'The AI answers routine questions about orders, accounts, policies and products automatically, using your own documentation.' },
      { title: 'Conversational AI Assistance', description: 'Customers get a natural conversation on web chat and messaging channels instead of a rigid menu of options.' },
      { title: 'Ticket Triage & Prioritization', description: 'The system classifies, prioritizes and routes incoming tickets automatically, so urgent issues surface first.' },
      { title: 'AI-Drafted Replies', description: 'For tickets that need an agent, the AI drafts a response that the agent can approve or edit in one click.' },
      { title: 'Knowledge Base Answers', description: 'Every answer draws on your help articles and policies, and the AI escalates instead of guessing when the docs run out.' },
      { title: 'Human Handoff With Context', description: 'Escalations reach a person with the full conversation history and a summary attached, so customers never repeat themselves.' },
      { title: 'Multi-Channel Coverage', description: 'Web chat, email and messaging platforms such as WhatsApp and Messenger, with phone support available through AI voice agents.' },
      { title: 'Support Workflow Automation', description: 'Status updates, post-resolution follow-ups and feedback requests run automatically, and the system logs each interaction where it belongs.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How AI Customer Support Works, From Inquiry to Resolution',
    intro:
      'Each step is a workflow connected to your help desk. Clear rules decide what the AI may resolve on its own and what always goes to your team.',
    steps: [
      { title: 'Receive', description: 'A customer writes in by chat, email or a messaging app, or calls a voice-enabled line. The help desk records the inquiry as a conversation or ticket.' },
      { title: 'Understand', description: 'Next, the AI identifies the intent and urgency of the request and checks it against your escalation rules.' },
      { title: 'Retrieve', description: 'The AI pulls relevant answers from your knowledge base and checks connected systems for live details such as order status.' },
      { title: 'Respond or Draft', description: 'Routine questions get a direct answer from the AI. For everything else, it drafts a reply for an agent to approve or edit.' },
      { title: 'Escalate', description: 'Sensitive, complex or low-confidence cases go to the right person with the conversation history and a summary attached.' },
      { title: 'Follow Up & Report', description: 'Status updates and post-resolution follow-ups go out automatically, the system logs each interaction, and reporting shows what the AI handled.' },
    ],
  },

  benefits: {
    eyebrow: 'Business Benefits',
    heading: 'Business Benefits of Automated Customer Support',
    intro:
      'Automated customer support pays off in how the support operation runs day to day: what gets answered, how fast, and how much repetitive work reaches your agents.',
    items: [
      { title: 'Faster First Responses', description: 'Routine questions get an accurate answer straight away, including outside business hours and at weekends.' },
      { title: 'Less Repetitive Work', description: 'Automation handles the common questions, so agents spend their time on cases that need a person.' },
      { title: 'More Organized Queues', description: 'Tickets arrive classified and prioritized, so nothing urgent sits unnoticed at the bottom of the queue.' },
      { title: 'Consistent Answers', description: 'Every response draws on the same approved documentation, so customers get the same answer whoever, or whatever, replies.' },
      { title: 'Better Agent Productivity', description: 'Drafted replies and conversation summaries cut the time agents spend reading, searching and typing.' },
      { title: 'Clearer Support Visibility', description: 'Reporting shows what customers ask about, what the AI resolved and where your documentation has gaps.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI-Powered Customer Service',
    heading: 'Where AI Helps Your Support Team — and Where People Take Over',
    paragraphs: [
      'AI-powered customer service works best when it speeds up routine work and leaves judgment-heavy cases with people. It does not replace your support team, and any vendor promising that is overselling.',
      'We roll it out in stages: the AI is first grounded in your knowledge, then handles high-volume, low-risk questions, then suggests replies rather than sending them, and expands only once its answers have proved reliable.',
    ],
    aiDoes: [
      'Answers routine questions from your documentation',
      'Classifies, prioritizes and routes incoming tickets',
      'Looks up live details such as order status, where integrated',
      'Drafts replies for agents to approve or edit',
      'Summarizes conversations before an escalation',
      'Sends status updates, follow-ups and feedback requests',
    ],
    peopleDo: [
      'Handle sensitive, complex or emotional conversations',
      'Make decisions on refunds, exceptions and policy edge cases',
      'Approve drafted replies before they are sent',
      'Own any case the AI is not confident about',
    ],
  },

  spotlight: {
    eyebrow: 'Communication & Query Management',
    heading: 'Customer Communication and Query Management in One Flow',
    paragraphs: [
      'Customer inquiries arrive through many doors: chat, email, messaging apps and phone. AI Customer Support brings them into one organized flow inside your help desk, where every conversation is classified, prioritized and either resolved or routed with its history intact.',
      'The system logs interactions against the customer record, so your team can see past conversations before replying. When a support conversation reveals a sales opportunity, it can be handed to your sales process, and the [AI Sales CRM](/products/ai-sales-crm) applies the same approach to leads and pipeline.',
    ],
    points: [
      { title: 'Organize Inquiries', description: 'Messages from every channel become classified, prioritized tickets in your help desk.' },
      { title: 'Track Interactions', description: 'Each case carries its conversation history and summary, logged where your team works.' },
      { title: 'Manage Escalations', description: 'Rules for topics, confidence and priority decide what goes to a person and to whom.' },
      { title: 'Monitor Activity', description: 'Reporting covers ticket volume, response time and what the AI handled, plus where knowledge gaps appear.' },
    ],
  },

  audience: {
    eyebrow: 'Industry Use Cases',
    heading: 'Which Teams Benefit Most',
    items: [
      { title: 'E-commerce Stores', description: 'Order status with tracking, returns, sizing and product questions answered from store data and policies, with exceptions such as failed payments routed to the team.' },
      { title: 'SaaS Companies', description: 'Onboarding and support questions answered in the product, routine tickets deflected and technical issues triaged for the right team.' },
      { title: 'Professional Services', description: 'Common client questions about process, documents and appointments answered consistently, with anything advisory passed to a person.' },
      { title: 'Technology Businesses', description: 'Documentation-grounded answers to product and setup questions, with escalation when a question goes beyond the published docs.' },
      { title: 'B2B Companies', description: 'Account and service inquiries triaged and routed with context, so key customers reach the right owner quickly.' },
      { title: 'Customer-Facing Teams', description: 'Any team with a steady flow of repeat questions and limited hours can extend coverage without lowering answer quality.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Integration and Scalability',
    paragraphs: [
      'AI Customer Support connects to the help desk your team already works in, including Zendesk, Intercom, Freshdesk, Gorgias and Help Scout. For e-commerce, it can draw on store data from platforms such as Shopify and WooCommerce, and internal alerts can go to Slack or Microsoft Teams.',
      'What can be connected depends on each tool’s integration options and APIs. You can add new channels, topics and automations in stages once the first workflows are proven, so the system grows with your support volume.',
    ],
    groups: [
      { label: 'Help Desks', items: ['Zendesk', 'Intercom', 'Freshdesk', 'Gorgias', 'Help Scout'] },
      { label: 'Customer Channels', items: ['Web chat', 'Email', 'WhatsApp', 'Messenger', 'Phone (voice agents)'] },
      { label: 'Store & Business Data', items: ['Shopify', 'WooCommerce', 'CRM records', 'Order systems'] },
      { label: 'Team Alerts', items: ['Slack', 'Microsoft Teams'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Support Teams Choose Clickmasters',
    intro:
      'As an AI automation agency for service, sales and operations teams, Clickmasters builds agents, workflows and integrations that teams can rely on. AI Customer Support applies that experience to one goal: faster, accurate answers without losing the human side of service.',
    items: [
      { title: 'Grounded, Not Guessing', description: 'Answers come from your own documentation, and the AI escalates when it does not know.' },
      { title: 'Works Inside Your Help Desk', description: 'No rip-and-replace. The system is built into the tools and channels your team already uses.' },
      { title: 'Staged, Low-Risk Rollout', description: 'Start with high-volume, low-risk questions and suggested replies, then expand as answers prove reliable.' },
      { title: 'Human Handoff Done Properly', description: 'Escalations carry the full conversation and a summary, so customers never start again.' },
      { title: 'Your Rules, Your Guardrails', description: 'You decide which topics, confidence levels and priorities always reach a person.' },
      { title: 'Documented Hand-Over', description: 'At delivery, we hand the workflows, accounts and documentation over to your team.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'Getting Started With AI Customer Support',
    intro:
      'Implementation follows the same structured process as our [AI workflow automation](/services/ai-workflow-automation) projects. Nothing goes live in your help desk until you have signed off the plan.',
    steps: [
      { title: 'Free Audit', description: 'A no-obligation review of your support channels, help desk and ticket types, and which ones are safe to automate first.' },
      { title: 'Knowledge & Rules', description: 'We gather your help content and policies, then agree escalation rules, tone and guardrails with you.' },
      { title: 'Build', description: 'Channels, help-desk integrations, AI answering and triage workflows are built and connected.' },
      { title: 'Testing', description: 'We test common questions, ambiguous requests and high-priority cases before real customers are involved.' },
      { title: 'Staged Launch', description: 'The AI starts with low-risk questions and suggested replies, then takes on more as answers prove reliable.' },
      { title: 'Review & Expand', description: 'We review the AI’s responses after launch, and your written quote spells out the support terms.' },
    ],
    note: 'Once the audit is done, a written quote sets out what we will build for your support team, the platform and usage costs, support terms and the timeline for each stage.',
  },

  cta: {
    bandHeading: 'See which support questions AI can answer',
    heading: 'Give Your Customers Faster, Accurate Answers',
    description:
      'Book a free, no-obligation audit. We will review your support channels and ticket types, show you which questions are safe to automate first, and tell you plainly which should stay with your team.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  related: {
    eyebrow: 'The AI Customer Support Suite',
    heading: 'Five Ways to Put AI to Work in Your Support Team',
    intro:
      'Start with the part of your service operation that takes the most time. Each solution works on its own or alongside the others.',
    items: [
      {
        title: 'AI Customer Support Software',
        description: 'The complete support system around your help desk: intake, triage, grounded answers, drafted replies and reporting.',
        href: '/products/ai-customer-support/ai-customer-support-software',
      },
      {
        title: 'AI Chatbot Software',
        description: 'Natural-language chat for your website and messaging apps that answers from your docs and hands over cleanly.',
        href: '/products/ai-customer-support/ai-chatbot-software',
      },
      {
        title: 'AI Virtual Assistant',
        description: 'An assistant that completes routine requests, such as status checks and bookings, in the systems you connect.',
        href: '/products/ai-customer-support/ai-virtual-assistant',
      },
      {
        title: 'AI Customer Service Automation',
        description: 'Workflows that classify, route, update and follow up on every request from first contact to resolution.',
        href: '/products/ai-customer-support/ai-customer-service-automation',
      },
      {
        title: 'AI Voice Agent',
        description: 'A phone agent that answers calls around the clock, handles routine requests and transfers callers with context.',
        href: '/products/ai-customer-support/ai-voice-agent',
      },
    ],
  },

  faqHeading: 'AI Customer Support: Frequently Asked Questions',
  faqSideText: 'Have a question about your own support setup? Book a free audit and we will answer it for your team.',
  faqs: [
    {
      question: 'What is AI customer support?',
      answer:
        'AI customer support uses AI to answer routine customer questions, classify and prioritize tickets, draft replies for agents and escalate complex cases to people. Clickmasters builds it into the help desk and channels you already use.',
    },
    {
      question: 'How does AI customer support work behind the scenes?',
      answer:
        'It combines a language model with retrieval from your own help content. When a customer writes in, the AI identifies the intent and urgency, finds the relevant answer in your documentation or connected systems, then either replies, drafts a response for an agent or escalates with a summary.',
    },
    {
      question: 'How can AI automate customer service?',
      answer:
        'AI can automate the repetitive parts: answering common questions, sorting and routing tickets, looking up details such as order status where integrated, sending status updates and follow-ups, and summarizing conversations for agents.',
    },
    {
      question: 'Can AI handle repetitive customer inquiries?',
      answer:
        'Yes. High-volume, low-risk questions are usually the first thing to automate. The AI answers from your documentation and escalates anything the documentation does not cover rather than guessing.',
    },
    {
      question: 'How is this different from traditional customer support?',
      answer:
        'Traditional support relies on agents reading, sorting and answering every message by hand. AI customer support handles the routine first layer automatically and prepares the rest, so agents start each case with context and a draft instead of a blank reply.',
    },
    {
      question: 'Will AI replace my support team?',
      answer:
        'No. AI speeds up routine work, while sensitive, complex and judgment-heavy cases stay with people. Any vendor promising to remove your support team entirely is overselling.',
    },
    {
      question: 'Is AI customer support suitable for small businesses?',
      answer:
        'Yes. Small teams often feel the benefit quickly, because routine questions get answered outside business hours without adding staff. The scope can start with one channel and a short list of common questions.',
    },
    {
      question: 'Which help desks and channels does it work with?',
      answer:
        'We work with help desks including Zendesk, Intercom, Freshdesk, Gorgias and Help Scout, and channels including web chat, email, WhatsApp and Messenger, with phone support through AI voice agents. What can be connected depends on each tool’s APIs.',
    },
    {
      question: 'How can businesses implement AI customer service?',
      answer:
        'Start with an audit of channels and ticket types, gather your help content, agree escalation rules, then launch in stages: low-risk questions first, suggested replies before automatic ones, and expansion once answers prove reliable.',
    },
    {
      question: 'What should we look for in an AI support solution?',
      answer:
        'Check that answers are grounded in your own content, that there are clear escalation rules and a proper human handoff, that it works with your existing help desk, and that you can review what the AI says before it handles more on its own.',
    },
    {
      question: 'How much does AI customer support cost?',
      answer:
        'It depends on channels, ticket complexity, AI requirements, integrations, knowledge sources and workflow scope. After the free audit you receive a written quote with scope, deliverables, platform and usage costs, support terms and a timeline.',
    },
  ],
};
