import type { Metadata } from "next";
import { FoundationStudyLesson } from "@/components/bible-studies/FoundationStudyLesson";
import { foundationStudies } from "@/data/foundationStudies";

export const metadata: Metadata = { title: "A New Person | RevelationSigns Bible Studies", description: "Explore the new birth, conversion, baptism and the transforming work of the Holy Spirit." };
export default function Page() { return <FoundationStudyLesson study={foundationStudies["a-new-person"]} />; }
