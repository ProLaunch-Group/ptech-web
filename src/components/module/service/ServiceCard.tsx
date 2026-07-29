'use client';

import { ArrowRight } from 'lucide-react';
import { useAIQualifier } from '@/contextApi/AIQualifierContext';
import { ServiceItemProps } from '@/types/service.types';
import { fadeUp, whileInViewProps } from '@/libs/motion-variants';
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
      className={`py-16 md:py-20 border-b border-slate-200/80 last:border-b-0 ${
        isEven ? 'bg-[#e8f3ff]' : 'bg-white'
      }`}
      aria-labelledby={`service-title-${number.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Eyebrow / Service Number */}
        <span
          className="text-xs md:text-sm font-bold tracking-wider text-[#f5a623] uppercase mb-2 block font-sora"
          aria-label={`Service identifier: ${number}`}
        >
          {number}
        </span>

        {/* Service Title */}
        <h2
          id={`service-title-${number.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a6e] font-sora tracking-tight mb-6"
        >
          {title}
        </h2>

        {/* Description Paragraphs */}
        <div className="space-y-4 mb-8">
          {descriptions.map((paragraph, index) => (
            <p
              key={index}
              className="font-sans text-slate-700 text-base md:text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* What You Gain Table Card */}
        <div
          className="mb-8 rounded-xl overflow-hidden border border-slate-200 shadow-sm"
          role="region"
          aria-label={`Benefits and key gains for ${title}`}
        >
          {/* Table Header */}
          <div className="bg-[#1e3a6e] px-6 py-4 flex items-center gap-2">
            <h3 className="text-sm font-bold font-sora text-white uppercase tracking-wider">
              WHAT YOU GAIN
            </h3>
          </div>

          {/* Table Rows List */}
          <ul
            className="divide-y divide-slate-200/70 bg-white"
            aria-label={`List of gains for ${title}`}
          >
            {gains.map((gain, index) => (
              <li
                key={index}
                className="px-6 py-3.5 flex items-center gap-3 text-slate-800 text-sm md:text-base font-sans bg-slate-50/40 hover:bg-slate-50 transition-colors"
              >
                <span
                  className="text-[#f5a623] font-bold text-lg select-none"
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
        <p className="font-sora font-bold text-base md:text-lg text-[#f5a623] mb-8">
          {tagline}
        </p>

        {/* Trigger CTA Button */}
        <button
          onClick={openAIQualifier}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1e3a6e] hover:bg-[#f5a623] text-white font-sora font-semibold text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
          aria-label={`${ctaText} via AI Qualifier Assistant`}
        >
          <span>{ctaText}</span>
          <ArrowRight
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            aria-hidden="true"
          />
        </button>
      </div>
    </motion.article>
  );
}
