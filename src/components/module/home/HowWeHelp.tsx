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
        className="flex flex-col bg-card items-center justify-center pt-8 pb-15 md:pt-10 md:pb-22 lg:-mt-12 px-4 lg:px-4 text-slate-900"
        aria-labelledby="how-we-help-section"
      >
        <SectionTitle
          title="How We Help"
          subtitle="We don't just deliver code we deliver business outcomes."
          description="We stay accountable long after the first line of code is
      deployed. We measure our success by your stability, your reduced
      costs, and your business growth. If your systems aren't
      scaling, we haven't done our job"
          variant="secondary"
        />

        <div className="w-full max-w-7xl px-6 md:px-12">
          <ul
            role="list"
            className="flex flex-col gap-4 mt-12 md:grid md:grid-cols-2 md:gap-8 lg:gap-6 w-full"
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
