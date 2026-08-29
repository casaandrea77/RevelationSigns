"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { useStudyProgress } from "@/hooks/useStudyProgress";

const questions = [
  { ref: "1 John 3:4", q: "What is sin?", verse: "Sin is the transgression of the law.", answer: "" },
  { ref: "Romans 3:23", q: "How many of the human race have sinned?", verse: "For all have sinned, and come short of the glory of God.", answer: "Romans 3:10 (NT) also says, ‘As it is written, There is none righteous, no, not one.’" },
  { ref: "Romans 6:23 & 5:12", q: "What are the wages of sin and how many deserve it?", verse: "The wages of sin is death... death passed upon all men, for that all have sinned.", answer: "" },
  { ref: "Romans 6:23", q: "What does God promise to give us through Jesus Christ?", verse: "The gift of God is eternal life through Jesus Christ our Lord.", answer: "" },
  { ref: "John 1:29", q: "Through whom does God intend to take away our sins?", verse: "Behold the Lamb of God, which taketh away the sin of the world.", answer: "" },
  { ref: "Romans 5:6–9", q: "How does the Lamb of God remove our sins?", verse: "Christ died for us... being now justified by his blood, we shall be saved from wrath through him.", answer: "Salvation is the free gift of God to be accepted by faith. To accept this free gift is our choice." },
  { ref: "1 John 1:7", q: "What does God use to make us clean?", verse: "The blood of Jesus Christ his Son cleanseth us from all sin.", answer: "" },
  { ref: "Acts 2:36, 37", q: "When we fully realize that it was for our sins that Christ died, what will we want to know?", verse: "They were pricked in their heart, and said... Men and brethren, what shall we do?", answer: "" },
  { ref: "Acts 3:19 and 2:38", q: "What must we do before God can cleanse us from our sin?", verse: "Repent ye therefore, and be converted, that your sins may be blotted out.", answer: "Repentance includes sorrow for sin and a turning away from it. It is a gift that God gives us (Romans 2:4 (NT)) as we are led to the foot of the cross of Christ and conviction takes hold upon the mind and heart." },
  { ref: "Proverbs 28:13", q: "What two things will true repentance lead us to do?", verse: "He that covereth his sins shall not prosper: but whoso confesseth and forsaketh them shall have mercy.", answer: "" },
  { ref: "1 John 1:9", q: "If we confess our sins and ask for forgiveness, what does God promise to do?", verse: "He is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.", answer: "" },
  { ref: "Hebrews 8:12", q: "How complete will be God’s forgiveness?", verse: "Their sins and their iniquities will I remember no more.", answer: "" },
  { ref: "1 Timothy 1:15", q: "Although converted, how did Paul feel?", verse: "Christ Jesus came into the world to save sinners; of whom I am chief.", answer: "The Bible says in John 3:16 (NT) ‘For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.’" },
  { ref: "2 Timothy 4:7, 8", q: "What assurance filled Paul’s heart as he neared the end of his life?", verse: "I have fought a good fight, I have finished my course, I have kept the faith: henceforth there is laid up for me a crown of righteousness.", answer: "We can have the assurance of eternal life as it says in 1 John 5:13 (NT) ‘These things have I written unto you that believe on the name of the Son of God; that ye may know that ye have eternal life, and that ye may believe on the name of the Son of God.’" },
  { ref: "Acts 16:22–31", q: "What was Paul’s prescription for salvation?", verse: "Believe on the Lord Jesus Christ, and thou shalt be saved.", answer: "The question asked by so many who are seeking life everlasting is, ‘What must I do to be saved?’ The answer is clear—‘Believe in Jesus’. This does not mean just to believe He existed, but to believe Him to the point of doing what He says. Even the devils believe and tremble, but the Christian’s belief will be more than this. The born again Christian will have faith in Jesus and live a life of obedience to Him." },
];

export default function StudySix() {
  const { open, complete, setComplete, toggle } = useStudyProgress("sin-and-its-cure");
  const progress = Math.round((open.length / questions.length) * 100);

  return <main className="lesson-page pt-[82px]">
    <div className="lesson-progress"><span style={{ width: `${complete ? 100 : progress}%` }} /></div>
    <section className="lesson-hero image-lesson-hero shell">
      <div className="lesson-title-row lesson-title-photo study-6-photo">
        <div><Link className="back-link" href="/bible-studies">← All studies</Link><p className="eyebrow">Study 06 · Foundations</p><h1>Sin and<br /><em>Its Cure</em></h1></div>
        <div className="lesson-seal"><span>06</span><small>15 questions</small></div>
      </div>
      <div className="lesson-intro">
        <p>Caryl Chessman gained nationwide recognition when, as a convicted kidnapper on death row, he waged a stubborn legal fight for his life.</p>
        <p>By one legal manoeuvre after another, Chessman succeeded in postponing the fearful day when he would lose his life. For months and years he was able to stall for time. During this period of waiting he even had time to write a book telling his story and the reason why he thought he should be released. At last the final appeal was made and turned down. His last chance of pardon had been exhausted. There was no more hope! Down to the last minute he held onto the thread of hope that he would be saved. But that failed, and he was executed. The courts had found him guilty, and the State had carried out the sentence.</p>
        <p>This man desperately fighting for every hour of life reminds us of the plight of the sinner without Christ. When we committed the first wrong act, we passed under the sentence of death. If we do not receive mercy, and if we are not pardoned, we will not only die the first death, but we will be consumed in the lake of fire at the end of this world’s history. In the Bible this is called the “second death”. Revelation 20:14 (NT).</p>
        <p>Life is very precious, and most men will do anything to try to prolong the few short years they are granted. When we think of eternity, without pain, sorrow, sickness or death, how much more anxious should we be to make certain we do not lose eternal life. If every person were as earnest in seeking eternal life as Mr Chessman was in prolonging his life on earth, there would be many more people saved when Christ returns.</p>
      </div>
    </section>

    <section className="lesson-body shell">
      <aside className="lesson-aside"><div><p className="aside-label">Your progress</p><strong>{complete ? 100 : progress}%</strong><div className="aside-meter"><span style={{ width: `${complete ? 100 : progress}%` }} /></div><small>{complete ? "Study complete" : `${open.length} of ${questions.length} passages opened`}</small></div></aside>
      <div className="questions">
        <div className="questions-heading"><h2>Read and study the following verses<br />and write down your answers.</h2></div>
        {questions.map((item, index) => {
          const isOpen = open.includes(index);
          return <article className={`question ${isOpen ? "open" : ""}`} key={`${item.ref}-${index}`}>
            <button onClick={() => toggle(index)} aria-expanded={isOpen}>
              <span className="question-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="question-main"><small>{item.ref}</small><b>{item.q}</b></span>
              <span className="question-toggle">{isOpen ? "−" : "+"}</span>
            </button>
            {item.answer && <p className="booklet-comment">{item.answer}</p>}
            {isOpen && <div className="answer"><blockquote>“{item.verse}”</blockquote><Link className="answer-version" href="/bible-studies#why-kjv">King James Version · Why the KJV?</Link></div>}
          </article>;
        })}

        <section className="summary">
          <p className="eyebrow">Summary</p>
          <p>Paul became a great saint only after he recognized that he was a great sinner. Paul gave his life to the only One who could change him. At the time of his conversion he was on the way to Damascus to persecute the Christians there. He thought he had been doing the will of God, but soon realized that he had been doing the work of the enemy. When he was shown his error, he was willing to let God change him. He made a complete surrender of self, which meant he made a choice to follow Jesus. He was willing to let God show him the way which he should go. Like Paul, we must recognize our sinfulness and repent of our sins. When we realize that our sins broke the heart of our Saviour and caused His death upon the cross of Calvary, we will come to Him for cleansing and His blood will make us white as snow.</p>
          <p>If you feel your need of forgiveness, why not come to Christ this very day? Confess your sins and let God lift the load of guilt and shame. He will freely forgive and forget your sins. His invitation is: “Come now, and let us reason together, saith the LORD: though your sins be as scarlet, they shall be as white as snow; though they be red like crimson, they shall be as wool.” Isaiah 1:18 (OT).</p>
          <p>One of the most eloquent prayers ever offered was that of a seventy-eight year old man. He simply prayed, “Dear Lord, be merciful and forgive all my sins, and I will be much obliged to you, Amen.” In this way he found forgiveness through Christ. We can be certain that God heard and answered that prayer, for it came from the depths of the man’s heart. You may receive Christ as your Saviour today and make certain of complete forgiveness. Will you join the penitent publican in his petition, “God be merciful to me a sinner”?</p>
          <button className={`complete-button ${complete ? "completed" : ""}`} onClick={() => setComplete(!complete)}><span>{complete ? "✓" : "○"}</span>{complete ? "Study completed" : "Mark study as complete"}</button>
        </section>
      </div>
    </section>

    <nav className="lesson-nav shell" aria-label="Study navigation">
      <Link href="/bible-studies/problem-of-sin"><span>←</span><small>Previous</small><b>The Problem of Sin</b></Link>
      <div className="lesson-nav-center"><span>Study 05</span><i></i><span>Study 06</span></div>
      <Link href="/bible-studies/a-new-person"><small>Next</small><b>A New Person</b><span>→</span></Link>
    </nav>
    <Footer />
  </main>;
}
