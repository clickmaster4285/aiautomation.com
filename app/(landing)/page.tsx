import type { Metadata } from "next";

import Hero from "@/components/landingPage/Hero";
import Marquee from "@/components/landingPage/Marquee";
import Intelligence from "@/components/landingPage/Intelligence";
import Problem from "@/components/landingPage/Problem";
import Services from "@/components/landingPage/Services";
import Benefits from "@/components/landingPage/Benefits";
import CtaBand from "@/components/landingPage/CtaBand";
import Process from "@/components/landingPage/Process";
import Live from "@/components/landingPage/Live";
import Integrations from "@/components/landingPage/Integrations";
import Industries from "@/components/landingPage/Industries";
import Numbers from "@/components/landingPage/Numbers";
import Work from "@/components/landingPage/Work";
import WhyChooseUs from "@/components/landingPage/WhyChooseUs";
import Tools from "@/components/landingPage/Tools";
import FAQ from "@/components/landingPage/FAQ";
import Testimonials from "@/components/landingPage/Testimonials";
import CTA from "@/components/landingPage/CTA";

import { homepageData } from "@/content/services/homepage";

// SEO metadata comes straight from the content file
export function generateMetadata(): Metadata {
  const { meta } = homepageData;
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    metadataBase: new URL(meta.siteUrl),
  };
}

export default function HomePage() {
  const data = homepageData;

  return (
    <main className="bg-paper text-ink">
      <Hero data={data.hero} stats={data.stats} />
      <Marquee stats={data.stats} />
      <Intelligence
        data={{
          heading: data.intro.heading,
          content: data.intro.content,
          tags: data.benefits.items.map((b) => b.title),
        }}
      />
      <Problem data={data.whatToAutomate} />
      <Services data={data.services} />
      <CtaBand data={data.readyToAutomate} />
      <Benefits data={data.benefits} />
      <Process data={data.process} />
      <Live />
      <Integrations data={data.integrations} />
      <Industries data={data.industries} />
      <Numbers stats={data.stats} />
      <Work data={data.caseStudies} />
      <WhyChooseUs data={data.whyChooseUs} />
      <Tools data={data.tools} />
      <FAQ data={data.faq} />
      <Testimonials data={data.testimonials} />
      <CTA data={data.finalCta} />
    </main>
  );
}