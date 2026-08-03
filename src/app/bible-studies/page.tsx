import type { Metadata } from "next";
import { BibleStudiesPageContent } from "@/sections/bible-studies/BibleStudiesPageContent";

export const metadata: Metadata = {
  title: "Bible Studies | RevelationSigns",
  description:
    "Explore Daniel 2, Bible prophecy, the origin of evil, the Second Coming, and other Scripture-based studies.",
};

export default function BibleStudiesPage() {
  return <BibleStudiesPageContent />;
}
