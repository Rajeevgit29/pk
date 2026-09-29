import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "solid" | "outline-light" | "outline-dark" | "text-light" | "text-dark";

const styles: Record<Variant, string> = {
  solid: "bg-bright text-white hover:bg-bright-hover shadow-[0_8px_24px_-12px_rgb(14_128_150/0.8)]",
  "outline-light": "border border-white/70 text-white hover:bg-white hover:text-petrol",
  "outline-dark": "border border-heading/60 text-heading hover:bg-heading hover:text-cream",
  "text-light": "px-0! text-white hover:text-mist",
  "text-dark": "px-0! text-heading hover:text-ocean",
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  arrow = false,
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  size?: "sm" | "md";
  className?: string;
}) {
  const external = /^https?:\/\//.test(href);
  const cls = `group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] font-medium transition-colors duration-200 ${
    size === "sm" ? "h-10 px-5 text-sm" : "h-12 px-7 text-[0.95rem]"
  } ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <Icon name="arrow" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
