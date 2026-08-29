"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { useStudyProgress } from "@/hooks/useStudyProgress";

const questions = [
  { ref: "2 Peter 1:19", q: "What has God given man to guide him in this day?", verse: "We have also a more sure word of prophecy... as unto a light that shineth in a dark place.", answer: "" },
  { ref: "Amos 3:7", q: "Through what agents does God communicate His secrets to mankind?", verse: "Surely the Lord God will do nothing, but he revealeth his secret unto his servants the prophets.", answer: "Please read the entire chapter of Daniel 2 (OT). In this dream God outlined the future to an ancient king. Daniel 2:29 (OT). Notice how God used Daniel (Daniel 2:31–36 (OT))." },
  { ref: "Daniel 2:28", q: "Why should this dream be of special interest to us? Daniel 2:28 (OT)", verse: "There is a God in heaven that revealeth secrets, and maketh known... what shall be in the latter days.", answer: "" },
  { ref: "Daniel 2:27, 28", q: "Who revealed the dream to Daniel?", verse: "The secret which the king hath demanded cannot the wise men... shew unto the king; but there is a God in heaven that revealeth secrets.", answer: "" },
  { ref: "Daniel 2:31–35", q: "What had the king seen in his dream?", verse: "Thou, O king, sawest, and behold a great image... and the stone that smote the image became a great mountain, and filled the whole earth.", answer: "In this dream God outlined the history of this world from the days of Nebuchadnezzar to its very end. By the use of different metals in the image He revealed that there would be four world empires in the succeeding years. History reveals that these empires were: Babylon (head of gold), Medo-Persia (chest and arms of silver), Greece (thighs of brass), and Rome (legs of iron). By this image He showed that the fourth world empire would be divided, represented by the feet composed of iron and clay." },
  { ref: "Daniel 2:37, 38", q: "What was represented by the head of gold?", verse: "Thou art this head of gold.", answer: "In Isaiah 14:4 (OT) Babylon is called the Golden City. Archaeologists have uncovered tablets (bricks) upon which King Nebuchadnezzar had written these words, ‘Babylon....the city which is the delight of my eyes, and which I have glorified, may it last forever.’ Babylon, with its magnificent display of wealth and power, its beautiful buildings and its hanging gardens (one of the seven wonders of the ancient world), was the capital city of a golden kingdom.\n\nBabylon ruled from 605 B.C. to 538 B.C." },
  { ref: "Daniel 2:39", q: "How was the second kingdom of silver (Medo-Persia) compared with the glory and moral worth of Babylon?", verse: "After thee shall arise another kingdom inferior to thee.", answer: "God, through the prophet Daniel, told Belshazzar that the Babylonians were to be succeeded by the Medo-Persians. Daniel 5:25–31 (OT). 100 years before he was born, the Bible predicted the man that would overthrow Babylon, Isaiah 45:1 (OT) ‘Thus saith the LORD to his anointed, to Cyrus....the gates shall not be shut.’ Cyrus was the General of the Medes and Persians. Cyrus dug canals to divert the Euphrates River that flowed through Babylon and, on learning that on a particular night the king of Babylon, Belshazzar, was to have a huge celebration, decided he would then take the city. Cyrus had his men break the dikes of these canals and diverted the Euphrates River. He and his men marched down the muddy riverbed and found that the gates that opened from the city to the river were open (as it was prophesied - Isaiah 45:1 (OT)). The guards were drunk. Cyrus and his men marched into the city unopposed, and at that time a mysterious hand wrote on the wall of Belshazzar’s palace words from God, which the prophet Daniel interpreted, saying that the Babylonians were to be succeeded by the Medo-Persians. Daniel 5:25–31 (OT). The Medo-Persian empire ruled from 538 B.C. to 331 B.C." },
  { ref: "Daniel 2:39", q: "What part of the metal man represented the third kingdom of Greece?", verse: "Another third kingdom of brass, which shall bear rule over all the earth.", answer: "Note: ‘The battles of Granicus, 334 B.C., Issus in the following year, and Arbela in 331 B.C., settled the fate of the Persian Empire, and established the wide dominion of the Greeks.’ – H. Grattan Guinness, ‘The Divine Programme of the World’s History.’ Page 308.\n\nThe Battle of Arbela in 331 B.C. where Greece was under the leadership of Alexander the Great, is recorded thus: ‘Alexander marshalled his army, consisting of forty thousand infantry and seven thousand cavalry. He defeated Darius and the Persian Grand Army, for it is said to have consisted of one million infantry, forty thousand cavalry, two hundred scythed chariots, and fifteen elephants.’ Grote, ‘History of Greece’, Chap xciii pars 72–91. In ancient poetry and song the Greeks were known as the ‘Brazen Coated Greeks’ and the kingdom of Greece ruled from 331 B.C. to 168 B.C." },
  { ref: "Daniel 2:33, 40", q: "What part of the image represents the fourth world empire, Rome?", verse: "His legs of iron... And the fourth kingdom shall be strong as iron.", answer: "The images of gold, or silver, or brass, that might serve to represent the nations and their kings, were successively broken by the iron monarchy of Rome.’ – Edward Gibbon, ‘The Decline and Fall of the Roman Empire,’ chap 38. General Observations at end of chapter, par. I.\n\nAt the Battle of Pydna 168 B.C., the Roman Empire established itself as the next world kingdom and the Roman Empire ruled from 168 B.C. to 476 A.D." },
  { ref: "Daniel 2:41", q: "As the feet, part iron and part clay represented a divided condition, what was to happen to the iron kingdom of Rome?", verse: "The kingdom shall be divided... but there shall be in it of the strength of the iron.", answer: "Between A.D. 351 and 476 a series of invasions by barbaric tribes from Europe completely overran the Western Roman Empire and brought it to its end. These tribes included: Anglo-Saxons (English), Franks (French), Alemanni (German), Burgundians (Swiss), Lombards (Italians), Visigoths (Spanish), Suevi (Portuguese), Vandals, Ostrogoths, and Heruli." },
  { ref: "Daniel 2:43", q: "What statement of seven words shows that the Old World powers would never be welded back into one great kingdom?", verse: "They shall not cleave one to another.", answer: "Time and time again people have tried to unite Europe and form a world empire but all have failed. Charlemagne, (800 A.D.) tried and failed, as did Charles V (1364–1380 A.D.) and Louis XIV of France 1643–1715 A.D., with his famous Sunrise Kingdom. Napoleon in the late 18th early 19th Century wanted to create a new European system but the winter snowfields of Russia so weakened his army that at Waterloo he was defeated. Kaiser Wilhelm II, Hitler and Mussolini have failed too, as will any attempt in the future." },
  { ref: "Daniel 2:44, 45", q: "At the end of earth’s history, what will God set up?", verse: "The God of heaven [shall] set up a kingdom, which shall never be destroyed... and it shall stand for ever.", answer: "In Daniel 2:34, 35, describing this event, it says ‘Thou sawest till that a stone was cut out without hands, which smote the image upon his feet that were of iron and clay, and brake them to pieces....and the stone that smote the image became a great mountain, and filled the whole earth.’ The second coming is here represented. Jesus is called the Rock. (1 Corinthians 10:4) and the Cornerstone (Ephesians 2:20)." },
  { ref: "Matthew 25:31–34", q: "What event will mark the setting up of this kingdom?", verse: "When the Son of man shall come in his glory... Then shall the King say... Come, ye blessed of my Father, inherit the kingdom prepared for you.", answer: "" },
];

export default function StudyTwo() {
  const { open, complete, setComplete, toggle } = useStudyProgress("daniel-2");
  const progress = Math.round((open.length / questions.length) * 100);

  return <main className="lesson-page prophecy-lesson pt-[82px]">
    <div className="lesson-progress"><span style={{ width: `${complete ? 100 : progress}%` }} /></div>
    <section className="lesson-hero image-lesson-hero shell">
      <div className="lesson-title-row lesson-title-photo study-2-photo">
        <div><Link className="back-link" href="/bible-studies">← Bible Studies</Link><p className="eyebrow">Prophecy study · Daniel 2</p><h1>God Unfolds<br /><em>the Future</em></h1></div>
        <div className="lesson-seal"><span>02</span><small>13 questions</small></div>
      </div>
      <div className="lesson-intro">
        <p>One night a minister was travelling from his home to an appointment some distance away. The night was dark and rainy. As he travelled along the mountain highway, the headlights of his car went out. At that point the road was wet, crooked, and dangerous. Fear gripped his heart as he tried to bring his car to a safe stop. Not until the lights went out did he realize how valuable they were and how much he depended on them to show him what danger lay ahead and to guide him around treacherous curves. With God’s help he avoided a serious accident. Never again were those precious headlights taken for granted.</p>
        <p>As we speed down the dark highway of life, we need a bright light to guide us. Everywhere we hear such perplexing questions as: How can I know what to do and what to believe? What does the future hold for me and mine?</p>
        <p>Thank God. He has not left us in the dark. He has a wonderful light to guide us through this dark night into a kingdom of everlasting light and life. Let us now see how this light reveals where we are and where we are going.</p>
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
          <p>In every age man has looked for a better life in a land where the miseries and troubles of this world will be no more. Whether it be called Utopia, Heaven, or Paradise, man has longed for a place and a time when all sickness, sorrow, and death will end. In God’s plan there is just such a heaven for the faithful. The Bible says that Abraham, the father of the faithful, looked for that type of home. In Hebrews 11:16 (NT), speaking of the saints of old, we read: “But now they desire a better country, that is, an heavenly: wherefore God is not ashamed to be called their God: for He hath prepared for them a city.”</p>
          <p>We will learn about that city in another lesson. It will answer the longing of every heart and settle the problems of every sincere child of God.</p>
          <p>As Christ was dying on the cross of Calvary, there was one bright spot in His hour of agony. The dying thief turned to Him for salvation. From the depths of his repentant heart he cried out, “Lord, remember me when thou comest into thy kingdom.” Luke 23:42 (NT). Back came the promise of Christ that the thief would be with Him in His kingdom, meaning that when Christ should come again the second time he would raise him from the dead to be with Jesus in His kingdom.</p>
          <button className={`complete-button ${complete ? "completed" : ""}`} onClick={() => setComplete(!complete)}><span>{complete ? "✓" : "○"}</span>{complete ? "Study completed" : "Mark study as complete"}</button>
        </section>
      </div>
    </section>

    <nav className="lesson-nav shell" aria-label="Study navigation">
      <Link href="/bible-studies/gods-amazing-book"><span>←</span><small>Previous</small><b>God’s Amazing Book</b></Link>
      <div className="lesson-nav-center"><span>Study 02</span><i></i><span>Study 03</span></div>
      <Link href="/bible-studies/origin-of-sin"><small>Next</small><b>The Origin of Sin</b><span>→</span></Link>
    </nav>
    <Footer />
  </main>;
}
