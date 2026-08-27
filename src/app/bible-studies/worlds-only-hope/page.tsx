import type { Metadata } from "next";
import { FoundationStudyLesson } from "@/components/bible-studies/FoundationStudyLesson";
import { foundationStudies } from "@/data/foundationStudies";

export const metadata: Metadata = { title: "The World’s Only Hope | RevelationSigns Bible Studies", description: "Study the visible return of Jesus, the resurrection and the blessed hope of the Second Coming." };
export default function Page() { return <FoundationStudyLesson study={foundationStudies["worlds-only-hope"]} />; }
