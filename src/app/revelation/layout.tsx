import Link from 'next/link';
import './revelation.css';
export default function RevelationLayout({children}:{children:React.ReactNode}) {
 return <div className="rv-page"><header className="rv-header"><Link className="rv-brand" href="/">Revelation<span>Signs</span><small>Discover · Understand · Be Prepared</small></Link><nav aria-label="Revelation study navigation"><Link href="/bible-studies">Bible Studies</Link><Link href="/daniel-revelation">Daniel &amp; Revelation</Link><Link href="/revelation">The Book of Revelation</Link></nav></header>{children}<footer className="rv-footer"><Link href="/revelation">The Book of Revelation</Link><p>Read the passage. Explore the symbols. Keep Jesus at the centre.</p><Link href="/daniel-revelation">Return to Daniel &amp; Revelation →</Link></footer></div>;
}
