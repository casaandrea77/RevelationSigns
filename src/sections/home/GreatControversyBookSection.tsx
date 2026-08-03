"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants/fade-up";

const BOOK_COVER_SRC = "/assets/media/images/great-controversy-book.png";
const JESUS_ARTWORK_SRC = "/assets/media/images/jesus-artwork.png";

export function GreatControversyBookSection() {
  const [coverAvailable, setCoverAvailable] = useState(true);
  const [artworkAvailable, setArtworkAvailable] = useState(true);

  return (
    <section
      id="the-book"
      aria-labelledby="gc-book-heading"
      className="relative w-full overflow-hidden bg-[#f4efe6] text-[#1a1814]"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_45%,rgba(196,163,90,0.18)_0%,transparent_60%)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-9 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[minmax(0,330px)_1fr_minmax(0,390px)] lg:gap-12 lg:px-12 lg:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto aspect-[3/2] w-full max-w-[330px] overflow-hidden rounded-sm border border-[#1a1814]/15 shadow-[0_22px_55px_rgba(26,24,20,0.2)]"
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
            className="font-sans text-xs tracking-[0.32em] uppercase text-[#8a6728]"
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
            className="mt-6 mx-auto max-w-xl font-sans text-base leading-[1.75] text-[#5c564d] sm:text-lg lg:mx-0"
          >
            Ellen White&rsquo;s classic work traces the conflict between Christ and
            Satan from Heaven to the final restoration&mdash;offered freely to the
            world.
          </motion.p>

          <motion.blockquote
            variants={fadeUp}
            className="mt-7 border-l border-[#b68b3a]/60 pl-5 font-serif text-lg italic leading-relaxed text-[#3f3a31] sm:text-xl lg:max-w-xl"
          >
            &ldquo;In the beginning, God and Christ alone existed.&rdquo;
          </motion.blockquote>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <Link href="https://www.gutenberg.org/ebooks/25833" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 min-w-[11.5rem] items-center justify-center border border-transparent bg-accent px-10 font-sans text-base font-medium tracking-[0.18em] text-background uppercase transition-colors hover:bg-accent-hover">Read Free ↗</Link>
            <Link href="https://librivox.org/the-great-controversy-by-ellen-g-white/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 min-w-[11.5rem] items-center justify-center border border-[#1a1814]/25 px-10 font-sans text-base font-medium tracking-[0.18em] uppercase transition-colors hover:bg-[#1a1814]/5">Listen Free ↗</Link>
            <Link href="https://whiteestate.org/books/ebooks/gc/gc.htm" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 min-w-[11.5rem] items-center justify-center border border-[#1a1814]/25 px-10 font-sans text-base font-medium tracking-[0.18em] uppercase transition-colors hover:bg-[#1a1814]/5">Download Free ↗</Link>
            <Link href="/great-controversy" className="inline-flex min-h-14 min-w-[11.5rem] items-center justify-center border border-[#1a1814]/25 px-10 font-sans text-base font-medium tracking-[0.18em] uppercase transition-colors hover:bg-[#1a1814]/5">Explore the Book</Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto hidden aspect-[3/2] w-full max-w-[390px] overflow-hidden rounded-sm border border-[#1a1814]/15 lg:block"
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
