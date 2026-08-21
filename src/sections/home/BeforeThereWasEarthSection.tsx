"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants/fade-up";

const ARTWORK_SRC = "/assets/media/images/cosmic-conflict.png";

export function BeforeThereWasEarthSection() {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <section
      aria-labelledby="before-earth-heading"
      className="relative w-full overflow-hidden border-y border-accent/20 bg-[#06101a] text-foreground"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center lg:min-h-[650px] lg:grid-cols-[0.9fr_1.5fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="px-6 py-20 sm:px-10 lg:px-12 lg:py-24"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-sm tracking-[0.4em] uppercase text-accent"
          >
            Before Earth...
          </motion.p>

          <motion.h2
            id="before-earth-heading"
            variants={fadeUp}
            className="mt-5 font-serif text-[clamp(2.25rem,4.5vw,4rem)] font-light leading-[1.1] tracking-[0.02em]"
          >
            There Was War
          </motion.h2>

          <motion.blockquote
            variants={fadeUp}
            className="mt-7 border-l border-accent/50 pl-5 font-serif text-xl italic leading-relaxed text-foreground/90 sm:text-2xl"
          >
            &ldquo;There was war in heaven: Michael and his angels fought against the
            dragon.&rdquo;
          </motion.blockquote>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-sans text-sm tracking-[0.12em] uppercase text-accent/80"
          >
            Revelation 12:7
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl font-sans text-base leading-[1.75] text-muted sm:text-lg"
          >
            Before the first sunrise touched Earth, a rebellion erupted in Heaven.
            Lucifer&rsquo;s defiance against God introduced sin&mdash;and the great
            controversy that would shape all of history.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative aspect-[3/2] w-full overflow-hidden border-t border-border/40 bg-[#06101a] lg:aspect-auto lg:min-h-[650px] lg:border-l lg:border-t-0"
        >
          {imageAvailable ? (
            <Image
              src={ARTWORK_SRC}
              alt="War in Heaven"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={() => setImageAvailable(false)}
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,163,90,0.12)_0%,rgba(17,17,17,1)_70%)]" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#06101a_0%,rgba(6,16,26,0.35)_22%,transparent_55%)]" />
        </motion.div>
      </div>
    </section>
  );
}
