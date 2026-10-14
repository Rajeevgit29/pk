import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { StoryPage } from "@/components/StoryPage";
import { blogPosts } from "@/content/blog";

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
      <StoryPage
        title={post.title}
        image={post.image}
        verse={post.verse}
        sections={post.sections}
        back={{ href: "/blog", label: "All stories" }}
        next={next && { href: `/blog/${next.slug}`, title: next.title, image: next.image }}
      />
      <CtaBand title="Have a story to tell?" body="Volunteers, students and partners write for Project Kitab. Bring your idea and we'll build from there." />
    </>
  );
}
