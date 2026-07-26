'use client';

import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { principles } from '@/constants/service';
import { motion } from 'framer-motion';

import { fadeUp } from '@/libs/motion-variants';
import SectionTitle from '@/components/layout/SectionTitle';

export default function CoreValueSection() {
  return (
    <StaggerContainer>
      <section
        className="py-10 lg:py14"
        aria-labelledby="principles-heading border-2 border-black"
      >
        <SectionTitle title="Core Values" subtitle="What we stand for." />

        <div className="mx-auto max-w-7xl px-6">
          <ul
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {principles.map((item) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className="list-none"
              >
                <article className="h-full rounded-2xl border border-slate-300 bg-white p-8 transition-all duration-200 shadow-sm hover:shadow-[#f5a623] hover:-translate-y-1">
                  <item.icon className="mb-5 text-amberGold/50" size={40} />

                  <h3 className="text-xl font-bold font-sora text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 font-sans font-semibold">
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
