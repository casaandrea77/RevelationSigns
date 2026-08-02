"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/animations/variants/fade-up";

const ARTWORK_SRC = "/media/images/starfall-documentary.jpg";

export function StarfallSection() {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <section
      aria-labelledby="starfall-heading"
      className="relative w-full overflow-hidden bg-[#f4efe6] text-[#1a1814]"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[3fr_2fr] lg:gap-14 lg:px-12 lg:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative min-h-[50vh] w-full overflow-hidden rounded-sm border border-[#1a1814]/10 shadow-[0_32px_80px_rgba(26,24,20,0.16)] lg:min-h-[68vh] lg:order-1"
        >
          {imageAvailable ? (
            <Image
              src={ARTWORK_SRC}
              alt="Starfall documentary artwork"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={() => setImageAvailable(false)}
            />
          ) : (
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#e8e0d0_0%,#cfc4ae_100%)]" />
          )}
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
            A cinematic journey through prophecy, rebellion, and the cosmic events
            that changed the universe forever.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <Button
              variant="primary"
              className="min-h-14 min-w-[11.5rem] bg-[#1a1814] px-10 text-base text-[#f4efe6] hover:bg-[#2a2720]"
            >
              Watch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
