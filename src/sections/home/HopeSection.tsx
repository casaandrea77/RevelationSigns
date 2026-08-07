"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/animations/variants/fade-up";

export function HopeSection() {
  return (
    <section id="about" aria-labelledby="hope-heading" className="relative min-h-[520px] overflow-hidden text-[#1a1814]">
      <Image
        src="/assets/media/images/jesus-artwork.png"
        alt="Jesus overlooking a hopeful city at sunrise"
        fill
        className="object-cover object-left sm:object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,239,230,0.96)_0%,rgba(244,239,230,0.82)_38%,rgba(244,239,230,0.18)_70%,transparent_100%)]" />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-[1440px] items-center px-6 py-20 sm:px-10 lg:px-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="max-w-xl">
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.3em] uppercase text-[#8a6728]">
            This Is Only the Beginning
          </motion.p>
          <motion.h2 id="hope-heading" variants={fadeUp} className="mt-4 font-serif text-[clamp(3rem,5.8vw,5.4rem)] font-medium leading-[0.95] tracking-[-0.02em]">
            There Is Hope.<br />Jesus Is Coming Again.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-lg font-sans text-base leading-[1.75] text-[#514a40] sm:text-lg">
            The war will end. Evil will be defeated. And God will make all things new.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <Button variant="primary" className="min-h-13 px-8 text-sm">Discover the Hope</Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
