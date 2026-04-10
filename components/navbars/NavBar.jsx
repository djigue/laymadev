"use client";

import navLinks from "./NavLinks";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MenuBurger from "./MenuBurger";
import LinkCard from "../anims/LinkCard";
import TransitionLink from "@/components/TransitionLink";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <>
      {/* ===== MOBILE TOP BAR ===== */}
      <div className="md:hidden fixed top-0 left-0 w-full z-[9999] bg-slate-950 text-white flex items-center justify-between px-6 py-4">
        <Image
          src="/images/logo.png"
          alt="LAYMA.dev |devleoppeur web et création de site à Béziers, Hauts-Cantons, Hérault"
          width={120}
          height={80}
        />
        <MenuBurger />
      </div>

      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside className="hidden md:flex w-72 h-screen fixed top-0 left-0 bg-slate-950 text-gray-300 border-r border-slate-800 flex-col px-6 py-10 z-50">
        <div className="mb-16 flex flex-col items-center">
          <TransitionLink href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="LAYMA.dev |devleoppeur web et création de site à Béziers, Hauts-Cantons, Hérault"
              width={120}
              height={80}
            />
          </TransitionLink>

          <p className="text-xs text-gray-500 mt-2">
            Studio digital & solutions tech
          </p>
        </div>

        <ul className="flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.children ? (
                <div>
                  <div className="flex items-center justify-between">
                    <TransitionLink
                      href={link.href}
                      className={`transition ${
                        isActive(link.href)
                          ? "text-white font-semibold"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </TransitionLink>

                    <button
                      type="button"
                      onClick={() =>
                        setOpenMenu(openMenu === index ? null : index)
                      }
                      className="ml-2 text-lg cursor-pointer text-gray-300 hover:text-white"
                      aria-expanded={openMenu === index}
                      aria-label="Ouvrir le sous-menu"
                    >
                      {openMenu === index ? "−" : "+"}
                    </button>
                  </div>

                  <AnimatePresence>
                    {openMenu === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-3 mt-2 flex flex-col gap-2"
                      >
                        {link.children.map((child, i) => (
                          <li key={i}>
                            <TransitionLink
                              href={child.href}
                              className={`text-sm transition ${
                                isActive(child.href)
                                  ? "text-white"
                                  : "text-gray-400 hover:text-white"
                              }`}
                            >
                              {child.label}
                            </TransitionLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <TransitionLink
                  href={link.href}
                  className={`transition ${
                    isActive(link.href)
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </TransitionLink>
              )}
            </li>
          ))}
        </ul>
        <LinkCard />
      </aside>
    </>
  );
}
