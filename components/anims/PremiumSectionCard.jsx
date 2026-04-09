"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function PremiumSectionCard({
  image,
  children,
  containerClass = "",
  alt = "LAYMA.dev |devleoppeur web et création de site à Béziers, Hauts-Cantons, Hérault",
  priority = false,
}) {
  const cardRef = useRef(null);

  /* =========================
     TILT
  ========================= */
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, { stiffness: 120, damping: 18 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 120, damping: 18 });

  /* =========================
     LIGHT
  ========================= */
  const lightX = useMotionValue(50);
  const lightY = useMotionValue(50);

  const smoothLightX = useSpring(lightX, { stiffness: 150, damping: 25 });
  const smoothLightY = useSpring(lightY, { stiffness: 150, damping: 25 });

  /* =========================
     EVENTS
  ========================= */
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768 || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const { width, height, left, top } = rect;

    const x = e.clientX - left;
    const y = e.clientY - top;

    rotateX.set(((y - height / 2) / height) * -6);
    rotateY.set(((x - width / 2) / width) * 6);

    lightX.set((x / width) * 100);
    lightY.set((y / height) * 100);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    lightX.set(50);
    lightY.set(50);
  };

  return (
    <motion.section
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: 1200,
      }}
      className={`relative mt-24 rounded-3xl overflow-hidden border border-white/10 bg-slate-900/80 backdrop-blur-xl ${containerClass}`}
    >
      {/* =========================
          BACKGROUND IMAGE
      ========================= */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover scale-105"
          priority={priority}
        />
      </div>

      {/* =========================
          DARK OVERLAY
      ========================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95" />

      {/* =========================
          LIGHT EFFECT
      ========================= */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${smoothLightX}% ${smoothLightY}%, rgba(255,255,255,0.10), transparent 55%)`,
        }}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      />

      {/* =========================
          BORDER GLOW
      ========================= */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/5 shadow-[0_0_40px_rgba(255,255,255,0.03)]" />

      {/* =========================
          CONTENT
      ========================= */}
      <div className="relative z-10 px-6 md:px-12 py-20 md:py-28 max-w-6xl mx-auto text-white">
        {children}
      </div>
    </motion.section>
  );
}
