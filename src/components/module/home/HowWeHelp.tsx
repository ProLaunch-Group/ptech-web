import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HOW_WE_HELP_SERVICES } from '@/constants/service';
import Image from 'next/Image';
import { ServiceCardData } from '@/types/service.types';
import ServiceCardMotion from '@/components/module/home/ServiceCardMotion';

export default function HowWeHelp() {
  return (
    <section
      className="flex flex-col items-center justify-center pt-8 pb-15 md:pt-15 md:pb-18 bg-white text-slate-900"
      aria-labelledby="how-we-help-section"
    >
      <div className="w-full max-w-7xl px-6 md:px-12">
        <header className="text-center mb-16">
          <h2
            id="how-we-help-title"
            className="text-3xl md:text-5xl font-bold tracking-tight font-sora text-black"
            aria-label="How We Help"
          >
            How We Help
          </h2>
        </header>

        <ul
          role="list"
          className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-8 lg:gap-12 w-full"
        >
          {HOW_WE_HELP_SERVICES.map(
            (service: ServiceCardData, index: number) => {
              return (
                <ServiceCardMotion key={service.id} index={index}>
                  <li
                    key={service.id}
                    role="listitem"
                    className="flex flex-col justify-between p-8 md:p-10 rounded-2xl bg-card border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out group"
                  >
                    <article>
                      <div
                        className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/20 group-hover:bg-amber-500/30 mb-6  overflow-hidden"
                        aria-hidden="true"
                      >
                        <Image
                          alt={`${service.title} illustration`}
                          src={service.imageUrl}
                          fill
                          className="object-contain p-2"
                          sizes="48px"
                        />
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold font-sora text-black mb-3">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 font-body text-base font-sans leading-relaxed mb-8">
                        {service.description}
                      </p>
                    </article>

                    <Link
                      href={service.ctaLink}
                      className="inline-flex font-sora items-center gap-2 text-electricBlue hover:text-amberGold font-semibold text-base transition-colors duration-200 group w-fit"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      {service.ctaText}
                      <ArrowRight
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                </ServiceCardMotion>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
}
