import { ButtonLink } from "./ButtonLink";
import { HandNote } from "./Decor";

/** Closing call to action used at the bottom of inner pages. */
export function CtaBand({
  title = "Every hand can help turn a page.",
  body = "Bring your time, your skills and your ideas. We'll build from there.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="paper relative pb-28 pt-8">
      <div className="page-container">
        <div className="on-dark teal-glow relative overflow-hidden rounded-lg px-6 py-14 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16">
          <div className="max-w-xl">
            <h2 className="display text-[clamp(1.9rem,3.2vw,2.8rem)]">{title}</h2>
            <p className="mt-4 leading-relaxed text-white/80">{body}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
            <ButtonLink href="/get-involved" variant="outline-light" arrow>
              Get Involved
            </ButtonLink>
            <ButtonLink href="/donate" arrow>
              Donate
            </ButtonLink>
          </div>
          <HandNote
            lines={["Har Haath", "Mein Kitab"]}
            rotate={-10}
            className="absolute -bottom-2 right-8 hidden text-white/15 xl:block"
            textClassName="text-[3.2rem]"
          />
        </div>
      </div>
    </section>
  );
}
