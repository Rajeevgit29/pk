import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PhotoTile } from "@/components/PhotoTile";
import { TornEdge, WordStack } from "@/components/Decor";
import { whoWeAre } from "@/content/site";

export const metadata: Metadata = {
  title: "Who We Are",
  description: whoWeAre.page.paragraphs[0],
};

export default function WhoWeArePage() {
  const { page } = whoWeAre;
  return (
    <>
      <PageHero eyebrow="Who We Are" title={page.title} note={["Young", "People.", "Real Change."]}>
        <div className="mt-6 max-w-2xl space-y-4 text-[1.05rem] leading-relaxed text-white/85">
          {page.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </PageHero>

      <section className="paper relative py-24 lg:py-28">
        <div className="page-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-last lg:order-first">
            <PhotoTile
              photo={whoWeAre.image}
              icon="volunteers"
              label="Team photo coming soon"
              labelClassName="bottom-8"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/3] w-full"
            />
            <TornEdge color="var(--color-cream)" side="top" inward seed={61} height={22} />
            <TornEdge color="var(--color-cream)" side="bottom" inward seed={67} height={22} />
          </div>
          <div>
            <p className="eyebrow text-ocean">What we believe</p>
            <h2 className="display mt-4 text-[clamp(2rem,3.4vw,3rem)] text-heading">{page.beliefTitle}</h2>
            <div className="mt-6 space-y-4 text-[1.04rem] leading-relaxed">
              {page.belief.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <WordStack words={whoWeAre.words} className="mt-10 flex flex-wrap gap-x-6 gap-y-2 space-y-0!" />
          </div>
        </div>
      </section>

      <section className="paper relative pb-32 pt-4 lg:pt-6">
        <div className="page-container grid gap-10 lg:grid-cols-12">
          <p className="text-[1.08rem] leading-relaxed lg:col-span-6">{page.needs}</p>
          <blockquote className="lg:col-span-5 lg:col-start-8">
            <p className="font-serif text-[clamp(1.6rem,2.6vw,2.3rem)] leading-snug text-heading">{page.closing[0]}</p>
            <p className="mt-4 font-hand text-[2.4rem] leading-none text-ocean">{page.closing[1]}</p>
          </blockquote>
        </div>
      </section>

    </>
  );
}
