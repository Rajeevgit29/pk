import Image from "next/image";
import type { ReactNode } from "react";
import { HandNote, TornEdge } from "./Decor";

/**
 * Dark teal header band that opens every inner page (the site header sits on top of it).
 * With `image`, the photo sits to the right of the text and the handwritten note moves under the text.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  note,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  note?: string[];
  image?: { src: string; alt: string };
  children?: ReactNode;
}) {
  return (
    <section className="on-dark teal-glow relative z-10 pb-20 pt-36 text-white lg:pb-24 lg:pt-48">
      <div
        className={`page-container relative ${
          image
            ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,23rem)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] xl:gap-20"
            : ""
        }`}
      >
        <div>
          <p className="eyebrow text-white/75">{eyebrow}</p>
          <h1
            className={`display mt-4 max-w-4xl ${
              image ? "text-[clamp(2.3rem,4.2vw,3.7rem)]" : "text-[clamp(2.4rem,5vw,4.4rem)]"
            }`}
          >
            {title}
          </h1>
          {intro && <div className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-white/85">{intro}</div>}
          {children}
          {note && image && (
            <HandNote
              lines={note}
              rotate={-5}
              className="mt-10 hidden w-fit text-white/90 md:block"
              textClassName="text-[2rem]"
            />
          )}
        </div>

        {image && (
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-md bg-deep shadow-[0_30px_60px_-30px_rgb(0_0_0/0.7)] lg:max-w-none">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload
              sizes="(min-width: 1280px) 26rem, (min-width: 1024px) 23rem, (min-width: 480px) 28rem, 92vw"
              className="object-cover"
            />
          </div>
        )}

        {note && !image && (
          <HandNote
            lines={note}
            arrow="swirl-down-left"
            rotate={-8}
            className="absolute right-6 top-0 hidden text-white/90 xl:block"
            textClassName="text-[2.1rem]"
            arrowClassName="ml-8"
          />
        )}
      </div>
      <TornEdge color="var(--color-petrol)" side="bottom" seed={53} height={30} />
    </section>
  );
}
