import { Hero } from "@/sections/home/Hero";
import { BeforeThereWasEarthSection } from "@/sections/home/BeforeThereWasEarthSection";
import { StarfallSection } from "@/sections/home/StarfallSection";
import { HistoryProphecySection } from "@/sections/home/HistoryProphecySection";
import { AmazingFactsSection } from "@/sections/home/AmazingFactsSection";
import { GreatControversyBookSection } from "@/sections/home/GreatControversyBookSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <BeforeThereWasEarthSection />
      <StarfallSection />
      <HistoryProphecySection />
      <AmazingFactsSection />
      <GreatControversyBookSection />
      <Footer />
    </main>
  );
}
