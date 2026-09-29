import { splitHeading } from "@/components/landingPage/Shared";
import CmsRichText from "./CmsRichText";

type CmsRichTextData = {
  heading?: string;
  html: string;
  wide?: boolean;
};

// Long-form article body (CMS "richText" / "customContent").
export default function CmsRichTextSection({ data }: { data: CmsRichTextData }) {
  const { head, tail } = splitHeading(data.heading ?? "");

  return (
    <section className="bg-paper py-12 md:py-20">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <article className={data.wide ? "max-w-5xl" : "max-w-3xl mx-auto"}>
          {data.heading && (
            <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
              {head}
              {head && " "}
              <span className="display-italic text-brand">{tail}</span>
            </h2>
          )}
          <CmsRichText html={data.html} />
        </article>
      </div>
    </section>
  );
}
