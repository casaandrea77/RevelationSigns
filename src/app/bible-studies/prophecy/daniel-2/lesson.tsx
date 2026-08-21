"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { useStudyProgress } from "@/hooks/useStudyProgress";

const questions = [
  { ref: "2 Peter 1:19", q: "What has God given us as a guide in a dark world?", verse: "We have also a more sure word of prophecy... as unto a light that shineth in a dark place.", answer: "Bible prophecy is compared to a lamp. It gives orientation, allowing us to see where history is going and where we stand within it." },
  { ref: "Amos 3:7", q: "Through whom does God reveal His purposes?", verse: "Surely the Lord God will do nothing, but he revealeth his secret unto his servants the prophets.", answer: "God communicated His plans through chosen messengers. Their writings allow later generations to examine what was announced before events unfolded." },
  { ref: "Daniel 2:28", q: "Why is Nebuchadnezzar’s dream especially relevant to us?", verse: "There is a God in heaven that revealeth secrets, and maketh known... what shall be in the latter days.", answer: "Daniel says the dream reaches beyond Babylon to the latter days. It presents a long-range outline of world history." },
  { ref: "Daniel 2:27–28", q: "Who revealed the forgotten dream to Daniel?", verse: "The secret which the king hath demanded cannot the wise men... shew unto the king; but there is a God in heaven that revealeth secrets.", answer: "Daniel took no credit for the revelation. He directed the king’s attention away from human wisdom and toward the God of heaven." },
  { ref: "Daniel 2:31–35", q: "What did the king see in his dream?", verse: "Thou, O king, sawest, and behold a great image... Then was the iron, the clay, the brass, the silver, and the gold, broken to pieces together... and the stone... became a great mountain.", answer: "The dream showed a towering statue made of different metals, followed by a stone that destroyed the image and filled the whole earth." },
  { ref: "Daniel 2:37–38", q: "What kingdom was represented by the head of gold?", verse: "Thou art this head of gold.", answer: "Nebuchadnezzar and his Babylonian Empire were the head of gold—the first kingdom in the prophetic sequence." },
  { ref: "Daniel 2:39", q: "How was the second kingdom compared with Babylon?", verse: "After thee shall arise another kingdom inferior to thee.", answer: "The chest and arms of silver represented Medo-Persia. It conquered Babylon, but Daniel described it as inferior in splendour." },
  { ref: "Daniel 2:39", q: "What did the third kingdom represent?", verse: "Another third kingdom of brass, which shall bear rule over all the earth.", answer: "The bronze belly and thighs represented Greece, whose conquests under Alexander spread with extraordinary speed across the ancient world." },
  { ref: "Daniel 2:33, 40", q: "Which part of the image represented the fourth empire?", verse: "His legs of iron... And the fourth kingdom shall be strong as iron.", answer: "The iron legs represented Rome—an empire noted for military strength and its ability to crush opposition." },
  { ref: "Daniel 2:41", q: "What happened after the iron kingdom of Rome?", verse: "The kingdom shall be divided... but they shall not cleave one to another.", answer: "The feet and toes, mixed with iron and clay, pictured Rome’s division into multiple kingdoms—some strong and some fragile." },
  { ref: "Daniel 2:43", q: "Would the divided kingdoms ever be permanently reunited?", verse: "They shall mingle themselves with the seed of men: but they shall not cleave one to another.", answer: "Political alliances, royal marriages and military campaigns repeatedly attempted to reunite Europe, yet the prophecy’s verdict remained: they would not permanently hold together." },
  { ref: "Daniel 2:44–45", q: "What kingdom finally replaces every human empire?", verse: "The God of heaven [shall] set up a kingdom, which shall never be destroyed... it shall break in pieces and consume all these kingdoms, and it shall stand for ever.", answer: "The stone represents God’s everlasting kingdom. Unlike every human empire in the image, it will never decline, divide or pass to another power." },
  { ref: "Matthew 25:31, 34", q: "What event marks the establishment of this eternal kingdom?", verse: "When the Son of man shall come in his glory... Then shall the King say... Come, ye blessed of my Father, inherit the kingdom prepared for you.", answer: "Jesus connects the kingdom’s arrival with His return in glory, when He welcomes His people into the kingdom prepared for them." },
];

const empires = [
  { metal: "Gold", name: "Babylon", dates: "605–539 BC" },
  { metal: "Silver", name: "Medo-Persia", dates: "539–331 BC" },
  { metal: "Bronze", name: "Greece", dates: "331–168 BC" },
  { metal: "Iron", name: "Rome", dates: "168 BC–AD 476" },
  { metal: "Iron + clay", name: "Divided Europe", dates: "AD 476–present" },
  { metal: "The stone", name: "God’s Kingdom", dates: "Forever" },
];

export default function StudyTwo() {
  const { open, complete, reflection, setComplete, setReflection, toggle } = useStudyProgress("daniel-2");
  const progress = Math.round((open.length / questions.length) * 100);

  return <main className="lesson-page prophecy-lesson pt-[82px]">
    <div className="lesson-progress"><span style={{ width: `${complete ? 100 : progress}%` }} /></div>
    <section className="lesson-hero image-lesson-hero shell">
      <div className="lesson-title-row lesson-title-photo study-2-photo">
        <div><Link className="back-link" href="/bible-studies">← Bible Studies</Link><p className="eyebrow">Prophecy study · Daniel 2</p><h1>God Unfolds<br /><em>the Future</em></h1></div>
        <div className="lesson-seal"><span>02</span><small>13 questions</small></div>
      </div>
      <div className="lesson-intro">
        <p className="lead">A light on the road ahead.</p>
        <p>In a dream given to the king of Babylon, a great image traced the rise and fall of empires—from the ancient world to divided Europe and, finally, the everlasting kingdom of God.</p>
        <p>Read Daniel 2 before beginning if you can. Then move through the passages and compare the prophecy’s sequence with the broad movement of history.</p>
      </div>
    </section>

    <section className="lesson-body shell">
      <aside className="lesson-aside">
        <div><p className="aside-label">Your progress</p><strong>{complete ? 100 : progress}%</strong><div className="aside-meter"><span style={{ width: `${complete ? 100 : progress}%` }} /></div><small>{complete ? "Study complete" : `${open.length} of ${questions.length} passages opened`}</small></div>
        <div><p className="aside-label">Key chapter</p><p>Daniel 2:1–49<br />Read the whole chapter to see the dream, its interpretation and Daniel’s response.</p></div>
      </aside>
      <div className="questions">
        <div className="questions-heading"><p className="eyebrow">Follow the sequence</p><h2>From Babylon<br />to eternity.</h2></div>

        <section className="prophecy-timeline" aria-label="Daniel 2 kingdom sequence">
          {empires.map((empire, index) => <div className={`empire empire-${index + 1}`} key={empire.name}>
            <span>{String(index + 1).padStart(2, "0")}</span><div><small>{empire.metal}</small><b>{empire.name}</b><em>{empire.dates}</em></div>
          </div>)}
        </section>

        {questions.map((item, index) => {
          const isOpen = open.includes(index);
          return <article className={`question ${isOpen ? "open" : ""}`} key={`${item.ref}-${index}`}>
            <button onClick={() => toggle(index)} aria-expanded={isOpen}>
              <span className="question-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="question-main"><small>{item.ref}</small><b>{item.q}</b></span>
              <span className="question-toggle">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <div className="answer"><blockquote>“{item.verse}”</blockquote><p>{item.answer}</p><span>King James Version · excerpt</span></div>}
          </article>;
        })}

        <aside className="callout"><div className="callout-icon">✦</div><div><p className="eyebrow">The central promise</p><h3>Human kingdoms pass.<br />God’s kingdom remains.</h3><p>The dream is not merely a timetable of political powers. Its destination is the everlasting kingdom of Christ—the stone that becomes a mountain and fills the whole earth.</p></div></aside>

        <section className="summary">
          <p className="eyebrow">Study summary</p><h2>History has a<br /><em>destination.</em></h2>
          <p>Daniel 2 presents history as purposeful rather than accidental. Empires rise, divide and disappear, but God remains sovereign. The prophecy ends with Christ returning in glory and welcoming His people into a kingdom that will never end.</p>
          <label className="reflection"><span>Your reflection</span><textarea value={reflection} onChange={(event) => setReflection(event.target.value)} placeholder="What part of Daniel’s prophecy stood out to you?" /></label>
          <button className={`complete-button ${complete ? "completed" : ""}`} onClick={() => setComplete(!complete)}><span>{complete ? "✓" : "○"}</span>{complete ? "Study completed" : "Mark study as complete"}</button>
        </section>
      </div>
    </section>

    <nav className="lesson-nav shell" aria-label="Study navigation">
      <Link href="/bible-studies"><span>←</span><small>Previous</small><b>All Bible Studies</b></Link>
      <div className="lesson-nav-center"><span>Daniel</span><i></i><span>Revelation</span></div>
      <a className="next-disabled" aria-disabled="true"><small>Prophecy series</small><b>Daniel & Revelation</b><span>→</span><em>Coming later</em></a>
    </nav>
    <Footer />
  </main>;
}
