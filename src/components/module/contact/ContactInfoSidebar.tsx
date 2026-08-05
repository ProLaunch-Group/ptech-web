'use client';

import { fadeUp, whileInViewProps } from '@/libs/motion-variants';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';

export function ContactInfoSidebar() {
  return (
    <div className="flex flex-col gap-8">
      {/* Eyebrow Label */}
      <motion.span
        variants={fadeUp}
        {...whileInViewProps}
        className="text-xs font-bold uppercase tracking-widest text-amberGold"
      >
        GET IN TOUCH
      </motion.span>

      <h3 className="text-xl font-bold font-sora text-slate-900 dark:text-white">
        Contact Information
      </h3>

      <div className="flex flex-col gap-6">
        {/* Email */}
        <motion.div
          variants={fadeUp}
          {...whileInViewProps}
          className="flex items-start gap-4"
        >
          <div className="p-2.5 rounded-lg bg-lightBlue dark:bg-slate-800 text-electricBlue dark:text-amberGold mt-1 shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-sora">
              EMAIL
            </h4>
            <a
              href="mailto:tech@prolaunchgroup.org"
              aria-label="Send email to tech@prolaunchgroup.org"
              className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-amberGold dark:hover:text-amberGold transition-colors mt-0.5 block font-sans"
            >
              tech@prolaunchgroup.org
            </a>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          variants={fadeUp}
          {...whileInViewProps}
          className="flex items-start gap-4"
        >
          <div className="p-2.5 rounded-lg bg-lightBlue dark:bg-slate-800 text-electricBlue dark:text-amberGold mt-1 shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-sora">
              PHONE
            </h4>
            <a
              href="tel:+2348154563245"
              className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-amberGold transition-colors mt-0.5 block font-sans"
            >
              +234 8154 563 245
            </a>
          </div>
        </motion.div>

        {/* Business Hours */}
        <motion.div
          variants={fadeUp}
          {...whileInViewProps}
          className="flex items-start gap-4"
        >
          <div className="p-2.5 rounded-lg bg-lightBlue dark:bg-slate-800 text-electricBlue dark:text-amberGold mt-1 shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-sora">
              BUSINESS HOURS
            </h4>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-0.5 font-sans">
              Monday – Friday | 8:00 AM – 5:00 PM WAT
            </p>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          variants={fadeUp}
          {...whileInViewProps}
          className="flex items-start gap-4"
        >
          <div className="p-2.5 rounded-lg bg-lightBlue dark:bg-slate-800 text-electricBlue dark:text-amberGold mt-1 shrink-0">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-sora">
              SOCIAL MEDIA
            </h4>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-0.5 font-sans">
              LinkedIn · Instagram · Twitter / X · Facebook
            </p>
          </div>
        </motion.div>

        {/* Office */}
        <motion.div
          variants={fadeUp}
          {...whileInViewProps}
          className="flex items-start gap-4"
        >
          <div className="p-2.5 rounded-lg bg-lightBlue dark:bg-slate-800 text-electricBlue dark:text-amberGold mt-1 shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-sora">
              LOCATION
            </h4>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-0.5 font-sans">
              Abuja, Nigeria
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
