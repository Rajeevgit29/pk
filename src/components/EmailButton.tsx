"use client";

import { useEffect, useState, type ReactNode } from "react";
import { buttonClass, type Variant } from "./ButtonLink";
import { Icon } from "./Icon";

/**
 * An email button. On computers it opens Gmail's compose window in a new tab, because a plain email
 * link does nothing when no email app is set up (common on laptops). On phones and tablets it uses
 * the email link, which opens the phone's mail app.
 */
export function EmailButton({
  mailto,
  gmail,
  children,
  variant = "solid",
  size = "md",
  icon = false,
  arrow = false,
  className = "",
}: {
  mailto: string;
  gmail: string;
  children: ReactNode;
  variant?: Variant;
  size?: "sm" | "md";
  /** Show a mail icon before the label. */
  icon?: boolean;
  arrow?: boolean;
  className?: string;
}) {
  const [onPhone, setOnPhone] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the pointer type is only known in the browser
    setOnPhone(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return (
    <a
      href={onPhone ? mailto : gmail}
      {...(onPhone ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className={buttonClass(variant, size, className)}
    >
      {icon && <Icon name="mail" className="size-4" />}
      {children}
      {arrow && <Icon name="arrow" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </a>
  );
}
