"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { useStudyProgress } from "@/hooks/useStudyProgress";

const questions = [
  { ref: "1 John 3:4", q: "How does the Bible define sin?", verse: "Sin is the transgression of the law.", answer: "Sin is more than a mistake, weakness or social problem. Scripture defines it as crossing the boundary of God’s law—rejecting His revealed will." },
  { ref: "Romans 7:7", q: "Which commandment helped Paul recognise sin in himself?", verse: "I had not known lust, except the law had said, Thou shalt not covet.", answer: "The command against coveting exposed an inward desire, showing that God’s law addresses the heart as well as outward behaviour." },
  { ref: "James 2:10–12", q: "By what law will our lives be judged?", verse: "Whosoever shall keep the whole law, and yet offend in one point, he is guilty of all... So speak ye, and so do, as they that shall be judged by the law of liberty.", answer: "James treats God’s commandments as a unified expression of love. The same law that identifies sin is called the law of liberty." },
  { ref: "Exodus 20:3", q: "What does the first commandment prohibit?", verse: "Thou shalt have no other gods before me.", answer: "Nothing is to occupy God’s rightful place in our loyalty, trust and worship. An idol can be anything treated as more important than Him." },
  { ref: "Exodus 20:4–6", q: "What objects are forbidden in worship?", verse: "Thou shalt not make unto thee any graven image... Thou shalt not bow down thyself to them, nor serve them.", answer: "God forbids creating images as objects of worship. He asks for a direct, faithful relationship rather than devotion transferred to something made." },
  { ref: "Exodus 20:7", q: "Which commandment addresses irreverence and profanity?", verse: "Thou shalt not take the name of the Lord thy God in vain.", answer: "God’s name represents His character. Using it carelessly—or claiming it while living falsely—treats what is holy as empty." },
  { ref: "Exodus 20:8–11", q: "What has God asked us to remember?", verse: "Remember the sabbath day, to keep it holy... the seventh day is the sabbath of the Lord thy God.", answer: "The Sabbath command calls people to remember God as Creator, receive His gift of rest and set apart the seventh day for Him." },
  { ref: "Exodus 20:12", q: "What should characterise our relationship with our parents?", verse: "Honour thy father and thy mother: that thy days may be long upon the land.", answer: "God calls us to honour those who gave us life. Honour includes respect and care, while never requiring cooperation with abuse or wrongdoing." },
  { ref: "Exodus 20:13", q: "Which commandment forbids murder?", verse: "Thou shalt not kill.", answer: "Human life belongs to God and carries sacred value. Jesus later showed that the command also confronts hatred and contempt in the heart." },
  { ref: "Exodus 20:14", q: "What does God command concerning sexual faithfulness?", verse: "Thou shalt not commit adultery.", answer: "God protects the faithfulness of marriage and the dignity of people from sexual betrayal and exploitation." },
  { ref: "Exodus 20:15", q: "What does God say about taking another person’s property?", verse: "Thou shalt not steal.", answer: "The command protects property, labour and trust. It forbids gaining for ourselves through another person’s loss." },
  { ref: "Exodus 20:16", q: "How does God view dishonesty about other people?", verse: "Thou shalt not bear false witness against thy neighbour.", answer: "Falsehood can destroy reputation and justice. God calls His people to truthfulness, especially when their words affect another person." },
  { ref: "Exodus 20:17", q: "Which commandment confronts greed and envy?", verse: "Thou shalt not covet... any thing that is thy neighbour’s.", answer: "The final commandment reaches beneath actions to desire. It exposes the discontent that wants another person’s life, relationships or possessions." },
  { ref: "1 John 5:17", q: "What broad definition of sin does John give?", verse: "All unrighteousness is sin.", answer: "Sin includes every departure from what is right—not only the acts society happens to condemn most strongly." },
  { ref: "Romans 3:23", q: "How many people have broken God’s standard?", verse: "For all have sinned, and come short of the glory of God.", answer: "The problem is universal. No culture, group or individual stands outside the need for grace; every person falls short of God’s character." },
  { ref: "1 Timothy 1:15", q: "What hope is offered to sinners?", verse: "Christ Jesus came into the world to save sinners; of whom I am chief.", answer: "Recognition of sin is not meant to end in despair. Christ entered the world precisely to save people who cannot save themselves." },
];

export default function StudyFive() {
  const { open, complete, reflection, setComplete, setReflection, toggle } = useStudyProgress("problem-of-sin");
  const progress = Math.round((open.length / questions.length) * 100);

  return <main className="lesson-page pt-[82px]">
    <div className="lesson-progress"><span style={{ width: `${complete ? 100 : progress}%` }} /></div>
    <section className="lesson-hero image-lesson-hero shell">
      <div className="lesson-title-row lesson-title-photo study-5-photo">
        <div><Link className="back-link" href="/bible-studies">← All studies</Link><p className="eyebrow">Study 04 · Foundations</p><h1>The Problem<br /><em>of Sin</em></h1></div>
        <div className="lesson-seal"><span>05</span><small>16 questions</small></div>
      </div>
      <div className="lesson-intro">
        <p className="lead">What is sin—and why does it matter?</p>
        <p>Some dangers do their greatest harm when they are not recognised. Scripture describes sin as a universal condition that damages trust, distorts desire and separates humanity from the life of God.</p>
        <p>This study lets the Bible define sin, explores God’s Ten Commandments as a mirror of His character, and ends with the hope that Christ came specifically to save sinners.</p>
      </div>
    </section>

    <section className="lesson-body shell">
      <aside className="lesson-aside">
        <div><p className="aside-label">Your progress</p><strong>{complete ? 100 : progress}%</strong><div className="aside-meter"><span style={{ width: `${complete ? 100 : progress}%` }} /></div><small>{complete ? "Study complete" : `${open.length} of ${questions.length} passages opened`}</small></div>
        <div><p className="aside-label">A mirror, not a cure</p><p>God’s law exposes the problem and reveals His standard. The next study explores the remedy God provides through Christ.</p></div>
      </aside>
      <div className="questions">
        <div className="questions-heading"><p className="eyebrow">Facing the diagnosis</p><h2>God’s law.<br />The human heart.</h2></div>
        {questions.map((item, index) => {
          const isOpen = open.includes(index);
          return <article className={`question ${isOpen ? "open" : ""}`} key={`${item.ref}-${index}`}>
            <button onClick={() => toggle(index)} aria-expanded={isOpen}>
              <span className="question-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="question-main"><small>{item.ref}</small><b>{item.q}</b></span>
              <span className="question-toggle">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <div className="answer"><blockquote>“{item.verse}”</blockquote><p>{item.answer}</p><Link className="answer-version" href="/bible-studies/gods-amazing-book#why-kjv">King James Version · Why the KJV?</Link></div>}
          </article>;
        })}

        <aside className="callout"><div className="callout-icon">✦</div><div><p className="eyebrow">The law as a mirror</p><h3>It reveals the wound.<br />It cannot heal it.</h3><p>A mirror can show that something is wrong, but it cannot make us clean. In the same way, God’s law identifies sin and our need; salvation comes through the One to whom the law directs us.</p></div></aside>

        <section className="summary">
          <p className="eyebrow">Study summary</p><h2>The problem is universal.<br /><em>So is the invitation.</em></h2>
          <p>God’s commandments reveal a life of love, faithfulness, truth and reverence. Every person has fallen short of that standard, but no one is beyond hope: Christ Jesus came into the world to save sinners.</p>
          <label className="reflection"><span>Your reflection</span><textarea value={reflection} onChange={(event) => setReflection(event.target.value)} placeholder="What has God’s law revealed about His character—or your own need?" /></label>
          <button className={`complete-button ${complete ? "completed" : ""}`} onClick={() => setComplete(!complete)}><span>{complete ? "✓" : "○"}</span>{complete ? "Study completed" : "Mark study as complete"}</button>
        </section>
      </div>
    </section>

    <nav className="lesson-nav shell" aria-label="Study navigation">
      <Link href="/bible-studies/who-is-christ"><span>←</span><small>Previous</small><b>Who Is Christ?</b></Link>
      <div className="lesson-nav-center"><span>Study 03</span><i></i><span>Study 04</span></div>
      <Link href="/bible-studies/sin-and-its-cure"><small>Next</small><b>Sin and Its Cure</b><span>→</span></Link>
    </nav>
    <Footer />
  </main>;
}
