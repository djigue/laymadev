"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => setCurrentIndex(index);
  const closeImage = () => setCurrentIndex(null);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  if (!images.length) return null;

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-12 p-4 md:p-8 max-w-7xl mx-auto mb-8">
        {images.map((src, i) => {
          const iModulo = i % 7;
          let colSpan = "md:col-span-2";

          if (iModulo === 0) colSpan = "md:col-span-4";
          else if ([5, 6].includes(iModulo)) colSpan = "md:col-span-3";

          return (
            <div
              key={i}
              onClick={() => openImage(i)}
              className={`relative cursor-pointer ${colSpan} rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              <Image
                src={src}
                alt="Projet web LAYMA.dev"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <span className="absolute bottom-2 right-3 text-white bg-black/60 px-2 py-1 rounded text-sm">
                {i + 1}/{images.length}
              </span>
            </div>
          );
        })}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            {/* Close */}
            <button
              onClick={closeImage}
              className="absolute top-6 right-6 text-white text-3xl hover:scale-110"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 text-white text-4xl hover:scale-125"
            >
              ‹
            </button>

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex]}
                alt="Preview projet"
                width={1200}
                height={800}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 text-white text-4xl hover:scale-125"
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 text-white text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
