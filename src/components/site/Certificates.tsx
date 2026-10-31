"use client";

import React from "react";
import { ShieldCheck, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "@/lib/i18n";
import { CERTIFICATES } from "@/content/data";

export default function Certificates() {
  const { t } = useLang();

  return (
    <section id="certificates" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#f3efe4] sm:text-4xl">{t.certs.title}</h2>
          <div className="gold-line mx-auto mt-5 h-px w-40" />
          <p className="mx-auto mt-5 max-w-xl text-[13px] leading-7 text-[#8d8674]">
            {t.certs.subtitle}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {CERTIFICATES.map((c, i) => (
          <Reveal key={c.id} delay={i * 80}>
            <div className="group relative flex h-36 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[rgba(201,165,78,0.3)] bg-white/[0.015] text-center transition-all duration-500 hover:border-[rgba(201,165,78,0.55)] hover:bg-white/[0.035]">
              <span className="absolute top-2.5 end-2.5 rounded-full border border-[rgba(201,165,78,0.3)] bg-[rgba(201,165,78,0.08)] px-2 py-0.5 text-[9px] text-[#c9a54e]">
                {t.certs.preview}
              </span>
              <ShieldCheck className="h-8 w-8 text-[rgba(201,165,78,0.45)] transition-colors group-hover:text-[#e6c87f]" />
              <span className="flex items-center gap-1 text-sm font-bold text-[#d8d1c0]" dir="ltr">
                <BadgeCheck className="h-3.5 w-3.5 text-[#c9a54e]" />
                {c.title}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
