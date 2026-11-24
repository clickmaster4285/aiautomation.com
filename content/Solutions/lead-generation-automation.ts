// content/Solutions/lead-generation-automation.ts
export const leadGenerationAutomation = {
  url: '/solutions/lead-generation-automation',
  titleTag: 'Lead Generation Automation That Captures, | Clickmasters',
  metaDescription: 'Operations teams use Clickmasters Lead Generation Automation That Captures, Qualifies, and Routes Every Lead to remove repetitive work from the current.',
  primaryKeyword: 'lead generation automation',
  bookingLink: '/free-automation-audit',

  heroBadge: 'Lead Generation Automation',
  heroHeading:
    'Lead Generation Automation That Captures, Qualifies, and Routes Every Lead',
  heroSubheading:
    'Lead generation automation from Clickmasters removes the manual work between a lead coming in and a sales conversation starting. We automate lead capture, qualification, enrichment, routing, and CRM updates — so every qualified lead reaches the right person without delay.',

  sections: {
    'Why Businesses Need Lead Generation Automation': [
      'Most businesses lose leads not because the leads are bad, but because response times are slow, follow-up is inconsistent, or leads sit in a spreadsheet nobody checks. Every minute a hot lead waits for a response, conversion probability drops.',
      'Lead generation automation closes that gap. Leads are captured from every channel, qualified automatically based on your rules, enriched with data, and routed to the right salesperson — often within seconds. Nothing sits unanswered. Nothing gets lost.',
    ],
    'The Problems This Solves': [
      'Stop losing leads to slow response times and manual triage',
      'Consolidate leads from multiple channels into one qualified stream',
      'Enrich leads automatically with company and contact data',
      'Route leads to the right salesperson based on clear criteria',
      'Keep CRM records accurate and up to date without manual entry',
    ],
    'What We Automate': [
      'Lead capture from forms, landing pages, ads, chat, and inbound email',
      'Lead qualification based on fit criteria and behavioral signals',
      'Data enrichment (company details, firmographics) before routing',
      'Lead assignment to sales team members based on rules',
      'CRM record creation and updates in real time',
      'Automated follow-up sequences based on lead status',
      'Alerts to sales reps when a high-priority lead arrives',
    ],
    'Where to Start: Your First Automation': [
      'Start with the lead source that produces the highest volume or the biggest time waste. For most businesses that is either form-based lead capture or inbound email inquiries.',
      'A single well-scoped automation — for example, "form submissions enrich, qualify, and create CRM records with assignment" — produces visible impact within weeks and becomes the foundation for expanding to ads, chat, and outbound.',
    ],
    'A Worked Example': [
      'A B2B company receives 400 inbound leads per month across website forms, paid ads, and inbound email. Previously, leads sat in an inbox for hours, were triaged manually, and often routed to the wrong rep. After automation: each lead is captured in real time, enriched with company data, scored against the fit criteria, assigned to the right rep, and added to the CRM in seconds. Follow-up email sequences trigger automatically based on status. Response time drops from hours to minutes, and qualified lead conversion increases substantially.',
    ],
    "What This Is and Isn't": [
      'This is automation for the top of the sales funnel: capture, qualification, enrichment, routing, and CRM updates. It removes manual triage and makes sure every lead reaches the right person quickly.',
      'This is not a replacement for sales conversations or relationship building. It ensures salespeople spend their time on qualified leads that meet your criteria, not on manual data wrangling.',
    ],
    'Built for Real Business Operations': [
      'Real lead generation is messy: leads come in at all hours, formats vary, duplicates appear, and edge cases (missing data, existing customers, unsubscribes) need to be handled correctly. We build automation that accounts for these realities — so quality stays high even as volume grows.',
    ],
    'What the Return Looks Like': [
      'Businesses typically see faster response times to inbound leads, higher qualified-lead conversion rates, fewer leads lost to manual triage, and clean CRM data that sales can trust. The return compounds as more lead channels move into the automated pipeline.',
    ],
    'Why Clickmasters': [
      'Custom automation designed around your actual lead sources and qualification criteria',
      'Integration with CRM platforms, form tools, ad platforms, and email systems',
      'Enrichment, scoring, and routing that reflect how your sales team actually works',
      'Duplicate detection and data quality safeguards',
      'Ongoing monitoring and iteration so the pipeline improves over time',
    ],
  },

  stats: [
    { value: '70%', label: 'increase in qualified lead conversion rates' },
    { value: '<5 min', label: 'average response time to inbound leads' },
    { value: '100%', label: 'of leads routed to the correct rep' },
  ],

  faqQuestions: [
    {
      question: 'What is lead generation automation?',
      answer:
        'Lead generation automation captures, qualifies, enriches, and routes leads automatically, and keeps CRM records up to date — so salespeople spend their time on qualified opportunities, not manual data handling.',
    },
    {
      question: 'Can lead generation automation connect to our CRM?',
      answer:
        'Yes, where integrations or APIs exist. We connect to HubSpot, Salesforce, Pipedrive, and other CRM platforms, as well as form tools, ad platforms, and email providers.',
    },
    {
      question: 'How does lead qualification work in automation?',
      answer:
        'Leads are scored against the fit criteria you define — company size, industry, role, budget signals, engagement behavior, and any custom rules — and either routed or held for further qualification.',
    },
    {
      question: 'Will automation replace our SDRs?',
      answer:
        'No. Automation handles the mechanical steps (capture, enrichment, routing, record creation) so SDRs spend their time on real conversations with the right leads.',
    },
    {
      question: 'How quickly can lead generation automation be live?',
      answer:
        'A single-source automation (one form, one CRM, one routing rule) can often go live in 1–2 weeks. Multi-channel pipelines with enrichment and complex routing typically take 3–6 weeks depending on integrations.',
    },
    {
      question: 'What affects lead generation automation cost?',
      answer:
        'Cost depends on the number of lead sources, CRM and tool integrations, enrichment requirements, qualification logic complexity, and monitoring and iteration after launch.',
    },
  ],

  relatedSolutions: [
    {
      slug: 'lead-generation-automation/for-accounting-firms',
      title: 'Lead Generation Automation for Accounting Firms',
      description:
        'Automate client acquisition from tax season inquiries, referrals, and service-page form fills.',
    },
    {
      slug: 'lead-generation-automation/for-construction',
      title: 'Lead Generation Automation for Construction',
      description:
        'Automate project inquiries, bid requests, and quote follow-ups for construction firms.',
    },
    {
      slug: 'lead-generation-automation/for-ecommerce',
      title: 'Lead Generation Automation for Ecommerce',
      description:
        'Automate lead capture from product inquiries, abandoned carts, and email signups for ecommerce.',
    },
   
  ],

  cta: 'Automate Your Lead Generation Pipeline',

  // Page layout for app/solutions/[service]: section order, titles and page-specific props.
  page: {
    schema: { name: 'Lead Generation Automation', serviceType: 'Lead Generation Automation Development' },
    blocks: [
      {
        type: 'HeroSection',
        props: {
          primaryCta: { text: 'Book a Free Audit', href: { $ref: 'bookingLink' } },
          secondaryCta: { text: 'Learn More', href: '#why-lead-generation-automation' },
          visual: {
            $element: 'AutomationHeroMockup',
            props: {
              industry: 'Leads',
              triggerLabel: 'New Lead Captured',
              actionLabels: ['Enrich & Qualify', 'Route to Sales', 'Sync to CRM'],
              metricValue: '2,200',
              metricLabel: 'leads generated and qualified automatically each month',
              submetric: '70% increase in conversion rates',
              platform: 'Lead Generation Automation + CRM',
              accent: '#3B82F6',
            },
          },
          breadcrumb: [
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Lead Generation Automation', href: { $ref: 'url' } },
          ],
        },
      },
      {
        type: 'WhySection',
        section: 'Why Businesses Need Lead Generation Automation',
        props: { title: 'Why Businesses Need Lead Generation Automation' },
      },
      {
        type: 'ProblemsSection',
        section: 'The Problems This Solves',
        props: { title: 'The Problems This Solves' },
      },
      {
        type: 'AutomationSection',
        section: 'What We Automate',
        props: { title: 'What We Automate' },
      },
      {
        type: 'StartSection',
        section: 'Where to Start: Your First Automation',
        props: { title: 'Where to Start: Your First Automation' },
      },
      {
        type: 'ExampleSection',
        section: 'A Worked Example',
        props: { title: 'A Worked Example' },
      },
      {
        type: 'BoundariesSection',
        section: 'What This Is and Isn\'t',
        props: { title: 'What This Is and Isn\'t' },
      },
      {
        type: 'RealitiesSection',
        section: 'Built for Real Business Operations',
        props: { title: 'Built for Real Business Operations' },
      },
      {
        type: 'ReturnSection',
        section: 'What the Return Looks Like',
        props: { title: 'What the Return Looks Like' },
      },
      {
        type: 'WhyUsSection',
        section: 'Why Clickmasters',
        props: { title: 'Why Clickmasters' },
      },
      { type: 'FAQSection', props: { title: 'Frequently Asked Questions', subtitle: 'Common questions about lead generation automation' } },
      { type: 'RelatedSolutions', props: { title: 'Explore Other Solutions', subtitle: 'More ways we can help you automate' } },
      {
        type: 'CTASection',
        props: {
          subtitle: 'Book a free automation audit — 30 minutes, no obligation, and an honest read on where lead generation automation pays off for your business.',
          primaryCta: { text: 'Book a Free Automation Audit', href: { $ref: 'bookingLink' } },
          secondaryCta: { text: 'View All Solutions', href: '/solutions' },
          background: 'light',
          showForm: true,
        },
      },
    ],
  },
};