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
      id="journey"
      className="relative min-h-[760px] w-full overflow-hidden bg-background text-foreground lg:h-[92vh] lg:min-h-[720px]"
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
            <Button variant="primary" className="min-h-14 min-w-[11.5rem] px-10 text-base">
              Begin the Journey
            </Button>
            <Button variant="secondary" className="min-h-14 min-w-[11.5rem] px-10 text-base">
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
  );
}
