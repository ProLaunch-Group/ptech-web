'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronsRight } from 'lucide-react';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { fadeUp, whileInViewProps } from '@/libs/motion-variants';
import SectionTitle from '@/components/layout/SectionTitle';
import { cards } from '@/constants/service';
import { MissionCardProps } from '@/types/service.types';

export default function AboutUs() {
  return (
    <StaggerContainer>
      <section
        aria-labelledby="brand-overview-heading"
        className="py-16 md:py-24 bg-slate-50/50"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <header className="max-w-3xl mb-10">
            <SectionTitle
              title="About us"
              description="ProLaunch Technologies is a cloud computing and technology solutions company
delivering DevOps, infrastructure management, custom software, and cloud migration
services. The brand communicates precision, trust, and forward momentum.
"
              variant="secondary"
            />
          </header>

          {/* Cards Grid Container  */}
          <ul className="grid gap-8 md:grid-cols-3 mb-6" role="list">
            {cards.map((card: MissionCardProps) => (
              <motion.li
                key={card.title}
                variants={fadeUp}
                {...whileInViewProps}
                className="list-none"
              >
                <article className="h-full group rounded-2xl border-l-4 border-[#0a84ff] bg-white p-8 transition-all duration-200 shadow-sm  hover:-translate-y-1">
                  <card.icon
                    className="mb-5 text-[#0a84ff]/50 group-hover:text-amberGold"
                    size={40}
                  />

                  <h3 className="text-xl font-bold font-sora text-deepNavy">
                    {card.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 font-sans font-normal">
                    {card.description}
                  </p>
                </article>
              </motion.li>
            ))}
          </ul>

          {/* Navigation / Call-to-Action Link */}
          <nav aria-label="About section link">
            <motion.div variants={fadeUp} {...whileInViewProps}>
              <Link
                href="/about"
                aria-label="Read more about ProLaunch Technologies and our brand vision"
                className="group inline-flex items-center gap-2 text-base font-bold font-sans text-deepNavy hover:text-amberGold transition-colors duration-200"
              >
                <span>Read More</span>
                <ChevronsRight
                  className="w-5 h-5 text-amberGold transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </nav>
        </div>
      </section>
    </StaggerContainer>
  );
}
