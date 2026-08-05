'use client';

import { ChallengeCardProps } from '@/types/service.types';
import { motion } from 'framer-motion';
import { fadeUp2, whileInViewProps } from '@/libs/motion-variants';

export default function ChallengeCard({ item }: ChallengeCardProps) {
  return (
    <motion.li
      variants={fadeUp2}
      {...whileInViewProps}
      className="w-full p-6 md:p-8 bg-white dark:bg-slate-900/90 border-l-4 border-amberGold rounded-3xl border-y border-r border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Badge */}
        <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/70 border border-amber-300/40 rounded-full font-sans mb-4">
          {item.audience}
        </span>

        {/* Card Title */}
        {item.title && (
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white font-sora mb-3 tracking-tight">
            {item.title}
          </h3>
        )}

        {/* Card Body Text */}
        <p className="text-sm md:text-base font-normal text-slate-700 dark:text-slate-200 font-sans leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.li>
  );
}
