import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PhotoTile } from "@/components/PhotoTile";
import { blog, links } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Ideas, stories and perspectives from the Project Kitab community.",
};

const icons = ["sparkle", "heart", "people"] as const;

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow={blog.eyebrow}
        title={blog.title}
        intro={<p>Stories from our classrooms, football fields and communities, written by the people who show up.</p>}
        note={[blog.note]}
      />

      <section className="paper relative py-24 lg:py-28">
        <div className="page-container">
          <ul className="grid gap-6 md:grid-cols-3">
            {blog.posts.map((post, i) => (
              <li key={post.title}>
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-paper">
                  <PhotoTile
                    photo={post.image}
                    icon={icons[i % icons.length]}
                    showLabel={false}
                    label={`${post.title} (image coming soon)`}
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="aspect-[16/10]"
                  />
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-ocean">{post.date ?? "Coming soon"}</p>
                    <h2 className="font-serif text-[1.4rem] font-semibold leading-snug text-heading">{post.title}</h2>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center">
            Our first stories are on their way. Until then, follow along on{" "}
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="font-medium text-ocean underline underline-offset-4 hover:text-heading">
              Instagram @project.kitab
            </a>
            .
          </p>
        </div>
      </section>

      <CtaBand title="Have a story to tell?" body="Volunteers, students and partners write for Project Kitab. Bring your idea and we'll build from there." />
    </>
  );
}
