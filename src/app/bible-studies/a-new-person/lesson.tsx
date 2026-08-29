"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { useStudyProgress } from "@/hooks/useStudyProgress";

const questions = [
  { ref: "Jeremiah 13:23", q: "What does the Bible say it is impossible for the sinner to do?", verse: "Can the Ethiopian change his skin, or the leopard his spots? then may ye also do good, that are accustomed to do evil.", answer: "" },
  { ref: "Isaiah 64:6", q: "How does Isaiah describe human righteousness?", verse: "All our righteousnesses are as filthy rags.", answer: "Righteousness means right doing—obeying God’s commandments by His power." },
  { ref: "Romans 7:15–19", q: "Although Paul wanted to do that which was right, what did he do instead?", verse: "For the good that I would I do not: but the evil which I would not, that I do.", answer: "" },
  { ref: "Romans 7:14", q: "Why was Paul incapable of doing what God commanded?", verse: "The law is spiritual: but I am carnal, sold under sin.", answer: "Carnal means unspiritual, not converted to Christ." },
  { ref: "Romans 8:6, 7", q: "What does the Bible say is the reason that men do not willingly obey God?", verse: "The carnal mind is enmity against God: for it is not subject to the law of God.", answer: "" },
  { ref: "Acts 3:19", q: "How can a lost sinner become a child of God?", verse: "Repent ye therefore, and be converted, that your sins may be blotted out.", answer: "This text tells us to repent and be converted. The word ‘converted’ means to be changed. We are to have the carnal nature changed into a spiritual nature. When we come to the Lord just as we are the Holy Spirit leads us to repentance, which means sorrow for sin. God then works a miraculous change in us called conversion." },
  { ref: "John 3:3, 6", q: "How can our natures be changed from carnal to spiritual?", verse: "Except a man be born again, he cannot see the kingdom of God... That which is born of the Spirit is spirit.", answer: "Being born again means being ‘born from above’. A change takes place. We have often heard the expression, ‘that was the old me, but now I’m a new man’ to describe a new beginning in someone’s life." },
  { ref: "John 1:12, 13", q: "How does God accomplish this spiritual rebirth?", verse: "As many as received him, to them gave he power to become the sons of God... which were born... of God.", answer: "God creates by the power of His word (Psalm 33:6, 9 (OT)) and as we accept Christ we are transformed, born again by the power of His word. ‘Being born again, not of corruptible seed, but of incorruptible, by the word of God, which liveth and abideth for ever.’ 1 Peter 1:23 (NT)." },
  { ref: "Ezekiel 36:26", q: "What does God promise to do if we yield ourselves to Him?", verse: "A new heart also will I give you, and a new spirit will I put within you.", answer: "Like a motor car when the engine is sick, we choose to take it to the mechanic who puts in a new engine and gives the car a new heart. The car must be brought just as it is to the mechanic; so we need to come to Christ just as we are, and let Him do the necessary work." },
  { ref: "Hebrews 8:9, 10", q: "Under the new covenant, what has God promised to write upon hearts and minds?", verse: "I will put my laws into their mind, and write them in their hearts.", answer: "" },
  { ref: "Romans 7:24, 25", q: "Through whom alone does deliverance come?", verse: "I thank God through Jesus Christ our Lord.", answer: "" },
  { ref: "Matthew 5:6", q: "How deep must be our desire to receive this change?", verse: "Blessed are they which do hunger and thirst after righteousness: for they shall be filled.", answer: "" },
  { ref: "Jeremiah 29:12, 13", q: "When will we find salvation?", verse: "Ye shall seek me, and find me, when ye shall search for me with all your heart.", answer: "" },
  { ref: "2 Corinthians 5:17", q: "How completely are we changed by this rebirth through Christ?", verse: "If any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.", answer: "Like a caterpillar that becomes a butterfly, an amazing change takes place." },
  { ref: "Colossians 3:1–10", q: "How does the Bible describe the change that takes place by the new birth?", verse: "Ye have put off the old man with his deeds; and have put on the new man.", answer: "" },
  { ref: "Galatians 5:22–25", q: "When an individual has been truly converted, what new traits of character will be seen in his life?", verse: "The fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance.", answer: "" },
];

export default function StudySeven() {
  const { open, complete, setComplete, toggle } = useStudyProgress("a-new-person");
  const progress = Math.round((open.length / questions.length) * 100);

  return <main className="lesson-page pt-[82px]">
    <div className="lesson-progress"><span style={{ width: `${complete ? 100 : progress}%` }} /></div>
    <section className="lesson-hero image-lesson-hero shell">
      <div className="lesson-title-row lesson-title-photo study-7-photo">
        <div><Link className="back-link" href="/bible-studies">← All studies</Link><p className="eyebrow">Study 07 · Foundations</p><h1>How You Can Become<br /><em>a New Person</em></h1></div>
        <div className="lesson-seal"><span>07</span><small>16 questions</small></div>
      </div>
      <div className="lesson-intro">
        <p>Some time ago the newspaper reported the story of a young girl who had raised a panther as a pet. It was only a few days old when it was given to her. The girl was very kind to this pet, and the two spent many hours together.</p>
        <p>As the panther grew larger and older, the girl was warned of the danger of having this wild animal for a pet. She had almost grown up with the panther and was certain that the animal would never harm her. She claimed that all the wild traits of this particular cat had been eliminated by its constant association with humans. Then one day the girl cut her finger as she was playing with the animal. The panther licked the blood from the wound. In a matter of a few seconds, this kind, gentle playmate, became a ravenous beast. Knocking its mistress to the ground, it viciously chewed and clawed her. The girl made the painful discovery that her panther still had the nature of a wild animal.</p>
        <p>This illustrates the nature of man. Man is born with a sinful nature. It is much easier for him to do that which is wrong and sinful, than that which is right and good. If we do not choose to let the Holy Spirit control our lives but choose to follow our sinful nature, we fall into sin. Education and training may develop some outward traits of good behaviour, but they cannot change the heart. We need to choose to let Jesus make a change and take the steering wheel of our lives. In order to be right with God we need forgiveness for our past sins. More than this, a change needs to take place that will produce a new life. As a caterpillar becomes a butterfly, so man can be changed into a new creature. The Law of Gravity is broken by the Law of Aerodynamics, and the aeroplane, when powered, can fly in the sky as long as the fuel is supplied to give the power. So we as humans, with a mind that is not in tune spiritually, need a power from outside ourselves to be transformed and be in harmony with God. Nicodemus, a member of the Jewish Sanhedrin, came to talk with Jesus by night to find out some answers to his questions on this topic. Jesus told him that a man needs to “be born again”. In this study we will see what this means and how it can happen in a person’s life.</p>
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
          <p>How many times we have failed in following the Saviour as we should. Many of us have tried so very hard to do right, only to fail miserably. Our intentions were good, but we were trying to do good without God’s help. We were still carnal and unconverted. We were controlled by passions and habits we acquired before we knew God’s plan of redemption. Without Jesus our hearts cannot be changed. We can never overcome the Devil in our own strength.</p>
          <p>It is only as we put our lives in the hands of Christ that we can gain the victory over past sins. It is only through Him that we can have the victorious Christian life.</p>
          <p>So many have said, “When I overcome this habit, or gain the victory over that sin, then I will accept the Lord and become a Christian.” This is like the sick person saying, “When I get well I will go to the doctor and let him help me”. The time to come to Christ for help is when you recognize your need. Give Him your heart today and know the joy and peace that come to you as you become a new creature in Him. You can do this by dropping to your knees just now and letting Him take control of your life. If you do not know how to come to Christ, just repeat these simple words as an expression of your heart’s sincere desire: “Dear Lord, I am weak, I have sinned. Please forgive and help me. Come into my heart and change me just now, in Jesus Christ’s name. Amen.”</p>
          <button className={`complete-button ${complete ? "completed" : ""}`} onClick={() => setComplete(!complete)}><span>{complete ? "✓" : "○"}</span>{complete ? "Study completed" : "Mark study as complete"}</button>
        </section>
      </div>
    </section>

    <nav className="lesson-nav shell" aria-label="Study navigation">
      <Link href="/bible-studies/sin-and-its-cure"><span>←</span><small>Previous</small><b>Sin and Its Cure</b></Link>
      <div className="lesson-nav-center"><span>Study 06</span><i></i><span>Study 07</span></div>
      <Link href="/bible-studies/law-and-gospel"><small>Next</small><b>Law &amp; Gospel</b><span>→</span></Link>
    </nav>
    <Footer />
  </main>;
}
