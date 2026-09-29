"use client";

import { useEffect, useRef, useState } from "react";
import type { stats as statsData } from "@/content/site";
import { Icon } from "../Icon";

type Stat = (typeof statsData)[number];

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;
const indian = new Intl.NumberFormat("en-IN");
const LOAD_COUNT_MS = 1800;

function display(stat: Stat, progress: number) {
  if (progress >= 1) return stat.value;
  return `${stat.prefix ?? ""}${indian.format(Math.round(stat.count * easeOutCubic(progress)))}`;
}

/**
 * The six statistics, counting up from 0 as the user scrolls through the stats section:
 * 0 when the section's top edge enters the screen, final values once its bottom edge is in view.
 * Progress only ever moves forward, so it plays once per page load.
 *
 * If the section is mostly on screen when the page opens (e.g. the home page on a laptop),
 * there's little or no scroll to drive it, so it counts up over ~1.8s instead. If it's only
 * partly on screen, scrolling drives it from 0 at the current position to the totals.
 */
export function StatsCounter({ stats }: { stats: Stat[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const section = list.closest("section") ?? list;

    let reached = 0;
    let frame = 0;
    let listening = false;
    let startAt = 0; // how revealed the section already was when the page opened

    const showTotals = () => {
      frame = requestAnimationFrame(() => setProgress(1));
      return () => cancelAnimationFrame(frame);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return showTotals();

    const revealed = () => {
      const rect = section.getBoundingClientRect();
      const r = (window.innerHeight - rect.top) / Math.max(1, rect.height);
      return Math.min(1, Math.max(0, r));
    };
    const measure = () => {
      const p = Math.min(1, Math.max(0, (revealed() - startAt) / (1 - startAt)));
      return p > 0.99 ? 1 : p; // snap the last sub-pixel so the "+" / "₹15L+" always lands
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const p = measure();
        if (p > reached) {
          reached = p;
          setProgress(p);
        }
        if (reached >= 1) finish();
      });
    };

    const listen = (on: boolean) => {
      if (on === listening) return;
      listening = on;
      const method = on ? "addEventListener" : "removeEventListener";
      window[method]("scroll", onScroll, { passive: true } as AddEventListenerOptions);
      window[method]("resize", onScroll);
    };

    // Only follow the scroll while the section is on (or about to come on) screen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScroll();
        listen(entry.isIntersecting);
      },
      { rootMargin: "0px 0px 15% 0px" },
    );

    const finish = () => {
      listen(false);
      observer.disconnect();
    };

    // Page opened already scrolled past the stats (e.g. reload mid-page): just show the totals.
    if (section.getBoundingClientRect().bottom <= 0) return showTotals();
    const initial = revealed();
    if (initial >= 0.5) {
      // Mostly visible on load: too little left to scroll through, so count up over time.
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / LOAD_COUNT_MS);
        setProgress(t);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    }

    startAt = initial;
    observer.observe(section);
    return () => {
      cancelAnimationFrame(frame);
      finish();
    };
  }, []);

  return (
    <ul ref={listRef} className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0">
      {stats.map((s, i) => (
        <li
          key={s.label}
          className={`flex flex-col items-center text-center lg:px-4 ${i > 0 ? "lg:border-l lg:border-white/15" : ""}`}
        >
          <Icon name={s.icon} className="size-8 text-white/85" strokeWidth={1.3} />
          <p className="mt-3 whitespace-nowrap font-serif text-[clamp(1.9rem,2.7vw,2.6rem)] font-semibold leading-none tracking-tight tabular-nums">
            <span className="sr-only">{s.value}</span>
            <span aria-hidden="true" className="motion-reduce:hidden">
              {display(s, progress)}
            </span>
            <span aria-hidden="true" className="hidden motion-reduce:inline">
              {s.value}
            </span>
          </p>
          <p className="mt-2 max-w-[11rem] text-[0.84rem] leading-snug text-white/80">{s.label}</p>
        </li>
      ))}
    </ul>
  );
}
