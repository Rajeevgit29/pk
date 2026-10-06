import type { Metadata } from "next";
import { TornEdge } from "@/components/Decor";
import { PageHero } from "@/components/PageHero";
import { PhotoTile } from "@/components/PhotoTile";
import { whatWeDo } from "@/content/site";

export const metadata: Metadata = {
  title: "What We Do",
  description: whatWeDo.page.paragraphs[0],
};

/** The What We Do copy from the content doc, in its original order. */
export default function WhatWeDoPage() {
  const { page } = whatWeDo;
  return (
    <>
      <PageHero title={page.title} image={page.heroImage}>
        <div className="mt-6 max-w-[38rem] space-y-5 copy text-white/85">
          {page.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </PageHero>

      <section aria-labelledby="maidaan-title" className="on-dark relative grid bg-petrol text-white lg:grid-cols-2">
        <PhotoTile
          photo={page.maidaan.image}
          icon="football"
          tone="ocean"
          label="Football photo coming soon"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="min-h-72 lg:min-h-[28rem]"
          imageClassName="object-[80%_60%]"
        />
        <div className="teal-glow flex items-center px-6 py-16 sm:px-10 lg:px-16">
          <div className="max-w-lg">
            <h2 id="maidaan-title" className="display text-[clamp(2.2rem,3.6vw,3.2rem)]">
              {page.maidaan.title}
            </h2>
            <p className="mt-5 copy text-white/85">{page.maidaan.body}</p>
          </div>
        </div>
        <TornEdge color="var(--color-petrol)" side="bottom" seed={73} height={28} />
      </section>

      <section className="paper relative pb-32 pt-28">
        <div className="page-container grid gap-12 lg:grid-cols-12 lg:items-start">
          <p className="copy lg:col-span-5">{page.reach}</p>
          <p className="font-serif text-[clamp(1.45rem,2.3vw,2rem)] leading-snug text-heading lg:col-span-6 lg:col-start-7">
            {[page.stepsIntro, ...page.steps].join(" ")}
          </p>
        </div>
      </section>
    </>
  );
}
