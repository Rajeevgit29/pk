import { blog } from "@/content/site";
import { ButtonLink } from "../ButtonLink";
import { PhotoTile } from "../PhotoTile";

const icons = ["sparkle", "heart", "people"] as const;

/** Sand-coloured brush swash behind the "Gyaan se Bantan" note. */
function Swash({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 170" preserveAspectRatio="none" className={className}>
      <path
        d="M22 34c38-18 96-26 158-24 42 1 80 8 104 18 12 5 14 16 12 30-3 26-2 50 2 74 2 14-8 24-26 27-50 8-112 8-170 4-34-2-64-9-82-18-12-6-16-16-14-30 3-22 2-44-4-62-3-9 4-15 20-19Z"
        fill="currentColor"
      />
      <path d="M40 150c40 6 110 8 170 2M30 22c50-10 120-12 180-4" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity=".5" />
    </svg>
  );
}

export function BlogPreview() {
  return (
    <section aria-labelledby="blog-title" className="paper relative pb-28 pt-16 lg:pb-32">
      <div className="page-container">
        <div className="flex flex-wrap items-end justify-between gap-4 lg:pr-[22%]">
          <div>
            <p className="eyebrow text-ocean">{blog.eyebrow}</p>
            <h2 id="blog-title" className="display mt-3 text-[clamp(2rem,3.2vw,2.8rem)] text-heading">
              {blog.title}
            </h2>
          </div>
          <ButtonLink href="/blog" variant="text-dark" arrow size="sm">
            Read All Blogs
          </ButtonLink>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <ul className="grid gap-5 sm:grid-cols-3">
            {blog.posts.map((post, i) => (
              <li key={post.title}>
                <article className="flex h-full flex-col overflow-hidden rounded-md border border-line bg-paper">
                  <PhotoTile
                    photo={post.image}
                    icon={icons[i % icons.length]}
                    showLabel={false}
                    label={`${post.title} (image coming soon)`}
                    sizes="(min-width: 640px) 25vw, 100vw"
                    className="aspect-[16/10]"
                  />
                  <div className="flex flex-1 flex-col justify-between gap-3 p-4">
                    <h3 className="font-serif text-[1.08rem] font-semibold leading-snug text-heading">{post.title}</h3>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-ocean/80">
                      {post.date ?? "Coming soon"}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="relative mx-auto flex h-44 w-72 items-center justify-center lg:mx-0 lg:w-64">
            <Swash className="absolute inset-0 size-full text-sand" />
            <p className="relative -rotate-6 font-hand text-[2.6rem] leading-none text-heading">
              “{blog.note}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
