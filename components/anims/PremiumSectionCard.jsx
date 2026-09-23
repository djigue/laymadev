"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function PremiumSectionCard({
  image,
  children,
  containerClass = "mt-24",
  contentClass = "px-6 md:px-12 py-20 md:py-28 max-w-6xl mx-auto",
  alt = "LAYMA.dev | développeur web et création de site à Béziers, Hauts-Cantons, Hérault",
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
      className={`relative rounded-3xl overflow-hidden border border-slate-300 bg-white shadow-2xl shadow-slate-900/15 ${containerClass}`}
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
          LIGHT WASH (plus opaque au centre, où vit le texte ;
          plus transparent sur les bords pour laisser voir la photo)
      ========================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.86),rgba(239,246,255,0.78)_45%,rgba(239,246,255,0.5)_100%)]" />

      {/* =========================
          LIGHT EFFECT
      ========================= */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${smoothLightX}% ${smoothLightY}%, rgba(29,78,216,0.10), transparent 55%)`,
        }}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      />

      {/* =========================
          BORDER GLOW
      ========================= */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[0_0_40px_rgba(30,64,175,0.12)]" />

      {/* =========================
          CONTENT (texte directement sur la photo)
      ========================= */}
      <div className={`relative z-10 text-slate-900 ${contentClass}`}>
        {children}
      </div>
    </motion.section>
  );
}
