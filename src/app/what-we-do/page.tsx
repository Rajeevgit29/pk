import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";
import { whatWeDo } from "@/content/site";

export const metadata: Metadata = {
  title: "What We Do",
  description: whatWeDo.page.paragraphs[0],
};

/** Wraps phrases of `text` in styled spans (in reading order); the words themselves never change. */
function emphasise(text: string, ...marks: [phrase: string, className: string][]): ReactNode {
  const found = marks
    .map(([phrase, className]) => ({ phrase, className, at: text.indexOf(phrase) }))
    .filter((m) => m.at !== -1)
    .sort((a, b) => a.at - b.at);
  const out: ReactNode[] = [];
  let pos = 0;
  for (const m of found) {
    if (m.at < pos) continue;
    out.push(text.slice(pos, m.at), <span key={m.at} className={m.className}>{m.phrase}</span>);
    pos = m.at + m.phrase.length;
  }
  out.push(text.slice(pos));
  return out;
}

const marker =
  "box-decoration-clone bg-[linear-gradient(transparent_58%,color-mix(in_oklab,var(--color-sand)_85%,transparent)_58%)] px-0.5 text-heading";

/** A photo styled like a polaroid stuck into a scrapbook with a strip of tape. */
function Polaroid({ src, alt, className, sizes }: { src: string; alt: string; className: string; sizes: string }) {
  return (
    <figure className={`absolute bg-white p-2.5 pb-8 shadow-[0_18px_40px_-18px_rgb(4_49_60/0.55)] sm:p-3 sm:pb-10 ${className}`}>
      <span aria-hidden="true" className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-4deg] bg-sand/80 shadow-sm" />
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    </figure>
  );
}

/** The What We Do copy from the content doc, word for word. */
export default function WhatWeDoPage() {
  const { page } = whatWeDo;
  const [opening, sometimes, maidaan, reach, idea] = page.paragraphs;
  const [mainPhoto, smallPhoto] = page.collage;


  return (
    <>
      <PageHero title={page.heading} image={page.heroImage}>
        <p className="mt-5 max-w-[34rem] font-serif text-[clamp(1.45rem,2.2vw,2rem)] leading-snug text-white">{page.title}</p>
        <p className="mt-5 max-w-[38rem] copy text-white/85">{opening}</p>
      </PageHero>

      <section className="paper relative overflow-x-clip pb-32 pt-24 lg:pb-36 lg:pt-32">
        <div className="page-container grid items-center gap-16 lg:grid-cols-[minmax(0,27rem)_minmax(0,1fr)] lg:gap-20">
          {/* Scrapbook: two polaroids, slightly tilted and overlapping */}
          <div className="relative mx-auto h-[26rem] w-full max-w-[22rem] sm:h-[32rem] sm:max-w-[27rem] lg:mx-0 lg:max-w-none">
            <Polaroid
              src={mainPhoto.src}
              alt={mainPhoto.alt}
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 20rem, 70vw"
              className="left-0 top-0 w-[74%] -rotate-3"
            />
            <Polaroid
              src={smallPhoto.src}
              alt={smallPhoto.alt}
              sizes="(min-width: 640px) 13rem, 45vw"
              className="bottom-0 right-0 w-[50%] rotate-[5deg]"
            />
          </div>

          <div className="copy max-w-[38rem] space-y-6 text-heading/90">
            <p className="text-[1.08em] leading-[1.65] text-heading">
              {emphasise(sometimes, ["a space where they feel heard", marker])}
            </p>
            <p>
              {emphasise(maidaan, ["Gyaan Through Maidaan", "font-semibold text-heading"], ["learnt with every pass", marker])}
            </p>
            <p>{emphasise(reach, ["conversations about opportunity", marker])}</p>
            <p>{emphasise(idea, ["room to discover who they can become", marker])}</p>
          </div>
        </div>
      </section>
    </>
  );
}
