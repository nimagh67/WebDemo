"use client";

import React from "react";
import { ClipboardList, Handshake, Mail, Info } from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "@/lib/i18n";
import { CONTACTS } from "@/content/data";

export default function CtaPanels({ onQuote }: { onQuote: () => void }) {
  const { t } = useLang();

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* quote panel */}
        <Reveal>
          <div className="marble-panel relative h-full overflow-hidden rounded-3xl border border-[rgba(201,165,78,0.2)] p-8 sm:p-10">
            <div className="absolute -end-16 -top-16 h-52 w-52 rounded-full bg-[rgba(201,165,78,0.07)] blur-2xl" />
            <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(201,165,78,0.35)] bg-[rgba(201,165,78,0.1)] text-[#e6c87f]">
              <ClipboardList className="h-7 w-7" />
            </span>
            <h3 className="text-2xl font-bold text-[#f3efe4]">{t.cta.quoteTitle}</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#b9b2a2]">{t.cta.quoteDesc}</p>
            <button
              onClick={onQuote}
              className="mt-7 flex h-12 items-center justify-center rounded-full bg-gradient-to-b from-[#e6c87f] to-[#c9a54e] px-8 text-[15px] font-bold text-[#181206] shadow-[0_12px_40px_-10px_rgba(201,165,78,0.5)] transition-all hover:shadow-[0_16px_50px_-8px_rgba(201,165,78,0.65)] hover:brightness-110"
            >
              {t.cta.quoteBtn}
            </button>
          </div>
        </Reveal>

        {/* suppliers panel */}
        <Reveal delay={140}>
          <div className="relative h-full overflow-hidden rounded-3xl border border-[rgba(201,165,78,0.2)]">
            {/* background accent image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
              style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/tanker.jpg)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,6,8,0.55)] via-[rgba(6,6,8,0.8)] to-[rgba(6,6,8,0.92)]" />
            <div className="relative p-8 sm:p-10">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(201,165,78,0.35)] bg-[rgba(201,165,78,0.1)] text-[#e6c87f]">
                <Handshake className="h-7 w-7" />
              </span>
              <h3 className="text-2xl font-bold text-[#f3efe4]">{t.cta.supplierTitle}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#b9b2a2]">{t.cta.supplierDesc}</p>
              <a
                href={`mailto:${CONTACTS.email}?subject=Supplier%20Cooperation%20—%20AROUSHA%20GLOBAL`}
                className="mt-7 flex h-12 w-fit items-center gap-2 rounded-full border border-[rgba(201,165,78,0.45)] bg-white/[0.04] px-8 text-[15px] font-bold text-[#e6c87f] transition-all hover:border-[#c9a54e] hover:bg-white/[0.08]"
              >
                <Mail className="h-4.5 w-4.5" />
                <span dir="ltr">{CONTACTS.email}</span>
              </a>
              <p className="mt-3 text-[12px] text-[#8d8674]">{t.cta.supplierBtnHint}</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* disclaimer */}
      <Reveal delay={200}>
        <p className="mx-auto mt-10 flex max-w-3xl items-start justify-center gap-2 text-center text-[12.5px] leading-6 text-[#a49c8a]">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a54e]" />
          <span>{t.cta.disclaimer}</span>
        </p>
      </Reveal>
    </section>
  );
}
