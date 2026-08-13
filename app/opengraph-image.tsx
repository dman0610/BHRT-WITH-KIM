import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "BHRT with Kim — bioidentical hormone therapy in Utah";

/**
 * Sitewide default Open Graph image.
 *
 * Without this, every ad share, text-message preview, and AI answer card
 * renders blank. Deeper opengraph-image files override this one.
 *
 * ImageResponse supports flexbox only — `display: grid` will not work — and a
 * subset of CSS. Colors are the brand tokens from app/globals.css, inlined
 * because this renders outside the Tailwind pipeline.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#2D5A3D",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#A9C6AF",
          }}
        >
          Balance. Restore. Thrive.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 76,
            fontWeight: 600,
            lineHeight: 1.1,
          }}
        >
          Bioidentical Hormone
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 600,
            lineHeight: 1.1,
            color: "#E8C547",
          }}
        >
          Therapy in Utah
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 32,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {SITE.provider.fullName} · Virtual visits statewide
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 26,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          bhrtwithkim.com
        </div>
      </div>
    ),
    size
  );
}
