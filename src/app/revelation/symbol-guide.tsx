import Image from 'next/image';
import Link from 'next/link';
import { bibleUrl } from './data';
const examples = [
 {art:'lampstands',alt:'Cinematic illustration of seven golden lampstands with a church community gathered behind them',picture:'Seven lampstands',meaning:'Seven churches',verse:'Revelation 1:20',quote:'the seven candlesticks which thou sawest are the seven churches.',help:'These were seven real church communities: Ephesus, Smyrna, Pergamos, Thyatira, Sardis, Philadelphia and Laodicea. Read their messages in Revelation 2–3. “Candlesticks” means lampstands.'},
 {art:'stars',alt:'Cinematic illustration of seven bright stars above a hillside of church gathering places',picture:'Seven stars',meaning:'The angels of the seven churches',verse:'Revelation 1:20',quote:'The seven stars are the angels of the seven churches',help:'The verse gives this meaning. Who these angels are is a further question to study.'},
 {art:'dragon',alt:'Cinematic illustration of a red dragon on a rocky hill, representing the enemy in the vision',picture:'The dragon',meaning:'The Devil, or Satan',verse:'Revelation 12:9',quote:'that old serpent, called the Devil, and Satan',help:'The verse names the enemy pictured by the dragon.'},
 {art:'waters',alt:'Cinematic illustration linking blue waters with a crowd of people from many nations',picture:'The waters in this vision',meaning:'Peoples, nations and languages',verse:'Revelation 17:15',quote:'are peoples, and multitudes, and nations, and tongues.',help:'“Tongues” means languages here. Read the whole verse to see which waters it explains.'},
 {art:'woman-sun',alt:'A woman clothed in sunlight, with the moon beneath her feet and a crown of stars',picture:'The woman clothed with the sun',meaning:'A picture of God’s faithful people',verse:'Revelation 12:1–6,17; Genesis 37:9–10',quote:'a woman clothed with the sun, and the moon under her feet',help:'Interpretation from related passages: her child is the Messiah, and her other children keep God’s commandments and hold the testimony of Jesus. The sun, moon and stars also recall Joseph’s dream about Israel.',interpretation:true},
 {art:'woman-babylon',alt:'A woman in purple and scarlet holding a golden cup before an ancient city',picture:'The woman called Babylon',meaning:'The great city that rules over kings',verse:'Revelation 17:4–5,18',quote:'the woman which thou sawest is that great city',help:'The angel directly identifies her as a city. Historicist interpretation also sees an unfaithful religious and political system, often associated with papal Rome. This is an interpretation, not a judgment about individual believers.'},
 {art:'seven-mountains',alt:'Seven mountain peaks across an ancient landscape',picture:'Seven heads · seven mountains',meaning:'Mountains — and also seven kings',verse:'Revelation 17:9–11',quote:'The seven heads are seven mountains',help:'Read the next verse too: the angel also speaks of seven kings. How these kings fit history is interpreted differently; the image alone does not settle that question.'},
 {art:'symbol-horns',folder:'daniel-revelation',alt:'An illustration of prophetic horns representing ruling powers',picture:'Ten horns',meaning:'Ten kings',verse:'Revelation 17:12',quote:'the ten horns which thou sawest are ten kings',help:'A horn can picture a ruler’s power. Here the angel tells us plainly what these ten horns represent.'},
 {art:'symbol-lion',folder:'daniel-revelation',alt:'A winged lion from Daniel’s prophetic vision',picture:'Prophetic beasts',meaning:'Kings and kingdoms in Daniel’s vision',verse:'Daniel 7:17,23; Revelation 13:1–2',quote:'These great beasts, which are four, are four kings',help:'Daniel 7:23 also calls the fourth beast a kingdom. Revelation reuses the lion, bear and leopard imagery. Identifying particular powers requires studying the whole passage.'},
 {art:'new-earth',folder:'daniel-revelation',alt:'An illustration of the beautiful New Jerusalem and people living in peace',picture:'The bride · New Jerusalem',meaning:'The holy city, home with God',verse:'Revelation 21:9–10',quote:'I will shew thee the bride, the Lamb’s wife',help:'The angel then shows John the holy city, New Jerusalem. The picture is about belonging to God and living with Him. Read verses 2–3 as well.'},

 {art:'lamb',alt:'A white lamb in dawn light, with a distant cross',picture:'The Lamb',meaning:'Jesus, who gave His life for us',verse:'John 1:29; Revelation 5:6–9',quote:'Behold the Lamb of God, which taketh away the sin of the world.',help:'John 1:29 names Jesus as the Lamb of God. In Revelation 5, the Lamb was slain and redeems people through His blood.'},
 {art:'incense',alt:'Incense rising from a golden bowl',picture:'Golden bowls of incense',meaning:'The prayers of God’s people',verse:'Revelation 5:8; 8:3–4',quote:'golden vials full of odours, which are the prayers of saints',help:'“Vials” means bowls, and “odours” refers to incense. This picture helps us see that God hears His people when they pray.'},
 {art:'linen',alt:'Clean white linen robes in warm light',picture:'Clean, white linen',meaning:'The righteousness of God’s people',verse:'Revelation 19:8',quote:'the fine linen is the righteousness of saints',help:'The bride is given clean clothing. It pictures the righteous life of God’s people; “saints” means His holy people.'},

];
const simpleMeanings: Record<string, string> = {
  lampstands: 'Each lampstand stands for a church: a group of people who follow Jesus. Seven lampstands represent seven churches.',
  stars: 'Jesus says the seven stars stand for the angels of the seven churches.',
  dragon: 'The dragon stands for Satan. He is the enemy who tries to lead people away from God.',
  waters: 'In this vision, the waters stand for people from many countries who speak different languages.',
  'woman-sun': 'We understand this woman as a picture of God’s faithful people. This meaning comes from comparing Bible passages.',
  'woman-babylon': 'The angel says this woman stands for a great city called Babylon. It has power over the kings of the earth.',
  'seven-mountains': 'The angel gives two clues about the seven heads: seven mountains and seven kings. We need to read both clues together.',
  'symbol-horns': 'The ten horns stand for ten kings. The angel explains this directly.',
  'symbol-lion': 'In Daniel’s vision, the beasts stand for kings and kingdoms. Revelation uses some of the same animal pictures.',
  'new-earth': 'The angel promises to show John the bride. Then he shows him New Jerusalem: the holy city where God lives with His people.',
  lamb: 'The Lamb stands for Jesus. He gave His life to save us from sin.',
  incense: 'The incense stands for the prayers of God’s people. The picture reminds us that God hears our prayers.',
  linen: 'The clean white linen pictures the righteous lives of God’s people: living in a way that is right before God.',
};

export function SymbolLinks() {
  return <section className="rv-symbol-links rv-shell" id="bible-symbols" aria-labelledby="symbol-links-title">
    <div className="rv-symbol-links-heading"><div><p className="rv-eyebrow">A picture guide</p><h2 id="symbol-links-title">Explore Revelation’s symbols</h2><p>Choose a picture to open its meaning and Bible verses, or continue with the study below.</p></div><Link className="rv-text-link" href="/revelation/symbols">Open the full symbol guide →</Link></div>
    <nav className="rv-symbol-thumbnails" aria-label="Open a symbol explanation">
      {examples.map(item => <Link key={item.art} href={`/revelation/symbols#symbol-${item.art}`}>
        <Image src={'folder' in item ? `/media/images/${item.folder}/${item.art}.webp` : `/media/images/revelation/symbol-${item.art}-realistic.webp`} alt="" width={144} height={96} sizes="112px" />
        <span>{item.picture}</span>
      </Link>)}
    </nav>
  </section>;
}

export default function SymbolGuide({ compact = false }: { compact?: boolean }) {
  return (
    <section className="rv-symbol-guide rv-shell" id="bible-symbols" aria-labelledby="bible-symbols-title">
      <div className="rv-symbol-banner">
        <p className="rv-eyebrow">Before you begin · The Bible explains the Bible</p>
        <h2 id="bible-symbols-title">Your illustrated guide to Revelation’s symbols.</h2>
        <p className="rv-guide-intro">A symbol is a picture that stands for something. Start with the picture, read its meaning, then look at the Bible verse.</p>
      </div>
      {!compact && <div className="rv-symbol-introduction">
        <h3>Revelation tells its message through pictures.</h3>
        <p>The book of Revelation is full of symbols. John sees visions with lampstands, stars, animals, women and cities. These pictures help tell the story of Jesus, His people and the struggle between good and evil.</p>
        <h3>What is a symbol?</h3>
        <p>A symbol is something we can picture that stands for something else. For example, a heart can stand for love. In Revelation, a lampstand can stand for a church.</p>
        <div className="rv-intro-example">
          <strong>A simple example</strong>
          <p>John sees <strong>seven lampstands</strong>. Jesus explains that they stand for <strong>seven churches</strong>. The picture has a meaning, and Jesus gives us the answer.</p>
          <a className="rv-reference" href={bibleUrl('Revelation 1:20')} target="_blank" rel="noreferrer">Read Revelation 1:20 ↗<span className="rv-sr-only"> (opens in a new tab)</span></a>
        </div>
        <h3>How do we understand the pictures?</h3>
        <p>We let the Bible help explain the Bible. Sometimes the same chapter tells us what a symbol means. Other times, we compare it with another Bible passage, such as a vision in Daniel.</p>
        <p>We do not need to guess or treat every detail as a secret code. Revelation also contains direct messages and promises. Read the words around each picture, and keep the main message in view: <strong>Jesus overcomes evil and brings His people home to God.</strong></p>
        <p className="rv-intro-invitation">Start with the pictures below. We will explain them one at a time, with the Bible verses beside them. Where an explanation is an interpretation, we will say so.</p>
      </div>}
      <ol className="rv-reading-steps">
        <li><strong>1. See the picture</strong><span>What does John see?</span></li>
        <li><strong>2. Understand the meaning</strong><span>Read the simple explanation.</span></li>
        <li><strong>3. Check the Bible</strong><span>Read the verse for yourself.</span></li>
      </ol>
      {!compact && <nav className="rv-symbol-jumps" aria-label="Find a Bible symbol">
        {examples.map(item => <a key={item.art} href={`#symbol-${item.art}`}>{item.picture}</a>)}
      </nav>}
      <div className="rv-symbol-examples">
        {(compact ? examples.slice(0, 2) : examples).map((item, index) => (
          <article key={item.picture} id={`symbol-${item.art}`}>
            <Image className="rv-symbol-art"
              src={'folder' in item ? `/media/images/${item.folder}/${item.art}.webp` : `/media/images/revelation/symbol-${item.art}-realistic.webp`}
              alt={item.alt} width={1536} height={1024} sizes="(max-width:700px) 92vw, 450px" />
            <div className="rv-symbol-story">
              <span className="rv-label">Symbol {String(index + 1).padStart(2, '0')}</span>
              <h3>{item.picture}</h3>
              <div className="rv-plain-meaning">
                <p className="rv-meaning-heading">{'interpretation' in item ? 'How we understand it' : 'What it means'}</p>
                <p>{simpleMeanings[item.art]}</p>
              </div>
              {'interpretation' in item && <p className="rv-interpretation-label">Interpretation · based on related Bible passages</p>}
              <div className="rv-verse-proof">
                <p className="rv-meaning-heading">Read it in the Bible</p>
                <blockquote>“{item.quote}”</blockquote>
                <a className="rv-reference" href={bibleUrl(item.verse)} target="_blank" rel="noreferrer">
                  {item.verse} · KJV ↗<span className="rv-sr-only"> (opens in a new tab)</span>
                </a>
              </div>
              <details className="rv-symbol-more">
                <summary>Read more<span className="rv-sr-only"> about {item.picture.toLowerCase()}</span></summary>
                <p>{item.help}</p>
              </details>
            </div>
          </article>
        ))}
      </div>
      {compact && <p className="rv-guide-note">These two pictures are explained in this chapter. <Link href="/revelation/symbols">See more examples in the symbol guide →</Link></p>}
      <p className="rv-guide-note"><strong>Keep the verse beside the picture.</strong> These illustrations highlight a symbol; they do not show every detail of each vision. A symbol can have a different meaning in another passage. When we give an interpretation, we label it and show the verses we compare.</p>
    </section>
  );
}
