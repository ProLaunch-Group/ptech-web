'use client';

import { metrics, services } from '@/constants/constants';
import { whileInViewProps } from '@/libs/motion-variants';
import { motion } from 'framer-motion';

export default function HeroCard() {
  return (
    <motion.article
      {...whileInViewProps}
      initial={{ opacity: 0, scale: 0.95, x: 80 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-[#000000] rounded-2xl p-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2E7BF7]/40 to-transparent" />

      {/* Header Info */}
      <header className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[#94A3B8] text-xs font-sans font-medium uppercase tracking-wider mb-1">
            Infrastructure Health
          </p>
          <p className="text-white font-sans font-bold text-xl">
            All Systems Operational
          </p>
        </div>
        <span className="flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] px-3 py-1.5 rounded-full text-xs font-semibold font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          99.98% Uptime
        </span>
      </header>

      {/* Grid List Metrics */}
      <ul className="grid grid-cols-3 gap-3 mb-5">
        {metrics.map((m, i) => (
          <li
            key={i}
            className="bg-card rounded-xl font-sora p-3.5 border border-white/5 flex flex-col justify-between"
          >
            <span className="text-[10px] font-semibold text-[#10B981] text-right">
              {m.change}
            </span>
            <p className="text-[#000000] font-bold text-lg leading-none mt-1">
              {m.value}
            </p>
            <p className="text-[#000000] font-sans font-semibold text-[10px] mt-1">
              {m.label}
            </p>
          </li>
        ))}
      </ul>

      {/* Chart Preview */}
      <div className="mb-5">
        <p className="text-[#94A3B8] text-xs mb-3 font-sans">
          Deployment Activity — Last 7 days
        </p>
        <div className="flex items-end gap-1.5 h-14">
          {[40, 65, 48, 80, 55, 92, 70].map((h, i) => (
            <motion.div
              key={i}
              {...whileInViewProps}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              style={{
                height: `${h}%`,
                transformOrigin: 'bottom',
                background:
                  i === 5
                    ? 'linear-gradient(to top, #2E7BF7, #1E3A6E)'
                    : 'rgba(46,123,247,0.2)',
                borderRadius: '3px 3px 2px 2px',
                flex: 1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Dynamic Services Stack */}
      <ul className="space-y-3">
        {services.map((s, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#CBD5E1] text-xs font-sans">
                  {s.name}
                </span>
                <span className="text-[#94A3B8] text-[10px]">
                  {s.progress}%
                </span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  {...whileInViewProps}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.progress}%` }}
                  transition={{
                    delay: 0.4 + i * 0.15,
                    duration: 0.8,
                    ease: 'easeOut',
                  }}
                  style={{
                    background:
                      s.progress === 100
                        ? 'linear-gradient(90deg, #10B981, #06B6D4)'
                        : 'linear-gradient(90deg, #0A84FF, #06B6D4)',
                  }}
                />
              </div>
            </div>
            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                s.status === 'Complete'
                  ? 'bg-[#10B981]/15 text-[#10B981]'
                  : s.status === 'Active'
                    ? 'bg-[#0A84FF]/15 text-electricBlue'
                    : 'bg-[#F59E0B]/15 text-amberGold'
              }`}
            >
              {s.status}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
