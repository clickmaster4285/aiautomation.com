// content/products/ai-ecommerce-automation/ai-inventory-management-software.ts
// Copy + SEO for /products/ai-ecommerce-automation/ai-inventory-management-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is stock INFORMATION management: keeping product and stock records consistent between the store and
//   spreadsheets, low-stock alerts at thresholds the client sets, SKU / attribute / category clean-up, stock
//   visibility reports, supplier reorder REMINDERS and drafts that a person approves and sends, and less
//   inventory admin. General store workflows belong to AI Ecommerce Automation Software; order intake and
//   routing to AI Order Processing Automation.
// - NOT Clickmasters features (never claim them): real-time stock sync, predictive demand forecasting engines,
//   warehouse / WMS integrations, automatic replenishment or automatically placed purchase orders, shipping
//   carrier integrations, fulfillment automation, payment processing. Forecasting and planning may appear only
//   as general industry context ("a common approach…", "where your sales history supports it, we can scope…").
// - Stack named: Shopify, WooCommerce, "your fulfillment and inventory tools" (generic), spreadsheets, Airtable;
//   build platforms n8n, Make, Zapier; AI layer OpenAI / Claude / Gemini; APIs, webhooks, custom code.
// - No statistics, percentages, prices, testimonials, customer names, guarantees or ongoing-support promises.
// - Clickmasters builds workflows on platforms the client owns — it is not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_INVENTORY_MANAGEMENT_SOFTWARE_PATH =
  '/products/ai-ecommerce-automation/ai-inventory-management-software';

export const aiInventoryManagementSoftwareSeo: HubSeo = {
  name: 'AI Inventory Management Software',
  path: AI_INVENTORY_MANAGEMENT_SOFTWARE_PATH,
  title: 'AI Inventory Management Software for Sellers | Clickmasters',
  description:
    'AI inventory management software for online sellers: consistent stock records, low-stock alerts at your thresholds, SKU clean-up and reorder drafts you approve.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI E-commerce Automation', path: '/products/ai-ecommerce-automation' },
    { name: 'AI Inventory Management Software', path: AI_INVENTORY_MANAGEMENT_SOFTWARE_PATH },
  ],
};

export const aiInventoryManagementSoftwareKeywords = [
  'AI inventory management software',
  'inventory management automation',
  'ecommerce inventory automation',
  'low stock alerts',
  'Shopify inventory spreadsheet automation',
  'stock record reconciliation',
  'SKU data cleanup',
  'inventory reporting automation',
  'supplier reorder reminders',
  'inventory automation services',
  'how to keep store stock and spreadsheets in step',
  'can AI help with inventory management',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI e-commerce automation', href: '/products/ai-ecommerce-automation', section: 'What Is AI Inventory Management Software?' },
  { anchor: 'reporting automation for online stores', href: '/solutions/reporting-automation/for-ecommerce', section: 'What Our Inventory Management Automation Covers (features)' },
  { anchor: 'Airtable automation services', href: '/platforms/airtable-automation-services', section: 'One Version of the Stock Truth (spotlight)' },
  { anchor: 'order processing automation for e-commerce', href: '/products/ai-ecommerce-automation/ai-order-processing-automation', section: 'Inventory Admin vs Order Processing vs Store Operations (extras)' },
  { anchor: 'ecommerce automation software', href: '/products/ai-ecommerce-automation/ai-ecommerce-automation-software', section: 'Inventory Admin vs Order Processing vs Store Operations (extras)' },
] as const;

export const aiInventoryManagementSoftware: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 4 },

  hero: {
    badge: 'AI Inventory Management Software',
    heading: 'AI Inventory Management Software That Keeps Your Stock Records Straight',
    accentWords: 3,
    subheading:
      'We build workflows that keep product and stock information consistent between your store and your spreadsheets, warn you when items fall below the levels you set, clean up messy SKU data and draft supplier reorder emails for a person to approve. Less stock admin, fewer surprises, and your team still makes the buying decisions.',
    primaryCta: { text: 'Book a Free Inventory Admin Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/business.jpg',
    imageAlt: 'Person in a suit adjusting orange connected gears and automation nodes, representing AI inventory management software keeping stock records in step',
    imageWidth: 1200,
    imageHeight: 628,
    marquee: ['Consistent stock records', 'Low-stock alerts', 'SKU clean-up', 'Stock visibility reports', 'Reorder reminders', 'Supplier email drafts'],
  },

  intro: {
    eyebrow: 'Stock Information',
    heading: 'What Is AI Inventory Management Software?',
    paragraphs: [
      'AI inventory management software, as we build it, is a set of workflows that looks after your stock information rather than your shelves. It checks that product and quantity records agree between the store and the spreadsheets your team works from, raises an alert when an item drops below a level you have chosen, and prepares the reorder reminder or supplier email so a person only has to check and send it.',
      'AI helps with the untidy parts. Supplier stock lists arrive as PDFs or spreadsheets with their own product names. Variant data is entered three different ways. A free-text note says “10 returned, 2 damaged”. An AI step can read those inputs, match them to the right SKU and put them in a consistent format for the workflow to use.',
      'This is one of five solutions in our [AI e-commerce automation](/products/ai-ecommerce-automation) range. It is built for online sellers whose stock admin lives in the store and in spreadsheets, not a replacement for warehouse software.',
    ],
    problems: [
      'The store says 14 in stock, the spreadsheet says 9, and nobody knows which is right.',
      'Best-sellers sell out because nobody noticed the count dropping.',
      'The same product appears under different SKUs, names or colour spellings.',
      'Reorder emails to suppliers are written from scratch every time.',
      'Getting a simple view of what is low, what is slow and what is missing means a morning of exports.',
    ],
  },

  explainer: {
    eyebrow: 'Why Records Drift',
    heading: 'Why Stock Information Gets Out of Step',
    paragraphs: [
      'Stock records rarely go wrong in one big way. They drift. A manual adjustment is made in the store but not in the sheet. A supplier renames a product. A return is restocked without a note. Each change is small and sensible on its own, but after a few weeks the numbers no longer agree and the team stops trusting them.',
      'Once trust goes, people work around the records: checking shelves by hand, keeping private lists and reordering on instinct. Automation cannot count the boxes in your stockroom, but it can stop the information drifting by checking records on a schedule and flagging differences while they are still small.',
    ],
    points: [
      { title: 'Two Sources of Truth', description: 'The store and the team spreadsheet are both edited, and they disagree.' },
      { title: 'Inconsistent SKUs', description: 'Codes, names and variant labels are entered differently by different people.' },
      { title: 'Supplier Formats', description: 'Each supplier sends stock and price lists in its own layout and naming.' },
      { title: 'Untracked Adjustments', description: 'Returns, damages and samples change quantities without a record of why.' },
      { title: 'Nobody Watching', description: 'Low stock is noticed when a customer cannot buy, not before.' },
      { title: 'Report Fatigue', description: 'Building a stock overview by hand takes so long that it stops happening.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our Inventory Management Automation Covers',
    intro:
      'Each workflow is set up around your products, your thresholds and the tools your team already uses. Stock summaries can be combined with sales and order figures in the wider [reporting automation for online stores](/solutions/reporting-automation/for-ecommerce) we build.',
    items: [
      { title: 'Record Consistency Checks', description: 'Scheduled comparisons of stock figures in the store and your spreadsheet, with every mismatch listed.' },
      { title: 'Low-Stock Alerts', description: 'An alert when a product or variant falls below the level you set for it, sent to the person who buys.' },
      { title: 'Reorder Reminders', description: 'A reminder with the item, current count and usual supplier when a reorder point is reached.' },
      { title: 'Supplier Email Drafts', description: 'A reorder email drafted with your usual order quantity, waiting for a person to edit, approve and send.' },
      { title: 'SKU and Attribute Clean-Up', description: 'Duplicate codes, inconsistent names and variant labels found and mapped to one standard.' },
      { title: 'Categorization', description: 'Products sorted into categories and tagged from their details, with uncertain ones flagged.' },
      { title: 'Supplier List Intake', description: 'AI reads supplier stock and price files and matches each line to your SKUs for review.' },
      { title: 'Stock Visibility Reports', description: 'A regular summary of what is low, what has not sold recently and which records need attention.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'Worked Example: From a Low Count to an Approved Reorder',
    intro:
      'A store sells a ceramic mug in four colours. You have set a reorder level of 20 for each colour. Here is what happens when the sage green variant drops to 18.',
    steps: [
      { title: 'Scheduled Check', description: 'The morning stock check reads the current quantity for each variant from the store.' },
      { title: 'Threshold Reached', description: 'Sage green is below its level of 20, so the workflow creates a low-stock alert.' },
      { title: 'Context Gathered', description: 'The alert pulls in the supplier, the last order quantity and how many sold over the past few weeks.' },
      { title: 'Draft Prepared', description: 'An AI step drafts a reorder email to the supplier using your template and the quantity you normally order.' },
      { title: 'Person Approves', description: 'Your buyer gets the alert and the draft, adjusts the quantity, then approves and sends the email.' },
      { title: 'Record Updated', description: 'The reorder is logged in the stock sheet as pending, so nobody orders the same item twice.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Better Stock Information Gives Your Team',
    intro:
      'The goal is records your team can trust, so buying decisions are based on facts rather than a quick look at the shelf.',
    items: [
      { title: 'Numbers People Trust', description: 'Mismatches are caught and fixed while they are small, before they spread.' },
      { title: 'Fewer Sell-Outs by Surprise', description: 'Buyers hear about low stock at the level they chose, not from a customer.' },
      { title: 'Faster Reorders', description: 'Reminders and drafts mean a reorder is a quick check rather than a fresh email.' },
      { title: 'Cleaner Catalog Data', description: 'Standard SKUs and attributes make every other store workflow more reliable.' },
      { title: 'A Clear Weekly View', description: 'One report shows low, slow and problem items without anyone building it.' },
      { title: 'Less Admin', description: 'Time spent comparing sheets and rewriting supplier lists goes back to the team.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Rules Plus AI',
    heading: 'Where AI Helps With Inventory Admin',
    paragraphs: [
      'Thresholds and comparisons are rules: if a count is below 20, raise an alert; if two records differ, list them. AI earns its place where inputs are written by people or by suppliers. It can read a supplier’s stock list and work out that “Mug – Sage 350ml” is your SKU MUG-350-SGE, or turn a stockroom note into a structured adjustment for someone to confirm.',
      'Decisions about what to buy, how much and when stay with your team. The workflow gathers the facts and prepares the paperwork. Your buyer adds what the data cannot show, such as an upcoming promotion, a supplier’s holiday closure or a product being discontinued.',
    ],
    aiDoes: [
      'Matches supplier product names to your SKUs',
      'Standardizes variant names, colours and sizes',
      'Suggests categories and tags from product details',
      'Turns free-text stock notes into structured entries for review',
      'Drafts reorder emails from your templates',
      'Writes a short summary for the weekly stock report',
    ],
    peopleDo: [
      'Set reorder levels and choose suppliers',
      'Approve and send every reorder',
      'Confirm stock adjustments and resolve mismatches',
      'Decide on promotions, discontinued lines and new stock',
    ],
  },

  spotlight: {
    eyebrow: 'Store and Spreadsheet',
    heading: 'One Version of the Stock Truth',
    paragraphs: [
      'Many growing stores keep a working stock sheet alongside the store: it holds supplier details, cost prices, reorder levels and notes that the store platform does not. The problem is that quantities live in both places. A workflow can check them against each other on a schedule you choose, list every difference with the product, both figures and when each was last changed, and send that list to the person responsible.',
      'For teams that have outgrown a basic spreadsheet, a structured base with linked tables for products, suppliers and reorders is often a better home. Our [Airtable automation services](/platforms/airtable-automation-services) page explains how we set up that kind of base so the store, the stock records and the reorder log stay connected.',
    ],
    points: [
      { title: 'Agreed Source per Field', description: 'For each field, such as quantity or cost price, we agree which system is treated as correct.' },
      { title: 'Scheduled Comparisons', description: 'Checks run at times you choose, such as each morning and after a stock count.' },
      { title: 'Mismatch List', description: 'Differences are listed with both figures, so a person can decide which one to keep.' },
      { title: 'Change Notes', description: 'Adjustments for returns, damages or samples are recorded with a reason.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Where This Fits',
      heading: 'Inventory Admin vs Order Processing vs Store Operations',
      accentWords: 4,
      paragraphs: [
        'Stock information sits between several store workflows, so it helps to be clear about the boundaries. This page is about the records: are they consistent, are they complete, and does someone hear about low stock in time. What happens to each order as it arrives, including checks, classification and routing, is covered by [order processing automation for e-commerce](/products/ai-ecommerce-automation/ai-order-processing-automation).',
        'The everyday store workflows around catalog drafts, returns, reviews, cart emails and reports are covered by our [ecommerce automation software](/products/ai-ecommerce-automation/ai-ecommerce-automation-software) page, which includes simple stock alerts as one part of a wider set.',
      ],
      points: [
        { title: 'Choose Inventory Management When', description: 'Stock records disagree, SKUs are messy, or reorders depend on someone noticing.' },
        { title: 'Choose Order Processing When', description: 'Orders arrive incomplete, need classifying or routing, or come in by email as purchase orders.' },
        { title: 'Choose Ecommerce Automation Software When', description: 'You need many lighter workflows across the store rather than depth in one area.' },
      ],
    },
    {
      eyebrow: 'Forecasting and Planning',
      heading: 'What About Demand Forecasting?',
      accentWords: 2,
      paragraphs: [
        'Many businesses want to know not just what is low today but what will be low next month. A common approach is to use dedicated planning tools or the forecasting features inside inventory software, which use sales history and seasonality to suggest future quantities. We do not sell a forecasting engine.',
        'What we can do is make sure the data any planning relies on is clean and in one place. Where your sales history supports it, we can scope simple workflows during the audit, such as adding recent sales figures to low-stock alerts or summarizing seasonal patterns in the stock report, so your buyer has better context for decisions they still make themselves.',
      ],
      points: [
        { title: 'Clean History First', description: 'Consistent SKUs and records make any later forecasting far more useful.' },
        { title: 'Context in Alerts', description: 'Recent sales shown next to the current count help a buyer judge the reorder quantity.' },
        { title: 'Dedicated Tools for Planning', description: 'Where full forecasting is needed, we will say so and work around the tool you choose.' },
      ],
    },
    {
      eyebrow: 'Clear Boundaries',
      heading: 'What This Is Not',
      accentWords: 2,
      paragraphs: [
        'Being clear about limits saves time later. These workflows check and organize stock information on a schedule. They are not a live, second-by-second sync of quantities across sales channels, and they are not a warehouse management system with bin locations and pick lists.',
        'They also never place orders with suppliers on their own. Every reorder is drafted for a person to approve and send. Shipping, fulfillment and payments stay with your store and your existing fulfillment and inventory tools, which we connect to where they offer access.',
      ],
      points: [
        { title: 'Not Live Stock Sync', description: 'Records are compared on a schedule and differences flagged for a person.' },
        { title: 'Not a Warehouse System', description: 'Bin locations, picking and packing stay in the tools built for them.' },
        { title: 'Not Automatic Purchasing', description: 'Reorders are reminders and drafts; your team approves and sends them.' },
        { title: 'Not Fulfillment', description: 'Shipping and fulfillment stay in your existing tools.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Use Cases',
    heading: 'Who Uses AI Inventory Automation',
    items: [
      { title: 'Stores Run From a Spreadsheet', description: 'Sellers who track stock, costs and suppliers in a sheet next to their Shopify or WooCommerce store.' },
      { title: 'Large Variant Catalogs', description: 'Apparel, homeware and accessories brands with many sizes and colours per product.' },
      { title: 'Multi-Supplier Buyers', description: 'Teams ordering from several suppliers, each with its own product names and file formats.' },
      { title: 'Owner-Buyers', description: 'Founders who handle buying themselves and need reminders rather than another dashboard.' },
      { title: 'Seasonal Sellers', description: 'Stores whose busy periods make low-stock warnings and clean records especially important.' },
      { title: 'Stores Cleaning Up Data', description: 'Businesses about to change tools that want consistent SKUs and attributes first.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Stores, Sheets and Tools We Connect',
    paragraphs: [
      'We connect your store platform, spreadsheets or Airtable base, email and team chat, using native connectors, APIs or webhooks where they offer access. Your fulfillment and inventory tools can often be included for reading stock information; exactly what they allow is confirmed in the audit.',
      'Workflows run on platforms such as n8n, Make or Zapier, with models such as OpenAI, Claude or Gemini for the AI steps. You own the accounts and pay the platform and AI usage costs directly.',
    ],
    groups: [
      { label: 'Store Platforms', items: ['Shopify', 'WooCommerce'] },
      { label: 'Stock Records', items: ['Spreadsheets', 'Airtable'] },
      { label: 'Workflow Platforms', items: ['n8n', 'Make', 'Zapier'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
      { label: 'Other', items: ['Fulfillment and inventory tools', 'Email', 'APIs', 'Webhooks'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Automate Inventory Admin With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We tidy and connect the stock information you already have, inside tools you own, and leave the buying decisions with you.',
    items: [
      { title: 'Data Before Workflows', description: 'We look at how your SKUs and records are structured before automating anything on top of them.' },
      { title: 'Your Thresholds, Your Rules', description: 'Reorder levels, suppliers and alert recipients are set by your team and easy to change.' },
      { title: 'Honest Scope', description: 'If you need a warehouse system or a forecasting tool, we will say so rather than stretch a workflow.' },
      { title: 'People Approve Reorders', description: 'No supplier order is ever sent without a person checking it.' },
      { title: 'Tested on Your Catalog', description: 'Matching and clean-up are tested on your real product data, including the awkward variants.' },
      { title: 'Documented and Yours', description: 'You receive the workflows and documentation after handover and keep full control.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up Your Inventory Workflows',
    intro:
      'We usually start by agreeing which records are correct and cleaning up the SKU data, because every alert and report depends on it. You approve the plan before anything is built.',
    steps: [
      { title: 'Free Audit', description: 'We look at where your stock information lives and where it goes wrong.' },
      { title: 'Record Map', description: 'We agree the source for each field, the thresholds and who receives each alert.' },
      { title: 'Data Clean-Up', description: 'SKUs, variant names and categories are standardized, with uncertain matches checked by your team.' },
      { title: 'Build', description: 'Checks, alerts, reorder drafts and reports are built in your accounts.' },
      { title: 'Test', description: 'Workflows run against your real catalog and a few deliberate mismatches before going live.' },
      { title: 'Handover', description: 'You receive the workflows, access and documentation, ready for your team to run.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline for each stage.',
  },

  cta: {
    bandHeading: 'Get stock records your team can trust',
    heading: 'Stop Reconciling Stock Sheets by Hand',
    description:
      'Book a free, no-obligation inventory admin audit. We will look at where your stock information lives today, show where checks, alerts and reorder drafts would help, and be clear about what needs a dedicated tool instead.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Inventory Management Software: Common Questions',
  faqSideText: 'Not sure whether your stock admin is worth automating? Book a free audit and we will look at it with you.',
  faqs: [
    {
      question: 'What is AI inventory management software?',
      answer:
        'As Clickmasters builds it, it is a set of workflows that keeps stock information consistent between your store and spreadsheets, alerts you at thresholds you set, cleans up SKU data and drafts supplier reorders for approval. AI handles messy inputs such as supplier files and free-text notes.',
    },
    {
      question: 'Does it sync stock levels in real time?',
      answer:
        'No. The workflows compare records on a schedule you choose and flag differences for a person to resolve. Live syncing of quantities across channels is usually handled by your store platform or dedicated inventory software.',
    },
    {
      question: 'Will it place orders with our suppliers automatically?',
      answer:
        'No. When a product reaches its reorder level, the workflow sends a reminder and can draft the supplier email. A person checks the quantity, approves it and sends it.',
    },
    {
      question: 'How are low-stock alerts set up?',
      answer:
        'Your team chooses a level for each product or variant and who should be told. When a scheduled check finds a quantity below that level, the alert goes to that person with the supplier and recent sales attached.',
    },
    {
      question: 'Can AI clean up our SKUs and product attributes?',
      answer:
        'Yes. AI can find duplicate or inconsistent codes, standardize variant names such as colours and sizes, and suggest categories. Uncertain matches are listed for your team to confirm before anything changes.',
    },
    {
      question: 'Can AI inventory management software forecast demand?',
      answer:
        'Forecasting is not something we sell as a feature. Dedicated planning tools usually handle it. Where your sales history supports it, we can scope workflows that add recent sales context to alerts and reports, so your buyer makes better-informed decisions.',
    },
    {
      question: 'Does it work with a warehouse management system?',
      answer:
        'This solution is for stock information in your store and spreadsheets, not warehouse operations. Your fulfillment and inventory tools can sometimes be read from where they offer access, which is confirmed during the audit.',
    },
    {
      question: 'Which stores and tools does it work with?',
      answer:
        'We connect to Shopify and WooCommerce, spreadsheets and Airtable, and build on n8n, Make or Zapier. What can be connected in your setup is confirmed in the audit.',
    },
    {
      question: 'Is this a software subscription?',
      answer:
        'No. We build the workflows in accounts you own. You pay the platform and AI usage costs directly and keep the workflows and documentation after handover.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review where your stock information lives, agree the first workflows and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
