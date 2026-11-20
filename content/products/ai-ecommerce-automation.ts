// content/products/ai-ecommerce-automation.ts
// Copy + SEO for /products/ai-ecommerce-automation (category parent).
//
// Accuracy rules for this page (keep them when editing):
// - Only e-commerce capabilities stated elsewhere on the site: AI support agents answering order, shipping,
//   product and policy questions from store data (escalating complex cases); order processing, status updates
//   and order exception handling; abandoned-cart sequences; lifecycle campaigns; review requests; return requests.
//   Catalog drafting and stock admin are presented as AI drafting / workflow steps reviewed by a person.
// - Store and stack named here are the ones named on the site: Shopify, WooCommerce, Gorgias, Zendesk, Klaviyo,
//   Mailchimp, and "your fulfillment and inventory tools" (generic only). Build platforms: n8n, Make, Zapier,
//   Airtable, HubSpot; AI layer OpenAI / Claude / Gemini; custom code, APIs, webhooks, RPA bots.
// - NOT Clickmasters features (general industry context only, clearly framed): real-time stock sync, demand
//   forecasting engines, WMS integrations, automatic replenishment or purchase orders, shipping carrier
//   integrations, label buying, fulfillment automation, payment processing, a proprietary recommendation or
//   personalization engine, behavioural tracking, voice shopping, payments or order changes inside chat.
// - No statistics, percentages, prices, testimonials, customer names, guarantees, certifications or
//   ongoing-support promises. AI does not replace store staff.
// - Clickmasters designs and builds automation inside the client’s existing store and tools — it is not a
//   standalone SaaS app. The client pays platform and AI usage costs directly and owns the workflows.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.
// The five child pages are linked from the `related` grid, separately from those five.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_ECOMMERCE_AUTOMATION_PATH = '/products/ai-ecommerce-automation';

export const aiEcommerceAutomationSeo: HubSeo = {
  name: 'AI E-commerce Automation',
  path: AI_ECOMMERCE_AUTOMATION_PATH,
  title: 'AI E-commerce Automation for Online Stores | Clickmasters',
  description:
    'AI e-commerce automation built in your store and tools: catalog upkeep, order and stock admin, customer questions, returns and cart recovery, with human review.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI E-commerce Automation', path: AI_ECOMMERCE_AUTOMATION_PATH },
  ],
};

export const aiEcommerceAutomationKeywords = [
  'AI e-commerce automation',
  'ecommerce automation',
  'AI for online stores',
  'Shopify automation',
  'WooCommerce automation',
  'ecommerce workflow automation',
  'automate online store operations',
  'ecommerce catalog management automation',
  'AI shopping assistant for ecommerce',
  'ecommerce automation agency',
  'what can be automated in an online store',
  'how to use AI in ecommerce',
];

// The five contextual internal links used in the copy below (all verified to resolve).
export const internalLinks = [
  { anchor: 'automation for e-commerce businesses', href: '/industries/ai-automation-for-ecommerce', section: 'What Is AI E-commerce Automation?' },
  { anchor: 'AI workflow automation for e-commerce', href: '/solutions/ai-workflow-automation/for-ecommerce', section: 'Where Ecommerce Automation Fits in a Store (features)' },
  { anchor: 'customer support automation for online stores', href: '/solutions/customer-support-automation/for-ecommerce', section: 'AI-Assisted Shopping and Store Operations' },
  { anchor: 'marketing automation for e-commerce', href: '/solutions/marketing-automation/for-ecommerce', section: 'The Shopping Experience (spotlight)' },
  { anchor: 'self-hosted n8n builds', href: '/platforms/n8n-automation-services', section: 'Store Platforms and Tools We Connect' },
] as const;

export const aiEcommerceAutomation: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 4 },

  hero: {
    badge: 'AI E-commerce Automation',
    heading: 'AI E-commerce Automation That Keeps Your Store Running Behind the Scenes',
    accentWords: 3,
    subheading:
      'Clickmasters builds automation inside the store platform, helpdesk, email tool and spreadsheets you already run. Routine work such as catalog upkeep, order admin, stock checks, customer questions and follow-up emails runs on its own, and your team reviews anything that affects money or customers.',
    primaryCta: { text: 'Book a Free E-commerce Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/business.jpg',
    imageAlt: 'Person in a suit working with orange connected gears and automation nodes, representing AI e-commerce automation across store systems',
    imageWidth: 1200,
    imageHeight: 628,
    marquee: ['Catalog upkeep', 'Order workflows', 'Stock admin', 'Customer questions', 'Returns and reviews', 'Cart recovery'],
  },

  intro: {
    eyebrow: 'What It Is',
    heading: 'What Is AI E-commerce Automation?',
    paragraphs: [
      'AI e-commerce automation is the use of workflows and AI models to run the repeatable work behind an online store. When an order is placed, a product is added, a return is requested or a customer asks a question, a workflow picks it up, checks it against your rules and moves it to the right place, whether that is the store, the helpdesk, the email platform or a shared spreadsheet.',
      'Rules handle the predictable parts, such as tagging an order or sending a review request a set number of days after delivery. AI handles the parts that need reading or writing: understanding what a customer email is about, drafting a product description from a supplier’s spec sheet, or answering “does this jacket run small?” from your size guide. People stay in charge of refunds, exceptions and anything published under your brand.',
      'This page is the overview of our e-commerce range. It explains the main areas a store can automate and points you to the solution page for each one. For the wider picture of how we work with online retailers, see our [automation for e-commerce businesses](/industries/ai-automation-for-ecommerce) page.',
    ],
    problems: [
      'New products take days to go live because descriptions, tags and attributes are written by hand.',
      'Order exceptions, such as a missing address or an odd quantity, are spotted only when a customer complains.',
      'Stock figures in the store and in the team’s spreadsheet tell different stories.',
      'The support inbox fills with “where is my order?” and sizing questions the store data could answer.',
      'Review requests, cart reminders and return replies depend on someone remembering to send them.',
    ],
  },

  explainer: {
    eyebrow: 'Running an Online Store',
    heading: 'Why Store Operations Get Harder as You Grow',
    paragraphs: [
      'A small store can run on one person’s memory. They know which supplier is late, which product page is missing a size chart and which customer is waiting for a reply. As order volume and the catalog grow, that knowledge spreads across more people, more apps and more spreadsheets, and the gaps between them start to show.',
      'Most of the strain is not in selling. It is in the admin around each sale: keeping product data tidy, making sure every order is complete, answering the same questions many times a day and following up after delivery. These jobs are repetitive enough to automate but varied enough that simple rules often fall short, which is where an AI step helps.',
    ],
    points: [
      { title: 'Catalog Sprawl', description: 'More products and variants mean more titles, descriptions, tags and attributes to keep consistent.' },
      { title: 'Manual Order Checks', description: 'Someone scans new orders for problems, and busy days mean some slip through.' },
      { title: 'Scattered Stock Data', description: 'Quantities live in the store, a spreadsheet and a supplier email, and nobody is sure which is current.' },
      { title: 'Repeat Questions', description: 'Support staff answer the same order, delivery and product questions again and again.' },
      { title: 'Missed Follow-Ups', description: 'Cart reminders, review requests and return updates go out late or not at all.' },
    ],
  },

  features: {
    eyebrow: 'Store Workflows',
    heading: 'Where Ecommerce Automation Fits in a Store',
    intro:
      'Each workflow is built around your own store data, policies and team. Most stores start with two or three of these areas rather than all at once. Our [AI workflow automation for e-commerce](/solutions/ai-workflow-automation/for-ecommerce) page shows how individual store workflows are put together.',
    items: [
      { title: 'Catalog Upkeep', description: 'Product descriptions drafted from supplier data for review, and titles, tags and attributes tidied to one format.' },
      { title: 'Order Workflows', description: 'New orders checked, tagged and routed, with incomplete or unusual ones sent to a person.' },
      { title: 'Stock Admin', description: 'Low-stock alerts at thresholds you set, mismatch checks between records and reorder reminders.' },
      { title: 'Customer Questions', description: 'AI answers order, delivery, product and policy questions from store data and hands complex cases to staff.' },
      { title: 'Return Requests', description: 'Requests captured, checked against your returns policy and queued for a person to approve.' },
      { title: 'Review Requests', description: 'Customers asked for a review at the right point after delivery, through your email platform.' },
      { title: 'Cart Recovery and Lifecycle Emails', description: 'Abandoned-cart sequences and post-purchase campaigns triggered by store events.' },
      { title: 'Store Reporting', description: 'Sales, order and stock summaries assembled on a schedule, with an AI-written overview to check.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How a Store Workflow Runs From Event to Result',
    intro:
      'Whether the trigger is an order, a new product or a customer message, store workflows follow the same basic pattern.',
    steps: [
      { title: 'Store Event', description: 'An order is placed, a product is created, a return form is submitted or a customer writes in.' },
      { title: 'Collect the Context', description: 'The workflow pulls the order, product, customer or policy details it needs from your store and tools.' },
      { title: 'Check Against Your Rules', description: 'Missing details, unusual values and policy conditions are checked before anything else happens.' },
      { title: 'AI Where Needed', description: 'An AI step reads a message, classifies a request or drafts text when the input is not tidy enough for rules.' },
      { title: 'Act or Ask', description: 'Routine items are updated, tagged or sent. Refunds, exceptions and uncertain cases wait for a person.' },
      { title: 'Log and Report', description: 'Each run is recorded, failures raise an alert, and results feed the reports your team already reads.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits for Online Retailers',
    heading: 'What Changes for Store Owners and Their Teams',
    intro:
      'The gains come from taking routine admin out of people’s day, so the team spends its time on products, suppliers and customers.',
    items: [
      { title: 'Products Live Sooner', description: 'Draft descriptions and clean attributes shorten the path from supplier file to published listing.' },
      { title: 'Fewer Order Surprises', description: 'Problems are caught at the moment an order arrives, not when it is already late.' },
      { title: 'Faster Customer Answers', description: 'Common questions are answered from store data at any hour, and staff handle the rest with context.' },
      { title: 'Follow-Ups That Happen', description: 'Cart reminders, review requests and return updates go out every time, on the schedule you chose.' },
      { title: 'One View of the Store', description: 'Regular summaries show what sold, what is low and what is waiting, without manual exports.' },
      { title: 'Growth Without More Admin', description: 'Higher order volume is absorbed by workflows rather than by extra copy-and-paste work.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI in the Store',
    heading: 'AI-Assisted Shopping and Store Operations',
    paragraphs: [
      'AI is useful in a store wherever text needs reading or writing. It can tell a delivery query from a return request, pull the order number out of a rambling email, draft a product description that follows your house style or answer a material question from the product page. It should not decide on refunds, change prices or publish copy without someone checking it.',
      'On the customer side, an AI agent can answer questions using your store and policy data and pass anything complex to a person with the conversation attached. Our page on [customer support automation for online stores](/solutions/customer-support-automation/for-ecommerce) covers how that hand-off is designed for support teams.',
    ],
    aiDoes: [
      'Classifies customer emails and chat messages by intent',
      'Answers order, delivery, product and policy questions from store data',
      'Drafts product descriptions and tidies attributes for review',
      'Extracts order and product details from emails and supplier files',
      'Summarizes store activity for weekly reports',
      'Flags messages and orders it is unsure about',
    ],
    peopleDo: [
      'Approve refunds, replacements and goodwill gestures',
      'Review product copy before it is published',
      'Handle complaints and escalated conversations',
      'Set thresholds, policies and the rules workflows follow',
    ],
  },

  spotlight: {
    eyebrow: 'The Shopping Experience',
    heading: 'Product Discovery, Recommendations and Help While Customers Shop',
    paragraphs: [
      'Automation is not only for the back office. Shoppers who cannot find the right product, or cannot get a quick answer about sizing or delivery, often leave. A shopping assistant on the store can answer those questions from your catalog and policies, ask a few questions to narrow down options, and compare two products side by side.',
      'Discovery also continues after the first order. A common approach is to suggest related products in post-purchase emails, built from your catalog data and your store platform’s own features rather than a separate engine. These sit naturally alongside the abandoned-cart and lifecycle flows described on our [marketing automation for e-commerce](/solutions/marketing-automation/for-ecommerce) page.',
    ],
    points: [
      { title: 'Product Questions', description: 'A customer asks whether a backpack fits a 16-inch laptop, and the assistant answers from the product specs.' },
      { title: 'Guided Finding', description: 'The assistant asks about use, budget and preferences, then suggests a short list from your catalog.' },
      { title: 'Related Products', description: 'Complementary items are suggested on the store or in follow-up emails, using rules and catalog attributes.' },
      { title: 'Clear Hand-Off', description: 'When a question goes beyond the assistant’s knowledge, a person takes over with the full conversation.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Choosing a Starting Point',
      heading: 'Which E-commerce Automation Solution Fits Your Problem?',
      accentWords: 3,
      paragraphs: [
        'Our e-commerce range is split into five solutions, because the problems are different even when the tools overlap. A store struggling with incomplete orders needs something different from a store whose shoppers cannot find the right product. Start with the problem that costs your team the most time or the most lost sales.',
        'The solutions also build on each other. The connections set up for order workflows can be reused for stock alerts, and the catalog clean-up done for a shopping assistant improves recommendations too.',
      ],
      points: [
        { title: 'The Admin Is Everywhere', description: 'AI ecommerce automation software covers the day-to-day store workflows across catalog, orders, customer messages, returns, reviews and reports.' },
        { title: 'Orders Need Checking and Routing', description: 'AI order processing automation handles order intake, validation, classification, exception queues and customer status updates.' },
        { title: 'Stock Records Do Not Agree', description: 'AI inventory management software keeps stock information consistent, sends low-stock alerts and drafts reorder reminders for approval.' },
        { title: 'Shoppers Need Better Suggestions', description: 'AI product recommendation software designs related-product and cross-sell workflows from your catalog data and store features.' },
        { title: 'Shoppers Need Answers', description: 'An AI shopping assistant answers product and policy questions on the store and hands off to your team when needed.' },
      ],
    },
    {
      eyebrow: 'Catalog Management',
      heading: 'Keeping Product Data Consistent as the Catalog Grows',
      accentWords: 3,
      paragraphs: [
        'Product data is the raw material for almost every other store workflow. A shopping assistant can only answer a sizing question if the size guide exists. A low-stock alert only helps if the SKU is the same in the store and the spreadsheet. Messy catalogs make every automation less reliable.',
        'AI is well suited to the slow parts of catalog work. Take a supplier who sends a spreadsheet of 60 new products with terse, inconsistent names. A workflow can draft titles and descriptions in your house style, map colours and sizes to your standard values and flag rows with missing details, then put the drafts in front of a person before anything appears on the store.',
      ],
      points: [
        { title: 'Description Drafts', description: 'Written from supplier specs and your style rules, then reviewed and edited by your team.' },
        { title: 'Attribute Clean-Up', description: 'Values such as “Navy”, “navy blue” and “NVY” mapped to one standard option.' },
        { title: 'Gap Checks', description: 'Products missing images, dimensions, materials or care details listed for someone to complete.' },
        { title: 'Tag and Category Suggestions', description: 'Categories and tags proposed from product details, so collections and filters stay accurate.' },
      ],
    },
    {
      eyebrow: 'Clear Boundaries',
      heading: 'What Stays With Your Store and Existing Tools',
      accentWords: 3,
      paragraphs: [
        'Good automation is honest about what it does not do. Payments are processed by your store platform and payment provider. Shipping labels, carrier bookings and picking stay with your fulfillment and inventory tools. We build workflows around those systems, passing information to and from them where they offer access, rather than replacing them.',
        'Some capabilities that retailers ask about, such as demand forecasting or live stock syncing across many channels, are usually handled by dedicated inventory or warehouse software. Where your data and tools support it, we can scope the workflows that sit around them during the audit, and we will say clearly when a dedicated tool is the better choice.',
      ],
      points: [
        { title: 'Payments', description: 'Stay with your store platform and payment provider. Workflows never take or move payments.' },
        { title: 'Shipping and Fulfillment', description: 'Stay in your existing fulfillment tools. Workflows can share order details and status updates where access allows.' },
        { title: 'Refunds and Order Changes', description: 'Are approved by a person. Automation prepares the request, it does not make the decision.' },
        { title: 'Published Content', description: 'Product copy and customer-facing messages are reviewed before they go live, at least until your team trusts the drafts.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'Online Retailers We Build Ecommerce Automation For',
    items: [
      { title: 'Shopify Brands', description: 'Direct-to-consumer stores that want catalog, order and customer workflows built around their Shopify setup.' },
      { title: 'WooCommerce Stores', description: 'Sellers on WooCommerce who need their store connected to the helpdesk, email platform and spreadsheets.' },
      { title: 'Growing Catalogs', description: 'Stores adding products every week and struggling to keep descriptions and attributes consistent.' },
      { title: 'Small Store Teams', description: 'Owners and lean teams who handle orders, stock and support themselves and need the admin off their plate.' },
      { title: 'Support-Heavy Stores', description: 'Teams on Gorgias or Zendesk answering the same order and product questions many times a day.' },
      { title: 'Wholesale and Mixed Sellers', description: 'Businesses taking both online and B2B orders that need each kind routed and handled properly.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Store Platforms and Tools We Connect',
    paragraphs: [
      'We work with the store, helpdesk and email tools you already use, connecting them through native connectors, APIs or webhooks where they offer access. Workflows run on platforms such as Make, Zapier or n8n; for higher order volumes or data you want kept in your own environment, we often recommend [self-hosted n8n builds](/platforms/n8n-automation-services).',
      'The AI steps use models such as OpenAI, Claude or Gemini inside the workflow. Your fulfillment and inventory tools can usually be connected too, depending on what access they provide. Exactly what can be connected in your stack is confirmed in the audit.',
    ],
    groups: [
      { label: 'Store Platforms', items: ['Shopify', 'WooCommerce'] },
      { label: 'Helpdesks', items: ['Gorgias', 'Zendesk'] },
      { label: 'Email Platforms', items: ['Klaviyo', 'Mailchimp'] },
      { label: 'Automation Platforms', items: ['n8n', 'Make', 'Zapier', 'Airtable'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
      { label: 'Other', items: ['Fulfillment and inventory tools', 'Spreadsheets', 'APIs', 'Webhooks'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Your E-commerce Automation With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We learn how your store actually runs, then build workflows inside the platforms you already pay for.',
    items: [
      { title: 'Store Operations First', description: 'We map how orders, products, stock and messages move through your team before choosing any tool.' },
      { title: 'Your Platforms, Your Accounts', description: 'Workflows run in accounts you own, and you pay platform and AI usage costs directly.' },
      { title: 'Honest About Limits', description: 'If a store app or your platform’s built-in feature already solves the problem, we will tell you.' },
      { title: 'People Approve What Matters', description: 'Refunds, exceptions and published content wait for a person, not just the AI’s judgment.' },
      { title: 'Tested on Real Orders', description: 'Workflows are tested with realistic orders, products and messages, including the awkward ones.' },
      { title: 'Documented Handover', description: 'You receive the workflows and the documentation behind them, ready for your team to own.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Automate Your First Store Workflow',
    intro:
      'We start with the store workflow that costs your team the most time or causes the most customer friction, prove it works, then expand. You approve the plan before anything is built.',
    steps: [
      { title: 'Free Audit', description: 'We review your store, tools and team routines and agree where automation would help first.' },
      { title: 'Workflow Plan', description: 'Triggers, store data, rules, approvals and exceptions are written down and agreed.' },
      { title: 'Build', description: 'Workflows are built in your accounts and connected to your store, helpdesk and email tools.' },
      { title: 'Test With Store Data', description: 'Every path is run with sample orders, products and messages before customers see anything.' },
      { title: 'Supervised Launch', description: 'The workflow goes live with your team reviewing early runs and approving drafts.' },
      { title: 'Handover', description: 'You receive the workflows, access and documentation, and we agree what to automate next.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline for each stage.',
  },

  cta: {
    bandHeading: 'Find the store workflow worth automating first',
    heading: 'Spend Less Time Running the Store and More Time Growing It',
    description:
      'Book a free, no-obligation e-commerce automation audit. We will look at how products, orders and customer messages move through your store today, show where automation would help most, and tell you plainly what is not worth automating yet.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  related: {
    eyebrow: 'E-commerce Automation Solutions',
    heading: 'Five Ways to Automate Your Online Store',
    intro:
      'Choose the solution that matches the problem in front of you, from day-to-day store admin to helping shoppers find the right product.',
    items: [
      {
        title: 'AI Ecommerce Automation Software',
        description: 'The operations layer for daily store workflows across catalog, orders, customer messages, returns, reviews and reports.',
        href: '/products/ai-ecommerce-automation/ai-ecommerce-automation-software',
      },
      {
        title: 'AI Inventory Management Software',
        description: 'Consistent stock records, low-stock alerts at your thresholds and reorder reminders drafted for approval.',
        href: '/products/ai-ecommerce-automation/ai-inventory-management-software',
      },
      {
        title: 'AI Order Processing Automation',
        description: 'Orders from the store, email and forms checked, classified, routed and kept moving, with exceptions sent to a person.',
        href: '/products/ai-ecommerce-automation/ai-order-processing-automation',
      },
      {
        title: 'AI Product Recommendation Software',
        description: 'Related-product and cross-sell workflows designed from your catalog data, store features and email channels.',
        href: '/products/ai-ecommerce-automation/ai-product-recommendation-software',
      },
      {
        title: 'AI Shopping Assistant',
        description: 'A chat assistant that answers product and policy questions, guides shoppers to the right item and hands off to staff.',
        href: '/products/ai-ecommerce-automation/ai-shopping-assistant',
      },
    ],
  },

  faqHeading: 'AI E-commerce Automation: Common Questions',
  faqSideText: 'Not sure which part of your store to automate first? Book a free audit and we will look at it with you.',
  faqs: [
    {
      question: 'What is AI e-commerce automation?',
      answer:
        'It is the use of workflows and AI models to run the repeatable work behind an online store, such as catalog upkeep, order checks, stock alerts, customer questions and follow-up emails. Clickmasters builds it inside the store and tools you already use, with people approving anything that affects money or customers.',
    },
    {
      question: 'What can be automated in an online store?',
      answer:
        'Common candidates are product description drafts and attribute clean-up, order tagging and exception handling, low-stock alerts, answers to order and product questions, return request intake, review requests, abandoned-cart sequences, lifecycle emails and regular store reports.',
    },
    {
      question: 'Is this a software product we subscribe to?',
      answer:
        'No. Clickmasters is an agency. We design and build workflows on platforms you own, such as your store, helpdesk, email tool and an automation platform like Make or n8n. You pay platform and AI usage costs directly and keep the workflows after handover.',
    },
    {
      question: 'Does ecommerce automation work with Shopify and WooCommerce?',
      answer:
        'Yes, both are platforms we connect to, alongside helpdesks such as Gorgias and Zendesk and email platforms such as Klaviyo and Mailchimp. What can be connected in your specific setup, including fulfillment and inventory tools, is confirmed during the audit.',
    },
    {
      question: 'Will AI make decisions about refunds or orders on its own?',
      answer:
        'No. AI can read requests, check them against your policy and prepare the case, but refunds, replacements, order changes and other money decisions are approved by a person on your team.',
    },
    {
      question: 'Can AI write our product descriptions?',
      answer:
        'AI can draft descriptions from supplier data and your style guidelines, and tidy titles and attributes to a consistent format. Your team reviews and edits the drafts before they are published, so the copy stays accurate and on-brand.',
    },
    {
      question: 'Do you handle payments, shipping or fulfillment?',
      answer:
        'Those stay with your store platform, payment provider and fulfillment tools. Our workflows work around them, for example by sharing order details or sending status updates where those systems offer access, but they do not process payments or buy shipping labels.',
    },
    {
      question: 'Can you automate inventory forecasting?',
      answer:
        'Our inventory work focuses on keeping stock information consistent, alerting at thresholds you set and drafting reorder reminders for approval. Forecasting is usually the job of dedicated planning tools; where your sales history supports it, we can discuss related workflows during the audit.',
    },
    {
      question: 'Will automation replace our store team?',
      answer:
        'No. It takes repetitive admin off their plate so they can spend time on suppliers, products and customers. People still handle exceptions, complaints, approvals and decisions about the business.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your store and tools, agree the first workflow to automate and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
