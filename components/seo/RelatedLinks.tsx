import Link from "next/link";

export function RelatedLinks({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  const unique = links.filter(
    (link, index) => link.href && links.findIndex((item) => item.href === link.href) === index,
  );
  if (unique.length === 0) return null;

  return (
    <section className="bg-paper border-t border-border py-14">
      <div className="mx-auto max-w-[84vw] px-6">
        <h2 className="text-2xl font-semibold text-ink mb-6">{title}</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {unique.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-ink hover:text-brand">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
