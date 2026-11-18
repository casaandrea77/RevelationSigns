import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://revelationsigns.one";
const siteDescription =
  "Bible prophecy documentaries and Scripture-based studies on Daniel, Revelation and The Great Controversy by Ellen G. White.";

export const metadata: Metadata = {
  // Absolute base for canonical and social links, so Google treats
  // revelationsigns.one (not the vercel.app copy) as the real site.
  metadataBase: new URL(siteUrl),
  title: {
    default: "RevelationSigns | Bible Prophecy, Daniel & Revelation",
    template: "%s",
  },
  description: siteDescription,
  applicationName: "RevelationSigns",
  keywords: [
    "RevelationSigns",
    "Revelation Signs",
    "Bible prophecy",
    "Book of Revelation",
    "Book of Daniel",
    "Great Controversy",
    "Ellen G. White",
    "Bible studies",
    "prophecy documentaries",
  ],
  openGraph: {
    type: "website",
    siteName: "RevelationSigns",
    title: "RevelationSigns | Bible Prophecy, Daniel & Revelation",
    description: siteDescription,
    locale: "en",
    images: [{ url: "/assets/logo/RevelationSigns_Logo_Transparent.png", alt: "RevelationSigns" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RevelationSigns | Bible Prophecy, Daniel & Revelation",
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
        {/* HighLevel (LeadConnector) chat widget with the RevelationSigns Conversation AI concierge */}
        <Script
          id="highlevel-chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6aef9fd8e90adeca20fc34a8"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
