import FaqSection from '@/components/module/faq/FaqSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about ProLaunch Technologies cloud computing, DevOps consulting, project timelines, security practices, and custom software solutions.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | ProLaunch Technologies',
    description:
      'Find answers to common questions about ProLaunch Technologies cloud computing, DevOps consulting, project timelines, security practices, and custom software solutions.',
    url: 'https://prolaunch.tech/faq',
  },
};





function FaqPage() {
  return (
    <section aria-labelledby="Faq-page">
      <FaqSection />
    </section>
  );
}

export default FaqPage;
