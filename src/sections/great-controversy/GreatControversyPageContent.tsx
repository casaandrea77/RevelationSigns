"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer } from "@/animations/variants/fade-up";
import { Footer } from "@/components/layout/Footer";

const themes = [
  { number: "01", title: "A conflict over God's character", text: "The book presents history as part of a wider controversy concerning God's goodness, freedom, justice, and love." },
  { number: "02", title: "Truth preserved through history", text: "From Jerusalem through the Reformation, it traces people who sought to follow Scripture despite persecution and spiritual darkness." },
  { number: "03", title: "Prophecy and the final crisis", text: "Its closing chapters interpret biblical prophecy and describe the choices confronting humanity before Christ's return." },
  { number: "04", title: "The restoration of all things", text: "The story ends with evil defeated, creation restored, and the universe secure in God's love." },
] as const;

export function GreatControversyPageContent() {
  return (
    <main className="overflow-hidden bg-[#06101a] text-foreground">
      <section className="relative min-h-[820px] overflow-hidden pt-24" aria-labelledby="gc-title">
        <Image src="/assets/media/images/great-controversy-book.png" alt="The Great Controversy artwork" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,16,26,0.94)_0%,rgba(6,16,26,0.7)_43%,rgba(6,16,26,0.15)_78%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#06101a_0%,transparent_48%,rgba(6,16,26,0.35)_100%)]" />
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 mx-auto flex min-h-[720px] max-w-[1440px] flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.35em] uppercase text-accent">The Complete Story</motion.p>
          <motion.h1 id="gc-title" variants={fadeUp} className="mt-5 max-w-4xl font-serif text-[clamp(4rem,8vw,7.8rem)] font-medium leading-[0.86] tracking-[-0.025em]">The Great Controversy</motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl font-serif text-[clamp(1.5rem,3vw,2.4rem)] font-light leading-tight text-foreground/85">The conflict between Christ and Satan—from rebellion to restoration.</motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <Link href="https://www.gutenberg.org/ebooks/25833" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center bg-accent px-8 font-sans text-xs font-semibold tracking-[0.2em] text-[#06101a] uppercase hover:bg-accent-hover">Read Free ↗</Link>
            <Link href="https://librivox.org/the-great-controversy-by-ellen-g-white/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center border border-accent/50 px-8 font-sans text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-[#06101a]">Listen Free ↗</Link>
            <Link href="https://whiteestate.org/books/ebooks/gc/gc.htm" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center border border-accent/50 px-8 font-sans text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-[#06101a]">Download Free ↗</Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[#f4efe6] px-6 py-20 text-[#1a1814] sm:px-10 lg:px-12 lg:py-28" aria-labelledby="book-introduction">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative mx-auto aspect-[3/4] w-full max-w-[410px] overflow-hidden border border-black/10 shadow-[0_28px_70px_rgba(26,24,20,0.2)]"><Image src="/assets/media/images/great-controversy-book.png" alt="The Great Controversy book and landscape" fill sizes="410px" className="object-cover" /></motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.35em] uppercase text-[#8a6728]">Why This Book?</motion.p>
            <motion.h2 id="book-introduction" variants={fadeUp} className="mt-5 font-serif text-[clamp(3rem,5.5vw,5.3rem)] font-medium leading-[0.94]">History seen through a spiritual lens</motion.h2>
            <motion.p variants={fadeUp} className="mt-7 font-sans text-base leading-[1.85] text-[#5c564d] sm:text-lg">First published in its expanded form in the nineteenth century and revised in 1911, Ellen G. White&apos;s work follows the Christian story from the destruction of Jerusalem, through the Reformation, and into its interpretation of the final events described in Scripture.</motion.p>
            <motion.p variants={fadeUp} className="mt-5 font-sans text-base leading-[1.85] text-[#5c564d] sm:text-lg">It is offered here as a companion for study—not as a replacement for the Bible. Every historical claim and spiritual teaching should be examined carefully, with Scripture remaining the final standard.</motion.p>
            <motion.blockquote variants={fadeUp} className="mt-8 border-l-2 border-[#a77b2a] pl-6 font-serif text-2xl italic leading-relaxed text-[#3d372e]">Read thoughtfully. Compare faithfully. Hold fast to what is true.</motion.blockquote>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28" aria-labelledby="themes-heading">
        <div className="mx-auto max-w-[1200px]">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-3xl"><p className="font-sans text-xs tracking-[0.35em] uppercase text-accent">The Journey</p><h2 id="themes-heading" className="mt-5 font-serif text-[clamp(3rem,5vw,5rem)] font-light leading-none">Four movements of the story</h2></motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="mt-14 grid gap-px overflow-hidden border border-accent/20 bg-accent/20 md:grid-cols-2">
            {themes.map((theme) => <motion.article key={theme.number} variants={fadeUp} className="bg-[#06101a] p-8 sm:p-10"><span className="font-serif text-4xl text-accent/40">{theme.number}</span><h3 className="mt-7 font-serif text-3xl font-light sm:text-4xl">{theme.title}</h3><p className="mt-4 font-sans text-base leading-[1.8] text-muted">{theme.text}</p></motion.article>)}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#eee7da] px-6 py-20 text-[#1a1814] sm:px-10 lg:px-12 lg:py-28" aria-labelledby="scripture-test-heading">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div><p className="font-sans text-xs tracking-[0.35em] uppercase text-[#8a6728]">The Essential Principle</p><h2 id="scripture-test-heading" className="mt-5 font-serif text-[clamp(3rem,5vw,5rem)] font-medium leading-none">Test every teaching by Scripture</h2><p className="mt-7 max-w-2xl font-sans text-base leading-[1.85] text-[#5c564d] sm:text-lg">The Bereans were commended for examining the Scriptures daily to determine whether what they heard was true. That remains the right approach to this book—and to every religious teacher or tradition.</p></div>
          <div className="border border-[#8a6728]/30 bg-white/35 p-8 sm:p-10"><p className="font-serif text-3xl italic leading-relaxed">“They received the word with all readiness, and searched the Scriptures daily to find out whether these things were so.”</p><p className="mt-6 font-sans text-xs font-semibold tracking-[0.25em] text-[#8a6728] uppercase">Acts 17:11</p></div>
        </div>
      </section>

      <section className="px-6 py-20 text-center sm:px-10 lg:py-24" aria-labelledby="book-resources"><div className="mx-auto max-w-3xl"><p className="font-sans text-xs tracking-[0.35em] uppercase text-accent">Available Freely</p><h2 id="book-resources" className="mt-5 font-serif text-[clamp(3rem,5vw,4.8rem)] font-light leading-none">Choose how you want to explore</h2><div className="mt-10 flex flex-wrap justify-center gap-3"><Link href="https://www.gutenberg.org/ebooks/25833" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center bg-accent px-8 font-sans text-xs font-semibold tracking-[0.2em] text-[#06101a] uppercase">Read Online ↗</Link><Link href="https://librivox.org/the-great-controversy-by-ellen-g-white/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center border border-accent/50 px-8 font-sans text-xs tracking-[0.2em] uppercase">Audiobook ↗</Link><Link href="https://whiteestate.org/books/ebooks/gc/gc.htm" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center border border-accent/50 px-8 font-sans text-xs tracking-[0.2em] uppercase">PDF & eBook ↗</Link><Link href="/bible-studies" className="inline-flex min-h-14 items-center justify-center border border-accent/50 px-8 font-sans text-xs tracking-[0.2em] uppercase">Study the Bible</Link></div></div></section>
      <Footer />
    </main>
  );
}
