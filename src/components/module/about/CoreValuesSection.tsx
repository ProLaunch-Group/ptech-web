'use client';

import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { principles } from '@/constants/service';
import { motion } from 'framer-motion';
import { fadeUp, whileInViewProps } from '@/libs/motion-variants';
import SectionTitle from '@/components/layout/SectionTitle';

export default function CoreValueSection() {
  return (
    <StaggerContainer>
      <section
        className="py-16 md:py-24 bg-slate-50/60 dark:bg-[#071122]/60 transition-colors duration-300"
        aria-labelledby="principles-heading"
      >
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24">
          <SectionTitle
            title="Core Values"
            subtitle="What we stand for."
            variant="secondary"
          />

          <ul
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {principles.map((item) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                {...whileInViewProps}
                className="list-none"
              >
                <article className="h-full group rounded-2xl border-l-4 border-electricBlue bg-white dark:bg-slate-900/90 p-8 transition-all duration-300 shadow-sm border-y border-r border-slate-200/80 dark:border-slate-800 hover:-translate-y-1 hover:shadow-md">
                  <item.icon
                    className="mb-5 text-electricBlue group-hover:text-amberGold transition-colors"
                    size={40}
                  />

                  <h3 className="text-xl font-bold font-sora text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300 font-sans font-normal">
                    {item.description}
                  </p>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </StaggerContainer>
  );
}
