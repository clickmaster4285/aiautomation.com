# Site and Competitor Analysis

Date: 2026-11-20. Sources: the live sitemaps and page titles of clickmastersaiautomation.com, the site's source code (`content/`), and Google SERP samples for the main keyword groups.

## 1. What the site is today

| Area | Live URLs | Primary role / keyword owned |
|---|---|---|
| Homepage `/` | 1 | "AI automation agency" (title: *AI Automation Agency for Growing Businesses*) |
| `/services` hub + 11 service pages | 12 | "AI automation services"; one service each: workflow automation, BPA, RPA, reporting, agent development, chatbots, voice agents, lead generation, knowledge assistants, strategy & advisory, custom AI development |
| `/solutions` hub + 216 solution pages | 217 | "AI automation solutions"; 13 solution types × 13 industries, plus a few platform pages (`/with-hubspot`, `/with-n8n`, ...) |
| `/industries` hub + 7 industry pages | 8 | "AI automation by industry"; finance & accounting, healthcare, law firms, e-commerce, SaaS, real estate, professional services |
| `/platforms` hub + 6 platform pages | 7 | Zapier, Make, n8n, HubSpot, GoHighLevel, Airtable |
| `/case-studies` + 1 case study | 2 | Case study still contains placeholders, so the homepage hides its link |
| `/about`, `/contact`, `/free-automation-audit`, legal pages | 5 | Free automation audit = main conversion |
| `/products/*` | 0 live | 9 categories with 45 children are built on the `product-pages` branch but not deployed |
| `/blog` | returns 200 | Blog sitemap is empty |

**Brand positioning (from approved homepage copy):** an agency that designs, builds and maintains AI agents, workflow automations and system integrations for sales, support and operations teams in growing businesses. It works on n8n, Make, Zapier, HubSpot and Salesforce. A person stays in the loop wherever judgment is needed. There is a six-step process, and a free audit with no obligation.

**Tone and compliance conventions already in the codebase:** no superlatives, no statistics, no unapproved results, and compliance described as a shared responsibility. The new content follows the same rules (see `content-rules-and-facts.md`).

## 2. Structural observations

1. **The `/products` layer duplicates the intent of `/solutions` and `/industries` unless each page has a distinct angle.** `/solutions` is organized by *function × industry*, `/industries` by *sector*, and `/products` by *buyer problem / product category*. The keyword map gives every new page a primary keyword that no live page owns.
2. **Logistics and education have 26 solution pages each, but no industry page.** The new AI Logistics Automation and AI Education Automation pages become the sector-level page for both. That is the clearest topical-authority gain in this project.
3. **The product hub `/products` returns 404.** The navbar links categories directly, so this does no harm, but a hub page would give the product category pages a parent in the breadcrumb trail. See the content gap analysis.
4. **`/services/ai-integration-services` exists in code but is not routed live.** The new G7 page targets "AI integration services". See the cannibalization report for how to resolve this.
5. **The blog is empty.** Informational, question-led queries (e.g., "should you optimize a process before automating it") have no home except the FAQ sections. A blog would capture them and link up to these commercial pages.

## 3. Competitor landscape (SERP sample)

| Query group | Who ranks | What they do well | Where Clickmasters can be stronger |
|---|---|---|---|
| AI automation for healthcare clinics | Niche clinic agencies (e.g., Mediaforce, Justin Healthcare AI), platform vendors (StackAI, SleekFlow), freelancer listings (Upwork, Contra) | Concrete use cases: missed calls, reminders, reactivation, intake | Many make unverified numeric claims and loose HIPAA promises. A precise, honest page (admin-only scope, shared-responsibility compliance, approvals shown) differentiates on trust (E-E-A-T). |
| AI logistics automation | Consultancies and vendors (Oliver Wyman, Netguru, SPD Tech, Jitterbit, Activepieces) | Broad lists that mix physical automation (robots, route optimization) with office automation | Pages are generic and mix physical and office automation. A focused page on freight *office* work (documents, status updates, carrier email, invoicing) matches what SMB forwarders and 3PLs can actually buy from an agency. |
| Legal automation / intake / drafting | Product vendors (Clio, Harvey, Gavel), Zapier use-case pages | Strong product depth and authority | These are software vendors. An implementation-partner page that connects the firm's existing tools, with lawyer approval at every step, serves a different, under-served intent. |
| Custom AI automation software | Large dev shops (BairesDev, Chetu, Appinventiv, Redwerk, Velvetech) | Long service lists, case studies, reviews | Generic "we do everything" pages. A clear build-vs-buy framework, an ownership model and a no-code-first approach are the differentiators. |
| AI integration services | Dev shops (Mindinventory, Appinventiv, CMARIX, Syndicode) | RAG, vector databases, LLM-to-business-app integration | Rarely explain data handling, error handling or cost control concretely. Being specific about the integration work is the edge. |
| AI process optimization | Consultancies (Future Processing, Eraneos, RGP, Bain), Salesforce/IBM explainers | Methodology language (process mapping, bottlenecks, value streams) | Some vendors claim extreme results ("up to 100% of manual tasks"). A practical "fix the process, then automate it" page, tied to the free audit, is credible and converts. |

**Common competitor gaps the new pages exploit:**
- Few pages say clearly who approves what.
- Few are honest about integration limits ("only where an API exists").
- Few explain who owns the system afterward.
- Unverified statistics are everywhere.

The new pages lean on specificity (example workflows, approval points, task tables, ownership) rather than numbers.

## 4. Sources reviewed

- [Mediaforce: AI Automation for Healthcare Clinics](https://mediaforce.ca/?p=32907)
- [StackAI: AI for Healthcare Providers](https://www.stackai.com/solutions/healthcare-providers-clinics)
- [SleekFlow: AI agents for healthcare and clinics](https://sleekflow.io/blog/ai-agents-for-healthcare-and-clinics.md)
- [Oliver Wyman: How logistics operators harness AI](https://www.oliverwyman.com/our-expertise/insights/2025/nov/how-logistics-operators-harness-ai-to-boost-efficiency.html)
- [Activepieces: Automation for logistics companies](https://www.activepieces.com/resources/automation-use-cases/automation-for-logistics-companies)
- [Clio: How much legal work can you automate?](https://www.clio.com/blog/legal-ai-automation/)
- [Harvey: Law office automation](https://www.harvey.ai/blog/law-office-automation)
- [Zapier: AI legal intake and document creation](https://zapier.com/automation/use-case/using-ai-automate-legal-intake-request-processing-and-document-creation)
- [Chetu: AI automation services](https://www.chetu.com/solutions/artificial-intelligence/ai-automation-services.php?t=1)
- [Redwerk: AI custom software development](https://redwerk.com/services/ai-custom-software-development/)
- [Mindinventory: AI integration services](https://mindinventory.com/ai-integration-services/)
- [Syndicode: AI integration](https://syndicode.com/services/ai-integration/)
- [Future Processing: AI process optimisation](https://www.future-processing.com/services/ai-and-ml/ai-process-optimisation/)
- [IBM: What is process optimization?](https://www.ibm.com/topics/process-optimization)
- [RGP: Process optimization and automation](https://rgp.com/capabilities/strategy-operational-performance/process-optimization-automation/)
