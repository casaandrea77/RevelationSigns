import type { Metadata } from "next";
import { StarfallPageContent } from "@/sections/starfall/StarfallPageContent";

export const metadata: Metadata = {
  title: "Starfall Documentary | RevelationSigns",
  description:
    "Explore ancient mysteries, extraordinary encounters, and the biblical principles for testing supernatural claims.",
};

export default function StarfallPage() {
  return <StarfallPageContent />;
}
