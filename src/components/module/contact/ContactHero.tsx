'use client';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { slideFromLeft } from '@/libs/motion-variants';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ContactHeroProps {
  bgImageSrc?: string;
}

export function ContactHero({
  bgImageSrc = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
}: ContactHeroProps) {
  return (
    <StaggerContainer>
      <section
        aria-labelledby="hero-heading"
        className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] flex items-center justify-center overflow-hidden"
      >
        <Image
          src={bgImageSrc}
          alt="Contact us background image"
          aria-hidden="true"
          fill
          priority
          loading="eager"
          className="object-cover object-center"
          sizes="100vw"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#1e3a6e]/80 backdrop-blur-[1px]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0b0f19]"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          {/* Main Heading Linked to Section */}
          <motion.h1
            variants={slideFromLeft}
            id="hero-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sora text-white tracking-tight leading-tight"
          >
            Let&apos;s Build What&apos;s Next Together
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={slideFromLeft}
            className="text-base sm:text-lg text-[#e8f3ff]/90 max-w-2xl font-sans leading-relaxed mt-1 font-normal"
          >
            Your technology should be your competitive advantage — not your
            biggest headache. Whether you are ready to migrate to the cloud,
            automate your deployment pipelines, or build custom applications,
            ProLaunch Technologies is here to help.
          </motion.p>

          <motion.p
            variants={slideFromLeft}
            className="text-base sm:text-lg text-[#e8f3ff]/90 max-w-2xl font-sans leading-relaxed mt-1 font-normal"
          >
            As your trusted technology partner, we work alongside your team to
            solve complex challenges and build the digital foundations that
            support your long-term growth.
          </motion.p>
        </div>
      </section>
    </StaggerContainer>
  );
}
