'use client';

import { HOW_WE_HELP_SERVICES } from '@/constants/service';
import { ServiceCardData } from '@/types/service.types';
import ServiceCardMotion from '@/components/module/home/ServiceCardMotion';
import HowWeHelpCard from '@/components/module/home/HowWeHelpCard';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import SectionTitle from '@/components/layout/SectionTitle';

export default function HowWeHelp() {
  return (
    <StaggerContainer>
      <section
        className="flex flex-col bg-background items-center justify-center py-16 md:py-24 text-foreground transition-colors duration-300"
        aria-labelledby="how-we-help-section"
      >
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24">
          <SectionTitle
            title="How We Help"
            subtitle="We don't just deliver code; we deliver business outcomes."
            description="We stay accountable long after deployment. We measure our success by your stability, your reduced costs, and your business growth. If your systems aren't scaling, we haven't done our job."
            variant="secondary"
          />

          <ul
            role="list"
            className="flex flex-col gap-6 mt-12 md:grid md:grid-cols-2 md:gap-6 w-full"
          >
            {HOW_WE_HELP_SERVICES.map(
              (service: ServiceCardData, index: number) => {
                return (
                  <ServiceCardMotion key={service.id} index={index}>
                    <HowWeHelpCard service={service} />
                  </ServiceCardMotion>
                );
              }
            )}
          </ul>
        </div>
      </section>
    </StaggerContainer>
  );
}
