"use client";

import { BLOG_CATEGORIES, type BlogCategory } from "@/lib/constants";

interface CategoryFilterProps {
  active: BlogCategory | "All";
  onChange: (category: BlogCategory | "All") => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  const categories: (BlogCategory | "All")[] = ["All", ...BLOG_CATEGORIES];

  return (
    <div className="flex flex-wrap gap-2 justify-center" role="tablist" aria-label="Filter articles by category">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
            active === cat
              ? "bg-forest text-white border-forest"
              : "bg-white text-bark border-stone hover:border-sage"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
