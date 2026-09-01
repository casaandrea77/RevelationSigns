"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

type Confidence = "explicit" | "debated" | "not-stated";

const evidence = [
  { id:"genesis", number:"01", eyebrow:"The passage", title:"Genesis 6 & the Nephilim", refs:"Genesis 6:1–4", verse:"There were giants in the earth in those days; and also after that...", body:"The KJV word “giants” translates the Hebrew Nephilim. Genesis establishes that they existed and calls the resulting figures “mighty men which were of old, men of renown.” It gives surprisingly little explanation of their biology or precise origin.", takeaway:"Nephilim existed. Their nature is not fully explained.", confidence:"explicit" as Confidence },
  { id:"job", number:"02", eyebrow:"The strongest parallel", title:"“Sons of God” in Job", refs:"Job 1:6 · 2:1 · 38:7", verse:"When the morning stars sang together, and all the sons of God shouted for joy?", body:"In Job, the expression “sons of God” clearly describes heavenly beings. Humans did not yet exist when God laid the earth’s foundations. This gives the angelic reading of Genesis 6 genuine biblical support—but does not by itself prove that every use of the phrase must mean the same thing.", takeaway:"The phrase can explicitly refer to heavenly beings.", confidence:"explicit" as Confidence },
  { id:"matthew", number:"03", eyebrow:"A serious difficulty", title:"Do angels marry?", refs:"Matthew 22:30 · Mark 12:25", verse:"They neither marry, nor are given in marriage, but are as the angels of God in heaven.", body:"Jesus presents angels as beings who do not marry. Supporters of the angelic view note that He says “angels of God in heaven,” while Genesis 6 would concern rebels who left their proper place. Even so, Scripture never explains angels possessing human reproductive biology.", takeaway:"Jesus’ words limit certainty; they do not settle every question.", confidence:"debated" as Confidence },
  { id:"jude", number:"04", eyebrow:"Angels who left", title:"Jude 6–7", refs:"Jude 6–7", verse:"The angels which kept not their first estate, but left their own habitation...", body:"Jude says certain angels abandoned their proper domain and were reserved for judgment, then immediately turns to Sodom and Gomorrah going after “strange flesh.” Some see a deliberate link to sexual transgression; others read the examples as parallel acts of rebellion rather than the same kind of sin.", takeaway:"The connection is ancient and plausible, but interpreted differently.", confidence:"debated" as Confidence },
  { id:"peter", number:"05", eyebrow:"The sequence", title:"Peter’s clue", refs:"2 Peter 2:4–5", verse:"God spared not the angels that sinned... and spared not the old world, but saved Noah...", body:"Peter moves from angels who sinned to the ancient world, Noah, and the Flood. Genesis moves from the sons of God and Nephilim to exceptional wickedness, Noah, and the Flood. The parallel is striking and worth taking seriously without claiming it proves every later detail.", takeaway:"The sequence supports a connection, not a complete theory.", confidence:"debated" as Confidence },
  { id:"offspring", number:"06", eyebrow:"Read the wording", title:"Were the Nephilim the offspring?", refs:"Genesis 6:4", verse:"There were giants... when the sons of God came in unto the daughters of men, and they bare children to them...", body:"Popular retellings reduce the verse to “angel + woman = Nephilim.” Genesis is less explicit: it says Nephilim were present and that the children became mighty men of renown. Whether the Nephilim and those mighty men are identical is debated.", takeaway:"Do not turn an inference into a verse that does not exist.", confidence:"debated" as Confidence },
  { id:"after", number:"07", eyebrow:"The unresolved phrase", title:"“And also after that”", refs:"Genesis 6:4 · Numbers 13:32–33", verse:"And there we saw the giants, the sons of Anak, which come of the giants...", body:"Israel’s spies later identified the Anakim with the Nephilim. Yet their fearful testimony is introduced as an “evil report,” and their grasshopper language is plainly charged with terror. Numbers proves what the spies claimed; it does not automatically establish a supernatural genealogy.", takeaway:"The later reference is biblical; the genealogy remains uncertain.", confidence:"debated" as Confidence },
  { id:"giants", number:"08", eyebrow:"Later giants", title:"Anakim, Rephaim & Goliath", refs:"Deuteronomy 3:11 · 9:2 · 1 Samuel 17:4", verse:"A people great and tall, the children of the Anakims...", body:"Scripture records exceptionally large peoples and warriors: the Anakim, the Rephaim, Og of Bashan, and Goliath. Their size is presented as real. But no biblical writer says these later giants carried angelic DNA or belonged to a surviving hybrid bloodline.", takeaway:"Biblical giants: yes. Angelic genetics: not stated.", confidence:"explicit" as Confidence },
];

const verdicts: { claim:string; level:Confidence; label:string }[] = [
  { claim:"Nephilim existed", level:"explicit", label:"Explicit" },
  { claim:"Angels rebelled against God", level:"explicit", label:"Explicit" },
  { claim:"“Sons of God” can mean heavenly beings", level:"explicit", label:"Explicit" },
  { claim:"Genesis 6 “sons of God” were angels", level:"debated", label:"Plausible / debated" },
  { claim:"Their children were angel-human hybrids", level:"debated", label:"Possible interpretation" },
  { claim:"Later giants had angelic DNA", level:"not-stated", label:"Not stated" },
  { claim:"Demons are dead Nephilim spirits", level:"not-stated", label:"Not stated" },
  { claim:"Modern humans carry Nephilim bloodlines", level:"not-stated", label:"Not stated" },
  { claim:"UFO beings are Nephilim", level:"not-stated", label:"Not stated" },
  { claim:"Satanic supernatural deception will occur", level:"explicit", label:"Explicit" },
];

const warnings = [
  { ref:"Matthew 24:24", text:"False Christs and false prophets shall shew great signs and wonders." },
  { ref:"2 Thessalonians 2:9", text:"Power and signs and lying wonders." },
  { ref:"Revelation 16:14", text:"They are the spirits of devils, working miracles." },
  { ref:"Isaiah 8:20", text:"To the law and to the testimony." },
];

function ConfidenceBadge({ level, children }: { level:Confidence; children:React.ReactNode }) {
  return <span className={`confidence confidence-${level}`}><i />{children}</span>;
}

export function NephilimStudyContent() {
  const [open, setOpen] = useState<string[]>(["genesis"]);
  const [filter, setFilter] = useState<"all" | Confidence>("all");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, Math.round((window.scrollY / height) * 100)) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive:true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const toggle = (id:string) => setOpen((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]);
  const visibleVerdicts = verdicts.filter((item) => filter === "all" || item.level === filter);

  return <main className="nephilim-page">
    <div className="nephilim-progress" aria-hidden="true"><span style={{ width:`${progress}%` }} /></div>

    <section className="nephilim-hero">
      <div className="nephilim-hero-content shell">
        <Link className="nephilim-back" href="/bible-studies">← Bible studies</Link>
        <p className="eyebrow light">Genesis 6 · Evidence study</p>
        <h1>The<br /><em>Nephilim</em></h1>
        <p className="nephilim-deck">Angels, Giants, or Men?</p>
        <p className="nephilim-subtitle">What does the Bible actually teach about Genesis 6?</p>
        <a className="nephilim-begin" href="#begin">Begin with the text <span>↓</span></a>
      </div>
      <div className="nephilim-hero-note">A Scripture-led investigation<br /><span>Certainty · Interpretation · Speculation</span></div>
    </section>

    <section id="begin" className="nephilim-opening shell">
      <div><p className="eyebrow">Before the theories</p><h2>Begin with<br /><em>what is written.</em></h2></div>
      <div>
        <p className="opening-lead">Few passages have produced as much speculation as Genesis 6:1–4.</p>
        <p>Were fallen angels having children with human women? Were the Nephilim supernatural hybrids—or unusually powerful men? Rather than beginning with <i>1 Enoch</i>, internet theories, or modern documentaries, this study begins with the Bible itself.</p>
        <div className="reading-key" aria-label="Confidence key"><ConfidenceBadge level="explicit">Explicit</ConfidenceBadge><ConfidenceBadge level="debated">Plausible / debated</ConfidenceBadge><ConfidenceBadge level="not-stated">Not stated</ConfidenceBadge></div>
      </div>
    </section>

    <section className="evidence-section" id="evidence"><div className="shell">
      <div className="nephilim-section-head"><div><p className="eyebrow light">The biblical evidence</p><h2>Follow every<br /><em>clue carefully.</em></h2></div><p>Open each passage to examine what the text establishes, what it may suggest, and where certainty ends.</p></div>
      <div className="evidence-list">
        {evidence.map((item) => { const isOpen = open.includes(item.id); return <article className={`evidence-item ${isOpen ? "is-open" : ""}`} key={item.id}>
          <button onClick={() => toggle(item.id)} aria-expanded={isOpen} aria-controls={`evidence-${item.id}`}>
            <span className="evidence-number">{item.number}</span><span className="evidence-title"><small>{item.eyebrow}</small><b>{item.title}</b><em>{item.refs}</em></span><ConfidenceBadge level={item.confidence}>{item.confidence === "explicit" ? "Explicit" : "Debated"}</ConfidenceBadge><span className="evidence-toggle">{isOpen ? "−" : "+"}</span>
          </button>
          {isOpen && <div id={`evidence-${item.id}`} className="evidence-answer"><blockquote>“{item.verse}”</blockquote><div><p>{item.body}</p><strong>{item.takeaway}</strong></div></div>}
        </article>; })}
      </div>
    </div></section>

    <section className="enoch-section"><div className="shell enoch-grid">
      <aside className="enoch-stamp"><span>Outside</span><b>the Biblical<br />Text</b><small>Historical literature<br />is not Scripture</small></aside>
      <div><p className="eyebrow enoch-eyebrow">A necessary boundary</p><h2>What does<br /><i>1 Enoch</i> add?</h2><p className="enoch-lead"><i>1 Enoch</i> expands Genesis 6 into a detailed Watchers narrative. It is an important witness to an ancient interpretation—but its added details must not be presented as though Genesis itself states them.</p>
        <div className="compare-grid"><article><small>The Bible says</small><ul><li>Angels rebelled.</li><li>Nephilim existed.</li><li>“Sons of God” took daughters of men.</li><li>Mighty men resulted.</li><li>Giants and evil spirits exist.</li></ul></article><article className="enoch-adds"><small>1 Enoch’s expanded story</small><p>Watchers descend <span>→</span> women conceive giants <span>→</span> giants die <span>→</span> their spirits become evil spirits.</p><strong>These details are outside the canonical biblical text.</strong></article></div>
      </div>
    </div></section>

    <section className="claims-section shell"><div className="nephilim-section-head light-head"><div><p className="eyebrow">Testing popular claims</p><h2>Where inference<br /><em>becomes invention.</em></h2></div><p>Interesting theories should never be granted the authority of a verse.</p></div>
      <div className="claims-grid">
        <article className="claim-card"><span className="claim-index">Claim 01</span><h3>Are demons dead Nephilim?</h3><p>Scripture describes demons, unclean spirits, Satan, and fallen angels—but nowhere gives demons a Nephilim genealogy.</p><blockquote>“Demons are the spirits of dead Nephilim.”</blockquote><ConfidenceBadge level="not-stated">Not established by Scripture</ConfidenceBadge></article>
        <article className="claim-card"><span className="claim-index">Claim 02</span><h3>Angel-human DNA & bloodlines?</h3><p>The Bible never speaks of angel DNA, Nephilim genes, hybrid bloodlines, or a continuing genetic Nephilim race.</p><blockquote>“Modern people carry Nephilim blood.”</blockquote><ConfidenceBadge level="not-stated">Not established by Scripture</ConfidenceBadge></article>
      </div>
    </section>

    <section className="modern-section"><div className="modern-glow" aria-hidden="true" /><div className="shell modern-inner">
      <div className="modern-title"><p className="eyebrow light">Why now?</p><h2>The ancient mystery<br />meets the <em>modern imagination.</em></h2><p>Popular culture increasingly links ideas that Scripture never joins together.</p></div>
      <div className="idea-chain" aria-label="Modern speculative idea chain">{[["01","Nephilim"],["02","Ancient gods"],["03","Ancient aliens"],["04","UFO / UAP"],["05","Genetic manipulation"],["06","Human hybrids"]].map(([number,label], index) => <div className="idea" key={label}><small>{number}</small><b>{label}</b>{index < 5 && <span>→</span>}</div>)}</div>
      <div className="speculation-warning"><span>!</span><p><strong>Speculation boundary</strong>The Bible does not predict spacecraft arriving from another planet, nor identify UFO beings as Nephilim. It does warn that convincing supernatural manifestations can deceive.</p></div>
    </div></section>

    <section className="warning-section shell"><div className="warning-intro"><p className="eyebrow">The biblical framework</p><h2>Test the sign.<br /><em>Test the message.</em></h2><p>Christianity does not need an extraterrestrial theory to explain supernatural deception. Scripture already warns that signs can be real enough to persuade—and false in what they teach.</p></div>
      <div className="warning-grid">{warnings.map((warning,index) => <article key={warning.ref}><span>{String(index + 1).padStart(2,"0")}</span><small>{warning.ref}</small><p>“{warning.text}”</p></article>)}</div>
      <div className="message-test"><span>The decisive question</span><h3>Does their message agree with<br />God’s revealed Word?</h3><b>Isaiah 8:20</b></div>
    </section>

    <section className="controversy-section"><div className="shell controversy-inner"><p className="eyebrow light">The Great Controversy</p><p className="revelation-ref">Revelation 12:9</p><blockquote>“That old serpent, called the Devil, and Satan, which deceiveth the whole world...”</blockquote><div className="controversy-lines"><span>Christ <i>—</i> Satan</span><span>Truth <i>—</i> Deception</span><span>Worship <i>—</i> Rebellion</span></div><p className="controversy-copy">The central story is not really about giants. The danger is becoming fascinated with bloodlines, secret genetics, and extraterrestrials while missing Scripture’s central warning: <strong>deception.</strong></p></div></section>

    <section className="verdict-section" id="verdict"><div className="shell"><div className="verdict-heading"><div><p className="eyebrow">The biblical verdict</p><h2>What can we<br /><em>actually say?</em></h2></div><div className="verdict-filters" aria-label="Filter claims by confidence">{(["all","explicit","debated","not-stated"] as const).map((level) => <button className={filter === level ? "active" : ""} onClick={() => setFilter(level)} key={level}>{level === "all" ? "All claims" : level === "explicit" ? "Explicit" : level === "debated" ? "Debated" : "Not stated"}</button>)}</div></div>
      <div className="verdict-table" aria-live="polite"><div className="verdict-row verdict-labels"><span>Claim</span><span>Biblical confidence</span></div>{visibleVerdicts.map((item) => <div className="verdict-row" key={item.claim}><strong>{item.claim}</strong><ConfidenceBadge level={item.level}>{item.label}</ConfidenceBadge></div>)}</div>
    </div></section>

    <section className="final-section"><div className="shell final-inner"><p className="eyebrow light">Hold fast to what is good</p><h2>Don’t build your faith<br />on <em>speculation.</em></h2><p>The Bible leaves Genesis 6 mysterious—but it does not leave us ignorant about deception.</p><blockquote>“Prove all things; hold fast that which is good.”<span>1 Thessalonians 5:21</span></blockquote><div className="next-study-card next-study-coming"><span><small>Next study · Coming soon</small><b>Angels, Demons &<br />the Great Controversy</b></span><i>—</i></div></div></section>

    <Footer />
  </main>;
}
