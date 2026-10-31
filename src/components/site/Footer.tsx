"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { LogoFull } from "./Logo";
import { useLang } from "@/lib/i18n";
import { CONTACTS, SECTORS } from "@/content/data";

export default function Footer({
  onNavigate,
}: {
  onNavigate: (target: "home" | "oil" | "sectors" | "about" | "certificates" | "contact") => void;
}) {
  const { t } = useLang();
  const year = "2025";

  const quick: { key: "home" | "sectors" | "about" | "certificates" | "contact"; label: string }[] = [
    { key: "home", label: t.nav.home },
    { key: "sectors", label: t.nav.sectors },
    { key: "about", label: t.nav.about },
    { key: "certificates", label: t.nav.certificates },
    { key: "contact", label: t.nav.contact },
  ];

  return (
    <footer id="contact" className="relative z-10 mt-auto w-full scroll-mt-24 border-t border-[rgba(201,165,78,0.16)] bg-[#050507]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* brand — full official lockup */}
          <div>
            <LogoFull height={126} className="max-w-full" />
            <p className="mt-5 text-[13px] leading-7 text-[#a49c8a]">{t.footer.about}</p>
          </div>

          {/* quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="mb-5 text-sm font-bold tracking-wide text-[#e6c87f]">{t.footer.quick}</h3>
            <ul className="space-y-2.5">
              {quick.map((q) => (
                <li key={q.key}>
                  <button
                    onClick={() => onNavigate(q.key)}
                    className="text-[13.5px] text-[#b9b2a2] transition-colors hover:text-[#e6c87f]"
                  >
                    {q.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* sectors */}
          <nav aria-label="Footer sectors">
            <h3 className="mb-5 text-sm font-bold tracking-wide text-[#e6c87f]">{t.footer.sectorsTitle}</h3>
            <ul className="space-y-2.5">
              {SECTORS.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate(s.available ? "oil" : "sectors")}
                    className="text-start text-[13.5px] text-[#b9b2a2] transition-colors hover:text-[#e6c87f]"
                  >
                    {t.sectors.items[s.id as keyof typeof t.sectors.items].name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold tracking-wide text-[#e6c87f]">{t.footer.contact}</h3>
            <ul className="space-y-4">
              {CONTACTS.offices.map((o) => (
                <li key={o.id} className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a54e]" />
                  <div className="min-w-0">
                    <p className="text-[12px] text-[#8d8674]">
                      {t.footer.offices[o.id as keyof typeof t.footer.offices]} — {o.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${o.phone}`}
                        dir="ltr"
                        className="text-[13.5px] font-medium tracking-wide text-[#d8d1c0] transition-colors hover:text-[#e6c87f]"
                      >
                        {o.phone}
                      </a>
                      <a
                        href={`https://wa.me/${o.phone.replace("+", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`WhatsApp ${o.name}`}
                        className="text-[#46D68B] transition-opacity hover:opacity-75"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#c9a54e]" />
                <a
                  href={`mailto:${CONTACTS.email}`}
                  dir="ltr"
                  className="text-[13.5px] text-[#d8d1c0] transition-colors hover:text-[#e6c87f]"
                >
                  {CONTACTS.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a54e]" />
                <div className="min-w-0">
                  <p className="text-[12px] text-[#8d8674]">{t.footer.hqLabel}</p>
                  <span dir="auto" className="block text-[13.5px] leading-6 text-[#b9b2a2]">
                    {t.footer.address}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mt-12 h-px w-full opacity-50" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[12px] text-[#8d8674]">{t.footer.rights}</p>
          <p className="text-[10px] tracking-[0.35em] text-[#6b6353]" dir="ltr">
            BRIDGING MARKETS · BUILDING FUTURES
          </p>
        </div>
      </div>
    </footer>
  );
}
