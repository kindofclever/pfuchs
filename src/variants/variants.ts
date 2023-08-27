import { Variants } from 'framer-motion';

export const h1Variants: Variants = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 5,
      mass: 0.5,
    },
  },
};

export const h2Variants: Variants = {
  hidden: { x: '100vw' },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: Math.random() * 80 + 40,
      duration: 2.5 + Math.random() * 1.0,
      bounce: 0.25 + Math.random() * 0.5,
    },
  },
};

export const buttonVariants: Variants = {
  hidden: { y: '70vh' },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 4,
      delay: 2,
    },
  },
};

export const nameVariants: Variants = {
  rotate: {
    rotate: [0, 360],
    transition: {
      rotate: {
        loop: Infinity,
        ease: "linear",
        duration: 5
      }
    }
  }
};

