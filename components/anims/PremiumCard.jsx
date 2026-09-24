'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { usePageTransition } from '@/context/TransitionProvider';

export default function PremiumCard({
  image,
  title,
  description,
  link,
  showButton = true,
  index,
  total,
  accent = '#1d4ed8',
}) {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { navigate } = usePageTransition();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* DESKTOP EFFECTS */
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, { stiffness: 90, damping: 18 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 90, damping: 18 });

  const magnetX = useMotionValue(0);
  const magnetY = useMotionValue(0);

  const smoothMagnetX = useSpring(magnetX, { stiffness: 160, damping: 22 });
  const smoothMagnetY = useSpring(magnetY, { stiffness: 160, damping: 22 });

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    rotateX.set(((y - height / 2) / height) * -6);
    rotateY.set(((x - width / 2) / width) * 6);

    magnetX.set((x - width / 2) * 0.08);
    magnetY.set((y - height / 2) * 0.08);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    magnetX.set(0);
    magnetY.set(0);
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      onMouseEnter={!isMobile ? () => setIsHovering(true) : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      style={
        !isMobile
          ? {
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              transformPerspective: 1200,
            }
          : {}
      }
      className="
        group relative
        rounded-3xl
        overflow-hidden
        bg-white
        border border-slate-200/80
        shadow-xl shadow-slate-900/5 md:shadow-sm
        cursor-pointer
        active:scale-[0.98]
        transition
      "
      onClick={(e) => {
        e.preventDefault();
        link && navigate(link);
      }}
    >
      {/* IMAGE */}
      <div className="relative w-full h-[210px] sm:h-[240px] md:h-[480px] bg-slate-50 overflow-hidden">
        {/* Mobile : halo aux couleurs du projet + trame de points */}
        <div
          className="md:hidden absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 55%, ${accent}26, transparent 70%)`,
          }}
        />
        <div className="md:hidden absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[14px_14px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)] opacity-70" />

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain px-12 py-14 md:p-0"
        />

        {index && (
          <span className="md:hidden absolute top-4 left-4 font-mono text-[11px] tracking-widest text-slate-400">
            {String(index).padStart(2, '0')}
            {total && ` / ${String(total).padStart(2, '0')}`}
          </span>
        )}
      </div>

      {/* TEXTE (IMPORTANT : PLUS D'ABSOLUTE EN MOBILE) */}
      <div
        className="
          px-6 pt-6 pb-2
          border-t border-slate-100 md:border-0
          md:absolute md:bottom-0 md:left-0 md:w-full
          md:p-12
          md:bg-gradient-to-t md:from-black/70 md:to-transparent
        "
      >
        <div className="max-w-full md:max-w-xl">
          <h2 className="text-2xl md:text-5xl font-semibold tracking-tight md:tracking-normal mb-2 md:mb-3 text-slate-900 md:text-white">
            {title}
          </h2>

          <p className="text-slate-600 md:text-gray-300 text-[15px] md:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* CTA MOBILE */}
      <div className="md:hidden mx-6 mt-4 mb-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-900">
          Voir le projet
        </span>
        <span className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center transition-transform duration-300 group-active:translate-x-1">
          →
        </span>
      </div>

      {/* BUTTON DESKTOP */}
      {showButton && !isMobile && (
        <motion.div
          style={{ x: smoothMagnetX, y: smoothMagnetY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ scale: isHovering ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl"
          >
            <span className="text-black font-medium">Voir →</span>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
