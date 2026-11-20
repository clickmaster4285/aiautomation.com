// content/products/ai-document-data-intelligence/ai-contract-analysis.ts
// Copy + SEO for /products/ai-document-data-intelligence/ai-contract-analysis.
//
// Accuracy rules for this page (keep them when editing):
// - VERIFIED capabilities (may be stated as standard): extracting key terms, dates and figures from contracts at
//   scale; a structured contract register built from the extracted data; AI clause search across the client’s
//   document system (case files, precedents, clauses) with sources; OCR for scanned agreements; classification;
//   low-confidence values flagged to a person; access controls, audit trails, self-hosted options (e.g. n8n).
// - SCOPED PER PROJECT (never present as standard features): flagging clauses that differ from the client’s
//   standard positions, template comparison, renewal/notice reminders from extracted dates.
// - Legal judgment always stays with qualified people. Clickmasters does not give legal advice and the AI does
//   not assess legal risk, enforceability or acceptability. Every legal decision and outgoing document stays
//   with an attorney / the client’s legal team. Do not name legal or contract-management software.
// - No statistics, accuracy figures, prices, testimonials, customer names, certifications or compliance claims,
//   or ongoing-support promises. Clickmasters builds on platforms the client owns — not a SaaS contract tool.
//
// Inline links use [anchor text](/path). This page contains EXACTLY FIVE contextual internal links.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from '@/content/products/types';

export const AI_CONTRACT_ANALYSIS_PATH = '/products/ai-document-data-intelligence/ai-contract-analysis';

export const aiContractAnalysisSeo: HubSeo = {
  name: 'AI Contract Analysis',
  path: AI_CONTRACT_ANALYSIS_PATH,
  title: 'AI Contract Analysis for Key Terms and Dates | Clickmasters',
  description:
    'AI contract analysis that extracts key terms, dates and figures into a searchable contract register, adds clause search, and leaves legal judgment with your lawyers.',
  crumbs: [
    { name: 'Home', path: '/' },
    { name: 'AI Document & Data Intelligence', path: '/products/ai-document-data-intelligence' },
    { name: 'AI Contract Analysis', path: AI_CONTRACT_ANALYSIS_PATH },
  ],
};

export const aiContractAnalysisKeywords = [
  'AI contract analysis',
  'automated contract analysis',
  'contract data extraction',
  'AI contract review',
  'contract key terms extraction',
  'contract register automation',
  'AI clause search',
  'contract renewal date tracking',
  'AI contract analysis for law firms',
  'contract analysis automation services',
  'what is AI contract analysis',
  'can AI review contracts',
];

// The five contextual internal links used in the copy below.
export const internalLinks = [
  { anchor: 'AI document and data intelligence range', href: '/products/ai-document-data-intelligence', section: 'What Is AI Contract Analysis?' },
  { anchor: 'structured data extraction from documents', href: '/products/ai-document-data-intelligence/ai-data-extraction-software', section: 'Contract Data Extraction: The Fields Behind a Useful Register (explainer)' },
  { anchor: 'AI knowledge assistants', href: '/services/ai-knowledge-assistants', section: 'What AI Organizes and What Your Lawyers Decide' },
  { anchor: 'document automation for law firms', href: '/solutions/document-automation/for-law-firms', section: 'Finding Clauses Across Your Whole Document System (spotlight)' },
  { anchor: 'document processing workflows', href: '/products/ai-document-data-intelligence/ai-document-processing-software', section: 'Contract Analysis vs Data Extraction vs Document Processing (extras)' },
] as const;

export const aiContractAnalysis: ProductPageContent = {
  layout: { introTone: 'paper', featuresColumns: 3 },

  hero: {
    badge: 'AI Contract Analysis',
    heading: 'AI Contract Analysis That Turns Signed Agreements Into a Searchable Register',
    accentWords: 2,
    subheading:
      'We build AI contract analysis workflows that read your agreements, extract parties, key terms, dates and figures, and keep them in a structured contract register your team can search and filter. The AI organizes and surfaces information. Interpreting it, negotiating it and advising on it stays with your lawyers and contract owners.',
    primaryCta: { text: 'Book a Free Contract Analysis Audit', href: '/free-automation-audit' },
    secondaryCta: { text: 'See How It Works', href: '#how-it-works' },
    image: '/images/datas.png',
    imageAlt:
      'A hand pressing a glowing Automation control surrounded by icons for people, analytics and charts, representing key terms and dates extracted from contracts into a structured register',
    imageWidth: 2370,
    imageHeight: 1264,
    marquee: ['Key terms extraction', 'Dates and figures', 'Contract register', 'Clause search', 'Source-linked results', 'Lawyer-led decisions'],
  },

  intro: {
    eyebrow: 'Know What You Signed',
    heading: 'What Is AI Contract Analysis?',
    paragraphs: [
      'AI contract analysis uses language models to read contracts and pull out the information people keep needing to find: who the parties are, when the agreement starts and ends, the notice period, the contract value, payment terms, governing law and similar key terms. Instead of opening a sixty-page PDF to check one date, your team looks it up in a register built from the documents themselves.',
      'For most organizations the difficulty is not one contract but hundreds, spread across email attachments, shared drives and a document management system, each drafted differently. Extraction at scale turns that collection into structured data, and AI search lets people find relevant clauses across all of it, with a link back to the source document every time.',
      'What this is not is a substitute for legal review. The software can show you that an agreement contains a limitation of liability clause and exactly where it sits. Whether that clause is acceptable is a question for a qualified person. Contract analysis is one part of our [AI document and data intelligence range](/products/ai-document-data-intelligence).',
    ],
    problems: [
      'Renewal and notice dates live inside PDFs, so they are often found after the deadline has passed.',
      'Answering “which suppliers can terminate on 30 days’ notice?” means reading every agreement again.',
      'Contract values and payment terms are retyped into spreadsheets that drift out of date.',
      'Useful precedent clauses are hard to find because they sit in old matters nobody remembers by name.',
      'An audit, system migration or acquisition calls for a contract inventory nobody has the hours to build.',
    ],
  },

  explainer: {
    eyebrow: 'What Gets Extracted',
    heading: 'Contract Data Extraction: The Fields Behind a Useful Register',
    paragraphs: [
      'A contract register is only as useful as the fields it holds. Before any document is read, we agree with you which terms matter for your agreements. A property team cares about rent reviews and break dates, a procurement team about price adjustments and termination rights, a sales team about auto-renewal and liability caps. Extraction is then built around that list.',
      'Each value is stored with the page and passage it came from, so a reviewer can read the original wording straight away. Values the model is unsure about, or that are missing where they would be expected, are flagged for a person rather than filled with a guess. It is the same discipline as any [structured data extraction from documents](/products/ai-document-data-intelligence/ai-data-extraction-software), adapted to the defined terms and cross-references of legal drafting.',
    ],
    points: [
      { title: 'Parties and Signatories', description: 'Legal entity names, addresses and signatories, matched where possible to the customer or supplier record you already hold.' },
      { title: 'Key Dates', description: 'Effective date, term, expiry, renewal and notice periods, captured as real dates that can be sorted and filtered.' },
      { title: 'Figures', description: 'Contract value, fees, payment terms, caps and other stated amounts, each with its currency.' },
      { title: 'Renewal and Termination Wording', description: 'How the agreement renews or ends, quoted from the source so a person can interpret it.' },
      { title: 'Headline Terms', description: 'Governing law, jurisdiction and the other terms your team is regularly asked to report on.' },
      { title: 'Source Links', description: 'Every field points back to the contract and page it came from, so the original wording is always one click away.' },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our AI Contract Analysis Includes',
    intro:
      'These are the capabilities we build as standard. Applications that depend on your own legal positions, such as deviation flags, are scoped separately and explained further down the page.',
    items: [
      { title: 'Contract Intake', description: 'Agreements are collected from email, uploads, cloud folders or your document repository, with scanned copies read by OCR.' },
      { title: 'Contract Classification', description: 'Documents are identified by type, such as NDA, supplier agreement, lease or amendment, so each gets the right field list.' },
      { title: 'Key Terms Extraction', description: 'Parties, dates, figures and the headline terms you choose are pulled from each agreement, across hundreds of documents.' },
      { title: 'Structured Contract Register', description: 'Extracted terms are held in a register, in Airtable, a database or a spreadsheet, that can be sorted, filtered and exported.' },
      { title: 'Clause Search', description: 'AI search across your contracts and document system finds clauses by meaning, not only by exact wording.' },
      { title: 'Source Linking', description: 'Every register value and search result points back to the passage it came from, ready for verification.' },
      { title: 'Review Flags', description: 'Missing, conflicting or low-confidence values go to a reviewer with the specific field highlighted.' },
      { title: 'Access Controls and Audit Trail', description: 'Who can see which contracts is controlled, and changes to the register are logged.' },
      { title: 'Delivery to Your Systems', description: 'Register data can be pushed to your CRM, ERP or other systems where an integration or API exists.' },
    ],
  },

  howItWorks: {
    eyebrow: 'How It Works',
    heading: 'One Supplier Agreement, From Scanned PDF to Register Entry',
    intro:
      'Here is a typical example: an operations team is building a register of its supplier contracts. This is what happens to one twenty-four-page services agreement saved as a scanned PDF.',
    steps: [
      { title: 'Collect', description: 'The agreement is picked up from the contracts folder and identified as a supplier services agreement rather than an NDA or order form.' },
      { title: 'Read', description: 'OCR converts the scan to text, and the model reads it against the field list agreed for supplier agreements.' },
      { title: 'Extract', description: 'Parties, effective date, initial term, auto-renewal wording, a 90-day notice period, annual fee and payment terms are captured, each linked to its page.' },
      { title: 'Check', description: 'The notice period appears twice with different wording, once in the main terms and once in a schedule, so the field is flagged rather than chosen.' },
      { title: 'Review', description: 'The contract owner reads both passages side by side, confirms with the legal team which one applies and records the answer.' },
      { title: 'Register', description: 'The entry joins the register, searchable alongside every other agreement and linked to the original file.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefits',
    heading: 'What a Structured Contract Register Changes',
    intro:
      'The value is quicker access to what your contracts already say, so people spend their time on judgment rather than searching.',
    items: [
      { title: 'Answers Without Rereading', description: 'Questions about terms, dates and values are answered from the register instead of by opening every PDF.' },
      { title: 'Dates in View', description: 'Expiry, renewal and notice dates are visible in one place rather than buried in documents.' },
      { title: 'Portfolio-Wide Questions', description: 'Filters show which agreements share a term, a governing law or a renewal month.' },
      { title: 'Clauses Found Faster', description: 'Precedent and comparable clauses are located across the whole collection by meaning.' },
      { title: 'Verifiable Data', description: 'Every value links to its source, so reviewers check the wording rather than trust a summary.' },
      { title: 'Specialist Time Focused', description: 'Lawyers and contract managers spend more time on interpretation and less on finding information.' },
    ],
  },

  aiAutomation: {
    eyebrow: 'AI Plus Legal Judgment',
    heading: 'What AI Organizes and What Your Lawyers Decide',
    paragraphs: [
      'AI is good at reading large volumes of text consistently and finding things in it: the clause that deals with termination, the date the agreement renews, the figure in the fee schedule. It is not qualified to say whether a clause is enforceable, whether a term is commercially acceptable or what your business should do about it. Clickmasters does not provide legal advice, and nothing we build is designed to.',
      'Every output is presented as information for a qualified person to verify, with the source wording attached. The principle is the same in all our work for law firms: AI search helps attorneys find case files, precedents and clauses, while every legal decision and outgoing document stays with an attorney. [AI knowledge assistants](/services/ai-knowledge-assistants) built on your own documents answer questions with their sources, so reviewers always see where an answer came from.',
    ],
    aiDoes: [
      'Reads agreements and extracts the agreed fields',
      'Classifies contracts by type',
      'Finds clauses across the collection by meaning',
      'Links every value to its source passage',
      'Flags missing, conflicting or unclear terms',
      'Keeps the register structured and searchable',
    ],
    peopleDo: [
      'Interpret clauses and assess legal risk',
      'Decide on renewals, terminations and negotiations',
      'Confirm flagged values in the register',
      'Give legal advice and approve outgoing documents',
    ],
  },

  spotlight: {
    eyebrow: 'Clause Search',
    heading: 'Finding Clauses Across Your Whole Document System',
    paragraphs: [
      'A register answers the questions you planned for. Clause search answers the ones you did not. When a lawyer needs every agreement containing a particular style of indemnity, or a contract manager wants to see how a confidentiality clause has been worded across past deals, keyword search tends to miss the variations in drafting.',
      'AI search reads for meaning across the contracts and files in your document management system, returning the relevant passages with a link to each source. For legal practices, our page on [document automation for law firms](/solutions/document-automation/for-law-firms) explains how the same approach supports case files, precedents and drafts prepared for attorney review.',
    ],
    points: [
      { title: 'Search by Meaning', description: 'A question like “where can either party end the agreement early?” finds termination clauses, whatever heading they sit under.' },
      { title: 'Results With Sources', description: 'Each result shows the passage, the document and where it sits, so it can be read in context.' },
      { title: 'Access Respected', description: 'Search can be limited to the documents each user is allowed to see, based on the access rules you set.' },
      { title: 'Across File Types', description: 'Signed scans, digital PDFs and Word documents can be searched together once their text is readable.' },
    ],
  },

  extras: [
    {
      eyebrow: 'Standard vs Scoped',
      heading: 'What We Build as Standard and What We Scope Per Project',
      accentWords: 3,
      paragraphs: [
        'Extracting key terms, dates and figures, building a structured register and searching clauses across your documents are the core of this work. Some teams want more from their contracts. Those applications depend heavily on how your agreements are drafted and what your standard positions are, so we scope them individually in discovery rather than promise them up front.',
        'Each scoped application produces information for a person to act on. None of them decides anything about a contract on its own, and each is tested with your legal or contract team before it is relied on.',
      ],
      points: [
        { title: 'Standard: Key Terms and Dates', description: 'Agreed fields extracted from each contract, linked to the source and flagged for review where confidence is low.' },
        { title: 'Standard: Register and Clause Search', description: 'A structured register plus AI search across your contracts, with every result tied to the original document.' },
        { title: 'Scoped: Deviation Flags', description: 'Highlighting clauses that differ from your standard positions, once those positions are written down and agreed with your lawyers.' },
        { title: 'Scoped: Template Comparison', description: 'Comparing an incoming draft or signed agreement with your template to show where the wording has changed.' },
        { title: 'Scoped: Renewal and Notice Reminders', description: 'Reminders to contract owners ahead of renewal or notice dates taken from the register, after those dates are confirmed.' },
      ],
    },
    {
      eyebrow: 'Where This Fits',
      heading: 'Contract Analysis vs Data Extraction vs Document Processing',
      accentWords: 2,
      paragraphs: [
        'Contract analysis is extraction specialized for agreements: long documents, defined terms, cross-references and wording where one phrase can change the meaning. It needs field lists designed around contract types, and reviewers who understand legal language.',
        'If your documents are invoices, forms or orders with short, predictable fields, general data extraction is the better fit. If the priority is moving contracts through intake, approval and filing, such as routing a signed agreement to its owner and the right archive, [document processing workflows](/products/ai-document-data-intelligence/ai-document-processing-software) cover that operational side.',
      ],
      points: [
        { title: 'Choose Contract Analysis When', description: 'You need to know what your agreements say, at scale, and keep that knowledge searchable.' },
        { title: 'Choose Data Extraction When', description: 'Your documents are shorter business forms whose fields go straight into a system.' },
        { title: 'Choose Document Processing When', description: 'The goal is moving contracts through intake, approval and filing steps.' },
        { title: 'Ask a Lawyer When', description: 'You need a view on whether terms are acceptable or what to do about them. That stays with qualified people.' },
      ],
    },
  ],

  audience: {
    eyebrow: 'Who It Is For',
    heading: 'Who AI Contract Analysis Is For',
    items: [
      { title: 'In-House Legal Teams', description: 'Teams who need quick answers about the organization’s agreements without rereading them each time.' },
      { title: 'Law Firms', description: 'Firms wanting AI search across case files, precedents and clauses, with attorneys making every legal call.' },
      { title: 'Procurement and Vendor Management', description: 'Teams tracking supplier terms, values and renewal dates across many agreements.' },
      { title: 'Finance Teams', description: 'People who need contract values, payment terms and commitments in a structured form.' },
      { title: 'Property and Facilities Managers', description: 'Managers keeping track of leases, service contracts and their key dates.' },
      { title: 'Leaders Facing a Big Change', description: 'Executives preparing for an audit, system migration or acquisition that requires a contract inventory.' },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    heading: 'Where Contracts Live and Where Their Data Goes',
    paragraphs: [
      'Contracts are collected from email, upload forms, cloud folders and document repositories, and the register can live in Airtable, a database or a spreadsheet your team already uses. Register data can also be pushed to CRMs such as Salesforce and HubSpot, or to ERP and accounting systems, where they offer an integration or API. Which repositories and systems can be connected is confirmed during the audit.',
      'Workflows run on platforms such as n8n, Make or Zapier, with models such as OpenAI, Claude or Gemini doing the reading and search. Because contracts are sensitive, builds can run self-hosted, for example on n8n, with access controls and an audit trail, so documents stay inside your environment.',
    ],
    groups: [
      { label: 'Contract Sources', items: ['Email inboxes', 'Upload forms', 'Cloud storage', 'Document management systems'] },
      { label: 'Register and Destinations', items: ['Airtable', 'Databases', 'Spreadsheets', 'Salesforce', 'HubSpot'] },
      { label: 'Workflow Platforms', items: ['n8n', 'Make', 'Zapier'] },
      { label: 'AI Models', items: ['OpenAI', 'Claude', 'Gemini'] },
      { label: 'Connections', items: ['APIs', 'Webhooks', 'RPA bots'] },
    ],
  },

  whyUs: {
    eyebrow: 'Why Clickmasters',
    heading: 'Why Build Contract Analysis With Clickmasters',
    intro:
      'Clickmasters is an AI automation agency, not a law firm. We build the systems that organize your contract information and leave legal judgment with the people qualified to exercise it.',
    items: [
      { title: 'Field Lists Agreed With You', description: 'The terms we extract are chosen with your legal or contract team before anything is built.' },
      { title: 'A Source for Every Answer', description: 'Register values and search results always link to the wording they came from.' },
      { title: 'No Legal Advice', description: 'We never present the AI as a judge of legal risk, and we do not provide legal advice.' },
      { title: 'Clear Scope', description: 'Standard capabilities and per-project applications are separated in writing in your quote.' },
      { title: 'Your Environment', description: 'Contracts can stay in self-hosted setups with access controls and audit trails.' },
      { title: 'You Own It', description: 'Workflows, the register and documentation stay with you, and you pay platform and AI usage costs directly.' },
    ],
  },

  gettingStarted: {
    eyebrow: 'Getting Started',
    heading: 'How We Set Up Your Contract Analysis',
    intro:
      'We begin with one contract type, often supplier agreements or NDAs, and a short list of fields, then widen the scope once the register is trusted.',
    steps: [
      { title: 'Free Audit', description: 'We review where your contracts are stored, who needs information from them and what they look up most often.' },
      { title: 'Sample Contracts', description: 'You share a representative set, including amendments, older templates and scanned copies.' },
      { title: 'Field List and Rules', description: 'Fields, review owners, access rules and any scoped extras are agreed in writing with your team.' },
      { title: 'Build', description: 'Intake, OCR where needed, extraction, the register and clause search are built on the chosen platform.' },
      { title: 'Test and Launch', description: 'Your reviewers check results against the source contracts, then the register goes live.' },
      { title: 'Refine and Hand Over', description: 'Fields that are often flagged are studied and extraction adjusted, then the build is handed over with documentation.' },
    ],
    note: 'Your written quote covers scope, platforms, deliverables, usage costs and timeline, and lists separately any scoped applications such as deviation flags or reminders.',
  },

  cta: {
    bandHeading: 'Know what your contracts say',
    heading: 'Turn a Pile of Contracts Into a Register You Can Search',
    description:
      'Book a free, no-obligation contract analysis audit. We will look at where your agreements live, which terms you need and how a register would work, with legal judgment staying with your team.',
    primary: { text: 'Book a Free Audit', href: '/free-automation-audit' },
    secondary: { text: 'Contact the Team', href: '/contact' },
  },

  faqHeading: 'AI Contract Analysis: Common Questions',
  faqSideText: 'Want to see which terms could be pulled from your own agreements? Book a free audit and bring a few sample contracts.',
  faqs: [
    {
      question: 'What is AI contract analysis?',
      answer:
        'It is the use of AI to read contracts, extract key terms, dates and figures, and organize them in a structured register, with search across clauses in your document system. Clickmasters builds it in tools you own, and every result links to the source wording for a person to verify.',
    },
    {
      question: 'Does AI contract analysis replace a lawyer?',
      answer:
        'No. It finds and organizes information so that qualified people can review it faster. Interpreting clauses, assessing risk, negotiating and advising remain with your lawyers. Clickmasters does not provide legal advice.',
    },
    {
      question: 'What can be extracted from a contract?',
      answer:
        'Typically parties, signatories, effective and expiry dates, renewal and notice periods, contract value, fees, payment terms, governing law and other headline terms you choose. The exact field list is agreed with your team for each contract type.',
    },
    {
      question: 'What is a contract register?',
      answer:
        'It is a structured table of your agreements and their key terms, built from the extracted data. It can live in Airtable, a database or a spreadsheet, and each entry links back to the original contract.',
    },
    {
      question: 'Can it search for clauses across our document management system?',
      answer:
        'Yes, where the system offers access. AI search finds clauses by meaning across your contracts and files and returns the passages with links to their sources. Which repositories can be connected is confirmed in the audit.',
    },
    {
      question: 'Can it flag clauses that differ from our standard terms?',
      answer:
        'This can be scoped per project. It requires your standard positions to be written down and agreed with your legal team, and the output is a flag for a lawyer to review, never a decision.',
    },
    {
      question: 'Can it remind us about renewal and notice dates?',
      answer:
        'Reminders built from register dates can be scoped per project. Dates are confirmed by a person first, and the reminder goes to the contract owner, who decides what to do.',
    },
    {
      question: 'Can it read scanned or signed contracts?',
      answer:
        'Yes. Scanned agreements are passed through OCR before extraction. Results depend on scan quality, and anything read with low confidence, such as handwritten amendments, is flagged for review.',
    },
    {
      question: 'Is automated contract analysis the same as AI contract review?',
      answer:
        'The terms overlap. We use contract analysis to mean extracting, organizing and searching contract information. Review in the legal sense, judging risk and recommending changes, stays with qualified people.',
    },
    {
      question: 'How is our contract data kept private?',
      answer:
        'Builds can be self-hosted, for example on n8n, with access controls and an audit trail, so contracts stay inside your environment. Specific security requirements are agreed during scoping.',
    },
    {
      question: 'Is this a contract management platform we subscribe to?',
      answer:
        'No. Clickmasters is an agency. We build contract analysis on platforms your business owns, you pay platform and AI usage costs directly, and the workflows, register and documentation are yours.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Book a free audit and share a few sample contracts. We review how your agreements are stored and used, then send a written quote covering scope, platforms, deliverables, usage costs and timeline.',
    },
  ],
};
