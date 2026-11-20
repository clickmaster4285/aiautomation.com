// content/products/ai-ecommerce-automation/ai-shopping-assistant.ts
// Copy + SEO for /products/ai-ecommerce-automation/ai-shopping-assistant.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is a conversational helper on the store: answering product questions from catalog and policy
//   content (sizing, materials, compatibility, delivery and returns policy), guided product finding by asking
//   questions, comparisons between options, order-status questions where store data access is set up, and
//   hand-off to a person with context. Which products get surfaced across the store and email belongs to
//   AI Product Recommendation Software; general support chatbots to /products/ai-customer-support/ai-chatbot-software.
// - OUT of scope, never claim: voice shopping, completing payment in chat, modifying or cancelling orders from
//   the assistant, behaviour tracking, real-time personalization, a proprietary recommendation engine.
// - Verified capabilities used here: AI support agents answering order / shipping / product / policy questions
//   from store data and escalating complex cases. Stack names from site sources: Shopify, WooCommerce,
//   Gorgias, Zendesk, Klaviyo, Mailchimp. Connections: "where they offer access; confirmed in the audit".
// - AI layer: OpenAI / Claude / Gemini; platforms n8n, Make, Zapier, Airtable; custom code, APIs, webhooks.
// - No statistics, conversion claims, percentages, prices, testimonials, customer names, guarantees,
//   certifications or ongoing-support promises. Do not say the assistant replaces staff. People approve
//   the knowledge, tone and hand-off rules, and handle anything involving money or exceptions.
// - Clickmasters builds on platforms the client owns; the client pays platform and AI usage costs directly
//   and owns the assistant setup and documentation after handover.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_SHOPPING_ASSISTANT_PATH = '/products/ai-ecommerce-automation/ai-shopping-assistant';

export const aiShoppingAssistantSeo: HubSeo = {
  name: 'AI Shopping Assistant',
  path: AI_SHOPPING_ASSISTANT_PATH,
  title: 'AI Shopping Assistant for Online Stores | Clickmasters',
  description:
    'An AI shopping assistant for your store that answers sizing, material and returns questions from your own catalog, compares options and hands off to your team.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI E-commerce Automation', path: '/products/ai-ecommerce-automation' },
    { name: 'AI Shopping Assistant', path: AI_SHOPPING_ASSISTANT_PATH },
  ],
};

export const aiShoppingAssistantKeywords = [
  'AI shopping assistant',
  'ecommerce shopping assistant',
  'AI product assistant for online stores',
  'conversational shopping assistant',
  'product question chatbot',
  'guided product finder',
  'AI sizing and fit assistant',
  'Shopify AI shopping assistant',
  'WooCommerce chat assistant',
  'AI shopping assistant setup',
  'what is an AI shopping assistant',
  'how does an AI shopping assistant work',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI e-commerce automation services', href: '/products/ai-ecommerce-automation', section: 'What Is an AI Shopping Assistant?' },
  { anchor: 'AI order processing automation', href: '/products/ai-ecommerce-automation/ai-order-processing-automation', section: 'Order Questions, Answered From Your Store (spotlight)' },
  { anchor: 'AI chatbot software', href: '/products/ai-customer-support/ai-chatbot-software', section: 'Shopping Assistant, Support Chatbot or Recommendations? (extras)' },
  { anchor: 'AI product recommendation software', href: '/products/ai-ecommerce-automation/ai-product-recommendation-software', section: 'Shopping Assistant, Support Chatbot or Recommendations? (extras)' },
  { anchor: 'AI chatbots for e-commerce stores', href: '/solutions/ai-chatbots/for-ecommerce', section: 'Where the Assistant Lives and What It Reads' },
] as const;

export const aiShoppingAssistant: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 3 },

  hero: {
    badge: 'AI Shopping Assistant',
    heading: 'AI Shopping Assistant That Answers Shoppers Before They Leave',
    accentWords: 3,
    subheading:
      'We build a chat assistant for your store that answers product questions from your own catalog and policies: how a jacket fits, what a bag is made of, whether a part suits a model, how returns work. It asks shoppers what they need, compares options honestly and passes anything it should not handle to your team.',
    primaryCta: { text: 'Book a Free Shopping Assistant Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/customer.png',
    imageAlt: 'Friendly chatbot robot emerging from a phone with chat bubbles, representing an AI shopping assistant answering a shopper’s questions',
    imageWidth: 561,
    imageHeight: 444,
    marquee: ['Sizing and fit', 'Materials and care', 'Compatibility', 'Delivery and returns', 'Guided product finding', 'Side-by-side comparisons', 'Hand-off to your team'],
  },

  intro: {
    eyebrow: 'Help at the Moment of Choice',
    heading: 'What Is an AI Shopping Assistant?',
    paragraphs: [
      'An AI shopping assistant is a chat helper on your store that answers the questions shoppers have while they are deciding. Does this jacket run small? Is the lining waterproof or just water-resistant? Will this charger work with last year’s model? Can I return it if the colour looks different? It answers from your product pages, size guides and policies, in plain language, at any hour.',
      'In a physical shop, those questions go to the person behind the counter. Online, they usually go nowhere. The shopper scrolls, does not find the answer, and either guesses, emails and waits, or leaves. A good assistant fills that gap without pretending to know more than your catalog says.',
      'The assistant is one part of our [AI e-commerce automation services](/products/ai-ecommerce-automation). It is built around your store’s content, set up on tools you own, and designed to hand over to a person whenever a question needs judgment, a decision about money or a change to an order.',
    ],
    problems: [
      'Shoppers ask the same sizing and material questions in pre-sale emails every day.',
      'Size guides and care details exist, but people cannot find them on the product page.',
      'Customers abandon a choice between two similar products because the difference is not clear.',
      'Questions sent out of hours are answered the next day, after the shopper has bought elsewhere.',
      'Generic chat widgets give vague answers that do not match your actual policies.',
    ],
  },

  explainer: {
    eyebrow: 'What It Answers',
    heading: 'The Questions Shoppers Actually Ask',
    paragraphs: [
      'Most pre-purchase questions fall into a few familiar groups. Knowing which ones your customers ask most tells us what the assistant needs to read, and where your product content has gaps that no assistant can paper over.',
      'Every answer is grounded in content you control: product descriptions, attribute fields, size charts, care guides, delivery and returns pages. If the answer is not in that content, the assistant says so and offers a person, rather than inventing a plausible reply.',
    ],
    points: [
      { title: 'Sizing and Fit', description: '“I’m usually a medium but between sizes. Should I size up in this coat?” Answered from your size chart and any fit notes you provide.' },
      { title: 'Materials and Care', description: '“Is this pure wool? Can it go in the washing machine?” Answered from product attributes and care instructions.' },
      { title: 'Compatibility', description: '“Will this case fit the 2023 model?” Answered from the compatibility details in your catalog, with a clear “I’m not sure” when they are missing.' },
      { title: 'Delivery and Returns Policy', description: '“How long does delivery to Ireland take, and can I return sale items?” Answered from your published policy pages.' },
      { title: 'Which One Is Right for Me?', description: '“I need a tent for two people that packs small.” The assistant asks a few questions and suggests matching products.' },
      { title: 'Where Is My Order?', description: 'Order-status questions answered from store data where that access has been set up, with anything else passed to your team.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our AI Shopping Assistant Does',
    intro:
      'Each assistant is configured around your catalog, your policies and the way your team wants to be involved. These are the capabilities we build in.',
    items: [
      { title: 'Answers From Your Catalog', description: 'Product questions answered from your titles, descriptions, attributes and variant details, not general web knowledge.' },
      { title: 'Policy Answers', description: 'Delivery times, returns windows, exchanges and warranty terms explained from the policy pages you publish.' },
      { title: 'Guided Product Finding', description: 'Short follow-up questions, such as budget, use and size, to narrow the catalog down to a few good options.' },
      { title: 'Side-by-Side Comparisons', description: 'Clear explanations of how two or three products differ, using the attributes that matter for the shopper’s need.' },
      { title: 'Order-Status Answers', description: 'Where store data access is set up, shoppers can ask about an existing order and get its current status.' },
      { title: 'Honest Uncertainty', description: 'When the catalog does not say, the assistant says it does not know rather than guessing.' },
      { title: 'Hand-Off With Context', description: 'Questions it should not handle are passed to a person in your helpdesk with the conversation and product attached.' },
      { title: 'Your Tone and Limits', description: 'Wording, topics to avoid and when to offer a person are agreed with you and written into its instructions.' },
      { title: 'Conversation Review', description: 'Transcripts and unanswered questions are logged so your team can see what shoppers ask and fix content gaps.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'One Shopper Conversation, Step by Step',
    intro:
      'Here is a worked example on a clothing store: a shopper is looking at a waxed cotton jacket late in the evening and opens the chat.',
    steps: [
      { title: 'The Question', description: '“Does this run small? I’m 5’10”, usually a large, and I want room for a jumper underneath.”' },
      { title: 'Read the Sources', description: 'The assistant reads the jacket’s size chart, the fit note your team wrote (“cut slim through the body”) and the product attributes.' },
      { title: 'Answer and Ask', description: 'It explains that the jacket is cut slim, suggests the size chart points to an XL for layering, and asks whether the shopper prefers a longer cut.' },
      { title: 'Compare', description: 'The shopper says yes. The assistant compares the jacket with a longer field coat in the range, covering length, lining and weight.' },
      { title: 'Policy Check', description: 'Asked about returns, it quotes your published returns window and how exchanges for a different size work.' },
      { title: 'Hand-Off if Needed', description: 'When the shopper asks for a discount, the assistant explains it cannot offer one and passes the conversation to your team with the details attached.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Why Stores Add a Shopping Assistant',
    intro:
      'The value of an assistant comes from answering real questions well, and from knowing when to stop and bring in a person.',
    items: [
      { title: 'Answers While Shoppers Decide', description: 'Questions are answered in the moment, including evenings and weekends, rather than the next working day.' },
      { title: 'Fewer Pre-Sale Emails', description: 'Routine fit, material and policy questions no longer queue up in the shared inbox.' },
      { title: 'More Confident Choices', description: 'Clear comparisons and fit guidance help shoppers pick the right item first time.' },
      { title: 'Consistent, Accurate Policy', description: 'Delivery and returns are explained the same way every time, from your published wording.' },
      { title: 'Your Team on the Hard Questions', description: 'People spend their time on the conversations that need judgment, with context already gathered.' },
      { title: 'A View of What Shoppers Ask', description: 'Logged questions show where product pages are unclear and what content to add.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI Plus People',
    heading: 'What the Assistant Handles and What Stays With Your Team',
    paragraphs: [
      'The assistant is strong at reading your content and explaining it conversationally. It can combine a size chart, a fit note and a returns policy into one clear answer, and it can ask the follow-up questions a good shop assistant would. That is where AI earns its place.',
      'It is deliberately limited everywhere else. It does not take payments, change or cancel orders, offer discounts or make promises your policies do not support. Those conversations go to a person, with the transcript attached, so the customer does not have to repeat themselves.',
    ],
    aiDoes: [
      'Answers product questions from your catalog',
      'Explains delivery and returns from your policies',
      'Asks follow-up questions to narrow options',
      'Compares products on the attributes that matter',
      'Checks order status where access is set up',
      'Passes conversations to a person with context',
    ],
    peopleDo: [
      'Approve the content and tone it uses',
      'Handle discounts, complaints and exceptions',
      'Make any change to an order or payment',
      'Review logged questions and fill content gaps',
    ],
  },

  spotlight: {
    eyebrow: 'After the Purchase',
    heading: 'Order Questions, Answered From Your Store',
    paragraphs: [
      'Shoppers do not stop asking questions once they have bought. “Has my order shipped?” is one of the most common messages any store receives. Where your store platform gives access to order data, the assistant can look up an order once the customer has confirmed who they are, and report its current status in plain words.',
      'It reports; it does not act. If a customer wants to change an address, swap a size or cancel, the assistant explains that a team member will help and passes the request on. The statuses it can report are only as good as the order data behind them, which is why many stores pair the assistant with [AI order processing automation](/products/ai-ecommerce-automation/ai-order-processing-automation) that keeps those statuses current.',
    ],
    points: [
      { title: 'Customer Confirmed First', description: 'Order details are shared only after the customer provides details that match the order, using checks agreed with you.' },
      { title: 'Status in Plain Words', description: 'Store statuses are translated into wording customers understand, approved by your team.' },
      { title: 'Changes Go to People', description: 'Address changes, swaps and cancellations are passed to your team rather than made in chat.' },
      { title: 'Set Up Where Possible', description: 'Order lookups depend on the access your store platform offers, confirmed in the audit.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Where This Fits',
      heading: 'Shopping Assistant, Support Chatbot or Recommendations?',
      accentWords: 3,
      paragraphs: [
        'A shopping assistant is focused on the decision to buy: product questions, fit, comparisons and the policies that affect the purchase. General-purpose [AI chatbot software](/products/ai-customer-support/ai-chatbot-software) covers a wider set of support conversations across a business, such as account issues, bookings or technical help. Many stores start with the shopping side and extend later.',
        'Recommendations are related but different. [AI product recommendation software](/products/ai-ecommerce-automation/ai-product-recommendation-software) decides which products are surfaced across product pages, the cart and emails, whether or not anyone asks. The assistant is a conversation; when it suggests a product, it can use those same agreed pairings.',
      ],
      points: [
        { title: 'Shopping Assistant', description: 'Answers pre-purchase and order questions, guides choices and compares options in conversation.' },
        { title: 'Support Chatbot', description: 'Handles broader customer service conversations across your business and its channels.' },
        { title: 'Product Recommendations', description: 'Surfaces related, similar and follow-up products across the store and email.' },
        { title: 'What None of Them Do Here', description: 'Voice shopping, taking payment in chat and changing orders are not part of what we build.' },
      ],
    },
    {
      eyebrow: 'Getting the Content Right',
      heading: 'An Assistant Is Only as Good as Your Product Pages',
      accentWords: 4,
      paragraphs: [
        'The assistant cannot tell a shopper that a boot is waterproof if no page on your store says so. Before launch, we test it against the questions your customers actually ask, taken from your inbox and helpdesk, and note every answer it cannot give because the content is missing.',
        'That list is often valuable on its own. Adding a fit note to a best-selling jacket, or a compatibility table to an accessory, helps every shopper who reads the page, not only the ones who open the chat.',
      ],
      points: [
        { title: 'Real Questions First', description: 'Testing uses questions from your own inbox and helpdesk, not invented examples.' },
        { title: 'Content Gap List', description: 'Each unanswerable question is logged with the product and the missing detail.' },
        { title: 'Policy Pages Checked', description: 'Delivery and returns pages are reviewed for wording the assistant could misread.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who an AI Shopping Assistant Is For',
    items: [
      { title: 'Fashion and Footwear Stores', description: 'Retailers where sizing and fit questions drive most pre-sale messages and many returns.' },
      { title: 'Technical and Accessory Sellers', description: 'Stores where shoppers need to know whether a part, case or refill fits what they already own.' },
      { title: 'Stores With Similar Products', description: 'Ranges where shoppers struggle to tell two or three close options apart.' },
      { title: 'Small Customer Service Teams', description: 'Teams who want routine pre-purchase questions answered so they can focus on complex ones.' },
      { title: 'Stores Selling Across Time Zones', description: 'Businesses whose customers shop while the team is offline.' },
      { title: 'Brands Replacing a Weak Widget', description: 'Stores whose current chat tool gives generic answers that do not match their policies.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Where the Assistant Lives and What It Reads',
    paragraphs: [
      'The assistant sits on your Shopify or WooCommerce store and reads your catalog and policy content. Hand-offs go to the helpdesk you already use, such as Gorgias or Zendesk, and order lookups use your store data where access is set up. We connect to each tool where it offers access. For the wider picture of chat on online stores, see [AI chatbots for e-commerce stores](/solutions/ai-chatbots/for-ecommerce).',
      'Models such as OpenAI, Claude or Gemini power the conversation, with platforms such as n8n, Make or custom code handling the connections and logging. What can be connected in your stack is confirmed during the audit.',
    ],
    groups: [
      { label: 'Store Platforms', items: ['Shopify', 'WooCommerce'] },
      { label: 'Helpdesks', items: ['Gorgias', 'Zendesk'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
      { label: 'Automation Platforms', items: ['n8n', 'Make', 'Zapier'] },
      { label: 'Connections', items: ['APIs', 'Webhooks', 'Custom code'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Your Shopping Assistant With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We build assistants on tools you own, ground them in your own content and hand them over with clear documentation of what they can and cannot do.',
    items: [
      { title: 'Grounded in Your Content', description: 'Answers come from your catalog and policies, and the assistant says when they do not cover a question.' },
      { title: 'Clear Limits', description: 'No payments, no order changes, no discounts. Those boundaries are designed in from the start.' },
      { title: 'Tested on Real Questions', description: 'We test with the questions your customers already send, including awkward and ambiguous ones.' },
      { title: 'Hand-Offs That Work', description: 'Your team receives the full conversation and the product in question, ready to reply.' },
      { title: 'Content Gaps Surfaced', description: 'You get a list of what your product pages are missing, useful far beyond the chat.' },
      { title: 'You Own It', description: 'The assistant setup, instructions, accounts and documentation belong to you after handover.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Launch Your Shopping Assistant',
    intro:
      'We start with the questions your shoppers already ask. You approve the assistant’s content, tone and limits before it speaks to a single customer.',
    steps: [
      { title: 'Free Audit', description: 'We review your pre-sale questions, product content, policies and the helpdesk you use.' },
      { title: 'Scope and Limits', description: 'Topics it answers, topics it hands off, tone of voice and order-lookup rules are agreed in writing.' },
      { title: 'Content Preparation', description: 'Catalog and policy content is connected, and gaps found in testing are listed for your team.' },
      { title: 'Build', description: 'The assistant is set up on your store and connected to your helpdesk and data sources.' },
      { title: 'Test and Soft Launch', description: 'Your team tests it with real questions, then it goes live on selected pages first.' },
      { title: 'Handover', description: 'You receive access, the assistant’s instructions and a guide to reviewing conversations and updating content.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline for the assistant and its connections.',
  },

  cta: {
    bandHeading: 'Answer the questions shoppers are already asking',
    heading: 'Give Every Shopper Someone to Ask',
    description:
      'Book a free, no-obligation shopping assistant audit. We will look at the questions your customers send, the content your store already has and what an assistant could answer well.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Shopping Assistant: Common Questions',
  faqSideText: 'Curious which of your customers’ questions an assistant could answer? Book a free audit and bring a week of inbox examples.',
  faqs: [
    {
      question: 'What is an AI shopping assistant?',
      answer:
        'It is a chat helper on your online store that answers shoppers’ questions about products and policies, such as sizing, materials, compatibility, delivery and returns, using your own catalog and policy content. It can also guide shoppers to suitable products and compare options.',
    },
    {
      question: 'Where does the assistant get its answers?',
      answer:
        'From content you control: product descriptions, attributes, size charts, care guides and your published policy pages. If the answer is not there, it says so and offers to pass the question to your team.',
    },
    {
      question: 'Can the AI shopping assistant take payments or place orders?',
      answer:
        'No. Shoppers buy through your normal checkout. The assistant does not take payment in chat, and it does not change, cancel or create orders.',
    },
    {
      question: 'Can it answer “where is my order?” questions?',
      answer:
        'Yes, where your store platform gives access to order data. The customer confirms their details first, and the assistant reports the current status. Any change to the order is passed to your team.',
    },
    {
      question: 'What happens when it cannot answer a question?',
      answer:
        'It tells the shopper it is not sure and hands the conversation to a person in your helpdesk, such as Gorgias or Zendesk, with the transcript and product attached so the customer does not repeat themselves.',
    },
    {
      question: 'How is a shopping assistant different from a support chatbot?',
      answer:
        'A shopping assistant focuses on buying decisions: product questions, fit, comparisons and purchase policies. A support chatbot covers a broader range of customer service conversations. Many businesses use both, or extend one into the other.',
    },
    {
      question: 'Does it support voice shopping?',
      answer:
        'No. The assistant we build is a text chat on your store. Voice shopping is not part of what we offer.',
    },
    {
      question: 'Will it work with Shopify or WooCommerce?',
      answer:
        'Both are platforms we connect to. Exactly how the chat is placed on your store and which data it can read depends on your setup, which we confirm during the audit.',
    },
    {
      question: 'Is this a product we subscribe to?',
      answer:
        'No. We build the assistant on platforms and AI models you hold accounts for. You pay platform and AI usage costs directly, and the setup and documentation belong to you.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit. We review your customers’ questions, your product and policy content, and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
