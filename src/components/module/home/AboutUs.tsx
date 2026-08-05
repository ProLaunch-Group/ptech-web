'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronsRight, Globe, ShieldCheck, Headphones } from 'lucide-react';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { fadeUp, slideFromLeft, whileInViewProps } from '@/libs/motion-variants';
import SectionTitle from '@/components/layout/SectionTitle';

const whoWeAreCards = [
  {
    icon: Globe,
    title: 'Global Infrastructure & Standards',
    description:
      'Hosted in AWS data centers across the world. Ensures data sovereignty, low latency, and compliance with local regulations.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security & Compliance',
    description:
      'Multi-layered security controls including encryption at rest and in transit, 24/7 security monitoring, and continuous DDoS protection.',
  },
  {
    icon: Headphones,
    title: 'Industry Expertise & Support',
    description:
      '24/7 support from cloud engineers within your timezone. Complete deployment assistance, cloud migration, architectural reviews, and managed services for enterprise clients.',
  },
];

export default function AboutUs() {
  return (
    <StaggerContainer>
      <section
        aria-labelledby="who-we-are-heading"
        className="py-16 md:py-24 bg-slate-50/70 dark:bg-[#071122]/60 transition-colors duration-300"
      >
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24">
          {/* Main 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Title, Description, Cards Stack & CTA */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <header className="w-full mb-8">
                <SectionTitle
                  title="Who We Are"
                  description="ProLaunch Technologies is a cloud computing and technology solutions company delivering DevOps, infrastructure management, custom software, and cloud migration services. The brand communicates precision, trust, and forward momentum."
                  variant="secondary"
                />
              </header>

              {/* 3 Feature Cards List */}
              <ul className="w-full space-y-4 mb-8" role="list">
                {whoWeAreCards.map((card, index) => (
                  <motion.li
                    key={index}
                    variants={fadeUp}
                    {...whileInViewProps}
                    className="list-none"
                  >
                    <article className="group rounded-2xl border-l-4 border-electricBlue bg-white dark:bg-slate-900/90 p-5 sm:p-6 transition-all duration-300 shadow-sm border-y border-r border-slate-200/80 dark:border-slate-800 hover:-translate-y-0.5 hover:shadow-md flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-lightBlue dark:bg-slate-800 text-electricBlue dark:text-amberGold shrink-0 transition-colors group-hover:bg-electricBlue group-hover:text-white">
                        <card.icon size={24} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold font-sora text-slate-900 dark:text-white tracking-tight">
                          {card.title}
                        </h3>
                        <p className="mt-1.5 leading-relaxed text-slate-600 dark:text-slate-300 font-sans text-xs sm:text-sm font-normal">
                          {card.description}
                        </p>
                      </div>
                    </article>
                  </motion.li>
                ))}
              </ul>

              {/* Read More Link */}
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
            </div>

            {/* Right Column: Image about-us-img.webp */}
            <motion.figure
              variants={slideFromLeft}
              {...whileInViewProps}
              className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl group m-0"
            >
              <Image
                src="/Home/about-us-img.webp"
                alt="ProLaunch Technologies Engineering Team and Infrastructure"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3.5 py-1 text-xs font-bold uppercase rounded-full bg-electricBlue/20 text-blue-300 border border-blue-400/30 backdrop-blur-md mb-2 inline-block">
                  ProLaunch Enterprise
                </span>
                <p className="text-white font-sora font-extrabold text-xl sm:text-2xl drop-shadow-md">
                  Precision Engineering & Trusted Cloud Scale
                </p>
              </div>
            </motion.figure>
          </div>
        </div>
      </section>
    </StaggerContainer>
  );
}
