import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/content/blog";
import { blog } from "@/content/site";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Blog",
  description: "Ideas, stories and perspectives from the Project Kitab community.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title={blog.title} intro={<p>{blog.intro}</p>} />

      <section className="paper relative py-24 lg:py-28">
        {/* One story per row, photo and text swapping sides, like pages of a scrapbook. */}
        <ul className="page-container space-y-20 lg:space-y-28">
          {blogPosts.map((post, i) => {
            const href = `/blog/${post.slug}`;
            return (
              <li key={post.slug}>
                <article className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
                  <Link
                    href={href}
                    tabIndex={-1}
                    aria-hidden="true"
                    className={`group relative block aspect-[4/3] overflow-hidden rounded-md bg-deep shadow-[0_30px_60px_-30px_rgb(0_0_0/0.45)] ${
                      i % 2 ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={assetPath(post.image.src)}
                      alt=""
                      fill
                      sizes="(min-width: 1344px) 38rem, (min-width: 768px) 46vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>
                  <div>
                    <h2 className="display text-[clamp(1.9rem,3.2vw,2.8rem)] text-heading">
                      <Link href={href} className="transition-colors hover:text-deep">
                        {post.title}
                      </Link>
                    </h2>
                    {/* The opening paragraph, cut off after a few lines. */}
                    <p className="copy mt-5 line-clamp-4">{post.sections[0][0]}</p>
                    <Link
                      href={href}
                      aria-label={`Read: ${post.title}`}
                      className="mt-7 inline-flex items-center gap-2 font-semibold text-ocean transition-colors hover:text-heading"
                    >
                      Read the story
                      <Icon name="arrow" className="size-4" />
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      <CtaBand title="Have a story to tell?" body="Volunteers, students and partners write for Project Kitab. Bring your idea and we'll build from there." />
    </>
  );
}
