/**
 * Renders a schema.org object as JSON-LD.
 *
 * Uses a native <script> tag rather than next/script — JSON-LD is structured
 * data, not executable code, and next/script's loading strategies are wrong
 * for it. This follows the Next.js JSON-LD guide in
 * node_modules/next/dist/docs/01-app/02-guides/json-ld.md.
 *
 * JSON.stringify does not sanitize for XSS, so `<` is escaped to its unicode
 * equivalent to prevent a payload from closing the script tag.
 */
export default function JsonLd({ schema }: { schema: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
