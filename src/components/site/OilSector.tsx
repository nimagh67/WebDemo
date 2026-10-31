"use client";

import React, { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Fuel,
  FlaskConical,
  Droplet,
  Route,
  LayoutGrid,
  BadgeCheck,
  Package,
  Flame,
  FileCheck2,
  Boxes,
  ArrowLeft,
  ArrowRight,
  Info,
} from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "@/lib/i18n";
import { OIL_PRODUCTS, OIL_CATEGORIES, type OilCategory } from "@/content/data";
import { cn } from "@/lib/utils";

const CAT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutGrid,
  Route,
  Droplet,
  FlaskConical,
  Fuel,
};

const VARS = {
  t1: "#161B22",
  t2: "#080A0F",
  glow: "#E8961E",
  acc: "#F2A94F",
} as const;

export default function OilSector({
  onBack,
  onQuote,
}: {
  onBack: () => void;
  onQuote: (prefill?: string) => void;
}) {
  const { t, dir, n } = useLang();
  const [cat, setCat] = useState<OilCategory | "all">("all");
  const Back = dir === "rtl" ? ChevronRight : ChevronLeft;
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const list = useMemo(
    () => (cat === "all" ? OIL_PRODUCTS : OIL_PRODUCTS.filter((p) => p.category === cat)),
    [cat],
  );

  return (
    <div>
      {/* ============ refinery hero ============ */}
      <section className="relative flex min-h-[540px] items-center overflow-hidden">
        {/* photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/refinery-hero.jpg)`,
            filter: "brightness(0.62) saturate(1.12) contrast(1.05)",
          }}
        />
        {/* dark refinery grade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060608]/80 via-[#080A0F]/55 to-[#080A0F]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_108%,rgba(232,150,30,0.32),transparent_65%)] ember" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080A0F] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
          {/* breadcrumb */}
          <Reveal>
            <nav className="mb-8 flex items-center gap-2 text-[12.5px] text-[#b9b2a2]" aria-label="Breadcrumb">
              <button
                onClick={onBack}
                className="flex items-center gap-1.5 rounded-full border border-[rgba(242,169,79,0.3)] bg-black/30 px-3.5 py-1.5 backdrop-blur transition-colors hover:border-[#F2A94F] hover:text-[#F2A94F]"
              >
                <Back className="h-3.5 w-3.5" />
                <Home className="h-3.5 w-3.5" />
                {t.oil.back}
              </button>
              <span className="opacity-50">/</span>
              <span>{t.oil.crumbSector}</span>
              <span className="opacity-50">/</span>
              <span className="font-medium text-[#F2A94F]">{t.oil.heroTitle}</span>
            </nav>
          </Reveal>

          <Reveal delay={100}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(242,169,79,0.4)] bg-black/35 px-4 py-1.5 text-[11px] font-medium tracking-[0.26em] text-[#F2A94F] backdrop-blur">
              <Flame className="h-3.5 w-3.5" />
              <span dir="ltr">{t.oil.heroBadge}</span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="max-w-3xl text-3xl font-bold leading-snug sm:text-5xl">
              <span className="bg-gradient-to-l from-[#F2A94F] via-[#E8961E] to-[#c97b1e] bg-clip-text text-transparent">
                {t.oil.heroTitle}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#d8cfc0] sm:text-base">
              {t.oil.heroDesc}
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                { icon: BadgeCheck, label: t.oil.chip1 },
                { icon: FileCheck2, label: t.oil.chip2 },
                { icon: Boxes, label: t.oil.chip3 },
              ].map((c) => (
                <span
                  key={c.label}
                  className="flex items-center gap-1.5 rounded-full border border-[rgba(242,169,79,0.28)] bg-black/30 px-3.5 py-1.5 text-[12px] text-[#e8d8bf] backdrop-blur"
                >
                  <c.icon className="h-3.5 w-3.5 text-[#F2A94F]" />
                  {c.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ products ============ */}
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold text-[#f3efe4] sm:text-3xl">{t.oil.productsTitle}</h2>
              <p className="mt-2 max-w-xl text-[13.5px] leading-7 text-[#a49c8a]">{t.oil.productsSub}</p>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-[#c9a54e]">
              <Package className="h-4 w-4" />
              <span dir="auto">{n(list.length)}</span>
              <span>{t.oil.count}</span>
            </div>
          </div>
        </Reveal>

        {/* filters */}
        <Reveal delay={120}>
          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <span className="me-1 text-[12px] text-[#8d8674]">{t.oil.filters}:</span>
            {OIL_CATEGORIES.map((c) => {
              const Icon = CAT_ICONS[c.icon] ?? LayoutGrid;
              const active = cat === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setCat(c.id)}
                  className={cn(
                    "flex h-9 items-center gap-1.5 rounded-full border px-4 text-[13px] transition-all outline-none focus-visible:ring-1 focus-visible:ring-[#F2A94F]",
                    active
                      ? "border-[#E8961E] bg-[rgba(232,150,30,0.16)] font-bold text-[#F2A94F] shadow-[0_8px_28px_-8px_rgba(232,150,30,0.4)]"
                      : "border-[rgba(242,169,79,0.2)] bg-white/[0.02] text-[#b9b2a2] hover:border-[rgba(242,169,79,0.45)] hover:text-[#F2A94F]",
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {t.oil.cats[c.id]}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* grid */}
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {list.map((p, i) => {
            const info = t.oil.items[p.id as keyof typeof t.oil.items];
            return (
              <Reveal key={p.id} delay={(i % 3) * 100}>
                <article
                  className="ring-card group flex h-full flex-col overflow-hidden rounded-2xl"
                  style={
                    {
                      ["--t1" as string]: VARS.t1,
                      ["--t2" as string]: VARS.t2,
                      ["--glow" as string]: VARS.glow,
                    } as React.CSSProperties
                  }
                >
                  {/* image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={p.img}
                      alt={info.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F] via-transparent to-black/20" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080A0F] to-transparent" />
                    {/* badges */}
                    <div className="absolute start-3 top-3 flex flex-wrap gap-1.5">
                      {p.badges.map((b) => (
                        <span
                          key={b}
                          dir="ltr"
                          className="rounded-full border border-[rgba(242,169,79,0.4)] bg-black/55 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-[#F2A94F] backdrop-blur"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[17px] font-bold text-[#f3efe4]">{info.name}</h3>
                    <p className="mt-0.5 font-brand text-[12px] tracking-[0.14em] text-[#F2A94F]/80" dir="ltr">
                      {info.short}
                    </p>
                    <p className="mt-2.5 text-[13px] leading-6 text-[#a49c8a]">{info.desc}</p>

                    {/* compact specs */}
                    <dl className="mt-4 space-y-1.5 rounded-xl border border-[rgba(232,150,30,0.14)] bg-black/25 p-3.5">
                      {p.specs.slice(0, 4).map((s) => (
                        <div key={s.k} className="flex items-baseline justify-between gap-3 text-[12.5px]">
                          <dt className="shrink-0 text-[#8d8674]">{t.specLabels[s.k] ?? s.k}</dt>
                          <dd dir="ltr" className="font-medium text-[#e8d8bf]">
                            {s.v}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    {p.packingKey && (
                      <p className="mt-3 text-[11.5px] text-[#8d8674]">
                        {t.oil.packing[p.packingKey as keyof typeof t.oil.packing]}
                      </p>
                    )}

                    <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                      <button
                        onClick={() => onQuote(`${info.name} — ${info.short}`)}
                        className="flex h-10 items-center gap-1.5 rounded-full bg-gradient-to-b from-[#F2A94F] to-[#E8961E] px-5 text-[13px] font-bold text-[#1a1002] shadow-[0_10px_30px_-8px_rgba(232,150,30,0.55)] transition-all hover:brightness-110"
                      >
                        {t.oil.quoteThis}
                        <Arrow className="h-4 w-4 rtl:-scale-x-100" />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <p className="mx-auto mt-10 flex max-w-2xl items-start justify-center gap-2 text-center text-[12px] leading-6 text-[#8d8674]">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#E8961E]" />
            <span>
              {t.oil.specNote}
            </span>
          </p>
        </Reveal>
      </section>
    </div>
  );
}
