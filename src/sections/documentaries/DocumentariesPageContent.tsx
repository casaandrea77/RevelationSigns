"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer } from "@/animations/variants/fade-up";
import { Footer } from "@/components/layout/Footer";

const documentaries = [
  {
    title: "Cosmic Conflict",
    subtitle: "The Origin of Evil",
    description:
      "Trace the conflict between good and evil from Lucifer's rebellion in heaven through the fall of humanity and God's plan of restoration.",
    image: "/assets/media/images/cosmic-conflict.png",
    videoId: "JqLIndMA9Ks",
    href: "https://www.amazingfacts.org/watch/special-projects/amazing-facts-documentaries/cosmic-conflict-the-origin-of-evil/",
    topics: ["Origin of evil", "War in heaven", "God's character"],
  },
  {
    title: "Revelation",
    subtitle: "The Bride, the Beast and Babylon",
    description:
      "Journey through Revelation 12 and 17, church history, the Reformation, and the prophetic symbols at the heart of Christianity's story.",
    image: "/assets/media/images/revelation-bbb.png",
    videoId: "vDKG_WFLUi4",
    href: "https://www.amazingfacts.org/watch/en/watch/special-projects/amazing-facts-documentaries/revelation-the-bride-the-beast-and-babylon-2/",
    topics: ["Revelation 12", "Revelation 17", "Church history"],
  },
  {
    title: "Armageddon",
    subtitle: "The Final Events of Bible Prophecy",
    description:
      "Explore the meaning of Armageddon, the return of Christ, the millennium, final judgment, and the ultimate triumph of God's kingdom.",
    image: "/assets/media/images/armageddon.png",
    videoId: "ieYCzJ81m6I",
    href: "https://www.amazingfacts.org/en/watch/special-projects/amazing-facts-documentaries/armageddon-and-the-final-events-of-bible-prophecy/",
    topics: ["Final events", "Second Coming", "God's kingdom"],
  },
] as const;

export function DocumentariesPageContent() {
  return (
    <main className="overflow-hidden bg-[#06101a] text-foreground">
      <section className="relative min-h-[620px] overflow-hidden pt-24" aria-labelledby="documentaries-title">
        <Image src="/assets/media/images/earth-from-space.png" alt="Earth illuminated from space" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,16,26,0.55),#06101a_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,16,26,0.88),rgba(6,16,26,0.18))]" />
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 mx-auto flex min-h-[520px] max-w-[1440px] flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.35em] uppercase text-accent">Watch and Explore</motion.p>
          <motion.h1 id="documentaries-title" variants={fadeUp} className="mt-5 max-w-4xl font-serif text-[clamp(3.8rem,8vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.02em]">Powerful Bible Documentaries</motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl font-sans text-base leading-[1.8] text-foreground/80 sm:text-lg">Follow the great controversy from its beginning in heaven to the final restoration of all things through these Bible-based films from Amazing Facts.</motion.p>
        </motion.div>
      </section>

      <section aria-labelledby="featured-films" className="px-6 pb-24 sm:px-10 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-[1320px]">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="border-b border-accent/25 pb-8">
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-accent">Presented by Amazing Facts</p>
            <h2 id="featured-films" className="mt-4 font-serif text-[clamp(2.5rem,4.5vw,4rem)] font-light">Choose a documentary</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} className="mt-12 space-y-10">
            {documentaries.map((film, index) => (
              <motion.article key={film.title} variants={fadeUp} className="group grid overflow-hidden border border-accent/25 bg-black/15 lg:grid-cols-[1.05fr_0.95fr]">
                <div className={`flex min-h-[280px] items-center bg-black p-3 sm:min-h-[430px] sm:p-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-video w-full overflow-hidden border border-accent/30 bg-black">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${film.videoId}?rel=0`}
                      title={`${film.title}: ${film.subtitle}`}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={`flex flex-col justify-center p-8 sm:p-12 lg:p-14 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-accent">Documentary {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 font-serif text-[clamp(2.8rem,5vw,4.8rem)] font-light leading-none">{film.title}</h3>
                  <p className="mt-3 font-serif text-xl italic text-foreground/75 sm:text-2xl">{film.subtitle}</p>
                  <p className="mt-7 font-sans text-base leading-[1.8] text-muted sm:text-lg">{film.description}</p>
                  <ul className="mt-7 flex flex-wrap gap-2" aria-label="Topics">
                    {film.topics.map((topic) => <li key={topic} className="border border-accent/25 px-3 py-2 font-sans text-[0.62rem] tracking-[0.16em] text-foreground/70 uppercase">{topic}</li>)}
                  </ul>
                  <p className="mt-9 font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase">Play the complete film here</p>
                  <Link href={film.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 w-fit items-center justify-center border border-accent/45 px-6 font-sans text-[0.65rem] font-semibold tracking-[0.17em] text-accent uppercase transition-colors hover:bg-accent hover:text-[#06101a]">Official Amazing Facts page ↗</Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-accent/20 bg-[#0a1926] px-6 py-20 text-center sm:px-10 lg:py-24" aria-labelledby="starfall-invitation">
        <div className="mx-auto max-w-3xl"><p className="font-sans text-xs tracking-[0.35em] uppercase text-accent">Presented by Strange Normal</p><h2 id="starfall-invitation" className="mt-5 font-serif text-[clamp(3rem,6vw,5.5rem)] font-light leading-none">Explore Starfall</h2><p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-[1.8] text-muted sm:text-lg">Examine extraordinary encounters and the biblical principles for testing supernatural claims.</p><Link href="/starfall" className="mt-9 inline-flex min-h-14 items-center justify-center border border-accent/60 px-9 font-sans text-sm tracking-[0.17em] uppercase transition-colors hover:bg-accent hover:text-[#06101a]">Visit the Starfall Page</Link></div>
      </section>

      <Footer />
    </main>
  );
}
