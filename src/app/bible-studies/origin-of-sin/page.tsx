import type { Metadata } from "next";
import StudyThree from "./lesson";

export const metadata: Metadata = {
  title: "The Origin of Sin | RevelationSigns Bible Studies",
  description: "Follow the biblical account of where evil began, how it entered our world, and how it will end.",
};

export default function Page() {
  return <StudyThree />;
}
