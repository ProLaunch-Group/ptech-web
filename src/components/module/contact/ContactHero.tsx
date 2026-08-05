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
        className="relative w-full py-20 sm:py-28 lg:py-32 flex items-center justify-center overflow-hidden bg-deepNavy text-white"
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
          className="absolute inset-0 bg-deepNavy/85 backdrop-blur-[2px]"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center flex flex-col items-center gap-4">
          <motion.span
            variants={slideFromLeft}
            className="text-amberGold text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amberGold/10 border border-amberGold/30"
          >
            Contact Us
          </motion.span>

          <motion.h1
            variants={slideFromLeft}
            id="hero-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sora text-white tracking-tight leading-tight"
          >
            Let&apos;s Build What&apos;s Next –{' '}
            <span className="text-electricBlue">Together.</span>
          </motion.h1>

          <motion.p
            variants={slideFromLeft}
            className="text-base sm:text-lg text-slate-200 max-w-2xl font-sans leading-relaxed mt-2 font-medium"
          >
            Whether you are ready to migrate to the cloud, automate your
            deployment pipelines, or build custom applications, ProLaunch
            Technologies is here to help.
          </motion.p>

          <motion.p
            variants={slideFromLeft}
            className="text-base sm:text-lg text-slate-200 max-w-2xl font-sans leading-relaxed font-medium"
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
