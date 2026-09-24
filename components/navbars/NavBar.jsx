'use client';

import navLinks from './NavLinks';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import MenuBurger from './MenuBurger';
import ButtonB from '@/components/buttons/ButtonB';

const projectPages = [
  { slug: 'teoola', label: 'Teoola', href: '/projects/teoola' },
  { slug: 'smart-hotel', label: 'SmartHotel', href: '/projects/smart-hotel' },
  { slug: 'caroux', label: 'Caroux', href: '/projects/caroux' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [activeId, setActiveId] = useState('top');

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  /* =========================
     NAV SIMPLIFIÉE (pages hors one-page : projets, légal...)
     Les ancres #services / #apropos n'existent que sur "/",
     donc pas de scroll-spy ni de liens d'ancre ici.
  ========================= */
  if (!isHome) {
    const otherProjects = projectPages.filter(
      (p) => !pathname.startsWith(p.href)
    );

    return (
      <header className="sticky top-0 z-9999 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-6 md:px-10 py-3">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="LAYMA.dev | développeur web et création de site à Béziers, Hauts-Cantons, Hérault"
              width={90}
              height={57}
              priority
            />
          </Link>

          <nav className="flex items-center gap-4 md:gap-6">
            <Link
              href="/"
              className="text-xs sm:text-sm text-slate-400 hover:text-white transition"
            >
              Accueil
            </Link>
            {pathname.startsWith('/projects') &&
              otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={p.href}
                  className="hidden md:inline text-sm text-slate-400 hover:text-white transition"
                >
                  {p.label}
                </Link>
              ))}
          </nav>

          <ButtonB
            text="Me contacter"
            href="/#contact"
            className="shrink-0 whitespace-nowrap relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-white text-xs sm:text-sm font-medium shadow-lg shadow-orange-500/20 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        {/* Mobile : pas la place sur la ligne principale, les autres
            projets passent sur une seconde ligne fine */}
        {pathname.startsWith('/projects') && (
          <nav className="md:hidden flex items-center justify-center gap-5 px-6 py-2 border-t border-slate-800 text-xs">
            <span className="text-slate-500">Autres projets :</span>
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={p.href}
                className="text-slate-300 hover:text-white transition"
              >
                {p.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    );
  }

  /* =========================
     NAV COMPLÈTE (one-page "/")
  ========================= */
  return (
    <header className="sticky top-0 z-9999 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-3">
        <a href="#top" className="flex items-center shrink-0">
          <Image
            src="/images/logo.png"
            alt="LAYMA.dev | développeur web et création de site à Béziers, Hauts-Cantons, Hérault"
            width={90}
            height={57}
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition ${
                activeId === link.href.replace('#', '')
                  ? 'text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://www.laymadev.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-white transition"
          >
            Versions alternatives ↗
          </a>
          <ButtonB
            text="Me contacter"
            href="#contact"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-white text-sm font-medium shadow-lg shadow-orange-500/20 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        <MenuBurger />
      </div>
    </header>
  );
}
