"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Footer } from "@/components/layout/Footer";
import { useStudyProgress } from "@/hooks/useStudyProgress";

const questions = [
  { ref: "Matthew 4:4", q: "What did Jesus have to say about the Bible?", verse: "Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.", answer: "" },
  { ref: "2 Peter 1:20–21", q: "How did God communicate the Scriptures to the prophets?", verse: "The prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.", answer: "" },
  { ref: "2 Timothy 3:16", q: "How much of the Bible is inspired?", verse: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.", answer: "" },
  { ref: "John 5:39", q: "Concerning whom did Christ say all the Scriptures testify?", verse: "Search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me.", answer: "" },
  { ref: "Luke 24:44", q: "What parts of the Scriptures did Christ consider inspired?", verse: "All things must be fulfilled, which were written in the law of Moses, and in the prophets, and in the psalms, concerning me.", answer: "In Christ’s day these were the three divisions into which the Old Testament was divided. Later the inspired New Testament was written." },
  { ref: "John 17:17", q: "What did Jesus say was the source of truth?", verse: "Sanctify them through thy truth: thy word is truth.", answer: "" },
  { ref: "John 14:29", q: "How does God prove He inspired the writing of the Bible?", verse: "And now I have told you before it come to pass, that, when it is come to pass, ye might believe.", answer: "" },
  { ref: "2 Peter 1:19", q: "In what way does Peter claim the prophetic word helps us along life’s journey?", verse: "We have also a more sure word of prophecy; whereunto ye do well that ye take heed, as unto a light that shineth in a dark place.", answer: "" },
  { ref: "Isaiah 13:19", q: "When Babylon was still a world-power, how did God foretell her end?", verse: "Babylon, the glory of kingdoms, the beauty of the Chaldees’ excellency, shall be as when God overthrew Sodom and Gomorrah.", answer: "When Isaiah wrote these words of doom about this city and nation, it seemed an impossible prediction. But now, people travel from all over the world to see the ruins of Babylon, which once was the terror of the earth." },
  { ref: "Isaiah 13:20", q: "To prove God’s foreknowledge, what prediction did God make about the future inhabitation of Babylon?", verse: "It shall never be inhabited, neither shall it be dwelt in from generation to generation.", answer: "Approximately 2,000 years have passed, and still no one lives in old Babylon. God’s word cannot be broken. John 10:35 (NT)." },
  { ref: "Ezekiel 26:3–5, 12–14", q: "What did God foretell would be the end of the proud city of Tyre?", verse: "They shall destroy the walls of Tyrus... I will also scrape her dust from her, and make her like the top of a rock... a place for the spreading of nets... thou shalt be built no more.", answer: "Alexander the Great demolished Tyre stone by stone, and threw these into the sea to build a causeway out to an island to which Tyre’s inhabitants had fled. Some remains of ancient buildings can still be seen in the water and there is still a fishing harbour on the north side of the island where the nets are spread." },
  { ref: "Ezekiel 29:14–15", q: "When Egypt was seeking to revive her former glory, how did God say that she would end?", verse: "It shall be the basest of the kingdoms; neither shall it exalt itself any more above the nations.", answer: "History has proved God’s Word true. Egypt still exists, but only as a minor power." },
  { ref: "Isaiah 28:9–10", q: "How are we to study the Bible?", verse: "Precept must be upon precept... line upon line... here a little, and there a little.", answer: "We must let the Bible interpret itself by comparing Scripture with Scripture. As we examine the Bible texts on a topic, it is like a jigsaw puzzle where the pieces come together to give us a clear picture. When the Apostle Paul came to a place called Berea and told them about Jesus Christ, it says in Acts 17:11 (NT) that ‘These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so.’" },
  { ref: "James 1:5", q: "For wisdom to understand the Bible whom do we ask?", verse: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally... and it shall be given him.", answer: "An important ingredient in studying the Bible is prayer. Before we open the Bible we are to pray for the Holy Spirit to give us spiritual understanding (John 14:26) (NT). Like an aeroplane flying in the clouds, we have our instrument panel to read and are helped by talking with the airport control tower, so we can receive instruction, be guided safely and have a safe landing. Prayer is talking to God from the heart as to a friend. We should kneel and pray to God in the mornings when we arise and before we retire for the night (Psalm 5:3; Psalm 55:17) (OT). Before meals we should also offer a prayer of thanks (Acts 27:35) (NT); when sitting we can simply bow our heads and pray a short prayer. When Jesus’ disciples asked to be taught to pray (Luke 11:1, 2) (NT) Jesus gave a model prayer (Matthew 6:9–13) (NT) known as the Lord’s Prayer. This included elements such as praise, thanks and forgiveness in it that we can include in our prayers as we pray to the Father in Jesus Christ’s name. Prayer can be private or with others in public (Matthew 18:19, 20) (NT) and always we are to start and end our prayers in the name of Jesus Christ, because He is our Saviour and mediator (representative) in heaven before the throne of God. We can pray to God at any time of the day or night, when at work or at home, and find help, forgiveness and strength from God (Philippians 4:6) (NT)." },
  { ref: "Romans 15:4", q: "In these troubled times what will be created in our hearts through a study of the Scriptures?", verse: "Whatsoever things were written aforetime were written for our learning, that we through patience and comfort of the scriptures might have hope.", answer: "" },
];

const fulfilledProphecies = [
  { foretold: "Micah 5:2", year: "710", prophecy: "Born in Bethlehem", fulfilled: "Matthew 2:1" },
  { foretold: "Isaiah 7:14", year: "742", prophecy: "Born of a virgin", fulfilled: "Matthew 1:18–23" },
  { foretold: "Isaiah 61:1, 2", year: "698", prophecy: "Public ministry", fulfilled: "Luke 4:16–21, 43" },
  { foretold: "Zechariah 9:9", year: "487", prophecy: "Public entry into Jerusalem", fulfilled: "Matthew 21:1–11" },
  { foretold: "Psalm 41:9", year: "1000", prophecy: "Betrayed by a friend", fulfilled: "John 13:18, 21, 26" },
  { foretold: "Zechariah 11:12", year: "487", prophecy: "Sold for 30 pieces of silver", fulfilled: "Matthew 26:15" },
  { foretold: "Isaiah 50:6", year: "712", prophecy: "Spat upon and scourged", fulfilled: "Mark 14:65; Matthew 27:26" },
  { foretold: "Isaiah 53:7", year: "712", prophecy: "Silent under abuse", fulfilled: "Matthew 27:12–14" },
  { foretold: "Psalm 22:16", year: "1000", prophecy: "Hands and feet nailed to the cross", fulfilled: "John 19:18; 20:25" },
  { foretold: "Psalm 22:18", year: "1000", prophecy: "Lots cast for His vesture", fulfilled: "Matthew 27:35" },
  { foretold: "Isaiah 53:9", year: "712", prophecy: "Buried with the rich", fulfilled: "Matthew 27:57–60" },
  { foretold: "Psalm 16:10", year: "1000", prophecy: "His resurrection", fulfilled: "Acts 2:31, 32" },
];

export default function StudyOne() {
  const { open, complete, setComplete, toggle } = useStudyProgress("gods-amazing-book");
  const progress = Math.round((open.length / questions.length) * 100);

  return <main className="lesson-page pt-[82px]">
    <div className="lesson-progress"><span style={{ width: `${complete ? 100 : progress}%` }} /></div>
    <section className="lesson-hero image-lesson-hero shell">
      <div className="lesson-title-row lesson-title-photo study-1-photo">
        <div><Link className="back-link" href="/bible-studies">← All studies</Link><p className="eyebrow">Study 01 · Foundations</p><h1>God’s<br /><em>Amazing Book</em></h1></div>
        <div className="lesson-seal"><span>01</span><small>of 10</small></div>
      </div>
      <div className="lesson-intro">
        <p>Did you know that the Book you hold in your hands, the “Bible,” is the most fascinating Book to be found on earth? Without mistake it has foretold the destiny of people, the future of cities, and of the world’s greatest nations. This Book has foreseen the future with such amazing accuracy that it astounds even the most sceptical reader.</p>
        <p>Few people realize that the Bible is really a library containing sixty-six books—thirty-nine in the Old Testament, written before Christ came to this earth. Some of these books are small, and some are large. Your Bible took sixteen hundred years to compile (from 1500 B.C. to A.D. 100) and was written by some thirty-five authors. How could these different men, living in different times of earth’s history, write in absolute harmony one with the other? Such harmony exists that their messages agree in the most minute detail. There can be but one logical explanation. Each man was guided in what he should write. This is exactly what your Bible says did happen, and you can prove this for yourself in just a moment.</p>
        <p>God who inspired the writing of the Bible puts Himself on trial when He throws out this challenge: “And now I have told you before it come to pass, that, when it is come to pass, ye might believe.” John 14:29 (NT). Could God be fairer than this? The word “Bible” means “the Book”, and what a wonderful Book it is.</p>
        <p>As you study this lesson, you will marvel at God’s foreknowledge, and you will understand why this amazing Book is still the world’s best-seller. You will gain a new confidence as you see for yourself that there is an Almighty God who is guiding this universe, this world, and you.</p>
        <p><em>The letters in parentheses following each text stand for Old Testament (OT) and New Testament (NT). The Old Testament comprises the first part of the Bible and the New Testament the latter part.</em></p>
      </div>
    </section>

    <section className="lesson-body shell">
      <aside className="lesson-aside">
        <div><p className="aside-label">Your progress</p><strong>{complete ? 100 : progress}%</strong><div className="aside-meter"><span style={{ width: `${complete ? 100 : progress}%` }} /></div><small>{complete ? "Study complete" : `${open.length} of ${questions.length} passages opened`}</small></div>
      </aside>
      <div className="questions">
        <div className="questions-heading"><h2>Read and study the following verses<br />and write down your answers.</h2></div>
        {questions.map((item, index) => {
          const isOpen = open.includes(index);
          return <Fragment key={item.ref}>
            <article className={`question ${isOpen ? "open" : ""}`}>
              <button onClick={() => toggle(index)} aria-expanded={isOpen}>
                <span className="question-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="question-main"><small>{item.ref}</small><b>{item.q}</b></span>
                <span className="question-toggle">{isOpen ? "−" : "+"}</span>
              </button>
              {item.answer && <p className="booklet-comment">{item.answer}</p>}
              {isOpen && <div className="answer"><blockquote>“{item.verse}”</blockquote><Link className="answer-version" href="/bible-studies#why-kjv">King James Version · Why the KJV?</Link></div>}
            </article>
          </Fragment>;
        })}

        <section className="summary">
          <p className="eyebrow">Summary</p>
          <p>God has foretold the future to give us hope and confidence. He wants you to trust Him and His wonderful Book. Time, and all man’s efforts have not been able to disprove the accuracy of God’s Word. It has stood against the mightiest of nations, and will continue to stand till the end.</p>
          <button className={`complete-button ${complete ? "completed" : ""}`} onClick={() => setComplete(!complete)}><span>{complete ? "✓" : "○"}</span>{complete ? "Study completed" : "Mark study as complete"}</button>
        </section>

        <section className="prophecy-evidence" aria-labelledby="prophecy-evidence-heading">
          <h3 id="prophecy-evidence-heading">Early prophecies of Jesus<br /><em>and their fulfilment.</em></h3>
          <div className="prophecy-table-wrap">
            <table>
              <thead><tr><th>Foretold</th><th>Year B.C.</th><th>Prophecy</th><th>Fulfilled</th></tr></thead>
              <tbody>{fulfilledProphecies.map((row) => <tr key={`${row.foretold}-${row.prophecy}`}><td>{row.foretold}</td><td>{row.year}</td><td>{row.prophecy}</td><td>{row.fulfilled}</td></tr>)}</tbody>
            </table>
          </div>
        </section>
      </div>
    </section>

    <nav className="lesson-nav shell" aria-label="Study navigation">
      <Link href="/bible-studies"><span>←</span><small>Previous</small><b>All Bible Studies</b></Link>
      <div className="lesson-nav-center"><span>Study 01</span><i></i><span>Study 02</span></div>
      <Link href="/bible-studies/prophecy/daniel-2"><small>Next</small><b>God Unfolds the Future</b><span>→</span></Link>
    </nav>
    <Footer />
  </main>;
}
