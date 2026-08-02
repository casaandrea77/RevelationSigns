"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeIn, fadeUp, staggerContainer } from "@/animations/variants/fade-up";

const HERO_VIDEO_SRC = "/media/videos/hero-sunrise.mp4";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [videoAvailable, setVideoAvailable] = useState(true);

  const showVideo = videoAvailable && !prefersReducedMotion;

  return (
    <section
      aria-label="Hero"
      className="relative h-dvh w-full overflow-hidden bg-background text-foreground"
    >
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-surface" />

        {showVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
            onError={() => setVideoAvailable(false)}
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,163,90,0.08)_0%,transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,8,8,0.35)_0%,rgba(8,8,8,0.6)_45%,rgba(8,8,8,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,8,8,0.7)_0%,transparent_42%,transparent_58%,rgba(8,8,8,0.7)_100%)]" />
        </div>
      </div>

      <div className="relative z-10 flex h-full items-end">
        <motion.div
          className="mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-16 lg:pb-28"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 font-sans text-sm tracking-[0.4em] uppercase text-accent"
          >
            Past &bull; Present &bull; Future
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-5xl font-serif text-[clamp(3rem,7.5vw,6.25rem)] font-light uppercase leading-[1.06] tracking-[0.06em]"
          >
            The Great Controversy
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-muted sm:text-xl"
          >
            Discover the conflict that explains our world&mdash;and the hope that
            changes everything.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center"
          >
            <Button variant="primary" className="min-h-14 min-w-[11.5rem] px-10 text-base">
              Begin the Journey
            </Button>
            <Button variant="secondary" className="min-h-14 min-w-[11.5rem] px-10 text-base">
              Read the Book
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
  );
}
