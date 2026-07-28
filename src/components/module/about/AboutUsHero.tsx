'use client';

import { motion } from 'framer-motion';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { slideFromLeft, slideFromRight } from '@/libs/motion-variants';

export default function AboutUsHero() {
  return (
    <StaggerContainer>
      <section
        className="bg-[#1e3a6e] py-10 md:py-14"
        aria-labelledby="about-hero-heading"
      >
        <header className="mx-auto max-w-7xl px-6 lg:pt-2 font-sora ">
          <motion.p
            variants={slideFromRight}
            className="inline-block px-4 mb-4 text-sm font-extrabold tracking-wider text-amberGold rounded-full font-sans"
          >
            About Us
          </motion.p>

          <motion.h1
            variants={slideFromLeft}
            id="about-hero-heading"
            className=" text-4xl lg:text-5xl font-extrabold leading-[1.06] tracking-tight text-white font-sora text-center"
          >
            Most technology vendors hand over a deliverable and disappear, we
            don&apos;t.
          </motion.h1>

          <motion.p
            variants={slideFromLeft}
            className="mt-6  text-base lg:text-lg leading-8 text-slate-300 font-sans font-semibold text-center"
          >
            ProLaunch Technologies is the cloud computing and enterprise
            technology arm of ProLaunch Group. We stay accountable long after
            go-live because we measure our success by what changes for your
            business, not just what we delivered. We help growing SMEs,
            modernizing enterprises, and ambitious startups across Africa and
            globally build, automate, and secure the digital foundations they
            need to scale.
          </motion.p>
        </header>
      </section>
    </StaggerContainer>
  );
}
