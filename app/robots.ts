import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * AI crawlers, allowed explicitly.
 *
 * Most are permitted by default anyway — listing them is insurance against a
 * future blanket Disallow and makes the intent auditable.
 *
 * Google-Extended and Applebot-Extended are AI *training* opt-out tokens.
 * Allowing them is a deliberate choice: it lets this content ground Gemini and
 * Apple Intelligence answers. For a business whose strategy includes being
 * cited by AI assistants, that is the point. See docs/04-AI-VISIBILITY.md.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-Web",
  "Google-Extended",
  "CCBot",
  "Applebot-Extended",
  // Already covered by the `*` rule. Listed because ChatGPT search leans on
  // Bing's index, so this is an AI-visibility crawler here, not just an SEO one.
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
