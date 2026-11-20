// content/products/ai-sales-crm/ai-sales-assistant.ts
// Copy + SEO for /products/ai-sales-crm/ai-sales-assistant.
//
// Accuracy rules for this page (keep them when editing):
// - Only capabilities already stated elsewhere on the site. No invented integrations or channels.
// - No statistics, prices, testimonials, or guarantees.
// - It is an assistant Clickmasters builds inside the client's existing CRM and tools — not a SaaS app.
// - Reps review and approve AI output; closing stays human.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_SALES_ASSISTANT_PATH = '/products/ai-sales-crm/ai-sales-assistant';

export const aiSalesAssistantSeo: HubSeo = {
  name: 'AI Sales Assistant',
  path: AI_SALES_ASSISTANT_PATH,
  title: 'AI Sales Assistant for Call Notes & Drafts | Clickmasters',
  description:
    'AI sales assistant that summarizes calls, drafts follow-ups and proposals for rep review, preps meetings and qualifies inbound leads. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Sales CRM', path: '/products/ai-sales-crm' },
    { name: 'AI Sales Assistant', path: AI_SALES_ASSISTANT_PATH },
  ],
};

export const aiSalesAssistantKeywords = [
  'AI sales assistant',
  'AI assistant for sales reps',
  'AI sales agent',
  'AI sales copilot',
  'sales call summaries',
  'AI email drafting for sales',
  'AI proposal drafting',
  'next best action',
  'AI meeting prep',
  'conversational AI qualification',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI Sales CRM', href: '/products/ai-sales-crm', section: 'What Is an AI Sales Assistant?' },
  { anchor: 'CRM where every summary and note is stored', href: '/products/ai-sales-crm/ai-crm-software', section: 'What the Assistant Does' },
  { anchor: 'AI agents we design for business teams', href: '/solutions/ai-agents', section: 'Explainer: Copilot vs. Agent' },
  { anchor: 'automated sales workflows', href: '/products/ai-sales-crm/ai-sales-automation-software', section: 'Rep Review and Approval' },
  { anchor: 'AI chatbot service', href: '/services/ai-chatbots', section: 'Front-Line Conversational Agent' },
] as const;

export const aiSalesAssistant: ProductPageContent = {
  hero: {
    badge: 'AI Sales Assistant',
    heading: 'AI Sales Assistant That Works Alongside Every Rep',
    accentWords: 4,
    subheading:
      'An AI sales assistant from Clickmasters handles the writing and prep work around each deal. It summarizes calls into the CRM, suggests next steps, drafts follow-ups and proposals for reps to approve, and can qualify inbound prospects and book meetings.',
    primaryCta: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-sales-assistant-robot-sales-helper.webp',
    imageAlt: 'Friendly white robot holding a money bag and a coin, illustrating an AI sales assistant that supports reps',
    imageWidth: 666,
    imageHeight: 375,
    marquee: ['Call summaries', 'Follow-up drafts', 'Meeting prep', 'Next-step suggestions', 'Inbound qualification'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is an AI Sales Assistant?',
    paragraphs: [
      'An AI sales assistant is a helper that sits beside each salesperson rather than in front of the customer. It reads what happened on a deal, writes it up, and prepares the next piece of work so the rep can review it and move on.',
      'Think of it as the rep-facing layer of an [AI Sales CRM](/products/ai-sales-crm). The CRM holds the record; the assistant keeps that record useful by turning conversations into notes, notes into suggested actions, and actions into ready-to-edit drafts.',
    ],
    problems: [
      'Call notes are written hours later, or never, so key details are lost.',
      'Reps rebuild context from scattered emails before every meeting.',
      'Follow-up emails and proposals start from a blank page each time.',
      'Inbound prospects wait for a reply while the team is busy with live deals.',
    ],
  },

  explainer: {
    eyebrow: 'Copilot vs. Agent',
    heading: 'Two Roles: Rep Copilot and Front-Line Agent',
    paragraphs: [
      '"AI sales copilot" and "AI sales agent" are often used interchangeably. In practice they are two different jobs, and it helps to be clear which one you want.',
      'A copilot works behind the scenes for the rep. An agent talks to prospects directly within a narrow brief. Both follow the same principles as the other [AI agents we design for business teams](/solutions/ai-agents): defined scope, clear rules and a hand-off to a human.',
    ],
    points: [
      { title: 'Copilot: Inside the Deal', description: 'Summarizes activity, suggests the next action and prepares drafts that a rep edits before anything is sent.' },
      { title: 'Agent: At the Front Door', description: 'Answers inbound chat or voice, asks about need, fit, budget signals and timeline, then books a meeting.' },
      { title: 'Shared Guardrails', description: 'Both stay within agreed rules, write their output to the CRM and pass anything unusual to a person.' },
    ],
  },

  features: {
    eyebrow: 'What the Assistant Does',
    heading: 'What an AI Sales Assistant Does for Your Reps',
    intro:
      'Every capability writes back to the [CRM where every summary and note is stored](/products/ai-sales-crm/ai-crm-software), so the next person to open a deal sees the full picture.',
    items: [
      {
        title: 'Sales Call Summaries',
        description: 'Calls become short notes on what was discussed, objections raised and agreed next steps, saved to the deal.',
        icon: 'history',
      },
      {
        title: 'Email Thread Digests',
        description: 'The assistant reduces long threads to the points that matter, so a rep can catch up quickly.',
        icon: 'mail',
      },
      {
        title: 'Next Best Action Suggestions',
        description: 'Using recent activity and deal stage, the assistant proposes a sensible next step for the rep to accept or ignore.',
        icon: 'target',
      },
      {
        title: 'Follow-Up Email Drafts',
        description: 'After a meeting or reply, the assistant drafts a tailored follow-up for the rep to edit and approve.',
        icon: 'mail',
      },
      {
        title: 'Proposal and Quote Drafts',
        description: 'The assistant assembles first drafts of proposals and quotes from deal details, and the rep checks and finalizes them.',
        icon: 'pipeline',
      },
      {
        title: 'Meeting Prep Briefs',
        description: 'Before a scheduled call, the rep receives a brief with company details, past conversations and open questions.',
        icon: 'database',
      },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How the Assistant Fits Into a Rep’s Day',
    intro:
      'Events your team already creates, such as a booked meeting, a finished call or a new reply, trigger the assistant.',
    steps: [
      { title: 'Before the Meeting', description: 'A prep brief pulls together the CRM record, recent emails and notes from earlier calls.' },
      { title: 'After the Call', description: 'The assistant summarizes the conversation and logs it on the deal, listing action items clearly.' },
      { title: 'Next Step Proposed', description: 'A suggested action appears, such as sending a recap, scheduling a demo or preparing a quote.' },
      { title: 'Draft Prepared', description: 'A follow-up email or proposal draft appears where the rep can review it.' },
      { title: 'Rep Reviews and Sends', description: 'The salesperson edits, approves and sends. That activity then updates the CRM stage and tasks.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why Sales Teams Add an AI Copilot for Reps',
    intro:
      'The gain is not that AI sells. It is that your salespeople spend more of their day selling and less of it writing up and catching up.',
    items: [
      { title: 'More Selling Time', description: 'Note-taking, recaps and first drafts take less of the rep’s attention.' },
      { title: 'Richer Deal Records', description: 'Consistent summaries mean the CRM reflects what was actually said.' },
      { title: 'Prepared Conversations', description: 'Reps walk into meetings knowing the history instead of asking the prospect to repeat it.' },
      { title: 'Consistent Follow-Through', description: 'A suggested next step on every deal makes it harder for opportunities to go quiet.' },
      { title: 'Faster Inbound Response', description: 'A conversational agent can engage new prospects while the team is busy elsewhere.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Rep Review and Approval',
    heading: 'The AI Sales Assistant Drafts, Your Reps Decide',
    paragraphs: [
      'An assistant is only trustworthy if people stay in control of what it produces. Every draft, suggestion and summary is visible and editable, and sending remains a deliberate action by the rep.',
      'Around the assistant, [automated sales workflows](/products/ai-sales-crm/ai-sales-automation-software) handle the rule-based steps such as routing, sequences and stage updates. The assistant covers the judgment-heavy writing; the workflows cover the repeatable mechanics.',
    ],
    aiDoes: [
      'Summarizes calls, email threads and CRM notes',
      'Suggests a next action on each deal',
      'Drafts follow-up emails for review',
      'Prepares first drafts of proposals and quotes',
      'Builds a context brief before meetings',
      'Qualifies inbound prospects and books meetings',
    ],
    peopleDo: [
      'Approve or edit every message before it is sent',
      'Set pricing and sign off on proposals',
      'Lead discovery, negotiation and closing',
      'Decide on prospects outside the qualification rules',
    ],
  },

  spotlight: {
    eyebrow: 'Front-Line Conversational Agent',
    heading: 'Conversational Qualification for Inbound Prospects',
    paragraphs: [
      'Some teams also want help before a rep is involved. A conversational agent can answer website chat or a voice call, ask qualifying questions and offer a meeting slot when the prospect fits.',
      'This front-line role builds on our [AI chatbot service](/services/ai-chatbots), with the conversation tied directly to your CRM and calendar. The agent records its answers on the lead, books the time and alerts the assigned rep, who then takes over the relationship.',
    ],
    points: [
      { title: 'Qualifying Questions', description: 'The agent asks about need, fit, budget signals and timeline in a natural, brief exchange.' },
      { title: 'Meeting Booking', description: 'Prospects who fit your criteria can pick a time on the rep’s calendar.' },
      { title: 'CRM Write-Back', description: 'The agent saves answers and the conversation outcome on the lead record.' },
      { title: 'Human Hand-Off', description: 'Anything outside the rules, or any prospect asking for a person, goes to your team.' },
    ],
  },

  audience: {
    eyebrow: 'Who It’s For',
    heading: 'Who Gets the Most From an AI Assistant for Sales',
    items: [
      { title: 'Small Sales Teams', description: 'Owners and lean teams who sell, follow up and admin the CRM themselves.' },
      { title: 'B2B Account Executives', description: 'Reps running multi-meeting deals where context and proposals matter.' },
      { title: 'Sales Leaders and RevOps', description: 'Managers and operators who want readable, structured deal notes without chasing reps.' },
      { title: 'Service Businesses', description: 'Firms where inquiries need quick qualification and a booked consultation.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Works With Your CRM, Inbox and Calendar',
    paragraphs: [
      'The assistant lives in the tools your reps already open every day, connected through native integrations, n8n, Make, Zapier or direct APIs.',
      'Exactly what can be linked depends on each tool and its APIs. If a system has no API, we review the alternatives during the audit.',
    ],
    groups: [
      { label: 'CRM Platforms', items: ['HubSpot', 'Salesforce', 'GoHighLevel', 'Zoho', 'Pipedrive', 'Microsoft Dynamics'] },
      { label: 'Email & Messaging', items: ['Gmail', 'Outlook', 'Slack', 'Microsoft Teams'] },
      { label: 'Scheduling & Channels', items: ['Calendars', 'Website chat', 'Voice'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Your Sales Copilot With Clickmasters',
    intro:
      'We build AI agents and the workflows around them for sales teams, and we shape the assistant around how your reps already sell.',
    items: [
      { title: 'Fitted to Your Sales Motion', description: 'Summary formats, draft styles and suggested actions follow your stages and terminology.' },
      { title: 'Inside Your Existing Tools', description: 'No new app for reps to learn; outputs appear in the CRM, inbox and calendar.' },
      { title: 'Approval Built In', description: 'Review steps are part of the design, so the team controls everything a prospect receives.' },
      { title: 'Reliable and Yours to Keep', description: 'Error handling on every step, staged rollout, and workflows, accounts and documentation handed over at delivery.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How to Get Started',
    intro:
      'We begin by looking at where your reps lose time today, then agree which assistant tasks to build first. You approve the plan before any build work starts.',
    steps: [
      { title: 'Free Audit', description: 'A no-obligation review of your sales process, CRM and the admin your reps handle.' },
      { title: 'Strategy & Mapping', description: 'We define summary formats, draft triggers, approval points and qualification rules.' },
      { title: 'Build', description: 'The assistant and its connections are built inside your CRM and communication tools.' },
      { title: 'Testing', description: 'We check drafts, summaries and agent conversations against real scenarios before launch.' },
      { title: 'Staged Deployment', description: 'The assistant goes live with a small group first, then the wider team.' },
      { title: 'Review', description: 'We review results with you after launch; ongoing support terms are listed in your quote.' },
    ],
    note: 'Following the audit, your written quote spells out which assistant tasks are in scope, plus deliverables, platform and usage costs, support terms and a timeline.',
  },

  cta: {
    bandHeading: 'Give every rep a capable assistant',
    heading: 'See What an Assistant Could Take Off Your Reps’ Plates',
    description:
      'Start with a free audit, with no obligation. We will point out the writing and prep work worth handing to AI, and say clearly what should stay with your team.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Sales Assistant: Common Questions',
  faqSideText: 'Wondering how an assistant would fit your team? Book a free audit and we will map it to your sales process.',
  faqs: [
    {
      question: 'What does an AI sales assistant actually do?',
      answer:
        'It summarizes calls, email threads and CRM notes, suggests next actions, drafts follow-ups, proposals and quotes, and preps briefs before meetings. It can also qualify inbound prospects and book meetings.',
    },
    {
      question: 'Will the assistant send emails to prospects on its own?',
      answer:
        'No. The assistant prepares follow-ups and proposals as drafts that a rep reviews and sends. The front-line agent only talks to inbound prospects within rules you approve.',
    },
    {
      question: 'What is the difference between an AI sales copilot and an AI sales agent?',
      answer:
        'A copilot supports the rep in the background with summaries, drafts and prep. An agent speaks to prospects directly, usually to qualify them and book a meeting before handing over to a person.',
    },
    {
      question: 'Where are call summaries and notes stored?',
      answer:
        'On the relevant contact or deal in your CRM, so anyone who opens the record later sees the same history.',
    },
    {
      question: 'Can it draft proposals and quotes?',
      answer:
        'Yes. It assembles a first draft from the deal details. The rep checks the content, confirms pricing and decides when to send it.',
    },
    {
      question: 'Which CRMs and tools does it work with?',
      answer:
        'HubSpot, Salesforce, GoHighLevel, Zoho, Pipedrive and Microsoft Dynamics, plus Gmail, Outlook, Slack, Teams and calendars. Available connections vary with the APIs each tool offers.',
    },
    {
      question: 'Can AI close deals for my team?',
      answer:
        'No, and anyone claiming AI closes deals on its own is overselling. The assistant removes writing and preparation work, but discovery, negotiation and closing stay with your salespeople.',
    },
    {
      question: 'Is this useful for a small business?',
      answer:
        'Often, yes. When a few people handle every sale, automatic summaries and ready-to-edit follow-ups help. You can start with one task, such as call notes, and expand later.',
    },
    {
      question: 'How does the conversational agent qualify inbound prospects?',
      answer:
        'It asks about need, fit, budget signals and timeline over website chat or voice. Prospects who meet your criteria can book a meeting, and the answers are saved on the lead for the assigned rep.',
    },
    {
      question: 'How much does it cost and how do we get started?',
      answer:
        'It depends on the tasks, tools and integrations involved. Start with a free audit; afterwards you receive a written quote listing scope, deliverables, platform and usage costs, support terms and a timeline.',
    },
  ],
};
