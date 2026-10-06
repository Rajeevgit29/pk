import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="This page seems to have slipped out of the book."
        intro={<p>The link may be old, or the page may have moved.</p>}
      >
        <div className="mt-8">
          <ButtonLink href="/" arrow>
            Back to home
          </ButtonLink>
        </div>
      </PageHero>
      <div className="paper h-24" />
    </>
  );
}
