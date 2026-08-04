import { servicesData } from '@/constants/service';
import ServiceCard from './ServiceCard';
import SectionTitle from '@/components/layout/SectionTitle';
import { StaggerContainer } from '@/components/animation/StaggerContainer';

export default function ServicesSection() {
  return (
    <StaggerContainer>
      <section
        aria-label="ProLaunch Technologies Core Services List"
        className="w-full bg-[#e8f3ff] pb-6"
      >
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} {...service} isEven={index % 2 !== 0} />
        ))}

        <article className="mx-auto max-w-5xl px-5 lg:px-2 ">
          <SectionTitle
            title="Why ProLaunch Technologies"
            subtitle="A partner, not just a vendor"
            description=" We help businesses reduce complexity, improve reliability, and build scalable technology solutions that create measurable business value.
                  We own outcomes, not just deliverables."
            variant="secondary"
          />
        </article>
      </section>
    </StaggerContainer>
  );
}
