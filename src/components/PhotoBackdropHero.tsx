import Image from "next/image";
import type { ReactNode } from "react";
import { HandNote, TornEdge } from "./Decor";
import { assetPath } from "@/lib/asset-path";

/**
 * Dark teal header for an inner page with its photo as the background, like the home page:
 * the photo fills the right-hand two thirds (the top on phones) and fades into teal behind the text.
 */
export function PhotoBackdropHero({
  id,
  title,
  image,
  note,
  imageClassName = "object-[50%_35%] lg:object-[50%_42%]",
  titleClassName = "text-[clamp(2.3rem,4.2vw,3.7rem)]",
  compact = false,
  children,
}: {
  /** id for the title, so the section is labelled by it. */
  id: string;
  title: ReactNode;
  image: { src: string; alt: string };
  note?: string[];
  /** Which part of the photo stays in view, e.g. "object-[50%_30%]". */
  imageClassName?: string;
  /** Title size, e.g. bigger for a short heading. */
  titleClassName?: string;
  /** On large screens, a shorter header with a smaller photo that starts below the menu bar, so the header buttons sit on plain teal. */
  compact?: boolean;
  /** Text under the title. */
  children?: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="on-dark relative isolate z-10 bg-abyss text-white">
      <div
        className={`absolute inset-x-0 top-0 -z-20 h-[62svh] min-h-[22rem] lg:left-auto lg:h-auto ${
          compact ? "lg:inset-y-0 lg:top-24 lg:right-0 lg:min-h-0 lg:w-[60%] lg:max-w-[60rem]" : "lg:inset-y-0 lg:w-[66%]"
        }`}
      >
        <Image
          src={assetPath(image.src)}
          alt={image.alt}
          fill
          preload
          quality={90}
          sizes={compact ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 66vw, 100vw"}
          className={`object-cover ${imageClassName}`}
        />
        {/* Gentle grade so the photo sits in the brand's deep teal mood. */}
        <div className="absolute inset-0 bg-[#062a33]/30 mix-blend-multiply" />
        {compact && (
          // Fades the smaller photo into teal on its left and top edges.
          <div className="absolute inset-y-0 -left-1 right-0 hidden bg-[linear-gradient(90deg,var(--color-abyss)_0%,var(--color-abyss)_2%,rgb(1_31_39/0.7)_10%,rgb(1_31_39/0.25)_24%,rgb(1_31_39/0)_36%),linear-gradient(180deg,var(--color-abyss)_0%,rgb(1_31_39/0)_22%)] lg:block" />
        )}
      </div>

      {/* Fades into teal: from the bottom on phones, from the left on large screens. */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[62svh] min-h-[22rem] bg-linear-to-b from-abyss/60 via-transparent via-35% to-abyss lg:hidden" />
      {!compact && (
        <>
          <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,var(--color-abyss)_0%,var(--color-abyss)_34%,rgb(1_31_39/0.88)_42%,rgb(1_31_39/0.5)_52%,rgb(1_31_39/0.12)_64%,rgb(1_31_39/0)_74%)] lg:block" />
          <div className="absolute inset-x-0 top-0 -z-10 hidden h-44 bg-linear-to-b from-abyss/75 to-transparent lg:block" />
        </>
      )}
      <div className="absolute inset-x-0 bottom-0 -z-10 hidden h-32 bg-linear-to-t from-abyss/70 to-transparent lg:block" />

      <div
        className={`page-container relative pb-24 pt-[52svh] sm:pt-[48svh] lg:flex lg:items-center ${
          compact ? "lg:min-h-[34vw] lg:pb-20 lg:pt-32" : "lg:min-h-[clamp(40rem,52vw,50rem)] lg:pb-28 lg:pt-40"
        }`}
      >
        <div className="max-w-[38rem]">
          <h1 id={id} className={`display ${titleClassName}`}>
            {title}
          </h1>
          {children}
          {note && (
            <HandNote lines={note} rotate={-5} className="mt-10 hidden w-fit text-white/90 md:block" textClassName="text-[2rem]" />
          )}
        </div>
      </div>
      <TornEdge color="var(--color-cream)" side="bottom" inward seed={53} height={30} />
    </section>
  );
}
