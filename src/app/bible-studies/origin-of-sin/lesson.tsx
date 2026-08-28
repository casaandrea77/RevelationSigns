"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { useStudyProgress } from "@/hooks/useStudyProgress";

const questions = [
  { ref: "1 John 3:8", q: "With whom did sin originate?", verse: "He that committeth sin is of the devil; for the devil sinneth from the beginning.", answer: "The Bible traces sin back to the devil. Evil did not originate in God; it began when a created being turned away from Him." },
  { ref: "Ezekiel 28:12, 15", q: "What was Satan like before his rebellion?", verse: "Thou sealest up the sum, full of wisdom, and perfect in beauty... Thou wast perfect in thy ways from the day that thou wast created, till iniquity was found in thee.", answer: "He was created wise, beautiful and morally perfect. Sin was not placed within him—it emerged through the misuse of his freedom." },
  { ref: "Ezekiel 28:17", q: "Where did Satan’s problem begin?", verse: "Thine heart was lifted up because of thy beauty, thou hast corrupted thy wisdom by reason of thy brightness.", answer: "Pride began in his heart. Admiration of his own beauty displaced gratitude to his Creator and distorted his wisdom." },
  { ref: "Ezekiel 28:14", q: "What honoured position did he hold in heaven?", verse: "Thou art the anointed cherub that covereth; and I have set thee so.", answer: "He occupied an exalted position close to God’s presence. His rebellion therefore began amid great privilege, knowledge and responsibility." },
  { ref: "Isaiah 14:12–14", q: "What position did this exalted being begin to covet?", verse: "I will exalt my throne above the stars of God... I will be like the most High.", answer: "His ambition moved beyond service toward self-exaltation. He wanted God’s position and authority rather than loving submission to God’s character." },
  { ref: "Revelation 12:7–9", q: "What happened when Satan’s rebellion led to war in heaven?", verse: "The great dragon was cast out, that old serpent, called the Devil, and Satan... he was cast out into the earth, and his angels were cast out with him.", answer: "Satan and the angels who followed him were expelled from heaven. The conflict then came to this world." },
  { ref: "Genesis 3:1–6", q: "Whom did Satan deceive after being cast out?", verse: "The serpent beguiled Eve through his subtilty... she took of the fruit thereof, and did eat, and gave also unto her husband.", answer: "Working through the serpent, Satan deceived Eve by questioning God’s word and motives. Humanity then entered the conflict through distrust and disobedience." },
  { ref: "Luke 4:5–6", q: "What authority does Satan now claim as his own?", verse: "The devil... shewed unto him all the kingdoms of the world... All this power will I give thee... for that is delivered unto me.", answer: "Satan claimed authority over the kingdoms of this world. Jesus rejected both the claim’s temptation and the demand for worship behind it." },
  { ref: "Job 2:7", q: "What suffering did Satan bring upon Job?", verse: "Satan... smote Job with sore boils from the sole of his foot unto his crown.", answer: "Job’s story reveals Satan as an agent of suffering while also showing that his activity remains subject to limits set by God." },
  { ref: "Ezekiel 28:16–19", q: "What final end does Scripture describe for the devil?", verse: "I will bring forth a fire from the midst of thee... and never shalt thou be any more.", answer: "Evil will not continue forever. Satan’s final destruction will bring his rebellion and its suffering to a permanent end." },
  { ref: "Revelation 12:10, 12", q: "How does Satan work as the conflict nears its end?", verse: "The accuser of our brethren is cast down... the devil is come down unto you, having great wrath, because he knoweth that he hath but a short time.", answer: "He accuses, deceives and works with urgency because his time is limited. Revelation therefore calls God’s people to alertness and endurance." },
  { ref: "2 Corinthians 11:13–15", q: "How can Satan disguise himself and his activity?", verse: "Satan himself is transformed into an angel of light. Therefore it is no great thing if his ministers also be transformed as the ministers of righteousness.", answer: "Evil does not always appear openly evil. It can imitate goodness, making Scripture and the character of Christ essential tests of spiritual claims." },
  { ref: "Ephesians 6:11–12", q: "What defence are we given against spiritual deception?", verse: "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.", answer: "The conflict is spiritual, so human strength is insufficient. Truth, righteousness, faith, salvation, God’s Word and prayer form the armour Paul describes." },
  { ref: "Revelation 12:11", q: "How can people overcome this enemy?", verse: "They overcame him by the blood of the Lamb, and by the word of their testimony; and they loved not their lives unto the death.", answer: "Victory rests in Christ’s sacrifice, a faithful testimony and allegiance to God stronger than fear—even the fear of death." },
];

export default function StudyThree() {
  const { open, complete, reflection, setComplete, setReflection, toggle } = useStudyProgress("origin-of-sin");
  const progress = Math.round((open.length / questions.length) * 100);

  return <main className="lesson-page pt-[82px]">
    <div className="lesson-progress"><span style={{ width: `${complete ? 100 : progress}%` }} /></div>
    <section className="lesson-hero image-lesson-hero shell">
      <div className="lesson-title-row lesson-title-photo study-3-photo">
        <div><Link className="back-link" href="/bible-studies">← All studies</Link><p className="eyebrow">Study 02 · Foundations</p><h1>The Origin<br /><em>of Sin</em></h1></div>
        <div className="lesson-seal"><span>03</span><small>14 questions</small></div>
      </div>
      <div className="lesson-intro">
        <p className="lead">If God is good, where did evil come from?</p>
        <p>War, cruelty, disease and death raise one of humanity’s oldest questions. The Bible answers by taking us behind the visible conflict to a rebellion that began in heaven.</p>
        <p>This study follows evil from its origin in a created angel, through humanity’s fall, to its promised end—and reveals how Christ gives us victory in the conflict today.</p>
      </div>
    </section>

    <section className="lesson-body shell">
      <aside className="lesson-aside">
        <div><p className="aside-label">Your progress</p><strong>{complete ? 100 : progress}%</strong><div className="aside-meter"><span style={{ width: `${complete ? 100 : progress}%` }} /></div><small>{complete ? "Study complete" : `${open.length} of ${questions.length} passages opened`}</small></div>
        <div><p className="aside-label">The central question</p><p>God created free beings capable of love. This lesson explores what happened when that freedom was turned toward pride and rebellion.</p></div>
      </aside>
      <div className="questions">
        <div className="questions-heading"><p className="eyebrow">Behind the conflict</p><h2>Where evil began.<br />How it will end.</h2></div>
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

        <aside className="callout"><div className="callout-icon">✦</div><div><p className="eyebrow">Freedom and love</p><h3>Love cannot be forced.<br />Loyalty must be chosen.</h3><p>The possibility of rejecting God was inseparable from meaningful freedom. The biblical story shows what rebellion produces—and how God answers it without abandoning either love or justice.</p></div></aside>

        <section className="summary">
          <p className="eyebrow">Study summary</p><h2>Evil is real—<br /><em>but not eternal.</em></h2>
          <p>Sin began with pride in a created angel, spread through deception, and brought suffering into our world. Yet its power is limited and its end is certain. Through the blood of Christ, faithful trust and God’s spiritual armour, no one needs to face the conflict alone.</p>
          <label className="reflection"><span>Your reflection</span><textarea value={reflection} onChange={(event) => setReflection(event.target.value)} placeholder="How does this study change the way you see the conflict between good and evil?" /></label>
          <button className={`complete-button ${complete ? "completed" : ""}`} onClick={() => setComplete(!complete)}><span>{complete ? "✓" : "○"}</span>{complete ? "Study completed" : "Mark study as complete"}</button>
        </section>
      </div>
    </section>

    <nav className="lesson-nav shell" aria-label="Study navigation">
      <Link href="/bible-studies/gods-amazing-book"><span>←</span><small>Previous foundational study</small><b>God’s Amazing Book</b></Link>
      <div className="lesson-nav-center"><span>Study 01</span><i></i><span>Study 02</span></div>
      <Link href="/bible-studies/who-is-christ"><small>Next</small><b>Who Is Christ?</b><span>→</span></Link>
    </nav>
    <Footer />
  </main>;
}
