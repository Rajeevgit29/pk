import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { donate, donation, links } from "@/content/site";

export const metadata: Metadata = {
  title: "Donate",
  description: `${donate.title} ${donate.closing}`,
};

export default function DonatePage() {
  const hasDetails = Boolean(donation.paymentLink || donation.upiId || donation.bank);

  return (
    <>
      <PageHero eyebrow={donate.eyebrow} title={donate.title} note={["Every", "rupee opens", "a door"]} />

      <section aria-labelledby="impact-title" className="paper relative py-24 lg:py-28">
        <div className="page-container grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="impact-title" className="display text-[clamp(2rem,3.4vw,3rem)] text-heading">
              It becomes…
            </h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {donate.impact.map((line) => (
                <li key={line} className="py-4 font-serif text-[clamp(1.2rem,1.8vw,1.5rem)] leading-snug text-heading">
                  {line[0].toUpperCase() + line.slice(1)}.
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[1.08rem] leading-relaxed">{donate.closing}</p>
            <p className="mt-3 font-hand text-[2.4rem] leading-none text-ocean">{donate.signoff}</p>
          </div>

          <aside aria-labelledby="how-title" className="lg:col-span-5">
            <div className="on-dark teal-glow sticky top-28 rounded-lg p-8 text-white">
              <h2 id="how-title" className="font-serif text-2xl font-semibold">
                How to give
              </h2>
              {hasDetails ? (
                <div className="mt-6 space-y-6 text-sm">
                  {donation.paymentLink && (
                    <ButtonLink href={donation.paymentLink} arrow className="w-full">
                      Donate online
                    </ButtonLink>
                  )}
                  {donation.upiId && (
                    <div>
                      <p className="eyebrow text-white/60">UPI</p>
                      <p className="mt-1 select-all font-mono text-base">{donation.upiId}</p>
                      {donation.upiQr && (
                        <Image
                          src={donation.upiQr}
                          alt={`UPI QR code for ${donation.upiId}`}
                          width={220}
                          height={220}
                          className="mt-4 rounded-md bg-white p-2"
                        />
                      )}
                    </div>
                  )}
                  {donation.bank && (
                    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5">
                      <dt className="text-white/60">Account name</dt>
                      <dd>{donation.bank.accountName}</dd>
                      <dt className="text-white/60">Account no.</dt>
                      <dd className="select-all font-mono">{donation.bank.accountNumber}</dd>
                      <dt className="text-white/60">IFSC</dt>
                      <dd className="select-all font-mono">{donation.bank.ifsc}</dd>
                      <dt className="text-white/60">Bank</dt>
                      <dd>{donation.bank.bankName}</dd>
                    </dl>
                  )}
                </div>
              ) : (
                <div className="mt-4 space-y-5 text-[0.95rem] leading-relaxed text-white/80">
                  <p>Online donations are opening soon. Until then, message us and we&apos;ll share how you can give.</p>
                  <ButtonLink href={links.instagram} arrow className="w-full">
                    Message us on Instagram
                  </ButtonLink>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
