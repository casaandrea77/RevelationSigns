"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { useStudyProgress } from "@/hooks/useStudyProgress";

const questions = [
  { ref: "1 John 3:8", q: "With whom did sin originate?", verse: "He that committeth sin is of the devil; for the devil sinneth from the beginning.", answer: "" },
  { ref: "Ezekiel 28:12, 15", q: "What kind of angel was Satan before his rebellion?", verse: "Thou sealest up the sum, full of wisdom, and perfect in beauty... Thou wast perfect in thy ways from the day that thou wast created, till iniquity was found in thee.", answer: "Under the figure of the king of Tyre, Ezekiel describes the activities of Lucifer. He was created ‘perfect’, but he abused his power of choice. From an angel of light he turned himself into the Devil by an act of his own will (choice)." },
  { ref: "Ezekiel 28:17", q: "Where did Satan’s problem start?", verse: "Thine heart was lifted up because of thy beauty, thou hast corrupted thy wisdom by reason of thy brightness.", answer: "Pride was his problem in the beginning." },
  { ref: "Ezekiel 28:14", q: "What exalted position did Satan once occupy in the courts of heaven?", verse: "Thou art the anointed cherub that covereth; and I have set thee so.", answer: "As a covering cherub he stood next to God. Psalm 80:1 (OT)." },
  { ref: "Isaiah 14:12–14", q: "What higher position did this exalted being covet?", verse: "I will exalt my throne above the stars of God... I will be like the most High.", answer: "" },
  { ref: "Revelation 12:7–9", q: "What did God do when Satan’s rebellion led to war in heaven?", verse: "The great dragon was cast out, that old serpent, called the Devil, and Satan... he was cast out into the earth, and his angels were cast out with him.", answer: "Michael is a name that Jesus had in heaven. In the Bible Jesus has many titles or names that have various meanings." },
  { ref: "Genesis 3:1–6", q: "When he was cast out of heaven, whom did Satan then seek to deceive?", verse: "The serpent beguiled Eve through his subtilty... she took of the fruit thereof, and did eat, and gave also unto her husband.", answer: "Satan used the serpent as a medium to attract the attention of the woman. He said if she ate of the fruit of the tree of the knowledge of good and evil she would not die, but become like God." },
  { ref: "Luke 4:5, 6", q: "What does Satan now claim as his?", verse: "The devil... shewed unto him all the kingdoms of the world... All this power will I give thee... for that is delivered unto me.", answer: "See also Job 1:6–8 (OT). Satan appeared at the gates of heaven claiming to be the representative of this world. The ‘sons of God’ mentioned in these verses were the unfallen representatives of the other worlds, Hebrews 1:2, and the holy angels." },
  { ref: "Job 2:7", q: "Who brings sickness and trouble upon mankind?", verse: "Satan... smote Job with sore boils from the sole of his foot unto his crown.", answer: "" },
  { ref: "Ezekiel 28:16–19", q: "How will this evil one be destroyed by God?", verse: "I will bring forth a fire from the midst of thee... and never shalt thou be any more.", answer: "" },
  { ref: "Revelation 12:10, 12", q: "Why does the Devil work so viciously now?", verse: "The accuser of our brethren is cast down... the devil is come down unto you, having great wrath, because he knoweth that he hath but a short time.", answer: "" },
  { ref: "2 Corinthians 11:13–15", q: "How does Satan work to disguise himself and his activities?", verse: "Satan himself is transformed into an angel of light. Therefore it is no great thing if his ministers also be transformed as the ministers of righteousness.", answer: "" },
  { ref: "Ephesians 6:11, 12", q: "What is man’s only defence against the Devil’s deceptions?", verse: "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.", answer: "" },
  { ref: "Revelation 12:11", q: "How can we gain the victory over this arch-enemy?", verse: "They overcame him by the blood of the Lamb, and by the word of their testimony; and they loved not their lives unto the death.", answer: "" },
];

export default function StudyThree() {
  const { open, complete, setComplete, toggle } = useStudyProgress("origin-of-sin");
  const progress = Math.round((open.length / questions.length) * 100);

  return <main className="lesson-page pt-[82px]">
    <div className="lesson-progress"><span style={{ width: `${complete ? 100 : progress}%` }} /></div>
    <section className="lesson-hero image-lesson-hero shell">
      <div className="lesson-title-row lesson-title-photo study-3-photo">
        <div><Link className="back-link" href="/bible-studies">← All studies</Link><p className="eyebrow">Study 03 · Foundations</p><h1>The Origin<br /><em>of Sin</em></h1></div>
        <div className="lesson-seal"><span>03</span><small>14 questions</small></div>
      </div>
      <div className="lesson-intro">
        <p>In a demonstration of remote control by the United States Air Force, a pilot-less jet aircraft wheeled on to the runway of an airport, taxied to a predetermined spot, turned into the wind, and took off. The plane went through a number of manoeuvres, circled the field several times, and made an almost perfect landing. Those invited to view this demonstration looked on with admiration. Not one spectator thought that the plane was flying by itself. They knew that there was a master intelligence behind the manoeuvres of that craft. As one views the daily sinister events of death, terror, and violence reported by television, radio and newspaper, it is evident that a master intelligence is operating in this world. He is at war, not only with God, but with all that is just and good. Whilst nations talk about peace, they prepare for war! While man plans for a world without crime, lawlessness skyrockets! While he searches for the means of stamping out death, new diseases and problems arise. More than one statesman has remarked, “There is something devilish at work in this world today.” In many circles today the Devil has been voted out of existence. Many equate Satan with the evil thoughts or of a superstitious carry-over from a medieval fable. Christ and the prophets believed in the existence of an evil being. In the Bible he bears such names as the Devil, Satan, the prince of this world, the deceiver, the serpent, and the dragon. Where did the Devil originate? Why hasn’t God destroyed him? These and many other questions arise when he is mentioned. Let us turn to the Bible to learn the truth about Satan.</p>
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
          <p>The question is often asked, “Why didn’t God destroy the Devil when he first sinned, and thus put a quick stop to the sin problem?”</p>
          <p>Answer: Because sin was something completely new in God’s universe and its inhabitants did not understand it. Probably even Lucifer himself did not fully comprehend it at first. Everyone must see the true end-results of sin to ensure its total eradication when God does finally destroy the Devil.</p>
          <p>Lucifer’s arguments convinced many angels, and one-third joined him. If God had destroyed Lucifer immediately, some angelic beings who did not fully understand God’s character may have begun to worship God through fear, saying, “Lucifer may have been correct. Be careful. If you differ with God, He may kill you.” So nothing would have been settled. Instead, the problem would have been heightened. The only service acceptable to God is cheerful, voluntary service prompted by love. Obedience for any other reason is unacceptable.</p>
          <p>Satan claimed that he had a better plan for the government of the universe. God is giving him time to demonstrate its principles. The Lord will abolish sin only after every soul in the universe is convinced that Satan’s government is unfair, hateful, ruthless, lying and destructive. God wants the universe to be on a safe footing for eternity and so the controversy must run its course.</p>
          <p>All are being given the free choice as to who they will worship and serve. Peter warns us, “your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour”. 1 Peter 5:8 (NT). Never have his deceptions been so effective in misleading and destroying men as they are today. He especially directs his anger against those who are loyal to God.</p>
          <p>The Devil sought to overcome the Saviour before He could accomplish His mission of redemption. Christ was victorious in every battle fought with the deceiver. The Bible tells us that Christ did not sin. By His death on the cross of Calvary He earned the right to deliver those held in bondage by Satan if they will accept His death in their stead. By instigating Christ’s death, the Devil signed his own death decree.</p>
          <p>Satan will soon be destroyed with all those who have yielded to his temptations to sin. The Bible assures us that this end will be complete. (Nahum 1:9 (OT)). But now he seeks to deceive even the children of God. The same Redeemer who gained the complete victory in His battle with Satan is able to give you the victory too if you will place your life in His hands—hands that were pierced for your sins. Trust Him this day, and He will give you forgiveness for past sins and victory over future temptations.</p>
          <button className={`complete-button ${complete ? "completed" : ""}`} onClick={() => setComplete(!complete)}><span>{complete ? "✓" : "○"}</span>{complete ? "Study completed" : "Mark study as complete"}</button>
        </section>
      </div>
    </section>

    <nav className="lesson-nav shell" aria-label="Study navigation">
      <Link href="/bible-studies/prophecy/daniel-2"><span>←</span><small>Previous</small><b>God Unfolds the Future</b></Link>
      <div className="lesson-nav-center"><span>Study 02</span><i></i><span>Study 03</span></div>
      <Link href="/bible-studies/who-is-christ"><small>Next</small><b>Who Is Christ?</b><span>→</span></Link>
    </nav>
    <Footer />
  </main>;
}
