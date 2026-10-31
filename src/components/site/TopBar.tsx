"use client";

import React from "react";
import { Phone, Mail, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLang, LANG_META, LANG_ORDER } from "@/lib/i18n";
import { CONTACTS } from "@/content/data";

export default function TopBar() {
  const { t, lang, setLang } = useLang();

  return (
    <div className="relative z-30 w-full border-b border-[rgba(201,165,78,0.14)] bg-black/45 backdrop-blur-md">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* contact side */}
        <div className="flex items-center gap-4 text-xs text-[#cfc7b4]">
          <a
            href={`tel:${CONTACTS.offices[0].phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 transition-colors hover:text-[#e6c87f]"
          >
            <Phone className="h-3.5 w-3.5 text-[#c9a54e]" />
            <span dir="ltr" className="font-medium tracking-wide">
              +98 900 281 0097
            </span>
          </a>
          <a
            href={`mailto:${CONTACTS.email}`}
            className="hidden items-center gap-1.5 transition-colors hover:text-[#e6c87f] sm:flex"
          >
            <Mail className="h-3.5 w-3.5 text-[#c9a54e]" />
            <span dir="ltr" className="font-medium tracking-wide">
              info@aroushaglobal.com
            </span>
          </a>
        </div>

        {/* language switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className="flex h-7 items-center gap-1.5 rounded-full border border-[rgba(201,165,78,0.25)] bg-white/[0.03] px-3 text-xs text-[#e6c87f] outline-none transition-colors hover:bg-white/[0.07] focus-visible:ring-1 focus-visible:ring-[#e6c87f]"
            aria-label={t.common.language}
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{LANG_META[lang].label}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="min-w-[140px] border-[rgba(201,165,78,0.25)] bg-[#0d0d13]/95 backdrop-blur-xl"
          >
            {LANG_ORDER.map((l) => (
              <DropdownMenuItem
                key={l}
                onClick={() => setLang(l)}
                className={`cursor-pointer justify-between text-sm ${
                  l === lang ? "text-[#e6c87f]" : "text-[#cfc7b4]"
                }`}
              >
                <span>{LANG_META[l].label}</span>
                <span dir="ltr" className="text-[10px] uppercase opacity-60">
                  {l}
                </span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
