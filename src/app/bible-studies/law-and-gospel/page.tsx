import type { Metadata } from "next";
import { FoundationStudyLesson } from "@/components/bible-studies/FoundationStudyLesson";
import { foundationStudies } from "@/data/foundationStudies";

export const metadata: Metadata = { title: "Law & Gospel | RevelationSigns Bible Studies", description: "See how God’s law and the gospel work together—revealing sin, leading to Christ and shaping a life of love." };
export default function Page() { return <FoundationStudyLesson study={foundationStudies["law-and-gospel"]} />; }
