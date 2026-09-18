"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer } from "@/animations/variants/fade-up";
import { Footer } from "@/components/layout/Footer";
import { amazingFactsGuideHref, amazingFactsStudyGuides } from "@/data/amazingFactsStudyGuides";

const studies = [
  { number: "15", title: "Legalism & the Ten Commandments", description: "Where did legalism begin? Follow the commandments, grace, and obedience from Scripture through Christian history.", href: "/bible-studies/legalism-and-the-ten-commandments", meta: "11 sections · Scripture & history", label: "Grace & Obedience" },
  { number: "16", title: "The Rapture & Seven Years of Tribulation", description: "Compare the biblical promise of being caught up with the history and interpretation of the seven-year timeline.", href: "/bible-studies/rapture-and-seven-years-of-tribulation", meta: "16 sections · Scripture & history", label: "Prophecy & History" },
  { number: "03", title: "The Origin of Sin", description: "Where did evil begin—and why did God allow freedom to be misused?", href: "/bible-studies/origin-of-sin", meta: "14 questions · 25 min", label: "Great Controversy" },
  { number: "04", title: "Who Is Christ?", description: "Discover the identity, character, and saving mission of Jesus.", href: "/bible-studies/who-is-christ", meta: "17 questions · 25 min", label: "Jesus Christ" },
  { number: "05", title: "The Problem of Sin", description: "What has sin broken, and why can humanity not repair it alone?", href: "/bible-studies/problem-of-sin", meta: "16 questions · 25 min", label: "Foundations" },
  { number: "06", title: "Sin and Its Cure", description: "How does the cross answer humanity’s deepest problem?", href: "/bible-studies/sin-and-its-cure", meta: "10 questions · 20 min", label: "Salvation" },
  { number: "07", title: "A New Person", description: "Can the gospel truly create a new heart and a new direction?", href: "/bible-studies/a-new-person", meta: "10 questions · 20 min", label: "Christian Life" },
  { number: "08", title: "Law & Gospel", description: "How do God’s perfect law and saving grace work together?", href: "/bible-studies/law-and-gospel", meta: "10 questions · 20 min", label: "Foundations" },
  { number: "09", title: "The World’s Only Hope", description: "What does the Bible reveal about the return of Jesus?", href: "/bible-studies/worlds-only-hope", meta: "10 questions · 20 min", label: "Second Coming" },
  { number: "10", title: "God’s Tomorrow", description: "What will life be like when God makes all things new?", href: "/bible-studies/gods-tomorrow", meta: "12 questions · 20 min", label: "Restoration" },
  { number: "11", title: "The Nephilim", description: "Angels, giants, or men? Test Genesis 6 and the popular claims against Scripture.", href: "/bible-studies/prophecy/nephilim", meta: "Evidence study · 35 min", label: "Bible Mystery" },
  { number: "12", title: "Angels, Demons & the Great Controversy", description: "Follow the unseen conflict from rebellion in heaven to Christ’s victory and the final end of evil.", href: "/bible-studies/angels-demons-great-controversy", meta: "Evidence study · 40 min", label: "Great Controversy" },
  { number: "13", title: "The State of the Dead", description: "Can the dead speak to the living? Examine the soul, spiritualism, difficult passages, and the resurrection hope.", href: "/bible-studies/state-of-the-dead", meta: "Evidence study · 40 min", label: "Life & Death" },
] as const;

const collections = [
  { key: "amazing-facts", title: "Amazing Facts Bible Studies", subtitle: "The illustrated collection", description: "Explore all 27 original Amazing Facts Study Guides, presented page by page.", image: "/assets/media/images/amazing-facts-study-1/pages/page-01.jpg", count: "27 study guides", anchor: "amazing-facts-guides" },
  { key: "general", title: "Bible Studies", subtitle: "Faith & the Christian life", description: "Discover Jesus, salvation, the great controversy, and the promises of Scripture at your own pace.", image: "/assets/media/images/bible-studies/gods-amazing-book.png", count: "13 guided studies", anchor: "general-studies" },
  { key: "daniel-revelation", title: "Daniel & Revelation Series", subtitle: "Prophecy & everlasting hope", description: "Follow the kingdoms of Daniel through the final events of Revelation and the return of Jesus.", image: "/assets/media/images/daniel-2-statue.png", count: "2 in-depth Bible studies", anchor: "daniel-revelation" },
] as const;

type Collection = typeof collections[number]["key"];

export function BibleStudiesPageContent({ collection }: { collection?: Collection }) {
  const selected = collections.find((item) => item.key === collection);

  return (
    <main className="overflow-hidden bg-[#06101a] text-foreground">
      <section className="relative overflow-hidden px-6 pb-12 pt-36 sm:px-10 sm:pt-40 lg:px-12" aria-labelledby="studies-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,163,90,0.16),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1320px] pb-8">
          {selected && <Link href="/bible-studies" className="mb-8 inline-flex py-2 text-sm text-accent underline-offset-4 hover:underline">← All three study collections</Link>}
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent">{selected?.subtitle ?? "Open your Bible. Choose your journey."}</p>
          <h1 id="studies-title" className="mt-5 max-w-5xl font-serif text-[clamp(3.2rem,6vw,6rem)] leading-[1.02]">{selected?.title ?? "Bible Studies"}</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#d1d5d8] sm:text-lg">{selected?.description ?? "Three collections. One invitation to know God’s Word. Choose where you would like to begin."}</p>
        </div>
      </section>

      {!selected && <section className="bg-[#faf9f6] px-6 py-12 text-[#202a30] sm:px-10 lg:px-12 lg:py-16" aria-label="Choose a Bible study collection">
        <nav className="mx-auto grid max-w-[1320px] gap-6 md:grid-cols-3" aria-label="Bible study collections">
          {collections.map((item, index) => <Link id={item.anchor} key={item.key} href={`/bible-studies/${item.key}`} className="group flex scroll-mt-28 flex-col overflow-hidden border border-[#ddd8cc] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8a6728]">
            <div className="relative h-48 overflow-hidden bg-[#eee7da] lg:h-56"><Image src={item.image} alt="" fill sizes="(max-width: 767px) 100vw, 33vw" className="object-contain" /><span className="absolute bottom-4 left-4 rounded bg-[#06101a]/80 px-2 py-1 text-sm tracking-[0.2em] text-white">0{index + 1}</span></div>
            <div className="flex flex-1 flex-col p-7"><p className="text-[0.65rem] font-semibold tracking-[0.18em] text-[#806027] uppercase">{item.subtitle}</p><h2 className="mt-4 font-serif text-4xl leading-[1.05]">{item.title}</h2><p className="mt-5 flex-1 text-base leading-relaxed text-[#56616a]">{item.description}</p><p className="mt-7 text-sm text-[#697079]">{item.count}</p><span className="mt-5 border-t border-[#e5e1d8] pt-5 text-sm font-semibold text-[#806027]">Explore collection →</span></div>
          </Link>)}
        </nav>
      </section>}

      {collection === "amazing-facts" && <>
      <section id="amazing-facts-guides" className="scroll-mt-24 bg-[#eee7da] px-6 py-20 text-[#1a1814] sm:px-10 lg:px-12 lg:py-28" aria-labelledby="amazing-facts-heading">
        <div className="mx-auto max-w-[1320px]">
          <div className="max-w-3xl">
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#8a6728]">The Complete Original Collection</p>
            <h2 id="amazing-facts-heading" className="mt-5 font-serif text-[clamp(3rem,5vw,5rem)] font-medium leading-none">Amazing Facts Study Guides</h2>
            <p className="mt-6 font-sans text-base leading-[1.8] text-[#5c564d] sm:text-lg">All 27 illustrated lessons are presented page by page in their original format. Choose a guide to begin, then move through the collection in order.</p>
            <a href="https://www.amazingfacts.org/it/studio/guide-allo-studio-della-bibbia/" hrefLang="it" target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-12 items-center justify-center border border-[#8a6728] px-6 font-sans text-[0.68rem] font-semibold tracking-[0.18em] text-[#6f4f21] uppercase transition-colors hover:bg-[#8a6728] hover:text-white">Italiano · Tutte le 27 guide ↗</a>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {amazingFactsStudyGuides.map((guide) => <article key={guide.number} className="group overflow-hidden border border-black/10 bg-[#f8f5ef] shadow-[0_16px_40px_rgba(45,38,28,0.1)] transition-transform duration-300 hover:-translate-y-1">
              <Link href={amazingFactsGuideHref(guide)} className="block">
                <div className="relative aspect-[0.676/1] overflow-hidden bg-white">
                  <Image src={`/assets/media/images/amazing-facts-study-${guide.number}/pages/page-01.jpg`} alt={`Cover of Amazing Facts Study Guide ${guide.number}: ${guide.title}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.015]" />
                </div>
                <div className="p-6">
                  <p className="font-sans text-[0.62rem] font-semibold tracking-[0.24em] text-[#9b6f2d] uppercase">Study Guide {guide.number}</p>
                  <h3 className="mt-3 font-serif text-[1.75rem] font-medium leading-[1.02]">{guide.title}</h3>
                  <p className="mt-5 border-t border-black/10 pt-4 font-sans text-[0.65rem] font-semibold tracking-[0.18em] text-[#6f5a39] uppercase">Read the complete guide →</p>
                </div>
              </Link>
            </article>)}
          </div>
        </div>
      </section>

      </>}
      {collection === "daniel-revelation" && <>
      <section id="daniel-revelation" className="scroll-mt-24 border-y border-accent/25 bg-[#faf9f6] text-[#202a30] px-6 py-20 sm:px-10 lg:px-12" aria-labelledby="prophecy-journey-heading">
        <div className="mx-auto max-w-[1250px]">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-[#806027]">Daniel &amp; Revelation · The prophecy journey</p>
          <h2 id="prophecy-journey-heading" className="mt-5 font-serif text-5xl sm:text-6xl">From earthly kingdoms to everlasting hope.</h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#56616a]">Begin with Daniel’s vision of the kingdoms, then explore the final events with Scripture, careful comparisons, and clearly distinguished biblical statements and historical interpretations.</p>
          <nav aria-label="Daniel and Revelation studies" className="mt-10 grid gap-6 md:grid-cols-2">
            <Link href="/bible-studies/prophecy/daniel-2" className="border border-accent/30 p-7 transition-colors hover:bg-[#f0ede5]"><span className="text-sm text-[#806027]">Daniel 2 · The foundation</span><h3 className="mt-3 font-serif text-3xl">God Unfolds the Future →</h3><p className="mt-4 text-base text-[#56616a]">The rise and fall of kingdoms—and the kingdom that never ends.</p></Link>
            <Link href="/bible-studies/prophecy/when-michael-stands-up" className="border border-accent/60 bg-accent/5 p-7 transition-colors hover:bg-accent/10"><span className="text-sm text-[#806027]">Daniel 11–12 &amp; Revelation 14–22</span><h3 className="mt-3 font-serif text-3xl">When Michael Stands Up →</h3><p className="mt-4 text-base text-[#56616a]">A guided study with an interactive timeline of the final events.</p></Link>
          </nav>
        </div>
      </section>

      </>}
      {collection === "general" && <>
      <section className="bg-[#faf9f6] px-6 py-20 text-[#202a30] sm:px-10 lg:px-12 lg:py-28" aria-labelledby="study-library-heading">
        <div className="mx-auto max-w-[1200px]">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-3xl"><p className="font-sans text-xs tracking-[0.35em] uppercase text-[#806027]">Continue Studying</p><h2 id="study-library-heading" className="mt-5 font-serif text-[clamp(3rem,5vw,5rem)] font-light leading-none">Explore the great themes of Scripture</h2><p className="mt-6 font-sans text-base leading-[1.8] text-[#56616a] sm:text-lg">Read at your own pace, reveal the Bible passages and explanations, save your progress, and return whenever you are ready.</p></motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-14 grid gap-px overflow-hidden border border-accent/20 bg-accent/20 md:grid-cols-2">
            {studies.map((study) => <motion.article key={study.number} variants={fadeUp} className="group flex min-h-[330px] flex-col bg-white p-8 transition-colors hover:bg-[#f6f3ec]"><div className="flex items-center justify-between"><p className="font-sans text-[0.62rem] tracking-[0.25em] text-[#806027] uppercase">{study.label}</p><span className="font-sans text-[0.62rem] tracking-[0.2em] text-[#68737b]">{study.number}</span></div><h3 className="mt-6 font-serif text-4xl font-light">{study.title}</h3><p className="mt-4 flex-1 font-sans text-base leading-[1.75] text-[#56616a]">{study.description}</p><div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5"><span className="font-sans text-[0.6rem] tracking-[0.18em] text-[#68737b] uppercase">{study.meta}</span><Link href={study.href} className="font-sans text-xs tracking-[0.22em] text-[#806027] uppercase">Begin Study →</Link></div></motion.article>)}
          </motion.div>
        </div>
      </section>

      </>}

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
