// content/Solutions/ai-chatbots.ts
export const aiChatbots = {
  url: '/solutions/ai-chatbots',
  titleTag: 'AI Chatbots That Answer, Qualify, and Route | Clickmasters',
  metaDescription: 'Operations teams use Clickmasters AI Chatbots That Answer, Qualify, and Route Every Conversation to remove repetitive work from the current process.',
  primaryKeyword: 'ai chatbots',
  bookingLink: '/free-automation-audit',

  heroBadge: 'AI Chatbots',
  heroHeading:
    'AI Chatbots That Answer, Qualify, and Route Every Conversation',
  heroSubheading:
    'AI chatbots from Clickmasters handle customer conversations in natural language — answering common questions, qualifying leads, booking appointments, and routing to humans when needed. Your business responds instantly, 24/7, without adding support headcount.',

  sections: {
    'Why Businesses Need AI Chatbots': [
      'Customers expect instant answers. When a website visitor asks a question and gets no response for hours, they leave — often to a competitor. When a support queue gets backlogged, customers repeat the same questions and get increasingly frustrated.',
      'AI chatbots close that gap. They answer instantly, understand what the customer actually needs, and either resolve the request or hand off to a human with context — without the customer waiting in a queue or repeating themselves.',
    ],
    'The Problems This Solves': [
      'Answer common questions instantly instead of leaving visitors waiting',
      'Qualify leads in real time and route to the right team',
      'Reduce repetitive support questions reaching human agents',
      'Capture lead details and create CRM records automatically',
      'Handle after-hours and peak-volume conversations without added staff',
    ],
    'What We Automate': [
      'Inbound chat on website, WhatsApp, Messenger, and other channels',
      'FAQ answering and product / pricing information lookup',
      'Lead qualification with progressive data capture',
      'Appointment booking and calendar integration',
      'Handoff to human agents with full conversation context',
      'CRM, helpdesk, and ticketing system updates after each conversation',
    ],
    'Where to Start: Your First Automation': [
      'Start with the conversation type that produces the most friction today. For most businesses that is either inbound lead qualification (sales) or FAQ handling (support).',
      'A single well-scoped chatbot — for example, "qualify website visitors and book meetings" — produces visible ROI in weeks and becomes the foundation for expanding to support, onboarding, and after-hours coverage.',
    ],
    'A Worked Example': [
      'A B2B SaaS site gets ~120 meeting requests per week but only converts 30% because inquiries sit unanswered for hours. An AI chatbot greets visitors, answers pricing and feature questions, qualifies by company size and use case, books a meeting directly into the sales calendar, and syncs the lead to the CRM. Meeting-request conversion doubles in the first month, and the sales team only sees leads that meet qualification criteria.',
    ],
    "What This Is and Isn't": [
      'This is a conversational automation layer that handles common conversation types, qualifies leads, and routes to humans when needed. It reduces response time, captures more leads, and offloads repetitive support conversations.',
      'This is not a replacement for human conversations that require judgment, empathy, or complex negotiation. Well-designed AI chatbots know when to hand off — and do so smoothly.',
    ],
    'Built for Real Business Operations': [
      'Real customers ask messy questions: off-topic, multi-part, sometimes frustrated. AI chatbots handle this by combining understanding with clear handoff rules, so the customer always gets somewhere useful — either a resolved answer or the right human.',
    ],
    'What the Return Looks Like': [
      'Businesses typically see faster first-response times, higher lead conversion, fewer repetitive support tickets reaching humans, and coverage during hours no team member is online. The return scales as more conversation types move into the automated layer.',
    ],
    'Why Clickmasters': [
      'Custom chatbots trained on your products, pricing, and FAQ content',
      'Integration with CRM, helpdesk, calendar, and messaging platforms',
      'Natural handoff to humans for conversations outside chatbot scope',
      'Conversation transcripts and CRM updates after each exchange',
      'Monitoring and iteration so conversation quality improves after launch',
    ],
  },

  stats: [
    { value: '94%', label: 'conversations resolved without staff involvement' },
    { value: '3x', label: 'more qualified leads captured' },
    { value: '24/7', label: 'coverage without added headcount' },
  ],

  faqQuestions: [
    {
      question: 'What is an AI chatbot?',
      answer:
        'An AI chatbot is software that converses with customers in natural language — answering questions, qualifying leads, booking appointments, and handing off to humans when needed — across web, messaging, and other channels.',
    },
    {
      question: 'How is an AI chatbot different from a rule-based chatbot?',
      answer:
        'Rule-based chatbots follow scripted flows. AI chatbots understand natural language, handle unexpected questions, and adapt within a conversation — which means they can answer questions the script never anticipated.',
    },
    {
      question: 'Can AI chatbots connect to our CRM and helpdesk?',
      answer:
        'Yes, where integrations or APIs are available. The chatbot can create leads in the CRM, create tickets in the helpdesk, book into calendars, and update records after the conversation.',
    },
    {
      question: 'What happens if the chatbot cannot answer a question?',
      answer:
        'The chatbot transfers to a human agent with full context (conversation transcript, identified intent, and captured data). The customer does not have to repeat themselves.',
    },
    {
      question: 'Which channels can AI chatbots run on?',
      answer:
        'Website chat, WhatsApp, Messenger, Instagram, SMS, and other messaging platforms — depending on the integrations available for each channel.',
    },
    {
      question: 'What affects AI chatbot cost?',
      answer:
        'Cost depends on channels covered, conversation types handled, integrations required (CRM, helpdesk, calendar), content preparation, and the extent of monitoring and iteration after launch.',
    },
  ],

  relatedSolutions: [
    {
      slug: 'ai-chatbots/for-accounting-firms',
      title: 'AI Chatbots for Accounting Firms',
      description:
        'AI chatbots for client intake, service inquiries, and appointment scheduling at accounting firms.',
    },
    {
      slug: 'ai-chatbots/for-construction',
      title: 'AI Chatbots for Construction',
      description:
        'AI chatbots for project inquiries, quote requests, and client communication in construction.',
    },
    {
      slug: 'ai-chatbots/for-ecommerce',
      title: 'AI Chatbots for Ecommerce',
      description:
        'AI chatbots for product questions, order support, and cart recovery in ecommerce.',
    },
  ],

  cta: 'Automate Customer Conversations with AI Chatbots',

  // Page layout for app/solutions/[service]: section order, titles and page-specific props.
  page: {
    schema: { name: 'AI Chatbots', serviceType: 'AI Chatbot Development' },
    blocks: [
      {
        type: 'HeroSection',
        props: {
          primaryCta: { text: 'Book a Free Audit', href: { $ref: 'bookingLink' } },
          secondaryCta: { text: 'Learn More', href: '#why-ai-chatbots' },
          visual: {
            $element: 'AutomationHeroMockup',
            props: {
              industry: 'Chatbots',
              triggerLabel: 'New Customer Message',
              actionLabels: ['Understand Intent', 'Answer Instantly', 'Route & Update CRM'],
              metricValue: '1,800',
              metricLabel: 'customer conversations handled automatically this week',
              submetric: '94% resolved without staff involvement',
              platform: 'AI Chatbot + CRM',
              accent: '#F97316',
            },
          },
          breadcrumb: [
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'AI Chatbots', href: { $ref: 'url' } },
          ],
        },
      },
      {
        type: 'WhySection',
        section: 'Why Businesses Need AI Chatbots',
        props: { title: 'Why Businesses Need AI Chatbots' },
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
      { type: 'FAQSection', props: { title: 'Frequently Asked Questions', subtitle: 'Common questions about AI chatbots' } },
      { type: 'RelatedSolutions', props: { title: 'Explore Other Solutions', subtitle: 'More ways we can help you automate' } },
      {
        type: 'CTASection',
        props: {
          subtitle: 'Book a free automation audit — 30 minutes, no obligation, and an honest read on where AI chatbots pay off for your business.',
          primaryCta: { text: 'Book a Free Automation Audit', href: { $ref: 'bookingLink' } },
          secondaryCta: { text: 'View All Solutions', href: '/solutions' },
          background: 'light',
          showForm: true,
        },
      },
    ],
  },
};