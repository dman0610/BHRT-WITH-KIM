import Link from "next/link";
import Image from "next/image";
import type { BlogCategory } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  Hormones: "bg-lavender text-forest",
  Nutrition: "bg-mist text-forest",
  Lifestyle: "bg-peach/60 text-bark",
  Detox: "bg-sage/20 text-forest",
};

interface BlogCardProps {
  slug: string;
  title: string;
  preview: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  image?: string;
}

export default function BlogCard({
  slug,
  title,
  preview,
  category,
  date,
  readTime,
  image,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link href={`/resources/${slug}`} className="block group">
    <article className="flex flex-col rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
      <div className="aspect-[16/9] bg-mist relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-lavender/30 flex items-center justify-center">
            <span className="font-heading text-5xl text-forest/20">{category[0]}</span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge className={`${CATEGORY_COLORS[category]} text-xs font-medium px-3 py-1 rounded-full border-0`}>
            {category}
          </Badge>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6">
        <h3 className="font-heading text-lg font-medium text-bark leading-snug group-hover:text-forest transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-clay text-sm leading-relaxed line-clamp-3 flex-1">
          {preview}
        </p>
        <div className="mt-4 flex items-center gap-4 text-xs text-clay/70">
          <span className="flex items-center gap-1">
            <Calendar className="size-3" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3" />
            {readTime}
          </span>
        </div>
      </div>
    </article>
    </Link>
  );
}
