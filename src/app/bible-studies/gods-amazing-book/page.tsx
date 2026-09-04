import type { Metadata } from "next";
import StudyOne from "./lesson";

export const metadata: Metadata = {
  title: "Is There Anything Left You Can Trust? | RevelationSigns Bible Studies",
  description: "Amazing Facts Study Guide 1: evidence for the Bible’s inspiration, accuracy, unity, transforming power, and fulfilled prophecy.",
  alternates: { canonical: "/bible-studies/gods-amazing-book" },
};

export default function Page() {
  return <StudyOne />;
}
