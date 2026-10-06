import Image from "next/image";
import type { ReactNode } from "react";
import { HandNote, TornEdge } from "./Decor";

/**
 * Dark teal header band that opens every inner page (the site header sits on top of it).
 * With `image`, the photo sits to the right of the text and the handwritten note moves under the text.
 */
export function PageHero({
  title,
  intro,
  note,
  image,
  images,
  bottomEdge = true,
  children,
}: {
  title: ReactNode;
  intro?: ReactNode;
  note?: string[];
  image?: { src: string; alt: string };
  /** Several photos stacked beside the text, for pages with a lot of copy. */
  images?: { src: string; alt: string; aspect: string }[];
  /** Torn edge into the next section; turn off when the footer follows directly (it has its own). */
  bottomEdge?: boolean;
  children?: ReactNode;
}) {
  const photos = images ?? (image ? [{ ...image, aspect: "aspect-[4/5]" }] : []);
  const hasPhotos = photos.length > 0;
  return (
    <section className="on-dark teal-glow relative z-10 pb-20 pt-36 text-white lg:pb-24 lg:pt-48">
      <div
        className={`page-container relative ${
          hasPhotos
            ? `grid ${photos.length > 1 ? "lg:items-start" : "items-center"} gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,23rem)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] xl:gap-20`
            : ""
        }`}
      >
        <div>
          <h1
            className={`display max-w-4xl ${
              hasPhotos ? "text-[clamp(2.3rem,4.2vw,3.7rem)]" : "text-[clamp(2.4rem,5vw,4.4rem)]"
            }`}
          >
            {title}
          </h1>
          {intro && <div className="mt-6 max-w-[38rem] copy text-white/85">{intro}</div>}
          {children}
          {note && hasPhotos && (
            <HandNote
              lines={note}
              rotate={-5}
              className="mt-10 hidden w-fit text-white/90 md:block"
              textClassName="text-[2rem]"
            />
          )}
        </div>

        {hasPhotos && (
          <div className={`mx-auto grid w-full max-w-md gap-6 lg:max-w-none ${photos.length > 1 ? "lg:mt-2" : ""}`}>
            {photos.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative ${photo.aspect} w-full overflow-hidden rounded-md bg-deep shadow-[0_30px_60px_-30px_rgb(0_0_0/0.7)]`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  preload={i === 0}
                  sizes="(min-width: 1280px) 26rem, (min-width: 1024px) 23rem, (min-width: 480px) 28rem, 92vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {note && !hasPhotos && (
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
      {bottomEdge && <TornEdge color="var(--color-petrol)" side="bottom" seed={53} height={30} />}
    </section>
  );
}
