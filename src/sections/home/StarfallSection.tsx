"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants/fade-up";

const ARTWORK_SRC = "/assets/media/images/starfall-documentary-v2.png";

export function StarfallSection() {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <section
      aria-labelledby="starfall-heading"
      className="relative w-full overflow-hidden bg-[#f4efe6] text-[#1a1814]"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] items-center gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:px-12 lg:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative aspect-[3/2] w-full overflow-hidden rounded-md border border-[#1a1814]/10 shadow-[0_28px_70px_rgba(26,24,20,0.16)] lg:order-1"
        >
          <Link href="/starfall" aria-label="Explore the Starfall documentary" className="block h-full w-full">
            {imageAvailable ? (
              <Image
                src={ARTWORK_SRC}
                alt="Starfall documentary artwork"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={() => setImageAvailable(false)}
              />
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#e8e0d0_0%,#cfc4ae_100%)]" />
            )}
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:order-2"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-sm tracking-[0.4em] uppercase text-[#8a7344]"
          >
            Featured Documentary
          </motion.p>

          <motion.h2
            id="starfall-heading"
            variants={fadeUp}
            className="mt-5 font-serif text-[clamp(2.75rem,5.5vw,4.75rem)] font-light leading-[1.08] tracking-[0.02em]"
          >
            Starfall
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-lg font-sans text-lg leading-[1.85] text-[#5c564d] sm:text-xl"
          >
            Millions are fascinated by UFOs, ancient mysteries, and supernatural
            encounters. Could the Bible already explain what is behind these phenomena?
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <Link
              href="/starfall"
              className="inline-flex min-h-14 min-w-[11.5rem] items-center justify-center border border-transparent bg-[#1a1814] px-10 py-3 font-sans text-base font-medium tracking-[0.18em] text-[#f4efe6] uppercase transition-colors duration-300 hover:bg-[#2a2720]"
            >
              Explore Starfall
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
