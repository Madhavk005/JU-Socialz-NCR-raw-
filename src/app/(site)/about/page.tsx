import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { GlobalCta } from "@/components/ui/shared/GlobalCta";
import { AboutHero } from "@/features/about/components/AboutHero";
import { AboutBento } from "@/features/about/components/AboutBento";

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description: "JU Socialz — the official media team of JECRC University, NCR Campus Alwar. Our mandate, mission, culture, and verticals.",
  path: "/about",
});

export default function AboutPage() {

  return (
    <>
      <main>
        <AboutHero />
        <AboutBento />
      </main>
      
      <GlobalCta />
    </>
  );
}
