import type { Metadata } from "next";
import StudyFive from "./lesson";

export const metadata: Metadata = {
  title: "The Problem of Sin | RevelationSigns Bible Studies",
  description: "Let Scripture define sin, examine God's commandments, and discover the hope offered in Christ.",
};

export default function Page() {
  return <StudyFive />;
}
