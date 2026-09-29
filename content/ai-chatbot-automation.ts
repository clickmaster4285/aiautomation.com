// content/services/ai-chatbot-automation.ts
import { ServiceContent } from './type';  

export const aiChatbotAutomation: ServiceContent = {
  slug: 'ai-chatbot-automation',
  title: 'AI Chatbot Automation & Development | Clickmasters',
  metaDescription: 'Clickmasters builds AI chatbots that answer from your documentation, book appointments, qualify leads, and route to humans when needed on your site, 24/7.',
  keywords: 'ai chatbot, conversational ai, chatbot automation, customer service chatbot',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'AI Chatbot Automation & Development',
      subheading: 'Chatbots that answer from your own knowledge, book appointments, qualify leads, and take real action not scripted bots that frustrate everyone.',
      content: [
        'Clickmasters builds AI chatbots that hold real conversations and take real action. Not the scripted decision-tree bots everyone has learned to dread the ones that misunderstand a simple question and trap you in a loop of "I didn\'t catch that" but modern AI chatbots that understand natural language, answer accurately from your own content, book appointments, qualify leads, and hand off to a human cleanly when needed.',
        'This page explains why old chatbots failed, what modern AI chatbots do differently, the kinds of chatbots we build and where each one earns its keep, how we keep their answers accurate, and the channels and tools we deploy them across. It is written for a business owner or marketer who has been burned by a bad bot before and is rightly skeptical.'
      ],
      stats: [
        { label: 'PROJECTS', value: '200+' },
        { label: 'CLIENTS', value: '90+' }
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false }
      ],
      image: {
        src: '/images/chatbot.png',
        alt: 'AI Chatbot Automation illustration',
        width: 612,
        height: 408
      }
    },

    // ========== TEXT: Why Old Chatbots Failed and What Changed ==========
    {
      type: 'text',
      heading: 'Why Old Chatbots Failed and What Changed',
      content: [
        'The first generation of chatbots earned their bad reputation honestly. They ran on rigid decision trees: a fixed set of buttons and pre-written paths. If a customer phrased something in a way the designer had not anticipated, the bot was lost. It could not understand intent, only match keywords, so it constantly misread what people meant. Worst of all, it stood between the customer and a human, turning a simple question into a frustrating maze. Everyone has hammered "speak to a representative" into one of these, and the memory is why so many people distrust the word "chatbot."',
        'What changed is the underlying technology. Modern AI chatbots are built on large language models that genuinely understand natural language. A customer can ask in their own words, in any phrasing, and the bot grasps what they actually mean. More importantly, the best ones answer from your real content your help docs, product information, and policies rather than a small set of canned responses, and they can take action in your systems rather than only talking. The result is a conversation that feels like talking to someone helpful, not navigating a phone tree from 2010.',
        'The honest caveat: this is only true when the bot is built well. A modern model plugged in carelessly, without grounding in your content and without clear escalation paths, can still produce a poor experience confidently wrong answers instead of confidently unhelpful ones. The technology makes a great chatbot possible; the build determines whether you get one.'
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
          description: 'An AI chatbot uses a language model to understand and respond to users in natural language, answering from a business\'s own content and taking actions like booking or routing far beyond old script-based bots that only matched keywords.'
        },
        {
          title: 'How do AI chatbots answer accurately?',
          description: 'Through retrieval-augmented generation (RAG): the bot answers from your specific documents and data, which keeps responses accurate and on-brand instead of generic or invented. Where your content is silent, a well-built bot says so and escalates rather than guessing.'
        },
        {
          title: 'Can a chatbot book appointments?',
          description: 'Yes. Connected to your calendar and CRM, an AI chatbot can qualify, check availability, book, and confirm appointments directly in conversation, removing the usual back-and-forth.'
        },
        {
          title: 'Won\'t a chatbot frustrate my customers like the old ones did?',
          description: 'Old bots frustrated people because they were rigid, misunderstood phrasing, and blocked access to humans. Modern AI bots understand natural language, answer accurately from your content, take real action, and hand off cleanly to a person when needed a fundamentally better experience.'
        },
        {
          title: 'Which channels can the chatbot work on?',
          description: 'Web chat, WhatsApp, Messenger, Slack, and Teams, among others. The same underlying intelligence can be deployed across multiple channels so customers reach you where they already are.'
        },
        {
          title: 'How long does it take to build and launch?',
          description: 'We typically ground a bot in your existing content and launch it on a defined set of questions and actions within a few weeks, then expand its scope as it proves accurate and useful.'
        }
      ]
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