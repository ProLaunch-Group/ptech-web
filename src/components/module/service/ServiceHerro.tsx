'use client';

import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { slideFromLeft, slideFromRight } from '@/libs/motion-variants';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServiceHero() {
  return (
    <StaggerContainer>
      <section
        className="relative w-full py-10 md:py-14 overflow-hidden"
        aria-label="Services overview hero section"
      >
        <Image
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop)"
          alt="ProLaunch Technologies Services Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        <div
          className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-black/80"
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:pt-2 font-sora">
          <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
            {/* Badge */}
            <motion.span
              variants={slideFromRight}
              className="text-xs md:text-sm font-bold font-sans tracking-wider text-[#3b82f6] uppercase mb-3"
            >
              SERVICES OVERVIEW
            </motion.span>

            {/* Main H1 Heading */}
            <motion.h1
              variants={slideFromLeft}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sora font-bold text-white tracking-tight leading-tight mb-4"
            >
              Technology That Moves Your Business Forward.
            </motion.h1>

            {/* Body Paragraph */}
            <motion.p
              variants={slideFromLeft}
              className="font-sans text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal"
            >
              Your technology should be your competitive advantage — not your
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
