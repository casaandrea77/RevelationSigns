"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer } from "@/animations/variants/fade-up";

type IconType = "compass" | "swords" | "sunrise";

const features: {
  id: string;
  title: string;
  text: string;
  icon: IconType;
}[] = [
  {
    id: "beginning",
    title: "The Beginning",
    text: "Where did evil begin?",
    icon: "compass",
  },
  {
    id: "battle",
    title: "The Battle",
    text: "Why is our world filled with suffering?",
    icon: "swords",
  },
  {
    id: "promise",
    title: "The Promise",
    text: "What hope does prophecy reveal for the future?",
    icon: "sunrise",
  },
];

function CardIcon({ type }: { type: IconType }) {
  const stroke = "currentColor";

  if (type === "compass") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8 text-accent"
        stroke={stroke}
        strokeWidth="1"
      >
        <circle cx="16" cy="16" r="10.5" />
        <path d="M16 9.5 18.5 16 16 22.5 13.5 16Z" strokeLinejoin="round" />
        <path d="M16 5.5v2M16 24.5v2M5.5 16h2M24.5 16h2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "swords") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8 text-accent"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
      >
        <path d="M9 23 23 9" />
        <path d="M11 21l-3 3M21 11l3-3" />
        <path d="M9 23 6 26M23 9l3-3" />
        <path d="m13 19 6-6M19 13l-6 6" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      fill="none"
      className="h-8 w-8 text-accent"
      stroke={stroke}
      strokeWidth="1"
      strokeLinecap="round"
    >
      <path d="M4 22h24" />
      <path d="M16 22V12" />
      <path d="M10 16h12" />
      <path d="M8 12h16" />
      <path d="M12 8h8" />
      <path d="M14 8V6M18 8V6" />
    </svg>
  );
}

type FeatureCardProps = {
  title: string;
  text: string;
  icon: IconType;
};

function FeatureCard({ title, text, icon }: FeatureCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-sm border border-border/60 bg-background/35 px-8 py-10 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:bg-background/45 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_28px_rgba(196,163,90,0.1)] sm:px-9 sm:py-12"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="mb-8 flex items-center justify-between">
        <CardIcon type={icon} />
        <div
          aria-hidden
          className="h-px flex-1 ml-6 bg-gradient-to-r from-accent/40 to-transparent"
        />
      </div>

      <h3 className="font-sans text-xs font-medium tracking-[0.35em] uppercase text-foreground">
        {title}
      </h3>
      <p className="mt-4 font-serif text-xl font-light leading-snug tracking-[0.02em] text-foreground/90 sm:text-[1.35rem]">
        {text}
      </p>
    </motion.article>
  );
}

export function GreatControversySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="great-controversy-section-heading"
      className="relative w-full overflow-hidden bg-background text-foreground"
    >
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(196,163,90,0.05)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,8,8,0.9)_0%,rgba(8,8,8,0.5)_50%,rgba(8,8,8,0.9)_100%)]" />
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,163,90,0.04),transparent_55%)]"
            animate={{ opacity: [0.45, 0.75, 0.45] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-[850px] px-6 py-32 sm:px-10 sm:py-40 lg:py-44">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            id="great-controversy-section-heading"
            variants={fadeUp}
            className="font-serif text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.12] tracking-[0.02em]"
          >
            What is The Great Controversy?
          </motion.h2>

          <motion.div
            variants={fadeIn}
            aria-hidden
            className="mx-auto mt-12 h-px w-16 bg-accent/80"
          />

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-14 max-w-[740px] font-sans text-base leading-[1.95] text-muted sm:text-lg sm:leading-[2]"
          >
            The Great Controversy is the conflict between Christ and Satan&mdash;a
            cosmic battle between truth and deception, love and selfishness, freedom
            and rebellion. It began in heaven before the creation of Earth, continues
            throughout human history, and reaches its climax in the final events
            described in Bible prophecy. Understanding this conflict helps explain
            the past, the present, and the hope of the future.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-28 grid gap-8 sm:mt-32 md:grid-cols-3 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              text={feature.text}
              icon={feature.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
