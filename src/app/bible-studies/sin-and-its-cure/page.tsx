import type { Metadata } from "next";
import { FoundationStudyLesson } from "@/components/bible-studies/FoundationStudyLesson";
import { foundationStudies } from "@/data/foundationStudies";

export const metadata: Metadata = { title: "Sin and Its Cure | RevelationSigns Bible Studies", description: "Discover the Bible’s remedy for sin through the cross, grace, repentance, forgiveness and a renewed heart." };
export default function Page() { return <FoundationStudyLesson study={foundationStudies["sin-and-its-cure"]} />; }
