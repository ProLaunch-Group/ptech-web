'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { staggerContainerVariant } from '@/libs/motion-variants';

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  animateOnMount?: boolean;
}

export function StaggerContainer({
  children,
  animateOnMount = false,
  className,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      {...props}
      className={className}
      variants={staggerContainerVariant}
      initial="hidden"
      {...(animateOnMount
        ? { animate: 'show' }
        : {
            whileInView: 'show',
            viewport: {
              once: true,
              amount: 0.1,
              margin: '0px 0px -50px 0px',
            },
          })}
    >
      {children}
    </motion.div>
  );
}
