'use client';

import Image from 'next/image';
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
      className="bg-slate-900 dark:bg-[#091428] rounded-2xl p-6 shadow-[0_24px_80px_rgba(2,12,24,0.5)] border border-slate-800 relative overflow-hidden text-white"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#0a84ff]/50 to-transparent" />

      {/* Cloud Server Header Illustration Banner */}
      <div className="relative w-full h-36 mb-5 rounded-xl overflow-hidden border border-slate-700/60 shadow-inner group">
        <Image
          src="/images/cloud-server-infrastructure.jpg"
          alt="Cloud Server Datacenter Infrastructure"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-sans uppercase font-bold text-amberGold tracking-wider">
              Cloud Infrastructure
            </p>
            <p className="text-white font-sora font-bold text-sm drop-shadow-sm">
              Datacenter & Server Clusters
            </p>
          </div>
          <span className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-2.5 py-1 rounded-full text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Active
          </span>
        </div>
      </div>

      {/* Metrics List */}
      <ul className="grid grid-cols-3 gap-3 mb-5">
        {metrics.map((m, i) => (
          <li
            key={i}
            className="bg-slate-800/80 dark:bg-slate-900/80 rounded-xl font-sora p-3 border border-slate-700/60 flex flex-col justify-between"
          >
            <span className="text-[10px] font-semibold text-emerald-400 text-right">
              {m.change}
            </span>
            <p className="text-white font-bold text-base md:text-lg leading-none mt-1">
              {m.value}
            </p>
            <p className="text-slate-300 font-sans font-medium text-[10px] mt-1">
              {m.label}
            </p>
          </li>
        ))}
      </ul>

      {/* Chart Preview */}
      <div className="mb-5">
        <p className="text-slate-300 text-xs mb-2 font-sans font-medium">
          Deployment Activity — Last 7 days
        </p>
        <div className="flex items-end gap-1.5 h-12">
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
                    ? 'linear-gradient(to top, #0a84ff, #1e3a6e)'
                    : 'rgba(10,132,255,0.3)',
                borderRadius: '3px 3px 2px 2px',
                flex: 1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Dynamic Services Stack */}
      <ul className="space-y-2.5">
        {services.map((s, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-slate-200 text-xs font-sans">
                  {s.name}
                </span>
                <span className="text-slate-400 text-[10px]">
                  {s.progress}%
                </span>
              </div>
              <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
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
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : s.status === 'Active'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-amber-500/20 text-amber-400'
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
