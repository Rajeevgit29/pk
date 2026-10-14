import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS === "true" ? "/pk" : "";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves project sites from the repository name.
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
