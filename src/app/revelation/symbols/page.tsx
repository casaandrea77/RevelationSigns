import type { Metadata } from 'next';
import Link from 'next/link';
import SymbolGuide from '../symbol-guide';

export const metadata: Metadata = {
  title: 'Revelation’s Symbols Explained | RevelationSigns',
  description: 'Explore illustrated explanations of Revelation’s symbols, with simple meanings and supporting Bible passages.',
};

export default function SymbolsPage() {
  return <main>
    <nav className="rv-shell rv-breadcrumb" aria-label="Return to the Bible study">
      <Link href="/revelation">← The Book of Revelation</Link>
      <Link href="/revelation/chapter-1">Continue with Chapter 1 →</Link>
    </nav>
    <div className="rv-shell rv-symbol-page-title"><h1>Revelation’s symbols</h1><p>A reference to open whenever you meet a picture in the Bible study.</p></div>
    <SymbolGuide/>
    <div className="rv-shell rv-next"><Link className="rv-button" href="/revelation#chapter-journey">Return to the Bible study →</Link><Link href="/revelation/chapter-1">Read Chapter 1 →</Link></div>
  </main>;
}
