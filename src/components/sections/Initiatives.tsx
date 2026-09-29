import Link from "next/link";
import { initiatives } from "@/content/site";
import { slugify } from "@/lib/slugify";
import { ButtonLink } from "../ButtonLink";
import { HandNote, TornEdge } from "../Decor";
import { Icon } from "../Icon";
import { PhotoTile } from "../PhotoTile";

export function Initiatives() {
  return (
    <section aria-labelledby="initiatives-title" className="on-dark teal-glow relative z-10 py-20 text-white lg:py-24">
      <TornEdge color="var(--color-petrol)" side="top" seed={11} />
      <div className="page-container">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr_auto] lg:items-end lg:gap-12">
          <div>
            <p className="eyebrow text-white/75">{initiatives.eyebrow}</p>
            <h2 id="initiatives-title" className="display mt-4 text-[clamp(2.6rem,4.6vw,4rem)]">
              {initiatives.title}
            </h2>
          </div>
          <div className="max-w-md">
            <p className="leading-relaxed text-white/85">{initiatives.intro}</p>
            <ButtonLink href="/initiatives" variant="text-light" arrow size="sm" className="mt-3">
              Explore All Initiatives
            </ButtonLink>
          </div>
          <HandNote
            lines={initiatives.note}
            arrow="down-right"
            rotate={-8}
            className="hidden text-white/90 lg:block"
            textClassName="text-[1.9rem]"
            arrowClassName="ml-14"
          />
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
          {initiatives.items.map((item) => (
            <li key={item.title}>
              <Link
                href={`/initiatives#${slugify(item.title)}`}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-white/12 bg-abyss/40 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-abyss/60"
              >
                <div className="overflow-hidden">
                  <PhotoTile
                    photo={item.image}
                    icon={item.icon}
                    tone="ocean"
                    showLabel={false}
                    label={`${item.title} (photo coming soon)`}
                    sizes="(min-width: 1280px) 16vw, (min-width: 768px) 30vw, 48vw"
                    className="aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 items-end justify-between gap-3 p-3 sm:p-4">
                  <div>
                    <p className="text-[0.88rem] font-medium leading-snug sm:text-[0.95rem]">{item.title}</p>
                    <p className="mt-1 hidden text-[0.78rem] leading-snug text-white/60 sm:block">{item.tagline}</p>
                  </div>
                  <Icon name="arrow" className="mb-0.5 size-4 shrink-0 text-white/70 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <TornEdge color="var(--color-petrol)" side="bottom" seed={23} height={28} />
    </section>
  );
}
