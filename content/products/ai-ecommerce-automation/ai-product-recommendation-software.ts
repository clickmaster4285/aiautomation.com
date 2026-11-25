// content/products/ai-ecommerce-automation/ai-product-recommendation-software.ts
// Copy + SEO for /products/ai-ecommerce-automation/ai-product-recommendation-software.
//
// Accuracy rules for this page (keep them when editing):
// - Educational + practical page about how relevant products get surfaced across the store, email and an
//   assistant, and the approaches behind it. Conversational product guidance belongs to the AI Shopping
//   Assistant sibling; catalog / stock record cleanup to AI Inventory Management Software.
// - Clickmasters does NOT sell its own recommendation engine. It designs recommendation workflows using the
//   client’s catalog and order data, the store platform’s own features or apps, AI models, and email /
//   assistant channels, scoped in the audit. Say this explicitly.
// - OUT of scope, never claim: a proprietary recommendation engine, a behavioural tracking system, real-time
//   personalization, voice shopping. Approaches such as "bought together" and similarity are described as
//   general methods ("a common approach is…", "where your order history supports it…").
// - Verified e-commerce capabilities used here: lifecycle campaigns, abandoned-cart sequences, review
//   requests, AI assistants answering product questions from store data. Stack names from site sources:
//   Shopify, WooCommerce, Klaviyo, Mailchimp, Gorgias, Zendesk. Connections: "where they offer access;
//   confirmed in the audit".
// - No statistics, conversion or revenue uplift claims, percentages, prices, testimonials, customer names,
//   guarantees, certifications or ongoing-support promises. People approve rules and customer-facing copy.
// - Clickmasters builds on platforms the client owns; the client pays platform and AI usage costs directly
//   and owns the workflows and documentation after handover.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_PRODUCT_RECOMMENDATION_SOFTWARE_PATH =
  '/products/ai-ecommerce-automation/ai-product-recommendation-software';

export const aiProductRecommendationSoftwareSeo: HubSeo = {
  name: 'AI Product Recommendation Software',
  path: AI_PRODUCT_RECOMMENDATION_SOFTWARE_PATH,
  title: 'AI Product Recommendation Software for Stores | Clickmasters',
  description:
    'AI product recommendation software explained: related, bought-together and similar items, plus email and assistant suggestions built from your catalog.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI E-commerce Automation', path: '/products/ai-ecommerce-automation' },
    { name: 'AI Product Recommendation Software', path: AI_PRODUCT_RECOMMENDATION_SOFTWARE_PATH },
  ],
};

export const aiProductRecommendationSoftwareKeywords = [
  'AI product recommendation software',
  'product recommendation engine',
  'ecommerce product recommendations',
  'related products and cross-sell',
  'frequently bought together recommendations',
  'similar product recommendations',
  'post-purchase recommendation emails',
  'upsell and cross-sell automation',
  'Shopify product recommendations',
  'product recommendation setup services',
  'how do product recommendations work',
  'what data do product recommendations need',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI e-commerce automation range', href: '/products/ai-ecommerce-automation', section: 'What Is AI Product Recommendation Software?' },
  { anchor: 'tidy product attributes and catalog records', href: '/products/ai-ecommerce-automation/ai-inventory-management-software', section: 'The Data Recommendations Depend On (spotlight)' },
  { anchor: 'AI email automation', href: '/products/ai-marketing-automation/ai-email-automation', section: 'Recommendations in Post-Purchase Emails (extras)' },
  { anchor: 'marketing automation for e-commerce brands', href: '/solutions/marketing-automation/for-ecommerce', section: 'Recommendations in Post-Purchase Emails (extras)' },
  { anchor: 'AI shopping assistant', href: '/products/ai-ecommerce-automation/ai-shopping-assistant', section: 'Recommendations vs a Shopping Assistant (extras)' },
] as const;

export const aiProductRecommendationSoftware: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Product Recommendation Software',
    heading: 'AI Product Recommendation Software for the Right Next Product',
    accentWords: 3,
    subheading:
      'We design recommendation workflows around your own catalog and order data: related items on product pages, sensible add-ons in the cart, follow-up suggestions in post-purchase emails and answers from an on-site assistant. Built with your store’s own features, the apps you already use and AI models, not a black box we rent you.',
    primaryCta: { text: 'Book a Free Recommendation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/customer.png',
    imageAlt: 'Friendly chatbot robot emerging from a phone with chat bubbles, representing product suggestions offered to online shoppers',
    imageWidth: 561,
    imageHeight: 444,
    marquee: ['Related products', 'Bought together', 'Similar items', 'Complete the set', 'Post-purchase emails', 'Assistant suggestions'],
  },

  intro: {
    eyebrow: 'Product Discovery',
    heading: 'What Is AI Product Recommendation Software?',
    paragraphs: [
      'AI product recommendation software decides which other products to show a shopper alongside the one they are looking at, the one in their basket or the one they bought last month. Done well, it answers the question the customer was about to ask: what goes with this, what is the alternative, and what will I need next. Done badly, it fills a product page with random bestsellers that have nothing to do with the item on screen.',
      'There is no single recommendation method. Some suggestions come from simple rules a merchandiser sets, some from patterns in past orders, some from comparing product attributes, and some from an AI model that reads product descriptions and a customer’s question. Most stores get the best results by combining a few of these, each placed where it makes sense.',
      'We should be clear about what we offer. Clickmasters does not sell its own recommendation engine. As part of our [AI e-commerce automation range](/products/ai-ecommerce-automation), we design and build the recommendation workflows around your catalog, using your store platform’s own features or apps, AI models and your email and assistant channels. What fits your store is scoped in the audit.',
    ],
    problems: [
      '“You may also like” blocks show the same few bestsellers on every product page.',
      'Shoppers leave because they cannot work out which accessory or refill fits what they own.',
      'Post-purchase emails promote products unrelated to what the customer just bought.',
      'Related products are set by hand for a handful of items and never updated.',
      'Product data is too inconsistent for any tool to compare items sensibly.',
    ],
  },

  explainer: {
    eyebrow: 'The Approaches',
    heading: 'How Product Recommendations Work',
    paragraphs: [
      'Recommendation methods differ mainly in what they learn from. Some only need your catalog. Others need a reasonable amount of order history before they say anything useful. Choosing the right one depends on how many products you sell, how often people buy, and how much your products have in common.',
      'The approaches below are the common ones across e-commerce. They are not exclusive: a store might use rules for its hero products, order patterns for consumables and AI similarity for a long tail of items nobody has had time to merchandise.',
    ],
    points: [
      { title: 'Rule-Based Related Products', description: 'A person decides what goes with what, such as “show the matching case with every phone model”. Predictable and easy to explain, but slow to maintain across a large catalog.' },
      { title: 'Bought Together', description: 'A common approach is to look at which products appear in the same orders. Where your order history supports it, this surfaces pairings people actually buy, such as a lens and its filter.' },
      { title: 'Attribute-Based Similarity', description: 'Products are compared on category, material, size, style or compatibility. Useful for suggesting alternatives when an item is unsuitable or out of stock, and it works without order history.' },
      { title: 'AI Description Matching', description: 'An AI model reads product titles and descriptions to find items that are genuinely similar or complementary, even when the attributes are filled in unevenly.' },
      { title: 'Conversational Suggestions', description: 'An assistant asks a shopper what they need and suggests products from the catalog that match the answers, explaining why each one fits.' },
      { title: 'Email Follow-Ups', description: 'Suggestions sent after a purchase, based on what was bought and the products that usually come next, such as a refill or a care kit.' },
    ],
  },

  features: {
    eyebrow: 'What We Build',
    heading: 'Recommendation Workflows We Design and Build',
    intro:
      'Every store needs a different mix. These are the pieces we combine, using your platform’s own recommendation features or apps where they already do the job well and adding workflows and AI where they do not.',
    items: [
      { title: 'Related Product Rules', description: 'Rules for which products appear together, set with your merchandising team and applied consistently across the catalog.' },
      { title: 'Bought-Together Analysis', description: 'A periodic review of order history to find common pairings, presented to a person before anything goes live.' },
      { title: 'Similar-Item Matching', description: 'AI-assisted matching of products by attributes and descriptions, to suggest alternatives and fill gaps in related lists.' },
      { title: 'Compatibility Lists', description: 'Which accessories, parts or refills fit which products, built from your product data and checked by your team.' },
      { title: 'Cart Add-On Suggestions', description: 'Small, relevant extras shown at basket stage using your store’s features or apps, based on what is already in the cart.' },
      { title: 'Post-Purchase Email Picks', description: 'Follow-up products chosen for each order and placed into lifecycle emails in Klaviyo or Mailchimp.' },
      { title: 'Assistant Suggestions', description: 'Product suggestions given in conversation by an on-site assistant, drawn from the same catalog and rules.' },
      { title: 'Exclusion Rules', description: 'Products that should never be suggested, such as discontinued items, samples or items that conflict with each other.' },
      { title: 'Recommendation Review Sheet', description: 'A spreadsheet or Airtable view where your team can see, approve and override suggested pairings.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'Building Recommendations for One Product Range, Step by Step',
    intro:
      'Here is a worked example: an online store selling coffee equipment wants better suggestions for its range of grinders, from product page to the follow-up email.',
    steps: [
      { title: 'Review the Catalog', description: 'We check the grinder listings and their accessories for missing attributes, such as burr type, capacity and compatible parts.' },
      { title: 'Agree the Rules', description: 'Your team sets the non-negotiables: every grinder shows its replacement burrs and cleaning tablets, and never a competitor’s spare part.' },
      { title: 'Read the Order History', description: 'Past orders show which beans, scales and storage tins tend to be bought with each grinder, where there is enough history to say.' },
      { title: 'Match Similar Items', description: 'An AI step compares descriptions to suggest alternative grinders at nearby prices for when a model is unavailable.' },
      { title: 'Review and Publish', description: 'The proposed pairings appear in a review sheet. Once approved, they are applied through your store’s related-products feature or app.' },
      { title: 'Follow Up by Email', description: 'Two weeks after purchase, the lifecycle email suggests the matching cleaning tablets rather than a generic bestseller.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why Better Product Suggestions Matter',
    intro:
      'Good recommendations are a service to the shopper first. When they help people find what they need, they also tend to help the store.',
    items: [
      { title: 'Easier Discovery', description: 'Shoppers find accessories, alternatives and refills without searching the whole catalog.' },
      { title: 'More Relevant Cross-Sell', description: 'Add-ons make sense for the product in question, which is the difference between helpful and pushy.' },
      { title: 'Fewer Wrong Purchases', description: 'Compatibility lists help customers buy the part that actually fits.' },
      { title: 'Every Product Covered', description: 'Long-tail items get sensible suggestions, not only the products someone had time to set by hand.' },
      { title: 'Consistent Across Channels', description: 'The product page, emails and assistant draw on the same rules, so suggestions agree with each other.' },
      { title: 'Your Team Stays in Control', description: 'Merchandisers approve pairings and exclusions rather than handing them to an opaque tool.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Rules Plus AI',
    heading: 'Where AI Fits in Product Recommendations',
    paragraphs: [
      'Plenty of good recommendations need no AI at all. If a camera always needs a specific battery, a rule says so and is right every time. Rules are also the safest way to encode things the data cannot know, such as a supplier agreement or a product you would rather not promote.',
      'AI helps where the catalog is large or messy. A model can read thousands of product descriptions and propose which items are similar or complementary, fill in missing attributes for a person to confirm, or explain in plain words why a suggestion fits. It works from your own product data and rules, and its proposals go to your team before they reach customers.',
    ],
    aiDoes: [
      'Reads product descriptions to find similar items',
      'Proposes complementary products for review',
      'Suggests missing attributes for a person to confirm',
      'Groups products by use, style or compatibility',
      'Writes short reasons a product is suggested',
      'Flags pairings that conflict with your rules',
    ],
    peopleDo: [
      'Set the rules and exclusions',
      'Approve proposed pairings before launch',
      'Decide which channels show suggestions',
      'Review results and adjust the mix',
    ],
  },

  spotlight: {
    eyebrow: 'Data Quality',
    heading: 'The Data Recommendations Depend On',
    paragraphs: [
      'Every recommendation method is only as good as the product data behind it. If half your jackets have no material listed, and sizes are written three different ways, a tool cannot tell which items are alike. If your store has only a few hundred orders, patterns in them will be thin. We look at this honestly in the audit, because it decides which approaches are realistic.',
      'Often the most useful first step is not recommendations at all, but cleaning up the catalog so that products can be compared. Workflows that [tidy product attributes and catalog records](/products/ai-ecommerce-automation/ai-inventory-management-software) make every later recommendation more reliable, and they help search and filters on your store too.',
    ],
    points: [
      { title: 'Consistent Attributes', description: 'Category, size, material, colour and compatibility recorded the same way across products.' },
      { title: 'Useful Descriptions', description: 'Product text that says what the item is for, so an AI model has something real to compare.' },
      { title: 'Enough Order History', description: 'Bought-together patterns need a reasonable volume of orders. Where that is missing, other methods are used instead.' },
      { title: 'Clear Exclusions', description: 'A maintained list of products that should not be suggested, kept alongside the catalog.' },
    ],
  },

  extras: [
    {
      eyebrow: 'After the Sale',
      heading: 'Recommendations in Post-Purchase Emails',
      accentWords: 3,
      paragraphs: [
        'The customer who has just bought from you is often the one most likely to need something else soon: the refill, the matching piece, the care product. A post-purchase email that suggests the right item at the right time is far more useful than a weekly newsletter of whatever is on promotion.',
        'We build these suggestions into the lifecycle emails you send from Klaviyo or Mailchimp, using the product pairings agreed for your store. The email side of the work is covered in more depth on our [AI email automation](/products/ai-marketing-automation/ai-email-automation) page, and the wider campaign picture for stores in [marketing automation for e-commerce brands](/solutions/marketing-automation/for-ecommerce).',
      ],
      points: [
        { title: 'Timed to the Product', description: 'Suggestions are sent when they are likely to be useful, such as when a consumable is running low.' },
        { title: 'Based on the Order', description: 'Each email draws on what the customer bought, not a generic list.' },
        { title: 'Within Your Brand Voice', description: 'Copy and layout are approved by your team before any email is switched on.' },
        { title: 'Combined With Review Requests', description: 'Suggestions can sit alongside an existing review request or care-tips email rather than adding another send.' },
      ],
    },
    {
      eyebrow: 'Where This Fits',
      heading: 'Recommendations vs a Shopping Assistant',
      accentWords: 3,
      paragraphs: [
        'Recommendations and assistants are often confused. Recommendation workflows decide which products are surfaced and where: on the product page, in the cart, in emails and inside conversations. They work quietly in the background, whether or not the shopper asks anything.',
        'An [AI shopping assistant](/products/ai-ecommerce-automation/ai-shopping-assistant) is a conversation. It answers questions about sizing, materials, delivery and returns, and can guide a shopper to a choice by asking what they need. When it suggests products, it can draw on the same rules described here, so the store and the assistant agree.',
      ],
      points: [
        { title: 'Recommendations', description: 'Which products appear alongside others across the store, cart, emails and assistant.' },
        { title: 'Shopping Assistant', description: 'A chat that answers product and policy questions and helps a shopper decide.' },
        { title: 'Shared Foundations', description: 'Both depend on clean catalog data and the same agreed pairings and exclusions.' },
        { title: 'Not Included', description: 'Behaviour tracking systems, real-time personalization engines and a proprietary recommendation engine are not part of what we build.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI Product Recommendation Software Suits',
    items: [
      { title: 'Stores With Accessories and Add-Ons', description: 'Retailers whose products naturally need a second item, such as parts, cases, refills or care kits.' },
      { title: 'Large or Growing Catalogs', description: 'Shops with more products than anyone can merchandise by hand.' },
      { title: 'Repeat-Purchase Brands', description: 'Businesses selling consumables, where the right follow-up email is useful to the customer.' },
      { title: 'Technical Product Sellers', description: 'Stores where compatibility matters and the wrong suggestion causes a return.' },
      { title: 'Merchandising Teams', description: 'People who want control over pairings without updating every product page manually.' },
      { title: 'Stores Unhappy With an App', description: 'Teams whose current recommendation app shows irrelevant products and want to understand why.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Channels and Tools Recommendations Can Reach',
    paragraphs: [
      'Recommendation workflows read from your store platform, such as Shopify or WooCommerce, and write back through its own related-products features or the apps you already use. Suggestions can also be passed to email tools such as Klaviyo or Mailchimp and to an assistant on your site. We connect to each where it offers access.',
      'Models such as OpenAI, Claude or Gemini handle the description-reading and similarity steps, run on platforms such as n8n, Make or Zapier, with review sheets in Airtable or a spreadsheet. What can be connected in your stack is confirmed during the audit.',
    ],
    groups: [
      { label: 'Store Platforms', items: ['Shopify', 'WooCommerce'] },
      { label: 'Email', items: ['Klaviyo', 'Mailchimp'] },
      { label: 'Review and Data', items: ['Airtable', 'Spreadsheets'] },
      { label: 'Automation Platforms', items: ['n8n', 'Make', 'Zapier'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Plan Your Product Recommendations With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We design recommendation workflows around tools you already own, explain how each suggestion is made and hand everything over documented.',
    items: [
      { title: 'No Engine to Lock You In', description: 'We build with your platform’s features, your apps and your data, not a proprietary system you have to keep renting.' },
      { title: 'Honest About Data', description: 'We tell you when your catalog or order history is not ready for a method, and what to fix first.' },
      { title: 'Explainable Suggestions', description: 'Every pairing comes from a rule, a pattern or a reviewed AI proposal you can trace.' },
      { title: 'Use What Already Works', description: 'If your store’s built-in features do the job, we say so rather than building around them.' },
      { title: 'People Approve First', description: 'Pairings, exclusions and email copy are reviewed by your team before customers see them.' },
      { title: 'You Own It', description: 'The workflows, rules and documentation belong to you after handover.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Plan Your Recommendations',
    intro:
      'We start by looking at what your store shows customers today and the product data behind it. You approve the approach before anything changes on the store.',
    steps: [
      { title: 'Free Audit', description: 'We review your current suggestions, catalog data, order volume and the channels you use.' },
      { title: 'Choose Approaches', description: 'We agree which methods suit which parts of the catalog, and which channels to start with.' },
      { title: 'Prepare the Data', description: 'Missing or inconsistent attributes are fixed or flagged so products can be compared.' },
      { title: 'Build and Propose', description: 'Workflows generate proposed pairings and exclusions in a review sheet for your team.' },
      { title: 'Approve and Publish', description: 'Approved suggestions go live on the store, in emails or in the assistant, one channel at a time.' },
      { title: 'Handover', description: 'You receive the workflows, rules and a guide to reviewing and updating suggestions.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline for each recommendation channel.',
  },

  cta: {
    bandHeading: 'See what your store recommends today',
    heading: 'Show Shoppers the Product They Were Looking For',
    description:
      'Book a free, no-obligation recommendation audit. We will review your current suggestions and product data, and tell you which approaches are realistic for your store.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Product Recommendation Software: Common Questions',
  faqSideText: 'Not sure why your store suggests the products it does? Book a free audit and we will look at it together.',
  faqs: [
    {
      question: 'What is AI product recommendation software?',
      answer:
        'It is the set of rules, data and AI steps that decide which products to show a shopper alongside the one they are viewing, buying or have bought. It can draw on merchandising rules, order patterns, product similarity and AI-read descriptions.',
    },
    {
      question: 'Do you sell your own recommendation engine?',
      answer:
        'No. We design recommendation workflows around your catalog and order data, using your store platform’s own features or apps, AI models and your email and assistant channels. The right mix is scoped in the audit.',
    },
    {
      question: 'How do product recommendations work?',
      answer:
        'Common methods include related products set by rules, items frequently bought together in past orders, products similar in their attributes, and AI comparison of product descriptions. Most stores combine several, each used where it fits.',
    },
    {
      question: 'What data do we need for good recommendations?',
      answer:
        'Consistent product attributes and useful descriptions matter most. Bought-together patterns also need a reasonable volume of order history. If either is missing, we start by improving the data or use methods that do not depend on it.',
    },
    {
      question: 'Do you track shopper behaviour or personalize in real time?',
      answer:
        'No. We do not build behaviour tracking systems or real-time personalization engines. Our workflows use your catalog, your order data and the rules your team sets.',
    },
    {
      question: 'Can recommendations go into our emails?',
      answer:
        'Yes. Suggested products can be added to post-purchase and lifecycle emails sent from tools such as Klaviyo or Mailchimp, using the pairings agreed for your store.',
    },
    {
      question: 'How is this different from an AI shopping assistant?',
      answer:
        'Recommendations decide which products are surfaced across the store, cart, emails and assistant. A shopping assistant is a conversation that answers questions and helps a shopper choose. The assistant can use the same recommendation rules.',
    },
    {
      question: 'Will this work with our Shopify or WooCommerce store?',
      answer:
        'Both are platforms we connect to. How suggestions are shown depends on your theme, built-in features and apps, which we review during the audit.',
    },
    {
      question: 'Can our team control which products are suggested?',
      answer:
        'Yes. Your team sets the rules and exclusions and approves proposed pairings in a review sheet before they go live, and can override them later.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your catalog, order data and current suggestions, recommend the approaches that fit and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
