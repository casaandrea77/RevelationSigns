import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { amazingFactsGuideHref, amazingFactsItalianHref, amazingFactsStudyGuides, type AmazingFactsStudyGuide } from "@/data/amazingFactsStudyGuides";

const pageNumbers = Array.from({ length: 16 }, (_, index) => index + 1);

const finalPageCleanup: Record<number, { crop: number; mask: { x: number; y: number; w: number; h: number } }> = {
  1: { crop: 47.98, mask: { x: 24.60, y: 45.23, w: 48.19, h: 1.68 } },
  2: { crop: 50.84, mask: { x: 16.95, y: 46.25, w: 25.91, h: 3.52 } },
  3: { crop: 47.98, mask: { x: 24.60, y: 45.23, w: 48.19, h: 1.68 } },
  4: { crop: 51.98, mask: { x: 56.31, y: 47.39, w: 25.91, h: 3.52 } },
  5: { crop: 50.57, mask: { x: 24.60, y: 47.82, w: 48.19, h: 1.68 } },
  6: { crop: 47.98, mask: { x: 24.60, y: 45.23, w: 48.19, h: 1.68 } },
  7: { crop: 47.68, mask: { x: 24.01, y: 44.93, w: 48.19, h: 1.68 } },
  8: { crop: 47.83, mask: { x: 24.60, y: 45.08, w: 48.19, h: 1.68 } },
  9: { crop: 49.95, mask: { x: 54.84, y: 45.37, w: 25.91, h: 3.52 } },
  10: { crop: 47.68, mask: { x: 24.60, y: 44.93, w: 48.19, h: 1.68 } },
  11: { crop: 46.42, mask: { x: 25.51, y: 43.67, w: 48.19, h: 1.68 } },
  12: { crop: 52.41, mask: { x: 22.99, y: 49.66, w: 48.19, h: 1.68 } },
  13: { crop: 47.68, mask: { x: 24.60, y: 44.93, w: 48.19, h: 1.68 } },
  14: { crop: 47.68, mask: { x: 24.60, y: 44.93, w: 48.19, h: 1.68 } },
  15: { crop: 49.93, mask: { x: 25.70, y: 47.18, w: 48.19, h: 1.68 } },
  16: { crop: 51.44, mask: { x: 17.30, y: 46.67, w: 25.91, h: 3.70 } },
  17: { crop: 48.06, mask: { x: 55.45, y: 43.28, w: 25.91, h: 3.70 } },
  18: { crop: 47.68, mask: { x: 24.60, y: 44.93, w: 48.19, h: 1.68 } },
  19: { crop: 50.28, mask: { x: 24.60, y: 47.53, w: 48.19, h: 1.68 } },
  20: { crop: 47.39, mask: { x: 24.00, y: 44.64, w: 48.19, h: 1.68 } },
  21: { crop: 51.37, mask: { x: 24.00, y: 48.62, w: 48.19, h: 1.68 } },
  22: { crop: 50.28, mask: { x: 24.60, y: 47.53, w: 48.19, h: 1.68 } },
  23: { crop: 50.14, mask: { x: 17.26, y: 45.55, w: 25.91, h: 3.52 } },
  24: { crop: 56.95, mask: { x: 24.00, y: 54.19, w: 48.19, h: 1.68 } },
  25: { crop: 48.60, mask: { x: 24.60, y: 45.84, w: 48.19, h: 1.68 } },
  26: { crop: 49.22, mask: { x: 54.21, y: 44.45, w: 25.91, h: 3.70 } },
  27: { crop: 49.13, mask: { x: 55.36, y: 44.69, w: 25.91, h: 3.36 } },
};

export function AmazingFactsFacsimile({ guide }: { guide: AmazingFactsStudyGuide }) {
  const currentIndex = amazingFactsStudyGuides.findIndex((item) => item.number === guide.number);
  const previousGuide = currentIndex > 0 ? amazingFactsStudyGuides[currentIndex - 1] : undefined;
  const nextGuide = currentIndex < amazingFactsStudyGuides.length - 1 ? amazingFactsStudyGuides[currentIndex + 1] : undefined;
  const imageWidth = guide.number === 1 ? 1032 : 860;
  const imageHeight = guide.number === 1 ? 1527 : 1273;
  const cleanup = finalPageCleanup[guide.number];
  const summaryStyle = { aspectRatio: `${imageWidth} / ${imageHeight * cleanup.crop / 100}` };
  const instructionMaskStyle = {
    left: `${cleanup.mask.x}%`,
    top: `${cleanup.mask.y / cleanup.crop * 100}%`,
    width: `${cleanup.mask.w}%`,
    height: `${cleanup.mask.h / cleanup.crop * 100}%`,
  };

  return <main className="af-facsimile-page pt-[82px]">
    <header className="af-facsimile-header">
      <div className="shell">
        <Link className="back-link" href="/bible-studies#amazing-facts-guides">← All 27 study guides</Link>
        <p>Amazing Facts · Study Guide {guide.number}</p>
        <h1>{guide.title}</h1>
        <div className="af-facsimile-actions">
          <a href="#study-guide-pages">Read the original guide ↓</a>
          <a href={amazingFactsItalianHref(guide)} hrefLang="it" target="_blank" rel="noreferrer">Italiano · Traduzione ufficiale ↗</a>
          <a href={`https://manna.amazingfacts.org/amazingfacts/specialproj/offerdownloads/docs/sg${guide.number}.pdf`} target="_blank" rel="noreferrer">Open original PDF ↗</a>
        </div>
      </div>
    </header>

    <section id="study-guide-pages" className="af-facsimile-reader" aria-label={`Amazing Facts Study Guide ${guide.number} original pages`}>
      {pageNumbers.map((pageNumber) => {
        const pageClassName = [
          "af-facsimile-sheet",
          pageNumber === 14 ? "af-facsimile-sheet-address-hidden" : "",
          pageNumber === 16 ? "af-facsimile-sheet-summary-only" : "",
        ].filter(Boolean).join(" ");
        const paddedPage = String(pageNumber).padStart(2, "0");

        return <figure key={pageNumber} className={pageClassName} style={pageNumber === 16 ? summaryStyle : undefined}>
          <Image
            src={`/assets/media/images/amazing-facts-study-${guide.number}/pages/page-${paddedPage}.jpg`}
            alt={`Amazing Facts Study Guide ${guide.number}, original page ${pageNumber}`}
            width={imageWidth}
            height={imageHeight}
            sizes="(max-width: 900px) 100vw, 920px"
            priority={pageNumber <= 2}
          />
          {pageNumber === 14 && <span className="af-facsimile-address-mask" aria-hidden="true" />}
          {pageNumber === 16 && <span className="af-facsimile-instruction-mask" style={instructionMaskStyle} aria-hidden="true" />}
        </figure>;
      })}
    </section>

    <nav className="af-facsimile-nav shell" aria-label="Amazing Facts study guide navigation">
      {previousGuide
        ? <Link href={amazingFactsGuideHref(previousGuide)}>← Study {previousGuide.number}: {previousGuide.title}</Link>
        : <Link href="/bible-studies#amazing-facts-guides">← All Bible Studies</Link>}
      {nextGuide
        ? <Link href={amazingFactsGuideHref(nextGuide)}>Study {nextGuide.number}: {nextGuide.title} →</Link>
        : <Link href="/bible-studies#amazing-facts-guides">All 27 Study Guides →</Link>}
    </nav>
    <Footer />
  </main>;
}
