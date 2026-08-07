import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

const storyMovements = [
  { number: "1", title: "The Conflict Begins", text: "Lucifer’s rebellion in heaven began a conflict that would touch every life in the universe.", image: "/assets/media/images/great-controversy-war-in-heaven-v2.png" },
  { number: "2", title: "Faith Through History", text: "God’s people shine through every age—preserved, protected, and guided by His unfailing promises.", image: "/assets/media/images/revelation-bbb.png" },
  { number: "3", title: "Prophecy Unfolding Now", text: "Ancient signs echo in today’s world. Explore the prophecies, examine the evidence, and discover why they matter now.", image: "/assets/media/images/earth-from-space.png" },
  { number: "4", title: "The Final Crisis", text: "Truth is challenged. Fear, deception, and global turmoil test every heart. Scripture reveals how to stand firm.", image: "/assets/media/images/armageddon.png" },
  { number: "5", title: "Restoration", text: "Christ returns. Evil is overcome. A new heaven and earth are made new—forever.", image: "/assets/media/images/great-controversy-restoration-hero-v2.png" },
] as const;

const readerStories = [
  {
    name: "Andrea Zavattini",
    descriptor: "Sydney, Australia",
    quote: "The Great Controversy changed my life.",
    story: "I went from being Catholic to becoming a Christian believer in Jesus. After reading it, I understood the course of history, Lucifer’s plan for our time, and how Bible prophecy relates to the world today. The evidence was undeniable. It was an amazing, life-changing experience.",
    image: "/assets/media/images/andrea-testimony-approved.png",
  },
  {
    name: "Rodney Maller",
    descriptor: "Reader testimony",
    quote: "This book is like being ‘red pilled.’ Once you have read it, you never see either history or the future the same again.",
    story: "",
    image: "/assets/media/images/clifford-goldstein-silhouette.png",
  },
  {
    name: "John Bradshaw",
    descriptor: "A book refused twice—then finally opened",
    quote: "Outside of the Bible, no book has had a greater impact on my life.",
    story: "John was given the book as a teenager but barely read it. Years later, after two abandoned copies and a prayer for truth, a third copy arrived. This time he finished it—and says its message connected him with Jesus and began his earnest walk with God.",
    image: "/assets/media/images/john-bradshaw-silhouette.png",
    href: "https://adventistreview.org/news/how-the-great-controversy-changed-my-life/",
  },
] as const;

const resources = [
  { title: "Read Online", text: "Start reading instantly in your browser.", action: "Start Reading", href: "https://thegreatcontroversy.org/read/132.2", external: true },
  { title: "Listen Free", text: "Listen to the complete Great Controversy audiobook.", action: "Listen Now", href: "https://ellenwhiteaudio.org/great-controversy/", external: true },
  { title: "Download PDF", text: "Download the complete book directly as a PDF.", action: "Download Now", href: "https://ellenwhiteaudio.org/audio/en/gc/The%20Great%20Controversy.pdf", external: true },
  { title: "Request a Free Copy", text: "Ask us about receiving a printed gift copy.", action: "Request Now", href: "/contact?request=Physical%20gift%20by%20post#request-heading", primary: true },
] as const;

export function GreatControversyPageContent() {
  return (
    <main id="main-content" className="overflow-hidden bg-[#06101a] text-foreground">
      <section className="relative min-h-[700px] overflow-hidden pt-[82px] lg:min-h-[575px]" aria-labelledby="gc-title">
        <Image src="/assets/media/images/great-controversy-restoration-hero-v2.png" alt="A family walking through a restored landscape toward a radiant city" fill priority sizes="100vw" className="object-cover object-[72%_center] lg:object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,18,29,0.92)_0%,rgba(4,18,29,0.58)_39%,rgba(4,18,29,0.05)_78%)]" />
        <div className="relative z-10 mx-auto flex min-h-[618px] max-w-[1440px] flex-col justify-center px-6 py-14 sm:px-10 lg:min-h-[493px] lg:px-20 lg:pt-16">
          <h1 id="gc-title" className="max-w-[560px] font-serif text-[clamp(4.1rem,6.5vw,6.2rem)] font-medium leading-[0.9] tracking-[-0.025em]">The Great<br />Controversy</h1>
          <div className="mt-6 h-[3px] w-14 bg-accent" />
          <p className="mt-6 max-w-[390px] font-serif text-[clamp(1.2rem,1.65vw,1.55rem)] leading-[1.42] text-foreground/90">The conflict between Christ and Satan—from rebellion to restoration.</p>
          <Link href="https://thegreatcontroversy.org/read/132.2" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-14 w-fit items-center justify-center rounded-sm bg-accent px-10 font-sans text-xs font-semibold tracking-[0.16em] text-[#06101a] uppercase shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-accent-hover">Read the Book</Link>
        </div>
      </section>

      <section className="bg-[#f3ede3] px-6 py-14 text-[#12233a] sm:px-10 lg:px-12 lg:py-8" aria-labelledby="book-introduction">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[330px_1fr] lg:gap-16">
          <div className="relative mx-auto aspect-[300/350] w-full max-w-[330px] overflow-hidden"><Image src="/assets/media/images/great-controversy-book-mockup.png" alt="The Great Controversy book" fill sizes="(max-width: 1024px) 82vw, 330px" className="object-cover" /></div>
          <div className="max-w-[620px]">
            <p className="font-sans text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-[#a16e21]">A Worldwide Bestseller</p>
            <h2 id="book-introduction" className="mt-4 max-w-[570px] font-serif text-[clamp(3rem,4.5vw,4.65rem)] font-medium leading-[0.92]">The book people<br className="hidden sm:block" /> could not put down</h2>
            <p className="mt-6 max-w-[600px] font-serif text-base leading-[1.65] text-[#334052]">From the courts of heaven to the cross of Calvary, from the rise of nations to the hope of a new earth—<em>The Great Controversy</em> reveals the unfolding story of God’s love and the enemy’s lies.</p>
            <p className="mt-3 max-w-[600px] font-serif text-base leading-[1.65] text-[#334052]">More than prophecy, it is a call to understand our times in the light of eternity—and to anchor every truth in Scripture alone.</p>
            <Link href="https://thegreatcontroversy.org/read/132.2" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-sm bg-[#c79032] px-9 font-sans text-xs font-semibold tracking-[0.17em] text-[#101820] uppercase">Begin Reading</Link>
          </div>
        </div>
      </section>

      <section id="story-unfolds" className="bg-[#061729] text-[#f6e7c5]" aria-labelledby="story-heading">
        <h2 id="story-heading" className="sr-only">The Story Unfolds</h2>
        <div className="relative hidden aspect-[1997/787] w-full lg:block"><Image src="/assets/media/images/great-controversy-story-unfolds.png" alt="Five movements of The Great Controversy story, from the conflict in heaven to restoration" fill sizes="100vw" className="object-cover" /></div>
        <div className="mx-auto grid max-w-[720px] gap-12 px-6 py-20 lg:hidden">
          <p className="text-center font-sans text-xs tracking-[0.32em] uppercase text-accent">The Story Unfolds</p>
          {storyMovements.map((item) => <article key={item.number} className="grid gap-5 sm:grid-cols-[76px_1fr] sm:items-start"><div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent font-serif text-2xl text-accent">{item.number}</div><div><h3 className="font-serif text-3xl leading-tight">{item.title}</h3><div className="relative mt-4 aspect-[3/2] overflow-hidden"><Image src={item.image} alt="" fill sizes="(max-width: 640px) 100vw, 560px" className="object-cover" /></div><p className="mt-4 font-serif text-xl leading-relaxed text-[#f2e7d2]/85">{item.text}</p></div></article>)}
        </div>
      </section>

      <section className="bg-[#f3ede3] px-6 py-14 text-[#12233a] sm:px-10 lg:px-12 lg:py-8" aria-labelledby="reader-stories-heading">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center"><p className="font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#9b671d]">Real People. Real Stories.</p><h2 id="reader-stories-heading" className="mt-2 font-serif text-[clamp(2.1rem,3.3vw,3.25rem)] leading-none">They began skeptical. Then they kept reading.</h2></div>
          <div className="mt-8 grid gap-9 lg:grid-cols-3 lg:gap-0">
            {readerStories.map((reader, index) => <article key={reader.name} className={`grid gap-5 sm:grid-cols-[120px_1fr] lg:grid-cols-[112px_1fr] lg:px-7 ${index > 0 ? "lg:border-l lg:border-[#9b793d]/30" : ""}`}>
              <div className="relative h-28 w-28 overflow-hidden rounded-full bg-[#d6b979]"><Image src={reader.image} alt={`Portrait representing ${reader.name}`} fill sizes="112px" className="object-cover object-center" /></div>
              <div><span aria-hidden className="font-serif text-4xl leading-none text-[#b88428]">“</span><blockquote className="-mt-2 font-serif text-[1.05rem] leading-[1.35]">{reader.quote}</blockquote>{reader.story ? <p className="mt-3 font-serif text-[0.88rem] leading-[1.5] text-[#344050]">{reader.story}</p> : null}<p className="mt-4 font-sans text-[0.68rem] font-semibold tracking-[0.06em] uppercase">{reader.name}</p><p className="mt-1 font-sans text-[0.57rem] tracking-[0.11em] text-[#9b671d] uppercase">{reader.descriptor}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="relative min-h-[300px] overflow-hidden" aria-labelledby="scripture-standard">
        <Image src="/assets/media/images/great-controversy-bible-reading.png" alt="The Great Controversy beside an open Bible in warm morning light" fill sizes="100vw" className="object-cover object-[38%_center]" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto flex min-h-[300px] max-w-[1240px] items-center justify-end px-6 py-12 sm:px-10 lg:px-12"><div className="max-w-[560px] text-[#f5dfb0] [text-shadow:0_2px_12px_rgba(0,0,0,0.65)]"><h2 id="scripture-standard" className="font-serif text-[clamp(2.4rem,4vw,4.1rem)] leading-[1.02]">Read thoughtfully.<br />Compare faithfully.<br />Hold fast to what is true.</h2><p className="mt-3 font-sans text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#f0b64f]">Scripture is our final authority.</p></div></div>
      </section>

      <section className="bg-[#07192b] px-6 py-16 sm:px-10 lg:px-12 lg:py-20" aria-labelledby="choose-how"><div className="mx-auto max-w-[1320px]"><p id="choose-how" className="text-center font-sans text-sm font-semibold tracking-[0.22em] uppercase text-accent">Choose How to Begin</p><div className="mt-10 grid gap-px bg-accent/30 sm:grid-cols-2 lg:grid-cols-4">{resources.map((resource) => {
        const isExternal = "external" in resource && resource.external;
        const isPrimary = "primary" in resource && resource.primary;
        return <article key={resource.title} className="flex min-h-[250px] flex-col bg-[#07192b] px-7 py-8 text-center"><h3 className="font-sans text-sm font-semibold tracking-[0.13em] text-accent uppercase">{resource.title}</h3><p className="mt-5 flex-1 font-serif text-base leading-[1.55] text-muted">{resource.text}</p><Link href={resource.href} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`mt-7 inline-flex min-h-12 items-center justify-center px-6 font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase ${isPrimary ? "bg-accent text-[#06101a]" : "border border-accent text-accent"}`}>{resource.action}{isExternal ? " →" : ""}</Link></article>;
      })}</div></div></section>

      <section className="bg-[#f3ede3] text-[#12233a]" aria-labelledby="final-invitation"><div className="mx-auto grid min-h-[190px] max-w-[1440px] lg:grid-cols-[0.88fr_1.12fr]"><div className="relative min-h-[190px] overflow-hidden"><Image src="/assets/media/images/great-controversy-restoration-hero-v2.png" alt="A hopeful path toward restoration" fill sizes="(max-width: 1024px) 100vw, 640px" className="object-cover object-[72%_center]" /></div><div className="flex flex-col justify-center px-7 py-8 lg:px-12"><h2 id="final-invitation" className="font-serif text-[clamp(2.3rem,3.4vw,3.8rem)] leading-[0.98]">Perhaps your story<br />begins with the first page.</h2><p className="mt-3 max-w-xl font-serif text-sm leading-[1.5] text-[#485466]">This is more than a book—it is an invitation to discover God’s plan, find lasting hope, and become part of the greatest story ever told.</p><Link href="https://thegreatcontroversy.org/read/132.2" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-9 w-fit items-center justify-center bg-[#c79032] px-8 font-sans text-[0.62rem] font-semibold tracking-[0.15em] text-[#101820] uppercase">Open the Book</Link></div></div></section>
      <Footer />
    </main>
  );
}
