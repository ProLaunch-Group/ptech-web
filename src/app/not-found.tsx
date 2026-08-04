'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Terminal } from 'lucide-react';
import { fadeUp, scaleIn, whileInViewProps } from '@/libs/motion-variants';

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#0a192f] text-white flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Glow Highlights */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#0a84ff]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-72 h-72 bg-[#f5a623]/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-xl w-full text-center relative z-10 py-12">
        {/* Animated 404 Graphic Badge */}
        <motion.div
          variants={scaleIn}
          {...whileInViewProps}
          className="inline-flex items-center justify-center p-4 rounded-3xl bg-[#1e3a6e]/60 border border-[#0a84ff]/30 shadow-xl mb-6 backdrop-blur-md"
        >
          <div className="flex items-center gap-3 px-3 py-1 bg-[#1e3a6e] rounded-2xl border border-white/10">
            <Terminal className="w-5 h-5 text-[#f5a623]" />
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#e8f3ff]">
              ERROR_CODE: 404_NOT_FOUND
            </span>
          </div>
        </motion.div>

        {/* Big Animated 404 Text */}
        <motion.h1
          variants={fadeUp}
          {...whileInViewProps}
          className="text-7xl sm:text-9xl font-extrabold font-sora tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e8f3ff] to-[#0a84ff] drop-shadow-sm"
        >
          404
        </motion.h1>

        {/* Subtitle & Explanation */}
        <motion.div
          variants={fadeUp}
          {...whileInViewProps}
          className="mt-4 space-y-3"
        >
          <h2 className="text-xl sm:text-3xl font-bold font-sora text-white">
            Page missing or offline.
          </h2>
          <p className="text-slate-300 font-sans text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            The page you are looking for doesn&apos;t exist, has been moved, or
            is temporarily unavailable.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={fadeUp}
          {...whileInViewProps}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          {/* Primary CTA: Back to Home */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#f5a623] hover:bg-[#f5a623]/90 text-[#1e3a6e] font-sora font-bold text-sm rounded-full shadow-lg shadow-[#f5a623]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>

          {/* Secondary CTA: Go Back standard browser trigger */}
          <button
            onClick={() => window.history.back()}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1e3a6e] hover:bg-[#1e3a6e]/80 text-white font-sora font-semibold text-sm rounded-full border border-white/10 hover:border-[#0a84ff]/40 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 text-[#e8f3ff]" />
            <span>Go Back</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
