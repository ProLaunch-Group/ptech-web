'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { slideFromLeft, fadeUp } from '@/libs/motion-variants';

export default function AboutUsHero() {
  return (
    <StaggerContainer>
      <section
        className="bg-deepNavy dark:bg-[#060f1f] py-16 md:py-24 text-white relative overflow-hidden transition-colors duration-300"
        aria-labelledby="about-hero-heading"
      >
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <header className="max-w-4xl mx-auto text-center font-sora mb-12">
            <motion.span
              variants={slideFromLeft}
              className="inline-block text-amberGold font-sans text-xs font-bold uppercase tracking-widest mb-4 px-3.5 py-1.5 rounded-full bg-amberGold/10 border border-amberGold/30"
            >
              Enterprise Cloud & Infrastructure Precision
            </motion.span>

            <motion.h1
              variants={slideFromLeft}
              id="about-hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white font-sora"
            >
              Most technology vendors hand over a deliverable and disappear — we
              don&apos;t.
            </motion.h1>

            <motion.p
              variants={slideFromLeft}
              className="mt-6 text-base lg:text-lg leading-relaxed text-slate-200 font-sans font-medium max-w-3xl mx-auto"
            >
              ProLaunch Technologies is the cloud computing and enterprise
              technology arm of ProLaunch Group. We stay accountable long after
              go-live because we measure our success by what changes for your
              business. We help growing SMEs, modernizing enterprises, and
              ambitious startups across Africa and globally build, automate, and
              secure their digital foundations.
            </motion.p>
          </header>

          {/* Cloud Server Migration Illustration Banner */}
          <motion.div
            variants={fadeUp}
            className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
          >
            <Image
              src="/images/enterprise-cloud-migration.jpg"
              alt="Enterprise Cloud Server Migration Illustration"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="max-w-md">
                <p className="text-amberGold text-xs font-sans font-bold uppercase tracking-wider">
                  Cloud Migration & Transformation
                </p>
                <p className="text-white font-sora font-extrabold text-xl md:text-2xl mt-1">
                  Resilient Enterprise Scale
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </StaggerContainer>
  );
}
