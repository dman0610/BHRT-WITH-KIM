import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Web app manifest.
 *
 * Controls how the site presents when someone saves it to a phone home screen
 * or shares it — which matters more here than on most sites, because this
 * audience is overwhelmingly mobile.
 *
 * `display: "browser"` on purpose. A standalone shell would strip the address
 * bar, and a healthcare site benefits from the visible domain: it is how
 * someone confirms they are on the practice's real site rather than a scraper
 * or a lookalike.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Bioidentical Hormone Therapy in Utah`,
    short_name: SITE.name,
    description: SITE.entityStatement,
    start_url: "/",
    display: "browser",
    background_color: "#F5F2ED", // stone
    theme_color: "#2D5A3D", // forest
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
