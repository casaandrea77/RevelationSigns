import type { Metadata } from "next";
import { GreatControversyPageContent } from "@/sections/great-controversy/GreatControversyPageContent";

export const metadata: Metadata = {
  title: "The Great Controversy | RevelationSigns",
  description:
    "Explore the central themes of The Great Controversy and access free reading, audiobook, and download editions.",
};

export default function GreatControversyPage() {
  return <GreatControversyPageContent />;
}
