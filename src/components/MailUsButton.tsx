"use client";

import { useEffect, useState } from "react";
import { buttonClass } from "./ButtonLink";
import { Icon } from "./Icon";

/**
 * "Mail Us": on computers it opens Gmail's compose window in a new tab, because a plain email link
 * does nothing when no email app is set up (common on laptops). On phones and tablets it uses the
 * email link, which opens the phone's mail app.
 */
export function MailUsButton({ mailto, gmail, className = "" }: { mailto: string; gmail: string; className?: string }) {
  const [onPhone, setOnPhone] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the pointer type is only known in the browser
    setOnPhone(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return (
    <a
      href={onPhone ? mailto : gmail}
      {...(onPhone ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className={buttonClass("solid", "md", className)}
    >
      <Icon name="mail" className="size-4" />
      Mail Us
    </a>
  );
}
