import Link from 'next/link';
import { bibleUrl } from './data';

// Shared "What is the Mark of the Beast?" explanation for Revelation 12, 13 and 14.
// Position follows the historic Adventist reading (The Great Controversy, chapters 25 and 38;
// Amazing Facts Study Guide 20). Keep it simple, sourced and kind.

const chapterLinks: Record<number, { title: string; text: string }> = {
  12: {
    title: 'Why Revelation 12 matters for the mark',
    text: 'Chapter 12 shows who is really behind the mark: the dragon, Satan (12:9). At the end of the chapter he goes to war against God’s last-day people, who “keep the commandments of God, and have the testimony of Jesus Christ” (12:17). Chapter 13 shows how he fights that war: through two beasts and a mark. So from the start, the final battle is about God’s commandments.',
  },
  13: {
    title: 'Where the mark appears',
    text: 'Chapter 13 is where John first sees the mark. The beast from the earth makes a law that everyone must worship the first beast and its image. Those who refuse cannot buy or sell, and finally face a death decree (13:15–17). Notice the word that keeps coming back in this chapter: worship (13:4, 8, 12, 15).',
  },
  14: {
    title: 'God’s warning about the mark',
    text: 'Chapter 14 gives God’s answer to chapter 13. The first angel calls everyone to worship the Creator, “him that made heaven, and earth” (14:7). The third angel gives the Bible’s most serious warning against receiving the mark (14:9–11). Then it describes the people who refuse it: they “keep the commandments of God, and the faith of Jesus” (14:12).',
  },
};

const steps: { title: string; text: string; references: string[] }[] = [
  {
    title: 'It is about worship',
    text: 'The mark is always connected with worshipping the beast (13:15–16; 14:9). The first angel calls the world to worship the Creator instead (14:7). So the mark is a question of whom we worship and obey, God or a human power.',
    references: ['Revelation 13:15–16', 'Revelation 14:7–9'],
  },
  {
    title: 'It is about God’s commandments',
    text: 'The people who refuse the mark are described twice as those who keep God’s commandments (12:17; 14:12). So the test will involve the Ten Commandments.',
    references: ['Revelation 12:17', 'Revelation 14:12'],
  },
  {
    title: 'Forehead and hand',
    text: 'God told Israel to bind His words on their hand and between their eyes (Deuteronomy 6:8). The forehead stands for what we believe and choose. The hand stands for what we do. Some will receive the mark because they truly agree; others simply go along to keep their jobs and buy food.',
    references: ['Deuteronomy 6:6–8', 'Revelation 13:16'],
  },
  {
    title: 'God has a sign too: the Sabbath',
    text: 'God calls His Sabbath “a sign between me and you” that He is the Lord who makes us holy (Exodus 31:13; Ezekiel 20:12, 20). The Sabbath commandment is the one that names God as the Creator of heaven and earth, which is exactly what the first angel says (Exodus 20:11; Revelation 14:7). God’s people receive His seal in their foreheads (Revelation 7:3; 14:1).',
    references: ['Exodus 31:13–17', 'Ezekiel 20:12, 20', 'Exodus 20:8–11', 'Revelation 7:2–3'],
  },
  {
    title: 'The beast tried to change God’s law',
    text: 'Daniel saw the little horn power, which Revelation 13 develops as the sea beast, “think to change times and laws” (Daniel 7:25). The only commandment about time is the fourth, the Sabbath. Over the centuries, Sunday was put in the place of the seventh-day Sabbath by church tradition, not by Scripture. Catholic writers have pointed to this change as a sign of their church’s authority.',
    references: ['Daniel 7:25', 'Mark 2:27–28', 'Matthew 15:9'],
  },
  {
    title: 'A future law will force the choice',
    text: 'Revelation 13:15–17 describes a law with economic pressure and finally a death decree. Following Amazing Facts and The Great Controversy, we understand this as a future law requiring Sunday worship. Then everyone will have to choose between God’s Sabbath and a human command.',
    references: ['Revelation 13:15–17', 'Daniel 3:4–6'],
  },
];

const deceptions: { title: string; text: string; references: string[] }[] = [
  {
    title: 'Miracles that look like God’s power',
    text: 'The earth beast “doeth great wonders, so that he maketh fire come down from heaven” and “deceiveth them that dwell on the earth by the means of those miracles” (13:13–14). Jesus warned that false christs would show signs so great that, if it were possible, they would deceive even the very elect.',
    references: ['Revelation 13:13–14', 'Matthew 24:24', 'Revelation 16:13–14'],
  },
  {
    title: 'Disasters and fear used to push a Sunday law',
    text: 'As disasters, wars and moral decline grow, many will say the world must return to God by honouring Sunday. Laws promoted as a cure for society’s problems will become the way to enforce the mark. Those who keep God’s Sabbath will be blamed for the troubles (The Great Controversy, chapter 36).',
    references: ['Revelation 13:15–17', 'Daniel 7:25', 'Revelation 12:17'],
  },
  {
    title: 'Spirits pretending to be the dead',
    text: 'Spirits of devils work miracles to gather the world (16:14). The Bible teaches that the dead know nothing until the resurrection (Ecclesiastes 9:5), so a “message” from a dead loved one or a so-called saint is a dangerous deception.',
    references: ['Revelation 16:13–14', 'Ecclesiastes 9:5', '2 Thessalonians 2:9–10'],
  },
  {
    title: 'The final deception: a false Christ',
    text: 'As Satan’s crowning act, he will appear as a glorious being and claim to be Christ, even teaching that Sunday is holy (The Great Controversy, chapter 39). But the real Jesus will not walk on the earth when He comes. He comes in the clouds, and every eye will see Him at once.',
    references: ['Matthew 24:23–27', '2 Corinthians 11:14', 'Revelation 1:7', '1 Thessalonians 4:16–17'],
  },
];

function Passage({ reference }: { reference: string }) {
  return <a className="rv-reference" href={bibleUrl(reference)} target="_blank" rel="noreferrer">{reference} ↗<span className="rv-sr-only"> (Bible Gateway, opens in a new tab)</span></a>;
}

export default function MarkOfTheBeast({ chapter }: { chapter: number }) {
  const link = chapterLinks[chapter];
  if (!link) return null;
  return <section id="mark-of-the-beast" className="rv-mark">
    <div className="rv-shell rv-study-section">
      <div className="rv-section-heading">
        <p className="rv-eyebrow">The Bible’s most solemn warning · Revelation 12–14</p>
        <h2>What is the Mark of the Beast?</h2>
        <p>Revelation 12, 13 and 14 belong together. Here is the answer in plain words, the Bible steps that lead to it, and the deceptions that will push the world to receive it. Read this first, then study the chapter below.</p>
      </div>

      <aside className="rv-mark-answer" aria-label="Short answer">
        <span className="rv-label">The short answer</span>
        <p className="rv-mark-lead">The mark of the beast is choosing to obey a human law about worship, a future law requiring Sunday worship, instead of God’s command to keep His holy seventh-day Sabbath, once the choice is clear.</p>
        <p>It is not a microchip, a tattoo, a barcode or any other technology. It is a matter of loyalty: whom will you worship and obey? God’s people will instead receive <strong>the seal of God</strong>, His name in their foreheads (Revelation 7:3; 14:1).</p>
      </aside>

      <article className="rv-mark-chapter">
        <span className="rv-label">Revelation {chapter}</span>
        <h3>{link.title}</h3>
        <p>{link.text}</p>
      </article>

      <h3 className="rv-mark-subhead">How the Bible leads us there, step by step</h3>
      <ol className="rv-mark-steps">
        {steps.map((step, i) => <li key={step.title}>
          <span className="rv-mark-number" aria-hidden="true">{i + 1}</span>
          <div><h4>{step.title}</h4><p>{step.text}</p><div>{step.references.map(reference => <Passage key={reference} reference={reference} />)}</div></div>
        </li>)}
      </ol>


      <h3 className="rv-mark-subhead" id="coming-deception">The coming deception: how the world will be led to receive the mark</h3>
      <p className="rv-mark-intro">The mark will not arrive as an obvious evil. Revelation says the whole world will be <em>deceived</em> into it (13:14). These are the deceptions the Bible warns about.</p>
      <ol className="rv-mark-steps rv-mark-deceptions">
        {deceptions.map(item => <li key={item.title}>
          <span className="rv-mark-number" aria-hidden="true">!</span>
          <div><h4>{item.title}</h4><p>{item.text}</p><div>{item.references.map(reference => <Passage key={reference} reference={reference} />)}</div></div>
        </li>)}
      </ol>
      <article className="rv-mark-chapter rv-mark-safe">
        <span className="rv-label">How to be safe</span>
        <h3>Stay close to Jesus and His Word.</h3>
        <p>Only those who know the Bible well will stand. Test every miracle, feeling and message by Scripture: “To the law and to the testimony: if they speak not according to this word, it is because there is no light in them” (Isaiah 8:20). Love Jesus, keep His commandments, and let Him place His seal on your mind today (John 14:15; Revelation 14:12).</p>
        <Passage reference="Isaiah 8:20" /><Passage reference="John 14:15" /><Passage reference="2 Timothy 3:15–17" />
      </article>

      <div className="rv-comparison rv-mark-compare">
        <article>
          <span className="rv-label">The seal of God</span>
          <h3>Loyal to the Creator</h3>
          <ul>
            <li>Worship the Creator who made heaven and earth (14:7)</li>
            <li>Keep God’s commandments, including His seventh-day Sabbath (14:12)</li>
            <li>Trust in Jesus: “the faith of Jesus” (14:12)</li>
            <li>The Father’s name in the forehead (14:1)</li>
          </ul>
          <Passage reference="Revelation 14:1–12" />
        </article>
        <article>
          <span className="rv-label">The mark of the beast</span>
          <h3>Loyal to a human power</h3>
          <ul>
            <li>Worship the beast and its image (13:15)</li>
            <li>Obey a human law about worship over God’s law</li>
            <li>Received by belief (forehead) or by going along (hand) (13:16)</li>
            <li>Enforced by pressure: no buying or selling (13:17)</li>
          </ul>
          <Passage reference="Revelation 13:11–17" />
        </article>
      </div>

      <aside className="rv-interpretation rv-mark-care">
        <span className="rv-label">Important · Nobody has the mark yet</span>
        <h3>A warning given in love, not a label for people.</h3>
        <p>No one receives the mark of the beast today. Many sincere Christians in every church, including Catholics, worship on Sunday and love Jesus. God accepts them according to the light they have. The mark is received only when Sunday worship is enforced by law <em>and</em> a person clearly understands God’s Sabbath, yet chooses to obey the human law instead.</p>
        <p>That is why God sends the three angels’ messages <em>before</em> the crisis: so that everyone can know the truth and choose Jesus now. His invitation is still open: “Here are they that keep the commandments of God, and the faith of Jesus” (14:12).</p>
        <p className="rv-interpretation-label">Interpretation: Revelation does not use the word “Sunday.” This explanation comes from comparing Revelation with Daniel 7, Exodus 20 and other passages, as taught by Amazing Facts and Ellen G. White in The Great Controversy (chapters 25, 36, 38 and 39).</p>
        <div>
          <Link className="rv-reference" href="/bible-studies/amazing-facts/the-mark-of-the-beast">Amazing Facts Study Guide 20: The Mark of the Beast →</Link>
          <Link className="rv-reference" href="/questions#mark-of-the-beast">Questions: What is the Mark of the Beast? →</Link>
        </div>
      </aside>
    </div>
  </section>;
}
