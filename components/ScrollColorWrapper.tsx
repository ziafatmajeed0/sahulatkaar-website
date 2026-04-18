'use client';

import { useScroll, useTransform, motion } from 'framer-motion';

export default function ScrollColorWrapper() {
  const { scrollYProgress } = useScroll();

  // Interpolate between Obsidian -> Midnight Blue -> Deep Forest Green -> Dark Orange -> Obsidian
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [
      'rgba(9, 9, 11, 0.2)',   // Obsidian
      'rgba(15, 23, 42, 0.3)', // Midnight Blue
      'rgba(6, 78, 59, 0.3)',  // Deep Forest Green
      'rgba(124, 45, 18, 0.3)' // Dark Orange
    ]
  );

  return (
    <motion.div
      className="fixed inset-0 -z-40 pointer-events-none"
      style={{ backgroundColor }}
    />
  );
}
