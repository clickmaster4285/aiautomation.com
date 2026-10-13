// content/services/ai-chatbot-automation.ts
import { ServiceContent } from '../type';  

export const aiChatbotAutomation: ServiceContent = {
slug: 'ai-chatbot-automation',
title: 'AI Chatbot Development Services for Business | Clickmasters',
metaDescription:
  'Build custom AI chatbots for customer support, lead generation, sales, and bookings. Improve customer conversations with Clickmasters AI chatbot services.',
keywords: 'ai chatbot, conversational ai, chatbot automation, customer service chatbot',
sections: [
  // ========== HERO ==========
  {
    type: 'hero',
    heading: 'AI Chatbot Development Services for Better Customer Conversations',
    subheading:
      'Give customers fast and helpful answers with AI chatbot development services from Clickmasters. We build custom AI chatbots for customer support, lead generation, sales, appointment booking, and everyday customer questions.',
    content: [
      'Give customers fast and helpful answers with AI chatbot development services from Clickmasters. We build custom AI chatbots for customer support, lead generation, sales, appointment booking, and everyday customer questions.',
    ],
    stats: [
      { label: 'SUPPORT', value: 'Answer customer questions 24/7' },
      { label: 'LEADS', value: 'Capture and qualify new leads' },
      { label: 'BOOKINGS', value: 'Book appointments automatically' },
      { label: 'INTEGRATIONS', value: 'Connect with CRM and business tools' },
      { label: 'HANDOFF', value: 'Transfer complex conversations to humans' },
    ],
    ctas: [
      { text: 'Build Your AI Chatbot', link: '/free-automation-audit', primary: true },
    ],
    image: {
      src: '/images/chatbot.png',
      alt: 'AI Chatbot Development illustration',
      width: 612,
      height: 408,
    },
  },

    // ========== TEXT: Why Old Chatbots Failed and What Changed ==========
{
  type: 'text',
  heading: 'Improve Customer Support With a Custom AI Chatbot',
  content: [
    'Customers expect quick answers when they visit your website. A custom AI chatbot can help visitors find information, ask questions, submit details, book appointments, and get support without waiting for a team member.',
    'Clickmasters creates AI chatbots based on your business content, services, FAQs, and customer journey. The chatbot can handle common conversations automatically and transfer the customer to a real person when human support is needed.',
  ],
},

   

    // ========== FEATURES: The Chatbots We Build (now 6 items) ==========
    {
      type: 'features',
      heading: 'The Chatbots We Build',
      items: [
        {
          title: 'Website and app chatbots',
          description: 'Natural-language assistants trained on your content, embedded where your visitors are, answering questions accurately and guiding people toward action.',
          icon: 'Globe'
        },
        {
          title: 'Lead-generation chatbots',
          description: 'Bots that engage visitors, qualify them through conversation, capture their details, and route hot leads to sales turning passive traffic into pipeline.',
          icon: 'Target'
        },
        {
          title: 'Booking and scheduling bots',
          description: 'Conversational booking that checks real availability and schedules appointments directly into your calendar, removing the back-and-forth.',
          icon: 'Calendar'
        },
        {
          title: 'Support chatbots (RAG)',
          description: 'Bots that answer from your documentation, resolve common issues, and escalate complex cases to your team with context.',
          icon: 'Headphones'
        },
        {
          title: 'Multi-channel deployment',
          description: 'The same intelligence deployed across web chat, WhatsApp, Messenger, and Slack, so customers reach you where they already are.',
          icon: 'MessageSquare'
        },
      
      ]
    },

    // ========== TEXT: How We Keep Chatbot Answers Accurate ==========
    {
      type: 'text',
      heading: 'How We Keep Chatbot Answers Accurate',
      content: [
        'The single biggest risk with an AI chatbot is that it answers confidently and wrongly telling a customer something that simply is not true for your business. This is exactly what we engineer against, and the core technique is grounding. Rather than letting the model answer from its general training, we connect it to your real content your help center, product information, and policies and have it answer from that. This is retrieval-augmented generation, or RAG, and it is the difference between a bot you can put in front of customers and one you cannot.',
        'We layer additional safeguards on top: guardrails defining what the bot may and may not discuss, clear escalation to humans for sensitive topics, and monitoring so problems surface early and the bot improves over time. Where your content does not cover something, a well-built bot says so and offers to connect the customer to a person, rather than inventing a plausible-sounding answer to seem helpful. Accuracy is a design choice, and we make it deliberately.',
        'A useful byproduct: building a grounded chatbot exposes the gaps and contradictions in your own documentation, because the bot can only be as good as the content behind it. Many clients find their knowledge base and therefore their human support too improves as a direct result of getting the bot right.'
      ]
    },

    // ========== GRID: Channels and Tools ==========
    {
      type: 'grid',
      heading: 'Channels and Tools',
      subheading: 'We deploy chatbots wherever your customers already are, integrated with the systems behind them.',
      items: [
        {
          title: 'Web chat',
          description: 'Embedded on your site, the most common front door.',
          icon: 'Globe'
        },
        {
          title: 'Messaging',
          description: 'WhatsApp, Messenger, and other platforms your audience uses.',
          icon: 'MessageSquare'
        },
        {
          title: 'Internal chat',
          description: 'Slack and Teams, for internal-facing assistants.',
          icon: 'Users'
        },
        {
          title: 'Knowledge sources',
          description: 'Your help center and documentation as the grounding for answers.',
          icon: 'Database'
        },
        {
          title: 'CRM and calendar',
          description: 'So the bot has context and can book, qualify, and log interactions.',
          icon: 'Calendar'
        },
        {
          title: 'Help desk',
          description: 'So support conversations and escalations land in the right place.',
          icon: 'Headphones'
        }
      ]
    },
 // ========== TEXT: What Modern AI Chatbots Can Actually Do ==========
    {
      type: 'text',
      heading: 'What Modern AI Chatbots Can Actually Do',
      content: [
        'The leap from old to new is the leap from informing to acting. An old bot could, at best, show you an FAQ answer. A modern AI chatbot can carry out the task behind the question. It can look up an order and report its real status. It can check availability and book an appointment directly into your calendar. It can qualify a lead through natural conversation and route it to the right salesperson. It can answer a detailed product question from your documentation and, if the visitor is ready, move them toward a purchase or a booking.',
        'And when it reaches the edge of what it should handle a complex complaint, a sensitive account issue, anything outside its remit it hands off to a human with the full conversation attached, so the customer does not start over. That clean handoff is part of a good build, not an afterthought. The goal is not a bot that refuses to let you reach a person; it is a bot that resolves what it can and connects you smoothly when it cannot.'
      ]
    },
    // ========== FEATURES: Why Clickmasters (now 6 items) ==========
    {
      type: 'features',
      heading: 'Why Clickmasters',
      items: [
        {
          title: 'Grounded, accurate answers',
          description: 'Built on your real content via RAG, so the bot is helpful rather than confidently wrong.',
          icon: 'Shield'
        },
        {
          title: 'Action, not just chat',
          description: 'Our bots book, qualify, and resolve they do things, not just describe them.',
          icon: 'Zap'
        },
        {
          title: 'Clean human handoff',
          description: 'Escalation with full context, so customers are never trapped away from a person.',
          icon: 'Users'
        },
        {
          title: 'You own it',
          description: 'Transparent, tunable bots and a knowledge base you control.',
          icon: 'Award'
        },
        // ✅ NEW 5th card
        {
          title: 'Scalable infrastructure',
          description: 'Our chatbot platform scales effortlessly from hundreds to millions of conversations, so you never outgrow your AI and you only pay for what you use.',
          icon: 'Cloud'
        }
      ]
    },

    // ========== GRID: Where Chatbots Deliver the Most Value (now 6 items) ==========
    {
      type: 'grid',
      heading: 'Where Chatbots Deliver the Most Value',
      subheading: 'A chatbot earns its keep where question volume is high and the questions are largely repetitive which describes the front line of most businesses.',
      items: [
        {
          title: 'E-commerce stores',
          description: 'Answering order, shipping, sizing, and product questions, and recovering carts, around the clock.',
          icon: 'ShoppingCart'
        },
        {
          title: 'Service businesses',
          description: 'Qualifying enquiries and booking appointments directly, so leads convert while interest is hot.',
          icon: 'Briefcase'
        },
        {
          title: 'SaaS products',
          description: 'Handling onboarding and support questions inside the app, deflecting routine tickets.',
          icon: 'Cloud'
        },
        {
          title: 'Professional services',
          description: 'Qualifying prospects and scheduling consultations from website traffic.',
          icon: 'Users'
        },
        {
          title: 'High-traffic marketing sites',
          description: 'Turning anonymous visitors into qualified, captured leads through conversation.',
          icon: 'Megaphone'
        },
        // ✅ NEW 6th card – makes 2 rows of 3
        {
          title: 'Restaurants & hospitality',
          description: 'Taking reservations, answering menu questions, handling special requests, and sending reminders freeing your staff to focus on in‑person guest experience.',
          icon: 'Utensils'
        }
      ]
    },

    // ========== STEPS: How We Build a Chatbot ==========
    {
      type: 'steps',
      heading: 'How We Build a Chatbot',
      subheading: 'Our build process is staged so the bot is accurate before it is widely exposed, because a bad early impression is hard to undo.',
      items: [
        {
          title: 'Ground it in your content',
          description: 'We connect the bot to your help center, product information, and policies, so from day one it answers from your real content rather than generic knowledge.'
        },
        {
          title: 'Define scope and actions',
          description: 'We decide what the bot should handle which questions, which actions like booking or qualifying and where it must hand off to a human.'
        },
        {
          title: 'Launch and supervise',
          description: 'We deploy it on its defined scope and monitor real conversations, refining answers and catching gaps as they surface.'
        },
        {
          title: 'Expand',
          description: 'As the bot proves accurate and useful, we widen the questions it handles and the actions it can take, always keeping clean escalation paths.'
        }
      ]
    },

    // ========== TEXT: Staged Approach ==========
    {
      type: 'text',
      content: 'This staged approach captures value quickly on the routine interactions while protecting the customer experience, and it surfaces gaps in your documentation along the way improving both the bot and your wider support.'
    },

    // ========== FAQ ==========
  {
  type: 'faq',
  heading: 'Frequently Asked Questions',
  items: [
    {
      title: 'What is an AI chatbot?',
      description:
        'An AI chatbot is software that uses artificial intelligence to understand customer questions and respond in natural language.',
    },
    {
      title: 'Can an AI chatbot generate leads?',
      description:
        'Yes. AI chatbots can collect customer details, ask qualification questions, and send leads to your sales team or CRM.',
    },
    {
      title: 'Can an AI chatbot answer questions about my services?',
      description:
        'Yes. The chatbot can use approved website content, FAQs, documents, and business information to answer relevant questions.',
    },
    {
      title: 'Can an AI chatbot book appointments?',
      description:
        'Yes. It can connect with supported booking or calendar systems to schedule appointments.',
    },
    {
      title: 'Can customers speak to a real person?',
      description:
        'Yes. The chatbot can transfer conversations to a human when needed.',
    },
    {
      title: 'Can an AI chatbot connect with CRM software?',
      description:
        'Yes. It can create leads, update customer records, and send conversation data to connected CRM systems.',
    },
  ],
},

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'See what a chatbot that actually works could do for your site.',
      subheading: 'Book a free automation audit 30 minutes, no obligation.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true
      }
    }
  ]
};