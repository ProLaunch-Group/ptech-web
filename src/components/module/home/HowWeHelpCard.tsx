import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ServiceIcon from '@/components/layout/ServiceIcon';
import { HowWeHelpCardProps } from '@/types/service.types';
import Image from 'next/image';

export default function HowWeHelpCard({ service }: HowWeHelpCardProps) {
  return (
    <li
      role="listitem"
      className="flex-1 flex flex-col justify-between p-8 md:p-9 rounded-3xl bg-white  group"
    >
      <article className="flex flex-col h-full justify-between">
        {/* Top Header Section */}
        <div>
          <figure
            className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/20 group-hover:bg-amber-500/30 mb-6 overflow-hidden"
            aria-hidden="true"
          >
            {service.imageUrl ? (
              <Image
                alt={`${service.title} illustration`}
                src={service.imageUrl}
                fill
                className="object-contain p-2"
                sizes="48px"
              />
            ) : (
              <ServiceIcon name="Servers" />
            )}
          </figure>
          <h3 className="text-xl md:text-2xl font-bold font-sora text-slate-900 tracking-tight mb-4">
            {service.title}
          </h3>

          <p className="text-black font-sans text-sm md:text-base leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Feature List Mapping */}
          {service.features && service.features.length > 0 && (
            <ul
              className="space-y-4 mb-6"
              aria-label={`${service.title} capabilities`}
            >
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  {/* Icon Badge Container */}
                  <div
                    className="shrink-0 w-9 h-9 rounded-full bg-[#e8f3ff]-50/80 flex items-center justify-center group-hover:bg-blue-100/70 transition-colors duration-200"
                    aria-hidden="true"
                  >
                    <ServiceIcon name={feature.iconName} />
                  </div>

                  {/* Feature Label */}
                  <span className="text-sm font-semibold text-slate-800 font-sans tracking-tight">
                    {feature.label}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bottom CTA Link */}
        <div className="-pt-4">
          <Link
            href={service.ctaLink}
            className="inline-flex items-center gap-2 text-electricBlue hover:text-amberGold font-sora font-semibold text-sm transition-colors duration-200 group/link w-fit"
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
