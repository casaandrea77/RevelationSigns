import Image from 'next/image';
import Link from 'next/link';
import { bibleUrl, chapters } from './data';
import scripture from './scripture.json';
import studies from './studies.json';
import StoryMap from './story-map';
import { SymbolLinks } from './symbol-guide';
import RevelationLectureSeries from './lecture-series';

type Study = (typeof studies)[number];
const sources: Record<number, [string, string]> = {
  2: ['Churches and the historicist approach', 'https://adventistbiblicalresearch.org/articles/ellen-g-white-and-the-interpretation-of-daniel-and-revelation'],
  8: ['Biblical Research Institute: interpreting the trumpets', 'https://adventistbiblicalresearch.org/articles/issues-in-the-interpretation-of-the-seven-trumpets-of-revelation'],
  9: ['Biblical Research Institute: interpreting the trumpets', 'https://adventistbiblicalresearch.org/articles/issues-in-the-interpretation-of-the-seven-trumpets-of-revelation'],
  13: ['Background to the Adventist historicist reading', 'https://adventistbiblicalresearch.org/articles/ellen-g-white-and-the-interpretation-of-daniel-and-revelation'],
  20: ['Adventist belief: the millennium and the end of sin', 'https://adventist.org/beliefs/official/millennium-and-the-end-of-sin'],
};
function Passage({ reference }: { reference: string }) {
  return <a className="rv-reference" href={bibleUrl(reference)} target="_blank" rel="noreferrer">{reference} ↗<span className="rv-sr-only"> (Bible Gateway, opens in a new tab)</span></a>;
}
function References({ references }: { references: string[] }) {
  return <div>{references.map(reference => <Passage key={reference} reference={reference} />)}</div>;
}
export default function ChapterStudy({ study }: { study: Study }) {
  const n = study.number;
  const [title, intro, art] = chapters[n - 1];
  const verses = scripture[n - 1];
  const source = sources[n];
  return <main>
    <div className="rv-shell rv-breadcrumb"><Link href="/revelation">← All chapters</Link><span>Revelation {n} · Illustrated study</span></div>
    <section className="rv-shell rv-study-hero"><p className="rv-eyebrow">Chapter {String(n).padStart(2, '0')} · {title}</p><h1>{study.heading}</h1><p className="rv-lead">{intro}</p><div className="rv-actions"><a className="rv-button" href="#read">Read Revelation {n}</a><a className="rv-text-link" href="#understand">Explore the chapter ↓</a></div></section>
    <SymbolLinks />
    <StoryMap chapter={n} />
    <section className="rv-shell rv-study-section rv-time-context"><p className="rv-eyebrow">Where this chapter fits</p><h2>Follow the vision’s setting.</h2><p>{study.time}</p></section>
    <section className="rv-shell"><figure className="rv-vision"><Image src={`/media/images/daniel-revelation/${art}.webp`} alt={`Conceptual artwork introducing the theme: ${title}`} width={960} height={640} sizes="(max-width: 1200px) 92vw, 1200px" /><figcaption>Theme illustration for “{title}.” This artwork introduces the subject; it does not reproduce every detail in Revelation {n}.</figcaption></figure></section>
    <nav className="rv-study-nav rv-shell" aria-label={`Chapter ${n} sections`}><a href="#read">Read</a><a href="#understand">Follow the scene</a><a href="#symbols">Understand the symbols</a><a href="#connections">Connect Scripture</a><a href="#reflect">Reflect</a></nav>
    <section id="read" className="rv-shell rv-study-section"><div className="rv-section-heading"><p className="rv-eyebrow">01 · Read the passage</p><h2>Let the chapter speak first.</h2><p>Read the whole chapter. Notice what John sees, what the speakers explain, and what remains a question.</p></div><details className="rv-scripture" open><summary>Revelation {n} <span>King James Version · {verses.length} verses</span></summary><div>{verses.map((verse, i) => <p key={i} id={`verse-${i + 1}`}><sup>{i + 1}</sup> {verse}</p>)}<p className="rv-text-credit">King James Version. <Passage reference={`Revelation ${n}`} /></p></div></details></section>
    <section id="understand" className="rv-shell rv-study-section"><div className="rv-section-heading"><p className="rv-eyebrow">02 · What John sees and hears</p><h2>What happens in this chapter?</h2><p>Read each group of verses alongside its explanation.</p></div><div className="rv-scene-list">{study.scenes.map(scene => <article key={scene.start}><span className="rv-verse-range">{scene.start === scene.end ? `Verse ${scene.start}` : `Verses ${scene.start}–${scene.end}`}</span><div><h3>{scene.title}</h3><p>{scene.text}</p><Passage reference={`Revelation ${n}:${scene.start}${scene.end === scene.start ? '' : `–${scene.end}`}`} /></div></article>)}</div></section>
    <section id="symbols" className="rv-paper"><div className="rv-shell rv-study-section"><div className="rv-section-heading"><p className="rv-eyebrow">03 · Understand the symbols</p><h2>See the picture. Read the explanation.</h2><p>Some meanings are given directly; others come from comparing Scripture or interpreting the image. Follow the references and read around them.</p></div><div className="rv-symbol-grid">{study.symbols.map(symbol => <article key={symbol.title}><span className="rv-label">{symbol.kind}</span><h3>{symbol.title}</h3><p>{symbol.text}</p><References references={symbol.references} /></article>)}</div><p><Link className="rv-reference" href="/revelation/symbols">Open the illustrated symbol guide →</Link></p></div></section>
    <section id="connections" className="rv-shell rv-study-section"><div className="rv-section-heading"><p className="rv-eyebrow">04 · Connect Scripture</p><h2>Have we seen these pictures before?</h2></div><div className="rv-comparison">{study.connections.map(connection => <article key={connection.title}><h3>{connection.title}</h3><p>{connection.text}</p><References references={connection.references} /></article>)}</div><aside className="rv-interpretation"><span className="rv-label">Our approach · Interpretation</span><h3>{study.interpretation.title}</h3><p>{study.interpretation.text}</p>{source && <a className="rv-reference" href={source[1]} target="_blank" rel="noreferrer">{source[0]} ↗<span className="rv-sr-only"> (opens in a new tab)</span></a>}</aside></section>
    <section id="reflect" className="rv-shell rv-study-section"><div className="rv-section-heading"><p className="rv-eyebrow">05 · Reflect and respond</p><h2>Bring the message into everyday life.</h2><p>Try answering from the Bible before opening each explanation.</p></div><div className="rv-questions">{study.questions.map(question => <details key={question.question}><summary>{question.question}</summary><p>{question.answer}</p><Passage reference={question.reference} /></details>)}</div><div className="rv-reflection"><h3>A question to carry with you</h3><p>{study.reflection}</p><p><strong>A short prayer:</strong> {study.prayer}</p></div></section>
    <nav className="rv-shell rv-next" aria-label="Continue the chapter study"><div><p className="rv-eyebrow">Continue the journey</p><h2>{n < 22 ? `Next: ${chapters[n][0]}.` : 'Carry this hope with you.'}</h2><Link className="rv-reference" href={`/revelation/chapter-${n - 1}`}>← Chapter {n - 1}</Link></div><Link className="rv-button" href={n < 22 ? `/revelation/chapter-${n + 1}` : '/revelation'}>{n < 22 ? `Study Revelation ${n + 1} →` : 'Return to all chapters →'}</Link></nav>
    <RevelationLectureSeries />
  </main>;
}
