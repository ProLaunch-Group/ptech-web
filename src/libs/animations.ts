import { Variants } from 'framer-motion';

export const getDesktopVariants = (index: number): Variants => {
  if (index === 0) {
    return {
      hidden: { x: 0, opacity: 0, rotateY: 0, scale: 0.95 },
      visible: {
        x: '-10%',
        opacity: 1,
        rotateY: 15,
        scale: 1,
        transition: { type: 'spring', stiffness: 80, damping: 15, delay: 0.1 },
      },
    };
  }
  if (index === 2) {
    return {
      hidden: { x: 0, opacity: 0, rotateY: 0, scale: 0.95 },
      visible: {
        x: '10%',
        opacity: 1,
        rotateY: -15,
        scale: 1,
        transition: { type: 'spring', stiffness: 80, damping: 15, delay: 0.3 },
      },
    };
  }
  return {
    hidden: { x: 0, y: 30, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1.05,
      transition: { type: 'spring', stiffness: 90, damping: 12, delay: 0.2 },
    },
  };
};
