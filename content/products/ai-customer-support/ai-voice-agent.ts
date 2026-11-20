// content/products/ai-customer-support/ai-voice-agent.ts
// Copy + SEO for /products/ai-customer-support/ai-voice-agent.
//
// Accuracy rules for this page (keep them when editing):
// - Only voice capabilities already stated on the site (AI voice agents service / solutions pages):
//   inbound calls 24/7, outbound follow-ups and reminders, calendar booking, caller details,
//   escalation with context, CRM / help-desk logging, SIP trunking, Twilio Voice, ElevenLabs,
//   GPT / Claude / Gemini, testing on real calls before launch.
// - No SMS, voice cloning, multilingual, sentiment or emotion detection. No statistics, prices,
//   testimonials, guarantees or ongoing-support promises.
// - Outbound calling is framed as customer-service follow-ups and reminders, not cold sales.
// - It is a system Clickmasters builds on the client's phone lines and tools — not a SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_VOICE_AGENT_PATH = '/products/ai-customer-support/ai-voice-agent';

export const aiVoiceAgentSeo: HubSeo = {
  name: 'AI Voice Agent',
  path: AI_VOICE_AGENT_PATH,
  title: 'AI Voice Agent for Inbound & Outbound Calls | Clickmasters',
  description:
    'AI voice agent that answers calls 24/7, books appointments, handles order and account enquiries, and transfers callers with context. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Customer Support', path: '/products/ai-customer-support' },
    { name: 'AI Voice Agent', path: AI_VOICE_AGENT_PATH },
  ],
};

export const aiVoiceAgentKeywords = [
  'AI voice agent',
  'AI voice agent software',
  'AI phone agent',
  'AI voice assistant',
  'conversational AI voice agent',
  'automated phone support',
  'AI calling agent',
  'voice AI for business',
  'AI customer service voice agent',
  'AI phone answering for appointment booking',
  'AI voice agent with human call transfer',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI-powered support system', href: '/products/ai-customer-support', section: 'What Is an AI Voice Agent?' },
  { anchor: 'text-based chatbot software', href: '/products/ai-customer-support/ai-chatbot-software', section: 'Voice vs Text (explainer)' },
  { anchor: 'voice agent development service', href: '/services/ai-voice-agents', section: 'Core Features' },
  { anchor: 'virtual assistants that complete tasks across channels', href: '/products/ai-customer-support/ai-virtual-assistant', section: 'Voice Support Workflows (extras)' },
  { anchor: 'voice AI solutions for phone-heavy teams', href: '/solutions/ai-voice-agents', section: 'Integrations & Connectivity' },
] as const;

export const aiVoiceAgent: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 4 },

  hero: {
    badge: 'AI Voice Agent',
    heading: 'AI Voice Agent for Phone Support That Knows When to Transfer',
    accentWords: 4,
    subheading:
      'An AI voice agent from Clickmasters picks up your support line day and night, talks callers through routine requests in a natural-sounding voice and books appointments while they wait. When a call needs judgment, it passes the caller to your team with a call summary.',
    primaryCta: { text: 'Book a Free Voice Agent Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-voice-agent-speech-and-sound-waves.webp',
    imageAlt: 'Digital human face in profile with glowing blue and pink sound waves representing AI speech',
    imageWidth: 1200,
    imageHeight: 800,
    marquee: ['Calls answered 24/7', 'Natural-sounding voices', 'Bookings on the call', 'Warm human transfer', 'Every call logged'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is an AI Voice Agent?',
    paragraphs: [
      'An AI voice agent is software that holds a spoken conversation over the phone. It listens to the caller, works out what they need, checks your systems for the answer and replies out loud.',
      'Phone calls still carry questions that matter to customers: a missed delivery, a booking that must move, a balance that looks wrong. Clickmasters builds the voice layer of an [AI-powered support system](/products/ai-customer-support), so those calls get an accurate first response instead of voicemail.',
      'Callers who would rather speak to a person can ask for one at any point. Sensitive or complicated calls go straight to your staff, because the goal is to take routine load off your team, not to stand between customers and people.',
    ],
    problems: [
      'Calls after closing time end in voicemail and a callback backlog.',
      'Staff spend whole shifts answering the same status questions by phone.',
      'Appointment changes eat up front-desk time during busy hours.',
      'Transferred callers explain their problem twice.',
    ],
  },

  explainer: {
    eyebrow: 'Voice vs Text',
    heading: 'Why Phone Conversations Need a Different Kind of AI',
    paragraphs: [
      'A caller cannot scroll back, click a button or skim a list of links. Every reply has to arrive as short, clear speech, and the agent must recognise when the caller has finished talking before it answers.',
      'Our [text-based chatbot software](/products/ai-customer-support/ai-chatbot-software) covers written channels. On the phone, three engines work together: speech recognition turns words into text, a language model decides what to do, and a speech engine voices the reply.',
    ],
    points: [
      { title: 'Speech Recognition', description: 'The system transcribes the caller as they speak, so the conversation keeps a normal pace.' },
      { title: 'Language Understanding', description: 'Models such as GPT, Claude or Gemini interpret the request and choose the next step within your rules.' },
      { title: 'Spoken Response', description: 'Engines such as ElevenLabs turn each reply into clear, conversational speech.' },
      { title: 'Turn-Taking & Latency', description: 'We tune pauses and response speed, since long silences or interruptions make a call feel broken.' },
    ],
  },

  features: {
    eyebrow: 'Core Features',
    heading: 'What an AI Voice Agent Handles on Every Call',
    intro:
      'We configure each capability around your phone lines, policies and escalation rules. The build follows our [voice agent development service](/services/ai-voice-agents), tailored to customer service calls.',
    items: [
      { title: 'Inbound Calls 24/7', description: 'The agent answers your support number at night, at weekends and when every line is busy.' },
      { title: 'Natural Voice Interaction', description: 'Callers speak freely instead of pressing keypad options and hear plain, conversational replies.' },
      { title: 'Appointment Booking', description: 'During the call, the agent checks calendar availability, confirms a slot and later sends a reminder.' },
      { title: 'Outbound Follow-Ups', description: 'Service calls go to existing customers for reminders, booking confirmations and post-resolution check-ins.' },
      { title: 'Status & Account Enquiries', description: 'Where your systems are integrated, callers hear live order, delivery or account details.' },
      { title: 'Caller Details Capture', description: 'It records names, reference numbers and the reason for calling, so every case starts complete.' },
      { title: 'Human Transfer With Context', description: 'Escalated callers reach the right person, who sees a call summary before saying hello.' },
      { title: 'Call Logging', description: 'Each call lands in your CRM or help desk as a record, a new ticket or a status update.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How an AI Voice Agent Works, From Ring to Resolution',
    intro:
      'Every call follows the same path through your telephony, AI models and business systems. Your rules decide what the agent may settle alone.',
    steps: [
      { title: 'Connect', description: 'Your number routes into the agent through SIP trunking or Twilio Voice, so customers dial as usual.' },
      { title: 'Listen', description: 'Speech recognition transcribes the caller in real time while the agent waits for a natural pause.' },
      { title: 'Understand', description: 'A language model identifies the request, its urgency and whether escalation rules apply.' },
      { title: 'Act', description: 'Through your integrations, the agent checks a calendar, looks up an order or finds an answer in your docs.' },
      { title: 'Respond', description: 'Next, it speaks the answer, confirms any action and asks whether anything else is needed.' },
      { title: 'Transfer or Log', description: 'Finally, it hands the call to your team with context, or writes the outcome to your CRM or help desk.' },
    ],
  },

  benefits: {
    eyebrow: 'Business Benefits',
    heading: 'What Automated Phone Support Changes Day to Day',
    intro:
      'The payoff shows up as fewer missed calls, fewer repeat questions for staff and cleaner call records.',
    items: [
      { title: 'No More After-Hours Voicemail', description: 'Customers who call at night or at the weekend get help instead of waiting for a callback.' },
      { title: 'Lighter Front-Desk Load', description: 'Routine status checks and booking changes stop interrupting the people who handle complex calls.' },
      { title: 'Fewer Missed Appointments', description: 'Reminder calls give customers an easy moment to keep or rearrange their slot.' },
      { title: 'Consistent Phone Answers', description: 'Every caller hears the same approved policy information, whatever the hour.' },
      { title: 'Better-Prepared Staff', description: 'Transferred calls arrive with the caller’s details and a summary attached.' },
      { title: 'A Record of Every Call', description: 'Logs show what customers phone about and where your documentation has gaps.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI and People',
    heading: 'Which Calls the Agent Takes and Which Stay With Your Team',
    paragraphs: [
      'A voice agent earns its place on predictable, repeatable calls. Complaints, disputes and anything that needs a judgment call belong with your staff, and we set rules so those conversations reach a person quickly.',
      'If the agent is unsure, it says so and offers a transfer. You approve the topics it may handle, and that list grows only after it proves reliable on real calls.',
    ],
    aiDoes: [
      'Answers routine questions from your approved documentation',
      'Books, confirms and reschedules appointments',
      'Reads out order, delivery or account status where integrated',
      'Places reminder and follow-up calls to existing customers',
      'Captures caller details and the reason for calling',
      'Summarizes the call and logs it to your CRM or help desk',
    ],
    peopleDo: [
      'Handle complaints, disputes and emotionally difficult calls',
      'Decide on refunds, exceptions and account changes',
      'Take any caller who asks for a person',
      'Own every call the agent is unsure about',
    ],
  },

  spotlight: {
    eyebrow: 'Appointments & Enquiries',
    heading: 'Appointment and Inquiry Handling Without the Back-and-Forth',
    paragraphs: [
      'Phone scheduling usually means a receptionist juggling a calendar while the caller waits. Instead, the agent checks open slots as the caller talks and confirms the chosen time out loud.',
      'Later, it can phone with a reminder. Questions about hours, services or policies draw on your own content, and anything beyond it goes to your team.',
    ],
    points: [
      { title: 'Live Availability', description: 'Because it reads your calendar during the call, the agent never offers a slot that has gone.' },
      { title: 'Spoken Confirmation', description: 'It repeats the date, time and service back to the caller before booking.' },
      { title: 'Reminder Calls', description: 'Outbound calls remind customers about upcoming appointments and capture changes.' },
      { title: 'Grounded Enquiry Answers', description: 'Answers come from your documentation, not the model’s general knowledge.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Voice Support Workflows',
      heading: 'Support Calls the Agent Can Resolve End to End',
      accentWords: 3,
      paragraphs: [
        'Many support calls follow a script your team knows by heart. Once your order, booking or account systems are connected, the agent can run those scripts and update the record as it goes.',
        'For tasks that span chat, email and internal tools, we also build [virtual assistants that complete tasks across channels](/products/ai-customer-support/ai-virtual-assistant), and the voice agent can work alongside them.',
      ],
      points: [
        { title: 'Order Status Calls', description: 'Callers give an order number and hear where their purchase is, using live store data.' },
        { title: 'Returns Requests', description: 'The agent explains your returns policy, collects details and starts the process where your systems allow.' },
        { title: 'Delivery Updates', description: 'Logistics customers check a shipment’s progress without queueing for a dispatcher.' },
        { title: 'Booking Changes & Account Questions', description: 'Reservations move to new dates and account enquiries draw on connected records, with sensitive matters routed to staff.' },
      ],
    },
    {
      eyebrow: 'Testing Before Launch',
      heading: 'Tested on Real Calls Before Customers Hear It',
      accentWords: 3,
      paragraphs: [
        'An agent that sounds fine in a demo can still stumble on a crackly line. So before launch, we test it on real calls for accuracy, response speed and conversation flow.',
        'Then it starts on a narrow set of low-risk calls, and you decide which call types it takes on next.',
      ],
      points: [
        { title: 'Accuracy', description: 'Names, dates and reference numbers must come through correctly every time.' },
        { title: 'Latency', description: 'Reply speed matters, because hesitation is far more noticeable on a call than in chat.' },
        { title: 'Conversation Flow', description: 'Common, ambiguous and urgent scenarios confirm that transfers trigger when they should.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Industry Applications',
    heading: 'Where Voice AI for Business Fits Best',
    items: [
      { title: 'Healthcare', description: 'Appointment scheduling, reminder calls and patient intake, with clinical questions passed to staff.' },
      { title: 'Logistics', description: 'Delivery status calls answered from shipment data, so dispatch can focus on exceptions.' },
      { title: 'Hospitality', description: 'Booking confirmations and reservation changes handled at any hour.' },
      { title: 'Finance', description: 'Routine account enquiries and payment reminders, with sensitive matters kept with advisers.' },
      { title: 'E-commerce', description: 'Order status and returns calls handled from store data, freeing staff for problem orders.' },
      { title: 'Service Businesses', description: 'Teams that lose bookings to missed calls can keep the phone answered without extra shifts.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations & Connectivity',
    heading: 'Connecting Your AI Voice Agent to Phones and Business Systems',
    paragraphs: [
      'Telephony connects through SIP trunking or Twilio Voice, so you keep your existing numbers. Behind the call, the agent reaches your CRM, help desk, calendar and store data, with n8n, Make or Zapier moving information between them.',
      'Connection options depend on the APIs each tool offers, and the audit assesses alternatives for any system without one. To see how this fits a wider phone strategy, explore our [voice AI solutions for phone-heavy teams](/solutions/ai-voice-agents).',
    ],
    groups: [
      { label: 'Telephony', items: ['SIP trunking', 'Twilio Voice'] },
      { label: 'Voice & Language Models', items: ['ElevenLabs', 'GPT', 'Claude', 'Gemini'] },
      { label: 'CRM & Help Desk', items: ['HubSpot', 'Salesforce', 'Zoho', 'Zendesk', 'Freshdesk'] },
      { label: 'Store & Automation', items: ['Shopify', 'WooCommerce', 'n8n', 'Make', 'Zapier'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Teams Choose Clickmasters for Voice Support',
    intro:
      'Clickmasters builds AI agents, integrations and workflows for support, sales and operations teams. On phone projects, we aim for calls that sound natural, stay accurate and hand over cleanly.',
    items: [
      { title: 'Built Around Your Phone Lines', description: 'The agent connects to the numbers, calendar and records you already use.' },
      { title: 'Honest About Limits', description: 'Before any build, we tell you which calls suit automation and which should stay with people.' },
      { title: 'Tested for Real Conditions', description: 'We check accuracy, latency and flow on real calls, not just in a quiet demo.' },
      { title: 'A Person Is Always Reachable', description: 'Callers can ask for your team at any moment, and the context travels with them.' },
      { title: 'Your Rules on Every Call', description: 'You set the topics, wording and escalation triggers the agent follows.' },
      { title: 'Full Hand-Over', description: 'At the end of the project, the workflows, accounts and documentation become yours.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How to Launch Voice Support With Clickmasters',
    intro:
      'We follow a staged process, and nothing answers your phones until you have approved the plan.',
    steps: [
      { title: 'Free Audit', description: 'We review your call types, phone setup and systems, then pick the calls that are safe to automate first.' },
      { title: 'Knowledge & Call Rules', description: 'Together we gather policies and scripts, agree on voice and tone, and define when the agent transfers.' },
      { title: 'Build', description: 'We connect telephony, speech and language engines, your calendar and your CRM or help desk.' },
      { title: 'Real-Call Testing', description: 'Common, ambiguous and high-priority scenarios run on real calls to check accuracy, latency and flow.' },
      { title: 'Staged Launch', description: 'Low-risk calls come first, and you widen the scope only after the agent performs reliably.' },
      { title: 'Review', description: 'After launch we review call logs with you; your written quote sets out any further support terms.' },
    ],
    note: 'After the audit you get a written quote covering the voice agent’s scope, deliverables, telephony and model usage costs, support terms and a timeline for each stage.',
  },

  cta: {
    bandHeading: 'Find out which calls AI can answer',
    heading: 'Give Your Support Line a Reliable Phone Agent',
    description:
      'Book a free, no-obligation audit. We will look at the calls your team receives, point out the routine ones a voice agent can take, and flag those that should always reach a person.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Voice AI Phone Support: Your Questions Answered',
  faqSideText: 'Curious how a voice agent would handle your calls? Book a free audit and we will walk through them.',
  faqs: [
    {
      question: 'How is a voice agent different from a text chatbot?',
      answer:
        'A chatbot works with typed messages, while a voice agent listens and speaks in real time over the phone. So it has to recognise speech, manage turn-taking and reply quickly.',
    },
    {
      question: 'Can callers still reach a real person?',
      answer:
        'Yes. Anyone can ask for a person at any point, and your rules send sensitive or complex calls straight to staff with a summary attached.',
    },
    {
      question: 'Can the agent book and reschedule appointments by phone?',
      answer:
        'Yes, once it is connected to your calendar. It checks availability during the call, confirms the slot aloud and can follow up with a reminder.',
    },
    {
      question: 'Does it make outbound calls as well as answering them?',
      answer:
        'It can place service calls such as appointment reminders, booking confirmations, payment reminders and post-resolution follow-ups. We design these for existing customers, not cold sales campaigns.',
    },
    {
      question: 'Can we keep our current phone numbers?',
      answer:
        'In most setups, yes. We connect through SIP trunking or Twilio Voice, so customers keep dialling the numbers they know.',
    },
    {
      question: 'Which AI models and voice engines do you use?',
      answer:
        'We pick models such as GPT, Claude or Gemini and speech engines such as ElevenLabs to suit the speed and voice quality your calls need.',
    },
    {
      question: 'Where do call records end up?',
      answer:
        'The agent can log each call to a CRM such as HubSpot, Salesforce or Zoho, or create and update help-desk tickets. Connection options depend on each tool’s APIs.',
    },
    {
      question: 'What can a voice agent not do well?',
      answer:
        'Complaints, disputes, emotionally difficult conversations and judgment calls are a poor fit. It also stays within your approved information, so it transfers the caller rather than guessing.',
    },
    {
      question: 'Is a phone agent worthwhile for a small business with few staff?',
      answer:
        'Often, yes. Small teams lose bookings when calls go unanswered, and a voice agent can cover evenings and busy periods. You can start with one call type, such as appointment booking.',
    },
    {
      question: 'What determines the price of a voice agent project?',
      answer:
        'Your call types, integrations, call volume, models and telephony set the scope. After the free audit, a written quote spells out deliverables, telephony and usage costs, support terms and a timeline before work begins.',
    },
  ],
};
