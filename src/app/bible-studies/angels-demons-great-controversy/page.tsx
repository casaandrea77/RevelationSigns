import type { Metadata } from "next";
import { AngelsDemonsStudyContent } from "./study";

export const metadata: Metadata = {
  title: "Angels, Demons & the Great Controversy | RevelationSigns",
  description:
    "A Scripture-led study of holy angels, fallen angels, demons, spiritual deception, Christ’s victory, and the final end of evil.",
  alternates: {
    canonical: "/bible-studies/angels-demons-great-controversy",
  },
};

export default function AngelsDemonsStudyPage() {
  return <AngelsDemonsStudyContent />;
}
