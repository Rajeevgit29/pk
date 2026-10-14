import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { PhotoBackdropHero } from "@/components/PhotoBackdropHero";
import { PhotoTile } from "@/components/PhotoTile";
import { initiatives } from "@/content/site";
import { slugify } from "@/lib/slugify";

export const metadata: Metadata = {
  title: "Our Initiatives",
  description: initiatives.intro,
};

export default function InitiativesPage() {
  return (
    <>
      <PhotoBackdropHero
        id="initiatives-title"
        title={initiatives.title}
        image={initiatives.heroImage}
        note={initiatives.note}
        titleClassName="text-[clamp(2.6rem,5vw,4.5rem)]"
        imageClassName="object-[50%_40%] lg:object-[50%_60%]"
      >
        <p className="mt-6 max-w-[38rem] copy text-white/85">{initiatives.intro}</p>
      </PhotoBackdropHero>

      <section className="paper relative py-24 lg:py-28">
        <ul className="page-container grid gap-6 md:grid-cols-2 lg:gap-8">
          {initiatives.items.map((item, i) => (
            <li
              key={item.title}
              id={slugify(item.title)}
              className="group scroll-mt-28 overflow-hidden rounded-lg border border-line bg-paper sm:grid sm:grid-cols-[0.9fr_1.1fr]"
            >
              <PhotoTile
                photo={item.image}
                icon={item.icon}
                tone={i % 2 ? "teal" : "ocean"}
                label="Photo coming soon"
                imageClassName={item.focus}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 100vw"
                className="aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-60"
              />
              <div className="p-6 lg:p-8">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ocean">
                  <Icon name={item.icon} className="size-4" />
                  0{i + 1}
                </p>
                <h2 className="mt-3 font-serif text-[1.6rem] font-semibold leading-tight text-heading">{item.title}</h2>
                <p className="mt-1 font-hand text-[1.45rem] leading-tight text-deep">{item.tagline}</p>
                <p className="copy-sm mt-4">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
