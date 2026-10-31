"use client";

import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { useLang } from "@/lib/i18n";
import { STATS } from "@/content/data";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const { n } = useLang();
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            if (reduced) {
              setValue(target);
              io.disconnect();
              return;
            }
            const t0 = performance.now();
            const dur = 1600;
            const tick = (now: number) => {
              const p = Math.min(1, (now - t0) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-brand gold-text text-4xl font-bold sm:text-5xl" dir="ltr">
      {n(value)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLang();
  const labels: Record<string, string> = {
    years: t.stats.years,
    countries: t.stats.countries,
    products: t.stats.products,
    clients: t.stats.clients,
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.id} delay={i * 110}>
            <div className="glass group relative overflow-hidden rounded-2xl px-5 py-8 text-center transition-all duration-500 hover:border-[rgba(230,200,127,0.4)] hover:shadow-[0_20px_60px_-20px_rgba(201,165,78,0.35)]">
              {/* top gold hairline */}
              <span className="gold-line absolute inset-x-8 top-0 h-px opacity-60 transition-opacity group-hover:opacity-100" />
              <Counter target={s.value} suffix={s.suffix} />
              <p className="mt-3 text-sm text-[#b9b2a2]">{labels[s.id]}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
