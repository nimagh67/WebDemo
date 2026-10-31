"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DICTS, type Dict, type Lang } from "@/content/dict";

export type { Lang };

export const LANG_META: Record<
  Lang,
  { label: string; dir: "rtl" | "ltr"; font: "vazir" | "inter" }
> = {
  fa: { label: "فارسی", dir: "rtl", font: "vazir" },
  en: { label: "English", dir: "ltr", font: "inter" },
  ar: { label: "العربية", dir: "rtl", font: "vazir" },
  ru: { label: "Русский", dir: "ltr", font: "inter" },
  tr: { label: "Türkçe", dir: "ltr", font: "inter" },
};

export const LANG_ORDER: Lang[] = ["fa", "en", "ar", "ru", "tr"];

const LANG_KEY = "arousha-lang";

function detectLang(): Lang {
  if (typeof window === "undefined") return "fa";
  try {
    const saved = window.localStorage.getItem(LANG_KEY);
    if (saved && saved in LANG_META) return saved as Lang;
    const candidates =
      navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || "fa"];
    for (const cand of candidates) {
      const c = (cand || "").toLowerCase();
      if (c.startsWith("fa")) return "fa";
      if (c.startsWith("ar")) return "ar";
      if (c.startsWith("ru")) return "ru";
      if (c.startsWith("tr")) return "tr";
      if (c.startsWith("en")) return "en";
    }
  } catch {
    /* ignore */
  }
  return "en";
}

/* ---------- number formatting ---------- */
const FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function fmtNum(value: number | string, lang: Lang): string {
  const s = String(value);
  if (lang !== "fa") return s;
  return s.replace(/\d/g, (d) => FA_DIGITS[Number(d)]);
}

/* ---------- context ---------- */
interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  dir: "rtl" | "ltr";
  n: (v: number | string) => string;
}

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fa");

  useEffect(() => {
    const detected = detectLang();
    const raf = requestAnimationFrame(() => setLangState(detected));
    return () => cancelAnimationFrame(raf);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(LANG_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const dir = LANG_META[lang].dir;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.documentElement.dataset.langFont = LANG_META[lang].font;
  }, [lang, dir]);

  const value = useMemo<LangCtx>(
    () => ({
      lang,
      setLang,
      t: DICTS[lang],
      dir,
      n: (v: number | string) => fmtNum(v, lang),
    }),
    [lang, setLang, dir],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
