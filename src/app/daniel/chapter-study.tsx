import IllustratedScripture, { type Illustration } from '../revelation/illustrated-scripture';
import Image from 'next/image';
import Link from 'next/link';
import { bibleUrl, chapterHref, chapters } from './data';
import illustrations from './illustrations.json';
import scripture from './scripture.json';
import studies from './studies.json';
import DanielStoryMap from './story-map';

type Study = (typeof studies)[number];
type Step = { kind: string; title: string; text: string; references?: string[] };
type Extras = { calculation?: { title: string; intro: string; steps: Step[] }; source?: string[][]; deeper?: { label: string; href: string; text: string } };
const art: Record<string, Illustration[]> = illustrations;

function Passage({ reference }: { reference: string }) {
  return <a className="rv-reference" href={bibleUrl(reference)} target="_blank" rel="noreferrer">{reference} ↗<span className="rv-sr-only"> (Bible Gateway, opens in a new tab)</span></a>;
}
function References({ references }: { references: string[] }) {
  return <div>{references.map(reference => <Passage key={reference} reference={reference} />)}</div>;
}
function nearest(n: number, step: number) {
  for (let c = n + step; c >= 1 && c <= 12; c += step) { const href = chapterHref(c); if (href) return { n: c, href }; }
  return null;
}
export default function DanielChapterStudy({ study }: { study: Study }) {
  const n = study.number;
  const { calculation, source, deeper } = study as Study & Extras;
  const [title, intro, theme] = chapters[n - 1];
  const verses = scripture[n - 1];
  const previous = nearest(n, -1);
  const next = nearest(n, 1);
  const nextHref = chapterHref(n + 1);
  return <main>
    <div className="rv-shell rv-breadcrumb"><Link href="/daniel">← All chapters of Daniel</Link><span>Daniel {n} · Illustrated study</span></div>
    <section className="rv-shell rv-study-hero"><p className="rv-eyebrow">Daniel · Chapter {String(n).padStart(2, '0')} · {title}</p><h1>{study.heading}</h1><p className="rv-lead">{intro}</p><div className="rv-actions"><a className="rv-button" href="#read">Read Daniel {n}</a><a className="rv-text-link" href="#understand">Explore the chapter ↓</a></div></section>
    <DanielStoryMap chapter={n} />
    <section className="rv-shell rv-study-section rv-time-context"><p className="rv-eyebrow">Where this chapter fits</p><h2>Follow the chapter’s setting.</h2><p>{study.time}</p></section>
    <section className="rv-shell"><figure className="rv-vision"><Image src={`/media/images/daniel-revelation/${theme}.webp`} alt={`Conceptual artwork introducing the theme: ${title}`} width={960} height={640} sizes="(max-width: 1200px) 92vw, 1200px" /><figcaption>Theme illustration for “{title}.” This artwork introduces the subject; it does not reproduce every detail in Daniel {n}.</figcaption></figure></section>
    <nav className="rv-study-nav rv-shell" aria-label={`Daniel ${n} sections`}><a href="#read">Read</a><a href="#understand">Follow the scene</a><a href="#symbols">Understand the symbols</a>{calculation && <a href="#time">Work out the time</a>}<a href="#connections">Connect Scripture</a><a href="#reflect">Reflect</a></nav>
    <section id="read" className="rv-shell rv-study-section"><div className="rv-section-heading"><p className="rv-eyebrow">01 · Read the passage</p><h2>Let the chapter speak first.</h2><p>Read the whole chapter. Notice what Daniel sees, what the heavenly messenger explains, and what is left as a question.</p></div><IllustratedScripture book="Daniel" chapter={n} verses={verses} art={art[String(n)] ?? []} /></section>
    <section id="understand" className="rv-shell rv-study-section"><div className="rv-section-heading"><p className="rv-eyebrow">02 · What Daniel sees and hears</p><h2>What happens in this chapter?</h2><p>Read each group of verses alongside its explanation.</p></div><div className="rv-scene-list">{study.scenes.map(scene => <article key={scene.start}><span className="rv-verse-range">{scene.start === scene.end ? `Verse ${scene.start}` : `Verses ${scene.start}–${scene.end}`}</span><div><h3>{scene.title}</h3><p>{scene.text}</p><Passage reference={`Daniel ${n}:${scene.start}${scene.end === scene.start ? '' : `–${scene.end}`}`} /></div></article>)}</div></section>
    <section id="symbols" className="rv-paper"><div className="rv-shell rv-study-section"><div className="rv-section-heading"><p className="rv-eyebrow">03 · Understand the symbols</p><h2>See the picture. Read the explanation.</h2><p>A symbol is a picture that carries a meaning. Some meanings are given directly in Daniel; others come from comparing Scripture. Follow the references and read around them.</p></div><div className="rv-symbol-grid">{study.symbols.map(symbol => <article key={symbol.title}><span className="rv-label">{symbol.kind}</span><h3>{symbol.title}</h3><p>{symbol.text}</p><References references={symbol.references} /></article>)}</div></div></section>
    {calculation && <section id="time" className="rv-shell rv-study-section"><div className="rv-section-heading"><p className="rv-eyebrow">04 · Work out the time</p><h2>{calculation.title}</h2><p>{calculation.intro}</p><p className="da-legend"><span className="da-key da-key-bible">Blue: what the Bible says</span><span className="da-key da-key-history">Gold: history and interpretation</span></p></div><ol className="da-steps">{calculation.steps.map((step, i) => <li key={step.title} className={step.kind.includes('nterpretation') || step.kind === 'History' ? 'da-step-history' : 'da-step-bible'}><span className="da-step-number">{i + 1}</span><div><span className="rv-label">{step.kind}</span><h3>{step.title}</h3><p>{step.text}</p>{step.references && <References references={step.references} />}</div></li>)}</ol></section>}
    <section id="connections" className="rv-shell rv-study-section"><div className="rv-section-heading"><p className="rv-eyebrow">{calculation ? '05' : '04'} · Connect Scripture</p><h2>Where else does the Bible use these pictures?</h2></div><div className="rv-comparison">{study.connections.map(connection => <article key={connection.title}><h3>{connection.title}</h3><p>{connection.text}</p><References references={connection.references} /></article>)}</div><aside className="rv-interpretation"><span className="rv-label">Our approach · Interpretation</span><h3>{study.interpretation.title}</h3><p>{study.interpretation.text}</p>{source && <div>{source.map(([label, url]) => <a key={url} className="rv-reference" href={url} target="_blank" rel="noreferrer">{label} ↗<span className="rv-sr-only"> (opens in a new tab)</span></a>)}</div>}</aside>{deeper && <aside className="rv-interpretation da-deeper"><span className="rv-label">Go deeper</span><h3>{deeper.label}</h3><p>{deeper.text}</p><Link className="rv-reference" href={deeper.href}>Open the study →</Link></aside>}</section>
    <section id="reflect" className="rv-shell rv-study-section"><div className="rv-section-heading"><p className="rv-eyebrow">{calculation ? '06' : '05'} · Reflect and respond</p><h2>Bring the message into everyday life.</h2><p>Try answering from the Bible before opening each explanation.</p></div><div className="rv-questions">{study.questions.map(question => <details key={question.question}><summary>{question.question}</summary><p>{question.answer}</p><Passage reference={question.reference} /></details>)}</div><div className="rv-reflection"><h3>A question to carry with you</h3><p>{study.reflection}</p><p><strong>A short prayer:</strong> {study.prayer}</p></div></section>
    <nav className="rv-shell rv-next" aria-label="Continue the chapter study"><div><p className="rv-eyebrow">Continue the journey</p><h2>{n < 12 ? `Next in Daniel: ${chapters[n][0]}.` : 'From Daniel to Revelation.'}</h2>{n < 12 && !nextHref && <p>The Daniel {n + 1} study is being written. Explore the other chapters in the meantime.</p>}{previous && <Link className="rv-reference" href={previous.href}>← Daniel {previous.n}</Link>}</div>{n === 12 ? <Link className="rv-button" href="/revelation">Study the Book of Revelation →</Link> : next ? <Link className="rv-button" href={next.href}>Study Daniel {next.n} →</Link> : <Link className="rv-button" href="/daniel">All chapters of Daniel →</Link>}</nav>
  </main>;
}
