import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

const pages = Array.from({ length: 16 }, (_, index) => ({
  number: index + 1,
  src: `/assets/media/images/amazing-facts-study-1/pages/page-${String(index + 1).padStart(2, "0")}.jpg`,
}));

export default function StudyOne() {
  return <main className="af-facsimile-page pt-[82px]">
    <header className="af-facsimile-header">
      <div className="shell">
        <Link className="back-link" href="/bible-studies">← All studies</Link>
        <p>Amazing Facts · Study Guide 1</p>
        <h1>Is There Anything Left<br />You Can Trust?</h1>
        <div className="af-facsimile-actions">
          <a href="#study-guide-pages">Read the original guide ↓</a>
          <a href="https://manna.amazingfacts.org/amazingfacts/specialproj/offerdownloads/docs/sg1.pdf" target="_blank" rel="noreferrer">Open original PDF ↗</a>
        </div>
      </div>
    </header>

    <section id="study-guide-pages" className="af-facsimile-reader" aria-label="Amazing Facts Study Guide 1 original pages">
      {pages.map((page) => {
        const pageClassName = [
          "af-facsimile-sheet",
          page.number === 14 ? "af-facsimile-sheet-address-hidden" : "",
          page.number === 16 ? "af-facsimile-sheet-summary-only" : "",
        ].filter(Boolean).join(" ");

        return <figure key={page.number} className={pageClassName}>
          <Image
            src={page.src}
            alt={`Amazing Facts Study Guide 1, original page ${page.number}`}
            width={1032}
            height={1527}
            sizes="(max-width: 900px) 100vw, 920px"
            priority={page.number <= 2}
          />
          {page.number === 14 && <span className="af-facsimile-address-mask" aria-hidden="true" />}
        </figure>;
      })}
    </section>

    <nav className="af-facsimile-nav shell" aria-label="Study navigation">
      <Link href="/bible-studies">← All Bible Studies</Link>
      <Link href="/bible-studies/prophecy/daniel-2">Next Study: God Unfolds the Future →</Link>
    </nav>
    <Footer />
  </main>;
}
