'use client';

import { ArrowRight } from 'lucide-react';
import { useAIQualifier } from '@/contextApi/AIQualifierContext';
import { ServiceItemProps } from '@/types/service.types';
import {
  fadeUp,
  slideFromRight,
  whileInViewProps,
} from '@/libs/motion-variants';
import { motion } from 'framer-motion';

export default function ServiceCard({
  number,
  title,
  descriptions,
  gains,
  tagline,
  ctaText,
  isEven = false,
}: ServiceItemProps) {
  const { openAIQualifier } = useAIQualifier();

  return (
    <motion.article
      variants={fadeUp}
      {...whileInViewProps}
      className={`py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 last:border-b-0 transition-colors duration-300 ${
        isEven
          ? 'bg-slate-50/70 dark:bg-[#07152b]'
          : 'bg-white dark:bg-[#040b17]'
      }`}
      aria-labelledby={`service-title-${number.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24">
        {/* Eyebrow / Service Number */}
        <span
          className="text-xs md:text-sm font-bold tracking-wider text-amberGold uppercase mb-2 block font-sora"
          aria-label={`Service identifier: ${number}`}
        >
          {number}
        </span>

        {/* Service Title */}
        <h2
          id={`service-title-${number.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-sora tracking-tight mb-6"
        >
          {title}
        </h2>

        {/* Description Paragraphs */}
        <div className="space-y-4 mb-8 max-w-4xl">
          {descriptions.map((paragraph, index) => (
            <p
              key={index}
              className="font-sans text-slate-700 dark:text-slate-200 text-base md:text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* What You Gain Table Card */}
        <div
          className="mb-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm max-w-4xl"
          role="region"
          aria-label={`Benefits and key gains for ${title}`}
        >
          {/* Table Header */}
          <div className="bg-electricBlue dark:bg-slate-900 px-6 py-4 flex items-center gap-2 border-b border-slate-700/50">
            <h3 className="text-sm font-bold font-sora text-white uppercase tracking-wider">
              WHAT YOU GAIN
            </h3>
          </div>

          {/* Table Rows List */}
          <ul
            className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-950"
            aria-label={`List of gains for ${title}`}
          >
            {gains.map((gain, index) => (
              <li
                key={index}
                className="px-6 py-3.5 flex items-center gap-3 text-slate-800 dark:text-slate-200 text-sm md:text-base font-sans hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
              >
                <span
                  className="text-amberGold font-bold text-lg select-none shrink-0"
                  aria-hidden="true"
                >
                  →
                </span>
                <span className="font-sans">{gain}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tagline Punchline */}
        <p className="font-sora font-bold text-base md:text-lg text-amberGold mb-8">
          {tagline}
        </p>

        {/* Trigger CTA Button */}
        <motion.button
          {...whileInViewProps}
          variants={slideFromRight}
          onClick={openAIQualifier}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-electricBlue hover:bg-amberGold text-white font-sora font-semibold text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          aria-label={`${ctaText} via AI Qualifier Assistant`}
        >
          <span>{ctaText}</span>
          <ArrowRight
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            aria-hidden="true"
          />
        </motion.button>
      </div>
    </motion.article>
  );
}
