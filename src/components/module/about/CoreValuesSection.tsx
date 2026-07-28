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
        className="py-10 lg:py-14 "
        aria-labelledby="principles-heading "
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            title="Core Values"
            subtitle="What we stand for."
            variant="secondary"
          />

          <ul
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {principles.map((item) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                {...whileInViewProps}
                className="list-none"
              >
                <article className="h-full group rounded-2xl border-l-4 border-[#0a84ff] bg-white p-8 transition-all duration-200 shadow-sm  hover:-translate-y-1">
                  <item.icon
                    className="mb-5 text-electricBlue/50 group-hover:text-amberGold"
                    size={40}
                  />

                  <h3 className="text-xl font-bold font-sora text-deepNavy">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 font-sans font-normal">
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
