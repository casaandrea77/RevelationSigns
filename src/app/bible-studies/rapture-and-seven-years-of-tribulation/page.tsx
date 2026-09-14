import type { Metadata } from "next";
import { HistoricalBibleStudy } from "@/sections/bible-studies/history/HistoricalBibleStudy";
import { historyStudies } from "@/sections/bible-studies/history/studies";
export const metadata: Metadata = { title: "The Rapture & Seven Years of Tribulation | RevelationSigns", description: "What does Scripture say—and where did the timeline begin?" };
export default function Page() { return <HistoricalBibleStudy study={historyStudies.rapture} />; }
