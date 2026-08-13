import type { Metadata } from "next";
import { findAHormoneProvider } from "@/lib/content/find-a-hormone-provider";
import ContentPageLayout from "@/components/sections/ContentPageLayout";

export const metadata: Metadata = {
  title: findAHormoneProvider.titleSegment,
  description: findAHormoneProvider.description,
  alternates: { canonical: `/${findAHormoneProvider.slug}` },
};

export default function Page() {
  return <ContentPageLayout page={findAHormoneProvider} />;
}
