import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ServiceIcon from '@/components/layout/ServiceIcon';
import { HowWeHelpCardProps } from '@/types/service.types';
import Image from 'next/image';

export default function HowWeHelpCard({ service }: HowWeHelpCardProps) {
  return (
    <li
      role="listitem"
      className="flex-1 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 group border-l-4 border-amberGold border-y border-r border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <article className="flex flex-col h-full justify-between">
        {/* Top Header Section */}
        <div>
          <figure
            className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-amberGold/15 group-hover:bg-amberGold/25 mb-5 overflow-hidden transition-colors"
            aria-hidden="true"
          >
            {service.imageUrl ? (
              <Image
                alt={`${service.title} illustration`}
                src={service.imageUrl}
                fill
                className="object-contain p-2"
                sizes="44px"
              />
            ) : (
              <ServiceIcon name="Servers" />
            )}
          </figure>

          <h3 className="text-lg md:text-xl font-bold font-sora text-slate-900 dark:text-white tracking-tight mb-3">
            {service.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-300 font-sans text-xs sm:text-sm leading-relaxed mb-5 font-normal">
            {service.description}
          </p>

          {/* Outcome highlight */}
          {service.outcome && (
            <div className="mb-5 p-2.5 rounded-lg bg-lightBlue/60 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-electricBlue dark:text-amberGold font-sora block">
                Outcome
              </span>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-sans mt-0.5 block">
                {service.outcome}
              </span>
            </div>
          )}

          {/* Feature List Mapping */}
          {service.features && service.features.length > 0 && (
            <ul
              className="space-y-3 mb-6"
              aria-label={`${service.title} capabilities`}
            >
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <div
                    className="shrink-0 w-8 h-8 rounded-full bg-lightBlue dark:bg-slate-800 flex items-center justify-center text-electricBlue dark:text-amberGold transition-colors"
                    aria-hidden="true"
                  >
                    <ServiceIcon name={feature.iconName} />
                  </div>

                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-sans tracking-tight">
                    {feature.label}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bottom CTA Link */}
        <div className="pt-2">
          <Link
            href={service.ctaLink}
            className="inline-flex items-center gap-2 text-electricBlue hover:text-amberGold dark:text-amberGold dark:hover:text-white font-sora font-semibold text-xs sm:text-sm transition-colors duration-200 group/link w-fit"
            aria-label={`Learn more about ${service.title}`}
          >
            {service.ctaText}
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </article>
    </li>
  );
}
