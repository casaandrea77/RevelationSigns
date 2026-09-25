import type { MetadataRoute } from "next";
import {
  amazingFactsGuideHref,
  amazingFactsStudyGuides,
} from "@/data/amazingFactsStudyGuides";

const baseUrl = "https://revelationsigns.one";

const mainRoutes = [
  "",
  "/bible-studies",
  "/questions",
  "/bible-studies/amazing-facts",
  "/bible-studies/general",
  "/bible-studies/daniel-revelation",
  "/revelation",
  "/revelation/symbols",
  "/documentaries",
  "/starfall",
  "/great-controversy",
  "/lecture-series/total-onslaught",
  "/contact",
];

const studyRoutes = [
  ...Array.from({ length: 22 }, (_, i) => `/revelation/chapter-${i + 1}`),
  "/bible-studies/legalism-and-the-ten-commandments",
  "/bible-studies/rapture-and-seven-years-of-tribulation",
  "/bible-studies/prophecy/when-michael-stands-up",
  "/bible-studies/prophecy/daniel-2",
  "/bible-studies/origin-of-sin",
  "/bible-studies/who-is-christ",
  "/bible-studies/problem-of-sin",
  "/bible-studies/sin-and-its-cure",
  "/bible-studies/a-new-person",
  "/bible-studies/law-and-gospel",
  "/bible-studies/worlds-only-hope",
  "/bible-studies/gods-tomorrow",
  "/bible-studies/prophecy/nephilim",
  "/bible-studies/angels-demons-great-controversy",
  "/bible-studies/state-of-the-dead",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages: MetadataRoute.Sitemap = mainRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/bible-studies" ? 0.9 : 0.8,
  }));

  const studyPages: MetadataRoute.Sitemap = [
    ...studyRoutes,
    ...amazingFactsStudyGuides.map(amazingFactsGuideHref),
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...mainPages, ...studyPages];
}
