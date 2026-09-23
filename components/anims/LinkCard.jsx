'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function LinkCard({ scale = 1.03, className = '' }) {
  return (
    <motion.div
      whileHover={{
        rotateZ: 2,
        rotateY: 1,
        scale,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 18,
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`relative mt-auto ${className}`}
    >
      <Link
        href="https://www.laymadev.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-3xl p-[1px] group"
      >
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-300/60 via-transparent to-orange-300/50 blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative rounded-3xl overflow-hidden border border-slate-200 p-6 shadow-lg shadow-blue-900/5">
          <div className="absolute inset-0">
            <Image
              src="/images/bg_service.jpg"
              alt=""
              fill
              sizes="400px"
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.88),rgba(239,246,255,0.72)_50%,rgba(239,246,255,0.4)_100%)]" />

          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-widest text-blue-700 font-semibold">
              Expérience alternative
            </span>

            <p className="text-sm text-slate-600 leading-relaxed mt-4 mb-6">
              Découvrez une autre version du site avec un style visuel
              différent, des animations avancées et une approche plus
              expérimentale.
            </p>

            <span className="inline-flex items-center gap-2 text-blue-700 font-medium">
              Explorer le site
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
