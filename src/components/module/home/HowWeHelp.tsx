'use client';

import { HOW_WE_HELP_SERVICES } from '@/constants/service';
import { ServiceCardData } from '@/types/service.types';
import ServiceCardMotion from '@/components/module/home/ServiceCardMotion';
import HowWeHelpCard from '@/components/module/home/HowWeHelpCard';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUp } from '@/libs/motion-variants';

export default function HowWeHelp() {
  return (
    <StaggerContainer>
      <section
        className="flex flex-col bg-card items-center justify-center pt-8 pb-15 md:pt-15 md:pb-18 lg:-mt-12 text-slate-900"
        aria-labelledby="how-we-help-section"
      >
        <div className="w-full max-w-7xl px-6 md:px-12">
          <article className="text-center max-w-3xl mx-auto mb-12 md:mb-16 flex flex-col items-center">
            {/* Top Badge */}
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 mb-4 text-sm font-extrabold tracking-wider text-amberGold uppercase bg- rounded-full font-sans"
            >
              How We Help
            </motion.span>

            {/* Main Title Heading */}
            <motion.h2
              variants={fadeUp}
              id="challenges-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-deepNavy font-sora mb-4"
            >
              OUTCOME-FOCUSED SOLUTIONS
            </motion.h2>
            {/*  Context Text */}

            <article className="space-y-1">
              <motion.p
                variants={fadeUp}
                className="text-lg font-bold text-black uppercase tracking-wide font-sans"
              >
                We don&apos;t just deliver code we deliver business outcomes.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-base text-slate-600 font-sans font-semibold"
              >
                We stay accountable long after the first line of code is
                deployed. We measure our success by your stability, your reduced
                costs, and your business growth. If your systems aren&apos;t
                scaling, we haven&apos;t done our job
              </motion.p>
            </article>
          </article>

          <ul
            role="list"
            className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8 lg:gap-6 w-full"
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
