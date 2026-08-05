'use client';

import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { whyUs } from '@/constants/service';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { motion } from 'framer-motion';
import { slideFromLeft } from '@/libs/motion-variants';
import SectionTitle from '@/components/layout/SectionTitle';
import { AccordionItem } from '@/components/common/AccordionItem';

export default function OurCapabilities() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <StaggerContainer>
      <section className="py-16 md:py-24 bg-background text-foreground transition-colors duration-300">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading & Messaging */}
            <div className="flex flex-col items-start lg:col-span-5 pt-2">
              <SectionTitle
                title="OUR CORE CAPABILITIES"
                subtitle="We deliver results across four primary service pillars"
                variant="secondary"
              />

              <motion.p
                variants={slideFromLeft}
                className="text-base font-normal sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed mt-4"
              >
                Organizations stay with ProLaunch because we combine the
                reliability they expect from a large firm with the
                accountability and speed of a partner that truly cares.
              </motion.p>
            </div>

            {/* Right Column: Interactive Capabilities Accordion */}
            <ul className="grid gap-3.5 sm:gap-4 lg:col-span-7 font-sans">
              {whyUs.map((item, index) => {
                return (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                    icon={
                      <ShieldCheck
                        className="h-4 w-4 text-amberGold"
                        aria-hidden="true"
                      />
                    }
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </StaggerContainer>
  );
}
