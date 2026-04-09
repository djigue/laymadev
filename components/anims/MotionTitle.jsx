"use client";

import { motion } from "framer-motion";
import { usePageTransition } from "@/context/TransitionProvider";

export default function MotionTitle({
  children,
  className = "text-4xl md:text-6xl text-white font-bold mb-6",
  startY = 40,
  duration = 1,
}) {
  const { isTransitioning } = usePageTransition();
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={
        isTransitioning ? { opacity: 0, y: startY } : { opacity: 1, y: 0 }
      }
      transition={{
        duration: duration,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.h1>
  );
}
