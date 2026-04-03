import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Insights — BHRT with Kim",
  description:
    "Evidence-based articles on hormone health, nutrition, lifestyle, and natural wellness for women in peri-menopause and post-menopause.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
