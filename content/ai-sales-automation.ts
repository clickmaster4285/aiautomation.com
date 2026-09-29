// content/services/ai-sales-automation.ts
import { ServiceContent } from './type';  

export const aiSalesAutomation: ServiceContent = {
  slug: 'ai-sales-automation',
  title: 'AI Sales Automation Services | Clickmasters',
  metaDescription: 'Clickmasters automates the sales grind lead enrichment, scoring, follow-up, CRM updates, and reporting so your reps spend time selling, not on data entry.',
  keywords: 'ai sales automation, sales automation, lead scoring, crm automation',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'AI Sales Automation',
      subheading: 'Automate the busywork that eats selling time lead enrichment, scoring, follow-up, CRM hygiene, and reporting so reps actually sell.',
      content: [
        'Clickmasters automates the administrative grind that quietly consumes your sales team\'s time. Studies of how reps actually spend their days consistently find that only a fraction goes to selling; the rest disappears into updating the CRM, chasing follow-ups, researching and enriching leads, building reports, and other necessary-but-non-selling work. AI sales automation hands that work to software so your people spend their time on the conversations that close deals.',
        'This page covers where sales teams lose time, what AI sales automation does about it, the specific systems we build, how they integrate with your CRM, and the returns to expect with an honest note on what automation will and won\'t do for a sales org.'
      ],
      stats: [
        { label: 'PROJECTS', value: '180+' },
        { label: 'CLIENTS', value: '85+' }
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false }
      ],
      image: {
        src: '/images/Sales.png',
        alt: 'AI Sales Automation illustration',
        width: 578,
        height: 431
      }
    },

    // ========== TEXT: Where Sales Teams Actually Lose Time ==========
    {
      type: 'text',
      heading: 'Where Sales Teams Actually Lose Time',
      content: [
        'The problem is rarely that reps don\'t work hard. It\'s that a large share of their effort goes to work that isn\'t selling. Every inbound lead needs researching and enriching before it\'s worth a call. Every record in the CRM needs updating after every interaction, or the pipeline data becomes useless. Follow-ups need sending on schedule, and the ones that slip because a busy human forgot are lost revenue. Reports for the Monday pipeline meeting need building. Proposals and quotes need drafting from deal data.',
        'None of this is optional; a sales org that skips it falls apart. But almost none of it requires a skilled salesperson. It\'s administrative work that happens to sit on expensive people\'s plates, and it directly reduces the time they spend doing the one thing you hired them for. The leak is enormous and largely invisible, because it\'s spread across every rep\'s day in small increments.',
        'There\'s a second, sharper cost: speed and consistency. The lead that isn\'t followed up within minutes goes cold. The deal that doesn\'t get its day-three touch slips. Humans are inconsistent about this under load, in exactly the moments a busy week, a big quarter-end when consistency matters most. Automation is perfectly consistent, always, which is why automated follow-up so reliably lifts conversion.'
      ]
    },

    // ========== FEATURES: Our AI Sales Automation Services (now 6 items) ==========
    {
      type: 'features',
      heading: 'Our AI Sales Automation Services',
      items: [
        {
          title: 'Lead enrichment and scoring',
          description: 'Inbound and outbound leads are automatically enriched with company and contact data and scored against your ideal-customer profile, so reps know instantly who\'s worth their time.',
          icon: 'Target'
        },
        {
          title: 'Follow-up automation',
          description: 'Personalized follow-up sequences that fire on schedule and adapt to responses, so no lead goes cold because someone forgot.',
          icon: 'Mail'
        },
        {
          title: 'CRM hygiene',
          description: 'Records updated, activity logged, and data kept clean automatically so your pipeline data is actually trustworthy and reps stop doing data entry.',
          icon: 'Database'
        },
        {
          title: 'Proposal and quote generation',
          description: 'AI-drafted proposals and quotes assembled from deal data, ready for a rep to review and send in a fraction of the usual time.',
          icon: 'FileText'
        },
        {
          title: 'Pipeline reporting',
          description: 'Automated pipeline, forecast, and activity reporting, so the numbers assemble themselves instead of consuming a rep or manager\'s time each week.',
          icon: 'BarChart3'
        }
       
      ]
    },

    // ========== TEXT: How It Works With Your CRM ==========
    {
      type: 'text',
      heading: 'How It Works With Your CRM',
      content: [
        'Sales automation only delivers if it lives inside the system your team already uses, so we build into your CRM rather than alongside it. Whether you run HubSpot, Salesforce, GoHighLevel, or another platform, we connect the automation to it directly enriching and scoring leads as they enter, logging activity automatically, triggering follow-ups from CRM events, and keeping records clean without anyone typing.',
        'Where AI adds judgment scoring a lead on more than a single field, drafting a genuinely personalized message, deciding which sequence fits we layer the model on top of the CRM data, so the automation is contextual rather than generic. And because we connect to your wider stack (email, calendar, enrichment tools, and so on), the sales workflow spans every tool involved instead of stopping at the CRM\'s edge.'
      ]
    },

    // ========== TEXT: The Returns to Expect Honestly ==========
    {
      type: 'text',
      heading: 'The Returns to Expect Honestly',
      content: [
        'The clearest return is time: hours per rep per week handed back from administrative work to selling. The second is conversion, from faster and more consistent follow-up leads answered in minutes, sequences that never slip. The third is data quality: a CRM that\'s actually accurate because it\'s maintained automatically, which makes forecasting and management decisions far more reliable. The fourth is capacity the ability to handle more leads and more deals without proportionally more reps.',
        'The honest caveat: automation doesn\'t sell for you. It removes the friction and busywork around selling and makes your team more effective, but the selling itself the relationship, the judgment, the close stays human. Anyone pitching AI that \'closes deals on its own\' is overselling. The right expectation is a sales team that spends far more of its time actually selling, follows up with perfect consistency, and works from clean data not a sales team replaced by software.'
      ]
    },

    // ========== FEATURES: Why Clickmasters (now 6 items) ==========
    {
      type: 'features',
      heading: 'Why Clickmasters',
      items: [
        {
          title: 'Built into your CRM',
          description: 'We work inside HubSpot, Salesforce, GoHighLevel, or your platform of choice, not alongside it.',
          icon: 'Briefcase'
        },
        {
          title: 'AI where it adds judgment',
          description: 'Smarter scoring, real personalization, and contextual sequencing not just rule-based blasts.',
          icon: 'Brain'
        },
        {
          title: 'Honest about scope',
          description: 'We automate the busywork around selling; we don\'t pretend to automate selling itself.',
          icon: 'Target'
        },
        {
          title: 'You own it',
          description: 'Transparent, documented automation you control.',
          icon: 'Award'
        },
        // ✅ NEW 5th card
        {
          title: 'Real‑time insights',
          description: 'AI‑powered dashboards that reveal pipeline health, rep performance, and deal‑by‑deal signals so you can coach proactively and close faster.',
          icon: 'TrendingUp'
        }
      ]
    },

    // ========== TEXT: A Worked Example ==========
    {
      type: 'text',
      heading: 'A Worked Example: From Inbound Lead to Booked Call',
      content: [
        'Picture a typical inbound lead today: it lands in an inbox or CRM, waits until a rep notices it, gets manually researched, maybe gets a generic first reply hours later, and is logged (or not) depending on how busy the rep is. Every step is a delay or a leak, and the best leads the ones also talking to competitors are exactly the ones lost to slowness.',
        'Automated, the same lead is enriched the instant it arrives, scored against your ideal-customer profile, and if it is sales-ready sent a genuinely personalized first response within moments, while a task and full context are created for the right rep. If it is not yet ready, it enters a nurture sequence that runs itself. The rep spends zero time on triage and research and all of their time on the leads worth a real conversation, each of which arrives pre-qualified and pre-contextualized. Nothing waits, nothing leaks, and nothing depends on a busy human remembering to act.'
      ]
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What is AI sales automation?',
          description: 'AI sales automation uses AI and workflows to handle repetitive sales tasks lead enrichment, scoring, follow-up, CRM updates, proposals, and reporting so reps spend their time selling rather than on administrative work.'
        },
        {
          title: 'Will it replace sales reps?',
          description: 'No. It removes administrative busywork and surfaces the best next action, making reps more productive. The selling relationships, judgment, the close stays human. The usual result is reps spending far more of their time actually selling.'
        },
        {
          title: 'Does it work with our CRM?',
          description: 'Yes. We build into your existing CRM HubSpot, Salesforce, GoHighLevel, and others and connect it to your wider sales stack, rather than introducing a separate system.'
        },
        {
          title: 'How does AI improve follow-up?',
          description: 'It sends personalized follow-ups on schedule with perfect consistency, adapts sequences based on whether and how a lead responds, and ensures no lead goes cold because a busy rep forgot which is where a lot of pipeline quietly leaks.'
        },
        {
          title: 'Can it really keep our CRM clean automatically?',
          description: 'Yes by logging activity, updating records, and enriching data automatically as interactions happen, so the pipeline reflects reality without reps doing manual entry. Clean data also makes forecasting and management decisions far more reliable.'
        },
        {
          title: 'How quickly will we see results?',
          description: 'Because we start with a high-impact automation like lead routing and follow-up, most teams see recovered rep time and faster follow-up within the first few weeks, then expand from there.'
        }
      ]
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'See how much selling time your team could get back.',
      subheading: 'Book a free automation audit 30 minutes, no obligation.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true
      }
    }
  ]
};