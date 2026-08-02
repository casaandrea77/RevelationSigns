"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants/fade-up";

const ARTWORK_SRC = "/media/images/war-in-heaven.jpg";

export function BeforeThereWasEarthSection() {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <section
      aria-labelledby="before-earth-heading"
      className="relative w-full overflow-hidden bg-background text-foreground"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[2fr_3fr] lg:gap-12 lg:px-12 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-sm tracking-[0.4em] uppercase text-accent"
          >
            Before There Was Earth
          </motion.p>

          <motion.h2
            id="before-earth-heading"
            variants={fadeUp}
            className="mt-5 font-serif text-[clamp(2.25rem,4.5vw,4rem)] font-light leading-[1.1] tracking-[0.02em]"
          >
            The conflict began in Heaven
          </motion.h2>

          <motion.blockquote
            variants={fadeUp}
            className="mt-8 border-l border-accent/50 pl-6 font-serif text-2xl italic leading-relaxed text-foreground/90 sm:text-3xl"
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
            className="mt-8 max-w-xl font-sans text-lg leading-[1.85] text-muted sm:text-xl"
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
          className="relative min-h-[65vh] w-full overflow-hidden rounded-sm border border-border/60 lg:min-h-[78vh]"
        >
          {imageAvailable ? (
            <Image
              src={ARTWORK_SRC}
              alt="War in Heaven"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={() => setImageAvailable(false)}
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,163,90,0.12)_0%,rgba(17,17,17,1)_70%)]" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
