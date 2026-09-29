import { whoWeAre } from "@/content/site";
import { ButtonLink } from "../ButtonLink";
import { TornEdge, WordStack } from "../Decor";
import { PhotoTile } from "../PhotoTile";

export function WhoWeAre() {
  return (
    <section aria-labelledby="wwa-title" className="paper relative py-24 lg:py-28">
      <div className="page-container grid items-center gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-12 xl:grid-cols-[minmax(0,22rem)_1fr_auto]">
        <div>
          <p className="eyebrow text-ocean">{whoWeAre.eyebrow}</p>
          <h2 id="wwa-title" className="display mt-4 text-[clamp(2.5rem,4.2vw,3.7rem)] text-heading">
            {whoWeAre.title.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          <p className="mt-6 leading-relaxed">{whoWeAre.intro}</p>
          <ButtonLink href="/who-we-are" variant="outline-dark" arrow size="sm" className="mt-8 h-11">
            Our Story
          </ButtonLink>
        </div>

        <div className="relative">
          <PhotoTile
            photo={whoWeAre.image}
            icon="volunteers"
            label="Team photo coming soon"
            labelClassName="bottom-8"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[16/10] w-full"
          />
          <TornEdge color="var(--color-cream)" side="top" inward seed={31} height={22} />
          <TornEdge color="var(--color-cream)" side="bottom" inward seed={37} height={22} />
        </div>

        <WordStack words={whoWeAre.words} className="hidden xl:block" />
      </div>
    </section>
  );
}
