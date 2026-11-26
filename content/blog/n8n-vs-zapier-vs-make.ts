// content/blog/n8n-vs-zapier-vs-make.ts
// Platform facts were checked against each vendor's official pricing, help and docs pages on
// 2026-11-26 (see `sources`). Re-check pricing units and plan limits before changing dateModified.
import type { BlogArticle } from './types';

export const n8nVsZapierVsMake: BlogArticle = {
  slug: 'n8n-vs-zapier-vs-make',
  title: 'n8n vs Zapier vs Make: Which Should You Use? | Clickmasters',
  metaDescription:
    'n8n vs Zapier vs Make compared on billing, AI features, error handling, hosting and fit, from a team that builds on all three. With a decision checklist.',
  keywords:
    'n8n vs zapier vs make, n8n vs zapier, make vs zapier, n8n vs make, zapier alternative, best workflow automation platform',
  h1: 'n8n vs Zapier vs Make: Which Automation Platform Fits Your Team?',
  excerpt:
    'How the three platforms really differ: what each one bills for, how they handle errors and AI steps, where your data runs, and which kinds of teams each one suits.',
  category: 'AI Integrations',
  datePublished: '2026-11-26',
  dateModified: '2026-11-26',
  readMinutes: 11,
  intro: [
    'Zapier, Make and n8n can all connect your apps and run a workflow when something happens. The feature lists overlap so much that most comparisons end in "it depends". The differences that actually decide the choice are narrower: **what each platform counts as billable work**, **how much control you get when a run fails**, **where the workflow is allowed to run**, and **who on your team will maintain it**.',
    'We build and maintain automations on all three for client teams, so this guide focuses on the things that change cost and reliability once a workflow is in production, not on app counts. Platform facts were checked against each vendor\'s own pricing and documentation pages on the date shown above.',
  ],
  keyTakeaways: [
    '**Zapier** suits non-technical teams that want the widest app catalogue and the least setup. It bills per successful action step, so long, high-volume workflows get expensive.',
    '**Make** suits teams that want visual control over branching, loops and data mapping at a lower cost per step. It bills in credits, and AI and code modules use more of them.',
    '**n8n** suits teams that need self-hosting, custom code or AI agents with full control. Its cloud plans bill per workflow execution, however many steps the run has. It asks the most technical skill of whoever maintains it.',
    'Choose on **billing model × run volume × steps per run**, plus hosting requirements. Not on which tool has the most integrations.',
  ],
  sections: [
    {
      heading: 'The short answer',
      blocks: [
        {
          type: 'table',
          caption: 'How the three platforms compare (checked 2026-11-26)',
          head: ['', 'Zapier', 'Make', 'n8n'],
          rows: [
            ['Billing unit', 'Tasks: one per successful action step', 'Credits: most modules use 1 per operation; AI and code use more', 'Cloud: one per workflow execution, regardless of steps'],
            ['Free option', 'Free plan: 100 tasks/month, two-step Zaps only', 'Free plan: 1,000 credits/month', 'Self-hosted Community edition (no license key)'],
            ['Self-hosting', 'No (managed cloud only)', 'Cloud; on-prem agent to reach internal systems', 'Yes, or n8n Cloud'],
            ['Apps listed by vendor', '9,000+', '3,000+', '2,000+, plus HTTP and code for anything with an API'],
            ['Custom code', 'Code by Zapier step', 'Make Code module (billed per second of run time)', 'Code node in JavaScript and Python'],
            ['Error handling', 'Autoreplay; custom error paths per step', 'Error handler routes: Resume, Skip, Retry, Commit, Rollback', 'Retry on fail, per-node on-error settings, error workflows'],
            ['Best fit', 'Non-technical teams, broad app coverage', 'Ops teams that want visual logic at lower per-step cost', 'Technical teams, self-hosting, AI agents, high volume'],
          ],
        },
        {
          type: 'p',
          text: 'Vendors change plans and limits often. Treat the table as a map of how each platform thinks about cost and control, then confirm current numbers on the pricing pages linked at the end.',
        },
      ],
    },
    {
      heading: 'What each platform charges for',
      blocks: [
        {
          type: 'p',
          text: 'This is the difference that surprises teams most after launch, because the same workflow can cost very different amounts on each platform.',
        },
      ],
      subsections: [
        {
          heading: 'Zapier: tasks',
          blocks: [
            {
              type: 'p',
              text: 'Zapier counts a **task** each time an action step completes successfully. Triggers, polling and its built-in tools (Formatter, Filter, Paths, Delay, Looping, Sub-Zaps and others) do not use tasks, and failed actions are not counted. AI by Zapier, Code by Zapier and automation steps draw from the same task pool. The free plan is limited to two-step Zaps; multi-step Zaps need a paid plan.',
            },
          ],
        },
        {
          heading: 'Make: credits',
          blocks: [
            {
              type: 'p',
              text: 'Make bills in **credits**. Most non-AI modules use one credit per operation: a trigger or search uses one per run, and an action uses one per bundle it processes. Routers, filters and some error handlers are free. AI modules (AI Agents, AI Toolkit) use credits per operation plus credits based on tokens, and Make Code is billed per second of run time. A scenario that loops over 200 rows therefore uses roughly 200 credits per action step inside the loop.',
            },
          ],
        },
        {
          heading: 'n8n: executions',
          blocks: [
            {
              type: 'p',
              text: 'n8n Cloud counts **one execution per workflow run, regardless of complexity**. A 3-step and a 30-step workflow cost the same per run. Self-hosted, the Community edition has no execution charge at all: you pay for the server and the time to run it.',
            },
          ],
        },
        {
          heading: 'A worked example',
          blocks: [
            {
              type: 'p',
              text: 'Take a lead workflow that runs 2,000 times a month. Each run checks the lead, enriches it, writes it to the CRM, posts to Slack and creates a follow-up task: five action steps.',
            },
            {
              type: 'list',
              items: [
                '**Zapier:** about 5 tasks per run, so roughly 10,000 tasks a month (filters and formatter steps free).',
                '**Make:** about 1 credit for the trigger plus 5 for the actions, so roughly 12,000 credits a month. Add more if a step loops over line items or calls an AI module.',
                '**n8n Cloud:** 2,000 executions a month, whatever the step count. **Self-hosted:** no per-run charge.',
              ],
            },
            {
              type: 'callout',
              title: 'What this means',
              text: 'Usage grows with steps × runs on Zapier and Make, but only with runs on n8n. Low-volume workflows with few steps rarely justify switching platforms. High-volume, many-step or looping workflows are where the billing model decides the bill.',
            },
          ],
        },
      ],
    },
    {
      heading: 'AI features and AI agents',
      blocks: [
        {
          type: 'p',
          text: 'All three now ship AI building blocks, and all three let you call your own model provider. What differs is how much of the agent you control.',
        },
        {
          type: 'list',
          items: [
            '**Zapier** offers Zapier Agents, Zapier Chatbots, Canvas, Copilot for building Zaps, AI by Zapier steps and Zapier MCP. It is the fastest way for a non-technical team to put an AI step inside an existing process.',
            '**Make** offers AI Agents, the AI Toolkit, the Maia assistant and an MCP server. AI steps fit naturally into its visual scenarios, but they use more credits per run.',
            '**n8n** has an AI Agent node built on LangChain concepts, plus Model Context Protocol (MCP) support. You choose the model, memory, tools and guardrails yourself, which is more work but gives the most control, for example to keep a self-hosted agent on your own infrastructure.',
          ],
        },
        {
          type: 'p',
          text: 'If the AI part is a single classification or summary step inside a predictable process, any of the three works. If you need an agent that decides which tools to call, keeps state across steps and must be tested like software, n8n or custom code is usually the better base. Our guide to [AI agents vs workflow automation](/blog/ai-agents-vs-workflow-automation) covers that decision in detail.',
        },
      ],
    },
    {
      heading: 'Error handling and reliability',
      blocks: [
        {
          type: 'p',
          text: 'A workflow that fails quietly is worse than no automation, because people stop checking the manual way. Compare how each platform lets you catch and recover from failures:',
        },
        {
          type: 'list',
          items: [
            '**Zapier:** Autoreplay retries a failed step up to five times over about 10.5 hours before sending the error email (paid plans). Custom error handling adds a separate error path on a step, and you can use Paths inside it.',
            '**Make:** each module can have an error handler route: Resume, Skip, Retry, Commit or Rollback. Rollback applies by default when no handler is set.',
            '**n8n:** each node has Retry On Fail and an On Error setting (stop, continue, or continue through an error output). A separate error workflow, started by the Error Trigger node, can alert someone or log the failure for any workflow.',
          ],
        },
        {
          type: 'p',
          text: 'Whichever platform you choose, production workflows need the same three things: an alert that reaches a named person, a log of what failed and with which input, and a way to replay the run once the cause is fixed.',
        },
      ],
    },
    {
      heading: 'Hosting, data and compliance',
      blocks: [
        {
          type: 'list',
          items: [
            '**Zapier** is a managed cloud service. Zapier\'s own comparison page says it is not a replacement where self-hosted, air-gapped or on-premises deployment is required.',
            '**Make** runs organisations in US and EU data zones. An on-prem agent lets scenarios reach systems inside your network. Make notes that an EU zone does not by itself guarantee where AI requests are processed.',
            '**n8n** can be self-hosted on your own servers, so the workflow and its data never leave your infrastructure. n8n Cloud stores data in the EU (Frankfurt). The code is published under n8n\'s fair-code licenses (the Sustainable Use License and the n8n Enterprise License).',
          ],
        },
        {
          type: 'p',
          text: 'For regulated data, such as patient records or client files, hosting usually decides the shortlist before features do. Check your obligations with your compliance lead first, then pick the platform.',
        },
      ],
    },
    {
      heading: 'When each platform is the wrong choice',
      blocks: [
        {
          type: 'list',
          items: [
            '**Zapier is the wrong choice** when one workflow processes thousands of items a day across many steps, when you need loops over large datasets, or when data must stay on your own servers.',
            '**Make is the wrong choice** when nobody on the team is comfortable reading a branching scenario, or when heavy AI or code steps would dominate the credit bill.',
            '**n8n is the wrong choice** when there is no one to own updates, backups and security for a self-hosted instance, or when the team needs a niche app that only Zapier has a ready-made connector for.',
          ],
        },
      ],
    },
    {
      heading: 'A decision checklist',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'List your five most important workflows with their monthly runs and number of action steps. Estimate usage on each billing model.',
            'Mark any workflow that touches regulated or confidential data, and decide whether it must run on your own infrastructure.',
            'Check that every app you need has a connector, or an API you can call over HTTP.',
            'Decide who maintains the workflows after launch: a non-technical ops person, a technical ops person or a developer.',
            'Decide where AI decisions happen, and whether a person must review them before anything reaches a customer.',
            'Pilot the highest-volume workflow first. That is where the cost and reliability differences show up.',
          ],
        },
        {
          type: 'p',
          text: 'Many teams end up with two platforms: Zapier or Make for quick departmental automations, and n8n for high-volume or sensitive workflows. That is fine as long as each workflow has an owner and alerts go to one place.',
        },
      ],
    },
    {
      heading: 'Switching platforms',
      blocks: [
        {
          type: 'p',
          text: 'Migrations rarely fail on the rebuild itself. They fail on the details nobody documented: the filter that drops test leads, the formatter step that fixes date formats, the Zap someone else built two years ago. Before moving anything:',
        },
        {
          type: 'list',
          items: [
            'Export or screenshot every workflow and write down its trigger, steps, filters and the outcome it is meant to produce.',
            'Run the old and new versions side by side on real inputs and compare the outputs before you switch the old one off.',
            'Move one workflow at a time, highest volume first, and keep the old version paused, not deleted, for a few weeks.',
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: 'Is n8n cheaper than Zapier?',
      answer:
        'For high-volume or many-step workflows, usually yes. n8n Cloud counts one execution per workflow run regardless of steps, and the self-hosted Community edition has no per-run charge. Zapier counts a task for each successful action step. For a few simple, low-volume Zaps, the difference is small and Zapier\'s setup speed may matter more.',
    },
    {
      question: 'Is Make easier than n8n?',
      answer:
        'For most non-developers, yes. Both are visual, but Make hides more of the underlying data handling, while n8n expects you to be comfortable with JSON, expressions and occasionally code. n8n gives more control in return.',
    },
    {
      question: 'Can Zapier or Make be self-hosted?',
      answer:
        'Zapier cannot; it is a managed cloud service. Standard Make is cloud-based, with an on-prem agent that connects scenarios to systems inside your network. n8n can be fully self-hosted.',
    },
    {
      question: 'Which platform is best for AI agents?',
      answer:
        'All three offer AI agent features. For a simple AI step inside a process, Zapier or Make is quicker to set up. For agents that choose their own tools, keep state and need testing and self-hosting, n8n gives the most control.',
    },
    {
      question: 'Can we use more than one platform?',
      answer:
        'Yes, and many teams do. Keep each workflow documented with an owner, and send all failure alerts to one place so problems are not split across tools.',
    },
  ],
  related: [
    { href: '/platforms/n8n-automation-services', label: 'n8n Automation Services' },
    { href: '/platforms/zapier-automation-services', label: 'Zapier Automation Services' },
    { href: '/platforms/make-automation-services', label: 'Make.com Automation Services' },
    { href: '/services/ai-workflow-automation', label: 'AI Workflow Automation service' },
    { href: '/solutions/ai-workflow-automation', label: 'AI Workflow Automation solutions' },
    { href: '/free-automation-audit', label: 'Free automation audit' },
  ],
  sources: [
    { label: 'Zapier pricing (tasks, plans, AI products)', url: 'https://zapier.com/pricing', checked: '2026-11-26' },
    { label: 'Zapier help: Autoreplay', url: 'https://zapier.com/help/autoreplay/', checked: '2026-11-26' },
    { label: 'Zapier help: custom error handling', url: 'https://help.zapier.com/hc/en-us/articles/22495436062605-Set-up-custom-error-handling', checked: '2026-11-26' },
    { label: 'Zapier vs n8n (Zapier)', url: 'https://zapier.com/compare/zapier-vs-n8n', checked: '2026-11-26' },
    { label: 'Make pricing', url: 'https://www.make.com/en/pricing', checked: '2026-11-26' },
    { label: 'Make help: how features use credits', url: 'https://help.make.com/how-features-use-credits', checked: '2026-11-26' },
    { label: 'Make help: error handlers', url: 'https://help.make.com/error-handlers', checked: '2026-11-26' },
    { label: 'Make help: AI providers and data zones', url: 'https://help.make.com/ai-providers-and-data-zones-in-make', checked: '2026-11-26' },
    { label: 'n8n pricing', url: 'https://n8n.io/pricing/', checked: '2026-11-26' },
    { label: 'n8n docs: hosting', url: 'https://docs.n8n.io/hosting/', checked: '2026-11-26' },
    { label: 'n8n docs: error handling', url: 'https://docs.n8n.io/flow-logic/error-handling/', checked: '2026-11-26' },
    { label: 'n8n docs: Code node', url: 'https://docs.n8n.io/code/code-node/', checked: '2026-11-26' },
    { label: 'n8n legal: licenses', url: 'https://n8n.io/legal/', checked: '2026-11-26' },
  ],
};
