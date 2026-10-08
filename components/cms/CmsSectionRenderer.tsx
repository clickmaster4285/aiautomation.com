// components/cms/CmsSectionRenderer.tsx
// Maps Nexus CMS section JSON onto ClickMasters components.
// The CMS controls content only; styling always comes from these components.
// Unknown section types (currently "newsletter", "columns", "html") are
// skipped, and nothing from the CMS is ever
// injected as raw HTML or executed as script (rich text goes through
// CmsRichText's allow-list).

import Hero from "@/components/landingPage/Hero";
import FAQ from "@/components/landingPage/FAQ";
import CtaBand from "@/components/landingPage/CtaBand";
import CmsTextSection from "./CmsTextSection";
import CmsFeaturesSection from "./CmsFeaturesSection";
import CmsSplitHero from "./CmsSplitHero";
import CmsRichTextSection from "./CmsRichTextSection";
import CmsAuthorSection from "./CmsAuthorSection";
import CmsPostsSection, { type CmsPostCard } from "./CmsPostsSection";
import CmsStatsSection from "./CmsStatsSection";
import CmsImageTextSection from "./CmsImageTextSection";
import CmsTestimonialsSection from "./CmsTestimonialsSection";
import CmsTeamSection from "./CmsTeamSection";
import CmsTimelineSection from "./CmsTimelineSection";
import CmsPricingSection from "./CmsPricingSection";
import CmsGallerySection from "./CmsGallerySection";
import CmsLogosSection from "./CmsLogosSection";
import CmsVideoSection, { videoEmbedUrl } from "./CmsVideoSection";
import CmsContactSection from "./CmsContactSection";
import CmsBentoSection from "./CmsBentoSection";
import { button, items, pick, safeHref, safeImage } from "./cmsContent";
import type { CmsPage, CmsSection } from "@/lib/cms";

// The site's own Nav/Footer (app/layout.tsx) replace the CMS chrome sections.
const SITE_CHROME = new Set(["header", "navbar", "footer"]);
const GRID_TYPES = new Set(["features", "services", "benefits", "process", "cards"]);

function formatDate(iso: string) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function postCards(section: CmsSection, page: CmsPage): CmsPostCard[] {
  const c = section.content;
  const cards: CmsPostCard[] =
    c.mode === "manual"
      ? items(c).map((i) => ({
          title: pick(i, "title"),
          url: safeHref(pick(i, "url")),
          excerpt: pick(i, "description", "excerpt"),
          image: safeImage(pick(i, "image")),
        }))
      : page.posts.map((p) => ({
          title: p.title,
          url: safeHref(p.url),
          excerpt: p.excerpt,
          image: safeImage(p.image),
          date: formatDate(p.publishedAt),
        }));
  const limit = typeof c.limit === "number" ? Math.min(Math.max(Math.floor(c.limit), 1), 24) : 3;
  return cards.filter((p) => p.title && p.url).slice(0, limit);
}

function renderSection(section: CmsSection, page: CmsPage) {
  const c = section.content;
  const type = section.type;

  if (SITE_CHROME.has(type)) return null;

  if (GRID_TYPES.has(type)) {
    const list = items(c)
      .map((i) => ({
        icon: pick(i, "icon"),
        title: pick(i, "title"),
        description: pick(i, "description"),
        url: safeHref(pick(i, "url")),
        linkLabel: pick(i, "linkLabel"),
      }))
      .filter((i) => i.title);
    if (!list.length) return null;
    return (
      <CmsFeaturesSection
        data={{ eyebrow: pick(c, "eyebrow"), heading: pick(c, "heading"), description: pick(c, "description"), items: list }}
      />
    );
  }

  switch (type) {
    case "hero": {
      const headline = pick(c, "heading", "title");
      if (!headline) return null;
      const image = safeImage(pick(c, "image", "backgroundImage"));
      // "split" (text + image) is the article-style header; other layouts use the landing hero.
      if (section.settings.layout === "split" && image) {
        return (
          <CmsSplitHero
            data={{
              eyebrow: pick(c, "eyebrow", "subtitle"),
              heading: headline,
              description: pick(c, "description"),
              meta: pick(c, "meta"),
              image,
              cta: button(c, "primary"),
              secondaryCta: button(c, "secondary"),
            }}
          />
        );
      }
      return (
        <Hero
          data={{
            badge: pick(c, "eyebrow", "subtitle") || undefined,
            headline,
            subheading: pick(c, "description") || undefined,
            note: pick(c, "meta") || undefined,
            cta: button(c, "primary"),
            secondaryCta: button(c, "secondary"),
          }}
        />
      );
    }

    case "text": {
      const heading = pick(c, "heading");
      const body = pick(c, "body");
      if (!heading && !body) return null;
      return <CmsTextSection data={{ eyebrow: pick(c, "eyebrow"), heading, body }} />;
    }

    case "richText":
    case "customContent": {
      const html = pick(c, "bodyHtml");
      if (!html) return null;
      return (
        <CmsRichTextSection data={{ heading: pick(c, "heading"), html, wide: section.settings.width === "wide" }} />
      );
    }

    case "image":
    case "imageText": {
      const image = safeImage(pick(c, "image"));
      const bodyHtml = pick(c, "bodyHtml");
      if (!image && !bodyHtml) return null;
      return (
        <CmsImageTextSection
          data={{
            eyebrow: pick(c, "eyebrow"),
            heading: pick(c, "heading"),
            bodyHtml,
            image,
            alt: pick(c, "alt"),
            caption: pick(c, "caption"),
            cta: button(c, "primary"),
          }}
        />
      );
    }

    case "stats": {
      const list = items(c)
        .map((i) => ({ value: pick(i, "value"), label: pick(i, "label") }))
        .filter((i) => i.value);
      if (!list.length) return null;
      return <CmsStatsSection data={{ heading: pick(c, "heading"), description: pick(c, "description"), items: list }} />;
    }

    case "bento": {
      const list = items(c)
        .map((i) => ({
          title: pick(i, "title"),
          description: pick(i, "description"),
          span: pick(i, "span"),
          image: safeImage(pick(i, "image")),
        }))
        .filter((i) => i.title);
      if (!list.length) return null;
      return <CmsBentoSection data={{ heading: pick(c, "heading"), items: list }} />;
    }

    case "author": {
      const name = pick(c, "name");
      if (!name) return null;
      return (
        <CmsAuthorSection
          data={{
            label: pick(c, "heading"),
            name,
            role: pick(c, "role"),
            image: safeImage(pick(c, "image")),
            bioHtml: pick(c, "bioHtml"),
          }}
        />
      );
    }

    case "blogPosts":
    case "relatedPosts": {
      const posts = postCards(section, page);
      if (!posts.length) return null;
      return <CmsPostsSection data={{ heading: pick(c, "heading"), description: pick(c, "description"), posts }} />;
    }

    case "testimonials": {
      const list = items(c)
        .map((i) => ({ quote: pick(i, "quote"), name: pick(i, "name"), role: pick(i, "role"), image: safeImage(pick(i, "image")) }))
        .filter((i) => i.quote);
      if (!list.length) return null;
      return <CmsTestimonialsSection data={{ heading: pick(c, "heading"), items: list }} />;
    }

    case "team": {
      const list = items(c)
        .map((i) => ({ name: pick(i, "name"), role: pick(i, "role"), image: safeImage(pick(i, "image")), bio: pick(i, "bio") }))
        .filter((i) => i.name);
      if (!list.length) return null;
      return <CmsTeamSection data={{ heading: pick(c, "heading"), description: pick(c, "description"), items: list }} />;
    }

    case "timeline": {
      const list = items(c)
        .map((i) => ({ date: pick(i, "date"), title: pick(i, "title"), description: pick(i, "description") }))
        .filter((i) => i.title);
      if (!list.length) return null;
      return <CmsTimelineSection data={{ heading: pick(c, "heading"), description: pick(c, "description"), items: list }} />;
    }

    case "pricing": {
      const list = items(c)
        .map((i) => {
          const text = pick(i, "buttonLabel");
          const link = safeHref(pick(i, "buttonUrl"));
          return {
            name: pick(i, "name"),
            price: pick(i, "price"),
            period: pick(i, "period"),
            description: pick(i, "description"),
            features: pick(i, "features").split(/\r?\n/).map((f) => f.trim()).filter(Boolean),
            cta: text && link ? { text, link } : undefined,
            featured: i.featured === true,
          };
        })
        .filter((i) => i.name);
      if (!list.length) return null;
      return <CmsPricingSection data={{ heading: pick(c, "heading"), description: pick(c, "description"), items: list }} />;
    }

    case "gallery": {
      const list = items(c)
        .map((i) => ({ image: safeImage(pick(i, "image")), caption: pick(i, "caption") }))
        .filter((i) => i.image);
      if (!list.length) return null;
      return <CmsGallerySection data={{ heading: pick(c, "heading"), description: pick(c, "description"), items: list }} />;
    }

    case "logos": {
      const list = items(c)
        .map((i) => ({ image: safeImage(pick(i, "image")), name: pick(i, "name"), url: safeHref(pick(i, "url")) }))
        .filter((i) => i.image || i.name);
      if (!list.length) return null;
      return <CmsLogosSection data={{ heading: pick(c, "heading"), items: list }} />;
    }

    case "video": {
      const embedUrl = videoEmbedUrl(pick(c, "videoUrl"));
      if (!embedUrl) return null;
      return <CmsVideoSection data={{ heading: pick(c, "heading"), description: pick(c, "description"), embedUrl }} />;
    }

    case "contact":
      return (
        <CmsContactSection
          data={{
            heading: pick(c, "heading"),
            description: pick(c, "description"),
            email: pick(c, "email"),
            phone: pick(c, "phone"),
            address: pick(c, "address"),
            buttonLabel: pick(c, "buttonLabel"),
          }}
        />
      );

    case "faq": {
      const list = items(c)
        .map((i) => ({ question: pick(i, "question", "q"), answer: pick(i, "answer", "a") }))
        .filter((i) => i.question && i.answer);
      if (!list.length) return null;
      return <FAQ data={{ heading: pick(c, "heading") || "Frequently asked questions", items: list }} />;
    }

    case "cta": {
      const heading = pick(c, "heading");
      const description = pick(c, "description");
      const cta = button(c, "primary");
      if (!heading) return null;
      // CtaBand needs a button; without one, fall back to a plain text block.
      return cta ? (
        <CtaBand data={{ heading, subheading: description, cta }} />
      ) : (
        <CmsTextSection data={{ heading, body: description }} />
      );
    }

    default:
      return null;
  }
}

export default function CmsSectionRenderer({ page }: { page: CmsPage }) {
  return (
    <>
      {page.sections.map((section) => (
        <div key={section.id} data-cms-section={section.type}>
          {renderSection(section, page)}
        </div>
      ))}
    </>
  );
}
