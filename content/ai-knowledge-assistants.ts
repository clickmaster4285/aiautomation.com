// content/services/ai-knowledge-assistants.ts
import { ServiceContent } from './type';  

export const aiKnowledgeAssistants: ServiceContent = {
  slug: 'ai-knowledge-assistants',
  title: 'AI Knowledge Assistants & Internal Tools | Clickmasters',
  metaDescription: 'Clickmasters builds internal AI knowledge assistants that answer from your company\'s documents, policies, and data so your team finds answers in seconds.',
  keywords: 'ai knowledge assistant, internal ai, knowledge management, ai search',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'AI Knowledge Assistants',
      subheading: 'Give your team an AI that knows your business answering from your own documents, policies, and data, where your team already works.',
      content: [
        'Clickmasters builds internal AI knowledge assistants that answer your team\'s questions from your company\'s own documents, policies, and data. Instead of digging through shared drives, pinging colleagues, and re-asking the same questions, your people get accurate answers in seconds grounded in your real content and available right where they already work.',
        'This page explains the cost of scattered internal knowledge, what a knowledge assistant is and how it differs from a public chatbot, what we build, how we keep it secure and accurate, and where it delivers the most value inside an organization.'
      ],
      stats: [
        { label: 'PROJECTS', value: '90+' },
        { label: 'CLIENTS', value: '40+' }
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false }
      ],
      image: {
        src: '/images/ai-knowledge.png',
        alt: 'AI Knowledge Assistant illustration',
        width: 612,
        height: 408
      }
    },

    // ========== TEXT: The Cost of Knowledge Trapped in Drives and Heads ==========
    {
      type: 'text',
      heading: 'The Cost of Knowledge Trapped in Drives and Heads',
      content: [
        'In most organizations, the information people need to do their jobs is scattered: across documents in a shared drive, pages in a wiki, threads in Slack, policies in a PDF nobody can find, and most fragile of all in the heads of a few long-tenured colleagues. Finding an answer means searching several systems, interrupting a coworker, or simply guessing. Studies of knowledge work consistently find that a meaningful share of every week is lost to searching for information that already exists somewhere in the company.',
        'The costs compound in ways that are easy to miss. New hires take longer to become productive because they do not yet know where anything lives or whom to ask. Experienced staff are constantly interrupted to answer the same questions. Knowledge walks out the door when a key person leaves. And decisions get made on stale or half-remembered information because finding the current, correct answer was too much friction in the moment.',
        'An AI knowledge assistant addresses this directly. It indexes your internal knowledge and answers questions from it instantly, in natural language, so the right answer is a question away rather than a search-and-interrupt expedition. The knowledge stops being trapped and starts being available.'
      ]
    },

    // ========== TEXT: What a Knowledge Assistant Is and Isn't ==========
    {
      type: 'text',
      heading: 'What a Knowledge Assistant Is and Isn\'t',
      content: [
        'A knowledge assistant is an internal-facing AI that answers from your company\'s own content. It is not a public chatbot for customers, and it is not a general-purpose model that answers from the open internet. Its entire value comes from being grounded in your specific, internal, often confidential information your processes, your policies, your product details, your accumulated documentation and answering only from that.',
        'This grounding is what makes it trustworthy and useful. When an employee asks how a particular process works, what the policy is on something, or where to find a piece of information, the assistant retrieves the relevant content from your real documents and answers based on it, citing or pointing to the source. It is not guessing or generalizing; it is surfacing what your organization actually knows. Where the answer is not in your content, a well-built assistant says so rather than inventing one.'
      ]
    },

    // ========== FEATURES: What We Build (now 6 items) ==========
    {
      type: 'features',
      heading: 'What We Build',
      items: [
        {
          title: 'Internal Q&A assistant',
          description: 'An assistant that answers employee questions from your documents, wikis, and policies via RAG, with sources, so answers are accurate and verifiable.',
          icon: 'MessageSquare'
        },
        {
          title: 'Knowledge base search',
          description: 'Natural-language search across your company knowledge, so people find answers by asking rather than by guessing keywords.',
          icon: 'Search'
        },
        {
          title: 'Slack and Teams integration',
          description: 'The assistant available right where your team works, so asking it is as easy as messaging a colleague.',
          icon: 'Users'
        },
        {
          title: 'Onboarding assistant',
          description: 'An assistant that helps new hires find answers independently, shortening ramp time and reducing interruptions to the rest of the team.',
          icon: 'Rocket'
        },
        {
          title: 'Secure and private builds',
          description: 'Assistants built so your internal data stays under your control, with access scoped appropriately.',
          icon: 'Shield'
        }
      ]
    },

    // ========== TEXT: Keeping It Secure and Accurate ==========
    {
      type: 'text',
      heading: 'Keeping It Secure and Accurate',
      content: [
        'Internal knowledge is sensitive, so security is central, not an afterthought. We build knowledge assistants with proper access controls so people see only what they are permitted to and, where data sensitivity demands it, on self-hostable infrastructure so your information stays entirely within your environment rather than flowing to a third party. The assistant is scoped to your content and your permissions, nothing more.',
        'Accuracy comes from the same grounding principle that makes customer-facing AI trustworthy: retrieval-augmented generation. The assistant answers from your actual documents rather than from a model\'s general training, and it can point to the source so an employee can verify and read further. Where your content does not contain an answer, the assistant says so instead of fabricating one which matters even more internally than externally, because staff act on these answers directly.',
        'As with support bots, building a knowledge assistant tends to improve the underlying knowledge itself. Gaps, contradictions, and out-of-date documents become visible because the assistant surfaces them, giving you a clear picture of where your internal documentation needs attention.'
      ]
    },

    // ========== GRID: Where Knowledge Assistants Deliver Most (now 6 items) ==========
    {
      type: 'grid',
      heading: 'Where Knowledge Assistants Deliver Most',
      subheading: 'The value is highest where knowledge is large, scattered, frequently needed, and currently locked in places that are hard to search.',
      items: [
        {
          title: 'Onboarding and ramp',
          description: 'New hires self-serve answers instead of constantly asking, becoming productive faster.',
          icon: 'Rocket'
        },
        {
          title: 'Support and operations teams',
          description: 'Front-line staff get policy and process answers instantly, improving consistency.',
          icon: 'Headphones'
        },
        {
          title: 'Sales enablement',
          description: 'Reps find product details, pricing logic, and competitive information on demand.',
          icon: 'TrendingUp'
        },
        {
          title: 'Internal help desks',
          description: 'IT and HR questions answered from documented policies, deflecting routine queries.',
          icon: 'Briefcase'
        },
        {
          title: 'Subject-matter resilience',
          description: 'Critical knowledge stays accessible even when the expert who held it is unavailable or leaves.',
          icon: 'Shield'
        },
        // ✅ NEW 6th card – makes 2 rows of 3
        {
          title: 'Product development',
          description: 'Engineering and product teams get instant access to technical docs, API references, design specs, and past decisions accelerating development and reducing context‑switching.',
          icon: 'Code'
        }
      ]
    },

    // ========== FEATURES: Why Clickmasters (now 6 items) ==========
    {
      type: 'features',
      heading: 'Why Clickmasters',
      items: [
        {
          title: 'Grounded in your real knowledge',
          description: 'Answers from your documents via RAG, with sources, not generic or invented information.',
          icon: 'Database'
        },
        {
          title: 'Secure by design',
          description: 'Access controls and self-hosting where needed, so sensitive internal data stays in your control.',
          icon: 'Shield'
        },
        {
          title: 'Where your team works',
          description: 'Deployed in Slack, Teams, or your tools, so it is genuinely used.',
          icon: 'Users'
        },
        {
          title: 'You own it',
          description: 'Transparent assistants and a knowledge layer you control.',
          icon: 'Award'
        },
        // ✅ NEW 5th card
        {
          title: 'Multi‑source ingestion',
          description: 'We connect the assistant to all your knowledge sources Google Drive, Confluence, SharePoint, Notion, Slack, and more so no knowledge silo is left untouched.',
          icon: 'Link2'
        }
      ]
    },

    // ========== STEPS: How We Build a Knowledge Assistant ==========
    {
      type: 'steps',
      heading: 'How We Build a Knowledge Assistant',
      subheading: 'A knowledge assistant is only as good as the content behind it and the care taken in connecting to it, so our process is deliberate.',
      items: [
        {
          title: 'Identify and connect sources',
          description: 'We map where your knowledge actually lives documents, wikis, Slack, policy files and connect the assistant to the sources that matter, respecting existing permissions.'
        },
        {
          title: 'Index and ground',
          description: 'We index that content so the assistant retrieves and answers from it via RAG, with the ability to point back to the source for verification.'
        },
        {
          title: 'Set access and security',
          description: 'We scope who can see what, and where data is sensitive we build on infrastructure that keeps it in your environment.'
        },
        {
          title: 'Launch for a team, then expand',
          description: 'We start with a defined team or use case, learn from real questions, and expand sources and scope as the assistant proves its value.'
        }
      ]
    },

    // ========== TEXT: Worked Example ==========
    {
      type: 'text',
      heading: 'A Worked Example: Cutting New-Hire Ramp Time',
      content: [
        'Consider onboarding, where the cost of scattered knowledge is most visible. A new hire in their first weeks has constant questions how a process works, where to find something, what the policy is, who owns what. Traditionally each question means searching unfamiliar systems or, more often, interrupting a busy colleague, which slows the new hire and drains the team around them.',
        'With a knowledge assistant, the new hire simply asks in Slack or Teams, in plain language and gets an accurate, sourced answer drawn from the company\'s real documentation, instantly. They become productive faster because they can self-serve answers without waiting, and the experienced staff who would otherwise field those questions keep their focus. The same assistant that helps the new hire on day one keeps serving the whole team indefinitely, and preserves hard-won knowledge even when the people who held it move on.'
      ]
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What is an AI knowledge assistant?',
          description: 'An AI knowledge assistant answers employee questions from a company\'s own documents, policies, and data using retrieval-augmented generation, so staff get accurate, sourced internal answers instantly instead of searching multiple systems or interrupting colleagues.'
        },
        {
          title: 'Is our internal data safe?',
          description: 'Yes assistants can be built with access controls and, where needed, self-hosted infrastructure so sensitive company data stays in your environment. Access is scoped so people see only what they are permitted to.'
        },
        {
          title: 'Where does the assistant get its answers?',
          description: 'From your indexed internal content documents, wikis, knowledge bases, policies not the open web. This grounding keeps answers accurate and specific to your business, and the assistant can point to the source.'
        },
        {
          title: 'How is this different from using ChatGPT internally?',
          description: 'A general model answers from its training and does not know your business; a knowledge assistant answers from your specific internal content with proper access controls. The grounding and security are exactly what make it trustworthy for internal use.'
        },
        {
          title: 'What happens if the answer isn\'t in our documents?',
          description: 'A well-built assistant says it does not have that information rather than inventing an answer. This honesty matters especially internally, because staff act on these answers directly.'
        },
        {
          title: 'How long does it take to set up?',
          description: 'We typically index your core documentation and launch the assistant for a defined team or use case within a few weeks, then expand its scope and sources as it proves useful.'
        }
      ]
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Give your team an AI that knows your business.',
      subheading: 'Book a free automation audit 30 minutes, no obligation.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true
      }
    }
  ]
};