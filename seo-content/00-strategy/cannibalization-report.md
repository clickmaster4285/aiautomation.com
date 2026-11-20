# Keyword Cannibalization Prevention Report

Rule applied: **one primary keyword per URL across the whole site**. Where a new page sits near an existing one, the two must differ in intent (overview vs build, company-level vs process-level, sector vs function). They link to each other with descriptive anchors, never with the other page's primary keyword as exact-match anchor text.

## Risk register

| # | New page | Closest existing page(s) | Risk | Resolution |
|---|---|---|---|---|
| 1 | P1 Industry-Specific AI Automation | `/industries` (H1: "Industry-specific AI automation.", title: "AI Automation by Industry...") | **High**: near-identical H1 wording | P1 targets **"industry-specific AI solutions"** with the H1 "Industry-Specific AI Solutions Built Around How Your Sector Works". `/industries` keeps "AI automation by industry". **Recommended:** change the `/industries` H1 to "AI automation by industry" so its H1 matches its title. P1 links to `/industries` as the full sector directory; `/industries` should link back to P1 as "industry-specific AI solutions we build". |
| 2 | C1 AI Healthcare Automation | `/industries/ai-automation-for-healthcare` | **High**: same topic | C1 primary = **"medical practice automation"** (build-focused: front desk, intake, reminders, referrals, billing paperwork). The industry page keeps "AI automation for healthcare" (sector overview). Do not use "AI automation for healthcare" as C1's title or H1. |
| 3 | C2 AI Real Estate Automation | `/industries/ai-automation-for-real-estate` | High | C2 primary = **"real estate automation software"**, built on the existing CRM and covering the whole deal pipeline. The industry page keeps "AI automation for real estate" and lead follow-up. |
| 4 | C5 AI Legal Automation | `/industries/ai-automation-for-law-firms`; product `ai-contract-analysis` | Medium | C5 primary = **"legal workflow automation"** (matter lifecycle). The industry page keeps "AI automation for law firms". Contract review stays with AI Contract Analysis, which C5 links to. |
| 5 | C3 / C4 Logistics / Education | 26 solution pages each (`/solutions/<type>/for-logistics` etc.) | Low | Solution pages are function × sector (e.g., "document automation for logistics"). C3 and C4 are the sector-level page and link down to them. |
| 6 | G1 AI Automation Solutions | `/solutions` (title and H1: "AI Automation Solutions") | **High**: identical page name | G1 primary = **"AI automation for small business"**. Its title and H1 target SMBs. "AI automation solutions" appears only as a secondary modifier ("AI automation solutions for small and growing businesses"). G1 links to `/solutions` with the anchor "compare every solution by business function". **Recommended:** consider renaming the navbar label to "AI Automation for Small Business" to match. |
| 7 | P2 General AI Automation | `/services` ("AI automation services"), homepage ("AI automation agency") | Medium | P2 primary = **"AI automation for business"**: a decision hub organized by buyer situation. |
| 8 | G3 Custom AI Automation Software | `/services/custom-ai-development` | Medium | G3 owns **"custom AI automation software"** (build vs buy, automation-specific builds). The service page keeps "custom AI development" (broader AI builds). G3 links to it. |
| 9 | G4 Enterprise AI Automation | product `enterprise-workflow-automation`, `enterprise-ai-agents` | Medium | G4 is **program-level**: governance, portfolio, rollout. The two product pages are technology-level, and G4 links to both. |
| 10 | G6 Intelligent Business Automation | product `intelligent-process-automation`; `/services/business-process-automation` | **High**: "intelligent automation" overlap | G6 owns **"intelligent business automation"** as a *design approach* (rules, AI and people split). IPA owns the AI+RPA technical stack. G6 must not use "intelligent process automation" in its title or H1. |
| 11 | G7 AI Integration Services | `/services/ai-integration-services` (**in code, 404 live**) | **High if that route is ever published** | **Decision needed:** publish only one of the two. Recommended: keep G7 as the owner, and either delete the unused service content or 301 `/services/ai-integration-services` → G7 if it is ever routed. Never run both. |
| 12 | G8 End-to-End AI Automation | homepage process section; `/services/business-process-automation` ("end-to-end automation of business processes") | Low/medium | G8 owns **"end-to-end AI automation"** as a *delivery model*. The BPA page describes process scope, not delivery. Avoid "end-to-end" in the BPA title. |
| 13 | G9 AI Process Optimization | `/services/ai-strategy-advisory`; `/free-automation-audit` | Medium | G9 = **per-process** analysis and redesign. Strategy advisory = company-level roadmap. The audit page is the conversion page, and G9 sends users to it. |
| 14 | G2 AI Automation Tools for Businesses | `/platforms` + 6 platform pages | Low | G2 is a comparison/selection guide (commercial investigation). Platform pages sell implementation on one tool (transactional). G2 links to each one. |
| 15 | G5 AI-Powered Business Software | `/services/ai-knowledge-assistants`, `/services/ai-chatbots`, product `ai-crm-software` | Low | G5 = embedding AI features in existing apps, the buy-vs-embed decision. Specific assistant types are linked, not covered in depth. |

## Internal rules for all new pages

- No two new pages share a primary keyword (verified in `keyword-map.md`).
- Title tags and H1s contain the page's own primary keyword, never a neighbor's.
- Anchor text pointing to an existing page is descriptive and never repeats the same exact phrase from more than one new page. See the anchor-diversity check in `internal-linking-strategy.md`.
- Parent pages summarize each child in 2–4 sentences and link out, so they don't compete for the child's intent.

## Monitoring after launch

In Google Search Console, filter the Performance report by query for each primary keyword and check whether more than one URL gets impressions. If two URLs alternate for the same query for more than 4–6 weeks, strengthen the intended page (internal links, title) and de-optimize the other (title or H1 wording, anchor text). Merge with a 301 only as a last resort.
