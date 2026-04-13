'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { usePageTransition } from '@/context/TransitionProvider';

export default function PremiumCard({
  image,
  title,
  description,
  link,
  showButton = true,
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
        rounded-2xl md:rounded-3xl 
        overflow-hidden 
        bg-slate-900 
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
      <img
        src={image}
        alt={title}
        className="
          w-full 
          h-[180px] 
          sm:h-[220px]
          md:h-[480px] 
          object-contain 
          bg-slate-950
          p-4 md:p-0
        "
      />

      {/* TEXTE (IMPORTANT : PLUS D'ABSOLUTE EN MOBILE) */}
      <div
        className="
          p-4 
          md:absolute md:bottom-0 md:left-0 md:w-full 
          md:p-12
          md:bg-gradient-to-t md:from-black/70 md:to-transparent
        "
      >
        <div className="max-w-full md:max-w-xl">
          <h2 className="text-lg md:text-5xl font-semibold mb-2 md:mb-3">
            {title}
          </h2>

          <p className="text-gray-300 text-sm md:text-lg leading-snug md:leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* CTA MOBILE */}
      <div className="md:hidden px-4 pb-4 text-blue-400 text-sm font-medium">
        Voir le projet →
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
