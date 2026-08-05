'use client';

import Link from 'next/link';
import HeroCard from '@/components/module/home/HeroCard';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { slideFromLeft, slideFromRight } from '@/libs/motion-variants';
import { useAIQualifier } from '@/contextApi/AIQualifierContext';

export default function Hero() {
  const { openAIQualifier } = useAIQualifier();

  return (
    <StaggerContainer>
      <section
        aria-labelledby="hero-heading"
        className="w-full py-16 md:py-24 bg-lightBlue dark:bg-[#07152b] transition-colors duration-300 relative overflow-hidden"
      >
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electricBlue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center relative z-10">
          {/* Left Side: Editorial Content */}
          <header className="flex flex-col items-start text-left">
            <motion.span
              variants={slideFromRight}
              className="inline-flex items-center gap-2 text-deepNavy dark:text-blue-300 bg-white/80 dark:bg-slate-900/80 font-sans text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-wider uppercase border border-slate-200 dark:border-slate-800"
            >
              <span className="w-2 h-2 rounded-full bg-electricBlue animate-pulse" />
              TECHNOLOGY OPTIMISED
            </motion.span>

            <motion.h1
              id="hero-heading"
              variants={slideFromLeft}
              className="font-extrabold font-sora text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-slate-900 dark:text-white mb-6"
            >
              Scale from 0 to 1 million users without{' '}
              <span className="text-electricBlue">
                infrastructure downtime.
              </span>
            </motion.h1>

            <motion.p
              variants={slideFromLeft}
              className="text-slate-700 dark:text-slate-200 font-sans font-medium text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              We specialize in secure cloud migration to modernize your legacy
              infrastructure. Beyond migration, we automate your deployment
              pipelines and build software that scales your business, allowing
              you to stop managing servers and focus on growth.
            </motion.p>

            {/* Action Group */}
            <motion.div
              variants={slideFromLeft}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                id="hero-audit-btn"
                type="button"
                onClick={() => openAIQualifier()}
                aria-label="Open AI Qualifier widget to request a free architecture audit"
                className="inline-flex items-center font-sora gap-2.5 bg-electricBlue hover:bg-amberGold text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                Get a Free Architecture Audit
                <ArrowRight size={16} aria-hidden="true" />
              </button>

              <Link
                id="hero-services-link"
                href="/services"
                aria-label="Explore our full list of technology services"
                className="inline-flex items-center font-sora font-semibold gap-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-amberGold dark:hover:text-amberGold hover:border-amberGold px-7 py-3.5 rounded-xl text-sm transition-all duration-200"
              >
                Explore Our Services
                <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </motion.div>
          </header>

          {/* Right Side: Visual Dashboard Panel */}
          <aside className="relative" aria-label="Live System Uptime Metrics">
            <HeroCard />
          </aside>
        </div>
      </section>
    </StaggerContainer>
  );
}
