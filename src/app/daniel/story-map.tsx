import Image from 'next/image';
import Link from 'next/link';
import { danielParts } from './data';

export default function DanielStoryMap({ chapter }: { chapter?: number }) {
  const current = chapter ? danielParts.find(part => chapter >= part.first && chapter <= part.last) : undefined;
  return <section className="rv-story-map rv-shell da-story-map" aria-labelledby="daniel-map-title">
    <p className="rv-eyebrow">Your guide through the book</p>
    <h2 id="daniel-map-title">How is Daniel arranged?</h2>
    <p className="rv-map-intro">Daniel has two halves. Chapters 1–6 tell true stories from Daniel’s life. Chapters 7–12 record his visions of the future.</p>
    {current && <div className="rv-you-are-here"><strong>You are here: Chapter {chapter} · {current.title}</strong><p>{current.text}</p><span>{current.time}</span></div>}
    <ol className="rv-map-track da-map-track">{danielParts.map((part, i) => <li key={part.title} className={current === part ? 'rv-map-current' : ''}><Link href={`/daniel#chapter-${part.first}`} aria-current={current === part ? 'step' : undefined}><div className="rv-map-picture"><Image src={`/media/images/daniel-revelation/${part.art}.webp`} alt="" width={960} height={640} sizes="(max-width:650px) 90vw, 560px" /><span>{i + 1}</span></div><div className="rv-map-copy"><span className="rv-map-position">{current === part ? 'You are here' : part.time}</span><h3>{part.title}</h3><p>{part.text}</p><strong>{part.chapters} →</strong></div></Link></li>)}</ol>
    <div className="rv-map-help"><strong>One important thing to remember</strong><p>The chapters are not all in time order. Chapters 7 and 8 happen during Belshazzar’s reign, before Babylon falls in chapter 5. The visions also repeat and expand: chapters 2, 7, 8 and 11 each cover the same history in more detail.</p></div>
  </section>;
}
