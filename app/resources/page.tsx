"use client";

import { useState } from "react";
import { BLOG_POSTS, type BlogCategory } from "@/lib/constants";
import BlogCard from "@/components/blog/BlogCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import ScrollAnimator from "@/components/layout/ScrollAnimator";

export default function ResourcesPage() {
  const [category, setCategory] = useState<BlogCategory | "All">("All");

  const filtered =
    category === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === category);

  return (
    <>
      <ScrollAnimator />

      {/* Hero Banner */}
      <section className="bg-forest pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            Resources &amp; Insights
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Evidence-based articles on hormone health, nutrition, lifestyle, and
            natural wellness — written in plain language.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-stone py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <CategoryFilter active={category} onChange={setCategory} />
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <div key={post.id} className="animate-on-scroll">
                <BlogCard
                  title={post.title}
                  preview={post.preview}
                  category={post.category}
                  date={post.date}
                  readTime={post.readTime}
                />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-clay text-lg">
                No articles in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
