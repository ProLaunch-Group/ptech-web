'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getDesktopVariants } from '@/libs/animations';
import { ServiceCardMotionProps } from '@/types/service.types';

export default function ServiceCardMotion({
  children,
  index,
}: ServiceCardMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Calculate if the screen is mobile or desktop and set the state accordingly
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const isLastCard = index === 2;

  // Keeps your animation timing for cards 1 & 2, but finishes card 3 earlier
  const scale = useTransform(
    scrollYProgress,
    [0.2, isLastCard ? 0.9 : 0.9],
    [0.8, 1.2]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, isLastCard ? 0.6 : 0.3],
    [0, 1]
  );

  return (
    <motion.div
      ref={containerRef}
      initial={isMobile ? undefined : 'hidden'}
      whileInView={isMobile ? undefined : 'visible'}
      viewport={isMobile ? undefined : { once: false, amount: 0.25 }}
      variants={isMobile ? undefined : getDesktopVariants(index)}
      style={{
        scale: isMobile ? scale : undefined,
        opacity: isMobile ? opacity : undefined,
      }}
      className="w-full flex border border-slate-200 rounded-2xl"
    >
      {children}
    </motion.div>
  );
}
