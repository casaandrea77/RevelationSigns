import "@/styles/media-pages.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { TotalOnslaughtVideoLibrary } from "@/sections/lecture-series/TotalOnslaughtVideoLibrary";

export const metadata: Metadata = {
  title: "Total Onslaught by Walter Veith | RevelationSigns",
  description:
    "Watch Walter Veith's Total Onslaught lecture series examining Bible prophecy, history, spiritual deception, and the great controversy.",
};

export default function TotalOnslaughtPage() {
  return (
    <main className="media-bright min-h-screen overflow-hidden text-foreground">
      <section className="media-hero relative border-b border-accent/20 px-6 pb-20 pt-36 sm:px-10 lg:px-12 lg:pb-28 lg:pt-44" aria-labelledby="total-onslaught-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,211,79,0.2),transparent_48%),linear-gradient(155deg,#184b68_0%,#001e3b_80%)]" />
        <div className="relative mx-auto max-w-[1200px]">
          <Link href="/documentaries" className="font-sans text-[0.68rem] font-semibold tracking-[0.2em] text-accent uppercase transition-colors hover:text-[#f0c878]">← Documentaries &amp; Series</Link>
          <p className="mt-16 font-sans text-xs tracking-[0.34em] text-accent uppercase">Lecture Series · Walter Veith</p>
          <h1 id="total-onslaught-title" className="mt-5 max-w-5xl font-serif text-[clamp(4rem,9vw,8.5rem)] font-light leading-[0.83] tracking-[-0.025em]">Total<br /><em className="text-[#ffd34f]">Onslaught</em></h1>
          <p className="mt-8 max-w-2xl font-sans text-base leading-[1.85] text-foreground/75 sm:text-lg">A wide-ranging Bible lecture series examining prophecy, history, modern spiritual deceptions, and the authenticity of Scripture. Watch each presentation prayerfully and compare every teaching with the Bible.</p>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28" aria-labelledby="watch-series-heading">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 grid gap-8 border-b border-accent/20 pb-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] text-accent uppercase">Complete Playlist</p>
              <h2 id="watch-series-heading" className="mt-4 font-serif text-[clamp(2.8rem,5vw,4.6rem)] font-light leading-[0.95]">Watch every presentation</h2>
            </div>
            <p className="max-w-xl font-sans text-sm leading-[1.8] text-muted sm:text-base lg:justify-self-end">All 35 currently available sermons are presented below in their playlist order. Choose any presentation and it will play here on RevelationSigns.</p>
          </div>
          <TotalOnslaughtVideoLibrary />
        </div>
      </section>

      <section className="border-y border-accent/20 bg-[#e9eff4] px-6 py-16 sm:px-10 lg:px-12 lg:py-20" aria-labelledby="study-carefully-heading">
        <div className="mx-auto grid max-w-[1000px] gap-6 text-center">
          <p className="font-sans text-xs tracking-[0.3em] text-accent uppercase">A thoughtful approach</p>
          <h2 id="study-carefully-heading" className="font-serif text-[clamp(2.5rem,5vw,4.2rem)] font-light">“Prove all things; hold fast that which is good.”</h2>
          <p className="font-sans text-sm tracking-[0.14em] text-foreground/60 uppercase">1 Thessalonians 5:21</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
