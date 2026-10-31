"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { LogoMark } from "./Logo";
import Reveal from "./Reveal";
import { useLang } from "@/lib/i18n";
import { BRAND } from "@/content/data";

export default function Hero({
  onQuote,
  onSectors,
}: {
  onQuote: () => void;
  onSectors: () => void;
}) {
  const { t } = useLang();

  return (
    <section id="top" className="relative flex min-h-[calc(100svh-112px)] flex-col items-center justify-center px-4 pb-16 pt-10 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* big logo mark */}
        <Reveal>
          <div className="floaty mb-7">
            <LogoMark size={100} />
          </div>
        </Reveal>

        {/* badge */}
        <Reveal delay={120}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(201,165,78,0.35)] bg-[rgba(201,165,78,0.06)] px-4 py-1.5 text-[11px] font-medium tracking-[0.28em] text-[#e6c87f]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#e6c87f] animate-pulse-slow" />
            <span dir="ltr">{t.hero.badge}</span>
          </div>
        </Reveal>

        {/* two-line title */}
        <Reveal delay={220}>
          <h1 className="text-4xl font-bold leading-[1.25] sm:text-5xl md:text-6xl">
            <span className="block text-[#f3efe4]">{t.hero.title1}</span>
            <span className="gold-text block">{t.hero.title2}</span>
          </h1>
        </Reveal>

        {/* slogan */}
        <Reveal delay={300}>
          <p className="mt-4 text-[11px] tracking-[0.4em] text-[#a49c8a]" dir="ltr">
            {BRAND.sloganEn}
          </p>
        </Reveal>

        {/* subtitle */}
        <Reveal delay={380}>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#cfc7b4] sm:text-lg sm:leading-9">
            {t.hero.subtitle}
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={470}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <button
              onClick={onQuote}
              className="flex h-12 min-w-[220px] items-center justify-center rounded-full bg-gradient-to-b from-[#e6c87f] to-[#c9a54e] px-8 text-[15px] font-bold text-[#181206] shadow-[0_12px_40px_-10px_rgba(201,165,78,0.55)] transition-all hover:shadow-[0_16px_50px_-8px_rgba(201,165,78,0.7)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6c87f]"
            >
              {t.hero.ctaPrimary}
            </button>
            <button
              onClick={onSectors}
              className="flex h-12 min-w-[220px] items-center justify-center rounded-full border border-[rgba(201,165,78,0.4)] bg-white/[0.03] px-8 text-[15px] font-medium text-[#e6c87f] backdrop-blur transition-all hover:border-[#c9a54e] hover:bg-white/[0.06]"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
        </Reveal>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 flex flex-col items-center gap-1 text-[#8d8674]">
        <span className="text-[10px] tracking-[0.3em]">{t.hero.scroll}</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
