import WhoWeAre from '@/components/module/about/WhoWeAre';
import AboutUsHero from '@/components/module/about/AboutUsHero';
import CoreValuesSection from '@/components/module/about/CoreValuesSection';
import OurCapabilities from '@/components/module/about/OurCapabilities';
import CTASection from '@/components/module/about/CtaSection';

export default function AboutPage() {
  return (
    <section aria-labelledby="about-page-page">
      <AboutUsHero />
      <WhoWeAre />
      <CoreValuesSection />
      <OurCapabilities />
      <CTASection />
    </section>
  );
}
