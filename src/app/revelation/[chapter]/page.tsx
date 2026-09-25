import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ChapterStudy from '../chapter-study';
import studies from '../studies.json';
import { chapters } from '../data';

export const dynamicParams = false;
export function generateStaticParams() {
  return studies.map(({ number }) => ({ chapter: `chapter-${number}` }));
}
function findStudy(slug: string) {
  return studies.find(study => slug === `chapter-${study.number}`);
}
type Props = { params: Promise<{ chapter: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = findStudy((await params).chapter);
  if (!study) return {};
  return {
    title: `Revelation ${study.number} — ${chapters[study.number - 1][0]} | RevelationSigns`,
    description: `${chapters[study.number - 1][1]} Read the full chapter, explore its symbols and reflect with this illustrated Bible study.`,
  };
}
export default async function ChapterPage({ params }: Props) {
  const study = findStudy((await params).chapter);
  if (!study) notFound();
  return <ChapterStudy study={study} />;
}
