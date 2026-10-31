"use client";

/**
 * Sheen layer above the world-map canvas:
 * golden side columns (frame feel), floor reflection, top vignette
 * and a slow diagonal light streak. Purely decorative.
 */
export default function Sheen() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {/* side golden columns */}
      <div className="absolute inset-y-0 left-0 w-[7vw] max-w-[110px] bg-gradient-to-r from-[rgba(201,165,78,0.08)] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[7vw] max-w-[110px] bg-gradient-to-l from-[rgba(201,165,78,0.08)] to-transparent" />
      {/* floor reflection */}
      <div className="absolute inset-x-0 bottom-0 h-[26vh] bg-[radial-gradient(62%_100%_at_50%_100%,rgba(201,165,78,0.10),transparent_72%)]" />
      {/* top vignette */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/60 via-black/25 to-transparent" />
      {/* diagonal light streak */}
      <div className="streak" />
    </div>
  );
}
