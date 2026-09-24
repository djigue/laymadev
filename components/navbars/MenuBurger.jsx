'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import navLinks from './NavLinks';

export default function MenuBurger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <div className="md:hidden relative z-[100]">
      <button onClick={() => setOpen(true)} className="text-white" aria-label="Ouvrir le menu">
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
            className="fixed top-0 left-0 w-screen h-screen z-[999] bg-slate-900 flex flex-col px-8 pt-8 pb-10"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-xl font-medium text-white tracking-wide">
                LAYMA.dev
              </span>

              <button onClick={() => setOpen(false)} aria-label="Fermer le menu">
                <X size={26} className="text-white" />
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07 } },
              }}
              className="space-y-8 text-2xl font-medium"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-slate-400 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <a
                  href="https://www.laymadev.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-400 hover:text-white transition"
                >
                  Versions alternatives ↗
                </a>
              </motion.li>
            </motion.ul>

            <div className="mt-auto pt-16">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-4 rounded-xl bg-orange-500 text-white font-medium text-lg hover:bg-orange-600 transition"
              >
                Discuter d&apos;un projet
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
