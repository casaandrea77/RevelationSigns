import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import QuestionExplorer from "./question-explorer";
import "./questions.css";

export const metadata: Metadata = {
  title: "Bible Questions — Honest Answers | RevelationSigns",
  description: "Seek. Compare. Discover the truth. Explore questions about the Bible, prophecy, history, science and life with clearly identified evidence and interpretations.",
  alternates: { canonical: "https://revelationsigns.one/questions" },
};

export default function QuestionsPage() {
  return <>
    <main className="faq-page">
      <section className="faq-hero">
        <div className="faq-shell faq-hero-content">
          <p className="faq-eyebrow">Questions that matter</p>
          <h1>Bible Questions<br/><em>Honest Answers</em></h1>
          <p className="faq-tagline">Real questions. Clear, Bible-based answers.</p>
          <p className="faq-intro">Explore life’s biggest questions about God, the Bible, religion, history, science and the future. Search, compare and discover the truth for yourself.</p>
          <div className="faq-scripture"><blockquote>“Prove all things; hold fast that which is good.”</blockquote><a href="https://www.biblegateway.com/passage/?search=1+Thessalonians+5%3A21&version=KJV">1 Thessalonians 5:21 · KJV</a></div>
          <p className="faq-motto">Seek.<br/>Compare.<br/>Discover the truth.</p>
        </div>
      </section>
      <section className="faq-shell faq-explore" id="explore" aria-label="Explore Bible questions"><QuestionExplorer /></section>
      <section className="faq-method"><div className="faq-shell"><h2>Evidence first. Room to think.</h2><div className="faq-method-grid">
        <div><h3>Biblical evidence</h3><p>Read each passage in context and compare related texts.</p></div>
        <div><h3>Historical evidence</h3><p>Check original sources, dates and what they actually establish.</p></div>
        <div><h3>Interpretations</h3><p>Distinguish the text from denominational and individual readings.</p></div>
        <div><h3>Disputed claims</h3><p>Identify uncertainty. An intriguing question is not proof of its premise.</p></div>
      </div></div></section>
      <section className="faq-cta"><div className="faq-shell faq-cta-inner"><div><h2>The Truth is Worth Finding</h2><p>Ask. Search. Compare. Discover.</p><Link className="faq-study-button" href="/bible-studies">Explore Bible Studies <span aria-hidden="true">→</span></Link></div><blockquote>“And ye shall know the truth,<br/>and the truth shall make you free.”<cite>John 8:32 · KJV</cite></blockquote></div></section>
    </main>
    <Footer />
  </>;
}
