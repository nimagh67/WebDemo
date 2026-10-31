"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { BrandLockup } from "./Logo";
import { useLang } from "@/lib/i18n";

export type ViewKind = "home" | "oil";

interface HeaderProps {
  view: ViewKind;
  onNavigate: (target: "home" | "oil" | "sectors" | "about" | "certificates" | "contact") => void;
  onQuote: () => void;
}

export default function Header({ view, onNavigate, onQuote }: HeaderProps) {
  const { t, dir } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const Arrow = dir === "rtl" ? ChevronLeft : ChevronRight;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: { key: "home" | "sectors" | "about" | "certificates" | "contact"; label: string }[] = [
    { key: "home", label: t.nav.home },
    { key: "sectors", label: t.nav.sectors },
    { key: "about", label: t.nav.about },
    { key: "certificates", label: t.nav.certificates },
    { key: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-[rgba(201,165,78,0.16)] bg-[#060608]/85 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <button
          onClick={() => onNavigate("home")}
          className="outline-none transition-opacity hover:opacity-85 focus-visible:ring-1 focus-visible:ring-[#e6c87f]"
          aria-label="AROUSHA GLOBAL — Home"
        >
          <BrandLockup size={42} compact={scrolled} />
        </button>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`rounded-full px-4 py-2 text-sm transition-colors outline-none focus-visible:ring-1 focus-visible:ring-[#e6c87f] ${
                view === "home" && item.key === "home"
                  ? "text-[#e6c87f]"
                  : "text-[#d8d1c0] hover:text-[#e6c87f]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onQuote}
            className="hidden h-10 items-center gap-1.5 rounded-full border border-[rgba(201,165,78,0.4)] bg-gradient-to-b from-[rgba(230,200,127,0.16)] to-[rgba(201,165,78,0.06)] px-5 text-sm font-medium text-[#e6c87f] transition-all hover:border-[#c9a54e] hover:shadow-[0_8px_30px_-8px_rgba(201,165,78,0.45)] sm:flex"
          >
            {t.nav.quote}
            <Arrow className="h-4 w-4 rtl:-scale-x-100" />
          </button>

          {/* mobile menu button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(201,165,78,0.25)] text-[#e6c87f] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={t.nav.menu}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile panel */}
      {open && (
        <div className="border-t border-[rgba(201,165,78,0.14)] bg-[#08080c]/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3" aria-label="Mobile">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setOpen(false);
                  onNavigate(item.key);
                }}
                className="rounded-lg px-3 py-3 text-start text-[15px] text-[#d8d1c0] transition-colors hover:bg-white/[0.04] hover:text-[#e6c87f]"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onQuote();
              }}
              className="mx-3 mb-3 mt-1 flex h-11 items-center justify-center gap-2 rounded-full border border-[rgba(201,165,78,0.4)] bg-gradient-to-b from-[rgba(230,200,127,0.16)] to-[rgba(201,165,78,0.06)] text-sm font-medium text-[#e6c87f]"
            >
              {t.nav.quote}
              <Arrow className="h-4 w-4 rtl:-scale-x-100" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
