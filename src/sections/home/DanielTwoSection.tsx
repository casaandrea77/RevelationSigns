"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer } from "@/animations/variants/fade-up";
import { KingdomItem } from "./daniel-two/KingdomItem";
import { kingdoms } from "./daniel-two/kingdoms";

export function DanielTwoSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="daniel-two-heading"
      className="relative w-full overflow-hidden bg-background text-foreground"
    >
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(196,163,90,0.06)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,8,8,0.95)_0%,rgba(8,8,8,0.6)_50%,rgba(8,8,8,0.95)_100%)]" />
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(196,163,90,0.04),transparent_50%)]"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 sm:px-10 lg:px-16">
        <motion.header
          className="pb-8 pt-28 text-center sm:pb-12 sm:pt-36"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-xs tracking-[0.4em] uppercase text-accent"
          >
            Daniel 2
          </motion.p>

          <motion.h2
            id="daniel-two-heading"
            variants={fadeUp}
            className="mt-6 font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.12] tracking-[0.02em]"
          >
            The Prophecy of Kingdoms
          </motion.h2>

          <motion.div
            variants={fadeIn}
            aria-hidden
            className="mx-auto mt-8 h-px w-16 bg-accent/80"
          />

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-muted sm:text-lg"
          >
            In Nebuchadnezzar&rsquo;s dream, a great image revealed the rise and
            fall of empires&mdash;each kingdom giving way to the next, until the
            eternal reign of God.
          </motion.p>
        </motion.header>

        <div className="relative">
          <div
            aria-hidden
            className="absolute bottom-0 left-7 top-0 hidden w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent sm:left-8 sm:block"
          />

          {kingdoms.map((kingdom, index) => (
            <KingdomItem key={kingdom.id} kingdom={kingdom} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
