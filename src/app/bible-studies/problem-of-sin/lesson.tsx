"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { useStudyProgress } from "@/hooks/useStudyProgress";

const questions = [
  { ref: "1 John 3:4", q: "What does God say that sin is?", verse: "Sin is the transgression of the law.", answer: "" },
  { ref: "Romans 7:7", q: "What command convinced Paul that he was a sinner?", verse: "I had not known lust, except the law had said, Thou shalt not covet.", answer: "Paul here quotes the tenth of the Ten Commandments. He shows that he thought that he was without sin until the law showed him that he was a transgressor of the tenth commandment." },
  { ref: "James 2:10–12", q: "By what law will God judge us?", verse: "Whosoever shall keep the whole law, and yet offend in one point, he is guilty of all... So speak ye, and so do, as they that shall be judged by the law of liberty.", answer: "Here again James quotes from the Ten Commandments in showing what sin is. The law is like a length of chain holding a ship steady because it is connected to the anchor. If only one link is broken, its entire purpose is undone. The law is also like a mirror (James 1:25 (NT)), to point out sin in our lives which, when we see we are dirty leads us to seek cleansing by the blood of Jesus (1 John 1:7 (NT)). The law then, as a mirror, can show that we are clean. (Romans 3:21 (NT))." },
  { ref: "Exodus 20:3", q: "What does the first commandment prohibit?", verse: "Thou shalt have no other gods before me.", answer: "If we worship other gods, we are sinners." },
  { ref: "Exodus 20:4–6", q: "What objects did God forbid His people to worship?", verse: "Thou shalt not make unto thee any graven image... Thou shalt not bow down thyself to them, nor serve them.", answer: "This commandment forbids the worship of any thing." },
  { ref: "Exodus 20:7", q: "What command shows God’s disapproval of profanity?", verse: "Thou shalt not take the name of the Lord thy God in vain.", answer: "" },
  { ref: "Exodus 20:8–11", q: "What does God instruct us to remember?", verse: "Remember the sabbath day, to keep it holy... the seventh day is the sabbath of the Lord thy God.", answer: "" },
  { ref: "Exodus 20:12", q: "What does God indicate should be our relationship to our parents?", verse: "Honour thy father and thy mother: that thy days may be long upon the land.", answer: "" },
  { ref: "Exodus 20:13", q: "What commandment forbids murder?", verse: "Thou shalt not kill.", answer: "Christ pointed out that intense hatred within the heart is a violation of this commandment. Matthew 5:21, 22 (NT)." },
  { ref: "Exodus 20:14", q: "What does God command in respect to immorality?", verse: "Thou shalt not commit adultery.", answer: "Jesus spoke further about this commandment in Matthew 5:27, 28 (NT)." },
  { ref: "Exodus 20:15", q: "What did God say to show that taking the property of others is wrong?", verse: "Thou shalt not steal.", answer: "" },
  { ref: "Exodus 20:16", q: "How does God show the sinfulness of being untruthful?", verse: "Thou shalt not bear false witness against thy neighbour.", answer: "Liars will be outside the New Jerusalem (Revelation 21:27 (NT)); the city which Jesus is preparing for His people in heaven." },
  { ref: "Exodus 20:17", q: "What command forbids greed?", verse: "Thou shalt not covet... any thing that is thy neighbour’s.", answer: "This is the last of the Ten Commandments. In these ten simple rules, God gives us a measuring rod by which we can tell right from wrong in our relationship to both God and to each other. These commands of God cover every sin that mankind commits." },
  { ref: "1 John 5:17", q: "How inclusive does God make the definition of sin?", verse: "All unrighteousness is sin.", answer: "Every wrong act, every act of rebellion against God, is sin. Every unrighteous thought not rejected or wrong act is an evidence that we are sinners in need of God’s saving grace. In Psalm 119:172 (OT) it says that all God’s commandments are righteousness; so all unrighteousness is sin, or put simply—the breaking of God’s law is sin." },
  { ref: "Romans 3:23", q: "According to the Bible, how many of us have broken God’s commandments and sinned?", verse: "For all have sinned, and come short of the glory of God.", answer: "" },
  { ref: "1 Timothy 1:15", q: "What fact gives the sinner hope of salvation from sin?", verse: "Christ Jesus came into the world to save sinners; of whom I am chief.", answer: "" },
];

export default function StudyFive() {
  const { open, complete, setComplete, toggle } = useStudyProgress("problem-of-sin");
  const progress = Math.round((open.length / questions.length) * 100);

  return <main className="lesson-page pt-[82px]">
    <div className="lesson-progress"><span style={{ width: `${complete ? 100 : progress}%` }} /></div>
    <section className="lesson-hero image-lesson-hero shell">
      <div className="lesson-title-row lesson-title-photo study-5-photo">
        <div><Link className="back-link" href="/bible-studies">← All studies</Link><p className="eyebrow">Study 05 · Foundations</p><h1>The Problem<br /><em>of Sin</em></h1></div>
        <div className="lesson-seal"><span>05</span><small>16 questions</small></div>
      </div>
      <div className="lesson-intro">
        <p>Some time ago the newspapers carried a story of a little girl who had been playing in the garage of her home when she found a soft drink bottle full of what looked like soft drink that her mother at times gave her. She turned the bottle up and drank the fluid in it, even though it tasted strange. Soon she began to experience pains in her stomach. When she complained to her mother, she was rushed to the hospital for treatment. Sad to say, help came too late, and the little girl paid with her life for the experiment with the strange substance in the bottle. What she thought was soft drink was actually weed killer, deadly to human beings.</p>
        <p>Sin is as deadly to the soul as weed killer is to the body. Many people do not realize that they are poisoned with sin and will die from this killer. We have seen in the study of a previous lesson how Satan works to deceive and destroy all God’s children that he possibly can.</p>
        <p>We may have had friends who died from cancer who could have been cured if the cancer had been detected sooner to permit earlier treatment. They didn’t know what was wrong until it was too late. Just so, many who are diseased with sin do not recognize their plight. They congratulate themselves on their good works and may say, “Surely the Lord would not refuse to save a person as good as I am.” The Lord is anxious to save all that He can, but He cannot save any one of us unless we recognize our sinfulness and come to Him for forgiveness and salvation. Paul became a great Christian because he realized that he was a great sinner and went to God for cleansing. We need to know what sin is so that we will not be deceived by it. Then we need to acknowledge our true condition and receive help from God.</p>
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
          <p>The Bible tells us that God is not willing that any should perish. 2 Peter 3:9 (NT). The loving Father longs to see each sinner saved from sin and death. To prove this beyond doubt He gave His only begotten Son, Jesus, to die for our salvation on the cross of Calvary. However, God will not force the sinner to accept cleansing and salvation. It is only when we as sinners recognize our true condition and come to God with a deep feeling of our need that He is able to forgive and save us. Christ illustrated this truth beautifully in the story of the Pharisee (a religious official), and the publican (a tax collector). He said, “Two men went up into the temple to pray; the one a Pharisee, and the other a publican. The pharisee stood and prayed thus with himself, God, I thank thee, that I am not as other men are, extortioners, unjust, adulterers, or even as this publican. I fast twice in the week, I give tithes of all that I possess. And the publican, standing afar off, would not lift up so much as his eyes unto heaven, but smote upon his breast, saying, God be merciful to me a sinner. I tell you, this man went down to his house justified rather than the other.” Luke 18:10–14 (NT).</p>
          <p>As far as society is concerned, the Pharisee was an ideal citizen and the publican was far from what he should have been. The publican, however, recognized his need of a change and forgiveness. The Pharisee felt no need of God’s help and therefore he received no forgiveness. He went down to his house unjustified, unforgiven. The publican, on the other hand, felt his great need and prayed to the loving heavenly Father, who readily forgave him for his past sins.</p>
          <button className={`complete-button ${complete ? "completed" : ""}`} onClick={() => setComplete(!complete)}><span>{complete ? "✓" : "○"}</span>{complete ? "Study completed" : "Mark study as complete"}</button>
        </section>
      </div>
    </section>

    <nav className="lesson-nav shell" aria-label="Study navigation">
      <Link href="/bible-studies/who-is-christ"><span>←</span><small>Previous</small><b>Who Is Christ?</b></Link>
      <div className="lesson-nav-center"><span>Study 04</span><i></i><span>Study 05</span></div>
      <Link href="/bible-studies/sin-and-its-cure"><small>Next</small><b>Sin and Its Cure</b><span>→</span></Link>
    </nav>
    <Footer />
  </main>;
}
