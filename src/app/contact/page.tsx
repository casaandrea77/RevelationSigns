import type { Metadata } from "next";
import { ContactPageContent } from "@/sections/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact & Free Resources | RevelationSigns",
  description:
    "Contact RevelationSigns to request Bible studies, a free digital gift, prayer, or help with a Bible question.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
