'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        className="py-16 md:py-24 bg-slate-50/70 dark:bg-[#071122]/60 transition-colors duration-300"
      >
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24">
          {/* Section Header */}
          <header className="max-w-3xl mb-12">
            <SectionTitle
              title="About us"
              description="ProLaunch Technologies is a cloud computing and technology solutions company delivering DevOps, infrastructure management, custom software, and cloud migration services. We communicate precision, trust, and forward momentum."
              variant="secondary"
            />
          </header>

          {/* DevOps & Server Feature Visual */}
          <motion.div
            variants={fadeUp}
            {...whileInViewProps}
            className="mb-12 relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg group"
          >
            <Image
              src="/images/devops-pipeline-automation.jpg"
              alt="Automated DevOps Pipeline & Cloud Microservices Architecture"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 max-w-xl">
              <span className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-electricBlue/20 text-blue-300 border border-blue-400/30 backdrop-blur-md mb-2 inline-block">
                Continuous Integration & Deployment
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-sora drop-shadow-md">
                Automated Cloud Pipelines & Resilient Systems
              </h3>
              <p className="text-slate-200 text-sm md:text-base mt-2 font-sans hidden sm:block">
                Architected with modern containerization, automated security,
                and zero-downtime scalability.
              </p>
            </div>
          </motion.div>

          {/* Cards Grid Container  */}
          <ul className="grid gap-8 md:grid-cols-3 mb-8" role="list">
            {cards.map((card: MissionCardProps) => (
              <motion.li
                key={card.title}
                variants={fadeUp}
                {...whileInViewProps}
                className="list-none"
              >
                <article className="h-full group rounded-2xl border-l-4 border-electricBlue bg-white dark:bg-slate-900/90 p-8 transition-all duration-300 shadow-sm border-y border-r border-slate-200/80 dark:border-slate-800 hover:-translate-y-1 hover:shadow-md">
                  <card.icon
                    className="mb-5 text-electricBlue group-hover:text-amberGold transition-colors"
                    size={40}
                  />

                  <h3 className="text-xl font-bold font-sora text-slate-900 dark:text-white">
                    {card.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300 font-sans font-normal">
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
                className="group inline-flex items-center gap-2 text-base font-bold font-sans text-slate-900 dark:text-white hover:text-amberGold dark:hover:text-amberGold transition-colors duration-200"
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
