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
    "CRM Automation Solutions | Clickmasters",
    "CRM automation that keeps contacts, deals, and follow-ups accurate without manual data entry.",
  ),
  support: solutionHub(
    "Customer Support Automation",
    "/solutions/customer-support-automation",
    "Customer Support Automation | Clickmasters",
    "Customer support automation that resolves routine tickets and escalates the cases that need a person.",
  ),
  document: solutionHub(
    "Document Automation",
    "/solutions/document-automation",
    "Document Automation Solutions | Clickmasters",
    "Document automation that extracts, validates, and routes data from invoices, forms, and files.",
  ),
  invoice: solutionHub(
    "Invoice Automation",
    "/solutions/invoice-automation",
    "Invoice Automation Solutions | Clickmasters",
    "Invoice automation that captures, checks, and posts bills so finance closes faster.",
  ),
  booking: solutionHub(
    "Appointment Booking Automation",
    "/solutions/appointment-booking-automation",
    "Appointment Booking Automation | Clickmasters",
    "Appointment booking automation that schedules, confirms, and reminds so bookings are not missed.",
  ),
  marketing: solutionHub(
    "Marketing Automation",
    "/solutions/marketing-automation",
    "Marketing Automation Solutions | Clickmasters",
    "Marketing automation for nurture sequences, campaigns, and content that runs without a manual queue.",
  ),
  sales: solutionHub(
    "Sales Automation",
    "/solutions/sales-automation",
    "Sales Automation Solutions | Clickmasters",
    "Sales automation that enriches leads, follows up, and logs activity so reps spend time selling.",
  ),
  platforms: {
    title: "AI Automation Platforms | Clickmasters",
    description:
      "Automation platforms we implement: Zapier, Make, n8n, HubSpot, Airtable, and GoHighLevel.",
    name: "AI Automation Platforms",
    path: "/platforms",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Platforms", path: "/platforms" },
    ],
  } satisfies HubSeo,
  industries: {
    title: "AI Automation by Industry | Clickmasters",
    description:
      "AI automation for healthcare, finance, e-commerce, SaaS, real estate, law firms, and professional services.",
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
    "AI Automation Solutions | Clickmasters",
    "Explore our comprehensive AI automation solutions for business efficiency.",
  ),
  services: {
    title: "AI Automation Services | Clickmasters",
    description:
      "Explore Clickmasters AI automation services: workflow and process automation, RPA, AI agents, chatbots, voice agents, reporting and custom AI development.",
    name: "AI Automation Services",
    path: "/services",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ],
  } satisfies HubSeo,
};
