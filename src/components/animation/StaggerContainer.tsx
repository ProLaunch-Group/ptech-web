'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import {
  staggerContainerVariant,
  whileInViewProps,
} from '@/libs/motion-variants';

export function StaggerContainer({
  children,
  ...props
}: HTMLMotionProps<'div'>) {
  return (
    <motion.div
      variants={staggerContainerVariant}
      {...whileInViewProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}
