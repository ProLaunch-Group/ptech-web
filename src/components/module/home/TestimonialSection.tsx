'use client';

import Image from 'next/image';
import { StackedDeck } from '@/components/layout/StackedDeck';
import SectionTitle from '@/components/layout/SectionTitle';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { testimonials } from '@/constants/service';
import { Testimonial } from '@/types/service.types';

export default function TestimonialSection() {
  return (
    <StaggerContainer>
      <section
        aria-labelledby="testimonials-heading"
        className="pt-12 pb-8 md:pt-16 md:pb-12 bg-background text-foreground transition-colors duration-300 overflow-hidden"
      >
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24">
          <SectionTitle
            title="Testimonials"
            subtitle="Don't take our word for it!"
            description="See what some of our customers have to say about working with us."
            variant="secondary"
          />

          {/* Reusable Stack Component Integration */}
          <div className="mt-8">
            <StackedDeck
              items={testimonials}
              renderCard={(item: Testimonial) => (
                <article className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-slate-800 relative min-h-[240px] flex flex-col justify-between">
                  {/* Top Row: Quote & Company Logo */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      {/* Author Avatar Image */}
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-amberGold shrink-0">
                        <Image
                          src={item.avatarUrl}
                          alt={item.authorName}
                          fill
                          className="object-cover"
                          loading="eager"
                        />
                      </div>

                      {/* Company Logo Badge */}
                      <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-amberGold">
                        <span className="text-xs font-bold text-slate-900 dark:text-amberGold font-sans uppercase tracking-wider">
                          {item.companyName}
                        </span>
                      </div>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-slate-700 dark:text-slate-200 font-sans text-base sm:text-lg leading-relaxed mb-6 font-normal">
                      &quot;{item.quote}&quot;
                    </blockquote>
                  </div>

                  {/* Bottom Row: Author Details */}
                  <footer className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="font-sora font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                      {item.authorName}
                    </p>
                    <p className="font-sans text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {item.authorRole}
                    </p>
                  </footer>
                </article>
              )}
            />
          </div>
        </div>
      </section>
    </StaggerContainer>
  );
}
