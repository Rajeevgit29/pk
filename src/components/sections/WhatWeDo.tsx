import Image from "next/image";
import { whatWeDo } from "@/content/site";
import { ButtonLink } from "../ButtonLink";
import { HandNote, WordStack } from "../Decor";

export function WhatWeDo() {
  const { image } = whatWeDo;
  return (
    <section aria-labelledby="wwd-title" className="paper relative pb-28 pt-16 lg:pb-32">
      <div className="page-container grid items-center gap-12 lg:grid-cols-[minmax(0,21rem)_minmax(0,26rem)] lg:justify-between xl:grid-cols-[minmax(0,21rem)_1fr_minmax(0,26rem)] xl:gap-12">
        <div>
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

        {/* Handwritten note + word list between the text and the photo, where there's room. */}
        <div className="hidden flex-col items-center gap-12 xl:flex">
          <HandNote
            lines={whatWeDo.note}
            arrow="down-right"
            rotate={-9}
            className="text-heading/85"
            textClassName="text-[1.9rem]"
            arrowClassName="ml-24 h-12"
          />
          <WordStack words={whatWeDo.words} />
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[26rem] overflow-hidden rounded-md bg-deep shadow-[0_24px_50px_-28px_rgb(4_49_60/0.6)] lg:mx-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 26rem, (min-width: 480px) 26rem, 92vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
