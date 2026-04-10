"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const TransitionContext = createContext({
  navigate: () => {},
  isTransitioning: false,
});

export function TransitionProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const DURATION = 350; // 🔥 durée idéale

  const navigate = async (href) => {
    if (!href || href === pathname) return;

    setIsTransitioning(true);

    // ⏳ laisse le fade-out se faire
    await new Promise((r) => setTimeout(r, DURATION));

    router.push(href, { scroll: false });
  };

  useEffect(() => {
    // scroll clean
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    // fade IN rapide après changement
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigate, isTransitioning }}>
      <div className={`page-transition ${isTransitioning ? "out" : "in"}`}>
        {children}
      </div>
    </TransitionContext.Provider>
  );
}

export const usePageTransition = () => {
  return useContext(TransitionContext);
};
