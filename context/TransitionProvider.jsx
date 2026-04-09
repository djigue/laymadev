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

  const TRANSITION_TIME = 50;

  const navigate = async (href) => {
    if (!href || href === pathname) return;

    setIsTransitioning(true);

    await new Promise((r) => setTimeout(r, 400));

    router.push(href, { scroll: false });
  };

  useEffect(() => {
    // ✅ scroll global fiable
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    });

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_TIME);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigate, isTransitioning }}>
      {children}
    </TransitionContext.Provider>
  );
}

export const usePageTransition = () => {
  return useContext(TransitionContext);
};
