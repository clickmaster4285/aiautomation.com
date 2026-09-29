import { splitHeading } from "@/components/landingPage/Shared";

// Landing-page section heading: display text with a brand-italic tail,
// optional supporting text aligned right on desktop.
export default function CmsSectionHeading({ heading, description }: { heading?: string; description?: string }) {
  if (!heading && !description) return null;
  const { head, tail } = splitHeading(heading ?? "");

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
      <h2 className="display text-4xl sm:text-5xl md:text-6xl">
        {head}
        {head && <br />}
        <span className="display-italic text-brand">{tail}</span>
      </h2>
      {description && (
        <p className="text-base md:text-lg text-muted-foreground md:text-right md:self-end">{description}</p>
      )}
    </div>
  );
}
