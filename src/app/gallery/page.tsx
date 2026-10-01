import type { Metadata } from "next";
import DomeGallery from "@/components/gallery/DomeGallery";
import { HandNote } from "@/components/Decor";
import { Icon } from "@/components/Icon";
import { domeImages, hasGalleryPhotos } from "@/content/gallery";
import { gallery } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: gallery.body,
};

export default function GalleryPage() {
  return (
    <>
      <section aria-labelledby="gallery-page-title" className="on-dark relative bg-abyss pt-32 text-white lg:pt-40">
        <div className="page-container relative flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/75">{gallery.eyebrow}</p>
            <h1 id="gallery-page-title" className="display mt-4 text-[clamp(2.4rem,5vw,4.4rem)]">
              {gallery.intro}
            </h1>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-white/80">{gallery.body}</p>
          </div>
          <p className="flex items-center gap-2 text-sm text-white/60">
            <Icon name="arrow" className="size-4 rotate-180" />
            Drag to explore · Click a photo to open it
            <Icon name="arrow" className="size-4" />
          </p>
          <HandNote
            lines={["Moments", "That Matter"]}
            arrow="down"
            className="absolute right-6 -top-6 hidden text-white/85 xl:block"
            textClassName="text-[2.1rem]"
            arrowClassName="ml-12"
          />
        </div>

        <div className="relative mt-6 h-[66svh] min-h-[28rem] w-full sm:h-[82svh] sm:min-h-[32rem]">
          <DomeGallery
            images={domeImages}
            overlayBlurColor="#011f27"
            grayscale={false}
            fit={0.62}
            minRadius={520}
            segments={34}
            imageBorderRadius="18px"
            openedImageBorderRadius="14px"
            openedImageWidth="min(92vw, 1100px)"
            openedImageHeight="min(78svh, 760px)"
          />
          {!hasGalleryPhotos && (
            <p className="pointer-events-none absolute inset-x-0 bottom-8 z-30 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/60">
              Photos coming soon
            </p>
          )}
        </div>
      </section>

    </>
  );
}
