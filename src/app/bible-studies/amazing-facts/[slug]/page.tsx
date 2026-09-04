import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AmazingFactsFacsimile } from "@/components/bible-studies/AmazingFactsFacsimile";
import { amazingFactsStudyGuides, getAmazingFactsGuideBySlug } from "@/data/amazingFactsStudyGuides";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return amazingFactsStudyGuides.slice(1).map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getAmazingFactsGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: `${guide.title} | Amazing Facts Study Guide ${guide.number}`,
    description: `Read the complete illustrated Amazing Facts Study Guide ${guide.number}: ${guide.title}`,
    alternates: { canonical: `/bible-studies/amazing-facts/${guide.slug}` },
  };
}

export default async function AmazingFactsStudyGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getAmazingFactsGuideBySlug(slug);
  if (!guide || guide.number === 1) notFound();

  return <AmazingFactsFacsimile guide={guide} />;
}
