import type { ReactNode, SVGProps } from "react";
import type { IconName } from "@/content/site";

type ExtraIcon = "arrow" | "play" | "pin" | "menu" | "close" | "instagram" | "linkedin" | "youtube" | "mail" | "phone";

const paths: Record<IconName | ExtraIcon, ReactNode> = {
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  play: <path d="M9 6.5v11l9-5.5-9-5.5Z" fill="currentColor" stroke="none" />,
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" fill="currentColor" stroke="none" />
      <circle cx="12" cy="10" r="2.4" fill="var(--pin-hole, #04313c)" stroke="none" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: <path d="M6.6 3.5h2.6l1.4 4-2 1.3a11 11 0 0 0 6.6 6.6l1.3-2 4 1.4v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5V16M8 7.8v.1M11.5 16v-5.5M11.5 13c0-1.6 1-2.6 2.4-2.6s2.1.9 2.1 2.6V16" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.5 9.3 4.5 2.7-4.5 2.7V9.3Z" fill="currentColor" stroke="none" />
    </>
  ),
  book: (
    <>
      <path d="M12 6.5C10.2 5 7.6 4.5 4 4.8v13.4c3.6-.3 6.2.2 8 1.7 1.8-1.5 4.4-2 8-1.7V4.8c-3.6-.3-6.2.2-8 1.7Z" />
      <path d="M12 6.5v13.4" />
    </>
  ),
  rupee: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 7.5h7M8.5 10.5h7M10 7.5c3.2 0 3.2 6-1.5 6l5.5 3.5" />
    </>
  ),
  heart: <path d="M12 19.5s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 6.8a4.3 4.3 0 0 1 7.5 2.7c0 5.4-7.5 10-7.5 10Z" />,
  scales: (
    <>
      <path d="M12 4v16M8 20h8M5 7h14M12 4.5l-7 2.5M12 4.5l7 2.5" />
      <path d="M5 7 2.5 13a2.8 2.8 0 0 0 5 0L5 7ZM19 7l-2.5 6a2.8 2.8 0 0 0 5 0L19 7Z" />
    </>
  ),
  football: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m12 8.2 3.3 2.4-1.3 3.9H10l-1.3-3.9L12 8.2ZM12 8.2V3.6M15.3 10.6l4.3-1.4M14 14.5l2.7 3.6M10 14.5l-2.7 3.6M8.7 10.6 4.4 9.2" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5c.6 4.3 2.2 5.9 6.5 6.5-4.3.6-5.9 2.2-6.5 6.5-.6-4.3-2.2-5.9-6.5-6.5 4.3-.6 5.9-2.2 6.5-6.5Z" />
      <path d="M18.5 15.5c.3 1.9 1 2.6 3 3-2 .3-2.7 1-3 3-.3-2-1-2.7-3-3 2-.4 2.7-1.1 3-3Z" />
    </>
  ),
  people: (
    <>
      <circle cx="12" cy="7.5" r="2.8" />
      <circle cx="5.8" cy="9.5" r="2.2" />
      <circle cx="18.2" cy="9.5" r="2.2" />
      <path d="M7 19.5v-1.2a5 5 0 0 1 10 0v1.2M2 19.5v-.8A3.8 3.8 0 0 1 6.9 15M22 19.5v-.8a3.8 3.8 0 0 0-4.9-3.7" />
    </>
  ),
  volunteers: (
    <>
      <circle cx="8" cy="7" r="2.6" />
      <circle cx="16" cy="7" r="2.6" />
      <path d="M3 19v-1.5A4.5 4.5 0 0 1 7.5 13h1A4.5 4.5 0 0 1 13 17.5V19M11 19v-1.5a4.5 4.5 0 0 1 4.5-4.5h1a4.5 4.5 0 0 1 4.5 4.5V19" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="9.5" cy="6.5" rx="5.5" ry="2.3" />
      <path d="M4 6.5v4c0 1.3 2.5 2.3 5.5 2.3M4 10.5v4c0 1.3 2.5 2.3 5.5 2.3M15 6.5v2" />
      <ellipse cx="15.5" cy="12.5" rx="4.5" ry="2" />
      <path d="M11 12.5v5c0 1.1 2 2 4.5 2s4.5-.9 4.5-2v-5M11 15c0 1.1 2 2 4.5 2s4.5-.9 4.5-2" />
    </>
  ),
  school: (
    <>
      <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" />
      <path d="M7 11.5V16c1.3 1.3 3 2 5 2s3.7-.7 5-2v-4.5M21 9.5v5" />
    </>
  ),
  pencil: (
    <>
      <path d="m15.5 4.5 4 4L9 19H5v-4L15.5 4.5Z" />
      <path d="m13.5 6.5 4 4" />
    </>
  ),
  stage: (
    <>
      <path d="M12 4.5a3 3 0 0 1 3 3V11a3 3 0 0 1-6 0V7.5a3 3 0 0 1 3-3Z" />
      <path d="M6.5 11a5.5 5.5 0 0 0 11 0M12 16.5V20M8.5 20h7" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 10v4h3l8 4.5v-13L7 10H4Z" />
      <path d="M18 9.5a3.5 3.5 0 0 1 0 5M7.5 14l1.2 5h2.3l-.8-4" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V20H4v-9.5Z" />
      <path d="M10 20v-5.5h4V20" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20c4-.5 6-2 7.5-4.5L18 5.5a1.8 1.8 0 0 0-2.5-2.5L6 10C4.5 12 4 15 4 20Z" />
      <path d="M13 6.5 17 10" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.3 0 2-.8 2-1.8 0-1.4-1.2-1.7-1.2-2.9 0-1 .8-1.8 1.9-1.8h2.1a3.7 3.7 0 0 0 3.7-3.7C20.5 6.6 16.7 3.5 12 3.5Z" />
      <circle cx="7.8" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="7.3" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="7.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  whistle: (
    <>
      <circle cx="9" cy="14" r="5" />
      <path d="M12.5 10.5 20 6.5v4l-5.5 1.8M9 14h.01" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 17.5h6M10 20.5h4M12 3.5a6 6 0 0 0-3.5 10.9c.6.5 1 1.3 1 2.1v1h5v-1c0-.8.4-1.6 1-2.1A6 6 0 0 0 12 3.5Z" />
    </>
  ),
  handshake: (
    <>
      <path d="m3 11 4-4 3 1 2-1 3 0 4 4M3 11l5 5c.8.8 2 .8 2.8 0M21 11l-5.5 5.5c-.8.8-2 .8-2.8 0l-3-3" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
    </>
  ),
};

export function Icon({ name, ...props }: { name: IconName | ExtraIcon } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
