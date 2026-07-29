import { ContactHero } from '@/components/module/contact/ContactHero';
import FormSection from '@/components/module/contact/FormSection';
import { MapSection } from '@/components/module/contact/MapSection';
import { WhyProLaunchTechnologies } from '@/components/module/contact/WhyProLaunchTechnologies';

function ContactPage() {
  return (
    <section aria-labelledby="Contact-page">
      <ContactHero />
      <FormSection />
      <WhyProLaunchTechnologies />
      <MapSection />
    </section>
  );
}

export default ContactPage;
