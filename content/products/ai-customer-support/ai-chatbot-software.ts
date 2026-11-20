// content/products/ai-customer-support/ai-chatbot-software.ts
// Copy + SEO for /products/ai-customer-support/ai-chatbot-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is the conversation itself: intent, context, grounded answers, channels, guardrails, handoff.
// - Channels: website chat widget, WhatsApp, Messenger. Slack / Microsoft Teams for internal bots only.
//   Do NOT add SMS, social DMs, multilingual support or sentiment analysis — not stated on the site.
// - No statistics, prices, testimonials, guarantees, or ongoing-support promises.
// - Clickmasters builds this inside the client's existing help desk and channels — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_CHATBOT_SOFTWARE_PATH = '/products/ai-customer-support/ai-chatbot-software';

export const aiChatbotSoftwareSeo: HubSeo = {
  name: 'AI Chatbot Software',
  path: AI_CHATBOT_SOFTWARE_PATH,
  title: 'AI Chatbot Software for Web Chat & WhatsApp | Clickmasters',
  description:
    'AI chatbot software that understands intent, answers from your own docs and hands customers to a person with the transcript attached. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Customer Support', path: '/products/ai-customer-support' },
    { name: 'AI Chatbot Software', path: AI_CHATBOT_SOFTWARE_PATH },
  ],
};

export const aiChatbotSoftwareKeywords = [
  'AI chatbot software',
  'AI customer service chatbot',
  'AI chatbot for business',
  'customer support chatbot',
  'conversational AI software',
  'intelligent chatbot platform',
  'AI website chatbot',
  'business chatbot solutions',
  'chatbot with human handoff',
  'AI chatbot vs rule-based chatbot',
  'WhatsApp AI chatbot for customer service',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'wider AI support system', href: '/products/ai-customer-support', section: 'What Is AI Chatbot Software?' },
  { anchor: 'AI chatbot solutions overview', href: '/solutions/ai-chatbots', section: 'How Conversational AI Differs From Rule-Based Bots (explainer)' },
  { anchor: 'AI chatbot development service', href: '/services/ai-chatbots', section: 'Core Features of Our AI Chatbot Software' },
  { anchor: 'AI virtual assistant that completes tasks', href: '/products/ai-customer-support/ai-virtual-assistant', section: 'What the Chatbot Says and When Your Team Steps In' },
  { anchor: 'AI voice agent for inbound and outbound calls', href: '/products/ai-customer-support/ai-voice-agent', section: 'Where Your AI Website Chatbot and Messaging Bot Can Live (extras)' },
] as const;

export const aiChatbotSoftware: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 3 },

  hero: {
    badge: 'AI Chatbot Software',
    heading: 'AI Chatbot Software That Understands What Customers Actually Mean',
    accentWords: 4,
    subheading:
      'Our AI chatbot software reads each message for intent, keeps track of context as the chat unfolds and replies from your own help content. When a question needs a person, it passes the conversation to your team with the full transcript, on your website, WhatsApp or Messenger.',
    primaryCta: { text: 'Book a Free Chatbot Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-chatbot-software-friendly-support-chatbot.webp',
    imageAlt: 'Friendly white support robot wearing a headset and waving beside an open laptop',
    imageWidth: 612,
    imageHeight: 408,
    marquee: ['Understands intent', 'Remembers context', 'Answers from your docs', 'Website & WhatsApp chat', 'Handoff with transcript'],
  },

  intro: {
    eyebrow: 'Conversational AI',
    heading: 'What Is AI Chatbot Software?',
    paragraphs: [
      'AI chatbot software is a conversational system that reads what a customer types, works out what they want and replies in plain language. Unlike a menu of buttons, it copes with typos, follow-up questions and requests phrased in ways nobody scripted.',
      'Clickmasters builds the chatbot as the conversational front door of the [wider AI support system](/products/ai-customer-support) we set up around your help desk. The bot talks to customers, while triage, drafted replies and reporting run quietly behind it.',
    ],
    problems: [
      'Visitors leave because the only way to ask a question is a contact form.',
      'An old decision-tree bot sends people in circles when their question is not on the menu.',
      'Customers repeat every detail after the bot gives up and passes them on.',
      'Nobody is around to answer simple questions late in the evening or at the weekend.',
    ],
  },

  explainer: {
    eyebrow: 'Under the Hood',
    heading: 'How Conversational AI Differs From Rule-Based Bots',
    paragraphs: [
      'A rule-based bot follows a decision tree. It matches keywords or button clicks to fixed branches, so it breaks as soon as a customer asks something its designer did not predict. Conversational AI software works differently: a language model reads the whole message, identifies the intent and keeps earlier turns in mind, so a follow-up like "what about the blue one?" still makes sense.',
      'The model does not answer from general knowledge. Instead, retrieval-augmented generation (RAG) pulls the relevant passages from your help articles, policies and product documentation, and the bot composes its reply from them. You can compare both approaches in our [AI chatbot solutions overview](/solutions/ai-chatbots).',
    ],
    points: [
      { title: 'Intent Recognition', description: 'The bot works out the request even when it is loosely phrased or misspelled.' },
      { title: 'Context Across Turns', description: 'Follow-ups keep their meaning because the bot remembers earlier messages.' },
      { title: 'Knowledge-Grounded Replies', description: 'Answers draw on your approved content, and the bot admits when your documents are silent.' },
      { title: 'Live Lookups Where Integrated', description: 'Connected to your order system, the bot checks a real order status instead of quoting policy.' },
    ],
  },

  features: {
    eyebrow: 'Core Features',
    heading: 'Core Features of Our AI Chatbot Software',
    intro:
      'We configure each feature around your content, channels and escalation rules during a custom build. The engineering follows our [AI chatbot development service](/services/ai-chatbots), adapted to the way your customers already reach you.',
    items: [
      { title: 'Natural Language Understanding', description: 'Customers type the way they talk, and the bot still recognizes the request behind the words.' },
      { title: 'Multi-Turn Memory', description: 'The chatbot carries context from one message to the next, so nobody has to restate their question.' },
      { title: 'Answers From Your Docs', description: 'Replies come from your help center, policies and product guides through retrieval, not from guesswork.' },
      { title: 'Order and Account Lookups', description: 'Where your store or order system is integrated, the bot fetches real tracking and status details mid-conversation.' },
      { title: 'Website Chat Widget', description: 'A chat window on your site greets visitors and answers product, policy and delivery questions at any hour.' },
      { title: 'WhatsApp and Messenger', description: 'The same assistant can reply on the messaging apps your customers already open every day.' },
      { title: 'Conversation Guardrails', description: 'You set the tone, the topics it may discuss and the statements it must never make.' },
      { title: 'Escalation With Transcript', description: 'When a person should step in, the agent receives the full chat history and a short summary.' },
      { title: 'Logging and Reporting', description: 'Chats land in your help desk or CRM, and reports show what the bot resolved and where docs fall short.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How AI Chatbot Software Handles a Customer Conversation',
    intro:
      'Every chat passes through the same sequence of checks. At each stage, your rules decide whether the bot keeps talking or brings in a person.',
    steps: [
      { title: 'Greet & Listen', description: 'A visitor opens the website widget or messages you on WhatsApp or Messenger.' },
      { title: 'Interpret', description: 'The language model identifies the intent, picks up urgency signals and checks the topic against your escalation rules.' },
      { title: 'Retrieve', description: 'Next, the bot searches your knowledge sources and, where integrated, queries live systems such as your order platform.' },
      { title: 'Reply', description: 'It answers in your brand voice, or asks a clarifying question when the request is still ambiguous.' },
      { title: 'Hand Off', description: 'Sensitive, complex or low-confidence conversations move to an agent together with the transcript and a summary.' },
      { title: 'Log', description: 'Finally, the system records the conversation in your help desk or CRM, creating or updating a ticket where needed.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What a Conversational Chatbot Changes for Your Business',
    intro:
      'The value of an AI chatbot for business shows up in two places: the experience your customers have, and how your support team spends its day.',
    items: [
      { title: 'Answers Outside Office Hours', description: 'Night and weekend visitors get a useful reply, not an auto-acknowledgement.' },
      { title: 'Fewer Dead Ends', description: 'Free-text understanding means customers rarely hit a scripted wall.' },
      { title: 'Consistent, Approved Wording', description: 'Policy answers stay identical because every reply draws on the same documents.' },
      { title: 'Smoother Escalations', description: 'Agents pick up handed-off chats already knowing the issue.' },
      { title: 'Agents Focus on Real Problems', description: 'Routine questions stop reaching the queue, freeing people for judgment calls.' },
      { title: 'Insight Into Customer Questions', description: 'Chat reports reveal top questions and gaps in your help content.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Bot and Team',
    heading: 'What the Chatbot Says and When Your Team Steps In',
    paragraphs: [
      'A customer support chatbot should handle the predictable part of a conversation and recognize where its job ends. It will not replace your support team, and anyone who claims a bot can do that is overselling.',
      'Some businesses also want the bot to finish jobs rather than just answer, such as rescheduling a booking or updating an account. That is the territory of an [AI virtual assistant that completes tasks](/products/ai-customer-support/ai-virtual-assistant), which builds on the same conversational foundation.',
    ],
    aiDoes: [
      'Answers common questions in natural language',
      'Asks clarifying questions when a request is vague',
      'Fetches live delivery updates from connected stores',
      'Collects key details before passing a chat on',
      'Summarizes the conversation for the receiving agent',
      'Logs each chat to your help desk or CRM',
    ],
    peopleDo: [
      'Take over complaints and emotionally charged chats',
      'Decide on refunds, credits and policy exceptions',
      'Review and approve suggested replies during rollout',
      'Resolve anything the bot flags as uncertain',
    ],
  },

  spotlight: {
    eyebrow: 'Conversation Design',
    heading: 'Designing How Your Chatbot Talks, and What It Must Never Say',
    paragraphs: [
      'A good bot is designed, not just switched on. Before launch we agree its personality with you: how formal it sounds, how it greets people, how long its answers run and when it offers a person instead of another reply.',
      'Guardrails matter as much as tone. You decide which subjects the bot avoids, which promises about refunds or delivery dates it may never make, and which topics always go straight to your team. When your documents do not cover a question, the bot says so plainly and escalates.',
    ],
    points: [
      { title: 'Tone and Voice', description: 'Wording that matches your brand, whether that means warm and casual or precise and formal.' },
      { title: 'Topic Boundaries', description: 'Clear limits that keep the bot on your products and policies.' },
      { title: 'Forbidden Statements', description: 'Commitments it must never make, such as discounts or legal advice.' },
      { title: 'Escalation Triggers', description: 'Rules by topic, confidence level and priority that decide when a person takes over.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Deployment Channels',
      heading: 'Where Your AI Website Chatbot and Messaging Bot Can Live',
      accentWords: 3,
      paragraphs: [
        'Most projects begin with an AI website chatbot: a chat widget that greets visitors on your product and help pages. From there, the same knowledge and rules can extend to WhatsApp and Messenger, so customers get consistent answers on whichever app they prefer.',
        'Some conversations happen over the phone rather than in a chat window. For those, our [AI voice agent for inbound and outbound calls](/products/ai-customer-support/ai-voice-agent) applies the same grounding and escalation logic to spoken conversations. Slack and Microsoft Teams, meanwhile, suit internal bots that help your staff find answers, not customer-facing chat.',
      ],
      points: [
        { title: 'Website Widget', description: 'A chat window on your site for product, delivery and account questions.' },
        { title: 'WhatsApp', description: 'Conversations on an app many customers already use daily.' },
        { title: 'Messenger', description: 'Replies to customers who reach you through your Facebook page.' },
        { title: 'Internal Bots', description: 'Slack or Microsoft Teams assistants that answer staff questions from Google Drive, Confluence, SharePoint or Notion and point to the source.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'Business Chatbot Solutions by Industry',
    items: [
      { title: 'E-commerce Stores', description: 'Tracking, returns and sizing questions in chat, with payment problems sent to your team.' },
      { title: 'SaaS Products', description: 'In-product onboarding and how-to help, with technical issues triaged for engineers.' },
      { title: 'Professional Services', description: 'Process and document questions answered consistently, while advice stays with your experts.' },
      { title: 'Technology Companies', description: 'Setup and feature answers drawn from your published documentation.' },
      { title: 'B2B Service Providers', description: 'Account enquiries routed to the right owner with the chat attached.' },
      { title: 'Internal Teams', description: 'Slack or Teams bots that answer staff questions from internal documents.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Connecting the Chatbot to Your Help Desk and Store',
    paragraphs: [
      'The chatbot connects to the help desk where your agents already work, including Zendesk, Intercom, Freshdesk, Gorgias and Help Scout, so handoffs arrive as normal tickets. For live lookups it can read store data from Shopify or WooCommerce, and conversation records can sync with HubSpot, Salesforce or Zoho.',
      'Behind the scenes, n8n, Make, Zapier or direct APIs tie these systems together. Each tool’s integration options decide what the bot can reach; where a system has no API, we assess alternatives during the audit.',
    ],
    groups: [
      { label: 'Help Desks', items: ['Zendesk', 'Intercom', 'Freshdesk', 'Gorgias', 'Help Scout'] },
      { label: 'Chat Channels', items: ['Website chat widget', 'WhatsApp', 'Messenger'] },
      { label: 'Store & CRM Data', items: ['Shopify', 'WooCommerce', 'HubSpot', 'Salesforce', 'Zoho'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
      { label: 'Internal Bots', items: ['Slack', 'Microsoft Teams'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Teams Choose Clickmasters for Their Chatbot',
    intro:
      'Clickmasters is an AI automation agency that designs agents, workflows and system integrations for support, sales and operations teams. For chatbots, that means a build shaped around your content and rules rather than a generic template.',
    items: [
      { title: 'Built Around Your Content', description: 'Answers come from your documentation, never invented.' },
      { title: 'Conversation Design Included', description: 'We agree tone, guardrails and triggers with you before the build.' },
      { title: 'No New Platform to Learn', description: 'The chatbot plugs into the help desk your agents know.' },
      { title: 'Tested on Tricky Questions', description: 'Ambiguous and high-priority scenarios run through the bot first.' },
      { title: 'Gradual Go-Live', description: 'Low-risk topics come first; more follows once answers hold up.' },
      { title: 'Yours to Keep', description: 'Every bot flow, account and document becomes yours once the project wraps up.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'From First Call to a Live Chatbot',
    intro:
      'Each project moves through clear stages, and you approve the plan before we build anything.',
    steps: [
      { title: 'Free Audit', description: 'We review your channels and frequent questions, then pick which conversations suit a bot first.' },
      { title: 'Knowledge & Conversation Plan', description: 'Then we gather your sources and agree tone, guardrails and escalation rules; you sign off before the build.' },
      { title: 'Build', description: 'We set up the widget or messaging channel, connect your help desk and add lookups where integrated.' },
      { title: 'Test', description: 'Common, ambiguous and high-priority conversations run through the bot so weak answers get fixed early.' },
      { title: 'Staged Launch', description: 'The bot goes live on low-risk questions first, with suggested replies coming before automatic ones.' },
      { title: 'Review', description: 'We go through real transcripts with you after launch, and your written quote spells out the support terms.' },
    ],
    note: 'After the audit you get a written quote covering the chatbot scope, deliverables, platform and usage costs, support terms and a timeline for each stage of the build.',
  },

  cta: {
    bandHeading: 'Find out what your chatbot could answer',
    heading: 'Put AI Chatbot Software to Work on Your Website',
    description:
      'Book a free, no-obligation audit. We will look at the questions your customers ask, show which ones a chatbot can answer safely and flag the ones that belong with your team.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Chatbot Software: Common Questions',
  faqSideText: 'Curious how a chatbot would cope with your customers’ questions? Book a free audit and we will walk through real examples with you.',
  faqs: [
    {
      question: 'What can AI chatbot software do for a support team?',
      answer:
        'It answers routine customer questions in natural language, keeps context across a conversation and looks up details such as order status where your systems allow. Anything sensitive or uncertain goes to an agent with the transcript.',
    },
    {
      question: 'How is an AI chatbot different from a decision-tree bot?',
      answer:
        'A decision-tree bot only follows scripted branches, so unexpected wording stops it. A conversational bot reads the whole message and remembers earlier turns, so loose phrasing and follow-ups still work.',
    },
    {
      question: 'What happens when a customer asks something the bot cannot handle?',
      answer:
        'Following your escalation rules, it passes the chat to an agent in your help desk. That agent sees the full history and a summary, so nobody explains the problem twice.',
    },
    {
      question: 'Can the chatbot look up an order or account in real time?',
      answer:
        'Yes, where your store or order system is integrated. A Shopify or WooCommerce connection, for example, lets it share live tracking instead of a generic policy.',
    },
    {
      question: 'Which channels can a customer service chatbot run on?',
      answer:
        'We deploy customer-facing bots as a website chat widget and on WhatsApp and Messenger. Slack and Microsoft Teams suit internal staff bots, while a separate voice agent covers phone calls.',
    },
    {
      question: 'Can we control what the chatbot is allowed to say?',
      answer:
        'Yes. You agree its tone, allowed topics, forbidden statements and the subjects that always go to a person, and we test those guardrails before launch.',
    },
    {
      question: 'Does a chatbot make sense for a small business with a small support team?',
      answer:
        'Often it does, because small teams cannot cover evenings and weekends. A first version can start with the website widget and a short list of frequent questions.',
    },
    {
      question: 'What are the honest limits of an AI chatbot?',
      answer:
        'A chatbot is strong on routine, well-documented questions and weak on judgment calls, complaints and exceptions. Its answers are only as good as your help content, so gaps in your docs become escalations.',
    },
    {
      question: 'Do we need to replace our help desk to add a chatbot?',
      answer:
        'No. The bot works with help desks such as Zendesk, Intercom or Freshdesk, so handed-off chats appear where agents already work, depending on each tool’s APIs.',
    },
    {
      question: 'How is a chatbot project priced, and what is the first step?',
      answer:
        'Price depends on channels, integrations and knowledge sources, so the first step is a free audit of your common questions. You then receive a written quote listing the bot’s scope, deliverables, platform and usage costs, support terms and timeline.',
    },
  ],
};
