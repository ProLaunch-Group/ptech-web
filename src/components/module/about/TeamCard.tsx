'use client';

import { fadeUp2, whileInViewProps } from '@/libs/motion-variants';
import { motion } from 'framer-motion';
import { TeamMember } from '@/types/service.types';
import Image from 'next/image';

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={fadeUp2}
      {...whileInViewProps}
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-950 select-nonep-3 sm:p-4 border-2 border-zinc-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)_inset] ring-1 ring-zinc-800/80 transition-all duration-500 ease-out
                   hover:shadow-[0_30px_60px_rgba(16,185,129,0.15),0_0_25px_rgba(0,0,0,0.9)] hover:border-emerald-500/40"
    >
      {/* Picture Frame Window */}
      <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-900/90 shadow-[inset_0_4px_12px_rgba(0,0,0,0.7)]">
        {/*Photo Layer */}
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* / Reflection Effect  */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none z-10" />

        {/* Default Bottom Gradient & Names */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent transition-opacity duration-300 group-hover:opacity-0 z-20">
          <h3 className="text-xl font-bold text-white tracking-wide font-sora">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-amberGold font-sora mt-0.5">
            {member.role}
          </p>
        </div>

        {/*  Slide-Up Bio Overlay */}
        <div className="absolute inset-0 bg-[#1e3a6e]/10 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-30">
          <div className="space-y-3 overflow-y-auto pr-1 custom-scrollbar">
            <div>
              <h3 className="text-2xl font-bold text-lightBlue tracking-wide font-sora">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-amberGold font-sora mt-0.5">
                {member.role}
              </p>
            </div>

            <div className="h-px w-12 bg-[#0a84ff] my-3" />

            <p className="text-sm text-lightBlue leading-relaxed font-sans">
              {member.bio}
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-lightBlue font-sora">
            <span>ProLaunch Leadership</span>
            <span className="text-amberGold font-sora text-xs font-semibold">
              Leadership
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
