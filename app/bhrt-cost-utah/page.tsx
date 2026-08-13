import type { Metadata } from "next";
import { bhrtCostUtah } from "@/lib/content/bhrt-cost-utah";
import ContentPageLayout from "@/components/sections/ContentPageLayout";

export const metadata: Metadata = {
  title: bhrtCostUtah.titleSegment,
  description: bhrtCostUtah.description,
  alternates: { canonical: `/${bhrtCostUtah.slug}` },
};

export default function BhrtCostUtahPage() {
  return <ContentPageLayout page={bhrtCostUtah} />;
}
