"use client";

import React, { useEffect, useRef } from "react";
import mapData from "@/content/map-data.json";

/**
 * AROUSHA GLOBAL — living golden world map.
 * Golden dotted landmass + faint seas, glowing office/port cities,
 * dashed trade routes with slow comet trails + moving cargo ships,
 * pulsing ports. Respects prefers-reduced-motion.
 */

type Pt = { x: number; y: number };

const GRID = mapData.grid;
const ROWS = mapData.rows;
const CITIES = mapData.cities as {
  n: string;
  lon: number;
  lat: number;
  t: string;
  hub: boolean;
}[];
const ROUTES = mapData.routes as { id: string; pts: [number, number][] }[];

const GOLD = "201,165,78";
const GOLD2 = "230,200,127";
const SEA = "96,116,168";

/* deterministic pseudo random */
function prand(a: number) {
  const x = Math.sin(a * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function catmullRom(points: Pt[], segs = 16): Pt[] {
  if (points.length < 3) return points.slice();
  const out: Pt[] = [];
  const p = [points[0], ...points, points[points.length - 1]];
  for (let i = 1; i < p.length - 2; i++) {
    const p0 = p[i - 1], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2];
    for (let s = 0; s < segs; s++) {
      const t = s / segs;
      const t2 = t * t;
      const t3 = t2 * t;
      out.push({
        x:
          0.5 *
          (2 * p1.x +
            (-p0.x + p2.x) * t +
            (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
            (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
        y:
          0.5 *
          (2 * p1.y +
            (-p0.y + p2.y) * t +
            (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
            (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
      });
    }
  }
  out.push(points[points.length - 1]);
  return out;
}

export default function WorldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let mapW = 0;
    let mapH = 0;
    let mapTop = 0;
    let mapLeft = 0;

    let offscreen: HTMLCanvasElement | null = null;
    let routeCurves: { pts: Pt[]; speed: number; offset: number }[] = [];
    let cityPts: { x: number; y: number; t: string; hub: boolean; phase: number }[] = [];
    let shipRefs: { route: number; speed: number; offset: number }[] = [];

    let raf = 0;
    let running = true;
    let mx = 0.5;
    let my = 0.5;
    let px = 0.5;
    let py = 0.5; // smoothed parallax

    const project = (lon: number, lat: number): Pt => ({
      x: mapLeft + ((lon - GRID.lonMin) / (GRID.lonMax - GRID.lonMin)) * mapW,
      y: mapTop + ((GRID.latMax - lat) / (GRID.latMax - GRID.latMin)) * mapH,
    });

    function buildOffscreen() {
      offscreen = document.createElement("canvas");
      offscreen.width = Math.max(1, Math.floor(width * dpr));
      offscreen.height = Math.max(1, Math.floor(height * dpr));
      const o = offscreen.getContext("2d");
      if (!o) return;
      o.scale(dpr, dpr);

      const scale = Math.min(Math.max(mapW / 1500, 0.55), 1.25);
      const nLon = GRID.nLon;
      for (let i = 0; i < ROWS.length; i++) {
        const row = ROWS[i].s;
        const lat = ROWS[i].lat;
        for (let j = 0; j < nLon; j++) {
          const lon = GRID.lonMin + (j + 0.5) * GRID.step;
          const { x, y } = project(lon, lat);
          if (x < -4 || x > width + 4 || y < -4 || y > height + 4) continue;
          const isLand = row[j] === "1";
          if (isLand) {
            const v = prand(i * 91 + j);
            const r = (v > 0.86 ? 1.45 : 1.05) * scale;
            o.fillStyle = `rgba(${GOLD},${(0.22 + v * 0.3).toFixed(3)})`;
            o.beginPath();
            o.arc(x, y, r, 0, Math.PI * 2);
            o.fill();
            if (v > 0.965) {
              o.fillStyle = `rgba(${GOLD2},0.5)`;
              o.beginPath();
              o.arc(x, y, r * 0.7, 0, Math.PI * 2);
              o.fill();
            }
          } else {
            o.fillStyle = `rgba(${SEA},0.10)`;
            o.beginPath();
            o.arc(x, y, 0.85 * scale, 0, Math.PI * 2);
            o.fill();
          }
        }
      }
    }

    function rebuild() {
      const rect = canvas!.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);

      mapW = Math.max(width * 1.12, 760);
      mapH = mapW * ((GRID.latMax - GRID.latMin) / (GRID.lonMax - GRID.lonMin));
      mapLeft = (width - mapW) / 2;
      mapTop = height * 0.42 - mapH * 0.5;

      buildOffscreen();

      routeCurves = ROUTES.map((r, i) => ({
        pts: catmullRom(r.pts.map(([lon, lat]) => project(lon, lat))),
        speed: 0.006 + prand(i * 7) * 0.007,
        offset: prand(i * 13),
      }));

      cityPts = CITIES.map((c, i) => ({
        ...project(c.lon, c.lat),
        t: c.t,
        hub: c.hub,
        phase: prand(i * 17),
      }));

      shipRefs = [1, 5, 6, 2, 9].map((idx, k) => ({
        route: idx,
        speed: 0.012 + prand(idx * 3) * 0.008,
        offset: prand(idx * 11) + k * 0.13,
      }));
    }

    function drawComet(
      c: { pts: Pt[]; speed: number; offset: number },
      time: number,
      opts?: { tail?: number; hue?: string; width?: number; head?: number },
    ) {
      const tail = opts?.tail ?? 60;
      const hue = opts?.hue ?? GOLD2;
      const lw = opts?.width ?? 1.4;
      const headR = opts?.head ?? 2;
      const n = c.pts.length;
      if (n < 2) return;
      const prog = (time * c.speed + c.offset) % 1;
      const head = Math.floor(prog * n);
      const start = Math.max(0, head - tail);
      const L = tail;

      ctx!.lineCap = "round";
      for (let i = start + 1; i <= head; i++) {
        const f = (i - start) / L; // 0 tail → 1 head
        ctx!.strokeStyle = `rgba(${hue},${(f * f * 0.55).toFixed(3)})`;
        ctx!.lineWidth = lw * (0.4 + f * 0.8);
        ctx!.beginPath();
        ctx!.moveTo(c.pts[i - 1].x, c.pts[i - 1].y);
        ctx!.lineTo(c.pts[i].x, c.pts[i].y);
        ctx!.stroke();
      }

      const hp = c.pts[head];
      const g = ctx!.createRadialGradient(hp.x, hp.y, 0, hp.x, hp.y, headR * 6);
      g.addColorStop(0, `rgba(255,248,220,0.95)`);
      g.addColorStop(0.3, `rgba(${hue},0.55)`);
      g.addColorStop(1, `rgba(${hue},0)`);
      ctx!.fillStyle = g;
      ctx!.beginPath();
      ctx!.arc(hp.x, hp.y, headR * 6, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.fillStyle = `rgba(255,250,230,0.95)`;
      ctx!.beginPath();
      ctx!.arc(hp.x, hp.y, headR * 0.9, 0, Math.PI * 2);
      ctx!.fill();
    }

    function draw(time: number) {
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // subtle parallax
      px += (mx - px) * 0.04;
      py += (my - py) * 0.04;
      const ox = (px - 0.5) * -14;
      const oy = (py - 0.5) * -10;
      ctx.translate(ox, oy);

      if (offscreen) {
        ctx.drawImage(offscreen, 0, 0, width, height);
      }

      // base dashed routes
      ctx.save();
      ctx.setLineDash([2, 7]);
      ctx.lineWidth = 1;
      for (const r of routeCurves) {
        ctx.strokeStyle = `rgba(${GOLD},0.16)`;
        ctx.beginPath();
        r.pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
        ctx.stroke();
      }
      ctx.restore();

      // comets
      for (const r of routeCurves) drawComet(r, time);

      // ships
      for (const s of shipRefs) {
        const r = routeCurves[s.route];
        if (!r) continue;
        const n = r.pts.length;
        const prog = (time * s.speed + s.offset) % 1;
        const idx = Math.min(n - 1, Math.floor(prog * n));
        const hp = r.pts[idx];
        const g = ctx.createRadialGradient(hp.x, hp.y, 0, hp.x, hp.y, 9);
        g.addColorStop(0, "rgba(255,244,214,0.9)");
        g.addColorStop(0.4, "rgba(230,200,127,0.4)");
        g.addColorStop(1, "rgba(230,200,127,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(hp.x, hp.y, 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255,250,235,0.98)";
        ctx.beginPath();
        ctx.arc(hp.x, hp.y, 1.7, 0, Math.PI * 2);
        ctx.fill();
      }

      // cities
      for (const c of cityPts) {
        const isOffice = c.t === "office";
        const pulseT = (time * 0.25 + c.phase) % 1;
        const pr = 3 + pulseT * (c.hub ? 15 : 9);
        const pa = (1 - pulseT) * (c.hub ? 0.5 : 0.32);
        ctx.strokeStyle = `rgba(${GOLD2},${pa.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(c.x, c.y, pr, 0, Math.PI * 2);
        ctx.stroke();

        if (isOffice) {
          ctx.save();
          ctx.translate(c.x, c.y);
          ctx.rotate(Math.PI / 4);
          const s = c.hub ? 3.4 : 2.4;
          ctx.fillStyle = c.hub ? `rgba(${GOLD2},0.95)` : `rgba(${GOLD},0.8)`;
          ctx.fillRect(-s, -s, s * 2, s * 2);
          ctx.restore();
          if (c.hub) {
            const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, 14);
            g.addColorStop(0, `rgba(${GOLD2},0.5)`);
            g.addColorStop(1, `rgba(${GOLD2},0)`);
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(c.x, c.y, 14, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          ctx.fillStyle = `rgba(${GOLD2},${c.hub ? 0.95 : 0.7})`;
          ctx.beginPath();
          ctx.arc(c.x, c.y, c.hub ? 2.6 : 1.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function loop() {
      if (!running) return;
      draw(performance.now() / 1000);
      raf = requestAnimationFrame(loop);
    }

    function staticDraw() {
      draw(1.7); // fixed pleasing time for static render
    }

    rebuild();
    if (reduced) {
      staticDraw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    const onResize = () => {
      rebuild();
      if (reduced) staticDraw();
    };
    const onMouse = (e: MouseEvent) => {
      mx = e.clientX / Math.max(1, window.innerWidth);
      my = e.clientY / Math.max(1, window.innerHeight);
    };
    const onVis = () => {
      if (reduced) return;
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    window.addEventListener("resize", onResize);
    if (!reduced) window.addEventListener("mousemove", onMouse);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 h-full w-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
