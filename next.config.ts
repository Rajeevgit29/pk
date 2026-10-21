import type { NextConfig } from "next";

// The site is served from its own domain (projectkitab.org), so it lives at the root, with no /pk.
const basePath = "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    // 90 is used for the hero photo so the children stay crisp; 75 everywhere else.
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
