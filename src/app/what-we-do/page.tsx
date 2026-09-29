import type { Metadata } from "next";
import { TornEdge } from "@/components/Decor";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { PhotoTile } from "@/components/PhotoTile";
import { whatWeDo } from "@/content/site";

export const metadata: Metadata = {
  title: "What We Do",
  description: whatWeDo.page.paragraphs[0],
};

export default function WhatWeDoPage() {
  const { page } = whatWeDo;
  return (
    <>
      <PageHero eyebrow="What We Do" title={page.title} note={whatWeDo.note}>
        <div className="mt-6 max-w-2xl space-y-4 text-[1.05rem] leading-relaxed text-white/85">
          {page.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </PageHero>

      <section aria-labelledby="areas-title" className="paper relative py-24 lg:py-28">
        <div className="page-container">
          <p className="eyebrow text-ocean">Beyond the report card</p>
          <h2 id="areas-title" className="display mt-4 text-[clamp(2.2rem,3.8vw,3.4rem)] text-heading">
            More Than Just Books
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.areas.map((area) => (
              <li key={area.title} className="rounded-md border border-line bg-paper p-6">
                <span className="flex size-12 items-center justify-center rounded-full bg-petrol text-white">
                  <Icon name={area.icon} className="size-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-heading">{area.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed">{area.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="maidaan-title" className="on-dark relative z-10 grid bg-petrol text-white lg:grid-cols-2">
        <TornEdge color="var(--color-petrol)" side="top" seed={71} />
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
            <p className="eyebrow text-white/75">{page.maidaan.eyebrow}</p>
            <h2 id="maidaan-title" className="display mt-4 text-[clamp(2.2rem,3.6vw,3.2rem)]">
              {page.maidaan.title}
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-white/85">{page.maidaan.body}</p>
          </div>
        </div>
        <TornEdge color="var(--color-petrol)" side="bottom" seed={73} height={28} />
      </section>

      <section className="paper relative pb-32 pt-28">
        <div className="page-container grid gap-12 lg:grid-cols-12">
          <p className="text-[1.08rem] leading-relaxed lg:col-span-5">{page.reach}</p>
          <div className="lg:col-span-6 lg:col-start-7">
          <p className="mb-5 font-serif text-[clamp(1.35rem,2.2vw,1.9rem)] leading-snug text-heading">{page.stepsIntro}</p>
          <ol className="space-y-3">
            {page.steps.map((step, i) => (
              <li
                key={step}
                className={`flex items-baseline gap-4 pb-3 font-serif text-[clamp(1.35rem,2.2vw,1.9rem)] leading-snug text-heading ${
                  i === page.steps.length - 1 ? "" : "border-b border-line"
                }`}
              >
                <span className="font-sans text-xs font-medium tracking-[0.2em] text-ocean/70">0{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          </div>
        </div>
      </section>

    </>
  );
}
