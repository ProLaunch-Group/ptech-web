'use client';

import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { slideFromLeft, slideFromRight } from '@/libs/motion-variants';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServiceHero() {
  return (
    <StaggerContainer>
      <section
        className="relative w-full py-16 md:py-24 overflow-hidden bg-deepNavy text-white transition-colors duration-300"
        aria-label="Services overview hero section"
      >
        <Image
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop"
          alt="ProLaunch Technologies Services Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-deepNavy/85 backdrop-blur-[2px]" aria-hidden="true" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24 font-sora">
          <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
            {/* Badge */}
            <motion.span
              variants={slideFromRight}
              className="text-xs md:text-sm font-bold font-sans tracking-widest text-amberGold uppercase mb-3 px-3.5 py-1.5 rounded-full bg-amberGold/10 border border-amberGold/30"
            >
              Our Services
            </motion.span>

            {/* Main H1 Heading */}
            <motion.h1
              variants={slideFromLeft}
              className="text-3xl sm:text-4xl lg:text-5xl font-sora font-extrabold text-white tracking-tight leading-tight mb-6"
            >
              Technology That Moves Your{' '}
              <span className="text-electricBlue">Business Forward.</span>
            </motion.h1>

            {/* Body Paragraph */}
            <motion.p
              variants={slideFromLeft}
              className="font-sans text-base sm:text-lg text-slate-200 leading-relaxed font-medium max-w-2xl"
            >
              Your technology should be your competitive advantage, not your
              biggest headache. At ProLaunch Technologies, we eliminate
              technical friction to ensure your infrastructure, software, and
              operations are built for sustainable growth and high-performance
              outcomes.
            </motion.p>
          </div>
        </div>
      </section>
    </StaggerContainer>
  );
}
