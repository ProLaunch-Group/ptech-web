'use client';

import { useState, useEffect, useCallback } from 'react';
import Script from 'next/script';
import { X, Bot } from 'lucide-react';
import FormSkeleton from './FormSkeleton';
import { motion } from 'framer-motion';
import {
  scaleIn,
  slideFromLeft,
  whileInViewProps,
} from '@/libs/motion-variants';

export default function AiQualifierWidget() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loadWidgetButton, setLoadWidgetButton] = useState<boolean>(false);
  const [formLoading, setIsFormLoading] = useState<boolean>(true);

  // State to trigger the visual attention animation on the button
  const [isRinging, setIsRinging] = useState<boolean>(false);

  interface TallyWindow {
    Tally?: {
      loadEmbeds: () => void;
    };
  }

  const initializeTally = useCallback(() => {
    if (typeof window !== 'undefined') {
      const tallyWin = window as unknown as TallyWindow;
      tallyWin.Tally?.loadEmbeds();
    }
  }, []);

  // Re-initialize Tally whenever the user clicks to open the modal
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        initializeTally();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isOpen, initializeTally]);

  // Helper function: Fires the sound AND the visual scale/bounce animation simultaneously
  const triggerAttentionChime = () => {
    setIsRinging(true);
    setTimeout(() => setIsRinging(false), 800);

    const audio = new Audio('/Sounds/notification.wav');
    audio.volume = 0.3;
    audio.load();
    return audio.play();
  };

  useEffect(() => {
    const timerWidget = setTimeout(() => {
      setLoadWidgetButton(true);

      triggerAttentionChime().catch(() => {
        // Fallback: If blocked, listen for the user's first interaction
        const playOnFirstInteraction = () => {
          triggerAttentionChime().catch(() => {});

          // Clean up listeners so it only triggers ONCE
          window.removeEventListener('pointerdown', playOnFirstInteraction);
          window.removeEventListener('mousemove', playOnFirstInteraction);
          window.removeEventListener('scroll', playOnFirstInteraction);
        };

        window.addEventListener('pointerdown', playOnFirstInteraction, {
          once: true,
        });
        window.addEventListener('mousemove', playOnFirstInteraction, {
          once: true,
        });
        window.addEventListener('scroll', playOnFirstInteraction, {
          once: true,
        });
      });
    }, 9000);

    return () => clearTimeout(timerWidget);
  }, []);

  function handleClick() {
    setIsOpen(!isOpen);
    setIsFormLoading(true);
  }

  if (!loadWidgetButton) return null;

  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={initializeTally}
      />

      {/* Main Floating Widget Container */}
      <section className="fixed bottom-20 right-6 z-50 flex flex-col items-end pointer-events-none">
        {/* Widget Expanded Modal Card */}

        {isOpen && (
          <motion.section
            {...whileInViewProps}
            variants={slideFromLeft}
            className="pointer-events-auto mb-4 w-[calc(100vw-3rem)] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
          >
            {/* Widget Card Header */}
            <div className="bg-deepNavy px-5 py-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full  flex items-center justify-center animate-bounce">
                  <Bot className="w-4 h-4 text-amberGold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-sora text-white leading-none">
                    AI Service Qualifier
                  </h4>
                  <p className="text-[11px] font-sans text-slate-300 mt-1">
                    Lets explore what we can build together for your business.
                    Answer a few questions and we&apos;ll get back to you with a
                    tailored solution.
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close AI Qualifier form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Widget iFrame Container */}
            <div className="flex-1 w-full bg-white relative">
              {formLoading && <FormSkeleton />}

              <iframe
                data-tally-src="https://tally.so/r/NpyPpp?transparentBackground=3"
                width="100%"
                height="100%"
                frameBorder="0"
                title="AI Qualifier Form"
                className="w-full h-full border-0"
                onLoad={() => setIsFormLoading(false)}
              />
            </div>
          </motion.section>
        )}

        {/* Floating Action Trigger Button (FAB) */}
        {loadWidgetButton && (
          <motion.button
            variants={scaleIn}
            {...whileInViewProps}
            onClick={() => handleClick()}
            className={`pointer-events-auto flex items-center gap-1.5 md:gap-2.5 px-2 md:px-5  py-2 md:py-3.5 bg-[#1e3a6e] hover:bg-[#f5a623] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#f5a623]/30 ${
              isRinging
                ? 'scale-110 -translate-y-2 ring-4 ring-[#f5a623]/50 ring-offset-2 shadow-[#f5a623]/20'
                : 'scale-100 translate-y-0'
            }`}
            aria-label={isOpen ? 'Close AI Qualifier' : 'Open AI Qualifier'}
          >
            <Bot
              className={`w-5 h-5 text-amberGold group-hover:rotate-12 group-hover:text-deepNavy transition-transform duration-300 ${isRinging ? 'animate-bounce' : ''}`}
            />
            <span className="font-sora font-semibold text-xs md:text-sm tracking-tight">
              {isOpen ? 'Close Qualifier' : 'AI Qualifier'}
            </span>
          </motion.button>
        )}
      </section>
    </>
  );
}
