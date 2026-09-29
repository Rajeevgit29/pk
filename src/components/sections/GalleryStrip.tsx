import { gallery } from "@/content/site";
import { ButtonLink } from "../ButtonLink";
import { PhotoTile } from "../PhotoTile";

const icons = ["people", "football", "book", "stage", "volunteers"] as const;

export function GalleryStrip() {
  return (
    <section aria-labelledby="gallery-title" className="paper relative pb-10 pt-20 lg:pt-24">
      <div className="page-container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-ocean">{gallery.eyebrow}</p>
            <h2 id="gallery-title" className="display mt-3 text-[clamp(2rem,3.2vw,2.8rem)] text-heading">
              {gallery.title}
            </h2>
            <p className="mt-2 text-[1.02rem]">{gallery.intro}</p>
          </div>
          <ButtonLink href="/gallery" variant="text-dark" arrow size="sm">
            View Full Gallery
          </ButtonLink>
        </div>
      </div>
      <ul className="page-container mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] lg:grid lg:grid-cols-[1.15fr_1fr_1fr_0.8fr_1.15fr] lg:overflow-visible">
        {gallery.strip.map((photo, i) => (
          <li key={i} className="w-[72%] shrink-0 snap-start sm:w-[42%] lg:w-auto">
            <PhotoTile
              photo={photo}
              icon={icons[i % icons.length]}
              sizes="(min-width: 1024px) 22vw, 72vw"
              className="aspect-[4/3] rounded-md lg:aspect-auto lg:h-56"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
