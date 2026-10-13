// content/services/business-process-automation.ts
import { ServiceContent } from '../type';

export const businessProcessAutomation: ServiceContent = {
  slug: 'business-process-automation',
  title: 'Business Process Automation Services | Improve Operations',
  metaDescription: 'Improve business operations with process automation services. Automate approvals, onboarding, finance, sales, and other business processes with Clickmasters.',
  keywords: 'business process automation services, business automation services, process automation software, business process automation consulting, automation software',
  sections: [
    // ========== HERO ==========
   {
  type: 'hero',
  heading: 'Business Process Automation Services for Faster Operations',
  subheading: 'Improve efficiency across your company with business process automation services from Clickmasters. We help businesses automate complete processes across sales, finance, HR, customer service, and operations.',
  content: [],
  stats: [
    { label: 'PROCESSES', value: 'Automate complete business processes' },
    { label: 'APPROVALS', value: 'Reduce manual approvals and data entry' },
    { label: 'ACCURACY', value: 'Improve process speed and accuracy' },
    { label: 'INTEGRATIONS', value: 'Connect multiple teams and systems' },
    { label: 'SCALE', value: 'Build more scalable operations' }
  ],
  ctas: [
    { text: 'Improve Your Business Processes', link: '/free-automation-audit', primary: true }
  ],
  image: {
    src: '/images/bussiness.png',
    alt: 'Business Process Automation illustration',
    width: 667,
    height: 374
  }
},

    // ========== TEXT: Why Business Automation Services Matter ==========
   {
  type: 'text',
  heading: 'Turn Manual Business Processes Into Automated Systems',
  content: [
    'Many business processes include several steps, employees, systems, and approvals. When these steps depend too much on manual work, delays and errors become more common. Business process automation helps connect these steps into one structured system. Information can move automatically from one stage to another while employees remain involved where human decisions are required. Clickmasters builds automation solutions that make your processes easier to manage, track, and scale.'
  ]
},

    // ========== FEATURES: Our Business Process Automation Services ==========
    {
      type: 'features',
      heading: 'Our Business Process Automation Services',
      subheading: 'At Clickmasters, we offer a complete range of business process automation services designed to fit wherever your business is in its automation journey — from early process mapping to full AI business process automation deployment.',
      items: [
        {
          title: 'Process Assessment & Mapping',
          description: 'We start by analysing your current workflows, spotting bottlenecks, and mapping out a more efficient path forward before any automation is built.',
          icon: 'Search'
        },
        {
          title: 'Workflow & Low-Code Automation',
          description: 'Using workflow automation software like Zapier or Make, we connect your everyday apps and build automated sequences that eliminate manual handoffs.',
          icon: 'Zap'
        },
        {
          title: 'Robotic Process Automation (RPA)',
          description: 'Our automation tools deploy software bots to handle high-volume, repetitive desktop tasks like data entry, freeing your team from routine busywork.',
          icon: 'Bot'
        },
        {
          title: 'AI & Intelligent Document Processing',
          description: 'We use AI business process automation to extract data from invoices, read documents automatically, and run smarter, decision-based workflows.',
          icon: 'FileText'
        },
        {
          title: 'System Integration',
          description: 'We connect your CRM, ERP, and customer support tools through APIs, ensuring data moves automatically across every system you rely on.',
          icon: 'Link2'
        }
      ]
    },

    // ========== GRID: Common Business Automation Problems We Solve ==========
    {
      type: 'grid',
      heading: 'Common Business Automation Problems We Solve',
      subheading: 'Before recommending any process automation software, we look at where your team is actually losing time — usually it\'s the same handful of recurring issues across finance, HR, and operations.',
      items: [
        {
          title: 'Too Much Manual Data Entry',
          description: 'Solution: We automate repetitive data capture using automation tools that pull information directly from documents, forms, and systems.',
          icon: 'Keyboard'
        },
        {
          title: 'Disconnected Business Systems',
          description: 'Solution: We integrate your CRM, ERP, and WMS so data flows automatically instead of being re-entered by hand.',
          icon: 'Unplug'
        },
        {
          title: 'Slow Approval Processes',
          description: 'Solution: We build workflow automation software that routes approvals instantly based on your rules.',
          icon: 'GitBranch'
        },
        {
          title: 'Frequent Human Errors in Routine Tasks',
          description: 'Solution: We standardize repetitive processes with process automation software that follows consistent logic every time.',
          icon: 'Shield'
        },
        {
          title: 'No Visibility Into Process Performance',
          description: 'Solution: We add dashboards and monitoring so you can track bottlenecks and workflow status in real time.',
          icon: 'BarChart3'
        },
        {
          title: 'Automation That Breaks on Exceptions',
          description: 'Solution: We design human-in-the-loop checkpoints so unusual cases get flagged for review instead of failing silently.',
          icon: 'AlertTriangle'
        }
      ]
    },

    // ========== FEATURES: Real Results from Business Process Automation Solutions ==========
    {
      type: 'features',
      heading: 'Real Results from Business Process Automation Solutions',
      subheading: 'Clients don\'t invest in business process automation solutions for the technology itself — they invest for the outcomes it produces across everyday operations. Here\'s what typically changes once automation is in place:',
      items: [
        {
          title: 'Fewer manual touchpoints',
          description: 'Fewer manual touchpoints across finance, HR, and operations.',
          icon: 'Hand'
        },
        {
          title: 'Faster processing times',
          description: 'Faster processing times on invoices, approvals, and requests.',
          icon: 'Clock'
        },
        {
          title: 'Lower error rates',
          description: 'Lower error rates on repetitive, rule-based tasks.',
          icon: 'Shield'
        },
        {
          title: 'Better scalability',
          description: 'Better scalability during high-volume periods without added staff.',
          icon: 'TrendingUp'
        },
        {
          title: 'Clearer visibility',
          description: 'Clearer visibility into where workflows slow down.',
          icon: 'Eye'
        },
        {
          title: 'Stronger compliance',
          description: 'Stronger compliance through consistent, auditable process execution.',
          icon: 'Scale'
        },
        {
          title: 'Measurable time savings',
          description: 'Measurable time savings for employees previously doing manual work.',
          icon: 'Timer'
        }
      ]
    },

    // ========== STEPS: Consulting & Implementation Strategy ==========
    {
      type: 'steps',
      heading: 'Our Process Automation Consulting & Implementation Strategy',
      subheading: 'Every engagement starts with understanding your business, not pushing a fixed package. Our process automation consulting approach follows a clear, step-by-step path from discovery to full deployment.',
      items: [
        {
          title: 'Process discovery & automation suitability review',
          description: 'We map your current workflows and assess task volume, repetition, and exception rates to identify the best automation candidates.'
        },
        {
          title: 'Technology & solution design',
          description: 'We choose the right mix of automation software, RPA, or AI business process automation, then design the workflow logic, integrations, and approval rules.'
        },
        {
          title: 'System integration',
          description: 'We connect your ERP, CRM, WMS, or cloud applications so that data flows automatically across systems.'
        },
        {
          title: 'Development and configuration',
          description: 'We build and configure the automation based on the approved design.'
        },
        {
          title: 'Testing and deployment',
          description: 'We validate the workflow against real scenarios, including exceptions, then roll it out in phases to reduce disruption.'
        },
        {
          title: 'Monitoring and optimisation',
          description: 'We track performance after launch and refine workflows over time.'
        }
      ]
    },

    // ========== STEPS: How We Deliver Business Process Automation Tools & Support ==========
    {
      type: 'steps',
      heading: 'How We Deliver Business Process Automation Tools & Support',
      subheading: 'Good business process automation tools are only half the job — delivery and ongoing support are what make automation actually stick inside a business. Here\'s how we manage that from day one:',
      items: [
        {
          title: 'Onboarding Call & Process Audit',
          description: 'We learn your workflows and pain points, then identify fast wins plus bigger automation opportunities you can act on.'
        },
        {
          title: 'Custom Roadmap',
          description: 'We outline exactly what gets automated first, in what order, and why — no guesswork, just a clear plan.'
        },
        {
          title: 'Hands-On Build and Integration',
          description: 'We build and connect automations directly into your existing systems without disrupting daily operations.'
        },
        {
          title: 'Testing and Deployment',
          description: 'We test every workflow against real scenarios, then roll it out in phases to keep things running smoothly.'
        },
        {
          title: 'Reporting Dashboards & Check-Ins',
          description: 'We keep you updated throughout, then show clear performance data on time saved and errors reduced.'
        },
        {
          title: 'Ongoing Optimization & Support',
          description: 'We fine-tune your automations as your business evolves, with real support access whenever you need it.'
        }
      ]
    },

    // ========== FEATURES: Why Choose Clickmasters ==========
    {
      type: 'features',
      heading: 'Why Choose Clickmasters for IT Process Automation',
      subheading: 'Automation vendors are everywhere, but most stop at software setup. Our approach to IT process automation goes further, combining technical execution with real consulting throughout the relationship.',
      items: [
        {
          title: 'Process discovery first',
          description: 'We start with process discovery, not a pre-built template.',
          icon: 'Search'
        },
        {
          title: 'Real integration work',
          description: 'Our business process automation consulting approach includes real integration work, not just software setup.',
          icon: 'Link2'
        },
        {
          title: 'Designed for exceptions',
          description: 'We design for exceptions, not just the ideal-case scenario.',
          icon: 'AlertTriangle'
        },
        {
          title: 'Cross-functional expertise',
          description: 'We work across process automation, finance, HR, and operations rather than one narrow use case.',
          icon: 'Layers'
        },
        {
          title: 'Involved after launch',
          description: 'We stay involved after launch through monitoring and optimization, not a one-time handoff.',
          icon: 'Activity'
        },
        {
          title: 'Plain-language decisions',
          description: 'We explain the "why" behind every automation decision in plain language.',
          icon: 'MessageSquare'
        }
      ]
    },

    // ========== GRID: Industries ==========
    {
      type: 'grid',
      heading: 'Industries We Serve with Business Process Automation Software',
      subheading: 'Different industries automate different things, which is why our business process automation software is configured around each sector\'s actual workflows rather than a generic setup.',
      items: [
        {
          title: 'Financial Services',
          description: 'We automate invoice matching, purchase order approvals, and expense reconciliation so finance teams process higher volumes with fewer manual checks.',
          icon: 'Briefcase'
        },
        {
          title: 'Healthcare Administration',
          description: 'We build workflows for patient intake forms, claims processing, and appointment scheduling to reduce administrative backlog.',
          icon: 'Heart'
        },
        {
          title: 'Retail & E-commerce',
          description: 'We automate order entry, inventory updates, and customer service ticket routing to keep operations running smoothly during peak demand.',
          icon: 'ShoppingCart'
        },
        {
          title: 'Logistics & Warehousing',
          description: 'We connect WMS platforms with automated workflows for freight invoice processing, shipment tracking, and order fulfillment updates.',
          icon: 'Truck'
        },
        {
          title: 'Professional Services',
          description: 'We streamline client onboarding, contract approvals, and internal reporting so teams spend less time on administrative overhead.',
          icon: 'Scale'
        },
        {
          title: 'Manufacturing',
          description: 'We automate purchase requisitions, supplier communications, and production reporting to reduce delays between departments.',
          icon: 'Factory'
        }
      ]
    },

    // ========== TEXT + GRID: Case Studies ==========
    {
      type: 'text',
      heading: 'Case Studies: Business Automation Software in Action',
      content: [
        'Numbers and promises are easy to write — real client situations are more useful. Here are three examples of business automation software solving actual operational problems.'
      ]
    },
    {
      type: 'grid',
      heading: 'Case Studies',
      items: [
        {
          title: 'Regional Finance Firm',
          description: 'Challenge: The finance team was manually matching hundreds of invoices each week, leading to processing delays and occasional duplicate payments. Solution: Clickmasters implemented process automation software to automatically capture, match, and route invoices for approval based on preset rules. Result: Invoice processing time dropped significantly, and duplicate payment errors were nearly eliminated.',
          icon: 'Briefcase'
        },
        {
          title: 'Multi-Location Retailer',
          description: 'Challenge: Customer support tickets were manually sorted and assigned, causing slow response times during busy seasons. Solution: We built an automated ticket-routing workflow integrated with their existing support platform. Result: Response times improved and support staff spent less time on manual sorting, freeing them up for actual customer issues.',
          icon: 'ShoppingCart'
        },
        {
          title: 'Mid-Size Logistics Company',
          description: 'Challenge: Freight invoices required manual entry into their WMS and finance system separately, creating duplicate work and data mismatches. Solution: Clickmasters integrated their WMS and finance systems using enterprise process automation, syncing data automatically between both. Result: Data entry duplication was eliminated, and reporting accuracy improved across departments.',
          icon: 'Truck'
        }
      ]
    },

    // ========== TABLE: Packages ==========
    {
      type: 'grid',
      heading: 'Business Process Automation Packages',
      subheading: 'We keep the pricing structure simple across three tiers, so you can match business process automation services to your company\'s size and complexity without overpaying for features you won\'t use.',
      columns: ['Feature', 'Starter', 'Growth', 'Enterprise'],
      items: [
        { title: 'Process discovery & audit', columns: ['✅', '✅', '✅'] },
        { title: 'Single-process workflow automation', columns: ['✅', '✅', '✅'] },
        { title: 'Multi-department automation', columns: ['❌', '✅', '✅'] },
        { title: 'System integrations (CRM/ERP/WMS)', columns: ['Limited (1 system)', 'Up to 3 systems', 'Unlimited'] },
        { title: 'AI business process automation features', columns: ['❌', '✅', '✅'] },
        { title: 'Custom business process automation consulting', columns: ['❌', '✅', '✅'] },
        { title: 'Dedicated automation consultant', columns: ['❌', '❌', '✅'] },
        { title: 'Monitoring & reporting dashboard', columns: ['Basic', 'Advanced', 'Advanced + Custom'] },
        { title: 'Ongoing optimization support', columns: ['Quarterly', 'Monthly', 'Continuous'] },
        { title: 'Best For', columns: ['Small businesses automating 1–2 processes', 'Growing companies with multiple departments', 'Enterprises needing full-scale enterprise process automation'] }
      ]
    },

    // ========== GRID: Reviews ==========
    {
      type: 'grid',
      heading: 'What Clients Say About Our Process Automation Software',
      subheading: 'Real feedback tells you more than any feature list — here\'s how clients describe working with our process automation software and consulting team.',
      items: [
        {
          title: 'Our approval process is so much faster now.',
          description: '"Clickmasters helped us set up workflow automation software that finally connected our CRM and finance tools. Our approval process is so much faster now." — Operations Manager',
          icon: 'Quote'
        },
        {
          title: 'Errors dropped too.',
          description: '"We were drowning in manual invoice entry. Their business process automation services cut that work down significantly, and errors dropped too." — Finance Director',
          icon: 'Quote'
        },
        {
          title: 'They understood our actual processes.',
          description: '"The team took the time to understand our actual processes before recommending any automation tools, which made a big difference." — Small Business Owner',
          icon: 'Quote'
        },
        {
          title: 'Very practical approach.',
          description: '"Their process automation consulting helped us figure out what to automate first instead of guessing. Very practical approach." — IT Manager',
          icon: 'Quote'
        },
        {
          title: 'The reporting visibility alone has been worth it.',
          description: '"We use their business automation software across two departments now and the reporting visibility alone has been worth it." — COO',
          icon: 'Quote'
        }
      ]
    },

    // ========== FAQ ==========
   {
  type: 'faq',
  heading: 'FAQs',
  items: [
    {
      title: 'What is business process automation?',
      description: 'Business process automation uses technology to automate repetitive steps inside a complete business process.'
    },
    {
      title: 'Which business processes can be automated?',
      description: 'You can automate employee onboarding, sales processes, customer onboarding, invoice approvals, reporting, document processing, and order management.'
    },
    {
      title: 'Why should businesses automate processes?',
      description: 'Automation can reduce delays, improve accuracy, lower manual workload, and make processes easier to manage.'
    },
    {
      title: 'Can business process automation connect different departments?',
      description: 'Yes. Automation can connect workflows between departments such as sales, finance, operations, HR, and customer support.'
    },
    {
      title: 'What is the difference between workflow automation and process automation?',
      description: 'Workflow automation often focuses on specific tasks, while business process automation improves a larger end-to-end process.'
    }
  ]
},

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Turn manual chaos into a smooth, connected process.',
      subheading: 'Book your free process automation assessment — we\'ll map your workflows and show exactly where business process automation saves you the most time and money.',
      cta: {
        text: 'Request a Free Automation Assessment',
        link: '/free-automation-audit',
        primary: true
      }
    }
  ]
};
