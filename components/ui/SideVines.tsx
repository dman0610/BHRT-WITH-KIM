/**
 * Climbing side vines — desktop only.
 *
 * A vine running the full height of every page in the gutters either side of
 * the 1280px content column, from the top fade down to the bottom edge.
 *
 * A root flourish at the base was tried and removed — it read as a separate
 * drawing rather than the same plant, largely because the tiling pattern
 * starts at the top of the document, so the stem's horizontal position where
 * it met the footer shifted with every page's height. The vine simply running
 * off the bottom edge is cleaner and needs no such guesswork.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * FOUR THINGS THAT LOOK LIKE DETAILS AND ARE NOT
 * ─────────────────────────────────────────────────────────────────────────
 *
 * 1. COLOUR IS `sage`, AND IT HAS TO BE.
 *    The vine crosses cream (#F5F2ED), forest (#2D5A3D), peach and brown
 *    (#3B3228) as it climbs. Sage (#7A9E7E) is mid-value — darker than the
 *    cream, lighter than the forest and the brown — so one colour reads on
 *    every band. Moss or forest disappears against the CTA section; a pale
 *    green disappears against the hero. Do not "correct" this to a brand
 *    green without checking it against the dark bands first.
 *
 * 2. THE STEM IS A SINE OVER EXACTLY TWO PERIODS PER TILE.
 *    That makes x and dx/dy identical at the top and bottom of the tile, which
 *    is the only reason the repeat is invisible. Change the tile height or the
 *    period and the seam becomes a visible notch every 380px. Geometry was
 *    generated rather than hand-drawn for this reason.
 *
 * 3. NOTHING SITS WITHIN ~45px OF THE TILE BOUNDARY.
 *    `<pattern>` clips its contents. A leaf crossing the boundary would be cut
 *    in half and repeat, which is precisely the artefact that gives tiling away.
 *
 * 4. IT PAINTS OVER SECTION BACKGROUNDS, NOT BEHIND THEM.
 *    Every section on this site has an opaque background, so there is no layer
 *    "behind" the page to sit in. The vine is an overlay confined to the
 *    gutter, and `pointer-events-none` guarantees it can never intercept a
 *    click even where it overlaps.
 *
 * Static by design — a moving decoration would pull attention exactly where it
 * shouldn't, and there is nothing here to reconcile with prefers-reduced-motion.
 */

const TILE_W = 150;
const TILE_H = 380;

/** Content column is max-w-7xl (1280px); the vine fills what's left, up to 150px. */
const GUTTER = `clamp(0px, calc((100% - 1280px) / 2), ${TILE_W}px)`;

/**
 * Stem: sine, amplitude 30, centre x=75, two full periods across the tile.
 * Generated — see the note above before editing by hand.
 */
const STEM =
  "M75 0 C90.7 15.8,105.0 31.7,105.0 47.5 C105.0 63.3,90.7 79.2,75.0 95.0 C59.3 110.8,45.0 126.7,45.0 142.5 C45.0 158.3,59.3 174.2,75.0 190.0 C90.7 205.8,105.0 221.7,105.0 237.5 C105.0 253.3,90.7 269.2,75.0 285.0 C59.3 300.8,45.0 316.7,45.0 332.5 C45.0 348.3,59.3 364.2,75.0 380.0";

/** Leaf pointing along +x from its attachment point at the origin. */
const LEAF = "M0 0C6 -9,20 -13,32 -6C35 -4,35 1,32 4C22 11,7 8,0 0Z";

/** Small curling tendril. */
const TENDRIL =
  "M0 0C7 -1,13 -5,15 -11C16.5 -15.5,13 -18,10.5 -15.5C8.5 -13.5,11 -10,15 -11";

/** Anchor point, outward normal angle and size for each leaf on the tile. */
const LEAVES = [
  { x: 105, y: 48, rot: -7.1, scale: 1.0 },
  { x: 81.9, y: 88, rot: 236, scale: 0.72 },
  { x: 47.5, y: 130, rot: 27.7, scale: 0.85 },
  { x: 58.2, y: 172, rot: 130.6, scale: 1.06 },
  { x: 93.4, y: 210, rot: -24.1, scale: 0.68 },
  { x: 102.5, y: 250, rot: 195.7, scale: 0.92 },
  { x: 68.1, y: 292, rot: 52, scale: 1.0 },
  { x: 45, y: 332, rot: 168.9, scale: 0.78 },
];

const TENDRILS = [
  { x: 98.4, y: 68, rot: 211.9 },
  { x: 75, y: 190, rot: -44.8 },
  { x: 51.6, y: 312, rot: 211.9 },
];

/** One tile of the climbing vine. Referenced by <pattern> on both sides. */
function VineTile({ id }: { id: string }) {
  return (
    <g id={id}>
      <path
        d={STEM}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.28"
      />
      {TENDRILS.map((t, i) => (
        <g key={`t${i}`} transform={`translate(${t.x} ${t.y}) rotate(${t.rot})`}>
          <path
            d={TENDRIL}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.24"
          />
        </g>
      ))}
      {LEAVES.map((l, i) => (
        <g
          key={`l${i}`}
          transform={`translate(${l.x} ${l.y}) rotate(${l.rot}) scale(${l.scale})`}
        >
          <path d={LEAF} fill="currentColor" opacity="0.2" />
          {/* Midrib — barely there, but it stops the leaf reading as a blob. */}
          <path
            d="M2 0C10 0,22 -1,30 -2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.16"
          />
        </g>
      ))}
    </g>
  );
}

function VineColumn({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  const patternId = `vine-tile-${side}`;

  return (
    <div
      className={`absolute inset-y-0 overflow-hidden text-sage ${
        isLeft ? "left-0" : "right-0"
      }`}
      style={{
        width: GUTTER,
        /*
          Dissolve under the navbar instead of ending in a hard horizontal cut.
          Both prefixes: the unprefixed property is widely supported now, the
          -webkit- one costs nothing and covers older Safari.
        */
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0, black 200px)",
        maskImage: "linear-gradient(to bottom, transparent 0, black 200px)",
      }}
    >
      {/*
        Anchored to the INNER edge — the side facing the content — so the
        artwork is trimmed from the OUTSIDE as the gutter narrows.

        It was anchored the other way first, and between roughly 1280px and
        1580px that sliced the vine down its inner side, leaving a hard vertical
        cut through the middle of leaves in open space. Trimming from the
        outside instead means the vine stays whole where you look at it and runs
        off the edge of the screen, which is how anything bleeding past a
        viewport is supposed to behave.

        For the left column the inner edge is its right side, and vice versa —
        hence the inverted anchors against the parent's.
      */}
      <div
        className={`absolute inset-y-0 ${isLeft ? "right-0" : "left-0"}`}
        style={{ width: TILE_W }}
      >
        {/*
          No viewBox on purpose — one user unit must equal one CSS pixel, or the
          pattern stretches with the page height instead of tiling at true size.
        */}
        <svg
          width={TILE_W}
          height="100%"
          fill="none"
          className={`block h-full ${isLeft ? "" : "-scale-x-100"}`}
          aria-hidden="true"
        >
          <defs>
            <pattern
              id={patternId}
              patternUnits="userSpaceOnUse"
              width={TILE_W}
              height={TILE_H}
              /* Right side is offset half a tile so the two never mirror-match. */
              patternTransform={isLeft ? undefined : `translate(0 ${TILE_H / 2})`}
            >
              <VineTile id={`${patternId}-art`} />
            </pattern>
          </defs>
          {/* height 100% spans the full document, so the vine runs to the page edge. */}
          <rect width={TILE_W} height="100%" fill={`url(#${patternId})`} />
        </svg>
      </div>
    </div>
  );
}

/**
 * Mounted once in app/layout.tsx as a child of <body>, which carries
 * `relative` so `inset-0` resolves to the full document height.
 *
 * Hidden entirely below 1280px — the markup is not in the DOM on tablets or
 * phones, where there is no gutter to put it in.
 */
export default function SideVines() {
  return (
    <div
      aria-hidden="true"
      /*
        z-20 is chosen, not arbitrary.

        Several sections are `position: relative` with `z-index: auto` —
        MissionPillars, CTASection, the Footer, and the /about and
        /testimonials heroes. Positioned elements sharing an effective z-index
        are painted in DOM order, and all of those come AFTER this component,
        so at z-0 they covered the vine. The forest CTA band and the footer
        hid it completely, which meant the roots never appeared at all.

        Anything above 0 beats `z-index: auto`, and 20 keeps it below every
        piece of fixed chrome, so the vine slides under them rather than
        across them:

          navbar backdrop  z-25   mobile drawer  z-40
          navbar           z-50   promo banner   z-60   skip link  z-100

        Do NOT raise this above 25. "In front of everything" would drag the
        vine across the logo, the nav and the promo bar, and it would read as
        a rendering fault rather than decoration.
      */
      className="pointer-events-none absolute inset-0 z-20 hidden select-none xl:block"
    >
      <VineColumn side="left" />
      <VineColumn side="right" />
    </div>
  );
}
