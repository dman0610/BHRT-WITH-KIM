"use client";

import { useState } from "react";
import { type BlogCategory } from "@/lib/constants";
import BlogCard from "@/components/blog/BlogCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import ScrollAnimator from "@/components/layout/ScrollAnimator";

export type ArticleSummary = {
  slug: string;
  title: string;
  intro: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  image: string;
};

/**
 * Category filter + article grid.
 *
 * Receives the full article list as a prop from the server page, so every card
 * is present in the server-rendered HTML. Previously the whole /resources page
 * was `"use client"`, which meant the article index was invisible to crawlers
 * that don't execute JavaScript — and it forced the page's metadata into a
 * stub layout. See docs/04-AI-VISIBILITY.md.
 */
export default function ArticleGrid({ posts }: { posts: ArticleSummary[] }) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">(
    "All"
  );

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <>
      <ScrollAnimator key={activeCategory} />

      <div className="mb-12">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <div key={post.slug} className="animate-on-scroll">
            <BlogCard
              slug={post.slug}
              title={post.title}
              preview={post.intro}
              category={post.category}
              date={post.date}
              readTime={post.readTime}
              image={post.image}
            />
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-clay-text text-lg">
            No articles in this category yet. Check back soon!
          </p>
        </div>
      )}
    </>
  );
}
