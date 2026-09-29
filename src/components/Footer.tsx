import Image from "next/image";
import Link from "next/link";
import { contact, links, nav, site } from "@/content/site";
import { TornEdge } from "./Decor";
import { Icon } from "./Icon";

export function Footer() {
  const socials = [
    { name: "Instagram", href: links.instagram, icon: "instagram" as const },
    { name: "LinkedIn", href: links.linkedin, icon: "linkedin" as const },
    { name: "YouTube", href: links.youtube, icon: "youtube" as const },
  ].filter((s): s is typeof s & { href: string } => Boolean(s.href));

  const footerNav = [...nav, { label: "Get Involved", href: "/get-involved" }, { label: "Donate", href: "/donate" }];
  const contactRows = [
    contact.email && { icon: "mail" as const, label: contact.email, href: `mailto:${contact.email}` },
    contact.phone && { icon: "phone" as const, label: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, "")}` },
    contact.address && { icon: "pin" as const, label: contact.address, href: null },
  ].filter(Boolean) as { icon: "mail" | "phone" | "pin"; label: string; href: string | null }[];

  return (
    <footer className="on-dark relative bg-abyss text-white/75">
      <TornEdge color="var(--color-abyss)" side="top" seed={41} />
      <div className="page-container pb-10 pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-16">
          <Link href="/" aria-label="Project Kitab — home" className="w-fit">
            <Image src="/brand/logo-white.svg" alt="Project Kitab" width={1540} height={950} className="h-20 w-auto" />
          </Link>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-4 lg:flex lg:flex-wrap lg:justify-center lg:gap-x-9 lg:pt-7">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-5 lg:items-end lg:pt-5">
            <ul className="flex items-center gap-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Project Kitab on ${s.name}`}
                    className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-abyss"
                  >
                    <Icon name={s.icon} className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
            {contactRows.length > 0 && (
              <ul className="space-y-2 text-sm lg:text-right">
                {contactRows.map((row) => (
                  <li key={row.label} className="flex items-center gap-2 lg:justify-end">
                    <Icon name={row.icon} className="size-4 text-white/50 [--pin-hole:var(--color-abyss)]" />
                    {row.href ? (
                      <a href={row.href} className="transition-colors hover:text-white">
                        {row.label}
                      </a>
                    ) : (
                      <span>{row.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Project Kitab. All rights reserved.</p>
          <p>{site.footerLine}</p>
        </div>
      </div>
    </footer>
  );
}
