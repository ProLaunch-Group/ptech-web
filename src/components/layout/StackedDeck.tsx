'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slideFromRight, whileInViewProps } from '@/libs/motion-variants';

interface StackedDeckProps<T> {
  items: T[];
  renderCard: (item: T, index: number) => React.ReactNode;
}

export function StackedDeck<T>({ items, renderCard }: StackedDeckProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = items.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  return (
    <motion.div
      variants={slideFromRight}
      {...whileInViewProps}
      className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 mt-12"
    >
      {/* The Card Stack Container */}
      <div className="relative w-full h-95 sm:h-80 flex items-center justify-center">
        {items.map((item, index) => {
          const offset = (index - currentIndex + total) % total;
          const isVisible = offset < 3;

          if (!isVisible) return null;

          const translateY = offset * 14;
          const scale = 1 - offset * 0.05;
          const zIndex = total - offset;
          const opacity = offset === 0 ? 1 : 0.7 - offset * 0.15;

          return (
            <motion.div
              key={index}
              style={{ zIndex }}
              animate={{
                y: translateY,
                scale: scale,
                opacity: opacity,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 25,
              }}
              className="absolute top-0 left-0 right-0 w-full mx-auto cursor-pointer"
            >
              {renderCard(item, index)}
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between w-full max-w-xs mt-16">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="p-3 rounded-full bg-white/10 text-amberGold hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-sm cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <span
              key={i}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-6 bg-amberGold' : 'w-2 bg-[#0a84ff]'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next testimonial"
          className="p-3 rounded-full bg-white/10 text-amberGold hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-sm cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  );
}
