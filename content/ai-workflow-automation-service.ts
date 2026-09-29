// content/services/ai-workflow-automation-service/pageContent.ts
import { ServiceContent } from './type';  

export const aiWorkflowAutomationService: ServiceContent = {
  slug: 'ai-workflow-automation',
  title: 'AI Workflow Automation Services | Clickmasters',
  metaDescription: 'Clickmasters builds AI-powered workflow automation that moves data, triggers actions, and runs multi-step processes across your tools no manual hand-offs.',
  keywords: 'ai workflow automation, workflow automation services, business automation, zapier automation',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'AI Workflow Automation Services',
      subheading: 'Connect your apps and automate the multi-step work between them with AI making the judgment calls a person used to make.',
      content: [
        'Clickmasters builds AI workflow automation that connects the tools you already use and runs the multi-step work between them automatically. A lead arrives, gets enriched, scored, routed, and followed up without anyone copying data from one tab to another. That is a workflow, and when it runs by hand it is slow, inconsistent, and quietly expensive in ways most businesses never measure.',
        'This page covers what AI workflow automation actually is, how it differs from the basic automation you may already use, the specific kinds of workflows we build, the platforms we build them on and why we choose between them, a set of worked examples so you can see the shape of the work, and an honest guide to deciding which of your processes is worth automating first. By the end you should be able to look at your own operation and spot the workflows that are costing you the most.'
      ],
      stats: [
        { label: 'PROJECTS', value: '500+' },
        { label: 'CLIENTS', value: '120+' }
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false }
      ],
      image: {
        src: '/images/workflow.png',
        alt: 'AI Robot Illustration for Workflow Automation',
        width: 604,
        height: 413
      }
    },

    // ========== TEXT: What Is AI Workflow Automation? ==========
    {
      type: 'text',
      heading: 'What Is AI Workflow Automation?',
      content: [
        'A workflow is everything that has to happen between a trigger and a result. The trigger might be a form submission, a new deal created, an incoming email, a paid invoice, or simply a scheduled time of day. The result might be a booked meeting, an updated record, a sent invoice, a generated report, or a resolved ticket. Between those two points sits a chain of steps and in most businesses, a person is performing those steps manually, one at a time, whenever they get to them.',
        'Workflow automation runs that chain for you. The distinction worth understanding is between basic, rule-based automation and AI workflow automation. Basic automation follows fixed instructions: when X happens, do Y. It is genuinely useful for simple, predictable steps move this record, send that notification. But it breaks the moment a step requires reading something unstructured, interpreting intent, or deciding between several possible paths.',
        'AI workflow automation adds a reasoning layer on top of that plumbing. The system can read an unstructured message, classify what it is, extract the important details, draft a relevant response, decide which branch of the process applies, and handle the messy, real-world cases that rigid rules cannot. That difference is what allows automation to move beyond simple triggers into work that previously required human judgment.',
        'Here is the difference made concrete. A rule-based automation can take a lead from a web form and create a contact in your CRM. An AI workflow can read the lead\'s actual message, work out what they are really asking for, score how well they match your ideal customer, write a genuinely relevant first reply rather than a generic template, route them to the right salesperson based on the content, and then continue or adjust the follow-up sequence depending on whether and how they respond. One moves data. The other does the thinking a person used to do.'
      ]
    },

    // ========== TEXT: Why Manual Workflows Cost More Than They Look ==========
    {
      type: 'text',
      heading: 'Why Manual Workflows Cost More Than They Look',
      content: [
        'The cost of a manual workflow is easy to underestimate because it is spread across hundreds of small moments. Thirty seconds copying a field here. Two minutes checking a status there. Five minutes reformatting a report. A few minutes hunting for the right piece of information before you can even start. Each instance is individually trivial, which is exactly why it never gets measured. In aggregate, though, it adds up to a part-time job that nobody was ever hired to do performed in fragments by people who were hired to do something more valuable.',
        'There is a second, larger cost that is even easier to miss: manual workflows leak. A human forgets the day-three follow-up. Someone mistypes a number when transferring it between systems. A step gets skipped when things are busy. The lead that arrives at nine in the evening sits unanswered until morning, by which point a competitor who automated their response has already replied. Every one of these leaks is a real cost a lost deal, a billing error that takes hours to untangle, a customer who quietly churns because the experience felt slow. Automated workflows do not get tired, distracted, or overwhelmed. They run the same way every single time, at any hour, including the hours your team is asleep.',
        'The third cost is the one that matters most if you are trying to grow: manual workflows do not scale. Double your lead volume, your order volume, or your ticket volume, and you need roughly double the people performing the manual steps. The manual approach ties your capacity directly to your headcount. Automate the workflow and you can often handle several times the volume with the same team, because the system absorbs the increase. For a business trying to scale efficiently, that is the entire point growth that does not require hiring in lockstep.',
        'When we run an automation audit, this is what we are really hunting for: the workflows where these three costs accumulated time, leakage, and the inability to scale are highest. Those are almost never the flashy, interesting processes. They are the boring, high-volume, universally disliked ones that everyone assumes simply have to be done by hand.'
      ]
    },

    // ========== FEATURES: Our AI Workflow Automation Services ==========
    {
      type: 'features',
      heading: 'Our AI Workflow Automation Services',
      items: [
        {
          title: 'Multi-step workflow design',
          description: 'We map an entire process every trigger, every step, every hand-off between people and systems and rebuild it as an automated workflow. The mapping itself is valuable: businesses are routinely surprised by how many steps a "simple" process actually contains once it is written down.',
          icon: 'Layers'
        },
        {
          title: 'AI decision steps',
          description: 'We embed AI inside the workflow to handle the parts that simple rules cannot: classifying incoming information, extracting data from unstructured text, drafting content, and choosing between branches based on context. This is what separates AI workflow automation from the basic version.',
          icon: 'Brain'
        },
        {
          title: 'App-to-app integration',
          description: 'We connect your CRM, email, spreadsheets, help desk, billing, and other SaaS tools so data flows between them automatically. The goal is to eliminate copy-paste entirely every place a human currently moves information by hand is a place a workflow can take over.',
          icon: 'Link2'
        },
        {
          title: 'Trigger and schedule automation',
          description: 'We build workflows that fire on events (a new lead, a paid invoice, a support ticket, a status change) or on a schedule (the Monday report, the monthly reconciliation, the nightly sync). Once built, they run with no one watching.',
          icon: 'Clock'
        },
        {
          title: 'Error handling and monitoring',
          description: 'We build workflows that anticipate failure with retries, alerts, and fallback paths so a hiccup in one connected app does not silently break the entire chain. This is the single biggest difference between an impressive demo and a system you can actually rely on in production, and it is where inexperienced builders cut corners.',
          icon: 'Shield'
        }
      ]
    },

    // ========== GRID: Worked Examples ==========
    {
      type: 'grid',
      heading: 'Worked Examples: What These Workflows Look Like in Practice',
      subheading: 'Abstract descriptions only go so far. Here are five workflows we commonly build, described concretely enough that you can recognize the equivalents in your own business.',
      items: [
        {
          title: 'Speed-to-lead and lead management',
          description: 'A prospect fills out a form on your site. Instantly, the workflow enriches the contact with company and role data, scores it against your ideal-customer profile, and decides whether it is sales-ready or needs nurturing. If it is ready, an AI step drafts a personalized first reply referencing what the prospect actually asked about, routes the lead to the right rep based on territory or product, and creates the task in the CRM. If the prospect does not respond, the workflow continues a follow-up sequence on its own. The entire chain, from submission to first personalized contact, happens in seconds rather than hours and nothing depends on a busy human remembering to act.',
          icon: 'Rocket'
        },
        {
          title: 'Order and fulfillment processing',
          description: 'An order comes in. The workflow validates it, updates inventory, notifies the customer with accurate details, triggers fulfillment, and logs everything to your systems. If something is out of stock or a payment fails, the workflow flags it to a human with the full context attached instead of silently stalling. A process that might involve three systems and several manual touches becomes a single automated flow with human attention reserved for genuine exceptions.',
          icon: 'ShoppingCart'
        },
        {
          title: 'Data synchronization across systems',
          description: 'Most businesses run several tools that all hold overlapping data a CRM, a billing system, a support platform, a spreadsheet someone maintains. Keeping them consistent by hand is endless, error-prone work. A synchronization workflow watches for changes in one system and propagates them to the others automatically, so a customer\'s updated address, plan, or status is correct everywhere without anyone re-entering it.',
          icon: 'Database'
        },
        {
          title: 'Approval routing',
          description: 'A request a discount, an expense, a piece of content, a contract needs sign-off. The workflow sends it to the right approver, reminds them if it stalls, escalates it if they are unavailable, and records the decision. What used to be a chain of forwarded emails that could sit for days becomes a tracked, moving process that does not get stuck in an inbox.',
          icon: 'Check'
        },
        {
          title: 'Content and reporting',
          description: 'Instead of someone rebuilding the same report every Monday, the workflow assembles it from live data on a schedule and delivers it to the right people. Where drafting is involved, an AI step produces a first version a summary, a status update, a customer email for a human to approve. The repetitive production work disappears; the judgment stays with your team.',
          icon: 'FileText'
        },
        // ✅ NEW 6th card – makes 2 rows of 3
        {
          title: 'AI-Powered Document Processing',
          description: 'Extract and validate data from invoices, contracts, and forms automatically. The workflow reads unstructured documents, extracts key fields, validates against business rules, and routes the structured data to your systems—eliminating manual data entry and reducing errors.',
          icon: 'FileText'
        }
      ]
    },

    // ========== GRID: The Platforms We Build On ==========
    {
      type: 'grid',
      heading: 'The Platforms We Build On',
      subheading: 'We are deliberately platform-agnostic. We choose based on your budget, your data requirements, and the complexity of what you are automating and we will tell you honestly when the cheaper option is the better fit.',
      items: [
        {
          title: 'Zapier',
          description: 'Simplest setup, largest app library, fastest to build best for linear, lower-volume flows and non-technical teams who want to self-serve later.',
          icon: 'Zap'
        },
        {
          title: 'Make',
          description: 'Visual canvas with strong branching logic and lower run-cost best for complex multi-step workflows with real conditional logic.',
          icon: 'GitBranch'
        },
        {
          title: 'n8n',
          description: 'Self-hosted, deep AI/LLM nodes, no per-run fees, full data control best for high volume, data-sensitive, or AI-heavy production workflows.',
          icon: 'Database'
        }
      ]
    },

    // ========== STEPS: How We Work ==========
    {
      type: 'steps',
      heading: 'How We Work',
      subheading: 'Our process is built to avoid the three ways automation projects usually fail: trying to automate everything at once, building black boxes the client cannot maintain, and producing demos that never survive real use.',
      items: [
        {
          title: 'Free audit',
          description: 'We map your current manual workflows and identify the one with the highest return on automation. You get a clear recommendation, including an honest assessment of what is and is not worth doing yet.'
        },
        {
          title: 'Build in sprints',
          description: 'We construct the workflow against your real tools and real data, in two-to-four-week cycles, with you reviewing as it takes shape rather than waiting months for a reveal.'
        },
        {
          title: 'Test and hand off',
          description: 'We deliver documented, transparent workflows you own, with error handling and monitoring built in so they survive contact with reality.'
        },
        {
          title: 'Optimize',
          description: 'We monitor and refine, then expand to the next workflow once the first is proving its value. Starting with one well-chosen win builds trust and gives us the real-world feedback to make the next one better.'
        }
      ]
    },

    // ========== TEXT: Common Objections ==========
    {
      type: 'text',
      heading: 'Common Objections, Answered Honestly',
      content: [
        '"Our processes are too unique to automate." Almost every business believes this, and almost every business is wrong about it. The specifics are unique; the underlying shapes capture, enrich, route, follow up, report are nearly universal. Uniqueness usually lives in a few genuine decision points, which is exactly where we keep humans in the loop. The rest automates fine.',
        '"We tried automation before and it broke." Usually that means it was built without error handling the demo worked, then an app changed or an edge case appeared and the whole thing failed silently. Production-grade workflows are built to expect failure and surface it, which is precisely the part amateur builds skip.',
        '"We don\'t have the technical team to maintain it." You do not need one. We hand off documented, transparent workflows, and we offer ongoing management if you would rather not touch them at all. The point is that the choice is yours, not that you are dependent on us.'
      ]
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What is AI workflow automation?',
          description: 'AI workflow automation uses software and AI to run multi-step business processes automatically moving data between apps, making decisions, and triggering actions so a sequence of tasks happens without manual effort. The AI layer handles classification, drafting, and decisions that simple rule-based automation cannot.'
        },
        {
          title: 'How is it different from regular automation?',
          description: 'Regular automation follows fixed rules: when X happens, do Y. AI workflow automation adds reasoning it can read unstructured input, classify it, draft responses, and choose between paths handling the real-world cases that rigid rules would break on.'
        },
        {
          title: 'Which tools do you use?',
          description: 'We build on n8n, Make, and Zapier depending on complexity, cost, and data-control needs, plus custom code where required. Because we are not tied to any single platform, the recommendation is driven by your situation rather than ours.'
        },
        {
          title: 'How long does it take to build a workflow?',
          description: 'A focused workflow is typically built in a two-to-four-week sprint. We start with one high-value workflow so you see results quickly, then expand from there once it is proven.'
        },
        {
          title: 'What happens if an app changes or a workflow breaks?',
          description: 'We build in error handling, retries, and alerts so failures surface immediately rather than silently. With ongoing optimization we monitor and fix issues proactively; with a hand-off, your documented system makes fixes straightforward for any competent person.'
        },
        {
          title: 'Can workflows use AI to make decisions, or just move data?',
          description: 'Both. The plumbing moves data between systems; the AI steps make judgment calls classifying, extracting, drafting, and branching. That combination is what lets a workflow handle work that previously required a person, not just shuffle information around.'
        }
      ]
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'See which of your workflows is worth automating first.',
      subheading: 'Book a free automation audit 30 minutes, no obligation, and an honest answer.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true
      }
    }
  ]
};