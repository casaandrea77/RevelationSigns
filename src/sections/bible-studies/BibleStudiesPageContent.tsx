"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer } from "@/animations/variants/fade-up";
import { Footer } from "@/components/layout/Footer";

const studies = [
  { title: "Daniel & Revelation", description: "Explore the prophetic books that reveal God's sovereignty, judgment, and plan of rescue.", href: "https://www.amazingfacts.org/study/topics/", label: "Prophecy" },
  { title: "The Origin of Evil", description: "Study how Scripture explains sin, suffering, freedom, and the conflict that began in heaven.", href: "https://www.amazingfacts.org/study/bible-study-guides/", label: "Great Controversy" },
  { title: "The Second Coming", description: "Examine the biblical promises and signs surrounding the visible return of Jesus Christ.", href: "https://www.amazingfacts.org/study/bible-study-guides/", label: "Christian Hope" },
  { title: "The State of the Dead", description: "Compare popular ideas about death and the afterlife with the testimony of Scripture.", href: "https://www.amazingfacts.org/study/bible-study-guides/", label: "Bible Teaching" },
  { title: "The Sabbath", description: "Trace the seventh-day Sabbath from creation through the life of Christ and the new earth.", href: "https://www.amazingfacts.org/study/bible-study-guides/", label: "Bible Teaching" },
  { title: "Judgment & Sanctuary", description: "Follow the sanctuary theme and the Bible's teaching about judgment, mercy, and Christ's ministry.", href: "https://www.amazingfacts.org/study/bible-study-guides/", label: "Prophecy" },
] as const;

export function BibleStudiesPageContent() {
  return (
    <main className="overflow-hidden bg-[#06101a] text-foreground">
      <section className="relative min-h-[700px] overflow-hidden pt-24" aria-labelledby="studies-title">
        <Image src="/assets/media/images/daniel-2-statue.png" alt="Nebuchadnezzar's dream statue from Daniel 2" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,16,26,0.96)_0%,rgba(6,16,26,0.72)_48%,rgba(6,16,26,0.22)_78%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#06101a_0%,transparent_60%)]" />
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 mx-auto flex min-h-[600px] max-w-[1440px] flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.35em] uppercase text-accent">Know God&apos;s Word Better</motion.p>
          <motion.h1 id="studies-title" variants={fadeUp} className="mt-5 max-w-4xl font-serif text-[clamp(4rem,8vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.025em]">Bible Studies</motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl font-sans text-base leading-[1.85] text-foreground/80 sm:text-lg">Begin with Daniel 2, the foundation of Bible prophecy, then continue through the subjects that connect the biblical story from creation to restoration.</motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3"><Link href="#daniel-2" className="inline-flex min-h-14 items-center justify-center bg-accent px-8 font-sans text-xs font-semibold tracking-[0.2em] text-[#06101a] uppercase">Begin with Daniel 2</Link><Link href="/contact" className="inline-flex min-h-14 items-center justify-center border border-accent/50 px-8 font-sans text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-[#06101a]">Request Personal Help</Link></motion.div>
        </motion.div>
      </section>

      <section id="daniel-2" className="bg-[#f4efe6] px-6 py-20 text-[#1a1814] sm:px-10 lg:px-12 lg:py-28" aria-labelledby="daniel-heading">
        <div className="mx-auto grid max-w-[1250px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative min-h-[520px] overflow-hidden border border-black/10 shadow-[0_28px_70px_rgba(26,24,20,0.18)]"><Image src="/assets/media/images/daniel-2-statue.png" alt="Nebuchadnezzar's dream statue with its gold, silver, bronze, iron, and clay sections" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover object-center" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-8 text-white"><p className="font-sans text-xs tracking-[0.3em] uppercase text-accent">Featured Study</p><p className="mt-3 font-serif text-4xl">Daniel 2</p></div></motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.35em] uppercase text-[#8a6728]">The Dream of the Empires</motion.p>
            <motion.h2 id="daniel-heading" variants={fadeUp} className="mt-5 font-serif text-[clamp(3rem,5.5vw,5.2rem)] font-medium leading-[0.94]">A prophecy that spans history</motion.h2>
            <motion.p variants={fadeUp} className="mt-7 font-sans text-base leading-[1.85] text-[#5c564d] sm:text-lg">Daniel 2 records King Nebuchadnezzar&apos;s dream of a great image. Daniel identifies a succession of kingdoms—from Babylon onward—and a final kingdom established by God that will never be destroyed.</motion.p>
            <motion.p variants={fadeUp} className="mt-5 font-sans text-base leading-[1.85] text-[#5c564d] sm:text-lg">The chapter introduces the method and central hope of biblical prophecy: God knows history in advance, rules above earthly powers, and will bring human kingdoms to an end.</motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3"><Link href="https://www.amazingfacts.org/bible-book/daniel-chapter-2/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center bg-[#1a1814] px-8 font-sans text-xs font-semibold tracking-[0.2em] text-[#f4efe6] uppercase">Explore Daniel 2 ↗</Link><Link href="https://manna.amazingfacts.org/amazingfacts/website/panoramaofprophecy/docs/en/POP-lesson-2-Dream-of-the-Empires.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center border border-[#1a1814]/30 px-8 font-sans text-xs tracking-[0.2em] uppercase">Study Guide PDF ↗</Link></motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28" aria-labelledby="study-library-heading">
        <div className="mx-auto max-w-[1200px]">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-3xl"><p className="font-sans text-xs tracking-[0.35em] uppercase text-accent">Continue Studying</p><h2 id="study-library-heading" className="mt-5 font-serif text-[clamp(3rem,5vw,5rem)] font-light leading-none">Explore the great themes of Scripture</h2></motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-14 grid gap-px overflow-hidden border border-accent/20 bg-accent/20 md:grid-cols-2 lg:grid-cols-3">
            {studies.map((study) => <motion.article key={study.title} variants={fadeUp} className="flex min-h-[330px] flex-col bg-[#06101a] p-8"><p className="font-sans text-[0.62rem] tracking-[0.25em] text-accent uppercase">{study.label}</p><h3 className="mt-6 font-serif text-3xl font-light">{study.title}</h3><p className="mt-4 flex-1 font-sans text-base leading-[1.75] text-muted">{study.description}</p><Link href={study.href} target="_blank" rel="noopener noreferrer" className="mt-7 font-sans text-xs tracking-[0.22em] text-accent uppercase">Study with Amazing Facts ↗</Link></motion.article>)}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#eee7da] px-6 py-20 text-center text-[#1a1814] sm:px-10 lg:py-24" aria-labelledby="study-help-heading"><div className="mx-auto max-w-3xl"><p className="font-sans text-xs tracking-[0.35em] uppercase text-[#8a6728]">You Don&apos;t Have to Study Alone</p><h2 id="study-help-heading" className="mt-5 font-serif text-[clamp(3rem,5vw,4.8rem)] font-medium leading-none">Questions are welcome</h2><p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-[1.8] text-[#5c564d] sm:text-lg">Request Bible studies, ask a biblical question, or tell us which subject you would like to explore next.</p><Link href="/contact" className="mt-9 inline-flex min-h-14 items-center justify-center bg-[#1a1814] px-9 font-sans text-xs font-semibold tracking-[0.2em] text-[#f4efe6] uppercase">Contact RevelationSigns</Link></div></section>
      <Footer />
    </main>
  );
}
