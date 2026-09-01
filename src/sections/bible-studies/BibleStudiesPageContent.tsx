"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer } from "@/animations/variants/fade-up";
import { Footer } from "@/components/layout/Footer";

const studies = [
  { number: "01", title: "God's Amazing Book", description: "Can a book written across centuries still speak with one clear voice?", href: "/bible-studies/gods-amazing-book", meta: "15 questions · 25 min", label: "Foundations" },
  { number: "02", title: "God Unfolds the Future", description: "Follow Daniel 2 from Babylon through the kingdoms of history to Christ’s everlasting kingdom.", href: "/bible-studies/prophecy/daniel-2", meta: "13 questions · 30 min", label: "Bible Prophecy" },
  { number: "03", title: "The Origin of Sin", description: "Where did evil begin—and why did God allow freedom to be misused?", href: "/bible-studies/origin-of-sin", meta: "14 questions · 25 min", label: "Great Controversy" },
  { number: "04", title: "Who Is Christ?", description: "Discover the identity, character, and saving mission of Jesus.", href: "/bible-studies/who-is-christ", meta: "17 questions · 25 min", label: "Jesus Christ" },
  { number: "05", title: "The Problem of Sin", description: "What has sin broken, and why can humanity not repair it alone?", href: "/bible-studies/problem-of-sin", meta: "16 questions · 25 min", label: "Foundations" },
  { number: "06", title: "Sin and Its Cure", description: "How does the cross answer humanity’s deepest problem?", href: "/bible-studies/sin-and-its-cure", meta: "10 questions · 20 min", label: "Salvation" },
  { number: "07", title: "A New Person", description: "Can the gospel truly create a new heart and a new direction?", href: "/bible-studies/a-new-person", meta: "10 questions · 20 min", label: "Christian Life" },
  { number: "08", title: "Law & Gospel", description: "How do God’s perfect law and saving grace work together?", href: "/bible-studies/law-and-gospel", meta: "10 questions · 20 min", label: "Foundations" },
  { number: "09", title: "The World’s Only Hope", description: "What does the Bible reveal about the return of Jesus?", href: "/bible-studies/worlds-only-hope", meta: "10 questions · 20 min", label: "Second Coming" },
  { number: "10", title: "God’s Tomorrow", description: "What will life be like when God makes all things new?", href: "/bible-studies/gods-tomorrow", meta: "12 questions · 20 min", label: "Restoration" },
  { number: "11", title: "The Nephilim", description: "Angels, giants, or men? Test Genesis 6 and the popular claims against Scripture.", href: "/bible-studies/prophecy/nephilim", meta: "Evidence study · 35 min", label: "Bible Mystery" },
] as const;

export function BibleStudiesPageContent() {
  return (
    <main className="overflow-hidden bg-[#06101a] text-foreground">
      <section className="relative min-h-[700px] overflow-hidden pt-24" aria-labelledby="studies-title">
        <Image src="/assets/media/images/daniel-2-statue.png" alt="" fill priority sizes="100vw" aria-hidden className="scale-105 object-cover object-center opacity-65 blur-[2px]" />
        <div
          className="absolute inset-y-0 left-1/2 w-full -translate-x-1/2 lg:w-[82%]"
          style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)", maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)" }}
        >
          <Image src="/assets/media/images/daniel-2-statue.png" alt="Nebuchadnezzar's dream statue from Daniel 2" fill priority sizes="(max-width: 1023px) 100vw, 82vw" className="object-cover object-center shadow-[0_0_70px_rgba(6,16,26,0.7)]" />
        </div>
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
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3"><Link href="/bible-studies/prophecy/daniel-2" className="inline-flex min-h-14 items-center justify-center bg-[#1a1814] px-8 font-sans text-xs font-semibold tracking-[0.2em] text-[#f4efe6] uppercase">Begin the Daniel 2 Study →</Link></motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28" aria-labelledby="study-library-heading">
        <div className="mx-auto max-w-[1200px]">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-3xl"><p className="font-sans text-xs tracking-[0.35em] uppercase text-accent">Continue Studying</p><h2 id="study-library-heading" className="mt-5 font-serif text-[clamp(3rem,5vw,5rem)] font-light leading-none">Explore the great themes of Scripture</h2><p className="mt-6 font-sans text-base leading-[1.8] text-muted sm:text-lg">Read at your own pace, reveal the Bible passages and explanations, save your progress, and return whenever you are ready.</p></motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-14 grid gap-px overflow-hidden border border-accent/20 bg-accent/20 md:grid-cols-2">
            {studies.map((study) => <motion.article key={study.number} variants={fadeUp} className="group flex min-h-[330px] flex-col bg-[#06101a] p-8 transition-colors hover:bg-[#0d2531]"><div className="flex items-center justify-between"><p className="font-sans text-[0.62rem] tracking-[0.25em] text-accent uppercase">{study.label}</p><span className="font-sans text-[0.62rem] tracking-[0.2em] text-foreground/45">{study.number}</span></div><h3 className="mt-6 font-serif text-4xl font-light">{study.title}</h3><p className="mt-4 flex-1 font-sans text-base leading-[1.75] text-muted">{study.description}</p><div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5"><span className="font-sans text-[0.6rem] tracking-[0.18em] text-foreground/45 uppercase">{study.meta}</span><Link href={study.href} className="font-sans text-xs tracking-[0.22em] text-accent uppercase">Begin Study →</Link></div></motion.article>)}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#eee7da] px-6 py-20 text-center text-[#1a1814] sm:px-10 lg:py-24" aria-labelledby="study-help-heading"><div className="mx-auto max-w-3xl"><p className="font-sans text-xs tracking-[0.35em] uppercase text-[#8a6728]">You Don&apos;t Have to Study Alone</p><h2 id="study-help-heading" className="mt-5 font-serif text-[clamp(3rem,5vw,4.8rem)] font-medium leading-none">Questions are welcome</h2><p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-[1.8] text-[#5c564d] sm:text-lg">Request Bible studies, ask a biblical question, or tell us which subject you would like to explore next.</p><Link href="/contact" className="mt-9 inline-flex min-h-14 items-center justify-center bg-[#1a1814] px-9 font-sans text-xs font-semibold tracking-[0.2em] text-[#f4efe6] uppercase">Contact RevelationSigns</Link></div></section>

      <section className="bible-studies-kjv" aria-label="Why RevelationSigns uses the King James Bible">
        <div className="kjv-feature" id="why-kjv" aria-labelledby="kjv-heading">
          <div className="kjv-feature-copy">
            <p className="eyebrow">A translation of remarkable precision</p>
            <h2 id="kjv-heading">Why we use the<br /><em>King James Bible.</em></h2>
            <p>RevelationSigns uses the King James Version throughout these studies. For more than four centuries, its dignified language has carried Scripture into worship, preaching and memory. Its consistent phrasing also helps readers compare related passages and recognise the Bible’s recurring themes.</p>
            <p>We believe God has providentially preserved and greatly blessed this translation. Its lasting influence and remarkable verbal patterns invite careful investigation—while our confidence in Scripture rests first upon Christ’s testimony, the Bible’s own claims, its unified message and fulfilled prophecy.</p>
            <div className="kjv-note"><strong>Consider the evidence carefully</strong><span>The video examines the claim that God’s direct speech in Genesis 1 contains 343 words—7 × 7 × 7—in the KJV. Numerical observations are supporting evidence and should be tested using a clearly identified edition and transparent counting method.</span></div>
          </div>
          <div className="kjv-video-card">
            <div className="kjv-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/nLO6BQY_lj0?start=415&rel=0" title="Grok Learns KJV Patterns and Its Conclusion Will Bother Many" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
            <div className="kjv-video-caption"><span>Watch from 6:55</span><p>An investigation of numerical patterns claimed to be distinctive to the King James Bible.</p></div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
