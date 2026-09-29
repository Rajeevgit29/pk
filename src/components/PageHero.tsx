import type { ReactNode } from "react";
import { HandNote, TornEdge } from "./Decor";

/** Dark teal header band that opens every inner page (the site header sits on top of it). */
export function PageHero({
  eyebrow,
  title,
  intro,
  note,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  note?: string[];
  children?: ReactNode;
}) {
  return (
    <section className="on-dark teal-glow relative z-10 pb-20 pt-36 text-white lg:pb-24 lg:pt-48">
      <div className="page-container relative">
        <p className="eyebrow text-white/75">{eyebrow}</p>
        <h1 className="display mt-4 max-w-4xl text-[clamp(2.4rem,5vw,4.4rem)]">{title}</h1>
        {intro && <div className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-white/85">{intro}</div>}
        {children}
        {note && (
          <HandNote
            lines={note}
            arrow="swirl-down-left"
            rotate={-8}
            className="absolute right-6 top-0 hidden text-white/90 lg:block"
            textClassName="text-[2.1rem]"
            arrowClassName="ml-8"
          />
        )}
      </div>
      <TornEdge color="var(--color-petrol)" side="bottom" seed={53} height={30} />
    </section>
  );
}
