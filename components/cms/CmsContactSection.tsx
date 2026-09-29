import Link from "next/link";

import { splitHeading } from "@/components/landingPage/Shared";

type CmsContactData = {
  heading?: string;
  description?: string;
  email?: string;
  phone?: string;
  address?: string;
  buttonLabel?: string;
};

// Contact details from the CMS. The CMS "formAction" (an arbitrary external
// endpoint) is deliberately not used: visitors are sent to the site's own
// contact page, which already has the ClickMasters form.
export default function CmsContactSection({ data }: { data: CmsContactData }) {
  const { head, tail } = splitHeading(data.heading ?? "");
  const rows = [
    data.email && { label: "Email", value: data.email, href: `mailto:${data.email}` },
    data.phone && { label: "Phone", value: data.phone, href: `tel:${data.phone.replace(/[^\d+]/g, "")}` },
    data.address && { label: "Address", value: data.address },
  ].filter(Boolean) as { label: string; value: string; href?: string }[];

  return (
    <section className="bg-paper py-12 md:py-24 border-t border-gray-200">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div>
          {data.heading && (
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">
              {head}
              {head && <br />}
              <span className="display-italic text-brand">{tail}</span>
            </h2>
          )}
          {data.description && <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-md">{data.description}</p>}
          <Link
            href="/Contact"
            className="inline-flex mt-8 bg-ink text-white text-sm px-6 py-3 hover:bg-brand transition-colors items-center gap-2"
          >
            {data.buttonLabel || "Contact us"} <span>›</span>
          </Link>
        </div>
        {rows.length > 0 && (
          <dl className="border border-border divide-y divide-border">
            {rows.map((r) => (
              <div key={r.label} className="p-5 md:p-6">
                <dt className="eyebrow text-muted-foreground text-xs">{r.label}</dt>
                <dd className="mt-1 text-base md:text-lg whitespace-pre-line">
                  {r.href ? <a href={r.href} className="hover:text-brand transition-colors">{r.value}</a> : r.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
