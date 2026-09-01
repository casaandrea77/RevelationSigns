import type { Metadata } from "next";
import { StateOfTheDeadStudyContent } from "./study";

export const metadata: Metadata = {
  title: "The State of the Dead: Can the Dead Speak to the Living? | RevelationSigns",
  description:
    "A Scripture-led study of death, the soul, difficult Bible passages, spiritualism, and the Christian hope of resurrection.",
  alternates: {
    canonical: "/bible-studies/state-of-the-dead",
  },
};

export default function StateOfTheDeadStudyPage() {
  return <StateOfTheDeadStudyContent />;
}
