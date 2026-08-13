import type { Metadata } from "next";
import { bhrtVsHrt } from "@/lib/content/bhrt-vs-hrt";
import ContentPageLayout from "@/components/sections/ContentPageLayout";

export const metadata: Metadata = {
  title: bhrtVsHrt.titleSegment,
  description: bhrtVsHrt.description,
  alternates: { canonical: `/${bhrtVsHrt.slug}` },
};

export default function Page() {
  return <ContentPageLayout page={bhrtVsHrt} />;
}
