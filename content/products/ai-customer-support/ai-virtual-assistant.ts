// content/products/ai-customer-support/ai-virtual-assistant.ts
// Copy + SEO for /products/ai-customer-support/ai-virtual-assistant.
//
// Accuracy rules for this page (keep them when editing):
// - Only capabilities already stated elsewhere on the site. No invented channels or integrations.
// - Every action in a connected system is qualified with "where integrated" / "where your tools allow".
// - No statistics, prices, testimonials, timelines or guarantees.
// - Clickmasters builds the assistant inside the client's existing help desk and channels — not a SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_VIRTUAL_ASSISTANT_PATH = '/products/ai-customer-support/ai-virtual-assistant';

export const aiVirtualAssistantSeo: HubSeo = {
  name: 'AI Virtual Assistant',
  path: AI_VIRTUAL_ASSISTANT_PATH,
  title: 'AI Virtual Assistant That Gets Work Done | Clickmasters',
  description:
    'AI virtual assistant that answers from your docs and acts in your systems: order lookups, bookings, tickets and reminders, with handoff. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Customer Support', path: '/products/ai-customer-support' },
    { name: 'AI Virtual Assistant', path: AI_VIRTUAL_ASSISTANT_PATH },
  ],
};

export const aiVirtualAssistantKeywords = [
  'AI virtual assistant',
  'AI virtual assistant software',
  'business virtual assistant',
  'intelligent virtual assistant',
  'AI assistant for business',
  'virtual customer service assistant',
  'AI-powered virtual assistant',
  'conversational AI assistant',
  'automated business assistant',
  'AI assistant for appointment booking',
  'internal knowledge assistant for staff',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'wider AI support system', href: '/products/ai-customer-support', section: 'What Is an AI Virtual Assistant?' },
  { anchor: 'AI agents that reason and take action', href: '/solutions/ai-agents', section: 'Explainer: Conversation Plus Action' },
  { anchor: 'conversation-first chatbot software', href: '/products/ai-customer-support/ai-chatbot-software', section: 'Capabilities' },
  { anchor: 'automated service workflows', href: '/products/ai-customer-support/ai-customer-service-automation', section: 'Routine Task Assistance' },
  { anchor: 'AI agent development projects', href: '/services/ai-agent-development', section: 'Getting Started' },
] as const;

export const aiVirtualAssistant: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Virtual Assistant',
    heading: 'AI Virtual Assistant That Answers, Books and Follows Through',
    accentWords: 4,
    subheading:
      'An AI virtual assistant from Clickmasters talks with customers and then completes the task they asked about. Where your systems are connected, it checks an order, books or moves an appointment, opens a ticket and sends the reminder, all inside the tools your team already runs.',
    primaryCta: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-virtual-assistant-humanoid-assistant-with-headset.webp',
    imageAlt: 'White humanoid robot shown head and shoulders, wearing a headset with a microphone, ready to assist customers',
    imageWidth: 433,
    imageHeight: 576,
    marquee: ['Order lookups', 'Appointment booking', 'Ticket updates', 'Customer intake', 'Staff knowledge answers'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is an AI Virtual Assistant?',
    paragraphs: [
      'An AI virtual assistant is software that holds a conversation and then acts on it. Instead of stopping at an answer, it can look up a record, reserve a time slot or log a request in the system that owns it, provided that system is connected.',
      'It forms the action-taking layer of a [wider AI support system](/products/ai-customer-support). Customers reach it on web chat, email or messaging apps such as WhatsApp and Messenger, and AI voice agents extend the same assistant to phone calls.',
    ],
    problems: [
      'Customers get an answer but still have to email someone to make the change.',
      'Booking and rescheduling requests pile up in shared inboxes.',
      'Agents copy the same details from chat into the help desk by hand.',
      'Staff interrupt colleagues because nobody can find the right internal document.',
    ],
  },

  explainer: {
    eyebrow: 'Conversation Plus Action',
    heading: 'How an Intelligent Virtual Assistant Turns Requests Into Results',
    paragraphs: [
      'Two parts work together. A language model such as GPT, Claude or Gemini understands the request, while retrieval from your help content keeps each answer grounded in approved material. When your documentation has no answer, the assistant says so and passes the case on.',
      'The second part is action. Connected tools let it read and write data, so it behaves like the [AI agents that reason and take action](/solutions/ai-agents) we build for operations teams, but within limits you set in advance.',
    ],
    points: [
      { title: 'Understands Intent', description: 'It works out the topic and urgency, then decides whether to help or hand over.' },
      { title: 'Answers From Your Content', description: 'Replies draw on your own articles and policies, not general knowledge.' },
      { title: 'Acts Where Integrated', description: 'Through APIs and an automation layer such as n8n, Make or Zapier, it reads statuses, books slots and updates tickets.' },
      { title: 'Stays Inside Guardrails', description: 'You define which actions it may take alone, which need approval and which topics always go to a person.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What a Business Virtual Assistant Can Handle',
    intro:
      'If your main need is answering questions, our [conversation-first chatbot software](/products/ai-customer-support/ai-chatbot-software) may suit you better. The capabilities below go one step further, because each one ends with something done in a connected system.',
    items: [
      { title: 'Order & Account Lookups', icon: 'database', description: 'Checks order status with tracking, or an account’s current state, where your store or order system is integrated.' },
      { title: 'Appointment Booking', icon: 'calendar', description: 'Reads calendar availability, offers open slots, books or changes the appointment and confirms it.' },
      { title: 'Details & Intake Collection', icon: 'file', description: 'Asks for the names, references or reasons a request needs and saves them in a structured form.' },
      { title: 'Ticket Creation & Updates', icon: 'inbox', description: 'Opens a help-desk ticket with the collected details and updates its status as work moves on.' },
      { title: 'Status Updates & Reminders', icon: 'alert', description: 'Sends progress updates, appointment reminders and follow-ups once a request is resolved.' },
      { title: 'Answers From Documentation', icon: 'chat', description: 'Responds to policy, product and process questions using your approved help content.' },
      { title: 'Handoff With a Summary', icon: 'route', description: 'Passes the conversation to the right person with its full history and a short summary attached.' },
      { title: 'Phone Through Voice Agents', icon: 'phone', description: 'Answers inbound calls around the clock and places outbound reminder calls in a natural-sounding voice.' },
      { title: 'Staff Knowledge Assistant', icon: 'layers', description: 'Helps employees find answers in internal documents and links them straight to the source.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How an AI Virtual Assistant Completes a Request',
    intro:
      'Take a customer who wants to move a booking. Here is the path from first message to confirmed change.',
    steps: [
      { title: 'Listen', description: 'The customer opens a chat, sends a WhatsApp message or calls a line that a voice agent answers.' },
      { title: 'Identify', description: 'Next, the assistant recognizes the request as a reschedule and checks your rules for whether it may act alone.' },
      { title: 'Verify', description: 'It asks for the booking reference and any details your process requires.' },
      { title: 'Act', description: 'Where your calendar is connected, it offers free slots, moves the appointment and confirms the new time.' },
      { title: 'Record', description: 'Then it logs the change and the conversation to your help desk or CRM.' },
      { title: 'Remind or Escalate', description: 'A reminder goes out before the new slot. If anything falls outside the rules, a person takes over with full context.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why Teams Add an AI Assistant for Business',
    intro:
      'The value comes from closing the gap between a question and the change the customer actually wanted.',
    items: [
      { title: 'Requests Finished in One Visit', description: 'Customers check, book or update something in one conversation instead of waiting for a callback.' },
      { title: 'Fewer Manual Re-Entries', description: 'Details flow straight into your help desk or CRM, so agents stop retyping what customers already said.' },
      { title: 'Cover Outside Office Hours', description: 'Bookings, lookups and intake keep moving at night and over the weekend.' },
      { title: 'Cleaner Records', description: 'Structured intake gives every ticket the same fields, which makes triage and reporting easier.' },
      { title: 'Quicker Answers for Staff', description: 'Employees find internal policies themselves and can open the source document to check it.' },
      { title: 'Control Over Every Action', description: 'You choose what it may change alone and review its work before widening its scope.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Routine Task Assistance',
    heading: 'Routine Tasks the Assistant Takes On, and Decisions It Leaves to You',
    paragraphs: [
      'Repetitive, rule-based tasks suit an automated business assistant well. Each action it takes runs on [automated service workflows](/products/ai-customer-support/ai-customer-service-automation) that connect chat, help desk and calendar, so the steps behind a booking or ticket stay consistent.',
      'Judgment still belongs to people. This assistant will not replace your support team, and a vendor claiming otherwise is overselling. During rollout it suggests rather than sends, and it gains more freedom only once its work proves reliable.',
    ],
    aiDoes: [
      'Looks up orders and account status, where integrated',
      'Books, moves and confirms appointments in connected calendars',
      'Collects intake details and opens help-desk tickets',
      'Updates ticket status and sends reminders',
      'Answers routine questions from approved content',
      'Summarizes the conversation before any handoff',
    ],
    peopleDo: [
      'Approve refunds, exceptions and policy edge cases',
      'Handle sensitive or emotionally charged conversations',
      'Review suggested replies during the early rollout',
      'Take over whenever the assistant is unsure',
    ],
  },

  spotlight: {
    eyebrow: 'Communication & Information Retrieval',
    heading: 'Customer Communication and Information Retrieval Without the Back-and-Forth',
    paragraphs: [
      'The assistant pulls answers from your help content and live data from connected systems. As a result, a customer asking about a parcel gets the real tracking status, not a link to a policy page.',
      'After the chat ends, it keeps customers informed. Where your tools allow, it sends status updates, reminders and feedback requests, and drafts replies to reviews and survey comments for your approval.',
    ],
    points: [
      { title: 'Live Data, Not Generic Replies', description: 'Order, booking and ticket details come from the system of record, where integrated.' },
      { title: 'Grounded Policy Answers', description: 'Policy and product replies quote your approved material, and gaps trigger escalation instead of guesses.' },
      { title: 'Proactive Updates', description: 'Customers hear about progress and upcoming appointments without having to chase you.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Side by Side',
      heading: 'AI Virtual Assistant vs Traditional Chatbot',
      accentWords: 2,
      paragraphs: [
        'A traditional chatbot follows fixed scripts and button menus. By contrast, a conversational AI assistant understands free-form requests and can complete the job in your systems.',
      ],
      points: [
        { title: 'Scripts vs Understanding', description: 'Traditional bots match keywords to pre-written flows. The AI version interprets what the person means, however they phrase it.' },
        { title: 'Answers vs Actions', description: 'A scripted bot points customers to a form. The assistant books the slot, opens the ticket or checks the order itself, where integrated.' },
        { title: 'Static vs Grounded Content', description: 'Old bots repeat canned text. The assistant draws on your current documentation and admits when it lacks an answer.' },
        { title: 'Dead Ends vs Handoffs', description: 'Rule-based bots often loop when stuck. The assistant hands over to a person with the history and a summary attached.' },
      ],
    },
    {
      eyebrow: 'Business Workflow Assistance',
      heading: 'An Internal Assistant for Your Own Team',
      accentWords: 3,
      paragraphs: [
        'Customers are not the only people with repeat questions. An internal version helps employees find procedures, product details and policies across Google Drive, Confluence, SharePoint and Notion, then links to the exact source so they can verify it.',
      ],
      points: [
        { title: 'Searches Internal Docs', description: 'Finds answers across shared drives and wikis instead of relying on memory.' },
        { title: 'Cites the Source', description: 'Every reply points to the document behind it, so staff can check details before acting.' },
        { title: 'Works in Team Chat', description: 'Staff ask questions in Slack or Microsoft Teams, and the same workflows can post alerts there.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Industry Applications',
    heading: 'Where a Virtual Customer Service Assistant Fits',
    items: [
      { title: 'E-commerce', description: 'Order tracking, returns and sizing questions handled in chat or by phone, using Shopify or WooCommerce data.' },
      { title: 'Healthcare & Clinics', description: 'Appointment scheduling, reminders and patient intake, with anything clinical routed straight to staff.' },
      { title: 'SaaS', description: 'Onboarding help inside the product, technical issues triaged, and billing or subscription events picked up where Stripe is connected.' },
      { title: 'Hospitality', description: 'Booking confirmations and reservation changes, completed in conversation where the booking system allows.' },
      { title: 'Logistics', description: 'Delivery status questions answered from live tracking data instead of a manual lookup by the team.' },
      { title: 'Finance', description: 'Account enquiries and payment reminders, with decisions and sensitive matters left to your staff.' },
    ],
  },

  integrations: {
    eyebrow: 'Integration Possibilities',
    heading: 'Systems the Assistant Can Work With',
    paragraphs: [
      'Your assistant lives inside help desks such as Zendesk, Intercom, Freshdesk, Gorgias and Help Scout, and records activity in CRMs like HubSpot, Salesforce and Zoho. For phone calls, telephony runs over SIP trunking or Twilio Voice, with voices from engines such as ElevenLabs.',
      'Each tool’s APIs and integration options determine which actions are possible. When a system offers no API, we look at alternatives during the audit and tell you plainly what that means for scope.',
    ],
    groups: [
      { label: 'Help Desks', items: ['Zendesk', 'Intercom', 'Freshdesk', 'Gorgias', 'Help Scout'] },
      { label: 'CRMs & Stores', items: ['HubSpot', 'Salesforce', 'Zoho', 'Shopify', 'WooCommerce'] },
      { label: 'Channels', items: ['Web chat', 'Email', 'WhatsApp', 'Messenger', 'Phone (voice agents)'] },
      { label: 'Knowledge & Team Tools', items: ['Google Drive', 'Confluence', 'SharePoint', 'Notion', 'Slack', 'Microsoft Teams'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Your Assistant With Clickmasters',
    intro:
      'Clickmasters designs AI agents, workflow automations and integrations for support, sales and operations teams. For this assistant, we focus on actions that are safe, traceable and easy for your team to oversee.',
    items: [
      { title: 'Actions With Limits', description: 'We agree up front which changes the assistant may make alone and which need a human sign-off.' },
      { title: 'Built Into Existing Tools', description: 'It runs in your current help desk, calendar and channels, so working habits stay intact.' },
      { title: 'Honest About Integrations', description: 'You learn early which systems connect cleanly and which need another route.' },
      { title: 'Tested on Real Scenarios', description: 'Common, ambiguous and high-priority requests are tried before launch, and voice flows are checked on real calls.' },
      { title: 'Gradual Go-Live', description: 'Low-risk tasks go first, with suggested replies before automatic ones.' },
      { title: 'Everything Handed Over', description: 'You receive the workflows, accounts and documentation once delivery is complete.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'From First Audit to a Working Assistant',
    intro:
      'We run this the way we run all our [AI agent development projects](/services/ai-agent-development): you approve the plan before any build begins.',
    steps: [
      { title: 'Free Audit', description: 'We review your channels, systems and request types, and identify which tasks the assistant could safely complete.' },
      { title: 'Knowledge, Rules & Plan', description: 'Together we gather your content, define allowed actions and escalation rules, and you sign off the plan.' },
      { title: 'Build', description: 'Our team connects channels, help desk, calendar and data sources, then configures the assistant’s actions.' },
      { title: 'Testing', description: 'We run common, ambiguous and high-priority cases through the assistant before customers ever see it.' },
      { title: 'Staged Launch', description: 'It begins with low-risk requests and suggested replies, then takes on more as results hold up.' },
      { title: 'Review', description: 'After launch we review how it performs against the plan; ongoing support terms appear in your quote.' },
    ],
    note: 'After the audit you get a written quote covering scope, deliverables, platform and usage costs, support terms and a timeline for your assistant.',
  },

  cta: {
    bandHeading: 'Find the tasks your assistant could finish',
    heading: 'Give Customers an Assistant That Follows Through',
    description:
      'Book a free, no-obligation audit. We will map your common requests, show which ones an assistant could complete in your systems, and point out the ones better left with your team.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Virtual Assistant Questions, Answered',
  faqSideText: 'Wondering what an assistant could do in your own systems? Book a free audit and ask us directly.',
  faqs: [
    {
      question: 'What does an AI virtual assistant actually do for a business?',
      answer:
        'It holds conversations with customers or staff and completes routine tasks for them. Typical examples are checking an order, booking an appointment, collecting intake details and opening or updating a ticket, all where the relevant systems are connected.',
    },
    {
      question: 'How is a virtual assistant different from a website chatbot?',
      answer:
        'A typical chatbot answers questions or follows a fixed script. A virtual assistant understands free-form requests and can act in your help desk, calendar or order system, so the customer leaves with the task done rather than a link.',
    },
    {
      question: 'Can the assistant book and reschedule appointments?',
      answer:
        'Yes, where your calendar or booking system is integrated. It checks availability, offers open slots, confirms the booking and can send a reminder beforehand, in chat or during a phone call handled by a voice agent.',
    },
    {
      question: 'Can we use it internally for our employees?',
      answer:
        'Yes. An internal knowledge assistant answers staff questions from Google Drive, Confluence, SharePoint and Notion and links to the source document. Employees can check the original before relying on the answer.',
    },
    {
      question: 'How do you stop the assistant from making the wrong change?',
      answer:
        'We agree in advance which actions it may take alone, which need approval and which topics always reach a person. During rollout it suggests rather than sends, and it escalates whenever it lacks confidence or information.',
    },
    {
      question: 'What happens when it cannot answer or complete a request?',
      answer:
        'It tells the customer honestly and hands the case to the right person with the history and a summary attached, so nobody repeats their story.',
    },
    {
      question: 'Where does the assistant fall short compared with a person?',
      answer:
        'It handles routine, rule-based work well but should not judge refunds, exceptions or sensitive situations. Those stay with your team, and an assistant cannot stand in for your support staff.',
    },
    {
      question: 'Does a small business need a virtual assistant this capable?',
      answer:
        'Often small teams gain the most, since bookings and order questions keep moving after hours without extra hires. You can begin with one channel and a few common tasks.',
    },
    {
      question: 'Do we need to change our help desk or CRM to use it?',
      answer:
        'No. We build it into the tools you already use, such as Zendesk, Intercom, HubSpot or Salesforce. What it can do depends on each system’s APIs, which we check during the audit.',
    },
    {
      question: 'How do we find out what an assistant would cost for our setup?',
      answer:
        'Begin with the free audit of your channels, systems and request types. Afterwards we send a written quote listing scope, deliverables, platform and usage costs, support terms and the timeline, before you commit to anything.',
    },
  ],
};
