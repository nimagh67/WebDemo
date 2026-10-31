"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Official AROUSHA GLOBAL brand assets — extracted verbatim from the client's
 * logo artwork (golden "A" + globe + orbit ring + rendered wordmark) as
 * transparent PNGs, so the site logo is pixel-identical to the reference.
 *   /images/logo-mark.png      emblem only          ratio 401 x 348
 *   /images/logo-wordmark.png  "AROUSH GLOBAL" line ratio 634 x 135
 *   /images/logo-full.png      full vertical lockup ratio 638 x 526
 */
export const LOGO_RATIO = 401 / 348;
export const WORDMARK_RATIO = 634 / 135;
export const FULL_RATIO = 638 / 526;

export function LogoMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-mark.png`}
      alt="AROUSHA GLOBAL"
      width={Math.round(size * LOGO_RATIO)}
      height={size}
      draggable={false}
      className={cn("select-none", className)}
      style={{ filter: "drop-shadow(0 6px 18px rgba(201,165,78,0.28))" }}
    />
  );
}

/** Brand lockup: emblem + the client's own rendered "AROUSH GLOBAL" wordmark. */
export function BrandLockup({
  size = 40,
  compact = false,
  className,
}: {
  size?: number;
  compact?: boolean;
  className?: string;
}) {
  const wordH = Math.round(size * (compact ? 0.44 : 0.55));
  return (
    <span className={cn("flex select-none items-center gap-3", className)} dir="ltr">
      <LogoMark size={size} />
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-wordmark.png`}
        alt=""
        aria-hidden
        draggable={false}
        width={Math.round(wordH * WORDMARK_RATIO)}
        height={wordH}
        className="select-none"
      />
    </span>
  );
}

/** Full vertical lockup (emblem + wordmark + subtitle) — used in the footer. */
export function LogoFull({ height = 120, className }: { height?: number; className?: string }) {
  return (
    <img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-full.png`}
      alt="AROUSHA GLOBAL — International Trade & Investment"
      width={Math.round(height * FULL_RATIO)}
      height={height}
      draggable={false}
      className={cn("select-none", className)}
    />
  );
}
