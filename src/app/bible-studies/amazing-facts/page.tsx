import type { Metadata } from "next";
import { BibleStudiesPageContent } from "@/sections/bible-studies/BibleStudiesPageContent";

export const metadata: Metadata = {
  title: "Amazing Facts Bible Studies | RevelationSigns",
  description: "Explore all 27 original illustrated Amazing Facts Bible study guides.",
};

export default function Page() {
  return <BibleStudiesPageContent collection="amazing-facts" />;
}
