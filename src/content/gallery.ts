import generated from "./gallery.generated.json";

export type GalleryPhoto = { src: string; full: string; alt: string; width?: number; height?: number };

/** Real photos produced by `npm run gallery` from photos/gallery/. */
export const galleryPhotos: GalleryPhoto[] = generated;

/** Branded tiles shown in the dome until real photos are added. */
const placeholders: GalleryPhoto[] = Array.from({ length: 8 }, (_, i) => ({
  src: `/gallery/placeholders/tile-${i + 1}.svg`,
  full: `/gallery/placeholders/tile-${i + 1}.svg`,
  alt: "Gallery photo coming soon",
}));

export const hasGalleryPhotos = galleryPhotos.length > 0;
export const domeImages = hasGalleryPhotos ? galleryPhotos : placeholders;
