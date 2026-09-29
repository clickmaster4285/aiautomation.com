// content/services/ai-customer-support-automation.ts
import { ServiceContent } from './type';  

export const aiCustomerSupportAutomation: ServiceContent = {
  slug: 'ai-customer-support-automation',
  title: 'AI Customer Support Automation | 24/7 AI Support Agents Clickmasters',
  metaDescription: 'Automate customer support with AI agents that resolve tickets, answer from your docs, and route what needs a human. Clickmasters cuts response time and ticket volume.',
  keywords: 'ai customer support, support automation, ticket automation, customer service ai',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'AI Customer Support Automation',
      subheading: 'AI support that actually resolves tickets answering from your own knowledge, working around the clock, and escalating only what truly needs a human.',
      content: [
        'Clickmasters builds AI customer support automation that resolves the repetitive work and escalates the rest. Not a scripted chatbot that frustrates people and dead-ends in "I didn\'t understand that," but AI support agents that answer from your own documentation, handle the high-volume questions around the clock, take action in your systems, and route the genuinely complex cases to your team with full context attached.',
        'This page explains the support bottleneck every growing business hits, what modern AI support automation actually does differently from the old chatbots, what we build, how we keep answers accurate and on-brand, and the returns you can realistically expect. It is written for a support or operations leader weighing whether AI can take real load off the team without damaging the customer experience.'
      ],
      stats: [
        { label: 'PROJECTS', value: '220+' },
        { label: 'CLIENTS', value: '95+' }
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false }
      ],
      image: {
        src: '/images/customer.png',
        alt: 'AI Customer Support Automation illustration',
        width: 561,
        height: 444
      }
    },

    // ========== TEXT: The Support Bottleneck Every Growing Business Hits ==========
    {
      type: 'text',
      heading: 'The Support Bottleneck Every Growing Business Hits',
      content: [
        'Support volume grows with the business, but the nature of that volume is lopsided. A large share of every support queue is variations on a small set of questions: where is my order, how do I reset this, what is your refund policy, how do I change my plan, why was I charged this. These are not hard questions. They are repetitive ones, and answering each by hand is slow and expensive not because any single answer is difficult, but because there are so many of them and they never stop.',
        'The consequences compound. Customers wait, and waiting is the single biggest driver of support dissatisfaction. Your skilled support people spend their day on repetitive questions instead of the complex, high-value cases where they would actually make a difference. And coverage gaps appear questions that arrive overnight or at the weekend sit unanswered until someone is back at their desk, by which point a frustrated customer may already be looking elsewhere.',
        'Hiring more support staff is the obvious answer, and it works, but it ties your support capacity directly to headcount and cost. Every increase in volume requires a proportional increase in people. AI support automation breaks that link by absorbing the repetitive volume, so your team\'s size is driven by the complex cases that genuinely need humans rather than by the sheer quantity of routine ones.'
      ]
    },

    // ========== TEXT: What Modern AI Support Automation Does Differently ==========
    {
      type: 'text',
      heading: 'What Modern AI Support Automation Does Differently',
      content: [
        'It is worth being clear about why this is not the chatbot experience everyone has learned to dread. The old generation of support bots followed rigid decision trees. They could only handle the exact paths someone had pre-programmed, they misunderstood anything phrased unexpectedly, and they became a wall between the customer and a human rather than a help. Everyone has hammered "talk to an agent" into one of these and remembers the frustration.',
        'Modern AI support agents work fundamentally differently. They understand natural language, so a customer can ask in their own words rather than picking from a menu. Critically, they answer from your actual content your help docs, your policies, your product information using retrieval-augmented generation, so the answers are accurate and specific to your business rather than generic or invented. And they can take action: not just describe how to do something, but actually do it in your systems where appropriate. The shift is from a bot that deflects to an agent that resolves.',
        'Just as important, a well-built AI support system knows its limits. When a question is complex, sensitive, or outside what it should handle, it hands off to a human with the conversation history and a summary attached, so the customer does not have to repeat themselves and the agent starts from context. Done right, the customer barely notices the handoff; done wrong, in the old style, the handoff was the whole frustrating point.'
      ]
    },

    // ========== FEATURES: What We Build ==========
    {
      type: 'features',
      heading: 'What We Build',
      items: [
        {
          title: 'AI support agents',
          description: 'Agents that answer customer questions from your own documentation and policies via RAG, so responses are accurate and on-brand rather than generic web answers or fabrications.',
          icon: 'Bot'
        },
        {
          title: 'Ticket triage and routing',
          description: 'Automatic classification, prioritization, and routing of incoming tickets to the right person or team, so nothing sits in a general queue waiting to be sorted by hand.',
          icon: 'GitBranch'
        },
        {
          title: 'AI-drafted replies',
          description: 'For tickets your team handles directly, the AI drafts a suggested response your agents can approve or edit in one click keeping a human in control while removing most of the typing.',
          icon: 'FileText'
        },
        {
          title: '24/7 chat and email automation',
          description: 'First-line resolution around the clock across your channels, so customers get help at midnight and on weekends without you staffing those hours.',
          icon: 'Clock'
        },
        {
          title: 'Review and feedback response',
          description: 'Automated drafting of responses to reviews and survey feedback, so this important but time-consuming work actually gets done consistently.',
          icon: 'Star'
        }
      ]
    },

    // ========== TEXT: How We Keep Answers Accurate and On-Brand ==========
    {
      type: 'text',
      heading: 'How We Keep Answers Accurate and On-Brand',
      content: [
        'The single biggest fear about AI support is that it will confidently tell a customer something wrong. That fear is justified for AI that answers from its general training, and it is exactly what we design against. The core technique is grounding: instead of letting the model answer from what it vaguely "knows," we connect it to your real content your help center, your policy documents, your product information and have it answer from that. This is retrieval-augmented generation, and it is the difference between an agent you can put in front of customers and one you cannot.',
        'On top of grounding, we add guardrails around what the agent is allowed to say and do, keep humans in the loop for sensitive categories, and monitor the agent\'s responses so problems surface early and the system improves over time. The aim is an agent whose answers are as accurate as your documentation and where the documentation is silent, an agent that says so and escalates, rather than one that guesses to seem helpful.',
        'There is a useful side effect to this approach: building an AI support agent forces your knowledge base into shape. Gaps and contradictions in your documentation become visible because the agent surfaces them. Many clients find their human support improves alongside the automation, simply because the underlying knowledge gets cleaned up in the process.'
      ]
    },

    // ========== GRID: Integrations (now 6 items) ==========
    {
      type: 'grid',
      heading: 'Integrations',
      subheading: 'We build support automation into the tools you already run on, rather than asking you to switch platforms.',
      items: [
        {
          title: 'Help desks',
          description: 'Zendesk, Intercom, Freshdesk, Gorgias, HelpScout, and others.',
          icon: 'Headphones'
        },
        {
          title: 'Channels',
          description: 'Web chat, email, and messaging platforms where your customers already reach you.',
          icon: 'MessageSquare'
        },
        {
          title: 'Knowledge sources',
          description: 'Your help center, documentation, and policy content as the grounding for answers.',
          icon: 'Database'
        },
        {
          title: 'CRM',
          description: 'So the agent has customer context and can log interactions where they belong.',
          icon: 'Briefcase'
        },
        {
          title: 'Internal chat',
          description: 'Slack or Teams, for routing, alerts, and human handoffs.',
          icon: 'Users'
        },
        // ✅ NEW 6th card – makes 2 rows of 3
        {
          title: 'Analytics & reporting',
          description: 'Real‑time dashboards showing ticket volume, deflection rate, response time, and customer sentiment so you can track ROI and continuously improve your support operations.',
          icon: 'BarChart3'
        }
      ]
    },

    // ========== TEXT: The Returns You Can Expect ==========
    {
      type: 'text',
      heading: 'The Returns You Can Expect',
      content: [
        'The value of support automation shows up in four measurable places. Response time falls, often dramatically, because the AI answers instantly instead of a customer waiting in a queue. Ticket deflection rises, as the agent resolves the routine questions that previously consumed your team freeing capacity without adding people. Coverage extends to around the clock, so customers in different time zones or with late-night questions are served without you staffing those hours. And your team\'s work shifts upward, from repetitive triage to the complex, relationship-defining cases where human skill actually matters.',
        'It is worth being realistic about the shape of this. AI support automation does not eliminate your support team, and any vendor promising that is overselling. What it does is change the mix of what your team handles absorbing the high-volume routine so the humans focus on the cases that genuinely need them. For most businesses, the right framing is not "replace support" but "let support scale without scaling headcount in lockstep, and let the people you have do better work."'
      ]
    },

    // ========== FEATURES: Why Clickmasters (now 6 items) ==========
    {
      type: 'features',
      heading: 'Why Clickmasters',
      items: [
        {
          title: 'Grounded in your real content',
          description: 'Answers come from your documentation via RAG, so the agent is accurate and on-brand, not generic or invented.',
          icon: 'Shield'
        },
        {
          title: 'Human-in-the-loop by design',
          description: 'Automation handles the volume; your people handle the nuance, with clean handoffs that carry full context.',
          icon: 'Users'
        },
        {
          title: 'Built into your stack',
          description: 'We work inside your existing help desk and channels rather than forcing a platform change.',
          icon: 'Briefcase'
        },
        {
          title: 'You own it',
          description: 'Transparent, tunable systems and a knowledge base you control.',
          icon: 'Award'
        },
        // ✅ NEW 5th card
        {
          title: 'Scalable support capacity',
          description: 'Our AI handles spikes in ticket volume without breaking a sweat so you never need to over‑hire for peak seasons or worry about unexpected surges.',
          icon: 'TrendingUp'
        }
      ]
    },

    // ========== STEPS: How We Roll It Out ==========
    {
      type: 'steps',
      heading: 'How We Roll It Out',
      subheading: 'Deploying AI support is a place where a careful rollout matters, because the cost of a bad early experience is customer trust. We stage it deliberately so the agent earns its place before it is given more responsibility.',
      items: [
        {
          title: 'Ground the agent in your knowledge',
          description: 'We connect it to your help center, documentation, and policies, so from day one it answers from your real content rather than generic knowledge.'
        },
        {
          title: 'Start on a defined set of common questions',
          description: 'We launch the agent on the high-volume, low-risk questions it can clearly handle well, rather than turning it loose on everything at once.'
        },
        {
          title: 'Run with human oversight',
          description: 'Early on, responses can be reviewed or the agent can suggest rather than send, so you see its quality in practice and build confidence before widening its autonomy.'
        },
        {
          title: 'Expand scope as it proves itself',
          description: 'As the agent demonstrates accuracy, we extend it to more question types and more action, always keeping clean escalation to humans for anything outside its remit.'
        }
      ]
    },

    // ========== TEXT: Staged Approach ==========
    {
      type: 'text',
      content: 'This staged approach captures value quickly on the routine questions while protecting the customer experience, and it surfaces gaps in your documentation along the way which improves both the automated and the human side of support.'
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What is AI customer support automation?',
          description: 'It is the use of AI agents and workflows to handle customer support tasks automatically answering common questions from your documentation, triaging and routing tickets, and drafting replies while escalating complex or sensitive cases to human agents with full context.'
        },
        {
          title: 'Can AI replace customer support agents?',
          description: 'No, and you should be wary of anyone who says it can. It handles repetitive, high-volume queries so human agents focus on complex, sensitive, or high-value cases. The best setups are human-in-the-loop, with the AI absorbing volume rather than replacing people.'
        },
        {
          title: 'How does AI answer support questions accurately?',
          description: 'Through retrieval-augmented generation (RAG): the AI answers from your specific documentation and policies rather than general web knowledge, which keeps responses accurate and on-brand. Where your documentation is silent, a well-built agent says so and escalates rather than guessing.'
        },
        {
          title: 'Won\'t customers be frustrated by a bot?',
          description: 'They are frustrated by old, scripted bots that misunderstand and dead-end. Modern AI agents understand natural language, answer accurately from your content, take real action, and hand off cleanly to a human when needed which is a markedly better experience than waiting in a queue for a routine answer.'
        },
        {
          title: 'Which help desks do you work with?',
          description: 'We build into Zendesk, Intercom, Freshdesk, Gorgias, HelpScout, and other major platforms, alongside your web chat, email, and messaging channels, so the automation fits your existing setup rather than requiring a switch.'
        },
        {
          title: 'How long does it take to set up?',
          description: 'We typically start by grounding an agent in your existing documentation and deploying it on a defined set of common questions, which can be live in a few weeks. From there we expand its scope and autonomy as it proves accurate, cleaning up knowledge gaps as they surface.'
        }
      ]
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'See how many tickets you could deflect automatically.',
      subheading: 'Book a free support automation audit 30 minutes, no obligation.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true
      }
    }
  ]
};