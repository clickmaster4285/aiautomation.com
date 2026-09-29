// content/services/ai-integration-services.ts
import { ServiceContent } from './type';  

export const aiIntegrationServices: ServiceContent = {
  slug: 'ai-integration-services',
  title: 'AI Integration Services | Connect AI to Your Tools Clickmasters',
  metaDescription: 'Clickmasters integrates AI into the tools you already use CRM, support, email, and ops. Custom OpenAI, Claude, and Gemini integrations that automate real work.',
  keywords: 'ai integration services, ai integration, api integration, ai workflow, system integration',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'AI Integration Services',
      subheading: 'Connect AI directly to the tools you already use CRM, help desk, email, and ops so it takes action inside real workflows, not in a separate tab.',
      content: [
        'Clickmasters integrates AI directly into the tools your business already runs on. Most companies have AI sitting in a separate browser tab used manually, disconnected from where work actually happens. Real AI integration wires the model into your CRM, help desk, email, and workflows so it reads context and takes action automatically: no copy-paste, no separate tool to remember to open. This page explains what AI integration really means, why it is where the return lives, what we connect, and how we keep it secure and accurate.'
      ],
      stats: [
        { label: 'PROJECTS', value: '100+' },
        { label: 'CLIENTS', value: '50+' }
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false }
      ],
      image: {
        src: '/images/ai.png',
        alt: 'AI Integration illustration',
        width: 612,
        height: 408
      }
    },

    // ========== TEXT: What "AI Integration" Really Means ==========
    {
      type: 'text',
      heading: 'What "AI Integration" Really Means',
      content: [
        'Buying a chatbot subscription is not integration. Pasting text into a chat window and copying the result back into your CRM is not integration either it is manual work with an extra step bolted on. Real AI integration means the model is wired into your systems: reading your CRM records, drafting in your inbox, classifying your tickets, updating your database triggered automatically as part of the workflows you already run.',
        'The difference comes down to whether the AI is a destination you visit or a capability that lives inside your tools. Integrated AI does not wait for someone to open a tab and write a prompt. It runs where the work is, on the triggers that already drive your business, and it acts on the results without a person shuttling data back and forth. That shift from AI as a manual assistant to AI as a working part of your systems is the whole point of integration.'
      ],
       image: {
    src: '/images/tech.png',
    alt: 'AI Integration illustration'
  }
    },

    // ========== TEXT: Why Integration Is Where the ROI Is ==========
    {
      type: 'text',
      heading: 'Why Integration Is Where the ROI Is',
      content: [
        'A standalone AI tool saves a little time on individual tasks. Integrated AI changes how work flows. When the model is connected to your systems, it can handle entire steps autonomously reading an incoming email and updating the right record, summarizing a call and logging it to the CRM, classifying a support ticket and routing it with no human in the loop for the routine cases.',
        'That is the gap between "we use AI" and "AI does the work." Most businesses are stuck in the first category, with AI as a clever assistant in a separate window that still depends entirely on a person to act on its output. Integration moves you to the second, where the AI is wired into the flow and the routine work simply happens. The return is not the cleverness of the model; it is the elimination of the manual handoffs around it.'
      ]
    },

    // ========== FEATURES: What We Integrate (now 6 items) ==========
    {
      type: 'features',
      heading: 'What We Integrate',
      items: [
        {
          title: 'LLMs into your stack',
          description: 'We connect OpenAI, Claude, or Gemini to your CRM, email, Slack, help desk, and databases, so the model can read and act on your real data where it lives.',
          icon: 'Brain'
        },
        {
          title: 'AI API automation',
          description: 'Custom API workflows that send your data to a model and route the result back into the right system, with logic and error handling around it.',
          icon: 'Code'
        },
        {
          title: 'Generative AI integration',
          description: 'Content, summaries, and drafts generated inside your existing tools in the inbox, the CRM, the document rather than in a separate app you have to visit.',
          icon: 'FileText'
        },
        {
          title: 'RAG and knowledge integration',
          description: 'AI that answers from your documents and data, not the open web, so responses are accurate and specific to your business.',
          icon: 'Database'
        },
        {
          title: 'Agent integration',
          description: 'AI agents wired into your systems to take action create records, send replies, trigger workflows not just respond to questions.',
          icon: 'Bot'
        },
      
      ]
    },

    // ========== GRID: Common Integrations We Build ==========
    {
      type: 'grid',
      heading: 'Common Integrations We Build',
      subheading: 'We integrate AI across the tools businesses actually run on, meeting your stack where it is rather than asking you to change it.',
      items: [
        {
          title: 'CRM',
          description: 'HubSpot, Salesforce, GoHighLevel: AI drafting, scoring, enrichment, and record updates.',
          icon: 'Briefcase'
        },
        {
          title: 'Help desk',
          description: 'Zendesk, Intercom, Freshdesk: AI classification, drafting, and resolution.',
          icon: 'Headphones'
        },
        {
          title: 'Email and calendar',
          description: 'Drafting, summarizing, scheduling, and follow-up.',
          icon: 'Mail'
        },
        {
          title: 'Slack and Teams',
          description: 'AI assistants and notifications where your team already works.',
          icon: 'MessageSquare'
        },
        {
          title: 'Databases and spreadsheets',
          description: 'Reading, writing, and transforming data with AI in the loop.',
          icon: 'Database'
        },
        {
          title: 'Custom internal tools',
          description: 'Via API, so even bespoke systems get an AI layer.',
          icon: 'Link2'
        }
      ]
    },

    // ========== TEXT: Integration vs. Development ==========
    {
      type: 'text',
      heading: 'Integration vs. Development: What You Actually Need',
      content: [
        'There is a useful distinction worth being clear about, because it affects cost and timeline. AI development means building custom models or applications from scratch training a model on your data, building bespoke AI software. AI integration means connecting existing, proven models like OpenAI, Claude, or Gemini into your tools and workflows. The two get conflated, and businesses sometimes assume they need expensive custom development when integration would serve them better and faster.',
        'For the large majority of businesses, integration is what delivers the value. The frontier models are already extraordinarily capable; the bottleneck is rarely the model itself but the fact that it is not connected to your systems. Wiring a proven model into your real workflow is faster, cheaper, and lower-risk than custom development, and it captures most of the available return. We will tell you honestly which one your situation calls for and it is almost always integration.'
      ]
    },

    // ========== FEATURES: Keeping Integrations Secure and Accurate (now 3 items) ==========
    {
      type: 'features',
      heading: 'Keeping Integrations Secure and Accurate',
      items: [
        {
          title: 'Security',
          description: 'We use proper access controls, keep credentials in secure environment configuration rather than hardcoded, and where data sensitivity demands it build on self-hostable infrastructure so your data stays in your environment. Each integration is scoped to exactly what the AI needs, and nothing more.',
          icon: 'Shield'
        },
        {
          title: 'Accuracy',
          description: 'We ground the AI in your real data through retrieval-augmented generation, add validation on outputs, and keep humans in the loop wherever a mistake would be costly. The aim is an integration you can actually trust to run on its own for the routine cases not one you have to double-check constantly.',
          icon: 'Target'
        },
        // ✅ NEW 3rd card – makes 1 row of 3
        {
          title: 'Monitoring & observability',
          description: 'We provide real‑time dashboards and alerts for every integration so you know exactly when a workflow runs, what it processed, and if anything needs attention, before it becomes a problem.',
          icon: 'BarChart3'
        }
      ]
    },

    // ========== FEATURES: Why Clickmasters (now 6 items) ==========
    {
      type: 'features',
      heading: 'Why Clickmasters',
      items: [
        {
          title: 'We integrate into your real workflow',
          description: 'Not a demo the actual systems where your work happens, on the triggers that already run your business.',
          icon: 'Zap'
        },
        {
          title: 'Model-agnostic',
          description: 'OpenAI, Claude, or Gemini, chosen per task and cost, so you get the best fit rather than a single-vendor default.',
          icon: 'Brain'
        },
        {
          title: 'Security-conscious',
          description: 'Access controls, scoped permissions, and self-hosting where the data demands it.',
          icon: 'Shield'
        },
        {
          title: 'You own it',
          description: 'Documented, maintainable integrations you control, with no black boxes and no lock-in.',
          icon: 'Award'
        },
        // ✅ NEW 5th card
        {
          title: 'Fast implementation',
          description: 'We get your first integration live in weeks, not months, using pre‑built connectors and battle‑tested patterns so you see ROI quickly.',
          icon: 'Clock'
        }
      ]
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What are AI integration services?',
          description: 'AI integration services connect AI models like OpenAI or Claude directly into a business\'s existing software CRM, email, help desk, databases so the AI reads context and takes action automatically inside real workflows, rather than running as a separate tool you use manually.'
        },
        {
          title: 'How do you integrate AI into existing software?',
          description: 'Through APIs and automation platforms such as n8n, Make, and Zapier that pass your data to a model and route the response back into your systems, with logic, error handling, and security controls around it.'
        },
        {
          title: 'What\'s the difference between AI integration and AI development?',
          description: 'Integration connects existing, proven AI models to your tools; development builds custom models or applications from scratch. Most businesses need integration wiring capable models into their workflows not custom model training, which is slower, costlier, and rarely necessary.'
        },
        {
          title: 'Is it safe to connect AI to our CRM and data?',
          description: 'Yes, when built with scoped access controls, secure credential handling, and for sensitive data self-hostable infrastructure so data stays in your environment. We scope each integration to only what the AI needs to do its job.'
        },
        {
          title: 'Which AI models can you integrate?',
          description: 'OpenAI, Claude, and Gemini, among others. We are model-agnostic and choose based on the task and cost, and many setups route different tasks to whichever model performs best for each.'
        },
        {
          title: 'How long does an integration take?',
          description: 'Because we connect proven models rather than building from scratch, a focused integration is typically live in a matter of weeks. We start with the highest-ROI connection so you see value quickly, then extend from there.'
        }
      ]
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'See where AI fits in your stack.',
      subheading: 'Book a free integration audit we\'ll map the highest-ROI connection first, with no obligation.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true
      }
    }
  ]
};