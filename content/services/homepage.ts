// content/services/homepage.ts
// Homepage (landing page) content.
// Source: "Homepage Developer Handover — clickmastersaiautomation.com" (11 Nov 2026), section 4.
// Use the copy exactly as written. Do not add superlatives ("best", "trusted", "expert"),
// counters, statistics, case studies or testimonials that are not approved in `signOff`.

// ── OWNER SIGN-OFF (handover section 5) ──
// Each flag stays `false` until the business owner confirms the item.
// While a flag is `false`, the statement that depends on it is left out of the page.
export const signOff = {
  // S-3: "Part of Clickmasters, a digital agency operating for 13 years" and the
  // relationship between the two businesses. Controls the hero trust line.
  // (The "part of Clickmasters" FAQ was approved separately and is always shown.)
  parentAgencyYears: false,
  // S-7: "You own every system we build". Controls the hero intro clause.
  // (The "Who owns the automation" FAQ was approved separately and is always shown.)
  ownershipTerms: false,
  // S-9: monitoring and maintenance are offered on every project.
  // Controls the "Support after launch" card.
  supportAfterLaunch: false,
  // H-07: the demo case study page has no bracketed placeholders left.
  // Controls the "See the build" link on the demo card.
  demoCaseStudyReady: false,
};

const DEMO_CASE_STUDY_URL = '/case-studies/ai-receptionist-lead-response-automation';
const AUDIT_URL = '/free-automation-audit';

export const homepageData = {
  // ── METADATA (2.1) ──
  meta: {
    siteUrl: 'https://clickmastersaiautomation.com/',
    title: 'AI Automation Agency for Growing Businesses | Clickmasters',
    description:
      'Clickmasters is an AI automation agency that builds AI agents, workflow automation and system integrations for sales, support and operations. Free audit.',
    ogSiteName: 'Clickmasters AI Automation',
    ogTitle: 'AI Automation Agency for Growing Businesses | Clickmasters',
    ogDescription:
      'AI agents, workflow automation and system integrations for sales, support and operations teams. Book a free automation audit.',
  },

  // ── 4.1 HERO ──
  hero: {
    badge: 'AI Automation Agency',
    headline: 'AI Automation Agency',
    headlineAccent: 'for Sales, Support and Operations Teams',
    subheading: signOff.ownershipTerms
      ? 'Clickmasters AI Automation designs, builds and maintains AI agents, workflow automations and system integrations for growing businesses. We work on n8n, Make, Zapier, HubSpot and Salesforce, and you own every system we build.'
      : 'Clickmasters AI Automation designs, builds and maintains AI agents, workflow automations and system integrations for growing businesses. We work on n8n, Make, Zapier, HubSpot and Salesforce, and you own every system we build.',
    cta: { text: 'Book a Free Automation Audit', link: AUDIT_URL, primary: true },
    secondaryCta: { text: 'See Our Services', link: '/services', primary: false },
    note: signOff.parentAgencyYears
      ? 'Part of Clickmasters, a digital agency operating for 13 years.'
      : undefined,
  },

  // ── 4.2 MARQUEE ──
  marquee: ['Workflow automation', 'AI agents', 'Chatbots and voice', 'Systems you own'],

  // ── 4.3 WHAT WE AUTOMATE ──
  whatToAutomate: {
    label: 'What We Automate',
    heading: 'What can you automate with AI?',
    body: 'Most growing teams lose hours to work that follows the same steps every time: moving lead details into a CRM, answering the same questions, copying figures between systems. We replace those steps with automations and AI agents that run inside the tools you already use, with a person in the loop wherever a decision needs judgment.',
    listHeading: 'Common starting points',
    items: [
      'Lead capture and qualification',
      'CRM and database updates',
      'Email and follow-up sequences',
      'Customer enquiries and support tickets',
      'Appointment scheduling',
      'Data entry and validation',
      'Document and invoice processing',
      'Reporting and dashboards',
      'Internal approvals and onboarding',
      'Proposal and content drafts',
    ],
    closingLine: 'If a task is repetitive and follows rules, it is usually a good candidate.',
  },

  // ── 4.4 SERVICES ──
  services: {
    label: 'What We Build',
    heading: 'AI automation services',
    subheading:
      'We cover the full cycle: finding the right processes, building the automation, connecting it to your systems and maintaining it after launch.',
    items: [
      {
        title: 'AI Workflow Automation',
        description:
          'We design workflows that connect your tools, data and teams, so information moves without manual handoffs.',
        link: '/services/ai-workflow-automation',
      },
      {
        title: 'AI Agent Development',
        description:
          'We build AI agents that carry out multi-step tasks, such as qualifying a lead or processing a request, and pass exceptions to your team.',
        link: '/services/ai-agent-development',
      },
      {
        title: 'Business Process Automation',
        description:
          'We map repetitive operational work across departments and automate the steps that follow clear rules.',
        link: '/services/business-process-automation',
      },
      {
        title: 'AI Chatbots and Customer Support',
        description:
          'We build chatbots that answer common questions, resolve routine issues and route complex tickets to the right person.',
        link: '/services/ai-chatbots',
      },
      {
        title: 'Sales Automation',
        description:
          'We automate lead capture, qualification and follow-up, so your sales team spends its time on conversations, not data entry.',
        link: '/solutions/sales-automation',
      },
      {
        title: 'Marketing Automation',
        description:
          'We connect AI to your marketing stack to run lead nurturing and campaign follow-ups on schedule.',
        link: '/solutions/marketing-automation',
      },
      {
        title: 'Document and Data Automation',
        description:
          'We extract data from invoices, forms and other documents and send it to the systems that need it.',
        link: '/solutions/document-automation',
      },
      {
        title: 'Custom AI Development and Integration',
        description:
          'We connect AI to your CRM, ERP and internal systems through APIs, and build custom components where off-the-shelf tools fall short.',
        link: '/services/custom-ai-development',
      },
    ],
  },

  // ── 4.5 MID-PAGE CALL TO ACTION ──
  readyToAutomate: {
    heading: 'Not sure where to start?',
    subheading:
      'In the free automation audit we review your current processes and tools, then tell you which tasks are worth automating first and which are not. There is no obligation to proceed.',
    cta: { text: 'Book Your Free Automation Audit', link: AUDIT_URL, primary: true },
  },

  // ── 4.6 BENEFITS ──
  benefits: {
    label: 'Why Automate',
    heading: 'What changes when routine work is automated',
    items: [
      {
        title: 'Less manual work',
        description: 'Repetitive steps run on their own, so your team gets those hours back.',
      },
      {
        title: 'Faster responses',
        description: 'Leads and customers get a first reply without waiting for someone to be free.',
      },
      {
        title: 'Fewer errors',
        description: 'Rule-based tasks are done the same way every time.',
      },
      {
        title: 'Room to grow',
        description: 'You can handle more volume without adding the same amount of headcount.',
      },
      {
        title: 'Cleaner data',
        description: 'Your CRM and records are updated as part of the workflow, not afterwards.',
      },
    ],
  },

  // ── 4.7 EXAMPLE WORKFLOW ──
  exampleWorkflow: {
    label: 'Example Workflow',
    heading: 'From form submission to booked meeting',
    body: 'This illustration shows a typical lead workflow. A form submission triggers an AI agent that qualifies the lead, updates the CRM, sends a follow-up and offers a booking link. Leads that fall outside the rules are passed to a person.',
    panelTitle: 'Illustration: lead response workflow',
    steps: [
      'Website form',
      'AI qualification',
      'CRM update',
      'Follow-up email',
      'Calendar booking',
      'Sales team',
    ],
  },

  // ── 4.8 PROCESS ──
  process: {
    label: 'Our Process',
    heading: 'How we work',
    subheading:
      'Every project follows the same six steps, and you approve the plan before anything is built.',
    steps: [
      {
        number: '1',
        title: 'Discovery',
        description:
          'We review your current processes, tools and pain points to find the best automation opportunities.',
      },
      {
        number: '2',
        title: 'Strategy and mapping',
        description:
          'We map the workflow: triggers, decision points, actions, integrations and the points where a person approves.',
      },
      {
        number: '3',
        title: 'Development',
        description:
          'We build the automation, whether that is a workflow, an AI agent or a custom integration.',
      },
      {
        number: '4',
        title: 'Testing',
        description: 'We test before launch, including edge cases and failure scenarios.',
      },
      {
        number: '5',
        title: 'Deployment',
        description:
          'We launch into your live environment and hand over documentation and access.',
      },
      {
        number: '6',
        title: 'Monitoring and improvement',
        description:
          'We monitor performance after launch and refine the system as your business changes.',
      },
    ],
  },

  // ── 4.9 INTEGRATIONS AND PLATFORMS ──
  integrations: {
    label: 'Integrations',
    heading: 'Built on the systems you already use',
    subheading:
      'We connect automation to your existing software, so your team keeps working in the tools it knows.',
    categories: [
      {
        title: 'CRM integration',
        description:
          'Automate lead records, follow-ups, customer updates and sales tasks inside your CRM.',
      },
      {
        title: 'ERP integration',
        description: 'Connect AI to your ERP to simplify finance, inventory, reporting and operations.',
      },
      {
        title: 'API and SaaS integration',
        description: 'Connect your apps so they share data and trigger each other.',
      },
      {
        title: 'Databases and internal systems',
        description: 'Connect AI to your databases and internal tools to automate data handling.',
      },
    ],
  },

  // Tool list kept from the current page, pending owner confirmation (S-5):
  // remove any tool that has not been used in delivered work.
  tools: {
    heading: 'Platforms and tools',
    allPlatformsLink: { text: 'See all platforms', link: '/platforms' },
    categories: [
      { category: 'CRMs', items: ['HubSpot', 'Salesforce', 'Zoho', 'Pipedrive'] },
      { category: 'AI models', items: ['OpenAI', 'Claude', 'Google Gemini'] },
      { category: 'Automation platforms', items: ['Zapier', 'Make', 'n8n'] },
      { category: 'Communication', items: ['Slack', 'Gmail', 'Outlook', 'Twilio'] },
      { category: 'Databases', items: ['Custom APIs', 'SQL databases', 'Cloud data platforms'] },
      { category: 'E-commerce', items: ['Shopify', 'WooCommerce'] },
      { category: 'Support', items: ['Zendesk', 'Intercom', 'Freshdesk'] },
    ],
  },

  // ── 4.10 PROOF (default version: no client case studies or testimonials) ──
  proof: {
    label: 'Our Work',
    heading: 'See how we build',
    items: [
      {
        label: 'Demo build',
        title: 'AI receptionist for small service businesses',
        description:
          'A demonstration system that answers calls, texts and emails, qualifies the job and books the appointment. This is a Clickmasters demo, not a client project.',
        link: signOff.demoCaseStudyReady
          ? { text: 'See the build', href: DEMO_CASE_STUDY_URL }
          : undefined,
      },
    ],
    sectionLink: { text: 'View all work', link: '/case-studies' },
  },

  // ── 4.11 INDUSTRIES ──
  industries: {
    label: 'Industries',
    heading: 'Industries we build for',
    subheading:
      'The same building blocks apply across sectors, but the workflows differ. These pages show what we automate in each.',
    items: [
      {
        title: 'Real estate',
        description: 'Lead follow-up, viewing schedules and property enquiries.',
        link: '/industries/ai-automation-for-real-estate',
      },
      {
        title: 'E-commerce and retail',
        description: 'Order updates, customer support and inventory sync.',
        link: '/industries/ai-automation-for-ecommerce',
      },
      {
        title: 'Healthcare and clinics',
        description: 'Appointment scheduling, patient enquiries and administrative paperwork.',
        link: '/industries/ai-automation-for-healthcare',
      },
      {
        title: 'Finance and accounting',
        description: 'Invoice processing, data entry and reporting.',
        link: '/industries/ai-automation-for-finance-accounting',
      },
      {
        title: 'Professional services',
        description: 'Client onboarding, proposals and follow-ups.',
        link: '/industries/ai-automation-for-professional-services',
      },
      {
        title: 'SaaS and technology',
        description: 'Customer onboarding, ticket routing and user data sync.',
        link: '/industries/ai-automation-for-saas',
      },
      {
        title: 'Law firms',
        description: 'Client intake, document handling and matter updates.',
        link: '/industries/ai-automation-for-law-firms',
      },
    ],
  },

  // ── 4.12 WHY CLICKMASTERS ──
  whyChooseUs: {
    label: 'Why Clickmasters',
    heading: 'Why work with Clickmasters',
    items: [
      {
        title: 'Built for your process',
        description: 'We design around how your business works, not from a fixed template.',
      },
      {
        title: 'AI agents, not only triggers',
        description:
          'We build agents that handle multi-step tasks, as well as simple if-this-then-that automations.',
      },
      {
        title: 'Deep integration',
        description:
          'We connect to your CRM, ERP and internal tools, including systems without ready-made connectors.',
      },
      {
        title: 'Human in the loop',
        description: 'People approve or take over wherever a decision needs judgment.',
      },
      {
        title: 'A process you can see',
        description: 'You get documentation of how each automation works.',
      },
      ...(signOff.supportAfterLaunch
        ? [
            {
              title: 'Support after launch',
              description: 'We monitor, maintain and improve what we build.',
            },
          ]
        : []),
      {
        title: 'Access controls from the start',
        description: 'Permissions and data handling are defined in the design, before any build.',
      },
    ],
    closingStatement: 'We build systems you understand and own.',
  },

  // ── 4.13 FAQ ──
  faq: {
    heading: 'Frequently asked questions',
    sideText:
      'Have a question about your own setup? Book a free automation audit and we will answer it for your business.',
    sideLink: { text: 'Book a Call', link: AUDIT_URL },
    items: [
      {
        question: 'What are AI automation services?',
        answer:
          'AI automation services cover the design, build and integration of systems that handle repetitive business tasks, such as lead qualification, customer support and data processing, using AI models and workflow tools.',
      },
      {
        question: 'What does an AI automation agency do?',
        answer:
          "An AI automation agency finds the manual work in a business that software can do, builds the automations and AI agents to do it, connects them to the company's existing systems and maintains them. Clickmasters AI Automation does this for sales, support and operations teams.",
      },
      {
        question: 'What can businesses automate with AI?',
        answer:
          'Common examples are lead capture and qualification, CRM updates, email follow-ups, support tickets, appointment scheduling, document and invoice processing, and reporting. Tasks that are repetitive and follow rules are the best candidates.',
      },
      {
        question: 'How does AI automation work?',
        answer:
          'A trigger, such as a form submission or a new email, starts a workflow. The workflow follows set rules for routine steps and calls an AI model where language or judgment is needed. It then updates your systems and passes exceptions to a person.',
      },
      {
        question: 'How much do AI automation services cost?',
        answer:
          'Cost depends on the number of workflows, the systems involved and how much AI decision-making is needed. After the free audit you receive a written quote that lists the scope, deliverables, platform and usage costs, and support terms.',
      },
      {
        question: 'How long does implementation take?',
        answer:
          'It depends on scope. A single workflow on tools you already use is the quickest; projects that span several systems take longer. Your quote includes a timeline for each stage.',
      },
      {
        question: 'Can AI integrate with our existing software?',
        answer:
          'Usually, yes. We connect through native connectors, APIs or platforms such as n8n, Make and Zapier. If a system has no API, we assess the alternatives during the audit.',
      },
      // These two FAQs were approved for the page by the site owner.
      {
        question: 'Who owns the automation once it is built?',
        answer: 'You do. The workflows, accounts and documentation are handed over to you.',
      },
      {
        question: 'Is Clickmasters AI Automation part of Clickmasters?',
        answer:
          'Yes. Clickmasters AI Automation is the AI automation practice of Clickmasters, a digital marketing and software agency founded by Amjad Khan and based in Pakistan. We work remotely with businesses in the United States and United Kingdom.',
      },
    ],
  },

  // ── 4.14 FINAL CALL TO ACTION ──
  finalCta: {
    heading: 'Find out what you can automate',
    subheading:
      'Book a free automation audit. We review your processes and tools and show you where automation would save the most time.',
    cta: { text: 'Book Your Free Automation Audit', link: AUDIT_URL, primary: true },
  },
};

export default homepageData;
