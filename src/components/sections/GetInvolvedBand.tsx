import { getInvolved, links } from "@/content/site";
import { ButtonLink } from "../ButtonLink";
import { WordStack } from "../Decor";
import { PhotoTile } from "../PhotoTile";

export function GetInvolvedBand() {
  return (
    <section aria-labelledby="gi-title" className="on-dark relative grid bg-petrol text-white lg:grid-cols-[0.95fr_1.05fr]">
      <PhotoTile
        photo={getInvolved.image}
        icon="handshake"
        label="Photo coming soon"
        sizes="(min-width: 1024px) 48vw, 100vw"
        className="min-h-72 lg:min-h-[26rem]"
      />
      <div className="teal-glow relative flex items-center">
        <div className="w-full max-w-[40rem] px-6 py-16 sm:px-10 lg:px-14 xl:px-16">
          <div>
            <p className="eyebrow text-white/75">{getInvolved.eyebrow}</p>
            <h2 id="gi-title" className="display mt-4 text-[clamp(2.2rem,3.6vw,3.2rem)]">
              {getInvolved.title.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-white/85">{getInvolved.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/donate" arrow size="sm" className="h-11">
                Donate
              </ButtonLink>
              <ButtonLink href={links.volunteerForm ?? "/get-involved#join"} variant="outline-light" arrow size="sm" className="h-11">
                Volunteer / Join Us
              </ButtonLink>
              <ButtonLink href={links.partnerForm ?? "/get-involved#join"} variant="outline-light" arrow size="sm" className="h-11">
                Partner With Us
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="absolute right-10 top-14 hidden border-l border-white/15 pl-7 2xl:block">
          <WordStack words={getInvolved.words} tone="light" />
        </div>
      </div>
    </section>
  );
}
