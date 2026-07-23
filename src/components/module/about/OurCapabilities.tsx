'use client';

import { ShieldCheck } from 'lucide-react';
import { whyUs } from '@/constants/service';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUp, slideFromLeft } from '@/libs/motion-variants';

export default function OurCapabilities() {
  return (
    <StaggerContainer>
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading & Messaging */}
            <div className="flex flex-col items-start lg:col-span-5 pt-2">
              {/* Badge */}
              <motion.span
                variants={slideFromLeft}
                className="inline-block px-4 py-1.5 mb-4 text-sm font-extrabold tracking-wider text-amberGold uppercase bg- rounded-full font-sans"
              >
                OUR CORE CAPABILITIES
              </motion.span>

              {/* Main Title */}
              <motion.h2
                variants={slideFromLeft}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-deepNavy font-sora leading-[1.15] tracking-tight mb-5"
              >
                We deliver results across{' '}
                <span className="text-deepNavy">four primary </span>service
                pillars
              </motion.h2>

              {/* Description Body */}
              <motion.p
                variants={slideFromLeft}
                className="text-base font-semibold sm:text-lg text-slate-500 font-sans leading-relaxed"
              >
                Organizations stay with ProLaunch because we combine the
                reliability they expect from a large firm with the
                accountability and speed of a partner that truly cares.
              </motion.p>
            </div>

            {/* Right Column: Capabilities Card List */}
            <ul className="grid gap-3.5 sm:gap-4 lg:col-span-7 font-sans">
              {whyUs.map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeUp}
                  className="flex items-center gap-4 rounded-[22px] sm:rounded-full border border-slate-200/90 bg-white px-5 sm:px-6 py-4 shadow-none hover:border-slate-300 transition-colors"
                >
                  {/* Icon Container with text-amberGold */}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50">
                    <ShieldCheck
                      className="h-4 w-4 text-amberGold"
                      aria-hidden="true"
                    />
                  </span>

                  {/* Card Text */}
                  <span className="text-sm sm:text-base font-bold font-sans leading-normal text-slate-800">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </StaggerContainer>
  );
}
