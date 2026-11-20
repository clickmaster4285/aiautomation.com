# Content Gap Analysis

## Gaps these 16 pages close

| Gap | Evidence | Closed by |
|---|---|---|
| No sector page for **logistics** | 26 `/solutions/*/for-logistics` pages exist, but there is no `/industries/...logistics` page (404) | C3 AI Logistics Automation, which becomes the sector-level hub those solution pages can link up to |
| No sector page for **education** | 26 `/solutions/*/for-education` pages, but no industry page (404) | C4 AI Education Automation |
| No page for **SMB buyers** specifically | Homepage says "growing businesses", but no page targets small-business AI automation | G1 AI Automation Solutions (primary: AI automation for small business) |
| No **tool-selection** content | `/platforms` pages sell implementation on one tool each; nothing helps a buyer choose between them | G2 AI Automation Tools for Businesses |
| No **build-vs-buy** content | `/services/custom-ai-development` covers broad custom AI; nothing addresses "when no-code isn't enough" | G3 Custom AI Automation Software |
| No **enterprise program-level** page | Enterprise pages exist only for workflows and agents (product branch) | G4 Enterprise AI Automation Solutions |
| No **"add AI to existing software"** page | Knowledge assistants and chatbots are covered; embedded AI features in CRM and helpdesk are not | G5 AI-Powered Business Software |
| No **design-approach** page for rules + AI + people | The human-in-the-loop principle appears everywhere but is never explained as a method | G6 Intelligent Business Automation |
| **AI integration** has no live page | `/services/ai-integration-services` exists in code, but the route returns 404 | G7 AI Integration Services |
| The **delivery model** is only a 6-line list on the homepage | The process appears on the homepage but has no in-depth page | G8 End-to-End AI Automation |
| No **pre-automation process work** page | The free audit hints at it; strategy advisory is company-level | G9 AI Process Optimization |
| Healthcare, legal and real-estate pages are **overviews only** | Industry pages describe the sector, not the build | C1, C2, C5 (operational, build-focused angles) |

## Remaining gaps (recommended next)

1. **`/products` hub page.** It currently returns 404. A short hub that lists all 11 categories would give every product category a parent in the breadcrumb trail and a crawl path. *High priority, low effort.*
2. **Blog / resources.** The blog sitemap is empty. Question keywords collected in the FAQ sections (see each page's SEO brief) are ready-made article topics. Examples: "Zapier vs Make vs n8n for small business", "Should you optimize a process before automating it?", "What can a freight forwarder automate?", "Is AI safe for patient data at a small clinic?" Each article should link to its commercial page. *High priority.*
3. **Industry pages for logistics and education under `/industries`.** These are optional if C3 and C4 serve that role. If they are added later, give them overview-style intent and keep C3 and C4 build-focused (mirror how healthcare is split between C1 and the industry page).
4. **More industries.** Solution pages exist for construction, insurance, manufacturing, restaurants, retail and accounting firms, but there are no product children for them. Once the first 5 children perform, add children in the same pattern for insurance and manufacturing. These have the most solution-page support.
5. **Proof.** There are no approved case studies or testimonials yet. Once the case study's placeholders are filled and signed off (`signOff.caseStudyReady` in `content/services/homepage.ts`), add a proof block to C1, G1 and G8. Proof is the biggest E-E-A-T lever still missing.
6. **Author and reviewer attribution.** Adding a named reviewer ("Reviewed by …, Clickmasters") to the industry pages would strengthen E-E-A-T on healthcare and legal topics. Use a real person only, with their approval.
7. **Glossary.** Short definition pages for terms such as RAG, human-in-the-loop, MCP and IDP would capture definitional searches and link to G6, G7 and the document-intelligence pages.
