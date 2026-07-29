'use client';

import { fadeUp, whileInViewProps } from '@/libs/motion-variants';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactInfoSidebar() {
  return (
    <div className="flex flex-col gap-8 text-white">
      {/* Eyebrow Label */}
      <motion.span
        variants={fadeUp}
        {...whileInViewProps}
        className="text-xs font-bold uppercase tracking-widest text-[#f5a623]"
      >
        Get In Touch
      </motion.span>

      <div className="flex flex-col gap-6">
        {/* Phone */}
        <motion.div
          variants={fadeUp}
          {...whileInViewProps}
          className="flex items-start gap-4"
        >
          <div className="p-2.5 rounded-lg bg-[#e8f3ff] text-deepNavy mt-1">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-deepNavy">Phone</h4>
            <p className="text-sm text-slate-700 mt-0.5">+234 803 180 5112</p>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          variants={fadeUp}
          {...whileInViewProps}
          className="flex items-start gap-4"
        >
          <div className="p-2.5 rounded-lg bg-[#e8f3ff] text-deepNavy mt-1">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-deepNavy">Email</h4>
            <a
              href="mailto:tech@prolaunchgroup.org"
              aria-label="Send email to tech@prolaunchgroup.org"
              className="text-sm text-slate-700 hover:text-[#f5a623] transition-colors underline mt-0.5 block"
            >
              tech@prolaunchgroup.org
            </a>
          </div>
        </motion.div>

        {/* Office */}
        <motion.div
          variants={fadeUp}
          {...whileInViewProps}
          className="flex items-start gap-4"
        >
          <div className="p-2.5 rounded-lg bg-[#e8f3ff] text-deepNavy mt-1">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-deepNavy">Office</h4>
            <p className="text-sm text-slate-700 mt-0.5">Abuja, Nigeria</p>
          </div>
        </motion.div>

        {/* Business Hours */}
        <motion.div
          variants={fadeUp}
          {...whileInViewProps}
          className="flex items-start gap-4"
        >
          <div className="p-2.5 rounded-lg bg-[#e8f3ff] text-deepNavy mt-1">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-deepNavy">
              Business Hours
            </h4>
            <p className="text-sm text-slate-700 mt-0.5">
              Mon – Fri, 8:00 AM – 5:00 PM
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
