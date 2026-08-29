"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { useStudyProgress } from "@/hooks/useStudyProgress";

const questions = [
  { ref: "Psalm 19:7; Romans 7:12", q: "How does the Bible describe the law?", verse: "The law of the Lord is perfect... the law is holy, and the commandment holy, and just, and good.", answer: "" },
  { ref: "Romans 3:20", q: "What is one of the main purposes of the law?", verse: "By the law is the knowledge of sin.", answer: "" },
  { ref: "Romans 7:7", q: "What helped Paul to recognize sin in his own life?", verse: "I had not known sin, but by the law.", answer: "" },
  { ref: "Exodus 20:17", q: "To what law in the Old Testament was Paul referring?", verse: "Thou shalt not covet.", answer: "" },
  { ref: "1 John 3:4", q: "What does the Bible say sin is?", verse: "Sin is the transgression of the law.", answer: "" },
  { ref: "Romans 4:15", q: "Can sin exist where there is no law?", verse: "Where no law is, there is no transgression.", answer: "God gave His perfect law to point out sin. In the Ten Commandments we have the perfect rule for right living. To the sinner it brings a conviction of sin. To the Christian it serves as a standard of right living. It does not save us from sin—it can only bring a conviction of sin so that the sinner might feel his need of Christ and come to Him for salvation." },
  { ref: "Romans 5:8", q: "Because the transgression of God’s law has made us sinners, what was it necessary for Christ to do?", verse: "While we were yet sinners, Christ died for us.", answer: "" },
  { ref: "Ephesians 2:8, 9", q: "By what then are we saved from our sins?", verse: "By grace are ye saved through faith... it is the gift of God: not of works.", answer: "Grace is defined as ‘unmerited favour’. It is something that we cannot earn, nor do we deserve it. It is the free gift of God. Grace is God reaching down into the pit of sin, calling us to take hold of his hand by faith that we may be pulled out and freed from the pit of sin in which we are sunken. If then we continue to hold on to Jesus, we will not fall back in. But, even if we do, He calls to us again to regain our hold on Him. It is our choice whether we respond to the call." },
  { ref: "Romans 6:23", q: "How do we receive this gift of grace?", verse: "The gift of God is eternal life through Jesus Christ our Lord.", answer: "Jesus exchanges places with us. On the cross He received the punishment that we deserve. Thus the debt of our sins was paid. We receive the reward His perfect life of obedience deserves." },
  { ref: "Romans 6:1, 2, 14, 15", q: "How does Paul indicate that one saved by grace will not continue to live in sin?", verse: "Shall we continue in sin, that grace may abound? God forbid... sin shall not have dominion over you.", answer: "" },
  { ref: "Romans 3:31", q: "Does our acceptance of Christ through faith abolish the law?", verse: "Do we then make void the law through faith? God forbid: yea, we establish the law.", answer: "The New Covenant promise (Jeremiah 31:33, 34 (OT) and Hebrews 8:10–12 (NT)) is to write the law in our minds and in our hearts so that our thoughts and feelings will be of the right character." },
  { ref: "Romans 8:6, 7", q: "What mind do we still have if we are opposed to God’s law?", verse: "The carnal mind is enmity against God: for it is not subject to the law of God.", answer: "" },
  { ref: "1 John 5:1–3", q: "How will the born-again Christian show his love for God?", verse: "This is the love of God, that we keep his commandments.", answer: "" },
  { ref: "1 John 2:1–4", q: "What does the Bible say about the person who professes to know Christ and yet refuses to obey Him?", verse: "He that saith, I know him, and keepeth not his commandments, is a liar.", answer: "" },
  { ref: "Psalm 40:8", q: "What will be the attitude of the person who has been saved by God’s matchless grace?", verse: "I delight to do thy will, O my God: yea, thy law is within my heart.", answer: "" },
];

export default function StudyEight() {
  const { open, complete, setComplete, toggle } = useStudyProgress("law-and-gospel");
  const progress = Math.round((open.length / questions.length) * 100);

  return <main className="lesson-page pt-[82px]">
    <div className="lesson-progress"><span style={{ width: `${complete ? 100 : progress}%` }} /></div>
    <section className="lesson-hero image-lesson-hero shell">
      <div className="lesson-title-row lesson-title-photo study-8-photo">
        <div><Link className="back-link" href="/bible-studies">← All studies</Link><p className="eyebrow">Study 08 · Foundations</p><h1>The Law and<br /><em>the Gospel</em></h1></div>
        <div className="lesson-seal"><span>08</span><small>15 questions</small></div>
      </div>
      <div className="lesson-intro">
        <p>Leading criminologists declare that we are losing the battle against crime. Juvenile crime is skyrocketing. Law-enforcement officers are gravely concerned with the disregard shown by people for the laws of the land.</p>
        <p>What is causing the people of this time to be so lawless? One magazine, in an article that surveyed the moral depravity of society today, analysed the situation correctly when it stated that there is no longer a moral standard to guide the modern generation.</p>
        <p>Even some religious leaders advocate a very different way of life from that which is taught in the Word of God. From many pulpits the people have been told, “The law of God has been abolished, so why worry about that yoke of bondage?” Others state that it is impossible to keep God’s law, so why try? Persons who advocate the nullification of the law of God may be sincere, but they are mistaken. When we remove the standard of right and wrong, it is not long until society will abandon all moral principles. We are reaping the fruitage today of the teaching and preaching that some churches gave society yesterday. The Psalmist said, “It is time for thee, LORD, to work: for they have made void thy law.” Psalm 119:126 (OT).</p>
        <p>Let us take a clear look at the Bible teaching concerning law and grace.</p>
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
          <p>The Ceremonial Law, added after sin, was nailed to the cross of Christ. These ordinances, given to Moses, involved animal sacrifices and offerings. People were to do them in the faith of a coming Deliverer, who would shed His blood for them. These rituals foreshadowed the cross, and ended at Christ’s death, when the veil of the Temple ripped in half, showing that the sacrifices, ceremonial feasts and ‘once a year’ sabbaths were finished. Jesus is called the “Lamb slain from the foundation of the world” (Revelation 13:8 (NT)), and only His blood can cleanse from sin, for any generation.</p>
          <p>The Old Covenant (agreement) with its basis at Mt Sinai, is a picture of the New Covenant. It is the plan of salvation illustrated. In some respects it is like a picture of a man’s wife. The man may show it to you and say, “This is my wife”, but is it really? No; it is only a picture. He may treasure the picture, but it cannot replace his wife. The Jewish nation hung on the Old Covenant “picture” but rejected the One to whom it pointed forward—Jesus, and His ministry. We could illustrate it with a blueprint of a house, which is drawn before the house is built. The Ten Commandments on stone, illustrated how God wants the Ten Commandments to be spiritually written on the tables of our heart. (2 Corinthians 3:2, 3 (NT)) Through His power, obedience will be the fruit of faith.</p>
          <p>When God gave the Old Covenant at Mt Sinai, the people promised to keep it, and they intended to, but they could not do so in their own strength. (Romans 8:3 (NT)). This is where God found fault with them because they should have asked God for help, then the Saviour, to whom the Old Covenant pointed forward, would have come into their hearts and delivered them from the power of sin.</p>
          <p>In Matthew 22:35–40 (NT), Jesus was asked what was the greatest commandment in the law. He quoted Deuteronomy 6:5 (OT), which summarises the first four commandments concerning our love to God. Then Jesus quoted Leviticus 19:18 (OT), summarizing the last six Commandments which relate to how we should love our neighbour. In fact, the Bible summarises the whole Ten Commandments in Romans 13:10 (NT) where it says that “love is the fulfilling of the law”. None of the texts say anything about the Ten Commandments being done away. In fact all through the New Testament the Ten Commandments appear, eg. James 2:10–12 (NT) and Romans 13:9 (NT). Why would He do away with “Thou shalt not kill” or “Thou shalt not steal”? The universe would be out of control. God cannot change His law, otherwise Jesus would not have had to die. Therefore, He died to pay the penalty for the breaking of that unchangeable holy law.</p>
          <button className={`complete-button ${complete ? "completed" : ""}`} onClick={() => setComplete(!complete)}><span>{complete ? "✓" : "○"}</span>{complete ? "Study completed" : "Mark study as complete"}</button>
        </section>
      </div>
    </section>

    <nav className="lesson-nav shell" aria-label="Study navigation">
      <Link href="/bible-studies/a-new-person"><span>←</span><small>Previous</small><b>A New Person</b></Link>
      <div className="lesson-nav-center"><span>Study 07</span><i></i><span>Study 08</span></div>
      <Link href="/bible-studies/worlds-only-hope"><small>Next</small><b>The World’s Only Hope</b><span>→</span></Link>
    </nav>
    <Footer />
  </main>;
}
