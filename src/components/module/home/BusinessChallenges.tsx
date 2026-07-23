'use client';

import { StaggerContainer } from '@/components/animation/StaggerContainer';
import ChallengeCard from '@/components/module/home/ChallengeCard';
import { challengesData } from '@/constants/constants';
import { motion } from 'framer-motion';
import { fadeUp } from '@/libs/motion-variants';

export default function BusinessChallenges() {
  return (
    <StaggerContainer>
      <section
        className="w-full py-16 md:py-24 bg-white"
        aria-labelledby="challenges-heading"
      >
        {/* Inner Container Max-W-7xl */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Header / Titles Section */}
          <div className="text-center max-w-3xl mb-12 md:mb-16 flex flex-col items-center">
            {/* Top Badge */}
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 mb-4 text-sm font-extrabold tracking-wider text-amberGold uppercase bg- rounded-full font-sans"
            >
              Business challenges we solve
            </motion.span>

            {/* Main Title Heading */}
            <motion.h2
              variants={fadeUp}
              id="challenges-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-deepNavy font-sora mb-4"
            >
              From technical pain to measurable business outcomes
            </motion.h2>

            {/* Subheading / Context Text */}
            <div className="space-y-1">
              <motion.p
                variants={fadeUp}
                className="text-lg font-bold text-black uppercase tracking-wide font-sans"
              >
                IS YOUR TECH HOLDING YOU BACK?
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-base font-semibold text-slate-600 font-sans"
              >
                Your infrastructure wasn&apos;t built for your current scale.
              </motion.p>
            </div>
          </div>

          {/*  Card Array Mapping */}
          <ul
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-2"
            aria-label="Target audiences and their business challenges"
          >
            {challengesData.map((item, index) => (
              <ChallengeCard key={index} item={item} index={index} />
            ))}
          </ul>
        </div>
      </section>
    </StaggerContainer>
  );
}
