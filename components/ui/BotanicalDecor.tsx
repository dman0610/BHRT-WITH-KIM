interface BotanicalProps {
  className?: string;
}

/** Abstract leaf branch — top-right or bottom-left corner accent */
export function LeafBranch({ className = "" }: BotanicalProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M60 10 C60 10, 60 190, 60 190"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Right leaves */}
      <path d="M60 40 C80 25, 100 30, 95 45 C90 55, 70 50, 60 40Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M60 80 C85 65, 105 72, 98 88 C92 100, 70 92, 60 80Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M60 130 C78 118, 95 124, 90 138 C85 148, 68 142, 60 130Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
      {/* Left leaves */}
      <path d="M60 60 C40 45, 20 50, 25 65 C30 75, 50 70, 60 60Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M60 108 C38 95, 18 102, 24 116 C29 126, 50 120, 60 108Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M60 155 C42 145, 28 150, 32 162 C36 170, 52 166, 60 155Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

/** Small fern curl — subtle corner or inline accent */
export function FernCurl({ className = "" }: BotanicalProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 90 C20 90, 25 50, 50 30 C65 20, 80 25, 75 40 C70 55, 50 50, 50 30"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M30 75 C35 65, 45 62, 42 70"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M38 58 C44 48, 55 47, 50 55"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  );
}

/** Seed motif — used near hero or CTA sections */
export function SeedMotif({ className = "" }: BotanicalProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Seed body */}
      <ellipse cx="40" cy="70" rx="14" ry="22" stroke="currentColor" strokeWidth="1" />
      {/* Sprouting shoot */}
      <path
        d="M40 48 C40 48, 38 30, 40 15 C42 30, 40 48, 40 48"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      {/* Small leaves from sprout */}
      <path d="M40 28 C48 20, 55 24, 50 32" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M40 36 C32 28, 25 32, 30 40" stroke="currentColor" strokeWidth="0.8" fill="none" />
      {/* Root lines */}
      <path d="M35 92 C33 102, 30 110, 28 115" stroke="currentColor" strokeWidth="0.6" />
      <path d="M40 92 C40 105, 40 112, 40 118" stroke="currentColor" strokeWidth="0.6" />
      <path d="M45 92 C47 102, 50 110, 52 115" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}
