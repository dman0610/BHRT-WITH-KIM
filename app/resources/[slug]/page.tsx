import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react";
import { ARTICLES } from "@/lib/articles";
import { BLOG_POSTS } from "@/lib/constants";
import ScrollAnimator from "@/components/layout/ScrollAnimator";
import CTASection from "@/components/sections/CTASection";

const CATEGORY_COLORS: Record<string, string> = {
  Hormones: "bg-lavender text-forest",
  Nutrition: "bg-mist text-forest",
  Lifestyle: "bg-peach/60 text-bark",
  Detox: "bg-sage/20 text-forest",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return {};
  return {
    title: `${article.title} — BHRT with Kim`,
    description: article.intro,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES[slug];

  if (!article) notFound();

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const badgeColor = CATEGORY_COLORS[article.category] ?? "bg-mist text-forest";

  return (
    <>
      <ScrollAnimator />

      {/* Hero */}
      <section className="bg-forest pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors mb-8"
          >
            <ArrowLeft className="size-4" />
            Back to Resources
          </Link>

          <span
            className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${badgeColor} mb-4`}
          >
            {article.category}
          </span>

          <h1 className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl leading-tight">
            {article.title}
          </h1>

          <p className="mt-4 text-lg text-white/75 leading-relaxed">
            {article.intro}
          </p>

          <div className="mt-6 flex items-center gap-5 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-stone py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className="
              text-bark leading-relaxed
              [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-forest [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:first:mt-0
              [&_p]:mb-5 [&_p]:text-base [&_p]:text-bark/90
              [&_ul]:mb-5 [&_ul]:pl-6 [&_ul]:space-y-2
              [&_li]:text-bark/90 [&_li]:list-disc
              [&_strong]:text-bark [&_strong]:font-semibold
              [&_em]:italic
              [&_blockquote]:border-l-4 [&_blockquote]:border-sage [&_blockquote]:pl-5 [&_blockquote]:py-1 [&_blockquote]:my-7 [&_blockquote]:italic [&_blockquote]:text-clay [&_blockquote]:text-lg
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Sources */}
          <div className="mt-14 pt-8 border-t border-stone-300">
            <h2 className="font-heading text-xl font-semibold text-forest mb-5">
              Sources &amp; Further Reading
            </h2>
            <ol className="space-y-3">
              {article.sources.map((source, i) => (
                <li key={i} className="flex gap-3 text-sm text-clay">
                  <span className="font-semibold text-forest shrink-0">
                    {i + 1}.
                  </span>
                  <span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest hover:text-moss underline underline-offset-2 inline-flex items-center gap-1"
                    >
                      {source.title}
                      <ExternalLink className="size-3 shrink-0" />
                    </a>
                    <span className="block text-clay/70 mt-0.5">
                      {source.journal}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Disclaimer */}
          <p className="mt-10 text-xs text-clay/60 leading-relaxed border-t border-stone-300 pt-6">
            This article is for informational purposes only and does not
            constitute medical advice. Always consult a qualified healthcare
            provider before making changes to your health regimen. Content
            researched and drafted with AI assistance; reviewed for accuracy.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
