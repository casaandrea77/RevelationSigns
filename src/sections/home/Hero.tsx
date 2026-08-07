"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeIn, fadeUp, staggerContainer } from "@/animations/variants/fade-up";
import { useIsMobileViewport } from "@/hooks/useIsMobileViewport";

const HERO_VIDEOS = {
  desktop: "/media/videos/hero-intro-desktop.mp4",
  mobile: "/media/videos/hero-intro-mobile.mp4",
} as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { isMobile, hasResolved } = useIsMobileViewport();
  const [videoAvailable, setVideoAvailable] = useState(true);
  const [introOpen, setIntroOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const heroVideoSrc = isMobile ? HERO_VIDEOS.mobile : HERO_VIDEOS.desktop;
  const showVideo = videoAvailable && !prefersReducedMotion && hasResolved;

  useEffect(() => {
    if (!introOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIntroOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [introOpen]);

  return (
    <>
      <section
        aria-label="Hero"
        id="journey"
        className="relative min-h-[760px] w-full overflow-hidden bg-background text-foreground lg:h-[92vh] lg:min-h-[720px]"
      >
        <div aria-hidden className="absolute inset-0">
          <div className="absolute inset-0 bg-surface" />

          {showVideo && (
            <video
              key={heroVideoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
              className={`pointer-events-none absolute inset-0 z-0 h-full w-full object-cover ${
                isMobile ? "object-center" : ""
              }`}
              onError={() => setVideoAvailable(false)}
            >
              <source src={heroVideoSrc} type="video/mp4" />
            </video>
          )}

          {!showVideo && !prefersReducedMotion && (
            <motion.div
              className="absolute inset-[-10%] z-0 bg-[radial-gradient(circle_at_30%_40%,rgba(196,163,90,0.06),transparent_45%)]"
              animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          <div className="pointer-events-none absolute inset-0 z-[1]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_64%_45%,transparent_0%,rgba(4,10,16,0.08)_50%,rgba(4,10,16,0.38)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,10,16,0.1)_0%,rgba(4,10,16,0.12)_60%,rgba(4,10,16,0.48)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,10,16,0.62)_0%,rgba(4,10,16,0.2)_48%,transparent_76%)]" />
          </div>
        </div>

        <div className="relative z-10 flex min-h-[760px] items-center lg:h-full lg:min-h-0">
          <motion.div
            className="mx-auto w-full max-w-[1440px] px-6 pb-20 pt-36 sm:px-10 lg:px-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 font-sans text-xs tracking-[0.3em] uppercase text-accent"
            >
              Ancient Prophecy &bull; Eternal Truth
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-[760px] font-serif text-[clamp(3.6rem,7vw,6.7rem)] font-medium leading-[0.92] tracking-[-0.03em]"
            >
              Discover the Story Behind History
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl font-sans text-base leading-relaxed text-foreground/85 sm:text-lg"
            >
              The Bible reveals one continuous story&mdash;from the rebellion in heaven
              to the restoration of all things.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="#before-earth"
                className="inline-flex min-h-14 min-w-[11.5rem] items-center justify-center border border-transparent bg-accent px-10 py-3 font-sans text-base font-medium tracking-[0.18em] text-background uppercase transition-colors duration-300 hover:bg-accent-hover"
              >
                Begin the Journey
              </Link>
              <Button
                variant="secondary"
                className="min-h-14 min-w-[11.5rem] px-10 text-base"
                aria-haspopup="dialog"
                onClick={() => setIntroOpen(true)}
              >
                Watch Intro
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        />
      </section>

      <AnimatePresence>
        {introOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="intro-video-title"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIntroOpen(false);
            }}
          >
            <motion.div
              className="relative w-full max-w-6xl"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 id="intro-video-title" className="font-serif text-2xl text-foreground sm:text-3xl">
                  RevelationSigns Introduction
                </h2>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setIntroOpen(false)}
                  className="inline-flex min-h-11 items-center justify-center border border-foreground/25 px-5 font-sans text-xs tracking-[0.18em] text-foreground uppercase transition-colors hover:border-foreground/60 hover:bg-foreground/10"
                  aria-label="Close introduction video"
                >
                  Close
                </button>
              </div>

              <video
                key={`intro-${heroVideoSrc}`}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className={
                  isMobile
                    ? "mx-auto aspect-[9/16] max-h-[78vh] w-full max-w-sm bg-black shadow-2xl"
                    : "aspect-video w-full bg-black shadow-2xl"
                }
              >
                <source src={heroVideoSrc} type="video/mp4" />
                Your browser does not support the video player.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
