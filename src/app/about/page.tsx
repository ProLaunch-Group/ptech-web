import WhoWeAre from '@/components/module/about/WhoWeAre';
import AboutUsHero from '@/components/module/about/AboutUsHero';
import CoreValuesSection from '@/components/module/about/CoreValuesSection';
import OurCapabilities from '@/components/module/about/OurCapabilities';
import SecondaryCta from '@/components/module/home/SecondaryCta';
import { TeamSection } from '@/components/module/about/TeamSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn how ProLaunch Technologies combines cloud engineering precision with strategic vision to accelerate enterprise infrastructure.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | ProLaunch Technologies',
    description:
      'Learn how ProLaunch Technologies combines cloud engineering precision with strategic vision to accelerate enterprise infrastructure.',
    url: 'https://prolaunch.tech/about',
  },
};

export default function AboutPage() {
  return (
    <section aria-labelledby="about-page">
      <AboutUsHero />
      <WhoWeAre />
      <CoreValuesSection />
      <TeamSection />
      <OurCapabilities />
      <SecondaryCta />
    </section>
  );
}
