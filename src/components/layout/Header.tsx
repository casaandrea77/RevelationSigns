"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const SCROLL_THRESHOLD = 24;

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  const prefersReducedMotion = useReducedMotion();

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <span className="relative block h-4 w-6">
      <motion.span
        aria-hidden
        className="absolute left-0 top-0 block h-px w-full origin-center bg-foreground"
        animate={isOpen ? { top: "50%", rotate: 45, y: "-50%" } : { top: 0, rotate: 0, y: 0 }}
        transition={transition}
      />
      <motion.span
        aria-hidden
        className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 bg-foreground"
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={transition}
      />
      <motion.span
        aria-hidden
        className="absolute bottom-0 left-0 block h-px w-full origin-center bg-foreground"
        animate={
          isOpen ? { bottom: "50%", rotate: -45, y: "50%" } : { bottom: 0, rotate: 0, y: 0 }
        }
        transition={transition}
      />
    </span>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[88px] transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/60 bg-background/45 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="group relative flex min-w-0 items-center transition-opacity duration-300 hover:opacity-90"
          aria-label="RevelationSigns home"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-x-2 -inset-y-1.5 rounded-sm bg-black/20 backdrop-blur-[3px] sm:-inset-x-3 sm:-inset-y-2"
          />
          <Image
            src="/assets/logo/RevelationSigns_Logo_Transparent.png"
            alt="RevelationSigns"
            width={480}
            height={160}
            priority
            className="relative z-[1] h-auto w-[170px] drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)] sm:w-[220px] lg:w-[300px]"
          />
        </Link>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/50 transition-colors duration-300 hover:border-foreground/30 hover:bg-foreground/5"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <HamburgerIcon isOpen={isMenuOpen} />
        </button>
      </div>
    </header>
  );
}
