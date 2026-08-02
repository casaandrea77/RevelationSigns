"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { Kingdom } from "./kingdoms";

type KingdomItemProps = {
  kingdom: Kingdom;
  index: number;
};

function KingdomIcon({ kingdom }: { kingdom: Kingdom }) {
  const isDivided = kingdom.id === "divided";
  const isEternal = kingdom.id === "eternal";

  return (
    <div
      aria-hidden
      className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border/60 sm:h-16 sm:w-16"
      style={{
        background: isDivided
          ? `linear-gradient(135deg, ${kingdom.color}40 50%, ${kingdom.secondaryColor}40 50%)`
          : `${kingdom.color}18`,
        boxShadow: isEternal ? `0 0 24px ${kingdom.color}30` : undefined,
      }}
    >
      <div
        className="h-6 w-6 rounded-sm sm:h-7 sm:w-7"
        style={{
          backgroundColor: isDivided ? undefined : kingdom.color,
          background: isDivided
            ? `linear-gradient(135deg, ${kingdom.color} 50%, ${kingdom.secondaryColor} 50%)`
            : kingdom.color,
          opacity: isEternal ? 0.95 : 0.85,
        }}
      />
    </div>
  );
}

function KingdomItem({ kingdom, index }: KingdomItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "center center", "end 0.25"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5, 0.65, 1],
    prefersReducedMotion ? [1, 1, 1, 1, 1] : [0.2, 0.85, 1, 0.85, 0.2],
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5, 0.65, 1],
    prefersReducedMotion ? [1, 1, 1, 1, 1] : [0.96, 0.98, 1, 0.98, 0.96],
  );

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    prefersReducedMotion ? [0, 0, 0] : [12, 0, -12],
  );

  return (
    <div
      ref={ref}
      className="relative flex min-h-[80vh] items-center py-12 sm:min-h-[85vh] sm:py-16"
    >
      <motion.article
        style={{ opacity, scale, x }}
        className="grid w-full grid-cols-[auto_1fr] gap-6 sm:gap-10"
        aria-label={`${kingdom.name}, ${kingdom.metal}`}
      >
        <div className="flex flex-col items-center">
          <KingdomIcon kingdom={kingdom} />
          {index < 5 && (
            <div
              aria-hidden
              className="mt-4 hidden w-px flex-1 min-h-[8rem] bg-gradient-to-b from-border via-accent/30 to-border sm:block"
            />
          )}
        </div>

        <div className="flex flex-col justify-center pt-1">
          <span
            className="font-sans text-[0.625rem] tracking-[0.35em] uppercase"
            style={{ color: kingdom.color }}
          >
            {kingdom.metal}
          </span>
          <h3 className="mt-2 font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-light tracking-[0.03em] text-foreground">
            {kingdom.name}
          </h3>
          <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-muted sm:text-base">
            {kingdom.description}
          </p>
        </div>
      </motion.article>
    </div>
  );
}

export { KingdomItem, KingdomIcon };
