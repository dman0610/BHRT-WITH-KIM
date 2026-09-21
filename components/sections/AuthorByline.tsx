import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

/**
 * Author attribution for educational pages.
 *
 * The human-visible half of the E-E-A-T signal — the `Person` schema is
 * emitted sitewide from the root layout and linked by `@id`, so this doesn't
 * repeat it. Both halves matter: Google's quality systems and AI citation
 * behaviour weight demonstrated expertise, and an unattributed health article
 * carries none. See docs/04-AI-VISIBILITY.md.
 */
export default function AuthorByline({
  reviewedOn,
}: {
  /** ISO date. Only pass this when Kim has genuinely reviewed the piece. */
  reviewedOn?: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-mist px-5 py-4">
      <Image
        src="/kim-portrait.jpg"
        /*
          Empty alt is deliberate, not an oversight. Her name and credential
          are in the text immediately beside this image, so giving the photo
          its own alt text makes a screen reader announce "Kim Yadon, FNP-C"
          twice on all 23 pages that carry this byline. WCAG H67 is explicit
          that an image whose information is already in adjacent text should
          be marked decorative.

          The entity signal is not lost: the hero on `/` and the portrait on
          `/about` both carry alt="Kim Yadon, FNP-C", which is where an image
          result would sensibly point anyway.
        */
        alt=""
        width={56}
        height={56}
        className="size-14 shrink-0 rounded-full object-cover object-top"
      />
      <div className="text-sm leading-relaxed">
        <p className="text-clay-text">
          {reviewedOn ? "Reviewed by" : "About the practice"}{" "}
          <Link
            href="/about"
            className="font-medium text-forest underline underline-offset-4 hover:text-moss transition-colors"
          >
            {SITE.provider.fullName}
          </Link>
        </p>
        <p className="mt-0.5 text-clay-text">
          {SITE.provider.jobTitle} · Virtual hormone care across{" "}
          {SITE.contact.state}
        </p>
        {reviewedOn && (
          <p className="mt-1 text-xs text-clay-text">
            Reviewed{" "}
            <time dateTime={reviewedOn}>
              {new Date(`${reviewedOn}T12:00:00`).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </p>
        )}
      </div>
    </div>
  );
}
