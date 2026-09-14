import type { Metadata } from "next";
import { HistoricalBibleStudy } from "@/sections/bible-studies/history/HistoricalBibleStudy";
import { historyStudies } from "@/sections/bible-studies/history/studies";
export const metadata: Metadata = { title: "Legalism & the Ten Commandments | RevelationSigns", description: "Where did legalism begin—and what is obedience for?" };
export default function Page() { return <HistoricalBibleStudy study={historyStudies.legalism} />; }
