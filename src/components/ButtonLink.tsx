import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

export type Variant = "solid" | "outline-light" | "outline-dark" | "text-light" | "text-dark";

const styles: Record<Variant, string> = {
  solid: "bg-bright text-white hover:bg-bright-hover shadow-[0_8px_24px_-12px_rgb(14_128_150/0.8)]",
  "outline-light": "border border-white/70 text-white hover:bg-white hover:text-petrol",
  "outline-dark": "border border-heading/60 text-heading hover:bg-heading hover:text-cream",
  "text-light": "px-0! text-white hover:text-mist",
  "text-dark": "px-0! text-heading hover:text-ocean",
};

/** The classes for a button-style link, for components that render their own <a>. */
export function buttonClass(variant: Variant = "solid", size: "sm" | "md" = "md", className = "") {
  return `group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] font-medium transition-colors duration-200 ${
    size === "sm" ? "h-10 px-5 text-sm" : "h-12 px-7 text-[0.95rem]"
  } ${styles[variant]} ${className}`;
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  arrow = false,
  icon,
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  /** Icon shown before the label. */
  icon?: Parameters<typeof Icon>[0]["name"];
  size?: "sm" | "md";
  className?: string;
}) {
  const external = /^https?:\/\//.test(href);
  // Email and phone links open the mail app or dialer, so they skip the site's page navigation.
  const app = /^(mailto|tel):/.test(href);
  const cls = buttonClass(variant, size, className);
  const content = (
    <>
      {icon && <Icon name={icon} className="size-4" />}
      {children}
      {arrow && <Icon name="arrow" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );
  if (app) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }
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
