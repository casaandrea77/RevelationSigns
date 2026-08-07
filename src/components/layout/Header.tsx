"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Brand } from "@/components/layout/Brand";

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
      className={`fixed inset-x-0 top-0 z-50 h-[82px] transition-all duration-300 ${
        isScrolled
          ? "border-b border-accent/20 bg-[#06101a]/95 shadow-[0_8px_30px_rgba(0,0,0,0.28)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
        <Brand />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {[
            ["Journey", "/#journey"],
            ["Documentaries", "/documentaries"],
            ["Starfall", "/starfall"],
            ["The Book", "/great-controversy"],
            ["Bible Studies", "/bible-studies"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="font-sans text-[0.67rem] font-medium tracking-[0.12em] uppercase text-foreground/85 transition-colors hover:text-accent"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/#journey" className="inline-flex min-h-11 items-center justify-center border border-transparent bg-accent px-7 font-sans text-xs font-medium tracking-[0.18em] text-background uppercase transition-colors hover:bg-accent-hover">Start the Journey</Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/50 transition-colors duration-300 hover:border-foreground/30 hover:bg-foreground/5 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <HamburgerIcon isOpen={isMenuOpen} />
        </button>
      </div>
      {isMenuOpen ? (
        <nav id="site-navigation" aria-label="Mobile navigation" className="border-t border-accent/20 bg-[#06101a]/98 px-6 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col">
            {[
              ["Journey", "/#journey"],
              ["Documentaries", "/documentaries"],
              ["Starfall", "/starfall"],
              ["The Book", "/great-controversy"],
              ["Bible Studies", "/bible-studies"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setIsMenuOpen(false)} className="border-b border-white/8 py-4 font-sans text-xs tracking-[0.2em] uppercase text-foreground/85 transition-colors hover:text-accent">{label}</Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
