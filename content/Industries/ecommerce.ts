// content/Industries/ecommerce.ts
import { ServiceContent } from '../type';

export const ecommerce: ServiceContent = {
  slug: 'ecommerce',
  title: 'AI Automation for E-commerce | Clickmasters',
  metaDescription:
    'AI automation for e-commerce: customer support, order workflows, abandoned-cart recovery and marketing, so your store runs leaner and converts more.',
  keywords: 'ai automation for ecommerce, ecommerce automation',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'AI Automation for E-commerce',
      subheading:
        'Automate support, orders, cart recovery, and marketing so a lean team runs a store that feels much larger.',
      content: [
        'Clickmasters builds AI automation for e-commerce businesses, handling the constant operational volume that comes with selling online customer support, order workflows, abandoned-cart recovery, and marketing. We automate the repetitive, high-volume work so a lean team can run a store that feels far larger, converting more and serving customers better without adding headcount for every increase in volume.',
        'This page explains where e-commerce work piles up, what we automate, and how it integrates with your store and stack.',
      ],
      stats: [
        { label: 'TICKETS DEFLECTED', value: '85%+' },
        { label: 'CART RECOVERY REVENUE', value: '15-30%' },
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false },
      ],
      image: {
        src: '/images/ecommerce-hero.png',
        alt: 'AI E-commerce Automation',
        width: 1200,
        height: 1000,
        fadeEdges: true,
      },
    },

    // ========== TEXT: Where E-commerce Work Piles Up ==========
    {
      type: 'text',
      heading: 'Where E-commerce Work Piles Up',
      content: [
        'E-commerce generates relentless repetitive work that scales directly with sales. Customer support tickets where is my order, what is your return policy, does this come in another size arrive constantly and are mostly variations on a handful of questions. Orders need processing, status updates, and exception handling. Carts are abandoned at high rates and need recovery. Marketing emails, campaigns, lifecycle messaging needs constant feeding. For a small team, this volume is overwhelming, and it grows with every increase in traffic and sales.',
        'The trap is that handling this manually ties your operational capacity to headcount: more sales means more support, more order issues, more everything, requiring more people. Automation breaks that link, absorbing the repetitive volume so your team\'s size is driven by genuinely complex work rather than sheer quantity. This is how lean e-commerce teams punch far above their weight they automate the operational layer that would otherwise consume them.',
      ],
    },

    // ========== FEATURES: What We Automate for E-commerce ==========
    {
      type: 'features',
      heading: 'What We Automate for E-commerce',
      items: [
        {
          title: 'AI customer support',
          description:
            'AI agents that answer order, shipping, product, and policy questions from your store\'s information, 24/7, escalating complex cases to your team.',
          icon: 'MessageSquare',
        },
        {
          title: 'Order and fulfillment workflows',
          description:
            'Automated order processing, status updates, and exception handling so orders flow smoothly and customers stay informed.',
          icon: 'Package',
        },
        {
          title: 'Cart recovery',
          description:
            'Automated, personalized abandoned-cart sequences that recover sales which would otherwise be lost.',
          icon: 'ShoppingCart',
        },
        {
          title: 'Marketing automation',
          description:
            'AI-generated content and lifecycle campaigns welcome, post-purchase, win-back that run themselves.',
          icon: 'Megaphone',
        },
        {
          title: 'Review and feedback automation',
          description:
            'Automated requests for reviews and responses to feedback, building social proof consistently.',
          icon: 'Star',
        },
        {
      title: 'Returns and refunds automation',
      description:
        'Automated return requests, shipping label generation, and refund processing – reducing manual handling and improving customer experience.',
      icon: 'RefreshCw',
    },
      ],
    },

    // ========== GRID: Worked Example ==========
    {
      type: 'grid',
      heading: 'A Worked Example: Support and Cart Recovery Together',
      subheading:
        'Picture a growing store where the founder and a small team handle everything. Automation shrinks both problems.',
      items: [
        {
          title: 'AI support agent',
          description:
            'Answers routine order, shipping, and product questions instantly from your store\'s information, 24/7.',
          icon: 'Bot',
        },
        {
          title: 'Team handles complex cases',
          description:
            'The support team only handles the genuinely complex tickets that require human judgment.',
          icon: 'Users',
        },
        {
          title: 'Abandoned-cart sequence',
          description:
            'Automated, personalized outreach recovers a meaningful share of lost sales with no manual effort.',
          icon: 'ShoppingCart',
        },
        {
          title: 'Faster service, more revenue',
          description:
            'The store delivers faster service and recovers revenue it was losing, all without hiring.',
          icon: 'TrendingUp',
        },
        {
      title: '24/7 availability',
      description:
        'AI never sleeps – customers get instant responses at any hour, increasing satisfaction and conversion.',
      icon: 'Clock',
    },
    // ── NEW CARD 2 ──
    {
      title: 'Data-driven insights',
      description:
        'Track support ticket trends and cart recovery performance – using real data to continuously improve.',
      icon: 'BarChart',
    },
      ],
    },

    // ========== TEXT: Integrations ==========
    {
      type: 'text',
      heading: 'E-commerce integrations',
      content: [
        'We build into the e-commerce stack: your store platform (Shopify, WooCommerce, and others), help desks (Gorgias, Zendesk), email and marketing platforms (Klaviyo, Mailchimp), and your fulfillment and inventory tools. The automation fits your existing setup.',
      ],
    },

    // ========== FEATURES: Why Clickmasters ==========
    {
      type: 'features',
      heading: 'Why Clickmasters for E-commerce',
      items: [
        {
          title: 'Mapped to your industry\'s workflows',
          description:
            'We automate the operational volume that scales with e-commerce sales.',
          icon: 'Target',
        },
        {
          title: 'Human-in-the-loop where it matters',
          description:
            'AI handles routine support and recovery; your team handles complex cases and strategy.',
          icon: 'Users',
        },
        {
          title: 'Integrated, not rip-and-replace',
          description:
            'We integrate with Shopify, WooCommerce, your help desk, and marketing tools.',
          icon: 'Link2',
        },
        {
          title: 'You own it',
          description:
            'Documented, transparent automation you control.',
          icon: 'Award',
        },
         {
      title: 'Revenue-focused automation',
      description:
        'Every automation is designed to directly improve your bottom line – from support cost savings to recovered revenue.',
      icon: 'DollarSign',
    },
    // ── NEW CARD 2 ──
    {
      title: 'Scalable growth',
      description:
        'Built to handle spikes in traffic and sales without adding headcount – your automation scales with your store.',
      icon: 'Zap',
    },
      ],
    },

    // ========== TEXT: Where to Start in E-commerce ==========
    {
      type: 'text',
      heading: 'Where to Start in E-commerce',
      content: [
        'For most stores, AI customer support is the highest-return starting point, because support volume is relentless, mostly repetitive, and directly affects both customer satisfaction and the team\'s capacity. Abandoned-cart recovery is often the fastest revenue win, recovering sales that are otherwise simply lost.',
        'Lean teams benefit most dramatically, because automation lets a small operation deliver the service levels and marketing consistency of a much larger one. The audit identifies where your store is losing the most time and revenue usually a mix of support load and unrecovered carts and prioritizes accordingly.',
      ],
    },

    // ========== TEXT: The Return for E-commerce ==========
    {
      type: 'text',
      heading: 'The Return for E-commerce',
      content: [
        'The return is concrete and measurable: tickets deflected and response times improved on the support side, revenue recovered on the abandoned-cart side, and time freed from operational busywork across the board. Because e-commerce metrics are so trackable, the impact of automation is easy to quantify you can see the recovered carts and the deflected tickets directly. The deeper return is the ability to grow sales without your operational workload and headcount growing in lockstep, which is what lets a lean store scale profitably.',
      ],
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'E-commerce automation questions',
      items: [
        {
          title: 'How is AI automation used in e-commerce?',
          description:
            'It automates customer support, order and fulfillment workflows, abandoned-cart recovery, marketing campaigns, and review management letting lean teams operate at a scale that would otherwise require many more people.',
        },
        {
          title: 'Can AI handle e-commerce customer support?',
          description:
            'Yes. AI agents answer order, shipping, and product questions from your store data 24/7, escalating complex cases to humans deflecting the high-volume routine tickets that consume small teams.',
        },
        {
          title: 'Does cart-recovery automation actually work?',
          description:
            'Yes. Automated, personalized abandoned-cart sequences reliably recover a share of sales that would otherwise be lost, and because they run automatically, they capture revenue a busy team would never have time to chase manually.',
        },
        {
          title: 'Which platforms do you integrate with?',
          description:
            'Shopify, WooCommerce, and other store platforms, plus help desks like Gorgias and Zendesk and marketing tools like Klaviyo and Mailchimp, building into your existing stack.',
        },
      ],
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Run a bigger store with the team you have.',
      subheading:
        'Book a free automation audit tailored to your e-commerce business.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true,
      },
    },
  ],
};