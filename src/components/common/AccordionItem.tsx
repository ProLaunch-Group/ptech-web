'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { AccordionItemProps } from '@/types/service.types';
import { fadeUp, whileInViewProps } from '@/libs/motion-variants';

export function AccordionItem({
  title,
  description,
  isOpen,
  onToggle,
  icon,
}: AccordionItemProps) {
  return (
    <motion.li
      layout
      variants={fadeUp}
      {...whileInViewProps}
      className="border border-[#1e3a6e] bg-white rounded-2xl sm:rounded-3xl transition-colors overflow-hidden"
    >
      {/* Header Row (Clickable) */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4.5 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3.5 sm:gap-4">
          {/* Optional Icon */}
          {icon && (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50">
              {icon}
            </span>
          )}

          {/* Title */}
          <span className="text-sm sm:text-base font-bold font-sans leading-normal text-slate-800">
            {title}
          </span>
        </div>

        {/* Dynamic Plus/Minus Toggle Icon */}
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <Minus className="h-4 w-4 text-deepNavy hover:text-amberGold" />
            ) : (
              <Plus className="h-4 w-4 text-deepNavy hover:text-amberGold" />
            )}
          </motion.div>
        </span>
      </button>

      {/* Expandable Body Content */}
      <AnimatePresence initial={true}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 font-sans leading-relaxed border-t border-slate-100/80">
              {description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
