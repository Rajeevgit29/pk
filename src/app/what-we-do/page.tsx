import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { whatWeDo } from "@/content/site";

export const metadata: Metadata = {
  title: "What We Do",
  description: whatWeDo.page.paragraphs[0],
};

/** The What We Do copy from the content doc, word for word, beside two photos. */
export default function WhatWeDoPage() {
  const { page } = whatWeDo;
  return (
    <PageHero title={page.title} images={page.heroImages} bottomEdge={false}>
      <div className="mt-6 max-w-[38rem] space-y-5 copy text-white/85">
        {page.paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
    </PageHero>
  );
}
