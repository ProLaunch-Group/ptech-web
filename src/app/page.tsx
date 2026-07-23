import Hero from '@/components/module/home/Hero';
import TrustedBy from '@/components/module/home/TrustedBy';
import HowWeHelp from '@/components/module/home/HowWeHelp';
import SecondaryCta from '@/components/module/home/SecondaryCta';
import BusinessChallenges from '@/components/module/home/BusinessChallenges';

function HomePage() {
  return (
    <section>
      <Hero />
      <TrustedBy />
      <BusinessChallenges />
      <HowWeHelp />
      <SecondaryCta />
    </section>
  );
}

export default HomePage;
