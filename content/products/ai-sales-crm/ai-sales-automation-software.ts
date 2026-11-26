// content/products/ai-sales-crm/ai-sales-automation-software.ts
// Copy + SEO for /products/ai-sales-crm/ai-sales-automation-software.
//
// Focus keyword: "AI sales automation software" (workflow / process angle, not the CRM database).
// Accuracy rules: only capabilities already stated on the site, no statistics, prices,
// testimonials or guarantees. Clickmasters builds this inside the client's tools; it is not a SaaS app.
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_SALES_AUTOMATION_SOFTWARE_PATH = '/products/ai-sales-crm/ai-sales-automation-software';

export const aiSalesAutomationSoftwareSeo: HubSeo = {
  name: 'AI Sales Automation Software',
  path: AI_SALES_AUTOMATION_SOFTWARE_PATH,
  title: 'AI Sales Automation Software for Sales Teams | Clickmasters',
  description:
    'AI sales automation software built into your CRM: automated follow-up, meeting booking, proposal drafts, stage updates and reporting. Book a free audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Sales CRM', path: '/products/ai-sales-crm' },
    { name: 'AI Sales Automation Software', path: AI_SALES_AUTOMATION_SOFTWARE_PATH },
  ],
};

export const aiSalesAutomationSoftwareKeywords: string[] = [
  'AI sales automation software',
  'sales automation software',
  'automated sales workflows',
  'sales process automation',
  'automate sales follow-up',
  'sales task automation',
  'AI sales workflow',
  'automated sales sequences',
  'sales automation tools for small business',
  'end-to-end sales automation',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  {
    anchor: 'the AI Sales CRM this workflow layer belongs to',
    href: '/products/ai-sales-crm',
    section: 'What Is AI Sales Automation Software?',
  },
  {
    anchor: 'lead capture, scoring and routing',
    href: '/products/ai-sales-crm/ai-lead-management-software',
    section: 'How Sales Process Automation Differs From a CRM (explainer)',
  },
  {
    anchor: 'an AI assistant that drafts, summarizes and suggests next steps',
    href: '/products/ai-sales-crm/ai-sales-assistant',
    section: 'Where AI Fits in Automated Sales Workflows',
  },
  {
    anchor: 'our wider sales automation solutions',
    href: '/solutions/sales-automation',
    section: 'Integrations',
  },
  {
    anchor: 'AI workflow automation service',
    href: '/services/ai-workflow-automation',
    section: 'Getting Started',
  },
] as const;

export const aiSalesAutomationSoftware: ProductPageContent = {
  hero: {
    badge: 'AI Sales Automation',
    heading: 'AI Sales Automation Software for the Busywork Between Calls',
    accentWords: 4,
    subheading:
      'AI sales automation software from Clickmasters takes over the repetitive steps of selling, from logging an inquiry to booking the meeting, drafting the proposal and updating the deal. We build it inside the CRM and inbox your team already uses.',
    primaryCta: { text: 'Book a Free Sales Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/products/ai-sales-automation-software-workflow-trigger.webp',
    imageAlt:
      'Hand pressing a glowing automation button surrounded by workflow icons, illustrating AI sales automation software triggering sales tasks',
    imageWidth: 1200,
    imageHeight: 640,
    marquee: ['Automated follow-up', 'Meeting booking', 'Proposal drafts', 'Stage updates', 'Sales reporting'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is AI Sales Automation Software?',
    paragraphs: [
      'AI sales automation software is a set of connected workflows that handle the routine work of selling. Triggers such as a form submission, a reply or a booked call start the next action, and AI handles steps that need reading or writing.',
      'Think of it as the engine rather than the filing cabinet. Your CRM stores contacts and deals; the automation decides what happens to them next. At Clickmasters, this engine is one part of [the AI Sales CRM this workflow layer belongs to](/products/ai-sales-crm), and it can also be built on its own around the tools you run today.',
      'Most teams do not lack effort. They lose time chasing replies and rebuilding the same report every Monday, which are exactly the tasks worth handing to a workflow.',
    ],
    problems: [
      'Follow-up depends on memory, so promising prospects go quiet.',
      'Booking a call takes several back-and-forth emails.',
      'Proposals start from a blank page every time.',
      'Someone rebuilds the weekly sales report by hand in a spreadsheet.',
    ],
  },

  explainer: {
    eyebrow: 'Process, Not Database',
    heading: 'How Sales Process Automation Differs From a CRM',
    paragraphs: [
      'A CRM answers the question “what do we know about this buyer?” Sales process automation answers a different one: “what should happen now, and who or what does it?”',
      'Automation works across systems. One workflow might read an inbound email, send a reply, offer calendar slots and move the deal once the meeting is booked. The front end of that chain, [lead capture, scoring and routing](/products/ai-sales-crm/ai-lead-management-software), has its own page; here we focus on what follows.',
    ],
    points: [
      { title: 'Triggers', description: 'A new form entry, an email reply, a booking or a stage change starts a workflow.' },
      { title: 'Rules', description: 'Your conditions decide the path, the owner and when a person steps in.' },
      { title: 'AI Steps', description: 'AI produces summaries and drafts, and a rep checks them.' },
      { title: 'Outputs', description: 'Records, tasks, emails, alerts and reports update in your existing tools.' },
    ],
  },

  features: {
    eyebrow: 'Core Capabilities',
    heading: 'What Our AI Sales Automation Software Handles',
    intro:
      'We shape every workflow around your stages, fields and hand-offs. Pick the pieces that remove the most manual work first; the rest can follow later.',
    items: [
      {
        title: 'Automatic Record Creation',
        description:
          'Inquiries from forms, ads, chat and inbound email become CRM records with their source attached, with no manual data entry.',
        icon: 'inbox',
      },
      {
        title: 'Automated Sales Sequences',
        description:
          'Personalized follow-up emails go out on the trigger you choose and change course when the prospect replies.',
        icon: 'mail',
      },
      {
        title: 'Meeting Booking Flows',
        description:
          'A qualified prospect gets an email with a calendar link, and the workflow writes the booked slot back to the CRM for the assigned rep.',
        icon: 'calendar',
      },
      {
        title: 'Proposal and Quote Drafts',
        description:
          'AI prepares a first draft of a proposal or quote from the deal record and notes, ready for a rep to edit, approve and send.',
        icon: 'file',
      },
      {
        title: 'Stage Updates and Tasks',
        description:
          'Meetings, proposals and replies move deals forward, create the next task and send Slack, Teams or email alerts when something stalls.',
        icon: 'pipeline',
      },
      {
        title: 'Automated Reporting',
        description:
          'Pipeline, forecast and activity reports refresh on their own, while duplicate or incomplete records are flagged.',
        icon: 'chart',
      },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How End-to-End Sales Automation Moves a Deal Forward',
    intro:
      'Here is a typical chain of automated sales workflows. Each link can run alone, and a person takes any case that falls outside your rules.',
    steps: [
      { title: 'Inquiry Logged', description: 'A form, chat, ad or email arrives, and the workflow creates the CRM record with its source.' },
      { title: 'First Response Sent', description: 'A tailored reply goes out, and the owner gets an alert if the lead is high priority.' },
      { title: 'Meeting Booked', description: 'The prospect picks a slot; the workflow logs the booking and advances the deal.' },
      { title: 'Proposal Drafted', description: 'AI summarizes the call notes and drafts a proposal for the rep to review.' },
      { title: 'Follow-Up Continues', description: 'Reminder emails keep things moving and pause when the buyer responds.' },
      { title: 'Reports Refresh', description: 'Stage changes feed dashboards, so managers see progress without chasing reps.' },
    ],
  },

  benefits: {
    eyebrow: 'Business Benefits',
    heading: 'Why Teams Automate Sales Follow-Up and Admin',
    intro:
      'Good sales task automation does not make selling louder. Instead, it makes the process more consistent and frees people for the parts that need judgment.',
    items: [
      { title: 'Consistent Follow-Through', description: 'Every prospect gets the next message on time, however busy the week is.' },
      { title: 'More Selling Time', description: 'Data entry, scheduling emails and report building move off reps’ plates.' },
      { title: 'Quicker First Replies', description: 'Inquiries get a response as they arrive.' },
      { title: 'Reliable Deal Data', description: 'Stages follow real events, so forecasts rest on what actually happened.' },
      { title: 'Cleaner Hand-Offs', description: 'Context travels with each deal between marketing, sales and delivery.' },
      { title: 'Repeatable Process', description: 'New reps inherit a working system rather than personal habits.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI and Human Roles',
    heading: 'Where AI Fits in Automated Sales Workflows',
    paragraphs: [
      'Rules-based automation handles predictable steps well. AI adds value where text is involved: understanding a reply, condensing a call, or producing a first draft. For the rep-facing side of that work, we also build [an AI assistant that drafts, summarizes and suggests next steps](/products/ai-sales-crm/ai-sales-assistant).',
      'Be wary of any vendor claiming automation will sell for you. It removes friction around conversations; it does not replace the salesperson, and closing stays human.',
    ],
    aiDoes: [
      'Condenses call notes and email threads into the CRM record',
      'Drafts proposals and quotes for review',
      'Recommends the next action on a deal',
      'Personalizes follow-up emails from record data',
      'Flags duplicate and incomplete records',
    ],
    peopleDo: [
      'Approve messaging, pricing and proposals before they go out',
      'Handle leads and deals that fall outside the rules',
      'Run discovery, negotiation and closing conversations',
      'Decide when a workflow should change',
    ],
  },

  spotlight: {
    eyebrow: 'Follow-Up Automation',
    heading: 'Automated Sales Sequences That Respond to Buyers',
    paragraphs: [
      'Follow-up is where many deals quietly stall. A sequence built by Clickmasters starts on a defined event, sends messages your team has approved and branches as soon as the buyer writes back.',
      'The record logs each email, reply and booking, so reps see the whole thread before they call. Leads that are not ready yet move into a slower nurture track instead of being dropped.',
    ],
    points: [
      { title: 'Event-Based Starts', description: 'A form, an unanswered email or a completed meeting can open the sequence.' },
      { title: 'Reply-Aware Branching', description: 'Responses pause the sequence and alert the owner.' },
      { title: 'Personal Details Included', description: 'Messages pull in name, company and context from the record.' },
      { title: 'Long-Term Nurture', description: 'Prospects with a later timeline keep getting relevant updates.' },
    ],
  },

  audience: {
    eyebrow: 'Who It’s For',
    heading: 'Who Uses Sales Process Automation?',
    items: [
      { title: 'Small Businesses', description: 'Sales automation tools for small business owners who answer every inquiry themselves.' },
      { title: 'Growing Sales Teams', description: 'One shared process that holds up as reps and lead sources are added.' },
      { title: 'B2B Companies', description: 'Longer cycles with meetings, proposals and several stakeholders to keep in sync.' },
      { title: 'Service Providers', description: 'Inquiry-to-meeting-to-quote flows with fewer manual steps.' },
      { title: 'Sales and RevOps Leaders', description: 'Accurate stage data and reports ready for pipeline reviews.' },
      { title: 'Larger Organizations', description: 'Documented, monitored workflows rolled out across teams in stages.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Tools Your Sales Workflows Can Connect',
    paragraphs: [
      'Workflows run across your CRM, inbox, calendar and chat tools. We connect HubSpot, Salesforce, GoHighLevel, Zoho, Pipedrive and Microsoft Dynamics through native connectors, n8n, Make, Zapier or direct APIs. In GoHighLevel, for instance, workflows can create and update opportunities as buyers move.',
      'What can be connected depends on each tool’s APIs; where a system has none, we assess alternatives during the audit. For automation that reaches beyond the sales workflow itself, see [our wider sales automation solutions](/solutions/sales-automation).',
    ],
    groups: [
      { label: 'CRM Platforms', items: ['HubSpot', 'Salesforce', 'GoHighLevel', 'Zoho', 'Pipedrive', 'Microsoft Dynamics'] },
      { label: 'Communication', items: ['Gmail', 'Outlook', 'Slack', 'Microsoft Teams', 'Calendars'] },
      { label: 'Lead Sources', items: ['Website forms', 'Landing pages', 'Ads', 'Chat', 'Inbound email'] },
      { label: 'Automation Layer', items: ['n8n', 'Make', 'Zapier', 'APIs'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Your Sales Workflows With Clickmasters?',
    intro:
      'Clickmasters is an AI automation agency whose sales, support and operations clients rely on us to design, build and maintain their AI agents, workflow automations and system integrations.',
    items: [
      { title: 'Mapped to Your Process', description: 'We document how your team really sells before choosing what to automate.' },
      { title: 'Inside Your Existing Stack', description: 'Workflows live in the tools you already pay for.' },
      { title: 'Approval Points Built In', description: 'Anything sent to a buyer can require a rep’s sign-off.' },
      { title: 'Error Handling on Every Step', description: 'Failures raise alerts instead of passing silently.' },
      { title: 'Staged Rollout', description: 'Issues surface before they reach every lead.' },
      { title: 'Yours to Keep', description: 'You receive the workflows, accounts and documentation at hand-over.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'Getting Started With AI Sales Automation Software',
    intro:
      'Projects follow the same method as our [AI workflow automation service](/services/ai-workflow-automation): audit first, then a plan you approve before any build work begins.',
    steps: [
      { title: 'Free Audit', description: 'We review your sales steps and tools and flag the tasks worth automating.' },
      { title: 'Workflow Mapping', description: 'Together we agree the triggers, rules, approvals and exceptions.' },
      { title: 'Build', description: 'We configure workflows, integrations and AI steps in your systems.' },
      { title: 'Testing', description: 'We check edge cases, branching and message content before live use.' },
      { title: 'Staged Deployment', description: 'Automation switches on step by step, with documentation.' },
      { title: 'Review', description: 'We review results after launch; your quote defines the support terms.' },
    ],
    note: 'A written quote follows the free audit, listing the workflows in scope, deliverables, platform and usage costs, support terms and a timeline.',
  },

  cta: {
    bandHeading: 'Find the sales tasks worth automating',
    heading: 'Put Your Sales Busywork on Autopilot',
    description:
      'Book a free, no-obligation audit. We will map your sales workflow, show which repetitive steps automation can take over and be candid about the ones it should not.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Sales Automation Software: FAQs',
  faqSideText: 'Not sure which sales tasks to automate first? A free audit will map them for your team.',
  faqs: [
    {
      question: 'What does AI sales automation software actually automate?',
      answer:
        'The repeatable steps around selling: logging inquiries, sending follow-ups, booking meetings, drafting proposals, updating stages and compiling reports. People keep the conversations and decisions.',
    },
    {
      question: 'How is sales automation different from a CRM?',
      answer:
        'A CRM holds your contacts and deals. Sales automation acts on that data, triggering emails, tasks, alerts and stage changes when something happens.',
    },
    {
      question: 'Which sales tasks should we automate first?',
      answer:
        'Begin with high-volume, rule-based work such as first replies and meeting reminders. These are simple to define and test. The audit helps rank the rest.',
    },
    {
      question: 'Can automated follow-up still sound personal?',
      answer:
        'Yes. Messages use details from the record, such as name, company and reason for the inquiry. Sequences also pause when the prospect replies.',
    },
    {
      question: 'Do we need to replace our current CRM?',
      answer:
        'No. We build inside HubSpot, Salesforce, GoHighLevel, Zoho, Pipedrive or Microsoft Dynamics. What can be connected depends on each platform’s APIs.',
    },
    {
      question: 'Are sales automation tools a good fit for small businesses?',
      answer:
        'Often, yes. A small team gains a lot when inquiries are answered and followed up without someone watching the inbox. You can start with one workflow and add more later.',
    },
    {
      question: 'Does AI send proposals on its own?',
      answer:
        'No. AI drafts from the deal notes, and a rep reviews, edits and approves it before anything reaches the buyer.',
    },
    {
      question: 'What are the limits of AI in sales automation?',
      answer:
        'AI reads, summarizes and drafts well, but it does not build trust or negotiate. Automation will not sell for you, and anyone claiming AI closes deals on its own is overselling.',
    },
    {
      question: 'What happens if a workflow step fails?',
      answer:
        'Each step includes error handling, and failures trigger alerts so they are fixed rather than missed. Staged rollout also limits surprises.',
    },
    {
      question: 'What does sales automation cost, and what is the first step?',
      answer:
        'Cost depends on the workflows, integrations and AI steps involved. Start with a free audit; afterwards you receive a written quote covering scope, deliverables, platform and usage costs, support terms and a timeline.',
    },
  ],
};
