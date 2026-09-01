import type { Metadata } from "next";
import { NephilimStudyContent } from "./study";

export const metadata: Metadata = {
  title: "The Nephilim: Angels, Giants, or Men? | RevelationSigns",
  description:
    "A Scripture-led investigation of Genesis 6, the sons of God, biblical giants, 1 Enoch, and modern Nephilim claims.",
  alternates: {
    canonical: "/bible-studies/prophecy/nephilim",
  },
};

export default function NephilimStudyPage() {
  return <NephilimStudyContent />;
}
