"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import type { IconName } from "@/content/site";
import { HandNote } from "./Decor";
import { Icon } from "./Icon";

/** Paper colour, ink colour and how each note is stuck to the board. */
const papers = [
  { paper: "bg-sand text-heading", stick: "tape" },
  { paper: "bg-ocean text-white", stick: "pin" },
  { paper: "bg-paper text-heading", stick: "tape" },
  { paper: "bg-mist text-heading", stick: "pin" },
  { paper: "bg-petrol text-sand", stick: "tape" },
  { paper: "bg-cream-deep text-heading", stick: "pin" },
  { paper: "bg-paper text-ocean", stick: "pin" },
  { paper: "bg-sand text-heading", stick: "tape" },
] as const;
const tilt = [-6, 4, -3, 7, 5, -5, 3, -7];
const nudge = [0, 14, -6, 10, -8, 6, -12, 4];
/** Where each note flies in from when the board first scrolls into view. */
const scatter = [
  [-120, -80, -30],
  [60, -140, 25],
  [140, -60, -20],
  [220, -120, 35],
  [-180, 90, 20],
  [-40, 160, -35],
  [120, 140, 30],
  [240, 70, -25],
];

type Way = { title: string; icon: IconName };
type Point = { x: number; y: number };

/**
 * The ways to get involved as a pinboard of handwritten paper notes. With a mouse, notes can be
 * picked up and dragged around the board ("Tidy up" puts them back); on touch screens they stay put.
 */
export function NoteBoard({ ways }: { ways: Way[] }) {
  const board = useRef<HTMLUListElement>(null);
  const [moved, setMoved] = useState<Point[]>(() => ways.map(() => ({ x: 0, y: 0 })));
  const [order, setOrder] = useState<number[]>(() => ways.map((_, i) => i));
  const [dragging, setDragging] = useState<number | null>(null);
  // "still" until mounted, then "waiting" below the fold, then "in" once scrolled into view.
  const [entrance, setEntrance] = useState<"still" | "waiting" | "in">("still");
  const drag = useRef<{ i: number; start: Point; from: Point; min: Point; max: Point } | null>(null);

  useEffect(() => {
    const el = board.current;
    // Only with a mouse on a wide screen: on phones the notes simply sit on the board.
    const wanted = window.matchMedia("(pointer: fine) and (min-width: 640px) and (prefers-reduced-motion: no-preference)");
    if (!el || !wanted.matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return; // already on screen: no entrance
    setEntrance("waiting");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntrance("in");
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  function onPointerDown(i: number, e: ReactPointerEvent<HTMLLIElement>) {
    if (e.pointerType === "touch" || e.button !== 0 || !board.current) return;
    const b = board.current.getBoundingClientRect();
    const n = e.currentTarget.getBoundingClientRect();
    const pad = 24;
    drag.current = {
      i,
      start: { x: e.clientX, y: e.clientY },
      from: moved[i],
      // Keep the note within the board (with a little overhang).
      min: { x: moved[i].x + b.left - n.left - pad, y: moved[i].y + b.top - n.top - pad },
      max: { x: moved[i].x + b.right - n.right + pad, y: moved[i].y + b.bottom - n.bottom + pad },
    };
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(i);
    setOrder((o) => [...o.filter((j) => j !== i), i]);
  }

  function onPointerMove(e: ReactPointerEvent<HTMLLIElement>) {
    const d = drag.current;
    if (!d) return;
    const x = Math.min(d.max.x, Math.max(d.min.x, d.from.x + e.clientX - d.start.x));
    const y = Math.min(d.max.y, Math.max(d.min.y, d.from.y + e.clientY - d.start.y));
    setMoved((m) => m.map((p, j) => (j === d.i ? { x, y } : p)));
  }

  function onPointerUp() {
    drag.current = null;
    setDragging(null);
  }

  const anyMoved = moved.some((p) => p.x !== 0 || p.y !== 0);

  return (
    <div className="relative">
      <div className="mb-6 hidden items-end justify-between gap-4 [@media(pointer:fine)]:flex">
        <HandNote lines={["psst… pick one up", "and move it around"]} rotate={-3} className="text-ocean" textClassName="text-[1.6rem]" />
        <button
          type="button"
          onClick={() => {
            setMoved(ways.map(() => ({ x: 0, y: 0 })));
            setOrder(ways.map((_, i) => i));
          }}
          className={`font-hand text-[1.5rem] text-heading underline decoration-wavy decoration-sand underline-offset-4 transition-opacity hover:text-ocean ${
            anyMoved ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          Tidy up
        </button>
      </div>

      <ul ref={board} className="grid grid-cols-2 gap-x-3 gap-y-7 px-1 py-2 sm:grid-cols-4 sm:gap-x-4">
        {ways.map((way, i) => {
          const { paper, stick } = papers[i % papers.length];
          const lifted = dragging === i;
          const away = entrance === "waiting";
          const [sx, sy, sr] = scatter[i % scatter.length];
          const style = {
            "--x": `${moved[i].x + (away ? sx : 0)}px`,
            "--y": `${moved[i].y + nudge[i % nudge.length] + (away ? sy : 0)}px`,
            "--r": `${lifted ? 0 : away ? sr : tilt[i % tilt.length]}deg`,
            "--s": lifted ? 1.08 : 1,
            zIndex: order.indexOf(i) + 1,
            opacity: away ? 0 : 1,
            transitionDuration: lifted ? "0ms, 200ms" : entrance === "in" ? "700ms, 300ms" : undefined,
            transitionDelay: entrance === "in" && !anyMoved ? `${i * 70}ms` : undefined,
          } as CSSProperties;
          return (
            <li
              key={way.title}
              style={style}
              onPointerDown={(e) => onPointerDown(i, e)}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              className={`relative flex aspect-square select-none flex-col justify-between rounded-[3px] p-4 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [transform:translate(var(--x),calc(var(--y)+var(--lift,0px)))_rotate(var(--r))_scale(var(--s))] sm:p-5 [@media(pointer:fine)]:cursor-grab [@media(pointer:fine)]:hover:[--lift:-6px] [@media(pointer:fine)]:hover:[--r:0deg] ${
                lifted
                  ? "cursor-grabbing! shadow-[0_30px_40px_-14px_rgb(4_49_60/0.55)]"
                  : "shadow-[0_14px_22px_-12px_rgb(4_49_60/0.5)]"
              } ${paper}`}
            >
              {/* Folded-paper shading in the bottom corner. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[3px] bg-[linear-gradient(135deg,transparent_62%,rgb(0_0_0/0.07)_100%)]"
              />
              {stick === "tape" ? (
                <span
                  aria-hidden="true"
                  className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-[-5deg] bg-white/55 shadow-sm backdrop-blur-[1px]"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="absolute -top-2 left-1/2 size-4 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#f6e7cf,#c0892e_55%,#7a4f12)] shadow-[0_3px_4px_rgb(0_0_0/0.35)]"
                />
              )}
              <span className="relative font-hand text-[clamp(1.55rem,2.1vw,2.05rem)] leading-[0.95]">{way.title}</span>
              <Icon name={way.icon} className="relative size-6 self-end opacity-60" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
