"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import navLinks from "./NavLinks";

export default function MenuBurger() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="md:hidden relative z-[100]">
      {/* BUTTON */}
      <button onClick={() => setOpen(true)} className="text-white">
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
            className="fixed top-0 left-0 w-screen h-screen z-[999] bg-[#161a22] flex flex-col px-8 pt-8 pb-10"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-16">
              <span className="text-xl font-medium text-white tracking-wide">
                LAYMA.dev
              </span>

              <button onClick={() => setOpen(false)}>
                <X size={26} className="text-white" />
              </button>
            </div>

            {/* LINKS */}
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.07 },
                },
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
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block transition ${
                      isActive(link.href)
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>

                  {link.children && (
                    <ul className="mt-4 ml-3 space-y-3 text-lg border-l border-white/10 pl-4">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className={`block transition ${
                              isActive(child.href)
                                ? "text-white"
                                : "text-gray-500 hover:text-white"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <div className="mt-auto pt-16">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-4 rounded-xl bg-white text-black font-medium text-lg hover:opacity-90 transition"
              >
                Discuter d’un projet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
