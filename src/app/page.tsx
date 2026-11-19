import type { Metadata } from "next";
import { Hero } from "@/sections/home/Hero";
import { BeforeThereWasEarthSection } from "@/sections/home/BeforeThereWasEarthSection";
import { StarfallSection } from "@/sections/home/StarfallSection";
import { HistoryProphecySection } from "@/sections/home/HistoryProphecySection";
import { AmazingFactsSection } from "@/sections/home/AmazingFactsSection";
import { GreatControversyBookSection } from "@/sections/home/GreatControversyBookSection";
import { HopeSection } from "@/sections/home/HopeSection";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RevelationSigns",
  alternateName: ["Revelation Signs", "revelationsigns"],
  url: "https://revelationsigns.one",
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <BeforeThereWasEarthSection />
      <StarfallSection />
      <HistoryProphecySection />
      <AmazingFactsSection />
      <GreatControversyBookSection />
      <HopeSection />
      <Footer />
    </main>
  );
}
