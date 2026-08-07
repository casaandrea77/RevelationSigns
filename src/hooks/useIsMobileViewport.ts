"use client";

import { useEffect, useState } from "react";

export const MOBILE_HERO_BREAKPOINT = "(max-width: 768px)";

export function useIsMobileViewport() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasResolved, setHasResolved] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_HERO_BREAKPOINT);

    const update = () => {
      setIsMobile(mediaQuery.matches);
    };

    update();
    setHasResolved(true);
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return { isMobile, hasResolved };
}
