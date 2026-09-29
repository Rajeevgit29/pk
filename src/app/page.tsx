import { BlogPreview } from "@/components/sections/BlogPreview";
import { GalleryStrip } from "@/components/sections/GalleryStrip";
import { GetInvolvedBand } from "@/components/sections/GetInvolvedBand";
import { Hero } from "@/components/sections/Hero";
import { Initiatives } from "@/components/sections/Initiatives";
import { Manifesto } from "@/components/sections/Manifesto";
import { StatsBar } from "@/components/sections/StatsBar";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhoWeAre } from "@/components/sections/WhoWeAre";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Manifesto />
      <WhatWeDo />
      <Initiatives />
      <WhoWeAre />
      <GetInvolvedBand />
      <GalleryStrip />
      <BlogPreview />
    </>
  );
}
