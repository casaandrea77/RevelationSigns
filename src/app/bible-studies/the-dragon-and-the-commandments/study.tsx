"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

const evidence = [
  { id:"dragon", number:"01", eyebrow:"Name the enemy", title:"Who is the dragon?", refs:"Revelation 12:9", verse:"And the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world: he was cast out into the earth, and his angels were cast out with him.", body:"Revelation does not leave us guessing. The dragon is Satan himself. Whatever the dragon fights in Revelation 12, Satan is fighting.", takeaway:"The war of Revelation 12:17 is Satan’s own war." },
  { id:"remnant", number:"02", eyebrow:"Name the target", title:"Who is the remnant?", refs:"Revelation 12:17 · Jeremiah 6:2 · 2 Corinthians 11:2", verse:"And the dragon was wroth with the woman, and went to make war with the remnant of her seed, which keep the commandments of God, and have the testimony of Jesus Christ.", body:"In Scripture a pure woman pictures God’s faithful people. The “remnant of her seed” is the last part of that people, living at the end of time. Revelation identifies them by two marks: they keep the commandments of God, and they have the testimony of Jesus Christ.", takeaway:"The last people of God are known by the commandments and by Jesus." },
  { id:"saints", number:"03", eyebrow:"The same people again", title:"Here are the saints", refs:"Revelation 14:12", verse:"Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus.", body:"After the three angels’ messages and the warning against the mark of the beast, Revelation describes God’s people once more. Again they keep the commandments of God, and again they hold the faith of Jesus. Law and faith stand side by side, not against each other.", takeaway:"At the very end, commandment keeping and faith in Jesus belong together." },
  { id:"ark", number:"04", eyebrow:"Which commandments?", title:"The ark of His testament", refs:"Revelation 11:19 · Exodus 31:18 · Exodus 25:16", verse:"And the temple of God was opened in heaven, and there was seen in his temple the ark of his testament...", body:"Just before chapter 12 opens, John sees the ark in heaven. On earth the ark held “the testimony”, the two tables of stone “written with the finger of God”. The scene that introduces the dragon’s war shows God’s law at the centre of His throne.", takeaway:"The commandments the dragon hates are the Ten written by God." },
  { id:"fulfil", number:"05", eyebrow:"Jesus answers directly", title:"Did Jesus destroy the law?", refs:"Matthew 5:17–18", verse:"Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil. For verily I say unto you, Till heaven and earth pass, one jot or one tittle shall in no wise pass from the law, till all be fulfilled.", body:"Jesus anticipated the very idea that He came to abolish the law, and He rejected it in advance. To fulfil the law is to keep it perfectly and to show its full meaning, as He did in the rest of Matthew 5. Heaven and earth have not passed away.", takeaway:"Jesus said “think not” to the claim that He abolished the law." },
  { id:"love", number:"06", eyebrow:"The motive", title:"If ye love me", refs:"John 14:15 · 1 John 5:3", verse:"If ye love me, keep my commandments.", body:"John, the same apostle who wrote Revelation, defines love for God this way: “For this is the love of God, that we keep his commandments: and his commandments are not grievous.” Obedience is not the price of salvation. It is the fruit of love.", takeaway:"Commandment keeping is how love answers Jesus." },
  { id:"faith", number:"07", eyebrow:"Grace and law together", title:"Does faith make the law void?", refs:"Romans 3:31 · Ephesians 2:8–10", verse:"Do we then make void the law through faith? God forbid: yea, we establish the law.", body:"We are saved “by grace … through faith … not of works”. Yet Paul immediately adds that we are “created in Christ Jesus unto good works”. Grace does not cancel the law. Grace forgives the transgressor and writes the law in the heart (Hebrews 8:10).", takeaway:"Saved by grace, never by works. Yet grace establishes the law." },
  { id:"cross", number:"08", eyebrow:"A common objection", title:"What was nailed to the cross?", refs:"Colossians 2:14 · Exodus 31:18", verse:"Blotting out the handwriting of ordinances that was against us, which was contrary to us, and took it out of the way, nailing it to his cross.", body:"Paul speaks of “the handwriting of ordinances”, the ceremonial system of sacrifices, feasts and shadows that pointed forward to Christ (Colossians 2:16–17). The Ten Commandments were not written by hand in a book. They were written by the finger of God on stone. Revelation still sees God’s people keeping them after the cross.", takeaway:"The shadows met their reality at the cross. God’s moral law did not end there." },
  { id:"sin", number:"09", eyebrow:"Why the law still matters", title:"How do we know what sin is?", refs:"1 John 3:4 · Romans 7:7, 12", verse:"Whosoever committeth sin transgresseth also the law: for sin is the transgression of the law.", body:"If the law were gone, sin would be gone too, and there would be nothing to be saved from. Paul says, “I had not known sin, but by the law.” The law is “holy, and just, and good”. It shows our need, and it sends us to Jesus.", takeaway:"No law, no sin. No sin, no need of a Saviour." },
  { id:"creator", number:"10", eyebrow:"The commandment under attack", title:"Worship Him that made heaven", refs:"Revelation 14:7 · Exodus 20:11 · Daniel 7:25", verse:"Fear God, and give glory to him; for the hour of his judgment is come: and worship him that made heaven, and earth, and the sea, and the fountains of waters.", body:"The first angel quotes the fourth commandment almost word for word: “For in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh day.” Daniel foretold a power that would “think to change times and laws”. The final conflict over worship centres on the very commandment that names God as Creator.", takeaway:"Revelation 14 calls the world back to the Creator of the fourth commandment." },
];

const reasons = [
  { ref:"Romans 7:12", text:"The law is holy, just and good. It is a transcript of God’s own character." },
  { ref:"1 John 3:4", text:"The law exposes sin, the very rebellion Satan began in heaven." },
  { ref:"Revelation 12:11", text:"Commandment keepers who trust Jesus are living proof that God’s law can be kept by His grace." },
];

export function DragonAndCommandmentsStudyContent() {
  const [open, setOpen] = useState<string[]>(["dragon"]);
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

  return <main className="nephilim-page dead-page law-page">
    <div className="nephilim-progress" aria-hidden="true"><span style={{ width:`${progress}%` }} /></div>

    <section className="dead-hero law-hero">
      <div className="nephilim-hero-content shell">
        <Link className="nephilim-back" href="/bible-studies">← Bible studies</Link>
        <p className="eyebrow light">Revelation 12 &amp; 14</p>
        <h1>The Dragon<br />&amp; the <em>Commandments</em></h1>
        <p className="nephilim-deck">If Jesus abolished God’s law, why does Satan make war on those who keep it?</p>
        <p className="nephilim-subtitle">A King James Bible study of Revelation 12:17 and 14:12, and what they reveal about God’s law at the end of time.</p>
        <a className="nephilim-begin" href="#begin">Begin with the question <span>↓</span></a>
      </div>
      <div className="nephilim-hero-note">Nobody fights what has been abolished<br /><span>Law · Grace · Faith of Jesus</span></div>
    </section>

    <section id="begin" className="nephilim-opening shell">
      <div><p className="eyebrow">The central question</p><h2>Abolished,<br /><em>or attacked?</em></h2></div>
      <div><p className="opening-lead">Many sincere Christians are taught that Jesus did away with the Ten Commandments.</p><p>But the last book of the Bible describes God’s people at the very end of time, and twice it names the same mark: they <strong>keep the commandments of God</strong>. Even more striking, Satan is furious with them for it. If the law no longer mattered, why would the devil spend his final wrath on those who keep it?</p></div>
    </section>

    <section className="dead-sleep-section law-verses-section"><div className="shell dead-sleep-grid"><blockquote>“And the dragon was wroth with the woman, and went to make war with the remnant of her seed, which keep the commandments of God, and have the testimony of Jesus Christ.”<span>Revelation 12:17</span></blockquote><blockquote>“Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus.”<span>Revelation 14:12</span></blockquote></div></section>

    <section className="evidence-section" id="evidence"><div className="shell"><div className="nephilim-section-head"><div><p className="eyebrow light">Follow the evidence</p><h2>Ten steps<br /><em>through Scripture.</em></h2></div><p>Open each passage. Every quotation is from the King James Version.</p></div><div className="evidence-list">{evidence.map((item) => { const isOpen = open.includes(item.id); return <article className={`evidence-item ${isOpen ? "is-open" : ""}`} key={item.id}><button onClick={() => toggle(item.id)} aria-expanded={isOpen} aria-controls={`evidence-${item.id}`}><span className="evidence-number">{item.number}</span><span className="evidence-title"><small>{item.eyebrow}</small><b>{item.title}</b><em>{item.refs}</em></span><span className="confidence confidence-explicit"><i />Scripture</span><span className="evidence-toggle">{isOpen ? "−" : "+"}</span></button>{isOpen && <div id={`evidence-${item.id}`} className="evidence-answer"><blockquote>“{item.verse}”</blockquote><div><p>{item.body}</p><strong>{item.takeaway}</strong></div></div>}</article>; })}</div></div></section>

    <section className="modern-section dead-deception"><div className="modern-glow" aria-hidden="true" /><div className="shell modern-inner"><div className="modern-title"><p className="eyebrow light">Why the dragon is angry</p><h2>He fights what<br /><em>still stands.</em></h2><p>Satan does not waste his wrath on something God has already set aside. He attacks God’s law because it is still God’s standard, and he attacks those who keep it because they are a living witness against his deception.</p></div><div className="dead-warning-row">{reasons.map((item) => <div key={item.ref}><small>{item.ref}</small><strong>{item.text}</strong></div>)}</div><div className="speculation-warning"><span>!</span><p><strong>Not salvation by works</strong>No one is saved by keeping the commandments. We are saved by grace through faith in Jesus alone (Ephesians 2:8–9). The remnant of Revelation keep the commandments <em>and</em> have the faith of Jesus, because those who are forgiven love the One who forgave them.</p></div></div></section>

    <section className="dead-sleep-section law-gc-section"><div className="shell dead-sleep-grid"><div><p className="eyebrow light">The Great Controversy · Chapter 25</p><h2>Two classes<br /><em>at the end.</em></h2><p>Ellen G. White saw Revelation 14 dividing the whole Christian world over this very question, God’s commandments or the commandments of men (Matthew 15:9).</p><Link className="law-inline-link" href="/great-controversy">Read The Great Controversy →</Link></div><blockquote>“In the issue of the contest, all Christendom will be divided into two great classes,—those who keep the commandments of God and the faith of Jesus, and those who worship the beast and his image and receive his mark.”<span>The Great Controversy, p. 450</span></blockquote></div></section>

    <section className="law-poster-section"><div className="shell law-poster-grid"><div><p className="eyebrow">Share the question</p><h2>Ask a friend<br /><em>this question.</em></h2><p>Download the poster and share it with someone who has been told the commandments were done away with. Let the verses speak for themselves.</p><a className="law-download" href="/assets/media/images/dragon-and-commandments-poster.jpg" download>Download the poster ↓</a></div><Image src="/assets/media/images/dragon-and-commandments-poster.jpg" alt="Poster: If Jesus abolished God's law, why does Satan make war on those who keep it? Revelation 12:17 and 14:12" width={1080} height={1350} sizes="(max-width: 800px) 100vw, 480px" /></div></section>

    <section className="final-section dead-final"><div className="shell final-inner"><p className="eyebrow light">The answer</p><h2>The law<br /><em>still stands.</em></h2><p>Jesus did not come to destroy the law but to fulfil it. In the last days His people keep God’s commandments by His grace, and Satan makes war on them for it.</p><blockquote>“Blessed are they that do his commandments, that they may have right to the tree of life, and may enter in through the gates into the city.”<span>Revelation 22:14</span></blockquote><Link href="/bible-studies/legalism-and-the-ten-commandments" className="next-study-card"><span><small>Next study</small><b>Legalism &amp;<br />the Ten Commandments</b></span><i>→</i></Link></div></section>

    <Footer />
  </main>;
}
