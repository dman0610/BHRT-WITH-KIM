import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple touch icon — the tile shown when someone saves the site to an iOS home
 * screen, and the fallback icon several share sheets use.
 *
 * Generated rather than shipped as a binary, matching opengraph-image.tsx, so
 * the brand colours stay in one place and there is no asset to keep in sync.
 *
 * A monogram, not a photo: at 180px a portrait reads as an unrecognisable
 * smudge, while a mark stays legible. Colours are the brand tokens inlined —
 * this renders outside the Tailwind pipeline. ImageResponse supports flexbox
 * only.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2D5A3D", // forest
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 132,
            height: 132,
            borderRadius: 66,
            border: "3px solid #7A9E7E", // sage
            color: "#F5F2ED", // stone
            fontSize: 58,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          K
        </div>
      </div>
    ),
    size
  );
}
