import type { Metadata } from "next";
import { BibleStudiesPageContent } from "@/sections/bible-studies/BibleStudiesPageContent";

export const metadata: Metadata = {
  title: "Bible Studies | RevelationSigns",
  description:
    "Explore guided foundational Bible studies and a separate Daniel and Revelation prophecy journey.",
};

export default function BibleStudiesPage() {
  return <BibleStudiesPageContent />;
}
