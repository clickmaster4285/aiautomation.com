// content/products/general-ai-automation/ai-automation-solutions.ts
// Copy + SEO for /products/general-ai-automation/ai-automation-solutions.
//
// Accuracy rules for this page (keep them when editing):
// - Primary keyword is "AI automation for small business". Do NOT target "AI automation for business" (owned by the
//   General AI Automation parent) or "AI automation tools" (owned by the ai-automation-tools-for-businesses child).
//   Focus is the owner-led or lean team starting with ONE high-value workflow, built in tools they already use.
// - The owner or a team member approves anything that matters; the approval step is the client's choice and can be
//   relaxed for routine acknowledgments only if the client decides to.
// - Platforms named are only the ones on the site: Zapier, Make, n8n; HubSpot, Zoho, Pipedrive, GoHighLevel;
//   Gmail, Outlook, Slack, Twilio; Shopify, WooCommerce; AI models from OpenAI, Anthropic and Google. Other apps
//   only "where they offer an API or integration, confirmed during discovery".
// - No prices or cost figures: cost "depends on the scope of the workflow, the platform and AI usage", and the
//   client pays platform and AI usage costs directly. No statistics, percentages, time saved, testimonials,
//   client names, "leading/best/affordable" claims, guarantees or ongoing-support promises beyond "monitoring and
//   improvement after launch is part of our process; scope and terms are agreed per project".
// - Use cases are examples, scoped per project. The client owns the automations, accounts and documentation.
//
// Inline links use [anchor text](/path). This page contains EXACTLY EIGHT contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_AUTOMATION_SOLUTIONS_PATH = '/products/general-ai-automation/ai-automation-solutions';

export const aiAutomationSolutionsSeo: HubSeo = {
  name: 'AI Automation Solutions',
  path: AI_AUTOMATION_SOLUTIONS_PATH,
  title: 'AI Automation for Small Business Teams | Clickmasters',
  description:
    'AI automation for small business teams: start with one high-value workflow, built in the tools you already use, with you approving key steps.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'General AI Automation', path: '/products/general-ai-automation' },
    { name: 'AI Automation Solutions', path: AI_AUTOMATION_SOLUTIONS_PATH },
  ],
};

export const aiAutomationSolutionsKeywords = [
  'AI automation for small business',
  'AI automation solutions for SMBs',
  'small business automation with AI',
  'AI automation for growing businesses',
  'automate small business tasks',
  'AI for small business operations',
  'small business workflow automation',
  'AI lead follow-up for small business',
  'AI receptionist for small business',
  'affordable AI automation',
  'first AI automation project',
  'what can a small business automate with AI',
  'how to start AI automation with a small team',
  'AI automation for owner-led businesses',
  'automating lead follow-up without hiring',
];

// The eight contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'our overview of AI automation for business', href: '/products/general-ai-automation', section: 'What AI Automation for Small Business Looks Like (intro)' },
  { anchor: 'lead generation automation', href: '/solutions/lead-generation-automation', section: 'What a Small Business Can Automate (spotlight)' },
  { anchor: 'appointment booking automation', href: '/solutions/appointment-booking-automation', section: 'What a Small Business Can Automate (spotlight)' },
  { anchor: 'AI chatbots for customer questions', href: '/services/ai-chatbots', section: 'What a Small Business Can Automate (spotlight)' },
  { anchor: 'compare every solution by business function', href: '/solutions', section: 'What a Small Business Can Automate (spotlight)' },
  { anchor: 'real estate automation for brokerages', href: '/products/industry-specific-ai-automation/ai-real-estate-automation', section: 'One Workflow, Then the Next (extras)' },
  { anchor: 'how to compare automation tools', href: '/products/general-ai-automation/ai-automation-tools-for-businesses', section: 'Tools and Integrations' },
  { anchor: 'AI workflow automation service', href: '/services/ai-workflow-automation', section: 'How We Get Your First Automation Live' },
] as const;

export const aiAutomationSolutions: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Automation Solutions',
    heading: 'AI Automation for Small Business: Solutions for Growing Teams',
    accentWords: 3,
    subheading:
      'In a small business, the same few people answer enquiries, chase invoices, update the CRM and still try to do the work customers pay for. AI automation for small business takes the repetitive part of that load and hands it to a workflow, so your team spends its time on customers and decisions. We start with one workflow that matters, build it in the tools you already pay for, and keep you in control of anything that needs judgment.',
    primaryCta: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/business.jpg',
    imageAlt:
      'Generic business automation illustration, representing a small team handing repetitive tasks such as lead follow-up and bookings to an automated workflow',
    imageWidth: 1200,
    imageHeight: 628,
    marquee: ['Lead follow-up', 'Bookings and reminders', 'Customer questions', 'CRM updates', 'Invoice processing', 'Weekly summaries'],
  },

  intro: {
    eyebrow: 'What It Looks Like',
    heading: 'What AI Automation for Small Business Looks Like',
    paragraphs: [
      'AI automation for small business is a set of connected workflows that handle repetitive tasks such as replying to enquiries, booking appointments, updating records and sending reminders. Simple rules move information between your apps, AI reads and drafts messages, and the owner or a team member approves anything that matters.',
      'It is not a new piece of software you have to learn. It is your existing website form, inbox, calendar and CRM, joined up so information moves without someone copying it by hand. For the wider picture, including larger organizations, see [our overview of AI automation for business](/products/general-ai-automation).',
    ],
    problems: [
      'The owner is the bottleneck: quotes, replies and approvals wait until the owner has a free moment, which is often late at night.',
      'Enquiries go cold: a lead that arrives during a busy job may not get a reply until the next day, by which time they have called someone else.',
      'Contact details sit in email, a spreadsheet, a booking tool and a CRM, and none of them agree.',
      'Bringing on an admin person for tasks that follow the same pattern every day is a cost many businesses want to avoid or delay.',
      'You may already pay for a CRM or a scheduling app that does a fraction of what it could, because the tools were never connected.',
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'Capabilities You Can Build In',
    intro:
      'A good rule of thumb: if a task is repetitive and follows rules, it is usually a good candidate. These are the building blocks we combine for a small team, each scoped to your tools and how you work.',
    items: [
      { title: 'Lead Capture and Routing', description: 'Puts every enquiry into one place and sends it to the right person.' },
      { title: 'AI Drafting', description: 'Prepares replies, quotes and follow-ups for you to approve.' },
      { title: 'Smart Scheduling', description: 'Books, confirms and reminds without back-and-forth emails.' },
      { title: 'Data Sync', description: 'Keeps your CRM, spreadsheets and tools in step.' },
      { title: 'Summaries and Reporting', description: 'Sends a short daily or weekly snapshot of what happened.' },
      { title: 'Escalation', description: 'Flags unusual cases to a person with context attached.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How a First Workflow Works: Missed Enquiries to Booked Calls',
    intro:
      'Lead follow-up is one of the most common first projects. Here is how a typical version runs. The approval step is your choice, and it can be tightened or relaxed as you get comfortable.',
    steps: [
      { title: 'Enquiry Arrives', description: 'Someone fills in your website form, sends an email or messages you through a chat widget.' },
      { title: 'Record Is Created', description: 'The workflow adds the contact to your CRM, or updates the existing record if they have been in touch before.' },
      { title: 'AI Reads the Request', description: 'An AI step identifies what the person needs, which service it relates to and whether it sounds urgent.' },
      { title: 'Reply Is Drafted', description: 'The AI prepares a short, personal reply in your tone, with a link to book a call.' },
      { title: 'You Approve', description: 'The draft lands on your phone through Slack, email or your CRM app. Approve it, edit it, or take over the conversation yourself.' },
      { title: 'Booking and Reminders', description: 'If the person books, the meeting goes into your calendar and they get reminders before the call.' },
      { title: 'Nothing Slips', description: 'If they do not respond, a polite follow-up is scheduled, and anything unusual is flagged for you with the full conversation attached.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Benefits for a Lean Team',
    intro: 'The automation handles the copying, reminding and first drafts, so your team keeps its time for customers and decisions.',
    items: [
      { title: 'Faster Responses', description: 'New enquiries get a reply, even when everyone is busy.' },
      { title: 'Fewer Dropped Balls', description: 'Follow-ups and reminders run on schedule.' },
      { title: 'Less Copying and Pasting', description: 'Less moving data between apps, and fewer errors from retyping.' },
      { title: 'More Owner Time', description: 'Time for sales, delivery and decisions instead of admin.' },
      { title: 'Room to Grow', description: 'Growth without adding headcount for every new batch of routine tasks.' },
      { title: 'A Clearer Picture', description: 'A clearer view of the pipeline, because data lands in one place.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'You Stay in Charge',
    heading: 'What the Workflow Handles and What You Decide',
    paragraphs: [
      'The aim is to remove repetitive admin, not people. Your team keeps the conversations, judgment calls and customer relationships, and the automation handles the copying, reminding and first drafts.',
      'You decide where approval is required, and exceptions come to you with context. Once you trust a reply type, you can decide to let routine acknowledgments send automatically.',
    ],
    aiDoes: [
      'Adds and updates contacts in your CRM',
      'Reads each request and flags urgency',
      'Drafts replies, quotes and follow-ups',
      'Books, confirms and sends reminders',
      'Schedules follow-ups when people do not respond',
      'Flags unusual cases with the full conversation',
    ],
    peopleDo: [
      'Decide where approval is required',
      'Approve, edit or take over replies',
      'Keep the conversations and customer relationships',
      'Make the judgment calls',
    ],
  },

  spotlight: {
    eyebrow: 'Use Cases',
    heading: 'What a Small Business Can Automate',
    paragraphs: [
      'These are common examples, and each one is scoped per project to fit your tools and how you work. For leads, our [lead generation automation](/solutions/lead-generation-automation) page covers capture, qualification and follow-up in more detail, and you can see how [appointment booking automation](/solutions/appointment-booking-automation) fits service businesses.',
      'For customer questions, we build [AI chatbots for customer questions](/services/ai-chatbots) that draw on your own information and know when to step aside. If you want to see every option side by side, [compare every solution by business function](/solutions).',
    ],
    points: [
      { title: 'Leads and Sales Follow-Up', description: 'Capture leads from forms, ads and email into one place, qualify them with a few questions, and keep follow-up going until they book or say no.' },
      { title: 'Bookings and Reminders', description: 'Let customers pick a time that suits them, confirm it automatically and send reminders so fewer appointments are missed.' },
      { title: 'Customer Questions', description: 'Answer common questions about hours, pricing approach, service areas or order status on your website, and hand anything complex to a person.' },
      { title: 'Admin and Back Office', description: 'Move data from forms into spreadsheets or accounting tools, process incoming invoices, prepare a weekly summary and send onboarding emails to new customers.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Start Small',
      heading: 'One Workflow, Then the Next',
      accentWords: 3,
      paragraphs: [
        'We would rather get one automation working well than sell you a large program you do not need. Workflows can be extended or new ones added as your volume and team change, and many clients add a second workflow once the first is running smoothly.',
        'Industry context helps when it matters. If you run a brokerage or agency, for example, we can follow a sector-specific pattern such as [real estate automation for brokerages](/products/industry-specific-ai-automation/ai-real-estate-automation).',
      ],
      points: [
        { title: 'Start With One Workflow', description: 'The task that costs your team the most repeated effort or loses you the most opportunities, often lead follow-up or booking.' },
        { title: 'Get Comfortable', description: 'Tighten or relax approval steps as you see how the workflow fits your day.' },
        { title: 'Add the Next One', description: 'Extend the workflow or add new ones as your volume and team change.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI Automation for Small Business Is For',
    items: [
      { title: 'Owner-Led Businesses', description: 'Owners who have become the bottleneck for quotes, replies and approvals.' },
      { title: 'Service Businesses', description: 'Teams whose enquiries go cold while everyone is busy on jobs.' },
      { title: 'Growing Teams', description: 'Businesses that want to delay hiring for tasks that follow the same pattern every day.' },
      { title: 'Teams With Unconnected Tools', description: 'Businesses already paying for a CRM or scheduling app that does a fraction of what it could.' },
      { title: 'Online Stores', description: 'Shopify or WooCommerce businesses answering order status and common questions.' },
      { title: 'Teams Without a Developer', description: 'Businesses with no technical team that want the build handled for them.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Tools and Integrations',
    paragraphs: [
      'Most small businesses already have the building blocks. We commonly work with automation platforms such as Zapier, Make and n8n; CRMs such as HubSpot, Zoho, Pipedrive and GoHighLevel; Gmail, Outlook and Slack for communication; Twilio for text messages; Shopify or WooCommerce for online stores; and AI models from OpenAI, Anthropic and Google. Other apps are connected where they offer an API or integration, confirmed during discovery.',
      'Which platform suits you depends on your volume, budget and how much your team wants to manage. Our guide on [how to compare automation tools](/products/general-ai-automation/ai-automation-tools-for-businesses) walks through those trade-offs in plain language.',
    ],
    groups: [
      { label: 'Automation Platforms', items: ['Zapier', 'Make', 'n8n'] },
      { label: 'CRMs', items: ['HubSpot', 'Zoho', 'Pipedrive', 'GoHighLevel'] },
      { label: 'Communication', items: ['Gmail', 'Outlook', 'Slack', 'Twilio'] },
      { label: 'Online Stores', items: ['Shopify', 'WooCommerce'] },
      { label: 'AI Models', items: ['OpenAI', 'Anthropic', 'Google'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Small Businesses Work With Clickmasters',
    intro: 'We build one workflow at a time, in your accounts, with you deciding where approval is required.',
    items: [
      { title: 'One Workflow at a Time', description: 'We would rather get one automation working well than sell you a large program you do not need.' },
      { title: 'Built in Your Accounts', description: 'The automations, accounts and documentation belong to you, and you pay platform and AI usage costs directly to the providers.' },
      { title: 'You Stay in Charge', description: 'You decide where approval is required, and exceptions come to you with context.' },
      { title: 'No Developer Needed on Your Side', description: 'We handle the build; you bring knowledge of how your business works.' },
      { title: 'Industry Context When It Matters', description: 'We can follow a sector-specific pattern if you run a brokerage, agency or similar business.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Get Your First Automation Live',
    intro:
      'We handle the build and you bring knowledge of how your business works, so no developer is needed on your side. Our [AI workflow automation service](/services/ai-workflow-automation) explains the build work in more depth.',
    steps: [
      { title: 'Discovery', description: 'A conversation about your day-to-day work, your tools and where time disappears.' },
      { title: 'Strategy and Mapping', description: 'We map the chosen workflow, including triggers, decisions, actions, integrations and the points where you approve. You sign off on the plan before anything is built.' },
      { title: 'Development', description: 'We build the workflow in your accounts.' },
      { title: 'Testing', description: 'We run realistic examples through it, including odd cases and what happens when an app is unavailable.' },
      { title: 'Deployment', description: 'The workflow goes live, and you receive documentation and access.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'Not sure where to begin? The free automation audit looks at how work moves through your business today and tells you which task to automate first, and which ones are not worth automating yet.',
  },

  cta: {
    bandHeading: 'Find the first task worth handing over',
    heading: 'Book Your Free Automation Audit',
    description:
      'You do not need a big budget or a technical team to start. You need a clear view of which task is worth handing over first. We will review your processes and tools, recommend a starting point and tell you plainly what is not worth automating. There is no obligation to proceed.',
    primary: { text: 'Get Your Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Automation for Small Business: Common Questions',
  faqSideText: 'Not sure which task to hand over first? Book a free automation audit and we will help you choose.',
  faqs: [
    {
      question: 'What can a small business automate with AI?',
      answer:
        'Small businesses most often automate lead follow-up, appointment booking and reminders, answers to common customer questions, CRM updates, data entry and simple reporting. If a task is repetitive and follows rules, it is usually a good candidate, and each workflow is scoped to your tools.',
    },
    {
      question: 'How much does AI automation cost a small business?',
      answer:
        'It depends on the scope of the workflow, the platform it runs on and how much AI processing it uses. You pay platform and AI usage costs directly to the providers, and the free automation audit gives you a scoped view before you commit to anything.',
    },
    {
      question: 'Do I need a developer to automate my business?',
      answer:
        'No. We design, build and test the automations for you, and you provide knowledge of how your business runs. After launch you receive documentation and access so you understand what was built.',
    },
    {
      question: 'Which workflow should a small business automate first?',
      answer:
        'Start with the task that costs your team the most repeated effort or loses you the most opportunities, which is often lead follow-up or booking. The free audit helps you choose based on your actual processes rather than a generic list.',
    },
    {
      question: 'Will AI automation replace my staff?',
      answer:
        'The aim is to remove repetitive admin, not people. Your team keeps the conversations, judgment calls and customer relationships, and the automation handles the copying, reminding and first drafts.',
    },
    {
      question: 'Who owns the automations you build?',
      answer:
        'You do. The automations, accounts and documentation belong to your business, so what we build stays with your business.',
    },
    {
      question: 'What happens as my business grows?',
      answer:
        'Workflows can be extended or new ones added as your volume and team change. Many businesses begin with a single automation and build on it once they see how it fits their day.',
    },
  ],
};
