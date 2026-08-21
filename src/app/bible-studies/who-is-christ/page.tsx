import type { Metadata } from "next";
import StudyFour from "./lesson";

export const metadata: Metadata = {
  title: "Who Is Christ? | RevelationSigns Bible Studies",
  description: "Consider the Bible's evidence about the identity, character, and saving mission of Jesus Christ.",
};

export default function Page() {
  return <StudyFour />;
}
