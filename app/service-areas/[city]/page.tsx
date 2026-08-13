import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_AREA_PAGES, getServiceArea, areaSlug } from "@/lib/content";
import { localServiceSchema } from "@/lib/schema";
import ContentPageLayout from "@/components/sections/ContentPageLayout";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return SERVICE_AREA_PAGES.map((page) => ({ city: areaSlug(page) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getServiceArea((await params).city);
  if (!page) return {};
  return {
    title: page.titleSegment,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function ServiceAreaPage({ params }: Props) {
  const page = getServiceArea((await params).city);
  if (!page) notFound();

  return (
    <ContentPageLayout
      page={page}
      // City-scoped Service is the whole structured-data reason a city page
      // exists. Still no address — see lib/schema.ts.
      extraSchema={[
        localServiceSchema({
          city: page.city,
          description: page.description,
          path: `/${page.slug}`,
        }),
      ]}
    />
  );
}
