"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function SuccessModal({ open, onClose }) {
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
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl overflow-hidden">
              {/* Glow */}
              <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-100/60 rounded-full blur-[100px]" />

              {/* Content */}
              <div className="relative z-10 text-center">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                  Message envoyé
                </h2>
                <p className="text-slate-500 mb-6">
                  On revient vers vous rapidement.
                </p>

                <button
                  onClick={onClose}
                  className="flex-1 rounded-2xl px-4 py-3 bg-slate-900 text-white hover:bg-slate-800 transition"
                >
                  Fermer
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
