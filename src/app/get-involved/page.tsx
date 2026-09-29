import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { contact, getInvolved, links } from "@/content/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description: getInvolved.page.paragraphs[0],
};

export default function GetInvolvedPage() {
  const { page } = getInvolved;
  const volunteerHref = links.volunteerForm ?? links.instagram;
  const partnerHref = links.partnerForm ?? (contact.email ? `mailto:${contact.email}` : links.instagram);

  return (
    <>
      <PageHero eyebrow={getInvolved.eyebrow} title={page.title} note={getInvolved.words}>
        <div className="mt-6 max-w-2xl space-y-4 text-[1.05rem] leading-relaxed text-white/85">
          <p>{page.paragraphs[0]}</p>
        </div>
      </PageHero>

      <section aria-labelledby="ways-title" className="paper relative py-24 lg:py-28">
        <div className="page-container grid gap-14 lg:grid-cols-12">
          <div className="space-y-4 text-[1.04rem] leading-relaxed lg:col-span-5">
            <h2 id="ways-title" className="display text-[clamp(2rem,3.4vw,3rem)] text-heading">
              Ways to be part of it
            </h2>
            {page.paragraphs.slice(1).map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-7">
            {page.ways.map((way) => (
              <li key={way.title} className="flex flex-col items-start gap-4 rounded-md border border-line bg-paper p-5">
                <span className="flex size-11 items-center justify-center rounded-full bg-petrol text-white">
                  <Icon name={way.icon} className="size-5" />
                </span>
                <span className="font-medium leading-snug text-heading">{way.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="page-container mt-20 grid gap-4 sm:grid-cols-3">
          {page.triad.map((t) => (
            <li key={t.q} className="border-t-2 border-heading pt-5">
              <p className="font-serif text-[1.7rem] leading-tight text-heading">{t.q}</p>
              <p className="mt-1 font-hand text-[2.3rem] leading-none text-ocean">{t.a}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="join" aria-labelledby="join-title" className="paper relative scroll-mt-24 pb-28">
        <div className="page-container">
          <div className="on-dark teal-glow grid gap-10 rounded-lg px-6 py-14 text-white sm:px-12 lg:grid-cols-2 lg:px-16">
            <div>
              <p className="eyebrow text-white/75">Join us</p>
              <h2 id="join-title" className="display mt-4 text-[clamp(2rem,3.4vw,3rem)]">
                {page.closing}
              </h2>
            </div>
            <div className="grid content-center gap-4">
              <div className="rounded-md border border-white/15 bg-abyss/40 p-6">
                <h3 className="font-serif text-xl font-semibold">Volunteer or join the team</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Teach, organise, coach, write, design or mentor, on the ground or behind the scenes.
                </p>
                <ButtonLink href={volunteerHref} arrow size="sm" className="mt-5 h-11">
                  {links.volunteerForm ? "Sign up to volunteer" : "Message us on Instagram"}
                </ButtonLink>
              </div>
              <div className="rounded-md border border-white/15 bg-abyss/40 p-6">
                <h3 className="font-serif text-xl font-semibold">Partner with us</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Schools, organisations and brands: collaborate on workshops, events, campaigns and drives.
                </p>
                <ButtonLink href={partnerHref} variant="outline-light" arrow size="sm" className="mt-5 h-11">
                  {links.partnerForm ? "Start a partnership" : contact.email ? "Email us" : "Message us on Instagram"}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
