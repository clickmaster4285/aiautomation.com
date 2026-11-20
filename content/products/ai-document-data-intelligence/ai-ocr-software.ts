// content/products/ai-document-data-intelligence/ai-ocr-software.ts
// Copy + SEO for /products/ai-document-data-intelligence/ai-ocr-software.
//
// Accuracy rules for this page (keep them when editing):
// - Focus is READING: scans, phone photos and image-only PDFs turned into usable, searchable text; classic OCR
//   vs AI-assisted (layout-aware) OCR; scan quality, multi-page files and tables; limits; OCR as the first step
//   before classification and extraction. Getting validated fields into systems belongs to AI Data Extraction
//   Software; the end-to-end workflow per document type to AI Document Processing Software; the overall
//   methodology to Intelligent Document Processing.
// - Limits must stay explicit: results depend on document quality and structure; handwriting, faint print and
//   poor scans are flagged for a person, never guaranteed. No accuracy percentages or recognition guarantees.
// - Verified capabilities only: capture from inboxes, forms, uploads and cloud folders; OCR plus language models
//   across varied layouts; classification; low-confidence items to a person; delivery to systems where APIs
//   exist; RPA for systems with no API; self-hosted options (e.g. n8n), access controls and audit trails.
// - No statistics, prices, testimonials, customer names, certifications or ongoing-support promises.
// - Clickmasters builds on platforms the client owns — not a standalone SaaS app.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_OCR_SOFTWARE_PATH = '/products/ai-document-data-intelligence/ai-ocr-software';

export const aiOcrSoftwareSeo: HubSeo = {
  name: 'AI OCR Software',
  path: AI_OCR_SOFTWARE_PATH,
  title: 'AI OCR Software for Scans and Image PDFs | Clickmasters',
  description:
    'AI OCR software that reads scans, photos and image-only PDFs into searchable text, keeps tables and page layout intact, and flags unclear pages for a person.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Document & Data Intelligence', path: '/products/ai-document-data-intelligence' },
    { name: 'AI OCR Software', path: AI_OCR_SOFTWARE_PATH },
  ],
};

export const aiOcrSoftwareKeywords = [
  'AI OCR software',
  'optical character recognition software',
  'OCR automation',
  'scanned document to text',
  'AI text recognition',
  'OCR for scanned PDFs',
  'image to text for business documents',
  'OCR table recognition',
  'make scanned documents searchable',
  'OCR automation services',
  'AI OCR vs traditional OCR',
  'can OCR read handwriting',
  'how accurate is AI OCR',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'document and data intelligence services', href: '/products/ai-document-data-intelligence', section: 'What Is AI OCR Software?' },
  { anchor: 'AI data extraction software', href: '/products/ai-document-data-intelligence/ai-data-extraction-software', section: 'Classic OCR vs AI OCR: What Actually Changes (explainer)' },
  { anchor: 'document automation for logistics teams', href: '/solutions/document-automation/for-logistics', section: 'Getting Better Results From Real-World Scans (spotlight)' },
  { anchor: 'Intelligent document processing', href: '/products/ai-document-data-intelligence/intelligent-document-processing', section: 'OCR vs Data Extraction vs Intelligent Document Processing (extras)' },
  { anchor: 'RPA bots for systems without an API', href: '/services/robotic-process-automation', section: 'Where Scanned Documents Come From and Where They Go' },
] as const;

export const aiOcrSoftware: ProductPageContent = {
  layout: { introTone: 'secondary', featuresColumns: 3 },

  hero: {
    badge: 'AI OCR Software',
    heading: 'AI OCR Software That Turns Scans and Photos Into Usable Text',
    accentWords: 2,
    subheading:
      'We build OCR workflows that read scanned documents, phone photos and image-only PDFs. Optical character recognition is combined with AI that understands page layout, so you get text your team can search and your systems can use, with tables and reading order intact. Pages that cannot be read with confidence are flagged for a person, never guessed.',
    primaryCta: { text: 'Book a Free OCR Automation Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/datas.png',
    imageAlt:
      'A hand pressing a glowing Automation control surrounded by icons for people, analytics and charts, representing scanned documents being read by AI OCR and passed into automated workflows',
    imageWidth: 2370,
    imageHeight: 1264,
    marquee: ['Scanned PDFs', 'Phone photos', 'Multi-page files', 'Table recognition', 'Searchable text', 'Low-confidence flags'],
  },

  intro: {
    eyebrow: 'From Pixels to Text',
    heading: 'What Is AI OCR Software?',
    paragraphs: [
      'AI OCR software turns pictures of text into text a computer can work with. A signed delivery note photographed on a loading dock, a forty-page lease scanned on the office copier, an order form that arrived by fax and was saved as an image PDF: to a computer, each is just pixels until optical character recognition reads it. Once it is text, it can be searched, stored, checked by a person or passed on for extraction.',
      'Classic OCR converts shapes into characters and stops there. It often loses the reading order of columns, merges table cells into a single line and has no sense of which number is a total. AI-assisted OCR adds a model that understands the page as a document: headings, paragraphs, tables, stamps and signature blocks, and how they relate to each other. The quality of the result still depends heavily on the quality of the image.',
      'OCR is usually the first step in a larger flow rather than the goal in itself. It is part of our [document and data intelligence services](/products/ai-document-data-intelligence), where readable text is then classified, extracted, checked and routed to the right place.',
    ],
    problems: [
      'Years of scanned files sit in shared drives as images that nobody can search.',
      'Staff open a scanned PDF, find that copy and paste returns nothing, and retype it.',
      'Basic OCR output scrambles columns and tables, so the text is technically there but unusable.',
      'Photos taken in the field arrive skewed, shadowed or cropped, and the existing scanner software gives up.',
      'Nobody knows which recognized text is reliable, so every page gets checked by hand anyway.',
    ],
  },

  explainer: {
    eyebrow: 'Classic vs AI-Assisted',
    heading: 'Classic OCR vs AI OCR: What Actually Changes',
    paragraphs: [
      'Optical character recognition software has existed for decades, and for clean, single-column typed pages it still works well. The trouble starts with real business paperwork: forms full of boxes, invoices with tables, stamps across printed text, multi-column layouts and pages photographed at an angle on a desk.',
      'AI-assisted OCR does not make a poor image readable by magic. What it changes is everything around recognition: understanding layout, keeping tables in rows and columns, grouping the parts of a page that belong together and reporting where it is uncertain. That structured output is what [AI data extraction software](/products/ai-document-data-intelligence/ai-data-extraction-software) then works from when it pulls specific fields into your systems.',
    ],
    points: [
      { title: 'Characters vs Structure', description: 'Classic OCR returns a stream of characters. Layout-aware reading returns headings, paragraphs and tables in reading order.' },
      { title: 'Tables', description: 'Classic tools often flatten tables into lines of text. AI-assisted reading keeps rows and columns, so each line item stays together.' },
      { title: 'Unfamiliar Layouts', description: 'Zone-based OCR needs a template drawn for each form. A language model can read documents whose layout it has not seen before.' },
      { title: 'Imperfect Images', description: 'Rotated pages and skewed photos can be corrected before reading, though detail lost in a poor scan cannot be recovered.' },
      { title: 'Uncertainty', description: 'Classic OCR rarely says when it is wrong. Our workflows flag low-confidence pages and fields for a person.' },
      { title: 'What Happens Next', description: 'Classic OCR ends with a text file. In our builds, the text moves straight on to classification, extraction and routing.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our AI OCR Software Handles',
    intro:
      'Each OCR workflow is set up for the documents you actually receive and for what needs to happen to the text afterward.',
    items: [
      { title: 'Intake From Any Channel', description: 'Scans and photos are picked up from email inboxes, upload forms and cloud folders as soon as they arrive.' },
      { title: 'Scans and Image PDFs', description: 'Copier scans and image-only PDFs with no text layer are read and converted into usable text.' },
      { title: 'Phone Photos', description: 'Pictures of documents taken on site or in the field are processed, with unusable captures flagged rather than forced through.' },
      { title: 'Multi-Page Documents', description: 'Long scans are read page by page and kept in order, so a forty-page file stays one document.' },
      { title: 'Layout and Reading Order', description: 'Columns, headings and sections are kept in the right sequence instead of being merged across the page.' },
      { title: 'Table Recognition', description: 'Tables are read as rows and columns, so quantities, prices and dates stay attached to the right line.' },
      { title: 'Searchable Text', description: 'Recognized text is stored alongside the original image, so files can be found later by what they say.' },
      { title: 'Document Classification', description: 'Once a page is readable, it is identified by type, such as delivery note, form or letter, and sent to the right workflow.' },
      { title: 'Confidence Flags', description: 'Pages or fields read with low confidence, including handwriting and faint print, go to a person to confirm.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'One Scanned Bill of Lading, From Image to Usable Text',
    intro:
      'Here is a typical example: a depot scans signed bills of lading at the end of each shift and saves them to a shared folder as image PDFs. This is what happens to one three-page scan.',
    steps: [
      { title: 'Arrive', description: 'The image PDF lands in the cloud folder and the workflow picks it up, leaving the original file untouched.' },
      { title: 'Prepare', description: 'Each page is checked for orientation and legibility. Page two was scanned upside down and is rotated before reading.' },
      { title: 'Recognize', description: 'OCR reads the printed text, and the layout model identifies the shipper and consignee blocks, the goods table and the signature area.' },
      { title: 'Assess', description: 'Most of the document reads cleanly. A handwritten note about a damaged pallet is low confidence, so it is marked rather than guessed.' },
      { title: 'Review', description: 'A coordinator sees the page image beside the recognized text with the note highlighted, and types in what it actually says.' },
      { title: 'Hand On', description: 'The text is stored with the original scan so it can be searched, and the document moves on to extraction and the shipment record.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What Readable Documents Give Your Team',
    intro:
      'The value of OCR lies in what becomes possible once the text exists: search, extraction, routing and focused review.',
    items: [
      { title: 'Archives You Can Search', description: 'Scanned files can be found by their contents, not only by filename or folder.' },
      { title: 'No Retyping From Images', description: 'Text from scans is available to copy, check and pass on, instead of being keyed in again.' },
      { title: 'Tables That Stay Usable', description: 'Line items and grids keep their structure, ready for extraction or a spreadsheet.' },
      { title: 'Known Confidence', description: 'Your team can see which pages were read cleanly and which need a second look.' },
      { title: 'Field Paperwork Accepted', description: 'Photos from drivers, engineers or site staff enter the same workflow as office scans.' },
      { title: 'A Base for Automation', description: 'Readable text is what classification, extraction and routing all depend on.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'Limits Stated Plainly',
    heading: 'What AI OCR Can Read, and What It Should Flag',
    paragraphs: [
      'Recognition quality depends on the source. Clean, typed, well-lit pages read reliably. Faded thermal receipts, low-resolution scans, stamps across text, creased paper and handwriting are harder, and no OCR system reads them perfectly. We do not promise handwriting recognition. Instead, we design each workflow so that uncertain content is shown to a person rather than quietly recorded as fact.',
      'The practical fix is often upstream of the software: a scanner setting changed, a short capture guide for field staff, or a rule that sets aside photos too blurred to use. Accepting that some pages will always need human eyes is what makes the rest of the automation trustworthy.',
    ],
    aiDoes: [
      'Reads printed text from scans, photos and image PDFs',
      'Keeps layout, reading order and tables intact',
      'Identifies the document type once text is readable',
      'Scores how confidently each page was read',
      'Highlights handwriting and faint areas for review',
      'Passes clean text on to extraction and routing',
    ],
    peopleDo: [
      'Confirm flagged handwriting and unclear fields',
      'Decide which document types need full review',
      'Set scanning and capture standards for staff',
      'Approve what happens to the data next',
    ],
  },

  spotlight: {
    eyebrow: 'Scan Quality',
    heading: 'Getting Better Results From Real-World Scans',
    paragraphs: [
      'Most OCR problems are image problems. A document scanned at low resolution, photographed under warehouse lighting or faxed twice before it reached you has lost detail that no model can recover. Before building, we look at the actual files you receive and identify which sources will read cleanly and which need a different capture method.',
      'Logistics paperwork is a common example: manifests, bills of lading and inventory reports arrive from drivers, depots and partners in every possible condition. Our page on [document automation for logistics teams](/solutions/document-automation/for-logistics) shows how those documents are taken from capture through to the systems that track shipments.',
    ],
    points: [
      { title: 'Resolution and Lighting', description: 'Scanner settings and simple capture guidance for staff often improve results more than any change to the software.' },
      { title: 'Orientation and Skew', description: 'Rotated and tilted pages are corrected where possible before recognition starts.' },
      { title: 'Stamps and Overlaps', description: 'Stamps, signatures and notes written over printed text are common failure points, so they are flagged for review.' },
      { title: 'Unusable Images', description: 'Where a photo cannot be read, the workflow can set it aside and ask for a clearer copy instead of passing on bad text.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Where This Fits',
      heading: 'OCR vs Data Extraction vs Intelligent Document Processing',
      accentWords: 3,
      paragraphs: [
        'OCR answers one question: what does this page say? It does not decide which number is the order total, or whether the document belongs with accounts or operations. Those decisions belong to the steps that follow, which is why OCR on its own rarely removes much manual work.',
        'Data extraction takes readable text and turns it into specific, validated fields. [Intelligent document processing](/products/ai-document-data-intelligence/intelligent-document-processing) is the broader approach that combines OCR, classification, extraction, confidence scoring, validation and human review into one method. If your PDFs are created digitally and already contain selectable text, you may not need a separate OCR step at all.',
      ],
      points: [
        { title: 'Choose OCR When', description: 'Your documents are scans, photos or image-only PDFs, and the first problem is getting readable, searchable text.' },
        { title: 'Add Extraction When', description: 'You need particular fields and tables from that text in a system, checked against your rules.' },
        { title: 'Think IDP When', description: 'You are designing how OCR, classification, extraction and review should work together across many document types.' },
        { title: 'Skip OCR When', description: 'Files are born digital with a text layer; extraction can read them directly.' },
      ],
    },
    {
      eyebrow: 'Evaluating OCR',
      heading: 'Questions to Ask of Any OCR Approach',
      accentWords: 2,
      paragraphs: [
        'Whether you build with us or try an off-the-shelf tool, a short test on your own documents tells you more than any feature list. Choose the worst examples you receive, not the cleanest ones.',
        'Pay most attention to what happens when recognition fails. A system that reports its uncertainty is more useful than one that is usually right but never tells you when it is wrong.',
      ],
      points: [
        { title: 'Your Worst Documents', description: 'How does it cope with your faintest scans, longest files and most crowded tables?' },
        { title: 'Tables and Columns', description: 'Does the output keep rows and reading order, or flatten everything into lines?' },
        { title: 'Confidence Reporting', description: 'Does it show which pages and fields it is unsure about, so a person can check them?' },
        { title: 'What Comes Next', description: 'Can the text flow into extraction, storage and your systems, or does it stop at a file?' },
        { title: 'Where Images Are Processed', description: 'Where are scans processed and stored, and can that happen inside your own environment?' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI OCR Software Is For',
    items: [
      { title: 'Logistics and Distribution', description: 'Teams handling manifests, bills of lading and delivery notes that arrive as scans and photos.' },
      { title: 'Organizations With Paper Archives', description: 'Businesses with years of scanned files that need to become searchable and usable.' },
      { title: 'Field-Based Teams', description: 'Companies whose engineers, drivers or inspectors photograph paperwork on site.' },
      { title: 'Back Offices Receiving Scans', description: 'Finance and admin teams who still receive posted or scanned paperwork from customers and suppliers.' },
      { title: 'Teams Outgrowing Basic OCR', description: 'Teams whose scanner software produces text but loses tables, columns and layout.' },
      { title: 'Operations Leaders', description: 'Managers who want scanned documents to feed automated workflows rather than sit in folders.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Where Scanned Documents Come From and Where They Go',
    paragraphs: [
      'OCR workflows pick up images from email inboxes, upload forms and cloud folders, then pass recognized text to the next step: classification, extraction, storage or a review queue. Text and original scans can be filed together in cloud storage, and extracted data delivered to CRMs, ERPs, accounting systems and databases where they offer an integration or API.',
      'The workflows run on platforms such as n8n, Make, Zapier or Airtable, with models from OpenAI, Claude or Gemini handling layout-aware reading. When the destination is an older application with no API, [RPA bots for systems without an API](/services/robotic-process-automation) can enter checked text on screen. Self-hosted setups, for example on n8n, keep scans inside your own environment, with access controls and an audit trail.',
    ],
    groups: [
      { label: 'Intake', items: ['Email inboxes', 'Upload forms', 'Cloud folders', 'Shared scan folders'] },
      { label: 'Destinations', items: ['Cloud storage', 'CRMs', 'ERPs', 'Accounting systems', 'Databases'] },
      { label: 'Workflow Platforms', items: ['n8n', 'Make', 'Zapier', 'Airtable'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
      { label: 'Connections', items: ['APIs', 'Webhooks', 'RPA bots'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build OCR Workflows With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency. We set up OCR as part of working document workflows in tools you own, not as a standalone app your team has to feed by hand.',
    items: [
      { title: 'Tested on Your Scans', description: 'We judge results on the documents you actually receive, including the poor ones.' },
      { title: 'Limits Stated Up Front', description: 'We tell you which sources will read well and which will need review or a better capture method.' },
      { title: 'Uncertainty Flagged', description: 'Low-confidence pages and fields go to a person instead of being passed off as accurate.' },
      { title: 'Built to Feed Workflows', description: 'Recognized text flows into extraction, routing and your systems within the same build.' },
      { title: 'Your Environment', description: 'Sensitive scans can be processed in self-hosted setups with access controls and audit trails.' },
      { title: 'You Own It', description: 'Workflows and documentation stay with you, and you pay platform and AI usage costs directly.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up Your OCR Workflow',
    intro:
      'We begin with the scanned documents that cause the most retyping and test them before committing to a design. You approve the plan before anything is built.',
    steps: [
      { title: 'Free Audit', description: 'We review where your scans and photos come from, what happens to them now and who retypes them.' },
      { title: 'Scan Sample Review', description: 'We run a sample of your real files, good and bad, to see what reads cleanly and what will need review.' },
      { title: 'Design', description: 'Capture standards, confidence thresholds, review owners and the next step for the text are agreed in writing.' },
      { title: 'Build', description: 'Intake, recognition, classification and hand-off are built on the chosen platform.' },
      { title: 'Test and Launch', description: 'The workflow is tested across document types and scan qualities, then switched on.' },
      { title: 'Refine and Hand Over', description: 'Recurring review cases are studied, capture guidance or rules adjusted, and the build handed over with documentation.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline, including which document sources are in the first phase.',
  },

  cta: {
    bandHeading: 'Bring us your worst scans',
    heading: 'Make Your Scanned Documents Readable and Useful',
    description:
      'Book a free, no-obligation OCR audit. Send a handful of real scans and photos and we will show what reads cleanly, what needs review and what should happen to the text next.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI OCR Software: Common Questions',
  faqSideText: 'Curious how your own scans would read? Book a free audit and send us a few of the difficult ones.',
  faqs: [
    {
      question: 'What is AI OCR software?',
      answer:
        'It is software that reads text from scans, photos and image-only PDFs while keeping the page’s structure, such as columns and tables, so the result can be searched, checked or passed on for extraction. Clickmasters builds it into document workflows in tools you already use.',
    },
    {
      question: 'What is the difference between traditional OCR and AI OCR?',
      answer:
        'Traditional optical character recognition software converts shapes into characters. AI-assisted OCR adds an understanding of layout and document structure, keeps tables intact and reports where it is uncertain, which makes the output much more useful for the steps that follow.',
    },
    {
      question: 'Can AI OCR read handwriting?',
      answer:
        'Sometimes, depending on how clear it is, but we do not guarantee it. Handwritten notes, signatures and annotations are treated as low-confidence content and flagged for a person to confirm.',
    },
    {
      question: 'How does scan quality affect the results?',
      answer:
        'Significantly. Clear, well-lit, upright pages read reliably; low-resolution, faded or heavily stamped pages do not. We test your real files during the audit and often recommend capture changes before building anything.',
    },
    {
      question: 'Can it convert a scanned document to searchable text?',
      answer:
        'Yes. Recognized text is stored alongside the original image, so scanned files can be found by their contents. The original scan is always kept for reference and checking.',
    },
    {
      question: 'Does it handle tables and multi-page documents?',
      answer:
        'Yes. Tables are read as rows and columns rather than flattened into lines, and long scans are processed page by page while staying together as one document.',
    },
    {
      question: 'Do we need OCR if our PDFs are already digital?',
      answer:
        'Often not. PDFs generated by software usually contain a text layer that can be read directly. OCR is needed for scans, photos and image-only PDFs.',
    },
    {
      question: 'What happens to the text after OCR?',
      answer:
        'Usually classification and data extraction: the document type is identified, the fields you need are pulled out and validated, and the data goes to the right system or person.',
    },
    {
      question: 'Is OCR automation something we license from you?',
      answer:
        'No. Clickmasters is an agency, not a software vendor. We build the OCR workflow on platforms your business owns, you pay platform and AI usage costs directly, and the workflow and documentation are yours.',
    },
    {
      question: 'Can scanned documents stay inside our own environment?',
      answer:
        'Yes. Workflows can be self-hosted, for example on n8n, with access controls and an audit trail, so sensitive documents stay within your own environment. Specific security requirements are agreed during scoping.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit and share a sample of your scans and photos. We review them and send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
