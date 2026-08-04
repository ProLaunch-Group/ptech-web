import { Variants } from 'framer-motion';

export const getDesktopVariants = (index: number): Variants => {
  // Base delay starting at 0.4s + 0.1s staggering per card index
  const delay = 0.4 + index * 0.1;

  return {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay,
      },
    },
  };
};
