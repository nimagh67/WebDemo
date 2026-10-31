"use client";

import React, { useCallback, useEffect, useState } from "react";
import { LangProvider, useLang } from "@/lib/i18n";
import WorldCanvas from "./WorldCanvas";
import Sheen from "./Sheen";
import TopBar from "./TopBar";
import Header, { type ViewKind } from "./Header";
import Hero from "./Hero";
import Stats from "./Stats";
import Sectors from "./Sectors";
import About from "./About";
import Certificates from "./Certificates";
import CtaPanels from "./CtaPanels";
import Footer from "./Footer";
import Floating from "./Floating";
import QuoteModal from "./QuoteModal";
import OilSector from "./OilSector";

function Shell() {
  const { dir, t } = useLang();
  const [view, setView] = useState<ViewKind>("home");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [prefill, setPrefill] = useState<string | undefined>(undefined);

  const scrollToId = useCallback((id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const navigate = useCallback(
    (target: "home" | "oil" | "sectors" | "about" | "certificates" | "contact") => {
      if (target === "oil") {
        setView("oil");
        return;
      }
      if (view === "oil") {
        setView("home");
        window.setTimeout(() => scrollToId(target), 150);
        return;
      }
      scrollToId(target);
    },
    [view, scrollToId],
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view]);

  const openQuote = useCallback((p?: string) => {
    setPrefill(p);
    setQuoteOpen(true);
  }, []);

  const onSectorOpen = useCallback(
    (sectorId: string) => {
      if (sectorId === "oil") {
        navigate("oil");
      } else {
        const info = t.sectors.items[sectorId as keyof typeof t.sectors.items];
        openQuote(info ? `${info.name} — ${t.sectors.soon}` : undefined);
      }
    },
    [navigate, openQuote, t],
  );

  return (
    <div dir={dir} className="relative min-h-screen w-full bg-[#060608]">
      <WorldCanvas />
      <Sheen />

      <div className="relative z-10 flex min-h-screen flex-col">
        <TopBar />
        <Header view={view} onNavigate={navigate} onQuote={() => openQuote()} />

        <main className="flex-1">
          {view === "home" ? (
            <>
              <Hero onQuote={() => openQuote()} onSectors={() => scrollToId("sectors")} />
              <Stats />
              <Sectors onOpen={onSectorOpen} />
              <About onQuote={() => openQuote()} onContact={() => navigate("contact")} />
              <Certificates />
              <CtaPanels onQuote={() => openQuote()} />
            </>
          ) : (
            <OilSector onBack={() => navigate("home")} onQuote={openQuote} />
          )}
        </main>

        <Footer onNavigate={navigate} />
      </div>

      <Floating />
      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} prefill={prefill} />
    </div>
  );
}

export default function SiteApp() {
  return (
    <LangProvider>
      <Shell />
    </LangProvider>
  );
}
