import { ContactHero } from '@/components/module/contact/ContactHero';
import FormSection from '@/components/module/contact/FormSection';
import { WhyProLaunchTechnologies } from '@/components/module/contact/WhyProLaunchTechnologies';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with ProLaunch Technologies for cloud infrastructure audits, technical consultations, and custom software engineering.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | ProLaunch Technologies',
    description:
      'Get in touch with ProLaunch Technologies for cloud infrastructure audits, technical consultations, and custom software engineering.',
    url: 'https://prolaunch.tech/contact',
  },
};

function ContactPage() {
  return (
    <section aria-labelledby="Contact-page">
      <ContactHero />
      <FormSection />
      <WhyProLaunchTechnologies />
    </section>
  );
}

export default ContactPage;
