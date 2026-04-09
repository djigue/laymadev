"use client";

import { motion } from "framer-motion";
import { usePageTransition } from "@/context/TransitionProvider";

export default function MotionP({
  children,
  startY = 30,
  duration = 1,
  className = "text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12",
  once = true,
}) {
  const { isTransitioning } = usePageTransition();

  return (
    <motion.p
      initial={{ opacity: 0, y: startY }}
      animate={
        isTransitioning ? { opacity: 0, y: startY } : { opacity: 1, y: 0 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{
        duration: duration,
        delay: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.p>
  );
}
