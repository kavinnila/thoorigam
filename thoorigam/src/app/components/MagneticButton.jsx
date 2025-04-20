'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '../hooks/useMagnetic';
import { MagneticItem } from './index.styled';
import { magneticVariance } from './index.variance';
// import { cn } from "/utils/class-name"
import { cn } from "../utils/class-name"

export function MagneticButton({ children, className, variant, size, ...props }) {
  const elementRef = useRef(null);
  const {
    position: { x, y },
    handleMagneticMove,
    handleMagneticOut,
  } = useMagnetic(elementRef);

  return (
    <motion.button
      ref={elementRef}
      className={cn(magneticVariance({ variant, size, className }))}
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 150,
        mass: 0.1,
      }}
      onPointerMove={handleMagneticMove}
      onPointerOut={handleMagneticOut}
      whileHover={{ scale: 1.1 }}
      {...props}
    >
      <MagneticItem>{children}</MagneticItem>
    </motion.button>
  );
}
