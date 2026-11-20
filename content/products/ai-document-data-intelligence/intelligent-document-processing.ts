// content/products/ai-document-data-intelligence/intelligent-document-processing.ts
// Copy + SEO for /products/ai-document-data-intelligence/intelligent-document-processing.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is the methodology and category: how OCR, classification, extraction by meaning, confidence,
//   validation, human review and RPA/workflow combine into IDP; IDP vs OCR; IDP vs RPA; how to evaluate and
//   adopt IDP; when IDP is overkill. Keep practical per-document workflow detail light — that belongs to
//   AI Document Processing Software. Reading scans belongs to AI OCR Software; field extraction depth to
//   AI Data Extraction Software; contracts to AI Contract Analysis.
// - Verified capabilities only: capture from inboxes, forms, uploads and cloud folders; OCR plus language
//   models finding fields by meaning; classification; validation against formats, expected values, POs and
//   records; human review with the uncertain field flagged; routing, approvals, filing; delivery to CRM, ERP,
//   accounting, databases and cloud storage where APIs exist; RPA bots for systems with no API; access
//   controls, audit trails, self-hosted n8n.
// - Extraction quality depends on document quality. No accuracy guarantees, handwriting guarantees,
//   compliance certifications, statistics, prices, testimonials, customer names, named vendor comparisons or
//   support promises beyond monitoring and iteration scoped in the quote.
// - Clickmasters builds IDP on platforms the client owns — it is not an IDP software licence.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const INTELLIGENT_DOCUMENT_PROCESSING_PATH = '/products/ai-document-data-intelligence/intelligent-document-processing';

export const intelligentDocumentProcessingSeo: HubSeo = {
  name: 'Intelligent Document Processing',
  path: INTELLIGENT_DOCUMENT_PROCESSING_PATH,
  title: 'Intelligent Document Processing (IDP) | Clickmasters',
  description:
    'Intelligent document processing (IDP) built on your platforms: OCR, classification, AI extraction, confidence checks and human review, plus IDP vs OCR and RPA.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Document & Data Intelligence', path: '/products/ai-document-data-intelligence' },
    { name: 'Intelligent Document Processing', path: INTELLIGENT_DOCUMENT_PROCESSING_PATH },
  ],
};

export const intelligentDocumentProcessingKeywords = [
  'intelligent document processing',
  'IDP',
  'IDP software',
  'IDP vs OCR',
  'IDP vs RPA',
  'document AI',
  'intelligent document processing solutions',
  'confidence scoring in document processing',
  'human-in-the-loop document review',
  'how to evaluate IDP software',
  'intelligent document processing implementation partner',
  'what is intelligent document processing',
  'is IDP worth it for small volumes',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'document and data intelligence overview', href: '/products/ai-document-data-intelligence', section: 'What Is Intelligent Document Processing (IDP)?' },
  { anchor: 'AI OCR software', href: '/products/ai-document-data-intelligence/ai-ocr-software', section: 'IDP vs OCR vs RPA (spotlight)' },
  { anchor: 'robotic process automation', href: '/services/robotic-process-automation', section: 'IDP vs OCR vs RPA (spotlight)' },
  { anchor: 'practical document processing workflows', href: '/products/ai-document-data-intelligence/ai-document-processing-software', section: 'Where IDP Fits in a Wider Automation Stack (extras)' },
  { anchor: 'intelligent process automation', href: '/products/ai-workflow-business-process-automation/intelligent-process-automation', section: 'Where IDP Fits in a Wider Automation Stack (extras)' },
] as const;

export const intelligentDocumentProcessing: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 4 },

  hero: {
    badge: 'Intelligent Document Processing',
    heading: 'Intelligent Document Processing (IDP) With Confidence Checks and Human Review',
    accentWords: 3,
    subheading:
      'Intelligent document processing combines OCR, AI classification, extraction by meaning, validation and human review so documents can be trusted as data. Clickmasters designs and builds IDP on platforms you own, and tells you plainly when a simpler approach would do the job.',
    primaryCta: { text: 'Book a Free IDP Readiness Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/datas.png',
    imageAlt:
      'A hand pressing a glowing Automation control surrounded by icons for people, analytics and charts, representing intelligent document processing with human review',
    imageWidth: 2370,
    imageHeight: 1264,
    marquee: ['OCR', 'Classification', 'Extraction by meaning', 'Confidence checks', 'Validation', 'Human in the loop'],
  },

  intro: {
    eyebrow: 'The Category Explained',
    heading: 'What Is Intelligent Document Processing (IDP)?',
    paragraphs: [
      'Intelligent document processing, usually shortened to IDP, is an approach to handling documents that combines several technologies into one controlled system. OCR turns images into text. Classification works out what each document is. Language models find the values that matter by their meaning. Confidence checks and validation decide which values can be trusted, and a person reviews the rest. The result is document data your other systems can rely on.',
      'What makes IDP different from older document tools is that it does not depend on fixed templates. A template-based system knows that the invoice total sits in a particular box on a particular supplier’s layout. IDP reads the page more like a person would, which is why it copes with documents from many senders. It also knows when it is unsure, and that is the part buyers most often overlook.',
      'This page explains the method, how it compares with OCR and RPA, how to evaluate it and when it is more than you need. For the wider picture of document and data work we build, see our [document and data intelligence overview](/products/ai-document-data-intelligence).',
    ],
    problems: [
      'Template-based tools break whenever a sender changes their document layout.',
      'OCR output is just text, so someone still has to find and type the values.',
      'RPA bots copy data reliably but cannot tell a credit note from an invoice.',
      'Vendor demos run on clean samples that look nothing like your real documents.',
      'Nobody can say how confident the system is in a value before it reaches your records.',
    ],
  },

  explainer: {
    eyebrow: 'Inside an IDP System',
    heading: 'The Six Layers of Intelligent Document Processing',
    paragraphs: [
      'IDP is best understood as layers, each answering one question about a document. Removing any of them changes what the system can be trusted to do. A system with strong extraction but no confidence layer will pass wrong values on quietly. One with no review layer has nowhere to send the documents it cannot handle.',
      'Not every project needs every layer at full strength. Clean digital PDFs may need little OCR; a single document type may need little classification. Part of the design is deciding how much of each layer your documents actually require.',
    ],
    points: [
      { title: 'Text Recognition', description: 'OCR converts scans, photos and image-only PDFs into text, keeping page position so values can be traced back.' },
      { title: 'Classification', description: 'Each document is identified by type, and mixed files are split, so the right rules apply.' },
      { title: 'Extraction by Meaning', description: 'Language models locate fields, tables and line items by what they represent rather than where they sit.' },
      { title: 'Confidence', description: 'Every extracted value carries a judgment of how reliable it is, based on the read and on agreed checks.' },
      { title: 'Validation', description: 'Values are tested against formats, expected amounts, purchase orders and records already in your systems.' },
      { title: 'Human Review and Handoff', description: 'Doubtful values go to a person; trusted ones are handed to workflows, APIs or RPA bots for delivery.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What IDP Software Does That Templates Cannot',
    intro:
      'These are the capabilities that separate IDP from simple capture tools. We assemble them on platforms such as n8n, Make or Zapier with models from OpenAI, Claude or Gemini, configured to your documents.',
    items: [
      { title: 'Layout-Independent Reading', description: 'Documents from new senders are read without building a new template for each one.' },
      { title: 'Mixed-Batch Sorting', description: 'A scanned bundle or multi-attachment email is split and each document classified on its own.' },
      { title: 'Field-Level Confidence', description: 'Reliability is judged per value, so one doubtful date does not send a whole document back.' },
      { title: 'Rule-Based Validation', description: 'Formats, totals, references and required fields are checked by rules that behave the same every time.' },
      { title: 'Record Cross-Checks', description: 'Values are compared with purchase orders, customer records or bookings already held in your systems.' },
      { title: 'Focused Review', description: 'Reviewers see the flagged value highlighted on the source page, alongside the reason it was flagged.' },
      { title: 'Traceability', description: 'Every value can be traced to the page it came from and to anyone who corrected it.' },
      { title: 'Refinement From Exceptions', description: 'Patterns in corrected values are used to adjust prompts and rules after launch, within the monitoring scoped in your quote.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'How IDP Decides What Happens to Each Value',
    intro:
      'A worked example at field level: a faxed purchase order arrives as a scanned PDF from a regular customer. Follow one value, the requested delivery date, through the system.',
    steps: [
      { title: 'Recognize', description: 'OCR converts the scan to text. The date area is faint where the fax line crossed it, and the OCR layer notes the weaker read.' },
      { title: 'Classify', description: 'The document is identified as a purchase order, not a quote or a delivery note, so purchase order rules apply.' },
      { title: 'Locate', description: 'The model finds the requested delivery date, even though this customer labels it “Required by” rather than “Delivery date”.' },
      { title: 'Score', description: 'Because the read was weak and the day could be a 3 or an 8, the value is marked low confidence.' },
      { title: 'Validate', description: 'The other fields pass: the customer, the PO number format and the line totals all agree with your records.' },
      { title: 'Route', description: 'Only the date goes to a person, highlighted on the page. Once confirmed, the purchase order continues to your order system.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What an IDP Approach Gives You',
    intro:
      'The benefit of IDP is not that it reads everything perfectly. It is that you know which values to trust, and people spend their time only on the ones you should not.',
    items: [
      { title: 'Fewer Templates to Maintain', description: 'New senders and changed layouts are handled without rebuilding the system each time.' },
      { title: 'Trust You Can Explain', description: 'Each value has passed checks you agreed, or a person has confirmed it.' },
      { title: 'Review Effort Where It Counts', description: 'Reviewers handle doubtful values, not whole documents that were read correctly.' },
      { title: 'Wrong Values Stopped Early', description: 'Validation catches inconsistencies before they reach your CRM, ERP or accounting system.' },
      { title: 'An Audit Trail by Default', description: 'Source pages, extracted values and corrections are kept together and logged.' },
      { title: 'Reusable Foundations', description: 'The intake, reading and review layers built for one document type can serve the next.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Confidence and Accountability',
    heading: 'Why Human Review Is Part of IDP, Not a Workaround',
    paragraphs: [
      'Language models will usually return an answer, even when the page is unclear. That makes a confidence layer essential. In the systems we build, confidence is not only the model’s own view; it also reflects OCR quality, whether the value passes format rules and whether it agrees with your records. A value that fails any of those goes to a person rather than through.',
      'Human review is designed, not bolted on. The reviewer sees the source page, the extracted value and the reason it was flagged, makes a decision and moves on. Those corrections are logged and used to refine the system. Access is restricted to what each part needs, and where documents are sensitive, the whole pipeline can run on self-hosted infrastructure.',
    ],
    aiDoes: [
      'Classifies documents and splits mixed batches',
      'Locates fields by meaning across layouts',
      'Reads tables and line items into structure',
      'Marks values it could not read confidently',
      'Explains why a value was flagged',
      'Summarizes a document for its reviewer',
    ],
    peopleDo: [
      'Set the fields, rules and confidence thresholds',
      'Confirm or correct flagged values',
      'Decide how new document types are handled',
      'Own the records the data ends up in',
    ],
  },

  spotlight: {
    eyebrow: 'Comparisons',
    heading: 'IDP vs OCR vs RPA',
    paragraphs: [
      'These three are often confused because they appear in the same projects. OCR reads characters. It turns a picture of a page into text, but it has no idea which number is the total. If your challenge is specifically reading scans, photos and image PDFs, our page on [AI OCR software](/products/ai-document-data-intelligence/ai-ocr-software) covers that layer in depth. IDP starts where OCR stops: it understands the text, extracts what matters and decides what can be trusted.',
      'RPA is different again. A bot follows fixed steps through a user interface, clicking and typing as a person would. It is reliable for moving data into systems that have no API, but it cannot interpret a document on its own. In practice, IDP and [robotic process automation](/services/robotic-process-automation) often work together: IDP produces checked data, and a bot enters it into an older system.',
    ],
    points: [
      { title: 'OCR Alone', description: 'Fits when you need searchable text from scans and a person will read it. It does not identify or check values.' },
      { title: 'RPA Alone', description: 'Fits when data is already structured and needs entering into a system with no API. It does not read meaning.' },
      { title: 'IDP', description: 'Fits when varied documents must become trusted data, with confidence checks and review for doubtful values.' },
      { title: 'IDP Plus RPA', description: 'Fits when checked document data must reach a legacy system that only accepts input through its screens.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Evaluating IDP',
      heading: 'How to Evaluate IDP Software and Partners',
      accentWords: 3,
      paragraphs: [
        'Every IDP demo looks good on clean samples. The useful questions are about your documents and what happens when the system is wrong. Ask to see results on a sample set you choose, including the faint scans and odd layouts, and ask how each failure would have been caught.',
        'Look beyond extraction, too. Where does the processing run? Who can see the documents? How do reviewers work, and how long does a review take? Can the output reach your systems directly? And who owns the configuration if you change partner later?',
      ],
      points: [
        { title: 'Test on Your Own Documents', description: 'Judge any system on a sample set you pick, not on the vendor’s demonstration files.' },
        { title: 'Ask About Confidence', description: 'Check whether reliability is judged per field and how thresholds are set and adjusted.' },
        { title: 'Inspect the Review Step', description: 'See exactly what a reviewer is shown and how a correction flows back into the process.' },
        { title: 'Confirm Where Data Lives', description: 'Find out where documents are processed and stored, and whether self-hosting is possible.' },
        { title: 'Clarify Ownership and Costs', description: 'Know who owns the workflows and what usage costs you will pay as volume grows.' },
      ],
    },
    {
      eyebrow: 'Honest Fit',
      heading: 'When Intelligent Document Processing Is Overkill',
      accentWords: 2,
      paragraphs: [
        'IDP is not always the right answer. If you receive a handful of documents a week, a person may handle them faster than any system can be justified. If the data already arrives as a structured CSV export or through an API, there is nothing to read, and a simple integration will do.',
        'We would rather tell you that at the audit than build something heavier than your problem. Sometimes the right first step is a basic workflow that collects and files documents, with IDP added later when volume or variety makes the case.',
      ],
      points: [
        { title: 'Low Volume', description: 'A few documents a week rarely justify the build, testing and running costs of a full IDP system.' },
        { title: 'Already Structured Data', description: 'CSV exports, API feeds and database records need integration and cleaning, not document AI.' },
        { title: 'One Fixed Digital Format', description: 'A single, unchanging system-generated PDF can often be parsed with simple rules.' },
        { title: 'An Undefined Process', description: 'If nobody agrees what should happen to a document, automate nothing until that is settled.' },
      ],
    },
    {
      eyebrow: 'Where This Fits',
      heading: 'Where IDP Fits in a Wider Automation Stack',
      accentWords: 3,
      paragraphs: [
        'IDP is a capability, not a whole process. It turns documents into trusted data, and then something else has to act on that data: approvals, filing, updates to your CRM or ERP, messages to customers. When you are ready to design those steps for a specific document type, our page on [practical document processing workflows](/products/ai-document-data-intelligence/ai-document-processing-software) shows how a build is put together from intake to delivery.',
        'At a broader level, IDP is one ingredient of [intelligent process automation](/products/ai-workflow-business-process-automation/intelligent-process-automation), which combines AI judgment, workflows and RPA across processes that are not only about documents.',
      ],
      points: [
        { title: 'IDP', description: 'The method that turns varied documents into checked, structured data with human review for doubtful values.' },
        { title: 'Document Processing Workflows', description: 'The end-to-end operational path for one document type, built on top of the IDP layers.' },
        { title: 'Intelligent Process Automation', description: 'AI, workflows and RPA combined across a whole business process, documents included.' },
        { title: 'Start Small, Reuse Layers', description: 'One document type proves the approach; the same intake and review layers extend to the next.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who Should Consider IDP',
    items: [
      { title: 'Teams Outgrowing Templates', description: 'Businesses whose template-based capture breaks every time a sender changes format.' },
      { title: 'High-Variety Receivers', description: 'Organizations receiving the same document type from many senders in many layouts.' },
      { title: 'Operations Leaders Evaluating Tools', description: 'Managers comparing IDP vendors and approaches who want an independent view of what matters.' },
      { title: 'Teams With Legacy Systems', description: 'Departments where checked document data must reach older systems through RPA.' },
      { title: 'Regulated or Sensitive Environments', description: 'Teams that need review steps, audit trails and control over where documents are processed.' },
      { title: 'Enterprise Departments', description: 'Groups standardizing document handling across sites, with access controls and approvals agreed in scoping.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'The IDP Stack We Assemble',
    paragraphs: [
      'An IDP system is assembled from parts rather than bought as one box. We combine intake from inboxes, forms, uploads and cloud folders; OCR and models such as OpenAI, Claude or Gemini for reading; workflow platforms such as n8n, Make or Zapier for rules and routing; and connections to your CRM, ERP, accounting tools, databases and cloud storage where they offer APIs.',
      'Where a destination system has no API, an RPA bot can enter the checked data through its interface. Where documents are sensitive, n8n can be self-hosted so processing happens inside your environment. Which components suit your setup is confirmed in the audit.',
    ],
    groups: [
      { label: 'Intake', items: ['Email inboxes', 'Web forms', 'Uploads', 'Cloud folders'] },
      { label: 'Reading Layer', items: ['OCR', 'OpenAI', 'Claude', 'Gemini'] },
      { label: 'Workflow and Review', items: ['n8n', 'Make', 'Zapier', 'Airtable'] },
      { label: 'Destinations', items: ['Salesforce', 'HubSpot', 'QuickBooks', 'Xero', 'NetSuite', 'Databases'] },
      { label: 'Connections', items: ['APIs', 'Webhooks', 'RPA bots'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Intelligent Document Processing With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency, not an IDP vendor. We are not selling a licence, so we can recommend the simplest approach that works for your documents and build it on platforms you own.',
    items: [
      { title: 'Vendor-Neutral Advice', description: 'We choose models and platforms by task and cost, and tell you when IDP is not needed.' },
      { title: 'Confidence Designed In', description: 'Thresholds, validation rules and review steps are agreed before the build starts.' },
      { title: 'Proved on Your Samples', description: 'We test reading and classification on documents you choose, including the difficult ones.' },
      { title: 'Control Over Data', description: 'Access controls, audit trails and self-hosted options keep documents where you need them.' },
      { title: 'Works With What You Have', description: 'Output reaches your existing systems through APIs, webhooks or RPA bots.' },
      { title: 'Yours to Keep', description: 'You own the workflows and documentation, and pay platform and AI usage costs directly.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Adopt IDP in Your Business',
    intro:
      'We introduce IDP one document type at a time, starting where variety and volume make it most worthwhile. Each phase is approved by you before it is built.',
    steps: [
      { title: 'Free Audit', description: 'We review your document sources, types, volumes and the manual steps that follow them.' },
      { title: 'Fit Assessment', description: 'We tell you which document types justify IDP and which are better served by something simpler.' },
      { title: 'Field and Threshold Design', description: 'Fields, validation rules, confidence thresholds and reviewers are agreed in writing.' },
      { title: 'Build', description: 'OCR and AI reading, review steps, workflow logic and integrations are built on the agreed platform.' },
      { title: 'Test on Variations', description: 'The system is run against a broad sample set, and every failure is traced to the layer that should catch it.' },
      { title: 'Launch and Refine', description: 'Early live documents are reviewed closely, and exceptions refine rules and prompts within the scope of your quote.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline for each document type in the plan.',
  },

  cta: {
    bandHeading: 'Find out whether IDP fits your documents',
    heading: 'Know Which Document Data You Can Trust',
    description:
      'Book a free, no-obligation IDP readiness audit. Bring a sample of your real documents, and we will show where intelligent document processing would help, where it would not, and how review would work for your team.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'Intelligent Document Processing: Common Questions',
  faqSideText: 'Evaluating IDP and not sure what to ask? Book a free audit and test the approach on your own documents.',
  faqs: [
    {
      question: 'What is intelligent document processing?',
      answer:
        'Intelligent document processing (IDP) combines OCR, document classification, AI extraction by meaning, confidence checks, validation and human review to turn varied documents into trusted, structured data. Clickmasters builds IDP systems on platforms you own rather than licensing a product.',
    },
    {
      question: 'What is the difference between IDP and OCR?',
      answer:
        'OCR converts an image of text into text. IDP uses that text: it identifies the document, finds the values that matter, checks them and decides which need a person to confirm. OCR is usually the first layer inside an IDP system.',
    },
    {
      question: 'What is the difference between IDP and RPA?',
      answer:
        'RPA bots repeat fixed steps in software interfaces, such as copying values into a form. They do not understand documents. IDP reads and interprets documents. The two are often combined, with IDP producing checked data and RPA entering it into systems that have no API.',
    },
    {
      question: 'Is document AI the same as IDP?',
      answer:
        'The terms are used almost interchangeably. Document AI often refers to the AI reading and extraction itself, while IDP usually describes the complete system around it, including confidence checks, validation, review and delivery to other systems.',
    },
    {
      question: 'How accurate is intelligent document processing?',
      answer:
        'It depends on the documents. Clean digital files usually perform well; faint scans and handwriting are harder. We do not quote a fixed accuracy. The system is designed so values that fail confidence or validation checks go to a person instead of into your records.',
    },
    {
      question: 'How should we evaluate IDP software?',
      answer:
        'Test it on a sample of your own documents, including the difficult ones. Check whether confidence is judged per field, what reviewers see, where data is processed, how output reaches your systems and who owns the configuration.',
    },
    {
      question: 'When is IDP not worth it?',
      answer:
        'When volumes are very low, when data already arrives in a structured format such as a CSV or API feed, when every document comes from one fixed system-generated layout, or when the process around the document is not yet agreed. We will say so in the audit.',
    },
    {
      question: 'Does IDP need training on our documents?',
      answer:
        'Modern language models can read new layouts without training a custom model for each one. What does need tuning is the set of fields, prompts, validation rules and confidence thresholds, which we configure and test against your sample documents.',
    },
    {
      question: 'Can IDP run inside our own environment?',
      answer:
        'Yes. Workflows can run on a self-hosted platform such as n8n, with access controls and audit trails, so documents stay within your environment. Specific security and hosting requirements are agreed during scoping.',
    },
    {
      question: 'Is this an IDP platform we license?',
      answer:
        'No. Clickmasters builds IDP systems on platforms you own, such as n8n, Make or Zapier, with AI models from providers like OpenAI, Claude or Gemini. You pay platform and AI usage costs directly and own the workflows and documentation.',
    },
    {
      question: 'How do we get started with IDP?',
      answer:
        'Book a free audit. We review your documents and volumes, tell you honestly whether IDP fits, and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
