import Link from "next/link";
import { whatWeDo } from "@/content/site";
import { ButtonLink } from "../ButtonLink";
import { HandNote, WordStack } from "../Decor";
import { PhotoTile } from "../PhotoTile";

export function WhatWeDo() {
  return (
    <section aria-labelledby="wwd-title" className="paper relative pb-24 pt-16 lg:pb-28">
      <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,21rem)_1fr] lg:gap-12 xl:gap-16">
        <div className="lg:pt-6">
          <p className="eyebrow text-ocean">{whatWeDo.eyebrow}</p>
          <h2 id="wwd-title" className="display mt-4 text-[clamp(2.6rem,4.6vw,4rem)] text-heading">
            {whatWeDo.title.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-[21rem] leading-relaxed">{whatWeDo.intro}</p>
          <ButtonLink href="/what-we-do" variant="outline-dark" arrow size="sm" className="mt-8 h-11">
            Explore What We Do
          </ButtonLink>
        </div>

        <div className="flex flex-col">
          <div className="relative hidden min-h-32 items-start justify-end gap-10 md:flex">
            <HandNote
              lines={whatWeDo.note}
              arrow="down"
              rotate={-9}
              className="mr-auto ml-[34%] text-heading/85"
              textClassName="text-[1.9rem]"
              arrowClassName="ml-16 -mt-1 h-12"
            />
            <WordStack words={whatWeDo.words} />
          </div>

          <ul className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-auto xl:grid-cols-6 xl:gap-3.5">
            {whatWeDo.cards.map((card) => (
              <li key={card.title}>
                <Link
                  href="/what-we-do"
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-line bg-paper shadow-[0_1px_0_rgb(0_0_0/0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgb(4_49_60/0.45)]"
                >
                  <div className="overflow-hidden">
                    <PhotoTile
                      photo={card.image}
                      icon={card.icon}
                      showLabel={false}
                      label={`${card.title} (photo coming soon)`}
                      sizes="(min-width: 1280px) 12vw, (min-width: 1024px) 20vw, (min-width: 640px) 30vw, 45vw"
                      className="aspect-[4/3.6] transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="px-3 py-3 text-[0.86rem] font-medium leading-snug text-heading">{card.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
