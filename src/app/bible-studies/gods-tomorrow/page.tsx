import type { Metadata } from "next";
import { FoundationStudyLesson } from "@/components/bible-studies/FoundationStudyLesson";
import { foundationStudies } from "@/data/foundationStudies";

export const metadata: Metadata = { title: "God’s Tomorrow | RevelationSigns Bible Studies", description: "Discover the Bible’s promise of a new earth where God dwells with humanity and death, sorrow and pain are gone forever." };
export default function Page() { return <FoundationStudyLesson study={foundationStudies["gods-tomorrow"]} />; }
