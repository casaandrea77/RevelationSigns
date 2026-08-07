"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer } from "@/animations/variants/fade-up";
import { Footer } from "@/components/layout/Footer";

const STARFALL_DOCUMENTARY_URL = "https://www.youtube.com/watch?v=IbZJOALUPok";

const testimonyLinks = {
  rogerInterview: "https://www.youtube.com/watch?v=Ird-BKuPRlw",
  rogerBiography: "https://tripintothesupernatural.com/",
  rogerFilms: "https://lifestreams.org/films/",
  joeTestimony: "https://www.youtube.com/watch?v=b6tnQlugr1I",
  joeCommunion: "https://www.youtube.com/watch?v=tStmPk9IuQk",
  joeResearch: "https://stopalienabduction.com/",
  alienTrailer: "https://www.youtube.com/watch?v=yJaXRMGfCus",
  alienFilm: "https://www.alienintrusion.com/",
} as const;

const externalLinkClass =
  "inline-flex min-h-12 items-center justify-center border border-accent/70 px-6 py-3 text-center font-sans text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase transition-colors hover:bg-accent hover:text-[#06101a] focus-visible:bg-accent focus-visible:text-[#06101a]";

function EmbeddedVideo({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="relative aspect-video overflow-hidden border border-accent/35 bg-black">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

const scriptureTests = [
  {
    reference: "Isaiah 8:20 · KJV",
    title: "Test every message by Scripture",
    text: "To the law and to the testimony: if they speak not according to this word, it is because there is no light in them.",
  },
  {
    reference: "Matthew 24:24 · KJV",
    title: "Signs can be persuasive",
    text: "For there shall arise false Christs, and false prophets, and shall shew great signs and wonders; insomuch that, if it were possible, they shall deceive the very elect.",
  },
  {
    reference: "2 Corinthians 11:14 · KJV",
    title: "Appearances may mislead",
    text: "And no marvel; for Satan himself is transformed into an angel of light.",
  },
  {
    reference: "1 Thessalonians 5:21 · KJV",
    title: "Examine everything",
    text: "Prove all things; hold fast that which is good.",
  },
] as const;

const relatedDocumentaries = [
  {
    title: "Cosmic Conflict",
    subtitle: "The origin of evil",
    videoId: "JqLIndMA9Ks",
    href: "https://www.amazingfacts.org/watch/special-projects/amazing-facts-documentaries/cosmic-conflict-the-origin-of-evil/",
  },
  {
    title: "Revelation",
    subtitle: "The bride, the beast and Babylon",
    videoId: "vDKG_WFLUi4",
    href: "https://www.amazingfacts.org/watch/en/watch/special-projects/amazing-facts-documentaries/revelation-the-bride-the-beast-and-babylon-2/",
  },
  {
    title: "Armageddon",
    subtitle: "The final events of Bible prophecy",
    videoId: "ieYCzJ81m6I",
    href: "https://www.amazingfacts.org/en/watch/special-projects/amazing-facts-documentaries/armageddon-and-the-final-events-of-bible-prophecy/",
  },
] as const;

export function StarfallPageContent() {
  return (
    <main id="main-content" className="overflow-hidden bg-[#06101a] text-foreground">
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
            A Strange Normal Documentary
          </motion.p>
          <motion.h1 id="starfall-title" variants={fadeUp} className="mt-5 max-w-full font-serif text-[2.55rem] font-medium leading-[0.86] tracking-[0.01em] uppercase sm:text-[clamp(4rem,10vw,9rem)] sm:tracking-[0.06em] lg:tracking-[0.08em]">
            Starfall
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-full break-words font-serif text-xl font-light leading-tight text-foreground/90 sm:max-w-2xl sm:text-[clamp(1.6rem,3vw,2.6rem)]">
            Ancient mysteries. Extraordinary encounters. Biblical answers.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-5">
            <Link href="#watch" className="inline-flex min-h-14 items-center justify-center bg-accent px-9 font-sans text-sm font-semibold tracking-[0.17em] text-[#06101a] uppercase transition-colors hover:bg-accent-hover">
              Watch Documentary ↓
            </Link>
            <span className="font-sans text-xs tracking-[0.22em] text-foreground/70 uppercase">34 minutes · Free on YouTube</span>
          </motion.div>
        </motion.div>
      </section>

      <section id="watch" aria-labelledby="watch-heading" className="bg-[#f4efe6] px-6 py-20 text-[#1a1814] sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative aspect-video overflow-hidden rounded-sm border border-black/10 bg-[#071422] shadow-[0_30px_80px_rgba(26,24,20,0.22)]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/IbZJOALUPok?rel=0"
              title="Starfall – The Strange Connection between Christians and UFOs"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.35em] uppercase text-[#8a6728]">Featured Film</motion.p>
            <motion.h2 id="watch-heading" variants={fadeUp} className="mt-4 font-serif text-[clamp(2.7rem,5vw,4.8rem)] font-medium leading-[0.95]">Look beyond the phenomenon.</motion.h2>
            <motion.p variants={fadeUp} className="mt-7 font-sans text-base leading-[1.8] text-[#5c564d] sm:text-lg">
              Starfall examines why extraordinary encounters captivate us and how Scripture invites us to test supernatural claims with courage, humility, and discernment.
            </motion.p>
            <motion.dl variants={fadeUp} className="mt-8 grid grid-cols-2 gap-6 border-t border-[#1a1814]/15 pt-6 font-sans">
              <div><dt className="text-[0.65rem] tracking-[0.2em] text-[#8a6728] uppercase">Presented by</dt><dd className="mt-2 text-sm">Strange Normal</dd></div>
              <div><dt className="text-[0.65rem] tracking-[0.2em] text-[#8a6728] uppercase">Runtime</dt><dd className="mt-2 text-sm">34 minutes</dd></div>
            </motion.dl>
            <motion.div variants={fadeUp} className="mt-8">
              <Link href={STARFALL_DOCUMENTARY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-[#1a1814]/35 px-7 font-sans text-xs font-semibold tracking-[0.18em] text-[#1a1814] uppercase transition-colors hover:bg-[#1a1814] hover:text-[#f4efe6]">
                Open original on YouTube ↗
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="voices" aria-labelledby="voices-heading" className="border-y border-accent/20 bg-[#040d16] text-foreground">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mx-auto max-w-4xl text-center">
            <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.35em] text-accent uppercase">Testimony and Investigation</motion.p>
            <motion.h2 id="voices-heading" variants={fadeUp} className="mt-5 font-serif text-[clamp(2.8rem,6vw,5.6rem)] font-light leading-[0.95]">Voices that challenge the modern alien story</motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-3xl font-sans text-base leading-[1.8] text-muted sm:text-lg">Personal testimony, documented case reports, and a feature documentary converge on one question: could a spiritual deception be presenting itself as something from the stars?</motion.p>
          </motion.div>

          <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="mt-16 overflow-hidden border border-accent/30 bg-[#071522] lg:grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="font-sans text-[0.68rem] font-semibold tracking-[0.28em] text-accent uppercase">A warning recorded decades ago</p>
              <blockquote className="mt-6 font-serif text-[clamp(2rem,4vw,4rem)] font-light leading-[1.08] text-[#f4efe6]">“Demon spirits will declare themselves to be inhabitants of far-distant planets … coming to warn the inhabitants of planet Earth.”</blockquote>
              <h3 className="mt-8 font-serif text-3xl text-accent sm:text-4xl">From demon worship to faith in Jesus</h3>
              <p className="mt-4 max-w-2xl font-sans text-sm leading-[1.8] text-muted sm:text-base">According to his testimony, Roger J. Morneau became involved with a secret society devoted to spirit worship before leaving it and becoming a Christian author and prayer warrior.</p>
              <p className="mt-4 font-serif text-lg italic text-foreground/75">Roger Morneau — <cite>A Trip Into the Supernatural</cite></p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="#roger-video" className={`${externalLinkClass} bg-accent text-[#06101a] hover:bg-accent-hover`}>Watch full testimony ↓</Link>
                <Link href={testimonyLinks.rogerBiography} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>Explore his story ↗</Link>
              </div>
            </div>
            <div className="relative min-h-[360px] sm:min-h-[480px] lg:min-h-full">
              <Image src="/assets/media/images/roger-morneau-interview.jpg" alt="Roger Morneau speaking during his recorded testimony" fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,13,22,0.75),transparent_55%)] lg:bg-[linear-gradient(to_right,rgba(7,21,34,0.25),transparent_45%)]" />
            </div>
          </motion.article>

          <motion.div id="roger-video" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="mt-6 scroll-mt-28">
            <EmbeddedVideo videoId="Ird-BKuPRlw" title="Roger Morneau — A Trip Into the Supernatural" />
            <Link href={testimonyLinks.rogerInterview} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex font-sans text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">Open original testimony on YouTube ↗</Link>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="mt-6 grid gap-6 md:grid-cols-2">
            {[{ title: "Charmed by Darkness", subtitle: "The life and legacy of Roger Morneau" }, { title: "Beware of Angels", subtitle: "Dramatic stories of supernatural deception" }].map((film, index) => (
              <motion.article key={film.title} variants={fadeUp} className="relative overflow-hidden border border-accent/30 bg-[#091725] p-7 sm:p-9">
                <div className={`absolute inset-0 opacity-20 ${index === 0 ? "bg-[radial-gradient(circle_at_85%_30%,#a46a24,transparent_38%)]" : "bg-[radial-gradient(circle_at_80%_35%,#c4a35a,transparent_35%)]"}`} />
                <div className="relative">
                  <h3 className="font-serif text-4xl text-[#ead6a2]">{film.title}</h3>
                  <p className="mt-3 font-serif text-xl text-foreground/80">{film.subtitle}</p>
                  <Link href={testimonyLinks.rogerFilms} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase">View film information ↗</Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="mt-20 border-y border-accent/30 py-12 lg:grid lg:grid-cols-[0.38fr_0.62fr] lg:items-center lg:gap-14 lg:py-16">
            <div className="mx-auto w-full max-w-[390px]">
              <div className="relative aspect-square overflow-hidden rounded-full border border-accent/50">
                <Image src="/assets/media/images/joseph-jordan.jpg" alt="Joseph Jordan, founder of CE4 Research Group" fill sizes="(max-width: 1024px) 80vw, 28vw" className="object-cover object-center" />
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <p className="font-sans text-[0.68rem] font-semibold tracking-[0.28em] text-accent uppercase">The finding that changed the investigation</p>
              <blockquote className="mt-5 font-serif text-[clamp(2.1rem,4vw,4.2rem)] font-light leading-[1.08]">“The experience was shown to be able to be stopped or terminated by calling on the name and authority of Jesus Christ.”</blockquote>
              <p className="mt-7 font-serif text-2xl text-foreground/80">Hundreds of reported encounters. One recurring response.</p>
              <p className="mt-4 font-sans text-sm leading-[1.7] text-muted sm:text-base"><strong className="text-accent">Joseph G. Jordan</strong> — Founder, CE4 Research Group; MUFON investigator and 30-year lifetime member.</p>
              <Link href={testimonyLinks.joeResearch} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase">View CE4 testimonies and research ↗</Link>
            </div>
          </motion.article>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="mt-6 grid gap-6 lg:grid-cols-2">
            {[
              { id: "b6tnQlugr1I", title: "Testimony of a MUFON Investigator", href: testimonyLinks.joeTestimony },
              { id: "tStmPk9IuQk", title: "Unholy Communion: The Spiritual Nature of Abduction Reports", href: testimonyLinks.joeCommunion },
            ].map((video) => (
              <motion.article key={video.id} variants={fadeUp} className="bg-[#071522] p-4 sm:p-5">
                <EmbeddedVideo videoId={video.id} title={video.title} />
                <h3 className="mt-5 font-serif text-2xl text-[#ead6a2]">{video.title}</h3>
                <Link href={video.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex font-sans text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">Open original on YouTube ↗</Link>
              </motion.article>
            ))}
          </motion.div>

          <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="mt-20 overflow-hidden border border-accent/30 bg-[#071522] lg:grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="font-sans text-[0.68rem] font-semibold tracking-[0.28em] text-accent uppercase">The documentary that unmasks the deception</p>
              <blockquote className="mt-6 font-serif text-[clamp(2.4rem,5vw,5rem)] font-light leading-[1.02]">What if the modern alien story is not what it appears to be?</blockquote>
              <h3 className="mt-8 font-serif text-4xl text-accent">Alien Intrusion</h3>
              <p className="mt-3 font-serif text-xl text-foreground/80">UFOs, evolution, and a biblical explanation.</p>
              <p className="mt-5 font-sans text-sm leading-[1.8] text-muted sm:text-base">Based on the bestselling work of Gary Bates and produced by Creation Ministries International.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="#alien-trailer" className={`${externalLinkClass} bg-accent text-[#06101a] hover:bg-accent-hover`}>Watch official trailer ↓</Link>
                <Link href={testimonyLinks.alienFilm} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>Explore the film ↗</Link>
              </div>
            </div>
            <div className="relative min-h-[520px] bg-[#040d16] p-7 sm:p-10 lg:min-h-[620px] lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(196,163,90,0.18),transparent_40%)]" />
              <div className="relative flex h-full flex-col justify-between gap-10">
                <div id="alien-trailer" className="scroll-mt-28">
                  <EmbeddedVideo videoId="yJaXRMGfCus" title="Alien Intrusion official trailer" />
                  <Link href={testimonyLinks.alienTrailer} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex font-sans text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">Open original trailer on YouTube ↗</Link>
                </div>
                <div className="grid items-center gap-6 sm:grid-cols-[150px_1fr]">
                  <div className="relative mx-auto aspect-[4/5] w-[150px] overflow-hidden border border-accent/60 bg-white">
                    <Image src="/assets/media/images/john-schneider-imdb.jpg" alt="John Schneider, narrator of Alien Intrusion" fill sizes="150px" className="object-cover object-top" />
                  </div>
                  <div>
                    <p className="font-sans text-sm leading-[1.7] text-muted"><strong className="text-accent">Gary Bates</strong> — Author and producer</p>
                    <p className="mt-4 font-sans text-sm leading-[1.7] text-muted"><strong className="text-accent">John Schneider</strong> — Narrator</p>
                    <p className="mt-2 font-sans text-sm leading-[1.7] text-foreground/75">Known for Bo Duke in <cite>The Dukes of Hazzard</cite> and Jonathan Kent in <cite>Smallville</cite>.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
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
                <EmbeddedVideo videoId={item.videoId} title={`${item.title} — ${item.subtitle}`} />
                <div className="p-6">
                  <h3 className="font-serif text-3xl font-light">{item.title}</h3>
                  <p className="mt-2 font-sans text-sm text-muted">{item.subtitle}</p>
                  <Link href={item.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex font-sans text-[0.65rem] font-semibold tracking-[0.22em] text-accent uppercase" aria-label={`Open the official ${item.title} page on Amazing Facts`}>
                    Official Amazing Facts page ↗
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <div className="mt-16 text-center"><Link href="/documentaries" className="inline-flex min-h-14 items-center justify-center border border-accent/60 px-9 font-sans text-sm tracking-[0.17em] uppercase transition-colors hover:bg-accent hover:text-[#06101a]">View all documentaries</Link></div>
        </div>
      </section>

      <section className="border-y border-accent/20 bg-[linear-gradient(110deg,#0b1c2b,#06101a)] px-6 py-20 text-center sm:px-10 lg:py-24" aria-labelledby="final-invitation">
        <div className="mx-auto max-w-3xl"><p className="font-sans text-xs tracking-[0.35em] uppercase text-accent">The mystery is only the beginning</p><h2 id="final-invitation" className="mt-5 font-serif text-[clamp(2.8rem,5vw,4.8rem)] font-light leading-none">Discover the story behind history.</h2><p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-[1.8] text-muted sm:text-lg">Follow the biblical story from the conflict in heaven to the restoration of all things.</p><Link href="/#journey" className="mt-9 inline-flex min-h-14 items-center justify-center bg-accent px-9 font-sans text-sm font-semibold tracking-[0.17em] text-[#06101a] uppercase transition-colors hover:bg-accent-hover">Continue the Journey</Link></div>
      </section>

      <Footer />
    </main>
  );
}
