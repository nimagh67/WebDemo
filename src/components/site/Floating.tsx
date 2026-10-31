"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CONTACTS } from "@/content/data";

const GREETINGS: Record<string, string> = {
  fa: "سلام، برای استعلام قیمت از آروشا گلوبال تماس گرفتم.",
  en: "Hello, I would like to request a quotation from AROUSHA GLOBAL.",
  ar: "مرحباً، أرغب في طلب عرض سعر من آروشا جلوبال.",
  ru: "Здравствуйте, хотел бы запросить коммерческое предложение в AROUSHA GLOBAL.",
  tr: "Merhaba, AROUSHA GLOBAL'den fiyat teklifi almak istiyorum.",
};

export default function Floating() {
  const { t, lang } = useLang();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 650);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waHref = `https://wa.me/${CONTACTS.whatsappPrimary}?text=${encodeURIComponent(
    GREETINGS[lang] ?? GREETINGS.en,
  )}`;

  return (
    <>
      {/* WhatsApp — pulsing, confirmed line: Tehran HQ */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.common.whatsapp}
        className="group fixed bottom-5 end-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1faa53] shadow-[0_10px_35px_-8px_rgba(31,170,83,0.65)] transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#46D68B]"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366]/60 animate-ping [animation-duration:2.2s]" />
        <MessageCircle className="relative h-7 w-7 text-white" fill="currentColor" />
      </a>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={t.common.backTop}
        className={`fixed bottom-5 start-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(201,165,78,0.35)] bg-[#0b0b10]/85 text-[#e6c87f] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] backdrop-blur transition-all duration-500 hover:border-[#c9a54e] hover:bg-[#15120a] ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
