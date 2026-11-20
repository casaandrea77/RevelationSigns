import type { Metadata } from "next";
import { DragonAndCommandmentsStudyContent } from "./study";

export const metadata: Metadata = {
  title: "The Dragon & the Commandments: Revelation 12 and 14 | RevelationSigns",
  description:
    "If Jesus abolished God's law, why does Satan make war on those who keep the commandments of God? A KJV study of Revelation 12:17 and 14:12.",
  alternates: {
    canonical: "/bible-studies/the-dragon-and-the-commandments",
  },
  openGraph: {
    title: "Nobody fights a law that is gone. So why is the dragon at war with commandment keepers?",
    description: "A KJV study of Revelation 12:17 and 14:12.",
    images: [{ url: "/assets/media/images/dragon-and-commandments-poster.jpg", width: 1080, height: 1350 }],
  },
};

export default function DragonAndCommandmentsStudyPage() {
  return <DragonAndCommandmentsStudyContent />;
}
