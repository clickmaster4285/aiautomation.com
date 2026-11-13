import type { Metadata } from "next";

import Hero from "@/components/landingPage/Hero";
import Marquee from "@/components/landingPage/Marquee";
import Problem from "@/components/landingPage/Problem";
import Services from "@/components/landingPage/Services";
import Benefits from "@/components/landingPage/Benefits";
import CtaBand from "@/components/landingPage/CtaBand";
import Process from "@/components/landingPage/Process";
import Live from "@/components/landingPage/Live";
import Integrations from "@/components/landingPage/Integrations";
import Industries from "@/components/landingPage/Industries";
import Work from "@/components/landingPage/Work";
import WhyChooseUs from "@/components/landingPage/WhyChooseUs";
import FAQ from "@/components/landingPage/FAQ";
import CTA from "@/components/landingPage/CTA";

import { homepageData } from "@/content/services/homepage";

// SEO metadata comes straight from the content file (handover 2.1).
// No meta keywords tag. Canonical comes from the root layout.
export function generateMetadata(): Metadata {
  const { meta } = homepageData;
  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(meta.siteUrl),
    openGraph: {
      type: "website",
      siteName: meta.ogSiteName,
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: meta.siteUrl,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

// The root layout already renders the single <main> element, so this page uses a <div>.
export default function HomePage() {
  const data = homepageData;

  return (
    <div className="bg-paper text-ink">
      {/* Hero + marquee fill the first screen; the marquee sits on its bottom edge */}
      <div className="flex flex-col min-h-[calc(100svh-4rem)]">
        <Hero data={data.hero} ctaPosition="hero" />
        <Marquee items={data.marquee} />
      </div>
      <Problem data={data.whatToAutomate} marker="01" />
      <Services data={data.services} marker="02" />
      <CtaBand data={data.readyToAutomate} ctaPosition="mid-page" />
      <Benefits data={data.benefits} marker="03" />
      <Live data={data.exampleWorkflow} marker="04" />
      <Process data={data.process} marker="05" />
      <Integrations data={data.integrations} tools={data.tools} marker="06" />
      <Work data={data.proof} marker="07" />
      <Industries data={data.industries} marker="08" />
      <WhyChooseUs data={data.whyChooseUs} marker="09" />
      <FAQ data={data.faq} ctaPosition="faq" />
      <CTA data={data.finalCta} ctaPosition="footer" />
    </div>
  );
}
