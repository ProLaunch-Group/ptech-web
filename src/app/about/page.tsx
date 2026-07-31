import WhoWeAre from '@/components/module/about/WhoWeAre';
import AboutUsHero from '@/components/module/about/AboutUsHero';
import CoreValuesSection from '@/components/module/about/CoreValuesSection';
import OurCapabilities from '@/components/module/about/OurCapabilities';
import SecondaryCta from '@/components/module/home/SecondaryCta';
import { TeamSection } from '@/components/module/about/TeamSection';

export default function AboutPage() {
  return (
    <section aria-labelledby="about-page-page">
      <AboutUsHero />
      <WhoWeAre />
      <CoreValuesSection />
      <TeamSection />
      <OurCapabilities />
      <SecondaryCta />
    </section>
  );
}
