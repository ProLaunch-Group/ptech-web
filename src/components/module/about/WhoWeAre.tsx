'use client';

import Image from 'next/image';
import MissionCards from '@/components/module/about/MissionCards';
import { motion } from 'framer-motion';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { fadeUp, slideFromLeft } from '@/libs/motion-variants';
import SectionTitle from '@/components/layout/SectionTitle';

export default function WhoWeAre() {
  return (
    <StaggerContainer>
      <section
        className="py-16 md:py-24 bg-background transition-colors duration-300"
        aria-labelledby="story-heading"
      >
        <header className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <article>
              <SectionTitle
                title="Who We Are"
                subtitle="Engineering trust into every layer of your business"
                variant="secondary"
              />

              <motion.p
                variants={slideFromLeft}
                className="mt-6 leading-relaxed text-base lg:text-lg text-slate-700 dark:text-slate-200 font-sans font-medium"
              >
                Founded to solve real-world engineering challenges, ProLaunch
                Technologies partners with businesses to build scalable
                software, improve operational efficiency and create digital
                experiences that deliver measurable value.
              </motion.p>

              <motion.p
                variants={slideFromLeft}
                className="mt-4 leading-relaxed text-slate-700 dark:text-slate-200 text-base lg:text-lg font-sans font-medium"
              >
                Every engagement is guided by technical excellence, transparency
                and long-term collaboration.
              </motion.p>
            </article>

            <motion.figure variants={fadeUp} className="m-0">
              <Image
                src="/About/WhoWeAre-image/about-culture.png"
                alt="Our team collaborating on a technology solution"
                width={700}
                height={500}
                loading="eager"
                className="rounded-3xl object-cover shadow-xl border border-slate-200 dark:border-slate-800"
              />
            </motion.figure>
          </div>
        </header>
        <MissionCards />
      </section>
    </StaggerContainer>
  );
}
