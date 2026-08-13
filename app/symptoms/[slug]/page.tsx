import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SYMPTOM_PAGES, getSymptomPage, symptomSlug } from "@/lib/content";
import ContentPageLayout from "@/components/sections/ContentPageLayout";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SYMPTOM_PAGES.map((page) => ({ slug: symptomSlug(page) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getSymptomPage((await params).slug);
  if (!page) return {};
  return {
    title: page.titleSegment,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function SymptomPage({ params }: Props) {
  const page = getSymptomPage((await params).slug);
  if (!page) notFound();
  return <ContentPageLayout page={page} />;
}
