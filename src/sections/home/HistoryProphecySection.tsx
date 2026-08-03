"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeIn, fadeUp, staggerContainer } from "@/animations/variants/fade-up";

const ARTWORK_SRC = "/assets/media/images/earth-from-space.png";

export function HistoryProphecySection() {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <section
      aria-labelledby="history-prophecy-heading"
      className="relative min-h-[430px] w-full overflow-hidden bg-background text-foreground lg:min-h-[520px]"
    >
      <div aria-hidden className="absolute inset-0">
        {imageAvailable ? (
          <Image
            src={ARTWORK_SRC}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            onError={() => setImageAvailable(false)}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,50,80,0.5)_0%,#080808_70%)]" />
        )}
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,8,8,0.7)_0%,rgba(8,8,8,0.35)_50%,rgba(8,8,8,0.85)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[430px] w-full max-w-[1440px] items-center px-6 py-16 sm:px-10 lg:min-h-[520px] lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-xl text-left"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-sm tracking-[0.4em] uppercase text-accent"
          >
            History &amp; Prophecy
          </motion.p>

          <motion.h2
            id="history-prophecy-heading"
            variants={fadeUp}
            className="sr-only"
          >
            History and Prophecy
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-serif text-[clamp(2.3rem,4.4vw,4rem)] font-light leading-[1.1] tracking-[0.01em]"
          >
            The Bible doesn&rsquo;t just explain the past&hellip;
            <span className="mt-2 block text-accent">
              It reveals where history is going.
            </span>
          </motion.p>

          <motion.div variants={fadeIn} className="mt-8 h-px w-16 bg-accent/80" />

          <motion.div variants={fadeUp} className="mt-10">
            <Button variant="primary" className="min-h-14 min-w-[11.5rem] px-10 text-base">
              Explore Prophecy
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
