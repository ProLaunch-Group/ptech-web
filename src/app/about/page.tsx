import WhoWeAre from '@/components/module/about/WhoWeAre';
import AboutUsHero from '@/components/module/about/AboutUsHero';
import CoreValuesSection from '@/components/module/about/CoreValuesSection';
import TeamSection from '@/components/module/about/TeamSection';

import CTASection from './CtaSection';


export default function AboutPage() {
  return (
    <section className="bg-white" aria-labelledby="about-page-title">
      <AboutUsHero />
      <WhoWeAre />
      <CoreValuesSection />
      <TeamSection />
      <CTASection />
    </section>
  );
}