// Unique titles and descriptions for client solution hubs.
// Those pages cannot export metadata, so the matching layout reads this object.
// Child server pages export their own metadata and override it.

export type HubSeo = {
  title: string;
  description: string;
  name: string;
  path: string;
  crumbs: { name: string; path: string }[];
};

function solutionHub(
  name: string,
  path: string,
  title: string,
  description: string,
): HubSeo {
  return {
    title,
    description,
    name,
    path,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
      { name, path },
    ],
  };
}

export const hubSeo = {
  crm: solutionHub(
    "CRM Automation",
    "/solutions/crm-automation",
    "CRM Automation Solutions for Sales Teams | Clickmasters",
    "CRM automation that keeps contacts, deals, and follow-ups accurate without asking reps to re-key the same record. Book a free audit. Ask today.",
  ),
  support: solutionHub(
    "Customer Support Automation",
    "/solutions/customer-support-automation",
    "Customer Support Automation for Service Teams | Clickmasters",
    "Customer support automation that resolves routine tickets and escalates the cases that still need a person on the team. Book a free audit. Ask today.",
  ),
  document: solutionHub(
    "Document Automation",
    "/solutions/document-automation",
    "Document Automation for Operations Teams | Clickmasters",
    "Document automation that extracts, checks, and routes data from invoices, forms, and files into the systems you use. Book a free audit. Ask today.",
  ),
  invoice: solutionHub(
    "Invoice Automation",
    "/solutions/invoice-automation",
    "Invoice Automation for Finance Teams | Clickmasters AI",
    "Invoice automation that captures, checks, and posts bills so finance closes with fewer re-keys and fewer missed exceptions. Book a free audit. Ask today.",
  ),
  booking: solutionHub(
    "Appointment Booking Automation",
    "/solutions/appointment-booking-automation",
    "Appointment Booking Automation for Busy Teams | Clickmasters",
    "Appointment booking automation that schedules, confirms, and reminds so the calendar stays full without a manual chase. Book a free audit. Ask today.",
  ),
  marketing: solutionHub(
    "Marketing Automation",
    "/solutions/marketing-automation",
    "Marketing Automation for Growth Teams | Clickmasters",
    "Marketing automation for nurture, campaigns, and follow-up that keeps moving when nobody is watching the queue. Book a free audit. Ask today.",
  ),
  sales: solutionHub(
    "Sales Automation",
    "/solutions/sales-automation",
    "Sales Automation Solutions for Revenue Teams | Clickmasters",
    "Sales automation that enriches leads, follows up, and logs activity so representatives spend their time selling. Book a free audit. Ask today.",
  ),
  platforms: {
    title: "AI Automation Platforms We Implement | Clickmasters",
    description:
      "Automation platforms Clickmasters implements, including Zapier, Make, n8n, HubSpot, Airtable, and GoHighLevel. Book a free audit. Ask today.",
    name: "AI Automation Platforms",
    path: "/platforms",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Platforms", path: "/platforms" },
    ],
  } satisfies HubSeo,
  industries: {
    title: "AI Automation by Industry for Operating Teams | Clickmasters",
    description:
      "AI automation for healthcare, finance, e-commerce, SaaS, real estate, law firms, and other professional services teams. Book a free audit. Ask today.",
    name: "AI Automation by Industry",
    path: "/industries",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
    ],
  } satisfies HubSeo,
  solutions: solutionHub(
    "AI Automation Solutions",
    "/solutions",
    "AI Automation Solutions for Operating Teams | Clickmasters",
    "Explore Clickmasters AI automation solutions for the workflows, tools, and handoffs your team repeats every day. Book a free audit. Ask today.",
  ),
  services: {
    title: "AI Automation Services for Workflows | Clickmasters AI",
    description:
      "Clickmasters services span workflow automation, process automation, agents, chatbots, voice, reporting, and custom AI. Book a free audit. Ask today.",
    name: "AI Automation Services",
    path: "/services",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ],
  } satisfies HubSeo,
};
