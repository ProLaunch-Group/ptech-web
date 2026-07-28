'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { whileInViewProps } from '@/libs/motion-variants';
import { brandStatements } from '@/constants/service';

export default function BrandStatement() {
  // 1. Fixed: Use useMemo instead of useRef to instantiate the plugin cleanly without reading .current in render
  const plugin = useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: false }),
    []
  );

  return (
    <motion.section
      {...whileInViewProps}
      aria-labelledby="brand-statement-heading"
      className="relative w-full py-24 md:py-32 overflow-hidden bg-slate-900 text-white"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
          alt="Cloud Infrastructure Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Semi-transparent dark overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <Carousel
          plugins={[plugin]} // 👈 Passed directly without .current
          opts={{
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {brandStatements.map((statement) => (
              <CarouselItem key={statement.id}>
                <div className="flex flex-col items-center justify-center min-h-[220px] px-4">
                  {/* Tagline Badge */}
                  <span className="inline-block text-amberGold font-sans text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
                    {statement.tagline}
                  </span>

                  {/* Headline Statement (Fixed: Escaped quotes using &quot;) */}
                  <h2
                    id="brand-statement-heading"
                    className="font-sora text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 max-w-3xl"
                  >
                    &quot;{statement.headline}&quot;
                  </h2>

                  {/* Supporting Description */}
                  <p className="font-sans text-base sm:text-lg text-slate-300 font-medium max-w-2xl leading-relaxed">
                    {statement.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls */}
          <div className="hidden sm:flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious
              aria-label="Previous statement"
              className="static transform-none bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
            />
            <CarouselNext
              aria-label="Next statement"
              className="static transform-none bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
            />
          </div>
        </Carousel>
      </div>
    </motion.section>
  );
}
