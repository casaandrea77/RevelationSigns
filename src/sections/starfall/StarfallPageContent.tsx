"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer } from "@/animations/variants/fade-up";
import { Footer } from "@/components/layout/Footer";

const scriptureTests = [
  {
    reference: "Isaiah 8:20",
    title: "Test every message by Scripture",
    text: "Spiritual claims are not authenticated by wonder alone. Their teaching must agree with God's revealed word.",
  },
  {
    reference: "Matthew 24:24",
    title: "Signs can be persuasive",
    text: "Jesus warned that impressive signs may be used to deceive, making careful discernment essential.",
  },
  {
    reference: "2 Corinthians 11:14",
    title: "Appearances may mislead",
    text: "Something radiant, powerful, or apparently benevolent should not be accepted without spiritual examination.",
  },
  {
    reference: "1 Thessalonians 5:21",
    title: "Examine everything",
    text: "The biblical response is neither automatic belief nor automatic dismissal, but thoughtful testing and holding fast to what is good.",
  },
] as const;

const relatedDocumentaries = [
  {
    title: "Cosmic Conflict",
    subtitle: "The origin of evil",
    image: "/assets/media/images/cosmic-conflict.png",
  },
  {
    title: "Revelation",
    subtitle: "The bride, the beast and Babylon",
    image: "/assets/media/images/revelation-bbb.png",
  },
  {
    title: "Armageddon",
    subtitle: "The final events of Bible prophecy",
    image: "/assets/media/images/armageddon.png",
  },
] as const;

export function StarfallPageContent() {
  return (
    <main className="overflow-hidden bg-[#06101a] text-foreground">
      <section className="relative flex min-h-[760px] items-end overflow-hidden pt-24 lg:min-h-[880px]" aria-labelledby="starfall-title">
        <Image
          src="/assets/media/images/starfall-documentary-v2.png"
          alt="Starfall documentary artwork showing a night sky above an ancient landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#06101a_2%,rgba(6,16,26,0.82)_30%,rgba(6,16,26,0.25)_72%,rgba(6,16,26,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,16,26,0.82),transparent_70%)]" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-20 sm:px-10 lg:px-12 lg:pb-28"
        >
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.34em] uppercase text-accent sm:text-sm">
            A RevelationSigns Documentary
          </motion.p>
          <motion.h1 id="starfall-title" variants={fadeUp} className="mt-5 font-serif text-[clamp(4.5rem,10vw,9rem)] font-medium leading-[0.82] tracking-[0.08em] uppercase">
            Starfall
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light leading-tight text-foreground/90">
            Ancient mysteries. Extraordinary encounters. Biblical answers.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-5">
            <Link href="#watch" className="inline-flex min-h-14 items-center justify-center bg-accent px-9 font-sans text-sm font-semibold tracking-[0.17em] text-[#06101a] uppercase transition-colors hover:bg-accent-hover">
              Watch Documentary
            </Link>
            <span className="font-sans text-xs tracking-[0.22em] text-foreground/70 uppercase">Coming soon · Free to watch</span>
          </motion.div>
        </motion.div>
      </section>

      <section id="watch" aria-labelledby="watch-heading" className="bg-[#f4efe6] px-6 py-20 text-[#1a1814] sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative aspect-video overflow-hidden rounded-sm border border-black/10 bg-[#071422] shadow-[0_30px_80px_rgba(26,24,20,0.22)]">
            <Image src="/assets/media/images/starfall-documentary-v2.png" alt="Starfall documentary video preview" fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover opacity-65" />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-accent bg-black/35 text-2xl text-accent backdrop-blur-sm" aria-hidden>▶</span>
              <p className="mt-5 font-sans text-xs tracking-[0.3em] uppercase">Documentary coming soon</p>
            </div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.35em] uppercase text-[#8a6728]">Featured Film</motion.p>
            <motion.h2 id="watch-heading" variants={fadeUp} className="mt-4 font-serif text-[clamp(2.7rem,5vw,4.8rem)] font-medium leading-[0.95]">Look beyond the phenomenon.</motion.h2>
            <motion.p variants={fadeUp} className="mt-7 font-sans text-base leading-[1.8] text-[#5c564d] sm:text-lg">
              Reports of strange lights and extraordinary encounters raise profound questions. Starfall explores why these stories captivate us—and how Scripture invites us to approach supernatural claims with courage, humility, and discernment.
            </motion.p>
            <motion.dl variants={fadeUp} className="mt-8 grid grid-cols-2 gap-6 border-t border-[#1a1814]/15 pt-6 font-sans">
              <div><dt className="text-[0.65rem] tracking-[0.2em] text-[#8a6728] uppercase">Availability</dt><dd className="mt-2 text-sm">Free to watch</dd></div>
              <div><dt className="text-[0.65rem] tracking-[0.2em] text-[#8a6728] uppercase">Perspective</dt><dd className="mt-2 text-sm">Bible-based</dd></div>
            </motion.dl>
          </motion.div>
        </div>
      </section>

      <section aria-labelledby="discover-heading" className="relative px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,163,90,0.09),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1200px]">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mx-auto max-w-3xl text-center">
            <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.35em] uppercase text-accent">What You’ll Discover</motion.p>
            <motion.h2 id="discover-heading" variants={fadeUp} className="mt-5 font-serif text-[clamp(2.8rem,5vw,5rem)] font-light leading-none">A mystery worth examining carefully</motion.h2>
            <motion.p variants={fadeUp} className="mt-7 font-sans text-base leading-[1.8] text-muted sm:text-lg">Starfall separates speculation from evidence and asks a deeper question: what framework does the Bible give us for understanding unusual spiritual claims?</motion.p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mt-14 grid gap-px overflow-hidden border border-accent/20 bg-accent/20 md:grid-cols-3">
            {[
              ["01", "The fascination", "Why stories of visitors, ancient mysteries, and unexplained encounters have become part of modern culture."],
              ["02", "The unseen conflict", "How the Bible describes a spiritual controversy larger than the world we can see."],
              ["03", "The test of truth", "Practical biblical principles for evaluating extraordinary messages without fear or credulity."],
            ].map(([number, title, text]) => (
              <motion.article key={number} variants={fadeUp} className="bg-[#06101a] p-8 sm:p-10">
                <span className="font-serif text-4xl text-accent/45">{number}</span>
                <h3 className="mt-8 font-serif text-3xl font-light">{title}</h3>
                <p className="mt-4 font-sans text-sm leading-[1.8] text-muted sm:text-base">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section aria-labelledby="scripture-heading" className="bg-[#eee7da] px-6 py-20 text-[#1a1814] sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-3xl">
            <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.35em] uppercase text-[#8a6728]">A Biblical Framework</motion.p>
            <motion.h2 id="scripture-heading" variants={fadeUp} className="mt-5 font-serif text-[clamp(2.8rem,5vw,5rem)] font-medium leading-none">Test every claim. Hold fast to truth.</motion.h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {scriptureTests.map((item) => (
              <motion.article key={item.reference} variants={fadeUp} className="border-t border-[#8a6728]/35 pt-6">
                <p className="font-sans text-xs font-semibold tracking-[0.25em] text-[#8a6728] uppercase">{item.reference}</p>
                <h3 className="mt-3 font-serif text-3xl font-medium">{item.title}</h3>
                <p className="mt-4 font-sans text-base leading-[1.75] text-[#5c564d]">{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section aria-labelledby="related-heading" className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center">
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-accent">Continue the Journey</p>
            <h2 id="related-heading" className="mt-5 font-serif text-[clamp(2.7rem,5vw,4.5rem)] font-light">Related documentaries</h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mt-12 grid gap-7 md:grid-cols-3">
            {relatedDocumentaries.map((item) => (
              <motion.article key={item.title} variants={fadeUp} className="group overflow-hidden border border-accent/30 bg-black/20">
                <div className="relative aspect-[3/2] overflow-hidden"><Image src={item.image} alt={`${item.title} documentary artwork`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div>
                <div className="p-6"><h3 className="font-serif text-3xl font-light">{item.title}</h3><p className="mt-2 font-sans text-sm text-muted">{item.subtitle}</p><span className="mt-5 block font-sans text-[0.65rem] tracking-[0.28em] text-accent uppercase">Coming next</span></div>
              </motion.article>
            ))}
          </motion.div>
          <div className="mt-16 text-center"><Link href="/#documentaries" className="inline-flex min-h-14 items-center justify-center border border-accent/60 px-9 font-sans text-sm tracking-[0.17em] uppercase transition-colors hover:bg-accent hover:text-[#06101a]">View all documentaries</Link></div>
        </div>
      </section>

      <section className="border-y border-accent/20 bg-[linear-gradient(110deg,#0b1c2b,#06101a)] px-6 py-20 text-center sm:px-10 lg:py-24" aria-labelledby="final-invitation">
        <div className="mx-auto max-w-3xl"><p className="font-sans text-xs tracking-[0.35em] uppercase text-accent">The mystery is only the beginning</p><h2 id="final-invitation" className="mt-5 font-serif text-[clamp(2.8rem,5vw,4.8rem)] font-light leading-none">Discover the story behind history.</h2><p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-[1.8] text-muted sm:text-lg">Follow the biblical story from the conflict in heaven to the restoration of all things.</p><Link href="/#journey" className="mt-9 inline-flex min-h-14 items-center justify-center bg-accent px-9 font-sans text-sm font-semibold tracking-[0.17em] text-[#06101a] uppercase transition-colors hover:bg-accent-hover">Continue the Journey</Link></div>
      </section>

      <Footer />
    </main>
  );
}
