/**
 * Composant réutilisable de carte avec effets interactifs.
 *
 * Fonctionnalités :
 * - Tilt 3D subtil basé sur la position de la souris
 * - Effet magnétique fluide sur le bouton
 * - Lumière directionnelle dynamique
 * - Animation smooth via Framer Motion
 * - Bouton optionnel contrôlé par la prop `showButton`
 * - Navigation automatique vers la route passée en prop `link`
 *
 * Props :
 * @param {string} image - URL de l'image affichée dans la carte
 * @param {string} title - Titre principal du projet
 * @param {string} description - Description courte du projet
 * @param {string} link - Route vers laquelle naviguer au clic
 * @param {boolean} showButton - Affiche ou non le bouton central (défaut: true)
 *
 * Objectif design :
 * Créer une carte moderne, crédible et professionnelle avec
 * une interaction subtile (style studio premium / tech).
 */

"use client";

import { useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { usePageTransition } from "@/context/TransitionProvider";

export default function PremiumCard({
  image,
  title,
  description,
  link,
  showButton = true,
}) {
  const router = useRouter();
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const { navigate } = usePageTransition();

  /* TILT */
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, { stiffness: 90, damping: 18 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 90, damping: 18 });

  /* MAGNET */
  const magnetX = useMotionValue(0);
  const magnetY = useMotionValue(0);

  const smoothMagnetX = useSpring(magnetX, { stiffness: 160, damping: 22 });
  const smoothMagnetY = useSpring(magnetY, { stiffness: 160, damping: 22 });

  /* LIGHT */
  const lightX = useMotionValue(50);
  const lightY = useMotionValue(50);

  const smoothLightX = useSpring(lightX, { stiffness: 120, damping: 20 });
  const smoothLightY = useSpring(lightY, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    rotateX.set(((y - height / 2) / height) * -6);
    rotateY.set(((x - width / 2) / width) * 6);

    magnetX.set((x - width / 2) * 0.08);
    magnetY.set((y - height / 2) * 0.08);

    lightX.set((x / width) * 100);
    lightY.set((y / height) * 100);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    magnetX.set(0);
    magnetY.set(0);
    lightX.set(50);
    lightY.set(50);
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: 1200,
      }}
      className="relative rounded-3xl overflow-hidden bg-slate-900 cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        link && navigate(link);
      }}
    >
      {/* LIGHT */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${smoothLightX}% ${smoothLightY}%, rgba(255,255,255,0.08), transparent 60%)`,
        }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* IMAGE */}
      <img
        src={image}
        alt="LAYMA.dev studio web à Béziers (Hérault)– conception de services digitaux"
        className="w-full min-h-[480px] object-contain bg-slate-950"
      />

      {/* TEXT */}
      <div className="absolute inset-0 flex items-end">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Text content */}
        <div className="relative p-6 md:p-12 max-w-[90%] md:max-w-xl">
          {title && (
            <h2 className="text-2xl md:text-5xl font-semibold tracking-tight mb-3">
              {title}
            </h2>
          )}

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-4 ml-4 md:hidden text-blue-400 text-sm font-medium">
        Voir le projet →
      </div>
      {/* BUTTON (OPTIONNEL) */}
      {showButton && (
        <motion.div
          style={{ x: smoothMagnetX, y: smoothMagnetY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ scale: isHovering ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl"
          >
            <span className="text-black font-medium">Voir →</span>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
