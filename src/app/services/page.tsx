import ServiceHero from '@/components/module/service/ServiceHerro';
import ServicesSection from '@/components/module/service/ServicesSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Cloud Solutions',
  description:
    'Explore our core services: Cloud Architecture, CI/CD Pipeline Automation, Kubernetes Orchestration, Fullstack Software Engineering, and Security Compliance.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services & Cloud Solutions | ProLaunch Technologies',
    description:
      'Explore our core services: Cloud Architecture, CI/CD Pipeline Automation, Kubernetes Orchestration, Fullstack Software Engineering, and Security Compliance.',
    url: 'https://prolaunch.tech/services',
  },
};

function ServicesPage() {
  return (
    <section aria-labelledby="Service-page">
      <ServiceHero />
      <ServicesSection />
    </section>
  );
}

export default ServicesPage;
