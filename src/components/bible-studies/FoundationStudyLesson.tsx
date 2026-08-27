"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import type { FoundationStudy } from "@/data/foundationStudies";

export function FoundationStudyLesson({ study }: { study: FoundationStudy }) {
  const { open, complete, reflection, setComplete, setReflection, toggle } = useStudyProgress(study.slug);
  const progress = Math.round((open.length / study.questions.length) * 100);

  return <main className="lesson-page pt-[82px]">
    <div className="lesson-progress"><span style={{ width: `${complete ? 100 : progress}%` }} /></div>
    <section className="lesson-hero image-lesson-hero shell">
      <div className={`lesson-title-row lesson-title-photo ${study.photoClass}`}>
        <div>
          <Link className="back-link" href="/bible-studies">← All studies</Link>
          <p className="eyebrow">Study {study.number} · Foundations</p>
          <h1>{study.title[0]}<br /><em>{study.title[1]}</em></h1>
        </div>
        <div className="lesson-seal"><span>{study.number}</span><small>{study.questions.length} questions</small></div>
      </div>
      <div className="lesson-intro">
        <p className="lead">{study.introLead}</p>
        {study.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>

    <section className="lesson-body shell">
      <aside className="lesson-aside">
        <div><p className="aside-label">Your progress</p><strong>{complete ? 100 : progress}%</strong><div className="aside-meter"><span style={{ width: `${complete ? 100 : progress}%` }} /></div><small>{complete ? "Study complete" : `${open.length} of ${study.questions.length} passages opened`}</small></div>
        <div><p className="aside-label">{study.asideTitle}</p><p>{study.asideText}</p></div>
      </aside>
      <div className="questions">
        <div className="questions-heading"><p className="eyebrow">{study.questionsEyebrow}</p><h2>{study.questionsTitle[0]}<br />{study.questionsTitle[1]}</h2></div>
        {study.questions.map((item, index) => {
          const isOpen = open.includes(index);
          return <article className={`question ${isOpen ? "open" : ""}`} key={`${item.ref}-${index}`}>
            <button onClick={() => toggle(index)} aria-expanded={isOpen}>
              <span className="question-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="question-main"><small>{item.ref}</small><b>{item.q}</b></span>
              <span className="question-toggle">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <div className="answer"><blockquote>“{item.verse}”</blockquote><p>{item.answer}</p><Link className="answer-version" href="/bible-studies/gods-amazing-book#why-kjv">King James Version · Why the KJV?</Link></div>}
          </article>;
        })}

        <aside className="callout"><div className="callout-icon">✦</div><div><p className="eyebrow">{study.calloutEyebrow}</p><h3>{study.calloutTitle[0]}<br />{study.calloutTitle[1]}</h3><p>{study.calloutText}</p></div></aside>

        <section className="summary">
          <p className="eyebrow">Study summary</p><h2>{study.summaryTitle[0]}<br /><em>{study.summaryTitle[1]}</em></h2>
          <p>{study.summaryText}</p>
          <label className="reflection"><span>Your reflection</span><textarea value={reflection} onChange={(event) => setReflection(event.target.value)} placeholder={study.reflectionPrompt} /></label>
          <button className={`complete-button ${complete ? "completed" : ""}`} onClick={() => setComplete(!complete)}><span>{complete ? "✓" : "○"}</span>{complete ? "Study completed" : "Mark study as complete"}</button>
        </section>
      </div>
    </section>

    <nav className="lesson-nav shell" aria-label="Study navigation">
      <Link href={study.previous.href}><span>←</span><small>Previous</small><b>{study.previous.title}</b></Link>
      <div className="lesson-nav-center"><span>Study {study.previous.number}</span><i></i><span>Study {study.number}</span></div>
      {study.next ? <Link href={study.next.href}><small>Next</small><b>{study.next.title}</b><span>→</span></Link> : <Link href="/bible-studies"><small>Complete series</small><b>All Bible Studies</b><span>→</span></Link>}
    </nav>
    <Footer />
  </main>;
}
