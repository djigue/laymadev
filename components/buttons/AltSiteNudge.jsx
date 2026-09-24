'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const VISIBLE_MS = 6000;

// Rappel discret vers l'expérience alternative : apparaît à deux moments
// (sortie du hero, puis arrivée sur les projets), une fois chacun, et
// disparaît tout seul.
export default function AltSiteNudge() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('top');
    const projets = document.getElementById('projets');
    const contact = document.getElementById('contact');

    let timer;
    const show = () => {
      clearTimeout(timer);
      setVisible(true);
      timer = setTimeout(() => setVisible(false), VISIBLE_MS);
    };

    // Au rechargement, le navigateur restaure la position de scroll puis
    // TransitionProvider remonte en haut : ces scrolls automatiques ne
    // doivent pas consommer les déclencheurs. On attend une vraie action.
    let armed = false;
    const USER_EVENTS = ['wheel', 'touchmove', 'keydown', 'pointerdown'];
    const arm = () => {
      armed = true;
      USER_EVENTS.forEach((e) => window.removeEventListener(e, arm));
    };
    USER_EVENTS.forEach((e) =>
      window.addEventListener(e, arm, { passive: true })
    );

    // 1er moment : le hero sort de l'écran
    const heroObserver = new IntersectionObserver(([entry]) => {
      if (!armed || entry.isIntersecting) return;
      show();
      heroObserver.disconnect();
    });

    // 2e moment : les projets arrivent au milieu de l'écran
    const projetsObserver = new IntersectionObserver(
      ([entry]) => {
        if (!armed || !entry.isIntersecting) return;
        show();
        projetsObserver.disconnect();
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    // La LinkCard est déjà visible sous le formulaire : inutile de doublonner
    const contactObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        clearTimeout(timer);
        setVisible(false);
      }
    });

    if (hero) heroObserver.observe(hero);
    if (projets) projetsObserver.observe(projets);
    if (contact) contactObserver.observe(contact);

    return () => {
      clearTimeout(timer);
      USER_EVENTS.forEach((e) => window.removeEventListener(e, arm));
      heroObserver.disconnect();
      projetsObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://www.laymadev.fr"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="group fixed bottom-4 left-4 z-40 inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur px-3 py-1.5 text-xs text-blue-700 shadow-md md:bottom-6 md:left-6 md:gap-2 md:border md:border-slate-200 md:bg-white md:px-4 md:py-2 md:text-sm md:font-medium md:shadow-lg"
        >
          <span className="hidden md:inline">✨</span>
          Versions alternatives
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
