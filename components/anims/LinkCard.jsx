"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LinkCard({ scale = 1.03, className = "" }) {
  return (
    <motion.div
      whileHover={{
        rotateZ: 2,
        rotateY: 1,
        scale,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 18,
      }}
      style={{ transformStyle: "preserve-3d" }}
      className={`relative mt-auto ${className}`}
    >
      <Link
        href="https://www.laymadev.fr"
        target="_blank"
        className="block rounded-3xl p-[1px] group"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/30 via-transparent to-cyan-400/20 blur-xl opacity-70" />

        <div className="relative rounded-3xl bg-[#020617] border border-white/10 backdrop-blur-xl p-4 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
          <span className="text-[10px] uppercase tracking-widest text-blue-400/80">
            Expérience alternative
          </span>

          <p className="text-sm text-gray-300 leading-relaxed mt-4 mb-6">
            Découvrez une autre version du site avec un style visuel différent,
            des animations avancées et une approche plus expérimentale.
          </p>

          <span className="inline-flex items-center gap-2 text-blue-400 font-medium">
            Explorer le site
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
