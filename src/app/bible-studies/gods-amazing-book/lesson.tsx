"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Footer } from "@/components/layout/Footer";
import { useStudyProgress } from "@/hooks/useStudyProgress";

const questions = [
  { ref: "Matthew 4:4", q: "What did Jesus say we need in order to truly live?", verse: "Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.", answer: "Jesus presents God’s Word as essential nourishment—not an optional extra, but something life itself depends upon." },
  { ref: "2 Peter 1:20–21", q: "How did God communicate Scripture through the prophets?", verse: "The prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.", answer: "The message did not originate in human opinion. God’s Spirit guided the prophets as they communicated it in human language." },
  { ref: "2 Timothy 3:16", q: "How much of Scripture is inspired?", verse: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.", answer: "The Bible claims divine inspiration for all Scripture. It is intended to teach, correct and shape the way we live." },
  { ref: "John 5:39", q: "Who did Christ say the Scriptures testify about?", verse: "Search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me.", answer: "Jesus said that Scripture ultimately points to Him. He is the central figure who brings its many themes together." },
  { ref: "Luke 24:44", q: "Which parts of Scripture did Christ recognise as authoritative?", verse: "All things must be fulfilled, which were written in the law of Moses, and in the prophets, and in the psalms, concerning me.", answer: "Jesus referred to all three traditional divisions of the Old Testament—the Law, the Prophets and the Psalms—and showed how they pointed forward to Him." },
  { ref: "John 17:17", q: "What did Jesus identify as the source of truth?", verse: "Sanctify them through thy truth: thy word is truth.", answer: "Jesus directly identifies God’s Word with truth and asks that its truth transform the lives of His followers." },
  { ref: "John 14:29", q: "How does fulfilled prophecy help confirm the Bible’s inspiration?", verse: "And now I have told you before it come to pass, that, when it is come to pass, ye might believe.", answer: "God reveals events before they happen so that their fulfilment can become evidence for faith. Biblical prophecy invites us to compare prediction with history." },
  { ref: "2 Peter 1:19", q: "How does the prophetic word help us on life’s journey?", verse: "We have also a more sure word of prophecy; whereunto ye do well that ye take heed, as unto a light that shineth in a dark place.", answer: "Peter compares prophecy to a lamp in darkness. It gives direction while we wait for the full light of God’s promised future." },
  { ref: "Isaiah 13:19", q: "While Babylon was still powerful, how did God foretell its end?", verse: "Babylon, the glory of kingdoms, the beauty of the Chaldees’ excellency, shall be as when God overthrew Sodom and Gomorrah.", answer: "At the height of Babylon’s splendour, Isaiah foretold a complete overthrow. The city that appeared secure would become a ruin." },
  { ref: "Isaiah 13:20", q: "What did prophecy say about Babylon’s future habitation?", verse: "It shall never be inhabited, neither shall it be dwelt in from generation to generation.", answer: "The prophecy went beyond military defeat: the site would not return to life as an inhabited city. Its ruins still bear witness to that long-range prediction." },
  { ref: "Ezekiel 26:3–5, 12–14", q: "What details did God give about the fall of the proud city of Tyre?", verse: "They shall destroy the walls of Tyrus... I will also scrape her dust from her, and make her like the top of a rock... a place for the spreading of nets... thou shalt be built no more.", answer: "Ezekiel’s prophecy described invading nations, demolished walls, stones and soil cast into the sea, a bare rock used for fishing nets, and the end of the ancient city’s former glory." },
  { ref: "Ezekiel 29:14–15", q: "When Egypt sought to recover its former glory, what future did God describe?", verse: "It shall be the basest of the kingdoms; neither shall it exalt itself any more above the nations.", answer: "Egypt would continue to exist, but it would not regain the dominant position it held in the ancient world." },
  { ref: "Isaiah 28:9–10", q: "What method does the Bible give for studying its teachings?", verse: "Precept must be upon precept... line upon line... here a little, and there a little.", answer: "A subject is understood by bringing related passages together. Scripture supplies context for Scripture, allowing the wider biblical picture to emerge." },
  { ref: "James 1:5", q: "Whom should we ask for wisdom to understand the Bible?", verse: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally... and it shall be given him.", answer: "Bible study begins with humility and prayer. God promises wisdom to those who sincerely ask Him for understanding." },
  { ref: "Romans 15:4", q: "What can the Scriptures create in us during troubled times?", verse: "Whatsoever things were written aforetime were written for our learning, that we through patience and comfort of the scriptures might have hope.", answer: "Scripture was preserved to teach us endurance, bring comfort and awaken hope—even when the world around us feels uncertain." },
];

export default function StudyOne() {
  const { open, complete, reflection, setComplete, setReflection, toggle } = useStudyProgress("gods-amazing-book");
  const progress = Math.round((open.length / questions.length) * 100);

  return <main className="lesson-page pt-[82px]">
    <div className="lesson-progress"><span style={{ width: `${complete ? 100 : progress}%` }} /></div>
    <section className="lesson-hero image-lesson-hero shell">
      <div className="lesson-title-row lesson-title-photo study-1-photo">
        <div><Link className="back-link" href="/bible-studies">← All studies</Link><p className="eyebrow">Study 01 · Foundations</p><h1>God’s<br /><em>Amazing Book</em></h1></div>
        <div className="lesson-seal"><span>01</span><small>of 09</small></div>
      </div>
      <div className="lesson-intro">
        <p className="lead">Can we really trust the Bible?</p>
        <p>Sixty-six books. Around thirty-five writers. More than fifteen centuries of history. Yet from beginning to end, Scripture tells one unfolding story of a God who creates, seeks, rescues and restores.</p>
        <p>This study invites you to test the Bible’s own claims—through the testimony of Jesus, the Bible’s explanation of inspiration, and prophecies whose fulfilment can be compared with history.</p>
      </div>
    </section>

    <section className="lesson-body shell">
      <aside className="lesson-aside">
        <div><p className="aside-label">Your progress</p><strong>{complete ? 100 : progress}%</strong><div className="aside-meter"><span style={{ width: `${complete ? 100 : progress}%` }} /></div><small>{complete ? "Study complete" : `${open.length} of ${questions.length} passages opened`}</small></div>
        <div><p className="aside-label">How it works</p><p>Read the question first. Find the passage in your Bible, or reveal it here. Take your time.</p></div>
      </aside>
      <div className="questions">
        <div className="questions-heading"><p className="eyebrow">Explore the evidence</p><h2>Let the Bible<br />speak for itself.</h2></div>
        {questions.map((item, index) => {
          const isOpen = open.includes(index);
          return <Fragment key={item.ref}>
            <article className={`question ${isOpen ? "open" : ""}`}>
              <button onClick={() => toggle(index)} aria-expanded={isOpen}>
                <span className="question-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="question-main"><small>{item.ref}</small><b>{item.q}</b></span>
                <span className="question-toggle">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <div className="answer"><blockquote>“{item.verse}”</blockquote><p>{item.answer}</p><Link className="answer-version" href="#why-kjv">King James Version · Why the KJV?</Link></div>}
            </article>
            {index === 5 && <section className="kjv-feature" id="why-kjv" aria-labelledby="kjv-heading">
              <div className="kjv-feature-copy">
                <p className="eyebrow">A translation of remarkable precision</p>
                <h2 id="kjv-heading">Why we use the<br /><em>King James Bible.</em></h2>
                <p>RevelationSigns uses the King James Version throughout these studies. For more than four centuries, its dignified language has carried Scripture into worship, preaching and memory. Its consistent phrasing also helps readers compare related passages and recognise the Bible’s recurring themes.</p>
                <p>We believe God has providentially preserved and greatly blessed this translation. Its lasting influence and remarkable verbal patterns invite careful investigation—while our confidence in Scripture rests first upon Christ’s testimony, the Bible’s own claims, its unified message and fulfilled prophecy.</p>
                <div className="kjv-note"><strong>Consider the evidence carefully</strong><span>The video examines the claim that God’s direct speech in Genesis 1 contains 343 words—7 × 7 × 7—in the KJV. Numerical observations are supporting evidence and should be tested using a clearly identified edition and transparent counting method.</span></div>
              </div>
              <div className="kjv-video-card">
                <div className="kjv-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/nLO6BQY_lj0?start=415&rel=0" title="Grok Learns KJV Patterns and Its Conclusion Will Bother Many" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
                <div className="kjv-video-caption"><span>Watch from 6:55</span><p>An investigation of numerical patterns claimed to be distinctive to the King James Bible.</p></div>
              </div>
            </section>}
          </Fragment>;
        })}

        <aside className="callout"><div className="callout-icon">✦</div><div><p className="eyebrow">The test of prophecy</p><h3>Foretold in advance.<br />Tested in history.</h3><p>Jesus explained that prophecy is given before an event so that its fulfilment can strengthen belief. Babylon, Tyre and Egypt provide three historical case studies in this lesson.</p></div></aside>

        <section className="summary">
          <p className="eyebrow">Study summary</p><h2>A trustworthy<br /><em>word of hope.</em></h2>
          <p>The Bible describes itself as inspired, truthful and centred on Jesus. Its prophecies invite investigation, its teachings are best understood by comparing passage with passage, and its message offers patience, comfort and hope.</p>
          <label className="reflection"><span>Your reflection</span><textarea value={reflection} onChange={(event) => setReflection(event.target.value)} placeholder="What stood out to you in this study?" /></label>
          <button className={`complete-button ${complete ? "completed" : ""}`} onClick={() => setComplete(!complete)}><span>{complete ? "✓" : "○"}</span>{complete ? "Study completed" : "Mark study as complete"}</button>
        </section>
      </div>
    </section>

    <nav className="lesson-nav shell" aria-label="Study navigation">
      <Link href="/bible-studies"><span>←</span><small>Previous</small><b>All Bible Studies</b></Link>
      <div className="lesson-nav-center"><span>Study 01</span><i></i><span>Study 02</span></div>
      <Link href="/bible-studies/origin-of-sin"><small>Next</small><b>The Origin of Sin</b><span>→</span></Link>
    </nav>
    <Footer />
  </main>;
}
