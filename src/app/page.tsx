import Hero from '@/components/module/home/Hero';
import TrustedBy from '@/components/module/home/TrustedBy';
import HowWeHelp from '@/components/module/home/HowWeHelp';
import SecondaryCta from '@/components/module/home/SecondaryCta';
import BusinessChallenges from '@/components/module/home/BusinessChallenges';
import AboutUs from '@/components/module/home/AboutUs';
import TestimonialSection from '@/components/module/home/TestimonialSection';
import BrandStatement from '@/components/module/home/BrandStatement';

function HomePage() {
  return (
    <section>
      <Hero />
      <TrustedBy />
      <AboutUs />
      <BusinessChallenges />
      <HowWeHelp />
      <BrandStatement />
      <TestimonialSection />
      <SecondaryCta />
    </section>
  );
}

export default HomePage;
