import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PhotoBackdropHero } from "@/components/PhotoBackdropHero";
import { inline } from "@/components/StoryPage";
import { reports } from "@/content/reports";
import { initiatives } from "@/content/site";
import { assetPath } from "@/lib/asset-path";
import { slugify } from "@/lib/slugify";

export const metadata: Metadata = {
  title: "Our Initiatives",
  description: initiatives.intro,
};

const box = "relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-paper";

function BoxPhoto({ photo, className = "", zoom = false }: { photo: { src: string; alt: string } | null; className?: string; zoom?: boolean }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-deep">
      {photo && (
        <Image
          src={assetPath(photo.src)}
          alt={zoom ? "" : photo.alt}
          fill
          sizes="(min-width: 1344px) 26rem, (min-width: 1024px) 31vw, (min-width: 768px) 48vw, 100vw"
          className={`object-cover ${zoom ? "transition-transform duration-500 group-hover:scale-[1.03]" : ""} ${className}`}
        />
      )}
    </div>
  );
}

export default function InitiativesPage() {
  return (
    <>
      <PhotoBackdropHero
        id="initiatives-title"
        title={initiatives.title}
        image={initiatives.heroImage}
        note={initiatives.note}
        titleClassName="text-[clamp(2.6rem,5vw,4.5rem)]"
        imageClassName="object-[50%_40%] lg:object-[50%_60%]"
      >
        <p className="mt-6 max-w-[38rem] copy text-white/85">{initiatives.intro}</p>
      </PhotoBackdropHero>

      {/* Kitab Cup, then the reports: all the same size, three to a row on large screens. */}
      <section id="reports" aria-label="Initiatives and reports" className="paper relative scroll-mt-24 py-24 lg:py-28">
        <ul className="page-container grid gap-6 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {initiatives.items.map((item) => (
            <li key={item.title} id={slugify(item.title)} className="scroll-mt-28">
              <article className={box}>
                <BoxPhoto photo={item.image} className={item.focus} />
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <h2 className="font-serif text-[1.45rem] leading-snug text-heading">{item.title}</h2>
                  <p className="mt-1 font-hand text-[1.35rem] leading-tight text-deep">{item.tagline}</p>
                  <p className="copy-sm mt-3">{item.body}</p>
                </div>
              </article>
            </li>
          ))}
          {reports.map((report) => (
            <li key={report.slug}>
              <article className={`group ${box} transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgb(4_49_60/0.45)]`}>
                <BoxPhoto photo={report.image} zoom />
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <h2 className="font-serif text-[1.45rem] leading-snug text-heading">
                    {/* The whole box opens the report. */}
                    <Link href={`/initiatives/${report.slug}`} className="after:absolute after:inset-0 group-hover:text-deep">
                      {report.title}
                    </Link>
                  </h2>
                  <p className="copy-sm mt-3 line-clamp-3">{inline(report.paragraphs[0])}</p>
                  <span aria-hidden="true" className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-ocean transition-colors group-hover:text-heading">
                    Read more
                    <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
