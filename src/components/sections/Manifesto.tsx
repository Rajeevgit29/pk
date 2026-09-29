import { manifesto } from "@/content/site";

export function Manifesto() {
  return (
    <section aria-labelledby="manifesto-title" className="paper relative pb-6 pt-24 lg:pt-28">
      <div className="page-container grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="eyebrow text-ocean">Why We Exist</p>
          <h2 id="manifesto-title" className="display mt-4 text-[clamp(2.1rem,3.6vw,3.2rem)] text-heading">
            {manifesto.lead}
          </h2>
        </div>
        <div className="space-y-5 text-[1.04rem] leading-relaxed lg:col-span-6 lg:col-start-7 lg:pt-10">
          {manifesto.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <blockquote className="border-l-2 border-bright py-1 pl-5 font-serif text-[clamp(1.35rem,2vw,1.7rem)] leading-snug text-heading">
            {manifesto.quote[0]} <em className="text-ocean">{manifesto.quote[1]}</em>
          </blockquote>
          <p className="font-hand text-[1.7rem] leading-tight text-deep">
            {manifesto.signoff[0]} <span className="whitespace-nowrap">{manifesto.signoff[1]}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
