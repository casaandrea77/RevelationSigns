import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { chapters } from "./data";
import { Timeline } from "./timeline";
import "./study.css";

export const metadata: Metadata = {
  title: "When Michael Stands Up — The Final Events in Daniel & Revelation | RevelationSigns",
  description: "A Scripture-led study of Michael, the Three Angels’ Messages, the final worship crisis, and Christ’s return—with an interactive timeline and clearly marked Adventist interpretations.",
  alternates: { canonical: "/bible-studies/prophecy/when-michael-stands-up" },
};

function BibleLink({ passage }: { passage: string }) {
  return <a href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(passage.replace(" (excerpt)", ""))}&version=KJV`} target="_blank" rel="noreferrer">{passage} <span aria-hidden="true">↗</span></a>;
}

export default function MichaelStudy() {
  return <main className="michael-study">
    <a className="ms-skip" href="#study-text">Skip to the study</a>
    <section className="ms-hero" aria-labelledby="ms-title">
      <Image src="/assets/media/images/bible-studies/worlds-only-hope.png" alt="An artistic depiction of Christ appearing in glory above a waiting people" fill priority sizes="100vw" className="ms-hero-art" />
      <div className="ms-hero-shade" />
      <div className="ms-shell ms-hero-content">
        <nav className="ms-breadcrumb" aria-label="Breadcrumb"><Link href="/bible-studies">Bible Studies</Link><span>/</span><Link href="/bible-studies#daniel-revelation">Daniel & Revelation</Link></nav>
        <p className="ms-eyebrow">The final events · A guided Bible study</p>
        <h1 id="ms-title">When Michael<br /><em>Stands Up</em></h1>
        <p className="ms-subtitle">The Final Events in Daniel & Revelation</p>
        <blockquote>“And at that time shall Michael stand up, the great prince which standeth for the children of thy people…”<cite><BibleLink passage="Daniel 12:1" /> · KJV excerpt</cite></blockquote>
        <div className="ms-actions"><a className="ms-button" href="#study-text">Begin the study <span aria-hidden="true">↓</span></a><a className="ms-link" href="#prophetic-timeline">Explore the timeline <span aria-hidden="true">↗</span></a></div>
        <p className="ms-meta">15 sections <span>·</span> Read at your pace <span>·</span> King James Version</p>
      </div>
    </section>

    <div className="ms-shell">
      <section className="ms-intro" aria-labelledby="ms-intro-title"><div><p className="ms-eyebrow">The promise beyond the crisis</p><h2 id="ms-intro-title">The story ends<br />with <em>deliverance.</em></h2></div><div><p>Daniel’s final prophecy does not end in darkness. It ends with Michael arising, God’s people being delivered, resurrection, and an everlasting kingdom.</p><p>What happens before Michael stands? Follow Daniel into Revelation—and keep the words of Scripture distinct from the connections we draw between them.</p></div></section>
      <aside className="ms-reading-key" aria-label="How to read this study"><strong>Scripture first. Interpretation clearly marked.</strong><p>Quoted Scripture is presented in gold-edged panels. Blue labels introduce historicist or Adventist interpretation. “Interpretive parallel” means a proposed connection between passages, not an identification explicitly stated by the Bible. Historicism reads prophecy as unfolding across history toward Christ’s kingdom.</p></aside>
      <Timeline />

      <div className="ms-reading-layout" id="study-text">
        <aside className="ms-contents"><nav aria-label="Study contents"><p className="ms-eyebrow">In this study</p>{chapters.map((chapter, index) => <a key={chapter.id} href={`#${chapter.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{chapter.title}</a>)}<a href="#sources"><span>↗</span>Sources & further reading</a></nav></aside>
        <div className="ms-chapters">
          {chapters.map((chapter, index) => <section className={`ms-chapter ${chapter.id === "michael-stands" ? "ms-pivot" : ""}`} id={chapter.id} key={chapter.id} aria-labelledby={`${chapter.id}-title`}>
            <p className="ms-eyebrow">{String(index + 1).padStart(2, "0")} <span aria-hidden="true">/</span> {chapter.ref}</p>
            <h2 id={`${chapter.id}-title`}>{chapter.title}</h2>
            <blockquote className="ms-scripture"><span className="ms-quote-label">Scripture · KJV</span><p>“{chapter.verse}”</p><cite><BibleLink passage={chapter.verseRef} /></cite></blockquote>
            <p>{chapter.body}</p>
            {chapter.id === "angels" && <div className="ms-three-angels">{[["01", "Worship the Creator", "Revelation 14:6–7", "Everlasting gospel · Judgment · Creation"], ["02", "Babylon is fallen", "Revelation 14:8", "The exposure of a corrupting power"], ["03", "Be faithful to Jesus", "Revelation 14:9–12", "A warning against the beast and its mark"]].map(([n, title, ref, body]) => <div key={n}><span>{n}</span><h3>{title}</h3><BibleLink passage={ref} /><p>{body}</p></div>)}</div>}
            {chapter.id === "seal-mark" && <div className="ms-comparison"><div><p className="ms-eyebrow">The seal of God</p><h3>Belonging to God</h3><p>His servants sealed in their foreheads. The Lamb’s people bear His Father’s name.</p><BibleLink passage="Revelation 7:3; 14:1" /></div><div><p className="ms-eyebrow">The mark of the beast</p><h3>Enforced allegiance</h3><p>A mark in hand or forehead, tied to the beast’s worship and control of buying and selling.</p><BibleLink passage="Revelation 13:15–17; 14:9" /></div></div>}
            <div className="ms-interpretation"><span className="ms-badge">{chapter.label}</span><p>{chapter.interpretation}</p></div>
            {chapter.id === "michael" && <aside className="ms-history" aria-labelledby="historical-witnesses">
              <p className="ms-eyebrow">Before the Adventist movement</p>
              <h3 id="historical-witnesses">Voices from Christian history</h3>
              <p>Identifying Michael with Christ has ancient Christian precedents, including Tyconius in the fourth century—long before Adventism. He is an early explicit witness; the surviving evidence does not establish who first proposed this identification.</p>
              <div className="ms-history-early"><p className="ms-eyebrow">Around AD 380 · Commentary date</p><h3>Tyconius</h3><p>In his <em>Exposition of the Apocalypse</em>, commenting on Revelation 12:7, Tyconius writes: “He calls Christ ‘Michael’ and holy people ‘his angels.’” He reads the battle symbolically as conflict within the church.</p><p className="ms-history-citation">Book 4; translated by Francis X. Gumerlock, <em>The Fathers of the Church</em>, vol. 134 (2017), p. 127.</p><a className="ms-link" href="https://scripturalmormonism.blogspot.com/2025/04/tyconius-d-390-interpreting-michael-in.html" target="_blank" rel="noreferrer">Read the excerpt from the published translation ↗</a></div>
              <div className="ms-comparison">
                <div><p className="ms-eyebrow">1662–1714 · Lifetime</p><h3>Matthew Henry</h3><p>In his <em>Commentary on the Whole Bible</em>, Henry introduces Michael’s standing with the words: “Jesus Christ shall appear his church’s patron and protector.”</p><a href="https://biblehub.com/commentaries/mhcw/daniel/12.htm" target="_blank" rel="noreferrer">Read Henry on Daniel 12:1 ↗</a></div>
                <div><p className="ms-eyebrow">1697–1771 · Lifetime</p><h3>John Gill</h3><p>In his <em>Exposition of the Bible</em>, Gill identifies Michael as “the Son of God, our Lord Jesus Christ” and affirms His divine nature and equality with the Father.</p><a href="https://johngill.thekingsbible.com/CommentaryVerse/27/12/1" target="_blank" rel="noreferrer">Read Gill on Daniel 12:1 ↗</a></div>
              </div>
              <p>This identification therefore predates Adventism. Their comments support this historical point; they do not imply agreement with every part of this study’s prophetic timeline.</p>
            </aside>}
            {chapter.id === "trouble" && <div className="ms-comparison"><div><p className="ms-eyebrow">Daniel 12:1</p><h3>Prince → trouble → deliverance</h3><p>Michael stands for His people. Unprecedented trouble follows, with deliverance promised.</p></div><div><p className="ms-eyebrow">Revelation 15–16</p><h3>Temple → plagues → judgment</h3><p>A heavenly temple scene introduces the last plagues and the judgment on Babylon.</p></div></div>}
            <details className="ms-question"><summary><span><small>Pause & consider</small>{chapter.question}</span><span className="ms-expand" aria-hidden="true">+</span></summary><p>{chapter.answer}</p></details>
          </section>)}
          <section className="ms-sources" id="sources"><p className="ms-eyebrow">Read in context</p><h2>Keep your Bible open.</h2><p>Scripture quotations use the King James Version; ellipses and “excerpt” labels indicate omissions. The study follows a historic Adventist perspective and does not assign dates to the final events.</p><ul><li><BibleLink passage="Daniel 7; 10–12" /> — the court, the prince, conflict, and deliverance.</li><li><BibleLink passage="Revelation 7; 12–22" /> — worship, warning, judgment, and restoration.</li><li><BibleLink passage="John 1:1–3; Hebrews 1; 1 Thessalonians 4:13–18" /> — Christ’s identity and the resurrection hope.</li><li><a href="https://adventistbiblicalresearch.org/articles/is-michael-another-name-for-jesus" target="_blank" rel="noreferrer">Biblical Research Institute: Is Michael another name for Jesus? ↗</a> — the Adventist case for this identification.</li><li><a href="https://new.adventistreview.org/commentary/what-does-daniel-chapter-11-mean/" target="_blank" rel="noreferrer">Adventist Review: What Does Daniel Chapter 11 Mean? ↗</a> — a survey of differing Adventist readings.</li><li>Ellen G. White, <em>The Great Controversy</em>, chapters 38–40: “The Final Warning,” “The Time of Trouble,” and “God’s People Delivered.” These present the Adventist framework; they do not explicitly identify Daniel 11:40–45’s King of the North as Turkey or the papacy.</li></ul></section>
        </div>
      </div>
    </div>
    <section className="ms-closing"><div className="ms-shell"><p className="ms-eyebrow">The hope at the heart of prophecy</p><h2>Earthly powers pass.<br /><em>His kingdom remains.</em></h2><p>“His kingdom is an everlasting kingdom, and all dominions shall serve and obey him.”</p><cite><BibleLink passage="Daniel 7:27" /> · KJV excerpt</cite><nav className="ms-next" aria-label="Continue studying"><Link href="/bible-studies/prophecy/daniel-2"><small>Return to Daniel</small>God Unfolds the Future <span>←</span></Link><Link href="/bible-studies/worlds-only-hope"><small>Explore the promise</small>The World’s Only Hope <span>→</span></Link></nav><Link className="ms-link" href="/bible-studies#daniel-revelation">All Daniel & Revelation studies</Link></div></section>
    <Footer />
  </main>;
}
