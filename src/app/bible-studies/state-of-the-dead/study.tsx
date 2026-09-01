"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

type Confidence = "explicit" | "debated" | "not-stated";

const evidence = [
  { id:"life", number:"01", eyebrow:"The creation pattern", title:"What is a living soul?", refs:"Genesis 2:7", verse:"The LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.", body:"Genesis does not say that God placed an independently conscious soul inside a body. The formed body plus God’s breath of life became a living soul—a complete living person.", takeaway:"Human beings are living souls; the verse does not say they possess naturally immortal souls.", confidence:"explicit" as Confidence },
  { id:"death", number:"02", eyebrow:"Creation reversed", title:"What happens at death?", refs:"Ecclesiastes 12:7 · Psalm 104:29", verse:"Then shall the dust return to the earth as it was: and the spirit shall return unto God who gave it.", body:"At death the body returns to dust and the life-giving spirit returns to God. Scripture describes the person’s earthly life as ended—not as continuing consciously in another realm through a naturally immortal component.", takeaway:"Death reverses the creation pattern: dust and the life-giving spirit separate.", confidence:"explicit" as Confidence },
  { id:"nothing", number:"03", eyebrow:"A direct statement", title:"What do the dead know?", refs:"Ecclesiastes 9:5–6, 10 · Psalm 146:4", verse:"For the living know that they shall die: but the dead know not any thing...", body:"The dead no longer participate in earthly life. Their love, hatred and envy have perished, their thoughts cease, and there is no work or knowledge in the grave. These are among Scripture’s clearest descriptions of the state of death.", takeaway:"The dead are not conscious observers of life on earth.", confidence:"explicit" as Confidence },
  { id:"sleep", number:"04", eyebrow:"The Bible’s recurring picture", title:"Why is death called sleep?", refs:"John 11:11–14 · Daniel 12:2 · 1 Thessalonians 4:13–17", verse:"Our friend Lazarus sleepeth; but I go, that I may awake him out of sleep.", body:"Jesus explicitly uses sleep as a figure for Lazarus’s death. Daniel and Paul use the same image because death is temporary from God’s perspective and will end in awakening at the resurrection.", takeaway:"Biblical death is an unconscious sleep awaiting Christ’s call.", confidence:"explicit" as Confidence },
  { id:"immortality", number:"05", eyebrow:"A gift, not a possession", title:"Who has immortality?", refs:"1 Timothy 6:15–16 · Romans 2:7 · 1 Corinthians 15:51–54", verse:"Who only hath immortality, dwelling in the light which no man can approach unto...", body:"God alone possesses immortality inherently. Human beings seek immortality, and the redeemed put it on when Christ raises and transforms them. Scripture presents immortality as God’s gift, not humanity’s natural condition.", takeaway:"The saved receive immortality at the resurrection.", confidence:"explicit" as Confidence },
  { id:"spirit", number:"06", eyebrow:"A frequently misunderstood word", title:"The spirit returns to God", refs:"Ecclesiastes 12:7 · James 2:26 · Job 27:3", verse:"The body without the spirit is dead...", body:"The biblical words translated “spirit” can describe breath, wind, disposition, or the life God gives, depending on context. Ecclesiastes does not say that a conscious personality travels to heaven; it says God reclaims the life that came from Him.", takeaway:"The returning spirit is God’s life-giving power, not explicitly a conscious ghost.", confidence:"explicit" as Confidence },
  { id:"thief", number:"07", eyebrow:"A difficult saying", title:"The thief on the cross", refs:"Luke 23:42–43 · John 20:17", verse:"Verily I say unto thee, To day shalt thou be with me in paradise.", body:"Ancient Greek manuscripts did not contain modern commas. The sentence may be punctuated as a promise made “today”—the dark day of crucifixion—that the thief would be with Christ in paradise. Jesus had not yet ascended to His Father on resurrection morning. Christians differ over the punctuation and its implications.", takeaway:"This passage must be read with Christ’s own statement after the resurrection.", confidence:"debated" as Confidence },
  { id:"rich-man", number:"08", eyebrow:"A parable examined", title:"The rich man and Lazarus", refs:"Luke 16:19–31", verse:"They have Moses and the prophets; let them hear them.", body:"Jesus uses a vivid reversal story familiar to His hearers to confront greed, unbelief and refusal to hear Scripture. Treating every narrative detail as a literal map of the afterlife creates serious difficulties, including embodied conversation across a visible gulf before the resurrection.", takeaway:"The parable’s stated burden is to hear God’s Word—not to define the anatomy of death.", confidence:"debated" as Confidence },
  { id:"endor", number:"09", eyebrow:"A forbidden encounter", title:"Saul and the woman of Endor", refs:"1 Samuel 28 · 1 Chronicles 10:13–14", verse:"Saul died for his transgression... and also for asking counsel of one that had a familiar spirit.", body:"God had refused to answer Saul, who then sought a forbidden medium. The apparition was identified as Samuel, but the text also condemns the encounter as consulting a familiar spirit. Some readers understand an exceptional appearance of Samuel; others see a demonic impersonation. Either way, the passage never authorizes communication with the dead.", takeaway:"A condemned occult encounter cannot overturn Scripture’s clear commands and teaching.", confidence:"debated" as Confidence },
  { id:"moses", number:"10", eyebrow:"The mount of glory", title:"Moses at the Transfiguration", refs:"Matthew 17:1–9 · Deuteronomy 34:5–6 · Jude 9", verse:"Behold, there appeared unto them Moses and Elias talking with him.", body:"Moses died and was buried; Elijah was taken alive. Jude’s reference to a dispute over Moses’ body leads many to infer that Moses was specially resurrected and therefore appeared bodily with Elijah. Scripture does not explicitly narrate that resurrection, so the inference should be labelled honestly.", takeaway:"The Transfiguration does not require a conscious disembodied Moses.", confidence:"debated" as Confidence },
  { id:"forbidden", number:"11", eyebrow:"A protective command", title:"Why is consulting the dead forbidden?", refs:"Deuteronomy 18:9–12 · Isaiah 8:19–20", verse:"Should not a people seek unto their God? for the living to the dead?", body:"God directs His people to seek Him and His revealed Word, never mediums, necromancers or familiar spirits. The prohibition protects worshippers from deception masquerading as privileged contact with departed loved ones.", takeaway:"God’s people test every spirit by Scripture and refuse attempts to contact the dead.", confidence:"explicit" as Confidence },
  { id:"resurrection", number:"12", eyebrow:"The Christian hope", title:"When will the dead live again?", refs:"John 5:28–29 · 11:25 · 1 Thessalonians 4:16–18", verse:"The dead in Christ shall rise first... and so shall we ever be with the Lord.", body:"The New Testament centres hope on Christ’s return and the resurrection. The dead hear His voice, rise, receive immortality, and are reunited with the living saints. Paul tells believers to comfort one another with this promise.", takeaway:"Our hope is not escaping death—it is Jesus raising the dead.", confidence:"explicit" as Confidence },
];

const verdicts: { claim:string; level:Confidence; label:string }[] = [
  { claim:"God formed humanity from dust and the breath of life", level:"explicit", label:"Explicit" },
  { claim:"The dead know nothing and do not participate in earthly life", level:"explicit", label:"Explicit" },
  { claim:"Scripture repeatedly describes death as sleep", level:"explicit", label:"Explicit" },
  { claim:"God alone possesses inherent immortality", level:"explicit", label:"Explicit" },
  { claim:"The redeemed receive immortality at the resurrection", level:"explicit", label:"Explicit" },
  { claim:"Every person possesses a naturally immortal soul", level:"not-stated", label:"Not stated" },
  { claim:"The spirit returning to God is a conscious personality", level:"not-stated", label:"Not stated" },
  { claim:"The thief entered paradise on the day of the crucifixion", level:"debated", label:"Punctuation debated" },
  { claim:"Moses was specially resurrected before the Transfiguration", level:"debated", label:"Plausible / inferred" },
  { claim:"The apparition at Endor was the conscious spirit of Samuel", level:"debated", label:"Debated" },
  { claim:"God forbids attempts to communicate with the dead", level:"explicit", label:"Explicit" },
  { claim:"Christ will raise the dead at His return", level:"explicit", label:"Explicit" },
];

const difficultPassages = [
  { number:"01", title:"The thief on the cross", ref:"Luke 23:43", question:"Where should the comma be placed?", answer:"Read the promise alongside John 20:17 and the absence of punctuation in the earliest Greek manuscripts." },
  { number:"02", title:"The rich man & Lazarus", ref:"Luke 16:19–31", question:"Doctrine or reversal parable?", answer:"Let the story’s own conclusion—hear Moses and the prophets—govern its purpose." },
  { number:"03", title:"The woman of Endor", ref:"1 Samuel 28", question:"Samuel or an impersonation?", answer:"Do not build permission from an encounter Scripture explicitly condemns." },
  { number:"04", title:"Moses on the mountain", ref:"Matthew 17:1–9", question:"Spirit or resurrected witness?", answer:"Jude 9 makes bodily resurrection a reasonable inference, though not an explicit narrative." },
];

function ConfidenceBadge({ level, children }: { level:Confidence; children:React.ReactNode }) {
  return <span className={`confidence confidence-${level}`}><i />{children}</span>;
}

export function StateOfTheDeadStudyContent() {
  const [open, setOpen] = useState<string[]>(["life"]);
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

  return <main className="nephilim-page dead-page">
    <div className="nephilim-progress" aria-hidden="true"><span style={{ width:`${progress}%` }} /></div>

    <section className="dead-hero">
      <div className="nephilim-hero-content shell">
        <Link className="nephilim-back" href="/bible-studies">← Bible studies</Link>
        <p className="eyebrow light">Death · Sleep · Resurrection</p>
        <h1>The State<br />of the <em>Dead</em></h1>
        <p className="nephilim-deck">Can the Dead Speak to the Living?</p>
        <p className="nephilim-subtitle">A Scripture-led investigation of the soul, spiritualism, difficult passages, and the resurrection hope.</p>
        <a className="nephilim-begin" href="#begin">Begin at creation <span>↓</span></a>
      </div>
      <div className="nephilim-hero-note">Death is not the final word<br /><span>Creation · Sleep · Awakening</span></div>
    </section>

    <section id="begin" className="nephilim-opening shell">
      <div><p className="eyebrow">The central question</p><h2>What is a<br /><em>human being?</em></h2></div>
      <div><p className="opening-lead">To understand death, begin where human life began.</p><p>Many ideas about death begin with philosophy, tradition, near-death testimony, or alleged contact with spirits. Scripture begins with creation: God formed a body from dust, breathed into it the breath of life, and the human being became a living soul.</p><div className="reading-key"><ConfidenceBadge level="explicit">Explicit</ConfidenceBadge><ConfidenceBadge level="debated">Plausible / debated</ConfidenceBadge><ConfidenceBadge level="not-stated">Not stated</ConfidenceBadge></div></div>
    </section>

    <section className="dead-formula-section"><div className="shell"><p className="eyebrow light">Genesis 2:7</p><h2>The anatomy of life</h2><div className="life-formula"><div><small>01</small><strong>Dust of the ground</strong><span>The formed body</span></div><b>+</b><div><small>02</small><strong>Breath of life</strong><span>Life from God</span></div><b>=</b><div className="formula-result"><small>03</small><strong>A living soul</strong><span>The complete living person</span></div></div><p className="formula-note">A soul is not shown entering the body. The body receives life—and the person <em>becomes</em> a living soul.</p></div></section>

    <section className="evidence-section" id="evidence"><div className="shell"><div className="nephilim-section-head"><div><p className="eyebrow light">Follow the evidence</p><h2>What does death<br /><em>actually mean?</em></h2></div><p>Open each passage. Difficult texts are read alongside the Bible’s clearest and most repeated statements.</p></div><div className="evidence-list">{evidence.map((item) => { const isOpen = open.includes(item.id); return <article className={`evidence-item ${isOpen ? "is-open" : ""}`} key={item.id}><button onClick={() => toggle(item.id)} aria-expanded={isOpen} aria-controls={`evidence-${item.id}`}><span className="evidence-number">{item.number}</span><span className="evidence-title"><small>{item.eyebrow}</small><b>{item.title}</b><em>{item.refs}</em></span><ConfidenceBadge level={item.confidence}>{item.confidence === "explicit" ? "Explicit" : "Debated"}</ConfidenceBadge><span className="evidence-toggle">{isOpen ? "−" : "+"}</span></button>{isOpen && <div id={`evidence-${item.id}`} className="evidence-answer"><blockquote>“{item.verse}”</blockquote><div><p>{item.body}</p><strong>{item.takeaway}</strong></div></div>}</article>; })}</div></div></section>

    <section className="dead-sleep-section"><div className="shell dead-sleep-grid"><div><p className="eyebrow light">Jesus names the condition</p><h2>“Lazarus<br /><em>sleepeth.”</em></h2><p>When the disciples misunderstand, Jesus speaks plainly: “Lazarus is dead.” Sleep preserves both truths Scripture emphasizes—the dead are unconscious, and death is temporary because Christ can awaken them.</p></div><blockquote>“Our friend Lazarus sleepeth; but I go, that I may awake him out of sleep.”<span>John 11:11</span></blockquote></div></section>

    <section className="dead-passages-section"><div className="shell"><div className="nephilim-section-head light-head"><div><p className="eyebrow">Read in context</p><h2>Four difficult<br /><em>passages.</em></h2></div><p>None should be ignored. None should be isolated from the Bible’s wider testimony.</p></div><div className="difficult-grid">{difficultPassages.map((item) => <article key={item.number}><span>{item.number}</span><small>{item.ref}</small><h3>{item.title}</h3><b>{item.question}</b><p>{item.answer}</p></article>)}</div></div></section>

    <section className="modern-section dead-deception"><div className="modern-glow" aria-hidden="true" /><div className="shell modern-inner"><div className="modern-title"><p className="eyebrow light">The danger of spiritualism</p><h2>Familiar voices.<br /><em>Unfamiliar spirits.</em></h2><p>If the dead are asleep, an apparition claiming to be a departed loved one is not who it claims to be. Emotional familiarity cannot replace the biblical test.</p></div><div className="dead-warning-row"><div><small>Deuteronomy 18:10–12</small><strong>Do not consult familiar spirits.</strong></div><div><small>Isaiah 8:19–20</small><strong>Seek God and His testimony.</strong></div><div><small>2 Corinthians 11:14</small><strong>Deception may appear as light.</strong></div></div><div className="speculation-warning"><span>!</span><p><strong>A pastoral boundary</strong>Grief deserves compassion, never exploitation. Scripture directs the bereaved toward Christ’s promised resurrection rather than mediums, séances, apparitions, or messages claiming to come from the dead.</p></div></div></section>

    <section className="dead-resurrection-section"><div className="shell"><div className="dead-resurrection-head"><p className="eyebrow">The Christian hope</p><h2>Not escape.<br /><em>Resurrection.</em></h2><p>Christ calls the dead from their graves. Immortality is bestowed, broken families are reunited, and death itself is finally destroyed.</p></div><div className="resurrection-line"><article><span>01</span><small>Now</small><h3>Death as sleep</h3><p>The dead rest without conscious participation in the world.</p></article><i>→</i><article><span>02</span><small>At Christ’s return</small><h3>The dead in Christ rise</h3><p>The trumpet sounds and believers are raised incorruptible.</p></article><i>→</i><article><span>03</span><small>Forever</small><h3>Always with the Lord</h3><p>The redeemed receive immortality and death is swallowed up in victory.</p></article></div><blockquote>“Wherefore comfort one another with these words.”<span>1 Thessalonians 4:18</span></blockquote></div></section>

    <section className="dead-two-resurrections"><div className="shell"><div className="nephilim-section-head"><div><p className="eyebrow light">John 5:28–29 · Revelation 20</p><h2>Two<br /><em>resurrections.</em></h2></div><p>All who are in the graves will hear Christ’s voice, but Scripture distinguishes their destinies.</p></div><div className="two-res-grid"><article><span>The first resurrection</span><h3>Resurrection of life</h3><p>Blessed and holy are those who rise with Christ’s redeemed at His coming.</p><small>1 Thessalonians 4:16 · Revelation 20:6</small></article><article><span>The final resurrection</span><h3>Resurrection of judgment</h3><p>The remaining dead rise after the thousand years to face the final judgment.</p><small>John 5:29 · Revelation 20:5, 11–15</small></article></div></div></section>

    <section className="verdict-section" id="verdict"><div className="shell"><div className="verdict-heading"><div><p className="eyebrow">The biblical verdict</p><h2>What can we<br /><em>actually say?</em></h2></div><div className="verdict-filters">{(["all","explicit","debated","not-stated"] as const).map((level) => <button className={filter === level ? "active" : ""} onClick={() => setFilter(level)} key={level}>{level === "all" ? "All claims" : level === "explicit" ? "Explicit" : level === "debated" ? "Debated" : "Not stated"}</button>)}</div></div><div className="verdict-table" aria-live="polite"><div className="verdict-row verdict-labels"><span>Claim</span><span>Biblical confidence</span></div>{visibleVerdicts.map((item) => <div className="verdict-row" key={item.claim}><strong>{item.claim}</strong><ConfidenceBadge level={item.level}>{item.label}</ConfidenceBadge></div>)}</div></div></section>

    <section className="dead-video-section"><div className="shell dead-video-grid"><div><p className="eyebrow light">Further testimony</p><h2>A Trip Into<br /><em>the Supernatural</em></h2><p>Roger Morneau speaks with Doug Batchelor about spiritualism, deception, and the authority of Christ. The video begins at the section you selected.</p><div className="dead-video-meta"><span>Amazing Facts</span><span>Begins at 17:43</span></div></div><div className="dead-video-card"><div className="dead-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/peDhv7pVqzQ?start=1063&rel=0" title="A Trip Into The Supernatural — Interview with Roger Morneau and Doug Batchelor" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><p>Interview with Roger Morneau and Doug Batchelor</p></div></div></section>

    <section className="final-section dead-final"><div className="shell final-inner"><p className="eyebrow light">Death does not have the last word</p><h2>Christ is the<br /><em>resurrection.</em></h2><p>The believer’s hope rests neither in an immortal soul nor in messages from the dead, but in the living Saviour who will call His people from their graves.</p><blockquote>“I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live.”<span>John 11:25</span></blockquote><div className="next-study-card next-study-coming"><span><small>Next study · Coming soon</small><b>Heaven, Hell &amp;<br />the Final Judgment</b></span><i>—</i></div></div></section>

    <Footer />
  </main>;
}
