"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer } from "@/animations/variants/fade-up";

export function WhatIsGreatControversy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="what-is-great-controversy"
      className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-background text-foreground"
    >
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(244,239,230,0.04)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(244,239,230,0.025)_0%,transparent_40%,rgba(17,17,17,0.6)_100%)]" />
        <div className="absolute inset-0 opacity-[0.035] bg-[repeating-linear-gradient(135deg,rgba(244,239,230,0.15)_0px,rgba(244,239,230,0.15)_1px,transparent_1px,transparent_24px)]" />
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,163,90,0.04),transparent_55%)]"
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/80 to-transparent"
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-3xl px-6 py-32 text-center sm:px-10 sm:py-40"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.h2
          id="what-is-great-controversy"
          variants={fadeUp}
          className="font-serif text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.12] tracking-[0.02em] text-foreground"
        >
          What is The Great Controversy?
        </motion.h2>

        <motion.div
          variants={fadeIn}
          aria-hidden
          className="mx-auto mt-8 h-px w-16 bg-accent/80"
        />

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-10 max-w-2xl font-sans text-base leading-[1.85] text-muted sm:text-lg sm:leading-[1.9]"
        >
          The Great Controversy is the vast, unfolding conflict between Christ and
          Satan&mdash;a struggle for the loyalty of every heart, written across
          Scripture, etched into history, and reaching toward the final restoration
          of all things.
        </motion.p>
      </motion.div>

      <motion.div
        className="relative z-10 mb-16 flex flex-col items-center gap-3"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        aria-hidden
      >
        <span className="font-sans text-[0.625rem] tracking-[0.35em] uppercase text-muted/70">
          Scroll
        </span>
        <motion.span
          className="block h-10 w-px origin-top bg-gradient-to-b from-accent/70 to-transparent"
          animate={prefersReducedMotion ? undefined : { scaleY: [0.6, 1, 0.6], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
