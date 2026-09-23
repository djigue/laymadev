"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer({
  bg = "#0F172A",
  text = "text-slate-400",
  accent = "text-white",
}) {
  const pathname = usePathname();
  return (
    <footer
      style={{ backgroundColor: bg }}
      className={`w-full border-t border-slate-800 mt-16 ${text}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* BRAND */}
          <div>
            <h3 className={`text-lg font-semibold ${accent}`}>LAYMA.dev</h3>
            <p className="mt-2">
              Studio web à Béziers spécialisé dans la création d’applications
              modernes.
            </p>
          </div>

          {/* NAV */}
          <div>
            <h4 className="font-medium text-slate-300 mb-3">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href={"/#services"} className="hover:text-white transition">
                Services
              </Link>
              <Link href={"/#projets"} className="hover:text-white transition">
                Projets
              </Link>
              <Link href={"/#apropos"} className="hover:text-white transition">
                À propos
              </Link>
              <Link href={"/#contact"} className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-medium text-slate-300 mb-3">Légal</h4>
            <div className="flex flex-col gap-2">
              <Link href={"/legal/cgu"} className="hover:text-white transition">
                CGU
              </Link>
              <Link
                href={"/legal/mentions-legales"}
                className="hover:text-white transition"
              >
                Mentions légales
              </Link>
              <Link
                href={"/legal/confidentialite"}
                className="hover:text-white transition"
              >
                Confidentialité
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <span>
            © {new Date().getFullYear()}{" "}
            <span className={accent}>LAYMA.dev</span> – Tous droits réservés
          </span>

          <span className="text-slate-500">Béziers (Hérault)</span>
        </div>
      </div>
    </footer>
  );
}
