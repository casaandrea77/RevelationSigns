"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants/fade-up";

const documentaries = [
  {
    id: "cosmic-conflict",
    title: "Cosmic Conflict",
    description: "The origin of evil and the war that began before Earth.",
    image: "/assets/media/images/cosmic-conflict.png",
    href: "https://www.amazingfacts.org/watch/special-projects/amazing-facts-documentaries/cosmic-conflict-the-origin-of-evil/",
  },
  {
    id: "revelation-bbb",
    title: "Revelation: Bride, Beast & Babylon",
    description: "Prophecy decoded for the world we live in today.",
    image: "/assets/media/images/revelation-bbb.png",
    href: "https://www.amazingfacts.org/watch/en/watch/special-projects/amazing-facts-documentaries/revelation-the-bride-the-beast-and-babylon-2/",
  },
  {
    id: "armageddon",
    title: "Armageddon",
    description: "The final battle and the hope beyond the storm.",
    image: "/assets/media/images/armageddon.png",
    href: "https://www.amazingfacts.org/en/watch/special-projects/amazing-facts-documentaries/armageddon-and-the-final-events-of-bible-prophecy/",
  },
] as const;

type DocumentaryCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

function DocumentaryCard({ title, description, image, href }: DocumentaryCardProps) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-accent/40 bg-background/35 backdrop-blur-md transition-all duration-300 hover:border-accent/70 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_24px_rgba(196,163,90,0.08)]"
    >
      <Link href={href} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col" aria-label={`Watch ${title} on Amazing Facts`}>
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        {imageAvailable ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setImageAvailable(false)}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,163,90,0.1)_0%,#111_70%)]" />
        )}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-serif text-[clamp(1.45rem,2.3vw,1.9rem)] font-light tracking-[0.03em]">{title}</h3>
        <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
        <span className="mt-6 font-sans text-[0.625rem] tracking-[0.3em] uppercase text-accent">
          Watch Free ↗
        </span>
      </div>
      </Link>
    </motion.article>
  );
}

export function AmazingFactsSection() {
  return (
    <section
      id="documentaries"
      aria-labelledby="amazing-facts-heading"
      className="relative w-full overflow-hidden bg-background text-foreground"
    >
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,163,90,0.05)_0%,transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-sm tracking-[0.4em] uppercase text-accent"
          >
            Continue Watching
          </motion.p>
          <motion.h2
            id="amazing-facts-heading"
            variants={fadeUp}
            className="mt-5 font-serif text-[clamp(2.25rem,4.5vw,4rem)] font-light tracking-[0.02em]"
          >
            Powerful Bible Prophecy Documentaries
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-7 md:mt-12 md:grid-cols-3 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {documentaries.map((doc) => (
            <DocumentaryCard
              key={doc.id}
              title={doc.title}
              description={doc.description}
              image={doc.image}
              href={doc.href}
            />
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Link href="/documentaries" className="inline-flex min-h-13 items-center justify-center border border-accent/60 px-8 font-sans text-xs tracking-[0.2em] uppercase transition-colors hover:bg-accent hover:text-[#06101a]">
            View All Documentaries
          </Link>
        </div>
      </div>
    </section>
  );
}
