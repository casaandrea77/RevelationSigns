"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { useStudyProgress } from "@/hooks/useStudyProgress";

const questions = [
  { ref: "Micah 5:2", q: "How far back does prophecy trace Christ’s existence?", verse: "Out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.", answer: "The promised ruler would be born in Bethlehem, yet His existence reached far beyond His human birth—back into eternity." },
  { ref: "John 17:5", q: "How long did Jesus say He had been with the Father?", verse: "Glorify thou me with thine own self with the glory which I had with thee before the world was.", answer: "Jesus spoke of sharing the Father’s glory before creation. His life did not begin in Bethlehem; He existed with the Father before the world." },
  { ref: "Hebrews 1:8", q: "What does God the Father call the Son?", verse: "But unto the Son he saith, Thy throne, O God, is for ever and ever.", answer: "The Father addresses the Son as God and describes His throne as eternal. Hebrews presents Christ as fully divine." },
  { ref: "Colossians 2:9", q: "What fullness dwells in Christ?", verse: "For in him dwelleth all the fulness of the Godhead bodily.", answer: "Christ did not merely reflect a small part of God. The fullness of deity was present in Him in bodily form." },
  { ref: "John 20:28", q: "How did Thomas address the risen Jesus?", verse: "And Thomas answered and said unto him, My Lord and my God.", answer: "Confronted with the risen Christ, Thomas confessed Him personally as both Lord and God—and Jesus accepted that confession." },
  { ref: "John 1:1, 14", q: "What does John say Christ was—and what did He become?", verse: "The Word was with God, and the Word was God... And the Word was made flesh, and dwelt among us.", answer: "The eternal Word was God, yet entered human history in real flesh. Christianity holds both truths together: Jesus is divine and truly human." },
  { ref: "John 1:1–3, 14", q: "Who created the world?", verse: "All things were made by him; and without him was not any thing made that was made.", answer: "John identifies the Word who became flesh as the Creator. Everything that exists owes its origin to Him." },
  { ref: "Colossians 1:15–17", q: "How extensive was Christ’s work of creation?", verse: "By him were all things created, that are in heaven, and that are in earth... all things were created by him, and for him.", answer: "Visible and invisible, earthly and heavenly—all creation came through Christ, exists for Him, and is held together by Him." },
  { ref: "John 10:30", q: "How did Jesus describe His relationship with the Father?", verse: "I and my Father are one.", answer: "Jesus expresses a profound unity with the Father—not the same person, but one in divine nature, purpose and character." },
  { ref: "Matthew 3:16–17", q: "What did the Father call Jesus at His baptism?", verse: "A voice from heaven, saying, This is my beloved Son, in whom I am well pleased.", answer: "At the baptism, Father, Son and Holy Spirit are distinctly present, and the Father publicly identifies Jesus as His beloved Son." },
  { ref: "Matthew 1:18, 20; Luke 1:35", q: "By what miracle did Christ enter the world?", verse: "That which is conceived in her is of the Holy Ghost... therefore also that holy thing which shall be born of thee shall be called the Son of God.", answer: "Jesus was born to Mary through the action of the Holy Spirit. His birth joined genuine humanity with a unique divine origin." },
  { ref: "Matthew 1:21", q: "Why did Jesus come into the world?", verse: "Thou shalt call his name JESUS: for he shall save his people from their sins.", answer: "His name announced His mission. Jesus came not merely to teach or reform society, but to save people from sin itself." },
  { ref: "1 Peter 2:21–22", q: "What kind of life did Christ live?", verse: "Christ also suffered for us, leaving us an example... Who did no sin, neither was guile found in his mouth.", answer: "Jesus lived without sin or deceit. His life reveals God’s character and provides a pattern for those who follow Him." },
  { ref: "1 Peter 2:23–24", q: "What penalty did Christ bear for us?", verse: "Who his own self bare our sins in his own body on the tree... by whose stripes ye were healed.", answer: "Though innocent, Christ carried our sins to the cross. His suffering opens the way for forgiveness, healing and a new life of righteousness." },
  { ref: "2 Corinthians 5:19–21", q: "What exchange takes place when we accept Christ?", verse: "He hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.", answer: "Christ took our sin so that we might receive His righteousness. Salvation is not self-improvement but a gift of reconciliation from God." },
  { ref: "John 3:16", q: "How do we receive eternal life?", verse: "God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", answer: "Eternal life is offered to everyone who trusts in God’s Son. The invitation is universal, personal and rooted in God’s love." },
  { ref: "1 John 5:11–12", q: "What do we receive by accepting Christ and His sacrifice?", verse: "God hath given to us eternal life, and this life is in his Son. He that hath the Son hath life.", answer: "Eternal life is found in a relationship with Christ. To receive the Son is to receive the life God has placed in Him." },
];

export default function StudyFour() {
  const { open, complete, reflection, setComplete, setReflection, toggle } = useStudyProgress("who-is-christ");
  const progress = Math.round((open.length / questions.length) * 100);

  return <main className="lesson-page pt-[82px]">
    <div className="lesson-progress"><span style={{ width: `${complete ? 100 : progress}%` }} /></div>
    <section className="lesson-hero image-lesson-hero shell">
      <div className="lesson-title-row lesson-title-photo study-4-photo">
        <div><Link className="back-link" href="/bible-studies">← All studies</Link><p className="eyebrow">Study 03 · Foundations</p><h1>What Think Ye<br /><em>of Christ?</em></h1></div>
        <div className="lesson-seal"><span>04</span><small>17 questions</small></div>
      </div>
      <div className="lesson-intro">
        <p className="lead">Who is Jesus—really?</p>
        <p>Teacher, reformer, prophet, miracle-worker: history has given Jesus many descriptions. Scripture makes a greater claim—that the child born in Bethlehem was the eternal Creator entering His own world.</p>
        <p>This study follows Christ from eternity to creation, from His miraculous birth to His sinless life, the cross and the gift of eternal life offered in Him.</p>
      </div>
    </section>

    <section className="lesson-body shell">
      <aside className="lesson-aside">
        <div><p className="aside-label">Your progress</p><strong>{complete ? 100 : progress}%</strong><div className="aside-meter"><span style={{ width: `${complete ? 100 : progress}%` }} /></div><small>{complete ? "Study complete" : `${open.length} of ${questions.length} passages opened`}</small></div>
        <div><p className="aside-label">The central claim</p><p>Jesus was God, yet genuinely became human. He entered our condition to reveal the Father and save us from sin.</p></div>
      </aside>
      <div className="questions">
        <div className="questions-heading"><p className="eyebrow">Consider the evidence</p><h2>Eternal God.<br />Living Saviour.</h2></div>
        {questions.map((item, index) => {
          const isOpen = open.includes(index);
          return <article className={`question ${isOpen ? "open" : ""}`} key={`${item.ref}-${index}`}>
            <button onClick={() => toggle(index)} aria-expanded={isOpen}>
              <span className="question-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="question-main"><small>{item.ref}</small><b>{item.q}</b></span>
              <span className="question-toggle">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <div className="answer"><blockquote>“{item.verse}”</blockquote><p>{item.answer}</p><Link className="answer-version" href="/bible-studies#why-kjv">King James Version · Why the KJV?</Link></div>}
          </article>;
        })}

        <aside className="callout"><div className="callout-icon">✦</div><div><p className="eyebrow">The great exchange</p><h3>He took our sin.<br />He gives His righteousness.</h3><p>At the heart of the gospel is not advice about how to rescue ourselves, but the action of Christ on our behalf. The sinless One bore our guilt so that we could be reconciled to God.</p></div></aside>

        <section className="summary">
          <p className="eyebrow">Study summary</p><h2>To receive the Son<br />is to receive <em>life.</em></h2>
          <p>Jesus is presented as the eternal Word, Creator, Son of God and fully human Saviour. He lived without sin, carried our sins to the cross and offers His righteousness and eternal life freely to everyone who trusts in Him.</p>
          <label className="reflection"><span>Your reflection</span><textarea value={reflection} onChange={(event) => setReflection(event.target.value)} placeholder="What has this study shown you about the identity and mission of Jesus?" /></label>
          <button className={`complete-button ${complete ? "completed" : ""}`} onClick={() => setComplete(!complete)}><span>{complete ? "✓" : "○"}</span>{complete ? "Study completed" : "Mark study as complete"}</button>
        </section>
      </div>
    </section>

    <nav className="lesson-nav shell" aria-label="Study navigation">
      <Link href="/bible-studies/origin-of-sin"><span>←</span><small>Previous</small><b>The Origin of Sin</b></Link>
      <div className="lesson-nav-center"><span>Study 02</span><i></i><span>Study 03</span></div>
      <Link href="/bible-studies/problem-of-sin"><small>Next</small><b>The Problem of Sin</b><span>→</span></Link>
    </nav>
    <Footer />
  </main>;
}
