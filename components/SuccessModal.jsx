"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SuccessModal({ open, onClose }) {
  const router = useRouter();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md mx-4"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
              {/* Glow */}
              <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />

              {/* Content */}
              <div className="relative z-10 text-center">
                <h2 className="text-2xl font-semibold text-white mb-3">
                  Message envoyé
                </h2>
                <p className="text-gray-400 mb-6">
                  On revient vers vous rapidement.
                </p>

                <button
                  onClick={() => router.push("/")}
                  className="flex-1 rounded-2xl px-4 py-3 bg-blue-600 text-white hover:bg-blue-500 transition"
                >
                  Retour à l'Accueil
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
