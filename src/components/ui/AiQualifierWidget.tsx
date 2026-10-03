'use client';

import React, { useState, useEffect } from 'react';
import { X, Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  scaleIn,
  slideFromLeft,
  whileInViewProps,
} from '@/libs/motion-variants';
import { useAIQualifier } from '@/contextApi/AIQualifierContext';

export default function AiQualifierWidget() {
  const [loadWidgetButton] = useState<boolean>(true);
  const [isRinging, setIsRinging] = useState<boolean>(false);
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);

  const { openWidget, openAIQualifier, closeAIQualifier } = useAIQualifier();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAIQualifier();
      }
    };

    if (openWidget) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openWidget, closeAIQualifier]);

  // Helper function: Fires the sound AND the visual scale/bounce animation
  const triggerAttentionChime = () => {
    setIsRinging(true);
    setTimeout(() => setIsRinging(false), 800);

    const audio = new Audio('/Sounds/notification.wav');
    audio.volume = 0.3;
    audio.load();
    return audio.play();
  };

  // Sound and attention pulse listener after 3.5 seconds
  useEffect(() => {
    const timerWidget = setTimeout(() => {
      triggerAttentionChime().catch(() => {
        // Fallback: If blocked by browser autoplay policy, trigger on first user gesture
        const playOnFirstInteraction = () => {
          triggerAttentionChime().catch(() => {});

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
    }, 3500);

    return () => clearTimeout(timerWidget);
  }, []);

  const handleToggleWidget = () => {
    if (openWidget) {
      closeAIQualifier();
    } else {
      openAIQualifier();
    }
  };

  return (
    <>
      {/* Main Floating Container (Bottom Right) */}
      <section className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
        {/* 1. Expanded Floating Card Drawer */}
        {openWidget && (
          <motion.section
            {...whileInViewProps}
            variants={slideFromLeft}
            className="pointer-events-auto mb-4 w-[calc(100vw-3rem)] sm:w-[420px] h-[550px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 border border-slate-200 dark:border-slate-800"
          >
            {/* Header */}
            <div className="bg-[#1e3a6e] px-5 py-4 flex items-center justify-between border-b border-white/10 text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center animate-bounce">
                  <Bot className="w-4 h-4 text-[#f5a623]" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-sora text-white leading-none flex items-center gap-1.5">
                    ProLaunch AI Assistant
                  </h4>
                  <p className="text-[11px] font-sans text-slate-300 mt-1">
                    Answer a few quick questions to scope your project.
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={closeAIQualifier}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close AI Assistant drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chatbot Body */}
            <div className="flex-1 w-full bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 z-10 gap-3">
                  <div className="w-8 h-8 border-3 border-electricBlue border-t-transparent rounded-full animate-spin" />
                  <p className="text-xs font-sans text-slate-500 dark:text-slate-400">
                    Connecting to ProLaunch AI Assistant...
                  </p>
                </div>
              )}
              <iframe
                src="https://interfaces.zapier.com/embed/chatbot/cms7h5icz004djyt1a0nluv0a"
                className="w-full h-full border-0"
                allow="clipboard-write"
                title="ProLaunch AI Assistant"
                onLoad={() => setIframeLoading(false)}
              />
            </div>
          </motion.section>
        )}

        {/* Floating Action Trigger Button (FAB) */}
        {loadWidgetButton && (
          <motion.button
            variants={scaleIn}
            {...whileInViewProps}
            onClick={handleToggleWidget}
            className={`pointer-events-auto flex items-center gap-1.5 md:gap-2.5 px-3 md:px-5 py-2.5 md:py-3.5 bg-[#1e3a6e] hover:bg-[#f5a623] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#f5a623]/30 ${
              isRinging
                ? 'scale-110 -translate-y-2 ring-4 ring-[#f5a623]/50 ring-offset-2 shadow-[#f5a623]/20'
                : 'scale-100 translate-y-0'
            }`}
            aria-label={openWidget ? 'Close AI Qualifier' : 'Open AI Qualifier'}
          >
            <Bot
              className={`w-5 h-5 text-[#f5a623] group-hover:rotate-12 group-hover:text-[#1e3a6e] transition-transform duration-300 ${
                isRinging ? 'animate-bounce' : ''
              }`}
            />
            <span className="font-sora font-semibold text-xs md:text-sm tracking-tight">
              {openWidget ? 'Close Qualifier' : 'AI Qualifier'}
            </span>
          </motion.button>
        )}
      </section>
    </>
  );
}
