import { reach, stats } from "@/content/site";
import { TornEdge } from "../Decor";
import { Icon } from "../Icon";
import { StatsCounter } from "./StatsCounter";

export function StatsBar() {
  return (
    <section aria-label="The scale of the movement" className="on-dark relative z-10 bg-petrol text-white">
      <TornEdge color="var(--color-petrol)" side="top" seed={3} height={38} />
      <div className="page-container py-12 lg:py-10">
        <h2 className="sr-only">The Scale of the Movement</h2>
        <StatsCounter stats={stats} />
        <p className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center text-[0.92rem] text-white/85 lg:mt-8">
          <span className="inline-flex items-center gap-2">
            <Icon name="pin" className="size-5 text-white [--pin-hole:var(--color-petrol)]" />
            {reach.home}
          </span>
          <span aria-hidden="true" className="hidden size-1 rounded-full bg-white/70 sm:block" />
          <span>{reach.expanding}</span>
        </p>
      </div>
      <TornEdge color="var(--color-petrol)" side="bottom" seed={19} height={30} />
    </section>
  );
}
