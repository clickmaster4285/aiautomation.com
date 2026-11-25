// content/products/industry-specific-ai-automation/ai-real-estate-automation.ts
// Copy + SEO for /products/industry-specific-ai-automation/ai-real-estate-automation.
//
// Accuracy rules for this page (keep them when editing):
// - Primary keyword is "real estate automation software" (with "AI real estate automation" as secondary). Do NOT
//   target "industry-specific AI solutions" (the parent owns it). The /industries/ai-automation-for-real-estate
//   overview focuses on lead follow-up; this page covers the whole deal from enquiry to past-client nurture.
// - Clickmasters is not selling a new real estate app: automations are built on the brokerage’s existing CRM and
//   tools, in its own accounts. CRMs named are only those on the site: Follow Up Boss, HubSpot, Salesforce,
//   GoHighLevel, Zoho, Pipedrive.
// - Lead sources, listing portals, calendars, forms and e-signature connect only "where each system offers an API or
//   integration, confirmed during discovery". Portal connections depend on what each source provides.
// - Agents approve offers, documents and client commitments; transaction coordinators sign off milestones.
//   Licensing, disclosure and fair housing obligations remain with the brokerage and are confirmed per project.
// - Example projects are "scoped per brokerage", not packaged features.
// - No statistics, response-time figures, conversion rates, prices, testimonials, case results, customer names,
//   "leading/best" claims, guarantees or ongoing-support promises. Monitoring and improvement after launch:
//   "scope and terms are agreed per project". The brokerage owns automations, accounts and documentation and pays
//   platform and AI usage costs directly.
//
// Inline links use [anchor text](/path). The contextual internal links are listed in `internalLinks` below.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_REAL_ESTATE_AUTOMATION_PATH = '/products/industry-specific-ai-automation/ai-real-estate-automation';

export const aiRealEstateAutomationSeo: HubSeo = {
  name: 'AI Real Estate Automation',
  path: AI_REAL_ESTATE_AUTOMATION_PATH,
  title: 'Real Estate Automation Software on Your CRM | Clickmasters',
  description:
    'Real estate automation software built on your existing CRM: lead follow-up, showings, transaction checklists and nurture, with agents approving.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'Industry-Specific AI Automation', path: '/products/industry-specific-ai-automation' },
    { name: 'AI Real Estate Automation', path: AI_REAL_ESTATE_AUTOMATION_PATH },
  ],
};

export const aiRealEstateAutomationKeywords = [
  'real estate automation software',
  'AI real estate automation',
  'real estate CRM automation',
  'real estate lead follow-up automation',
  'transaction coordination automation',
  'listing management automation',
  'showing scheduling automation',
  'brokerage back-office automation',
  'property enquiry automation',
  'Follow Up Boss automation',
  'real estate paperwork automation',
  'agent onboarding automation',
  'how to automate real estate follow-up',
  'can AI respond to property enquiries right away',
  'how do brokerages automate transaction coordination',
  'do I need new real estate software to automate',
  'automate showing requests from listing portals',
];

// The contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'automation tailored to specific sectors', href: '/products/industry-specific-ai-automation', section: 'What Is Real Estate Automation Software?' },
  { anchor: 'real estate industry overview', href: '/industries/ai-automation-for-real-estate', section: 'What Is Real Estate Automation Software?' },
  { anchor: 'how to choose AI automation tools for your business', href: '/products/general-ai-automation/ai-automation-tools-for-businesses', section: 'You Probably Don’t Need Another App (explainer)' },
  { anchor: 'real estate lead generation automation', href: '/solutions/lead-generation-automation/for-real-estate', section: 'From First Enquiry to an Up-to-Date CRM (spotlight)' },
  { anchor: 'AI chatbots for property enquiries', href: '/solutions/ai-chatbots/for-real-estate', section: 'From First Enquiry to an Up-to-Date CRM (spotlight)' },
  { anchor: 'showing and appointment booking automation', href: '/solutions/appointment-booking-automation/for-real-estate', section: 'From First Enquiry to an Up-to-Date CRM (spotlight)' },
  { anchor: 'CRM automation for real estate teams', href: '/solutions/crm-automation/for-real-estate', section: 'From First Enquiry to an Up-to-Date CRM (spotlight)' },
  { anchor: 'HubSpot automation work for brokerages', href: '/platforms/hubspot-automation-services', section: 'Example Projects, Scoped Per Brokerage (extras)' },
] as const;

export const aiRealEstateAutomation: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 4 },

  hero: {
    badge: 'AI Real Estate Automation',
    heading: 'AI Real Estate Automation Software Built on Your Existing CRM',
    accentWords: 3,
    subheading:
      'When brokerages search for real estate automation software, what most of them want isn’t another login. They want the CRM, website forms, calendars and e-signature tool they already pay for to work together, so agents stop copying details between them and no lead sits unanswered while everyone is out at showings.',
    primaryCta: { text: 'Book a Free Real Estate Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/business.jpg',
    imageAlt:
      'Illustration of a person in a suit working with connected digital gears, representing automations linking a brokerage’s existing CRM, calendar and document tools',
    imageWidth: 1200,
    imageHeight: 628,
    marquee: ['Lead response', 'Showing scheduling', 'Offer checklists', 'Transaction deadlines', 'CRM updates', 'Past-client nurture'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is Real Estate Automation Software?',
    paragraphs: [
      'Real estate automation software is a set of connected workflows and AI assistants that handle repetitive brokerage tasks, such as lead responses, showing scheduling, transaction checklists, CRM updates and past-client nurture, across the tools a team already uses. Agents and coordinators approve offers, documents and client commitments, while automation handles the routine steps.',
      'Clickmasters builds AI real estate automation on the stack your team already uses, covering the whole deal from first enquiry to past-client follow-up. This page sits within our [automation tailored to specific sectors](/products/industry-specific-ai-automation). Our [real estate industry overview](/industries/ai-automation-for-real-estate) focuses on lead follow-up. Here we go further, through showings, offers, transaction checklists, closing and nurture, and explain how each stage is built and who approves what.',
    ],
    problems: [
      'Leads arrive from everywhere. Portals, your website, ads, sign calls and referrals each land in a different inbox, often at night or on weekends.',
      'Agents are out when enquiries come in. A buyer asking about a listing at the weekend may wait until Monday for a reply.',
      'Follow-up depends on memory. Some leads get several touches, others get none, and the CRM rarely shows which.',
      'Showings take a string of messages between buyers, listing agents and sellers.',
      'Transaction deadlines live in spreadsheets. Inspection, appraisal and financing dates are tracked by hand, and documents get chased by email.',
      'Past clients go quiet once a deal closes, even though referrals and repeat business start there.',
    ],
  },

  explainer: {
    eyebrow: 'Your Stack',
    heading: 'You Probably Don’t Need Another App',
    paragraphs: [
      'Many teams assume automation means switching to a new all-in-one platform. Often it doesn’t. If your CRM is Follow Up Boss, HubSpot, Salesforce or GoHighLevel, the data is already there. What’s missing is the connective work.',
      'We build those connections as automations inside your accounts. You keep the tools your agents know, and you own the automations, accounts and documentation, paying platform and AI usage costs directly. If you’re still comparing platforms, our guide on [how to choose AI automation tools for your business](/products/general-ai-automation/ai-automation-tools-for-businesses) sets out the trade-offs plainly.',
    ],
    points: [
      { title: 'Lead Form to Contact', description: 'A lead form that creates the right contact in your CRM.' },
      { title: 'Showing Request to Calendar', description: 'A showing request that books a calendar slot.' },
      { title: 'Signed Document to Next Stage', description: 'A signed document that moves the deal to its next stage.' },
      { title: 'Tools Your Agents Know', description: 'Your CRM, calendar, forms and e-signature tool stay in place.' },
      { title: 'You Own the Result', description: 'Automations, accounts and documentation belong to your brokerage.' },
    ],
  },

  features: {
    eyebrow: 'What We Automate',
    heading: 'What We Automate for Brokerages and Teams',
    intro:
      'Each area below is a building block. Most brokerages start with lead response and add stages once the first workflow is running well.',
    items: [
      { title: 'Lead Response and Qualification', description: 'Quick, consistent replies and follow-up sequences for every lead source, with qualification and routing your team controls.' },
      { title: 'Property Enquiries', description: 'A website chat assistant answers common listing questions from your own listing data and books a showing or hands off to an agent.' },
      { title: 'Showing Scheduling', description: 'Buyers and renters book against real availability, with confirmations and reminders sent automatically.' },
      { title: 'CRM Updates', description: 'Every enquiry, showing, note and stage change written back to the CRM so the pipeline reflects reality.' },
      { title: 'Transaction Coordination', description: 'Contract dates become tasks and reminders, document requests go out and incoming files are checked against the checklist.' },
      { title: 'Document Field Extraction', description: 'AI extracts key fields from documents for staff to confirm.' },
      { title: 'Listing Admin', description: 'Listing descriptions prepared for agent review and status changes kept consistent across your systems.' },
      { title: 'Agent Onboarding and Nurture', description: 'Accounts set up and paperwork tracked for new hires, and past clients kept warm on messages your team approves.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'One Deal From Enquiry to Past-Client Nurture',
    intro:
      'Here is an example of how a single deal can move through an automated pipeline. The exact steps, rules and approval points are mapped with your team and approved before we build.',
    steps: [
      { title: 'Enquiry', description: 'Where the lead source delivers by email, webhook or API, the enquiry is captured, the CRM contact is created or updated, and the buyer gets a prompt reply with listing details and a next step.' },
      { title: 'Qualification and Routing', description: 'A few short questions capture timeline, financing status and areas of interest, and the lead is routed by your rules (area, price band, rotation or ownership).' },
      { title: 'Showing', description: 'The buyer picks a time from the agent’s available slots. Confirmations and reminders go to everyone involved, and the CRM is updated.' },
      { title: 'Offer', description: 'When the agent marks an offer as started, a document checklist and draft package are prepared. The agent reviews and approves everything before it goes out.' },
      { title: 'Transaction Checklist', description: 'Once under contract, key dates create tasks and reminders, missing documents trigger requests, and the transaction coordinator signs off each milestone.' },
      { title: 'Closing', description: 'Closing tasks, client updates and final document filing are tracked in one place, with the agent approving client-facing messages.' },
      { title: 'Past-Client Nurture', description: 'After closing, the client moves into a nurture sequence your team approves, with check-ins on dates such as the purchase anniversary.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Changes for Agents and Coordinators',
    intro: 'Routine admin moves in the background, so agents and coordinators spend their time on clients and decisions.',
    items: [
      { title: 'Consistent First Replies', description: 'Leads get a consistent first reply, even when every agent is busy.' },
      { title: 'More Time With Ready Clients', description: 'Agents spend more of their day with clients who are ready to move.' },
      { title: 'Deadlines at a Glance', description: 'Coordinators see deadlines and missing documents without digging through email.' },
      { title: 'A Current CRM', description: 'The CRM stays current, so managers can see the real state of the pipeline.' },
      { title: 'Past Clients Stay in Touch', description: 'Past clients hear from you after closing, which keeps referral conversations open.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Stage-by-Stage Approvals',
    heading: 'What Is Automated and Who Approves at Each Stage',
    paragraphs: [
      'Automation handles repetitive admin such as replies, reminders, CRM updates and document requests. Agents and coordinators keep the client relationships, approve offers and documents, and handle anything that needs judgment. Your team approves reply templates up front, and team leads set the routing rules.',
      'Licensing, disclosure and fair housing obligations remain with your brokerage. We build the workflows so required steps and approvals are explicit, and we confirm those requirements with you for each project.',
    ],
    aiDoes: [
      'Captures enquiries and sends the first reply',
      'Asks qualification questions and routes leads by your rules',
      'Books showings and sends confirmations and reminders',
      'Prepares offer checklists and draft packages',
      'Creates deadline tasks and document requests',
      'Runs client updates, filing and nurture sequences',
    ],
    peopleDo: [
      'Approve reply templates and routing rules',
      'Review and approve all offer documents',
      'Sign off each transaction milestone',
      'Approve client-facing messages',
    ],
  },

  spotlight: {
    eyebrow: 'Lead to Showing',
    heading: 'From First Enquiry to an Up-to-Date CRM',
    paragraphs: [
      'Quick, consistent replies and follow-up sequences for every lead source, with qualification questions and routing rules your team controls. See [real estate lead generation automation](/solutions/lead-generation-automation/for-real-estate) for how capture and routing are set up.',
      'A chat assistant can answer common listing questions from your own listing data, collect contact details and book a showing or hand the conversation to an agent. Our page on [AI chatbots for property enquiries](/solutions/ai-chatbots/for-real-estate) explains what they answer and what they pass on.',
      'Buyers and renters book against real availability, and confirmations and reminders go out without an agent texting back and forth. Learn more about [showing and appointment booking automation](/solutions/appointment-booking-automation/for-real-estate).',
      'Every enquiry, showing, note and stage change is written back to the CRM, so the pipeline reflects reality and reporting stays useful. Our [CRM automation for real estate teams](/solutions/crm-automation/for-real-estate) page covers Follow Up Boss automation and other CRMs in more depth.',
    ],
    points: [
      { title: 'Lead Response', description: 'A prompt, consistent first reply and follow-up for every lead source.' },
      { title: 'Website Enquiries', description: 'Listing questions answered from your data, with handoff to an agent.' },
      { title: 'Showings', description: 'Bookings against real availability, without back-and-forth texts.' },
      { title: 'Pipeline Hygiene', description: 'Every touchpoint written back to the CRM so reporting stays useful.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Examples',
      heading: 'Example Projects, Scoped Per Brokerage',
      accentWords: 3,
      paragraphs: [
        'These are examples of what we scope, not packaged features. A mid-sized brokerage on HubSpot connecting website forms, chat and deal stages would often do so alongside our [HubSpot automation work for brokerages](/platforms/hubspot-automation-services).',
        'Want to know which stage to automate first? The free audit reviews your current process and tools and recommends where to start.',
      ],
      points: [
        { title: 'A Small Team on Follow Up Boss', description: 'Automating portal lead replies, routing and showing reminders.' },
        { title: 'A Mid-Sized Brokerage on HubSpot', description: 'Connecting website forms, chat and deal stages.' },
        { title: 'A Team on Salesforce', description: 'Building a transaction checklist with deadline tasks and coordinator sign-offs.' },
        { title: 'A Leasing or Rental Office', description: 'Handling after-hours enquiries, viewing bookings and application document collection.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Real Estate Automation Software Is For',
    items: [
      { title: 'Brokerage Owners', description: 'Owners who want their existing tools to carry more of the deal admin.' },
      { title: 'Team Leads', description: 'Leads who want every enquiry answered and routed by rules they set.' },
      { title: 'Agents', description: 'Agents who want to spend less time copying details and more time with clients.' },
      { title: 'Transaction Coordinators', description: 'Coordinators tracking deadlines and documents across many deals.' },
      { title: 'Leasing and Rental Offices', description: 'Offices handling after-hours enquiries, viewings and application documents.' },
      { title: 'Growing Brokerages', description: 'Brokerages onboarding new agents and keeping past clients in touch.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Technologies and Integrations',
    paragraphs: [
      'We build on your existing stack. Lead sources, calendars, forms and e-signature tools are connected where each system offers an API or integration, confirmed during discovery. Portal and listing data connections depend on what each source provides.',
      'AI models are used for drafting replies, summarizing conversations and extracting document fields, and communication runs through Twilio for SMS and calls, Gmail or Outlook for email, and Slack or Microsoft Teams for internal alerts.',
    ],
    groups: [
      { label: 'CRMs', items: ['Follow Up Boss', 'HubSpot', 'Salesforce', 'GoHighLevel', 'Zoho', 'Pipedrive'] },
      { label: 'Lead Sources and Tools (Where an API Exists)', items: ['Lead sources', 'Calendars', 'Forms', 'E-signature'] },
      { label: 'Automation Platforms', items: ['Zapier', 'Make', 'n8n'] },
      { label: 'Communication', items: ['Twilio', 'Gmail', 'Outlook', 'Slack', 'Microsoft Teams'] },
      { label: 'AI Models', items: ['OpenAI GPT', 'Anthropic Claude', 'Google Gemini'] },
      { label: 'Data', items: ['Airtable', 'SQL databases', 'REST APIs', 'Webhooks'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Brokerages Work With Clickmasters',
    intro: 'We automate the systems your team already uses, with agents and coordinators kept in charge of the deal.',
    items: [
      { title: 'You Own the Result', description: 'Automations, accounts and documentation belong to your brokerage.' },
      { title: 'Agents Stay in Charge of the Deal', description: 'Offers, documents and client commitments are always approved by a person, and exceptions go to a person with context.' },
      { title: 'Your Tools Stay in Place', description: 'We automate the systems your team already uses rather than asking everyone to switch.' },
      { title: 'The Audit Is Free and Honest', description: 'It tells you what’s worth automating first, and what isn’t.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How a Real Estate Automation Project Runs',
    intro: 'Every project follows our six published steps. You approve the plan before we build.',
    steps: [
      { title: 'Discovery', description: 'We review how leads arrive, how deals move and where your CRM falls out of date, and check which tools offer an API.' },
      { title: 'Strategy and Mapping', description: 'We map triggers, decision points, actions, integrations and approval points for each deal stage.' },
      { title: 'Development', description: 'We build the workflows in your CRM and automation accounts.' },
      { title: 'Testing', description: 'We test real scenarios, including edge cases and failure scenarios such as duplicate leads, cancelled showings and missed deadlines.' },
      { title: 'Deployment', description: 'The automations go live in your environment, with documentation and access handed to your team.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'The free audit looks at your current process and tools, with no obligation to proceed.',
  },

  cta: {
    bandHeading: 'Want to know which stage to automate first?',
    heading: 'Book a Free Real Estate Automation Audit',
    description:
      'If leads, showings and transaction admin are taking your agents’ time, the audit is the place to start. We look at your current process and tools and tell you what to automate first, with no obligation to proceed.',
    primary: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Real Estate Automation Software: Common Questions',
  faqSideText: 'Not sure whether to buy a new app or automate the tools you have? Book a free audit and we will look at it with you.',
  faqs: [
    {
      question: 'Do I need new real estate software to automate?',
      answer:
        'Usually not. Most brokerages already have a CRM, calendar, forms and e-signature tool, and automation connects them so data moves without manual copying. We build inside your existing accounts, where each system offers an API or integration.',
    },
    {
      question: 'Can AI respond to property enquiries straight away?',
      answer:
        'Yes, an AI assistant can reply as soon as an enquiry is captured, whether it comes through your website chat or a lead source that delivers by email, webhook or API. It answers common questions from your listing data, collects details and books a showing or hands off to an agent. Your team approves the reply templates and the limits on what it answers.',
    },
    {
      question: 'How do brokerages automate transaction coordination?',
      answer:
        'They turn the contract timeline into automated tasks, reminders and document requests tied to each deal in the CRM. Incoming documents are checked against a checklist, and the transaction coordinator signs off each milestone. The automation tracks the work; people make the decisions.',
    },
    {
      question: 'What is a practical way to automate real estate follow-up?',
      answer:
        'Start with one lead source and build a consistent first reply, a short qualification step and routing rules inside your CRM. Add follow-up sequences and showing booking next, then extend to past-client nurture. Keeping agents able to step in at any point keeps follow-up personal.',
    },
    {
      question: 'Does it work with Follow Up Boss?',
      answer:
        'Follow Up Boss is one of the real estate CRMs we work with, alongside HubSpot and Salesforce. The exact connections depend on the API and integrations available for your account and the other tools involved, which we confirm during discovery.',
    },
    {
      question: 'Will automation replace my agents or transaction coordinator?',
      answer:
        'No. Automation handles repetitive admin such as replies, reminders, CRM updates and document requests. Agents and coordinators keep the client relationships, approve offers and documents, and handle anything that needs judgment.',
    },
    {
      question: 'Who owns the automations?',
      answer:
        'Your brokerage owns the automations, accounts and documentation. You pay platform and AI usage costs directly to the providers.',
    },
  ],
};
