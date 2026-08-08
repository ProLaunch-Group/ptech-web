'use client';

import Image from 'next/image';
import { logos } from '@/constants/constants';
import { motion } from 'framer-motion';
import { fadeUp, whileInViewProps } from '@/libs/motion-variants';

export default function TrustedBy() {
  return (
    <section className="border-y border-slate-200 dark:border-slate-800/80 py-8 bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24 mb-6">
        <motion.h2
          {...whileInViewProps}
          variants={fadeUp}
          className="font-sora font-semibold text-xs md:text-sm tracking-wider uppercase text-slate-500 dark:text-slate-400 text-center md:text-left"
        >
          Trusted by industry leaders in EdTech, FinTech, HealthTech, and SaaS.
        </motion.h2>
      </div>

      <div className="relative flex w-full overflow-x-hidden mask-[linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
        {/* The Continuous Scrolling Track */}
        <div className="flex gap-12 sm:gap-16 animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around">
          {/* Track 1 */}
          <ul className="flex items-center gap-12 sm:gap-16 shrink-0 list-none m-0 p-0">
            {logos.map((logo, index) => (
              <li
                key={`orig-${index}`}
                className="flex items-center justify-center shrink-0 h-12 px-2"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-10 w-auto object-contain opacity-70 dark:opacity-80 hover:opacity-100 dark:hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 dark:brightness-125 cursor-pointer"
                />
              </li>
            ))}
          </ul>

          {/* Track 2: Seamless Infinite Duplicate */}
          <ul
            className="flex items-center gap-12 sm:gap-16 shrink-0 list-none m-0 p-0"
            aria-hidden="true"
          >
            {logos.map((logo, index) => (
              <li
                key={`dup-${index}`}
                className="flex items-center justify-center shrink-0 h-12 px-2"
              >
                <Image
                  src={logo.src}
                  alt=""
                  width={logo.width}
                  height={logo.height}
                  className="max-h-10 w-auto object-contain opacity-70 dark:opacity-80 hover:opacity-100 dark:hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 dark:brightness-125 cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
