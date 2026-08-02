"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/animations/variants/fade-up";

const BOOK_COVER_SRC = "/media/images/great-controversy-book.jpg";
const JESUS_ARTWORK_SRC = "/media/images/jesus-artwork.jpg";

export function GreatControversyBookSection() {
  const [coverAvailable, setCoverAvailable] = useState(true);
  const [artworkAvailable, setArtworkAvailable] = useState(true);

  return (
    <section
      aria-labelledby="gc-book-heading"
      className="relative w-full overflow-hidden bg-background text-foreground"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(196,163,90,0.06)_0%,transparent_55%)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[minmax(0,320px)_1fr_minmax(0,360px)] lg:gap-12 lg:px-12 lg:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto aspect-[2/3] w-full max-w-[320px] overflow-hidden rounded-sm border border-border/60 shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
        >
          {coverAvailable ? (
            <Image
              src={BOOK_COVER_SRC}
              alt="The Great Controversy book cover"
              fill
              className="object-cover"
              sizes="320px"
              onError={() => setCoverAvailable(false)}
            />
          ) : (
            <div className="absolute inset-0 bg-[linear-gradient(160deg,#1a1814_0%,#3d3428_100%)]" />
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center lg:text-left"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-sm tracking-[0.4em] uppercase text-accent"
          >
            The Great Controversy
          </motion.p>

          <motion.h2
            id="gc-book-heading"
            variants={fadeUp}
            className="mt-5 font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] font-light leading-[1.1] tracking-[0.02em]"
          >
            Read the book that explains it all
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl font-sans text-lg leading-[1.85] text-muted sm:text-xl lg:mx-0 mx-auto"
          >
            Ellen White&rsquo;s classic work traces the conflict between Christ and
            Satan from Heaven to the final restoration&mdash;offered freely to the
            world.
          </motion.p>

          <motion.blockquote
            variants={fadeUp}
            className="mt-8 border-l border-accent/50 pl-6 font-serif text-xl italic leading-relaxed text-foreground/90 sm:text-2xl lg:max-w-xl"
          >
            &ldquo;In the beginning, God and Christ alone existed.&rdquo;
          </motion.blockquote>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <Button variant="primary" className="min-h-14 min-w-[11.5rem] px-10 text-base">Read Free</Button>
            <Button variant="secondary" className="min-h-14 min-w-[11.5rem] px-10 text-base">Listen Free</Button>
            <Button variant="secondary" className="min-h-14 min-w-[11.5rem] px-10 text-base">Download Free</Button>
            <Button variant="secondary" className="min-h-14 min-w-[11.5rem] px-10 text-base">Explore the Book</Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto hidden aspect-[3/4] w-full max-w-[360px] overflow-hidden rounded-sm border border-border/60 lg:block"
        >
          {artworkAvailable ? (
            <Image
              src={JESUS_ARTWORK_SRC}
              alt="Jesus artwork"
              fill
              className="object-cover"
              sizes="360px"
              onError={() => setArtworkAvailable(false)}
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,163,90,0.15)_0%,#111_70%)]" />
          )}
        </motion.div>
      </div>
    </section>
  );
}
