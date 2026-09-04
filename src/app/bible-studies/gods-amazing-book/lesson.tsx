import { AmazingFactsFacsimile } from "@/components/bible-studies/AmazingFactsFacsimile";
import { amazingFactsStudyGuides } from "@/data/amazingFactsStudyGuides";

export default function StudyOne() {
  return <AmazingFactsFacsimile guide={amazingFactsStudyGuides[0]} />;
}
