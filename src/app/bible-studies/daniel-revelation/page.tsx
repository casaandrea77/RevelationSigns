import type { Metadata } from "next";
import { BibleStudiesPageContent } from "@/sections/bible-studies/BibleStudiesPageContent";

export const metadata: Metadata = {
  title: "Daniel & Revelation Series | RevelationSigns",
  description: "Study Daniel and Revelation, from earthly kingdoms to the return of Jesus.",
};

export default function Page() {
  return <BibleStudiesPageContent collection="daniel-revelation" />;
}
