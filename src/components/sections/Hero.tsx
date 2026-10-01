import Image from "next/image";
import { hero } from "@/content/site";
import { HandNote } from "../Decor";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-abyss">
      {/* Photo: full width on mobile, right-hand three quarters on desktop (as in the template). */}
      <div className="absolute inset-x-0 top-0 -z-20 h-[64svh] min-h-[22rem] lg:inset-y-0 lg:left-auto lg:h-auto lg:w-[76%]">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          preload
          quality={90}
          sizes="(min-width: 1024px) 76vw, 100vw"
          className="object-cover object-[50%_40%] lg:object-[50%_32%]"
        />
        {/* Gentle grade so the bright classroom sits in the brand's deep teal mood. */}
        <div className="absolute inset-0 bg-[#062a33]/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,transparent_40%,rgb(1_31_39/0.35)_100%)]" />
      </div>

      {/* Fades into teal: from the bottom on mobile, from the left on desktop. */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[64svh] min-h-[22rem] bg-linear-to-b from-abyss/60 via-transparent via-35% to-abyss lg:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,var(--color-abyss)_0%,var(--color-abyss)_22%,rgb(1_31_39/0.9)_31%,rgb(1_31_39/0.55)_42%,rgb(1_31_39/0.15)_56%,rgb(1_31_39/0)_66%)] lg:block" />
      <div className="absolute inset-x-0 top-0 -z-10 hidden h-44 bg-linear-to-b from-abyss/75 to-transparent lg:block" />
      <div className="absolute inset-x-0 bottom-0 -z-10 hidden h-32 bg-linear-to-t from-abyss/60 to-transparent lg:block" />

      <div className="page-container relative flex min-h-[max(40rem,100svh)] flex-col justify-end pb-24 pt-[52svh] sm:pt-[48svh] lg:min-h-[clamp(36rem,43vw,46rem)] lg:justify-center lg:pb-20 lg:pt-[7.25rem]">
        <div className="max-w-[36rem]">
          <h1 id="hero-title" className="display text-[clamp(3rem,5.4vw,5.5rem)] text-white">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 font-serif text-[clamp(1.4rem,1.85vw,1.95rem)] leading-tight text-white">{hero.subtitle}</p>
          <div className="mt-3 max-w-[31rem] space-y-2 text-[0.98rem] leading-relaxed text-white/85 sm:text-[1.05rem]">
            {hero.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

        </div>
      </div>

      <HandNote
        lines={hero.note}
        arrow="swirl-down-left"
        rotate={-9}
        className="absolute right-[3.5%] top-[17%] hidden text-white md:block"
        textClassName="text-[clamp(1.7rem,2.3vw,2.4rem)]"
        arrowClassName="ml-6 opacity-80"
      />
    </section>
  );
}
