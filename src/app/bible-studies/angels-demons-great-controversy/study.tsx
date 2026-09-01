"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

type Confidence = "explicit" | "debated" | "not-stated";

const chapters = [
  { id:"created", number:"01", eyebrow:"Before earth’s history", title:"Angels are created beings", refs:"Colossians 1:16 · Psalm 103:20 · Hebrews 1:5–14", verse:"For by him were all things created, that are in heaven, and that are in earth, visible and invisible...", body:"Angels are powerful spiritual beings who worship and serve God. They are not divine, and they are not a rival race of gods. Scripture places Christ infinitely above them and identifies Him as their Creator.", takeaway:"Angels are mighty servants; Christ alone is Creator and Lord.", confidence:"explicit" as Confidence },
  { id:"rebellion", number:"02", eyebrow:"The origin of conflict", title:"Pride and rebellion in heaven", refs:"Isaiah 14:12–14 · Ezekiel 28:12–17", verse:"I will ascend into heaven, I will exalt my throne above the stars of God...", body:"Isaiah addresses the king of Babylon and Ezekiel the king of Tyre, yet their language has long been understood by many Christians to reach beyond those earthly rulers to the pride behind rebellion. That wider application is compelling, but it should be identified as interpretation rather than an explicit biography naming Satan.", takeaway:"The passages expose self-exaltation; their full application is debated.", confidence:"debated" as Confidence },
  { id:"war", number:"03", eyebrow:"War in heaven", title:"The dragon and his angels", refs:"Revelation 12:7–9", verse:"Michael and his angels fought against the dragon; and the dragon fought and his angels...", body:"Revelation explicitly identifies the dragon as the old serpent, the Devil and Satan. He deceives the whole world, and other angels stand with him in rebellion. The controversy is moral and spiritual: truth against deception, worship against self-exaltation.", takeaway:"Satan leads real angelic rebellion and worldwide deception.", confidence:"explicit" as Confidence },
  { id:"eden", number:"04", eyebrow:"The conflict reaches earth", title:"The serpent attacks God’s word", refs:"Genesis 3:1–15 · John 8:44", verse:"Yea, hath God said... Ye shall not surely die.", body:"The first recorded temptation challenges what God said and misrepresents His character. Humanity falls through distrust and disobedience, but God immediately promises that the woman’s Seed will crush the serpent’s head.", takeaway:"The conflict entered human history through deception—and met a promise of victory.", confidence:"explicit" as Confidence },
  { id:"holy-angels", number:"05", eyebrow:"Faithful messengers", title:"What holy angels do", refs:"Daniel 6:22 · Luke 1:26–38 · Hebrews 1:14 · Revelation 22:8–9", verse:"Are they not all ministering spirits, sent forth to minister for them who shall be heirs of salvation?", body:"Holy angels worship God, carry His messages, protect according to His command, and minister in His purposes. When John falls before an angel, the angel refuses worship and points him back to God.", takeaway:"Angels serve God and His people; they must never be worshipped.", confidence:"explicit" as Confidence },
  { id:"demons", number:"06", eyebrow:"Unclean spirits", title:"What demons do", refs:"Mark 5:1–13 · Matthew 12:24–28 · 1 Timothy 4:1", verse:"Some shall depart from the faith, giving heed to seducing spirits, and doctrines of devils...", body:"Scripture presents demons as evil spirits aligned with Satan. They deceive, oppress, promote false teaching, and recognize Christ’s authority. The Bible never says that they are the disembodied spirits of dead Nephilim.", takeaway:"Their allegiance and activity are explicit; a Nephilim genealogy is not.", confidence:"explicit" as Confidence },
  { id:"dead", number:"07", eyebrow:"A vital safeguard", title:"Can the dead communicate?", refs:"Ecclesiastes 9:5–6, 10 · Psalm 146:4 · Isaiah 8:19–20", verse:"The dead know not any thing... neither have they any more a portion for ever in any thing that is done under the sun.", body:"The dead are described as unconscious and awaiting resurrection. God forbids consulting familiar spirits. Therefore an apparition claiming to be a departed loved one must not be trusted merely because it appears convincing or reveals private knowledge.", takeaway:"Test every claimed message from the dead by the written Word.", confidence:"explicit" as Confidence },
  { id:"light", number:"08", eyebrow:"Counterfeit glory", title:"An angel of light", refs:"2 Corinthians 11:13–15 · Matthew 24:24", verse:"Satan himself is transformed into an angel of light.", body:"Deception does not always appear dark or frightening. It can look beautiful, spiritual, compassionate and miraculous. Signs cannot authenticate a message that contradicts God’s revealed truth.", takeaway:"Appearance and power are not the biblical tests of truth.", confidence:"explicit" as Confidence },
  { id:"cross", number:"09", eyebrow:"The decisive victory", title:"Christ triumphs at the cross", refs:"John 12:31–32 · Colossians 2:14–15 · Hebrews 2:14", verse:"Having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it.", body:"At Calvary, Christ exposes the character of rebellion, bears sin, disarms hostile powers and breaks the devil’s claim over those who trust Him. Satan remains active, but the outcome of the controversy is no longer in doubt.", takeaway:"The cross—not human power—is the centre of victory.", confidence:"explicit" as Confidence },
  { id:"armour", number:"10", eyebrow:"How believers stand", title:"The armour of God", refs:"Ephesians 6:10–18 · James 4:7–8 · 1 Peter 5:8–9", verse:"Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.", body:"Biblical spiritual warfare is not fascination with demons or attempts to command the unseen world. Believers stand in truth, righteousness, faith, the gospel, salvation, Scripture and persevering prayer—submitting to God and resisting the devil.", takeaway:"The command is to stand faithfully in Christ, not live in fear.", confidence:"explicit" as Confidence },
  { id:"final", number:"11", eyebrow:"The final deception", title:"Miracles that mislead", refs:"2 Thessalonians 2:9–12 · Revelation 13:13–14 · 16:13–14", verse:"They are the spirits of devils, working miracles...", body:"Scripture warns of real supernatural signs used in support of falsehood. The final crisis tests allegiance and worship. God’s people remain anchored in His commandments, the faith of Jesus, and the testimony of Scripture.", takeaway:"A miracle may be impressive and still carry a false message.", confidence:"explicit" as Confidence },
  { id:"end", number:"12", eyebrow:"The controversy ends", title:"Evil will not rise again", refs:"Revelation 20:10 · 21:1–5 · Nahum 1:9", verse:"Behold, I make all things new.", body:"Satan, sin and death do not continue forever. God’s judgment brings the rebellion to its final end, creation is restored, and God dwells with His people. Affliction will not rise a second time.", takeaway:"The biblical story ends in restoration, not an eternal struggle between equals.", confidence:"explicit" as Confidence },
];

const verdicts: { claim:string; level:Confidence; label:string }[] = [
  { claim:"Angels were created by God", level:"explicit", label:"Explicit" },
  { claim:"Some angels rebelled with Satan", level:"explicit", label:"Explicit" },
  { claim:"Holy angels minister under God’s command", level:"explicit", label:"Explicit" },
  { claim:"Demons deceive and oppose God", level:"explicit", label:"Explicit" },
  { claim:"Christ defeated Satan through the cross", level:"explicit", label:"Explicit" },
  { claim:"Isaiah 14 and Ezekiel 28 describe Satan beyond their earthly kings", level:"debated", label:"Plausible / debated" },
  { claim:"The Bible reveals the precise date of Satan’s fall", level:"not-stated", label:"Not stated" },
  { claim:"Demons are the spirits of dead Nephilim", level:"not-stated", label:"Not stated" },
  { claim:"Every unexplained event is demonic", level:"not-stated", label:"Not stated" },
  { claim:"Miracles alone prove that a message is from God", level:"not-stated", label:"Contradicted by Scripture" },
  { claim:"Satan and evil will finally be destroyed", level:"explicit", label:"Explicit" },
];

const tests = [
  { ref:"Isaiah 8:20", title:"The Word", text:"Does the message agree with the law and the testimony?" },
  { ref:"Deuteronomy 13:1–4", title:"The Worship", text:"Where does the sign direct loyalty and worship?" },
  { ref:"1 John 4:1–3", title:"The Christ", text:"What does the spirit confess about Jesus Christ?" },
  { ref:"Matthew 7:16–20", title:"The Fruit", text:"What character and fruit does the teaching produce?" },
];

function ConfidenceBadge({ level, children }: { level:Confidence; children:React.ReactNode }) {
  return <span className={`confidence confidence-${level}`}><i />{children}</span>;
}

export function AngelsDemonsStudyContent() {
  const [open, setOpen] = useState<string[]>(["created"]);
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

  return <main className="nephilim-page angels-page">
    <div className="nephilim-progress" aria-hidden="true"><span style={{ width:`${progress}%` }} /></div>

    <section className="angels-hero">
      <div className="nephilim-hero-content shell">
        <Link className="nephilim-back" href="/bible-studies">← Bible studies</Link>
        <p className="eyebrow light">The unseen conflict · Evidence study</p>
        <h1><span>Angels,</span><br /><em>Demons</em> <small>&amp;</small><br />the Great Controversy</h1>
        <p className="nephilim-subtitle">What does Scripture reveal about the heavenly conflict, supernatural deception, and Christ’s final victory?</p>
        <a className="nephilim-begin" href="#begin">Begin with Christ <span>↓</span></a>
      </div>
      <div className="nephilim-hero-note">Not two equal powers<br /><span>Creator · Creature · Victory</span></div>
    </section>

    <section id="begin" className="nephilim-opening shell">
      <div><p className="eyebrow">The foundation</p><h2>Christ is not<br /><em>Satan’s equal.</em></h2></div>
      <div><p className="opening-lead">The Great Controversy is a real conflict—but never a contest between two equal gods.</p><p>Christ created all things, visible and invisible. Satan is a fallen creature whose rebellion has already been decisively answered at the cross. This study follows Scripture from war in heaven to the final restoration, testing every supernatural claim by the written Word.</p><div className="reading-key"><ConfidenceBadge level="explicit">Explicit</ConfidenceBadge><ConfidenceBadge level="debated">Plausible / debated</ConfidenceBadge><ConfidenceBadge level="not-stated">Not stated</ConfidenceBadge></div></div>
    </section>

    <section className="evidence-section" id="evidence"><div className="shell">
      <div className="nephilim-section-head"><div><p className="eyebrow light">The biblical story</p><h2>From rebellion<br /><em>to restoration.</em></h2></div><p>Open each chapter to follow the conflict through Scripture. Every conclusion is marked by the confidence the text allows.</p></div>
      <div className="evidence-list">{chapters.map((item) => { const isOpen = open.includes(item.id); return <article className={`evidence-item ${isOpen ? "is-open" : ""}`} key={item.id}><button onClick={() => toggle(item.id)} aria-expanded={isOpen} aria-controls={`chapter-${item.id}`}><span className="evidence-number">{item.number}</span><span className="evidence-title"><small>{item.eyebrow}</small><b>{item.title}</b><em>{item.refs}</em></span><ConfidenceBadge level={item.confidence}>{item.confidence === "explicit" ? "Explicit" : "Debated"}</ConfidenceBadge><span className="evidence-toggle">{isOpen ? "−" : "+"}</span></button>{isOpen && <div id={`chapter-${item.id}`} className="evidence-answer"><blockquote>“{item.verse}”</blockquote><div><p>{item.body}</p><strong>{item.takeaway}</strong></div></div>}</article>; })}</div>
    </div></section>

    <section className="angels-sides-section"><div className="shell"><div className="nephilim-section-head light-head"><div><p className="eyebrow">Know the difference</p><h2>One creation.<br /><em>Two allegiances.</em></h2></div><p>Scripture distinguishes faithful angels from the spirits who joined Satan’s rebellion.</p></div><div className="angels-sides-grid"><article><span>Faithful to God</span><h3>Holy angels</h3><ul><li>Worship and obey the Creator</li><li>Carry messages at God’s command</li><li>Minister to the heirs of salvation</li><li>Refuse worship for themselves</li></ul><small>Psalm 103:20 · Hebrews 1:14 · Revelation 22:9</small></article><article><span>Rebellion and deception</span><h3>Fallen angels &amp; demons</h3><ul><li>Follow Satan’s revolt</li><li>Deceive and promote false teaching</li><li>Oppress but remain subject to Christ</li><li>Counterfeit light, truth and worship</li></ul><small>Revelation 12:9 · Mark 5:6–13 · 1 Timothy 4:1</small></article></div></div></section>

    <section className="modern-section angels-deception"><div className="modern-glow" aria-hidden="true" /><div className="shell modern-inner"><div className="modern-title"><p className="eyebrow light">Supernatural is not automatically sacred</p><h2>Light can be<br /><em>counterfeited.</em></h2><p>Satan’s most dangerous deception may not appear evil. It may look compassionate, enlightened, miraculous and deeply spiritual.</p></div><div className="deception-quote"><span>“</span><blockquote>Satan himself is transformed into an angel of light.</blockquote><small>2 Corinthians 11:14</small></div><div className="speculation-warning"><span>!</span><p><strong>A necessary warning</strong>Do not label every unexplained experience demonic. Scripture calls us to sober testing—not superstition, sensationalism, or fear.</p></div></div></section>

    <section className="warning-section shell"><div className="warning-intro"><p className="eyebrow">Four biblical tests</p><h2>Test the spirit.<br /><em>Test the message.</em></h2><p>A supernatural sign is not self-authenticating. Scripture directs attention away from spectacle and back to truth, worship, Christ and fruit.</p></div><div className="warning-grid">{tests.map((test,index) => <article key={test.ref}><span>{String(index + 1).padStart(2,"0")}</span><small>{test.ref}</small><h3>{test.title}</h3><p>{test.text}</p></article>)}</div><div className="message-test"><span>The decisive standard</span><h3>“To the law and to the testimony.”</h3><b>Isaiah 8:20</b></div></section>

    <section className="angels-dead-section"><div className="shell angels-dead-grid"><div><p className="eyebrow light">Spiritualism tested</p><h2>Can the dead<br /><em>speak to us?</em></h2><p>Scripture says the dead “know not any thing” and that their thoughts perish. Attempts to consult the dead are forbidden—not because the experience can never appear convincing, but because its claimed identity and message cannot be trusted.</p></div><blockquote>“Should not a people seek unto their God? for the living to the dead? To the law and to the testimony...”<span>Isaiah 8:19–20</span></blockquote></div></section>

    <section className="controversy-section angels-cross-section"><div className="shell controversy-inner"><p className="eyebrow light">The centre of the controversy</p><p className="revelation-ref">Colossians 2:15</p><blockquote>“Having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it.”</blockquote><div className="controversy-lines"><span>Truth <i>—</i> Christ</span><span>Victory <i>—</i> The Cross</span><span>Hope <i>—</i> Resurrection</span></div><p className="controversy-copy">The believer’s confidence is not superior knowledge of darkness. It is union with the One who has already <strong>triumphed.</strong></p></div></section>

    <section className="angels-armour-section"><div className="shell"><div className="nephilim-section-head light-head"><div><p className="eyebrow">Ephesians 6:10–18</p><h2>How believers<br /><em>stand.</em></h2></div><p>The armour of God is a life anchored in Christ—not a catalogue of techniques for chasing demons.</p></div><div className="armour-grid">{[["Truth","A mind governed by what God has revealed."],["Righteousness","Christ’s character guarding the heart."],["The Gospel","Feet ready to carry the message of peace."],["Faith","Trust that extinguishes the adversary’s accusations."],["Salvation","The hope secured by Christ’s saving work."],["The Word","The Spirit’s sword: Scripture understood and obeyed."],["Prayer","Continual dependence upon God for every believer."]].map(([title,text],index) => <article key={title}><span>{String(index + 1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="verdict-section" id="verdict"><div className="shell"><div className="verdict-heading"><div><p className="eyebrow">The biblical verdict</p><h2>What can we<br /><em>actually say?</em></h2></div><div className="verdict-filters">{(["all","explicit","debated","not-stated"] as const).map((level) => <button className={filter === level ? "active" : ""} onClick={() => setFilter(level)} key={level}>{level === "all" ? "All claims" : level === "explicit" ? "Explicit" : level === "debated" ? "Debated" : "Not stated"}</button>)}</div></div><div className="verdict-table" aria-live="polite"><div className="verdict-row verdict-labels"><span>Claim</span><span>Biblical confidence</span></div>{visibleVerdicts.map((item) => <div className="verdict-row" key={item.claim}><strong>{item.claim}</strong><ConfidenceBadge level={item.level}>{item.label}</ConfidenceBadge></div>)}</div></div></section>

    <section className="final-section angels-final"><div className="shell final-inner"><p className="eyebrow light">The outcome is certain</p><h2>Stand in truth.<br /><em>Not in fear.</em></h2><p>The controversy is real, but Christ has not left His people defenceless—and evil will not continue forever.</p><blockquote>“Greater is he that is in you, than he that is in the world.”<span>1 John 4:4</span></blockquote><Link href="/bible-studies/state-of-the-dead" className="next-study-card"><span><small>Next study</small><b>The State of the Dead<br />Can the Dead Speak to the Living?</b></span><i>→</i></Link></div></section>

    <Footer />
  </main>;
}
