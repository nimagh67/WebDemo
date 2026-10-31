"use client";

import React from "react";
import {
  Fuel,
  FlaskConical,
  Wheat,
  Anvil,
  Gem,
  Container,
  ArrowLeft,
  ArrowRight,
  Clock,
  Package,
} from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "@/lib/i18n";
import { SECTORS } from "@/content/data";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Fuel,
  FlaskConical,
  Wheat,
  Anvil,
  Gem,
  Container,
};

export default function Sectors({ onOpen }: { onOpen: (sectorId: string) => void }) {
  const { t, dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section id="sectors" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] tracking-[0.4em] text-[#c9a54e]" dir="ltr">
            {t.sectors.kicker}
          </p>
          <h2 className="text-3xl font-bold text-[#f3efe4] sm:text-4xl">{t.sectors.title}</h2>
          <div className="gold-line mx-auto mt-5 h-px w-40" />
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-[#b9b2a2]">
            {t.sectors.subtitle}
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {SECTORS.map((s, i) => {
          const Icon = ICONS[s.icon] ?? Container;
          const info = t.sectors.items[s.id as keyof typeof t.sectors.items];
          return (
            <Reveal key={s.id} delay={i * 90}>
              <article
                className="ring-card group flex h-full flex-col rounded-2xl p-6"
                style={
                  {
                    ["--t1" as string]: s.vars.t1,
                    ["--t2" as string]: s.vars.t2,
                    ["--glow" as string]: s.vars.glow,
                  } as React.CSSProperties
                }
              >
                <div className="mb-5 flex items-start justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-500 group-hover:scale-110"
                    style={{
                      borderColor: `color-mix(in srgb, ${s.vars.glow} 35%, transparent)`,
                      background: `color-mix(in srgb, ${s.vars.glow} 12%, transparent)`,
                      color: s.vars.acc,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  {!s.available && (
                    <span
                      className="flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px]"
                      style={{
                        borderColor: `color-mix(in srgb, ${s.vars.glow} 30%, transparent)`,
                        color: s.vars.acc,
                      }}
                    >
                      <Clock className="h-3 w-3" />
                      {t.sectors.soon}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#f3efe4]">{info.name}</h3>
                <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-7 text-[#b9b2a2]">
                  {info.desc}
                </p>

                <div className="mt-5 flex items-center justify-between border-t pt-4" style={{ borderColor: `color-mix(in srgb, ${s.vars.glow} 14%, transparent)` }}>
                  <span
                    className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px]"
                    style={{ background: `color-mix(in srgb, ${s.vars.glow} 10%, transparent)`, color: s.vars.acc }}
                  >
                    <Package className="h-3.5 w-3.5" />
                    <span dir="auto">{s.productCount}</span>
                    <span>{t.sectors.productCount}</span>
                  </span>
                  <button
                    onClick={() => onOpen(s.id)}
                    className={cn(
                      "flex items-center gap-1 text-[13px] font-medium outline-none transition-all focus-visible:ring-1",
                    )}
                    style={{ color: s.vars.acc }}
                  >
                    {t.sectors.explore}
                    <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
