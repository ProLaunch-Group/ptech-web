import { servicesData } from '@/constants/service';
import ServiceCard from './ServiceCard';
import SectionTitle from '@/components/layout/SectionTitle';
import { StaggerContainer } from '@/components/animation/StaggerContainer';

export default function ServicesSection() {
  return (
    <StaggerContainer>
      <section
        aria-label="ProLaunch Technologies Core Services List"
        className="w-full bg-background transition-colors duration-300 pb-12"
      >
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} {...service} isEven={index % 2 !== 0} />
        ))}

        <article className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24 pt-12">
          <SectionTitle
            title="Why ProLaunch Technologies"
            subtitle="A partner, not just a vendor"
            description="We help businesses reduce complexity, improve reliability, and build scalable technology solutions that create measurable business value. We own outcomes, not just deliverables."
            variant="secondary"
          />
        </article>
      </section>
    </StaggerContainer>
  );
}
