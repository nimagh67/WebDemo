"use client";

import React from "react";
import { ShieldCheck, FileBadge2, Ship, Languages, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { useLang, fmtNum } from "@/lib/i18n";
import { CONTACTS } from "@/content/data";

const ADV_ICONS = [ShieldCheck, FileBadge2, Ship, Languages];

export default function About({
  onQuote,
  onContact,
}: {
  onQuote: () => void;
  onContact: () => void;
}) {
  const { t, lang, dir } = useLang();
  const Arrow = dir === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <section id="about" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* text column */}
        <div className="py-2">
          <Reveal>
            <p className="mb-3 text-[11px] tracking-[0.4em] text-[#c9a54e]" dir="ltr">
              {t.about.kicker}
            </p>
            <h2 className="text-3xl font-bold leading-snug text-[#f3efe4] sm:text-4xl">
              {t.about.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-[15px] leading-8 text-[#cfc7b4]">{t.about.body1}</p>
            <p className="mt-4 text-[15px] leading-8 text-[#cfc7b4]">{t.about.body2}</p>
          </Reveal>

          {/* advantages */}
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {t.about.advantages.map((a, i) => {
              const Icon = ADV_ICONS[i] ?? ShieldCheck;
              return (
                <Reveal key={a.t} delay={i * 100}>
                  <div className="glass group h-full rounded-xl p-4 transition-all duration-500 hover:border-[rgba(230,200,127,0.4)] hover:shadow-[0_16px_50px_-20px_rgba(201,165,78,0.35)]">
                    <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(201,165,78,0.3)] bg-[rgba(201,165,78,0.08)] text-[#e6c87f] transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-[15px] font-bold text-[#f3efe4]">{a.t}</h3>
                    <p className="mt-1.5 text-[13px] leading-6 text-[#a49c8a]">{a.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* signature / CEO panel */}
        <Reveal delay={200}>
          <div className="marble-panel rounded-3xl border border-[rgba(201,165,78,0.18)] p-8 sm:p-12">
            <Quote className="mb-6 h-8 w-8 text-[rgba(201,165,78,0.5)] rtl:-scale-x-100" />
            <p className="text-[13px] font-medium tracking-[0.25em] text-[#c9a54e]">
              {t.about.sigTitle}
            </p>

            {/* hand-written signature placeholder — Great Vibes, replaced by
                the client's real signature image when it arrives */}
            <p
              className="font-sign mt-6 text-5xl leading-tight text-[#e6c87f] sm:text-6xl"
              dir="ltr"
            >
              Mahdi Nazari
            </p>

            <div className="gold-line my-7 h-px w-full" />
            <p className="text-sm font-bold text-[#f3efe4]">Mahdi Nazari</p>
            <p className="mt-1 text-[13px] text-[#a49c8a]">{t.about.sigRole}</p>

            <button
              onClick={onQuote}
              className="mt-8 flex h-11 w-full items-center justify-center rounded-full border border-[rgba(201,165,78,0.35)] bg-white/[0.03] text-sm font-medium text-[#e6c87f] transition-all hover:border-[#c9a54e] hover:bg-white/[0.06] sm:w-auto sm:px-8"
            >
              {t.hero.ctaPrimary}
            </button>

            <p className="mt-6 text-[11px] text-[#8d8674]" dir="ltr">
              {CONTACTS.email}
            </p>
          </div>
        </Reveal>
      </div>

      {/* ---------- consulting services (client-approved copy) ---------- */}
      <div className="mt-16 sm:mt-20">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[0.4em] text-[#c9a54e]" dir="ltr">
            {t.about.consulting.kicker}
          </p>
          <h3 className="text-2xl font-bold leading-snug text-[#f3efe4] sm:text-3xl">
            {t.about.consulting.title}
          </h3>
          <p className="mt-4 max-w-3xl text-[15px] leading-8 text-[#cfc7b4]">
            {t.about.consulting.intro}
          </p>
        </Reveal>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.consulting.items.map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="glass group h-full rounded-xl p-5 transition-all duration-500 hover:border-[rgba(230,200,127,0.4)] hover:shadow-[0_16px_50px_-20px_rgba(201,165,78,0.35)]">
                <span
                  className="font-brand text-sm tracking-[0.2em] text-[#c9a54e] transition-colors duration-500 group-hover:text-[#e6c87f]"
                  dir="ltr"
                >
                  {fmtNum(String(i + 1).padStart(2, "0"), lang)}
                </span>
                <h4 className="mt-2.5 text-[15px] font-bold text-[#f3efe4]">{c.t}</h4>
                <p className="mt-1.5 text-[13px] leading-6 text-[#a49c8a]">{c.d}</p>
              </div>
            </Reveal>
          ))}

          {/* CTA tile — "Let's discuss your next step" */}
          <Reveal delay={560}>
            <div className="marble-panel relative h-full overflow-hidden rounded-xl border border-[rgba(201,165,78,0.28)] p-5">
              <p className="text-[15px] font-bold leading-7 text-[#f3efe4]">
                {t.about.consulting.cta}
              </p>
              <button
                onClick={onContact}
                className="mt-5 inline-flex h-10 items-center gap-1.5 rounded-full bg-gradient-to-b from-[#e6c87f] to-[#c9a54e] px-6 text-sm font-bold text-[#181206] shadow-[0_10px_36px_-10px_rgba(201,165,78,0.55)] transition-all hover:shadow-[0_14px_46px_-8px_rgba(201,165,78,0.7)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6c87f]"
              >
                {t.about.consulting.ctaBtn}
                <Arrow className="h-4 w-4 rtl:-scale-x-100" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
