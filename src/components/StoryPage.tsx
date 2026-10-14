import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/asset-path";
import { Icon } from "./Icon";
import { PageHero } from "./PageHero";

type Photo = { src: string; alt: string };

/** Shows **bold** and *italic* inside a paragraph; the words themselves never change. */
export function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("**") ? (
      <strong key={i} className="font-semibold text-heading">
        {part.slice(2, -2)}
      </strong>
    ) : part.length > 2 && part.startsWith("*") && part.endsWith("*") ? (
      <em key={i}>{part.slice(1, -1)}</em>
    ) : (
      part
    ),
  );
}

/** Plain text of a paragraph (for page descriptions). */
export function plain(text: string) {
  return text.replace(/\*\*([^*]+)\*\*|\*([^*]+)\*/g, "$1$2");
}

/** A long read (blog post or initiative report): title and photo up top, then the text in a readable column. */
export function StoryPage({
  title,
  image,
  verse,
  sections,
  back,
  next,
}: {
  title: string;
  image: Photo;
  /** Lines of poetry shown before the text. */
  verse?: string[];
  /** Groups of paragraphs, with a bigger gap between groups. */
  sections: string[][];
  back: { href: string; label: string };
  next?: { href: string; title: string; image: Photo } | null;
}) {
  return (
    <>
      <PageHero title={title} images={[{ ...image, aspect: "aspect-[4/3]" }]} />

      <article className="paper relative pb-20 pt-20 lg:pt-24">
        <div className="page-container">
          <div className="mx-auto max-w-[40rem]">
            {verse && (
              <blockquote className="mb-12 -rotate-1 font-hand text-[clamp(1.5rem,2.4vw,1.85rem)] leading-snug text-deep">
                {verse.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </blockquote>
            )}

            <div className="copy space-y-10 text-body">
              {sections.map((section, i) => (
                <div key={i} className="space-y-6">
                  {section.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{inline(paragraph)}</p>
                  ))}
                </div>
              ))}
            </div>

            <Link
              href={back.href}
              className="mt-14 inline-flex items-center gap-2 font-semibold text-ocean transition-colors hover:text-heading"
            >
              <Icon name="arrow" className="size-4 rotate-180" />
              {back.label}
            </Link>

            {next && (
              <Link
                href={next.href}
                className="group mt-12 flex items-center gap-5 rounded-lg border border-line bg-paper p-4 transition-colors hover:border-ocean/40 sm:gap-6"
              >
                <span className="relative block aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-md bg-deep sm:w-36">
                  <Image src={assetPath(next.image.src)} alt="" fill sizes="9rem" className="object-cover" />
                </span>
                <span>
                  <span className="block text-sm text-body/80">Read next</span>
                  <span className="mt-1 block font-serif text-[1.35rem] leading-snug text-heading transition-colors group-hover:text-deep">
                    {next.title}
                  </span>
                </span>
              </Link>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
