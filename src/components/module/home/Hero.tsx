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
        className="w-full py-10 md:py-12 bg-[#e8f3ff]"
      >
        <div className="max-w-7xl w-full mx-auto px-6 md:px-4 lg:px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8  items-center">
          {/* Left Side: Editorial Content */}
          <header className="flex flex-col items-start">
            <motion.span
              variants={slideFromRight}
              className="inline-flex items-center gap-2 text-deepNavy font-sans text-[14px] font-semibold px-4 py-2 rounded-full mb-4 tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-deepNavy animate-pulse" />
              TECHNOLOGY OPTIMISED
            </motion.span>

            <motion.h1
              id="hero-heading"
              variants={slideFromLeft}
              className="font-extrabold font-sora text-3xl  sm:text-[36px] lg:text-[48px] leading-[1.06] tracking-tight text-black mb-4"
            >
              Scale from 0 to 1 million users without{' '}
              <span className="text-deepNavy">infrastructure downtime.</span>
            </motion.h1>

            <motion.p
              variants={slideFromLeft}
              className="text-gray-600 font-sans font-medium text-lg lg:text-xl leading-relaxed mb-10 max-w-xl text-left lg:text-justify"
            >
              We specialize in secure cloud migration to modernize your legacy
              infrastructure. Beyond migration, we automate your deployment
              pipelines and build software that scales your business, allowing
              you to stop managing servers and focus on growth.
            </motion.p>

            {/* Action Group */}
            <motion.div
              variants={slideFromLeft}
              className="flex flex-wrap gap-4 lg:-mt-6"
            >
              {/* Refactored Action Button (Triggers Global AI Qualifier Modal) */}
              <button
                type="button"
                onClick={() => openAIQualifier()}
                aria-label="Open AI Qualifier widget to request a free architecture audit"
                className="inline-flex items-center font-sans gap-2.5 bg-[#0a84ff] text-[#F9F8FB] font-semibold px-7 py-3.5 rounded-xl text-[14px] transition-all duration-200 hover:shadow-[0_8px_36px_rgba(46,123,247,0.55)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Get a Free Architecture Audit
                <ArrowRight size={16} aria-hidden="true" />
              </button>

              {/* Navigation Link to Services */}
              <Link
                href="/services"
                aria-label="Explore our full list of technology services"
                className="inline-flex items-center font-sans font-semibold gap-2.5 bg-white/5 border border-[#0000004D] hover:border-amberGold text-electricBlue px-7 py-3.5 rounded-xl text-[15px] transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 hover:text-amberGold active:translate-y-0"
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
