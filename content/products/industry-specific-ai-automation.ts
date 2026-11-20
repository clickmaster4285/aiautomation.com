// content/products/industry-specific-ai-automation.ts
// Copy + SEO for /products/industry-specific-ai-automation (category parent).
//
// Accuracy rules for this page (keep them when editing):
// - Primary keyword is "industry-specific AI solutions". Do NOT target the child primaries: "medical practice
//   automation" (healthcare child), "real estate automation software" (real estate child), "AI logistics
//   automation" (logistics child), nor the education and legal children's primaries.
// - Same building blocks in every sector (workflows, AI that reads and drafts, chat and voice assistants, document
//   extraction, system connections); what changes is data sensitivity, approval points, core systems and documents.
// - Clinical, legal and financial decisions stay with people. Automation handles administration and preparation.
// - Compliance phrasing only: "we design with privacy in mind; formal compliance such as HIPAA or FERPA is a shared
//   responsibility that depends on your specific setup and is confirmed for your project". No "HIPAA-compliant",
//   "FERPA-compliant", SOC 2 or any certification claim.
// - Core industry systems (EHR, real estate CRM, TMS, student information system, practice management / matter
//   management) connect only "where they offer an API or integration, confirmed during discovery". No named
//   integration is promised as standard.
// - Logistics is administrative and operational only: no route optimization or warehouse robotics. Education has no
//   teaching or grading tools. Legal automation gives no legal advice.
// - Sector use cases are examples "scoped per project", not packaged features.
// - No statistics, percentages, time saved, prices, testimonials, case results, customer names, "leading/best"
//   claims, guarantees or ongoing-support promises. Monitoring and improvement after launch: "scope and terms are
//   agreed per project". The client owns automations, accounts and documentation and pays usage costs directly.
//
// Inline links use [anchor text](/path). This page contains the contextual internal links listed below
// (one to each of the five sector children), plus a `related` grid of the five children.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const INDUSTRY_SPECIFIC_AI_AUTOMATION_PATH = '/products/industry-specific-ai-automation';

export const industrySpecificAiAutomationSeo: HubSeo = {
  name: 'Industry-Specific AI Automation',
  path: INDUSTRY_SPECIFIC_AI_AUTOMATION_PATH,
  title: 'Industry-Specific AI Solutions for Operations | Clickmasters',
  description:
    'Industry-specific AI solutions for healthcare, real estate, logistics, education and legal teams, built around your sector’s rules and approvals. Book an audit.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'Industry-Specific AI Automation', path: INDUSTRY_SPECIFIC_AI_AUTOMATION_PATH },
  ],
};

export const industrySpecificAiAutomationKeywords = [
  'industry-specific AI solutions',
  'vertical AI automation',
  'AI automation for regulated industries',
  'sector-specific workflow automation',
  'industry AI use cases',
  'AI solutions for healthcare, legal and real estate',
  'AI for logistics companies',
  'AI for schools and colleges',
  'industry automation partner',
  'administrative automation by industry',
  'compliance-aware automation',
  'AI automation built for a specific industry',
  'sector-specific AI workflows for regulated data',
  'industry AI use cases for small and mid-sized businesses',
  'administrative automation for clinics, brokerages, freight forwarders, schools and law firms',
];

// The contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI automation agency', href: '/', section: 'What Are Industry-Specific AI Solutions?' },
  { anchor: 'AI healthcare automation for practices and clinics', href: '/products/industry-specific-ai-automation/ai-healthcare-automation', section: 'The Sectors We Build For (spotlight)' },
  { anchor: 'real estate automation built on your CRM', href: '/products/industry-specific-ai-automation/ai-real-estate-automation', section: 'The Sectors We Build For (spotlight)' },
  { anchor: 'AI logistics automation for freight and 3PL teams', href: '/products/industry-specific-ai-automation/ai-logistics-automation', section: 'The Sectors We Build For (spotlight)' },
  { anchor: 'education administration automation', href: '/products/industry-specific-ai-automation/ai-education-automation', section: 'The Sectors We Build For (spotlight)' },
  { anchor: 'legal workflow automation for firms and in-house teams', href: '/products/industry-specific-ai-automation/ai-legal-automation', section: 'The Sectors We Build For (spotlight)' },
  { anchor: 'all the sectors we work with', href: '/industries', section: 'Other Sectors (extras)' },
  { anchor: 'general AI automation for business', href: '/products/general-ai-automation', section: 'Other Sectors (extras)' },
  { anchor: 'browse solutions by business function', href: '/solutions', section: 'Where Automation Prepares and People Decide' },
] as const;

export const industrySpecificAiAutomation: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 3 },

  hero: {
    badge: 'Industry-Specific AI Automation',
    heading: 'Industry-Specific AI Solutions Built Around How Your Sector Works',
    accentWords: 4,
    subheading:
      'A booking reminder at a clinic and a showing reminder at a brokerage use the same kind of workflow. What differs is everything around it: who is allowed to see the data, who has to approve the next step, and which systems hold the records. Clickmasters accounts for those differences from the start.',
    primaryCta: { text: 'Book a Free Industry Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/aiworkflow.webp',
    imageAlt:
      'Illustration of a multi-step automated workflow across connected business apps with AI steps, representing shared automation building blocks configured for different sectors',
    imageWidth: 2560,
    imageHeight: 1350,
    marquee: ['Healthcare administration', 'Real estate pipelines', 'Freight and 3PL offices', 'School admissions', 'Law firm intake', 'Human approval points'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Are Industry-Specific AI Solutions?',
    paragraphs: [
      'Industry-specific AI solutions are automations, AI agents and integrations designed around one sector’s workflows, data rules, approval points and core systems, rather than generic templates. They use common building blocks, such as workflows, chatbots, voice agents and document processing, but configure who approves, what data is touched and how exceptions reach people.',
      'As an [AI automation agency](/), Clickmasters designs, builds and maintains automations for operations in healthcare, real estate, logistics, education and legal, inside the tools each sector already uses.',
    ],
    problems: [
      'Patient records, student records and client matters carry different expectations from a property enquiry or a shipment status.',
      'The line between “automation prepares” and “a person decides” sits in a different place in every sector.',
      'Core systems such as an EHR, a TMS or a student information system each connect differently.',
      'Referrals, bills of lading, enrollment forms and engagement letters each need their own extraction and checks.',
      'A workflow that ignores sector rules creates risk and rework.',
    ],
  },

  explainer: {
    eyebrow: 'Why Sector Matters',
    heading: 'Why the Same Automation Needs Different Rules in Each Sector',
    paragraphs: [
      'Most automation projects draw on the same small set of building blocks: rules-based workflows, AI that reads and drafts, chat and voice assistants, document extraction, and connections between systems.',
      'Vertical AI automation is less about new technology and more about getting the details right for the sector. These are the details that change.',
    ],
    points: [
      { title: 'Data Sensitivity', description: 'Patient records, student records and client matters carry different expectations from a property enquiry or a shipment status.' },
      { title: 'Approval Points', description: 'Clinical, legal and financial decisions always stay with people. Where the line sits between “automation prepares” and “a person decides” changes by sector.' },
      { title: 'Core Systems', description: 'An EHR, a real estate CRM, a TMS, a student information system and a practice management system each connect differently, and only where they offer an API or integration, confirmed during discovery.' },
      { title: 'Vocabulary and Documents', description: 'Referrals, bills of lading, enrollment forms and engagement letters each need their own extraction and checks.' },
    ],
  },

  features: {
    eyebrow: 'Building Blocks',
    heading: 'The Building Blocks Behind Every Sector',
    intro:
      'The same building blocks appear in every sector. What we configure for yours is who approves, what data is touched and how exceptions reach people.',
    items: [
      { title: 'Rules-Based Workflows', description: 'Predictable steps such as reminders, follow-ups and record updates, run on triggers your team defines.' },
      { title: 'AI That Reads and Drafts', description: 'Reads incoming messages and documents and drafts replies or summaries for staff to review.' },
      { title: 'AI Agents', description: 'Multi-step tasks carried across connected systems, within limits and approval points set for the sector.' },
      { title: 'Chat and Voice Assistants', description: 'Enquiries and routine calls answered, details captured and anything else passed to a person.' },
      { title: 'Document Extraction', description: 'Key fields pulled from sector documents such as referrals, bills of lading, enrollment forms and engagement letters.' },
      { title: 'System Connections', description: 'Data moved between the systems you already run, where they offer an API or integration.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How a Common Workflow Is Adapted to Your Sector',
    intro:
      'A reminder, an intake form or a document check starts as the same kind of workflow everywhere. These are the decisions that turn it into one that fits your sector.',
    steps: [
      { title: 'Start From the Task', description: 'We pick a repetitive, rules-based task that does not need judgment at every step.' },
      { title: 'Limit the Data', description: 'The workflow is given only the data it needs, with access restricted to the people who should see it.' },
      { title: 'Set Approval Points', description: 'Sector-specific sign-offs are mapped, so clinical, legal and financial decisions stay with people.' },
      { title: 'Connect Core Systems', description: 'Sector systems are connected where they offer an API or integration; otherwise the workflow prepares information for staff to enter.' },
      { title: 'Handle Sector Documents', description: 'Extraction and checks are set up for the documents and vocabulary your sector uses.' },
      { title: 'Route Exceptions', description: 'Anything unusual reaches a person with context, not a dead end.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Designing for Your Sector Changes',
    intro:
      'Designing for the sector from the start avoids the risk and rework of a workflow that ignores its rules.',
    items: [
      { title: 'Clear Sign-Offs', description: 'Every workflow shows where automation prepares and where a person decides.' },
      { title: 'Data Kept in Bounds', description: 'Each workflow touches only the data it needs, with access limited to the right people.' },
      { title: 'Your Systems Stay in Place', description: 'Automations connect the tools your sector already uses instead of replacing them.' },
      { title: 'Fewer Dead Ends', description: 'Exceptions reach a person with context, so nothing stalls silently.' },
      { title: 'Less Rework', description: 'Sector rules are mapped and tested before launch rather than patched afterwards.' },
      { title: 'A Clear First Project', description: 'The free audit identifies which tasks are worth automating first, and which aren’t.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Human in the Loop',
    heading: 'Where Automation Prepares and People Decide',
    paragraphs: [
      'Clinical, legal and financial decisions always stay with people. Automation handles administration and preparation: it captures, sorts, drafts, reminds and checks. People approve where judgment is needed, and exceptions reach a person with context, not a dead end.',
      'Where that line sits is mapped per sector and approved by you before anything is built. If you’d rather start from a business function, such as lead generation, customer support or reporting, you can [browse solutions by business function](/solutions).',
    ],
    aiDoes: [
      'Captures and structures incoming requests',
      'Extracts key fields from sector documents',
      'Sends reminders and follow-ups',
      'Drafts routine replies for staff to review',
      'Updates connected systems where an API exists',
      'Flags exceptions to a person with context',
    ],
    peopleDo: [
      'Make clinical, legal and financial decisions',
      'Approve offers, documents and client commitments',
      'Handle exceptions and complaints',
      'Approve the plan before anything is built',
    ],
  },

  spotlight: {
    eyebrow: 'Sectors',
    heading: 'The Sectors We Build For',
    paragraphs: [
      'Each sector has its own page with workflows, approval tables, integrations and FAQs. In healthcare, that means front desk, patient intake, scheduling, reminders, referral processing, billing paperwork and after-hours calls, with clinical decisions kept with clinicians and formal compliance such as HIPAA treated as a shared responsibility confirmed for your project. Read more about [AI healthcare automation for practices and clinics](/products/industry-specific-ai-automation/ai-healthcare-automation).',
      'In real estate, it covers the full deal pipeline, from enquiry and showing to offer, transaction checklist, closing and past-client nurture, built on CRMs such as Follow Up Boss, HubSpot or Salesforce rather than a new app. Agents approve offers and documents. See our page on [real estate automation built on your CRM](/products/industry-specific-ai-automation/ai-real-estate-automation).',
      'In logistics, it is the office side of freight and 3PL: freight documents, shipment status updates, carrier emails, quotes, invoicing and exception alerts. This is administrative and operational workflow automation, not route optimization or warehouse robotics. Explore [AI logistics automation for freight and 3PL teams](/products/industry-specific-ai-automation/ai-logistics-automation).',
      'In education, it covers admissions enquiries, enrollment follow-up, scheduling, reminders, reporting and staff admin, with no teaching or grading tools; student data privacy, such as FERPA, is a shared responsibility confirmed per project. Learn about [education administration automation](/products/industry-specific-ai-automation/ai-education-automation). In legal, it follows the matter lifecycle from enquiry to billing admin, with lawyers approving all legal output and no legal advice given. Read about [legal workflow automation for firms and in-house teams](/products/industry-specific-ai-automation/ai-legal-automation).',
    ],
    points: [
      { title: 'Healthcare', description: 'Starts with scheduling, intake, reminders and referrals. Front desk and clinicians approve.' },
      { title: 'Real Estate', description: 'Starts with lead response, showings and transaction checklists. Agents and transaction coordinators approve.' },
      { title: 'Logistics', description: 'Starts with status updates, freight documents and carrier emails. Operations and billing staff approve.' },
      { title: 'Education', description: 'Starts with enquiries, admissions and enrollment follow-up. Admissions and administrative staff approve.' },
      { title: 'Legal', description: 'Starts with intake, conflict-check preparation and engagement. Lawyers and practice staff approve.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Other Sectors',
      heading: 'Beyond the Five Sector Pages',
      accentWords: 3,
      paragraphs: [
        'We also build for e-commerce, SaaS, finance and accounting, and professional services. See [all the sectors we work with](/industries).',
        'If your work isn’t tied to one industry, our category on [general AI automation for business](/products/general-ai-automation) is organized by situation instead. The same process applies either way: we map your workflows and approval points, then build inside your tools.',
      ],
      points: [
        { title: 'E-commerce', description: 'Store, order and support workflows, scoped per project.' },
        { title: 'SaaS', description: 'Operational workflows around sales, support and accounts, scoped per project.' },
        { title: 'Finance and Accounting', description: 'Administrative and document workflows, with financial decisions kept with people.' },
        { title: 'Professional Services', description: 'Client intake, onboarding and admin workflows, scoped per project.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Industry-Specific AI Solutions Are For',
    items: [
      { title: 'Medical Practices and Clinics', description: 'Practice owners and office managers whose front desk runs on repeat administrative tasks.' },
      { title: 'Brokerages and Real Estate Teams', description: 'Owners and team leads who want their existing CRM to carry more of the deal admin.' },
      { title: 'Freight Forwarders, 3PLs and Carriers', description: 'Operations and office managers buried in documents, status questions and carrier emails.' },
      { title: 'Schools, Colleges and Training Providers', description: 'Admissions and administrative teams handling enquiries, enrollment and staff admin.' },
      { title: 'Law Firms and In-House Teams', description: 'Practice staff managing intake, engagement, client updates and billing admin.' },
      { title: 'Operations Leaders in Other Sectors', description: 'Teams in e-commerce, SaaS, finance and professional services with rules-based admin to automate.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Connecting Your Sector’s Core Systems',
    paragraphs: [
      'Sector-specific automations can connect to your core industry software where your system offers an API or integration, which we confirm during discovery. We don’t promise any named EHR, TMS, student information system or practice management connection as standard. Where no usable connection exists, the workflow prepares information for staff to enter.',
      'Around those systems, we build inside your accounts with the automation platforms, CRMs, AI models and communication tools you already use.',
    ],
    groups: [
      { label: 'Sector Systems (Where an API Exists)', items: ['EHR and practice management', 'Real estate CRMs', 'TMS', 'Student information systems', 'Matter management'] },
      { label: 'Automation Platforms', items: ['Zapier', 'Make', 'n8n'] },
      { label: 'CRMs', items: ['Follow Up Boss', 'HubSpot', 'Salesforce', 'Zoho', 'GoHighLevel'] },
      { label: 'AI Models', items: ['OpenAI GPT', 'Claude', 'Gemini', 'Open-source models'] },
      { label: 'Communication', items: ['Gmail', 'Outlook', 'Slack', 'Microsoft Teams', 'Twilio'] },
      { label: 'Connections', items: ['REST APIs', 'Webhooks', 'SQL databases'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'What Stays the Same in Every Sector',
    intro: 'Sector rules change, but how we work doesn’t.',
    items: [
      { title: 'People Approve Where Judgment Is Needed', description: 'Exceptions reach a person with context, not a dead end.' },
      { title: 'We Build Inside Your Tools', description: 'Automations run in your accounts and connect the systems you already use.' },
      { title: 'You Own the Result', description: 'You own the automations, accounts and documentation, and pay platform and AI usage costs directly.' },
      { title: 'Use Cases Are Scoped Per Project', description: 'The examples on our sector pages are starting points, not packaged features.' },
      { title: 'Privacy Is Designed In', description: 'We limit each workflow to the data it needs. Formal compliance is a shared responsibility that depends on your setup and is confirmed for your project.' },
      { title: 'An Honest Audit First', description: 'The free audit tells you which tasks are worth automating first, and which aren’t.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How an Industry Automation Project Runs',
    intro: 'Every sector follows the same six published steps, adapted to its rules. You approve the plan before anything is built.',
    steps: [
      { title: 'Discovery', description: 'We learn how the work is done today, which systems hold the data and which offer an API.' },
      { title: 'Strategy and Mapping', description: 'We map triggers, decision points, actions, integrations and approval points, including sector-specific sign-offs.' },
      { title: 'Development', description: 'We build in your accounts and tools.' },
      { title: 'Testing', description: 'We test edge cases and failure scenarios that matter in your sector.' },
      { title: 'Deployment', description: 'The automation goes live in your environment, with documentation and access handed over.' },
      { title: 'Monitoring and Improvement', description: 'Monitoring and improvement after launch is part of our process; scope and terms are agreed per project.' },
    ],
    note: 'A good first project is repetitive, follows rules and doesn’t need judgment at every step.',
  },

  cta: {
    bandHeading: 'Not sure which workflows to start with?',
    heading: 'Find Out What’s Worth Automating in Your Sector',
    description:
      'A good first project is repetitive, follows rules and doesn’t need judgment at every step. The free audit reviews your processes and tools and identifies it with you, with no obligation to proceed.',
    primary: { text: 'Book a Free Automation Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  related: {
    eyebrow: 'Sector Pages',
    heading: 'Explore Automation by Sector',
    intro: 'Each sector page covers workflows, approval points, integrations and FAQs for that industry.',
    items: [
      { title: 'AI Healthcare Automation', description: 'Front desk, intake, scheduling, reminders, referrals and after-hours calls for practices and clinics.', href: '/products/industry-specific-ai-automation/ai-healthcare-automation' },
      { title: 'AI Real Estate Automation', description: 'Lead response, showings, transaction checklists and nurture, built on your existing CRM.', href: '/products/industry-specific-ai-automation/ai-real-estate-automation' },
      { title: 'AI Logistics Automation', description: 'Freight documents, status updates, carrier emails and invoicing for forwarders, 3PLs and carriers.', href: '/products/industry-specific-ai-automation/ai-logistics-automation' },
      { title: 'AI Education Automation', description: 'Admissions enquiries, enrollment follow-up, scheduling and staff admin for schools and colleges.', href: '/products/industry-specific-ai-automation/ai-education-automation' },
      { title: 'AI Legal Automation', description: 'Intake, conflict-check preparation, engagement letters and billing admin for law firms.', href: '/products/industry-specific-ai-automation/ai-legal-automation' },
    ],
  },

  faqHeading: 'Industry-Specific AI Solutions: Common Questions',
  faqSideText: 'Not sure whether your sector’s workflows are a good fit? Book a free audit and we will check with you.',
  faqs: [
    {
      question: 'Why does industry matter for AI automation?',
      answer:
        'Industry decides who can see the data, who has to approve each step and which systems need to connect. The building blocks are similar across sectors, but a workflow that ignores those rules creates risk and rework. Designing for the sector from the start avoids that.',
    },
    {
      question: 'Which industries benefit most from AI automation?',
      answer:
        'Any sector with repetitive, rules-based administrative work can benefit, which is why healthcare, real estate, logistics, education and legal teams are common starting points. The deciding factor is the task rather than the industry. If a task is repetitive and follows rules, it is usually a good candidate.',
    },
    {
      question: 'Is industry-specific automation more expensive than general automation?',
      answer:
        'Not necessarily. Cost depends on scope, the number of systems involved, the platforms used and AI usage, which you pay for directly. Sector rules can add mapping and testing work, and the free audit helps scope that before you commit.',
    },
    {
      question: 'How do you handle regulated data?',
      answer:
        'We design with privacy in mind, limit each workflow to the data it needs, restrict access and, where appropriate, keep data in your environment. Formal compliance such as HIPAA or FERPA is a shared responsibility that depends on your specific setup and is confirmed for your project. Decisions that carry clinical, legal or financial weight stay with people.',
    },
    {
      question: 'What if my industry isn’t listed here?',
      answer:
        'We work with other sectors too, including e-commerce, SaaS, finance and accounting, and professional services. The same process applies: we map your workflows and approval points, then build inside your tools. The free audit is a good way to check fit.',
    },
    {
      question: 'Do sector-specific automations connect to our core industry software?',
      answer:
        'They can, where your system offers an API or integration, which we confirm during discovery. We don’t promise any named EHR, TMS, student information system or practice management connection as standard. Where no usable connection exists, the workflow prepares information for staff to enter.',
    },
  ],
};
