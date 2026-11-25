// components/templates/ServiceTemplate.tsx
'use client';

import { ServiceContent } from '@/content/type';
import Hero from '../services/Hero';
import TextSec from '../services/TextSec';
import FeatureSec from '../services/FeatureSec';
import GridSec from '../services/GridSec';
import StepSec from '../services/StepSec';
import StatsSec from '../services/StatsSec';
import PainPoint from '../services/PainPoint';
import FAQSec from '../services/FAQSec';
import CTASec from '../services/CTASec';

export default function ServiceTemplate({ data }: { data: ServiceContent }) {
  const renderSection = (section: any, index: number) => {
    switch (section.type) {
      case 'hero':
        return <Hero key={index} section={section} />;
      case 'text':
        return <TextSec key={index} section={section} />;
      case 'features':
        return <FeatureSec key={index} section={section} />;
      case 'grid':
        return <GridSec key={index} section={section} />;
      case 'steps':
        return <StepSec key={index} section={section} />;
      case 'stats':
        return <StatsSec key={index} section={section} />;
      case 'painpoint':
        return <PainPoint key={index} section={section} />;
      case 'faq':
        return <FAQSec key={index} section={section} />;
      case 'cta':
        return <CTASec key={index} section={section} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {data.sections.map((section, index) => renderSection(section, index))}
    </div>
  );
}