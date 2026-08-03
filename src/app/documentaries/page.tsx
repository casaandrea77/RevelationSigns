import type { Metadata } from "next";
import { DocumentariesPageContent } from "@/sections/documentaries/DocumentariesPageContent";

export const metadata: Metadata = {
  title: "Bible Documentaries | RevelationSigns",
  description:
    "Watch Bible-based documentaries exploring the origin of evil, Revelation, Armageddon, and the great controversy.",
};

export default function DocumentariesPage() {
  return <DocumentariesPageContent />;
}
