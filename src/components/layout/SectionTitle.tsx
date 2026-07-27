'use client';

import { SectionTitleProps } from '@/types/service.types';
import { StaggerContainer } from '../animation/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUp, moveLine } from '@/libs/motion-variants';

const SectionTitle = ({
  title,
  subtitle,
  description,
  className,
}: SectionTitleProps) => {
  return (
    <StaggerContainer>
      <section className="flex flex-col gap-3 mb-5 ">
        <article className="max-w-7xl px-4 sm:px-6 flex flex-col gap-1.5 ml-2 lg:ml-15">
          <motion.div
            variants={moveLine}
            className="w-12 h-1 mb-3 bg-[#f5a623] rounded-full"
          />

          <motion.h2
            variants={fadeUp}
            className={`text-3xl md:text-4xl font-bold tracking-tight text-white font-sora ${className}`}
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.h3
              variants={fadeUp}
              className="text-xl font-semibold text-white font-sans"
            >
              {subtitle}
            </motion.h3>
          )}
          {description && (
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-gray-700  leading-relaxed font-sans"
            >
              {description}
            </motion.p>
          )}
        </article>
      </section>
    </StaggerContainer>
  );
};

export default SectionTitle;
