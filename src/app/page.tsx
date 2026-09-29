import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { StatsBar } from "@/components/sections/StatsBar";
import { WhatWeDo } from "@/components/sections/WhatWeDo";

/** Home is a short introduction; Who We Are, Get Involved, Gallery, Blog etc. are their own pages. */
export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Manifesto />
      <WhatWeDo />
    </>
  );
}
