const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Adds the GitHub Pages project path to assets kept in /public. */
export function assetPath(src: string) {
  return src.startsWith("/") ? `${basePath}${src}` : src;
}
