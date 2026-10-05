
// content/Platforms/hubspot-automation-services.ts
import { ServiceContent } from '../type';

export const hubspotAutomationService: ServiceContent = {
  slug: 'hubspot-automation-services',
  title: 'HubSpot Automation Services USA - CRM Automation Experts',
  metaDescription:
    'Our HubSpot automation experts improve lead routing, CRM workflows, sales automation, marketing follow-up, and customer lifecycle management.',
  keywords:
    'hubspot automation services, hubspot automation experts, hubspot consultant, hubspot workflow automation, hubspot CRM automation, hubspot marketing automation, hubspot automation USA',

  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'Grow Faster With HubSpot Automation Services',
      subheading:
        'Our HubSpot automation services help U.S. businesses automate CRM, marketing, sales, and customer processes.',
      content: [
        'Our HubSpot automation services help U.S. businesses automate CRM, marketing, sales, and customer processes. We build custom HubSpot workflows that route leads, manage follow-ups, update records, support nurturing, and reduce repetitive CRM tasks, so your revenue teams can focus more on customers and opportunities.',
      ],
      ctas: [
        {
          text: 'Book Your HubSpot Automation Consultation',
          link: '/free-automation-audit',
          primary: true,
        },
      ],
      image: {
        src: '/images/hubspot-hero.png',
        alt: 'HubSpot Automation Services',
        width: 1200,
        height: 1000,
        fadeEdges: true,
      },
    },

    // ========== TEXT: Workflow Automation ==========
    {
      type: 'text',
      heading:
        'HubSpot Workflow Automation for Marketing, Sales, and Customer Success',
      image: '/images/rob.png',
      content: [
        'HubSpot becomes more valuable when customer information actively drives your sales and marketing processes. Our HubSpot workflow automation services help businesses turn CRM activity into structured actions.',
        'We review your lifecycle stages, pipelines, CRM properties, ownership rules, and customer journey before creating automation. This prevents disconnected workflows from becoming difficult to manage. The result is a more organized HubSpot environment.',
      ],
    },

    // ========== FEATURES: Strategy & Implementation ==========
    {
      type: 'features',
      heading: 'HubSpot Automation Strategies & Implementation',
      items: [
        {
          title: 'Lifecycle Mapping',
          description:
            'Define how contacts move through each stage of the customer journey.',
          icon: 'Map',
        },
        {
          title: 'CRM Data Planning',
          description:
            'Standardize properties, values, ownership rules, and CRM data structures.',
          icon: 'Database',
        },
        {
          title: 'Enrollment Criteria',
          description:
            'Define exactly which records should enter each HubSpot workflow.',
          icon: 'Filter',
        },
        {
          title: 'Workflow Branching',
          description:
            'Create different actions and paths based on CRM conditions and customer data.',
          icon: 'GitBranch',
        },
        {
          title: 'Conflict Prevention',
          description:
            'Review workflow dependencies and overlapping actions to prevent automation conflicts.',
          icon: 'Shield',
        },
        {
          title: 'Optimization',
          description:
            'Simplify automation and improve long-term workflow maintainability.',
          icon: 'BarChart',
        },
      ],
    },

    // ========== TEXT: Results ==========
    {
      type: 'text',
      heading: 'What Results Customers Get From HubSpot Automation',
      content: [
        'Our HubSpot automation services are designed to create a more structured revenue process.',
        'The focus spans marketing, sales, and CRM operations.',
        '• Improve lead response and ownership processes.',
        '• Reduce repetitive CRM updates and administrative tasks.',
        '• Create more consistent sales and marketing follow-up.',
        '• Maintain cleaner and more structured CRM data.',
      ],
    },

    // ========== FEATURES: Delivery Process ==========
    {
      type: 'features',
      heading: 'How We Deliver HubSpot Automation Services',
      items: [
        {
          title: 'Audit',
          description:
            'Review CRM architecture, workflows, pipelines, and automation requirements.',
          icon: 'Search',
        },
        {
          title: 'Development',
          description:
            'Build workflows, routing rules, lifecycle actions, and CRM automation.',
          icon: 'Settings',
        },
        {
          title: 'Testing',
          description:
            'Test enrollment criteria, branches, actions, and record updates.',
          icon: 'CheckCircle',
        },
        {
          title: 'Launch & Optimization',
          description:
            'Deploy approved workflows and refine them as your business changes.',
          icon: 'Rocket',
        },
      ],
    },

    // ========== FEATURES: Why Clickmasters ==========
    {
      type: 'features',
      heading: 'Why Choose Clickmasters for HubSpot Automation Services?',
      items: [
        {
          title: 'CRM-First Approach',
          description:
            'Automation built around clean CRM architecture and structured customer data.',
          icon: 'Database',
        },
        {
          title: 'Custom Workflows',
          description:
            'Workflow rules tailored to your sales, marketing, and customer processes.',
          icon: 'Settings',
        },
        {
          title: 'Revenue Alignment',
          description:
            'Better coordination between marketing and sales activities through CRM automation.',
          icon: 'Target',
        },
        {
          title: 'USA-Focused Service',
          description:
            'HubSpot automation support designed for U.S. organizations.',
          icon: 'Globe',
        },
      ],
    },

    // ========== INDUSTRIES ==========
    {
      type: 'industries',
      heading: 'Industries We Serve',
      subheading:
        'Our HubSpot automation services in the USA support organizations that depend on structured customer and sales workflows. They are also useful for marketing teams that need reliable CRM-driven follow-up.',
      items: [
        {
          title: 'SaaS Companies',
          description:
            'Automate lead nurturing, lifecycle management, and sales processes.',
        },
        {
          title: 'B2B Services',
          description:
            'Improve lead routing, follow-up, and CRM administration.',
        },
        {
          title: 'Professional Services',
          description:
            'Automate inquiries, client journeys, and pipeline tasks.',
        },
        {
          title: 'Technology Companies',
          description:
            'Connect marketing, sales, customer, and CRM processes.',
        },
        {
          title: 'Real Estate',
          description:
            'Automate lead distribution, contact management, and follow-up.',
        },
        {
          title: 'Education',
          description:
            'Manage inquiries, nurturing, enrollment stages, and CRM workflows.',
        },
      ],
    },

    // ========== CASE STUDIES ==========
    {
      type: 'casestudies',
      heading: 'HubSpot Automation Case Studies',
      items: [
        {
          title: 'Lead Assignment',
          challenge:
            'Managers manually assigned every new inbound lead.',
          solution:
            'A HubSpot workflow routed leads according to predefined CRM criteria.',
          result:
            'Leads reached the appropriate sales representative faster.',
        },
        {
          title: 'Lead Nurturing',
          challenge:
            'Prospects received inconsistent follow-up after entering the CRM.',
          solution:
            'HubSpot marketing automation created structured nurture workflows based on lifecycle and engagement.',
          result:
            'The customer journey became more consistent.',
        },
        {
          title: 'CRM Data Cleanup',
          challenge:
            'Inconsistent CRM property values affected segmentation and reporting.',
          solution:
            'HubSpot workflows standardized selected properties and flagged incomplete records.',
          result:
            'Teams worked with more consistent CRM data.',
        },
      ],
    },

    // ========== REVIEWS ==========
    {
      type: 'reviews',
      heading: 'Customer Reviews',
      items: [
        {
          quote:
            'Their HubSpot automation services helped us create a much cleaner lead management process.',
          author: 'Rachel M.',
        },
        {
          quote:
            'Our HubSpot automation consultant understood our CRM before recommending workflow changes.',
          author: 'Daniel P.',
        },
        {
          quote:
            'The HubSpot marketing automation setup improved how consistently we nurture new leads.',
          author: 'Sophia L.',
        },
        {
          quote:
            'Our sales team now spends less time manually updating CRM records because of the new HubSpot workflows.',
          author: 'Michael T.',
        },
        {
          quote:
            'Their HubSpot workflow audit helped us identify several conflicting automations and simplify our CRM.',
          author: 'Emily R.',
        },
      ],
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'FAQs',
      items: [
        {
          title: 'What are HubSpot automation services?',
          description:
            'HubSpot automation services involve creating workflows that automate CRM, marketing, sales, and customer management processes.',
        },
        {
          title: 'Can HubSpot automate lead routing?',
          description:
            'Yes. HubSpot workflows can assign records according to defined CRM criteria and ownership rules.',
        },
        {
          title: 'Can HubSpot automate sales processes?',
          description:
            'Yes. Sales workflows can automate tasks, notifications, CRM updates, and selected pipeline activities.',
        },
        {
          title: 'Can HubSpot automate marketing follow-up?',
          description:
            'Yes. Marketing automation can support lead nurturing, lifecycle-based communication, and campaign follow-up.',
        },
        {
          title: 'Can you audit existing HubSpot workflows?',
          description:
            'Yes. Existing workflows can be reviewed for duplication, conflicts, outdated logic, and unnecessary complexity.',
        },
        {
          title: 'How much do HubSpot automation services cost?',
          description:
            'Pricing depends on CRM complexity, workflow requirements, automation volume, and integrations.',
        },
        {
          title: 'Do you provide HubSpot automation services in the USA?',
          description:
            'Yes. We provide HubSpot CRM and workflow automation services for businesses across the United States.',
        },
      ],
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Ready to Automate Your HubSpot CRM?',
      subheading:
        'Let our HubSpot automation experts build reliable CRM workflows around your sales, marketing, and customer processes.',
      cta: {
        text: 'Book Your HubSpot Automation Consultation',
        link: '/free-automation-audit',
        primary: true,
      },
    },
  ],
};
