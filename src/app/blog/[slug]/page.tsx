import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/content/blog";
import { assetPath } from "@/lib/asset-path";

// Every post is built ahead of time; any other /blog/... address is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const opening = post.sections[0][0];
  return {
    title: post.title,
    description: opening.length > 160 ? `${opening.slice(0, opening.lastIndexOf(" ", 157))}…` : opening,
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const index = blogPosts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const post = blogPosts[index];
  const next = blogPosts.length > 1 ? blogPosts[(index + 1) % blogPosts.length] : null;

  return (
    <>
      <PageHero title={post.title} images={[{ ...post.image, aspect: "aspect-[4/3]" }]} />

      <article className="paper relative pb-20 pt-20 lg:pt-24">
        <div className="page-container">
          <div className="mx-auto max-w-[40rem]">
            {post.verse && (
              <blockquote className="mb-12 -rotate-1 font-hand text-[clamp(1.5rem,2.4vw,1.85rem)] leading-snug text-deep">
                {post.verse.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </blockquote>
            )}

            {/* A bigger gap wherever the writer left a blank line. */}
            <div className="copy space-y-10 text-body">
              {post.sections.map((section, i) => (
                <div key={i} className="space-y-6">
                  {section.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>

            <Link
              href="/blog"
              className="mt-14 inline-flex items-center gap-2 font-semibold text-ocean transition-colors hover:text-heading"
            >
              <Icon name="arrow" className="size-4 rotate-180" />
              All stories
            </Link>

            {next && (
              <Link
                href={`/blog/${next.slug}`}
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

      <CtaBand title="Have a story to tell?" body="Volunteers, students and partners write for Project Kitab. Bring your idea and we'll build from there." />
    </>
  );
}
