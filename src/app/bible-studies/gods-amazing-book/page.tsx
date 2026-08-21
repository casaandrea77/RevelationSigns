import type { Metadata } from "next";
import StudyOne from "./lesson";

export const metadata: Metadata = {
  title: "God's Amazing Book | RevelationSigns Bible Studies",
  description: "Explore the Bible's claims about inspiration, fulfilled prophecy, truth, and hope.",
};

export default function Page() {
  return <StudyOne />;
}
