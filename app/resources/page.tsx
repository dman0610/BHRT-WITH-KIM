import type { Metadata } from "next";
import { ARTICLES } from "@/lib/articles";
import ArticleGrid, { type ArticleSummary } from "@/components/blog/ArticleGrid";

export const metadata: Metadata = {
  title: "Hormone Health Resources",
  description:
    "Researched articles on hormone health, nutrition, sleep, and perimenopause from BHRT with Kim, with sources cited from PubMed, NAMS, and NIH.",
  alternates: { canonical: "/resources" },
};

const ALL_POSTS: ArticleSummary[] = Object.entries(ARTICLES).map(
  ([slug, data]) => ({
    slug,
    title: data.title,
    intro: data.intro,
    category: data.category,
    date: data.date,
    readTime: data.readTime,
    image: data.image,
  })
);

/**
 * Server component. The category filter lives in a client child so the article
 * index is present in server-rendered HTML — metadata is in this file rather
 * than a stub layout as a result.
 */
export default function ResourcesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-forest pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            Hormone Health Resources
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Articles on hormone health, nutrition, sleep, and perimenopause —
            written in plain language, with sources cited.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-stone py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ArticleGrid posts={ALL_POSTS} />
        </div>
      </section>
    </>
  );
}
