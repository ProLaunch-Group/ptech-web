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
        className="py-20 md:py-28 bg-[#ffffff] text-black overflow-hidden"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="TESTIMONIALS"
            subtitle="Don't take our word for it!"
            description=" See what some of our customers have to say about working with us."
            variant="secondary"
          />

          {/* Reusable Stack Component Integration */}

          <StackedDeck
            items={testimonials}
            renderCard={(item: Testimonial) => (
              // Testimonial Card Content UI
              <article className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100 relative min-h-[260px] flex flex-col justify-between">
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
                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-[#f5a623]">
                      <span className="text-xs font-bold text-slate-900 font-sans uppercase tracking-wider">
                        {item.companyName}
                      </span>
                    </div>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-slate-700 font-sans text-base sm:text-lg leading-relaxed mb-6 font-normal">
                    &quot;{item.quote}&quot;
                  </blockquote>
                </div>

                {/* Bottom Row: Author Details */}
                <footer className="pt-4 border-t border-slate-100">
                  <p className="font-sora font-bold text-deepNavy text-base sm:text-lg">
                    {item.authorName}
                  </p>
                  <p className="font-sans text-sm text-slate-500 font-medium">
                    {item.authorRole}
                  </p>
                </footer>
              </article>
            )}
          />
        </div>
      </section>
    </StaggerContainer>
  );
}
