"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { useStudyProgress } from "@/hooks/useStudyProgress";

const questions = [
  { ref: "Micah 5:2", q: "In a prophecy connected with the birth of Christ, how long does it say that He existed?", verse: "Out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.", answer: "" },
  { ref: "John 17:5", q: "How long did Jesus say He had been with God the Father?", verse: "Glorify thou me with thine own self with the glory which I had with thee before the world was.", answer: "" },
  { ref: "Hebrews 1:8", q: "What does God the Father call the Son?", verse: "But unto the Son he saith, Thy throne, O God, is for ever and ever.", answer: "" },
  { ref: "Colossians 2:9", q: "What fullness dwells in Christ?", verse: "For in him dwelleth all the fulness of the Godhead bodily.", answer: "The word ‘Godhead’ means Divinity." },
  { ref: "John 20:28", q: "In accepting Christ as his Saviour, how did Thomas address Him?", verse: "And Thomas answered and said unto him, My Lord and my God.", answer: "" },
  { ref: "John 1:1, 14", q: "Using the term ‘the Word’, what does John state that Christ was?", verse: "The Word was with God, and the Word was God... And the Word was made flesh, and dwelt among us.", answer: "The Greek word translated ‘the Word’, means the thought of God expressed. That is, Jesus was the revelation of God’s character, mind, and will. Some teach that Jesus was ‘a god’. But that is definitely not what John said. He said that ‘from the beginning the Word, or Jesus, was God, not one among many, but God essentially.’" },
  { ref: "John 1:1–3, 14", q: "Who created the world?", verse: "All things were made by him; and without him was not any thing made that was made.", answer: "" },
  { ref: "Colossians 1:15–17", q: "How many things were created by Jesus Christ?", verse: "By him were all things created, that are in heaven, and that are in earth... all things were created by him, and for him.", answer: "" },
  { ref: "John 10:30", q: "How does Christ describe the unity that exists between Him and the Father?", verse: "I and my Father are one.", answer: "" },
  { ref: "Matthew 3:16, 17", q: "At the baptism of Christ, what did the Father call Jesus?", verse: "A voice from heaven, saying, This is my beloved Son, in whom I am well pleased.", answer: "Three persons comprise the Godhead—the Father, the Son, and the Holy Spirit.\n\nSee Matthew 28:19. Three persons, but one God. (Three cords make up one rope or three persons make up one family)." },
  { ref: "Matthew 1:18, 20; Luke 1:35", q: "By what miracle was Christ born into the world?", verse: "That which is conceived in her is of the Holy Ghost... therefore also that holy thing which shall be born of thee shall be called the Son of God.", answer: "" },
  { ref: "Matthew 1:21", q: "For what purpose did Christ come into the world?", verse: "Thou shalt call his name JESUS: for he shall save his people from their sins.", answer: "" },
  { ref: "1 Peter 2:21, 22", q: "What type of life did Christ live?", verse: "Christ also suffered for us, leaving us an example... Who did no sin, neither was guile found in his mouth.", answer: "" },
  { ref: "1 Peter 2:23, 24", q: "How did Christ pay the penalty for our sins that we might be forgiven?", verse: "Who his own self bare our sins in his own body on the tree... by whose stripes ye were healed.", answer: "" },
  { ref: "2 Corinthians 5:19–21", q: "What wonderful transaction takes place when we accept Christ as our Saviour from sin?", verse: "He hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.", answer: "" },
  { ref: "John 3:16", q: "How only may we receive eternal life?", verse: "God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", answer: "" },
  { ref: "1 John 5:11, 12", q: "By accepting Christ and His sacrifice, what will we receive?", verse: "God hath given to us eternal life, and this life is in his Son. He that hath the Son hath life.", answer: "" },
];

export default function StudyFour() {
  const { open, complete, setComplete, toggle } = useStudyProgress("who-is-christ");
  const progress = Math.round((open.length / questions.length) * 100);

  return <main className="lesson-page pt-[82px]">
    <div className="lesson-progress"><span style={{ width: `${complete ? 100 : progress}%` }} /></div>
    <section className="lesson-hero image-lesson-hero shell">
      <div className="lesson-title-row lesson-title-photo study-4-photo">
        <div><Link className="back-link" href="/bible-studies">← All studies</Link><p className="eyebrow">Study 04 · Foundations</p><h1>What Think Ye<br /><em>of Christ?</em></h1></div>
        <div className="lesson-seal"><span>04</span><small>17 questions</small></div>
      </div>
      <div className="lesson-intro">
        <p>Following World War II a Christian worker was making his way through the debris-choked streets of Berlin. Seeing a young man, he asked, “Young man, do you know Jesus Christ?” The young man looked perplexed and answered, “No Sir. I’m not acquainted with Him. You might ask at the local police station, perhaps they know where He lives.” There are millions of people in this country who, though having a faint knowledge of the historical facts surrounding the life of Jesus Christ, really do not know Him. From the pulpits of many churches today we are told that Jesus was a great teacher, that He was a great preacher, or that He was a great social reformer. Christ has become nothing more than a great humanitarian to many who call themselves Christians today. They have rejected His miraculous birth, death and resurrection.</p>
        <p>Someone may ask, “What difference does it make what I believe about Jesus Christ, so long as I believe that He lived and that He died 2000 years ago?” What you believe about Jesus Christ, His origin, His life, His death, and His present mission, will make all the difference in the world to your salvation and your relationship to God. Either Christ was what He claimed to be, the Saviour of mankind who died to deliver us from our sins, or He was the greatest impostor the world has ever known. The transformations which take place in the lives of those who fully accept Him, demonstrate that He is a wonderful Saviour.</p>
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
            {item.answer && <div className="booklet-comment">{item.answer.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
            {isOpen && <div className="answer"><blockquote>“{item.verse}”</blockquote><Link className="answer-version" href="/bible-studies#why-kjv">King James Version · Why the KJV?</Link></div>}
          </article>;
        })}

        <section className="summary">
          <p className="eyebrow">Summary</p>
          <p>After Christ had spent some time with His disciples, He asked them the searching question, “whom do men say that I the Son of man am?” Various answers were given by them. Some said that Christ was John the Baptist. Others said that He was Elijah. And still others thought that He was one of the great prophets. The Jewish people were looking for a mighty king to come as the Messiah to deliver them from the Roman bondage. They were more concerned with their political condition than they were with the spiritual deliverance from their sins. Consequently, when Christ made His appearance as a humble Teacher from Nazareth, most of the people were unwilling to accept Him as the Messiah.</p>
          <p>Today, many are like the people of Christ’s time. They are looking for some mighty leader to solve the problems of modern society, nuclear warfare, crime and disease. These things seem more important than the matter of salvation from sin. After Christ had received the various answers from the disciples, He said to them, “But whom say ye that I am? And Simon Peter answered and said, Thou art the Christ, the Son of the living God.” Matthew 16:15, 16 (NT).</p>
          <p>Christ commended Peter for his statement and indicated that this truth had been revealed to him by God. Upon this foundation the Christian church was to be established and built. Jesus Christ is indeed the divine Son of God. He came from heaven to reveal God’s love to man and to demonstrate by His death upon the cross of Calvary, how much God loves His wayward children. Jesus also loves us, for He gave Himself for us.</p>
          <p>As we view the dying Saviour upon the cross of Calvary, our hearts respond in deepest gratitude and love. We can do no less than give our sinful lives and hearts to Him to wash away our sins and prepare us to live with Him throughout eternity.</p>
          <p>It is a great privilege to join Peter in his declaration and Thomas in his acceptance of Christ as Lord and God.</p>
          <button className={`complete-button ${complete ? "completed" : ""}`} onClick={() => setComplete(!complete)}><span>{complete ? "✓" : "○"}</span>{complete ? "Study completed" : "Mark study as complete"}</button>
        </section>
      </div>
    </section>

    <nav className="lesson-nav shell" aria-label="Study navigation">
      <Link href="/bible-studies/origin-of-sin"><span>←</span><small>Previous</small><b>The Origin of Sin</b></Link>
      <div className="lesson-nav-center"><span>Study 03</span><i></i><span>Study 04</span></div>
      <Link href="/bible-studies/problem-of-sin"><small>Next</small><b>The Problem of Sin</b><span>→</span></Link>
    </nav>
    <Footer />
  </main>;
}
