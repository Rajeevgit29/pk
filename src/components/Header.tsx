"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { ButtonLink } from "./ButtonLink";
import { Icon } from "./Icon";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`on-dark fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open ? "bg-abyss/92 shadow-[0_10px_30px_-20px_rgb(0_0_0/0.8)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div
        className={`page-container flex items-center justify-between gap-6 transition-[height] duration-300 ${
          scrolled ? "h-[4.5rem]" : "h-[5.5rem] lg:h-[6.5rem]"
        }`}
      >
        <Link href="/" aria-label="Project Kitab — home" className="shrink-0">
          <Image
            src="/brand/logo-white.svg"
            alt="Project Kitab"
            width={1540}
            height={950}
            preload
            className={`w-auto transition-[height] duration-300 ${scrolled ? "h-12" : "h-14 lg:h-[4.6rem]"}`}
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-10">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 text-[0.92rem] transition-colors ${
                      active ? "text-white" : "text-white/85 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-white transition-all duration-300 ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ButtonLink href="/get-involved" variant="outline-light" size="sm" className="h-11 px-6">
            Get Involved
          </ButtonLink>
          <ButtonLink href="/donate" size="sm" arrow className="h-11 px-6">
            Donate
          </ButtonLink>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ButtonLink href="/donate" size="sm" className="h-9 px-4 text-[0.82rem]">
            Donate
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-full border border-white/30 text-white"
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-abyss lg:hidden"
      >
        <nav aria-label="Mobile" className="page-container flex min-h-full flex-col py-8">
          <ul className="space-y-1">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-white/10 py-4 font-serif text-2xl ${
                      active ? "text-white" : "text-white/80"
                    }`}
                  >
                    {item.label}
                    <Icon name="arrow" className="size-5 text-white/40" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 grid gap-3">
            <ButtonLink href="/get-involved" variant="outline-light">
              Get Involved
            </ButtonLink>
            <ButtonLink href="/donate" arrow>
              Donate
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
