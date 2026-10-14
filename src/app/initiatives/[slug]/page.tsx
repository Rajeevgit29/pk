import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { plain, StoryPage } from "@/components/StoryPage";
import { reports } from "@/content/reports";

// Every report is built ahead of time; any other /initiatives/... address is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return reports.map((report) => ({ slug: report.slug }));
}

export async function generateMetadata(props: PageProps<"/initiatives/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const report = reports.find((r) => r.slug === slug);
  if (!report) return {};
  const opening = plain(report.paragraphs[0]);
  return {
    title: report.title,
    description: opening.length > 160 ? `${opening.slice(0, opening.lastIndexOf(" ", 157))}…` : opening,
  };
}

export default async function ReportPage(props: PageProps<"/initiatives/[slug]">) {
  const { slug } = await props.params;
  const index = reports.findIndex((r) => r.slug === slug);
  if (index === -1) notFound();
  const report = reports[index];
  const next = reports[(index + 1) % reports.length];

  return (
    <StoryPage
      title={report.title}
      image={report.image}
      sections={[report.paragraphs]}
      back={{ href: "/initiatives#reports", label: "All reports" }}
      next={next !== report ? { href: `/initiatives/${next.slug}`, title: next.title, image: next.image } : null}
    />
  );
}
