import type { Metadata } from "next";
import { BibleStudiesPageContent } from "@/sections/bible-studies/BibleStudiesPageContent";

export const metadata: Metadata = {
  title: "Faith & the Christian Life | RevelationSigns Bible Studies",
  description: "Explore Jesus, salvation, Christian living, and the great themes of Scripture.",
};

export default function Page() {
  return <BibleStudiesPageContent collection="general" />;
}
