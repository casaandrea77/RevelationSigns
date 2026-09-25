import Image from 'next/image';
import illustrations from './illustrations.json';
import { bibleUrl } from './data';

type Illustration = { start: number; src: string; title: string; caption: string; kind: string; credit?: string; sourceUrl?: string; sourceLabel?: string; referenceUrl?: string; referenceLabel?: string };
const chapterArt: Record<string, Illustration[]> = illustrations;
export default function IllustratedScripture({ chapter, verses }: { chapter: number; verses: readonly string[] }) {
  const artwork = chapterArt[String(chapter)] ?? [];
  const starts = [...new Set([1, ...artwork.map(item => item.start)])].sort((a, b) => a - b);
  return <details className="rv-scripture rv-illustrated-scripture" open>
    <summary>Revelation {chapter} <span>King James Version · {verses.length} verses</span></summary>
    <div className="rv-scripture-content">
      <p className="rv-art-note">Read the Bible alongside the pictures. Captions distinguish biblical imagery, photographs and the study’s explanations.</p>
      {starts.map((start, index) => {
        const end = (starts[index + 1] ?? verses.length + 1) - 1;
        const art = artwork.find(item => item.start === start);
        return <section key={start} className="rv-passage-row" aria-label={`Revelation ${chapter}:${start}–${end}`}>
          <div className="rv-passage-verses">{verses.slice(start - 1, end).map((verse, i) => <p key={start + i} id={`verse-${start + i}`}><sup>{start + i}</sup> {verse}</p>)}</div>
          {art && <figure className="rv-passage-art"><a href={art.src} target="_blank" rel="noreferrer" aria-label={`Enlarge illustration: ${art.title} (opens in a new tab)`}><Image src={art.src} alt={art.title} width={1200} height={800} sizes="(max-width: 800px) 90vw, 440px" /></a><figcaption><span className="rv-label">{art.kind}</span><h3>{art.title}</h3><p>{art.caption}</p><span className="rv-art-credit">{art.credit ?? 'AI-generated illustration · Select image to enlarge'}</span>{art.sourceUrl && <p><a className="rv-reference" href={art.sourceUrl} target="_blank" rel="noreferrer">{art.sourceLabel} ↗</a></p>}{art.referenceUrl && <p><a className="rv-reference" href={art.referenceUrl} target="_blank" rel="noreferrer">{art.referenceLabel} ↗</a></p>}</figcaption></figure>}
        </section>;
      })}
      <p className="rv-text-credit">King James Version. <a className="rv-reference" href={bibleUrl(`Revelation ${chapter}`)} target="_blank" rel="noreferrer">Read on Bible Gateway ↗</a></p>
    </div>
  </details>;
}
