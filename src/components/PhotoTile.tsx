import Image from "next/image";
import type { IconName, Photo } from "@/content/site";
import { Icon } from "./Icon";

/**
 * Shows a real photo when one is set in content/site.ts, otherwise a branded
 * placeholder (teal sunburst + icon) so the layout is complete while photos arrive.
 */
export function PhotoTile({
  photo,
  icon = "sparkle",
  sizes,
  tone = "teal",
  label = "Photo coming soon",
  className = "",
  showLabel = true,
  labelClassName = "bottom-2",
  imageClassName = "",
}: {
  photo: Photo;
  icon?: IconName;
  sizes: string;
  tone?: "teal" | "ocean";
  label?: string;
  className?: string;
  showLabel?: boolean;
  labelClassName?: string;
  /** e.g. "object-[80%_50%]" to keep the right-hand side of a wide photo in view */
  imageClassName?: string;
}) {
  if (photo) {
    return (
      <div className={`relative overflow-hidden bg-deep ${className}`}>
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className={`object-cover ${imageClassName}`} />
      </div>
    );
  }
  const bg =
    tone === "teal"
      ? "from-ocean via-deep to-petrol"
      : "from-bright/90 via-ocean to-deep";
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative isolate flex items-center justify-center overflow-hidden bg-linear-to-br ${bg} ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-[-40%] -z-10 opacity-[0.13]"
        style={{
          background: "repeating-conic-gradient(from 0deg at 50% 50%, #fff 0deg 2.2deg, transparent 2.2deg 15deg)",
          maskImage: "radial-gradient(circle at 50% 50%, transparent 0 14%, #000 15% 60%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, transparent 0 14%, #000 15% 60%, transparent 72%)",
        }}
      />
      <span className="flex size-[clamp(2.5rem,32%,4.5rem)] items-center justify-center rounded-full border border-white/35 bg-white/5 text-white/90 backdrop-blur-[1px]">
        <Icon name={icon} className="size-1/2" />
      </span>
      {showLabel && (
        <span className={`absolute ${labelClassName} left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.6rem] font-medium uppercase tracking-[0.18em] text-white/55`}>
          {label}
        </span>
      )}
    </div>
  );
}
