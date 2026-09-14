import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import type { HistoryStudy } from "./studies";
import "./history-study.css";

function Passage({ reference }: { reference: string }) {
  return <a href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(reference)}&version=KJV`} target="_blank" rel="noreferrer">{reference} ↗</a>;
}

const commandments = [
  ["Worship God alone", "Exodus 20:3"], ["Do not make idols for worship", "Exodus 20:4–6"],
  ["Honor God’s name", "Exodus 20:7"], ["Remember the Sabbath day", "Exodus 20:8–11"],
  ["Honor father and mother", "Exodus 20:12"], ["Do not murder", "Exodus 20:13"],
  ["Be faithful in marriage", "Exodus 20:14"], ["Do not steal", "Exodus 20:15"],
  ["Do not bear false witness", "Exodus 20:16"], ["Do not covet", "Exodus 20:17"],
];

export function HistoricalBibleStudy({ study }: { study: HistoryStudy }) {
  return <main className="history-study">
    <a className="hs-skip" href="#study-content">Skip to the study</a>
    <section className="hs-hero">
      <Image src={study.image} alt="" fill priority sizes="100vw" className="hs-hero-image" />
      <div className="hs-shade" />
      <div className="hs-shell hs-hero-copy">
        <Link href="/bible-studies/general" className="hs-back">← Bible Studies</Link>
        <p className="hs-eyebrow">{study.category}</p>
        <h1>{study.title}</h1><p className="hs-subtitle">{study.subtitle}</p>
        <blockquote>“{study.keyQuote}”<cite><Passage reference={study.keyRef} /> · KJV excerpt</cite></blockquote>
        <div className="hs-actions"><a href="#study-content">Begin the study ↓</a><a href="#history">Explore the history ↓</a></div>
        <p className="hs-meta">{study.sections.length} sections · Scripture & historical sources · Read at your pace</p>
      </div>
    </section>
    <section className="hs-shell hs-intro"><p className="hs-eyebrow">Start with the question</p><h2>Open Scripture.<br /><em>Examine the history.</em></h2><p className="hs-lead">{study.intro}</p><aside className="hs-note"><strong>How to read this study</strong><p>{study.orientation}</p></aside></section>
    <section id="history" className="hs-history"><div className="hs-shell"><p className="hs-eyebrow">A historical overview</p><h2>Where did it begin?</h2><p className="hs-history-intro">These milestones distinguish the biblical foundations from later discussions. They are not a claim to identify the first person behind every idea.</p><ol className="hs-milestones">{study.history.map(event=><li key={event.date}><p className="hs-date">{event.date}</p><h3>{event.title}</h3><p>{event.text}</p></li>)}</ol><a className="hs-source-link" href="#sources">Read the historical sources ↓</a></div></section>
    <div id="study-content" className="hs-shell hs-layout"><aside className="hs-contents"><nav aria-label="Study contents"><p className="hs-eyebrow">In this study</p>{study.sections.map((s,i)=><a href={`#${s.id}`} key={s.id}><span>{String(i+1).padStart(2,'0')}</span>{s.title}</a>)}<a href="#sources">Sources & further reading</a></nav></aside>
      <div>{study.sections.map((s,i)=><section id={s.id} className="hs-chapter" key={s.id}><p className="hs-eyebrow">{String(i+1).padStart(2,'0')} · {s.quote ? 'Read the Bible' : 'Historical testimony'}</p><h2>{s.title}</h2>
        {s.quote ? <blockquote className="hs-scripture"><p>“{s.quote}”</p><cite><Passage reference={s.ref} /> · KJV excerpt</cite></blockquote> : <p className="hs-history-ref">{s.ref} · <a href="#sources">Source notes ↓</a></p>}
        {s.body.map(p=><p key={p}>{p}</p>)}
        {s.id==='ten-words' && <ol className="hs-commandments" aria-label="Ten Commandments: study summaries">{commandments.map(([title,ref],i)=><li key={ref}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><Passage reference={ref}/></div></li>)}</ol>}
        {s.note && <aside className="hs-note"><strong>Keep the distinction clear</strong><p>{s.note}</p></aside>}
        {s.question && <details className="hs-reflect"><summary>Pause & reflect</summary><p>{s.question}</p><p className="hs-reflect-hint">Write your response in your study journal, or discuss it with someone reading alongside you.</p></details>}
      </section>)}
      <section className="hs-conclusion"><p className="hs-eyebrow">Bring it together</p><h2>Faith that keeps<br /><em>Christ at the center.</em></h2><p>{study.conclusion}</p><div className="hs-actions"><Link href="/contact">Ask a study question →</Link></div></section>
      <section id="sources" className="hs-sources"><p className="hs-eyebrow">Read in context</p><h2>Sources & further reading</h2><p>Scripture excerpts use the King James Version. Historical works are witnesses to what their authors taught; they do not carry the authority of Scripture. Linked sources may disagree with this study’s conclusions.</p><ul>{study.sources.map(s=><li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.title} ↗</a><p>{s.detail}</p></li>)}</ul></section>
      </div>
    </div>
    <section className="hs-related"><div className="hs-shell"><p className="hs-eyebrow">Continue studying</p><nav aria-label="Related studies">{study.related.map(s=><Link href={s.href} key={s.href}>{s.title} <span>→</span></Link>)}</nav><Link className="hs-source-link" href="/bible-studies/general">← All general Bible studies</Link></div></section>
    <Footer />
  </main>;
}
